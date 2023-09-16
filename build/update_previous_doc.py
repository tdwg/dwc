# Script to make the current document be the previous document

# This script should be run only after the script updating the machine-readable metadata has been run.

import requests   # best library to manage HTTP transactions
import pandas as pd
import yaml
import os

githubBaseUri = 'https://raw.githubusercontent.com/tdwg/rs.tdwg.org/master/'

config_file_path = 'process/document_metadata_processing/dwc_doc_list/'
document_configuration_yaml_file = 'document_configuration.yaml'

path_of_doc_relative_to_build_dir = '../docs/list/'

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
