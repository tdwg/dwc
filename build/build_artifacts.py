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
import pandas as pd
import yaml
import html
from datetime import date, datetime
from contextlib import redirect_stdout
from jinja2 import FileSystemLoader, Environment

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

    def create_extension_xml(self, languages, file_template):
        """Build a Darwin Core Extension XML file"""

        # Use ratification date in filenames for stability.
        ratification_date = self.terms.document_configuration_yaml['doc_modified']

        file_output = os.path.join(
            outputRoot,
            file_template + ratification_date + ".xml"
        )
        os.makedirs(os.path.dirname(file_output), exist_ok=True)

        if not os.path.isfile(file_output) and not permitNewVersion:
            raise Exception("Standard has a new version, but %s doesn't exist.  Manual review required, e.g. touch the file %s and rerun." % (file_output, file_output))

        with open(file_output, 'w', encoding='utf-8') as output_file:
            # Open the XML declaration file
            template_file = open(scriptDir + '/' + self.xmlTemplate, 'r')
            # Write the entire XML declaration section to the output file
            header = template_file.read()
            header = header.replace('{issued_date}', date.today().isoformat())
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
            header = header.replace('{issued_date}', date.today().isoformat())
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
    return (os.path.join(outputRoot, 'dist', f"{basename}_horizontal.csv"),
            os.path.join(outputRoot, 'dist', f"{basename}_vertical.csv"))

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
        os.path.join(repoRoot, 'dist', f'all_{prefix}_vertical.csv')
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

    # The all_<namespace> derivatives are property lists, not complete namespace
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
        path = os.path.join(dist_dir, f'all_{prefix}_vertical.csv')
        pd.DataFrame(names).to_csv(
            path, index=False, header=False, encoding='utf-8', lineterminator='\n'
        )
        namespace_paths.append(path)

    return [horizontal_path, vertical_path] + namespace_paths



class TermList:
    def __init__(self, terms, vocab_type, categories=None, versions_df=None):
        """Render List-of-Terms documentation from preflight-validated metadata."""
        self.terms = terms
        self.vocab_type = vocab_type
        self.versions_df = versions_df
        categories = categories or [{'iri': '', 'label': 'Vocabulary', 'comment': '', 'id': 'vocabulary'}]
        self.organized_in_categories = categories != [{'iri': '', 'label': 'Vocabulary', 'comment': '', 'id': 'vocabulary'}]
        self.display_order = [item.get('iri', '') for item in categories]
        self.display_label = [item.get('label', '') for item in categories]
        self.display_comments = [item.get('comment', '') for item in categories]
        self.display_id = [item.get('id', '') for item in categories]

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


def _preflight_webpage_configuration(config, dwc_list_terms, artifact_state, errors,
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


def preflight_configuration(config, log_file):
    """Resolve and validate every build input before any output or cache is written."""
    languages = config.get('languages', DEFAULT_LANGUAGES)
    source_repository = config.get('source_repository', {})
    github_user = github_user_override if github_user_override is not None else source_repository.get('github_user', 'tdwg')
    github_branch = github_branch_override if github_branch_override is not None else source_repository.get('github_branch', 'master')
    local_path_to_rs = local_path_to_rs_override if local_path_to_rs_override is not None else source_repository.get('local_path')
    online = not bool(local_path_to_rs)

    errors = []
    new_versions = []
    terms_cache = {}
    artifact_state = {}

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

        try:
            output_path = _expected_output_path(terms, artifact)
            parent_error = _check_output_parent(output_path)
            if parent_error:
                errors.append(prefix + parent_error)
            if not os.path.isfile(output_path):
                new_versions.append((name, output_path))
            if artifact_type in ('core', 'extension'):
                for csv_path in _csv_derivative_paths(artifact):
                    csv_parent_error = _check_output_parent(csv_path)
                    if csv_parent_error:
                        errors.append(prefix + csv_parent_error)
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
        config, dwc_list_terms, artifact_state, errors,
        local_path_to_rs, github_user, github_branch
    )

    if new_versions and not permitNewVersion:
        for name, path in new_versions:
            errors.append(f"{name}: versioned output does not exist: {path}")

    if errors:
        log_line(log_file, "")
        log_line(log_file, "PRE-FLIGHT FAILED")
        for error in errors:
            log_line(log_file, f"  - {error}")
        print("Pre-flight failed: no files were written.", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        if new_versions and not permitNewVersion:
            print("If these are intentional new versions, rerun with --permit-new-version.", file=sys.stderr)
        raise SystemExit(1)

    return {
        'languages': languages,
        'github_user': github_user,
        'github_branch': github_branch,
        'local_path_to_rs': local_path_to_rs,
        'online': online,
        'artifact_state': artifact_state,
        'dwc_list_terms': dwc_list_terms,
        'dwc_list_databases': dwc_list_databases,
        'dwc_list_conf_source': dwc_list_conf_source,
        'webpage_state': webpage_state,
        'term_versions_state': term_versions_state,
    }


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
        item['path'] = _stage_path(item['path'])


def _commit_transaction(stage_root):
    """Commit the staged tree, rolling back the whole commit if any replacement fails."""
    changes = []
    for root, _, files in os.walk(stage_root):
        for filename in files:
            staged = os.path.join(root, filename)
            relative = os.path.relpath(staged, stage_root)
            destination = os.path.join(repoRoot, relative)
            if os.path.isfile(destination) and filecmp.cmp(staged, destination, shallow=False):
                continue
            changes.append((staged, destination, relative))

    backup_root = tempfile.mkdtemp(prefix='build_artifacts_backup_')
    committed = []
    created = []
    try:
        # Capture every file that could be replaced before changing the repository.
        for _, destination, relative in changes:
            if os.path.isfile(destination):
                backup = os.path.join(backup_root, relative)
                os.makedirs(os.path.dirname(backup), exist_ok=True)
                shutil.copy2(destination, backup)
            else:
                created.append(destination)

        for staged, destination, _ in changes:
            os.makedirs(os.path.dirname(destination), exist_ok=True)
            temporary = destination + '.build-artifacts.tmp'
            shutil.copy2(staged, temporary)
            os.replace(temporary, destination)
            committed.append(destination)
        return committed
    except BaseException:
        # Restore every original and remove files created by the failed commit.
        for destination in created:
            if os.path.isfile(destination):
                os.remove(destination)
        for root, _, files in os.walk(backup_root):
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

        stage_directory = tempfile.mkdtemp(prefix='build_artifacts_stage_')
        _prepare_transaction_stage(state, config, stage_directory)
        print("Transaction: generating all outputs in staging; repository files remain unchanged until commit.")
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

        configured_file_count = term_versions_file_count + len(list_csv_paths) + webpage_file_count
        for artifact in config['artifacts']:
            if not artifact.get('update', True):
                continue
            configured_file_count += 3 if artifact.get('type') in ('core', 'extension') else 1

        print(f"Build: generating {configured_file_count} files...")
        generated_file_count = term_versions_file_count + len(list_csv_paths) + webpage_file_count

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

            output_path = _expected_output_path(terms, artifact)
            display_path = _display_output_path(output_path)
            if artifact_type in ('core', 'extension'):
                horizontal_path, vertical_path = _csv_derivative_paths(artifact)
                print(f"  Building {name}")
                print(f"    -> {display_path}")
                print(f"    -> {_display_output_path(horizontal_path)}")
                print(f"    -> {_display_output_path(vertical_path)}")
                log_line(log_file, f"Building {name} -> {output_path}")
                log_line(log_file, f"CSV horizontal -> {horizontal_path}")
                log_line(log_file, f"CSV vertical -> {vertical_path}")
            else:
                print(f"  Building {name} -> {display_path}")
                log_line(log_file, f"Building {name} -> {output_path}")

            # Keep implementation-level progress (such as cache writes) in the log.
            with redirect_stdout(log_file):
                if artifact_type in ('core', 'extension'):
                    xml_builder.create_extension_xml(languages, artifact['output'])
                    create_csv_derivatives(terms, artifact)
                else:
                    xml_builder.create_vocabulary_xml(languages, artifact['output'])
            # Count generated artifact files rather than configured artifact definitions.
            # A core/extension produces one XML file plus two schema CSV derivatives;
            # a vocabulary produces one XML file. List-of-Terms CSVs were counted above.
            generated_file_count += 3 if artifact_type in ('core', 'extension') else 1

        committed_paths = _commit_transaction(stage_directory)
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
