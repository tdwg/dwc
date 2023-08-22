# Changes made in the 2023-08-21 version of DwC

NOTE: dates given in the documents will be updated to the actual ratification date once it is complete.

## 1. New terms added (change process and Executive approval required)

Note: The IRI analogs of new terms (in the dwciri: namespace) are not shown. Their definitions are identical to the dwc: analogs.

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_MaterialEntity"></a>Term Name  dwc:MaterialEntity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/MaterialEntity">http://rs.tdwg.org/dwc/terms/MaterialEntity</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-08-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/MaterialEntity-2023-08-18">http://rs.tdwg.org/dwc/terms/version/MaterialEntity-2023-08-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Entity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An entity that can be identified, exists for some period of time, and consists in whole or in part of physical matter while it exists.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The term is defined at the most general level to admit descriptions of any subtype of material entity within the scope of Darwin Core. In particular, any kind of material sample, preserved specimen, fossil, or exemplar from living collections is intended to be subsumed under this term.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>an instance of a fossil</code></li>
  <li class="list-group-item"><code>an instance of a herbarium sheet with its attached plant specimen</code></li>
  <li class="list-group-item"><code>a particular part of the plant-derived material affixed to a herbarium sheet</code></li>
  <li class="list-group-item"><code>an instance of a frozen tissue sample</code></li>
  <li class="list-group-item"><code>a specific water sample</code></li>
  <li class="list-group-item"><code>an instance of a meteorite fragment</code></li>
  <li class="list-group-item"><code>a particular wolf in a zoo</code></li>
  <li class="list-group-item"><code>a particular pack of wolves in the wild</code></li>
  <li class="list-group-item"><code>an isolated molecule of DNA</code></li>
  <li class="list-group-item"><code>a specific deep-frozen DNA sample</code></li>
  <li class="list-group-item"><code>a particular field notebook</code></li>
  <li class="list-group-item"><code>a particular paper page from a field notebook</code></li>
  <li class="list-group-item"><code>an instance of a printed photograph</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>None (Specimen Unit, when used to denote a class of things, appears to be a broadly construed subclass.)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_materialEntityID"></a>Term Name  dwc:materialEntityID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/materialEntityID">http://rs.tdwg.org/dwc/terms/materialEntityID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-08-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/materialEntityID-2023-08-18">http://rs.tdwg.org/dwc/terms/version/materialEntityID-2023-08-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Entity ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for a particular instance of a MaterialEntity.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Values of dwc:materialEntityID are intended to uniquely and persistently identify a particular dwc:MaterialEntity within some context. Examples of context include a particular sample collection, an organization, or the worldwide scale. Recommended best practice is to use a persistent, globally unique identifier. The identifier is bound to a physical object (the dwc:MaterialEntity) as opposed to a particular digital record (representation) of that physical object.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>06809dc5-f143-459a-be1a-6f03e63fc083</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>Unit/UnitGUID or Unit/UnitID</td>
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
			<th colspan="2"><a id="dwc_materialEntityRemarks"></a>Term Name  dwc:materialEntityRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/materialEntityRemarks">http://rs.tdwg.org/dwc/terms/materialEntityRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-08-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/materialEntityRemarks-2023-08-18">http://rs.tdwg.org/dwc/terms/version/materialEntityRemarks-2023-08-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Entity Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the MaterialEntity instance.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>found in association with charred remains</code></li>
  <li class="list-group-item"><code>some original fragments missing</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Notes</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

## 2. Term changes (Not all involved changes to normative content that required a public review, but all were included in the review anyway)

These changes included situations where:

- dwc:MaterialEntity replaced dwc:MaterialSample, dwc:Occurrence or "cataloged item" in the term metadata,
- where dwc:MaterialEntity was added to the list of possible classes, 
- or where an example that was previously described as a dwc:MaterialSample is now described as dwc:MaterialEntity. 

Terms involved:  dwc:basisOfRecord, dcterms:references, dwc:associatedSequences, dwc:disposition, dwc:preparations, dwc:verbatimLabel, dwc:ResourceRelationship, dwc:MeasurementOrFact, and many of the geochronological and stratigraphic terms, see https://github.com/tdwg/dwc/milestone/18 for the full list. 

Several terms are now organized under the new dwc:MaterialSample class rather than the dwc:Occurrence class: dwc:disposition, dwc:preparations, and dwc:verbatimLabel. 

Here's an example of a change to dwc:MaterialSample in a term definition: 

**Before**

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_lithostratigraphicTerms"></a>Term Name  dwc:lithostratigraphicTerms</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms">http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/lithostratigraphicTerms-2017-10-06">http://rs.tdwg.org/dwc/terms/version/lithostratigraphicTerms-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Lithostratigraphic Terms</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The combination of all litho-stratigraphic names for the rock from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Pleistocene-Weichselien</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Stratigraphy/LithostratigraphicTerms</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


**After**

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_lithostratigraphicTerms"></a>Term Name  dwc:lithostratigraphicTerms</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms">http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-08-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/lithostratigraphicTerms-2023-08-18">http://rs.tdwg.org/dwc/terms/version/lithostratigraphicTerms-2023-08-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Lithostratigraphic Terms</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The combination of all litho-stratigraphic names for the rock from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Pleistocene-Weichselien</code></td>
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

-------------

