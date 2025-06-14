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
│   ├── qrg-template/terms.en.jinja : A Jinja2 template to format the Quick Reference Guide
│   ├── README.md                 : Workflow for generating a new version of the vocabulary
│   ├── requirements.txt          : List of libraries required by the build scripts
│   ├── termlist-dictionary.en.json : Values available for translation for term list documents.
│   ├── update_previous_doc.py    : Script to move current doc to a version and update version links in it
│   ├── workflow_diagram.png      : Figure used in README.md to show how to create a new version of the standard
│   └── xml                       : Directory of build script and configs for XML extension definitions
│
├── dist                          : GENERATED Distribution files generated by build-derivatives.py
│   ├── all_dwc_vertical.csv      : GENERATED CSV file with all Darwin Core terms as a column
│   ├── simple_dwc_horizontal.csv : GENERATED CSV file with Simple Darwin Core terms as a row
│   └── simple_dwc_vertical.csv   : GENERATED CSV file with Simple Darwin Core terms as a column
│
├── docs ('+' means GENERATED, ':' means manually maintained)
│   ├── ar, cs, etc       + Translations of the English pages, managed by Crowdin
│   ├── CNAME             : Canonical Name record for dwc.tdwg.org
│   ├── _config.yml       : Jekyll site configuration
│   ├── _data             : Website navigation and footer
│   ├── doe               + Degree of Establishment Controlled Vocabulary List of Terms
│   ├── em                + Establishment Means Controlled Vocabulary List of Terms
│   ├── examples          : Longer examples linked from other documents
│   ├── favicon.ico       : Web page icon
│   ├── Gemfile           : Ruby Gem configuration
│   ├── Gemfile.lock      : Ruby Gem configuration
│   ├── index.md          : Website home page (manually maintained)
│   ├── list              + Darwin Core List of Terms documents
│   ├── namespace         : Darwin Core namespace policy
│   ├── pw                + Pathway Controlled Vocabulary List of Terms
│   ├── rdf               : Darwin Core RDF Guide
│   ├── _sass             : Stylesheets
│   ├── simple            : Simple Darwin Core Guide
│   ├── terms             + GENERATED Quick Reference Guide
│   ├── text              : Darwin Core Text Guide (Darwin Core Archive specification)
│   └── xml               : Darwin Core XML Guide
│
├── vocabulary
│   └── term_versions.csv : GENERATED Darwin Core term versions, contains the complete history of the terms
│
├── .gitignore            : Files and directories to be ignored by git
├── crowdin.yml           : Crowdin Git integration configuration
├── LICENSE               : Repository license
└── README.md             : Description of this repository
```

## Term and website translation

### For users

The Darwin Core website is available in multiple languages, see the "文A" menu.

Translations in machine-readable format are in the [rs.tdwg.org repository](https://github.com/tdwg/rs.tdwg.org), you will need three files:

* [terms/terms-translations.csv](https://github.com/tdwg/rs.tdwg.org/blob/master/terms/terms-translations.csv)
* [dc-for-dwc/dc-for-dwc-translations.csv](https://github.com/tdwg/rs.tdwg.org/blob/master/dc-for-dwc/dc-for-dwc-translations.csv)
* [dcterms-for-dwc/dcterms-for-dwc-translations.csv](https://github.com/tdwg/rs.tdwg.org/blob/master/dcterms-for-dwc/dcterms-for-dwc-translations.csv)

### For translators

Translations are managed within Crowdin, which makes it easy to keep up with any changes to Darwin Core.  If you wish to contribute please go to the [Crowdin project](https://crowdin.com/project/darwin-core) and request to join, then email the Darwin Core Maintenance Group.

The Crowdin project has two sections:

* `[tdwg.rs.tdwg.org] translations` – this contains term definitions for several standards.  Darwin Core's definitions are in the files `terms`, `dc-for-dwc` and `dcterms-for-dwc`, and the vocabularies are in the files `establishmentMeans`, `degreeOfEstablishment` and `pathway`.
* `[tdwg.dwc] master` — this contains the website, such as the home page, navigation menu, and the text surrounding the lists of terms.

Translating `navigation.json` first is recommended, as you will then be able to browse the preview site at https://dwc-translation-preview.tdwg.org/.

To avoid conflicts, **edits to translations should only be made in Crowdin**.

### For developers of this website

Translations of term data (labels, definitions, examples, comments) are retrieved from the [rs.tdwg.org repository](https://github.com/tdwg/rs.tdwg.org), see [rs.tdwg.org/TRANSLATIONS.md](https://github.com/tdwg/rs.tdwg.org/blob/master/TRANSLATIONS.md) for details on that process.

Translations of the rest of the Darwin Core website (guides, prose sections, navigation menu etc) is managed here.  [crowdin.yml](crowdin.yml) configures files required for translation, and as content is translated Crowdin will create pull requests.  The only manual edits required are for building a new language (configured at the top of [build/build-termlist.py](build/build-termlist.py) and, once the translation is ready, adding it to the end of the [navigation menu](docs/_data/navigation.json).

GitHub Actions are configured to rebuild the website automatically as translations are created and updated.  Changes are automatically deployed to https://dwc-translation-preview.tdwg.org/, when the pull request is approved they will appear on https://dwc.tdwg.org/.  (Note if the navigation menu hasn't been translated it will be necessary to edit the URL to get to each page.)

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
