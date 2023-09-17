# Script to build Markdown pages that provide term metadata for complex vocabularies
# Steve Baskauf 2020-06-28 CC0
# Modified for use with Humboldt Extension 2022-05-29
# This script merges static Markdown header and footer documents with term information tables (in Markdown) generated from data in the rs.tdwg.org repo from the TDWG Github site

import re
import requests   # best library to manage HTTP transactions
import csv        # library to read/write/parse CSV files
import json       # library to convert JSON to Python data structures
import pandas as pd
import yaml

# -----------------
# Configuration section
# -----------------

# Name of the last part of the URL of the doc
document_slug = 'text'

# Used as the directory name
directory_name = 'dwc_terms_guides_text'

# "master" for production, something else for development
github_branch = 'master'

# This is the base URL for raw files from the branch of the repo that has been pushed to GitHub
github_base_url = 'https://raw.githubusercontent.com/tdwg/rs.tdwg.org/' + github_branch + '/'

document_template_name = 'index_template.md' # This is the input file into which the header metadata will be inserted.
out_filename = '../docs/' + document_slug + '/index.md' # This is where the document rendered by GitHub Pages will be created.

config_file_path = 'process/document_metadata_processing/' + directory_name + '/'
contributors_yaml_file = 'authors_configuration.yaml'
document_configuration_yaml_file = 'document_configuration.yaml'

# Load the contributors YAML file from its GitHub URL
contributors_yaml_url = github_base_url + config_file_path + contributors_yaml_file
contributors_yaml = requests.get(contributors_yaml_url).text
if contributors_yaml == '404: Not Found':
    print('Contributors YAML file not found. Check the URL.')
    print(contributors_yaml_url)
    exit()
contributors_yaml = yaml.load(contributors_yaml, Loader=yaml.FullLoader)

# Load the document configuration YAML file from its GitHub URL
document_configuration_yaml_url = github_base_url + config_file_path + document_configuration_yaml_file
document_configuration_yaml = requests.get(document_configuration_yaml_url).text
document_configuration_yaml = yaml.load(document_configuration_yaml, Loader=yaml.FullLoader)

# -----------------
# Main script
# -----------------

# Because this is a hack of the build-termlist.py script, "header" is used in variable names, although in this case
# it is the entire document template, not just the header.
headerObject = open(directory_name + '/' + document_template_name, 'rt', encoding='utf-8')
header = headerObject.read()
headerObject.close()

# Build the Markdown for the contributors list
contributors = ''
for contributor in contributors_yaml:
    contributors += '[' + contributor['contributor_literal'] + '](' + contributor['contributor_iri'] + ') '
    contributors += '([' + contributor['affiliation'] + '](' + contributor['affiliation_uri'] + ')), '
contributors = contributors[:-2] # Remove the last comma and space

# Substitute values of ratification_date and contributors into the header template
header = header.replace('{document_title}', document_configuration_yaml['documentTitle'])
header = header.replace('{ratification_date}', document_configuration_yaml['doc_modified'])
header = header.replace('{created_date}', document_configuration_yaml['doc_created'])
header = header.replace('{contributors}', contributors)
header = header.replace('{standard_iri}', document_configuration_yaml['dcterms_isPartOf'])
header = header.replace('{current_iri}', document_configuration_yaml['current_iri'])
header = header.replace('{abstract}', document_configuration_yaml['abstract'])
header = header.replace('{creator}', document_configuration_yaml['creator'])
header = header.replace('{publisher}', document_configuration_yaml['publisher'])
year = document_configuration_yaml['doc_modified'].split('-')[0]
header = header.replace('{year}', year)

# Determine whether there was a previous version of the document.
if document_configuration_yaml['doc_created'] != document_configuration_yaml['doc_modified']:
    # Load versions list from document versions data in the rs.tdwg.org repo and find most recent version.
    versions_data_url = github_base_url + 'docs/docs-versions.csv'
    versions_list_df = pd.read_csv(versions_data_url, na_filter=False)
    # Slice all rows for versions of this document.
    matching_versions = versions_list_df[versions_list_df['current_iri']==document_configuration_yaml['current_iri']]
    # Sort the matching versions by version IRI in descending order so that the most recent version is first.
    matching_versions = matching_versions.sort_values(by=['version_iri'], ascending=[False])
    # The previous version is the second row in the dataframe (row 1).
    # The version IRI is in the second column (column 1).
    most_recent_version_iri = matching_versions.iat[1, 1]
    #print(most_recent_version_iri)

    # Insert the previous version information into the header
    previous_version_metadata_string = '''Previous version
: <''' + most_recent_version_iri + '''>

'''
    # Insert the previous version information into the designated slot.
    header = header.replace('{previous_version_slot}\n\n', previous_version_metadata_string)
else:
    # If there was no previous version, remove the slot from the header.
    header = header.replace('{previous_version_slot}\n\n', '')

outputObject = open(out_filename, 'wt', encoding='utf-8')
outputObject.write(header)
outputObject.close()
    
print('done')
