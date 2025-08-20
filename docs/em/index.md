# Establishment Means Controlled Vocabulary List of Terms

Title
: Establishment Means Controlled Vocabulary List of Terms

Namespace URI
: <http://rs.tdwg.org/dwcem/values/>

Preferred namespace abbreviation
: dwcem:

Date version issued
: 2025-07-10

Date created
: 2020-10-13

Part of TDWG Standard
: <http://www.tdwg.org/standards/450>

This document version
: <http://rs.tdwg.org/dwc/doc/em/2025-07-10>

Latest version of document
: <http://rs.tdwg.org/dwc/doc/em/>

Previous version
: <http://rs.tdwg.org/dwc/doc/em/2025-06-12>

Abstract
: The Darwin Core term `establishmentMeans` provides information about whether an organism or organisms have been introduced to a given place and time through the direct or indirect activity of modern humans. The Establishment Means Controlled Vocabulary provides terms that should be used as values for `dwc:establishmentMeans` and `dwciri:establishmentMeans`.

Contributors
: [Quentin Groom](https://orcid.org/0000-0002-0596-5376) ([Botanic Garden Meise](http://www.wikidata.org/entity/Q3052500)), [Peter Desmet](https://orcid.org/0000-0002-8442-8025) ([Instituut voor Natuur- en Bosonderzoek (INBO)](http://www.wikidata.org/entity/Q7315097)), [Lien Reyserhove](https://orcid.org/0000-0001-7484-9267) ([Instituut voor Natuur- en Bosonderzoek (INBO)](http://www.wikidata.org/entity/Q7315097)), [Tim Adriaens](https://orcid.org/0000-0001-7268-4200) ([Instituut voor Natuur- en Bosonderzoek (INBO)](http://www.wikidata.org/entity/Q7315097)), [Damiano Oldoni](https://orcid.org/0000-0003-3445-7562) ([Instituut voor Natuur- en Bosonderzoek (INBO)](http://www.wikidata.org/entity/Q7315097)), [Sonia Vanderhoeven](https://orcid.org/0000-0002-6298-5373) ([Belgian Biodiversity Platform](http://www.wikidata.org/entity/Q100600896)), [Steven J Baskauf](https://orcid.org/0000-0003-4365-3135) ([Vanderbilt University Libraries](http://www.wikidata.org/entity/Q16849893)), [Arthur Chapman](https://orcid.org/0000-0003-1700-6962) ([Australian Biodiversity Information Services](http://www.wikidata.org/entity/Q100600913)), [Melodie McGeoch](https://orcid.org/0000-0003-3388-2241) ([McGeoch Research Group](http://www.wikidata.org/entity/Q100600923)), [Ramona Walls](https://orcid.org/0000-0001-8815-0078) ([University of Arizona](http://www.wikidata.org/entity/Q503419)), [John Wieczorek](https://orcid.org/0000-0003-1144-0290) ([VertNet](http://www.wikidata.org/entity/Q98382028)), [John R.U. Wilson](https://orcid.org/0000-0003-0174-3239) ([South African National Biodiversity Institute](http://www.wikidata.org/entity/Q30296386)), [Paula F Zermoglio](https://orcid.org/0000-0002-6056-5084) ([VertNet](http://www.wikidata.org/entity/Q98382028)), [Annie Simpson](https://orcid.org/0000-0001-8338-5134) ([U.S. Geological Survey](http://www.wikidata.org/entity/Q193755))

Creator
: TDWG Darwin Core Maintenance Group

Bibliographic citation
: TDWG Darwin Core Maintenance Group. 2025. Establishment Means Controlled Vocabulary List of Terms. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/doc/em/2025-07-10>


## 1 Introduction

This document includes terms intended to be used as a controlled value for Darwin Core terms with local name `establishmentMeans`. For details and rationale, see Groom et al. 2019. Improving Darwin Core for research and management of alien species. <https://doi.org/10.3897/biss.3.38084>

### 1.1 Status of the content of this document

In Section 4, the values of the `Term IRI`, `Definition`, and `Controlled value` are normative. The value of `Usage` (if it exists for a given term) is normative.  The values of `Term Name` are non-normative, although one can expect that the namespace abbreviation prefix is one commonly used for the term namespace.  `Label` and the values of all other properties (such as `Notes`) are non-normative.

### 1.2 RFC 2119 key words
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

## 2 Use of Terms

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](https://dwc.tdwg.org/rdf/#143-use-of-darwin-core-terms-in-rdf-normative), term IRIs MUST be used as values of `dwciri:establishmentMeans`. Controlled value strings MUST be used as values of `dwc:establishmentMeans`.

## 3 Term index



[establishmentMeans controlled concept scheme](#dwcem_e) |
[introduced (alien, exotic, non-native, nonindigenous)](#dwcem_e003) |
[introduced: assisted colonisation](#dwcem_e004) |
[native (indigenous)](#dwcem_e001) |
[native: endemic](#dwcem_e007) |
[native: reintroduced](#dwcem_e002) |
[uncertain (unknown, cryptogenic)](#dwcem_e006) |
[vagrant (casual)](#dwcem_e005)

## 4 Vocabulary
<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwcem_e"></a>Term Name dwcem:e</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e">http://rs.tdwg.org/dwcem/values/e</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2020-10-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e-2020-10-13">http://rs.tdwg.org/dwcem/values/version/e-2020-10-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>establishmentMeans controlled concept scheme</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A SKOS Concept Scheme to be used as a controlled vocabulary for the Darwin Core terms dwc:establishmentMeans and dwciri:establishmentMeans</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://www.w3.org/2004/02/skos/core#ConceptScheme</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_24">http://rs.tdwg.org/decisions/decision-2020-10-13_24</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwcem_e001"></a>Term Name dwcem:e001</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e001">http://rs.tdwg.org/dwcem/values/e001</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-09-01</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e001-2021-09-01">http://rs.tdwg.org/dwcem/values/version/e001-2021-09-01</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>native (indigenous)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A taxon occurring within its natural range.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>What is considered native to an area varies with the biogeographic history of an area and the local interpretation of what is a "natural range".</td>
		</tr>
		<tr>
			<td>Controlled value</td>
			<td>native</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Concept</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_24">http://rs.tdwg.org/decisions/decision-2020-10-13_24</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwcem_e002"></a>Term Name dwcem:e002</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e002">http://rs.tdwg.org/dwcem/values/e002</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2025-06-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e002-2025-06-12">http://rs.tdwg.org/dwcem/values/version/e002-2025-06-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>native: reintroduced</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A taxon re-established by direct introduction by humans into an area that was once part of its natural range, but from where it had become extinct.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Where a taxon has become extirpated from an area where it had naturally occurred it may be returned to that area deliberately with the intention of re-establishing it.</td>
		</tr>
		<tr>
			<td>Controlled value</td>
			<td>nativeReintroduced</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Concept</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_24">http://rs.tdwg.org/decisions/decision-2020-10-13_24</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2025-06-12_47">http://rs.tdwg.org/decisions/decision-2025-06-12_47</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwcem_e003"></a>Term Name dwcem:e003</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e003">http://rs.tdwg.org/dwcem/values/e003</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-09-01</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e003-2021-09-01">http://rs.tdwg.org/dwcem/values/version/e003-2021-09-01</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>introduced (alien, exotic, non-native, nonindigenous)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Establishment of a taxon by human agency into an area that is not part of its natural range.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Organisms can be introduced to novel areas and habitats by human activity, either on purpose or by accident. Humans can also inadvertently create corridors that break down natural barriers to dispersal and allow organisms to spread beyond their natural range.</td>
		</tr>
		<tr>
			<td>Controlled value</td>
			<td>introduced</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Concept</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_24">http://rs.tdwg.org/decisions/decision-2020-10-13_24</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwcem_e004"></a>Term Name dwcem:e004</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e004">http://rs.tdwg.org/dwcem/values/e004</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-09-01</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e004-2021-09-01">http://rs.tdwg.org/dwcem/values/version/e004-2021-09-01</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>introduced: assisted colonisation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Establishment of a taxon specifically with the intention of creating a self-sustaining wild population in an area that is not part of the taxon's natural range.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>In the event of environmental change and habitat destruction a conservation option is to introduce a taxon into an area it did not naturally occur.</td>
		</tr>
		<tr>
			<td>Controlled value</td>
			<td>introducedAssistedColonisation</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Concept</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_24">http://rs.tdwg.org/decisions/decision-2020-10-13_24</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwcem_e005"></a>Term Name dwcem:e005</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e005">http://rs.tdwg.org/dwcem/values/e005</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2020-10-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e005-2020-10-13">http://rs.tdwg.org/dwcem/values/version/e005-2020-10-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>vagrant (casual)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The temporary occurrence of a taxon far outside its natural or migratory range.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Natural events and human activity can disperse organisms unpredictably into places where they may stay or survive for a period.</td>
		</tr>
		<tr>
			<td>Controlled value</td>
			<td>vagrant</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Concept</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_24">http://rs.tdwg.org/decisions/decision-2020-10-13_24</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwcem_e006"></a>Term Name dwcem:e006</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e006">http://rs.tdwg.org/dwcem/values/e006</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-09-01</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e006-2021-09-01">http://rs.tdwg.org/dwcem/values/version/e006-2021-09-01</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>uncertain (unknown, cryptogenic)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The origin of the occurrence of the taxon in an area is obscure.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>When there is a lack of fossil or historical evidence for the occurrence of a taxon in an area it can be impossible to know if the taxon is new to the area or native.</td>
		</tr>
		<tr>
			<td>Controlled value</td>
			<td>uncertain</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Concept</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_24">http://rs.tdwg.org/decisions/decision-2020-10-13_24</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwcem_e007"></a>Term Name dwcem:e007</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e007">http://rs.tdwg.org/dwcem/values/e007</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2025-06-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e007-2025-06-12">http://rs.tdwg.org/dwcem/values/version/e007-2025-06-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>native: endemic</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A taxon with a natural distribution restricted to a single geographical area.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The term endemic is a subcategory of native and relates to geography, such as "areas of endemism", bioregions, and sometimes administrative boundaries. While a native taxon can naturally occur in several geographical areas an endemic taxon only occurs in one. In Darwin Core terms this would mean, "A dwc:Organism referred to is recognized as a member of a dwc:Taxon endemic to the dcterms:Location at the time of the dwc:Occurrence."</td>
		</tr>
		<tr>
			<td>Controlled value</td>
			<td>nativeEndemic</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Concept</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2025-06-12_47">http://rs.tdwg.org/decisions/decision-2025-06-12_47</a></td>
		</tr>
	</tbody>
</table>


