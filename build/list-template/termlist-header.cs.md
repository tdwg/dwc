# Seznam termínů Darwin Core

Název
: Seznam termínů Darwin Core

Datum vydání verze
: {ratification_date}

Datum vytvoření
: {created_date}

Část standardu TDWG
: <{standard_iri}>

Tato verze
: <{current_iri}{ratification_date}>

Aktuální verze
: <{current_iri}>

{previous_version_slot}

Abstrakt
: Darwin Core je slovníkový standard pro předávání informací o biologické rozmanitosti. V tomto dokumentu jsou uvedeny všechny termíny ve jmenných prostorech, které se v současné době používají ve slovníku.

Contributors
: {contributors}

Creator
: {creator}

Bibliographic citation
: {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1 Introduction (Informative)

This document contains terms that are part of the most recent version of the Darwin Core vocabulary (<http://rs.tdwg.org/version/dwc/{ratification_date}>).

This document includes terms in four namespaces that contain recommended terms: `dwc:`, `dwciri:`, `dc:`, and `dcterms:`. However, some terms in these namespaces are deprecated or superseded and should no longer be used. Deprecation or supersession is noted in the term metadata. Namespaces that contain only deprecated terms are not included in this document, but metadata about those terms can be retrieved by dereferencing their IRIs.

For a simplified list that contains only the currently recommended terms, see the [Darwin Core Quick Reference Guide](../terms/).

### 1.1 Status obsahu tohoto dokumentu

Sections 1 and 3 are non-normative.

Section 2 is normative.

In Section 4, the values of the `Term IRI` and `Definition` are normative. Hodnoty `Název termínu` nejsou normativní, ačkoli lze očekávat, že prefix zkratky jmenného prostoru je prefix běžně používaný pro jmenný prostor termínu.  `Label` and the values of all other properties (such as `Examples` and `Notes`) are non-normative.

### 1.2 Klíčová slova RFC 2119

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) and [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174) when, and only when, they appear in all capitals, as shown here.

### 1.3 Namespace abbreviations

The following namespace abbreviations are used in this document:

| abbreviation             | IRI                                                                              |
| ------------------------ | -------------------------------------------------------------------------------- |
| dwc:     | http://rs.tdwg.org/dwc/cs/terms/ |
| dwciri:  | http://rs.tdwg.org/dwc/cs/iri/   |
| dc:      | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/                        |

## 2 Použití termínů

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), terms in the `dwciri:` namespace MUST be used with IRI values. Terms in the `dwc:` and `dc:` namespaces are generally expected to have string literal values. Values for terms in the `dcterms:` namespace will depend on the details of the term. See [Section 3 of the Darwin Core RDF Guide](../rdf/#3-term-reference-normative) for details.

## 3 Term indices
