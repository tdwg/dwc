# -----------------------------
# file import and configuration
# -----------------------------

import pandas as pd

# This is the base URL for raw files from the branch of the repo that has been pushed to GitHub
github_baseUri = 'https://raw.githubusercontent.com/tdwg/rs.tdwg.org/master/'

# This is a Python list of the database names of the term version lists to be included in the document.
#term_lists = ['iri']
term_lists = ['terms', 'iri', 'dc-for-dwc', 'dcterms-for-dwc', 'curatorial', 'dwcore', 'dwctype', 'geospatial']

column_mappings = [
    {'norm': 'iri', 'accum': 'version'},
    {'norm': 'term_localName', 'accum': 'term_localName'},
    {'norm': 'label', 'accum': 'label'},
    {'norm': 'definition', 'accum': 'rdfs_comment'},
    {'norm': 'comments', 'accum': 'dcterms_description'},
    {'norm': 'examples', 'accum': 'examples'},
    {'norm': 'organized_in', 'accum': 'tdwgutility_organizedInClass'},
    {'norm': 'issued', 'accum': 'version_issued'},
    {'norm': 'status', 'accum': 'version_status'},
    {'norm': 'replaces', 'accum': 'replaces_version'},
    {'norm': 'rdf_type', 'accum': 'rdf_type'},
    {'norm': 'term_iri', 'accum': 'term_iri'},
    {'norm': 'abcd_equivalence', 'accum': 'tdwgutility_abcdEquivalence'},
    {'norm': 'flags', 'accum': 'tdwgutility_usageScope'}
]

# -----------------------------
# Load the term version data for all of the term lists that are included in Darwin Core (including obsolete ones)
# -----------------------------

print('Loading namespace CSV files from GitHub:')
for term_list_index in range(len(term_lists)):
    # retrieve configuration metadata for term list
    config_url = github_baseUri + term_lists[term_list_index] + '/constants.csv'
    config_df = pd.read_csv(config_url, na_filter=False)
    term_namespace = config_df.iloc[0].loc['domainRoot']
    # print(term_namespace)
    
    # Retrieve versions metadata for term list
    versions_url = github_baseUri + term_lists[term_list_index] + '-versions/' + term_lists[term_list_index] + '-versions.csv'
    print(versions_url)
    versions_df = pd.read_csv(versions_url, na_filter=False)
    
    # Add a column for the term IRI by concatenating the term namespace with the local name value for each row
    versions_df['term_iri'] = term_namespace + versions_df['term_localName']
    
    if term_list_index == 0:
        # start the DataFrame with the first term list versions data
        accumulated_frame = versions_df.copy()
    else:
        # append subsequent term lists data to the DataFrame
        accumulated_frame = accumulated_frame.append(versions_df.copy(), sort=True)
        
# Special procedure for obsolete terms
# Retrieve versions metadata
versions_url = github_baseUri + 'dwc-obsolete-versions/dwc-obsolete-versions.csv'
print(versions_url)
versions_df = pd.read_csv(versions_url, na_filter=False)

# Retrieve term/version join data
join_url = github_baseUri + 'dwc-obsolete/dwc-obsolete-versions.csv'
join_df = pd.read_csv(join_url, na_filter=False)

# Find the term IRI for each version and add it to a list
term_iri_list = []
for row_index,row in versions_df.iterrows():
    for join_index,join_row in join_df.iterrows():
        # Locate the row in the join data where the version matches the row in the versions DataFrame
        if join_row['version'] == row['version']:
            term_iri_list.append(join_row['term'])
            break
'''    
    # Locate the row in the join data where the version matches the row in the versions DataFrame
    term_iri_row = join_df.loc[join_df['version'] == row['version']]
    # Add the current term IRI from the join data row to the list
    term_iri_list.append(term_iri_row['term'])
'''
# Add the curren term IRI list to the DataFrame as the term_iri column
versions_df['term_iri'] = term_iri_list
# Add the obsolete terms DataFrame to the accumulated DataFrame
accumulated_frame = accumulated_frame.append(versions_df.copy(), sort=True)

accumulated_frame.reset_index(drop=True, inplace=True) # reset the row indices to consecutive starting with zero
accumulated_frame.fillna('', inplace=True) # replace all missing values with empty strings
accumulated_frame.head()
print()

# -----------------------------
# Create a list of lists building each row of the normative document
# -----------------------------

# Create column header list for the normative document
column_headers = []
for column_mapping in column_mappings:
    # Add the value of the 'norm' key for the column
    column_headers.append(column_mapping['norm'])
#print(column_headers)

print('merging rows for output document')
# Create the rows of the normative document
normative_doc_list = []
for row_index,row in accumulated_frame.iterrows():
    normative_doc_row = []
    for column_mapping in column_mappings:
        # Add the value from the accumulation DataFrame column whose name is the value of the 'accum' key for the column
        if column_mapping['norm'] == 'replaces':
            # concatenate all versions that were replaced; pipe separated
            replace_iri = row['replaces_version']
            if row['replaces1_version'] != '':
                replace_iri += '|' + row['replaces1_version']
                if row['replaces2_version'] != '':
                    replace_iri += '|' + row['replaces2_version']
            normative_doc_row.append(replace_iri)
        else:
            normative_doc_row.append(row[column_mapping['accum']])
    normative_doc_list.append(normative_doc_row)

# special handling for http://rs.tdwg.org/dwc/terms/attributes/UseWithIRI. Eventually we want to eliminate this.
use_with_iri_row = ['http://rs.tdwg.org/dwc/terms/attributes/UseWithIRI-2017-10-06',
  'UseWithIRI',
  'UseWithIRI',
  'The category of terms that are recommended to have an IRI as a value.',
  'A utility class to organize the dwciri: terms.',
  '',
  'http://www.w3.org/2000/01/rdf-schema#Class',
  '2017-10-06',
  'recommended',
  '',
  'http://www.w3.org/2000/01/rdf-schema#Class',
  'http://rs.tdwg.org/dwc/terms/attributes/UseWithIRI',
  'not in ABCD',
  '']
normative_doc_list.append(use_with_iri_row)

# Turn list of lists into dataframe
normative_doc_df = pd.DataFrame(normative_doc_list, columns = column_headers)
# Set the row label as the version IRI
normative_doc_df.set_index('iri', drop=False, inplace=True)
normative_doc_df.index.names = ['row_index']
#normative_doc_df.to_csv('test.csv', index = False)
string1 = normative_doc_df.iloc[571]['term_iri']

# -----------------------------
# Order the rows as required for generating the Quick Reference Guide
# -----------------------------

# DataFrame to hold built Quick Reference Guide-ordered rows
built_rows_df = normative_doc_df.iloc[1:0].copy()

# DataFrame to hold remaining rows
remaining_rows_df = normative_doc_df.copy()

# Load the ordered list of terms in the quick reference guide (single column named recommended_term_iri)
print('ordering rows for output document')
qrg_df = pd.read_csv('qrg-list.csv', na_filter=False)
for qrg_index,qrg_row in qrg_df.iterrows():
    found = False
    for row_index,row in normative_doc_df.iterrows():
        if (qrg_row['recommended_term_iri'] == row['term_iri']) and (row['status'] == 'recommended'):
            found = True
            built_rows_df = built_rows_df.append(row)
            remaining_rows_df.drop(row['iri'], axis=0, inplace=True)
            break
    if not found:
        print(qrg_row['recommended_term_iri'])

# Alphabetize remaining term versions
#remaining_rows_df.sort_values(by='iri', inplace=True)
sorted_output = remaining_rows_df.iloc[remaining_rows_df.iri.str.lower().argsort()]

# Concatenate ordered terms and remaining versions
#normative_doc_df = built_rows_df.append(remaining_rows_df)
normative_doc_df = built_rows_df.append(sorted_output)

# Save the normative document DataFrame as a CSV
normative_doc_df.to_csv('../vocabulary/term_versions.csv', index = False)

print('done')
