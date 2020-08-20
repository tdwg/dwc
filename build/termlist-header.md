# List of Darwin Core terms

Title
: List of Darwin Core terms

Date version issued
: 2020-08-12

Date created
: 2020-08-12

Part of TDWG Standard
: <http://www.tdwg.org/standards/450>

This version
: <http://rs.tdwg.org/dwc/doc/list/2020-08-12>

Latest version
: <http://rs.tdwg.org/dwc/doc/list/>

Abstract
: Darwin Core is a vocabulary standard for transmitting information about biodiversity. This document lists all terms in namespaces currently used in the vocabulary.

Contributors
: John Wieczorek (VertNet), Peter Desmet (INBO), Steve Baskauf (Vanderbilt University Libraries), Tim Robertson (GBIF), Markus Döring (GBIF), Quentin Groom (Botanic Garden Meise), Stijn Van Hoey (INBO), David Bloom (VertNet), Paula Zermoglio (VertNet), Robert Guralnick (University of Florida), John Deck (Genomic Biodiversity Working Group), Gail Kampmeier (INHS), Dave Vieglais (KUNHM), Renato De Giovanni (CRIA), Campbell Webb (TDWG RDF/OWL Task Group), Paul J. Morris (Harvard University Herbaria/Museum of Comparative Zoölogy), Mark Schildhauer (NCEAS)

Creator
: TDWG Darwin Core Maintenance Group

Bibliographic citation
: Darwin Core Maintenance Group. 2020. List of Darwin Core terms. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/doc/list/2020-08-12>


## 1 Introduction (Informative)

This document contains terms that are part of the most recent version of the Darwin Core vocabulary (http://rs.tdwg.org/version/dwc/2020-08-12).

This document includes terms in four namespaces that contain recommended terms: `dwc:`, `dwciri:`, `dc:`, and `dcterms:`. However, some terms in these namespaces are deprecated and should no longer be used. Deprecation is noted in the term metadata. Namespaces that contain only deprecated terms are not included in this document, but metadata about those terms can be retrieved by dereferencing their IRIs.

For a simplified list that contains only the currently recommended terms, see the [Darwin Core Quick Reference Guide](../terms/).

### 1.1 Status of the content of this document

Sections 1 and 3 are non-normative.

Section 2 is normative.

In Section 4, the values of the `Term IRI` and `Definition` are normative. The values of `Term Name` are non-normative, although one can expect that the namespace abbreviation prefix is one commonly used for the term namespace.  `Label` and the values of all other properties (such as `Examples` and `Notes`) are non-normative.

### 1.2 RFC 2119 key words
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

### 1.3 Namespace abbreviations

The following namespace abbreviations are used in this document:

| abbreviation | IRI |
| --- | --- |
| dwc: | http://rs.tdwg.org/dwc/terms/ |
| dwciri: | http://rs.tdwg.org/dwc/iri/ |
| dc: | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/ |

## 2 Use of Terms

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), terms in the `dwciri:` namespace MUST be used with IRI values. Terms in the `dwc:` and `dc:` namespaces are generally expected to have string literal values. Values for terms in the `dcterms:` namespace will depend on the details of the term. See [Section 3 of the Darwin Core RDF Guide](../rdf/#3-term-reference-normative) for details.

## 3 Term indices
