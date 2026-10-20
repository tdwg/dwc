# Darwin Core

Darwin Core is a standard maintained by the [Darwin Core Maintenance Group](https://www.tdwg.org/standards/dwc/#maintenance%20group) of Biodiversity Information Standards (TDWG). It provides a stable vocabulary, a conceptual model, implementation guides, schemas, and data-exchange specifications for sharing information about biological diversity.

Darwin Core terms provide identifiers, labels, definitions, and usage guidance for concepts used to describe taxa, organisms, occurrences, events, material entities, identifications, locations, geological context, measurements and assertions, agents, media, protocols, references, and related biodiversity information.

## Getting started

For most users, these are the principal entry points:

- [Darwin Core Quick Reference Guide](https://dwc.tdwg.org/terms/): current terms organized for human use, with definitions, comments, and examples
- [Darwin Core List of Terms](https://dwc.tdwg.org/list/): complete metadata for terms used in the Darwin Core vocabulary, including obsolete terms
- [Darwin Core Conceptual Model](https://dwc.tdwg.org/cm/): the semantic relationships among the principal Darwin Core classes
- [Darwin Core Data Package Guide](https://dwc.tdwg.org/dp/): guidance for representing normalized Darwin Core data as a Frictionless Data Package
- [Darwin Core Data Package Quick Reference Guide](https://dwc.tdwg.org/dwc-dp/qrg/): tables, fields, constraints, and relationships in the Darwin Core Data Package
- [Darwin Core Text Guide](https://dwc.tdwg.org/text/): guidance for Darwin Core text files and Darwin Core Archives
- [Darwin Core RDF Guide](https://dwc.tdwg.org/rdf/): guidance for using Darwin Core terms in RDF
- [Darwin Core XML Guide](https://dwc.tdwg.org/xml/): guidance for using Darwin Core in XML
- [Darwin Core Schemas](https://dwc.tdwg.org/schemas/): machine-readable schemas that are part of or support Darwin Core

Additional guidance, controlled vocabularies, and examples are available through the navigation on the [Darwin Core website](https://dwc.tdwg.org/).

### Programmatic access to term metadata

Darwin Core term IRIs are the stable identifiers for terms and can be used to retrieve machine-readable metadata. For example, the term IRI

`http://rs.tdwg.org/dwc/terms/basisOfRecord`

identifies `dwc:basisOfRecord`. Clients can request a representation of the term through HTTP content negotiation. Explicit serialization URLs are also available by adding a file extension to the term IRI:

- JSON-LD: `http://rs.tdwg.org/dwc/terms/basisOfRecord.json`
- RDF/Turtle: `http://rs.tdwg.org/dwc/terms/basisOfRecord.ttl`
- RDF/XML: `http://rs.tdwg.org/dwc/terms/basisOfRecord.rdf`
- HTML: `http://rs.tdwg.org/dwc/terms/basisOfRecord.htm`

The same pattern applies to terms in the other Darwin Core namespaces. Metadata for complete term lists and their version histories are available from [rs.tdwg.org](https://rs.tdwg.org/).

For example, a client that has the column header `basisOfRecord` can construct the term IRI `http://rs.tdwg.org/dwc/terms/basisOfRecord` and retrieve its current definition and other metadata in a machine-readable serialization.

The integrated build process is documented in [`build/README.md`](build/README.md). The build uses authoritative vocabulary and standards metadata from the [`tdwg/rs.tdwg.org`](https://github.com/tdwg/rs.tdwg.org) repository and generates the current Darwin Core website and machine-readable artifacts transactionally.

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

Translations of the rest of the Darwin Core website (guides, prose sections, navigation menu etc) is managed here.  [crowdin.yml](crowdin.yml) configures files required for translation, and as content is translated Crowdin will create pull requests.  The only manual edits required are for building a new language (configured at the top of [build/build-webpages.py](build/build-webpages.py) and, once the translation is ready, adding it to the end of the [navigation menu](docs/_data/navigation.json).

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
