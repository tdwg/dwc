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

# ---------------
# Load header data
# ---------------

document_config_file_path = 'process/document_metadata_processing/'
contributors_yaml_file = 'authors_configuration.yaml'
document_configuration_yaml_file = 'document_configuration.yaml'


def _repository_base(rsPath, githubBranch='master', githubUser='tdwg'):
    """Return the rs.tdwg.org source root and whether it is local."""
    if rsPath is not None:
        base = os.path.abspath(os.path.expanduser(rsPath))
        if not base.endswith(os.sep):
            base += os.sep
        return base, True
    return (
        'https://raw.githubusercontent.com/' + githubUser +
        '/rs.tdwg.org/' + githubBranch + '/',
        False,
    )


def load_document_metadata(documentIri, rsPath=None, githubBranch='master', githubUser='tdwg'):
    """Load current Document metadata and contributors from processed rs registries."""
    documentIri = str(documentIri or '').strip()
    if not documentIri:
        raise ValueError('documentIri must be a non-empty Document IRI')

    githubBaseUri, _ = _repository_base(rsPath, githubBranch, githubUser)
    metadata_source = githubBaseUri + 'docs/docs.csv'
    authors_source = githubBaseUri + 'docs/docs-authors.csv'

    metadata_df = pd.read_csv(metadata_source, na_filter=False, dtype=str)
    if 'current_iri' not in metadata_df.columns:
        raise ValueError(f"Document registry lacks 'current_iri': {metadata_source}")
    matches = metadata_df[metadata_df['current_iri'].astype(str) == documentIri]
    if len(matches) != 1:
        raise ValueError(
            f"Expected exactly one current Document row for {documentIri}; "
            f"found {len(matches)} in {metadata_source}"
        )
    metadata = matches.iloc[0].to_dict()

    authors_df = pd.read_csv(authors_source, na_filter=False, dtype=str)
    if 'document' not in authors_df.columns:
        raise ValueError(f"Document contributor registry lacks 'document': {authors_source}")
    authors = (
        authors_df[authors_df['document'].astype(str) == documentIri]
        .to_dict(orient='records')
    )

    return authors, metadata, authors_source, metadata_source


class DwcTerms:

    def __init__(self, termLists, docMetadataFilePath=None, rsPath=None,
                 githubBranch='master', githubUser='tdwg', documentIri=None):
        """
        Tables of terms.

        Keyword arguments:
        termLists -- list of database names of the term lists to be loaded
        documentIri -- current Document IRI whose metadata is loaded from the processed
            rs.tdwg.org registries (docs/docs.csv and docs/docs-authors.csv)
        docMetadataFilePath -- legacy subdirectory of document_metadata_processing for
            callers that still use authors_configuration.yaml and document_configuration.yaml
        rsPath -- local path to the rs.tdwg.org repository. If None, data are retrieved
            from the configured GitHub branch via HTTP.
        githubBranch -- GitHub branch to use when rsPath is None
        githubUser -- GitHub user or organization to use when rsPath is None
        """

        githubBaseUri, localGithub = _repository_base(
            rsPath, githubBranch, githubUser
        )
        self.localGithub = localGithub
        self.githubBaseUri = githubBaseUri

        documentIri = str(documentIri or '').strip()
        legacy_path = str(docMetadataFilePath or '').strip()
        if documentIri and legacy_path:
            raise ValueError(
                'Specify documentIri for processed registry metadata or '
                'docMetadataFilePath for legacy YAML metadata, not both.'
            )
        if not documentIri and not legacy_path:
            raise ValueError(
                'A document metadata source is required: specify documentIri or '
                'docMetadataFilePath.'
            )

        self.document_iri = documentIri or None
        self.doc_metadata_file_path = legacy_path or None
        if self.doc_metadata_file_path and not self.doc_metadata_file_path.endswith('/'):
            self.doc_metadata_file_path += '/'

        self.termLists = termLists

        if self.document_iri:
            (
                self.contributors_yaml,
                self.document_configuration_yaml,
                self.contributors_source,
                self.document_configuration_source,
            ) = load_document_metadata(
                self.document_iri,
                rsPath=rsPath,
                githubBranch=githubBranch,
                githubUser=githubUser,
            )
        else:
            self.load_contributors()
            self.load_document_configuration()

        self.decisions_df = pd.read_csv(githubBaseUri + 'decisions/decisions-links.csv', na_filter=False)
        self.decisions_df = self.decisions_df[['linked_affected_resource', 'decision_localName']]

        self.retrieve_term_list_metadata()
        self.create_metadata_table()
        pass


    def load_contributors(self):
        # Load the contributors YAML file from the configured metadata source
        contributors_yaml_url = self.githubBaseUri + document_config_file_path + self.doc_metadata_file_path + contributors_yaml_file
        self.contributors_source = contributors_yaml_url
        if self.localGithub:
            with open(contributors_yaml_url) as file: contributors_yaml = file.read()
        else:
            contributors_yaml = requests.get(contributors_yaml_url).text
        if contributors_yaml == '404: Not Found':
            print('Contributors YAML file not found. Check the URL.')
            print(contributors_yaml_url)
            exit()
        self.contributors_yaml = yaml.load(contributors_yaml, Loader=yaml.FullLoader)


    def load_document_configuration(self):
        # Load the document configuration YAML file from the configured metadata source
        document_configuration_yaml_url = self.githubBaseUri + document_config_file_path + self.doc_metadata_file_path + document_configuration_yaml_file
        self.document_configuration_source = document_configuration_yaml_url
        if self.localGithub:
            with open(document_configuration_yaml_url) as file: document_configuration_yaml = file.read()
        else:
            document_configuration_yaml = requests.get(document_configuration_yaml_url).text
        self.document_configuration_yaml = yaml.load(document_configuration_yaml, Loader=yaml.FullLoader)


    def retrieve_term_list_metadata(self):
        """
        Retrieve term list metadata from the configured metadata source
        """
        termLists = pd.DataFrame(self.termLists, columns=['database'])

        print('Loading term list metadata...')
        frame = pd.read_csv(self.githubBaseUri + 'term-lists/term-lists.csv', na_filter=False)

        frame = frame.rename(columns={'vann_preferredNamespacePrefix': 'pref_ns_prefix',
                                      'vann_preferredNamespaceUri': 'pref_ns_uri',
                                      'list': 'list_iri'})

        frame = frame[['database', 'pref_ns_prefix', 'pref_ns_uri', 'list_iri']]

        frame = pd.merge(termLists, frame, on='database', how='inner')

        self.term_lists_info = frame
        print("term_lists_info\n", self.term_lists_info, '\n')

    def create_metadata_table(self):
        """
        Create metadata table and populate using data from the configured metadata source
        """

        print('Loading term metadata...')
        for i, term_list in self.term_lists_info.iterrows():
            # retrieve current term metadata for term list
            metadata_url = self.githubBaseUri + term_list['database'] + '/' + term_list['database'] + '.csv'
            print("Reading term metadata", metadata_url)
            # dtype=str: term_localName is a merge key below and is used with the .str
            # accessor when sorting, so it must stay a string. Without this, a term list
            # whose local names are all digits (e.g. MIxS, which identifies samp_name as
            # https://w3id.org/mixs/0001107) is read as int64, losing the leading zeros
            # and breaking the term_iri concatenation.
            metadata_df = pd.read_csv(metadata_url, keep_default_na=False, dtype=str)
            #print('metadata_df', metadata_df)
            metadata_df = metadata_df.assign(pref_ns_prefix=term_list['pref_ns_prefix'],
                                             pref_ns_uri=term_list['pref_ns_uri'],
                                             term_iri=lambda x: term_list['pref_ns_uri'] + x['term_localName'])
            # Rename columns in vocabularies to match the columns in the DWC term list.
            metadata_df = metadata_df.rename(columns={'type': 'rdf_type'})

            # retrieve versions metadata for term list
            versions_url = self.githubBaseUri + term_list['database'] + '-versions/' + term_list['database'] + '-versions.csv'
            print("Reading term versions", versions_url)
            versions_df = pd.read_csv(versions_url, na_filter=False, dtype=str)
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
            translations_url = self.githubBaseUri + term_list['database'] + '/' + term_list['database'] + '-translations.csv'
            print("Reading term translations", translations_url)
            try:
                translations_df = pd.read_csv(translations_url, keep_default_na=False, dtype=str)
                metadata_df = pd.merge(metadata_df, translations_df,
                                       on='term_localName',
                                       how='left')
            except:
                print("No term translations found for", term_list['database'])

            if i == 0:
                frame = metadata_df
            else:
                frame = pd.concat([frame, metadata_df])

        frame = frame.fillna('')

        self.terms_sorted_by_label = frame.sort_values(by='label')

        # This makes sort case insensitive
        self.terms_sorted_by_localname = frame.iloc[frame.term_localName.str.lower().argsort()]
        print('Term metadata loaded.')
        #print('Columns of terms_sorted_by_localname:', self.terms_sorted_by_localname.columns.values)
        print()

    def get_term(self, term_iri):
        return self.terms_sorted_by_localname.loc[self.terms_sorted_by_localname['term_iri'] == term_iri].iloc[0]
