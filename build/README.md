The build folder contains a python script to rebuild the terms index page and all resources.
It will use the current terms/dwc_normaltive.rdf and some yaml configurations inside this build folder for term definitions and order.

## Run the script
Install the required libraries for this script with PIP once:
$ easy_install pip
$ sudo pip install -r requirements.txt

To run the script just run it from inside the build folder:
$ ./update_terms.py


## Adding new terms
Simple changes for definitions should just be done in the RDF file.
In case a DwC term has been renamed, removed or added this also needs to be reflected in the following files:

### dc.yaml
This file contains the Dublin Core terms to be used in the record level group in the right order and their DwC definitions.

### term_order.yaml
This file contains a nested list of all DwC terms to be shown in the terms index.
The order and grouping of terms is defined here, but the definitions and other metadata is taken from the dwc_normative.rdf

### term_type.yaml
In order to generate the postgres sql table definition the script needs to know all data types different from the default _text_.
This file contains a list of those terms with the exact data type as used in postgres.



## TODO
 - add DOI explanations
