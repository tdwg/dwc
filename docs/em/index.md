# Establishment Means Controlled Vocabulary List of Terms

Title
: Establishment Means Controlled Vocabulary List of Terms

Namespace URI
: <http://rs.tdwg.org/dwcem/values/>

Preferred namespace abbreviation
: dwcem:

Date version issued
: 2020-10-13

Date created
: 2020-10-13

Part of TDWG Standard
: <http://www.tdwg.org/standards/450>

This document version
: <http://rs.tdwg.org/dwc/doc/em/2020-10-13>

Latest version of document
: <http://rs.tdwg.org/dwc/doc/em/>

Abstract
: The Darwin Core term `establishmentMeans` provides information about whether an organism or organisms have been introduced to a given place and time through the direct or indirect activity of modern humans. The Establishment Means Controlled Vocabulary provides terms that should be used as values for `dwc:establishmentMeans` and `dwciri:establishmentMeans`. 

Contributors
: Quentin Groom, Peter Desmet, Lien Reyserhove, Tim Adriaens, Damiano Oldoni, Sonia Vanderhoeven, Steven J Baskauf, Arthur Chapman, Melodie McGeoch, Ramona Walls, John Wieczorek, John R.U. Wilson, Paula F F Zermoglio, Annie Simpson

Creator
: TDWG Darwin Core Maintenance Group

Bibliographic citation
: Darwin Core Maintenance Group. 2020. Establishment Means Controlled Vocabulary List of Terms. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/doc/em/2020-10-13>


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
[native: reintroduced](#dwcem_e002) |
[uncertain (unknown, cryptogenic)](#dwcem_e006) |
[vagrant (casual)](#dwcem_e005)

## 4 Vocabulary
<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwcem_e"></a>Term Name  dwcem:e</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e">http://rs.tdwg.org/dwcem/values/e</a></td>
		</tr>
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
			<th colspan="2"><a id="dwcem_e001"></a>Term Name  dwcem:e001</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e001">http://rs.tdwg.org/dwcem/values/e001</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-10-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e001-2020-10-13">http://rs.tdwg.org/dwcem/values/version/e001-2020-10-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>native (indigenous)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A taxon occurring within its natural range</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>What is considered native to an area varies with the biogeographic history of an area and the local interpretation of what is a "natural range".  </td>
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
			<th colspan="2"><a id="dwcem_e002"></a>Term Name  dwcem:e002</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e002">http://rs.tdwg.org/dwcem/values/e002</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-10-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e002-2020-10-13">http://rs.tdwg.org/dwcem/values/version/e002-2020-10-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>native: reintroduced</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A taxon re-established by direct introduction by humans into an area which was once part of its natural range, but from where it had become extinct.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Where a taxon has become extirpated from an area where it had naturally occurred it may be returned to that area deliberately with the intension of re-establishing it. </td>
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
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwcem_e003"></a>Term Name  dwcem:e003</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e003">http://rs.tdwg.org/dwcem/values/e003</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-10-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e003-2020-10-13">http://rs.tdwg.org/dwcem/values/version/e003-2020-10-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>introduced (alien, exotic, non-native, nonindigenous)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Establishment of a taxon by human agency into an area that is not part of its natural range</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Organisms can be introduced to novel areas and habitats by human activity, either on purpose or by accident. Humans can also inadvertently create corridors that breakdown natural barriers to dispersal and allow organisms to spread beyond their natural range.</td>
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
			<th colspan="2"><a id="dwcem_e004"></a>Term Name  dwcem:e004</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e004">http://rs.tdwg.org/dwcem/values/e004</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-10-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e004-2020-10-13">http://rs.tdwg.org/dwcem/values/version/e004-2020-10-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>introduced: assisted colonisation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Establishment of a taxon specifically with the intention of creating a self-sustaining wild population in an area that is not part of the taxon's natural range</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>In the event of environmental change and habitat destruction a conservation option is to introduce a taxon into an area it did not naturally occur</td>
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
			<th colspan="2"><a id="dwcem_e005"></a>Term Name  dwcem:e005</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e005">http://rs.tdwg.org/dwcem/values/e005</a></td>
		</tr>
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
			<th colspan="2"><a id="dwcem_e006"></a>Term Name  dwcem:e006</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/e006">http://rs.tdwg.org/dwcem/values/e006</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-10-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwcem/values/version/e006-2020-10-13">http://rs.tdwg.org/dwcem/values/version/e006-2020-10-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>uncertain (unknown, cryptogenic)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The origin of the occurrence of the taxon in an area is obscure</td>
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


