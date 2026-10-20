---
layout: home
---

# Darwin Core

{:.lead}
Darwin Core is a standard for biodiversity data sharing maintained by the [Darwin Core Maintenance Group](https://www.tdwg.org/standards/dwc/#maintenance-group). It provides a stable vocabulary, a conceptual model, implementation guides, schemas, and data-exchange specifications for sharing information about biological diversity.

Darwin Core terms provide identifiers, labels, definitions, and usage guidance for concepts used to describe taxa, organisms, occurrences, events, material entities, identifications, locations, geological context, measurements and assertions, agents, media, protocols, references, and related biodiversity information.

## Getting started

- [Quick Reference Guide](terms/): current terms organized for human use, with definitions, comments, and examples
- [Conceptual Model](cm/): classes of information and how they are related
- [Normative term list](list/): complete metadata for terms used in the Darwin Core vocabulary, including obsolete terms
- [Darwin Core Schemas](schemas/): machine-readable schemas that are part of or support Darwin Core
- Usage guides:
    - [Simple Darwin Core](simple/)
    - [Text (Darwin Core Archive)](text/)
    - [Data Package (Darwin Core Data Package)](dp/)
    - [Darwin Core Data Package Quick Reference Guide](dwc-dp/qrg/)
    - [XML](xml/)
    - [RDF](rdf/)
- [GitHub repository](https://github.com/tdwg/dwc): where Darwin Core is maintained
    - [List of open issues](https://github.com/tdwg/dwc/issues)
    - [List of open milestones](https://github.com/tdwg/dwc/milestones)
- [Distribution files](https://github.com/tdwg/dwc/tree/master/dist): CSV files of lists of term names

## Programmatic access to term metadata

Darwin Core term IRIs are the stable identifiers for terms and can be used to retrieve machine-readable metadata. For example, the term IRI

`http://rs.tdwg.org/dwc/terms/basisOfRecord`

identifies `dwc:basisOfRecord`. Clients can request a representation of the term through HTTP content negotiation. Explicit serialization URLs are also available by adding a file extension to the term IRI:

<!-- - JSON-LD: `http://rs.tdwg.org/dwc/terms/basisOfRecord.json` -->
- RDF/Turtle: `http://rs.tdwg.org/dwc/terms/basisOfRecord.ttl`
- RDF/XML: `http://rs.tdwg.org/dwc/terms/basisOfRecord.rdf`
- HTML: `http://rs.tdwg.org/dwc/terms/basisOfRecord.htm`

The same pattern applies to terms in the other Darwin Core namespaces. Metadata for complete term lists and their version histories are available from [rs.tdwg.org](https://rs.tdwg.org/).

For example, a client that has the column header `basisOfRecord` can construct the term IRI `http://rs.tdwg.org/dwc/terms/basisOfRecord` and retrieve its current definition and other metadata in a machine-readable serialization.
