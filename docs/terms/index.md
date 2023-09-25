
# Darwin Core Quick Reference Guide

This document is intended to be an easy-to-read reference of the currently (as of 2023-09-18) recommended terms maintained as part of the [Darwin Core standard](https://www.tdwg.org/standards/dwc/) and is maintained by the [Darwin Core Maintenance Group](https://www.tdwg.org/community/dwc/). 


**Need help?** Read more about how to use Darwin Core in the [Darwin Core Questions & Answers site](https://github.com/tdwg/dwc-qa/blob/master/README.md). Still have questions? Submit a new issue (question/problem) to the [dwc-qa issues page in GitHub](https://github.com/tdwg/dwc-qa/issues), or use the [form](https://tinyurl.com/darwin-qa). See the bottom of this document for [how to cite Darwin Core](https://dwc.tdwg.org/terms/#cite-darwin-core)."

**Want to contribute?** For information about how to contribute to the Darwin Core Standard, including how to propose changes, see the [Guidelines for contributing](https://github.com/tdwg/dwc/blob/master/.github/CONTRIBUTING.md).

This page is not part of the standard, but combines the normative term names and definitions with the non-normative comments and examples that are meant to help people to use the terms consistently. Definitions, comments, and examples may include namespace abbreviations (e.g., "dwc:"). These are included to show that the meaning for the word it is attached to very specifically means the term as defined in that namespace. Thus, dwc:Event means Event as defined by Darwin Core at https://dwc.tdwg.org/terms/#event. Capitalized terms that follow a namespace abbreviation, such as dwc:Occurrence, are Darwin Core class terms, which are a special category of terms used to group sets of property terms (terms that being with lower case names that follow the namespace abbreviation, e.g., dwc:eventID) for convenience. Comprehensive metadata for current and obsolete terms in human readable form are found in the document [List of Darwin Core terms](../list/). 

Additional [files with just the current term names](https://github.com/tdwg/dwc/tree/master/dist) and a [file with the full term history](https://github.com/tdwg/dwc/blob/master/vocabulary/term_versions.csv) can be found in the [Darwin Core repository](https://github.com/tdwg/dwc). 


## Record-level

This category contains terms that are generic in that they might apply to any type of record in a dataset.
<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dc:type">type</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dcterms:modified">modified</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dc:language">language</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dcterms:license">license</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dcterms:rightsHolder">rightsHolder</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dcterms:accessRights">accessRights</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dcterms:bibliographicCitation">bibliographicCitation</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dcterms:references">references</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:institutionID">institutionID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:collectionID">collectionID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:datasetID">datasetID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:institutionCode">institutionCode</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:collectionCode">collectionCode</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:datasetName">datasetName</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:ownerInstitutionCode">ownerInstitutionCode</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:basisOfRecord">basisOfRecord</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:informationWithheld">informationWithheld</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:dataGeneralizations">dataGeneralizations</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:dynamicProperties">dynamicProperties</a>
  </div>


<p class="invisible">
  <span id="dc:type"></span>
    <span id="type"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">type</th></tr>
    <tr><td>Identifier</td><td><a href="http://purl.org/dc/elements/1.1/type">http://purl.org/dc/elements/1.1/type</a></td></tr>
    <tr><td>Definition</td><td>The nature or genre of the resource.</td></tr>
    <tr><td>Comments</td><td>Must be populated with a value from the DCMI type vocabulary (<a href="http://dublincore.org/documents/2010/10/11/dcmi-type-vocabulary/">http://dublincore.org/documents/2010/10/11/dcmi-type-vocabulary/</a>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>StillImage</code></li><li class="list-group-item"><code>MovingImage</code></li><li class="list-group-item"><code>Sound</code></li><li class="list-group-item"><code>PhysicalObject</code></li><li class="list-group-item"><code>Event</code></li><li class="list-group-item"><code>Text</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dcterms:modified"></span>
    <span id="modified"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">modified</th></tr>
    <tr><td>Identifier</td><td><a href="http://purl.org/dc/terms/modified">http://purl.org/dc/terms/modified</a></td></tr>
    <tr><td>Definition</td><td>The most recent date-time on which the resource was changed.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li><li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li><li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li><li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li><li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li><li class="list-group-item"><code>1971</code> (some time in the year 1971)</li><li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li><li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li><li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dc:language"></span>
    <span id="language"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">language</th></tr>
    <tr><td>Identifier</td><td><a href="http://purl.org/dc/elements/1.1/language">http://purl.org/dc/elements/1.1/language</a></td></tr>
    <tr><td>Definition</td><td>A language of the resource.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as RFC 5646.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>en</code> (for English)</li><li class="list-group-item"><code>es</code> (for Spanish)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dcterms:license"></span>
    <span id="license"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">license</th></tr>
    <tr><td>Identifier</td><td><a href="http://purl.org/dc/terms/license">http://purl.org/dc/terms/license</a></td></tr>
    <tr><td>Definition</td><td>A legal document giving official permission to do something with the resource.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="http://creativecommons.org/publicdomain/zero/1.0/legalcode">http://creativecommons.org/publicdomain/zero/1.0/legalcode</a></code></li><li class="list-group-item"><code><a href="http://creativecommons.org/licenses/by/4.0/legalcode">http://creativecommons.org/licenses/by/4.0/legalcode</a></code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dcterms:rightsHolder"></span>
    <span id="rightsHolder"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">rightsHolder</th></tr>
    <tr><td>Identifier</td><td><a href="http://purl.org/dc/terms/rightsHolder">http://purl.org/dc/terms/rightsHolder</a></td></tr>
    <tr><td>Definition</td><td>A person or organization owning or managing rights over the resource.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>The Regents of the University of California</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dcterms:accessRights"></span>
    <span id="accessRights"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">accessRights</th></tr>
    <tr><td>Identifier</td><td><a href="http://purl.org/dc/terms/accessRights">http://purl.org/dc/terms/accessRights</a></td></tr>
    <tr><td>Definition</td><td>Information about who can access the resource or an indication of its security status.</td></tr>
    <tr><td>Comments</td><td>Access Rights may include information regarding access or restrictions based on privacy, security, or other policies.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>not-for-profit use only</code> (string literal example)</li><li class="list-group-item"><code><a href="https://www.fieldmuseum.org/field-museum-natural-history-conditions-and-suggested-norms-use-collections-data-and-images">https://www.fieldmuseum.org/field-museum-natural-history-conditions-and-suggested-norms-use-collections-data-and-images</a></code> (URI example)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dcterms:bibliographicCitation"></span>
    <span id="bibliographicCitation"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">bibliographicCitation</th></tr>
    <tr><td>Identifier</td><td><a href="http://purl.org/dc/terms/bibliographicCitation">http://purl.org/dc/terms/bibliographicCitation</a></td></tr>
    <tr><td>Definition</td><td>A bibliographic reference for the resource.</td></tr>
    <tr><td>Comments</td><td>From Dublin Core, "Recommended practice is to include sufficient bibliographic detail to identify the resource as unambiguously as possible." The intended usage of this term in Darwin Core is to provide the preferred way to cite the resource itself - "how to cite this record". Note that the intended usage of dcterms:references in Darwin Core, by contrast, is to point to the definitive source representation of the resource - "where to find the as-close-to-original reference, if one is available.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Museum of Vertebrate Zoology, UC Berkeley. MVZ Mammal Collection (Arctos). Record ID: <a href="http://arctos.database.museum/guid/MVZ:Mamm:165861?seid=101356">http://arctos.database.museum/guid/MVZ:Mamm:165861?seid=101356</a>. Source: <a href="http://ipt.vertnet.org:8080/ipt/resource.do?r=mvz_mammal">http://ipt.vertnet.org:8080/ipt/resource.do?r=mvz_mammal</a>.</code> (Occurrence example)</li><li class="list-group-item"><code><a href="https://www.gbif.org/species/2439608">https://www.gbif.org/species/2439608</a> Source: GBIF Taxonomic Backbone</code> (Taxon example)</li><li class="list-group-item"><code>Rand, K.M., Logerwell, E.A. The first demersal trawl survey of benthic fish and invertebrates in the Beaufort Sea since the late 1970s. Polar Biol 34, 475–488 (2011). <a href="https://doi.org/10.1007/s00300-010-0900-2">https://doi.org/10.1007/s00300-010-0900-2</a></code> (Event example)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dcterms:references"></span>
    <span id="references"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">references</th></tr>
    <tr><td>Identifier</td><td><a href="http://purl.org/dc/terms/references">http://purl.org/dc/terms/references</a></td></tr>
    <tr><td>Definition</td><td>A related resource that is referenced, cited, or otherwise pointed to by the described resource.</td></tr>
    <tr><td>Comments</td><td>From Dublin Core, "This property is intended to be used with non-literal values. This property is an inverse property of Is Referenced By." The intended usage of this term in Darwin Core is to point to the definitive source representation of the resource (e.g.,Taxon, Occurrence, Event in Darwin Core), if one is available. Note that the intended usage of dcterms:bibliographicCitation in Darwin Core, by contrast, is to provide the preferred way to cite the resource itself.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="http://arctos.database.museum/guid/MVZ:Mamm:165861">http://arctos.database.museum/guid/MVZ:Mamm:165861</a></code> (MaterialEntity example)</li><li class="list-group-item"><code><a href="https://www.catalogueoflife.org/data/taxon/32664">https://www.catalogueoflife.org/data/taxon/32664</a></code> (Taxon example)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:institutionID"></span>
    <span id="institutionID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">institutionID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/institutionID">http://rs.tdwg.org/dwc/terms/institutionID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the institution having custody of the object(s) or information referred to in the record.</td></tr>
    <tr><td>Comments</td><td>For physical specimens, the recommended best practice is to use a globally unique and resolvable identifier from a collections registry such as the Research Organization Registry (ROR) or the Global Registry of Scientific Collections (<a href="https://www.gbif.org/grscicoll">https://www.gbif.org/grscicoll</a>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="https://ror.org/015hz7p22">https://ror.org/015hz7p22</a></code></li><li class="list-group-item"><code><a href="http://grscicoll.org/institution/museum-southwestern-biology">http://grscicoll.org/institution/museum-southwestern-biology</a></code></li><li class="list-group-item"><code><a href="https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381">https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381</a></code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:collectionID"></span>
    <span id="collectionID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">collectionID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/collectionID">http://rs.tdwg.org/dwc/terms/collectionID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the collection or dataset from which the record was derived.</td></tr>
    <tr><td>Comments</td><td>For physical specimens, the recommended best practice is to use a globally unique and resolvable identifier from a collections registry such as the Global Registry of Scientific Collections (<a href="https://www.gbif.org/grscicoll">https://www.gbif.org/grscicoll</a>).</td></tr>
    <tr><td>Examples</td><td><code><a href="https://www.gbif.org/grscicoll/collection/fbd3ed74-5a21-4e01-b86a-33d36f032d9c">https://www.gbif.org/grscicoll/collection/fbd3ed74-5a21-4e01-b86a-33d36f032d9c</a></code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:datasetID"></span>
    <span id="datasetID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">datasetID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/datasetID">http://rs.tdwg.org/dwc/terms/datasetID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the set of data. May be a global unique identifier or an identifier specific to a collection or institution.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>b15d4952-7d20-46f1-8a3e-556a512b04c5</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:institutionCode"></span>
    <span id="institutionCode"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">institutionCode</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/institutionCode">http://rs.tdwg.org/dwc/terms/institutionCode</a></td></tr>
    <tr><td>Definition</td><td>The name (or acronym) in use by the institution having custody of the object(s) or information referred to in the record.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>MVZ</code></li><li class="list-group-item"><code>FMNH</code></li><li class="list-group-item"><code>CLO</code></li><li class="list-group-item"><code>UCMP</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:collectionCode"></span>
    <span id="collectionCode"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">collectionCode</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/collectionCode">http://rs.tdwg.org/dwc/terms/collectionCode</a></td></tr>
    <tr><td>Definition</td><td>The name, acronym, coden, or initialism identifying the collection or data set from which the record was derived.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Mammals</code></li><li class="list-group-item"><code>Hildebrandt</code></li><li class="list-group-item"><code>EBIRD</code></li><li class="list-group-item"><code>VP</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:datasetName"></span>
    <span id="datasetName"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">datasetName</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/datasetName">http://rs.tdwg.org/dwc/terms/datasetName</a></td></tr>
    <tr><td>Definition</td><td>The name identifying the data set from which the record was derived.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Grinnell Resurvey Mammals</code></li><li class="list-group-item"><code>Lacey Ctenomys Recaptures</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:ownerInstitutionCode"></span>
    <span id="ownerInstitutionCode"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">ownerInstitutionCode</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/ownerInstitutionCode">http://rs.tdwg.org/dwc/terms/ownerInstitutionCode</a></td></tr>
    <tr><td>Definition</td><td>The name (or acronym) in use by the institution having ownership of the object(s) or information referred to in the record.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>NPS</code></li><li class="list-group-item"><code>APN</code></li><li class="list-group-item"><code>InBio</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:basisOfRecord"></span>
    <span id="basisOfRecord"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">basisOfRecord</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/basisOfRecord">http://rs.tdwg.org/dwc/terms/basisOfRecord</a></td></tr>
    <tr><td>Definition</td><td>The specific nature of the data record.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the set of local names of the identifiers for classes in Darwin Core.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>MaterialEntity</code></li><li class="list-group-item"><code>PreservedSpecimen</code></li><li class="list-group-item"><code>FossilSpecimen</code></li><li class="list-group-item"><code>LivingSpecimen</code></li><li class="list-group-item"><code>MaterialSample</code></li><li class="list-group-item"><code>Event</code></li><li class="list-group-item"><code>HumanObservation</code></li><li class="list-group-item"><code>MachineObservation</code></li><li class="list-group-item"><code>Taxon</code></li><li class="list-group-item"><code>Occurrence</code></li><li class="list-group-item"><code>MaterialCitation</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:informationWithheld"></span>
    <span id="informationWithheld"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">informationWithheld</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/informationWithheld">http://rs.tdwg.org/dwc/terms/informationWithheld</a></td></tr>
    <tr><td>Definition</td><td>Additional information that exists, but that has not been shared in the given record.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>location information not given for endangered species</code></li><li class="list-group-item"><code>collector identities withheld | ask about tissue samples</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:dataGeneralizations"></span>
    <span id="dataGeneralizations"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">dataGeneralizations</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/dataGeneralizations">http://rs.tdwg.org/dwc/terms/dataGeneralizations</a></td></tr>
    <tr><td>Definition</td><td>Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><code>Coordinates generalized from original GPS coordinates to the nearest half degree grid cell</code>.</td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:dynamicProperties"></span>
    <span id="dynamicProperties"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">dynamicProperties</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/dynamicProperties">http://rs.tdwg.org/dwc/terms/dynamicProperties</a></td></tr>
    <tr><td>Definition</td><td>A list of additional measurements, facts, characteristics, or assertions about the record. Meant to provide a mechanism for structured content.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a key:value encoding schema for a data interchange format such as JSON.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>{"heightInMeters":1.5}</code></li><li class="list-group-item"><code>{"targusLengthInMeters":0.014, "weightInGrams":120}</code></li><li class="list-group-item"><code>{"natureOfID":"expert identification", "identificationEvidence":"cytochrome B sequence"}</code></li><li class="list-group-item"><code>{"relativeHumidity":28, "airTemperatureInCelsius":22, "sampleSizeInKilograms":10}</code></li><li class="list-group-item"><code>{"aspectHeading":277, "slopeInDegrees":6}</code></li><li class="list-group-item"><code>{"iucnStatus":"vulnerable", "taxonDistribution":"Neuquén, Argentina"}</code></li></ul></td></tr>
  </tbody>
</table>


## Occurrence

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:occurrenceID">occurrenceID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:catalogNumber">catalogNumber</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:recordNumber">recordNumber</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:recordedBy">recordedBy</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:recordedByID">recordedByID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:individualCount">individualCount</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:organismQuantity">organismQuantity</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:organismQuantityType">organismQuantityType</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:sex">sex</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:lifeStage">lifeStage</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:reproductiveCondition">reproductiveCondition</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:caste">caste</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:behavior">behavior</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:vitality">vitality</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:establishmentMeans">establishmentMeans</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:degreeOfEstablishment">degreeOfEstablishment</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:pathway">pathway</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:georeferenceVerificationStatus">georeferenceVerificationStatus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:occurrenceStatus">occurrenceStatus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:associatedMedia">associatedMedia</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:associatedOccurrences">associatedOccurrences</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:associatedReferences">associatedReferences</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:associatedTaxa">associatedTaxa</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:otherCatalogNumbers">otherCatalogNumbers</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:occurrenceRemarks">occurrenceRemarks</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">Occurrence <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/Occurrence">http://rs.tdwg.org/dwc/terms/Occurrence</a></td></tr>
    <tr><td>Definition</td><td>An existence of a dwc:Organism at a particular place at a particular time.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>a wolf pack on the shore of Kluane Lake in 1988</code></li><li class="list-group-item"><code>a virus in a plant leaf in the New York Botanical Garden at 15:29 on 2014-10-23</code></li><li class="list-group-item"><code>a fungus in Central Park in the summer of 1929</code></li></ul></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:occurrenceID"></span>
    <span id="occurrenceID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">occurrenceID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/occurrenceID">http://rs.tdwg.org/dwc/terms/occurrenceID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the dwc:Occurrence (as opposed to a particular digital record of the dwc:Occurrence). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the dwc:occurrenceID globally unique.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a persistent, globally unique identifier.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="http://arctos.database.museum/guid/MSB:Mamm:233627">http://arctos.database.museum/guid/MSB:Mamm:233627</a></code></li><li class="list-group-item"><code>000866d2-c177-4648-a200-ead4007051b9</code></li><li class="list-group-item"><code>urn:catalog:UWBM:Bird:89776</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:catalogNumber"></span>
    <span id="catalogNumber"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">catalogNumber</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/catalogNumber">http://rs.tdwg.org/dwc/terms/catalogNumber</a></td></tr>
    <tr><td>Definition</td><td>An identifier (preferably unique) for the record within the data set or collection.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>145732</code></li><li class="list-group-item"><code>145732a</code></li><li class="list-group-item"><code>2008.1334</code></li><li class="list-group-item"><code>R-4313</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:recordNumber"></span>
    <span id="recordNumber"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">recordNumber</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/recordNumber">http://rs.tdwg.org/dwc/terms/recordNumber</a></td></tr>
    <tr><td>Definition</td><td>An identifier given to the dwc:Occurrence at the time it was recorded. Often serves as a link between field notes and a dwc:Occurrence record, such as a specimen collector's number.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><code>OPP 7101</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:recordedBy"></span>
    <span id="recordedBy"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">recordedBy</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/recordedBy">http://rs.tdwg.org/dwc/terms/recordedBy</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original dwc:Occurrence. The primary collector or observer, especially one who applies a personal identifier (dwc:recordNumber), should be listed first.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>José E. Crespo</code></li><li class="list-group-item"><code>Oliver P. Pearson | Anita K. Pearson</code> (where the value in recordNumber <code>OPP 7101</code> corresponds to the collector number for the specimen in the field catalog of Oliver P. Pearson)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:recordedByID"></span>
    <span id="recordedByID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">recordedByID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/recordedByID">http://rs.tdwg.org/dwc/terms/recordedByID</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of the globally unique identifier for the person, people, groups, or organizations responsible for recording the original dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to provide a single identifier that disambiguates the details of the identifying agent. If a list is used, it is recommended to separate the values in the list with space vertical bar space (<code> | </code>). The order of the identifiers on any list for this term can not be guaranteed to convey any semantics.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a></code> (for an individual)</li><li class="list-group-item"><code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a> | <a href="https://orcid.org/0000-0002-1825-0098">https://orcid.org/0000-0002-1825-0098</a></code> (for a list of people)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:individualCount"></span>
    <span id="individualCount"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">individualCount</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/individualCount">http://rs.tdwg.org/dwc/terms/individualCount</a></td></tr>
    <tr><td>Definition</td><td>The number of individuals present at the time of the dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>0</code></li><li class="list-group-item"><code>1</code></li><li class="list-group-item"><code>25</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:organismQuantity"></span>
    <span id="organismQuantity"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">organismQuantity</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismQuantity">http://rs.tdwg.org/dwc/terms/organismQuantity</a></td></tr>
    <tr><td>Definition</td><td>A number or enumeration value for the quantity of dwc:Organisms.</td></tr>
    <tr><td>Comments</td><td>A dwc:organismQuantity must have a corresponding dwc:organismQuantityType.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>27</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li><li class="list-group-item"><code>12.5</code> (organismQuantity) with <code>% biomass</code> (organismQuantityType)</li><li class="list-group-item"><code>r</code> (organismQuantity) with <code>Braun-Blanquet Scale</code> (organismQuantityType)</li><li class="list-group-item"><code>many</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:organismQuantityType"></span>
    <span id="organismQuantityType"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">organismQuantityType</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismQuantityType">http://rs.tdwg.org/dwc/terms/organismQuantityType</a></td></tr>
    <tr><td>Definition</td><td>The type of quantification system used for the quantity of dwc:Organisms.</td></tr>
    <tr><td>Comments</td><td>A dwc:organismQuantityType must have a corresponding dwc:organismQuantity. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>27</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li><li class="list-group-item"><code>12.5</code> (organismQuantity) with <code>% biomass</code> (organismQuantityType)</li><li class="list-group-item"><code>r</code> (organismQuantity) with <code>Braun-Blanquet Scale</code> (organismQuantityType)</li><li class="list-group-item"><code>many</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:sex"></span>
    <span id="sex"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">sex</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/sex">http://rs.tdwg.org/dwc/terms/sex</a></td></tr>
    <tr><td>Definition</td><td>The sex of the biological individual(s) represented in the dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>female</code></li><li class="list-group-item"><code>male</code></li><li class="list-group-item"><code>hermaphrodite</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:lifeStage"></span>
    <span id="lifeStage"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">lifeStage</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/lifeStage">http://rs.tdwg.org/dwc/terms/lifeStage</a></td></tr>
    <tr><td>Definition</td><td>The age class or life stage of the dwc:Organism(s) at the time the dwc:Occurrence was recorded.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>zygote</code></li><li class="list-group-item"><code>larva</code></li><li class="list-group-item"><code>juvenile</code></li><li class="list-group-item"><code>adult</code></li><li class="list-group-item"><code>seedling</code></li><li class="list-group-item"><code>flowering</code></li><li class="list-group-item"><code>fruiting</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:reproductiveCondition"></span>
    <span id="reproductiveCondition"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">reproductiveCondition</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/reproductiveCondition">http://rs.tdwg.org/dwc/terms/reproductiveCondition</a></td></tr>
    <tr><td>Definition</td><td>The reproductive condition of the biological individual(s) represented in the dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>non-reproductive</code></li><li class="list-group-item"><code>pregnant</code></li><li class="list-group-item"><code>in bloom</code></li><li class="list-group-item"><code>fruit-bearing</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:caste"></span>
    <span id="caste"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">caste</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/caste">http://rs.tdwg.org/dwc/terms/caste</a></td></tr>
    <tr><td>Definition</td><td>Categorisation of individuals for eusocial species (including some mammals and arthropods).</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary that aligns best with the dwc:Taxon. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>queen</code></li><li class="list-group-item"><code>male alate</code></li><li class="list-group-item"><code>intercaste</code></li><li class="list-group-item"><code>minor worker</code></li><li class="list-group-item"><code>soldier</code></li><li class="list-group-item"><code>ergatoid</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:behavior"></span>
    <span id="behavior"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">behavior</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/behavior">http://rs.tdwg.org/dwc/terms/behavior</a></td></tr>
    <tr><td>Definition</td><td>The behavior shown by the subject at the time the dwc:Occurrence was recorded.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>roosting</code></li><li class="list-group-item"><code>foraging</code></li><li class="list-group-item"><code>running</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:vitality"></span>
    <span id="vitality"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">vitality</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/vitality">http://rs.tdwg.org/dwc/terms/vitality</a></td></tr>
    <tr><td>Definition</td><td>An indication of whether a dwc:Organism was alive or dead at the time of collection or observation.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Intended to be used with records having a dwc:basisOfRecord of <code>PreservedSpecimen</code>, <code>MaterialEntity</code>, <code>MaterialSample</code>, or <code>HumanObservation</code>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>alive</code></li><li class="list-group-item"><code>dead</code></li><li class="list-group-item"><code>mixedLot</code></li><li class="list-group-item"><code>uncertain</code></li><li class="list-group-item"><code>notAssessed</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:establishmentMeans"></span>
    <span id="establishmentMeans"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">establishmentMeans</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/establishmentMeans">http://rs.tdwg.org/dwc/terms/establishmentMeans</a></td></tr>
    <tr><td>Definition</td><td>Statement about whether a dwc:Organism has been introduced to a given place and time through the direct or indirect activity of modern humans.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/em/">http://rs.tdwg.org/dwc/doc/em/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>native</code></li><li class="list-group-item"><code>nativeReintroduced</code></li><li class="list-group-item"><code>introduced</code></li><li class="list-group-item"><code>introducedAssistedColonisation</code></li><li class="list-group-item"><code>vagrant</code></li><li class="list-group-item"><code>uncertain</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:degreeOfEstablishment"></span>
    <span id="degreeOfEstablishment"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">degreeOfEstablishment</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/degreeOfEstablishment">http://rs.tdwg.org/dwc/terms/degreeOfEstablishment</a></td></tr>
    <tr><td>Definition</td><td>The degree to which a dwc:Organism survives, reproduces, and expands its range at the given place and time.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/doe/">http://rs.tdwg.org/dwc/doc/doe/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>native</code></li><li class="list-group-item"><code>captive</code></li><li class="list-group-item"><code>cultivated</code></li><li class="list-group-item"><code>released</code></li><li class="list-group-item"><code>failing</code></li><li class="list-group-item"><code>casual</code></li><li class="list-group-item"><code>reproducing</code></li><li class="list-group-item"><code>established</code></li><li class="list-group-item"><code>colonising</code></li><li class="list-group-item"><code>invasive</code></li><li class="list-group-item"><code>widespreadInvasive</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:pathway"></span>
    <span id="pathway"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">pathway</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/pathway">http://rs.tdwg.org/dwc/terms/pathway</a></td></tr>
    <tr><td>Definition</td><td>The process by which a dwc:Organism came to be in a given place at a given time.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/pw/">http://rs.tdwg.org/dwc/doc/pw/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>releasedForUse</code></li><li class="list-group-item"><code>otherEscape</code></li><li class="list-group-item"><code>transportContaminant</code></li><li class="list-group-item"><code>transportStowaway</code></li><li class="list-group-item"><code>corridor</code></li><li class="list-group-item"><code>unaided</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:georeferenceVerificationStatus"></span>
    <span id="georeferenceVerificationStatus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">georeferenceVerificationStatus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferenceVerificationStatus">http://rs.tdwg.org/dwc/terms/georeferenceVerificationStatus</a></td></tr>
    <tr><td>Definition</td><td>A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description for the dcterms:Location of the dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>unable to georeference</code></li><li class="list-group-item"><code>requires georeference</code></li><li class="list-group-item"><code>requires verification</code></li><li class="list-group-item"><code>verified by data custodian</code></li><li class="list-group-item"><code>verified by contributor</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:occurrenceStatus"></span>
    <span id="occurrenceStatus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">occurrenceStatus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/occurrenceStatus">http://rs.tdwg.org/dwc/terms/occurrenceStatus</a></td></tr>
    <tr><td>Definition</td><td>A statement about the presence or absence of a dwc:Taxon at a dcterms:Location.</td></tr>
    <tr><td>Comments</td><td>For dwc:Occurrences, the default vocabulary is recommended to consist of <code>present</code> and <code>absent</code>, but can be extended by implementers with good justification. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>present</code></li><li class="list-group-item"><code>absent</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:associatedMedia"></span>
    <span id="associatedMedia"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">associatedMedia</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedMedia">http://rs.tdwg.org/dwc/terms/associatedMedia</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of identifiers (publication, global unique identifier, URI) of media associated with the dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code><a href="https://arctos.database.museum/media/10520962">https://arctos.database.museum/media/10520962</a> | <a href="https://arctos.database.museum/media/10520964">https://arctos.database.museum/media/10520964</a></code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:associatedOccurrences"></span>
    <span id="associatedOccurrences"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">associatedOccurrences</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedOccurrences">http://rs.tdwg.org/dwc/terms/associatedOccurrences</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of identifiers of other dwc:Occurrence records and their associations to this dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td>This term can be used to provide a list of associations to other dwc:Occurrences. Note that the dwc:ResourceRelationship class is an alternative means of representing associations, and with more detail. Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>"parasite collected from":"<a href="https://arctos.database.museum/guid/MSB:Mamm:215895?seid=950760">https://arctos.database.museum/guid/MSB:Mamm:215895?seid=950760</a>"</code></li><li class="list-group-item"><code>"encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177394">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177394</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177392">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177392</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3609139">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3609139</a>"</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:associatedReferences"></span>
    <span id="associatedReferences"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">associatedReferences</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedReferences">http://rs.tdwg.org/dwc/terms/associatedReferences</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of identifiers (publication, bibliographic reference, global unique identifier, URI) of literature associated with the dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). Note that the dwc:ResourceRelationship class is an alternative means of representing associations, and with more detail. Note also that the intended usage of the term dcterms:references in Darwin Core when applied to a dwc:Occurrence is to point to the definitive source representation of that dwc:Occurrence if one is available. Note also that the intended usage of dcterms:bibliographicCitation in Darwin Core when applied to a dwc:Occurrence is to provide the preferred way to cite the dwc:Occurrence itself.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="http://www.sciencemag.org/cgi/content/abstract/322/5899/261">http://www.sciencemag.org/cgi/content/abstract/322/5899/261</a></code></li><li class="list-group-item"><code>Christopher J. Conroy, Jennifer L. Neuwald. 2008. Phylogeographic study of the California vole, Microtus californicus Journal of Mammalogy, 89(3):755-767.</code></li><li class="list-group-item"><code>Steven R. Hoofer and Ronald A. Van Den Bussche. 2001. Phylogenetic Relationships of Plecotine Bats and Allies Based on Mitochondrial Ribosomal Sequences. Journal of Mammalogy 82(1):131-137. | Walker, Faith M., Jeffrey T. Foster, Kevin P. Drees, Carol L. Chambers. 2014. Spotted bat (Euderma maculatum) microsatellite discovery using illumina sequencing. Conservation Genetics Resources.</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:associatedTaxa"></span>
    <span id="associatedTaxa"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">associatedTaxa</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedTaxa">http://rs.tdwg.org/dwc/terms/associatedTaxa</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of identifiers or names of dwc:Taxon records and the associations of this dwc:Occurrence to each of them.</td></tr>
    <tr><td>Comments</td><td>This term can be used to provide a list of associations to dwc:Taxon records other than the one defined in the dwc:Occurrence. Note that the dwc:ResourceRelationship class is an alternative means of representing associations, and with more detail. This term is not apt for establishing relationships between dwc:Taxon records, only between specific dwc:Occurrences of a dwc:Organism with other dwc:Taxon records. Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>"host":"Quercus alba"</code></li><li class="list-group-item"><code>"host":"gbif.org/species/2879737"</code></li><li class="list-group-item"><code>"parasitoid of":"Cyclocephala signaticollis" | "predator of":"Apis mellifera"</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:otherCatalogNumbers"></span>
    <span id="otherCatalogNumbers"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">otherCatalogNumbers</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/otherCatalogNumbers">http://rs.tdwg.org/dwc/terms/otherCatalogNumbers</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of previous or alternate fully qualified catalog numbers or other human-used identifiers for the same dwc:Occurrence, whether in the current or any other data set or collection.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>FMNH:Mammal:1234</code></li><li class="list-group-item"><code>NPS YELLO6778 | MBG 33424</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:occurrenceRemarks"></span>
    <span id="occurrenceRemarks"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">occurrenceRemarks</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/occurrenceRemarks">http://rs.tdwg.org/dwc/terms/occurrenceRemarks</a></td></tr>
    <tr><td>Definition</td><td>Comments or notes about the dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>found dead on road</code></td></tr>
  </tbody>
</table>


## Organism

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:organismID">organismID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:organismName">organismName</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:organismScope">organismScope</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:associatedOrganisms">associatedOrganisms</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:previousIdentifications">previousIdentifications</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:organismRemarks">organismRemarks</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">Organism <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/Organism">http://rs.tdwg.org/dwc/terms/Organism</a></td></tr>
    <tr><td>Definition</td><td>A particular organism or defined group of organisms considered to be taxonomically homogeneous.</td></tr>
    <tr><td>Comments</td><td>Instances of the dwc:Organism class are intended to facilitate linking one or more dwc:Identification instances to one or more dwc:Occurrence instances. Therefore, things that are typically assigned scientific names (such as viruses, hybrids, and lichens) and aggregates whose dwc:Occurrences are typically recorded (such as packs, clones, and colonies) are included in the scope of this class.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>a specific bird</code></li><li class="list-group-item"><code>a specific wolf pack</code></li><li class="list-group-item"><code>a specific instance of a bacterial culture</code></li></ul></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:organismID"></span>
    <span id="organismID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">organismID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismID">http://rs.tdwg.org/dwc/terms/organismID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the dwc:Organism instance (as opposed to a particular digital record of the dwc:Organism). May be a globally unique identifier or an identifier specific to the data set.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code><a href="http://arctos.database.museum/guid/WNMU:Mamm:1249">http://arctos.database.museum/guid/WNMU:Mamm:1249</a></code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:organismName"></span>
    <span id="organismName"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">organismName</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismName">http://rs.tdwg.org/dwc/terms/organismName</a></td></tr>
    <tr><td>Definition</td><td>A textual name or label assigned to a dwc:Organism instance.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Huberta</code></li><li class="list-group-item"><code>Boab Prison Tree</code></li><li class="list-group-item"><code>J pod</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:organismScope"></span>
    <span id="organismScope"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">organismScope</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismScope">http://rs.tdwg.org/dwc/terms/organismScope</a></td></tr>
    <tr><td>Definition</td><td>A description of the kind of dwc:Organism instance. Can be used to indicate whether the dwc:Organism instance represents a discrete organism or if it represents a particular type of aggregation.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. This term is not intended to be used to specify a type of dwc:Taxon. To describe the kind of dwc:Organism using a URI object in RDF, use rdf:type (<a href="http://www.w3.org/1999/02/22-rdf-syntax-ns#type">http://www.w3.org/1999/02/22-rdf-syntax-ns#type</a>) instead.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>multicellular organism</code></li><li class="list-group-item"><code>virus</code></li><li class="list-group-item"><code>clone</code></li><li class="list-group-item"><code>pack</code></li><li class="list-group-item"><code>colony</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:associatedOrganisms"></span>
    <span id="associatedOrganisms"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">associatedOrganisms</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedOrganisms">http://rs.tdwg.org/dwc/terms/associatedOrganisms</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of identifiers of other dwc:Organisms and the associations of this dwc:Organism to each of them.</td></tr>
    <tr><td>Comments</td><td>This term can be used to provide a list of associations to other dwc:Organisms. Note that the dwc:ResourceRelationship class is an alternative means of representing associations, and with more detail. Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>"sibling of":"<a href="http://arctos.database.museum/guid/DMNS:Mamm:14171">http://arctos.database.museum/guid/DMNS:Mamm:14171</a>"</code></li><li class="list-group-item"><code>"parent of":"<a href="http://arctos.database.museum/guid/MSB:Mamm:196208">http://arctos.database.museum/guid/MSB:Mamm:196208</a>" | "parent of":"<a href="http://arctos.database.museum/guid/MSB:Mamm:196523">http://arctos.database.museum/guid/MSB:Mamm:196523</a>" | "sibling of":"<a href="http://arctos.database.museum/guid/MSB:Mamm:142638">http://arctos.database.museum/guid/MSB:Mamm:142638</a>"</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:previousIdentifications"></span>
    <span id="previousIdentifications"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">previousIdentifications</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/previousIdentifications">http://rs.tdwg.org/dwc/terms/previousIdentifications</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of previous assignments of names to the dwc:Organism.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Chalepidae</code></li><li class="list-group-item"><code>Pinus abies</code></li><li class="list-group-item"><code>Anthus sp., field ID by G. Iglesias | Anthus correndera, expert ID by C. Cicero 2009-02-12 based on morphology</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:organismRemarks"></span>
    <span id="organismRemarks"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">organismRemarks</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismRemarks">http://rs.tdwg.org/dwc/terms/organismRemarks</a></td></tr>
    <tr><td>Definition</td><td>Comments or notes about the dwc:Organism instance.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>One of a litter of six</code></td></tr>
  </tbody>
</table>


## MaterialEntity

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:materialEntityID">materialEntityID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:preparations">preparations</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:disposition">disposition</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimLabel">verbatimLabel</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:associatedSequences">associatedSequences</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:materialEntityRemarks">materialEntityRemarks</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">MaterialEntity <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/MaterialEntity">http://rs.tdwg.org/dwc/terms/MaterialEntity</a></td></tr>
    <tr><td>Definition</td><td>An entity that can be identified, exists for some period of time, and consists in whole or in part of physical matter while it exists.</td></tr>
    <tr><td>Comments</td><td>The term is defined at the most general level to admit descriptions of any subtype of material entity within the scope of Darwin Core. In particular, any kind of material sample, preserved specimen, fossil, or exemplar from living collections is intended to be subsumed under this term.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>an instance of a fossil</code></li><li class="list-group-item"><code>an instance of a herbarium sheet with its attached plant specimen</code></li><li class="list-group-item"><code>a particular part of the plant-derived material affixed to a herbarium sheet</code></li><li class="list-group-item"><code>an instance of a frozen tissue sample</code></li><li class="list-group-item"><code>a specific water sample</code></li><li class="list-group-item"><code>an instance of a meteorite fragment</code></li><li class="list-group-item"><code>a particular wolf in a zoo</code></li><li class="list-group-item"><code>a particular pack of wolves in the wild</code></li><li class="list-group-item"><code>an isolated molecule of DNA</code></li><li class="list-group-item"><code>a specific deep-frozen DNA sample</code></li><li class="list-group-item"><code>a particular field notebook</code></li><li class="list-group-item"><code>a particular paper page from a field notebook</code></li><li class="list-group-item"><code>an instance of a printed photograph</code></li></ul></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:materialEntityID"></span>
    <span id="materialEntityID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">materialEntityID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/materialEntityID">http://rs.tdwg.org/dwc/terms/materialEntityID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for a particular instance of a dwc:MaterialEntity.</td></tr>
    <tr><td>Comments</td><td>Values of dwc:materialEntityID are intended to uniquely and persistently identify a particular dwc:MaterialEntity within some context. Examples of context include a particular sample collection, an organization, or the worldwide scale. Recommended best practice is to use a persistent, globally unique identifier. The identifier is bound to a physical object (the dwc:MaterialEntity) as opposed to a particular digital record (representation) of that physical object.</td></tr>
    <tr><td>Examples</td><td><code>06809dc5-f143-459a-be1a-6f03e63fc083</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:preparations"></span>
    <span id="preparations"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">preparations</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/preparations">http://rs.tdwg.org/dwc/terms/preparations</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of preparations and preservation methods for a dwc:MaterialEntity.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>fossil</code></li><li class="list-group-item"><code>cast</code></li><li class="list-group-item"><code>photograph</code></li><li class="list-group-item"><code>DNA extract</code></li><li class="list-group-item"><code>skin | skull | skeleton</code></li><li class="list-group-item"><code>whole animal (ETOH) | tissue (EDTA)</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:disposition"></span>
    <span id="disposition"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">disposition</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/disposition">http://rs.tdwg.org/dwc/terms/disposition</a></td></tr>
    <tr><td>Definition</td><td>The current state of a dwc:MaterialEntity with respect to a collection.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>in collection</code></li><li class="list-group-item"><code>missing</code></li><li class="list-group-item"><code>on loan</code></li><li class="list-group-item"><code>used up</code></li><li class="list-group-item"><code>destroyed</code></li><li class="list-group-item"><code>deaccessioned</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimLabel"></span>
    <span id="verbatimLabel"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimLabel</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimLabel">http://rs.tdwg.org/dwc/terms/verbatimLabel</a></td></tr>
    <tr><td>Definition</td><td>The content of this term should include no embellishments, prefixes, headers or other additions made to the text. Abbreviations must not be expanded and supposed misspellings must not be corrected. Lines or breakpoints between blocks of text that could be verified by seeing the original labels or images of them may be used. Examples of material entities include preserved specimens, fossil specimens, and material samples. Best practice is to use UTF-8 for all characters. Best practice is to add comment “verbatimLabel derived from human transcription” in dwc:occurrenceRemarks.</td></tr>
    <tr><td>Comments</td><td>Examples can be found at <a href="https://dwc.tdwg.org/examples/verbatimLabel">https://dwc.tdwg.org/examples/verbatimLabel</a>.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:associatedSequences"></span>
    <span id="associatedSequences"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">associatedSequences</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedSequences">http://rs.tdwg.org/dwc/terms/associatedSequences</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of identifiers (publication, global unique identifier, URI) of genetic sequence information associated with the dwc:MaterialEntity.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="http://www.ncbi.nlm.nih.gov/nuccore/U34853.1">http://www.ncbi.nlm.nih.gov/nuccore/U34853.1</a></code></li><li class="list-group-item"><code><a href="http://www.ncbi.nlm.nih.gov/nuccore/GU328060">http://www.ncbi.nlm.nih.gov/nuccore/GU328060</a> | <a href="http://www.ncbi.nlm.nih.gov/nuccore/AF326093">http://www.ncbi.nlm.nih.gov/nuccore/AF326093</a></code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:materialEntityRemarks"></span>
    <span id="materialEntityRemarks"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">materialEntityRemarks</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/materialEntityRemarks">http://rs.tdwg.org/dwc/terms/materialEntityRemarks</a></td></tr>
    <tr><td>Definition</td><td>Comments or notes about the dwc:MaterialEntity instance.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>found in association with charred remains</code></li><li class="list-group-item"><code>some original fragments missing</code></li></ul></td></tr>
  </tbody>
</table>


## MaterialSample

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:materialSampleID">materialSampleID</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">MaterialSample <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/MaterialSample">http://rs.tdwg.org/dwc/terms/MaterialSample</a></td></tr>
    <tr><td>Definition</td><td>A material entity that represents an entity of interest in whole or in part.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>a whole organism preserved in a collection</code></li><li class="list-group-item"><code>a part of an organism isolated for some purpose</code></li><li class="list-group-item"><code>a soil sample</code></li><li class="list-group-item"><code>a marine microbial sample</code></li></ul></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:materialSampleID"></span>
    <span id="materialSampleID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">materialSampleID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/materialSampleID">http://rs.tdwg.org/dwc/terms/materialSampleID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the dwc:MaterialSample (as opposed to a particular digital record of the dwc:MaterialSample). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the dwc:materialSampleID globally unique.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a persistent, globally unique identifier.</td></tr>
    <tr><td>Examples</td><td><code>06809dc5-f143-459a-be1a-6f03e63fc083</code></td></tr>
  </tbody>
</table>


## Event

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:eventID">eventID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:parentEventID">parentEventID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:eventType">eventType</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:fieldNumber">fieldNumber</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:eventDate">eventDate</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:eventTime">eventTime</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:startDayOfYear">startDayOfYear</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:endDayOfYear">endDayOfYear</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:year">year</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:month">month</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:day">day</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimEventDate">verbatimEventDate</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:habitat">habitat</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:samplingProtocol">samplingProtocol</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:sampleSizeValue">sampleSizeValue</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:sampleSizeUnit">sampleSizeUnit</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:samplingEffort">samplingEffort</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:fieldNotes">fieldNotes</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:eventRemarks">eventRemarks</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">Event <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/Event">http://rs.tdwg.org/dwc/terms/Event</a></td></tr>
    <tr><td>Definition</td><td>An action that occurs at some location during some time.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>a specimen collecting event</code></li><li class="list-group-item"><code>a camera trap image capture</code></li><li class="list-group-item"> <code>a marine trawl</code></li></ul></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:eventID"></span>
    <span id="eventID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">eventID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/eventID">http://rs.tdwg.org/dwc/terms/eventID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the set of information associated with a dwc:Event (something that occurs at a place and time). May be a global unique identifier or an identifier specific to the data set.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>INBO:VIS:Ev:00009375</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:parentEventID"></span>
    <span id="parentEventID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">parentEventID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/parentEventID">http://rs.tdwg.org/dwc/terms/parentEventID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the broader dwc:Event that groups this and potentially other dwc:Events.</td></tr>
    <tr><td>Comments</td><td>Use a globally unique identifier for a dwc:Event or an identifier for a dwc:Event that is specific to the data set.</td></tr>
    <tr><td>Examples</td><td><code>A1</code> (parentEventID to identify the main Whittaker Plot in nested samples, each with its own eventID - <code>A1:1</code>, <code>A1:2</code>).</td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:eventType"></span>
    <span id="eventType"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">eventType</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/eventType">http://rs.tdwg.org/dwc/terms/eventType</a></td></tr>
    <tr><td>Definition</td><td>The nature of the dwc:Event.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Regardless of the dwc:eventType, the interval of the dwc:Event can be captured in dwc:eventDate. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Sample</code></li><li class="list-group-item"><code>Observation</code></li><li class="list-group-item"><code>Site Visit</code></li><li class="list-group-item"><code>Biotic Interaction</code></li><li class="list-group-item"><code>Bioblitz</code></li><li class="list-group-item"><code>Expedition</code></li><li class="list-group-item"><code>Survey</code></li><li class="list-group-item"><code>Project</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:fieldNumber"></span>
    <span id="fieldNumber"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">fieldNumber</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/fieldNumber">http://rs.tdwg.org/dwc/terms/fieldNumber</a></td></tr>
    <tr><td>Definition</td><td>An identifier given to the dwc:Event in the field. Often serves as a link between field notes and the dwc:Event.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><code>RV Sol 87-03-08</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:eventDate"></span>
    <span id="eventDate"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">eventDate</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/eventDate">http://rs.tdwg.org/dwc/terms/eventDate</a></td></tr>
    <tr><td>Definition</td><td>The date-time or interval during which a dwc:Event occurred. For occurrences, this is the date-time when the dwc:Event was recorded. Not suitable for a time in a geological context.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li><li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li><li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li><li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li><li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li><li class="list-group-item"><code>1971</code> (some time in the year 1971)</li><li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li><li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li><li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:eventTime"></span>
    <span id="eventTime"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">eventTime</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/eventTime">http://rs.tdwg.org/dwc/terms/eventTime</a></td></tr>
    <tr><td>Definition</td><td>The time or interval during which a dwc:Event occurred.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a time of day that conforms to ISO 8601-1:2019.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>14:07-0600</code> (2:07pm in the time zone six hours earlier than UTC)</li><li class="list-group-item"><code>08:40:21Z</code> (8:40:21am UTC)</li><li class="list-group-item"><code>13:00:00Z/15:30:00Z</code> (the interval between 1pm UTC and 3:30pm UTC)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:startDayOfYear"></span>
    <span id="startDayOfYear"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">startDayOfYear</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/startDayOfYear">http://rs.tdwg.org/dwc/terms/startDayOfYear</a></td></tr>
    <tr><td>Definition</td><td>The earliest integer day of the year on which the dwc:Event occurred (1 for January 1, 365 for December 31, except in a leap year, in which case it is 366).</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1</code> (1 January)</li><li class="list-group-item"><code>366</code> (31 December)</li><li class="list-group-item"><code>365</code> (30 December in a leap year, 31 December in a non-leap year)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:endDayOfYear"></span>
    <span id="endDayOfYear"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">endDayOfYear</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/endDayOfYear">http://rs.tdwg.org/dwc/terms/endDayOfYear</a></td></tr>
    <tr><td>Definition</td><td>The latest integer day of the year on which the dwc:Event occurred (1 for January 1, 365 for December 31, except in a leap year, in which case it is 366).</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1</code> (1 January)</li><li class="list-group-item"><code>32</code> (1 February)</li><li class="list-group-item"><code>366</code> (31 December)</li><li class="list-group-item"><code>365</code> (30 December in a leap year, 31 December in a non-leap year)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:year"></span>
    <span id="year"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">year</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/year">http://rs.tdwg.org/dwc/terms/year</a></td></tr>
    <tr><td>Definition</td><td>The four-digit year in which the dwc:Event occurred, according to the Common Era Calendar.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1160</code></li><li class="list-group-item"><code>2008</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:month"></span>
    <span id="month"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">month</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/month">http://rs.tdwg.org/dwc/terms/month</a></td></tr>
    <tr><td>Definition</td><td>The integer month in which the dwc:Event occurred.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1</code> (January)</li><li class="list-group-item"><code>10</code> (October)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:day"></span>
    <span id="day"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">day</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/day">http://rs.tdwg.org/dwc/terms/day</a></td></tr>
    <tr><td>Definition</td><td>The integer day of the month on which the dwc:Event occurred.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>9</code></li><li class="list-group-item"><code>28</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimEventDate"></span>
    <span id="verbatimEventDate"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimEventDate</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimEventDate">http://rs.tdwg.org/dwc/terms/verbatimEventDate</a></td></tr>
    <tr><td>Definition</td><td>The verbatim original representation of the date and time information for a dwc:Event.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>spring 1910</code></li><li class="list-group-item"><code>Marzo 2002</code></li><li class="list-group-item"><code>1999-03-XX</code></li><li class="list-group-item"><code>17IV1934</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:habitat"></span>
    <span id="habitat"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">habitat</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/habitat">http://rs.tdwg.org/dwc/terms/habitat</a></td></tr>
    <tr><td>Definition</td><td>A category or description of the habitat in which the dwc:Event occurred.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>oak savanna</code></li><li class="list-group-item"><code>pre-cordilleran steppe</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:samplingProtocol"></span>
    <span id="samplingProtocol"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">samplingProtocol</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/samplingProtocol">http://rs.tdwg.org/dwc/terms/samplingProtocol</a></td></tr>
    <tr><td>Definition</td><td>The names of, references to, or descriptions of the methods or protocols used during a dwc:Event.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is describe a dwc:Event with no more than one sampling protocol. In the case of a summary Event with multiple protocols, in which a specific protocol can not be attributed to specific dwc:Occurrences, the recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>UV light trap</code></li><li class="list-group-item"><code>mist net</code></li><li class="list-group-item"><code>bottom trawl</code></li><li class="list-group-item"><code>ad hoc observation | point count</code></li><li class="list-group-item"><code>Penguins from space: faecal stains reveal the location of emperor penguin colonies, <a href="https://doi.org/10.1111/j.1466-8238.2009.00467.x">https://doi.org/10.1111/j.1466-8238.2009.00467.x</a></code></li><li class="list-group-item"><code>Takats et al. 2001. Guidelines for Nocturnal Owl Monitoring in North America. Beaverhill Bird Observatory and Bird Studies Canada, Edmonton, Alberta. 32 pp., <a href="http://www.bsc-eoc.org/download/Owl.pdf">http://www.bsc-eoc.org/download/Owl.pdf</a></code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:sampleSizeValue"></span>
    <span id="sampleSizeValue"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">sampleSizeValue</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/sampleSizeValue">http://rs.tdwg.org/dwc/terms/sampleSizeValue</a></td></tr>
    <tr><td>Definition</td><td>A numeric value for a measurement of the size (time duration, length, area, or volume) of a sample in a sampling dwc:Event.</td></tr>
    <tr><td>Comments</td><td>A dwc:sampleSizeValue must have a corresponding dwc:sampleSizeUnit.</td></tr>
    <tr><td>Examples</td><td><code>5</code> (sampleSizeValue) with <code>metre</code> (sampleSizeUnit)</td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:sampleSizeUnit"></span>
    <span id="sampleSizeUnit"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">sampleSizeUnit</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/sampleSizeUnit">http://rs.tdwg.org/dwc/terms/sampleSizeUnit</a></td></tr>
    <tr><td>Definition</td><td>The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling dwc:Event.</td></tr>
    <tr><td>Comments</td><td>A dwc:sampleSizeUnit must have a corresponding dwc:sampleSizeValue, e.g., <code>5</code> for dwc:sampleSizeValue with <code>m</code> for dwc:sampleSizeUnit. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>minute</code></li><li class="list-group-item"><code>hour</code></li><li class="list-group-item"><code>day</code></li><li class="list-group-item"><code>metre</code></li><li class="list-group-item"><code>square metre</code></li><li class="list-group-item"><code>cubic metre</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:samplingEffort"></span>
    <span id="samplingEffort"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">samplingEffort</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/samplingEffort">http://rs.tdwg.org/dwc/terms/samplingEffort</a></td></tr>
    <tr><td>Definition</td><td>The amount of effort expended during a dwc:Event.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>40 trap-nights</code></li><li class="list-group-item"><code>10 observer-hours</code></li><li class="list-group-item"><code>10 km by foot</code></li><li class="list-group-item"><code>30 km by car</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:fieldNotes"></span>
    <span id="fieldNotes"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">fieldNotes</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/fieldNotes">http://rs.tdwg.org/dwc/terms/fieldNotes</a></td></tr>
    <tr><td>Definition</td><td>One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the dwc:Event.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><code>Notes available in the Grinnell-Miller Library.</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:eventRemarks"></span>
    <span id="eventRemarks"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">eventRemarks</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/eventRemarks">http://rs.tdwg.org/dwc/terms/eventRemarks</a></td></tr>
    <tr><td>Definition</td><td>Comments or notes about the dwc:Event.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>After the recent rains the river is nearly at flood stage.</code></td></tr>
  </tbody>
</table>


## Location

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:locationID">locationID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:higherGeographyID">higherGeographyID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:higherGeography">higherGeography</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:continent">continent</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:waterBody">waterBody</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:islandGroup">islandGroup</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:island">island</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:country">country</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:countryCode">countryCode</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:stateProvince">stateProvince</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:county">county</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:municipality">municipality</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:locality">locality</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimLocality">verbatimLocality</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:minimumElevationInMeters">minimumElevationInMeters</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:maximumElevationInMeters">maximumElevationInMeters</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimElevation">verbatimElevation</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verticalDatum">verticalDatum</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:minimumDepthInMeters">minimumDepthInMeters</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:maximumDepthInMeters">maximumDepthInMeters</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimDepth">verbatimDepth</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:minimumDistanceAboveSurfaceInMeters">minimumDistanceAboveSurfaceInMeters</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:maximumDistanceAboveSurfaceInMeters">maximumDistanceAboveSurfaceInMeters</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:locationAccordingTo">locationAccordingTo</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:locationRemarks">locationRemarks</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:decimalLatitude">decimalLatitude</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:decimalLongitude">decimalLongitude</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:geodeticDatum">geodeticDatum</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:coordinateUncertaintyInMeters">coordinateUncertaintyInMeters</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:coordinatePrecision">coordinatePrecision</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:pointRadiusSpatialFit">pointRadiusSpatialFit</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimCoordinates">verbatimCoordinates</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimLatitude">verbatimLatitude</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimLongitude">verbatimLongitude</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimCoordinateSystem">verbatimCoordinateSystem</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimSRS">verbatimSRS</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:footprintWKT">footprintWKT</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:footprintSRS">footprintSRS</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:footprintSpatialFit">footprintSpatialFit</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:georeferencedBy">georeferencedBy</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:georeferencedDate">georeferencedDate</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:georeferenceProtocol">georeferenceProtocol</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:georeferenceSources">georeferenceSources</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:georeferenceRemarks">georeferenceRemarks</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">Location <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://purl.org/dc/terms/Location">http://purl.org/dc/terms/Location</a></td></tr>
    <tr><td>Definition</td><td>A spatial region or named place.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>the municipality of San Carlos de Bariloche, Río Negro, Argentina</code></li><li class="list-group-item"><code>the place defined by a georeference</code></li></ul></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:locationID"></span>
    <span id="locationID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">locationID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/locationID">http://rs.tdwg.org/dwc/terms/locationID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the set of dcterms:Location information. May be a global unique identifier or an identifier specific to the data set.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code><a href="https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1">https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1</a></code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:higherGeographyID"></span>
    <span id="higherGeographyID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">higherGeographyID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/higherGeographyID">http://rs.tdwg.org/dwc/terms/higherGeographyID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the geographic region within which the dcterms:Location occurred.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a persistent identifier from a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
    <tr><td>Examples</td><td><code><a href="http://vocab.getty.edu/tgn/1002002">http://vocab.getty.edu/tgn/1002002</a></code> (Antártida e Islas del Atlántico Sur, Territorio Nacional de la Tierra del Fuego, Argentina).</td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:higherGeography"></span>
    <span id="higherGeography"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">higherGeography</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/higherGeography">http://rs.tdwg.org/dwc/terms/higherGeography</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of geographic names less specific than the information captured in the dwc:locality term.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>), with terms in order from least specific to most specific.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>North Atlantic Ocean</code></li><li class="list-group-item"><code>South America | Argentina | Patagonia | Parque Nacional Nahuel Huapi | Neuquén | Los Lagos</code> with accompanying values <code>South America</code> (continent) <code>Argentina</code> (country), <code>Neuquén</code> (first order division), and <code>Los Lagos</code> (second order division)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:continent"></span>
    <span id="continent"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">continent</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/continent">http://rs.tdwg.org/dwc/terms/continent</a></td></tr>
    <tr><td>Definition</td><td>The name of the continent in which the dcterms:Location occurs.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Africa</code></li><li class="list-group-item"><code>Antarctica</code></li><li class="list-group-item"><code>Asia</code></li><li class="list-group-item"><code>Europe</code></li><li class="list-group-item"><code>North America</code></li><li class="list-group-item"><code>Oceania</code></li><li class="list-group-item"><code>South America</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:waterBody"></span>
    <span id="waterBody"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">waterBody</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/waterBody">http://rs.tdwg.org/dwc/terms/waterBody</a></td></tr>
    <tr><td>Definition</td><td>The name of the water body in which the dcterms:Location occurs.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Indian Ocean</code></li><li class="list-group-item"><code>Baltic Sea</code></li><li class="list-group-item"><code>Hudson River</code></li><li class="list-group-item"><code>Lago Nahuel Huapi</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:islandGroup"></span>
    <span id="islandGroup"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">islandGroup</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/islandGroup">http://rs.tdwg.org/dwc/terms/islandGroup</a></td></tr>
    <tr><td>Definition</td><td>The name of the island group in which the dcterms:Location occurs.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Alexander Archipelago</code></li><li class="list-group-item"><code>Archipiélago Diego Ramírez</code></li><li class="list-group-item"><code>Seychelles</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:island"></span>
    <span id="island"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">island</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/island">http://rs.tdwg.org/dwc/terms/island</a></td></tr>
    <tr><td>Definition</td><td>The name of the island on or near which the dcterms:Location occurs.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Nosy Be</code></li><li class="list-group-item"><code>Bikini Atoll</code></li><li class="list-group-item"><code>Vancouver</code></li><li class="list-group-item"><code>Viti Levu</code></li><li class="list-group-item"><code>Zanzibar</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:country"></span>
    <span id="country"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">country</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/country">http://rs.tdwg.org/dwc/terms/country</a></td></tr>
    <tr><td>Definition</td><td>The name of the country or major administrative unit in which the dcterms:Location occurs.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Denmark</code></li><li class="list-group-item"><code>Colombia</code></li><li class="list-group-item"><code>España</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:countryCode"></span>
    <span id="countryCode"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">countryCode</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/countryCode">http://rs.tdwg.org/dwc/terms/countryCode</a></td></tr>
    <tr><td>Definition</td><td>The standard code for the country in which the dcterms:Location occurs.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use an ISO 3166-1-alpha-2 country code. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>AR</code></li><li class="list-group-item"><code>SV</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:stateProvince"></span>
    <span id="stateProvince"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">stateProvince</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/stateProvince">http://rs.tdwg.org/dwc/terms/stateProvince</a></td></tr>
    <tr><td>Definition</td><td>The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the dcterms:Location occurs.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Montana</code></li><li class="list-group-item"><code>Minas Gerais</code></li><li class="list-group-item"><code>Córdoba</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:county"></span>
    <span id="county"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">county</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/county">http://rs.tdwg.org/dwc/terms/county</a></td></tr>
    <tr><td>Definition</td><td>The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the dcterms:Location occurs.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Missoula</code></li><li class="list-group-item"><code>Los Lagos</code></li><li class="list-group-item"><code>Mataró</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:municipality"></span>
    <span id="municipality"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">municipality</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/municipality">http://rs.tdwg.org/dwc/terms/municipality</a></td></tr>
    <tr><td>Definition</td><td>The full, unabbreviated name of the next smaller administrative region than county (city, municipality, etc.) in which the dcterms:Location occurs. Do not use this term for a nearby named place that does not contain the actual dcterms:Location.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Holzminden</code></li><li class="list-group-item"><code>Araçatuba</code></li><li class="list-group-item"><code>Ga-Segonyana</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:locality"></span>
    <span id="locality"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">locality</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/locality">http://rs.tdwg.org/dwc/terms/locality</a></td></tr>
    <tr><td>Definition</td><td>The specific description of the place.</td></tr>
    <tr><td>Comments</td><td>Less specific geographic information can be provided in other geographic terms (dwc:higherGeography, dwc:continent, dwc:country, dwc:stateProvince, dwc:county, dwc:municipality, dwc:waterBody, dwc:island, dwc:islandGroup). This term may contain information modified from the original to correct perceived errors or standardize the description.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Bariloche, 25 km NNE via Ruta Nacional 40 (=Ruta 237)</code></li><li class="list-group-item"><code>Queets Rainforest, Olympic National Park</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimLocality"></span>
    <span id="verbatimLocality"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimLocality</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimLocality">http://rs.tdwg.org/dwc/terms/verbatimLocality</a></td></tr>
    <tr><td>Definition</td><td>The original textual description of the place.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>25 km NNE Bariloche por R. Nac. 237</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:minimumElevationInMeters"></span>
    <span id="minimumElevationInMeters"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">minimumElevationInMeters</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/minimumElevationInMeters">http://rs.tdwg.org/dwc/terms/minimumElevationInMeters</a></td></tr>
    <tr><td>Definition</td><td>The lower limit of the range of elevation (altitude, usually above sea level), in meters.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>-100</code></li><li class="list-group-item"><code>802</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:maximumElevationInMeters"></span>
    <span id="maximumElevationInMeters"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">maximumElevationInMeters</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/maximumElevationInMeters">http://rs.tdwg.org/dwc/terms/maximumElevationInMeters</a></td></tr>
    <tr><td>Definition</td><td>The upper limit of the range of elevation (altitude, usually above sea level), in meters.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>-205</code></li><li class="list-group-item"><code>1236</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimElevation"></span>
    <span id="verbatimElevation"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimElevation</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimElevation">http://rs.tdwg.org/dwc/terms/verbatimElevation</a></td></tr>
    <tr><td>Definition</td><td>The original description of the elevation (altitude, usually above sea level) of the Location.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>100-200 m</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verticalDatum"></span>
    <span id="verticalDatum"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verticalDatum</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verticalDatum">http://rs.tdwg.org/dwc/terms/verticalDatum</a></td></tr>
    <tr><td>Definition</td><td>The vertical datum used as the reference upon which the values in the elevation terms are based.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>EGM84</code></li><li class="list-group-item"><code>EGM96</code></li><li class="list-group-item"><code>EGM2008</code></li><li class="list-group-item"><code>PGM2000A</code></li><li class="list-group-item"><code>PGM2004</code></li><li class="list-group-item"><code>PGM2006</code></li><li class="list-group-item"><code>PGM2007</code></li><li class="list-group-item"><code>epsg:7030</code></li><li class="list-group-item"><code>unknown</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:minimumDepthInMeters"></span>
    <span id="minimumDepthInMeters"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">minimumDepthInMeters</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/minimumDepthInMeters">http://rs.tdwg.org/dwc/terms/minimumDepthInMeters</a></td></tr>
    <tr><td>Definition</td><td>The lesser depth of a range of depth below the local surface, in meters.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>0</code></li><li class="list-group-item"><code>100</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:maximumDepthInMeters"></span>
    <span id="maximumDepthInMeters"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">maximumDepthInMeters</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/maximumDepthInMeters">http://rs.tdwg.org/dwc/terms/maximumDepthInMeters</a></td></tr>
    <tr><td>Definition</td><td>The greater depth of a range of depth below the local surface, in meters.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>0</code></li><li class="list-group-item"><code>200</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimDepth"></span>
    <span id="verbatimDepth"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimDepth</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimDepth">http://rs.tdwg.org/dwc/terms/verbatimDepth</a></td></tr>
    <tr><td>Definition</td><td>The original description of the depth below the local surface.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>100-200 m</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:minimumDistanceAboveSurfaceInMeters"></span>
    <span id="minimumDistanceAboveSurfaceInMeters"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">minimumDistanceAboveSurfaceInMeters</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/minimumDistanceAboveSurfaceInMeters">http://rs.tdwg.org/dwc/terms/minimumDistanceAboveSurfaceInMeters</a></td></tr>
    <tr><td>Definition</td><td>The lesser distance in a range of distance from a reference surface in the vertical direction, in meters. Use positive values for locations above the surface, negative values for locations below. If depth measures are given, the reference surface is the location given by the depth, otherwise the reference surface is the location given by the elevation.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>-1.5</code> (below the surface)</li><li class="list-group-item"><code>4.2</code> (above the surface)</li><li class="list-group-item">For a 1.5 meter sediment core from the bottom of a lake (at depth 20m) at 300m elevation: verbatimElevation: <code>300m</code> minimumElevationInMeters: <code>300</code>, maximumElevationInMeters: <code>300</code>, verbatimDepth: <code>20m</code>, minimumDepthInMeters: <code>20</code>, maximumDepthInMeters: <code>20</code>, minimumDistanceAboveSurfaceInMeters: <code>0</code>, maximumDistanceAboveSurfaceInMeters: <code>-1.5</code>.</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:maximumDistanceAboveSurfaceInMeters"></span>
    <span id="maximumDistanceAboveSurfaceInMeters"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">maximumDistanceAboveSurfaceInMeters</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/maximumDistanceAboveSurfaceInMeters">http://rs.tdwg.org/dwc/terms/maximumDistanceAboveSurfaceInMeters</a></td></tr>
    <tr><td>Definition</td><td>The greater distance in a range of distance from a reference surface in the vertical direction, in meters. Use positive values for locations above the surface, negative values for locations below. If depth measures are given, the reference surface is the location given by the depth, otherwise the reference surface is the location given by the elevation.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>-1.5</code> (below the surface)</li><li class="list-group-item"><code>4.2</code> (above the surface)</li><li class="list-group-item">For a 1.5 meter sediment core from the bottom of a lake (at depth 20m) at 300m elevation: verbatimElevation: <code>300m</code> minimumElevationInMeters: <code>300</code>, maximumElevationInMeters: <code>300</code>, verbatimDepth: <code>20m</code>, minimumDepthInMeters: <code>20</code>, maximumDepthInMeters: <code>20</code>, minimumDistanceAboveSurfaceInMeters: <code>0</code>, maximumDistanceAboveSurfaceInMeters: <code>-1.5</code>.</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:locationAccordingTo"></span>
    <span id="locationAccordingTo"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">locationAccordingTo</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/locationAccordingTo">http://rs.tdwg.org/dwc/terms/locationAccordingTo</a></td></tr>
    <tr><td>Definition</td><td>Information about the source of this dcterms:Location information. Could be a publication (gazetteer), institution, or team of individuals.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Getty Thesaurus of Geographic Names</code></li><li class="list-group-item"><code>GADM</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:locationRemarks"></span>
    <span id="locationRemarks"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">locationRemarks</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/locationRemarks">http://rs.tdwg.org/dwc/terms/locationRemarks</a></td></tr>
    <tr><td>Definition</td><td>Comments or notes about the dcterms:Location.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>under water since 2005</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:decimalLatitude"></span>
    <span id="decimalLatitude"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">decimalLatitude</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/decimalLatitude">http://rs.tdwg.org/dwc/terms/decimalLatitude</a></td></tr>
    <tr><td>Definition</td><td>The geographic latitude (in decimal degrees, using the spatial reference system given in dwc:geodeticDatum) of the geographic center of a dcterms:Location. Positive values are north of the Equator, negative values are south of it. Legal values lie between -90 and 90, inclusive.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>-41.0983423</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:decimalLongitude"></span>
    <span id="decimalLongitude"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">decimalLongitude</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/decimalLongitude">http://rs.tdwg.org/dwc/terms/decimalLongitude</a></td></tr>
    <tr><td>Definition</td><td>The geographic longitude (in decimal degrees, using the spatial reference system given in dwc:geodeticDatum) of the geographic center of a dcterms:Location. Positive values are east of the Greenwich Meridian, negative values are west of it. Legal values lie between -180 and 180, inclusive.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>-121.1761111</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:geodeticDatum"></span>
    <span id="geodeticDatum"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">geodeticDatum</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/geodeticDatum">http://rs.tdwg.org/dwc/terms/geodeticDatum</a></td></tr>
    <tr><td>Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in dwc:decimalLatitude and dwc:decimalLongitude are based.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>EPSG:4326</code></li><li class="list-group-item"><code>WGS84</code></li><li class="list-group-item"><code>NAD27</code></li><li class="list-group-item"><code>Campo Inchauspe</code></li><li class="list-group-item"><code>European 1950</code></li><li class="list-group-item"><code>Clarke 1866</code></li><li class="list-group-item"><code>unknown</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:coordinateUncertaintyInMeters"></span>
    <span id="coordinateUncertaintyInMeters"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">coordinateUncertaintyInMeters</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters">http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters</a></td></tr>
    <tr><td>Definition</td><td>The horizontal distance (in meters) from the given dwc:decimalLatitude and dwc:decimalLongitude describing the smallest circle containing the whole of the dcterms:Location. Leave the value empty if the uncertainty is unknown, cannot be estimated, or is not applicable (because there are no coordinates). Zero is not a valid value for this term.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>30</code> (reasonable lower limit on or after 2000-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time)</li><li class="list-group-item"><code>100</code> (reasonable lower limit before 2000-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time)</li><li class="list-group-item"><code>71</code> (uncertainty for a UTM coordinate having 100 meter precision and a known spatial reference system)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:coordinatePrecision"></span>
    <span id="coordinatePrecision"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">coordinatePrecision</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/coordinatePrecision">http://rs.tdwg.org/dwc/terms/coordinatePrecision</a></td></tr>
    <tr><td>Definition</td><td>A decimal representation of the precision of the coordinates given in the dwc:decimalLatitude and dwc:decimalLongitude.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>0.00001</code> (normal GPS limit for decimal degrees)</li><li class="list-group-item"><code>0.000278</code> (nearest second)</li><li class="list-group-item"><code>0.01667</code> (nearest minute)</li><li class="list-group-item"><code>1.0</code> (nearest degree)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:pointRadiusSpatialFit"></span>
    <span id="pointRadiusSpatialFit"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">pointRadiusSpatialFit</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit">http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit</a></td></tr>
    <tr><td>Definition</td><td>The ratio of the area of the point-radius (dwc:decimalLatitude, dwc:decimalLongitude, dwc:coordinateUncertaintyInMeters) to the area of the true (original, or most specific) spatial representation of the dcterms:Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given point-radius does not completely contain the original representation. The dwc:pointRadiusSpatialFit is undefined (and should be left empty) if the original representation is any geometry without area (e.g., a point or polyline) and without uncertainty and the given georeference is not that same geometry (without uncertainty). If both the original and the given georeference are the same point, the dwc:pointRadiusSpatialFit is 1.</td></tr>
    <tr><td>Comments</td><td>Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (<a href="https://doi.org/10.15468/doc-gg7h-s853">https://doi.org/10.15468/doc-gg7h-s853</a>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>0</code></li><li class="list-group-item"><code>1</code></li><li class="list-group-item"><code>1.5708</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimCoordinates"></span>
    <span id="verbatimCoordinates"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimCoordinates</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimCoordinates">http://rs.tdwg.org/dwc/terms/verbatimCoordinates</a></td></tr>
    <tr><td>Definition</td><td>The verbatim original spatial coordinates of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>41 05 54S 121 05 34W</code></li><li class="list-group-item"><code>17T 630000 4833400</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimLatitude"></span>
    <span id="verbatimLatitude"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimLatitude</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimLatitude">http://rs.tdwg.org/dwc/terms/verbatimLatitude</a></td></tr>
    <tr><td>Definition</td><td>The verbatim original latitude of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>41 05 54.03S</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimLongitude"></span>
    <span id="verbatimLongitude"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimLongitude</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimLongitude">http://rs.tdwg.org/dwc/terms/verbatimLongitude</a></td></tr>
    <tr><td>Definition</td><td>The verbatim original longitude of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>121d 10' 34" W</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimCoordinateSystem"></span>
    <span id="verbatimCoordinateSystem"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimCoordinateSystem</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimCoordinateSystem">http://rs.tdwg.org/dwc/terms/verbatimCoordinateSystem</a></td></tr>
    <tr><td>Definition</td><td>The coordinate format for the dwc:verbatimLatitude and dwc:verbatimLongitude or the dwc:verbatimCoordinates of the dcterms:Location.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>decimal degrees</code></li><li class="list-group-item"><code>degrees decimal minutes</code></li><li class="list-group-item"><code>degrees minutes seconds</code></li><li class="list-group-item"><code>UTM</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimSRS"></span>
    <span id="verbatimSRS"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimSRS</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimSRS">http://rs.tdwg.org/dwc/terms/verbatimSRS</a></td></tr>
    <tr><td>Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which coordinates given in dwc:verbatimLatitude and dwc:verbatimLongitude, or dwc:verbatimCoordinates are based.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>unknown</code></li><li class="list-group-item"><code>EPSG:4326</code></li><li class="list-group-item"><code>WGS84</code></li><li class="list-group-item"><code>NAD27</code></li><li class="list-group-item"><code>Campo Inchauspe</code></li><li class="list-group-item"><code>European 1950</code></li><li class="list-group-item"><code>Clarke 1866</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:footprintWKT"></span>
    <span id="footprintWKT"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">footprintWKT</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/footprintWKT">http://rs.tdwg.org/dwc/terms/footprintWKT</a></td></tr>
    <tr><td>Definition</td><td>A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines the dcterms:Location. A dcterms:Location may have both a point-radius representation (see dwc:decimalLatitude) and a footprint representation, and they may differ from each other.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><code>POLYGON ((10 20, 11 20, 11 21, 10 21, 10 20))</code> (the one-degree bounding box with opposite corners at longitude=10, latitude=20 and longitude=11, latitude=21)</td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:footprintSRS"></span>
    <span id="footprintSRS"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">footprintSRS</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/footprintSRS">http://rs.tdwg.org/dwc/terms/footprintSRS</a></td></tr>
    <tr><td>Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geometry given in dwc:footprintWKT is based.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>. It is also permitted to provide the SRS in Well-Known-Text, especially if no EPSG code provides the necessary values for the attributes of the SRS. Do not use this term to describe the SRS of the dwc:decimalLatitude and dwc:decimalLongitude, nor of any verbatim coordinates - use the dwc:geodeticDatum and dwc:verbatimSRS instead. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>epsg:4326</code></li><li class="list-group-item"><code>GEOGCS["GCS_WGS_1984", DATUM["D_WGS_1984", SPHEROID["WGS_1984",6378137,298.257223563]], PRIMEM["Greenwich",0], UNIT["Degree",0.0174532925199433]]</code> (WKT for the standard WGS84 Spatial Reference System EPSG:4326)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:footprintSpatialFit"></span>
    <span id="footprintSpatialFit"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">footprintSpatialFit</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/footprintSpatialFit">http://rs.tdwg.org/dwc/terms/footprintSpatialFit</a></td></tr>
    <tr><td>Definition</td><td>The ratio of the area of the dwc:footprintWKT to the area of the true (original, or most specific) spatial representation of the dcterms:Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given dwc:footprintWKT does not completely contain the original representation. The dwc:footprintSpatialFit is undefined (and should be left empty) if the original representation is any geometry without area (e.g., a point or polyline) and without uncertainty and the given georeference is not that same geometry (without uncertainty). If both the original and the given georeference are the same point, the dwc:footprintSpatialFit is 1.</td></tr>
    <tr><td>Comments</td><td>Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (<a href="https://doi.org/10.15468/doc-gg7h-s853">https://doi.org/10.15468/doc-gg7h-s853</a>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>0</code></li><li class="list-group-item"><code>1</code></li><li class="list-group-item"><code>1.5708</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:georeferencedBy"></span>
    <span id="georeferencedBy"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">georeferencedBy</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferencedBy">http://rs.tdwg.org/dwc/terms/georeferencedBy</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of names of people, groups, or organizations who determined the georeference (spatial representation) for the dcterms:Location.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Brad Millen (ROM)</code></li><li class="list-group-item"><code>Kristina Yamamoto | Janet Fang</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:georeferencedDate"></span>
    <span id="georeferencedDate"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">georeferencedDate</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferencedDate">http://rs.tdwg.org/dwc/terms/georeferencedDate</a></td></tr>
    <tr><td>Definition</td><td>The date on which the dcterms:Location was georeferenced.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li><li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li><li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li><li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li><li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li><li class="list-group-item"><code>1971</code> (some time in the year 1971)</li><li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li><li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li><li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:georeferenceProtocol"></span>
    <span id="georeferenceProtocol"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">georeferenceProtocol</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferenceProtocol">http://rs.tdwg.org/dwc/terms/georeferenceProtocol</a></td></tr>
    <tr><td>Definition</td><td>A description or reference to the methods used to determine the spatial footprint, coordinates, and uncertainties.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><code>Georeferencing Quick Reference Guide (Zermoglio et al. 2020, <a href="https://doi.org/10.35035/e09p-h128">https://doi.org/10.35035/e09p-h128</a>)</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:georeferenceSources"></span>
    <span id="georeferenceSources"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">georeferenceSources</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferenceSources">http://rs.tdwg.org/dwc/terms/georeferenceSources</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of maps, gazetteers, or other resources used to georeference the dcterms:Location, described specifically enough to allow anyone in the future to use the same resources.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="https://www.geonames.org/">https://www.geonames.org/</a></code></li><li class="list-group-item"><code>USGS 1:24000 Florence Montana Quad 1967 | Terrametrics 2008 on Google Earth</code></li><li class="list-group-item"><code>GeoLocate</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:georeferenceRemarks"></span>
    <span id="georeferenceRemarks"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">georeferenceRemarks</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferenceRemarks">http://rs.tdwg.org/dwc/terms/georeferenceRemarks</a></td></tr>
    <tr><td>Definition</td><td>Notes or comments about the spatial description determination, explaining assumptions made in addition or opposition to the those formalized in the method referred to in dwc:georeferenceProtocol.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>Assumed distance by road (Hwy. 101)</code></td></tr>
  </tbody>
</table>


## GeologicalContext

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:geologicalContextID">geologicalContextID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:earliestEonOrLowestEonothem">earliestEonOrLowestEonothem</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:latestEonOrHighestEonothem">latestEonOrHighestEonothem</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:earliestEraOrLowestErathem">earliestEraOrLowestErathem</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:latestEraOrHighestErathem">latestEraOrHighestErathem</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:earliestPeriodOrLowestSystem">earliestPeriodOrLowestSystem</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:latestPeriodOrHighestSystem">latestPeriodOrHighestSystem</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:earliestEpochOrLowestSeries">earliestEpochOrLowestSeries</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:latestEpochOrHighestSeries">latestEpochOrHighestSeries</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:earliestAgeOrLowestStage">earliestAgeOrLowestStage</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:latestAgeOrHighestStage">latestAgeOrHighestStage</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:lowestBiostratigraphicZone">lowestBiostratigraphicZone</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:highestBiostratigraphicZone">highestBiostratigraphicZone</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:lithostratigraphicTerms">lithostratigraphicTerms</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:group">group</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:formation">formation</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:member">member</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:bed">bed</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">GeologicalContext <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/GeologicalContext">http://rs.tdwg.org/dwc/terms/GeologicalContext</a></td></tr>
    <tr><td>Definition</td><td>Geological information, such as stratigraphy, that qualifies a region or place.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>a lithostratigraphic layer</code></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:geologicalContextID"></span>
    <span id="geologicalContextID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">geologicalContextID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/geologicalContextID">http://rs.tdwg.org/dwc/terms/geologicalContextID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the set of information associated with a dwc:GeologicalContext (the location within a geological context, such as stratigraphy). May be a global unique identifier or an identifier specific to the data set.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code><a href="https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9">https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9</a></code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:earliestEonOrLowestEonothem"></span>
    <span id="earliestEonOrLowestEonothem"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">earliestEonOrLowestEonothem</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/earliestEonOrLowestEonothem">http://rs.tdwg.org/dwc/terms/earliestEonOrLowestEonothem</a></td></tr>
    <tr><td>Definition</td><td>The full name of the earliest possible geochronologic eon or lowest chrono-stratigraphic eonothem or the informal name ("Precambrian") attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Phanerozoic</code></li><li class="list-group-item"><code>Proterozoic</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:latestEonOrHighestEonothem"></span>
    <span id="latestEonOrHighestEonothem"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">latestEonOrHighestEonothem</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/latestEonOrHighestEonothem">http://rs.tdwg.org/dwc/terms/latestEonOrHighestEonothem</a></td></tr>
    <tr><td>Definition</td><td>The full name of the latest possible geochronologic eon or highest chrono-stratigraphic eonothem or the informal name ("Precambrian") attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Phanerozoic</code></li><li class="list-group-item"><code>Proterozoic</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:earliestEraOrLowestErathem"></span>
    <span id="earliestEraOrLowestErathem"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">earliestEraOrLowestErathem</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/earliestEraOrLowestErathem">http://rs.tdwg.org/dwc/terms/earliestEraOrLowestErathem</a></td></tr>
    <tr><td>Definition</td><td>The full name of the earliest possible geochronologic era or lowest chronostratigraphic erathem attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Cenozoic</code></li><li class="list-group-item"><code>Mesozoic</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:latestEraOrHighestErathem"></span>
    <span id="latestEraOrHighestErathem"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">latestEraOrHighestErathem</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/latestEraOrHighestErathem">http://rs.tdwg.org/dwc/terms/latestEraOrHighestErathem</a></td></tr>
    <tr><td>Definition</td><td>The full name of the latest possible geochronologic era or highest chronostratigraphic erathem attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Cenozoic</code></li><li class="list-group-item"><code>Mesozoic</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:earliestPeriodOrLowestSystem"></span>
    <span id="earliestPeriodOrLowestSystem"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">earliestPeriodOrLowestSystem</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/earliestPeriodOrLowestSystem">http://rs.tdwg.org/dwc/terms/earliestPeriodOrLowestSystem</a></td></tr>
    <tr><td>Definition</td><td>The full name of the earliest possible geochronologic period or lowest chronostratigraphic system attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Neogene</code></li><li class="list-group-item"><code>Tertiary</code></li><li class="list-group-item"><code>Quaternary</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:latestPeriodOrHighestSystem"></span>
    <span id="latestPeriodOrHighestSystem"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">latestPeriodOrHighestSystem</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/latestPeriodOrHighestSystem">http://rs.tdwg.org/dwc/terms/latestPeriodOrHighestSystem</a></td></tr>
    <tr><td>Definition</td><td>The full name of the latest possible geochronologic period or highest chronostratigraphic system attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Neogene</code></li><li class="list-group-item"><code>Tertiary</code></li><li class="list-group-item"><code>Quaternary</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:earliestEpochOrLowestSeries"></span>
    <span id="earliestEpochOrLowestSeries"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">earliestEpochOrLowestSeries</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/earliestEpochOrLowestSeries">http://rs.tdwg.org/dwc/terms/earliestEpochOrLowestSeries</a></td></tr>
    <tr><td>Definition</td><td>The full name of the earliest possible geochronologic epoch or lowest chronostratigraphic series attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Holocene</code></li><li class="list-group-item"><code>Pleistocene</code></li><li class="list-group-item"><code>Ibexian Series</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:latestEpochOrHighestSeries"></span>
    <span id="latestEpochOrHighestSeries"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">latestEpochOrHighestSeries</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/latestEpochOrHighestSeries">http://rs.tdwg.org/dwc/terms/latestEpochOrHighestSeries</a></td></tr>
    <tr><td>Definition</td><td>The full name of the latest possible geochronologic epoch or highest chronostratigraphic series attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Holocene</code></li><li class="list-group-item"><code>Pleistocene</code></li><li class="list-group-item"><code>Ibexian Series</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:earliestAgeOrLowestStage"></span>
    <span id="earliestAgeOrLowestStage"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">earliestAgeOrLowestStage</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/earliestAgeOrLowestStage">http://rs.tdwg.org/dwc/terms/earliestAgeOrLowestStage</a></td></tr>
    <tr><td>Definition</td><td>The full name of the earliest possible geochronologic age or lowest chronostratigraphic stage attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Atlantic</code></li><li class="list-group-item"><code>Boreal</code></li><li class="list-group-item"><code>Skullrockian</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:latestAgeOrHighestStage"></span>
    <span id="latestAgeOrHighestStage"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">latestAgeOrHighestStage</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/latestAgeOrHighestStage">http://rs.tdwg.org/dwc/terms/latestAgeOrHighestStage</a></td></tr>
    <tr><td>Definition</td><td>The full name of the latest possible geochronologic age or highest chronostratigraphic stage attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Atlantic</code></li><li class="list-group-item"><code>Boreal</code></li><li class="list-group-item"><code>Skullrockian</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:lowestBiostratigraphicZone"></span>
    <span id="lowestBiostratigraphicZone"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">lowestBiostratigraphicZone</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/lowestBiostratigraphicZone">http://rs.tdwg.org/dwc/terms/lowestBiostratigraphicZone</a></td></tr>
    <tr><td>Definition</td><td>The full name of the lowest possible geological biostratigraphic zone of the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>Maastrichtian</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:highestBiostratigraphicZone"></span>
    <span id="highestBiostratigraphicZone"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">highestBiostratigraphicZone</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/highestBiostratigraphicZone">http://rs.tdwg.org/dwc/terms/highestBiostratigraphicZone</a></td></tr>
    <tr><td>Definition</td><td>The full name of the highest possible geological biostratigraphic zone of the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>Blancan</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:lithostratigraphicTerms"></span>
    <span id="lithostratigraphicTerms"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">lithostratigraphicTerms</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms">http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms</a></td></tr>
    <tr><td>Definition</td><td>The combination of all litho-stratigraphic names for the rock from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>Pleistocene-Weichselien</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:group"></span>
    <span id="group"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">group</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/group">http://rs.tdwg.org/dwc/terms/group</a></td></tr>
    <tr><td>Definition</td><td>The full name of the lithostratigraphic group from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Bathurst</code></li><li class="list-group-item"><code>Lower Wealden</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:formation"></span>
    <span id="formation"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">formation</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/formation">http://rs.tdwg.org/dwc/terms/formation</a></td></tr>
    <tr><td>Definition</td><td>The full name of the lithostratigraphic formation from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Notch Peak Formation</code></li><li class="list-group-item"><code>House Limestone</code></li><li class="list-group-item"><code>Fillmore Formation</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:member"></span>
    <span id="member"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">member</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/member">http://rs.tdwg.org/dwc/terms/member</a></td></tr>
    <tr><td>Definition</td><td>The full name of the lithostratigraphic member from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Lava Dam Member</code></li><li class="list-group-item"><code>Hellnmaria Member</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:bed"></span>
    <span id="bed"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">bed</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/bed">http://rs.tdwg.org/dwc/terms/bed</a></td></tr>
    <tr><td>Definition</td><td>The full name of the lithostratigraphic bed from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>Harlem coal</code></td></tr>
  </tbody>
</table>


## Identification

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:identificationID">identificationID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimIdentification">verbatimIdentification</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:identificationQualifier">identificationQualifier</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:typeStatus">typeStatus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:identifiedBy">identifiedBy</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:identifiedByID">identifiedByID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:dateIdentified">dateIdentified</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:identificationReferences">identificationReferences</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:identificationVerificationStatus">identificationVerificationStatus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:identificationRemarks">identificationRemarks</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">Identification <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/Identification">http://rs.tdwg.org/dwc/terms/Identification</a></td></tr>
    <tr><td>Definition</td><td>A taxonomic determination (e.g., the assignment to a dwc:Taxon).</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>a subspecies determination of an organism</code></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:identificationID"></span>
    <span id="identificationID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">identificationID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identificationID">http://rs.tdwg.org/dwc/terms/identificationID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the dwc:Identification (the body of information associated with the assignment of a scientific name). May be a global unique identifier or an identifier specific to the data set.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>9992</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimIdentification"></span>
    <span id="verbatimIdentification"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimIdentification</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimIdentification">http://rs.tdwg.org/dwc/terms/verbatimIdentification</a></td></tr>
    <tr><td>Definition</td><td>A string representing the taxonomic identification as it appeared in the original record.</td></tr>
    <tr><td>Comments</td><td>This term is meant to allow the capture of an unaltered original identification/determination, including identification qualifiers, hybrid formulas, uncertainties, etc. This term is meant to be used in addition to dwc:scientificName (and dwc:identificationQualifier etc.), not instead of it.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Peromyscus sp.</code></li><li class="list-group-item"><code>Ministrymon sp. nov. 1</code></li><li class="list-group-item"><code>Anser anser × Branta canadensis</code></li><li class="list-group-item"><code>Pachyporidae?</code></li><li class="list-group-item"><code>Potentilla × pantotricha Soják</code></li><li class="list-group-item"><code>Aconitum pilipes × A. variegatum</code></li><li class="list-group-item"><code>Lepomis auritus x cyanellus</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:identificationQualifier"></span>
    <span id="identificationQualifier"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">identificationQualifier</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identificationQualifier">http://rs.tdwg.org/dwc/terms/identificationQualifier</a></td></tr>
    <tr><td>Definition</td><td>A brief phrase or a standard term ("cf.", "aff.") to express the determiner's doubts about the dwc:Identification.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>aff. agrifolia var. oxyadenia</code> (for <code>Quercus aff. agrifolia var. oxyadenia</code> with accompanying values <code>Quercus</code> in genus, <code>agrifolia</code>  in specificEpithet, <code>oxyadenia</code>  in infraspecificEpithet, and <code>var.</code> in taxonRank)</li><li class="list-group-item"><code>cf. var. oxyadenia</code> (for <code>Quercus agrifolia cf. var. oxyadenia</code> with accompanying values <code>Quercus</code> in genus, <code>agrifolia</code> in specificEpithet, <code>oxyadenia</code> in infraspecificEpithet, and <code>var.</code> in taxonRank)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:typeStatus"></span>
    <span id="typeStatus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">typeStatus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/typeStatus">http://rs.tdwg.org/dwc/terms/typeStatus</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of nomenclatural types (type status, typified scientific name, publication) applied to the subject.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>holotype of Ctenomys sociabilis. Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388</code></li><li class="list-group-item"><code>holotype of Pinus abies | holotype of Picea abies</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:identifiedBy"></span>
    <span id="identifiedBy"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">identifiedBy</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identifiedBy">http://rs.tdwg.org/dwc/terms/identifiedBy</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of names of people, groups, or organizations who assigned the dwc:Taxon to the subject.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>James L. Patton</code></li><li class="list-group-item"><code>Theodore Pappenfuss | Robert Macey</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:identifiedByID"></span>
    <span id="identifiedByID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">identifiedByID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identifiedByID">http://rs.tdwg.org/dwc/terms/identifiedByID</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of the globally unique identifier for the person, people, groups, or organizations responsible for assigning the dwc:Taxon to the subject.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to provide a single identifier that disambiguates the details of the identifying agent. If a list is used, the order of the identifiers on the list should not be assumed to convey any semantics. Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a></code> (for an individual)</li><li class="list-group-item"><code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a> | <a href="https://orcid.org/0000-0002-1825-0098">https://orcid.org/0000-0002-1825-0098</a></code> (for a list of people)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:dateIdentified"></span>
    <span id="dateIdentified"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">dateIdentified</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/dateIdentified">http://rs.tdwg.org/dwc/terms/dateIdentified</a></td></tr>
    <tr><td>Definition</td><td>The date on which the subject was determined as representing the dwc:Taxon.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li><li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li><li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li><li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li><li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li><li class="list-group-item"><code>1971</code> (some time in the year 1971)</li><li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li><li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li><li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:identificationReferences"></span>
    <span id="identificationReferences"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">identificationReferences</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identificationReferences">http://rs.tdwg.org/dwc/terms/identificationReferences</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of references (publication, global unique identifier, URI) used in the dwc:Identification.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Aves del Noroeste Patagonico. Christie et al. 2004.</code></li><li class="list-group-item"><code>Stebbins, R. Field Guide to Western Reptiles and Amphibians. 3rd Edition. 2003. | Irschick, D.J. and Shaffer, H.B. (1997). The polytypic species revisited: Morphological differentiation among tiger salamanders (Ambystoma tigrinum) (Amphibia: Caudata). Herpetologica, 53(1), 30-49.</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:identificationVerificationStatus"></span>
    <span id="identificationVerificationStatus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">identificationVerificationStatus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identificationVerificationStatus">http://rs.tdwg.org/dwc/terms/identificationVerificationStatus</a></td></tr>
    <tr><td>Definition</td><td>A categorical indicator of the extent to which the taxonomic identification has been verified to be correct.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><code>0</code> ("unverified" in HISPID/ABCD).</td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:identificationRemarks"></span>
    <span id="identificationRemarks"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">identificationRemarks</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identificationRemarks">http://rs.tdwg.org/dwc/terms/identificationRemarks</a></td></tr>
    <tr><td>Definition</td><td>Comments or notes about the dwc:Identification.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>Distinguished between Anthus correndera and Anthus hellmayri based on the comparative lengths of the uñas.</code></td></tr>
  </tbody>
</table>


## Taxon

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:taxonID">taxonID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:scientificNameID">scientificNameID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:acceptedNameUsageID">acceptedNameUsageID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:parentNameUsageID">parentNameUsageID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:originalNameUsageID">originalNameUsageID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:nameAccordingToID">nameAccordingToID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:namePublishedInID">namePublishedInID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:taxonConceptID">taxonConceptID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:scientificName">scientificName</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:acceptedNameUsage">acceptedNameUsage</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:parentNameUsage">parentNameUsage</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:originalNameUsage">originalNameUsage</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:nameAccordingTo">nameAccordingTo</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:namePublishedIn">namePublishedIn</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:namePublishedInYear">namePublishedInYear</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:higherClassification">higherClassification</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:kingdom">kingdom</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:phylum">phylum</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:class">class</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:order">order</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:superfamily">superfamily</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:family">family</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:subfamily">subfamily</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:tribe">tribe</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:subtribe">subtribe</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:genus">genus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:genericName">genericName</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:subgenus">subgenus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:infragenericEpithet">infragenericEpithet</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:specificEpithet">specificEpithet</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:infraspecificEpithet">infraspecificEpithet</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:cultivarEpithet">cultivarEpithet</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:taxonRank">taxonRank</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:verbatimTaxonRank">verbatimTaxonRank</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:scientificNameAuthorship">scientificNameAuthorship</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:vernacularName">vernacularName</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:nomenclaturalCode">nomenclaturalCode</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:taxonomicStatus">taxonomicStatus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:nomenclaturalStatus">nomenclaturalStatus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:taxonRemarks">taxonRemarks</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">Taxon <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/Taxon">http://rs.tdwg.org/dwc/terms/Taxon</a></td></tr>
    <tr><td>Definition</td><td>A group of organisms (sensu <a href="http://purl.obolibrary.org/obo/OBI_0100026">http://purl.obolibrary.org/obo/OBI_0100026</a>) considered by taxonomists to form a homogeneous unit.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>the genus Truncorotaloides as published by Brönnimann et al. in 1953 in the Journal of Paleontology Vol. 27(6) p. 817-820</code></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:taxonID"></span>
    <span id="taxonID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">taxonID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/taxonID">http://rs.tdwg.org/dwc/terms/taxonID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the set of dwc:Taxon information. May be a global unique identifier or an identifier specific to the data set.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>8fa58e08-08de-4ac1-b69c-1235340b7001</code></li><li class="list-group-item"><code>32567</code></li><li class="list-group-item"><code><a href="https://www.gbif.org/species/212">https://www.gbif.org/species/212</a></code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:scientificNameID"></span>
    <span id="scientificNameID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">scientificNameID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/scientificNameID">http://rs.tdwg.org/dwc/terms/scientificNameID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the nomenclatural (not taxonomic) details of a scientific name.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>urn:lsid:ipni.org:names:37829-1:1.3</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:acceptedNameUsageID"></span>
    <span id="acceptedNameUsageID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">acceptedNameUsageID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/acceptedNameUsageID">http://rs.tdwg.org/dwc/terms/acceptedNameUsageID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the name usage (documented meaning of the name according to a source) of the currently valid (zoological) or accepted (botanical) taxon.</td></tr>
    <tr><td>Comments</td><td>This term should be used for synonyms or misapplied names to refer to the dwc:taxonID of a dwc:Taxon record that represents the accepted (botanical) or valid (zoological) name. For Darwin Core Archives the related record should be present locally in the same archive.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>tsn:41107</code> (ITIS)</li><li class="list-group-item"><code>urn:lsid:ipni.org:names:320035-2</code> (IPNI)</li><li class="list-group-item"><code>2704179</code> (GBIF)</li><li class="list-group-item"><code>6W3C4</code> (COL)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:parentNameUsageID"></span>
    <span id="parentNameUsageID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">parentNameUsageID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/parentNameUsageID">http://rs.tdwg.org/dwc/terms/parentNameUsageID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the name usage (documented meaning of the name according to a source) of the direct, most proximate higher-rank parent taxon (in a classification) of the most specific element of the dwc:scientificName.</td></tr>
    <tr><td>Comments</td><td>This term should be used for accepted names to refer to the dwc:taxonID of a dwc:Taxon record that represents the next higher taxon rank in the same taxonomic classification. For Darwin Core Archives the related record should be present locally in the same archive.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>tsn:41074</code> (ITIS)</li><li class="list-group-item"><code>urn:lsid:ipni.org:names:30001404-2</code> (IPNI)</li><li class="list-group-item"><code>2704173</code> (GBIF)</li><li class="list-group-item"><code>6T8N</code> (COL)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:originalNameUsageID"></span>
    <span id="originalNameUsageID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">originalNameUsageID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/originalNameUsageID">http://rs.tdwg.org/dwc/terms/originalNameUsageID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the name usage (documented meaning of the name according to a source) in which the terminal element of the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode.</td></tr>
    <tr><td>Comments</td><td>This term should be used to refer to the dwc:taxonID of a dwc:Taxon record that represents the usage of the terminal element of the dwc:scientificName as originally established under the rules of the associated dwc:nomenclaturalCode. For example, for names governed by the ICNafp, this term would establish the relationship between a record representing a subsequent combination and the record for its corresponding basionym. Unlike basionyms, however, this term can apply to scientific names at all ranks. For Darwin Core Archives the related record should be present locally in the same archive.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>tsn:41107</code> (ITIS)</li><li class="list-group-item"><code>urn:lsid:ipni.org:names:320035-2</code> (IPNI)</li><li class="list-group-item"><code>2704179</code> (GBIF)</li><li class="list-group-item"><code>6W3C4</code> (COL)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:nameAccordingToID"></span>
    <span id="nameAccordingToID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">nameAccordingToID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/nameAccordingToID">http://rs.tdwg.org/dwc/terms/nameAccordingToID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the source in which the specific taxon concept circumscription is defined or implied. See dwc:nameAccordingTo.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code><a href="https://doi.org/10.1016/S0269-915X(97)80026-2">https://doi.org/10.1016/S0269-915X(97)80026-2</a></code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:namePublishedInID"></span>
    <span id="namePublishedInID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">namePublishedInID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/namePublishedInID">http://rs.tdwg.org/dwc/terms/namePublishedInID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the publication in which the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode.</td></tr>
    <tr><td>Comments</td><td>A citation of the first publication of the name in its given combination, not the basionym / original name. Recombinations are often not published in zoology, in which case dwc:namePublishedInID should be empty.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:taxonConceptID"></span>
    <span id="taxonConceptID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">taxonConceptID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/taxonConceptID">http://rs.tdwg.org/dwc/terms/taxonConceptID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the taxonomic concept to which the record refers - not for the nomenclatural details of a dwc:Taxon.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>8fa58e08-08de-4ac1-b69c-1235340b7001</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:scientificName"></span>
    <span id="scientificName"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">scientificName</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/scientificName">http://rs.tdwg.org/dwc/terms/scientificName</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name, with authorship and date information if known. When forming part of a dwc:Identification, this should be the name in lowest level taxonomic rank that can be determined. This term should not contain identification qualifications, which should instead be supplied in the dwc:identificationQualifier term.</td></tr>
    <tr><td>Comments</td><td>This term should not contain identification qualifications, which should instead be supplied in the IdentificationQualifier term. When applied to an Organism or Occurrence, this term should be used to represent the scientific name that was applied to the associated Organism in accordance with the Taxon to which it was or is currently identified. Names should be compliant to the most recent nomenclatural code. For example, names of hybrids for algae, fungi and plants should follow the rules of the International Code of Nomenclature for algae, fungi, and plants (Schenzhen Code Articles H.1, H.2 and H.3). Thus, use the multiplication sign <code>×</code> (Unicode <code>U+00D7</code>, HTML <code>&times;</code>) to identify a hybrid, not <code>x</code> or <code>X</code>, if possible.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Coleoptera</code> (order)</li><li class="list-group-item"><code>Vespertilionidae</code> (family)</li><li class="list-group-item"><code>Manis</code> (genus)</li><li class="list-group-item"><code>Ctenomys sociabilis</code> (genus + specificEpithet)</li><li class="list-group-item"><code>Ambystoma tigrinum diaboli</code> (genus + specificEpithet + infraspecificEpithet)</li><li class="list-group-item"><code>Roptrocerus typographi (Györfi, 1952)</code> (genus + specificEpithet + scientificNameAuthorship)</li><li class="list-group-item"><code>Quercus agrifolia var. oxyadenia (Torr.) J.T. Howell</code> (genus + specificEpithet + taxonRank + infraspecificEpithet + scientificNameAuthorship)</li><li class="list-group-item"><code>×Agropogon littoralis (Sm.) C. E. Hubb.</code></li><li class="list-group-item"><code>Mentha ×smithiana R. A. Graham</code></li><li class="list-group-item"><code>Agrostis stolonifera L. × Polypogon monspeliensis (L.) Desf.</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:acceptedNameUsage"></span>
    <span id="acceptedNameUsage"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">acceptedNameUsage</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/acceptedNameUsage">http://rs.tdwg.org/dwc/terms/acceptedNameUsage</a></td></tr>
    <tr><td>Definition</td><td>The full name, with authorship and date information if known, of the currently valid (zoological) or accepted (botanical) dwc:Taxon.</td></tr>
    <tr><td>Comments</td><td>The full scientific name, with authorship and date information if known, of the accepted (botanical) or valid (zoological) name in cases where the provided dwc:scientificName is considered by the reference indicated in the dwc:accordingTo property, or of the content provider, to be a synonym or misapplied name. When applied to a dwc:Organism or dwc:Occurrence, this term should be used in cases where a content provider regards the provided dwc:scientificName to be inconsistent with the taxonomic perspective of the content provider. For example, there are many discrepancies within specimen collections and observation datasets between the recorded name (e.g., the most recent identification from an expert who examined a specimen, or a field identification for an observed dwc:Organism), and the name asserted by the content provider to be taxonomically accepted.</td></tr>
    <tr><td>Examples</td><td><code>Tamias minimus</code> (valid name for <code>Eutamias minimus</code>)</td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:parentNameUsage"></span>
    <span id="parentNameUsage"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">parentNameUsage</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/parentNameUsage">http://rs.tdwg.org/dwc/terms/parentNameUsage</a></td></tr>
    <tr><td>Definition</td><td>The full name, with authorship and date information if known, of the direct, most proximate higher-rank parent dwc:Taxon (in a classification) of the most specific element of the dwc:scientificName.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Rubiaceae</code></li><li class="list-group-item"><code>Gruiformes</code></li><li class="list-group-item"><code>Testudinae</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:originalNameUsage"></span>
    <span id="originalNameUsage"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">originalNameUsage</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/originalNameUsage">http://rs.tdwg.org/dwc/terms/originalNameUsage</a></td></tr>
    <tr><td>Definition</td><td>The taxon name, with authorship and date information if known, as it originally appeared when first established under the rules of the associated dwc:nomenclaturalCode. The basionym (botany) or basonym (bacteriology) of the dwc:scientificName or the senior/earlier homonym for replaced names.</td></tr>
    <tr><td>Comments</td><td>The full scientific name, with authorship and date information if known, of the name usage in which the terminal element of the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode. For example, for names governed by the ICNafp, this term would indicate the basionym of a record representing a subsequent combination. Unlike basionyms, however, this term can apply to scientific names at all ranks.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Pinus abies</code></li><li class="list-group-item"><code>Gasterosteus saltatrix Linnaeus 1768</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:nameAccordingTo"></span>
    <span id="nameAccordingTo"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">nameAccordingTo</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/nameAccordingTo">http://rs.tdwg.org/dwc/terms/nameAccordingTo</a></td></tr>
    <tr><td>Definition</td><td>The reference to the source in which the specific taxon concept circumscription is defined or implied - traditionally signified by the Latin "sensu" or "sec." (from secundum, meaning "according to"). For taxa that result from identifications, a reference to the keys, monographs, experts and other sources should be given.</td></tr>
    <tr><td>Comments</td><td>This term provides context to the dwc:scientificName. Together with the dwc:scientificName, separated by <code>sensu</code> or <code>sec.</code>, it forms the taxon concept label, which may be seen as having the same relationship to dwc:taxonConceptID as, for example, dwc:acceptedNameUsage has to dwc:acceptedNameUsageID. When not provided, in Taxon Core data sets the dwc:nameAccordingTo can be taken to be the data set. In this case the data set mostly provides sufficient context to infer the delimitation of the taxon and its relationship with other taxa. In Occurrence Core data sets, when not provided, dwc:nameAccordingTo can be an underlying taxonomy of the data set, e.g. Plants of the World Online (<a href="http://powo.science.kew.org/">http://powo.science.kew.org/</a>) for vascular plant records in iNaturalist (in which case it should be provided), or, which is the case for most dwc:PreservedSpecimen data sets, the dwc:Identification, in which case there is no further context.</td></tr>
    <tr><td>Examples</td><td><code>Franz NM, Cardona-Duque J (2013) Description of two new species and phylogenetic reassessment of Perelleschus Wibmer & O’Brien, 1986 (Coleoptera: Curculionidae), with a complete taxonomic concept history of Perelleschus sec. Franz & Cardona-Duque, 2013. Syst Biodivers. 11: 209–236.</code> (as the full citation of the Franz & Cardona-Duque (2013) in Perelleschus splendida sec. Franz & Cardona-Duque (2013))</td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:namePublishedIn"></span>
    <span id="namePublishedIn"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">namePublishedIn</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/namePublishedIn">http://rs.tdwg.org/dwc/terms/namePublishedIn</a></td></tr>
    <tr><td>Definition</td><td>A reference for the publication in which the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode.</td></tr>
    <tr><td>Comments</td><td>A citation of the first publication of the name in its given combination, not the basionym / original name. Recombinations are often not published in zoology, in which case dwc:namePublishedIn should be empty.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388</code></li><li class="list-group-item"><code>Forel, Auguste, Diagnosies provisoires de quelques espèces nouvelles de fourmis de Madagascar, récoltées par M. Grandidier., Annales de la Societe Entomologique de Belgique, Comptes-rendus des Seances 30, 1886</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:namePublishedInYear"></span>
    <span id="namePublishedInYear"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">namePublishedInYear</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/namePublishedInYear">http://rs.tdwg.org/dwc/terms/namePublishedInYear</a></td></tr>
    <tr><td>Definition</td><td>The four-digit year in which the dwc:scientificName was published.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1915</code></li><li class="list-group-item"><code>2008</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:higherClassification"></span>
    <span id="higherClassification"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">higherClassification</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/higherClassification">http://rs.tdwg.org/dwc/terms/higherClassification</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of taxa names terminating at the rank immediately superior to the referenced dwc:Taxon.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>), with terms in order from the highest taxonomic rank to the lowest.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Plantae | Tracheophyta | Magnoliopsida | Ranunculales | Ranunculaceae | Ranunculus</code></li><li class="list-group-item"><code>Animalia</code></li><li class="list-group-item"><code>Animalia | Chordata | Vertebrata | Mammalia | Theria | Eutheria | Rodentia | Hystricognatha | Hystricognathi | Ctenomyidae | Ctenomyini | Ctenomys</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:kingdom"></span>
    <span id="kingdom"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">kingdom</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/kingdom">http://rs.tdwg.org/dwc/terms/kingdom</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the kingdom in which the dwc:Taxon is classified.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Animalia</code></li><li class="list-group-item"><code>Archaea</code></li><li class="list-group-item"><code>Bacteria</code></li><li class="list-group-item"><code>Chromista</code></li><li class="list-group-item"><code>Fungi</code></li><li class="list-group-item"><code>Plantae</code></li><li class="list-group-item"><code>Protozoa</code></li><li class="list-group-item"><code>Viruses</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:phylum"></span>
    <span id="phylum"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">phylum</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/phylum">http://rs.tdwg.org/dwc/terms/phylum</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the phylum or division in which the dwc:Taxon is classified.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Chordata</code> (phylum)</li><li class="list-group-item"><code>Bryophyta</code> (division)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:class"></span>
    <span id="class"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">class</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/class">http://rs.tdwg.org/dwc/terms/class</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the class in which the dwc:Taxon is classified.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Mammalia</code></li><li class="list-group-item"><code>Hepaticopsida</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:order"></span>
    <span id="order"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">order</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/order">http://rs.tdwg.org/dwc/terms/order</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the order in which the dwc:Taxon is classified.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Carnivora</code></li><li class="list-group-item"><code>Monocleales</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:superfamily"></span>
    <span id="superfamily"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">superfamily</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/superfamily">http://rs.tdwg.org/dwc/terms/superfamily</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the superfamily in which the dwc:Taxon is classified.</td></tr>
    <tr><td>Comments</td><td>A taxonomic category subordinate to an order and superior to a family. According to ICZN article 29.2, the suffix <code>-oidea</code> is used for a superfamily name.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Achatinoidea</code></li><li class="list-group-item"><code>Cerithioidea</code></li><li class="list-group-item"><code>Helicoidea</code></li><li class="list-group-item"><code>Hypsibioidea</code></li><li class="list-group-item"><code>Valvatoidea</code></li><li class="list-group-item"><code>Zonitoidea</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:family"></span>
    <span id="family"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">family</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/family">http://rs.tdwg.org/dwc/terms/family</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the family in which the dwc:Taxon is classified.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Felidae</code></li><li class="list-group-item"><code>Monocleaceae</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:subfamily"></span>
    <span id="subfamily"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">subfamily</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/subfamily">http://rs.tdwg.org/dwc/terms/subfamily</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the subfamily in which the dwc:Taxon is classified.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Periptyctinae</code></li><li class="list-group-item"><code>Orchidoideae</code></li><li class="list-group-item"><code>Sphindociinae</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:tribe"></span>
    <span id="tribe"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">tribe</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/tribe">http://rs.tdwg.org/dwc/terms/tribe</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the tribe in which the dwc:Taxon is classified.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Ortaliini</code></li><li class="list-group-item"><code>Arethuseae</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:subtribe"></span>
    <span id="subtribe"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">subtribe</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/subtribe">http://rs.tdwg.org/dwc/terms/subtribe</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the subtribe in which the dwc:Taxon is classified.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Plotinini</code></li><li class="list-group-item"><code>Typhaeini</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:genus"></span>
    <span id="genus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">genus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/genus">http://rs.tdwg.org/dwc/terms/genus</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the genus in which the dwc:Taxon is classified.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Puma</code></li><li class="list-group-item"><code>Monoclea</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:genericName"></span>
    <span id="genericName"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">genericName</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/genericName">http://rs.tdwg.org/dwc/terms/genericName</a></td></tr>
    <tr><td>Definition</td><td>The genus part of the dwc:scientificName without authorship.</td></tr>
    <tr><td>Comments</td><td>For synonyms the accepted genus and the genus part of the name may be different. The term dwc:genericName should be used together with dwc:specificEpithet to form a binomial and with dwc:infraspecificEpithet to form a trinomial. The term dwc:genericName should only be used for combinations. Uninomials of generic rank do not have a dwc:genericName.</td></tr>
    <tr><td>Examples</td><td><code>Felis</code> (for scientificName <code>Felis concolor</code>, with accompanying values of <code>Puma concolor</code> in acceptedNameUsage and <code>Puma</code> in genus)</td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:subgenus"></span>
    <span id="subgenus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">subgenus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/subgenus">http://rs.tdwg.org/dwc/terms/subgenus</a></td></tr>
    <tr><td>Definition</td><td>The full scientific name of the subgenus in which the dwc:Taxon is classified. Values should include the genus to avoid homonym confusion.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Strobus</code></li><li class="list-group-item"><code>Amerigo</code></li><li class="list-group-item"><code>Pilosella</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:infragenericEpithet"></span>
    <span id="infragenericEpithet"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">infragenericEpithet</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/infragenericEpithet">http://rs.tdwg.org/dwc/terms/infragenericEpithet</a></td></tr>
    <tr><td>Definition</td><td>The infrageneric part of a binomial name at ranks above species but below genus.</td></tr>
    <tr><td>Comments</td><td>The term dwc:infragenericEpithet should be used in conjunction with dwc:genericName, dwc:specificEpithet, dwc:infraspecificEpithet, dwc:taxonRank and dwc:scientificNameAuthorship to represent the individual elements of the complete dwc:scientificName. It can be used to indicate the subgenus placement of a species, which in zoology is often given in parentheses. Can also be used to share infrageneric names such as botanical sections (e.g., <code>Vicia sect. Cracca</code>).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Abacetillus</code> (for scientificName <code>Abacetus (Abacetillus) ambiguus</code>)</li><li class="list-group-item"><code>Cracca</code> (for scientificName <code>Vicia sect. Cracca</code>)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:specificEpithet"></span>
    <span id="specificEpithet"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">specificEpithet</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/specificEpithet">http://rs.tdwg.org/dwc/terms/specificEpithet</a></td></tr>
    <tr><td>Definition</td><td>The name of the first or species epithet of the dwc:scientificName.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>concolor</code></li><li class="list-group-item"><code>gottschei</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:infraspecificEpithet"></span>
    <span id="infraspecificEpithet"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">infraspecificEpithet</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/infraspecificEpithet">http://rs.tdwg.org/dwc/terms/infraspecificEpithet</a></td></tr>
    <tr><td>Definition</td><td>The name of the lowest or terminal infraspecific epithet of the dwc:scientificName, excluding any rank designation.</td></tr>
    <tr><td>Comments</td><td>In botany, name strings in literature and identifications may have multiple infraspecific ranks. According to the International Code of Nomenclature for algae, fungi, and plants (Schenzhen Code Articles 6.7 & Art. 24.1), valid names only have two epithets, with the lowest rank being the dwc:infraspecificEpithet. For example: the dwc:infraspecificEpithet in the string <code>Indigofera charlieriana subsp. sessilis var. scaberrima</code> is <code>scaberrima</code> and the dwc:scientificName is <code>Indigofera charlieriana var. scaberrima (Schinz) J.B.Gillett</code>. Use dwc:verbatimIdentification for the full name string used in a dwc:Identification.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>concolor</code> (for scientificName <code>Puma concolor concolor (Linnaeus, 1771)</code>)</li><li class="list-group-item"><code>oxyadenia</code> (for scientificName <code>Quercus agrifolia var. oxyadenia (Torr.) J.T. Howell</code>)</li><li class="list-group-item"><code>laxa</code> (for scientificName <code>Cheilanthes hirta f. laxa (Kunze) W.Jacobsen & N.Jacobsen</code>)</li><li class="list-group-item"><code>scaberrima</code> (for scientificName <code>Indigofera charlieriana var. scaberrima (Schinz) J.B.Gillett</code>)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:cultivarEpithet"></span>
    <span id="cultivarEpithet"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">cultivarEpithet</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/cultivarEpithet">http://rs.tdwg.org/dwc/terms/cultivarEpithet</a></td></tr>
    <tr><td>Definition</td><td>Part of the name of a cultivar, cultivar group or grex that follows the dwc:scientificName.</td></tr>
    <tr><td>Comments</td><td>According to the Rules of the Cultivated Plant Code, a cultivar name consists of a botanical name followed by a cultivar epithet. The value given as the dwc:cultivarEpithet should exclude any quotes. The term dwc:taxonRank should be used to indicate which type of cultivated plant name (e.g. cultivar, cultivar group, grex) is concerned. This epithet, including any enclosing apostrophes or suffix, should be provided in dwc:scientificName as well.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>King Edward</code> (for scientificName <code>Solanum tuberosum 'King Edward'</code> and taxonRank <code>cultivar</code>)</li><li class="list-group-item"><code>Mishmiense</code> (for scientificName <code>Rhododendron boothii Mishmiense Group</code> and taxonRank <code>cultivar group</code>)</li><li class="list-group-item"><code>Atlantis</code> (for scientificName <code>Paphiopedilum Atlantis grex</code> and taxonRank <code>grex</code>)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:taxonRank"></span>
    <span id="taxonRank"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">taxonRank</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/taxonRank">http://rs.tdwg.org/dwc/terms/taxonRank</a></td></tr>
    <tr><td>Definition</td><td>The taxonomic rank of the most specific name in the dwc:scientificName.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. The taxon ranks of algae, fungi and plants are defined in the International Code of Nomenclature for algae, fungi, and plants (Schenzhen Code Articles H3.2, H4.4 and H.3.1).</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>subspecies</code></li><li class="list-group-item"><code>varietas</code></li><li class="list-group-item"><code>forma</code></li><li class="list-group-item"><code>species</code></li><li class="list-group-item"><code>genus</code></li><li class="list-group-item"><code>nothogenus</code></li><li class="list-group-item"><code>nothospecies</code></li><li class="list-group-item"><code>nothosubspecies</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:verbatimTaxonRank"></span>
    <span id="verbatimTaxonRank"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimTaxonRank</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimTaxonRank">http://rs.tdwg.org/dwc/terms/verbatimTaxonRank</a></td></tr>
    <tr><td>Definition</td><td>The taxonomic rank of the most specific name in the dwc:scientificName as it appears in the original record.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Agamospecies</code></li><li class="list-group-item"><code>sub-lesus</code></li><li class="list-group-item"><code>prole</code></li><li class="list-group-item"><code>apomict</code></li><li class="list-group-item"><code>nothogrex</code></li><li class="list-group-item"><code>sp.</code></li><li class="list-group-item"><code>subsp.</code></li><li class="list-group-item"><code>var.</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:scientificNameAuthorship"></span>
    <span id="scientificNameAuthorship"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">scientificNameAuthorship</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/scientificNameAuthorship">http://rs.tdwg.org/dwc/terms/scientificNameAuthorship</a></td></tr>
    <tr><td>Definition</td><td>The authorship information for the dwc:scientificName formatted according to the conventions of the applicable dwc:nomenclaturalCode.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>(Torr.) J.T. Howell</code></li><li class="list-group-item"><code>(Martinovský) Tzvelev</code></li><li class="list-group-item"><code>(Györfi, 1952)</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:vernacularName"></span>
    <span id="vernacularName"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">vernacularName</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/vernacularName">http://rs.tdwg.org/dwc/terms/vernacularName</a></td></tr>
    <tr><td>Definition</td><td>A common or vernacular name.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Andean Condor</code></li><li class="list-group-item"><code>Condor Andino</code></li><li class="list-group-item"><code>American Eagle</code></li><li class="list-group-item"><code>Gänsegeier</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:nomenclaturalCode"></span>
    <span id="nomenclaturalCode"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">nomenclaturalCode</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/nomenclaturalCode">http://rs.tdwg.org/dwc/terms/nomenclaturalCode</a></td></tr>
    <tr><td>Definition</td><td>The nomenclatural code (or codes in the case of an ambiregnal name) under which the dwc:scientificName is constructed.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>ICN</code></li><li class="list-group-item"><code>ICZN</code></li><li class="list-group-item"><code>BC</code></li><li class="list-group-item"><code>ICNCP</code></li><li class="list-group-item"><code>BioCode</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:taxonomicStatus"></span>
    <span id="taxonomicStatus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">taxonomicStatus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/taxonomicStatus">http://rs.tdwg.org/dwc/terms/taxonomicStatus</a></td></tr>
    <tr><td>Definition</td><td>The status of the use of the dwc:scientificName as a label for a taxon. Requires taxonomic opinion to define the scope of a dwc:Taxon. Rules of priority then are used to define the taxonomic status of the nomenclature contained in that scope, combined with the experts opinion. It must be linked to a specific taxonomic reference that defines the concept.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>invalid</code></li><li class="list-group-item"><code>misapplied</code></li><li class="list-group-item"><code>homotypic synonym</code></li><li class="list-group-item"><code>accepted</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:nomenclaturalStatus"></span>
    <span id="nomenclaturalStatus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">nomenclaturalStatus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/nomenclaturalStatus">http://rs.tdwg.org/dwc/terms/nomenclaturalStatus</a></td></tr>
    <tr><td>Definition</td><td>The status related to the original publication of the name and its conformance to the relevant rules of nomenclature. It is based essentially on an algorithm according to the business rules of the code. It requires no taxonomic opinion.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>nom. ambig.</code></li><li class="list-group-item"><code>nom. illeg.</code></li><li class="list-group-item"><code>nom. subnud.</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:taxonRemarks"></span>
    <span id="taxonRemarks"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">taxonRemarks</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/taxonRemarks">http://rs.tdwg.org/dwc/terms/taxonRemarks</a></td></tr>
    <tr><td>Definition</td><td>Comments or notes about the taxon or name.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>this name is a misspelling in common use</code></td></tr>
  </tbody>
</table>


## MeasurementOrFact

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:measurementID">measurementID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:parentMeasurementID">parentMeasurementID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:measurementType">measurementType</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:measurementValue">measurementValue</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:measurementAccuracy">measurementAccuracy</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:measurementUnit">measurementUnit</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:measurementDeterminedBy">measurementDeterminedBy</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:measurementDeterminedDate">measurementDeterminedDate</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:measurementMethod">measurementMethod</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:measurementRemarks">measurementRemarks</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">MeasurementOrFact <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/MeasurementOrFact">http://rs.tdwg.org/dwc/terms/MeasurementOrFact</a></td></tr>
    <tr><td>Definition</td><td>A measurement of or fact about an rdfs:Resource (<a href="http://www.w3.org/2000/01/rdf-schema#Resource">http://www.w3.org/2000/01/rdf-schema#Resource</a>).</td></tr>
    <tr><td>Comments</td><td>Resources can be thought of as identifiable records or instances of classes and may include, but need not be limited to instances of dwc:Occurrence, dwc:Organism, dwc:MaterialEntity, dwc:Event, dcterms:Location, dwc:GeologicalContext, dwc:Identification, or dwc:Taxon.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>the weight of a dwc:Organism in grams</code></li><li class="list-group-item"><code>the number of placental scars</code></li><li class="list-group-item"><code>surface water temperature in Celsius</code></li></ul></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:measurementID"></span>
    <span id="measurementID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementID">http://rs.tdwg.org/dwc/terms/measurementID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the dwc:MeasurementOrFact (information pertaining to measurements, facts, characteristics, or assertions). May be a global unique identifier or an identifier specific to the data set.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>9c752d22-b09a-11e8-96f8-529269fb1459</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:parentMeasurementID"></span>
    <span id="parentMeasurementID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">parentMeasurementID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/parentMeasurementID">http://rs.tdwg.org/dwc/terms/parentMeasurementID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for a broader dwc:MeasurementOrFact that groups this and potentially other dwc:MeasurementOrFacts.</td></tr>
    <tr><td>Comments</td><td>May be a globally unique identifier or an identifier specific to the data set.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>9c752d22-b09a-11e8-96f8-529269fb1459</code></li><li class="list-group-item"><code>E1_E1_O1_M1</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:measurementType"></span>
    <span id="measurementType"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementType</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementType">http://rs.tdwg.org/dwc/terms/measurementType</a></td></tr>
    <tr><td>Definition</td><td>The nature of the measurement, fact, characteristic, or assertion.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>tail length</code></li><li class="list-group-item"><code>temperature</code></li><li class="list-group-item"><code>trap line length</code></li><li class="list-group-item"><code>survey area</code></li><li class="list-group-item"><code>trap type</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:measurementValue"></span>
    <span id="measurementValue"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementValue</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementValue">http://rs.tdwg.org/dwc/terms/measurementValue</a></td></tr>
    <tr><td>Definition</td><td>The value of the measurement, fact, characteristic, or assertion.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>45</code></li><li class="list-group-item"><code>20</code></li><li class="list-group-item"><code>1</code></li><li class="list-group-item"><code>14.5</code></li><li class="list-group-item"><code>UV-light</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:measurementAccuracy"></span>
    <span id="measurementAccuracy"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementAccuracy</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementAccuracy">http://rs.tdwg.org/dwc/terms/measurementAccuracy</a></td></tr>
    <tr><td>Definition</td><td>The description of the potential error associated with the dwc:measurementValue.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>0.01</code></li><li class="list-group-item"><code>normal distribution with variation of 2 m</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:measurementUnit"></span>
    <span id="measurementUnit"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementUnit</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementUnit">http://rs.tdwg.org/dwc/terms/measurementUnit</a></td></tr>
    <tr><td>Definition</td><td>The units associated with the dwc:measurementValue.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use the International System of Units (SI). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>m</code></li><li class="list-group-item"><code>g</code></li><li class="list-group-item"><code>l</code></li><li class="list-group-item"><code>°C</code></li><li class="list-group-item"><code>mm</code></li><li class="list-group-item"><code>km²</code></li><li class="list-group-item"><code>%</code></li><li class="list-group-item"><code>hh:mm:ss</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:measurementDeterminedBy"></span>
    <span id="measurementDeterminedBy"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementDeterminedBy</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementDeterminedBy">http://rs.tdwg.org/dwc/terms/measurementDeterminedBy</a></td></tr>
    <tr><td>Definition</td><td>A list (concatenated and separated) of names of people, groups, or organizations who determined the value of the dwc:MeasurementOrFact.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>Rob Guralnick</code></li><li class="list-group-item"><code>Peter Desmet | Stijn Van Hoey</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:measurementDeterminedDate"></span>
    <span id="measurementDeterminedDate"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementDeterminedDate</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementDeterminedDate">http://rs.tdwg.org/dwc/terms/measurementDeterminedDate</a></td></tr>
    <tr><td>Definition</td><td>The date on which the dwc:MeasurementOrFact was made.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li><li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li><li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li><li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li><li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li><li class="list-group-item"><code>1971</code> (some time in the year 1971)</li><li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li><li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li><li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:measurementMethod"></span>
    <span id="measurementMethod"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementMethod</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementMethod">http://rs.tdwg.org/dwc/terms/measurementMethod</a></td></tr>
    <tr><td>Definition</td><td>A description of or reference to (publication, URI) the method or protocol used to determine the measurement, fact, characteristic, or assertion.</td></tr>
    <tr><td>Comments</td><td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>minimum convex polygon around burrow entrances</code> (for a home range area)</li><li class="list-group-item"><code>barometric altimeter</code> (for an elevation)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:measurementRemarks"></span>
    <span id="measurementRemarks"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementRemarks</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementRemarks">http://rs.tdwg.org/dwc/terms/measurementRemarks</a></td></tr>
    <tr><td>Definition</td><td>Comments or notes accompanying the dwc:MeasurementOrFact.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>tip of tail missing</code></td></tr>
  </tbody>
</table>


## ResourceRelationship

<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:resourceRelationshipID">resourceRelationshipID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:resourceID">resourceID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:relationshipOfResourceID">relationshipOfResourceID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:relatedResourceID">relatedResourceID</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:relationshipOfResource">relationshipOfResource</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:relationshipAccordingTo">relationshipAccordingTo</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:relationshipEstablishedDate">relationshipEstablishedDate</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwc:relationshipRemarks">relationshipRemarks</a>
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">ResourceRelationship <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/ResourceRelationship">http://rs.tdwg.org/dwc/terms/ResourceRelationship</a></td></tr>
    <tr><td>Definition</td><td>A relationship of one rdfs:Resource (<a href="http://www.w3.org/2000/01/rdf-schema#Resource">http://www.w3.org/2000/01/rdf-schema#Resource</a>) to another.</td></tr>
    <tr><td>Comments</td><td>Resources can be thought of as identifiable records or instances of classes and may include, but need not be limited to instances of dwc:Occurrence, dwc:Organism, dwc:MaterialEntity, dwc:Event, dcterms:Location, dwc:GeologicalContext, dwc:Identification, or dwc:Taxon.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>an instance of a dwc:Organism is the mother of another instance of a dwc:Organism</code></li><li class="list-group-item"><code>a uniquely identified dwc:Occurrence represents the same dwc:Occurrence as another uniquely identified dwc:Occurrence</code></li><li class="list-group-item"><code>a dwc:MaterialEntity is a subsample of another dwc:MaterialEntity</code></li></ul></td></tr>
  </tbody>
</table>

<p class="invisible">
  <span id="dwc:resourceRelationshipID"></span>
    <span id="resourceRelationshipID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">resourceRelationshipID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/resourceRelationshipID">http://rs.tdwg.org/dwc/terms/resourceRelationshipID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for an instance of relationship between one resource (the subject) and another (dwc:relatedResource, the object).</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>04b16710-b09c-11e8-96f8-529269fb1459</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:resourceID"></span>
    <span id="resourceID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">resourceID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/resourceID">http://rs.tdwg.org/dwc/terms/resourceID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the resource that is the subject of the relationship.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>f809b9e0-b09b-11e8-96f8-529269fb1459</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:relationshipOfResourceID"></span>
    <span id="relationshipOfResourceID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">relationshipOfResourceID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relationshipOfResourceID">http://rs.tdwg.org/dwc/terms/relationshipOfResourceID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for the relationship type (predicate) that connects the subject identified by dwc:resourceID to its object identified by dwc:relatedResourceID.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use the identifiers of the terms in a controlled vocabulary, such as the OBO Relation Ontology.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="http://purl.obolibrary.org/obo/RO_0002456">http://purl.obolibrary.org/obo/RO_0002456</a></code> (for the relation <code>pollinated by</code>)</li><li class="list-group-item"><code><a href="http://purl.obolibrary.org/obo/RO_0002455">http://purl.obolibrary.org/obo/RO_0002455</a></code> (for the relation <code>pollinates</code>)</li><li class="list-group-item"><code><a href="https://www.inaturalist.org/observation_fields/879">https://www.inaturalist.org/observation_fields/879</a></code> (for the relation <code>eaten by</code>)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:relatedResourceID"></span>
    <span id="relatedResourceID"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">relatedResourceID</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relatedResourceID">http://rs.tdwg.org/dwc/terms/relatedResourceID</a></td></tr>
    <tr><td>Definition</td><td>An identifier for a related resource (the object, rather than the subject of the relationship).</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>dc609808-b09b-11e8-96f8-529269fb1459</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:relationshipOfResource"></span>
    <span id="relationshipOfResource"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">relationshipOfResource</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relationshipOfResource">http://rs.tdwg.org/dwc/terms/relationshipOfResource</a></td></tr>
    <tr><td>Definition</td><td>The relationship of the subject (identified by dwc:resourceID) to the object (identified by dwc:relatedResourceID).</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>same as</code></li><li class="list-group-item"><code>duplicate of</code></li><li class="list-group-item"><code>mother of</code></li><li class="list-group-item"><code>offspring of</code></li><li class="list-group-item"><code>sibling of</code></li><li class="list-group-item"><code>parasite of</code></li><li class="list-group-item"><code>host of</code></li><li class="list-group-item"><code>valid synonym of</code></li><li class="list-group-item"><code>located within</code></li><li class="list-group-item"><code>pollinator of members of taxon</code></li><li class="list-group-item"><code>pollinated specific plant</code></li><li class="list-group-item"><code>pollinated by members of taxon</code></li><li class="list-group-item"><code>on slab with</code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:relationshipAccordingTo"></span>
    <span id="relationshipAccordingTo"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">relationshipAccordingTo</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relationshipAccordingTo">http://rs.tdwg.org/dwc/terms/relationshipAccordingTo</a></td></tr>
    <tr><td>Definition</td><td>The source (person, organization, publication, reference) establishing the relationship between the two resources.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><code>Julie Woodruff</code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:relationshipEstablishedDate"></span>
    <span id="relationshipEstablishedDate"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">relationshipEstablishedDate</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relationshipEstablishedDate">http://rs.tdwg.org/dwc/terms/relationshipEstablishedDate</a></td></tr>
    <tr><td>Definition</td><td>The date-time on which the relationship between the two resources was established.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li><li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li><li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li><li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li><li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li><li class="list-group-item"><code>1971</code> (some time in the year 1971)</li><li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li><li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li><li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwc:relationshipRemarks"></span>
    <span id="relationshipRemarks"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">relationshipRemarks</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relationshipRemarks">http://rs.tdwg.org/dwc/terms/relationshipRemarks</a></td></tr>
    <tr><td>Definition</td><td>Comments or notes about the relationship between the two resources.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>mother and offspring collected from the same nest</code></li><li class="list-group-item"><code>pollinator captured in the act</code></li></ul></td></tr>
  </tbody>
</table>


## UseWithIRI

For more information on `UseWithIRI`, see [Section 2.5 of the RDF Guide](https://dwc.tdwg.org/rdf/#25-terms-in-the-dwciri-namespace-normative).
<div class="my-4">
      <a class="btn btn-sm btn-outline-primary m-1" href="#dcterms:language">language</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:inDescribedPlace">inDescribedPlace</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:identifiedBy">identifiedBy</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:recordedBy">recordedBy</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:toTaxon">toTaxon</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:inCollection">inCollection</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:georeferencedBy">georeferencedBy</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:behavior">behavior</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:caste">caste</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:dataGeneralizations">dataGeneralizations</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:degreeOfEstablishment">degreeOfEstablishment</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:disposition">disposition</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:earliestGeochronologicalEra">earliestGeochronologicalEra</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:establishmentMeans">establishmentMeans</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:eventType">eventType</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:fieldNotes">fieldNotes</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:fieldNumber">fieldNumber</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:footprintSRS">footprintSRS</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:footprintWKT">footprintWKT</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:fromLithostratigraphicUnit">fromLithostratigraphicUnit</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:geodeticDatum">geodeticDatum</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:georeferenceProtocol">georeferenceProtocol</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:georeferenceSources">georeferenceSources</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:georeferenceVerificationStatus">georeferenceVerificationStatus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:habitat">habitat</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:identificationQualifier">identificationQualifier</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:identificationVerificationStatus">identificationVerificationStatus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:inDataset">inDataset</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:informationWithheld">informationWithheld</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:latestGeochronologicalEra">latestGeochronologicalEra</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:lifeStage">lifeStage</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:locationAccordingTo">locationAccordingTo</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:measurementDeterminedBy">measurementDeterminedBy</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:measurementMethod">measurementMethod</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:measurementType">measurementType</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:measurementUnit">measurementUnit</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:measurementValue">measurementValue</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:occurrenceStatus">occurrenceStatus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:organismQuantityType">organismQuantityType</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:pathway">pathway</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:preparations">preparations</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:recordNumber">recordNumber</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:reproductiveCondition">reproductiveCondition</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:sampleSizeUnit">sampleSizeUnit</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:samplingProtocol">samplingProtocol</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:sex">sex</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:typeStatus">typeStatus</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:verbatimCoordinateSystem">verbatimCoordinateSystem</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:verbatimSRS">verbatimSRS</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:verticalDatum">verticalDatum</a>
      <a class="btn btn-sm btn-outline-primary m-1" href="#dwciri:vitality">vitality</a>
  </div>


<p class="invisible">
  <span id="dcterms:language"></span>
    <span id="language"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">language</th></tr>
    <tr><td>Identifier</td><td><a href="http://purl.org/dc/terms/language">http://purl.org/dc/terms/language</a></td></tr>
    <tr><td>Definition</td><td>A language of the resource.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use an IRI from the Library of Congress ISO 639-2 scheme <a href="http://id.loc.gov/vocabulary/iso639-2">http://id.loc.gov/vocabulary/iso639-2</a></td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:inDescribedPlace"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">inDescribedPlace</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/inDescribedPlace">http://rs.tdwg.org/dwc/iri/inDescribedPlace</a></td></tr>
    <tr><td>Definition</td><td>Use to link a dcterms:Location instance subject to the lowest level standardized hierarchically-described resource.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use an IRI from a controlled registry. A "convenience property" that replaces Darwin Core literal-value terms related to locations. See Section 2.7.5 of the Darwin Core RDF Guide for details.</td></tr>
    <tr><td>Examples</td><td><code><a href="http://vocab.getty.edu/tgn/1019987">http://vocab.getty.edu/tgn/1019987</a></code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:identifiedBy"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">identifiedBy</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/identifiedBy">http://rs.tdwg.org/dwc/iri/identifiedBy</a></td></tr>
    <tr><td>Definition</td><td>A person, group, or organization who assigned the dwc:Taxon to the subject.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:recordedBy"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">recordedBy</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/recordedBy">http://rs.tdwg.org/dwc/iri/recordedBy</a></td></tr>
    <tr><td>Definition</td><td>A person, group, or organization responsible for recording the original dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:toTaxon"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">toTaxon</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/toTaxon">http://rs.tdwg.org/dwc/iri/toTaxon</a></td></tr>
    <tr><td>Definition</td><td>Use to link a dwc:Identification instance subject to a taxonomic entity such as a taxon, taxon concept, or taxon name use.</td></tr>
    <tr><td>Comments</td><td>A "convenience property" that replaces Darwin Core literal-value terms related to taxonomic entities. See Section 2.7.4 of the Darwin Core RDF Guide for details.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:inCollection"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">inCollection</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/inCollection">http://rs.tdwg.org/dwc/iri/inCollection</a></td></tr>
    <tr><td>Definition</td><td>Use to link any subject resource that is part of a collection to the collection containing the resource.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use an IRI from a controlled registry. A "convenience property" that replaces literal-value terms related to collections and institutions. See Section 2.7.3 of the Darwin Core RDF Guide for details.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:georeferencedBy"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">georeferencedBy</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferencedBy">http://rs.tdwg.org/dwc/iri/georeferencedBy</a></td></tr>
    <tr><td>Definition</td><td>A person, group, or organization who determined the georeference (spatial representation) for the dcterms:Location.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:behavior"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">behavior</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/behavior">http://rs.tdwg.org/dwc/iri/behavior</a></td></tr>
    <tr><td>Definition</td><td>A description of the behavior shown by the subject at the time the dwc:Occurrence was recorded.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:caste"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">caste</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/caste">http://rs.tdwg.org/dwc/iri/caste</a></td></tr>
    <tr><td>Definition</td><td>Categorisation of individuals for eusocial species (including some mammals and arthropods).</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary that aligns best with the dwc:Taxon. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:dataGeneralizations"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">dataGeneralizations</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/dataGeneralizations">http://rs.tdwg.org/dwc/iri/dataGeneralizations</a></td></tr>
    <tr><td>Definition</td><td>Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:degreeOfEstablishment"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">degreeOfEstablishment</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/degreeOfEstablishment">http://rs.tdwg.org/dwc/iri/degreeOfEstablishment</a></td></tr>
    <tr><td>Definition</td><td>The degree to which a dwc:Organism survives, reproduces, and expands its range at the given place and time.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use IRIs from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/doe/">http://rs.tdwg.org/dwc/doc/doe/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a> . Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcdoe/values/d003">http://rs.tdwg.org/dwcdoe/values/d003</a></code></li><li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcdoe/values/d005">http://rs.tdwg.org/dwcdoe/values/d005</a></code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:disposition"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">disposition</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/disposition">http://rs.tdwg.org/dwc/iri/disposition</a></td></tr>
    <tr><td>Definition</td><td>The current state of a specimen with respect to the collection identified in dwc:collectionCode or dwc:collectionID.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:earliestGeochronologicalEra"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">earliestGeochronologicalEra</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/earliestGeochronologicalEra">http://rs.tdwg.org/dwc/iri/earliestGeochronologicalEra</a></td></tr>
    <tr><td>Definition</td><td>Use to link a dwc:GeologicalContext instance to chronostratigraphic time periods at the lowest possible level in a standardized hierarchy. Use this property to point to the earliest possible geological time period from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.6 of the Darwin Core RDF Guide for details.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:establishmentMeans"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">establishmentMeans</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/establishmentMeans">http://rs.tdwg.org/dwc/iri/establishmentMeans</a></td></tr>
    <tr><td>Definition</td><td>Statement about whether a dwc:Organism has been introduced to a given place and time through the direct or indirect activity of modern humans.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use IRIs from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/em/">http://rs.tdwg.org/dwc/doc/em/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a> . Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcem/values/e001">http://rs.tdwg.org/dwcem/values/e001</a></code></li><li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcem/values/e005">http://rs.tdwg.org/dwcem/values/e005</a></code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:eventType"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">eventType</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/eventType">http://rs.tdwg.org/dwc/iri/eventType</a></td></tr>
    <tr><td>Definition</td><td>The nature of the dwc:Event.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Regardless of the dwc:eventType, the interval of the dwc:Event can be captured in dwc:eventDate. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:fieldNotes"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">fieldNotes</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/fieldNotes">http://rs.tdwg.org/dwc/iri/fieldNotes</a></td></tr>
    <tr><td>Definition</td><td>One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the dwc:Event.</td></tr>
    <tr><td>Comments</td><td>The subject is a dwc:Event instance and the object is a (possibly IRI-identified) resource that is the field notes.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:fieldNumber"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">fieldNumber</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/fieldNumber">http://rs.tdwg.org/dwc/iri/fieldNumber</a></td></tr>
    <tr><td>Definition</td><td>An identifier given to the event in the field. Often serves as a link between field notes and the dwc:Event.</td></tr>
    <tr><td>Comments</td><td>The subject is a (possibly IRI-identified) resource that is the field notes and the object is a dwc:Event instance.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:footprintSRS"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">footprintSRS</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/footprintSRS">http://rs.tdwg.org/dwc/iri/footprintSRS</a></td></tr>
    <tr><td>Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geometry given in dwc:footprintWKT is based.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:footprintWKT"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">footprintWKT</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/footprintWKT">http://rs.tdwg.org/dwc/iri/footprintWKT</a></td></tr>
    <tr><td>Definition</td><td>A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines the dcterms:Location. A dcterms:Location may have both a point-radius representation (see dwc:decimalLatitude) and a footprint representation, and they may differ from each other.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:fromLithostratigraphicUnit"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">fromLithostratigraphicUnit</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/fromLithostratigraphicUnit">http://rs.tdwg.org/dwc/iri/fromLithostratigraphicUnit</a></td></tr>
    <tr><td>Definition</td><td>Use to link a dwc:GeologicalContext instance to an IRI-identified lithostratigraphic unit at the lowest possible level in a hierarchy.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.7 of the Darwin Core RDF Guide for details.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:geodeticDatum"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">geodeticDatum</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/geodeticDatum">http://rs.tdwg.org/dwc/iri/geodeticDatum</a></td></tr>
    <tr><td>Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in dwc:decimalLatitude and dwc:decimalLongitude is based.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use an IRI for the EPSG code of the SRS, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>.</td></tr>
    <tr><td>Examples</td><td><code><a href="https://epsg.io/4326">https://epsg.io/4326</a></code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:georeferenceProtocol"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">georeferenceProtocol</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferenceProtocol">http://rs.tdwg.org/dwc/iri/georeferenceProtocol</a></td></tr>
    <tr><td>Definition</td><td>A description or reference to the methods used to determine the spatial footprint, coordinates, and uncertainties.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:georeferenceSources"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">georeferenceSources</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferenceSources">http://rs.tdwg.org/dwc/iri/georeferenceSources</a></td></tr>
    <tr><td>Definition</td><td>A map, gazetteer, or other resource used to georeference the dcterms:Location.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:georeferenceVerificationStatus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">georeferenceVerificationStatus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferenceVerificationStatus">http://rs.tdwg.org/dwc/iri/georeferenceVerificationStatus</a></td></tr>
    <tr><td>Definition</td><td>A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description for the dcterms:Location of the dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:habitat"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">habitat</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/habitat">http://rs.tdwg.org/dwc/iri/habitat</a></td></tr>
    <tr><td>Definition</td><td>A category or description of the habitat in which the dwc:Event occurred.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:identificationQualifier"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">identificationQualifier</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/identificationQualifier">http://rs.tdwg.org/dwc/iri/identificationQualifier</a></td></tr>
    <tr><td>Definition</td><td>A controlled value to express the determiner's doubts about the dwc:Identification.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:identificationVerificationStatus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">identificationVerificationStatus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/identificationVerificationStatus">http://rs.tdwg.org/dwc/iri/identificationVerificationStatus</a></td></tr>
    <tr><td>Definition</td><td>A categorical indicator of the extent to which the taxonomic identification has been verified to be correct.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects. Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:inDataset"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">inDataset</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/inDataset">http://rs.tdwg.org/dwc/iri/inDataset</a></td></tr>
    <tr><td>Definition</td><td>Use to link a subject dataset record to the dataset which contains it.</td></tr>
    <tr><td>Comments</td><td>A string literal name of the dataset can be provided using the term dwc:datasetName. See the Darwin Core RDF Guide for details.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:informationWithheld"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">informationWithheld</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/informationWithheld">http://rs.tdwg.org/dwc/iri/informationWithheld</a></td></tr>
    <tr><td>Definition</td><td>Additional information that exists, but that has not been shared in the given record.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:latestGeochronologicalEra"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">latestGeochronologicalEra</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/latestGeochronologicalEra">http://rs.tdwg.org/dwc/iri/latestGeochronologicalEra</a></td></tr>
    <tr><td>Definition</td><td>Use to link a dwc:GeologicalContext instance to chronostratigraphic time periods at the lowest possible level in a standardized hierarchy. Use this property to point to the latest possible geological time period from which the dwc:MaterialEntity was collected.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.6 of the Darwin Core RDF Guide for details.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:lifeStage"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">lifeStage</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/lifeStage">http://rs.tdwg.org/dwc/iri/lifeStage</a></td></tr>
    <tr><td>Definition</td><td>The age class or life stage of the dwc:Organism(s) at the time the dwc:Occurrence was recorded.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:locationAccordingTo"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">locationAccordingTo</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/locationAccordingTo">http://rs.tdwg.org/dwc/iri/locationAccordingTo</a></td></tr>
    <tr><td>Definition</td><td>Information about the source of this dcterms:Location information. Could be a publication (gazetteer), institution, or team of individuals.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:measurementDeterminedBy"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementDeterminedBy</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementDeterminedBy">http://rs.tdwg.org/dwc/iri/measurementDeterminedBy</a></td></tr>
    <tr><td>Definition</td><td>A person, group, or organization who determined the value of the dwc:MeasurementOrFact.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:measurementMethod"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementMethod</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementMethod">http://rs.tdwg.org/dwc/iri/measurementMethod</a></td></tr>
    <tr><td>Definition</td><td>The method or protocol used to determine the measurement, fact, characteristic, or assertion.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:measurementType"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementType</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementType">http://rs.tdwg.org/dwc/iri/measurementType</a></td></tr>
    <tr><td>Definition</td><td>The nature of the measurement, fact, characteristic, or assertion.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:measurementUnit"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementUnit</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementUnit">http://rs.tdwg.org/dwc/iri/measurementUnit</a></td></tr>
    <tr><td>Definition</td><td>The units associated with the dwc:measurementValue.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure <a href="http://www.wurvoc.org/vocabularies/om-1.8/">http://www.wurvoc.org/vocabularies/om-1.8/</a> of SI units, derived units, or other non-SI units accepted for use within the SI.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:measurementValue"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">measurementValue</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementValue">http://rs.tdwg.org/dwc/iri/measurementValue</a></td></tr>
    <tr><td>Definition</td><td>The value of the measurement, fact, characteristic, or assertion.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td><code><a href="http://vocab.nerc.ac.uk/collection/L22/current/TOOL0960/">http://vocab.nerc.ac.uk/collection/L22/current/TOOL0960/</a></code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:occurrenceStatus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">occurrenceStatus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/occurrenceStatus">http://rs.tdwg.org/dwc/iri/occurrenceStatus</a></td></tr>
    <tr><td>Definition</td><td>A statement about the presence or absence of a dwc:Taxon at a dcterms:Location.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:organismQuantityType"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">organismQuantityType</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/organismQuantityType">http://rs.tdwg.org/dwc/iri/organismQuantityType</a></td></tr>
    <tr><td>Definition</td><td>The type of quantification system used for the quantity of organisms.</td></tr>
    <tr><td>Comments</td><td>A dwc:organismQuantityType must have a corresponding dwc:organismQuantity.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:pathway"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">pathway</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/pathway">http://rs.tdwg.org/dwc/iri/pathway</a></td></tr>
    <tr><td>Definition</td><td>The process by which a dwc:Organism came to be in a given place at a given time.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use IRIs from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/pw/">http://rs.tdwg.org/dwc/doc/pw/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a> . Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcpw/values/p002">http://rs.tdwg.org/dwcpw/values/p002</a></code></li><li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcpw/values/p046">http://rs.tdwg.org/dwcpw/values/p046</a></code></li></ul></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:preparations"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">preparations</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/preparations">http://rs.tdwg.org/dwc/iri/preparations</a></td></tr>
    <tr><td>Definition</td><td>A preparation or preservation method for a specimen.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:recordNumber"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">recordNumber</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/recordNumber">http://rs.tdwg.org/dwc/iri/recordNumber</a></td></tr>
    <tr><td>Definition</td><td>An identifier given to the dwc:Occurrence at the time it was recorded. Often serves as a link between field notes and a dwc:Occurrence record, such as a specimen collector's number.</td></tr>
    <tr><td>Comments</td><td>The subject is a dwc:Occurrence and the object is a (possibly IRI-identified) resource that is the field notes.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:reproductiveCondition"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">reproductiveCondition</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/reproductiveCondition">http://rs.tdwg.org/dwc/iri/reproductiveCondition</a></td></tr>
    <tr><td>Definition</td><td>The reproductive condition of the biological individual(s) represented in the dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:sampleSizeUnit"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">sampleSizeUnit</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/sampleSizeUnit">http://rs.tdwg.org/dwc/iri/sampleSizeUnit</a></td></tr>
    <tr><td>Definition</td><td>The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling dwc:Event.</td></tr>
    <tr><td>Comments</td><td>A dwciri:sampleSizeUnit must have a corresponding dwc:sampleSizeValue. Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure <a href="http://www.wurvoc.org/vocabularies/om-1.8/">http://www.wurvoc.org/vocabularies/om-1.8/</a> of SI units, derived units, or other non-SI units accepted for use within the SI.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:samplingProtocol"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">samplingProtocol</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/samplingProtocol">http://rs.tdwg.org/dwc/iri/samplingProtocol</a></td></tr>
    <tr><td>Definition</td><td>The methods or protocols used during a dwc:Event, denoted by an IRI.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is describe a dwc:Event with no more than one sampling protocol. In the case of a summary dwc:Event in which a specific protocol can not be attributed to specific dwc:Occurrences, the recommended best practice is to repeat the property for each IRI that denotes a different sampling protocol that applies to the dwc:Occurrence.</td></tr>
    <tr><td>Examples</td><td><code><a href="https://doi.org/10.1111/j.1466-8238.2009.00467.x">https://doi.org/10.1111/j.1466-8238.2009.00467.x</a></code></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:sex"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">sex</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/sex">http://rs.tdwg.org/dwc/iri/sex</a></td></tr>
    <tr><td>Definition</td><td>The sex of the biological individual(s) represented in the dwc:Occurrence.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:typeStatus"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">typeStatus</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/typeStatus">http://rs.tdwg.org/dwc/iri/typeStatus</a></td></tr>
    <tr><td>Definition</td><td>A nomenclatural type (type status, typified scientific name, publication) applied to the subject.</td></tr>
    <tr><td>Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:verbatimCoordinateSystem"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimCoordinateSystem</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/verbatimCoordinateSystem">http://rs.tdwg.org/dwc/iri/verbatimCoordinateSystem</a></td></tr>
    <tr><td>Definition</td><td>The spatial coordinate system for the dwc:verbatimLatitude and dwc:verbatimLongitude or the dwc:verbatimCoordinates of the dcterms:Location.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:verbatimSRS"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verbatimSRS</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/verbatimSRS">http://rs.tdwg.org/dwc/iri/verbatimSRS</a></td></tr>
    <tr><td>Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which coordinates given in dwc:verbatimLatitude and dwc:verbatimLongitude, or dwc:verbatimCoordinates are based.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use an IRI for the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary IRI for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary IRI for the name or code of the ellipsoid, if known.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:verticalDatum"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">verticalDatum</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/verticalDatum">http://rs.tdwg.org/dwc/iri/verticalDatum</a></td></tr>
    <tr><td>Definition</td><td>The vertical datum used as the reference upon which the values in the elevation terms are based.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>
<p class="invisible">
  <span id="dwciri:vitality"></span>
  </p>
<table class="table">
  <tbody>
    <tr class="table-secondary"><th colspan="2">vitality</th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/vitality">http://rs.tdwg.org/dwc/iri/vitality</a></td></tr>
    <tr><td>Definition</td><td>An indication of whether a dwc:Organism was alive or dead at the time of collection or observation.</td></tr>
    <tr><td>Comments</td><td>Recommended best practice is to use a controlled vocabulary. Intended to be used with records having a dwc:basisOfRecord of <code>PreservedSpecimen</code>, <code>MaterialEntity</code>, <code>MaterialSample</code>, or <code>HumanObservation</code>. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    <tr><td>Examples</td><td></td></tr>
  </tbody>
</table>


## LivingSpecimen

<div class="my-4">
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">LivingSpecimen <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/LivingSpecimen">http://rs.tdwg.org/dwc/terms/LivingSpecimen</a></td></tr>
    <tr><td>Definition</td><td>A specimen that is alive.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>a living plant in a botanical garden</code></li><li class="list-group-item"><code>a living animal in a zoo</code></li></ul></td></tr>
  </tbody>
</table>



## PreservedSpecimen

<div class="my-4">
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">PreservedSpecimen <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/PreservedSpecimen">http://rs.tdwg.org/dwc/terms/PreservedSpecimen</a></td></tr>
    <tr><td>Definition</td><td>A specimen that has been preserved.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>a plant on an herbarium sheet</code></li><li class="list-group-item"><code>a cataloged lot of fish in a jar</code></li></ul></td></tr>
  </tbody>
</table>



## FossilSpecimen

<div class="my-4">
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">FossilSpecimen <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/FossilSpecimen">http://rs.tdwg.org/dwc/terms/FossilSpecimen</a></td></tr>
    <tr><td>Definition</td><td>A preserved specimen that is a fossil.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>a body fossil</code></li><li class="list-group-item"><code>a coprolite</code></li><li class="list-group-item"><code>a gastrolith</code></li><li class="list-group-item"><code>an ichnofossil</code></li><li class="list-group-item"><code>a piece of a petrified tree</code></li></ul></td></tr>
  </tbody>
</table>



## MaterialCitation

<div class="my-4">
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">MaterialCitation <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/MaterialCitation">http://rs.tdwg.org/dwc/terms/MaterialCitation</a></td></tr>
    <tr><td>Definition</td><td>A reference to or citation of one, a part of, or multiple specimens in scholarly publications.</td></tr>
    <tr><td>Comments</td><td>This class constitutes a new value for the controlled vocabulary in the recommendations for basisOfRecord. When importing Darwin Core Archives of literature-based datasets to GBIF, the basisOfRecord should be changed from "Occurrence", "PreservedSpecimen" or "Literature" to "MaterialCitation".</td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>a citation of a physical specimen from a scientific collection in a taxonomic treatment in a scientific publication</code></li><li class="list-group-item"><code>a citation of a group of physical specimens, such as paratypes in a taxonomic treatment in a scientific publication</code></li></ul></td></tr>
  </tbody>
</table>



## HumanObservation

<div class="my-4">
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">HumanObservation <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/HumanObservation">http://rs.tdwg.org/dwc/terms/HumanObservation</a></td></tr>
    <tr><td>Definition</td><td>An output of a human observation process.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>evidence of a dwc:Occurrence taken from field notes or literature</code></li><li class="list-group-item"><code>a record of a dwc:Occurrence without physical evidence or evidence captured with a machine</code></li></ul></td></tr>
  </tbody>
</table>



## MachineObservation

<div class="my-4">
  </div>

<table class="table">
  <tbody>
    <tr class="table-primary"><th colspan="2">MachineObservation <span class="badge bg-primary float-end">Class</span></th></tr>
    <tr><td>Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/MachineObservation">http://rs.tdwg.org/dwc/terms/MachineObservation</a></td></tr>
    <tr><td>Definition</td><td>An output of a machine observation process.</td></tr>
    <tr><td>Comments</td><td></td></tr>
    <tr><td>Examples</td><td><ul class="list-group list-group-flush"><li class="list-group-item"><code>a photograph</code></li><li class="list-group-item"><code>a video</code></li><li class="list-group-item"><code>an audio recording</code></li><li class="list-group-item"><code>a remote sensing image</code></li><li class="list-group-item"><code>a dwc:Occurrence record based on telemetry</code></li></ul></td></tr>
  </tbody>
</table>



## Cite Darwin Core

To cite Darwin Core in general, use the peer-reviewed article on Darwin Core:

> Wieczorek J, Bloom D, Guralnick R, Blum S, Döring M, et al. (2012) Darwin Core: An Evolving Community-Developed Biodiversity Data Standard. PLoS ONE 7(1): e29715. <https://doi.org/10.1371/journal.pone.0029715>

To cite the standard document upon which this page is built, use the following:

> Darwin Core Maintenance Group. 2021. List of Darwin Core terms. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/doc/list/>

To cite this document specifically, use the following:

> Darwin Core Maintenance Group. 2021. Darwin Core Quick Reference Guide. Biodiversity Information Standards (TDWG). <https://dwc.tdwg.org/terms/>