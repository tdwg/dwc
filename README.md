# Darwin Core

Darwin Core is a standard maintained by the [Darwin Core Maintenance Interest Group](https://www.tdwg.org/standards/dwc/#maintenance%20group). It includes a glossary of terms (in other contexts these might be called properties, elements, fields, columns, attributes, or concepts) intended to **facilitate the sharing of information about biological diversity** by providing identifiers, labels, and definitions. Darwin Core is primarily based on taxa, their occurrence in nature as documented by observations, specimens, samples, and related information.

## Getting started

[Darwin Core Quick Reference Guide](https://dwc.tdwg.org/terms/)

Documents:

- [List of terms document](https://dwc.tdwg.org/list/): Comprehensive metadata for current and obsolete terms in human readable form
- [Complete term history table](vocabulary/term_versions.csv): A CSV file with the full version history of Darwin Core terms
- [Distribution documents](dist/): Simple CSV files to start using Darwin Core
- [Website documents](docs/): Markdown files that form the source for the [Darwin Core website](https://dwc.tdwg.org/)

Community:

- [How to contribute](.github/CONTRIBUTING.md): a guide on how to contribute to Darwin Core
- [Darwin Core Q&A](https://github.com/tdwg/dwc-qa): an open forum on the use of Darwin Core

## Repo structure

The repository structure is described below. Files/directories indicated with `GENERATED` should not be edited manually.

```
├── .github
│   ├── ISSUE_TEMPLATE        : Directory of issue templates generated by GitHub
│   └── CONTRIBUTING.md       : Guide on how to contribute, create issues, etc.
│
├── build
│   ├── build_other_doc_header.py : Script to build non-list of terms documents from their editable templates
│   ├── build-derivatives.py      : Build script to generate distribution files from the normative document
│   ├── build-termlist.py         : Script to build Markdown pages that provide term metadata for complex vocabularies
│   ├── doe-template              : Templates for the degreeOfEstablishment controlled vocabulary document
│   ├── dwc_terms_guides_rdf      : Directory containing editable template for generating RDF guide
│   ├── dwc_terms_guides_text     : Directory containing editable template for generating text guide
│   ├── dwc_terms_guides_xml      : Directory containing editable template for generating XML guide
│   ├── dwc_terms_namespace       : Directory containing editable template for generating namespace policy
│   ├── dwc_terms_simple          : Directory containing editable template for generating Simple DwC guide
│   ├── em-template               : Templates for the establishmentMeans controlled vocabulary document
│   ├── ext                       : Directory for GENERATED XML extension definitions
│   ├── generate_term_versions.py : Script to build the terms_versions.csv file
│   ├── list-template             : Templates for the generated term list document
│   ├── pw-template               : Templates for the pathway controlled vocabulary document
│   ├── qrg-list.csv              : List of the term IRIs in the order that they are to appear in the Quick Reference Guide
│   ├── README.md                 : Workflow for generating a new version of the vocabulary
│   ├── requirements.txt          : List of libraries required by the build scripts
│   ├── termlist-dictionary.en.json : Values available for translation for term list documents.
│   ├── terms.tmpl                : A Jinja2 template to format the Quick Reference Guide
│   ├── update_previous_doc.py    : Script to move current doc to a version and update version links in it
│   ├── workflow_diagram.png      : Figure used in README.md to show how to create a new version of the standard
│   └── xml                       : Directory of build script and configs for XML extension definitions
│
├── dist                          : GENERATED Distribution files generated by build-derivatives.py
│   ├── all_dwc_vertical.csv      : GENERATED CSV file with all Darwin Core terms as a column
│   ├── simple_dwc_horizontal.csv : GENERATED CSV file with Simple Darwin Core terms as a row
│   └── simple_dwc_vertical.csv   : GENERATED CSV file with Simple Darwin Core terms as a column
│
├── docs (GENERATED except for index.md)
│   ├── CNAME             : Canonical Name record for dwc.tdwg.org
│   ├── _config.yml       : Jekyll site configuration
│   ├── _data             : Website navigation and footer
│   ├── doe               : Degree of Establishment Controlled Vocabulary List of Terms
│   ├── em                : Establishment Means Controlled Vocabulary List of Terms
│   ├── examples          : Longer examples linked from other documents
│   ├── favicon.ico       : Web page icon
│   ├── Gemfile           : Ruby Gem configuration
│   ├── Gemfile.lock      : Ruby Gem configuration
│   ├── index.md          : Website home page (manually maintained)
│   ├── list              : Darwin Core List of Terms documents
│   ├── namespace         : Darwin Core namespace policy
│   ├── pw                : Pathway Controlled Vocabulary List of Terms
│   ├── rdf               : Darwin Core RDF Guide
│   ├── _sass             : Stylesheets
│   ├── simple            : Simple Darwin Core Guide
│   ├── terms             : GENERATED Quick Reference Guide
│   ├── text              : Darwin Core Text Guide (Darwin Core Archive specification)
│   └── xml               : Darwin Core XML Guide
│
├── vocabulary
│   └── term_versions.csv : GENERATED Darwin Core term versions, contains the complete history of the terms
│
├── .gitignore            : Files and directories to be ignored by git
├── LICENSE               : Repository license
└── README.md             : Description of this repository
```

## Contributors

[List of contributors](https://github.com/tdwg/dwc/contributors)

## License

[Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/)

## Recommended citation

For Darwin Core in general, consider the peer-reviewed article on Darwin Core:

> Wieczorek J, Bloom D, Guralnick R, Blum S, Döring M, et al. (2012) Darwin Core: An Evolving Community-Developed Biodiversity Data Standard. PLoS ONE 7(1): e29715. https://doi.org/10.1371/journal.pone.0029715

For this repository:

> Darwin Core Maintenance Interest Group, Biodiversity Information Standards (TDWG) (2014). Darwin Core. Zenodo. https://doi.org/10.5281/zenodo.592792

The citation above represents all versions of the repository. Specific [versions/releases](https://github.com/tdwg/dwc/releases) from 2011 onwards are also deposited on Zenodo.
