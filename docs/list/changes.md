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