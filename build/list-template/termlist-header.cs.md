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

Přispěvatelé
: {contributors}

Tvůrce
: {creator}

Bibliografická citace
: {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1 Úvod (informativní)

Tento dokument obsahuje termíny, které jsou součástí nejnovější verze slovníku Darwin Core (<http://rs.tdwg.org/version/dwc/{ratification_date}>).

Tento dokument obsahuje termíny ve čtyřech jmenných prostorech, které obsahují doporučené termíny: `dwc:`, `dwciri:`, `dc:` a `dcterms:`. Některé termíny v těchto jmenných prostorech jsou však zastaralé nebo překonané a neměly by se již používat. Vyřazení nebo nahrazení je uvedeno v metadatech termínu. Jmenné prostory, které obsahují pouze zastaralé termíny, nejsou v tomto dokumentu zahrnuty, ale metadata o těchto termínech lze získat dereferencováním jejich IRI.

Zjednodušený seznam, který obsahuje pouze aktuálně doporučené termíny, naleznete v [Stručná referenční příručka Darwin Core](../terms/).

### 1.1 Status obsahu tohoto dokumentu

Oddíly 1 a 3 nejsou normativní.

Oddíl 2 je normativní.

V oddíle 4 jsou hodnoty `Term IRI` a `Definice` normativní. Hodnoty `Název termínu` nejsou normativní, ačkoli lze očekávat, že prefix zkratky jmenného prostoru je prefix běžně používaný pro jmenný prostor termínu.  `Štítek` a hodnoty všech ostatních vlastností (například `Příklady` a `Poznámky`) nejsou normativní.

### 1.2 Klíčová slova RFC 2119

Klíčová slova "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY" a "OPTIONAL" v tomto dokumentu je třeba interpretovat tak, jak je popsáno v [BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) a [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174), pokud a pouze pokud jsou uvedena velkými písmeny, jak je uvedeno zde.

### 1.3 Zkratky jmenného prostoru

V tomto dokumentu se používají následující zkratky jmenných prostorů:

| zkratka                  | IRI                                                                              |
| ------------------------ | -------------------------------------------------------------------------------- |
| dwc:     | http://rs.tdwg.org/dwc/cs/terms/ |
| dwciri:  | http://rs.tdwg.org/dwc/cs/iri/   |
| dc:      | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/                        |

## 2 Použití termínů

Vzhledem k požadavkům [oddílu 1.4.3 Průvodce Darwin Core RDF](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative) se termíny ve jmenném prostoru `dwciri:` MUSÍ používat s hodnotami IRI. Od termínů ve jmenných prostorech `dwc:` a `dc:` se obecně očekává, že budou mít řetězcové literální hodnoty. Hodnoty termínů ve jmenném prostoru `dcterms:` závisí na podrobnostech termínu. Podrobnosti naleznete v [oddílu 3 Darwin Core RDF Guide](../rdf/#3-term-reference-normative).

## 3 Indexy termínů
