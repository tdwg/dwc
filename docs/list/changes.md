# Changes made in the 2023-06-16 version of DwC

The changes made fall into several categories:

1. New terms added (requires change process and Executive approval)
2. Subtantive term changes (requires change process and Executive approval)
3. Non-substantive term changes (correcting errors, updating examples; does not require change process but is tracked for transparency)
4. Formatting changes. The examples were changed from a comma separated list to a vertical list.

The first three categories are tracked in the milestone [Public Review 2023-02-12](https://github.com/tdwg/dwc/milestone/16), where the rationale and discussion of changes are given. The details of the changes are shown below, except for those resulting from [Issue 379](https://github.com/tdwg/dwc/issues/379), which were too numerous to show below, but which can be seen in the draft of the new List of Terms document. The changes made in the fourth category were cosmetic and not shown below.

## 1. New terms added (change process and Executive approval required)

Note: The IRI analogs of new terms (in the dwciri: namespace) are not shown. Their definitions are identical to the dwc: analogs.

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimLabel"></a>Term Name  dwc:verbatimLabel</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimLabel">http://rs.tdwg.org/dwc/terms/verbatimLabel</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimLabel-2023-06-16">http://rs.tdwg.org/dwc/terms/version/verbatimLabel-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Label</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A serialized encoding intended to represent the literal, i.e., character by character, textual content of a label affixed on, near, or explicitly associated with a material entity, free from interpretation, translation, or transliteration.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The content of this term should include no embellishments, prefixes, headers or other additions made to the text. Abbreviations must not be expanded and supposed misspellings must not be corrected. Lines or breakpoints between blocks of text that could be verified by seeing the original labels or images of them may be used. Examples of material entities include preserved specimens, fossil specimens, and material samples. Best practice is to use UTF-8 for all characters. Best practice is to add comment “verbatimLabel derived from human transcription” in dwc:occurrenceRemarks.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>Examples can be found at <a href="https://dwc.tdwg.org/examples/verbatimLabel">https://dwc.tdwg.org/examples/verbatimLabel</a>.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>Marks/Mark/MarkText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_caste"></a>Term Name  dwc:caste</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/caste">http://rs.tdwg.org/dwc/terms/caste</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/caste-2023-06-16">http://rs.tdwg.org/dwc/terms/version/caste-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Caste</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Categorisation of individuals for eusocial species (including some mammals and arthropods).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary that aligns best with the dwc:Taxon.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>queen</code></li>
  <li class="list-group-item"><code>male alate</code></li>
  <li class="list-group-item"><code>intercaste</code></li>
  <li class="list-group-item"><code>minor worker</code></li>
  <li class="list-group-item"><code>soldier</code></li>
  <li class="list-group-item"><code>ergatoid</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_vitality"></a>Term Name  dwciri:vitality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/vitality">http://rs.tdwg.org/dwc/iri/vitality</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/vitality-2023-06-16">http://rs.tdwg.org/dwc/iri/version/vitality-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Vitality (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An indication of whether a dwc:Organism was alive or dead at the time of collection or observation.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Intended to be used with records having a dwc:basisOfRecord of <code>PreservedSpecimen</code>, <code>MaterialSample</code>, or <code>HumanObservation</code>. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_parentMeasurementID"></a>Term Name  dwc:parentMeasurementID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/parentMeasurementID">http://rs.tdwg.org/dwc/terms/parentMeasurementID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/parentMeasurementID-2023-06-16">http://rs.tdwg.org/dwc/terms/version/parentMeasurementID-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Parent Measurement ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for a broader dwc:MeasurementOrFact that groups this and potentially other dwc:MeasurementOrFacts.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>May be a globally unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>9c752d22-b09a-11e8-96f8-529269fb1459</code></li>
  <li class="list-group-item"><code>E1_E1_O1_M1</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_superfamily"></a>Term Name  dwc:superfamily</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/superfamily">http://rs.tdwg.org/dwc/terms/superfamily</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/superfamily-2023-06-16">http://rs.tdwg.org/dwc/terms/version/superfamily-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Superfamily</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the family in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A taxonomic category subordinate to an order and superior to a family. According to ICZN article 29.2, the suffix <code>-oidea</code> is used for a superfamily name.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Achatinoidea</code></li>
  <li class="list-group-item"><code>Cerithioidea</code></li>
  <li class="list-group-item"><code>Helicoidea</code></li>
  <li class="list-group-item"><code>Hypsibioidea</code></li>
  <li class="list-group-item"><code>Valvatoidea</code></li>
  <li class="list-group-item"><code>Zonitoidea</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>ScientificNameIdentified/HigherTaxon/HigherTaxonRank (enumeration value: superfamilia)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_subtribe"></a>Term Name  dwc:subtribe</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/subtribe">http://rs.tdwg.org/dwc/terms/subtribe</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/subtribe-2023-06-16">http://rs.tdwg.org/dwc/terms/version/subtribe-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Subtribe</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the subtribe in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Plotinini</code></li>
  <li class="list-group-item"><code>Typhaeini</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>ScientificNameIdentified/HigherTaxon/HigherTaxonRank (enumeration value: )</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_tribe"></a>Term Name  dwc:tribe</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/tribe">http://rs.tdwg.org/dwc/terms/tribe</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/tribe-2023-06-16">http://rs.tdwg.org/dwc/terms/version/tribe-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Tribe</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the tribe in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Ortaliini</code></li>
  <li class="list-group-item"><code>Arethuseae</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>ScientificNameIdentified/HigherTaxon/HigherTaxonRank (enumeration value: )</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventType"></a>Term Name  dwc:eventType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventType">http://rs.tdwg.org/dwc/terms/eventType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventType-2023-06-16">http://rs.tdwg.org/dwc/terms/version/eventType-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature of the dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Regardless of the dwc:eventType, the interval of the dwc:Event can be captured in dwc:eventDate.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Sample</code></li>
  <li class="list-group-item"><code>Observation</code></li>
  <li class="list-group-item"><code>Site Visit</code></li>
  <li class="list-group-item"><code>Biotic Interaction</code></li>
  <li class="list-group-item"><code>Bioblitz</code></li>
  <li class="list-group-item"><code>Expedition</code></li>
  <li class="list-group-item"><code>Survey</code></li>
  <li class="list-group-item"><code>Project</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

## 2. Substantive term changes (change process and Executive approval required)

### Change format of dwc:basisOfRecord string values to conform to actual practice

See [Issue 416](https://github.com/tdwg/dwc/issues/416) for details.

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_basisOfRecord"></a>Term Name  dwc:basisOfRecord</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/basisOfRecord">http://rs.tdwg.org/dwc/terms/basisOfRecord</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/basisOfRecord-2023-06-16">http://rs.tdwg.org/dwc/terms/version/basisOfRecord-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Basis of Record</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The specific nature of the data record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the set of local names of the identifiers for classes in Darwin Core.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>PreservedSpecimen</code></li>
  <li class="list-group-item"><code>FossilSpecimen</code></li>
  <li class="list-group-item"><code>LivingSpecimen</code></li>
  <li class="list-group-item"><code>MaterialSample</code></li>
  <li class="list-group-item"><code>Event</code></li>
  <li class="list-group-item"><code>HumanObservation</code></li>
  <li class="list-group-item"><code>MachineObservation</code></li>
  <li class="list-group-item"><code>Taxon</code></li>
  <li class="list-group-item"><code>Occurrence</code></li>
  <li class="list-group-item"><code>MaterialCitation</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/RecordBasis</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2009-12-07_2">http://rs.tdwg.org/decisions/decision-2009-12-07_2</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_basisOfRecord"></a>Term Name  dwc:basisOfRecord</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/basisOfRecord">http://rs.tdwg.org/dwc/terms/basisOfRecord</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-07-15</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/basisOfRecord-2021-07-15">http://rs.tdwg.org/dwc/terms/version/basisOfRecord-2021-07-15</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Basis of Record</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The specific nature of the data record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the standard label of one of the Darwin Core classes.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>PreservedSpecimen</code>, <code>FossilSpecimen</code>, <code>LivingSpecimen</code>, <code>MaterialSample</code>, <code>Event</code>, <code>HumanObservation</code>, <code>MachineObservation</code>, <code>Taxon</code>, <code>Occurrence</code>, <code>MaterialCitation</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/RecordBasis</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2009-12-07_2">http://rs.tdwg.org/decisions/decision-2009-12-07_2</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

### Clarification of eventTime usage

See [Issue 407](https://github.com/tdwg/dwc/issues/407) for details.

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventTime"></a>Term Name  dwc:eventTime</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventTime">http://rs.tdwg.org/dwc/terms/eventTime</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventTime-2023-06-16">http://rs.tdwg.org/dwc/terms/version/eventTime-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Time</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The time or interval during which a dwc:Event occurred.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a time of day that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>14:07-0600</code> (2:07pm in the time zone six hours earlier than UTC)</li>
  <li class="list-group-item"><code>08:40:21Z</code> (8:40:21am UTC)</li>
  <li class="list-group-item"><code>13:00:00Z/15:30:00Z</code> (the interval between 1pm UTC and 3:30pm UTC)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>accessible from DataSets/DataSet/Units/Unit/Gathering/ISODateTimeBegin and DataSets/DataSet/Units/Unit/Gathering/ISODateTimeEnd</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventTime"></a>Term Name  dwc:eventTime</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventTime">http://rs.tdwg.org/dwc/terms/eventTime</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventTime-2020-08-12">http://rs.tdwg.org/dwc/terms/version/eventTime-2020-08-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Time</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The time or interval during which an Event occurred.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>14:07-0600</code> (2:07pm in the time zone six hours earlier than UTC). <code>08:40:21Z</code> (8:40:21am UTC). <code>13:00:00Z/15:30:00Z</code> (the interval between 1pm UTC and 3:30pm UTC).</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>accessible from DataSets/DataSet/Units/Unit/Gathering/ISODateTimeBegin and DataSets/DataSet/Units/Unit/Gathering/ISODateTimeEnd</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

### Clarification of usage of namePublishedIn and namePublishedInID

See [Issue 405](https://github.com/tdwg/dwc/issues/405) for details.

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_namePublishedIn"></a>Term Name  dwc:namePublishedIn</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublishedIn">http://rs.tdwg.org/dwc/terms/namePublishedIn</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/namePublishedIn-2023-06-16">http://rs.tdwg.org/dwc/terms/version/namePublishedIn-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Published In</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A reference for the publication in which the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A citation of the first publication of the name in its given combination, not the basionym / original name. Recombinations are often not published in zoology, in which case dwc:namePublishedIn should be empty.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388</code></li>
  <li class="list-group-item"><code>Forel, Auguste, Diagnosies provisoires de quelques espèces nouvelles de fourmis de Madagascar, récoltées par M. Grandidier., Annales de la Societe Entomologique de Belgique, Comptes-rendus des Seances 30, 1886</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SpecimenUnit/NomenclaturalTypeDesignations/NomenclaturalTypeDesignation/NomenclaturalReference/TitleCitation</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_namePublishedIn"></a>Term Name  dwc:namePublishedIn</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublishedIn">http://rs.tdwg.org/dwc/terms/namePublishedIn</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/namePublishedIn-2017-10-06">http://rs.tdwg.org/dwc/terms/version/namePublishedIn-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Published In</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A reference for the publication in which the scientificName was originally established under the rules of the associated nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388</code>, <code>Forel, Auguste, Diagnosies provisoires de quelques espèces nouvelles de fourmis de Madagascar, récoltées par M. Grandidier., Annales de la Societe Entomologique de Belgique, Comptes-rendus des Seances 30, 1886</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SpecimenUnit/NomenclaturalTypeDesignations/NomenclaturalTypeDesignation/NomenclaturalReference/TitleCitation</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

---------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_namePublishedInID"></a>Term Name  dwc:namePublishedInID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublishedInID">http://rs.tdwg.org/dwc/terms/namePublishedInID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/namePublishedInID-2023-06-16">http://rs.tdwg.org/dwc/terms/version/namePublishedInID-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Published In ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the publication in which the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A citation of the first publication of the name in its given combination, not the basionym / original name. Recombinations are often not published in zoology, in which case dwc:namePublishedInID should be empty.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_namePublishedInID"></a>Term Name  dwc:namePublishedInID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublishedInID">http://rs.tdwg.org/dwc/terms/namePublishedInID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/namePublishedInID-2020-08-12">http://rs.tdwg.org/dwc/terms/version/namePublishedInID-2020-08-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Published In ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the publication in which the scientificName was originally established under the rules of the associated nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

### Clarification of term definitions for footprintSpatialFit and pointRadiusSpatialFit

See [Issue 419](https://github.com/tdwg/dwc/issues/419) and [Issue 420](https://github.com/tdwg/dwc/issues/420) for details.

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_footprintSpatialFit"></a>Term Name  dwc:footprintSpatialFit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/footprintSpatialFit">http://rs.tdwg.org/dwc/terms/footprintSpatialFit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/footprintSpatialFit-2023-06-16">http://rs.tdwg.org/dwc/terms/version/footprintSpatialFit-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint Spatial Fit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ratio of the area of the dwc:footprintWKT to the area of the true (original, or most specific) spatial representation of the dcterms:Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given dwc:footprintWKT does not completely contain the original representation. The dwc:footprintSpatialFit is undefined (and should be left empty) if the original representation is any geometry without area (e.g., a point or polyline) and without uncertainty and the given georeference is not that same geometry (without uncertainty). If both the original and the given georeference are the same point, the dwc:footprintSpatialFit is 1.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (<a href="https://doi.org/10.15468/doc-gg7h-s853">https://doi.org/10.15468/doc-gg7h-s853</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>0</code></li>
  <li class="list-group-item"><code>1</code></li>
  <li class="list-group-item"><code>1.5708</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/FootprintSpatialFit</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_footprintSpatialFit"></a>Term Name  dwc:footprintSpatialFit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/footprintSpatialFit">http://rs.tdwg.org/dwc/terms/footprintSpatialFit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2020-08-20</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/footprintSpatialFit-2020-08-20">http://rs.tdwg.org/dwc/terms/version/footprintSpatialFit-2020-08-20</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint Spatial Fit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ratio of the area of the footprint (footprintWKT) to the area of the true (original, or most specific) spatial representation of the Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given footprint does not completely contain the original representation. The footprintSpatialFit is undefined (and should be left empty) if the original representation is a point without uncertainty and the given georeference is not that same point (without uncertainty). If both the original and the given georeference are the same point, the footprintSpatialFit is 1.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (<a href="https://doi.org/10.15468/doc-gg7h-s853">https://doi.org/10.15468/doc-gg7h-s853</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>0</code>, <code>1</code>, <code>1.5708</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/FootprintSpatialFit</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

--------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_pointRadiusSpatialFit"></a>Term Name  dwc:pointRadiusSpatialFit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit">http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/pointRadiusSpatialFit-2023-06-16">http://rs.tdwg.org/dwc/terms/version/pointRadiusSpatialFit-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Point Radius Spatial Fit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ratio of the area of the point-radius (dwc:decimalLatitude, dwc:decimalLongitude, dwc:coordinateUncertaintyInMeters) to the area of the true (original, or most specific) spatial representation of the dcterms:Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given point-radius does not completely contain the original representation. The dwc:pointRadiusSpatialFit is undefined (and should be left empty) if the original representation is any geometry without area (e.g., a point or polyline) and without uncertainty and the given georeference is not that same geometry (without uncertainty). If both the original and the given georeference are the same point, the dwc:pointRadiusSpatialFit is 1.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (<a href="https://doi.org/10.15468/doc-gg7h-s853">https://doi.org/10.15468/doc-gg7h-s853</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>0</code></li>
  <li class="list-group-item"><code>1</code></li>
  <li class="list-group-item"><code>1.5708</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/PointRadiusSpatialFit</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_pointRadiusSpatialFit"></a>Term Name  dwc:pointRadiusSpatialFit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit">http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2020-08-20</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/pointRadiusSpatialFit-2020-08-20">http://rs.tdwg.org/dwc/terms/version/pointRadiusSpatialFit-2020-08-20</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Point Radius Spatial Fit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ratio of the area of the point-radius (decimalLatitude, decimalLongitude, coordinateUncertaintyInMeters) to the area of the true (original, or most specific) spatial representation of the Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given point-radius does not completely contain the original representation. The pointRadiusSpatialFit is undefined (and should be left empty) if the original representation is a point without uncertainty and the given georeference is not that same point (without uncertainty). If both the original and the given georeference are the same point, the pointRadiusSpatialFit is 1.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (<a href="https://doi.org/10.15468/doc-gg7h-s853">https://doi.org/10.15468/doc-gg7h-s853</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>0</code>, <code>1</code>, <code>1.5708</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/PointRadiusSpatialFit</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

### Geographic divisions

These terms were changed in their usage comments to indicate that the field should be left blank if the location spans multiple entities at that level. In addition, the labels of several divisions were changed to "Nth Order Division" from more idiosyncratic labels. See [Issue 395](https://github.com/tdwg/dwc/issues/395) for discussion.

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_municipality"></a>Term Name  dwc:municipality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/municipality">http://rs.tdwg.org/dwc/terms/municipality</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/municipality-2023-06-16">http://rs.tdwg.org/dwc/terms/version/municipality-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Third Order Division</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region than county (city, municipality, etc.) in which the dcterms:Location occurs. Do not use this term for a nearby named place that does not contain the actual dcterms:Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Holzminden</code></li>
  <li class="list-group-item"><code>Araçatuba</code></li>
  <li class="list-group-item"><code>Ga-Segonyana</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_municipality"></a>Term Name  dwc:municipality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/municipality">http://rs.tdwg.org/dwc/terms/municipality</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/municipality-2017-10-06">http://rs.tdwg.org/dwc/terms/version/municipality-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Municipality</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region than county (city, municipality, etc.) in which the Location occurs. Do not use this term for a nearby named place that does not contain the actual location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Holzminden</code>, <code>Araçatuba</code>, <code>Ga-Segonyana</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

-------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_county"></a>Term Name  dwc:county</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/county">http://rs.tdwg.org/dwc/terms/county</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/county-2023-06-16">http://rs.tdwg.org/dwc/terms/version/county-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Second Order Division</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Missoula</code></li>
  <li class="list-group-item"><code>Los Lagos</code></li>
  <li class="list-group-item"><code>Mataró</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= County</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_county"></a>Term Name  dwc:county</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/county">http://rs.tdwg.org/dwc/terms/county</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/county-2017-10-06">http://rs.tdwg.org/dwc/terms/version/county-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>County</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Missoula</code>, <code>Los Lagos</code>, <code>Mataró</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= County</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

-------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_stateProvince"></a>Term Name  dwc:stateProvince</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/stateProvince">http://rs.tdwg.org/dwc/terms/stateProvince</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/stateProvince-2023-06-16">http://rs.tdwg.org/dwc/terms/version/stateProvince-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>First Order Division</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Montana</code></li>
  <li class="list-group-item"><code>Minas Gerais</code></li>
  <li class="list-group-item"><code>Córdoba</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= State or = Province (etc.)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_stateProvince"></a>Term Name  dwc:stateProvince</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/stateProvince">http://rs.tdwg.org/dwc/terms/stateProvince</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/stateProvince-2017-10-06">http://rs.tdwg.org/dwc/terms/version/stateProvince-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>State Province</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Montana</code>, <code>Minas Gerais</code>, <code>Córdoba</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= State or = Province (etc.)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

---------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_countryCode"></a>Term Name  dwc:countryCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/countryCode">http://rs.tdwg.org/dwc/terms/countryCode</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/countryCode-2023-06-16">http://rs.tdwg.org/dwc/terms/version/countryCode-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Country Code</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The standard code for the country in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an ISO 3166-1-alpha-2 country code. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>AR</code></li>
  <li class="list-group-item"><code>SV</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Country/ISO3166Code</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_countryCode"></a>Term Name  dwc:countryCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/countryCode">http://rs.tdwg.org/dwc/terms/countryCode</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/countryCode-2017-10-06">http://rs.tdwg.org/dwc/terms/version/countryCode-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Country Code</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The standard code for the country in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an ISO 3166-1-alpha-2 country code.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>AR</code>, <code>SV</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Country/ISO3166Code</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

------------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_continent"></a>Term Name  dwc:continent</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/continent">http://rs.tdwg.org/dwc/terms/continent</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/continent-2023-06-16">http://rs.tdwg.org/dwc/terms/version/continent-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Continent</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the continent in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Africa</code></li>
  <li class="list-group-item"><code>Antarctica</code></li>
  <li class="list-group-item"><code>Asia</code></li>
  <li class="list-group-item"><code>Europe</code></li>
  <li class="list-group-item"><code>North America</code></li>
  <li class="list-group-item"><code>Oceania</code></li>
  <li class="list-group-item"><code>South America</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= Continent</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_continent"></a>Term Name  dwc:continent</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/continent">http://rs.tdwg.org/dwc/terms/continent</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/continent-2017-10-06">http://rs.tdwg.org/dwc/terms/version/continent-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Continent</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the continent in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Africa</code>, <code>Antarctica</code>, <code>Asia</code>, <code>Europe</code>, <code>North America</code>, <code>Oceania</code>, <code>South America</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= Continent</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

### Technical details in form of names

Several issues clarified the use of the multiplication character in hybrid names and other technical issues in the format of names.

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimIdentification"></a>Term Name  dwc:verbatimIdentification</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimIdentification">http://rs.tdwg.org/dwc/terms/verbatimIdentification</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimIdentification-2023-06-16">http://rs.tdwg.org/dwc/terms/version/verbatimIdentification-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Identification</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A string representing the taxonomic identification as it appeared in the original record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term is meant to allow the capture of an unaltered original identification/determination, including identification qualifiers, hybrid formulas, uncertainties, etc. This term is meant to be used in addition to dwc:scientificName (and dwc:identificationQualifier etc.), not instead of it.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Peromyscus sp.</code></li>
  <li class="list-group-item"><code>Ministrymon sp. nov. 1</code></li>
  <li class="list-group-item"><code>Anser anser × Branta canadensis</code></li>
  <li class="list-group-item"><code>Pachyporidae?</code></li>
  <li class="list-group-item"><code>Potentilla × pantotricha Soják</code></li>
  <li class="list-group-item"><code>Aconitum pilipes × A. variegatum</code></li>
  <li class="list-group-item"><code>Lepomis auritus x cyanellus</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

old: 

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimIdentification"></a>Term Name  dwc:verbatimIdentification</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimIdentification">http://rs.tdwg.org/dwc/terms/verbatimIdentification</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-07-15</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimIdentification-2021-07-15">http://rs.tdwg.org/dwc/terms/version/verbatimIdentification-2021-07-15</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Identification</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A string representing the taxonomic identification as it appeared in the original record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term is meant to allow the capture of an unaltered original identification/determination, including identification qualifiers, hybrid formulas, uncertainties, etc. This term is meant to be used in addition to <code>scientificName</code> (and <code>identificationQualifier</code> etc.), not instead of it.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Peromyscus sp.</code>, <code>Ministrymon sp. nov. 1</code>, <code>Anser anser X Branta canadensis</code>, <code>Pachyporidae?</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

---------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_scientificName"></a>Term Name  dwc:scientificName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/scientificName">http://rs.tdwg.org/dwc/terms/scientificName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/scientificName-2023-06-16">http://rs.tdwg.org/dwc/terms/version/scientificName-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Scientific Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name, with authorship and date information if known. When forming part of a dwc:Identification, this should be the name in lowest level taxonomic rank that can be determined. This term should not contain identification qualifications, which should instead be supplied in the dwc:identificationQualifier term.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term should not contain identification qualifications, which should instead be supplied in the IdentificationQualifier term. When applied to an Organism or Occurrence, this term should be used to represent the scientific name that was applied to the associated Organism in accordance with the Taxon to which it was or is currently identified. Names should be compliant to the most recent nomenclatural code. For example, names of hybrids for algae, fungi and plants should follow the rules of the International Code of Nomenclature for algae, fungi, and plants (Schenzhen Code Articles H.1, H.2 and H.3). Thus, use the multiplication sign <code>×</code> (Unicode <code>U+00D7</code>, HTML <code>&times;</code>) to identify a hybrid, not <code>x</code> or <code>X</code>, if possible.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Coleoptera</code> (order)</li>
  <li class="list-group-item"><code>Vespertilionidae</code> (family)</li>
  <li class="list-group-item"><code>Manis</code> (genus)</li>
  <li class="list-group-item"><code>Ctenomys sociabilis</code> (genus + specificEpithet)</li>
  <li class="list-group-item"><code>Ambystoma tigrinum diaboli</code> (genus + specificEpithet + infraspecificEpithet)</li>
  <li class="list-group-item"><code>Roptrocerus typographi (Györfi, 1952)</code> (genus + specificEpithet + scientificNameAuthorship)</li>
  <li class="list-group-item"><code>Quercus agrifolia var. oxyadenia (Torr.) J.T. Howell</code> (genus + specificEpithet + taxonRank + infraspecificEpithet + scientificNameAuthorship)</li>
  <li class="list-group-item"><code>×Agropogon littoralis (Sm.) C. E. Hubb.</code></li>
  <li class="list-group-item"><code>Mentha ×smithiana R. A. Graham</code></li>
  <li class="list-group-item"><code>Agrostis stolonifera L. × Polypogon monspeliensis (L.) Desf.</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/FullScientificNameString</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_scientificName"></a>Term Name  dwc:scientificName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/scientificName">http://rs.tdwg.org/dwc/terms/scientificName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-07-15</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/scientificName-2021-07-15">http://rs.tdwg.org/dwc/terms/version/scientificName-2021-07-15</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Scientific Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name, with authorship and date information if known. When forming part of an Identification, this should be the name in lowest level taxonomic rank that can be determined. This term should not contain identification qualifications, which should instead be supplied in the IdentificationQualifier term.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term should not contain identification qualifications, which should instead be supplied in the IdentificationQualifier term. When applied to an Organism or Occurrence, this term should be used to represent the scientific name that was applied to the associated Organism in accordance with the Taxon to which it was or is currently identified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Coleoptera</code> (order). <code>Vespertilionidae</code> (family). <code>Manis</code> (genus). <code>Ctenomys sociabilis</code> (genus + specificEpithet). <code>Ambystoma tigrinum diaboli</code> (genus + specificEpithet + infraspecificEpithet). <code>Roptrocerus typographi (Györfi, 1952)</code> (genus + specificEpithet + scientificNameAuthorship), <code>Quercus agrifolia var. oxyadenia (Torr.) J.T. Howell</code> (genus + specificEpithet + taxonRank + infraspecificEpithet + scientificNameAuthorship).</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/FullScientificNameString</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

-------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonRank"></a>Term Name  dwc:taxonRank</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonRank">http://rs.tdwg.org/dwc/terms/taxonRank</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonRank-2023-06-16">http://rs.tdwg.org/dwc/terms/version/taxonRank-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Rank</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The taxonomic rank of the most specific name in the dwc:scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. The taxon ranks of algae, fungi and plants are defined in the International Code of Nomenclature for algae, fungi, and plants (Schenzhen Code Articles H3.2, H4.4 and H.3.1).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>subspecies</code></li>
  <li class="list-group-item"><code>varietas</code></li>
  <li class="list-group-item"><code>forma</code></li>
  <li class="list-group-item"><code>species</code></li>
  <li class="list-group-item"><code>genus</code></li>
  <li class="list-group-item"><code>nothogenus</code></li>
  <li class="list-group-item"><code>nothospecies</code></li>
  <li class="list-group-item"><code>nothosubspecies</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/Rank</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonRank"></a>Term Name  dwc:taxonRank</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonRank">http://rs.tdwg.org/dwc/terms/taxonRank</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonRank-2017-10-06">http://rs.tdwg.org/dwc/terms/version/taxonRank-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Rank</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The taxonomic rank of the most specific name in the scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>subspecies</code>, <code>varietas</code>, <code>forma</code>, <code>species</code>, <code>genus</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/Rank</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

--------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_infraspecificEpithet"></a>Term Name  dwc:infraspecificEpithet</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/infraspecificEpithet">http://rs.tdwg.org/dwc/terms/infraspecificEpithet</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/infraspecificEpithet-2023-06-16">http://rs.tdwg.org/dwc/terms/version/infraspecificEpithet-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Infraspecific Epithet</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the lowest or terminal infraspecific epithet of the dwc:scientificName, excluding any rank designation.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>In botany, name strings in literature and identifications may have multiple infraspecific ranks. According to the International Code of Nomenclature for algae, fungi, and plants (Schenzhen Code Articles 6.7 & Art. 24.1), valid names only have two epithets, with the lowest rank being the dwc:infraspecificEpithet. For example: the dwc:infraspecificEpithet in the string <code>Indigofera charlieriana subsp. sessilis var. scaberrima</code> is <code>scaberrima</code> and the dwc:scientificName is <code>Indigofera charlieriana var. scaberrima (Schinz) J.B.Gillett</code>. Use dwc:verbatimIdentification for the full name string used in a dwc:Identification.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>concolor</code> (for scientificName <code>Puma concolor concolor (Linnaeus, 1771)</code>)</li>
  <li class="list-group-item"><code>oxyadenia</code> (for scientificName <code>Quercus agrifolia var. oxyadenia (Torr.) J.T. Howell</code>)</li>
  <li class="list-group-item"><code>laxa</code> (for scientificName <code>Cheilanthes hirta f. laxa (Kunze) W.Jacobsen & N.Jacobsen</code>)</li>
  <li class="list-group-item"><code>scaberrima</code> (for scientificName <code>Indigofera charlieriana var. scaberrima (Schinz) J.B.Gillett</code>)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Bacterial/SubspeciesEpithet or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/SecondEpithet or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Zoological/SubspeciesEpithet</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_infraspecificEpithet"></a>Term Name  dwc:infraspecificEpithet</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/infraspecificEpithet">http://rs.tdwg.org/dwc/terms/infraspecificEpithet</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-07-15</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/infraspecificEpithet-2021-07-15">http://rs.tdwg.org/dwc/terms/version/infraspecificEpithet-2021-07-15</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Infraspecific Epithet</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the lowest or terminal infraspecific epithet of the scientificName, excluding any rank designation.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>In botany, where there can be more than one infraspecific rank, name strings may be provided, in literature and in identifications, that have more than two epithets. Only the last of these epithets is the infraspecificEpithet and only the first and the last epithets belong to the scientificName. For example: the infraspecificEpithet in the string "Indigofera charlieriana subsp. sessilis var. scaberrima" is <code>scaberrima</code> and the scientificName is <code>Indigophera charlieriana var. scaberrima</code>.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>concolor</code> (for scientificName "Puma concolor concolor"), <code>oxyadenia</code> (for scientificName "Quercus agrifolia var. oxyadenia"), <code>laxa</code> (for scientificName "Cheilanthes hirta f. laxa"), <code>scaberrima</code> (for scientificName "Indigofera charlieriana var. scaberrima").</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Bacterial/SubspeciesEpithet or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/SecondEpithet or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Zoological/SubspeciesEpithet</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

## 3. Non-substantive term changes (informative)

New:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relationshipOfResource"></a>Term Name  dwc:relationshipOfResource</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipOfResource">http://rs.tdwg.org/dwc/terms/relationshipOfResource</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relationshipOfResource-2023-06-16">http://rs.tdwg.org/dwc/terms/version/relationshipOfResource-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Relationship Of Resource</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The relationship of the subject (identified by dwc:resourceID) to the object (identified by dwc:relatedResourceID).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>same as</code></li>
  <li class="list-group-item"><code>duplicate of</code></li>
  <li class="list-group-item"><code>mother of</code></li>
  <li class="list-group-item"><code>offspring of</code></li>
  <li class="list-group-item"><code>sibling of</code></li>
  <li class="list-group-item"><code>parasite of</code></li>
  <li class="list-group-item"><code>host of</code></li>
  <li class="list-group-item"><code>valid synonym of</code></li>
  <li class="list-group-item"><code>located within</code></li>
  <li class="list-group-item"><code>pollinator of members of taxon</code></li>
  <li class="list-group-item"><code>pollinated specific plant</code></li>
  <li class="list-group-item"><code>pollinated by members of taxon</code></li>
  <li class="list-group-item"><code>on slab with</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Associations/UnitAssociation/AssociationType</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relationshipOfResource"></a>Term Name  dwc:relationshipOfResource</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipOfResource">http://rs.tdwg.org/dwc/terms/relationshipOfResource</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-07-15</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relationshipOfResource-2021-07-15">http://rs.tdwg.org/dwc/terms/version/relationshipOfResource-2021-07-15</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Relationship Of Resource</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The relationship of the subject (identified by resourceID) to the object (identified by relatedResourceID).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>sameAs</code>, <code>duplicate of</code>, <code>mother of</code>, <code>offspring of</code>, <code>sibling of</code>, <code>parasite of</code>, <code>host of</code>, <code>valid synonym of</code>, <code>located within</code>, <code>pollinator of members of taxon</code>, <code>pollinated specific plant</code>, <code>pollinated by members of taxon</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Associations/UnitAssociation/AssociationType</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

--------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementUnit"></a>Term Name  dwc:measurementUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementUnit">http://rs.tdwg.org/dwc/terms/measurementUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementUnit-2023-06-16">http://rs.tdwg.org/dwc/terms/version/measurementUnit-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Unit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The units associated with the dwc:measurementValue.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the International System of Units (SI).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>m</code></li>
  <li class="list-group-item"><code>g</code></li>
  <li class="list-group-item"><code>l</code></li>
  <li class="list-group-item"><code>°C</code></li>
  <li class="list-group-item"><code>mm</code></li>
  <li class="list-group-item"><code>km²</code></li>
  <li class="list-group-item"><code>%</code></li>
  <li class="list-group-item"><code>hh:mm:ss</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UnitOfMeasurement or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UnitOfMeasurement</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementUnit"></a>Term Name  dwc:measurementUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementUnit">http://rs.tdwg.org/dwc/terms/measurementUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementUnit-2018-09-06">http://rs.tdwg.org/dwc/terms/version/measurementUnit-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Unit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The units associated with the measurementValue.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the International System of Units (SI).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>mm</code>, <code>C</code>, <code>km</code>, <code>ha</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UnitOfMeasurement or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UnitOfMeasurement</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

-------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_institutionID"></a>Term Name  dwc:institutionID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/institutionID">http://rs.tdwg.org/dwc/terms/institutionID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/institutionID-2023-06-16">http://rs.tdwg.org/dwc/terms/version/institutionID-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Institution ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the institution having custody of the object(s) or information referred to in the record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>For physical specimens, the recommended best practice is to use a globally unique and resolvable identifier from a collections registry such as the Research Organization Registry (ROR) or the GBIF Registry of Scientific Collections (<a href="https://www.gbif.org/grscicoll">https://www.gbif.org/grscicoll</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="https://ror.org/015hz7p22">https://ror.org/015hz7p22</a></code></li>
  <li class="list-group-item"><code><a href="http://grscicoll.org/institution/museum-southwestern-biology">http://grscicoll.org/institution/museum-southwestern-biology</a></code></li>
  <li class="list-group-item"><code><a href="https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381">https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381</a></code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SourceInstitutionID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_institutionID"></a>Term Name  dwc:institutionID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/institutionID">http://rs.tdwg.org/dwc/terms/institutionID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/institutionID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/institutionID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Institution ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the institution having custody of the object(s) or information referred to in the record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>For physical specimens, the recommended best practice is to use an identifier from a collections registry such as the Global Registry of Biodiversity Repositories (<a href="http://grbio.org/">http://grbio.org/</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="http://biocol.org/urn:lsid:biocol.org:col:34777">http://biocol.org/urn:lsid:biocol.org:col:34777</a></code>, <code><a href="http://grbio.org/cool/km06-gtbn">http://grbio.org/cool/km06-gtbn</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SourceInstitutionID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

-----------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_collectionID"></a>Term Name  dwc:collectionID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/collectionID">http://rs.tdwg.org/dwc/terms/collectionID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/collectionID-2023-06-16">http://rs.tdwg.org/dwc/terms/version/collectionID-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Collection ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the collection or dataset from which the record was derived.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>For physical specimens, the recommended best practice is to use a globally unique and resolvable identifier from a collections registry such as the GBIF Registry of Scientific Collections (<a href="https://www.gbif.org/grscicoll">https://www.gbif.org/grscicoll</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="https://www.gbif.org/grscicoll/collection/fbd3ed74-5a21-4e01-b86a-33d36f032d9c">https://www.gbif.org/grscicoll/collection/fbd3ed74-5a21-4e01-b86a-33d36f032d9c</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SourceID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_collectionID"></a>Term Name  dwc:collectionID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/collectionID">http://rs.tdwg.org/dwc/terms/collectionID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/collectionID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/collectionID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Collection ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the collection or dataset from which the record was derived.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>For physical specimens, the recommended best practice is to use an identifier from a collections registry such as the Global Registry of Biodiversity Repositories (<a href="http://grbio.org/">http://grbio.org/</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="http://biocol.org/urn:lsid:biocol.org:col:1001">http://biocol.org/urn:lsid:biocol.org:col:1001</a></code>, <code><a href="http://grbio.org/cool/p5fp-c036">http://grbio.org/cool/p5fp-c036</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SourceID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismQuantity"></a>Term Name  dwc:organismQuantity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismQuantity">http://rs.tdwg.org/dwc/terms/organismQuantity</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismQuantity-2023-06-16">http://rs.tdwg.org/dwc/terms/version/organismQuantity-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Quantity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A number or enumeration value for the quantity of dwc:Organisms.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A dwc:organismQuantity must have a corresponding dwc:organismQuantityType.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>27</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>12.5</code> (organismQuantity) with <code>% biomass</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>r</code> (organismQuantity) with <code>Braun-Blanquet Scale</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>many</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2015-03-19_18">http://rs.tdwg.org/decisions/decision-2015-03-19_18</a></td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismQuantity"></a>Term Name  dwc:organismQuantity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismQuantity">http://rs.tdwg.org/dwc/terms/organismQuantity</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-07-15</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismQuantity-2021-07-15">http://rs.tdwg.org/dwc/terms/version/organismQuantity-2021-07-15</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Quantity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A number or enumeration value for the quantity of organisms.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>An organismQuantity must have a corresponding organismQuantityType.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>27</code> (organismQuantity) with <code>individuals</code> (organismQuantityType). <code>12.5</code> (organismQuantity) with <code>% biomass</code> (organismQuantityType). <code>r</code> (organismQuantity) with <code>Braun Blanquet Scale</code> (organismQuantityType). <code>many</code> (organismQuantity) with <code>individuals</code> (organismQuantityType).</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2015-03-19_18">http://rs.tdwg.org/decisions/decision-2015-03-19_18</a></td>
		</tr>
	</tbody>
</table>

----------------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismQuantityType"></a>Term Name  dwc:organismQuantityType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismQuantityType">http://rs.tdwg.org/dwc/terms/organismQuantityType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismQuantityType-2023-06-16">http://rs.tdwg.org/dwc/terms/version/organismQuantityType-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Quantity Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The type of quantification system used for the quantity of dwc:Organisms.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A dwc:organismQuantityType must have a corresponding dwc:organismQuantity.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>27</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>12.5</code> (organismQuantity) with <code>% biomass</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>r</code> (organismQuantity) with <code>Braun-Blanquet Scale</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>many</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2015-03-19_18">http://rs.tdwg.org/decisions/decision-2015-03-19_18</a></td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismQuantityType"></a>Term Name  dwc:organismQuantityType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismQuantityType">http://rs.tdwg.org/dwc/terms/organismQuantityType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismQuantityType-2017-10-06">http://rs.tdwg.org/dwc/terms/version/organismQuantityType-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Quantity Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The type of quantification system used for the quantity of organisms.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A dwc:organismQuantityType must have a corresponding dwc:organismQuantity.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>27</code> (organismQuantity) with <code>individuals</code> (organismQuantityType). <code>12.5</code> (organismQuantity) with <code>%biomass</code> (organismQuantityType). <code>r</code> (organismQuantity) with <code>BraunBlanquetScale</code> (organismQuantityType).</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2015-03-19_18">http://rs.tdwg.org/decisions/decision-2015-03-19_18</a></td>
		</tr>
	</tbody>
</table>

---------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_coordinateUncertaintyInMeters"></a>Term Name  dwc:coordinateUncertaintyInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters">http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/coordinateUncertaintyInMeters-2023-06-16">http://rs.tdwg.org/dwc/terms/version/coordinateUncertaintyInMeters-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Coordinate Uncertainty In Meters</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The horizontal distance (in meters) from the given dwc:decimalLatitude and dwc:decimalLongitude describing the smallest circle containing the whole of the dcterms:Location. Leave the value empty if the uncertainty is unknown, cannot be estimated, or is not applicable (because there are no coordinates). Zero is not a valid value for this term.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>30</code> (reasonable lower limit on or after 2000-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time)</li>
  <li class="list-group-item"><code>100</code> (reasonable lower limit before 2000-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time)</li>
  <li class="list-group-item"><code>71</code> (uncertainty for a UTM coordinate having 100 meter precision and a known spatial reference system)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLon/CoordinateErrorDistanceInMeters</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_coordinateUncertaintyInMeters"></a>Term Name  dwc:coordinateUncertaintyInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters">http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-07-15</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/coordinateUncertaintyInMeters-2021-07-15">http://rs.tdwg.org/dwc/terms/version/coordinateUncertaintyInMeters-2021-07-15</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Coordinate Uncertainty In Meters</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The horizontal distance (in meters) from the given decimalLatitude and decimalLongitude describing the smallest circle containing the whole of the Location. Leave the value empty if the uncertainty is unknown, cannot be estimated, or is not applicable (because there are no coordinates). Zero is not a valid value for this term.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>30</code> (reasonable lower limit on or after 2020-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time). <code>100</code> (reasonable lower limit before 2020-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time). <code>71</code> (uncertainty for a UTM coordinate having 100 meter precision and a known spatial reference system).</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLon/CoordinateErrorDistanceInMeters</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

-------------

new:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_dynamicProperties"></a>Term Name  dwc:dynamicProperties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/dynamicProperties">http://rs.tdwg.org/dwc/terms/dynamicProperties</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-16</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/dynamicProperties-2023-06-16">http://rs.tdwg.org/dwc/terms/version/dynamicProperties-2023-06-16</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Dynamic Properties</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list of additional measurements, facts, characteristics, or assertions about the record. Meant to provide a mechanism for structured content.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a key:value encoding schema for a data interchange format such as JSON.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>{"heightInMeters":1.5}</code></li>
  <li class="list-group-item"><code>{"targusLengthInMeters":0.014, "weightInGrams":120}</code></li>
  <li class="list-group-item"><code>{"natureOfID":"expert identification", "identificationEvidence":"cytochrome B sequence"}</code></li>
  <li class="list-group-item"><code>{"relativeHumidity":28, "airTemperatureInCelsius":22, "sampleSizeInKilograms":10}</code></li>
  <li class="list-group-item"><code>{"aspectHeading":277, "slopeInDegrees":6}</code></li>
  <li class="list-group-item"><code>{"iucnStatus":"vulnerable", "taxonDistribution":"Neuquén, Argentina"}</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

old:

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_dynamicProperties"></a>Term Name  dwc:dynamicProperties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/dynamicProperties">http://rs.tdwg.org/dwc/terms/dynamicProperties</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/dynamicProperties-2017-10-06">http://rs.tdwg.org/dwc/terms/version/dynamicProperties-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Dynamic Properties</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list of additional measurements, facts, characteristics, or assertions about the record. Meant to provide a mechanism for structured content.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a key:value encoding schema for a data interchange format such as JSON.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>{"heightInMeters":1.5}</code>, <code>{"tragusLengthInMeters":0.014, "weightInGrams":120}</code>, <code>{"natureOfID":"expert identification", "identificationEvidence":"cytochrome B sequence"}</code>, <code>{"relativeHumidity":28, "airTemperatureInCelsius":22, "sampleSizeInKilograms":10}</code>, <code>{"aspectHeading":277, "slopeInDegrees":6}</code>, <code>{"iucnStatus":"vulnerable", "taxonDistribution":"Neuquén, Argentina"}</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

-------------

