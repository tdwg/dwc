# Build script

The build script `build.py` uses as input:

* [vocabulary/term_versions.csv](../vocabulary/term_versions.csv): the list of terms
* [docs/_layouts/terms.tmpl](../docs/_layouts/terms.tmpl): a Jinja2 template for the quick reference guide

To create:

* The quick reference guide as a Markdown file at [docs/terms/index.md](../docs/terms/index.md). The guide is build as Markdown (with a lot of included html) rather than html, so it can incorporated by Jekyll in the Darwin Core website (including a header, footer and table of content).
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
