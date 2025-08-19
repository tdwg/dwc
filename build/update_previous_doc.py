# Script to make the current document be the previous document
# This program is released under a GNU General Public License v3.0 http://www.gnu.org/licenses/gpl-3.0
# Author: Steve Baskauf

script_version = '0.1.0'
version_modified = '2023-09-17'

# NOTE: This script should be run only after the script updating the machine-readable metadata has been run.
# It must be run before the script that generates the new document version.

import requests
import pandas as pd
import yaml
import os
import sys

# -----------------
# Command line arguments
# -----------------

arg_vals = sys.argv[1:]
opts = [opt for opt in arg_vals if opt.startswith('-')]
args = [arg for arg in arg_vals if not arg.startswith('-')]

# Name of the last part of the URL of the doc
if '--slug' in opts:
    document_slug = args[opts.index('--slug')]
else:
    print('Must specify URL slug for document using --slug option')
    exit()

# Used as the directory name
if '--dir' in opts:
    directory_name = args[opts.index('--dir')]
else:
    print('Must specify name of directory containing document_configuration.yaml using --dir option')
    exit()

# "master" for production, something else for development
if '--branch' in opts:
    github_branch = args[opts.index('--branch')]
else:
    github_branch = 'master'


# -----------------
# Configuration section
# -----------------

githubBaseUri = 'https://raw.githubusercontent.com/tdwg/rs.tdwg.org/' + github_branch + '/'

config_file_path = 'process/document_metadata_processing/' + directory_name + '/'
document_configuration_yaml_file = 'document_configuration.yaml'

path_of_doc_relative_to_build_dir = '../docs/' + document_slug + '/'

# Load the document configuration YAML file from its GitHub URL
document_configuration_yaml_url = githubBaseUri + config_file_path + document_configuration_yaml_file
document_configuration_yaml = requests.get(document_configuration_yaml_url).text
document_configuration_yaml = yaml.load(document_configuration_yaml, Loader=yaml.FullLoader)

# Determine date of the document that is to be turned into the previous document and the version IRI
# of the most recent version of that document.

# Load versions list from document versions data in the rs.tdwg.org repo and find most recent version.
versions_data_url = githubBaseUri + 'docs-versions/docs-versions.csv'
versions_list_df = pd.read_csv(versions_data_url, na_filter=False)

# Slice all rows for versions of this document.
matching_versions = versions_list_df[versions_list_df['current_iri']==document_configuration_yaml['current_iri']]
# Sort the matching versions by version IRI in descending order so that the most recent version is first.
matching_versions = matching_versions.sort_values(by=['version_iri'], ascending=[False])

# Check for the error condition of there being no matching versions.
if len(matching_versions.index) == 0:
    print('There are no versions of this document. Did you run the script to update the document metadata?')
    exit()

# If there is only one row in the matching_versions dataframe (only one version), then the rest of the script should not be run.
if len(matching_versions.index) == 1:
    print('There is only one version of this document. No changes are being made to the documents.')
    exit()

# The most recent version is the first row in the dataframe (row 0). 

# Find the column index of the column named "version_iri".
version_iri_column_index = matching_versions.columns.get_loc('version_iri')
most_recent_version_iri = matching_versions.iat[0, version_iri_column_index]
print(most_recent_version_iri)

# Find the date of the previous version, which is in the second row of the dataframe (row 1). 
# Find the column index of the column named "version_issued".
version_iri_column_index = matching_versions.columns.get_loc('version_issued')
previous_version_date = matching_versions.iat[1, version_iri_column_index]
print(previous_version_date)

# The document to be converted is named "index.md". Its name must be changed to the date of the previous version.
os.rename(path_of_doc_relative_to_build_dir + 'index.md', path_of_doc_relative_to_build_dir + previous_version_date + '.md')

# Open the renamed file and read its text.
with open(path_of_doc_relative_to_build_dir + previous_version_date + '.md', 'rt') as file_object:
    file_text = file_object.read()

# Insert the replacement version information into the header
replacement_version_metadata_string = '''Replaced by
: <''' + most_recent_version_iri + '''>

'''

# Insert the previous version information into the header above the Abstract section.
header = file_text.replace('Abstract\n:', replacement_version_metadata_string + 'Abstract\n:')

# Write the updated file text to the file.
with open(path_of_doc_relative_to_build_dir + previous_version_date + '.md', 'wt') as file_object:
    file_object.write(header)
