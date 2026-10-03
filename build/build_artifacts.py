#!/usr/bin/env python3
#
# Script to build Darwin Core maintained artifacts.
# Adapted from https://github.com/gbif/rs.gbif.org/blob/master/scripts/build-xml.py to
# build in the Darwin Core GitHub repository

import re
import requests
import json
import os
import sys
import shutil
import tempfile
import filecmp
import copy
import csv
from pathlib import Path
from collections import defaultdict
from dataclasses import dataclass, field
from typing import Any
import hashlib
import io
from urllib.request import Request, urlopen
from urllib.error import URLError
import pandas as pd
import yaml
import html
import xml.etree.ElementTree as ET
from datetime import date, datetime
from contextlib import redirect_stdout
from jinja2 import FileSystemLoader, Environment
from frictionless import Schema
from jsonschema import Draft4Validator, FormatChecker
from referencing import Registry
from referencing.jsonschema import DRAFT4

import dwcterms

# -----------------
# Configuration section
# -----------------
DEFAULT_LANGUAGES = ['en', 'ar', 'cs', 'de', 'es', 'fr', 'ja', 'ko', 'pt', 'ru', 'zh-Hant']

# -----------------
# Command line arguments
# -----------------
arg_vals = sys.argv[1:]


def option_value(*names, default=None):
    """Return the value following the first matching command-line option."""
    for name in names:
        if name in arg_vals:
            index = arg_vals.index(name)
            try:
                return arg_vals[index + 1]
            except IndexError as exc:
                raise SystemExit(f"Missing value for {name}") from exc
    return default


# Source-related command-line options are overrides. Their defaults come from
# the YAML configuration so that the configuration can describe a complete
# reproducible build.
github_branch_override = option_value('--branch', default=None)
github_user_override = option_value('--ghuser', default=None)

# Local checkout of rs.tdwg.org.  --rspath matches build-webpages.py;
# --rs-path is retained for backward compatibility with this script.
local_path_to_rs_override = option_value('--rspath', '--rs-path', default=None)
config_path = option_value('--config', default=None)

# Only allow creating a new version (new file) if this flag is present.
permitNewVersion = '--permit-new-version' in arg_vals

scriptDir = os.path.dirname(os.path.realpath(__file__))
repoRoot = os.path.dirname(scriptDir)
# During generation this is redirected to a temporary staging tree.
outputRoot = repoRoot


def open_build_log():
    """Open a timestamped detail log beneath build/logs/."""
    log_dir = os.path.join(scriptDir, 'logs')
    os.makedirs(log_dir, exist_ok=True)
    timestamp = datetime.now().strftime('%Y%m%d-%H%M%S')
    log_path = os.path.join(log_dir, f'build_artifacts_{timestamp}.log')
    return log_path, open(log_path, 'w', encoding='utf-8')


def log_line(log_file, message=''):
    print(message, file=log_file, flush=True)


def is_missing(value):
    """Return True for None, pandas NaN/NA, or an empty string."""
    if value is None:
        return True
    if isinstance(value, str):
        return value == ''
    try:
        return bool(pd.isna(value))
    except (TypeError, ValueError):
        return False


def xml_escape(value):
    """Convert a scalar value to XML-safe text; missing values become empty."""
    if is_missing(value):
        return ''
    return html.escape(str(value))


class DwcaXml:
    def __init__(self, terms, xmlTemplate, xmlTerms=None, gbifAlternatives=None,
                 vocabularyCache=None, online=True, preloadedVocabularyCache=None,
                 relationStyle='qrg', relationConfig=None, relationBase=None):
        """
        Tables of terms.

        Keyword arguments:
        terms -- the loaded dwcterms term lists
        xmlTemplate -- XML header
        xmlTerms -- terms to include
        gbifAlternatives -- GBIF Vocabulary API URL template
        vocabularyCache -- build-directory-relative cache file for API alternative labels
        online -- if True, fetch vocabulary alternatives from the API and refresh the cache;
                  if False, use only the local cache
        relationStyle -- configured dc:relation strategy
        relationConfig -- configuration for the selected relation strategy
        relationBase -- artifact-specific base URL used by some relation strategies
        """

        self.terms = terms
        self.xmlTemplate = xmlTemplate
        self.xmlTerms = xmlTerms
        self.gbifAlternatives = gbifAlternatives
        self.vocabularyCache = vocabularyCache
        self.online = online
        self.preloadedVocabularyCache = preloadedVocabularyCache
        self.relationStyle = relationStyle
        self.relationConfig = relationConfig or {}
        self.relationBase = relationBase
        pass

    def t_xml(self, row, key, l):
        """
        Retrieve the value of the given term in the given locale, escaped for XML.
        """
        if key+l in row and not is_missing(row[key+l]):
            return xml_escape(row[key+l])
        else:
            return None

    def create_extension_xml(self, languages, file_template=None, *, file_output=None,
                             issued_date=None, source_iri=None, enforce_version_guard=True):
        """Build a Darwin Core core/extension XML file.

        ``file_output``/``issued_date`` are used by the schema change detector to
        render a candidate before a release version has been authorized.
        ``source_iri`` is written only on the mutable canonical representation.
        """

        ratification_date = issued_date or self.terms.document_configuration_yaml['doc_modified']
        if file_output is None:
            file_output = os.path.join(
                outputRoot,
                file_template + ratification_date + ".xml"
            )
        os.makedirs(os.path.dirname(file_output), exist_ok=True)

        if enforce_version_guard and not os.path.isfile(file_output) and not permitNewVersion:
            raise Exception("Standard has a new version, but %s doesn't exist. Manual review required." % file_output)

        with open(file_output, 'w', encoding='utf-8') as output_file:
            # Open the XML declaration file
            template_file = open(scriptDir + '/' + self.xmlTemplate, 'r')
            # Write the entire XML declaration section to the output file
            header = template_file.read()
            header = header.replace('{issued_date}', ratification_date)
            # The templates use dcterms:isPartOf. Ensure that prefix is declared,
            # and add provenance only to the mutable canonical schema.
            if 'xmlns:dcterms=' not in header:
                header = header.replace(
                    '<extension ',
                    "<extension xmlns:dcterms='http://purl.org/dc/terms/' ",
                    1,
                )
            if source_iri:
                match = re.search(r'<extension\b[^>]*', header, flags=re.DOTALL)
                if match and 'dcterms:source=' not in match.group(0):
                    root_start = match.group(0) + f"\n  dcterms:source='{xml_escape(source_iri)}'"
                    header = header[:match.start()] + root_start + header[match.end():]
            output_file.write(header)

            # Process the list of terms for the extension combining properties from the
            # extension term list with the properties of the term definitions from Darwin
            # Core.

            # Load the terms from the Extension term list file
            termlist = pd.read_csv(
                scriptDir + '/' + self.xmlTerms,
                keep_default_na=False
            )
            previous_group = 'None'

            for ext_index,ext_item in termlist.iterrows():
                # Process each row in the extension term list. The file must have the
                # following fields in the given order:
                #     class,iri,type,thesaurus,description,comments,examples,required
                # 1) The iri field must be populated.
                # 2) If there is supposed to be a datatype other than string for the term,
                #    that type must be provided.
                # 3) If there is supposed to be a controlled vocabulary for the term, the
                #    URL to the location of the controlled vocabulary must be provided.
                # 4) If there is supposed to be a definition, comment, or example for the
                #    term that differs from that in the standard, the custom value must be
                #    provided.
                # 5) If a term is required to be mapped to a field, the column 'required'
                #    must be populated with 'true'.

                # Find the term from the rs.tdwg.org data
                term_iri = str(ext_item['iri']).strip()

                try:
                    term_data = self.terms.get_term(term_iri)
                except (ValueError, IndexError) as exc:
                    raise ValueError(
                        f"Unable to build extension field {ext_index}. "
                        f"The IRI from {self.xmlTerms} was not found in the loaded term metadata:\n"
                        f"  {term_iri!r}"
                    ) from exc

                # Always set the group based on the value in the Extension term list
                group = ext_item['group']

                # Get the term name, namespace etc
                qualName = ext_item['iri']
                name = term_data['term_localName']
                namespace = term_data['pref_ns_uri']

                # The datatype, if it is other than 'string' must come from the type field
                # in the Extension term list file
                datatype = ext_item['type']

                # The thesaurus, if there is one, must come from the type field in the
                # Extension term list file
                thesaurus = ext_item['thesaurus']

                # The English label for the term
                label = term_data['label']

                # Construct dc:relation according to the configured strategy.
                dc_relation = None
                if self.relationStyle == 'qrg':
                    namespace_map = self.relationConfig.get('namespaces', {})
                    template = namespace_map.get(namespace)
                    if template:
                        dc_relation = template.format(
                            name=name,
                            prefix=term_data['pref_ns_prefix'],
                            namespace=namespace,
                            iri=qualName
                        )
                elif self.relationStyle == 'term_list':
                    if not self.relationBase:
                        raise ValueError(
                            "relation_style 'term_list' requires relation_base "
                            f"for artifact using {self.xmlTemplate}"
                        )
                    template = self.relationConfig.get(
                        'template',
                        '{base}#{prefix}_{name}'
                    )
                    dc_relation = template.format(
                        base=self.relationBase.rstrip('/'),
                        name=name,
                        prefix=term_data['pref_ns_prefix'],
                        namespace=namespace,
                        iri=qualName
                    )
                else:
                    raise ValueError(
                        f"Unknown relation_style {self.relationStyle!r} "
                        f"for artifact using {self.xmlTemplate}"
                    )

                # Get the term definition (dc:description) from the description field of
                # the Extension term list file. Otherwise use the description from the standard.
                dc_description = ext_item['description']
                if is_missing(dc_description):
                    dc_description = term_data['rdfs_comment']

                # Get the term comments from the description field of the Extension
                # term list file. Otherwise use the comments from the standard.
                comments = ext_item['comments']
                if is_missing(comments):
                    comments = term_data['dcterms_description']

                # Get the term examples from the description field of the Extension term
                # list file. Otherwise use the examples from the standard.
                examples = ext_item['examples']
                if is_missing(examples):
                    examples = term_data['examples']

                # Set the attribute 'required' to 'false' unless it is provided in the
                # Extension term list file
                required = ext_item['required']
                if is_missing(required) or not required:
                    required = 'false'
                else:
                    required = 'true'

                # HTML encode description, comment, and examples
                dc_description = xml_escape(dc_description)
                comments = xml_escape(comments)
                examples = xml_escape(examples)

                # Construct the property entry for the output file
                s = f"    <property group='{group}' "
                s += f"name='{name}' "
                if datatype is not None and datatype.strip()!='':
                    s += f"type='{datatype}' "
                if thesaurus is not None and thesaurus.strip()!='':
                    s += f"thesaurus='{thesaurus}' "
                s += f"namespace='{namespace}' "
                s += f"qualName='{qualName}' "
                s += f"label='{label}' "
                s += f"dc:relation='{dc_relation}' "
                s += f"dc:description='{dc_description}' "
                if comments:
                    s += f"comments='{comments}' "
                if examples:
                    s += f"examples='{examples}' "
                s += f"required='{required}'"

                # Add translations
                hasLang = False
                for lang in languages:
                    # Currently the IPT only supports Traditional Chinese with the code zh.
                    if lang == 'en':
                        continue
                    elif lang == 'zh-Hant':
                        xmllang = 'zh'
                    elif lang == 'zh-Hans':
                        continue
                    else:
                        xmllang = lang

                    l_label = self.t_xml(term_data, 'label_', lang)
                    l_description = self.t_xml(term_data, 'rdfs_comment_', lang)
                    l_comments = self.t_xml(term_data, 'dcterms_description_', lang)
                    l_examples = self.t_xml(term_data, 'examples_', lang)

                    if l_label is not None or l_comments is not None or l_description is not None or l_examples is not None:
                        if not hasLang:
                            s += ">\n"
                            hasLang = True

                        s += f"      <translation xml:lang='{xmllang}'"
                        if l_label is not None:
                            s += f" label='{l_label}'"
                        if l_comments is not None:
                            s += f" comments='{l_comments}'"
                        if l_examples is not None:
                            s += f" examples='{l_examples}'"
                        if l_description is not None:
                            s += f" dc:description='{l_description}'"
                        s += "/>\n"
                    #else:
                    #    with pd.option_context('display.max_rows', None, 'display.max_columns', None):
                    #        print("No translations in "+lang, term_data)

                if hasLang:
                    s += "    </property>\n"
                else:
                    s += "/>\n"

                if group != previous_group:
                    output_file.write(f'\n    <!-- {group} -->\n')

                output_file.write(s)
                previous_group = group

            output_file.write("</extension>\n")
            output_file.close()

    def _load_vocabulary_cache(self):
        """Load the configured GBIF alternative-label cache."""
        if not self.vocabularyCache:
            raise ValueError("Vocabulary artifact has no configured cache file.")

        cache_path = os.path.join(scriptDir, self.vocabularyCache)
        # An online run rebuilds the cache from the current API responses so that
        # removed concepts cannot survive as stale cache entries.
        if self.online:
            return cache_path, {"source": self.gbifAlternatives, "concepts": {}}

        if not os.path.isfile(cache_path):
            raise FileNotFoundError(
                f"Offline vocabulary cache not found: {cache_path}. "
                "Run once in online mode to populate it."
            )

        with open(cache_path, 'r', encoding='utf-8') as cache_file:
            cache = json.load(cache_file)
        if not isinstance(cache, dict) or not isinstance(cache.get('concepts'), dict):
            raise ValueError(f"Invalid vocabulary cache structure: {cache_path}")
        return cache_path, cache

    @staticmethod
    def _write_vocabulary_cache(cache_path, cache):
        """Write a vocabulary cache atomically."""
        os.makedirs(os.path.dirname(cache_path), exist_ok=True)
        temporary_path = cache_path + '.tmp'
        with open(temporary_path, 'w', encoding='utf-8') as cache_file:
            json.dump(cache, cache_file, ensure_ascii=False, indent=2, sort_keys=True)
            cache_file.write('\n')
        os.replace(temporary_path, cache_path)

    def _alternative_labels(self, controlled_value_string, cache):
        """Get alternative labels from GBIF online or from the local cache offline."""
        concepts = cache['concepts']

        if self.online:
            url = self.gbifAlternatives % controlled_value_string
            response = requests.get(url, timeout=30)
            response.raise_for_status()
            payload = response.json()
            alternatives = payload.get('results')
            if not isinstance(alternatives, list):
                raise ValueError(f"Unexpected GBIF Vocabulary API response from {url}")

            # The XML generator uses only these two fields.  Caching only them keeps
            # the build input independent of unrelated GBIF API response details.
            cached_alternatives = []
            for alternative in alternatives:
                if 'value' not in alternative or 'language' not in alternative:
                    raise ValueError(f"Incomplete alternative label returned by {url}")
                cached_alternatives.append({
                    'value': alternative['value'],
                    'language': alternative['language'],
                })
            concepts[controlled_value_string] = cached_alternatives
            return cached_alternatives

        if controlled_value_string not in concepts:
            raise KeyError(
                f"Offline vocabulary cache has no entry for {controlled_value_string!r}. "
                "Run once in online mode to refresh the cache."
            )
        return concepts[controlled_value_string]

    def create_vocabulary_xml(self, languages, file_template):
        """Build an Darwin Core Vocabulary XML file

        Parameters
        -----------
        file_output : str
            The relative path to the file to write the resulting file.
            (e.g., "vocabulary/dwc/pathway_")
        """

        # Use ratification date in filenames for stability.
        ratification_date = self.terms.document_configuration_yaml['doc_modified']

        file_output = os.path.join(
            outputRoot,
            file_template + ratification_date + ".xml"
        )
        os.makedirs(os.path.dirname(file_output), exist_ok=True)

        if not os.path.isfile(file_output) and not permitNewVersion:
            raise Exception("Standard has a new version, but %s doesn't exist.  Manual review required." % file_output)

        if self.preloadedVocabularyCache is not None:
            cache_path = (_stage_path(os.path.join(scriptDir, self.vocabularyCache))
                          if self.online else os.path.join(scriptDir, self.vocabularyCache))
            vocabulary_cache = self.preloadedVocabularyCache
        else:
            cache_path, vocabulary_cache = self._load_vocabulary_cache()

        with open(file_output, 'w', encoding='utf-8') as output_file:
            # Open the XML declaration file
            template_file = open(scriptDir + '/' + self.xmlTemplate, 'r')
            # Write the entire XML declaration section to the output file
            header = template_file.read()
            header = header.replace('{issued_date}', ratification_date)
            output_file.write(header)
            output_file.write("\n")

            # Process each term in the vocabulary
            for term_index,term in self.terms.terms_sorted_by_localname.iterrows():
                name = term['term_localName']
                namespace = term['pref_ns_uri']
                qualName = term['term_iri']
                controlled_value_string = term['controlled_value_string']
                dc_issued = term['term_created']
                dc_title = xml_escape(term['label'])
                dc_description = xml_escape(term['definition'])
                comments = xml_escape(term['notes'])
                usage = xml_escape(term['usage'])

                if controlled_value_string == '':
                    continue

                s  = f"  <concept"
                s += f"\n    dc:identifier='{controlled_value_string}'"
                s += f"\n    dc:URI='{qualName}'"
                s += f"\n    dc:subject='{qualName}'"
                s += f"\n    dc:relation='https://doi.org/10.3897/biss.3.38084'"
                s += f"\n    dc:issued='{dc_issued}'"
                s += f"\n    dc:description='{dc_description}'"
                if comments:
                    s += f"\n    comments='{comments}'"
                s += f">\n"

                s += f"    <preferred>\n"
                for lang in languages:
                    if 'label_'+lang in term:
                        title_lang = xml_escape(term['label_'+lang])
                        # Currently the IPT only supports Traditional Chinese with the code zh.
                        if lang == 'zh-Hant':
                            lang = 'zh'
                        elif lang == 'zh-Hans':
                            continue
                        if title_lang.strip() != '':
                            s += f"      <term dc:source='Darwin Core' dc:title='{title_lang}' xml:lang='{lang}'/>\n"
                s += f"    </preferred>\n"

                alternatives_json = self._alternative_labels(
                    controlled_value_string, vocabulary_cache
                )
                present = False
                for alt in alternatives_json:
                    if not present:
                        s += f"    <alternative>\n"
                        present = True
                    title = xml_escape(alt['value'])
                    lang = alt['language'].split('-')[0]
                    s += f"      <term dc:source='GBIF Vocabulary Server' dc:title='{title}' xml:lang='{lang}'/>\n"
                if present:
                    s += f"    </alternative>\n"

                s += f"  </concept>\n"
                s += f"\n"

                output_file.write(s)

            output_file.write("</thesaurus>\n")
            output_file.close()

        if self.online:
            self._write_vocabulary_cache(cache_path, vocabulary_cache)
            print(f"Updated vocabulary cache: {cache_path}")

# -----------------
# Configuration-driven build
# -----------------

def load_build_configuration(path):
    """Load and minimally validate the YAML build configuration."""
    with open(path, 'r', encoding='utf-8') as config_file:
        config = yaml.safe_load(config_file)

    if not isinstance(config, dict):
        raise ValueError(f"Build configuration must be a YAML mapping: {path}")

    artifacts = config.get('artifacts')
    if not isinstance(artifacts, list):
        raise ValueError("Build configuration must contain an 'artifacts' list.")

    return config


def _schema_publication(artifact):
    """Return configured publication paths for a maintained DwC-A schema."""
    publication = artifact.get('publication') or {}
    canonical_path = str(publication.get('canonical_path', '')).strip().lstrip('/')
    if not canonical_path:
        raise ValueError("missing publication.canonical_path")
    if not canonical_path.endswith('.xml'):
        raise ValueError("publication.canonical_path must end in .xml")
    canonical_iri = 'http://rs.tdwg.org/' + canonical_path
    stem, extension = os.path.splitext(canonical_path)
    return canonical_path, canonical_iri, stem, extension


def _schema_delivery_paths(artifact, release_date):
    """Return local canonical/version deliverables and their public version IRI."""
    canonical_path, canonical_iri, stem, extension = _schema_publication(artifact)
    version_path = f"{stem}_{release_date}{extension}"
    # Stage schema publication deliverables under dwca/, alongside the other
    # maintained Darwin Core schema artifacts, rather than under dist/.
    local_canonical = os.path.join(repoRoot, canonical_path)
    local_version = os.path.join(repoRoot, version_path)
    version_iri = 'http://rs.tdwg.org/' + version_path
    return local_canonical, local_version, canonical_iri, version_iri


def _load_published_schema(artifact, local_path_to_rs):
    """Load the canonical schema from rs.tdwg.org; return None when not yet published."""
    canonical_path, canonical_iri, _, _ = _schema_publication(artifact)
    if local_path_to_rs:
        path = os.path.join(os.path.abspath(os.path.expanduser(local_path_to_rs)), canonical_path)
        if not os.path.isfile(path):
            return None
        with open(path, 'r', encoding='utf-8') as handle:
            return handle.read()
    response = requests.get(canonical_iri, timeout=30)
    if response.status_code == 404:
        return None
    response.raise_for_status()
    return response.text


def _schema_comparison_form(xml_text):
    """Canonicalize substantive schema XML, ignoring release bookkeeping metadata."""
    # These two attributes describe the released representation rather than the
    # schema definition. They must not manufacture a substantive change.
    text = re.sub(r"\s+dc:issued=(['\"]).*?\1", '', xml_text)
    text = re.sub(r"\s+dcterms:source=(['\"]).*?\1", '', text)
    # Older templates used dcterms:isPartOf without declaring the prefix. Repair
    # that in-memory so an already-published legacy canonical can still compare.
    if 'dcterms:' in text and 'xmlns:dcterms=' not in text:
        text = text.replace(
            '<extension ',
            "<extension xmlns:dcterms='http://purl.org/dc/terms/' ",
            1,
        )
    try:
        return ET.canonicalize(xml_data=text, strip_text=True)
    except Exception as exc:
        raise ValueError(f"schema XML cannot be canonicalized for comparison: {exc}") from exc


def _schema_changed(candidate_text, published_text):
    """Return True if the candidate differs substantively from the published canonical."""
    if published_text is None:
        return True
    return _schema_comparison_form(candidate_text) != _schema_comparison_form(published_text)


def _published_schema_version_iri(published_text):
    """Return the immutable version IRI identified by a published canonical schema."""
    if published_text is None:
        return None
    match = re.search(r"\bdcterms:source=(['\"])(.*?)\1", published_text, flags=re.DOTALL)
    if not match or not match.group(2).strip():
        raise ValueError(
            "published canonical schema has no dcterms:source identifying its immutable version"
        )
    return html.unescape(match.group(2).strip())


def _schema_version_date(version_iri):
    """Extract the YYYY-MM-DD release date from an immutable schema version IRI."""
    match = re.search(r'_(\d{4}-\d{2}-\d{2})\.xml$', str(version_iri))
    if not match:
        raise ValueError(f"schema version IRI has no YYYY-MM-DD version suffix: {version_iri}")
    return match.group(1)


def _expected_output_path(terms, artifact):
    """Return the versioned output path implied by the artifact metadata."""
    ratification_date = terms.document_configuration_yaml['doc_modified']
    return os.path.join(outputRoot, artifact['output'] + ratification_date + '.xml')


def _check_output_parent(path):
    """Check that the nearest existing parent of path is writable without creating anything."""
    parent = os.path.dirname(path)
    probe = parent
    while probe and not os.path.exists(probe):
        next_probe = os.path.dirname(probe)
        if next_probe == probe:
            break
        probe = next_probe
    if not probe or not os.path.isdir(probe):
        return f"No existing parent directory for output: {path}"
    if not os.access(probe, os.W_OK):
        return f"Output location is not writable: {probe}"
    return None



def _all_term_list_metadata(local_path_to_rs, github_user, github_branch):
    """Load the complete term-list registry so missing IRIs can be traced to their source file."""
    if local_path_to_rs:
        registry_path = os.path.join(
            os.path.abspath(os.path.expanduser(local_path_to_rs)),
            'term-lists', 'term-lists.csv'
        )
    else:
        registry_path = (
            f"https://raw.githubusercontent.com/{github_user}/rs.tdwg.org/"
            f"{github_branch}/term-lists/term-lists.csv"
        )
    return pd.read_csv(registry_path, keep_default_na=False, dtype=str)


def _missing_term_message(name, term_iri, term_list_path, row_number,
                          source_term_lists, registry, local_path_to_rs,
                          github_user, github_branch):
    """Explain where metadata for an unresolved term should be found."""
    details = [
        f"{name}: required term metadata not loaded",
        f"    IRI: {term_iri}",
        f"    Required by: {term_list_path} (data row {row_number})",
    ]

    matches = registry[
        registry['vann_preferredNamespaceUri'].apply(
            lambda ns: bool(ns) and term_iri.startswith(ns)
        )
    ].copy()

    if matches.empty:
        details.append(
            "    Expected metadata: could not determine the owning term list "
            "from term-lists/term-lists.csv"
        )
        return "\n".join(details)

    matches['_namespace_length'] = matches['vann_preferredNamespaceUri'].str.len()
    owner = matches.sort_values('_namespace_length', ascending=False).iloc[0]
    database = owner['database']

    if local_path_to_rs:
        expected = os.path.join(
            os.path.abspath(os.path.expanduser(local_path_to_rs)),
            database, f"{database}.csv"
        )
    else:
        expected = (
            f"https://raw.githubusercontent.com/{github_user}/rs.tdwg.org/"
            f"{github_branch}/{database}/{database}.csv"
        )

    details.append(f"    Expected metadata: {expected}")
    if database not in source_term_lists:
        details.append(
            f"    Configuration: add {database!r} to source.term_lists "
            f"for {name!r} if this artifact is intended to use that namespace"
        )
    else:
        details.append(
            f"    Configuration already loads {database!r}; check that the term "
            "exists there with the expected term_localName"
        )
    return "\n".join(details)

def _csv_derivative_basename(artifact):
    output_name = os.path.basename(artifact['output'].rstrip('_'))
    if artifact['type'] == 'core':
        return f"{output_name}_core"
    if artifact['type'] == 'extension':
        return f"{output_name}_extension"
    raise ValueError(f"CSV derivatives are not supported for artifact type {artifact['type']!r}")

def _csv_derivative_paths(artifact):
    basename = _csv_derivative_basename(artifact)
    return (os.path.join(outputRoot, 'dist', 'dwc-a', f"{basename}_horizontal.csv"),
            os.path.join(outputRoot, 'dist', 'dwc-a', f"{basename}_vertical.csv"))

def _schema_field_names(terms, term_list_path):
    termlist = pd.read_csv(term_list_path, keep_default_na=False, dtype=str)
    names = []
    for row_index, row in termlist.iterrows():
        term_iri = str(row['iri']).strip()
        try:
            term_data = terms.get_term(term_iri)
        except (ValueError, IndexError) as exc:
            raise ValueError(f"Unable to resolve CSV field {row_index + 1}: {term_iri!r}") from exc
        names.append(str(term_data['term_localName']))
    return names

def create_csv_derivatives(terms, artifact):
    term_list_path = os.path.join(scriptDir, artifact['term_list'])
    field_names = _schema_field_names(terms, term_list_path)
    horizontal_path, vertical_path = _csv_derivative_paths(artifact)
    os.makedirs(os.path.dirname(horizontal_path), exist_ok=True)
    pd.DataFrame(columns=field_names).to_csv(horizontal_path, index=False, encoding='utf-8', lineterminator='\n')
    pd.DataFrame(field_names).to_csv(vertical_path, index=False, header=False, encoding='utf-8', lineterminator='\n')
    return horizontal_path, vertical_path


def _configured_term_source(config, source_name):
    """Return the term databases in a named build_artifacts.yaml term source."""
    term_sources = config.get('term_sources', {})
    if not isinstance(term_sources, dict):
        raise ValueError("term_sources must be a mapping of named term-source collections")
    if source_name not in term_sources:
        raise ValueError(f"term_sources has no collection named {source_name!r}")
    databases = term_sources[source_name]
    if not isinstance(databases, list) or not databases:
        raise ValueError(f"term_sources.{source_name} must be a non-empty list")
    cleaned = [str(value).strip() for value in databases]
    if any(not value for value in cleaned):
        raise ValueError(f"term_sources.{source_name} contains an empty database name")
    if len(cleaned) != len(set(cleaned)):
        raise ValueError(f"term_sources.{source_name} declares a database more than once")
    return cleaned


def _recommended_list_of_terms(terms):
    """Return only currently recommended terms from an assembled Darwin Core List of Terms."""
    all_terms = terms.terms_sorted_by_localname.copy()
    if 'term_deprecated' not in all_terms.columns:
        raise ValueError(
            "Loaded term metadata has no 'term_deprecated' column; "
            "cannot determine the currently recommended List of Terms."
        )
    return all_terms[all_terms['term_deprecated'].apply(is_missing)].copy()


def _list_of_terms_csv_paths(terms):
    """Return every unversioned CSV derivative path for the recommended Darwin Core List of Terms."""
    recommended_terms = _recommended_list_of_terms(terms)
    paths = [
        os.path.join(repoRoot, 'dist', 'simple_dwc_horizontal.csv'),
        os.path.join(repoRoot, 'dist', 'simple_dwc_vertical.csv'),
    ]
    prefixes = sorted({
        str(prefix).strip()
        for prefix in recommended_terms['pref_ns_prefix']
        if str(prefix).strip()
    }, key=str.lower)
    paths.extend(
        os.path.join(repoRoot, 'dist', f'{prefix}_vertical.csv')
        for prefix in prefixes
    )
    return paths


def create_list_of_terms_csv_derivatives(terms):
    """Build simple-term and per-namespace CSVs from currently recommended Darwin Core terms."""
    all_terms = _recommended_list_of_terms(terms)
    all_terms = all_terms.sort_values(
        by='term_localName', key=lambda column: column.astype(str).str.lower(),
        kind='stable'
    )

    rdf_property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'
    simple_terms = all_terms[
        (all_terms['rdf_type'] == rdf_property)
        & (all_terms['tdwgutility_usageScope'] == 'simple')
    ]
    simple_names = simple_terms['term_localName'].astype(str).tolist()

    dist_dir = os.path.join(outputRoot, 'dist')
    os.makedirs(dist_dir, exist_ok=True)
    horizontal_path = os.path.join(dist_dir, 'simple_dwc_horizontal.csv')
    vertical_path = os.path.join(dist_dir, 'simple_dwc_vertical.csv')
    pd.DataFrame(columns=simple_names).to_csv(
        horizontal_path, index=False, encoding='utf-8', lineterminator='\n'
    )
    pd.DataFrame(simple_names).to_csv(
        vertical_path, index=False, header=False, encoding='utf-8', lineterminator='\n'
    )

    # The per-namespace derivatives are property lists, not complete namespace
    # inventories. Exclude class terms and any other non-property resources.
    property_terms = all_terms[all_terms['rdf_type'] == rdf_property]

    namespace_paths = []
    prefixes = sorted({
        str(prefix).strip()
        for prefix in property_terms['pref_ns_prefix']
        if str(prefix).strip()
    }, key=str.lower)
    for prefix in prefixes:
        namespace_terms = property_terms[property_terms['pref_ns_prefix'] == prefix]
        names = namespace_terms['term_localName'].astype(str).tolist()
        path = os.path.join(dist_dir, f'{prefix}_vertical.csv')
        pd.DataFrame(names).to_csv(
            path, index=False, header=False, encoding='utf-8', lineterminator='\n'
        )
        namespace_paths.append(path)

    return [horizontal_path, vertical_path] + namespace_paths



class TermList:
    def __init__(self, terms, vocab_type, categories=None, versions_df=None):
        """Render List-of-Terms documentation from preflight-validated metadata."""
        # Keep renderer-specific ordering local: the same DwcTerms object is also
        # reused by other artifact generators in this build.
        self.terms = copy.copy(terms)
        self.terms.terms_sorted_by_localname = terms.terms_sorted_by_localname.copy()
        self.terms.terms_sorted_by_label = terms.terms_sorted_by_label.copy()
        self._normalize_term_ordering()
        self.vocab_type = vocab_type
        self.versions_df = versions_df
        categories = categories or [{'iri': '', 'label': 'Vocabulary', 'comment': '', 'id': 'vocabulary'}]
        self.organized_in_categories = categories != [{'iri': '', 'label': 'Vocabulary', 'comment': '', 'id': 'vocabulary'}]
        self.display_order = [item.get('iri', '') for item in categories]
        self.display_label = [item.get('label', '') for item in categories]
        self.display_comments = [item.get('comment', '') for item in categories]
        self.display_id = [item.get('id', '') for item in categories]

    def _normalize_term_ordering(self):
        """Make List-of-Terms ordering deterministic when sort keys are tied.

        DwcTerms exposes data frames sorted by local name and by label, but terms
        from different namespaces can share the same local name or label.  Their
        relative order must not depend on pandas' handling of equal sort keys or
        on the order in which source term lists happened to be assembled.

        Use the namespace prefix as an explicit secondary key.  This keeps the
        primary alphabetical ordering unchanged while giving counterpart terms a
        stable, predictable order (for example dwc before dwciri, eco before
        ecoiri, and chrono before chronoiri).
        """
        local = self.terms.terms_sorted_by_localname
        self.terms.terms_sorted_by_localname = local.sort_values(
            by=['term_localName', 'pref_ns_prefix'],
            key=lambda column: column.astype(str).str.lower(),
            kind='stable',
        ).reset_index(drop=True)

        label = self.terms.terms_sorted_by_label
        self.terms.terms_sorted_by_label = label.sort_values(
            by=['label', 'pref_ns_prefix', 'term_localName'],
            key=lambda column: column.astype(str).str.lower(),
            kind='stable',
        ).reset_index(drop=True)

    def t(self, key):
        """
        Retrieve the translation for the given dictionary key.
        """
        if key in self.dictionary:
            return self.dictionary[key]
        else:
            return key

    def t_val(self, row, key, l):
        """
        Retrieve the value of the given term in the given locale.  Fall back to English.
        """
        if key+l in row and row[key+l] != '':
            return row[key+l]
        else:
            return row[key]

    @staticmethod
    def first(row, column_names):
        """
        Return the value of the first extant column in the row.
        """
        for name in column_names:
            if name in row:
                return row[name]

    @staticmethod
    def createLinks(text):
        """
        replace URL with link (function used with Audubon Core list of terms build script)
        Does not correctly handle URLs with close parens ) characters, so no longer used.
        """
        def repl(match):
            if match.group(1)[-1] == '.':
                return '<a href="' + match.group(1)[:-1] + '">' + match.group(1)[:-1] + '</a>.'
            return '<a href="' + match.group(1) + '">' + match.group(1) + '</a>'

        pattern = r'(https?://[^\s,;\)"<]*)'
        result = re.sub(pattern, repl, text)
        return result


    # 2021-08-06 Replace the createLinks() function with functions copied from the QRG build script written by S. Van Hoey
    @staticmethod
    def convert_code(text_with_backticks):
        """Takes all back-quoted sections in a text field and converts it to
        the html tagged version of code blocks <code>...</code>
        """
        return re.sub(r'`([^`]*)`', r'<code>\1</code>', text_with_backticks)

    @staticmethod
    def convert_link(text_with_urls):
        """Takes all links in a text field and converts it to the html tagged
        version of the link
        """
        def _handle_matched(inputstring):
            """quick hack version of url handling on the current prime versions data"""
            url = inputstring.group()
            return "<a href=\"{}\">{}</a>".format(url, url)

        regx = r"(http[s]?://[\w\d:#@%/;$()~_?\+-;=\\\.&]*)(?<![\)\.,])"
        return re.sub(regx, _handle_matched, text_with_urls)

    # Hack the code taken from the terms.tmpl template to insert the HTML necessary to make the semicolon-separated
    # lists of examples into an HTML list.
    # {% set examples = term.examples.split("; ") %}
    # {% if examples | length == 1 %}{{ examples | first }}{% else %}<ul class="list-group list-group-flush">{% for example in examples %}<li class="list-group-item">{{ example }}</li>{% endfor %}</ul>{% endif %}
    @staticmethod
    def convert_examples(text_with_list_of_examples: str) -> str:
        examples_list = text_with_list_of_examples.split('; ')
        if len(examples_list) == 1:
            return examples_list[0]
        else:
            output = '<ul class="list-group list-group-flush">\n'
            for example in examples_list:
                output += '  <li class="list-group-item">' + example + '</li>\n'
            output += '</ul>'
            return output

    def get_term_definition(self, locale, term_iri):
        """Return the localized term data required by the QRG templates."""
        language_suffix = '' if locale == 'en' else '_' + locale
        term = self.terms.terms_sorted_by_localname.loc[
            self.terms.terms_sorted_by_localname['term_iri'] == term_iri
        ].iloc[0]
        return {
            'label': term['term_localName'],
            'iri': term['pref_ns_uri'] + term['term_localName'],
            'class': term['tdwgutility_organizedInClass'],
            'definition': self.convert_link(self.t_val(term, 'rdfs_comment', language_suffix)),
            'comments': self.convert_link(self.convert_code(self.t_val(term, 'dcterms_description', language_suffix))),
            'examples': self.convert_link(self.convert_code(self.t_val(term, 'examples', language_suffix))),
            'rdf_type': term['rdf_type'],
            'namespace': term['pref_ns_prefix'],
        }

    def process_qrg_terms(self, locale, qrg_df):
        """Arrange QRG terms into class groups in the order supplied by qrg-list.csv."""
        template_data = []
        class_group = {
            'isRecordLevel': True,
            'label': self.t('record-level'),
            'iri': None, 'class': None, 'definition': None, 'comments': None,
            'rdf_type': None, 'terms': [], 'namespace': None,
        }
        added_use_with_iri = False
        for _, row in qrg_df.iterrows():
            term_data = self.get_term_definition(locale, row['recommended_term_iri'])
            if term_data['rdf_type'] == 'http://www.w3.org/2000/01/rdf-schema#Class':
                template_data.append(class_group)
                class_group = term_data
                class_group['terms'] = []
            elif term_data['iri'].startswith('http://rs.tdwg.org/dwc/iri/') and not added_use_with_iri:
                template_data.append(class_group)
                class_group = {
                    'label': 'UseWithIRI',
                    'iri': 'http://rs.tdwg.org/dwc/terms/attributes/UseWithIRI',
                    'class': None, 'definition': None, 'comments': None,
                    'rdf_type': None, 'namespace': 'dwciri', 'terms': [],
                }
                added_use_with_iri = True
                class_group['terms'].append(term_data)
            else:
                class_group['terms'].append(term_data)
        template_data.append(class_group)
        return template_data

    def generate_qrg(self, locale, output_path, dictionary_path, template_path, qrg_df):
        """Generate one localized Darwin Core Quick Reference Guide page."""
        with open(dictionary_path, encoding='utf-8') as json_file:
            self.dictionary = json.load(json_file)
        data = {'class_groups': self.process_qrg_terms(locale, qrg_df)}
        env = Environment(loader=FileSystemLoader(os.path.dirname(template_path)), trim_blocks=True)
        template = env.get_template(os.path.basename(template_path))
        rendered = template.render(data)
        with open(output_path, 'w', encoding='utf-8') as output_file:
            output_file.write(str(rendered))

    def generate_index_by_name(self):
        """
        generate the index of terms grouped by category and sorted alphabetically by lowercase term local name
        """

        print('Generating term index by CURIE')
        text = '### 3.1 %s\n\n' % self.t('index_by_term_name')
        text += '%s\n\n' % self.t('see_also_index_by_label')

        text += '**%s**\n' % self.t('classes')
        text += '\n'
        for row_index,row in self.terms.terms_sorted_by_localname.iterrows():
            if row['rdf_type'] == 'http://www.w3.org/2000/01/rdf-schema#Class':
                curie = row['pref_ns_prefix'] + ":" + row['term_localName']
                curie_anchor = curie.replace(':','_')
                text += '[' + curie + '](#' + curie_anchor + ') |\n'
        text = text[:len(text)-3] # remove final trailing " |\n"
        text += '\n\n' # put back removed newline

        for category in range(0,len(self.display_order)):
            text += '**%s**\n' % self.display_label[category]
            text += '\n'
            if self.organized_in_categories:
                filtered_table = self.terms.terms_sorted_by_localname[self.terms.terms_sorted_by_localname['tdwgutility_organizedInClass']==self.display_order[category]]
                filtered_table.reset_index(drop=True, inplace=True)
            else:
                filtered_table = self.terms.terms_sorted_by_localname

            added_terms = False
            for row_index,row in filtered_table.iterrows():
                if row['rdf_type'] != 'http://www.w3.org/2000/01/rdf-schema#Class':
                    curie = row['pref_ns_prefix'] + ":" + row['term_localName']
                    curie_anchor = curie.replace(':','_')
                    text += '[' + curie + '](#' + curie_anchor + ') |\n'
                    added_terms = True
            if added_terms:
                text = text[:len(text)-3] # remove final trailing " |\n"
            else:
                text += self.t('no_terms_organized_in_class') + '\n'
            text += '\n\n'

        index_by_name = text

        #print(index_by_name)
        print()
        return index_by_name


    def generate_index_by_label(self):
        """
        generate the index of terms by label
        """

        print('Generating term index by label')
        text = '\n\n'

        if self.organized_in_categories:
            text += '### 3.2 %s\n\n' % self.t('index_by_label')
            text += '%s\n\n' % self.t('see_also_index_by_term_name')

        seen_class = False
        for row_index,row in self.terms.terms_sorted_by_label.iterrows():
            if row['rdf_type'] == 'http://www.w3.org/2000/01/rdf-schema#Class':
                if not seen_class:
                    text += '**%s**\n' % self.t('classes')
                    text += '\n'
                    seen_class = True
                curie_anchor = row['pref_ns_prefix'] + "_" + row['term_localName']
                text += '[' + row['label'] + '](#' + curie_anchor + ') |\n'
        text = text[:len(text)-3] # remove final trailing " |\n"
        text += '\n\n' # put back removed newline

        for category in range(0,len(self.display_order)):
            if self.organized_in_categories:
                text += '**%s**\n\n' % self.display_label[category]
                filtered_table = self.terms.terms_sorted_by_label[self.terms.terms_sorted_by_label['tdwgutility_organizedInClass']==self.display_order[category]]
                filtered_table.reset_index(drop=True, inplace=True)
            else:
                filtered_table = self.terms.terms_sorted_by_label

            added_terms = False
            for row_index,row in filtered_table.iterrows():
                if 'rdf_type' in row and row['rdf_type'] != 'http://www.w3.org/2000/01/rdf-schema#Class':
                    curie_anchor = row['pref_ns_prefix'] + "_" + row['term_localName']
                    text += '[' + row['label'] + '](#' + curie_anchor + ') |\n'
                    added_terms = True
            if added_terms:
                text = text[:len(text)-3] # remove final trailing " |\n"
            else:
                text += self.t('no_terms_organized_in_class') + '\n'
            text += '\n\n'

        index_by_label = text
        print()
        #print(index_by_label)
        return index_by_label


    def generate_vocabulary_tables(self, locale):
        """
        generate a table for each term, with terms grouped by category
        """

        print('Generating terms table in', locale)
        if locale == 'en':
            l = ''
        else:
            l = '_' + locale

        # generate the Markdown for the terms table
        text = '## 4 %s\n' % self.t('vocabulary')
        if True:
            filtered_table = self.terms.terms_sorted_by_localname

        #for category in range(0,len(display_order)):
        #    if organized_in_categories:
        #        text += '### 4.' + str(category + 1) + ' ' + display_label[category] + '\n'
        #        text += '\n'
        #        text += display_comments[category] # insert the comments for the category, if any.
        #        filtered_table = self.terms_sorted_by_localname[self.terms_sorted_by_localname['tdwgutility_organizedInClass']==display_order[category]]
        #        filtered_table.reset_index(drop=True, inplace=True)
        #    else:
        #        filtered_table = self.terms_sorted_by_localname

            for row_index,row in filtered_table.iterrows():
                text += '<table>\n'
                text += '\t<thead>\n'
                text += '\t\t<tr>\n'
                curie = row['pref_ns_prefix'] + ":" + row['term_localName']
                curieAnchor = curie.replace(':','_')
                text += '\t\t\t<th colspan="2"><a id="%s"></a>%s %s</th>\n' % (curieAnchor, self.t('term_name'), curie)
                text += '\t\t</tr>\n'
                text += '\t</thead>\n'
                text += '\t<tbody>\n'
                text += '\t\t<tr>\n'
                text += '\t\t\t<td>%s</td>\n' % self.t('term_iri')
                uri = row['pref_ns_uri'] + row['term_localName']
                text += '\t\t\t<td><a href="%s">%s</a></td>\n' % (uri, uri)
                text += '\t\t</tr>\n'
                text += '\t\t<tr>\n'
                text += '\t\t\t<td>%s</td>\n' % self.t('modified')
                text += '\t\t\t<td>%s</td>\n' % row['term_modified']
                text += '\t\t</tr>\n'

                if row['version_iri'] != '':
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('term_version_iri')
                    text += '\t\t\t<td><a href="%s">%s</a></td>\n' % (row['version_iri'], row['version_iri'])
                    text += '\t\t</tr>\n'

                text += '\t\t<tr>\n'
                text += '\t\t\t<td>%s</td>\n' % self.t('label')
                text += '\t\t\t<td>%s</td>\n' % self.t_val(row, 'label', l)
                text += '\t\t</tr>\n'

                if row['term_deprecated'] != '':
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td></td>\n'
                    text += '\t\t\t<td><strong>%s</strong></td>\n' % self.t('term_deprecated')
                    text += '\t\t</tr>\n'

                    for i,dep_row in filtered_table.loc[(filtered_table['replaces_term'] == uri) | (filtered_table['replaces1_term'] == uri)].iterrows():
                        text += '\t\t<tr>\n'
                        text += '\t\t\t<td>%s</td>\n' % self.t('term_replaced_by')
                        text += '\t\t\t<td><a href="#%s_%s">%s%s</a></td>\n' % (dep_row['pref_ns_prefix'], dep_row['term_localName'], dep_row['pref_ns_uri'], dep_row['term_localName'])
                        text += '\t\t</tr>\n'

                text += '\t\t<tr>\n'
                text += '\t\t\t<td>%s</td>\n' % self.t('definition')
                if 'rdfs_comment' in row:
                    text += '\t\t\t<td>%s</td>\n' % self.t_val(row, 'rdfs_comment', l)
                else:
                    text += '\t\t\t<td>' + self.t_val(row, 'definition', l) + '</td>\n'
                text += '\t\t</tr>\n'

                if 'usage' in row and row['usage'] != '':
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('usage')
                    text += '\t\t\t<td>%s</td>\n' % self.convert_examples(self.convert_link(self.convert_code(self.t_val(row, 'usage', l))))
                    text += '\t\t</tr>\n'

                if 'dcterms_description' in row and row['dcterms_description'] != '':
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('notes')
                    text += '\t\t\t<td>%s</td>\n' % self.convert_link(self.convert_code(self.t_val(row, 'dcterms_description', l)))
                    text += '\t\t</tr>\n'
                elif 'notes' in row and row['notes'] != '':
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('notes')
                    text += '\t\t\t<td>%s</td>\n' % self.convert_link(self.convert_code(self.t_val(row, 'notes', l)))
                    text += '\t\t</tr>\n'

                if 'examples' in row and row['examples'] != '':
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('examples')
                    text += '\t\t\t<td>%s</td>\n' % self.convert_examples(self.convert_link(self.convert_code(self.t_val(row, 'examples', l))))
                    text += '\t\t</tr>\n'

                if 'tdwgutility_abcdEquivalence' in row and row['tdwgutility_abcdEquivalence'] != '':
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('abcd_equivalence')
                    text += '\t\t\t<td>%s</td>\n' % self.convert_link(self.convert_code(row['tdwgutility_abcdEquivalence']))
                    text += '\t\t</tr>\n'

                if (self.vocab_type == 2 or self.vocab_type == 3) and row['controlled_value_string'] != '': # controlled vocabulary
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('controlled_value')
                    text += '\t\t\t<td>%s</td>\n' % row['controlled_value_string']
                    text += '\t\t</tr>\n'

                if self.vocab_type == 3 and row['skos_broader'] != '': # controlled vocabulary with skos:broader relationships
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('has_broader_concept')
                    text += '\t\t\t<td><a href="#%s_%s">%s:%s</a></td>\n' % (row['pref_ns_prefix'], row['skos_broader'], row['pref_ns_prefix'], row['skos_broader'])
                    text += '\t\t</tr>\n'

                text += '\t\t<tr>\n'
                text += '\t\t\t<td>%s</td>\n' % self.t('type')
                if row['rdf_type'] == 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property':
                    text += '\t\t\t<td>%s</td>\n' % self.t('property')
                elif row['rdf_type'] == 'http://www.w3.org/2000/01/rdf-schema#Class':
                    text += '\t\t\t<td>%s</td>\n' % self.t('class')
                elif row['rdf_type'] == 'http://www.w3.org/2004/02/skos/core#Concept':
                    text += '\t\t\t<td>%s</td>\n' % self.t('concept')
                else:
                    text += '\t\t\t<td>%s</td>\n' % row['rdf_type'] # this should rarely happen
                text += '\t\t</tr>\n'

                # Look up decisions related to this term
                for j, decision in self.terms.decisions_df.loc[self.terms.decisions_df['linked_affected_resource'] == uri].iterrows():
                    if decision['decision_localName'] != '':
                        text += '\t\t<tr>\n'
                        text += '\t\t\t<td>%s</td>\n' % self.t('executive_committee_decision')
                        text += '\t\t\t<td><a href="http://rs.tdwg.org/decisions/%s">http://rs.tdwg.org/decisions/%s</a></td>\n' % (decision['decision_localName'], decision['decision_localName'])
                        text += '\t\t</tr>\n'

                text += '\t</tbody>\n'
                text += '</table>\n'
                text += '\n'
            text += '\n'
        term_table = text
        print('done generating')
        print()

        #print(term_table)
        return term_table


    def generate_term_list_markdown(self, locale, outFileName, dictionaryFileName, headerFileName):
        """
        Merge term table with header Markdown, then save file
        """

        # read in header, merge with terms table, and output
        with open(dictionaryFileName, encoding='utf-8') as jsonFile:
            self.dictionary = json.load(jsonFile)

        print('Merging term table with header and saving file')
        text = ''
        if self.organized_in_categories:
            text += self.generate_index_by_name()
        text += self.generate_index_by_label()
        text += self.generate_vocabulary_tables(locale)

        # read in header, merge with terms table, and output
        headerObject = open(headerFileName, 'rt', encoding='utf-8')
        header = headerObject.read()
        headerObject.close()

        # Build the Markdown for the contributors list
        contributors = ''
        for contributor in self.terms.contributors_yaml:
            contributors += '[' + contributor['contributor_literal'] + '](' + contributor['contributor_iri'] + ') '
            contributors += '([' + contributor['affiliation'] + '](' + contributor['affiliation_uri'] + ')), '
        contributors = contributors[:-2] # Remove the last comma and space

        # Substitute values of ratification_date and contributors into the header template
        header = header.replace('{document_title}', self.terms.document_configuration_yaml['documentTitle'])
        header = header.replace('{ratification_date}', self.terms.document_configuration_yaml['doc_modified'])
        header = header.replace('{created_date}', self.terms.document_configuration_yaml['doc_created'])
        header = header.replace('{contributors}', contributors)
        header = header.replace('{standard_iri}', self.terms.document_configuration_yaml['dcterms_isPartOf'])
        header = header.replace('{current_iri}', self.terms.document_configuration_yaml['current_iri'])
        header = header.replace('{abstract}', self.terms.document_configuration_yaml['abstract'])
        header = header.replace('{creator}', self.terms.document_configuration_yaml['creator'])
        header = header.replace('{publisher}', self.terms.document_configuration_yaml['publisher'])
        year = self.terms.document_configuration_yaml['doc_modified'].split('-')[0]
        header = header.replace('{year}', year)

        # Determine whether there was a previous version of the document.
        if self.terms.document_configuration_yaml['doc_created'] != self.terms.document_configuration_yaml['doc_modified']:
            # Use the preflight-loaded document-version registry. Select the
            # newest version older than the document currently being generated,
            # rather than relying on a positional row/column assumption.
            current_iri = self.terms.document_configuration_yaml['current_iri']
            current_modified = self.terms.document_configuration_yaml['doc_modified']
            matching_versions = self.versions_df[self.versions_df['current_iri'] == current_iri].copy()
            matching_versions = matching_versions[matching_versions['version_iri'].astype(str).str.len() > 0]
            older = matching_versions[~matching_versions['version_iri'].astype(str).str.contains(current_modified, regex=False)]
            if older.empty:
                raise ValueError(f"No previous document version found for {current_iri}")
            most_recent_version_iri = older.sort_values(by='version_iri', ascending=False).iloc[0]['version_iri']

            # Insert the previous version information into the header
            previous_version_metadata_string = "Previous version\n: <" + most_recent_version_iri + ">\n\n"
            # Insert the previous version information into the designated slot.
            header = header.replace('{previous_version_slot}\n\n', previous_version_metadata_string)
        else:
            # If there was no previous version, remove the slot from the header.
            header = header.replace('{previous_version_slot}\n\n', '')

        output = header + text
        outputObject = open(outFileName, 'wt', encoding='utf-8')
        outputObject.write(output)
        outputObject.close()

        print('done')




def _document_versions_source(local_path_to_rs, github_user, github_branch):
    if local_path_to_rs:
        return os.path.join(local_path_to_rs, 'docs', 'docs-versions.csv')
    return (
        f"https://raw.githubusercontent.com/{github_user}/rs.tdwg.org/"
        f"{github_branch}/docs/docs-versions.csv"
    )


def generate_term_list_pages(term_list, page_config, webpages_config, languages, versions_df):
    """Generate all localized List-of-Terms pages for one term population."""
    docs_root = os.path.join(outputRoot, webpages_config['docs_root'])
    for locale in languages:
        dictionary_path = os.path.join(scriptDir, webpages_config['dictionary'].format(locale=locale))
        header_path = os.path.join(scriptDir, page_config['header_template'].format(locale=locale))
        relative_output = os.path.join(page_config['path'], 'index.md') if locale == 'en' else os.path.join(locale, page_config['path'], 'index.md')
        output_path = os.path.join(docs_root, relative_output)
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        term_list.versions_df = versions_df
        term_list.generate_term_list_markdown(locale, output_path, dictionary_path, header_path)


def generate_qrg_pages(term_list, page_config, webpages_config, languages):
    """Generate all localized Darwin Core Quick Reference Guide pages."""
    docs_root = os.path.join(outputRoot, webpages_config['docs_root'])
    qrg_path = os.path.join(scriptDir, page_config['term_list'])
    qrg_df = pd.read_csv(qrg_path, na_filter=False)
    output_paths = []
    for locale in languages:
        dictionary_path = os.path.join(scriptDir, webpages_config['dictionary'].format(locale=locale))
        template_path = os.path.join(scriptDir, page_config['template'].format(locale=locale))
        relative_output = os.path.join(page_config['path'], 'index.md') if locale == 'en' else os.path.join(locale, page_config['path'], 'index.md')
        output_path = os.path.join(docs_root, relative_output)
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        term_list.generate_qrg(locale, output_path, dictionary_path, template_path, qrg_df)
        output_paths.append(output_path)
    return output_paths


def report_recommended_terms_missing_from_qrg(
        terms, page_config, categories, log_file=None):
    """Report recommended List-of-Terms properties absent from qrg-list.csv, grouped as in the List of Terms."""
    qrg_path = os.path.join(scriptDir, page_config['term_list'])
    qrg_df = pd.read_csv(qrg_path, na_filter=False)
    qrg_iris = set(qrg_df['recommended_term_iri'].astype(str))

    recommended = _recommended_list_of_terms(terms)
    rdf_property = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'
    recommended = recommended[recommended['rdf_type'] == rdf_property].copy()
    missing = recommended[~recommended['term_iri'].astype(str).isin(qrg_iris)].copy()
    missing = missing.sort_values(
        by='term_iri',
        key=lambda column: column.astype(str).str.lower(),
        kind='stable',
    )

    lines = [
        f"QRG coverage: {len(missing)} recommended List-of-Terms properties are not in {page_config['term_list']}."
    ]

    reported_indexes = set()
    for category in categories:
        category_iri = str(category.get('iri', ''))
        category_rows = missing[
            missing['tdwgutility_organizedInClass'].astype(str) == category_iri
        ]
        if category_rows.empty:
            continue
        lines.append('')
        lines.append(str(category.get('label', category_iri)))
        for row_index, row in category_rows.iterrows():
            lines.append(f"    {row['term_iri']}")
            reported_indexes.add(row_index)

    uncategorized = missing[~missing.index.isin(reported_indexes)]
    if not uncategorized.empty:
        organized_in = uncategorized['tdwgutility_organizedInClass'].fillna('').astype(str)

        no_class = uncategorized[organized_in.str.strip() == '']
        if not no_class.empty:
            lines.append('')
            lines.append('No organizedInClass value')
            for _, row in no_class.iterrows():
                lines.append(f"    {row['term_iri']}")

        with_class = uncategorized[organized_in.str.strip() != ''].copy()
        if not with_class.empty:
            with_class['_organizedInClass'] = (
                with_class['tdwgutility_organizedInClass'].astype(str).str.strip()
            )
            for class_iri in sorted(
                    with_class['_organizedInClass'].unique(), key=str.lower):
                lines.append('')
                lines.append(
                    f"Unconfigured List-of-Terms class: {class_iri}"
                )
                class_rows = with_class[
                    with_class['_organizedInClass'] == class_iri
                ]
                for _, row in class_rows.iterrows():
                    lines.append(f"    {row['term_iri']}")

    for line in lines:
        print(line)
        if log_file is not None:
            print(line, file=log_file)
    return missing

def _localized_destination_summary(page_config, webpages_config, languages):
    """Return compact human-readable destination lines for a localized webpage family."""
    docs_root = webpages_config['docs_root'].rstrip('/')
    page_path = page_config['path'].strip('/')
    lines = [f"{docs_root}/{page_path}/index.md"]
    non_english = [locale for locale in languages if locale != 'en']
    if non_english:
        lines.append(f"{docs_root}/{{{','.join(non_english)}}}/{page_path}/index.md")
    return lines



def _load_document_metadata(metadata_path, local_path_to_rs, github_user, github_branch):
    """Load authors_configuration.yaml and document_configuration.yaml."""
    base = f"process/document_metadata_processing/{metadata_path.strip('/')}/"
    def load(name):
        source = _rs_source(base + name, local_path_to_rs, github_user, github_branch)
        if local_path_to_rs:
            with open(source, 'r', encoding='utf-8') as handle:
                return yaml.safe_load(handle), source
        response = requests.get(source, timeout=30)
        response.raise_for_status()
        return yaml.safe_load(response.text), source
    authors, authors_source = load('authors_configuration.yaml')
    metadata, metadata_source = load('document_configuration.yaml')
    return authors, metadata, authors_source, metadata_source


def _matching_document_versions(versions_df, current_iri):
    rows = versions_df[versions_df['current_iri'].astype(str)==str(current_iri)].copy()
    rows = rows[rows['version_iri'].astype(str).str.len()>0]
    return rows.sort_values('version_iri', ascending=False, kind='stable')


def _document_lifecycle(metadata, versions_df, output_path):
    """Preflight the archive operation for one standard document."""
    rows=_matching_document_versions(versions_df, metadata['current_iri'])
    if rows.empty:
        raise ValueError(f"No document versions found for {metadata['current_iri']}")
    if str(metadata['doc_created'])==str(metadata['doc_modified']) or len(rows)==1:
        return {'archive_required':False,'archive_path':None,
                'previous_version_iri':None,'previous_version_date':None,
                'new_version_iri':str(rows.iloc[0]['version_iri'])}
    modified=str(metadata['doc_modified'])
    current=rows[rows['version_iri'].astype(str).str.contains(modified,regex=False)]
    if current.empty:
        raise ValueError(f"doc_modified {modified} is not represented in docs-versions")
    older=rows[~rows['version_iri'].astype(str).str.contains(modified,regex=False)]
    if older.empty:
        raise ValueError("No previous document version found")
    previous=older.iloc[0]
    previous_iri=str(previous['version_iri']).strip()
    previous_date=previous_iri.rstrip('/').rsplit('/',1)[-1]
    if not re.fullmatch(r'\d{4}-\d{2}-\d{2}', previous_date):
        raise ValueError(
            f"Previous version IRI does not end in an ISO date: {previous_iri}")
    archive_path=os.path.join(os.path.dirname(output_path),previous_date+'.md')
    archive_required=not os.path.isfile(archive_path)
    if archive_required:
        if not os.path.isfile(output_path):
            raise ValueError(f"Current document to archive does not exist: {output_path}")
        with open(output_path,'r',encoding='utf-8') as handle:
            current_text=handle.read()
        if previous_date not in current_text:
            raise ValueError(
                f"{output_path} does not appear to be the version dated "
                f"{previous_date}; refusing to archive it")
    return {'archive_required':archive_required,'archive_path':archive_path,
            'previous_version_iri':previous_iri,
            'previous_version_date':previous_date,
            'new_version_iri':str(current.iloc[0]['version_iri'])}


def archive_previous_document(document_state):
    """Rename index.md to its version date and add Replaced by metadata."""
    lc=document_state['lifecycle']
    if not lc['archive_required']:
        return None
    src=document_state['output_path']; dst=lc['archive_path']
    os.rename(src,dst)
    with open(dst,'r',encoding='utf-8') as handle:
        body=handle.read()
    marker='Abstract\n:'
    if marker not in body:
        raise ValueError(f"Cannot insert Replaced by metadata in {dst}: Abstract marker absent")
    replacement=f"Replaced by\n: <{lc['new_version_iri']}>\n\n"
    body=body.replace(marker,replacement+marker,1)
    with open(dst,'w',encoding='utf-8') as handle:
        handle.write(body)
    return dst


def _substitute_document_metadata(template, authors, metadata, previous_iri):
    contributors=', '.join(
        f"[{a['contributor_literal']}]({a['contributor_iri']}) "
        f"([{a['affiliation']}]({a['affiliation_uri']}))" for a in authors)
    values={
      '{document_title}':metadata['documentTitle'],
      '{ratification_date}':metadata['doc_modified'],
      '{created_date}':metadata['doc_created'],
      '{contributors}':contributors,
      '{standard_iri}':metadata['dcterms_isPartOf'],
      '{current_iri}':metadata['current_iri'],
      '{abstract}':metadata['abstract'],
      '{creator}':metadata['creator'],
      '{publisher}':metadata['publisher'],
      '{year}':str(metadata['doc_modified']).split('-')[0]}
    for key,value in values.items():
        template=template.replace(key,str(value))
    previous=(f"Previous version\n: <{previous_iri}>\n\n" if previous_iri else '')
    template=template.replace('{previous_version_slot}\n\n',previous)
    template=template.replace('{previous_version_slot}',previous.rstrip())
    return template


def generate_template_document(document_state):
    with open(document_state['template_path'],'r',encoding='utf-8') as handle:
        template=handle.read()
    rendered=_substitute_document_metadata(
        template,document_state['authors'],document_state['metadata'],
        document_state['lifecycle']['previous_version_iri'])
    for placeholder, value in document_state.get('template_substitutions', {}).items():
        rendered = rendered.replace(placeholder, value)
    unresolved=sorted(set(re.findall(r'\{[A-Za-z0-9_]+\}',rendered)))
    if unresolved:
        raise ValueError("Unresolved placeholder(s): "+', '.join(unresolved))
    os.makedirs(os.path.dirname(document_state['output_path']),exist_ok=True)
    with open(document_state['output_path'],'w',encoding='utf-8') as handle:
        handle.write(rendered)
    return document_state['output_path']


def _language_menu_target_files(docs_root):
    """Return navigation*.json files that receive the site language menu."""
    data_dir = os.path.join(outputRoot, docs_root, '_data')
    if not os.path.isdir(data_dir):
        return data_dir, []
    targets = [
        os.path.join(data_dir, filename)
        for filename in sorted(os.listdir(data_dir))
        if filename.startswith('navigation') and filename.endswith('.json')
    ]
    return data_dir, targets


def _validate_language_menu_entry(entry, label):
    if not isinstance(entry, dict):
        raise ValueError(f"{label} must be a mapping")
    text_value = str(entry.get('text', '')).strip()
    if not text_value:
        raise ValueError(f"{label} is missing text")
    href = entry.get('href')
    if text_value != '---' and (href is None or not str(href).strip()):
        raise ValueError(f"{label} is missing href")
    result = {'text': text_value}
    if href is not None:
        result['href'] = str(href).strip()
    return result


def _prepare_language_menu(config, docs_root):
    """Validate and prepare deterministic language-menu updates without writing files."""
    menu_cfg = config.get('webpages', {}).get('language_menu', {})
    if not isinstance(menu_cfg, dict):
        raise ValueError("webpages.language_menu must be a mapping")
    if not menu_cfg.get('update', False):
        return {'update': False, 'files': []}

    mode = str(menu_cfg.get('mode', '')).strip().lower()
    if mode not in ('production', 'preview'):
        raise ValueError("webpages.language_menu.mode must be 'production' or 'preview'")

    production = menu_cfg.get('production_languages')
    preview = menu_cfg.get('preview_languages')
    if not isinstance(production, list) or not production:
        raise ValueError("webpages.language_menu.production_languages must be a non-empty list")
    if not isinstance(preview, list):
        raise ValueError("webpages.language_menu.preview_languages must be a list")

    entries = [
        _validate_language_menu_entry(entry, f"production_languages[{i}]")
        for i, entry in enumerate(production)
    ]
    if mode == 'preview':
        entries.extend(
            _validate_language_menu_entry(entry, f"preview_languages[{i}]")
            for i, entry in enumerate(preview)
        )

    data_dir, targets = _language_menu_target_files(docs_root)
    if not os.path.isdir(data_dir):
        raise ValueError(f"data directory not found: {data_dir}")
    if not targets:
        raise ValueError(f"no navigation*.json files found in {data_dir}")

    desired_menu = {'text': '文A', 'menu': entries}
    prepared = []
    for path in targets:
        try:
            with open(path, encoding='utf-8') as handle:
                nav = json.load(handle)
        except Exception as exc:
            raise ValueError(f"cannot read navigation file {path}: {exc}") from exc
        if not isinstance(nav, list):
            raise ValueError(f"navigation file must contain a top-level list: {path}")

        # The YAML declaration is authoritative. Replace an existing language menu
        # (and collapse accidental duplicates), or append it if none exists.
        new_nav = []
        replaced = False
        for item in nav:
            if isinstance(item, dict) and item.get('text') == '文A':
                if not replaced:
                    new_nav.append(desired_menu)
                    replaced = True
                continue
            new_nav.append(item)
        if not replaced:
            new_nav.append(desired_menu)
        prepared.append({'path': path, 'data': new_nav})

    return {'update': True, 'mode': mode, 'files': prepared}


def generate_language_menu(state):
    """Write preflighted language-menu data to navigation JSON files."""
    if not state or not state.get('update', False):
        return []
    written = []
    for item in state.get('files', []):
        with open(item['path'], 'w', encoding='utf-8') as handle:
            json.dump(item['data'], handle, indent=2, ensure_ascii=False)
            handle.write('\n')
        written.append(item['path'])
    return written


def _preflight_webpage_configuration(config, dwc_list_terms, dwc_list_databases,
                                     artifact_state, errors,
                                     local_path_to_rs, github_user, github_branch):
    """Preflight all update:true standard documents and the optional QRG."""
    webpages=config.get('webpages',{})
    documents=config.get('documents',[])
    if not isinstance(webpages,dict):
        errors.append("webpages must be a mapping"); return None
    if not isinstance(documents,list):
        errors.append("documents must be a list"); documents=[]
    state={'dwc_terms':dwc_list_terms,'documents':[],'configuration':webpages}
    languages=config.get('languages',DEFAULT_LANGUAGES)
    docs_root=webpages.get('docs_root')
    dictionary=webpages.get('dictionary')
    categories=webpages.get('term_list_categories')
    if not docs_root: errors.append("webpages: missing docs_root")

    language_menu_state = {'update': False, 'files': []}
    if docs_root:
        try:
            language_menu_state = _prepare_language_menu(config, docs_root)
        except Exception as exc:
            errors.append(f"Language menu: {exc}")
    state['language_menu'] = language_menu_state

    # Localized term-list pages and the QRG consume the translation dictionaries.
    # Template-based standard documents do not.  Require shared presentation
    # resources only when an update:true output actually needs them.
    active_term_list_documents = [
        d for d in documents
        if isinstance(d,dict)
        and d.get('update',False)
        and d.get('renderer') == 'term_list'
    ]
    qrg_config = webpages.get('qrg',{})
    qrg_update = isinstance(qrg_config,dict) and qrg_config.get('update',False)
    needs_dictionary = bool(active_term_list_documents or qrg_update)

    # Class categories are used to organize the Darwin Core List of Terms and QRG.
    # Controlled-vocabulary term lists and template documents do not require them.
    needs_categories = qrg_update or any(
        d.get('renderer') == 'term_list' and not d.get('artifact')
        for d in active_term_list_documents
    )

    if needs_dictionary and not dictionary:
        errors.append("webpages: missing dictionary")
    if needs_categories and (not isinstance(categories,list) or not categories):
        errors.append("webpages: term_list_categories must be a non-empty list")

    def validate_pattern(pattern,label):
        if not pattern:
            errors.append(f"webpages: missing {label}"); return
        for locale in languages:
            try: rel=pattern.format(locale=locale)
            except Exception as exc:
                errors.append(f"webpages: invalid {label}: {exc}"); return
            path=os.path.join(scriptDir,rel)
            if not os.path.isfile(path): errors.append(f"webpages: missing {label}: {path}")

    if needs_dictionary:
        validate_pattern(dictionary,'translation dictionary')

    versions_source=_document_versions_source(local_path_to_rs,github_user,github_branch)
    try:
        versions_df=pd.read_csv(versions_source,na_filter=False,dtype=str)
        for col in ('current_iri','version_iri'):
            if col not in versions_df.columns:
                errors.append(f"documents: versions registry lacks {col!r}")
    except Exception as exc:
        errors.append(f"documents: cannot load versions registry: {exc}")
        versions_df=None
    state['versions_df']=versions_df; state['versions_source']=versions_source

    updated_artifacts={}
    for i,a in enumerate(config.get('artifacts',[])):
        if a.get('update',True) and i in artifact_state:
            updated_artifacts[a.get('name')]=artifact_state[i]

    names=set(); paths=set()
    for i,d in enumerate(documents):
        if not isinstance(d,dict):
            errors.append("Unnamed document configuration: must be a mapping")
            continue
        name=str(d.get('name','')).strip()
        if not name:
            errors.append("Unnamed document configuration: missing name")
            continue
        prefix=f"{name}: "
        if name in names: errors.append(prefix+"document name is declared more than once")
        names.add(name)
        if not d.get('update',False): continue
        renderer=d.get('renderer')
        if renderer not in ('term_list','document_template'):
            errors.append(prefix+f"unsupported renderer {renderer!r}"); continue
        page_path=str(d.get('path','')).strip('/')
        metadata_path=str(d.get('document_metadata_path','')).strip()
        if not page_path: errors.append(prefix+"missing path"); continue
        if page_path in paths: errors.append(prefix+f"duplicate path {page_path!r}")
        paths.add(page_path)
        if not metadata_path: errors.append(prefix+"missing document_metadata_path"); continue
        output=os.path.join(repoRoot,docs_root,page_path,'index.md')
        parent_error=_check_output_parent(output)
        if parent_error: errors.append(prefix+parent_error)
        try:
            authors,metadata,authors_source,metadata_source=_load_document_metadata(
                metadata_path,local_path_to_rs,github_user,github_branch)
            for key in ('documentTitle','doc_modified','doc_created','dcterms_isPartOf',
                        'current_iri','abstract','creator','publisher'):
                if key not in metadata: raise ValueError(f"metadata lacks {key!r}")
        except Exception as exc:
            errors.append(prefix+f"document metadata invalid: {exc}"); continue

        # A malformed/unavailable shared registry is reported once above. Do not
        # emit the same root cause again for every update:true document.
        if versions_df is None or not {'current_iri','version_iri'}.issubset(versions_df.columns):
            continue
        try:
            lifecycle=_document_lifecycle(metadata,versions_df,output)
        except Exception as exc:
            errors.append(
                prefix + f"cannot update {name!r}: {exc}. "
                "Check this document's document_configuration.yaml, its entries in "
                "docs/docs-versions.csv, and the existing docs/<path>/index.md. "
                "If this document should not be updated in this run, set update: false "
                "for it in build_artifacts.yaml."
            ); continue
        ds={'name':name,'configuration':d,'renderer':renderer,'authors':authors,
            'metadata':metadata,'authors_source':authors_source,
            'metadata_source':metadata_source,'output_path':output,'lifecycle':lifecycle}
        if renderer=='term_list':
            if d.get('vocab_type') not in (1,2,3):
                errors.append(prefix+"vocab_type must be 1, 2, or 3")
            validate_pattern(d.get('header_template'),f"{name} header template")
            term_source_collection = d.get('term_source_collection')
            if term_source_collection:
                try:
                    declared_lists = _configured_term_source(config, term_source_collection)
                except Exception as exc:
                    errors.append(prefix + f"invalid term_source_collection: {exc}")
                    continue
                if declared_lists != dwc_list_databases:
                    errors.append(prefix + "term_source_collection does not match the preloaded Darwin Core List of Terms source")
                    continue
                ds['terms']=dwc_list_terms
            elif d.get('artifact') in updated_artifacts:
                ds['terms']=updated_artifacts[d['artifact']]['terms']
            else:
                errors.append(prefix+"term-list source artifact is not selected for update/preflighted")
        else:
            template=os.path.join(scriptDir,str(d.get('template','')))
            if not os.path.isfile(template): errors.append(prefix+f"template not found: {template}")
            ds['template_path']=template
            if d.get('schema_inventory', False):
                core_entries = []
                extension_entries = []
                for artifact_index, artifact in enumerate(config.get('artifacts', [])):
                    if not artifact.get('update', True) or artifact.get('type') not in ('core', 'extension'):
                        continue
                    schema_state = artifact_state.get(artifact_index)
                    if schema_state is None:
                        raise ValueError(
                            f"schema inventory source was not successfully preflighted: {artifact.get('name', '<unnamed artifact>')}"
                        )
                    version_iri = schema_state.get('schema_version_iri')
                    if not version_iri:
                        raise ValueError(
                            f"schema inventory has no current immutable version for {artifact.get('name', '<unnamed artifact>')}"
                        )
                    label = str(artifact.get('schema_label') or artifact.get('name') or '').strip()
                    if not label:
                        raise ValueError('schema inventory artifact has no schema_label or name')
                    release = _schema_version_date(version_iri)
                    entry = (label.lower(), f"- [{label}]({version_iri}) ({release})")
                    if artifact.get('type') == 'core':
                        core_entries.append(entry)
                    else:
                        extension_entries.append(entry)
                dp_version = str((config.get('dwc_dp') or {}).get('version', '')).strip()
                if not dp_version:
                    raise ValueError('schema inventory requires dwc_dp.version')
                ds['template_substitutions'] = {
                    '{dwca_core_schemas}': '\n'.join(value for _, value in sorted(core_entries)),
                    '{dwca_extension_schemas}': '\n'.join(value for _, value in sorted(extension_entries)),
                    '{dwcdp_current_version}': f"[Latest Darwin Core Data Package version]({dp_version})",
                }
        state['documents'].append(ds)

    qrg=webpages.get('qrg',{})
    if qrg.get('update',True):
        validate_pattern(qrg.get('template'),'QRG template')
        qrg_list=qrg.get('term_list')
        if not qrg_list or not os.path.isfile(os.path.join(scriptDir,qrg_list)):
            errors.append("webpages: QRG term list missing")
    return state



TERM_VERSION_COLUMN_MAPPINGS = [
    ('iri', 'version'),
    ('term_localName', 'term_localName'),
    ('label', 'label'),
    ('definition', 'rdfs_comment'),
    ('comments', 'dcterms_description'),
    ('examples', 'examples'),
    ('organized_in', 'tdwgutility_organizedInClass'),
    ('issued', 'version_issued'),
    ('status', 'version_status'),
    ('replaces', 'replaces_version'),
    ('rdf_type', 'rdf_type'),
    ('term_iri', 'term_iri'),
    ('abcd_equivalence', 'tdwgutility_abcdEquivalence'),
    ('flags', 'tdwgutility_usageScope'),
]


def _rs_source(relative_path, local_path_to_rs, github_user, github_branch):
    """Return a local path or raw GitHub URL for a path in rs.tdwg.org."""
    if local_path_to_rs:
        return os.path.join(
            os.path.abspath(os.path.expanduser(local_path_to_rs)),
            *relative_path.split('/')
        )
    return (
        f"https://raw.githubusercontent.com/{github_user}/rs.tdwg.org/"
        f"{github_branch}/{relative_path}"
    )


def _load_term_versions_state(config, local_path_to_rs, github_user, github_branch):
    """Load and validate every source needed to build vocabulary/term_versions.csv."""
    tv_config = config.get('term_versions')
    if tv_config is None:
        return None
    if not isinstance(tv_config, dict):
        raise ValueError("term_versions configuration must be a YAML mapping")

    output = str(tv_config.get('output', '')).strip()
    if not output:
        raise ValueError("term_versions: missing 'output'")

    # The term-version history reuses the same named source collection as the
    # Darwin Core List of Terms; only historical databases are declared here.
    term_source_collection = str(tv_config.get('term_source_collection', '')).strip()
    if not term_source_collection:
        raise ValueError("term_versions: missing 'term_source_collection'")
    current_lists = _configured_term_source(config, term_source_collection)
    historical_lists = tv_config.get('historical_term_lists', [])
    if not isinstance(historical_lists, list) or not all(isinstance(x, str) and x.strip() for x in historical_lists):
        raise ValueError("term_versions: 'historical_term_lists' must be a list of database names")

    databases = current_lists + historical_lists
    if len(databases) != len(set(databases)):
        raise ValueError("term_versions: a database is declared more than once")
    if not databases:
        raise ValueError("term_versions: no term-list databases are configured")

    frames = []
    sources = []
    for database in databases:
        constants_source = _rs_source(
            f"{database}/constants.csv", local_path_to_rs, github_user, github_branch
        )
        versions_source = _rs_source(
            f"{database}-versions/{database}-versions.csv",
            local_path_to_rs, github_user, github_branch
        )
        constants_df = pd.read_csv(constants_source, na_filter=False, dtype=str)
        versions_df = pd.read_csv(versions_source, na_filter=False, dtype=str)

        if constants_df.empty or 'domainRoot' not in constants_df.columns:
            raise ValueError(f"{database}: constants.csv lacks a domainRoot value")
        if 'term_localName' not in versions_df.columns:
            raise ValueError(f"{database}: versions CSV lacks term_localName")

        versions_df = versions_df.copy()
        versions_df['term_iri'] = str(constants_df.iloc[0]['domainRoot']) + versions_df['term_localName'].astype(str)
        frames.append(versions_df)
        sources.append((database, versions_source))

    obsolete = tv_config.get('obsolete_terms')
    if not isinstance(obsolete, dict):
        raise ValueError("term_versions: 'obsolete_terms' must be a mapping")
    obsolete_versions_rel = str(obsolete.get('versions', '')).strip()
    obsolete_map_rel = str(obsolete.get('term_version_map', '')).strip()
    if not obsolete_versions_rel or not obsolete_map_rel:
        raise ValueError("term_versions: obsolete_terms requires 'versions' and 'term_version_map'")

    obsolete_versions_source = _rs_source(
        obsolete_versions_rel, local_path_to_rs, github_user, github_branch
    )
    obsolete_map_source = _rs_source(
        obsolete_map_rel, local_path_to_rs, github_user, github_branch
    )
    obsolete_versions = pd.read_csv(obsolete_versions_source, na_filter=False, dtype=str)
    obsolete_map = pd.read_csv(obsolete_map_source, na_filter=False, dtype=str)

    if 'version' not in obsolete_versions.columns:
        raise ValueError("term_versions: obsolete versions CSV lacks 'version'")
    if not {'version', 'term'}.issubset(obsolete_map.columns):
        raise ValueError("term_versions: obsolete term/version map must contain 'version' and 'term'")

    duplicate_map = obsolete_map[obsolete_map.duplicated('version', keep=False)]
    if not duplicate_map.empty:
        duplicate_versions = ', '.join(sorted(set(duplicate_map['version'].astype(str))))
        raise ValueError(
            "term_versions: obsolete term/version map contains duplicate version mappings: "
            + duplicate_versions
        )

    obsolete_versions = obsolete_versions.merge(
        obsolete_map[['version', 'term']],
        on='version',
        how='left',
        validate='one_to_one',
    )
    missing_obsolete_terms = obsolete_versions[
        obsolete_versions['term'].isna() | (obsolete_versions['term'].astype(str) == '')
    ]
    if not missing_obsolete_terms.empty:
        missing_versions = ', '.join(missing_obsolete_terms['version'].astype(str))
        raise ValueError(
            "term_versions: obsolete versions have no term mapping: " + missing_versions
        )
    obsolete_versions['term_iri'] = obsolete_versions['term'].astype(str)
    obsolete_versions.drop(columns=['term'], inplace=True)
    frames.append(obsolete_versions)

    accumulated = pd.concat(frames, ignore_index=True, sort=True).fillna('')

    required_accum_columns = {source for _, source in TERM_VERSION_COLUMN_MAPPINGS}
    required_accum_columns.update({'replaces1_version', 'replaces2_version'})
    missing_columns = sorted(required_accum_columns - set(accumulated.columns))
    if missing_columns:
        raise ValueError(
            "term_versions: accumulated version metadata lacks column(s): "
            + ', '.join(missing_columns)
        )

    output_path = os.path.join(repoRoot, output)
    parent_error = _check_output_parent(output_path)
    if parent_error:
        raise ValueError(parent_error)

    return {
        'configuration': tv_config,
        'accumulated': accumulated,
        'output_path': output_path,
        'sources': sources,
        'obsolete_sources': (obsolete_versions_source, obsolete_map_source),
    }


def create_term_versions_csv(state):
    """Build the complete Darwin Core term-version history."""
    accumulated = state['accumulated']
    rows = []

    for _, row in accumulated.iterrows():
        output_row = {}
        for output_column, source_column in TERM_VERSION_COLUMN_MAPPINGS:
            if output_column == 'replaces':
                replacements = [
                    str(row.get('replaces_version', '')),
                    str(row.get('replaces1_version', '')),
                    str(row.get('replaces2_version', '')),
                ]
                output_row[output_column] = '|'.join(value for value in replacements if value)
            else:
                output_row[output_column] = row[source_column]
        rows.append(output_row)

    result = pd.DataFrame(
        rows,
        columns=[output for output, _ in TERM_VERSION_COLUMN_MAPPINGS]
    )

    recommended = result[result['status'].astype(str) == 'recommended'].copy()
    historical = result[result['status'].astype(str) != 'recommended'].copy()

    recommended.sort_values(
        by='term_iri',
        key=lambda column: column.astype(str).str.lower(),
        kind='stable',
        inplace=True,
    )
    # Preserve the old build-term_versions.py rule for historical records:
    # alphabetical ordering by the version IRI.
    historical.sort_values(
        by='iri',
        key=lambda column: column.astype(str).str.lower(),
        kind='stable',
        inplace=True,
    )

    result = pd.concat([recommended, historical], ignore_index=True)
    output_path = _stage_path(state['output_path'])
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    result.to_csv(output_path, index=False)
    return output_path, len(result), len(recommended), len(historical)


# -----------------
# Darwin Core Data Package preflight
# -----------------

DWC_DP_EXPECTED_HEADERS = {
    "dwc-dp-tables.csv": {
        "name", "title", "description", "notes", "example", "namespace",
        "dcterms:isVersionOf", "status",
    },
    "dwc-dp-fields.csv": {
        "table", "name", "key", "predicate", "related_table", "related_field",
        "title", "description", "notes", "example", "type", "format",
        "unique", "required", "minimum", "maximum", "namespace",
        "dcterms:isVersionOf", "status",
    },
}


def _dwc_dp_resolve_path(value, property_name):
    """Resolve one repository-relative path from the integrated dwc_dp config."""
    if not isinstance(value, str) or not value.strip():
        raise ValueError(
            f"Configuration property 'dwc_dp.{property_name}' must be a non-empty path string"
        )
    path = Path(value.strip())
    return path if path.is_absolute() else (Path(repoRoot) / path).resolve()


def _dwc_dp_preflight(config):
    """Validate DwC-DP configuration and maintained inputs without writing outputs."""
    dwc_dp = config.get('dwc_dp')
    if not isinstance(dwc_dp, dict):
        raise ValueError("Build configuration must contain a 'dwc_dp' mapping.")

    version = dwc_dp.get('version')
    if not isinstance(version, str) or not version.strip():
        raise ValueError("Configuration property 'dwc_dp.version' must be a non-empty string")

    required = {
        'sources.tables': ('sources', 'tables'),
        'sources.fields': ('sources', 'fields'),
        'profile.template': ('profile', 'template'),
        'profile.output': ('profile', 'output'),
        'profile.table_schemas': ('profile', 'table_schemas'),
        'qrg.template': ('qrg', 'template'),
        'qrg.output': ('qrg', 'output'),
        'qrg.images_source': ('qrg', 'images_source'),
        'qrg.images_output': ('qrg', 'images_output'),
        'sql.config': ('sql', 'config'),
        'sql.output': ('sql', 'output'),
        'csv_headers.output': ('csv_headers', 'output'),
        'designer.template': ('designer', 'template'),
        'designer.output': ('designer', 'output'),
    }
    paths = {}
    for label, keys in required.items():
        node = dwc_dp
        for key in keys:
            if not isinstance(node, dict) or key not in node:
                raise ValueError(f"Missing required configuration property 'dwc_dp.{label}'")
            node = node[key]
        paths[label] = _dwc_dp_resolve_path(node, label)

    groups = dwc_dp.get('qrg', {}).get('table_groups')
    if not isinstance(groups, list) or not groups or any(
        not isinstance(group, list) or not group for group in groups
    ):
        raise ValueError(
            "Configuration property 'dwc_dp.qrg.table_groups' must be a non-empty list of non-empty lists"
        )
    if any(not isinstance(name, str) or not name.strip() for group in groups for name in group):
        raise ValueError("Every entry in 'dwc_dp.qrg.table_groups' must be a non-empty table name")
    paths['qrg.table_groups'] = groups

    for label in ('sources.tables', 'sources.fields', 'profile.template', 'qrg.template', 'sql.config'):
        if not paths[label].is_file():
            raise FileNotFoundError(f"Configured DwC-DP input '{label}' not found: {paths[label]}")
        if not os.access(paths[label], os.R_OK):
            raise OSError(f"Configured DwC-DP input '{label}' is not readable: {paths[label]}")

    designer_template = paths['designer.template']
    if not designer_template.is_dir():
        raise FileNotFoundError(
            f"Configured DwC-DP Designer template directory not found: {designer_template}"
        )
    for relative in (Path('index.html'), Path('styles.css'), Path('js') / 'app.js'):
        candidate = designer_template / relative
        if not candidate.is_file():
            raise FileNotFoundError(f"Required Designer template file not found: {candidate}")

    qrg_images_source = paths['qrg.images_source']
    if not qrg_images_source.is_dir():
        raise FileNotFoundError(
            f"Configured DwC-DP QRG image source directory not found: {qrg_images_source}"
        )
    qrg_image_files = [path for path in qrg_images_source.rglob('*') if path.is_file()]
    if not qrg_image_files:
        raise ValueError(
            f"Configured DwC-DP QRG image source directory is empty: {qrg_images_source}"
        )
    for image_path in qrg_image_files:
        if not os.access(image_path, os.R_OK):
            raise OSError(f"DwC-DP QRG image is not readable: {image_path}")

    tables_csv = paths['sources.tables']
    fields_csv = paths['sources.fields']
    if tables_csv.parent != fields_csv.parent:
        raise ValueError("Configured DwC-DP table and field CSV files must currently share one directory")

    expected_by_path = {
        tables_csv: DWC_DP_EXPECTED_HEADERS['dwc-dp-tables.csv'],
        fields_csv: DWC_DP_EXPECTED_HEADERS['dwc-dp-fields.csv'],
    }
    for csv_path, expected in expected_by_path.items():
        with csv_path.open('r', encoding='utf-8-sig', newline='') as handle:
            reader = csv.DictReader(handle)
            actual = set(reader.fieldnames or [])
        missing = expected - actual
        extra = actual - expected
        if missing:
            raise ValueError(f"Missing required columns in {csv_path}: {sorted(missing)}")
        if extra:
            print(
                f"Warning: Unexpected columns in {csv_path.name} "
                f"(will be ignored): {sorted(extra)}"
            )

    tables = {}
    with tables_csv.open('r', encoding='utf-8-sig', newline='') as handle:
        for row in csv.DictReader(handle):
            if (row.get('status', '') or '').strip().lower() != 'recommended':
                continue
            name = (row.get('name', '') or '').strip()
            if name:
                tables[name] = row

    fields = defaultdict(list)
    with fields_csv.open('r', encoding='utf-8-sig', newline='') as handle:
        for row in csv.DictReader(handle):
            if (row.get('status', '') or '').strip().lower() != 'recommended':
                continue
            table = (row.get('table', '') or '').strip()
            name = (row.get('name', '') or '').strip()
            if table and name:
                fields[table].append(row)

    field_names_by_table = {
        table_name: {(row.get('name', '') or '').strip() for row in rows}
        for table_name, rows in fields.items()
    }
    relationship_errors = []
    for table_name, rows in fields.items():
        if table_name not in tables:
            relationship_errors.append(
                f"Recommended field rows exist for table '{table_name}', but that table is not recommended"
            )
        for row in rows:
            field_name = (row.get('name', '') or '').strip()
            key_value = (row.get('key', '') or '').strip().lower()
            relationship_values = {
                'predicate': (row.get('predicate', '') or '').strip(),
                'related_table': (row.get('related_table', '') or '').strip(),
                'related_field': (row.get('related_field', '') or '').strip(),
            }
            label = f"{table_name}.{field_name}"
            if key_value in {'fk', 'wfk'}:
                missing = [key for key, value in relationship_values.items() if not value]
                if missing:
                    relationship_errors.append(
                        f"Relationship field {label} with key='{key_value}' is missing: {', '.join(missing)}"
                    )
                    continue
                related_table = relationship_values['related_table']
                related_field = relationship_values['related_field']
                if related_table not in tables:
                    relationship_errors.append(
                        f"Relationship field {label} points to unknown or non-recommended table '{related_table}'"
                    )
                elif related_field not in field_names_by_table.get(related_table, set()):
                    relationship_errors.append(
                        f"Relationship field {label} points to missing field '{related_field}' in table '{related_table}'"
                    )
            else:
                populated = [key for key, value in relationship_values.items() if value]
                if populated:
                    relationship_errors.append(
                        f"Non-relationship field {label} has relationship metadata populated: {', '.join(populated)}"
                    )
    if relationship_errors:
        raise ValueError(
            "Relationship metadata validation failed in dwc-dp-fields.csv\n  - "
            + "\n  - ".join(relationship_errors)
        )

    grouped = [name for group in groups for name in group]
    seen = set()
    duplicates = []
    for name in grouped:
        if name in seen:
            duplicates.append(name)
        seen.add(name)
    if duplicates:
        raise ValueError(f"dwc_dp.qrg.table_groups contains duplicate table names: {duplicates}")
    grouped_set = set(grouped)
    missing_from_groups = set(tables) - grouped_set
    if missing_from_groups:
        raise ValueError(
            "Recommended DwC-DP tables are missing from dwc_dp.qrg.table_groups: "
            f"{sorted(missing_from_groups)}"
        )
    unknown_in_groups = grouped_set - set(tables)
    if unknown_in_groups:
        print(
            "Warning: dwc_dp.qrg.table_groups references non-recommended tables "
            f"(they will be skipped): {sorted(unknown_in_groups)}"
        )

    paths['version'] = version.strip()
    paths['recommended_table_count'] = len(tables)
    paths['recommended_field_count'] = sum(len(rows) for rows in fields.values())
    paths['owned_outputs'] = [
        paths['profile.output'], paths['profile.table_schemas'], paths['qrg.output'],
        paths['sql.output'], paths['csv_headers.output'], paths['designer.output'],
    ]
    return paths



# ---------------------------------------------------------------------------
# Darwin Core Data Package schema generation and validation
# ---------------------------------------------------------------------------
DWC_DP_BOOLEAN_COLUMNS = {"required", "unique"}
DWC_DP_REQUIRED_FIELD_PROPERTIES = ("description", "type")
DWC_DP_FRICTIONLESS_DATA_PACKAGE_SCHEMA_URI = "https://specs.frictionlessdata.io/schemas/data-package.json"
DWC_DP_PROFILE_ENUM_PATH = ("$defs", "dwc-dp-resource-names", "enum")
DWC_DP_PROFILE_ENUM_PLACEHOLDER = "{{DWC_DP_RESOURCE_NAMES}}"
DWC_DP_PROFILE_VERSION_PATH = ("version",)
DWC_DP_PROFILE_VERSION_PLACEHOLDER = "{{DWC_DP_VERSION}}"

def _dwc_dp_parse_scalar(s, *, column_name: str=''):
    """Coerce a CSV cell to a proper JSON scalar.

    Boolean coercion (true/yes -> True, false/no -> False) is applied ONLY to
    columns listed in BOOLEAN_COLUMNS.  All other columns receive numeric
    coercion or are returned as plain strings.
    """
    if s is None:
        return None
    t = str(s).strip()
    if t == '':
        return None
    low = t.lower()
    if column_name in DWC_DP_BOOLEAN_COLUMNS:
        if low in ('true', 'yes', '1'):
            return True
        if low in ('false', 'no', '0'):
            return False
    try:
        if '.' in t or ('e' in low and any((c.isdigit() for c in t)) and low.replace('e', '', 1).replace('.', '', 1).replace('-', '', 1).replace('+', '', 1).isdigit()):
            return float(t)
        return int(t)
    except ValueError:
        return t

def _dwc_dp_validate_csv_headers(vocabulary_dir: Path) -> None:
    """Check that required CSVs exist and contain all expected column names.

    Column *order* is not enforced.  Extra (unexpected) columns trigger a
    warning; missing required columns raise ValueError.
    """
    for filename, expected in DWC_DP_EXPECTED_HEADERS.items():
        path = vocabulary_dir / filename
        if not path.is_file():
            raise FileNotFoundError(f'Required input not found: {path}')
        with path.open('r', encoding='utf-8-sig', newline='') as fh:
            reader = csv.DictReader(fh)
            actual = set(reader.fieldnames or [])
        missing = expected - actual
        extra = actual - expected
        if missing:
            raise ValueError(f'Missing required columns in {path}:\n  {sorted(missing)}')
        if extra:
            print(f'Warning: Unexpected columns in {path.name} (will be ignored): {sorted(extra)}')


def _dwc_dp_load_recommended_tables_map(vocabulary_dir: Path) -> dict:
    """Return {table_name: row_dict} for every recommended table."""
    tables_csv = vocabulary_dir / 'dwc-dp-tables.csv'
    tables = {}
    with tables_csv.open('r', encoding='utf-8-sig', newline='') as fh:
        reader = csv.DictReader(fh)
        for row in reader:
            if (row.get('status', '') or '').strip().lower() != 'recommended':
                continue
            name = (row.get('name', '') or '').strip()
            if name:
                tables[name] = row
    return tables

def _dwc_dp_load_recommended_fields_map(vocabulary_dir: Path) -> dict:
    """Return {table_name: [ordered field rows]} for every recommended field."""
    fields_csv = vocabulary_dir / 'dwc-dp-fields.csv'
    fields_by_table = defaultdict(list)
    with fields_csv.open('r', encoding='utf-8-sig', newline='') as fh:
        reader = csv.DictReader(fh)
        for row in reader:
            if (row.get('status', '') or '').strip().lower() != 'recommended':
                continue
            table = (row.get('table', '') or '').strip()
            name = (row.get('name', '') or '').strip()
            if table and name:
                fields_by_table[table].append(row)
    return dict(fields_by_table)

def _dwc_dp_validate_field_relationship_metadata(recommended_tables: dict, recommended_fields: dict) -> None:
    """Validate relationship metadata embedded in dwc-dp-fields.csv."""
    field_names_by_table = {table_name: {(row.get('name', '') or '').strip() for row in rows} for table_name, rows in recommended_fields.items()}
    errors = []
    relationship_keys = {'fk', 'wfk'}
    for table_name, rows in recommended_fields.items():
        if table_name not in recommended_tables:
            errors.append(f"Recommended field rows exist for table '{table_name}', but that table is not recommended in dwc-dp-tables.csv")
        for row in rows:
            field_name = (row.get('name', '') or '').strip()
            key_val = (row.get('key', '') or '').strip().lower()
            predicate = (row.get('predicate', '') or '').strip()
            related_table = (row.get('related_table', '') or '').strip()
            related_field = (row.get('related_field', '') or '').strip()
            row_label = f'{table_name}.{field_name}'
            if key_val in relationship_keys:
                missing = [col for col, value in (('predicate', predicate), ('related_table', related_table), ('related_field', related_field)) if not value]
                if missing:
                    errors.append(f"Relationship field {row_label} with key='{key_val}' is missing required columns: {', '.join(missing)}")
                    continue
                if related_table not in recommended_tables:
                    errors.append(f"Relationship field {row_label} points to unknown or non-recommended related_table '{related_table}'")
                    continue
                target_fields = field_names_by_table.get(related_table, set())
                if related_field not in target_fields:
                    errors.append(f"Relationship field {row_label} points to missing related_field '{related_field}' in related_table '{related_table}'")
            else:
                populated = [col for col, value in (('predicate', predicate), ('related_table', related_table), ('related_field', related_field)) if value]
                if populated:
                    errors.append(f"Non-relationship field {row_label} has relationship metadata populated: {', '.join(populated)}")
    if errors:
        raise ValueError('Relationship metadata validation failed in dwc-dp-fields.csv\n  - ' + '\n  - '.join(errors))

def _dwc_dp_build_table_schemas(vocabulary_dir: Path, version: str) -> list:
    """Build the tableSchemas list from recommended rows in dwc-dp-tables.csv."""
    tables_csv = vocabulary_dir / 'dwc-dp-tables.csv'
    table_schemas = []
    with tables_csv.open('r', encoding='utf-8-sig', newline='') as fh:
        reader = csv.DictReader(fh)
        for row in reader:
            if (row.get('status', '') or '').strip().lower() != 'recommended':
                continue
            name = (row.get('name', '') or '').strip()
            title = (row.get('title', '') or '').strip()
            description = (row.get('description', '') or '').strip()
            notes = (row.get('notes', '') or '').strip()
            example = (row.get('example', '') or '').strip()
            namespace = (row.get('namespace', '') or '').strip()
            iri = (row.get('dcterms:isVersionOf', '') or '').strip()
            if not iri:
                iri = f'http://example.com/term-pending/{namespace}/{name}'
            ts = {'identifier': f'{version}/{name}', 'dcterms:isPartOf': 'http://www.tdwg.org/standards/450', 'url': f'table-schemas/{name}.json', 'name': name, 'title': title, 'description': description, 'notes': notes, 'examples': example, 'namespace': namespace, 'dcterms:isVersionOf': iri}
            table_schemas.append(ts)
    return table_schemas

def _dwc_dp_build_fields_for_table(fields_by_table: dict, table_name: str) -> tuple:
    """Return (fields, pk_names, foreign_keys, weak_foreign_keys) for one table.

    Accepts the pre-loaded fields map to avoid repeated CSV reads.
    """
    rows = fields_by_table.get(table_name, [])
    fields = []
    pk_names = []
    weak_pk_names = []
    foreign_keys = []
    weak_foreign_keys = []
    for row in rows:
        name = (row.get('name', '') or '').strip()
        title = (row.get('title', '') or '').strip()
        description = (row.get('description', '') or '').strip()
        notes = (row.get('notes', '') or '').strip()
        example = (row.get('example', '') or '').strip()
        ftype = (row.get('type', '') or '').strip()
        fmt = (row.get('format', '') or '').strip()
        namespace = (row.get('namespace', '') or '').strip()
        iri = (row.get('dcterms:isVersionOf', '') or '').strip()
        if not iri:
            iri = f'http://example.com/term-pending/{namespace}/{name}'
        key_val = (row.get('key', '') or '').strip().lower()
        if key_val == 'pk':
            pk_names.append(name)
        elif key_val == 'wpk':
            weak_pk_names.append(name)
        elif key_val in {'fk', 'wfk'}:
            predicate = (row.get('predicate', '') or '').strip()
            related_table = (row.get('related_table', '') or '').strip()
            related_field = (row.get('related_field', '') or '').strip()
            resource = '' if related_table == table_name else related_table
            rel_obj = {'fields': name, 'predicate': predicate, 'reference': {'resource': resource, 'fields': related_field}}
            if key_val == 'fk':
                foreign_keys.append(rel_obj)
            else:
                weak_foreign_keys.append(rel_obj)
        constraints_candidates = {'required': _dwc_dp_parse_scalar(row.get('required'), column_name='required'), 'unique': _dwc_dp_parse_scalar(row.get('unique'), column_name='unique'), 'minimum': _dwc_dp_parse_scalar(row.get('minimum'), column_name='minimum'), 'maximum': _dwc_dp_parse_scalar(row.get('maximum'), column_name='maximum')}
        constraints = {k: v for k, v in constraints_candidates.items() if v is not None}
        field_obj = {'name': name, 'title': title, 'description': description, 'notes': notes, 'examples': example, 'type': ftype, 'format': fmt, 'namespace': namespace, 'dcterms:isVersionOf': iri}
        if constraints:
            field_obj['constraints'] = constraints
        fields.append(field_obj)
    return (fields, pk_names, weak_pk_names, foreign_keys, weak_foreign_keys)

def _dwc_dp_write_table_schema_files(out_dir: Path, table_schemas: list, fields_by_table: dict) -> None:
    """Write one JSON schema file per table using the pre-loaded fields map."""
    ts_dir = out_dir / 'table-schemas'
    ts_dir.mkdir(parents=True, exist_ok=True)
    for ts in table_schemas:
        name = ts.get('name', '')
        fields, pk_names, weak_pk_names, foreign_keys, weak_foreign_keys = _dwc_dp_build_fields_for_table(fields_by_table, name)
        payload = dict(ts)
        payload['fields'] = fields
        if pk_names:
            payload['primaryKey'] = pk_names[0] if len(pk_names) == 1 else pk_names
        if weak_pk_names:
            payload['weakPrimaryKey'] = weak_pk_names[0] if len(weak_pk_names) == 1 else weak_pk_names
        if foreign_keys:
            payload['foreignKeys'] = foreign_keys
        if weak_foreign_keys:
            payload['weakForeignKeys'] = weak_foreign_keys
        dest = ts_dir / f'{name}.json'
        with dest.open('w', encoding='utf-8') as fh:
            json.dump(payload, fh, ensure_ascii=False, indent=2)
            fh.write('\n')


def _dwc_dp_generate_csv_headers(table_schemas_dir: Path, output_dir: Path) -> int:
    """Generate one header-only CSV per validated DwC-DP table schema.

    Column order is exactly the order of the schema's ``fields`` array. The
    output directory is a complete generated set and is replaced transactionally.
    """
    if output_dir.exists():
        shutil.rmtree(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    schema_files = sorted(table_schemas_dir.glob('*.json'))
    if not schema_files:
        raise ValueError(f'No DwC-DP table schemas available for CSV header generation: {table_schemas_dir}')

    generated = 0
    for schema_path in schema_files:
        with schema_path.open('r', encoding='utf-8') as handle:
            schema = json.load(handle)
        table_name = str(schema.get('name', '')).strip()
        fields = schema.get('fields')
        if not table_name:
            raise ValueError(f'DwC-DP table schema has no name: {schema_path}')
        if not isinstance(fields, list) or not fields:
            raise ValueError(f'DwC-DP table schema has no fields: {schema_path}')
        field_names = []
        for field in fields:
            if not isinstance(field, dict) or not str(field.get('name', '')).strip():
                raise ValueError(f'DwC-DP table schema contains a field without a name: {schema_path}')
            field_names.append(str(field['name']).strip())

        destination = output_dir / f'{table_name}.csv'
        with destination.open('w', encoding='utf-8', newline='') as handle:
            writer = csv.writer(handle, lineterminator='\n')
            writer.writerow(field_names)
        generated += 1

    return generated

def _dwc_dp_load_profile_template(profile_template_path: Path) -> dict:
    """Load and parse the DwC-DP profile template from disk."""
    if not profile_template_path.is_file():
        raise FileNotFoundError(f'Configured DwC-DP profile template not found: {profile_template_path}')
    with profile_template_path.open('r', encoding='utf-8') as fh:
        try:
            template = json.load(fh)
        except json.JSONDecodeError as exc:
            raise ValueError(f'Profile template is not valid JSON: {profile_template_path}\n  {exc}') from exc
    if not isinstance(template, dict):
        raise ValueError(f'Profile template must be a JSON object: {profile_template_path}')
    return template

def _dwc_dp_locate_profile_container(profile: dict, path: tuple) -> tuple:
    """Return (container_object, final_key) for path within profile.

    Raises ValueError if the path does not resolve, so a drifted template fails
    loudly rather than producing a profile with an unfilled placeholder.
    """
    container = profile
    for depth, key in enumerate(path[:-1]):
        nxt = container.get(key) if isinstance(container, dict) else None
        if not isinstance(nxt, dict):
            traversed = '/'.join(path[:depth + 1])
            raise ValueError(f"Profile template does not contain the expected object at '{traversed}'.  Expected path: {'/'.join(path)}")
        container = nxt
    return (container, path[-1])

def _dwc_dp_build_profile_payload(template: dict, recommended_table_names, version: str) -> dict:
    """Return a copy of the template with both placeholders filled in.

    The enum at PROFILE_ENUM_PATH is populated with the sorted names of the
    recommended tables, which are exactly the tables that make up the version.
    The string at PROFILE_VERSION_PATH is replaced with the version given on the
    command line, used verbatim.  Nothing else in the template is altered.
    """
    if not recommended_table_names:
        raise ValueError('Cannot build the profile: no recommended tables were found in dwc-dp-tables.csv')
    if not str(version or '').strip():
        raise ValueError('Cannot build the profile: version is empty')
    payload = copy.deepcopy(template)
    container, enum_key = _dwc_dp_locate_profile_container(payload, DWC_DP_PROFILE_ENUM_PATH)
    current = container.get(enum_key)
    if current != [DWC_DP_PROFILE_ENUM_PLACEHOLDER]:
        raise ValueError(f'''Profile template placeholder not found at {'/'.join(DWC_DP_PROFILE_ENUM_PATH)}.  Expected exactly ["{DWC_DP_PROFILE_ENUM_PLACEHOLDER}"], found: {json.dumps(current, ensure_ascii=False)}''')
    container[enum_key] = sorted(recommended_table_names)
    container, version_key = _dwc_dp_locate_profile_container(payload, DWC_DP_PROFILE_VERSION_PATH)
    current = container.get(version_key)
    if current != DWC_DP_PROFILE_VERSION_PLACEHOLDER:
        raise ValueError(f'''Profile template placeholder not found at {'/'.join(DWC_DP_PROFILE_VERSION_PATH)}.  Expected exactly "{DWC_DP_PROFILE_VERSION_PLACEHOLDER}", found: {json.dumps(current, ensure_ascii=False)}''')
    container[version_key] = version
    return payload

def _dwc_dp_write_profile_json(profile_json_path: Path, profile_template_path: Path, recommended_table_names, version: str) -> None:
    """Render the profile from its template and write it to disk."""
    template = _dwc_dp_load_profile_template(profile_template_path)
    payload = _dwc_dp_build_profile_payload(template, recommended_table_names, version)
    profile_json_path.parent.mkdir(parents=True, exist_ok=True)
    with profile_json_path.open('w', encoding='utf-8') as fh:
        json.dump(payload, fh, ensure_ascii=False, indent=2)
        fh.write('\n')

def _dwc_dp_make_schema_stage(table_schemas_dir: Path, version: str, profile_json_path: Path, profile_template_path: Path, tables_csv: Path, fields_csv: Path) -> None:
    """Validate CSVs, build table schemas, and write the DwC-DP profile."""
    out_dir = table_schemas_dir.parent
    out_dir.mkdir(parents=True, exist_ok=True)
    table_schemas_dir.mkdir(parents=True, exist_ok=True)
    if tables_csv.parent != fields_csv.parent:
        raise ValueError('Configured table and field CSV files must currently share one directory')
    if tables_csv.name != 'dwc-dp-tables.csv' or fields_csv.name != 'dwc-dp-fields.csv':
        raise ValueError('Configured source filenames must be dwc-dp-tables.csv and dwc-dp-fields.csv')
    vocabulary_dir = tables_csv.parent
    _dwc_dp_validate_csv_headers(vocabulary_dir)
    recommended_tables = _dwc_dp_load_recommended_tables_map(vocabulary_dir)
    recommended_fields = _dwc_dp_load_recommended_fields_map(vocabulary_dir)
    _dwc_dp_validate_field_relationship_metadata(recommended_tables, recommended_fields)
    table_schemas = _dwc_dp_build_table_schemas(vocabulary_dir, version)
    _dwc_dp_write_profile_json(profile_json_path, profile_template_path, set(recommended_tables.keys()), version)
    _dwc_dp_write_table_schema_files(out_dir, table_schemas, recommended_fields)

class DwcdpValidationResult:
    """Accumulate validation errors and warnings."""

    def __init__(self):
        self.errors = []
        self.warnings = []

    def error(self, msg: str) -> None:
        print(f'Error: {msg}')
        self.errors.append(msg)

    def warning(self, msg: str) -> None:
        print(f'Warning: {msg}')
        self.warnings.append(msg)

    @property
    def has_errors(self) -> bool:
        return bool(self.errors)

def _dwc_dp_load_json_for_validation(file_path: Path, result: DwcdpValidationResult) -> dict | None:
    """Load JSON for validation, recording parse or file errors."""
    try:
        with file_path.open('r', encoding='utf-8') as fh:
            return json.load(fh)
    except FileNotFoundError:
        result.error(f'File not found: {file_path}')
    except json.JSONDecodeError as exc:
        result.error(f'Invalid JSON in {file_path}: {exc}')
    return None

def _dwc_dp_check_schema_json(table_schemas_dir: Path, result: DwcdpValidationResult) -> dict[str, dict]:
    """Load generated schemas and check required field metadata."""
    loaded: dict[str, dict] = {}
    schema_files = sorted(table_schemas_dir.glob('*.json'))
    if not schema_files:
        result.error(f'No JSON table schemas found in: {table_schemas_dir}')
        return loaded
    for file_path in schema_files:
        data = _dwc_dp_load_json_for_validation(file_path, result)
        if data is None:
            continue
        schema_name = file_path.stem
        loaded[schema_name] = data
        fields = data.get('fields', [])
        if not isinstance(fields, list):
            result.error(f"Schema '{schema_name}' has a non-list 'fields' property")
            continue
        for field in fields:
            if not isinstance(field, dict):
                result.error(f"Schema '{schema_name}' contains a non-object field descriptor")
                continue
            field_name = field.get('name', '<unnamed>')
            for prop in DWC_DP_REQUIRED_FIELD_PROPERTIES:
                if prop not in field:
                    result.error(f"Field '{field_name}' in {file_path.name} is missing required property '{prop}'")
    return loaded

def _dwc_dp_check_frictionless(loaded_schemas: dict[str, dict], result: DwcdpValidationResult) -> None:
    """Validate every generated descriptor as a Frictionless Table Schema."""
    valid_count = 0
    for name, descriptor in loaded_schemas.items():
        try:
            Schema.from_descriptor(descriptor)
            valid_count += 1
        except Exception as exc:
            result.error(f"Frictionless validation failed for '{name}': {exc}")

def _dwc_dp_check_dwc_dp_profile(loaded_schemas: dict[str, dict], profile_json_path: Path, result: DwcdpValidationResult) -> None:
    """Validate generated schemas against DwC-DP-specific profile constraints.

    ``dwc-dp-profile.json`` is formally a Data Package profile, while the build
    produces standalone Table Schema descriptors.  To exercise the profile
    rules that apply to recognized DwC-DP resources, this function constructs
    an in-memory Data Package whose resources contain the generated schemas.

    The external Frictionless Data Package ``$ref`` is resolved locally to an
    empty schema.  Frictionless Table Schema validity is checked separately by
    ``check_frictionless``; this pass therefore enforces the additional
    DwC-DP-specific constraints expressed by the generated local profile.
    """
    profile = _dwc_dp_load_json_for_validation(profile_json_path, result)
    if profile is None:
        return
    synthetic_package = {'profile': profile.get('version', 'urn:dwc-dp:profile'), 'resources': [{'name': name, 'profile': 'tabular-data-resource', 'schema': descriptor} for name, descriptor in loaded_schemas.items()]}
    registry = Registry().with_resource(DWC_DP_FRICTIONLESS_DATA_PACKAGE_SCHEMA_URI, DRAFT4.create_resource({}))
    try:
        Draft4Validator.check_schema(profile)
    except Exception as exc:
        result.error(f"Invalid DwC-DP profile schema '{profile_json_path}': {exc}")
        return
    validator = Draft4Validator(profile, registry=registry, format_checker=FormatChecker())
    errors = sorted(validator.iter_errors(synthetic_package), key=lambda error: tuple((str(part) for part in error.absolute_path)))
    if not errors:
        return
    leaf_errors = []

    def collect_leaves(error):
        if error.context:
            for child in error.context:
                collect_leaves(child)
        else:
            leaf_errors.append(error)
    for error in errors:
        collect_leaves(error)
    seen = set()
    for error in leaf_errors:
        if error.validator == 'not':
            continue
        path = '/'.join((str(part) for part in error.absolute_path)) or '<package>'
        key = (path, error.message)
        if key in seen:
            continue
        seen.add(key)
        result.error(f"DwC-DP profile validation failed at '{path}': {error.message}")
    if not seen:
        for error in errors:
            path = '/'.join((str(part) for part in error.absolute_path)) or '<package>'
            result.error(f"DwC-DP profile validation failed at '{path}': {error.message}")

def _dwc_dp_check_foreign_keys(loaded_schemas: dict[str, dict], result: DwcdpValidationResult) -> None:
    """Validate foreign-key source/target existence and PK alignment."""

    def resolve_field(value) -> str | None:
        """Normalize a fields value that may be a string or a list."""
        if isinstance(value, list):
            return value[0] if value else None
        return value or None
    for schema_name, schema_data in loaded_schemas.items():
        source_fields = {field.get('name') for field in schema_data.get('fields', []) if isinstance(field, dict)}
        for fk in schema_data.get('foreignKeys', []):
            src_field = resolve_field(fk.get('fields'))
            if not src_field or src_field not in source_fields:
                result.error(f"Foreign key in '{schema_name}' references non-existent source field '{src_field}'")
                continue
            ref = fk.get('reference') or {}
            tgt_field = resolve_field(ref.get('fields'))
            tgt_resource = ref.get('resource', '').strip() or schema_name
            if tgt_resource not in loaded_schemas:
                result.error(f"Foreign key {schema_name}/{src_field} references non-existent target schema '{tgt_resource}'")
                continue
            ref_schema = loaded_schemas[tgt_resource]
            target_field_names = {field.get('name') for field in ref_schema.get('fields', []) if isinstance(field, dict)}
            if not tgt_field or tgt_field not in target_field_names:
                result.error(f"Foreign key {schema_name}/{src_field} references non-existent target field '{tgt_resource}/{tgt_field}'")
                continue
            tgt_primary_key = ref_schema.get('primaryKey')
            if tgt_primary_key is not None and tgt_field != tgt_primary_key:
                result.error(f"Foreign key {schema_name}/{src_field} targets '{tgt_resource}/{tgt_field}' which is not the primary key (primaryKey='{tgt_primary_key}')")

def _dwc_dp_validate_generated_artifacts(table_schemas_dir: Path, profile_json_path: Path) -> DwcdpValidationResult:
    """Run all validation passes on the generated DwC-DP artifacts."""
    result = DwcdpValidationResult()
    loaded_schemas = _dwc_dp_check_schema_json(table_schemas_dir, result)
    if loaded_schemas:
        _dwc_dp_check_frictionless(loaded_schemas, result)
        _dwc_dp_check_dwc_dp_profile(loaded_schemas, profile_json_path, result)
        _dwc_dp_check_foreign_keys(loaded_schemas, result)
    if result.has_errors:
        print(f'Validation failed: {len(result.errors)} error(s), {len(result.warnings)} warning(s).')
    else:
        warning_note = f' ({len(result.warnings)} warning(s))' if result.warnings else ''
        print(f'Validation passed{warning_note}.')
    return result


# ---------------------------------------------------------------------------
# DwC-DP Quick Reference Guide generation
# ---------------------------------------------------------------------------

def _dwc_dp_load_template(template_path: Path) -> str:
    """Load the HTML template from disk."""
    if not template_path.is_file():
        raise FileNotFoundError(
            f"HTML template not found: {template_path}\n"
            "Check the configured DwC-DP QRG template path."
        )
    return template_path.read_text(encoding="utf-8")


def _dwc_dp_build_foreign_key_summary(table_schema: dict, current_table_name: str = None) -> str:
    """Build the relationship summary in the same order as key fields occur.

    The table schema's ``fields`` array preserves the row order from
    dwc-dp-fields.csv.  Relationship metadata is stored separately as primaryKey,
    weakPrimaryKey, foreignKeys, and weakForeignKeys, so iterating those structures
    directly groups rows by relationship type.  Instead, collect relationship rows
    by source field and then emit them while walking ``fields`` in schema order.
    """
    relationships_by_field = defaultdict(list)

    primary_key = table_schema.get("primaryKey")
    if primary_key:
        pk_fields = primary_key if isinstance(primary_key, list) else [primary_key]
        for pk in pk_fields:
            relationships_by_field[pk].append(
                (pk, "", "", "", "primary key", "Yes")
            )

    weak_primary_key = table_schema.get("weakPrimaryKey")
    if weak_primary_key:
        wpk_fields = weak_primary_key if isinstance(weak_primary_key, list) else [weak_primary_key]
        for wpk in wpk_fields:
            relationships_by_field[wpk].append(
                (wpk, "", "", "", "weak primary key", "No")
            )

    for rel_name, rel_type, enforced in [
        ("foreignKeys", "foreign key", "Yes"),
        ("weakForeignKeys", "weak foreign key", "No"),
    ]:
        for rel in (table_schema.get(rel_name) or []):
            predicate = rel.get("predicate", "")
            src_fields = rel.get("fields")
            ref = rel.get("reference", {}) or {}
            tgt_table = ref.get("resource", "")
            tgt_fields = ref.get("fields")

            src_fields = [src_fields] if isinstance(src_fields, str) else src_fields
            tgt_fields = [tgt_fields] if isinstance(tgt_fields, str) else tgt_fields

            # Empty resource means self-referential (same table).
            tgt_table_display = (
                tgt_table
                if (isinstance(tgt_table, str) and tgt_table.strip())
                else (current_table_name or tgt_table)
            )

            for src, tgt in zip(src_fields or [], tgt_fields or []):
                relationships_by_field[src].append(
                    (src, predicate, tgt_table_display, tgt, rel_type, enforced)
                )

    # Emit relationship rows in exactly the order their source fields occur in the
    # schema fields array, which preserves dwc-dp-fields.csv order for this table.
    relationships = []
    emitted_fields = set()
    for field in (table_schema.get("fields") or []):
        if not isinstance(field, dict):
            continue
        field_name = (field.get("name") or "").strip()
        if not field_name:
            continue
        relationships.extend(relationships_by_field.get(field_name, []))
        emitted_fields.add(field_name)

    # Defensive fallback: retain any relationship whose source field was not found
    # in the fields array rather than silently dropping it.
    for field_name, field_relationships in relationships_by_field.items():
        if field_name not in emitted_fields:
            relationships.extend(field_relationships)

    if not relationships:
        return ""

    # Build required-field lookup from constraints or top-level field["required"].
    field_required_map = {}
    for f in (table_schema.get("fields") or []):
        if not isinstance(f, dict):
            continue
        name = (f.get("name") or "").strip()
        if not name:
            continue
        cons = f.get("constraints") if isinstance(f.get("constraints"), dict) else {}
        val = cons.get("required", f.get("required", False))
        if isinstance(val, bool):
            req = val
        elif isinstance(val, (int, float)):
            req = bool(val)
        elif isinstance(val, str):
            req = val.strip().lower() in {"true", "1", "yes", "y"}
        else:
            req = False
        field_required_map[name] = req

    rows = [
        '<div class="foreign-key-summary">',
        '<h4>Relationships to Other Tables</h4>',
        '<table class="term-table">',
        '<tr><td class="label">Field</td><td><b>Predicate</b></td>'
        '<td><b>Target Table</b></td><td><b>Target Field</b></td>'
        '<td><b>Relationship Type</b></td><td><b>Enforced</b></td>'
        '<td><b>Required</b></td></tr>',
    ]
    for src, predicate, tgt_table, tgt_field, rel_type, enforced in relationships:
        required = "Yes" if field_required_map.get(src, False) else "No"
        rows.append(
            f'<tr><td class="label">{src}</td><td>{predicate}</td>'
            f'<td>{tgt_table}</td><td>{tgt_field}</td>'
            f'<td>{rel_type}</td><td>{enforced}</td><td>{required}</td></tr>'
        )
    rows.append("</table></div>")
    return "\n".join(rows)


def _dwc_dp_build_term_section(field: dict, class_name: str) -> str:
    if not isinstance(field, dict):
        return ""

    order = [
        "title", "namespace", "class", "description", "notes", "examples",
        "type", "default", "constraints", "format", "dcterms:isVersionOf",
    ]
    labels = {
        "title": "Title (Label)",
        "class": "Table:",
        "namespace": "Namespace",
        "dcterms:isVersionOf": "dcterms:isVersionOf",
        "description": "Description",
        "notes": "Notes",
        "examples": "Examples",
        "type": "Type",
        "default": "Default",
        "constraints": "Constraints",
        "format": "Format",
    }

    rows = []
    for key in order:
        value = field.get(key)

        # Suppress Format when it is the default value.
        if key == "format" and str(value or "").strip().lower() == "default":
            continue

        if value is None:
            if key == "class":
                value = class_name
            else:
                continue

        if key == "constraints" and isinstance(value, dict):
            value = json.dumps(value, ensure_ascii=False)
        else:
            value = str(value).strip()

        if not value:
            continue

        if key == "dcterms:isVersionOf":
            if not (
                value.startswith("http://example.com/term-pending/")
                or value.startswith("https://example.com/term-pending/")
            ):
                value = f'<a href="{value}" target="_blank">{value}</a>'
        elif key == "class":
            value = f'<a href="#{value}" target="_blank">{value}</a>'
        elif key == "examples":
            parts = [ex.strip() for ex in str(value).split(";") if ex.strip()]
            value = ""
            for i, ex in enumerate(parts):
                if i > 0:
                    value += '<div class="examples-separator"></div>'
                value += f'<div class="examples-content">{ex}</div>'

        rows.append(f'<tr><td class="label">{labels[key]}</td><td>{value}</td></tr>')

    if not rows:
        return ""

    field_name = field.get("name", "").strip()
    full_id = f"{class_name}__{field_name}"
    display_name = field.get("name", "(no name)")
    return (
        f'<section class="term" id="{full_id}">\n'
        f'<div class="field-header-wrapper">'
        f'<h3 id="{full_id}">{display_name}</h3>'
        f'</div>\n'
        f'<table class="term-table">'
        + "".join(rows)
        + "</table>\n</section>"
    )


def _dwc_dp_generate_field_links(fields: list, class_name: str) -> str:
    return "".join(
        f'<a class="field-box" href="#{class_name}__{field.get("name", "").strip()}">'
        f'{field.get("name", "").strip()}</a>'
        for field in fields
        if isinstance(field, dict) and field.get("name")
    )


# ---------------------------------------------------------------------------
# DwC-DP profile and table-schema generation
# ---------------------------------------------------------------------------

def _dwc_dp_generate_qrg(
    table_schemas_dir: Path,
    output_html_path: Path,
    template_path: Path,
    version: str,
    ordered_groups: list[list[str]],
) -> None:
    """Read the generated DwC-DP table schemas and render the QRG HTML."""
    content_parts = []
    class_links_parts = []

    for group in ordered_groups:
        for table_name in group:
            schema_file = table_schemas_dir / f"{table_name}.json"
            if not schema_file.is_file():
                print(
                    f"Warning: Schema file for '{table_name}' not found at "
                    f"{schema_file} — skipping."
                )
                continue
            with schema_file.open("r", encoding="utf-8") as f:
                schema = json.load(f)

            table = schema
            fields = schema.get("fields", [])
            class_name = table.get("title", table_name)

            # --- Table header ---
            content_parts.append(
                f'<div class="class-header-wrapper">'
                f'<h2 id="{class_name}" class="class-header">{class_name}</h2>'
                f'</div>'
            )

            if table.get("identifier"):
                content_parts.append(
                    f'<p><strong>Identifier:</strong> {table["identifier"]}</p>'
                )

            content_parts.append(
                f'<p><strong>Description:</strong> '
                f'{table.get("description", "No description.")}</p>'
            )

            if table.get("notes"):
                content_parts.append(
                    f'<p><strong>Notes:</strong> {table["notes"]}</p>'
                )

            ex_val = table.get("examples") or table.get("example")
            if ex_val:
                content_parts.append("<p><strong>Examples:</strong></p>")
                parts = [ex.strip() for ex in str(ex_val).split(";") if ex.strip()]
                ex_html = ""
                for i, ex in enumerate(parts):
                    if i > 0:
                        ex_html += '<div class="examples-separator"></div>'
                    ex_html += f'<div class="examples-content">{ex}</div>'
                content_parts.append(ex_html)

            # dcterms:isVersionOf for the table.
            src = str(table.get("dcterms:isVersionOf") or "").strip()
            if src:
                if src.startswith(("http://", "https://")) and "example.com" not in src:
                    content_parts.append(
                        f'<p><strong>dcterms:isVersionOf:</strong> '
                        f'<a href="{src}" target="_blank">{src}</a></p>'
                    )
                else:
                    content_parts.append(
                        f'<p><strong>dcterms:isVersionOf:</strong> {src}</p>'
                    )

            # Relationship summary (schema already loaded above).
            content_parts.append(_dwc_dp_build_foreign_key_summary(schema, table_name))

            # Field index and term sections.
            field_links = _dwc_dp_generate_field_links(fields, class_name)
            if field_links:
                content_parts.append(
                    f'<nav class="field-index"><strong>Fields:</strong><br>'
                    f'{field_links}</nav>'
                )
            for field in fields:
                term_html = _dwc_dp_build_term_section(field, class_name)
                if term_html:
                    content_parts.append(term_html)

            class_links_parts.append(
                f'<a class="class-box" href="#{class_name}">{class_name}</a>'
            )

        class_links_parts.append('<div class="menu-separator"></div>')
    template = _dwc_dp_load_template(template_path)
    html = template.format(
        content="\n".join(content_parts),
        class_links="\n".join(class_links_parts),
        version=version,
    )

    output_html_path.parent.mkdir(parents=True, exist_ok=True)
    with output_html_path.open("w", encoding="utf-8") as out:
        out.write(html)


# ---------------------------------------------------------------------------
# DwC-DP PostgreSQL DDL generation
# ---------------------------------------------------------------------------

DWC_DP_POSTGRES_RESERVED = {
    "all", "analyse", "analyze", "and", "any", "array", "as", "asc", "asymmetric",
    "authorization", "between", "bigint", "binary", "bit", "boolean", "both", "case",
    "cast", "char", "character", "check", "coalesce", "collate", "column", "constraint",
    "create", "cross", "current_catalog", "current_date", "current_role", "current_schema",
    "current_time", "current_timestamp", "current_user", "default", "deferrable", "desc",
    "distinct", "do", "else", "end", "except", "exists", "extract", "false", "fetch",
    "for", "foreign", "freeze", "from", "full", "grant", "group", "having", "ilike",
    "in", "initially", "inner", "intersect", "into", "is", "isnull", "join", "lateral",
    "leading", "left", "like", "limit", "localtime", "localtimestamp", "natural", "not",
    "notnull", "null", "offset", "on", "only", "or", "order", "outer", "overlaps",
    "placing", "primary", "references", "returning", "right", "select", "session_user",
    "similar", "smallint", "some", "symmetric", "table", "then", "to", "trailing", "true",
    "union", "unique", "user", "using", "variadic", "verbose", "when", "where", "window",
    "with", "class",
}


@dataclass
class _DwcDpColumn:
    logical_name: str
    sql_name: str
    logical_type: str
    constraints: dict[str, Any] = field(default_factory=dict)
    description: str | None = None


@dataclass
class _DwcDpForeignKey:
    source_fields: list[str]
    target_resource: str
    target_fields: list[str]
    weak: bool = False


@dataclass
class _DwcDpTable:
    logical_name: str
    sql_name: str
    columns: list[_DwcDpColumn]
    primary_key: list[str] = field(default_factory=list)
    weak_primary_key: list[str] = field(default_factory=list)
    foreign_keys: list[_DwcDpForeignKey] = field(default_factory=list)
    weak_foreign_keys: list[_DwcDpForeignKey] = field(default_factory=list)
    title: str | None = None
    description: str | None = None


class _DwcDpSqlGeneratorError(Exception):
    pass


def _dwc_dp_snake_case(name: str) -> str:
    name = name.replace("-", "_")
    name = re.sub(r"(.)([A-Z][a-z]+)", r"\1_\2", name)
    name = re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", name)
    name = re.sub(r"__+", "_", name)
    return name.lower()


def _dwc_dp_quote_ident(name: str) -> str:
    if re.fullmatch(r"[a-z_][a-z0-9_]*", name) and name not in DWC_DP_POSTGRES_RESERVED:
        return name
    return '"' + name.replace('"', '""') + '"'


def _dwc_dp_make_constraint_name(table: str, base: str) -> str:
    raw = f"{table}_{base}"
    if len(raw) <= 63:
        return raw
    digest = hashlib.sha1(raw.encode("utf-8")).hexdigest()[:8]
    head = raw[: 63 - 1 - len(digest)]
    return f"{head}_{digest}"


def _dwc_dp_normalize_listish(value: Any) -> list[str]:
    """Coerce None, a scalar, or a list into a flat list of strings."""
    if value is None:
        return []
    if isinstance(value, list):
        return [str(v) for v in value]
    return [str(value)]


def _dwc_dp_fetch_url_text(url: str) -> str:
    headers = {
        "Accept": "text/csv, text/plain;q=0.9, */*;q=0.8",
        "User-Agent": "build_artifacts.py DwC-DP SQL generator/1.0",
    }
    req = Request(url, headers=headers)
    try:
        with urlopen(req, timeout=30) as response:  # nosec B310
            raw = response.read()
            charset = response.headers.get_content_charset() or "utf-8"
            return raw.decode(charset, errors="replace")
    except URLError as exc:  # pragma: no cover
        raise _DwcDpSqlGeneratorError(f"Failed to fetch vocabulary URL {url}: {exc}") from exc


def _dwc_dp_read_rs_text(
    relative_path: str,
    local_path_to_rs: str | None,
    github_user: str,
    github_branch: str,
) -> tuple[str, str]:
    """Read a DwC-DP SQL resource from the selected rs.tdwg.org source.

    Local builds read only from the configured rs.tdwg.org checkout. Remote
    builds use the same GitHub user and branch selected for the rest of the
    Darwin Core build.
    """
    normalized = str(relative_path).strip().lstrip("/")
    if not normalized:
        raise _DwcDpSqlGeneratorError("Empty rs.tdwg.org resource path")

    if local_path_to_rs:
        source = Path(local_path_to_rs).expanduser().resolve() / normalized
        if not source.is_file():
            raise _DwcDpSqlGeneratorError(
                f"DwC-DP SQL vocabulary resource not found in local rs.tdwg.org checkout: {source}"
            )
        try:
            return source.read_text(encoding="utf-8"), str(source)
        except OSError as exc:
            raise _DwcDpSqlGeneratorError(
                f"Unable to read DwC-DP SQL vocabulary resource {source}: {exc}"
            ) from exc

    url = (
        f"https://raw.githubusercontent.com/{github_user}/rs.tdwg.org/"
        f"{github_branch}/{normalized}"
    )
    return _dwc_dp_fetch_url_text(url), url


def _dwc_dp_extract_controlled_values_from_csv(text: str, url: str) -> list[str]:
    """Extract controlled value strings from a TDWG rs.tdwg.org CSV vocabulary file.

    Expects a header row containing 'controlled_value_string' and 'type' columns.
    Rows where type is skos:Concept and the term is not deprecated are included.
    """
    skos_concept = "http://www.w3.org/2004/02/skos/core#Concept"
    reader = csv.DictReader(io.StringIO(text))
    if reader.fieldnames is None or "controlled_value_string" not in reader.fieldnames:
        raise _DwcDpSqlGeneratorError(
            f"CSV at {url} has no 'controlled_value_string' column — "
            "check that the vocabulary_path points to a TDWG rs.tdwg.org CSV file"
        )
    values: list[str] = []
    for row in reader:
        if row.get("term_deprecated", "").strip():
            continue
        if row.get("type", "").strip() != skos_concept:
            continue
        cv = row.get("controlled_value_string", "").strip()
        if cv:
            values.append(cv)
    return values


def _dwc_dp_parse_fk_items(items: list[dict[str, Any]], *, weak: bool) -> list[_DwcDpForeignKey]:
    output: list[_DwcDpForeignKey] = []
    for item in items or []:
        ref = item.get("reference", {})
        source_fields = _dwc_dp_normalize_listish(item.get("fields"))
        target_resource = ref.get("resource", "")
        target_fields = _dwc_dp_normalize_listish(ref.get("fields"))
        if not source_fields or not target_fields:
            raise _DwcDpSqlGeneratorError(f"Malformed foreign key entry: {item}")
        output.append(
            _DwcDpForeignKey(
                source_fields=source_fields,
                target_resource=str(target_resource),
                target_fields=target_fields,
                weak=weak,
            )
        )
    return output


def _dwc_dp_read_schema_file(path: Path) -> _DwcDpTable:
    with path.open("r", encoding="utf-8") as handle:
        try:
            data = json.load(handle)
        except json.JSONDecodeError as exc:
            raise _DwcDpSqlGeneratorError(f"Invalid JSON in schema file {path}: {exc}") from exc

    try:
        logical_name = data["name"]
        sql_name = _dwc_dp_snake_case(logical_name)
        columns: list[_DwcDpColumn] = []
        for field_obj in data.get("fields", []):
            logical_field = field_obj["name"]
            sql_field = _dwc_dp_snake_case(logical_field)
            columns.append(
                _DwcDpColumn(
                    logical_name=logical_field,
                    sql_name=sql_field,
                    logical_type=field_obj.get("type", "string"),
                    constraints=field_obj.get("constraints", {}) or {},
                    description=field_obj.get("description"),
                )
            )
    except KeyError as exc:
        raise _DwcDpSqlGeneratorError(f"Schema file {path} is missing required key {exc}") from exc

    return _DwcDpTable(
        logical_name=logical_name,
        sql_name=sql_name,
        columns=columns,
        primary_key=_dwc_dp_normalize_listish(data.get("primaryKey")),
        weak_primary_key=_dwc_dp_normalize_listish(data.get("weakPrimaryKey")),
        foreign_keys=_dwc_dp_parse_fk_items(data.get("foreignKeys", []), weak=False),
        weak_foreign_keys=_dwc_dp_parse_fk_items(data.get("weakForeignKeys", []), weak=True),
        title=data.get("title"),
        description=data.get("description"),
    )


def _dwc_dp_collect_schema_files(input_path: Path) -> list[Path]:
    """Return JSON table schema files from the generated schema directory."""
    if not input_path.is_dir():
        raise _DwcDpSqlGeneratorError(f"Table schema directory not found: {input_path}")

    files = [
        p for p in input_path.glob("*.json")
        if p.is_file() and not p.name.startswith("._")
    ]
    if not files:
        raise _DwcDpSqlGeneratorError(f"No JSON schema files found in {input_path}")
    return sorted(files)


def _dwc_dp_load_tables(input_path: Path) -> dict[str, _DwcDpTable]:
    """Load all generated table schemas from the fixed schema directory."""
    tables: dict[str, _DwcDpTable] = {}
    for path in _dwc_dp_collect_schema_files(input_path):
        table = _dwc_dp_read_schema_file(path)
        if table.logical_name in tables:
            raise _DwcDpSqlGeneratorError(f"Duplicate table name found: {table.logical_name}")
        tables[table.logical_name] = table
    return tables

def _dwc_dp_load_sidecar(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        data = yaml.safe_load(handle) or {}
    if not isinstance(data, dict):
        raise _DwcDpSqlGeneratorError("YAML sidecar root must be a mapping/object")
    return data


class _DwcDpSqlGenerator:
    def __init__(
        self,
        tables: dict[str, _DwcDpTable],
        config: dict[str, Any],
        local_path_to_rs: str | None,
        github_user: str,
        github_branch: str,
    ) -> None:
        self.tables = tables
        self.config = config
        self.local_path_to_rs = local_path_to_rs
        self.github_user = github_user
        self.github_branch = github_branch
        self.column_name_map = {
            table.logical_name: {column.logical_name: column.sql_name for column in table.columns}
            for table in tables.values()
        }
        self.validate_references()

    def validate_references(self) -> None:
        for table in self.tables.values():
            column_names = {column.logical_name for column in table.columns}
            for logical_pk in table.primary_key:
                if logical_pk not in column_names:
                    raise _DwcDpSqlGeneratorError(
                        f"Table {table.logical_name}: primaryKey references missing field {logical_pk}"
                    )
            for fk in [*table.foreign_keys, *table.weak_foreign_keys]:
                for source in fk.source_fields:
                    if source not in column_names:
                        raise _DwcDpSqlGeneratorError(
                            f"Table {table.logical_name}: FK source field {source} does not exist"
                        )
                target_table_name = table.logical_name if fk.target_resource == "" else fk.target_resource
                if target_table_name not in self.tables:
                    raise _DwcDpSqlGeneratorError(
                        f"Table {table.logical_name}: FK target resource {target_table_name} does not exist"
                    )
                target_table = self.tables[target_table_name]
                target_columns = {column.logical_name for column in target_table.columns}
                for target in fk.target_fields:
                    if target not in target_columns:
                        raise _DwcDpSqlGeneratorError(
                            f"Table {table.logical_name}: FK target field {target_table_name}.{target} does not exist"
                        )
                # Check that target fields form a key (primary key or unique) on the target table.
                target_fields_set = set(fk.target_fields)
                is_pk = target_fields_set == set(target_table.primary_key)
                is_weak_pk = target_fields_set == set(target_table.weak_primary_key)

                unique_cols = {
                    col.logical_name
                    for col in target_table.columns
                    if (col.constraints or {}).get("unique")
                }
                is_unique = len(fk.target_fields) == 1 and fk.target_fields[0] in unique_cols
                if not (is_pk or is_weak_pk or is_unique):
                    msg = (
                        f"Table {table.logical_name}: FK target fields {fk.target_fields} "
                        f"on {target_table_name} are not a primary key or unique column"
                    )
                    if fk.weak:
                        print(f"Warning: {msg}", file=sys.stderr)
                    else:
                        raise _DwcDpSqlGeneratorError(msg)

    def type_override(self, table: str, column: str) -> str | None:
        return (
            self.config.get("types", {})
            .get("columns", {})
            .get(table, {})
            .get(column, {})
            .get("sql_type")
        )

    def enum_binding(self, table: str, column: str) -> str | None:
        return (
            self.config.get("enum_bindings", {})
            .get(table, {})
            .get(column, {})
            .get("enum")
        )

    def default_value(self, table: str, column: str) -> Any:
        return (
            self.config.get("defaults", {})
            .get("columns", {})
            .get(table, {})
            .get(column, {})
            .get("value")
        )

    def pg_type_for_column(self, table: str, column: _DwcDpColumn) -> str:
        enum_name = self.enum_binding(table, column.logical_name)
        if enum_name:
            if enum_name not in self.config.get("enums", {}):
                raise _DwcDpSqlGeneratorError(
                    f"Column {table}.{column.logical_name} binds to undefined enum {enum_name}"
                )
            return _dwc_dp_quote_ident(_dwc_dp_snake_case(enum_name))

        override = self.type_override(table, column.logical_name)
        if override:
            return override

        type_map = {
            "string": "TEXT",
            "integer": "INTEGER",
            "number": "NUMERIC",
            "boolean": "BOOLEAN",
        }
        try:
            return type_map[column.logical_type]
        except KeyError as exc:
            raise _DwcDpSqlGeneratorError(
                f"Unsupported logical type {column.logical_type!r} for {table}.{column.logical_name}"
            ) from exc

    def column_checks_from_schema(self, column: _DwcDpColumn) -> list[str]:
        checks: list[str] = []
        constraints = column.constraints or {}
        minimum = constraints.get("minimum")
        maximum = constraints.get("maximum")
        if minimum is not None:
            checks.append(f"value >= {minimum}")
        if maximum is not None:
            checks.append(f"value <= {maximum}")
        return checks

    def render_header_comment(self) -> str:
        metadata = self.config.get("metadata", {})
        lines = ["/*"]
        preferred_order = ["title", "version", "source_table_schemas", "generated_by"]
        seen: set[str] = set()
        for key in preferred_order:
            if key in metadata:
                label = key.replace("_", " ").capitalize()
                lines.append(f"{label}: {metadata[key]}")
                seen.add(key)
        for key, value in metadata.items():
            if key in ("notes", "example_run") or key in seen:
                continue
            label = key.replace("_", " ").capitalize()
            lines.append(f"{label}: {value}")
        notes = metadata.get("notes", [])
        if notes:
            lines.append("")
            lines.append("Notes:")
            for note in notes:
                lines.append(f"- {note}")
        example_run = metadata.get("example_run", "").strip()
        if example_run:
            lines.append("")
            lines.append("Example run:")
            for run_line in example_run.splitlines():
                lines.append(f"  {run_line}")
        lines.append("*/")
        return "\n".join(lines)

    def resolve_enum_values(self, enum_name: str, spec: dict[str, Any]) -> list[str]:
        values = [str(v) for v in spec.get("values", []) or []]
        if values:
            return values

        vocabulary_path = spec.get("vocabulary_path")
        if vocabulary_path:
            text, source = _dwc_dp_read_rs_text(
                str(vocabulary_path),
                self.local_path_to_rs,
                self.github_user,
                self.github_branch,
            )
            values = _dwc_dp_extract_controlled_values_from_csv(text, source)
            if values:
                action = "loaded" if self.local_path_to_rs else "fetched"
                print(
                    f"Enum '{enum_name}': {action} {len(values)} value(s) from {source}",
                    file=sys.stderr,
                )
                return values
            raise _DwcDpSqlGeneratorError(
                f"Enum {enum_name} could not extract controlled values from {source}"
            )

        raise _DwcDpSqlGeneratorError(
            f"Enum {enum_name} must define either 'values' or 'vocabulary_path'"
        )

    def render_enums(self) -> str:
        enums = self.config.get("enums", {})
        if not enums:
            return ""
        statements: list[str] = []
        for enum_name, spec in enums.items():
            values = self.resolve_enum_values(enum_name, spec)
            if not values:
                raise _DwcDpSqlGeneratorError(f"Enum {enum_name} has no values")
            qname = _dwc_dp_quote_ident(_dwc_dp_snake_case(enum_name))
            literal_list = ",\n  ".join("'" + str(v).replace("'", "''") + "'" for v in values)
            statements.append(f"CREATE TYPE {qname} AS ENUM (\n  {literal_list}\n);")
        return "\n\n".join(statements)

    def render_create_table(self, table: _DwcDpTable) -> str:
        lines: list[str] = []
        if table.title or table.description:
            if table.title:
                lines.append(f"-- {table.title}")
            if table.description:
                for desc_line in str(table.description).splitlines():
                    lines.append(f"-- {desc_line}")
        column_defs: list[str] = []
        pk_sql_names = [self.column_name_map[table.logical_name][name] for name in table.primary_key]
        single_pk = pk_sql_names[0] if len(pk_sql_names) == 1 else None

        for column in table.columns:
            parts = [_dwc_dp_quote_ident(column.sql_name), self.pg_type_for_column(table.logical_name, column)]
            constraints = column.constraints or {}
            if constraints.get("required"):
                parts.append("NOT NULL")
            if constraints.get("unique") and column.sql_name != single_pk:
                parts.append("UNIQUE")
            default_value = self.default_value(table.logical_name, column.logical_name)
            if default_value is not None:
                parts.append(f"DEFAULT {default_value}")
            checks = self.column_checks_from_schema(column)
            for expr in checks:
                parts.append(f"CHECK ({expr})")
            if column.sql_name == single_pk:
                parts.append("PRIMARY KEY")
            column_defs.append("  " + " ".join(parts))

        if len(pk_sql_names) > 1:
            pk_expr = ", ".join(_dwc_dp_quote_ident(name) for name in pk_sql_names)
            column_defs.append(f"  PRIMARY KEY ({pk_expr})")

        lines.append(f"CREATE TABLE {_dwc_dp_quote_ident(table.sql_name)} (")
        lines.append(",\n".join(column_defs))
        lines.append(");")
        return "\n".join(lines)

    def per_table_foreign_key_statements(self, table: _DwcDpTable) -> list[str]:
        statements: list[str] = []
        for fk in table.foreign_keys:
            src_cols = [self.column_name_map[table.logical_name][name] for name in fk.source_fields]
            target_table_logical = table.logical_name if fk.target_resource == "" else fk.target_resource
            target_table = self.tables[target_table_logical]
            tgt_cols = [self.column_name_map[target_table_logical][name] for name in fk.target_fields]
            base = "_".join(src_cols + ["fkey"])
            cname = _dwc_dp_make_constraint_name(table.sql_name, base)
            statements.append(
                "ALTER TABLE {table_name} ADD CONSTRAINT {cname} FOREIGN KEY ({src}) "
                "REFERENCES {target} ({tgt}) ON DELETE CASCADE DEFERRABLE;".format(
                    table_name=_dwc_dp_quote_ident(table.sql_name),
                    cname=_dwc_dp_quote_ident(cname),
                    src=", ".join(_dwc_dp_quote_ident(c) for c in src_cols),
                    target=_dwc_dp_quote_ident(target_table.sql_name),
                    tgt=", ".join(_dwc_dp_quote_ident(c) for c in tgt_cols),
                )
            )
        return statements

    def per_table_extra_check_statements(self, table: _DwcDpTable) -> list[str]:
        checks_cfg = self.config.get("checks", {})
        statements: list[str] = []

        for item in checks_cfg.get("tables", {}).get(table.logical_name, []):
            name = item["name"]
            sql_expr = item["sql"]
            statements.append(
                f"ALTER TABLE {_dwc_dp_quote_ident(table.sql_name)} "
                f"ADD CONSTRAINT {_dwc_dp_quote_ident(_dwc_dp_make_constraint_name(table.sql_name, name))} "
                f"CHECK ({sql_expr});"
            )

        for logical_col, items in checks_cfg.get("columns", {}).get(table.logical_name, {}).items():
            if logical_col not in self.column_name_map[table.logical_name]:
                raise _DwcDpSqlGeneratorError(f"Unknown column in checks.columns: {table.logical_name}.{logical_col}")
            for item in items:
                name = item["name"]
                sql_expr = item["sql"]
                statements.append(
                    f"ALTER TABLE {_dwc_dp_quote_ident(table.sql_name)} "
                    f"ADD CONSTRAINT {_dwc_dp_quote_ident(_dwc_dp_make_constraint_name(table.sql_name, name))} "
                    f"CHECK ({sql_expr});"
                )
        return statements

    def per_table_index_statements(self, table: _DwcDpTable) -> list[str]:
        statements: list[str] = []
        seen: set[tuple[str, ...]] = set()
        for fk in [*table.foreign_keys, *table.weak_foreign_keys]:
            src_cols = tuple(self.column_name_map[table.logical_name][name] for name in fk.source_fields)
            if src_cols in seen:
                continue
            seen.add(src_cols)
            idx_name = _dwc_dp_make_constraint_name(table.sql_name, "_".join([*src_cols, "idx"]))
            statements.append(
                f"CREATE INDEX {_dwc_dp_quote_ident(idx_name)} ON {_dwc_dp_quote_ident(table.sql_name)} "
                f"({', '.join(_dwc_dp_quote_ident(c) for c in src_cols)});"
            )
        return statements

    def render_table_section(self, table: _DwcDpTable) -> str:
        parts = [self.render_create_table(table)]
        fk_statements = self.per_table_foreign_key_statements(table)
        if fk_statements:
            parts.append("\n".join(fk_statements))
        check_statements = self.per_table_extra_check_statements(table)
        if check_statements:
            parts.append("\n".join(check_statements))
        index_statements = self.per_table_index_statements(table)
        if index_statements:
            parts.append("\n".join(index_statements))
        return "\n\n".join(parts)

    def generate(self) -> str:
        sections = [self.render_header_comment()]
        enums = self.render_enums()
        if enums:
            sections.extend(["", "-- ENUMs", enums])
        sections.append("")
        sections.append("-- Tables, constraints, and indexes")
        sections.append(
            "\n\n".join(
                self.render_table_section(table)
                for table in sorted(self.tables.values(), key=lambda t: t.sql_name)
            )
        )
        return "\n".join(sections)


# ---------------------------------------------------------------------------
# PostgreSQL DDL generation
# ---------------------------------------------------------------------------




def _dwc_dp_generate_postgresql_ddl(
    table_schemas_dir: Path,
    config_path: Path,
    output_path: Path,
    version: str,
    local_path_to_rs: str | None,
    github_user: str,
    github_branch: str,
) -> None:
    """Generate PostgreSQL DDL from the validated DwC-DP table schemas."""
    if not config_path.is_file():
        raise _DwcDpSqlGeneratorError(f"SQL configuration file not found: {config_path}")

    tables = _dwc_dp_load_tables(table_schemas_dir)
    config = _dwc_dp_load_sidecar(config_path)

    # The SQL metadata version is derived from the same version argument used
    # to generate the DwC-DP profile and table schemas.  It is intentionally
    # not maintained independently in generate_sql.yaml.
    metadata = config.setdefault("metadata", {})
    metadata["version"] = version

    generator = _DwcDpSqlGenerator(
        tables, config, local_path_to_rs, github_user, github_branch
    )
    sql = generator.generate() + "\n"

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(sql, encoding="utf-8")


# ---------------------------------------------------------------------------
# DwC-DP Designer generation
# ---------------------------------------------------------------------------

DWC_DP_DESIGNER_DATA_FILENAME = "data.js"


def _dwc_dp_generate_designer(
    designer_template_dir: Path,
    designer_output_dir: Path,
    version: str,
    profile_json_path: Path,
    table_schemas_dir: Path,
) -> None:
    """Publish the Designer and embed the current DwC-DP model in data.js."""
    required_files = (
        Path("index.html"),
        Path("styles.css"),
        Path("js") / "app.js",
    )

    missing = [
        str(designer_template_dir / rel)
        for rel in required_files
        if not (designer_template_dir / rel).is_file()
    ]
    if missing:
        raise FileNotFoundError(
            "Designer template is incomplete. Missing:\n  " + "\n  ".join(missing)
        )

    profile = _dwc_dp_load_json_for_validation(profile_json_path, DwcdpValidationResult())
    if profile is None:
        raise FileNotFoundError(
            f"Could not load generated DwC-DP profile: {profile_json_path}"
        )

    table_names = (
        profile.get("$defs", {})
        .get("dwc-dp-resource-names", {})
        .get("enum", [])
    )
    if not isinstance(table_names, list) or not table_names:
        raise ValueError(
            "Generated DwC-DP profile does not contain "
            "$defs.dwc-dp-resource-names.enum"
        )

    schemas = {}
    for table_name in table_names:
        schema_path = table_schemas_dir / f"{table_name}.json"
        if not schema_path.is_file():
            raise FileNotFoundError(
                f"Designer source schema not found: {schema_path}"
            )
        with schema_path.open("r", encoding="utf-8") as fh:
            schemas[table_name] = json.load(fh)

    designer_output_dir.mkdir(parents=True, exist_ok=True)
    (designer_output_dir / "js").mkdir(parents=True, exist_ok=True)

    for rel in required_files:
        shutil.copy2(designer_template_dir / rel, designer_output_dir / rel)

    normalized_version = str(version).rstrip("/")
    designer_data = {
        "dwcDpVersion": version,
        "profileIdentifier": normalized_version + "/dwc-dp-profile.json",
        "profile": profile,
        "schemas": schemas,
    }

    data_path = designer_output_dir / DWC_DP_DESIGNER_DATA_FILENAME
    with data_path.open("w", encoding="utf-8") as fh:
        fh.write("window.DWC_DP_DESIGNER_DATA = ")
        json.dump(designer_data, fh, ensure_ascii=False, indent=2)
        fh.write(";\n")


def _dwca_xsd_paths():
    """Return the maintained DwC-A validation schema and its local dependency directory."""
    xsd_dir = os.path.join(scriptDir, 'xsd')
    return {
        'directory': xsd_dir,
        'extension': os.path.join(xsd_dir, 'extension.xsd'),
        'dcterms_attributes': os.path.join(xsd_dir, 'dcterms-attributes.xsd'),
        'xml': os.path.join(xsd_dir, 'xml.xsd'),
    }


def _load_dwca_xml_schema():
    """Load and compile the DwC-A XSD using local dependencies only."""
    try:
        from lxml import etree
    except ImportError as exc:
        raise RuntimeError(
            "DwC-A XML validation requires the Python package 'lxml'."
        ) from exc

    paths = _dwca_xsd_paths()
    missing = [
        path for key, path in paths.items()
        if key != 'directory' and not os.path.isfile(path)
    ]
    if missing:
        raise RuntimeError(
            "missing DwC-A XSD validation file(s): " + ", ".join(missing)
        )

    unreadable = [
        path for key, path in paths.items()
        if key != 'directory' and not os.access(path, os.R_OK)
    ]
    if unreadable:
        raise RuntimeError(
            "unreadable DwC-A XSD validation file(s): " + ", ".join(unreadable)
        )

    parser = etree.XMLParser(no_network=True)
    try:
        schema_document = etree.parse(paths['extension'], parser)
        schema = etree.XMLSchema(schema_document)
    except (etree.XMLSyntaxError, etree.XMLSchemaParseError) as exc:
        raise RuntimeError(
            f"could not compile {paths['extension']} with local dependencies: {exc}"
        ) from exc

    return etree, schema, paths


def _validate_dwca_xml_file(xml_path, artifact_name, etree, schema, xsd_path):
    """Validate one generated DwC-A XML schema and return human-readable errors."""
    errors = []
    parser = etree.XMLParser(no_network=True)
    try:
        document = etree.parse(xml_path, parser)
    except (OSError, etree.XMLSyntaxError) as exc:
        return [
            f"{artifact_name}: generated XML could not be parsed: {xml_path}: {exc}"
        ]

    if schema.validate(document):
        return errors

    for entry in schema.error_log:
        location = xml_path
        if entry.line:
            location += f":{entry.line}"
            if entry.column:
                location += f":{entry.column}"
        errors.append(
            f"{artifact_name}: XSD validation failed at {location}: {entry.message} "
            f"(schema: {xsd_path})"
        )
    if not errors:
        errors.append(
            f"{artifact_name}: XSD validation failed: {xml_path} "
            f"(schema: {xsd_path})"
        )
    return errors


def _validate_generated_dwca_xml(generated_schemas):
    """Validate all core/extension XML files generated in the current transaction."""
    if not generated_schemas:
        return 0

    etree, schema, paths = _load_dwca_xml_schema()
    errors = []
    validated = 0
    for artifact_name, xml_path in generated_schemas:
        if not os.path.isfile(xml_path):
            errors.append(
                f"{artifact_name}: expected generated XML is missing: {xml_path}"
            )
            continue
        validated += 1
        errors.extend(
            _validate_dwca_xml_file(
                xml_path, artifact_name, etree, schema, paths['extension']
            )
        )

    if errors:
        detail = "\n".join(f"  - {error}" for error in errors)
        raise RuntimeError(
            f"DwC-A XML Schema validation failed with {len(errors)} error(s):\n{detail}"
        )
    return validated



def _canonicalize_xsd_for_comparison(path):
    """Return canonical XML bytes for substantive XSD comparison."""
    from lxml import etree
    parser = etree.XMLParser(remove_blank_text=True, no_network=True)
    document = etree.parse(path, parser)
    return etree.tostring(document, method='c14n', with_comments=True)


def _extension_xsd_publication_state(state):
    """Determine publication state for maintained DwC-A extension.xsd."""
    source_path = state['dwca_xsd_paths']['extension']
    release_date = state['release_date']
    canonical_rel = os.path.join('dwc-a', 'schemas', 'extension.xsd')
    version_rel = os.path.join('dwc-a', 'schemas', f'extension_{release_date}.xsd')
    published_path = os.path.join(state['local_path_to_rs'], canonical_rel)

    if not os.path.isfile(published_path):
        status = 'initial'
    elif (
        _canonicalize_xsd_for_comparison(source_path)
        != _canonicalize_xsd_for_comparison(published_path)
    ):
        status = 'changed'
    else:
        status = 'unchanged'

    if status in ('initial', 'changed') and not permitNewVersion:
        kind = 'initial publication' if status == 'initial' else 'new version'
        raise RuntimeError(
            f"DwC-A extension.xsd requires {kind}. "
            f"Checked: {published_path}. "
            f"Proposed canonical output: {os.path.join(repoRoot, canonical_rel)}. "
            f"Proposed versioned output: {os.path.join(repoRoot, version_rel)}. "
            f"Rerun with --permit-new-version only if this publication is intentional."
        )

    return {
        'status': status,
        'canonical_rel': canonical_rel,
        'version_rel': version_rel,
        'published_path': published_path,
    }


def _publish_extension_xsd_to_stage(state):
    """Write extension.xsd and its supporting local schemas into the transaction stage."""
    publication = state['extension_xsd_publication']
    if publication['status'] not in ('initial', 'changed'):
        return 0

    xsd_paths = state['dwca_xsd_paths']
    outputs = [
        (xsd_paths['extension'], publication['canonical_rel']),
        (xsd_paths['extension'], publication['version_rel']),
        (xsd_paths['dcterms_attributes'],
         os.path.join('dwc-a', 'schemas', 'dcterms-attributes.xsd')),
        (xsd_paths['xml'],
         os.path.join('dwc-a', 'schemas', 'xml.xsd')),
    ]
    for source_path, relative_output in outputs:
        output_path = os.path.join(repoRoot, relative_output)
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        shutil.copy2(source_path, output_path)
    return len(outputs)


def preflight_configuration(config, log_file):
    """Resolve and validate every build input before any output or cache is written."""
    languages = config.get('languages', DEFAULT_LANGUAGES)
    source_repository = config.get('source_repository', {})
    github_user = github_user_override if github_user_override is not None else source_repository.get('github_user', 'tdwg')
    github_branch = github_branch_override if github_branch_override is not None else source_repository.get('github_branch', 'master')
    local_path_to_rs = local_path_to_rs_override if local_path_to_rs_override is not None else source_repository.get('local_path')
    online = not bool(local_path_to_rs)

    release_date = str(config.get('release_date', '')).strip()
    errors = []
    if not re.fullmatch(r'\d{4}-\d{2}-\d{2}', release_date):
        errors.append(
            "Build configuration must define top-level release_date in YYYY-MM-DD form."
        )

    dwca_xsd_paths = _dwca_xsd_paths()
    try:
        _load_dwca_xml_schema()
    except Exception as exc:
        errors.append(f"DwC-A XML Schema validation: {exc}")

    new_versions = []
    initial_publications = []
    terms_cache = {}
    artifact_state = {}
    dwc_dp_state = None

    try:
        dwc_dp_state = _dwc_dp_preflight(config)
    except Exception as exc:
        errors.append(f"Darwin Core Data Package: {exc}")

    try:
        term_list_registry = _all_term_list_metadata(
            local_path_to_rs, github_user, github_branch
        )
    except Exception as exc:
        errors.append(f"Term-list registry unavailable: {exc}")
        term_list_registry = None

    if local_path_to_rs:
        local_rs = os.path.abspath(os.path.expanduser(local_path_to_rs))
        if not os.path.isdir(local_rs):
            errors.append(f"Local rs.tdwg.org checkout not found: {local_rs}")
        elif not os.access(local_rs, os.R_OK):
            errors.append(f"Local rs.tdwg.org checkout is not readable: {local_rs}")

    # build_artifacts.yaml explicitly declares both the term population and the
    # document metadata used for the combined Darwin Core List of Terms.
    dwc_list_terms = None
    dwc_list_databases = []
    dwc_list_conf_source = config_path
    try:
        list_documents = [d for d in config.get('documents', [])
                          if isinstance(d, dict)
                          and d.get('renderer') == 'term_list'
                          and d.get('term_source_collection')]
        if len(list_documents) != 1:
            raise ValueError("exactly one term-list document must declare term_source_collection")
        dwc_list_document = list_documents[0]
        dwc_list_source_name = str(dwc_list_document['term_source_collection']).strip()
        dwc_list_databases = _configured_term_source(config, dwc_list_source_name)
        dwc_list_metadata_path = str(dwc_list_document.get('document_metadata_path', '')).strip()
        if not dwc_list_metadata_path:
            raise ValueError("Darwin Core List of Terms document is missing document_metadata_path")
        with redirect_stdout(log_file):
            dwc_list_terms = dwcterms.DwcTerms(
                termLists=dwc_list_databases,
                docMetadataFilePath=dwc_list_metadata_path,
                rsPath=local_path_to_rs,
                githubBranch=github_branch,
                githubUser=github_user,
            )
        for csv_path in _list_of_terms_csv_paths(dwc_list_terms):
            csv_parent_error = _check_output_parent(csv_path)
            if csv_parent_error:
                errors.append(f"Darwin Core List of Terms CSV derivatives: {csv_parent_error}")
    except Exception as exc:
        errors.append(f"Darwin Core List of Terms metadata unavailable: {exc}")

    for index, artifact in enumerate(config['artifacts']):
        if not artifact.get('update', True):
            continue

        name = artifact.get('name', f'artifact {index + 1}')
        artifact_type = artifact.get('type')
        source = artifact.get('source', {})
        prefix = f"{name}: "

        for key in ('term_lists', 'document_metadata_path'):
            if key not in source:
                errors.append(prefix + f"missing source setting {key!r}")
        if artifact_type not in ('core', 'extension', 'vocabulary'):
            errors.append(prefix + f"unsupported type {artifact_type!r}")
        if not artifact.get('template'):
            errors.append(prefix + "missing template")
        if not artifact.get('output'):
            errors.append(prefix + "missing output path template")
        if artifact_type in ('core', 'extension') and not artifact.get('term_list'):
            errors.append(prefix + "missing term_list")
        if artifact_type == 'vocabulary':
            if not artifact.get('gbif_alternatives'):
                errors.append(prefix + "missing gbif_alternatives")
            if not artifact.get('vocabulary_cache'):
                errors.append(prefix + "missing vocabulary_cache")

        template = artifact.get('template')
        if template:
            template_path = os.path.join(scriptDir, template)
            if not os.path.isfile(template_path):
                errors.append(prefix + f"template not found: {template_path}")
            elif not os.access(template_path, os.R_OK):
                errors.append(prefix + f"template is not readable: {template_path}")

        term_list = artifact.get('term_list')
        if term_list:
            term_list_path = os.path.join(scriptDir, term_list)
            if not os.path.isfile(term_list_path):
                errors.append(prefix + f"term list not found: {term_list_path}")
            elif not os.access(term_list_path, os.R_OK):
                errors.append(prefix + f"term list is not readable: {term_list_path}")

        if any(key not in source for key in ('term_lists', 'document_metadata_path')):
            continue

        cache_key = (
            tuple(source['term_lists']), source['document_metadata_path'],
            local_path_to_rs, github_branch, github_user,
        )
        if cache_key not in terms_cache:
            try:
                # DwcTerms reports every file it reads. Keep that useful detail in
                # the log rather than flooding the command line.
                with redirect_stdout(log_file):
                    terms_cache[cache_key] = dwcterms.DwcTerms(
                        termLists=source['term_lists'],
                        docMetadataFilePath=source['document_metadata_path'],
                        rsPath=local_path_to_rs,
                        githubBranch=github_branch,
                        githubUser=github_user,
                    )
            except Exception as exc:
                errors.append(prefix + f"term metadata unavailable: {exc}")
                continue
        terms = terms_cache[cache_key]

        # Prove before generation that every IRI required by a core or extension
        # resolves against the metadata configured for that artifact.
        if artifact_type in ('core', 'extension') and term_list and os.path.isfile(term_list_path):
            try:
                required_terms = pd.read_csv(
                    term_list_path, keep_default_na=False, dtype=str
                )
                if 'iri' not in required_terms.columns:
                    errors.append(prefix + f"term list has no 'iri' column: {term_list_path}")
                else:
                    loaded_iris = set(terms.terms_sorted_by_localname['term_iri'])
                    for row_index, row in required_terms.iterrows():
                        term_iri = str(row['iri']).strip()
                        if term_iri and term_iri not in loaded_iris:
                            if term_list_registry is not None:
                                errors.append(_missing_term_message(
                                    name=name,
                                    term_iri=term_iri,
                                    term_list_path=term_list_path,
                                    row_number=row_index + 1,
                                    source_term_lists=source['term_lists'],
                                    registry=term_list_registry,
                                    local_path_to_rs=local_path_to_rs,
                                    github_user=github_user,
                                    github_branch=github_branch,
                                ))
                            else:
                                errors.append(
                                    prefix + f"required IRI not found in loaded term metadata: "
                                    f"{term_iri} (required by {term_list_path}, data row {row_index + 1})"
                                )
            except Exception as exc:
                errors.append(prefix + f"could not validate required term IRIs: {exc}")

        schema_changed = None
        published_schema_found = None
        schema_version_iri = None
        try:
            if artifact_type in ('core', 'extension'):
                # A core/extension is versioned only when its fully rendered candidate
                # differs substantively from the canonical schema already published
                # on rs.tdwg.org. The DwC repository supplies the template and field
                # membership configuration; rs.tdwg.org supplies the released term
                # metadata and the comparison baseline.
                _schema_publication(artifact)  # validates configuration
                local_canonical, local_version, _, _ = _schema_delivery_paths(
                    artifact, release_date
                )
                for delivery_path in (local_canonical, local_version):
                    parent_error = _check_output_parent(delivery_path)
                    if parent_error:
                        errors.append(prefix + parent_error)
                relation_style = artifact.get('relation_style', 'qrg')
                relation_config = config.get('relation_styles', {}).get(relation_style, {})
                comparison_builder = DwcaXml(
                    terms=terms,
                    xmlTemplate=artifact['template'],
                    xmlTerms=artifact.get('term_list'),
                    relationStyle=relation_style,
                    relationConfig=relation_config,
                    relationBase=artifact.get('relation_base'),
                )
                with tempfile.TemporaryDirectory(prefix='dwca_schema_compare_') as compare_dir:
                    candidate_path = os.path.join(compare_dir, 'candidate.xml')
                    comparison_builder.create_extension_xml(
                        languages, file_output=candidate_path, issued_date=release_date,
                        enforce_version_guard=False,
                    )
                    with open(candidate_path, 'r', encoding='utf-8') as handle:
                        candidate_text = handle.read()
                published_text = _load_published_schema(artifact, local_path_to_rs)
                published_schema_found = published_text is not None
                schema_changed = _schema_changed(candidate_text, published_text)
                if schema_changed:
                    schema_version_iri = _schema_delivery_paths(artifact, release_date)[3]
                    new_versions.append((name, local_version))
                    if not published_schema_found:
                        initial_publications.append((name, local_canonical, local_version))
                else:
                    schema_version_iri = _published_schema_version_iri(published_text)
                for csv_path in _csv_derivative_paths(artifact):
                    csv_parent_error = _check_output_parent(csv_path)
                    if csv_parent_error:
                        errors.append(prefix + csv_parent_error)
            else:
                output_path = _expected_output_path(terms, artifact)
                parent_error = _check_output_parent(output_path)
                if parent_error:
                    errors.append(prefix + parent_error)
                if not os.path.isfile(output_path):
                    new_versions.append((name, output_path))
        except Exception as exc:
            errors.append(prefix + f"cannot determine output version: {exc}")
            continue

        vocabulary_cache = None
        if artifact_type == 'vocabulary' and artifact.get('gbif_alternatives') and artifact.get('vocabulary_cache'):
            relation_style = artifact.get('relation_style', 'qrg')
            relation_config = config.get('relation_styles', {}).get(relation_style, {})
            builder = DwcaXml(
                terms=terms,
                xmlTemplate=artifact['template'],
                gbifAlternatives=artifact['gbif_alternatives'],
                vocabularyCache=artifact['vocabulary_cache'],
                online=online,
                relationStyle=relation_style,
                relationConfig=relation_config,
                relationBase=artifact.get('relation_base'),
            )
            try:
                _, vocabulary_cache = builder._load_vocabulary_cache()
                # Validate every controlled value now. Online this fetches the API data into
                # memory; offline it proves the cache is complete. Nothing is written yet.
                for _, term in terms.terms_sorted_by_localname.iterrows():
                    controlled_value = term['controlled_value_string']
                    if controlled_value != '':
                        builder._alternative_labels(controlled_value, vocabulary_cache)
            except Exception as exc:
                source_label = 'GBIF Vocabulary API' if online else 'local vocabulary cache'
                errors.append(prefix + f"{source_label} unavailable or incomplete: {exc}")
                continue

        artifact_state[index] = {
            'terms': terms,
            'vocabulary_cache': vocabulary_cache,
            'schema_changed': schema_changed,
            'published_schema_found': published_schema_found,
            'schema_version_iri': schema_version_iri,
        }

    term_versions_state = None
    if config.get('term_versions') is not None:
        try:
            term_versions_state = _load_term_versions_state(
                config, local_path_to_rs, github_user, github_branch
            )
        except Exception as exc:
            errors.append(f"term_versions: {exc}")

    # Validate documentation configuration and bind it to the term metadata
    # already loaded above. Webpage inputs are validated before any artifact files are generated.
    webpage_state = _preflight_webpage_configuration(
        config, dwc_list_terms, dwc_list_databases, artifact_state, errors,
        local_path_to_rs, github_user, github_branch
    )

    if new_versions and not permitNewVersion:
        initial_names = {name for name, _, _ in initial_publications}
        for name, path in new_versions:
            if name in initial_names:
                canonical = next(c for n, c, _ in initial_publications if n == name)
                errors.append(
                    f"{name}: no published canonical schema found; initial publication required: "
                    f"canonical={canonical}, version={path}"
                )
            else:
                errors.append(f"{name}: published canonical schema differs; new version required: {path}")

    if errors:
        log_line(log_file, "")
        log_line(log_file, "PRE-FLIGHT FAILED")
        for error in errors:
            log_line(log_file, f"  - {error}")
        print("Pre-flight failed: no files were written.", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        if new_versions and not permitNewVersion:
            if initial_publications:
                print(
                    "Initial schema publications and intentional new versions require "
                    "--permit-new-version.", file=sys.stderr
                )
            else:
                print("If these are intentional new versions, rerun with --permit-new-version.", file=sys.stderr)
        raise SystemExit(1)

    state = {
        'languages': languages,
        'github_user': github_user,
        'github_branch': github_branch,
        'local_path_to_rs': local_path_to_rs,
        'online': online,
        'release_date': release_date,
        'dwca_xsd_paths': dwca_xsd_paths,
        'artifact_state': artifact_state,
        'dwc_list_terms': dwc_list_terms,
        'dwc_list_databases': dwc_list_databases,
        'dwc_list_conf_source': dwc_list_conf_source,
        'webpage_state': webpage_state,
        'term_versions_state': term_versions_state,
        'dwc_dp_state': dwc_dp_state,
    }
    state['extension_xsd_publication'] = _extension_xsd_publication_state(state)
    return state


def _display_output_path(path):
    absolute = os.path.abspath(path)
    stage = os.path.abspath(outputRoot)
    if outputRoot != repoRoot and (absolute == stage or absolute.startswith(stage + os.sep)):
        return os.path.relpath(absolute, stage)
    return os.path.relpath(absolute, repoRoot)


def _stage_path(real_path):
    """Map a repository path into the active staging tree."""
    absolute = os.path.abspath(real_path)
    real_root = os.path.abspath(repoRoot)
    if outputRoot == repoRoot:
        return absolute
    if absolute == real_root:
        return outputRoot
    prefix = real_root + os.sep
    if not absolute.startswith(prefix):
        raise ValueError(f"Cannot stage path outside repository: {real_path}")
    return os.path.join(outputRoot, os.path.relpath(absolute, real_root))


def _seed_stage_file(real_path):
    """Copy an existing repository file into staging when generation reads/replaces it."""
    if not real_path or not os.path.isfile(real_path):
        return
    staged = _stage_path(real_path)
    os.makedirs(os.path.dirname(staged), exist_ok=True)
    shutil.copy2(real_path, staged)


def _prepare_transaction_stage(state, config, stage_root):
    """Seed only existing outputs that generators must inspect or archive."""
    global outputRoot
    outputRoot = stage_root

    for index, artifact in enumerate(config.get('artifacts', [])):
        if not artifact.get('update', True) or index not in state['artifact_state']:
            continue
        terms = state['artifact_state'][index]['terms']
        ratification_date = terms.document_configuration_yaml['doc_modified']
        _seed_stage_file(os.path.join(repoRoot, artifact['output'] + ratification_date + '.xml'))

    webpage_state = state.get('webpage_state') or {}
    for document_state in webpage_state.get('documents', []):
        _seed_stage_file(document_state['output_path'])
        archive_path = document_state['lifecycle'].get('archive_path')
        _seed_stage_file(archive_path)
        document_state['output_path'] = _stage_path(document_state['output_path'])
        if archive_path:
            document_state['lifecycle']['archive_path'] = _stage_path(archive_path)

    language_menu = webpage_state.get('language_menu') or {}
    for item in language_menu.get('files', []):
        _seed_stage_file(item['path'])
        item['path'] = _stage_path(item['path'])



def _directory_trees_equal(left, right):
    """Return True when two directory trees contain the same files with identical bytes."""
    left = os.path.abspath(left)
    right = os.path.abspath(right)
    if not os.path.isdir(left) or not os.path.isdir(right):
        return False

    def relative_files(root):
        files = []
        for current_root, _, filenames in os.walk(root):
            for filename in filenames:
                path = os.path.join(current_root, filename)
                files.append(os.path.relpath(path, root))
        return sorted(files)

    left_files = relative_files(left)
    right_files = relative_files(right)
    if left_files != right_files:
        return False

    return all(
        filecmp.cmp(
            os.path.join(left, relative),
            os.path.join(right, relative),
            shallow=False,
        )
        for relative in left_files
    )

def _commit_transaction(stage_root, replace_directories=None):
    """Commit staged files, replacing complete generated directories only when they differ."""
    requested_replace_directories = [
        os.path.abspath(path) for path in (replace_directories or [])
    ]
    replace_directories = []
    for directory in requested_replace_directories:
        relative = os.path.relpath(directory, repoRoot)
        staged_directory = os.path.join(stage_root, relative)
        if not _directory_trees_equal(staged_directory, directory):
            replace_directories.append(directory)

    def in_replaced_directory(path):
        absolute = os.path.abspath(path)
        return any(absolute == directory or absolute.startswith(directory + os.sep)
                   for directory in replace_directories)

    changes = []
    for root, _, files in os.walk(stage_root):
        for filename in files:
            staged = os.path.join(root, filename)
            relative = os.path.relpath(staged, stage_root)
            destination = os.path.join(repoRoot, relative)
            if (not in_replaced_directory(destination) and os.path.isfile(destination)
                    and filecmp.cmp(staged, destination, shallow=False)):
                continue
            changes.append((staged, destination, relative))

    backup_root = tempfile.mkdtemp(prefix='build_artifacts_backup_')
    created = []
    replaced_directory_backups = []
    try:
        # Back up complete generated directories before removing them, so stale
        # generated files disappear on success and the original tree is restored
        # intact if any later replacement fails.
        for index, directory in enumerate(replace_directories):
            backup = os.path.join(backup_root, '__replace_directories__', str(index))
            existed = os.path.isdir(directory)
            if existed:
                os.makedirs(os.path.dirname(backup), exist_ok=True)
                shutil.copytree(directory, backup)
                shutil.rmtree(directory)
            replaced_directory_backups.append((directory, backup, existed))

        # Capture every ordinary file that could be replaced before changing it.
        for _, destination, relative in changes:
            if in_replaced_directory(destination):
                continue
            if os.path.isfile(destination):
                backup = os.path.join(backup_root, relative)
                os.makedirs(os.path.dirname(backup), exist_ok=True)
                shutil.copy2(destination, backup)
            else:
                created.append(destination)

        committed = []
        for staged, destination, _ in changes:
            os.makedirs(os.path.dirname(destination), exist_ok=True)
            temporary = destination + '.build-artifacts.tmp'
            shutil.copy2(staged, temporary)
            os.replace(temporary, destination)
            committed.append(destination)
        return committed
    except BaseException:
        for destination in created:
            if os.path.isfile(destination):
                os.remove(destination)

        # Remove partially committed replacement trees, then restore originals.
        for directory, backup, existed in replaced_directory_backups:
            if os.path.isdir(directory):
                shutil.rmtree(directory)
            if existed:
                os.makedirs(os.path.dirname(directory), exist_ok=True)
                shutil.copytree(backup, directory)

        # Restore ordinary files, excluding the private directory backups above.
        for root, dirs, files in os.walk(backup_root):
            dirs[:] = [d for d in dirs if d != '__replace_directories__']
            for filename in files:
                backup = os.path.join(root, filename)
                relative = os.path.relpath(backup, backup_root)
                destination = os.path.join(repoRoot, relative)
                os.makedirs(os.path.dirname(destination), exist_ok=True)
                shutil.copy2(backup, destination)
        raise
    finally:
        shutil.rmtree(backup_root, ignore_errors=True)

def build_from_configuration(config):
    """Preflight the complete build, then build every update:true artifact."""
    source_repository = config.get('source_repository', {})
    local_path_to_rs = (
        local_path_to_rs_override
        if local_path_to_rs_override is not None
        else source_repository.get('local_path')
    )
    mode = 'offline' if local_path_to_rs else 'online'

    log_path, log_file = open_build_log()
    try:
        log_line(log_file, f"Darwin Core artifact build started: {datetime.now().isoformat(timespec='seconds')}")
        log_line(log_file, f"Mode: {mode}")
        log_line(log_file, f"Configuration: {config_path}")

        print(f"Starting Darwin Core artifact build ({mode} mode).")
        print("Pre-flight: checking configuration, metadata, outputs, and vocabulary resources...")
        state = preflight_configuration(config, log_file)
        languages = state['languages']
        online = state['online']

        print(f"Pre-flight passed ({mode} mode): all required resources are accessible.")
        print(f"    Build release date: {state['release_date']}")
        if state['dwc_dp_state'] is not None:
            dwc_dp_state = state['dwc_dp_state']
            print(
                f"    DwC-DP: {dwc_dp_state['recommended_table_count']} recommended tables; "
                f"{dwc_dp_state['recommended_field_count']} recommended fields."
            )
            log_line(log_file, f"DwC-DP version: {dwc_dp_state['version']}")
            log_line(
                log_file,
                f"DwC-DP preflight: {dwc_dp_state['recommended_table_count']} recommended tables; "
                f"{dwc_dp_state['recommended_field_count']} recommended fields."
            )
            log_line(log_file, "DwC-DP build-owned outputs:")
            for path in dwc_dp_state['owned_outputs']:
                log_line(log_file, f"  - {path}")

        stage_directory = tempfile.mkdtemp(prefix='build_artifacts_stage_')
        _prepare_transaction_stage(state, config, stage_directory)
        print("Transaction: generating all outputs in staging; repository files remain unchanged until commit.")

        dwc_dp_state = state.get('dwc_dp_state')
        if dwc_dp_state is not None:
            dwc_dp_paths = dwc_dp_state
            staged_profile = Path(_stage_path(dwc_dp_paths['profile.output']))
            staged_schemas = Path(_stage_path(dwc_dp_paths['profile.table_schemas']))
            if staged_schemas.exists():
                shutil.rmtree(staged_schemas)

            print("Build: generating Darwin Core Data Package profile and table schemas...")
            _dwc_dp_make_schema_stage(
                staged_schemas,
                dwc_dp_state['version'],
                staged_profile,
                dwc_dp_paths['profile.template'],
                dwc_dp_paths['sources.tables'],
                dwc_dp_paths['sources.fields'],
            )
            validation = _dwc_dp_validate_generated_artifacts(staged_schemas, staged_profile)
            if validation.has_errors:
                raise RuntimeError(
                    f"DwC-DP validation failed with {len(validation.errors)} error(s)."
                )
            schema_count = len(list(staged_schemas.glob('*.json')))
            print(f"    -> {_display_output_path(staged_profile)}")
            print(f"    -> {_display_output_path(staged_schemas)} ({schema_count} schemas)")
            print(f"DwC-DP validation passed: {schema_count} table schemas.")
            log_line(log_file, f"DwC-DP profile -> {staged_profile}")
            log_line(log_file, f"DwC-DP table schemas -> {staged_schemas} ({schema_count} schemas)")
            log_line(log_file, f"DwC-DP validation passed: {schema_count} table schemas")

            staged_csv_headers = Path(_stage_path(dwc_dp_paths['csv_headers.output']))
            print("Build: generating Darwin Core Data Package header-only CSVs...")
            csv_header_count = _dwc_dp_generate_csv_headers(staged_schemas, staged_csv_headers)
            print(f"    -> {_display_output_path(staged_csv_headers)} ({csv_header_count} CSV files)")
            log_line(log_file, f"DwC-DP header-only CSVs -> {staged_csv_headers} ({csv_header_count} files)")

            staged_qrg = Path(_stage_path(dwc_dp_paths['qrg.output']))
            print("Build: generating Darwin Core Data Package Quick Reference Guide...")
            _dwc_dp_generate_qrg(
                staged_schemas,
                staged_qrg,
                dwc_dp_paths['qrg.template'],
                dwc_dp_state['version'],
                dwc_dp_paths['qrg.table_groups'],
            )
            print(f"    -> {_display_output_path(staged_qrg)}")
            log_line(log_file, f"DwC-DP Quick Reference Guide -> {staged_qrg}")

            staged_qrg_images = Path(_stage_path(dwc_dp_paths['qrg.images_output']))
            if staged_qrg_images.exists():
                shutil.rmtree(staged_qrg_images)
            shutil.copytree(dwc_dp_paths['qrg.images_source'], staged_qrg_images)
            qrg_image_count = sum(1 for path in staged_qrg_images.rglob('*') if path.is_file())
            print("Build: copying Darwin Core Data Package Quick Reference Guide images...")
            print(f"    -> {_display_output_path(staged_qrg_images)} ({qrg_image_count} images)")
            log_line(log_file, f"DwC-DP Quick Reference Guide images -> {staged_qrg_images} ({qrg_image_count} images)")

            staged_sql = Path(_stage_path(dwc_dp_paths['sql.output']))
            print("Build: generating Darwin Core Data Package PostgreSQL DDL...")
            _dwc_dp_generate_postgresql_ddl(
                staged_schemas,
                dwc_dp_paths['sql.config'],
                staged_sql,
                dwc_dp_state['version'],
                state['local_path_to_rs'],
                state['github_user'],
                state['github_branch'],
            )
            print(f"    -> {_display_output_path(staged_sql)}")
            log_line(log_file, f"DwC-DP PostgreSQL DDL -> {staged_sql}")

            staged_designer = Path(_stage_path(dwc_dp_paths['designer.output']))
            print("Build: generating Darwin Core Data Package Designer...")
            _dwc_dp_generate_designer(
                dwc_dp_paths['designer.template'],
                staged_designer,
                dwc_dp_state['version'],
                staged_profile,
                staged_schemas,
            )
            print(f"    -> {_display_output_path(staged_designer / 'index.html')}")
            log_line(log_file, f"DwC-DP Designer -> {staged_designer}")
        if permitNewVersion:
            log_line(log_file, "Creation of new versioned outputs is permitted.")

        term_versions_file_count = 0
        if state['term_versions_state'] is not None:
            print("Build: generating complete Darwin Core term-version history...")
            output_path, row_count, recommended_count, historical_count = create_term_versions_csv(
                state['term_versions_state']
            )
            term_versions_file_count = 1
            print(f"    -> {_display_output_path(output_path)}")
            print(
                f"       {row_count} version records "
                f"({recommended_count} recommended, {historical_count} historical)"
            )
            log_line(log_file, f"Term versions -> {output_path}")
            log_line(
                log_file,
                f"Term-version records: {row_count} "
                f"({recommended_count} recommended, {historical_count} historical)"
            )

        print("Build: generating Darwin Core List of Terms CSV derivatives...")
        log_line(log_file, f"Darwin Core List of Terms configuration: {state['dwc_list_conf_source']}")
        log_line(log_file, f"Darwin Core List of Terms databases: {', '.join(state['dwc_list_databases'])}")
        with redirect_stdout(log_file):
            list_csv_paths = create_list_of_terms_csv_derivatives(state['dwc_list_terms'])
        for csv_path in list_csv_paths:
            print(f"    -> {_display_output_path(csv_path)}")
            log_line(log_file, f"List of Terms CSV -> {csv_path}")

        webpage_state = state.get('webpage_state')
        webpage_file_count = 0
        if webpage_state is not None:
            webpages_config=webpage_state['configuration']
            document_states=webpage_state.get('documents',[])

            # Archive all affected standard documents before replacing any of them.
            for ds in document_states:
                if ds['lifecycle']['archive_required']:
                    archived=archive_previous_document(ds)
                    print(f"Archive: {ds['name']} -> {_display_output_path(archived)}")
                    log_line(log_file,f"Archived {ds['name']} -> {archived}")

            # Generate only documents whose YAML declaration has update:true.
            for ds in document_states:
                d=ds['configuration']
                if ds['renderer']=='term_list':
                    cats=(webpages_config['term_list_categories']
                          if d.get('term_source_collection') else None)
                    renderer=TermList(ds['terms'],d['vocab_type'],categories=cats,
                                      versions_df=webpage_state['versions_df'])
                    with redirect_stdout(log_file):
                        generate_term_list_pages(renderer,d,webpages_config,languages,
                                                 webpage_state['versions_df'])
                    webpage_file_count+=len(languages)
                    print(f"Build: {ds['name']}: {len(languages)} files")
                    for destination in _localized_destination_summary(d,webpages_config,languages):
                        print(f"       {destination}")
                else:
                    path=generate_template_document(ds)
                    webpage_file_count+=1
                    print(f"Build: {ds['name']} -> {_display_output_path(path)}")
                    log_line(log_file,f"Standard document {ds['name']} -> {path}")

            # QRG is not part of the standard and is never archived.
            qrg=webpages_config.get('qrg',{})
            if qrg.get('update',True):
                print("Build: generating Quick Reference Guide documentation...")
                renderer=TermList(state['dwc_list_terms'],1,
                    categories=webpages_config['term_list_categories'],
                    versions_df=webpage_state['versions_df'])
                with redirect_stdout(log_file):
                    generate_qrg_pages(renderer,qrg,webpages_config,languages)
                webpage_file_count+=len(languages)
                print(f"    -> Darwin Core Quick Reference Guide: {len(languages)} files")
                report_recommended_terms_missing_from_qrg(
                    state['dwc_list_terms'],qrg,
                    webpages_config['term_list_categories'],log_file=log_file)

            language_menu_paths = generate_language_menu(webpage_state.get('language_menu'))
            if language_menu_paths:
                webpage_file_count += len(language_menu_paths)
                mode = webpage_state['language_menu']['mode']
                print(f"Build: language menu ({mode}): {len(language_menu_paths)} navigation files")
                for path in language_menu_paths:
                    print(f"       {_display_output_path(path)}")
                    log_line(log_file, f"Language menu ({mode}) -> {path}")

        dwc_dp_generated_file_count = 0
        if state.get('dwc_dp_state') is not None:
            dwc_dp_state = state['dwc_dp_state']
            dwc_dp_single_files = (
                dwc_dp_state['profile.output'],
                dwc_dp_state['qrg.output'],
                dwc_dp_state['sql.output'],
            )
            dwc_dp_generated_file_count += sum(
                1 for path in dwc_dp_single_files if os.path.isfile(_stage_path(path))
            )
            for directory in (
                dwc_dp_state['profile.table_schemas'],
                dwc_dp_state['qrg.images_output'],
                dwc_dp_state['csv_headers.output'],
                dwc_dp_state['designer.output'],
            ):
                staged_directory = _stage_path(directory)
                if os.path.isdir(staged_directory):
                    dwc_dp_generated_file_count += sum(
                        len(filenames)
                        for _, _, filenames in os.walk(staged_directory)
                    )

        configured_file_count = (
            term_versions_file_count + len(list_csv_paths) + webpage_file_count
            + dwc_dp_generated_file_count
        )
        for index, artifact in enumerate(config['artifacts']):
            if not artifact.get('update', True):
                continue
            if artifact.get('type') in ('core', 'extension'):
                configured_file_count += (
                    4 if state['artifact_state'][index]['schema_changed'] else 2
                )
            else:
                configured_file_count += 1

        print(f"Build: generating {configured_file_count} files...")
        generated_file_count = (
            term_versions_file_count + len(list_csv_paths) + webpage_file_count
            + dwc_dp_generated_file_count
        )

        generated_dwca_xml = []

        xsd_publication_count = _publish_extension_xsd_to_stage(state)
        if xsd_publication_count:
            publication = state['extension_xsd_publication']
            print(f"Build: DwC-A extension.xsd ({publication['status']} publication)")
            print("    -> dwc-a/schemas/extension.xsd")
            print(f"    -> {publication['version_rel']}")
            print("    -> dwc-a/schemas/dcterms-attributes.xsd")
            print("    -> dwc-a/schemas/xml.xsd")
            generated_file_count += xsd_publication_count
        else:
            print("Build: DwC-A extension.xsd unchanged; retaining published version.")

        for index, artifact in enumerate(config['artifacts']):
            if not artifact.get('update', True):
                continue

            name = artifact.get('name', '<unnamed artifact>')
            artifact_type = artifact.get('type')
            terms = state['artifact_state'][index]['terms']
            relation_style = artifact.get('relation_style', 'qrg')
            relation_config = config.get('relation_styles', {}).get(relation_style, {})

            xml_builder = DwcaXml(
                terms=terms,
                xmlTemplate=artifact['template'],
                xmlTerms=artifact.get('term_list'),
                gbifAlternatives=artifact.get('gbif_alternatives'),
                vocabularyCache=artifact.get('vocabulary_cache'),
                online=online,
                preloadedVocabularyCache=state['artifact_state'][index]['vocabulary_cache'],
                relationStyle=relation_style,
                relationConfig=relation_config,
                relationBase=artifact.get('relation_base'),
            )

            if artifact_type in ('core', 'extension'):
                release_date = state['release_date']
                canonical_path, version_path, _, version_iri = _schema_delivery_paths(
                    artifact, release_date
                )
                canonical_path = _stage_path(canonical_path)
                version_path = _stage_path(version_path)
                horizontal_path, vertical_path = _csv_derivative_paths(artifact)
                changed = bool(state['artifact_state'][index]['schema_changed'])
                published_schema_found = bool(
                    state['artifact_state'][index]['published_schema_found']
                )
                print(f"  Building {name}")
                if changed:
                    if published_schema_found:
                        print(f"    schema changed -> {_display_output_path(canonical_path)}")
                        log_line(log_file, f"Schema changed: {name}")
                    else:
                        print(f"    initial publication required -> {_display_output_path(canonical_path)}")
                        log_line(log_file, f"Initial schema publication: {name}")
                    print(f"                                -> {_display_output_path(version_path)}")
                    log_line(log_file, f"Canonical deliverable -> {canonical_path}")
                    log_line(log_file, f"Version deliverable -> {version_path}")
                else:
                    print("    no substantive schema changes -> no new XML schema version created")
                    log_line(log_file, f"No substantive schema changes: {name}; no new XML schema version created")
                print(f"    -> {_display_output_path(horizontal_path)}")
                print(f"    -> {_display_output_path(vertical_path)}")
                log_line(log_file, f"CSV horizontal -> {horizontal_path}")
                log_line(log_file, f"CSV vertical -> {vertical_path}")
            else:
                output_path = _expected_output_path(terms, artifact)
                display_path = _display_output_path(output_path)
                print(f"  Building {name} -> {display_path}")
                log_line(log_file, f"Building {name} -> {output_path}")

            # Keep implementation-level progress (such as cache writes) in the log.
            with redirect_stdout(log_file):
                if artifact_type in ('core', 'extension'):
                    if changed:
                        # Immutable historical version: no dcterms:source pointer.
                        xml_builder.create_extension_xml(
                            languages, file_output=version_path, issued_date=release_date,
                            enforce_version_guard=False,
                        )
                        # Mutable canonical: same released content plus provenance
                        # identifying the immutable version to which it is equivalent.
                        xml_builder.create_extension_xml(
                            languages, file_output=canonical_path, issued_date=release_date,
                            source_iri=version_iri, enforce_version_guard=False,
                        )
                        generated_dwca_xml.extend([
                            (f"{name} immutable version", version_path),
                            (f"{name} canonical", canonical_path),
                        ])
                    create_csv_derivatives(terms, artifact)
                else:
                    xml_builder.create_vocabulary_xml(languages, artifact['output'])
            generated_file_count += (4 if changed else 2) if artifact_type in ('core', 'extension') else 1

        if generated_dwca_xml:
            print("Validation: checking generated DwC-A XML schemas against extension.xsd...")
            validated_dwca_count = _validate_generated_dwca_xml(generated_dwca_xml)
            print(f"DwC-A XML Schema validation passed: {validated_dwca_count} generated XML files.")
            log_line(
                log_file,
                f"DwC-A XML Schema validation passed: {validated_dwca_count} generated XML files "
                f"against {state['dwca_xsd_paths']['extension']}"
            )
        else:
            print("Validation: no new DwC-A core/extension XML schemas to validate.")
            log_line(log_file, "DwC-A XML Schema validation: no new core/extension XML generated.")

        replace_directories = []
        if state.get('dwc_dp_state') is not None:
            replace_directories.extend([
                state['dwc_dp_state']['profile.table_schemas'],
                state['dwc_dp_state']['qrg.images_output'],
                state['dwc_dp_state']['csv_headers.output'],
                state['dwc_dp_state']['designer.output'],
            ])
        committed_paths = _commit_transaction(stage_directory, replace_directories=replace_directories)
        print(f"Transaction committed: {len(committed_paths)} repository files updated.")
        log_line(log_file, f"Transaction committed files: {len(committed_paths)}")

        log_line(log_file, f"Build completed: {datetime.now().isoformat(timespec='seconds')}")
        log_line(log_file, f"Files generated: {generated_file_count}")
        print(f"Build complete: {generated_file_count} files generated.")
        print(f"Details: {os.path.relpath(log_path, scriptDir)}")
    except BaseException:
        log_line(log_file, f"Build stopped: {datetime.now().isoformat(timespec='seconds')}")
        print(f"Details: {os.path.relpath(log_path, scriptDir)}", file=sys.stderr)
        raise
    finally:
        global outputRoot
        outputRoot = repoRoot
        if 'stage_directory' in locals() and os.path.isdir(stage_directory):
            shutil.rmtree(stage_directory, ignore_errors=True)
        log_file.close()


if config_path is None:
    config_path = os.path.join(scriptDir, 'build_artifacts.yaml')
elif not os.path.isabs(config_path):
    config_path = os.path.abspath(config_path)

build_configuration = load_build_configuration(config_path)
build_from_configuration(build_configuration)
