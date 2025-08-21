# Class to load Darwin Core terms, including versions, history etc.
# Steve Baskauf 2020-08-12 CC0
# Updated by Matthew Blissett 2025.

import re
import sys
import requests   # best library to manage HTTP transactions
import csv        # library to read/write/parse CSV files
import os
import pandas as pd
import yaml

# -----------------
# Command line arguments
# -----------------

arg_vals = sys.argv[1:]
opts = [opt for opt in arg_vals if opt.startswith('-')]
args = [arg for arg in arg_vals if not arg.startswith('-')]

# "master" for production, something else for development
if '--branch' in opts:
    github_branch = args[opts.index('--branch')]
else:
    github_branch = 'master'

# This is the base URL for raw files from the branch of the repo that has been pushed to GitHub
if '--rs-path' in opts:
    # Optionally, use a local copy of rs.tdwg.org, useful during development.
    # e.g. '../../rs.tdwg.org/'
    githubBaseUri = args[opts.index('--rs-path')]
    if not githubBaseUri.endswith('/'):
        githubBaseUri += '/'
    localGithub = True
else:
    githubBaseUri = 'https://raw.githubusercontent.com/tdwg/rs.tdwg.org/' + github_branch + '/'
    localGithub = False

# ---------------
# Load header data
# ---------------

document_config_file_path = 'process/document_metadata_processing/'
contributors_yaml_file = 'authors_configuration.yaml'
document_configuration_yaml_file = 'document_configuration.yaml'


class DwcTerms:

    def __init__(self, termLists, docMetadataFilePath):
        """
        Tables of terms.

        Keyword arguments:
        githubBaseUri -- GitHub URL, or local path.
        termLists -- list of database names of the term lists to be loaded
        """

        self.doc_metadata_file_path = docMetadataFilePath
        if not self.doc_metadata_file_path.endswith('/'):
            self.doc_metadata_file_path += '/'

        self.termLists = termLists

        self.load_contributors()
        self.load_document_configuration()

        self.decisions_df = pd.read_csv(githubBaseUri + 'decisions/decisions-links.csv', na_filter=False)
        self.decisions_df = self.decisions_df[['linked_affected_resource', 'decision_localName']]

        self.retrieve_term_list_metadata()
        self.create_metadata_table()
        pass


    def load_contributors(self):
        # Load the contributors YAML file from its GitHub URL
        contributors_yaml_url = githubBaseUri + document_config_file_path + self.doc_metadata_file_path + contributors_yaml_file
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
        document_configuration_yaml_url = githubBaseUri + document_config_file_path + self.doc_metadata_file_path + document_configuration_yaml_file
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
            versions_df = versions_df[['term_localName', 'version', 'version_status']]
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

    def get_term(self, term_iri):
        return self.terms_sorted_by_localname.loc[self.terms_sorted_by_localname['term_iri'] == term_iri].iloc[0]
