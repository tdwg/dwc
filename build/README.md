# Workflow for generating a new version of Darwin Core

![workflow diagram](workflow_diagram.png)

1. Download the CSV file for the terms in the namespace to be modified. The `dwc:` namespace terms are [here](https://github.com/tdwg/rs.tdwg.org/blob/master/terms/terms.csv), `dwciri:` terms are [here](https://github.com/tdwg/rs.tdwg.org/blob/master/iri/iri.csv), `dc:` terms are [here](https://github.com/tdwg/rs.tdwg.org/blob/master/dc-for-dwc/dc-for-dwc.csv), and the `dcterms:` terms are [here](https://github.com/tdwg/rs.tdwg.org/blob/master/dcterms-for-dwc/dcterms-for-dwc.csv).
2. **Note:** *It is highly recommended that you do not hand-edit the raw CSVs with a text editor. Use Libre Office or Open Office (NOT Excel). They will reliably open, close, and edit the file while preserving and escaping commas, quotes, etc. and also not mess up the UTF-8 encoding if you set them up properly.* Delete the columns that do not serve as input to the system. They are: `document_modified`, `term_isDefinedBy`, `term_created`, `term_modified`, `term_deprecated`, `replaces_term`, `replaces1_term`, and `replaces2_term`. That should leave `term_localName` and all of the columns starting with `label` and onwards to the right.
3. Delete any rows whose terms are not being modified.
4. Edit the cells whose values need to be changed.
5. If a new term is being added, fill in a new row anywhere below the header row.
6. Special care must be taken if columns are added (i.e. metadata properties are added). This is not for the faint of heart! The new columns must be added to every file used as source data for the various scripts and the column header mapping files also need to be edited. See [this page](for more details). This should be a rare event. DO NOT ever delete columns! If you want to elimite values for a property, just leave empty strings in all of the cells of that property's column.
7. Create a new branch (or fork if you don't have push rights) of the [rs.tdwg.org repo](https://github.com/tdwg/rs.tdwg.org). Save your edited CSV file using some notable name in the [process](https://github.com/tdwg/rs.tdwg.org/tree/master/process) directory. 
8. Repeat this process for all namespaces that will be changed. I've been saving copies of the changes in [this directory](https://github.com/tdwg/rs.tdwg.org/tree/master/process/dwc-revisions) so that we can easily see what's been done in the past. Modify the [configuration file](https://github.com/tdwg/rs.tdwg.org/blob/master/process/config.json) so that it points to each CSV for each namespace. Look at the example to see what needs to be there. 
9. Run the [processing script](https://github.com/tdwg/rs.tdwg.org/blob/master/process/process.py), which needs to be in the same directory as the configuration file. 
10. There are some manual edits that need to be made if there are changes to either of the Dublin Core namespace terms. The versions don't get handled very automatically, so make the same changes to the [dcterms: version CSV](https://github.com/tdwg/rs.tdwg.org/blob/master/dcterms-for-dwc-versions/dcterms-for-dwc-versions.csv) or [dc: version CSV](https://github.com/tdwg/rs.tdwg.org/blob/master/dc-for-dwc-versions/dc-for-dwc-versions.csv) as were made to the main term CSVs. 
11. The Dublin Core versions also need to be manually added for the new termlist version in the [termlist versions members CSV](https://github.com/tdwg/rs.tdwg.org/blob/master/term-lists-versions/term-lists-versions-members.csv). In the future, this may get automated.
12. As of 2023-06-16 there is a [Python script](https://github.com/tdwg/rs.tdwg.org/blob/master/process/document_metadata_processing/tdwg_docs_metadata_update.py) that automates the process of updating the metadata about the list of terms document. See [these notes](https://github.com/tdwg/rs.tdwg.org/blob/master/process/process-vocabulary.md#5-managing-documents-metadata-via-python-script) for more information. Steve Baskauf is still working on integrating this with the rest of the build process, but it's more automated than it was.
13. Push the branch to GitHub and create a pull request. It is best for someone to review the changes carefully before merging.
14. Once the branch has been merged the data are available via HTTP to the other scripts that use those data. 
15. Create a branch of the [Darwin Core repo](https://github.com/tdwg/dwc). 
16. Edit the [termlist-header.md](https://github.com/tdwg/dwc/blob/master/build/termlist-header.md) file, changing "Date version issued", the "This version" URL, the version URL in the citation, and the date in the "1 Introduction" to the date used for the new version of Darwin Core. Change the "Previous version" date to the date of the version that is being replaced. Save the file.
17. Go to the `docs/list/` directory and change the name of the `index.md` file to the date of the version being replaced (e.g. `2020-08-12.md`). Open that file and add a "Replaced by" label and value to the IRI of the new version (see an older version for an example). Save the file.
18. Run the script [build-termlist.py](https://github.com/tdwg/dwc/blob/master/build/build-termlist.py). Be patient since some steps take a few seconds. When the `Done` message appears, it's finished.
19. Check the diff for the newly generated `index.md` file in the [docs/list/](https://github.com/tdwg/dwc/tree/master/docs/list) directory and make sure that the changes are appropriate.
20. The structure and order of listing of terms in the Quick Reference Guide is controlled by the file [qrg-list.csv](https://github.com/tdwg/dwc/blob/master/build/qrg-list.csv). It is very sensitive to the position of the class terms, which controls the division of the QRG into sections. Also, `http://purl.org/dc/terms/language` must be the first term in the section that will be labeled "Use with IRI". So it must be edited with some care. If new terms are added, their IRIs must be added in the proper place in this document in order for them to appear in the QRG.
21. Run the [generate_term_versions.py](https://github.com/tdwg/dwc/blob/master/build/generate_term_versions.py) script to generate a new version of [term_versions.csv](https://github.com/tdwg/dwc/blob/master/vocabulary/term_versions.csv). This file serves as the source of data for the build script in the next step. At some point, that script may be modified to eliminate this intermediate step. 
22. Run the [build.py](https://github.com/tdwg/dwc/blob/master/build/build.py) script to build the Quick Reference Guide.
23. Create a pull request for the new branch.
24. When the branch has been reviewed carefully, merge the branch. The new pages shuld be live as soon as Jekyll rebuilds them on GitHub.
25. Term dereferencing to human and machine readable representations is handled by a server managed by GBIF. The new metadata gets fed into the production version of the server when there is a new release of the `rs.tdwg.org` repo, so when everything is done, make sure there a new release has been made. Because dereferencing of current terms to human-readable web pages is handled by a redirect, there won't be any noticeable difference whether the data are reloaded in this step or not. But dereferencing the term versions, or dereferencing to acquire machine readable metadata will not reflect the new changes until the release process completes.


## Build script

The build script `build.py` uses as input:

- [vocabulary/term_versions.csv](../vocabulary/term_versions.csv): the list of terms
- [terms.tmpl](terms.tmpl): a Jinja2 template for the Quick Reference Guide

And creates:

- The Quick Reference Guide is a Markdown file at [docs/terms/index.md](../docs/terms/index.md). The guide is built as Markdown (with a lot of included html) rather than html, so it can be incorporated by Jekyll in the Darwin Core website (including a header, footer and table of contents).
- Two simple Darwin Core CSV files in [dist/](../dist/)

## Run the build script

1. Install the required libraries (once):

    ```bash
    pip install -r requirements.txt
    ```

2. Run the script from the command line:

    ```bash
    python build.py
    ```

## Generating the "normative document"

The script `generate_normative_csv.py` pulls source data from the [rs.tdwg.org](http://github.com/tdwg/rs.tdwg.org) repository. The local file `qrg-list.csv` contains a list of the term IRIs in the order that they are to appear in the Quick Reference Guide. This list needs to be changed whenever terms are added to or deprecated from Darwin Core.

It generates the file `term_versions.csv`, which is used as the input for the `build.py` script above.

## Generating the "list of terms" document

The Python script `build-termlist.py` inputs the header information from `termlist-header.md`, then builds the list of terms and their metadata from data in the [rs.tdwg.org](http://github.com/tdwg/rs.tdwg.org) repository. The script also inputs `termlist-footer.md` and appends it to the end of the generated document, but currently it has no content. The constructed Markdown document is saved as `/docs/list/index.md`. 

------
Last edited: 2023-06-17
