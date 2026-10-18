# {document_title}

Title
: {document_title}

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
: {abstract}

Přispěvatelé
: {contributors}

Tvůrce
: {creator}

Bibliografická citace
: {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1 Úvod (informativní)

This document provides a comprehensive list of terms, from multiple namespaces, that are or have been recommended for use in Darwin Core as of this vocabulary version. The status of some terms, as noted in their metadata, is deprecated or superseded. Such terms should no longer be used. Terms from namespaces that contain only deprecated terms are not included in this document, but metadata about those terms can still be retrieved by dereferencing their IRIs.

Zjednodušený seznam, který obsahuje pouze aktuálně doporučené termíny, naleznete v [Stručná referenční příručka Darwin Core](../terms/).

### 1.1 Status obsahu tohoto dokumentu

Oddíly 1 a 3 nejsou normativní.

Oddíl 2 je normativní.

V oddíle 4 jsou hodnoty `Term IRI` a `Definice` normativní. Hodnoty `Název termínu` nejsou normativní, ačkoli lze očekávat, že prefix zkratky jmenného prostoru je prefix běžně používaný pro jmenný prostor termínu.  `Štítek` a hodnoty všech ostatních vlastností (například `Příklady` a `Poznámky`) nejsou normativní.

### 1.2 Klíčová slova RFC 2119

Klíčová slova "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY" a "OPTIONAL" v tomto dokumentu je třeba interpretovat tak, jak je popsáno v [BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) a [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174), pokud a pouze pokud jsou uvedena velkými písmeny, jak je uvedeno zde.

### 1.3 Zkratky jmenného prostoru

V tomto dokumentu se používají následující zkratky jmenných prostorů:

| zkratka      | IRI                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| `ac:`        | <http://rs.tdwg.org/ac/terms/>     |
| `chrono:`    | <http://rs.tdwg.org/chrono/terms/> |
| `chronoiri:` | <http://rs.tdwg.org/chrono/iri/>   |
| `dc:`        | <http://purl.org/dc/elements/1.1/> |
| `dcterms:`   | <http://purl.org/dc/terms/>                        |
| `dwc:`       | <http://rs.tdwg.org/dwc/terms/>    |
| `dwciri:`    | <http://rs.tdwg.org/dwc/iri/>      |
| `eco:`       | <http://rs.tdwg.org/eco/terms/>    |
| `ecoiri:`    | <http://rs.tdwg.org/eco/iri/>      |

## 2 Použití termínů

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), properties in the `chronoiri:`, `dwciri:` and `ecoiri:` namespaces MUST be used with IRI values. Values for properties in the `chrono:`, `dwc:`, `eco:` and `dc:` namespaces are generally expected to have string literal values. Values for properties in the `ac:` and `dcterms:` namespaces will depend on the details of the individual terms. Podrobnosti naleznete v [oddílu 3 Darwin Core RDF Guide](../rdf/#3-term-reference-normative).

## 3 Indexy termínů
