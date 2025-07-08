# Workflow for generating a new version of Darwin Core

![workflow diagram](workflow_diagram.png)

**Note:** *It is highly recommended that you do not hand-edit the raw CSVs with a text editor. Use Libre Office or Open Office (NOT Excel). They will reliably open, close, and edit the file while preserving and escaping commas, quotes, etc. and also not mess up the UTF-8 encoding if you set them up properly.*

The definitive versions of term definitions are stored in the [rs.tdwg.org repository](https://github.com/tdwg/rs.tdwg.org/).  Generating a new version of Darwin Core requires us to make changes to that repository, then to ensure downstream results are updated (the Darwin Core website, IPT extensions etc).

## Prepare source CSV files

1. Create a source data CSV file for each of the namespaces that has terms that have changed. [This directory](https://github.com/tdwg/rs.tdwg.org/tree/master/process/dwc-revisions/) has examples from previous updates to Darwin Core. You can get the column headers by **TODO HOW?** starting with the appropriate file here and deleting all of the data rows. The file names can be anything, but typically we've been appending the change date to the end of the file as seen in these examples.
2. A source data CSV MUST have a row for each term that has changed (modified or added). For existing terms that have changed, it is safest to start by copying the existing data cells for a term and then modifying them with the changes. The CSVs that contain the existing data for various namespaces are as follows:
   * [`dwc:` terms](https://github.com/tdwg/rs.tdwg.org/blob/master/terms/terms.csv),
   * [`dwciri:` terms](https://github.com/tdwg/rs.tdwg.org/blob/master/iri/iri.csv),
   * [`dc:` terms](https://github.com/tdwg/rs.tdwg.org/blob/master/dc-for-dwc/dc-for-dwc.csv),
   * [`dcterms:` terms](https://github.com/tdwg/rs.tdwg.org/blob/master/dcterms-for-dwc/dcterms-for-dwc.csv),
   * [`establishmentMeans:` terms](https://github.com/tdwg/rs.tdwg.org/blob/master/establishmentMeans/establishmentMeans.csv)
   * [`degreeOfEstablishment:` terms](https://github.com/tdwg/rs.tdwg.org/blob/master/degreeOfEstablishment/degreeOfEstablishment.csv)
   * [`pathway:` terms](https://github.com/tdwg/rs.tdwg.org/blob/master/pathway/pathway.csv)
   * [`ac:` terms](https://github.com/tdwg/rs.tdwg.org/blob/master/ac-for-dwc/ac-for-dwc.csv),
3. If a new term is being added, fill in a new row anywhere below the header row. The row order is unimportant.
4. **Fix link** Special care must be taken if columns are added (i.e. metadata properties are added). This is not for the faint of heart! The new columns must be added to every file used as source data for the various scripts and the column header mapping files also need to be edited. See [this page](for more details). This should be a rare event. DO NOT ever delete columns! If you want to eliminate values for a property, just leave empty strings in all of the cells of that property's column.

## Run the processing script

5. Create a new branch (or fork if you don't have push rights) of the [rs.tdwg.org repo](https://github.com/tdwg/rs.tdwg.org). We have been saving copies of the changes in [this directory](https://github.com/tdwg/rs.tdwg.org/tree/master/process/dwc-revisions) so that we can easily see what's been changed for each past version.
6. Link the [configuration files config.yaml](https://github.com/tdwg/rs.tdwg.org/blob/master/process/config.yaml) and [vocab.yaml](https://github.com/tdwg/rs.tdwg.org/blob/master/process/vocab.yaml) so they point to each CSV for each namespace. We have been saving copies of these files with each update, so you can look at [the file that goes along with the CSV files linked as examples above](https://github.com/tdwg/rs.tdwg.org/blob/master/process/dwc-revisions/dwc-revisions-2023-09-18/config.yaml) to see what needs to be there. Only include data for the namespaces that will be updated.
7. Run the [processing script](https://github.com/tdwg/rs.tdwg.org/blob/master/process/process.py) from the same directory as the configuration files. It's good to look at the diffs for all of the files to make sure that they look sensible.
8. **Dublin Core changes only.** There are some manual edits that need to be made if there are changes to either of the Dublin Core namespace terms. The versions don't get handled very automatically, so make the same changes to the [dcterms: version CSV](https://github.com/tdwg/rs.tdwg.org/blob/master/dcterms-for-dwc-versions/dcterms-for-dwc-versions.csv) or [dc: version CSV](https://github.com/tdwg/rs.tdwg.org/blob/master/dc-for-dwc-versions/dc-for-dwc-versions.csv) as were made to the main term CSVs.
9. **Dublin Core changes only.** The Dublin Core versions also need to be manually added for the new termlist version in the [termlist versions members CSV](https://github.com/tdwg/rs.tdwg.org/blob/master/term-lists-versions/term-lists-versions-members.csv). In the future, this may get automated. The term-list-versions-replacements.csv also must be manually updated.
10. There is a [Python script](https://github.com/tdwg/rs.tdwg.org/blob/master/process/document_metadata_processing/tdwg_docs_metadata_update.py) that automates the process of updating the metadata about the list of terms document. See [these notes](https://github.com/tdwg/rs.tdwg.org/blob/master/process/process-vocabulary.md#5-managing-documents-metadata-via-python-script) for more information. Steve Baskauf is still working on integrating this with the rest of the build process, but it's more automated than it was.
11. Push the branch to GitHub and create a pull request. It is best to review the changes carefully before merging by looking at the diff.

## Review changes and release

12. Once the branch has been merged the data are available via HTTP to the other scripts that use those data. One can test to see if the term dereferencing is working by requesting one of the RDF serializations from the rs-test.tdwg.org subdomain. For example: http://rs-test.tdwg.org/dwc/terms/vitality.rdf . If it's working then the Jenkins task was able to reload the BaseX server with the new data. NOTE: the HTML representations will not yet work correctly since they are just redirects to the term list documents (which have not yet been updated).
13. Term dereferencing to human and machine readable representations is handled by a server managed by GBIF. The new metadata gets fed into the production version of the server when there is a new release of the `rs.tdwg.org` repo, so when everything is done, make sure there a new release has been made. Because dereferencing of current terms to human-readable web pages is handled by a redirect, there won't be any noticeable difference whether the data are reloaded in this step or not. But dereferencing the term versions, or dereferencing to acquire machine readable metadata will not reflect the new changes until the release process completes.

## Update the Darwin Core website, extensions and so on

13. Create a branch of the [Darwin Core repo](https://github.com/tdwg/dwc).
14. Go to the `docs/list/` directory and rename the `index.md` file to the date of the version being replaced (e.g. `2020-08-12.md`). Open that file and add a "Replaced by" label and value to the IRI of the new version (see an older version for an example). Save the file.
15. Run the script [build-termlist.py](https://github.com/tdwg/dwc/blob/master/build/build-termlist.py). NOTE: the value of `githubBaseUri` in the configuration section of the script is set to the master branch in production. However, if you are generating provisional versions of the docs (e.g. for public or Executive Committee review), you may need to change the branch part of the path to the correct branch.
16. Check the diff for the newly generated `index.md` file in the [docs/list/](https://github.com/tdwg/dwc/tree/master/docs/list) directory and make sure that the changes are appropriate.
17. The structure and order of listing of terms in the Quick Reference Guide is controlled by the file [qrg-list.csv](https://github.com/tdwg/dwc/blob/master/build/qrg-list.csv). It is very sensitive to the position of the class terms, which controls the division of the QRG into sections. Also, `http://rs.tdwg.org/dwc/iri/behavior` must be the first term in the section that will be labeled "Use with IRI". So it must be edited with some care. If new terms are added, their IRIs must be added in the proper place in this document in order for them to appear in the QRG.
18. Run the [generate_term_versions.py](https://github.com/tdwg/dwc/blob/master/build/generate_term_versions.py) script to generate a new version of [term_versions.csv](https://github.com/tdwg/dwc/blob/master/vocabulary/term_versions.csv). At some point, this script maybe integrated into `build-termlist.py`.
19. Run the [build-derivatives.py](https://github.com/tdwg/dwc/blob/master/build/build-derivatives.py) script to build the derivative files.
20. Create a pull request for the new branch.
21. When the branch has been reviewed carefully, merge the branch. The new pages should be live as soon as Jekyll rebuilds them on GitHub.

## Build script

The build script `build-derivatives.py` uses as input the list of terms, [vocabulary/term_versions.csv](../vocabulary/term_versions.csv), and creates two simple Darwin Core CSV files in [dist/](../dist/).

## Run the build script

1. Install the required libraries (once):

    ```bash
    pip install -r requirements.txt
    ```

2. Run the script from the command line:

    ```bash
    python build-derivatives.py
    ```

## Generating the "normative document"

The script `generate_term_versions.py` pulls source data from the [rs.tdwg.org](http://github.com/tdwg/rs.tdwg.org) repository. The local file `qrg-list.csv` contains a list of the term IRIs in the order that they are to appear in the Quick Reference Guide. This list needs to be changed whenever terms are added to or deprecated from Darwin Core.

It generates the file `term_versions.csv`, which is used as the input for the `build-derivatives.py` script above.

## Generating the "list of terms" and vocabulary documents and the "quick reference guide".

The Python script `build-termlist.py` uses the header information from `*/termlist-header.en.md`, then builds the list of terms and their metadata from data in the [rs.tdwg.org](http://github.com/tdwg/rs.tdwg.org) repository. The script also inputs `termlist-footer.en.md` and appends it to the end of the generated document, but currently it has no content. The constructed Markdown documents are saved as `/docs/list/index.md`, `/docs/em/index.md`, `/docs/doe/index.md` and `/docs/pathway/index.md`.

It also builds the Quick Reference guide with the terms listed in [qrg-template/qrg-list.csv](qrg-template/qrg-list.csv) and the template `qrg-template/terms.en.jinja`.

This script is run as part of the site build to keep translations into other languages up-to-date.

------
Last edited: 2025-07-08
