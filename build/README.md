The build folder contains a python script to rebuild the terms index page.

It will use the `vocabulary/term_versions.csv` and the `./config/terms_config.csv` to populate the html-template file (`./config/index.tmpl`)

## Run the build script
Install the required libraries for this script with pip once:

```
pip install -r requirements.txt
```

To run the script, run the build script from command line:

```
python build.py
```