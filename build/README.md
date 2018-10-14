The build folder contains a python script to rebuild the terms index page.

It will use the `vocabulary/term_versions.csv` to populate the html-template (`./config/index.tmpl`) to an `.md` file.

## Run the build script
Install the required libraries for this script with pip once:

```
pip install -r requirements.txt
```

To run the script, run the build script from command line:

```
python build.py
```