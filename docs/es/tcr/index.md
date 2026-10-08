# Taxon Completeness Reported Controlled Vocabulary List of Terms

Title
: Taxon Completeness Reported Controlled Vocabulary List of Terms

Namespace URI
: <http://rs.tdwg.org/ecotcr/values/>

Preferred namespace abbreviation
: ecotcr:

Date version issued
: 2026-09-17

Date created
: 2024-02-28

Part of TDWG Standard
: <http://www.tdwg.org/standards/450>

This document version
: <http://rs.tdwg.org/dwc/doc/tcr/2026-09-17>

Latest version of document
: <http://rs.tdwg.org/dwc/doc/tcr/>

Previous version
: <http://rs.tdwg.org/dwc/doc/tcr/2024-02-28>

Abstract
: The Darwin Core term `eco:taxonCompletenessReported` provides information about whether taxonomic completeness was assessed for an `eco:Survey`. The Taxon Completeness Reported Controlled Vocabulary provides terms that should be used as values for `eco:taxonCompletenessReported` and `ecoiri:taxonCompletenessReported`.

Contributors
: [Yanina V. Sica](https://orcid.org/0000-0002-1720-0127) ([Yale University](http://www.wikidata.org/entity/Q49112)), [Wesley M. Hochachka](https://orcid.org/0000-0002-0595-7827) ([Cornell Lab of Ornithology](http://www.wikidata.org/entity/Q2997535)), [Steven J. Baskauf](https://orcid.org/0000-0003-4365-3135) ([Vanderbilt University Libraries](http://www.wikidata.org/entity/Q16849893))

Creator
: TDWG Humboldt Extension Task Group

Bibliographic citation
: TDWG Humboldt Extension Task Group. 2026. Taxon Completeness Reported Controlled Vocabulary List of Terms. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/doc/tcr/2026-09-17>


## 1 Introduction

This document includes terms intended to be used as controlled values for the Darwin Core properties `eco:taxonCompletenessReported` and `ecoiri:taxonCompletenessReported`.

### 1.1 Status of the content of this document

In Section 4, the values of the `Term IRI`, `Definition`, and `Controlled value` are normative. The value of `Usage` (if it exists for a given term) is normative. The values of `Term Name` are non-normative, although one can expect that the namespace abbreviation prefix is one commonly used for the term namespace. `Label` and the values of all other properties (such as `Notes`) are non-normative.

### 1.2 RFC 2119 key words

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [BCP 14](https://www.rfc-editor.org/info/bcp14) [[RFC 2119]](https://datatracker.ietf.org/doc/html/rfc2119) and [[RFC 8174]](https://datatracker.ietf.org/doc/html/rfc8174) when, and only when, they appear in all capitals, as shown here.

## 2 Use of Terms

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), term IRIs MUST be used as values of `ecoiri:taxonCompletenessReported`. Controlled value strings MUST be used as values of `eco:taxonCompletenessReported`.

## 3 Term index



[not reported](#ecotcr_tcr00) |
[reported complete](#ecotcr_tcr01) |
[reported incomplete](#ecotcr_tcr02) |
[taxon completeness reported concept scheme](#ecotcr_tcr)

## 4 Vocabulario
<table>
	<thead>
		<tr>
			<th colspan="2"><a id="ecotcr_tcr"></a>Nombre de Término ecotcr:tcr</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Término IRI</td>
			<td><a href="http://rs.tdwg.org/ecotcr/values/tcr">http://rs.tdwg.org/ecotcr/values/tcr</a></td>
		</tr>
		<tr>
			<td>Modificado</td>
			<td>2026-09-17</td>
		</tr>
		<tr>
			<td>Versión de Término IRI</td>
			<td><a href="http://rs.tdwg.org/ecotcr/values/version/tcr-2026-09-17">http://rs.tdwg.org/ecotcr/values/version/tcr-2026-09-17</a></td>
		</tr>
		<tr>
			<td>Etiqueta</td>
			<td>taxon completeness reported concept scheme</td>
		</tr>
		<tr>
			<td>Definición</td>
			<td>A SKOS concept scheme for categorizing taxon completeness reporting.</td>
		</tr>
		<tr>
			<td>Tipo</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme</td>
		</tr>
		<tr>
			<td>Decisión del Comité Ejecutivo</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2024-02-28_42">http://rs.tdwg.org/decisions/decision-2024-02-28_42</a></td>
		</tr>
		<tr>
			<td>Decisión del Comité Ejecutivo</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2026-09-17_62">http://rs.tdwg.org/decisions/decision-2026-09-17_62</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="ecotcr_tcr00"></a>Nombre de Término ecotcr:tcr00</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Término IRI</td>
			<td><a href="http://rs.tdwg.org/ecotcr/values/tcr00">http://rs.tdwg.org/ecotcr/values/tcr00</a></td>
		</tr>
		<tr>
			<td>Modificado</td>
			<td>2026-09-17</td>
		</tr>
		<tr>
			<td>Versión de Término IRI</td>
			<td><a href="http://rs.tdwg.org/ecotcr/values/version/tcr00-2026-09-17">http://rs.tdwg.org/ecotcr/values/version/tcr00-2026-09-17</a></td>
		</tr>
		<tr>
			<td>Etiqueta</td>
			<td>not reported</td>
		</tr>
		<tr>
			<td>Definición</td>
			<td>Taxonomic completeness was not assessed or reported for the eco:Survey.</td>
		</tr>
		<tr>
			<td>Valor controlado</td>
			<td>notReported</td>
		</tr>
		<tr>
			<td>Tipo</td>
			<td>Concepto</td>
		</tr>
		<tr>
			<td>Decisión del Comité Ejecutivo</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2024-02-28_42">http://rs.tdwg.org/decisions/decision-2024-02-28_42</a></td>
		</tr>
		<tr>
			<td>Decisión del Comité Ejecutivo</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2026-09-17_62">http://rs.tdwg.org/decisions/decision-2026-09-17_62</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="ecotcr_tcr01"></a>Nombre de Término ecotcr:tcr01</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Término IRI</td>
			<td><a href="http://rs.tdwg.org/ecotcr/values/tcr01">http://rs.tdwg.org/ecotcr/values/tcr01</a></td>
		</tr>
		<tr>
			<td>Modificado</td>
			<td>2026-09-17</td>
		</tr>
		<tr>
			<td>Versión de Término IRI</td>
			<td><a href="http://rs.tdwg.org/ecotcr/values/version/tcr01-2026-09-17">http://rs.tdwg.org/ecotcr/values/version/tcr01-2026-09-17</a></td>
		</tr>
		<tr>
			<td>Etiqueta</td>
			<td>reported complete</td>
		</tr>
		<tr>
			<td>Definición</td>
			<td>Taxonomic completeness was assessed for the eco:Survey, and it was determined to be complete.</td>
		</tr>
		<tr>
			<td>Valor controlado</td>
			<td>reportedComplete</td>
		</tr>
		<tr>
			<td>Tipo</td>
			<td>Concepto</td>
		</tr>
		<tr>
			<td>Decisión del Comité Ejecutivo</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2024-02-28_42">http://rs.tdwg.org/decisions/decision-2024-02-28_42</a></td>
		</tr>
		<tr>
			<td>Decisión del Comité Ejecutivo</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2026-09-17_62">http://rs.tdwg.org/decisions/decision-2026-09-17_62</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="ecotcr_tcr02"></a>Nombre de Término ecotcr:tcr02</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Término IRI</td>
			<td><a href="http://rs.tdwg.org/ecotcr/values/tcr02">http://rs.tdwg.org/ecotcr/values/tcr02</a></td>
		</tr>
		<tr>
			<td>Modificado</td>
			<td>2026-09-17</td>
		</tr>
		<tr>
			<td>Versión de Término IRI</td>
			<td><a href="http://rs.tdwg.org/ecotcr/values/version/tcr02-2026-09-17">http://rs.tdwg.org/ecotcr/values/version/tcr02-2026-09-17</a></td>
		</tr>
		<tr>
			<td>Etiqueta</td>
			<td>reported incomplete</td>
		</tr>
		<tr>
			<td>Definición</td>
			<td>Taxonomic completeness was assessed for the eco:Survey, and it was determined to be incomplete.</td>
		</tr>
		<tr>
			<td>Valor controlado</td>
			<td>reportedIncomplete</td>
		</tr>
		<tr>
			<td>Tipo</td>
			<td>Concepto</td>
		</tr>
		<tr>
			<td>Decisión del Comité Ejecutivo</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2024-02-28_42">http://rs.tdwg.org/decisions/decision-2024-02-28_42</a></td>
		</tr>
		<tr>
			<td>Decisión del Comité Ejecutivo</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2026-09-17_62">http://rs.tdwg.org/decisions/decision-2026-09-17_62</a></td>
		</tr>
	</tbody>
</table>
