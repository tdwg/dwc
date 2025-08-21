#!/usr/bin/env python3
# Script to build DWCA CSV files.
# Based on an earlier script by S Van Hoey

import pandas as pd
import dwcterms

# Darwin Core
dwc = dwcterms.DwcTerms(
    termLists = ['terms', 'iri', 'dc-for-dwc', 'dcterms-for-dwc', 'ac-for-dwc'],
    docMetadataFilePath = 'dwc_doc_list/')

# Use QRG list for term ordering
qrg_df = pd.read_csv('qrg-template/qrg-list.csv', na_filter=False)

# Filter terms, store labels
simple_term_labels = []
all_term_labels = []
for qrg_index,qrg in qrg_df.iterrows(): # sequence of the terms used as order
    term = dwc.get_term(qrg['recommended_term_iri'])
    if (term['rdf_type'] == 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'):
        if (term['tdwgutility_usageScope'] == 'simple'):
            simple_term_labels.append(term['term_localName'])
        if (term['tdwgutility_usageScope'] in ('simple', 'extension')):
            all_term_labels.append(term['term_localName'])

# Create simple_dwc_vertical.csv, a list of all simple DWC terms.
with open('../dist/simple_dwc_vertical.csv', 'w', encoding='utf-8') as dwc_v_list_file:
    dwc_v_list_file.write("\n".join(simple_term_labels))
    dwc_v_list_file.write("\n")

# Create simple_dwc_horizontal.csv, a list of all simple DWC terms (i.e. CSV header line).
with open('../dist/simple_dwc_horizontal.csv', 'w', encoding='utf-8') as dwc_h_list_file:
    dwc_h_list_file.write(','.join(simple_term_labels))
    dwc_h_list_file.write("\n")

# Create a list of all terms defined as 'simple' or 'extension'
with open('../dist/all_dwc_vertical.csv', 'w', encoding='utf-8') as dwc_all_list_file:
    dwc_all_list_file.write("\n".join(all_term_labels))
    dwc_all_list_file.write("\n")
