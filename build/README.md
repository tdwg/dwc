# Build script

The build script `build.py` uses as input:

* [vocabulary/term_versions.csv](../vocabulary/term_versions.csv): the list of terms
* [terms.tmpl](terms.tmpl): a Jinja2 template for the quick reference guide

And creates:

* The quick reference guide is a Markdown file at [docs/terms/index.md](../docs/terms/index.md). The guide is built as Markdown (with a lot of included html) rather than html, so it can be incorporated by Jekyll in the Darwin Core website (including a header, footer and table of contents).
* Two simple Darwin Core CSV files in [dist/](../dist/)

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

The Jupyter notebook `build-termlist.ipynb` inputs the header information from `termlist-header.md`, then builds the list of terms and their metadata from data in the [rs.tdwg.org](http://github.com/tdwg/rs.tdwg.org) repository. The script also inputs `termlist-footer.md` and appends it to the end of the generated document, but currently it has no content. The constructed Markdown document is saved as `/docs/list/index.md`. 

Note: when this is all working, the code can be pulled from the Jupyter notebook cells and just be saved as a `.py` Python script.
