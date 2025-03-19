# Script to build Markdown pages that provide term metadata for complex vocabularies
# Steve Baskauf 2020-08-12 CC0
# updated 2021-02-11
# Updated by Matthew Blissett 2025-03.
# This script merges static Markdown header documents with term information tables (in Markdown) generated from data in the rs.tdwg.org repo from the TDWG Github site

import re
import requests   # best library to manage HTTP transactions
import csv        # library to read/write/parse CSV files
import json       # library to convert JSON to Python data structures
import os
import pandas as pd
import yaml

from jinja2 import FileSystemLoader, Environment

# -----------------
# Configuration section
# -----------------

github_branch = 'master' # "master" for production, something else for development

# This is the base URL for raw files from the branch of the repo that has been pushed to GitHub
githubBaseUri = 'https://raw.githubusercontent.com/tdwg/rs.tdwg.org/' + github_branch + '/'
# Optionally, use a local copy, useful during development.
localGithub = False
if localGithub:
    githubBaseUri = '../../rs.tdwg.org/'

# ---------------
# Load header data
# ---------------

config_file_path = 'process/document_metadata_processing/dwc_doc_list/'
contributors_yaml_file = 'authors_configuration.yaml'
document_configuration_yaml_file = 'document_configuration.yaml'

class TermList:

    def __init__(self, termLists, hasNamespace, vocabType, organizedInCategories, displayOrder, displayLabel, displayComments, displayId):
        """
        Tables of terms.

        Keyword arguments:
        termLists -- list of database names of the term lists to be loaded
        hasNamespace -- set to True for a list of terms containing multiple namespaces
        vocabType -- 1 is simple vocabulary, 2 is simple controlled vocabulary, 3 is a c.v. with broader hierarchy
        organizedInCategories -- Terms in large vocabularies like Darwin and AV Cores may be organized into categories using tdwgutility_organizedInClass.  If so, those categories can be used to group terms in the generated term list document.
        displayOrder -- If organized in categories, the display_order list must contain the IRIs that are values of tdwgutility_organizedInClass. Otherwise set to [''].
        displayLabel -- these are the section labels for the categories in the page
        displayComments -- these are the comments about the category to be appended following the section labels
        displayId -- these are the fragment identifiers for the associated sections for the categories
        """

        self.termLists = termLists
        self.has_namespace = hasNamespace
        self.vocab_type = vocabType
        self.organized_in_categories = organizedInCategories
        self.display_order = displayOrder
        self.display_label = displayLabel
        self.display_comments = displayComments
        self.display_id = displayId

        self.load_namespace_metadata()
        self.load_contributors()
        self.load_document_configuration()

        self.decisions_df = pd.read_csv(githubBaseUri + 'decisions/decisions-links.csv', na_filter=False)
        self.decisions_df = self.decisions_df[['linked_affected_resource', 'decision_localName']]

        self.retrieve_term_list_metadata()
        self.create_metadata_table()
        pass


    def load_namespace_metadata(self):
        if self.has_namespace:
            # Load the configuration file used in the metadata creation process.
            if localGithub:
                with open(githubBaseUri + 'process/config.yaml') as file: metadata_config_text = file.read()
            else:
                metadata_config_text = requests.get(githubBaseUri + 'process/config.yaml').text
            metadata_config = yaml.load(metadata_config_text, Loader=yaml.FullLoader)
            self.namespace_uri = metadata_config['namespaces'][0]['namespace_uri']
            self.pref_namespace_prefix = metadata_config['namespaces'][0]['pref_namespace_prefix']


    def load_contributors(self):
        # Load the contributors YAML file from its GitHub URL
        contributors_yaml_url = githubBaseUri + config_file_path + contributors_yaml_file
        if localGithub:
            with open(contributors_yaml_url) as file: contributors_yaml = file.read()
        else:
            contributors_yaml = requests.get(contributors_yaml_url).text
        if contributors_yaml == '404: Not Found':
            print('Contributors YAML file not found. Check the URL.')
            print(contributors_yaml_url)
            exit()
        self.contributors_yaml = yaml.load(contributors_yaml, Loader=yaml.FullLoader)


    def load_document_configuration(self):
        # Load the document configuration YAML file from its GitHub URL
        document_configuration_yaml_url = githubBaseUri + config_file_path + document_configuration_yaml_file
        if localGithub:
            with open(document_configuration_yaml_url) as file: document_configuration_yaml = file.read()
        else:
            document_configuration_yaml = requests.get(document_configuration_yaml_url).text
        self.document_configuration_yaml = yaml.load(document_configuration_yaml, Loader=yaml.FullLoader)


    def retrieve_term_list_metadata(self):
        """
        Retrieve term list metadata from GitHub
        """
        termLists = pd.DataFrame(self.termLists, columns=['database'])

        print('Retrieving term list metadata from GitHub')
        frame = pd.read_csv(githubBaseUri + 'term-lists/term-lists.csv', na_filter=False)

        frame = frame.rename(columns={'vann_preferredNamespacePrefix': 'pref_ns_prefix',
                                      'vann_preferredNamespaceUri': 'pref_ns_uri',
                                      'list': 'list_iri'})

        frame = frame[['database', 'pref_ns_prefix', 'pref_ns_uri', 'list_iri']]

        frame = pd.merge(termLists, frame, on='database', how='inner')

        self.term_lists_info = frame
        print("term_lists_info\n", self.term_lists_info, '\n')

    def create_metadata_table(self):
        """
        Create metadata table and populate using data from namespace databases in GitHub
        """

        print('Retrieving metadata about terms from all namespaces from GitHub')
        for i, term_list in self.term_lists_info.iterrows():
            # retrieve current term metadata for term list
            metadata_url = githubBaseUri + term_list['database'] + '/' + term_list['database'] + '.csv'
            print("Reading metadata", metadata_url)
            metadata_df = pd.read_csv(metadata_url, keep_default_na=False)
            #print('metadata_df', metadata_df)
            metadata_df = metadata_df.assign(pref_ns_prefix=term_list['pref_ns_prefix'],
                                             pref_ns_uri=term_list['pref_ns_uri'],
                                             term_iri=lambda x: term_list['pref_ns_uri'] + x['term_localName'])
            # Rename columns in vocabularies to match the columns in the DWC term list.
            metadata_df = metadata_df.rename(columns={'type': 'rdf_type'})

            # retrieve versions metadata for term list
            versions_url = githubBaseUri + term_list['database'] + '-versions/' + term_list['database'] + '-versions.csv'
            print("Reading versions", versions_url)
            versions_df = pd.read_csv(versions_url, na_filter=False)
            versions_df = versions_df.query('version_status == "recommended"')
            #print("Vrec\n", versions_df)
            versions_df = versions_df[['term_localName', 'version']]
            versions_df = versions_df.rename(columns={'version': 'version_iri'})
            # TODO NOTE: the current hack for non-TDWG terms without a version is to append # to the end of the term IRI
            # if version_iri[len(version_iri)-1] == '#':
            #     version_iri = ''
            #print("Vsmall\n", versions_df)

            metadata_df = pd.merge(metadata_df, versions_df,
                                   on='term_localName',
                                   how='left')

            # retrieve translated term metadata for term list
            translations_url = githubBaseUri + term_list['database'] + '/' + term_list['database'] + '-translations.csv'
            print("Reading translated metadata", translations_url)
            try:
                translations_df = pd.read_csv(translations_url, keep_default_na=False)
                metadata_df = pd.merge(metadata_df, translations_df,
                                       on='term_localName',
                                       how='left')
            except:
                print("No translations found for", term_list['database'])

            if i == 0:
                frame = metadata_df
            else:
                frame = pd.concat([frame, metadata_df])

        frame = frame.fillna('')

        self.terms_sorted_by_label = frame.sort_values(by='label')

        # This makes sort case insensitive
        self.terms_sorted_by_localname = frame.iloc[frame.term_localName.str.lower().argsort()]
        print('done retrieving')
        #print('Columns of terms_sorted_by_localname:', self.terms_sorted_by_localname.columns.values)
        print()


    def t(self, key):
        if key in self.dictionary:
            return self.dictionary[key]
        else:
            raise Exception("Value %s not present in translation dictionary" % key)

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

    def generate_index_by_name(self):
        """
        generate the index of terms grouped by category and sorted alphabetically by lowercase term local name
        """

        print('Generating term index by CURIE')
        text = '### 3.1 %s\n\n' % self.t('index_by_term_name')
        text += '%s\n\n' % self.t('see_also_index_by_label')

        text += '**%s**\n' % self.t('classes')
        text += '\n'
        for row_index,row in self.terms_sorted_by_localname.iterrows():
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
                filtered_table = self.terms_sorted_by_localname[self.terms_sorted_by_localname['tdwgutility_organizedInClass']==self.display_order[category]]
                filtered_table.reset_index(drop=True, inplace=True)
            else:
                filtered_table = self.terms_sorted_by_localname

            for row_index,row in filtered_table.iterrows():
                if row['rdf_type'] != 'http://www.w3.org/2000/01/rdf-schema#Class':
                    curie = row['pref_ns_prefix'] + ":" + row['term_localName']
                    curie_anchor = curie.replace(':','_')
                    text += '[' + curie + '](#' + curie_anchor + ') |\n'
            text = text[:len(text)-3] # remove final trailing " |\n"
            text += '\n\n' # put back removed newline

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
        for row_index,row in self.terms_sorted_by_label.iterrows():
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
                filtered_table = self.terms_sorted_by_label[self.terms_sorted_by_label['tdwgutility_organizedInClass']==self.display_order[category]]
                filtered_table.reset_index(drop=True, inplace=True)
            else:
                filtered_table = self.terms_sorted_by_label

            for row_index,row in filtered_table.iterrows():
                if 'rdf_type' in row and row['rdf_type'] != 'http://www.w3.org/2000/01/rdf-schema#Class':
                    curie_anchor = row['pref_ns_prefix'] + "_" + row['term_localName']
                    text += '[' + row['label'] + '](#' + curie_anchor + ') |\n'
            text = text[:len(text)-3] # remove final trailing " |\n"
            text += '\n\n' # put back removed newline

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
            filtered_table = self.terms_sorted_by_localname

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
                text += '\t\t\t<td>%s</td>\n' % row['label'+l]
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
                    text += '\t\t\t<td>%s</td>\n' % row['rdfs_comment'+l]
                else:
                    text += '\t\t\t<td>' + row['definition'+l] + '</td>\n'
                text += '\t\t</tr>\n'

                if 'usage' in row and row['usage'] != '':
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('usage')
                    text += '\t\t\t<td>%s</td>\n' % self.convert_examples(self.convert_link(self.convert_code(row['usage'+l])))
                    text += '\t\t</tr>\n'

                notes = self.first(row, ['dcterms_description'+l, 'notes'+l])
                if notes != '':
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('notes')
                    text += '\t\t\t<td>%s</td>\n' % self.convert_link(self.convert_code(notes))
                    text += '\t\t</tr>\n'

                if 'examples' in row and row['examples'] != '':
                    text += '\t\t<tr>\n'
                    text += '\t\t\t<td>%s</td>\n' % self.t('examples')
                    text += '\t\t\t<td>%s</td>\n' % self.convert_examples(self.convert_link(self.convert_code(row['examples'+l])))
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
                for j, decision in self.decisions_df.loc[self.decisions_df['linked_affected_resource'] == uri].iterrows():
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
        for contributor in self.contributors_yaml:
            contributors += '[' + contributor['contributor_literal'] + '](' + contributor['contributor_iri'] + ') '
            contributors += '([' + contributor['affiliation'] + '](' + contributor['affiliation_uri'] + ')), '
        contributors = contributors[:-2] # Remove the last comma and space

        # Substitute values of ratification_date and contributors into the header template
        header = header.replace('{document_title}', self.document_configuration_yaml['documentTitle'])
        header = header.replace('{ratification_date}', self.document_configuration_yaml['doc_modified'])
        header = header.replace('{created_date}', self.document_configuration_yaml['doc_created'])
        header = header.replace('{contributors}', contributors)
        header = header.replace('{standard_iri}', self.document_configuration_yaml['dcterms_isPartOf'])
        header = header.replace('{current_iri}', self.document_configuration_yaml['current_iri'])
        header = header.replace('{abstract}', self.document_configuration_yaml['abstract'])
        header = header.replace('{creator}', self.document_configuration_yaml['creator'])
        header = header.replace('{publisher}', self.document_configuration_yaml['publisher'])
        year = self.document_configuration_yaml['doc_modified'].split('-')[0]
        header = header.replace('{year}', year)
        if self.has_namespace:
            header = header.replace('{namespace_uri}', self.namespace_uri)
            header = header.replace('{pref_namespace_prefix}', self.pref_namespace_prefix)

        # Determine whether there was a previous version of the document.
        if self.document_configuration_yaml['doc_created'] != self.document_configuration_yaml['doc_modified']:
            # Load versions list from document versions data in the rs.tdwg.org repo and find most recent version.
            versions_data_url = githubBaseUri + 'docs/docs-versions.csv'
            versions_list_df = pd.read_csv(versions_data_url, na_filter=False)
            # Slice all rows for versions of this document.
            matching_versions = versions_list_df[versions_list_df['current_iri']==self.document_configuration_yaml['current_iri']]
            # Sort the matching versions by version IRI in descending order so that the most recent version is first.
            matching_versions = matching_versions.sort_values(by=['version_iri'], ascending=[False])
            # The previous version is the second row in the dataframe (row 1).
            # The version IRI is in the second column (column 1).
            most_recent_version_iri = matching_versions.iat[1, 1]
            #print(most_recent_version_iri)

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


    def get_term_definition(self, locale, term_iri):
        """Extract the required information from the terms table to show on
        the webpage of a single term by using the term_iri as the identifier
        """

        if locale == 'en':
            l = ''
        else:
            l = '_' + locale

        term_data = {}

        term = self.terms_sorted_by_localname.loc[self.terms_sorted_by_localname['term_iri'] == term_iri].iloc[0]

        term_data["label"] = term['term_localName'] # See https://github.com/tdwg/dwc/issues/253#issuecomment-670098202
        term_data["iri"] = term['pref_ns_uri'] + term['term_localName']
        term_data["class"] = term['tdwgutility_organizedInClass']
        term_data["definition"] = self.convert_link(term['rdfs_comment'+l])
        term_data["comments"] = self.convert_link(self.convert_code(term['dcterms_description'+l]))
        term_data["examples"] = self.convert_link(self.convert_code(term['examples'+l]))
        term_data["rdf_type"] = term['rdf_type']
        term_data["namespace"] = term['pref_ns_prefix']
        return term_data


    def process_terms(self, locale):
        """Parse the config terms (sequence matters!)

        Collect all required data from both the normative versions file and
        the config file and return the template ready data.  Choose the
        relevant locale.

        Returns
        -------
        Data object that can be digested by the html-template file. Contains
        the term data formatted to create the indidivual outputs, each list
        element is a dictionary representing a class group. Hence, the data
        object is structured as follows:

            [
                {'name' : class_group_name_1, 'label': xxxx,...,
                    'terms':
                        [
                            {'name' : term_1, 'label': xxxx,...},
                            {'name' : term_2, 'label': xxxx,...},
                            ...
                        ]}
                {'name' : class_group_name_2,...
                ...},
                ...
            ]
        """
        template_data = []
        in_class = "Record-level"
        # sequence matters in config and it starts with Record-level which we populate here ad-hoc
        class_group = {}
        class_group["isRecordLevel"] = True
        class_group["label"] = self.t('record-level')
        class_group["iri"] = None
        class_group["class"] = None
        class_group["definition"] = None
        class_group["comments"] = None
        class_group["rdf_type"] = None
        class_group["terms"] = []
        class_group["namespace"] = None

        qrg_df = pd.read_csv('qrg-template/qrg-list.csv', na_filter=False)

        addedUseWithIRI = False
        for term_index,term in qrg_df.iterrows(): # sequence of the terms used as order
            term_data = self.get_term_definition(locale, term['recommended_term_iri'])
            if term_data["rdf_type"] == "http://www.w3.org/2000/01/rdf-schema#Class":
                # new class encountered
                # store previous section in template_data
                template_data.append(class_group)
                #start new class group
                class_group = term_data
                class_group["terms"] = []
                in_class = term_data["label"] # check on the class working in
            elif term_data['iri']=='http://purl.org/dc/terms/language':
                # Vulnerable to ordering terms in term_versions.csv, but...
                # This is the first row of dwciri terms
                # store previous section in template_data
                template_data.append(class_group)
                #start a class group for UseWithIRI
                class_group = {"label":"UseWithIRI"}
                class_group["terms"] = []
                in_class = "UseWithIRI" # check on the class working in
                addedUseWithIRI = True
                class_group['terms'].append(term_data)
            else:
                class_group['terms'].append(term_data)
        # save the last class to template_data
        template_data.append(class_group)
        return template_data

    def generate_qrg(self, locale, outFileName, dictionaryFileName, htmlTemplate):
        """
        Generate Markdown with the processed term info, by filling in the template.

        Keyword arguments:
        locale -- Locale to use
        outFileName -- Output file name
        htmlTemplate -- Path to Jinja2 templaet
        """

        with open(dictionaryFileName, encoding='utf-8') as jsonFile:
            self.dictionary = json.load(jsonFile)

        data = {}
        data["class_groups"] = self.process_terms(locale)

        env = Environment(
            loader = FileSystemLoader(os.path.dirname(htmlTemplate)),
            trim_blocks = True
        )
        template = env.get_template(os.path.basename(htmlTemplate))
        print(template)

        html = template.render(data)

        index_page = open(outFileName, "w")
        index_page.write(str(html))
        index_page.close()


def generate_all_markdown(termList, path, locales):
    """
    Generate a Darwin Core term list for DWC terms or one of its vocabularies.

    Keyword arguments:
    termList -- Term data to use
    path -- Path fragment used for output and finding templates
    locales -- Locales to generate
    """

    for locale in locales:
        print("Generating %s/index.md in" % path, locale)
        dictionaryFileName = 'termlist-dictionary.%s.json' % locale
        headerFileName = path + '-template/termlist-header.%s.md' % locale

        if locale == 'en':
            outFileName = '../docs/%s/index.md' % path
        else:
            outFilePath = '../docs/%s/%s' % (locale, path)
            os.makedirs(outFilePath, exist_ok=True)
            outFileName = outFilePath + '/index.md'

        termList.generate_term_list_markdown(locale, outFileName, dictionaryFileName, headerFileName)
        print("")


def generate_all_qrg(termList, locales):
    """
    Generate the Darwin Core Quick Reference Guide.

    Keyword arguments:
    termList -- Term data to use
    locales -- Locales to generate
    """

    for locale in locales:
        print("Generating terms/index.md in", locale)
        dictionaryFileName = 'termlist-dictionary.%s.json' % locale
        templateFileName = 'qrg-template/terms.%s.jinja' % locale

        if locale == 'en':
            outFileName = '../docs/terms/index.md'
        else:
            outFilePath = '../docs/%s/terms' % (locale)
            os.makedirs(outFilePath, exist_ok=True)
            outFileName = outFilePath + '/index.md'

        termList.generate_qrg(locale, outFileName, dictionaryFileName, templateFileName)
        print("")


# Darwin Core Terms
dwc_list = TermList(
    termLists = ['terms', 'iri', 'dc-for-dwc', 'dcterms-for-dwc'],
    hasNamespace = False,
    vocabType = 1,
    organizedInCategories = True,
    displayOrder = ['', 'http://purl.org/dc/elements/1.1/', 'http://purl.org/dc/terms/', 'http://rs.tdwg.org/dwc/terms/Occurrence', 'http://rs.tdwg.org/dwc/terms/Organism', 'http://rs.tdwg.org/dwc/terms/MaterialEntity', 'http://rs.tdwg.org/dwc/terms/MaterialSample', 'http://rs.tdwg.org/dwc/terms/Event', 'http://purl.org/dc/terms/Location', 'http://rs.tdwg.org/dwc/terms/GeologicalContext', 'http://rs.tdwg.org/dwc/terms/Identification', 'http://rs.tdwg.org/dwc/terms/Taxon', 'http://rs.tdwg.org/dwc/terms/MeasurementOrFact', 'http://rs.tdwg.org/dwc/terms/ResourceRelationship', 'http://rs.tdwg.org/dwc/terms/attributes/UseWithIRI'],
    displayLabel = ['Record level', 'Dublin Core legacy namespace', 'Dublin Core terms namespace', 'Occurrence', 'Organism', 'Material Entity', 'Material Sample', 'Event', 'Location', 'Geological Context', 'Identification', 'Taxon', 'Measurement or Fact', 'Resource Relationship', 'IRI-value terms'],
    displayComments = ['','','','','','','','','','','','','','',''],
    displayId = ['record_level', 'dc', 'dcterms', 'occurrence', 'organism', 'material_entity', 'material_sample', 'event', 'location', 'geological_context', 'identification', 'taxon', 'measurement_or_fact', 'resource_relationship', 'use_with_iri'])

# Darwin Core Terms HTML
generate_all_markdown(dwc_list, 'list', ['fr', 'en'])

# Darwin Core Terms QRG
generate_all_qrg(dwc_list, ['en', 'fr'])

# Establishment Means Vocabulary
em_list = TermList(
    termLists = ['establishmentMeans'],
    hasNamespace = True,
    vocabType = 2,
    organizedInCategories = False,
    displayOrder = [''],
    displayLabel = ['Vocabulary'],
    displayComments = [''],
    displayId = ['Vocabulary'])

# Establishment Means HTML
generate_all_markdown(em_list, 'em', ['en', 'fr'])

# Degree of Establishment Vocabulary
doe_list = TermList(
    termLists = ['degreeOfEstablishment'],
    hasNamespace = True,
    vocabType = 2,
    organizedInCategories = False,
    displayOrder = [''],
    displayLabel = ['Vocabulary'],
    displayComments = [''],
    displayId = ['Vocabulary'])

# Degree of Establishment HTML
generate_all_markdown(doe_list, 'doe', ['en'])

# Pathway Vocabulary
pw_list = TermList(
    termLists = ['pathway'],
    hasNamespace = True,
    vocabType = 3,
    organizedInCategories = False,
    displayOrder = [''],
    displayLabel = ['Vocabulary'],
    displayComments = [''],
    displayId = ['Vocabulary'])

# Pathway HTML
generate_all_markdown(pw_list, 'pw', ['en'])
