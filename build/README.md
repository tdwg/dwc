# Workflow for generating a new version of Darwin Core

![workflow diagram](workflow_diagram.png)

**Note:** *It is highly recommended that you do not hand-edit the raw CSVs with a text editor. Use Libre Office or Open Office (NOT Excel). They will reliably open, close, and edit the file while preserving and escaping commas, quotes, etc. and also not mess up the UTF-8 encoding if you set them up properly.* 

1. * Fix link * Create a source data CSV file for each of the namespaces that has terms that have changed. [This directory]() has examples for all of the namespaces currently being used in the main Darwin Core vocabulary. You can get the column header by starting with the appropriate file here and deleting all of the data rows. The file names can be anything, but typically we've been appending the change date to the end of the file as seen in these examples.
2. A source data CSV MUST have a row for each term that has changed (modified or added). For existing terms that have changed, it is safest to start by copying the existing data cells for a term and then modifying them with the changes. The CSVs that contain the existing data for various namespaces are as follows. The `dwc:` namespace terms are [here](https://github.com/tdwg/rs.tdwg.org/blob/master/terms/terms.csv), `dwciri:` terms are [here](https://github.com/tdwg/rs.tdwg.org/blob/master/iri/iri.csv), `dc:` terms are [here](https://github.com/tdwg/rs.tdwg.org/blob/master/dc-for-dwc/dc-for-dwc.csv), and the `dcterms:` terms are [here](https://github.com/tdwg/rs.tdwg.org/blob/master/dcterms-for-dwc/dcterms-for-dwc.csv).
3. If a new term is being added, fill in a new row anywhere below the header row. The row order is unimportant. 
4. Special care must be taken if columns are added (i.e. metadata properties are added). This is not for the faint of heart! The new columns must be added to every file used as source data for the various scripts and the column header mapping files also need to be edited. See [this page](for more details). This should be a rare event. DO NOT ever delete columns! If you want to elimite values for a property, just leave empty strings in all of the cells of that property's column.
5. Create a new branch (or fork if you don't have push rights) of the [rs.tdwg.org repo](https://github.com/tdwg/rs.tdwg.org). We have been saving copies of the changes in [this directory](https://github.com/tdwg/rs.tdwg.org/tree/master/process/dwc-revisions) so that we can easily see what's been changed for each past version. 
6. * Fix link * Modify the [configuration file](https://github.com/tdwg/rs.tdwg.org/blob/master/process/config.json) so that it points to each CSV for each namespace. We have been saving copies of the config file with each update, so you can look at [the file that goes along with the CSV files linked as examples above]() to see what needs to be there. Only include data for the namespaces that will be updated.
7. Run the [processing script](https://github.com/tdwg/rs.tdwg.org/blob/master/process/process.py), which needs to be in the same directory as the configuration file. It's good to look at the diffs for all of the files to make sure that they look sensible.
8. **Dublin Core changes only.** 10. There are some manual edits that need to be made if there are changes to either of the Dublin Core namespace terms. The versions don't get handled very automatically, so make the same changes to the [dcterms: version CSV](https://github.com/tdwg/rs.tdwg.org/blob/master/dcterms-for-dwc-versions/dcterms-for-dwc-versions.csv) or [dc: version CSV](https://github.com/tdwg/rs.tdwg.org/blob/master/dc-for-dwc-versions/dc-for-dwc-versions.csv) as were made to the main term CSVs. 
9. **Dublin Core changes only.** The Dublin Core versions also need to be manually added for the new termlist version in the [termlist versions members CSV](https://github.com/tdwg/rs.tdwg.org/blob/master/term-lists-versions/term-lists-versions-members.csv). In the future, this may get automated. The term-list-versions-replacements.csv also must be manually updated.
10. There is a [Python script](https://github.com/tdwg/rs.tdwg.org/blob/master/process/document_metadata_processing/tdwg_docs_metadata_update.py) that automates the process of updating the metadata about the list of terms document. See [these notes](https://github.com/tdwg/rs.tdwg.org/blob/master/process/process-vocabulary.md#5-managing-documents-metadata-via-python-script) for more information. Steve Baskauf is still working on integrating this with the rest of the build process, but it's more automated than it was.
11. Push the branch to GitHub and create a pull request. It is best to review the changes carefully before merging by looking at the diff.
12. Once the branch has been merged the data are available via HTTP to the other scripts that use those data. One can test to see if the term dereferencing is working by requesting one of the RDF serializations from the rs-test.tdwg.org subdomain. For example: http://rs-test.tdwg.org/dwc/terms/vitality.rdf . If it's working then the Jenkins task was able to reload the BaseX server with the new data. NOTE: the HTML representations will not yet work correctly since they are just redirects to the term list documents (which have not yet been updated).
13. Create a branch of the [Darwin Core repo](https://github.com/tdwg/dwc). 
14. Edit the [termlist-header.md](https://github.com/tdwg/dwc/blob/master/build/termlist-header.md) file, changing "Date version issued", the "This version" URL, the version URL and date in the citation, and the date in the "1 Introduction" to the date used for the new version of Darwin Core. Change the "Previous version" date to the date of the version that is being replaced. Save the file.
15. Go to the `docs/list/` directory and change the name of the `index.md` file to the date of the version being replaced (e.g. `2020-08-12.md`). Open that file and add a "Replaced by" label and value to the IRI of the new version (see an older version for an example). Save the file.
16. Run the script [build-termlist.py](https://github.com/tdwg/dwc/blob/master/build/build-termlist.py). Be patient since some steps take a few seconds. When the `Done` message appears, it's finished. NOTE: the value of `githubBaseUri` in the configuration section of the script is set to the master branch in production. However, if you are generating provisional versions of the docs (e.g. for public or Executive Committee review), you may need to change the branch part of the path to the correct branch.
17. Check the diff for the newly generated `index.md` file in the [docs/list/](https://github.com/tdwg/dwc/tree/master/docs/list) directory and make sure that the changes are appropriate.
18. The structure and order of listing of terms in the Quick Reference Guide is controlled by the file [qrg-list.csv](https://github.com/tdwg/dwc/blob/master/build/qrg-list.csv). It is very sensitive to the position of the class terms, which controls the division of the QRG into sections. Also, `http://purl.org/dc/terms/language` must be the first term in the section that will be labeled "Use with IRI". So it must be edited with some care. If new terms are added, their IRIs must be added in the proper place in this document in order for them to appear in the QRG.
19. Run the [generate_term_versions.py](https://github.com/tdwg/dwc/blob/master/build/generate_term_versions.py) script to generate a new version of [term_versions.csv](https://github.com/tdwg/dwc/blob/master/vocabulary/term_versions.csv). This file serves as the source of data for the build script in the next step. At some point, that script may be modified to eliminate this intermediate step. 
20. Run the [build.py](https://github.com/tdwg/dwc/blob/master/build/build.py) script to build the Quick Reference Guide.
21. Create a pull request for the new branch.
22. When the branch has been reviewed carefully, merge the branch. The new pages shuld be live as soon as Jekyll rebuilds them on GitHub.
23. Term dereferencing to human and machine readable representations is handled by a server managed by GBIF. The new metadata gets fed into the production version of the server when there is a new release of the `rs.tdwg.org` repo, so when everything is done, make sure there a new release has been made. Because dereferencing of current terms to human-readable web pages is handled by a redirect, there won't be any noticeable difference whether the data are reloaded in this step or not. But dereferencing the term versions, or dereferencing to acquire machine readable metadata will not reflect the new changes until the release process completes.


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
Last edited: 2023-06-28
