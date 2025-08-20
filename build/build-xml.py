#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Script to build DWCA XML definition files.
# Based on an earlier script by John Wieczorek

import re
import requests
import json
import os
import pandas as pd
import html

from jinja2 import FileSystemLoader, Environment

import dwcterms

# -----------------
# Configuration section
# -----------------

github_branch = 'master' # "master" for production, something else for development

languages = ['en', 'cs', 'es', 'fr', 'ja', 'ko', 'zh-Hant']

# This is the base URL for raw files from the branch of the repo that has been pushed to GitHub
githubBaseUri = 'https://raw.githubusercontent.com/tdwg/rs.tdwg.org/' + github_branch + '/'
# Optionally, use a local copy, useful during development.
localGithub = False
if localGithub:
    githubBaseUri = '../../rs.tdwg.org/'

class DwcaXml:
    def __init__(self, terms, xmlTemplate, xmlTerms=None, gbifAlternatives=None):
        """
        Tables of terms.

        Keyword arguments:
        terms -- the loaded dwcterms term lists
        xmlTemplate -- XML header
        xmlTerms -- terms to include
        gbifAlternatives -- vocabulary server URL template
        """

        self.terms = terms
        self.xmlTemplate = xmlTemplate
        self.xmlTerms = xmlTerms
        self.gbifAlternatives = gbifAlternatives
        pass

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

    def get_term_definition(self, locale, term_iri):
        """Extract the required information from the terms table to use in
        the XML of a single term by using the term_iri as the identifier
        """

        if locale == 'en':
            l = ''
        else:
            l = '_' + locale

        term_data = {}

        term = self.terms.terms_sorted_by_localname.loc[self.terms.terms_sorted_by_localname['term_iri'] == term_iri].iloc[0]

        term_data["label"] = term['term_localName'] # See https://github.com/tdwg/dwc/issues/253#issuecomment-670098202
        term_data["iri"] = term['pref_ns_uri'] + term['term_localName']
        term_data["class"] = term['tdwgutility_organizedInClass']
        term_data["definition"] = self.t_val(term, 'rdfs_comment', l)
        term_data["comments"] = self.t_val(term, 'dcterms_description', l)
        term_data["examples"] = self.t_val(term, 'examples', l)
        term_data["rdf_type"] = term['rdf_type']
        term_data["namespace"] = term['pref_ns_prefix']
        return term_data

    def create_extension_xml(self, languages, file_output):
        """Build a Darwin Core Extension XML file"""

        ratification_date = self.terms.document_configuration_yaml['doc_modified']

        with open(file_output + ratification_date + ".xml", 'w', encoding='utf-8') as output_file:
            # Open the XML declaration file
            template_file = open(self.xmlTemplate, 'r')
            # Write the entire XML declaration section to the output file
            header = template_file.read()
            header = header.replace('{ratification_date}', ratification_date)
            output_file.write(header)
            # Process the list of terms for the extension combining properties from the
            # extension term list with the properties of the term definitions from Darwin
            # Core.

            # Load the terms from the Extension term list file
            termlist = pd.read_csv(self.xmlTerms)
            termlist = termlist.replace({float("NaN"): None})
            previous_group = 'None'

            for term_index,term in termlist.iterrows():
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

                print(term['iri'])

                # Split the term iri to extract the label and namespace
                term_parts = term['iri'].split('/')

                # Always set the group based on the value in the Extension term list
                group = term['group']

                # Get the term name from the last part of the iri field from the Extension
                # term list file
                name = term_parts[-1]

                # The datatype, if it is other than 'string' must come from the type field
                # in the Extension term list file
                datatype = None
                try:
                    datatype = term['type']
                except:
                    pass

                # The thesaurus, if there is one, must come from the type field in the
                # Extension term list file
                thesaurus = None
                try:
                    thesaurus = term['thesaurus']
                except:
                    pass

                # Get the term namespace from the part of the iri field from the Extension
                # term list file up to the term name
                namespace = term['iri'][0:term['iri'].find(term_parts[-1])]

                # Get the term qualified name from the iri field from the Extension term
                # list file
                qualName = term['iri']

                # Create a dc:relation to the URL for the term in the Quick Reference
                # Guide, if there is one
                dc_relation = None
                if namespace=='http://rs.tdwg.org/dwc/terms/':
                    # Example: https://dwc.tdwg.org/terms/#dwc:behavior
                    dc_relation = f'https://dwc.tdwg.org/terms/#dwc:{name}'
                elif namespace=='http://rs.tdwg.org/dwc/iri/':
                    # Example: https://dwc.tdwg.org/terms/#dwciri:recordedBy
                    dc_relation = f'https://dwc.tdwg.org/terms/#dwciri:{name}'
                elif namespace=='http://purl.org/dc/elements/1.1/':
                    # Example: https://dwc.tdwg.org/terms/#dc:type
                    dc_relation = f'https://dwc.tdwg.org/terms/#dc:{name}'
                elif namespace=='http://purl.org/dc/terms/':
                    # Example: https://dwc.tdwg.org/terms/#dcterms:references
                    dc_relation = f'https://dwc.tdwg.org/terms/#dcterms:{name}'
                elif namespace=='http://purl.org/chrono/terms/':
                    # Example: https://tdwg.github.io/chrono/terms/#chrono:materialDated
                    dc_relation = f'https://chrono.tdwg.org/terms/#chrono:{name}'
                elif namespace=='http://rs.tdwg.org/eco/terms/':
                    # Example: https://tdwg.github.io/eco/terms/#eco:samplingPerformedBy
                    dc_relation = f'https://eco.tdwg.org/terms/#eco:{name}'

                # Get the term definition (dc:description) from the description field of
                # the Extension term list file. Later we'll check if this is blank, and
                # if so, fill it from the standard.
                dc_description = term['description']

                # Get the term usage comments from the description field of the Extension
                # term list file. Later we'll check if this is blank, and if so, fill it
                # from the standard.
                comments = term['comments']

                # Get the term examples from the description field of the Extension term
                # list file. Later we'll check if this is blank, and if so, fill it from
                # the standard.
                examples = term['examples']

                # Set the attribute 'required' to 'false' unless it is provided in the
                # Extension term list file
                required = term['required']
                if required is None:
                    required = 'false'
                else:
                    required = 'true'

                # Try to find the term from the standard
                term_data = self.get_term_definition('en', term['iri'])
                #print(term_data)

                # Fill in dc:description, comments, or examples from the standard if it is
                # not given in the Extension term list file
                if dc_description is None:
                    dc_description = term_data['definition']
                if comments is None:
                    comments = term_data['comments']
                if examples is None:
                    examples = term_data['examples']
                # Transform description, comment, and examples for HMTL encodings
                dc_description = html.escape(dc_description)
                comments = html.escape(comments)
                examples = html.escape(examples)

                # Construct the property entry for the output file
                s = f"    <property group='{group}' "
                s += f"name='{name}' "
                if datatype is not None and datatype.strip()!='':
                    s += f"type='{datatype}' "
                if thesaurus is not None and thesaurus.strip()!='':
                    s += f"thesaurus='{thesaurus}' "
                s += f"namespace='{namespace}' "
                s += f"qualName='{qualName}' "
                s += f"dc:relation='{dc_relation}' "
                s += f"dc:description='{dc_description}' "
                s += f"comments='{comments}' "
                s += f"examples='{examples}'"
                s += f" required='{required}'"
                s += '/>\n'
                if group != previous_group:
                    output_file.write(f'\n    <!-- {group} -->\n')
                output_file.write(s)
                previous_group = group

            output_file.write("</extension>\n")
            output_file.close()

    def create_vocabulary_xml(self, languages, file_output):
        """Build an Darwin Core Vocabulary XML file

        Parameters
        -----------
        xml_template : str
            The relative path to the file containing the declaration for the xml file
            (e.g., "./occurrence_core.tmpl")
        termlist : str
            The relative path to the file in which the list of terms to include in the
            extension are located (e.g., "./occurrence_core.lst").
        file_output : str
            The relative path to the file to write the resulting file.
            (e.g., "../ext/dwc_occurrence.xml")
        """
        ratification_date = self.terms.document_configuration_yaml['doc_modified']

        with open(file_output + ratification_date + ".xml", 'w', encoding='utf-8') as output_file:
            # Open the XML declaration file
            template_file = open(self.xmlTemplate, 'r')
            # Write the entire XML declaration section to the output file
            header = template_file.read()
            header = header.replace('{ratification_date}', ratification_date)
            output_file.write(header)
            output_file.write("\n")
            # Process the list of terms for the extension combining properties from the
            # extension term list with the properties of the term definitions from Darwin
            # Core.

            # Load the terms from the Extension term list file
            #termlist = pd.read_csv(self.xmlTerms)
            #termlist = termlist.replace({float("NaN"): None})

            for term_index,term in self.terms.terms_sorted_by_localname.iterrows():
                # Process each row in the vocabulary term list. The file must have the
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

                print(term['term_iri'])
                print(term['controlled_value_string'])

                name = term['term_localName']
                namespace = term['pref_ns_uri']
                qualName = term['term_iri']
                controlled_value_string = term['controlled_value_string']
                dc_issued = term['term_created']
                dc_title = html.escape(term['label'])
                dc_description = html.escape(term['definition'])
                comments = html.escape(term['notes'])
                usage = html.escape(term['usage'])

                if controlled_value_string == '':
                    continue
                else:
                    print(term)

                s  = f"  <concept\n"
                s += f"    dc:identifier='{controlled_value_string}'\n"
                s += f"    dc:URI='{qualName}'\n"
                s += f"    dc:subject='{qualName}'\n"
                s += f"    dc:relation='https://doi.org/10.3897/biss.3.38084'\n"
                s += f"    dc:issued='{dc_issued}'\n"
                s += f"    dc:description='{dc_description}'\n"
                s += f"    comments='{comments}'>\n"

                s += f"    <preferred>\n"
                for lang in languages:
                    if 'label_'+lang in term:
                        title_lang = html.escape(term['label_'+lang])
                        # Currently the IPT only supports Traditional Chinese with the code zh.
                        if lang == 'zh-Hant':
                            lang = 'zh'
                        elif lang == 'zh-Hans':
                            continue
                        if title_lang.strip() != '':
                            s += f"      <term dc:source='Darwin Core' dc:title='{title_lang}' xml:lang='{lang}'/>\n"
                s += f"    </preferred>\n"


                alternatives = requests.get(self.gbifAlternatives % controlled_value_string)
                if (alternatives.status_code == 200):
                    alternatives_json = alternatives.json()['results']
                    present = False
                    for alt in alternatives_json:
                        if not present:
                            s += f"    <alternative>\n"
                            present = True
                        title = html.escape(alt['value'])
                        lang = alt['language'].split('-')[0]
                        s += f"      <term dc:title='{title}' xml:lang='{lang}'  />\n"
                    if present:
                        s += f"    </alternative>\n"

                s += f"  </concept>\n"
                s += f"\n"

                output_file.write(s)
                print()

            output_file.write("</thesaurus>\n")
            output_file.close()

# Audiovisual Core
ac = dwcterms.DwcTerms(
    githubBaseUri = githubBaseUri,
    termLists = ['audubon'],
    docMetadataFilePath = 'ac_doc_termlist/')

# Humboldt Extension
ac_xml = DwcaXml(
    terms = ac,
    xmlTemplate = "xml/audiovisual.tmpl",
    xmlTerms = "xml/audiovisual_list.csv"
    )
ac_xml.create_extension_xml(languages, 'audiovisual_')


# Darwin Core
dwc = dwcterms.DwcTerms(
    githubBaseUri = githubBaseUri,
    termLists = ['terms', 'dc-for-dwc', 'dcterms-for-dwc', 'ac-for-dwc'],
    docMetadataFilePath = 'dwc_doc_list/')

# Occurrence Core
dwc_xml = DwcaXml(
    terms = dwc,
    xmlTemplate = "xml/occurrence_core.tmpl",
    xmlTerms = "xml/occurrence_core_list.csv"
    )
dwc_xml.create_extension_xml(languages, 'dwc_occurrence_')

# Darwin Core Taxon Core
dwc_xml = DwcaXml(
    terms = dwc,
    xmlTemplate = "xml/taxon_core.tmpl",
    xmlTerms = "xml/taxon_core_list.csv"
    )
dwc_xml.create_extension_xml(languages, 'dwc_taxon_')

# Darwin Core Event Core
dwc_xml = DwcaXml(
    terms = dwc,
    xmlTemplate = "xml/event_core.tmpl",
    xmlTerms = "xml/event_core_list.csv"
    )
dwc_xml.create_extension_xml(languages, 'dwc_event_')

# Darwin Core Resource Relationship extension
dwc_xml = DwcaXml(
    terms = dwc,
    xmlTemplate = "xml/resource_relationship.tmpl",
    xmlTerms = "xml/resource_relationship_list.csv"
    )
dwc_xml.create_extension_xml(languages, 'resource_relationship_')

# Darwin Core Measurements or Facts extension
dwc_xml = DwcaXml(
    terms = dwc,
    xmlTemplate = "xml/measurements_or_facts.tmpl",
    xmlTerms = "xml/measurements_or_facts_list.csv"
    )
dwc_xml.create_extension_xml(languages, 'measurements_or_facts_')

# Darwin Core Identification History extension
dwc_xml = DwcaXml(
    terms = dwc,
    xmlTemplate = "xml/identification_history.tmpl",
    xmlTerms = "xml/identification_history_list.csv"
    )
dwc_xml.create_extension_xml(languages, 'identification_history_')


# Humboldt
eco = dwcterms.DwcTerms(
    githubBaseUri = githubBaseUri,
    termLists = ['terms', 'humboldt'],
    docMetadataFilePath = 'dwc_doc_eco/')

# Humboldt Extension
eco_xml = DwcaXml(
    terms = eco,
    xmlTemplate = "xml/humboldt_eco.tmpl",
    xmlTerms = "xml/humboldt_eco_list.csv"
    )
eco_xml.create_extension_xml(languages, 'humboldt_')


# Establishment Means Vocabulary
em = dwcterms.DwcTerms(
    githubBaseUri = githubBaseUri,
    termLists = ['establishmentMeans'],
    docMetadataFilePath = 'dwc_doc_em/')
em_xml = DwcaXml(
    terms = em,
    xmlTemplate = "xml/establishment_means.tmpl",
    gbifAlternatives = "https://api.gbif.org/v1/vocabularies/EstablishmentMeans/concepts/%s/alternativeLabels")
em_xml.create_vocabulary_xml(languages, 'establishment_means_')


# Degree of Establishment Vocabulary
em = dwcterms.DwcTerms(
    githubBaseUri = githubBaseUri,
    termLists = ['degreeOfEstablishment'],
    docMetadataFilePath = 'dwc_doc_doe/')
em_xml = DwcaXml(
    terms = em,
    xmlTemplate = "xml/degree_of_establishment.tmpl",
    gbifAlternatives = "https://api.gbif.org/v1/vocabularies/DegreeOfEstablishment/concepts/%s/alternativeLabels")
em_xml.create_vocabulary_xml(languages, 'degree_of_establishment_')


# Pathway Vocabulary
em = dwcterms.DwcTerms(
    githubBaseUri = githubBaseUri,
    termLists = ['pathway'],
    docMetadataFilePath = 'dwc_doc_pw/')
em_xml = DwcaXml(
    terms = em,
    xmlTemplate = "xml/pathway.tmpl",
    gbifAlternatives = "https://api.gbif.org/v1/vocabularies/Pathway/concepts/%s/alternativeLabels")
em_xml.create_vocabulary_xml(languages, 'pathway_')
