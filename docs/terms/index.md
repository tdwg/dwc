---
container: fluid
---

# Darwin Core quick reference guide

This document is intended to be an easy-to-read reference of the currently (as of 2021-07-15) recommended terms maintained as part of the [Darwin Core standard](https://www.tdwg.org/standards/dwc/). This page itself is not part of the standard. It draws on the term names and definitions from the normative part of the standard and combines them with comments and examples that are not normative, but that are meant to help people to use the terms consistently. Categories such as `Occurrence` and `Event` correspond to Darwin Core classes, which are special category terms used to group sets of terms for convenience. Comprehensive metadata for current and obsolete terms in human readable form are found in a [list of terms document](../list/). [Files with lists of these terms](https://github.com/tdwg/dwc/tree/master/dist) and [their full history](https://github.com/tdwg/dwc/blob/master/vocabulary/term_versions.csv) can be found in the [Darwin Core repository](https://github.com/tdwg/dwc).

To cite this document, use the following:

> Darwin Core Maintenance Group. 2021. Darwin Core quick reference guide. Biodiversity Information Standards (TDWG). <https://dwc.tdwg.org/terms/>

To cite the standard document upon which this page is built, use the following:

> Darwin Core Maintenance Group. 2021. List of Darwin Core terms. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/doc/list/>

To cite Darwin Core in general, use the peer-reviewed article on Darwin Core:

> Wieczorek J, Bloom D, Guralnick R, Blum S, Döring M, et al. (2012) Darwin Core: An Evolving Community-Developed Biodiversity Data Standard. PLoS ONE 7(1): e29715. <https://doi.org/10.1371/journal.pone.0029715>

For inquiries about how to use Darwin Core, either enter an issue in the [Darwin Core Questions & Answers site](https://github.com/tdwg/dwc-qa/blob/master/README.md) or enter an issue in the [alternative form](https://tinyurl.com/darwin-qa), which will have the same effect.


## Record-level

This category contains terms that are generic in that they might apply to any type of record in a dataset.
<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dc:type">type</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:modified">modified</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dc:language">language</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:license">license</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:rightsHolder">rightsHolder</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:accessRights">accessRights</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:bibliographicCitation">bibliographicCitation</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:references">references</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:institutionID">institutionID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:collectionID">collectionID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:datasetID">datasetID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:institutionCode">institutionCode</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:collectionCode">collectionCode</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:datasetName">datasetName</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:ownerInstitutionCode">ownerInstitutionCode</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:basisOfRecord">basisOfRecord</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:informationWithheld">informationWithheld</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:dataGeneralizations">dataGeneralizations</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:dynamicProperties">dynamicProperties</a>
    </div>


<p class="invisible">
    <a id="dc:type"></a><a id="type"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">type <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://purl.org/dc/elements/1.1/type">http://purl.org/dc/elements/1.1/type</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The nature or genre of the resource.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Must be populated with a value from the DCMI type vocabulary (<a href="http://dublincore.org/documents/2010/10/11/dcmi-type-vocabulary/">http://dublincore.org/documents/2010/10/11/dcmi-type-vocabulary/</a>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>StillImage</code>, <code>MovingImage</code>, <code>Sound</code>, <code>PhysicalObject</code>, <code>Event</code>, <code>Text</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dcterms:modified"></a><a id="modified"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">modified <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://purl.org/dc/terms/modified">http://purl.org/dc/terms/modified</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The most recent date-time on which the resource was changed.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). <code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC). <code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018). <code>1809-02-12</code> (some time during 12 February 1809). <code>1906-06</code> (some time in June 1906). <code>1971</code> (some time in the year 1971). <code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). <code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909). <code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dc:language"></a><a id="language"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">language <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://purl.org/dc/elements/1.1/language">http://purl.org/dc/elements/1.1/language</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A language of the resource.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary such as RFC 5646.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>en</code> (for English), <code>es</code> (for Spanish)</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dcterms:license"></a><a id="license"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">license <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://purl.org/dc/terms/license">http://purl.org/dc/terms/license</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A legal document giving official permission to do something with the resource.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://creativecommons.org/publicdomain/zero/1.0/legalcode">http://creativecommons.org/publicdomain/zero/1.0/legalcode</a></code>, <code><a href="http://creativecommons.org/licenses/by/4.0/legalcode">http://creativecommons.org/licenses/by/4.0/legalcode</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dcterms:rightsHolder"></a><a id="rightsHolder"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">rightsHolder <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://purl.org/dc/terms/rightsHolder">http://purl.org/dc/terms/rightsHolder</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A person or organization owning or managing rights over the resource.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>The Regents of the University of California</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dcterms:accessRights"></a><a id="accessRights"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">accessRights <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://purl.org/dc/terms/accessRights">http://purl.org/dc/terms/accessRights</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Information about who can access the resource or an indication of its security status.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Access Rights may include information regarding access or restrictions based on privacy, security, or other policies.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>not-for-profit use only</code>, <code><a href="https://www.fieldmuseum.org/field-museum-natural-history-conditions-and-suggested-norms-use-collections-data-and-images">https://www.fieldmuseum.org/field-museum-natural-history-conditions-and-suggested-norms-use-collections-data-and-images</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dcterms:bibliographicCitation"></a><a id="bibliographicCitation"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">bibliographicCitation <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://purl.org/dc/terms/bibliographicCitation">http://purl.org/dc/terms/bibliographicCitation</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A bibliographic reference for the resource as a statement indicating how this record should be cited (attributed) when used.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended practice is to include sufficient bibliographic detail to identify the resource as unambiguously as possible.</td></tr>
        <tr><td class="theme-label">Examples</td><td>Specimen example: <code>Museum of Vertebrate Zoology, UC Berkeley. MVZ Mammal Collection (Arctos). Record ID: <a href="http://arctos.database.museum/guid/MVZ:Mamm:165861?seid=101356">http://arctos.database.museum/guid/MVZ:Mamm:165861?seid=101356</a>. Source: <a href="http://ipt.vertnet.org:8080/ipt/resource.do?r=mvz_mammal">http://ipt.vertnet.org:8080/ipt/resource.do?r=mvz_mammal</a></code>. Taxon example: <code>Oliver P. Pearson. 1985. Los tuco-tucos (genera Ctenomys) de los Parques Nacionales Lanin y Nahuel Huapi, Argentina Historia Natural, 5(37):337-343.</code>.</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dcterms:references"></a><a id="references"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">references <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://purl.org/dc/terms/references">http://purl.org/dc/terms/references</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A related resource that is referenced, cited, or otherwise pointed to by the described resource.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://arctos.database.museum/guid/MVZ:Mamm:165861">http://arctos.database.museum/guid/MVZ:Mamm:165861</a></code>, <code><a href="http://www.catalogueoflife.org/annual-checklist/show_species_details.php?record_id=6197868">http://www.catalogueoflife.org/annual-checklist/show_species_details.php?record_id=6197868</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:institutionID"></a><a id="institutionID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">institutionID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/institutionID">http://rs.tdwg.org/dwc/terms/institutionID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the institution having custody of the object(s) or information referred to in the record.</td></tr>
        <tr><td class="theme-label">Comments</td><td>For physical specimens, the recommended best practice is to use an identifier from a collections registry such as the Global Registry of Biodiversity Repositories (<a href="http://grbio.org/">http://grbio.org/</a>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://biocol.org/urn:lsid:biocol.org:col:34777">http://biocol.org/urn:lsid:biocol.org:col:34777</a></code>, <code><a href="http://grbio.org/cool/km06-gtbn">http://grbio.org/cool/km06-gtbn</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:collectionID"></a><a id="collectionID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">collectionID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/collectionID">http://rs.tdwg.org/dwc/terms/collectionID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the collection or dataset from which the record was derived.</td></tr>
        <tr><td class="theme-label">Comments</td><td>For physical specimens, the recommended best practice is to use an identifier from a collections registry such as the Global Registry of Biodiversity Repositories (<a href="http://grbio.org/">http://grbio.org/</a>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://biocol.org/urn:lsid:biocol.org:col:1001">http://biocol.org/urn:lsid:biocol.org:col:1001</a></code>, <code><a href="http://grbio.org/cool/p5fp-c036">http://grbio.org/cool/p5fp-c036</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:datasetID"></a><a id="datasetID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">datasetID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/datasetID">http://rs.tdwg.org/dwc/terms/datasetID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the set of data. May be a global unique identifier or an identifier specific to a collection or institution.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>b15d4952-7d20-46f1-8a3e-556a512b04c5</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:institutionCode"></a><a id="institutionCode"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">institutionCode <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/institutionCode">http://rs.tdwg.org/dwc/terms/institutionCode</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name (or acronym) in use by the institution having custody of the object(s) or information referred to in the record.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>MVZ</code>, <code>FMNH</code>, <code>CLO</code>, <code>UCMP</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:collectionCode"></a><a id="collectionCode"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">collectionCode <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/collectionCode">http://rs.tdwg.org/dwc/terms/collectionCode</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name, acronym, coden, or initialism identifying the collection or data set from which the record was derived.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Mammals</code>, <code>Hildebrandt</code>, <code>EBIRD</code>, <code>VP</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:datasetName"></a><a id="datasetName"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">datasetName <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/datasetName">http://rs.tdwg.org/dwc/terms/datasetName</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name identifying the data set from which the record was derived.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Grinnell Resurvey Mammals</code>, <code>Lacey Ctenomys Recaptures</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:ownerInstitutionCode"></a><a id="ownerInstitutionCode"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">ownerInstitutionCode <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/ownerInstitutionCode">http://rs.tdwg.org/dwc/terms/ownerInstitutionCode</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name (or acronym) in use by the institution having ownership of the object(s) or information referred to in the record.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>NPS</code>, <code>APN</code>, <code>InBio</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:basisOfRecord"></a><a id="basisOfRecord"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">basisOfRecord <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/basisOfRecord">http://rs.tdwg.org/dwc/terms/basisOfRecord</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The specific nature of the data record.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use the standard label of one of the Darwin Core classes.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>PreservedSpecimen</code>, <code>FossilSpecimen</code>, <code>LivingSpecimen</code>, <code>MaterialSample</code>, <code>Event</code>, <code>HumanObservation</code>, <code>MachineObservation</code>, <code>Taxon</code>, <code>Occurrence</code>, <code>MaterialCitation</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:informationWithheld"></a><a id="informationWithheld"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">informationWithheld <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/informationWithheld">http://rs.tdwg.org/dwc/terms/informationWithheld</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Additional information that exists, but that has not been shared in the given record.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>location information not given for endangered species</code>, <code>collector identities withheld | ask about tissue samples</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:dataGeneralizations"></a><a id="dataGeneralizations"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">dataGeneralizations <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/dataGeneralizations">http://rs.tdwg.org/dwc/terms/dataGeneralizations</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Coordinates generalized from original GPS coordinates to the nearest half degree grid cell</code>.</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:dynamicProperties"></a><a id="dynamicProperties"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">dynamicProperties <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/dynamicProperties">http://rs.tdwg.org/dwc/terms/dynamicProperties</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list of additional measurements, facts, characteristics, or assertions about the record. Meant to provide a mechanism for structured content.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a key:value encoding schema for a data interchange format such as JSON.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>{"heightInMeters":1.5}</code>, <code>{"tragusLengthInMeters":0.014, "weightInGrams":120}</code>, <code>{"natureOfID":"expert identification", "identificationEvidence":"cytochrome B sequence"}</code>, <code>{"relativeHumidity":28, "airTemperatureInCelsius":22, "sampleSizeInKilograms":10}</code>, <code>{"aspectHeading":277, "slopeInDegrees":6}</code>, <code>{"iucnStatus":"vulnerable", "taxonDistribution":"Neuquén, Argentina"}</code></td></tr>
    </tbody>
</table>


## Occurrence

<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:occurrenceID">occurrenceID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:catalogNumber">catalogNumber</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:recordNumber">recordNumber</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:recordedBy">recordedBy</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:recordedByID">recordedByID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:individualCount">individualCount</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:organismQuantity">organismQuantity</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:organismQuantityType">organismQuantityType</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:sex">sex</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:lifeStage">lifeStage</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:reproductiveCondition">reproductiveCondition</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:behavior">behavior</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:establishmentMeans">establishmentMeans</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:degreeOfEstablishment">degreeOfEstablishment</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:pathway">pathway</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:georeferenceVerificationStatus">georeferenceVerificationStatus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:occurrenceStatus">occurrenceStatus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:preparations">preparations</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:disposition">disposition</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:associatedMedia">associatedMedia</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:associatedOccurrences">associatedOccurrences</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:associatedReferences">associatedReferences</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:associatedSequences">associatedSequences</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:associatedTaxa">associatedTaxa</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:otherCatalogNumbers">otherCatalogNumbers</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:occurrenceRemarks">occurrenceRemarks</a>
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">Occurrence <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/Occurrence">http://rs.tdwg.org/dwc/terms/Occurrence</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An existence of an Organism (sensu <a href="http://rs.tdwg.org/dwc/terms/Organism">http://rs.tdwg.org/dwc/terms/Organism</a>) at a particular place at a particular time.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>A wolf pack on the shore of Kluane Lake in 1988. A virus in a plant leaf in the New York Botanical Garden at 15:29 on 2014-10-23. A fungus in Central Park in the summer of 1929.</td></tr>
    </tbody>
</table>

<p class="invisible">
    <a id="dwc:occurrenceID"></a><a id="occurrenceID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">occurrenceID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/occurrenceID">http://rs.tdwg.org/dwc/terms/occurrenceID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the Occurrence (as opposed to a particular digital record of the occurrence). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the occurrenceID globally unique.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a persistent, globally unique identifier.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://arctos.database.museum/guid/MSB:Mamm:233627">http://arctos.database.museum/guid/MSB:Mamm:233627</a></code>, <code>000866d2-c177-4648-a200-ead4007051b9</code>, <code>urn:catalog:UWBM:Bird:89776</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:catalogNumber"></a><a id="catalogNumber"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">catalogNumber <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/catalogNumber">http://rs.tdwg.org/dwc/terms/catalogNumber</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier (preferably unique) for the record within the data set or collection.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>145732</code>, <code>145732a</code>, <code>2008.1334</code>, <code>R-4313</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:recordNumber"></a><a id="recordNumber"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">recordNumber <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/recordNumber">http://rs.tdwg.org/dwc/terms/recordNumber</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier given to the Occurrence at the time it was recorded. Often serves as a link between field notes and an Occurrence record, such as a specimen collector's number.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>OPP 7101</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:recordedBy"></a><a id="recordedBy"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">recordedBy <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/recordedBy">http://rs.tdwg.org/dwc/terms/recordedBy</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original Occurrence. The primary collector or observer, especially one who applies a personal identifier (recordNumber), should be listed first.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>José E. Crespo</code>. <code>Oliver P. Pearson | Anita K. Pearson</code> (where the value in recordNumber <code>OPP 7101</code> corresponds to the collector number for the specimen in the field catalog of Oliver P. Pearson).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:recordedByID"></a><a id="recordedByID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">recordedByID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/recordedByID">http://rs.tdwg.org/dwc/terms/recordedByID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of the globally unique identifier for the person, people, groups, or organizations responsible for recording the original Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to provide a single identifier that disambiguates the details of the identifying agent. If a list is used, it is recommended to separate the values in the list with space vertical bar space ( | ). The order of the identifiers on any list for this term can not be guaranteed to convey any semantics.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a></code> (for an individual); <code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a> | <a href="https://orcid.org/0000-0002-1825-0098">https://orcid.org/0000-0002-1825-0098</a></code> (for a list of people).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:individualCount"></a><a id="individualCount"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">individualCount <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/individualCount">http://rs.tdwg.org/dwc/terms/individualCount</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The number of individuals present at the time of the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>0</code>, <code>1</code>, <code>25</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:organismQuantity"></a><a id="organismQuantity"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">organismQuantity <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismQuantity">http://rs.tdwg.org/dwc/terms/organismQuantity</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A number or enumeration value for the quantity of organisms.</td></tr>
        <tr><td class="theme-label">Comments</td><td>An organismQuantity must have a corresponding organismQuantityType.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>27</code> (organismQuantity) with <code>individuals</code> (organismQuantityType). <code>12.5</code> (organismQuantity) with <code>% biomass</code> (organismQuantityType). <code>r</code> (organismQuantity) with <code>Braun Blanquet Scale</code> (organismQuantityType). <code>many</code> (organismQuantity) with <code>individuals</code> (organismQuantityType).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:organismQuantityType"></a><a id="organismQuantityType"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">organismQuantityType <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismQuantityType">http://rs.tdwg.org/dwc/terms/organismQuantityType</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The type of quantification system used for the quantity of organisms.</td></tr>
        <tr><td class="theme-label">Comments</td><td>A dwc:organismQuantityType must have a corresponding dwc:organismQuantity.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>27</code> (organismQuantity) with <code>individuals</code> (organismQuantityType). <code>12.5</code> (organismQuantity) with <code>%biomass</code> (organismQuantityType). <code>r</code> (organismQuantity) with <code>BraunBlanquetScale</code> (organismQuantityType).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:sex"></a><a id="sex"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">sex <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/sex">http://rs.tdwg.org/dwc/terms/sex</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The sex of the biological individual(s) represented in the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>female</code>, <code>male</code>, <code>hermaphrodite</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:lifeStage"></a><a id="lifeStage"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">lifeStage <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/lifeStage">http://rs.tdwg.org/dwc/terms/lifeStage</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The age class or life stage of the Organism(s) at the time the Occurrence was recorded.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>zygote</code>, <code>larva</code>, <code>juvenile</code>, <code>adult</code>, <code>seedling</code>, <code>flowering</code>, <code>fruiting</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:reproductiveCondition"></a><a id="reproductiveCondition"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">reproductiveCondition <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/reproductiveCondition">http://rs.tdwg.org/dwc/terms/reproductiveCondition</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The reproductive condition of the biological individual(s) represented in the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>non-reproductive</code>, <code>pregnant</code>, <code>in bloom</code>, <code>fruit-bearing</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:behavior"></a><a id="behavior"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">behavior <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/behavior">http://rs.tdwg.org/dwc/terms/behavior</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The behavior shown by the subject at the time the Occurrence was recorded.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>roosting</code>, <code>foraging</code>, <code>running</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:establishmentMeans"></a><a id="establishmentMeans"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">establishmentMeans <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/establishmentMeans">http://rs.tdwg.org/dwc/terms/establishmentMeans</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Statement about whether an organism or organisms have been introduced to a given place and time through the direct or indirect activity of modern humans.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/em/">http://rs.tdwg.org/dwc/doc/em/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>native</code>, <code>nativeReintroduced</code>, <code>introduced</code>, <code>introducedAssistedColonisation</code>, <code>vagrant</code>, <code>uncertain</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:degreeOfEstablishment"></a><a id="degreeOfEstablishment"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">degreeOfEstablishment <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/degreeOfEstablishment">http://rs.tdwg.org/dwc/terms/degreeOfEstablishment</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The degree to which an Organism survives, reproduces, and expands its range at the given place and time.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/doe/">http://rs.tdwg.org/dwc/doc/doe/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>native</code>, <code>captive</code>, <code>cultivated</code>, <code>released</code>, <code>failing</code>, <code>casual</code>, <code>reproducing</code>, <code>established</code>, <code>colonising</code>, <code>invasive</code>, <code>widespreadInvasive</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:pathway"></a><a id="pathway"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">pathway <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/pathway">http://rs.tdwg.org/dwc/terms/pathway</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The process by which an Organism came to be in a given place at a given time.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/pw/">http://rs.tdwg.org/dwc/doc/pw/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>releasedForUse</code>, <code>otherEscape</code>, <code>transportContaminant</code>, <code>transportStowaway</code>, <code>corridor</code>, <code>unaided</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:georeferenceVerificationStatus"></a><a id="georeferenceVerificationStatus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferenceVerificationStatus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferenceVerificationStatus">http://rs.tdwg.org/dwc/terms/georeferenceVerificationStatus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description for the Location of the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>unable to georeference</code>, <code>requires georeference</code>, <code>requires verification</code>, <code>verified by data custodian</code>, <code>verified by contributor</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:occurrenceStatus"></a><a id="occurrenceStatus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">occurrenceStatus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/occurrenceStatus">http://rs.tdwg.org/dwc/terms/occurrenceStatus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A statement about the presence or absence of a Taxon at a Location.</td></tr>
        <tr><td class="theme-label">Comments</td><td>For Occurrences, the default vocabulary is recommended to consist of "present" and "absent", but can be extended by implementers with good justification.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>present</code>, <code>absent</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:preparations"></a><a id="preparations"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">preparations <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/preparations">http://rs.tdwg.org/dwc/terms/preparations</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of preparations and preservation methods for a specimen.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>fossil</code>, <code>cast</code>, <code>photograph</code>, <code>DNA extract</code>, <code>skin | skull | skeleton</code>, <code>whole animal (ETOH) | tissue (EDTA)</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:disposition"></a><a id="disposition"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">disposition <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/disposition">http://rs.tdwg.org/dwc/terms/disposition</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The current state of a specimen with respect to the collection identified in collectionCode or collectionID.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>in collection</code>, <code>missing</code>, <code>voucher elsewhere</code>, <code>duplicates elsewhere</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:associatedMedia"></a><a id="associatedMedia"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">associatedMedia <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedMedia">http://rs.tdwg.org/dwc/terms/associatedMedia</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of identifiers (publication, global unique identifier, URI) of media associated with the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="https://arctos.database.museum/media/10520962">https://arctos.database.museum/media/10520962</a> | <a href="https://arctos.database.museum/media/10520964">https://arctos.database.museum/media/10520964</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:associatedOccurrences"></a><a id="associatedOccurrences"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">associatedOccurrences <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedOccurrences">http://rs.tdwg.org/dwc/terms/associatedOccurrences</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of identifiers of other Occurrence records and their associations to this Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td>This term can be used to provide a list of associations to other Occurrences. Note that the ResourceRelationship class is an alternative means of representing associations, and with more detail. Recommended best practice is to separate the values in a list with space vertical bar space ( | ).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>"parasite collected from":"<a href="https://arctos.database.museum/guid/MSB:Mamm:215895?seid=950760">https://arctos.database.museum/guid/MSB:Mamm:215895?seid=950760</a>"</code>, <code>"encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177394">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177394</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177392">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177392</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3609139">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3609139</a>"</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:associatedReferences"></a><a id="associatedReferences"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">associatedReferences <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedReferences">http://rs.tdwg.org/dwc/terms/associatedReferences</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of identifiers (publication, bibliographic reference, global unique identifier, URI) of literature associated with the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space ( | ). Note that the ResourceRelationship class is an alternative means of representing associations, and with more detail. Note also that the intended usage of the term dcterms:references in Darwin Core when applied to an Occurrence is to point to the definitive source representation of that Occurrence if one is available. Note also that the intended usage of dcterms:bibliographicCitation in Darwin Core when applied to an Occurrence is to provide the preferred way to cite the Occurrence itself.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://www.sciencemag.org/cgi/content/abstract/322/5899/261">http://www.sciencemag.org/cgi/content/abstract/322/5899/261</a></code>, <code>Christopher J. Conroy, Jennifer L. Neuwald. 2008. Phylogeographic study of the California vole, Microtus californicus Journal of Mammalogy, 89(3):755-767.</code>, <code>Steven R. Hoofer and Ronald A. Van Den Bussche. 2001. Phylogenetic Relationships of Plecotine Bats and Allies Based on Mitochondrial Ribosomal Sequences. Journal of Mammalogy 82(1):131-137. | Walker, Faith M., Jeffrey T. Foster, Kevin P. Drees, Carol L. Chambers. 2014. Spotted bat (Euderma maculatum) microsatellite discovery using illumina sequencing. Conservation Genetics Resources.</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:associatedSequences"></a><a id="associatedSequences"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">associatedSequences <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedSequences">http://rs.tdwg.org/dwc/terms/associatedSequences</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of identifiers (publication, global unique identifier, URI) of genetic sequence information associated with the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://www.ncbi.nlm.nih.gov/nuccore/U34853.1">http://www.ncbi.nlm.nih.gov/nuccore/U34853.1</a></code>, <code><a href="http://www.ncbi.nlm.nih.gov/nuccore/GU328060">http://www.ncbi.nlm.nih.gov/nuccore/GU328060</a> | <a href="http://www.ncbi.nlm.nih.gov/nuccore/AF326093">http://www.ncbi.nlm.nih.gov/nuccore/AF326093</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:associatedTaxa"></a><a id="associatedTaxa"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">associatedTaxa <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedTaxa">http://rs.tdwg.org/dwc/terms/associatedTaxa</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of identifiers or names of taxa and the associations of this Occurrence to each of them.</td></tr>
        <tr><td class="theme-label">Comments</td><td>This term can be used to provide a list of associations to Taxa other than the one defined in the Occurrence. Note that the ResourceRelationship class is an alternative means of representing associations, and with more detail. This term is not apt for establishing relationships between Taxa, only between specific Occurrences of an Organism with other Taxa. Recommended best practice is to separate the values in a list with space vertical bar space ( | ).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>"host":"Quercus alba"</code>, <code>"host":"gbif.org/species/2879737"</code>,<code>"parasitoid of":"Cyclocephala signaticollis" | "predator of":"Apis mellifera"</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:otherCatalogNumbers"></a><a id="otherCatalogNumbers"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">otherCatalogNumbers <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/otherCatalogNumbers">http://rs.tdwg.org/dwc/terms/otherCatalogNumbers</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of previous or alternate fully qualified catalog numbers or other human-used identifiers for the same Occurrence, whether in the current or any other data set or collection.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>FMNH:Mammal:1234</code>, <code>NPS YELLO6778 | MBG 33424</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:occurrenceRemarks"></a><a id="occurrenceRemarks"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">occurrenceRemarks <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/occurrenceRemarks">http://rs.tdwg.org/dwc/terms/occurrenceRemarks</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Comments or notes about the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>found dead on road</code></td></tr>
    </tbody>
</table>


## Organism

<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:organismID">organismID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:organismName">organismName</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:organismScope">organismScope</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:associatedOrganisms">associatedOrganisms</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:previousIdentifications">previousIdentifications</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:organismRemarks">organismRemarks</a>
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">Organism <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/Organism">http://rs.tdwg.org/dwc/terms/Organism</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A particular organism or defined group of organisms considered to be taxonomically homogeneous.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Instances of the dwc:Organism class are intended to facilitate linking one or more dwc:Identification instances to one or more dwc:Occurrence instances. Therefore, things that are typically assigned scientific names (such as viruses, hybrids, and lichens) and aggregates whose occurrences are typically recorded (such as packs, clones, and colonies) are included in the scope of this class.</td></tr>
        <tr><td class="theme-label">Examples</td><td>A specific bird. A specific wolf pack. A specific instance of a bacterial culture.</td></tr>
    </tbody>
</table>

<p class="invisible">
    <a id="dwc:organismID"></a><a id="organismID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">organismID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismID">http://rs.tdwg.org/dwc/terms/organismID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the Organism instance (as opposed to a particular digital record of the Organism). May be a globally unique identifier or an identifier specific to the data set.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://arctos.database.museum/guid/WNMU:Mamm:1249">http://arctos.database.museum/guid/WNMU:Mamm:1249</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:organismName"></a><a id="organismName"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">organismName <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismName">http://rs.tdwg.org/dwc/terms/organismName</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A textual name or label assigned to an Organism instance.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Huberta</code>, <code>Boab Prison Tree</code>, <code>J pod</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:organismScope"></a><a id="organismScope"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">organismScope <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismScope">http://rs.tdwg.org/dwc/terms/organismScope</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A description of the kind of Organism instance. Can be used to indicate whether the Organism instance represents a discrete organism or if it represents a particular type of aggregation.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. This term is not intended to be used to specify a type of taxon. To describe the kind of dwc:Organism using a URI object in RDF, use rdf:type (<a href="http://www.w3.org/1999/02/22-rdf-syntax-ns#type">http://www.w3.org/1999/02/22-rdf-syntax-ns#type</a>) instead.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>multicellular organism</code>, <code>virus</code>, <code>clone</code>, <code>pack</code>, <code>colony</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:associatedOrganisms"></a><a id="associatedOrganisms"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">associatedOrganisms <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/associatedOrganisms">http://rs.tdwg.org/dwc/terms/associatedOrganisms</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of identifiers of other Organisms and the associations of this Organism to each of them.</td></tr>
        <tr><td class="theme-label">Comments</td><td>This term can be used to provide a list of associations to other Organisms. Note that the ResourceRelationship class is an alternative means of representing associations, and with more detail. Recommended best practice is to separate the values in a list with space vertical bar space ( | ).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>"sibling of":"<a href="http://arctos.database.museum/guid/DMNS:Mamm:14171">http://arctos.database.museum/guid/DMNS:Mamm:14171</a>"</code>, <code>"parent of":"<a href="http://arctos.database.museum/guid/MSB:Mamm:196208">http://arctos.database.museum/guid/MSB:Mamm:196208</a>" | "parent of":"<a href="http://arctos.database.museum/guid/MSB:Mamm:196523">http://arctos.database.museum/guid/MSB:Mamm:196523</a>" | "sibling of":"<a href="http://arctos.database.museum/guid/MSB:Mamm:142638">http://arctos.database.museum/guid/MSB:Mamm:142638</a>"</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:previousIdentifications"></a><a id="previousIdentifications"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">previousIdentifications <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/previousIdentifications">http://rs.tdwg.org/dwc/terms/previousIdentifications</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of previous assignments of names to the Organism.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Chalepidae</code>, <code>Pinus abies</code>, <code>Anthus sp., field ID by G. Iglesias | Anthus correndera, expert ID by C. Cicero 2009-02-12 based on morphology</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:organismRemarks"></a><a id="organismRemarks"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">organismRemarks <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/organismRemarks">http://rs.tdwg.org/dwc/terms/organismRemarks</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Comments or notes about the Organism instance.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>One of a litter of six</code></td></tr>
    </tbody>
</table>


## MaterialSample

<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:materialSampleID">materialSampleID</a>
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">MaterialSample <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/MaterialSample">http://rs.tdwg.org/dwc/terms/MaterialSample</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A physical result of a sampling (or subsampling) event. In biological collections, the material sample is typically collected, and either preserved or destructively processed.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>A whole organism preserved in a collection. A part of an organism isolated for some purpose. A soil sample. A marine microbial sample.</td></tr>
    </tbody>
</table>

<p class="invisible">
    <a id="dwc:materialSampleID"></a><a id="materialSampleID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">materialSampleID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/materialSampleID">http://rs.tdwg.org/dwc/terms/materialSampleID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the MaterialSample (as opposed to a particular digital record of the material sample). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the materialSampleID globally unique.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a persistent, globally unique identifier.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>06809dc5-f143-459a-be1a-6f03e63fc083</code></td></tr>
    </tbody>
</table>


## Event

<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:eventID">eventID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:parentEventID">parentEventID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:fieldNumber">fieldNumber</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:eventDate">eventDate</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:eventTime">eventTime</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:startDayOfYear">startDayOfYear</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:endDayOfYear">endDayOfYear</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:year">year</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:month">month</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:day">day</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimEventDate">verbatimEventDate</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:habitat">habitat</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:samplingProtocol">samplingProtocol</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:sampleSizeValue">sampleSizeValue</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:sampleSizeUnit">sampleSizeUnit</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:samplingEffort">samplingEffort</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:fieldNotes">fieldNotes</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:eventRemarks">eventRemarks</a>
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">Event <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/Event">http://rs.tdwg.org/dwc/terms/Event</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An action that occurs at some location during some time.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>A specimen collection process. A camera trap image capture.  A marine trawl.</td></tr>
    </tbody>
</table>

<p class="invisible">
    <a id="dwc:eventID"></a><a id="eventID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">eventID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/eventID">http://rs.tdwg.org/dwc/terms/eventID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the set of information associated with an Event (something that occurs at a place and time). May be a global unique identifier or an identifier specific to the data set.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>INBO:VIS:Ev:00009375</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:parentEventID"></a><a id="parentEventID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">parentEventID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/parentEventID">http://rs.tdwg.org/dwc/terms/parentEventID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the broader Event that groups this and potentially other Events.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Use a globally unique identifier for a dwc:Event or an identifier for a dwc:Event that is specific to the data set.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>A1</code> (parentEventID to identify the main Whittaker Plot in nested samples, each with its own eventID - <code>A1:1</code>, <code>A1:2</code>).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:fieldNumber"></a><a id="fieldNumber"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">fieldNumber <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/fieldNumber">http://rs.tdwg.org/dwc/terms/fieldNumber</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier given to the event in the field. Often serves as a link between field notes and the Event.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>RV Sol 87-03-08</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:eventDate"></a><a id="eventDate"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">eventDate <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/eventDate">http://rs.tdwg.org/dwc/terms/eventDate</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The date-time or interval during which an Event occurred. For occurrences, this is the date-time when the event was recorded. Not suitable for a time in a geological context.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). <code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC). <code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018). <code>1809-02-12</code> (some time during 12 February 1809). <code>1906-06</code> (some time in June 1906). <code>1971</code> (some time in the year 1971). <code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). <code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909). <code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:eventTime"></a><a id="eventTime"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">eventTime <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/eventTime">http://rs.tdwg.org/dwc/terms/eventTime</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The time or interval during which an Event occurred.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>14:07-0600</code> (2:07pm in the time zone six hours earlier than UTC). <code>08:40:21Z</code> (8:40:21am UTC). <code>13:00:00Z/15:30:00Z</code> (the interval between 1pm UTC and 3:30pm UTC).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:startDayOfYear"></a><a id="startDayOfYear"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">startDayOfYear <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/startDayOfYear">http://rs.tdwg.org/dwc/terms/startDayOfYear</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The earliest integer day of the year on which the Event occurred (1 for January 1, 365 for December 31, except in a leap year, in which case it is 366).</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1</code> (1 January). <code>366</code> (31 December), <code>365</code> (30 December in a leap year, 31 December in a non-leap year).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:endDayOfYear"></a><a id="endDayOfYear"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">endDayOfYear <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/endDayOfYear">http://rs.tdwg.org/dwc/terms/endDayOfYear</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The latest integer day of the year on which the Event occurred (1 for January 1, 365 for December 31, except in a leap year, in which case it is 366).</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1</code> (1 January). <code>32</code> (1 February). <code>366</code> (31 December). <code>365</code> (30 December in a leap year, 31 December in a non-leap year).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:year"></a><a id="year"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">year <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/year">http://rs.tdwg.org/dwc/terms/year</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The four-digit year in which the Event occurred, according to the Common Era Calendar.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1160</code>, <code>2008</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:month"></a><a id="month"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">month <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/month">http://rs.tdwg.org/dwc/terms/month</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The integer month in which the Event occurred.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1</code> (January). <code>10</code> (October).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:day"></a><a id="day"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">day <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/day">http://rs.tdwg.org/dwc/terms/day</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The integer day of the month on which the Event occurred.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>9</code>, <code>28</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimEventDate"></a><a id="verbatimEventDate"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimEventDate <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimEventDate">http://rs.tdwg.org/dwc/terms/verbatimEventDate</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The verbatim original representation of the date and time information for an Event.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>spring 1910</code>, <code>Marzo 2002</code>, <code>1999-03-XX</code>, <code>17IV1934</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:habitat"></a><a id="habitat"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">habitat <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/habitat">http://rs.tdwg.org/dwc/terms/habitat</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A category or description of the habitat in which the Event occurred.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>oak savanna</code>, <code>pre-cordilleran steppe</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:samplingProtocol"></a><a id="samplingProtocol"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">samplingProtocol <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/samplingProtocol">http://rs.tdwg.org/dwc/terms/samplingProtocol</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The names of, references to, or descriptions of the methods or protocols used during an Event.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is describe an Event with no more than one sampling protocol. In the case of a summary Event with multiple protocols, in which a specific protocol can not be attributed to specific Occurrences, the recommended best practice is to separate the values in a list with space vertical bar space ( | ).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>UV light trap</code>, <code>mist net</code>, <code>bottom trawl</code>, <code>ad hoc observation | point count</code>, <code>Penguins from space: faecal stains reveal the location of emperor penguin colonies, <a href="https://doi.org/10.1111/j.1466-8238.2009.00467.x">https://doi.org/10.1111/j.1466-8238.2009.00467.x</a></code>, <code>Takats et al. 2001. Guidelines for Nocturnal Owl Monitoring in North America. Beaverhill Bird Observatory and Bird Studies Canada, Edmonton, Alberta. 32 pp., <a href="http://www.bsc-eoc.org/download/Owl.pdf">http://www.bsc-eoc.org/download/Owl.pdf</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:sampleSizeValue"></a><a id="sampleSizeValue"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">sampleSizeValue <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/sampleSizeValue">http://rs.tdwg.org/dwc/terms/sampleSizeValue</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A numeric value for a measurement of the size (time duration, length, area, or volume) of a sample in a sampling event.</td></tr>
        <tr><td class="theme-label">Comments</td><td>A sampleSizeValue must have a corresponding sampleSizeUnit. </td></tr>
        <tr><td class="theme-label">Examples</td><td><code>5</code> for sampleSizeValue with <code>metre</code> for sampleSizeUnit.</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:sampleSizeUnit"></a><a id="sampleSizeUnit"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">sampleSizeUnit <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/sampleSizeUnit">http://rs.tdwg.org/dwc/terms/sampleSizeUnit</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling event.</td></tr>
        <tr><td class="theme-label">Comments</td><td>A sampleSizeUnit must have a corresponding sampleSizeValue, e.g., <code>5</code> for sampleSizeValue with <code>metre</code> for sampleSizeUnit.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>minute</code>, <code>hour</code>, <code>day</code>, <code>metre</code>, <code>square metre</code>, <code>cubic metre</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:samplingEffort"></a><a id="samplingEffort"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">samplingEffort <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/samplingEffort">http://rs.tdwg.org/dwc/terms/samplingEffort</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The amount of effort expended during an Event.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>40 trap-nights</code>, <code>10 observer-hours</code>, <code>10 km by foot</code>, <code>30 km by car</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:fieldNotes"></a><a id="fieldNotes"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">fieldNotes <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/fieldNotes">http://rs.tdwg.org/dwc/terms/fieldNotes</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the Event.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Notes available in the Grinnell-Miller Library.</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:eventRemarks"></a><a id="eventRemarks"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">eventRemarks <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/eventRemarks">http://rs.tdwg.org/dwc/terms/eventRemarks</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Comments or notes about the Event.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>After the recent rains the river is nearly at flood stage.</code></td></tr>
    </tbody>
</table>


## Location

<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:locationID">locationID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:higherGeographyID">higherGeographyID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:higherGeography">higherGeography</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:continent">continent</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:waterBody">waterBody</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:islandGroup">islandGroup</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:island">island</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:country">country</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:countryCode">countryCode</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:stateProvince">stateProvince</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:county">county</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:municipality">municipality</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:locality">locality</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimLocality">verbatimLocality</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:minimumElevationInMeters">minimumElevationInMeters</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:maximumElevationInMeters">maximumElevationInMeters</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimElevation">verbatimElevation</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verticalDatum">verticalDatum</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:minimumDepthInMeters">minimumDepthInMeters</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:maximumDepthInMeters">maximumDepthInMeters</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimDepth">verbatimDepth</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:minimumDistanceAboveSurfaceInMeters">minimumDistanceAboveSurfaceInMeters</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:maximumDistanceAboveSurfaceInMeters">maximumDistanceAboveSurfaceInMeters</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:locationAccordingTo">locationAccordingTo</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:locationRemarks">locationRemarks</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:decimalLatitude">decimalLatitude</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:decimalLongitude">decimalLongitude</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:geodeticDatum">geodeticDatum</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:coordinateUncertaintyInMeters">coordinateUncertaintyInMeters</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:coordinatePrecision">coordinatePrecision</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:pointRadiusSpatialFit">pointRadiusSpatialFit</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimCoordinates">verbatimCoordinates</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimLatitude">verbatimLatitude</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimLongitude">verbatimLongitude</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimCoordinateSystem">verbatimCoordinateSystem</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimSRS">verbatimSRS</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:footprintWKT">footprintWKT</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:footprintSRS">footprintSRS</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:footprintSpatialFit">footprintSpatialFit</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:georeferencedBy">georeferencedBy</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:georeferencedDate">georeferencedDate</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:georeferenceProtocol">georeferenceProtocol</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:georeferenceSources">georeferenceSources</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:georeferenceRemarks">georeferenceRemarks</a>
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">Location <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://purl.org/dc/terms/Location">http://purl.org/dc/terms/Location</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A spatial region or named place.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>The municipality of San Carlos de Bariloche, Río Negro, Argentina. The place defined by a georeference.</td></tr>
    </tbody>
</table>

<p class="invisible">
    <a id="dwc:locationID"></a><a id="locationID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">locationID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/locationID">http://rs.tdwg.org/dwc/terms/locationID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the set of location information (data associated with dcterms:Location). May be a global unique identifier or an identifier specific to the data set.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1">https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:higherGeographyID"></a><a id="higherGeographyID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">higherGeographyID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/higherGeographyID">http://rs.tdwg.org/dwc/terms/higherGeographyID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the geographic region within which the Location occurred.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a persistent identifier from a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://vocab.getty.edu/tgn/1002002">http://vocab.getty.edu/tgn/1002002</a></code> (Antártida e Islas del Atlántico Sur, Territorio Nacional de la Tierra del Fuego, Argentina).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:higherGeography"></a><a id="higherGeography"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">higherGeography <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/higherGeography">http://rs.tdwg.org/dwc/terms/higherGeography</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of geographic names less specific than the information captured in the locality term.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>), with terms in order from least specific to most specific.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>North Atlantic Ocean</code>. <code>South America | Argentina | Patagonia | Parque Nacional Nahuel Huapi | Neuquén | Los Lagos</code> (with accompanying values <code>South America</code> in continent, <code>Argentina</code> in country, <code>Neuquén</code> in stateProvince, and <code>Los Lagos</code> in county.</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:continent"></a><a id="continent"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">continent <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/continent">http://rs.tdwg.org/dwc/terms/continent</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name of the continent in which the Location occurs.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Africa</code>, <code>Antarctica</code>, <code>Asia</code>, <code>Europe</code>, <code>North America</code>, <code>Oceania</code>, <code>South America</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:waterBody"></a><a id="waterBody"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">waterBody <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/waterBody">http://rs.tdwg.org/dwc/terms/waterBody</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name of the water body in which the Location occurs.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Indian Ocean</code>, <code>Baltic Sea</code>, <code>Hudson River</code>, <code>Lago Nahuel Huapi</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:islandGroup"></a><a id="islandGroup"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">islandGroup <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/islandGroup">http://rs.tdwg.org/dwc/terms/islandGroup</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name of the island group in which the Location occurs.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Alexander Archipelago</code>, <code>Archipiélago Diego Ramírez</code>, <code>Seychelles</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:island"></a><a id="island"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">island <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/island">http://rs.tdwg.org/dwc/terms/island</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name of the island on or near which the Location occurs.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Nosy Be</code>, <code>Bikini Atoll</code>, <code>Vancouver</code>, <code>Viti Levu</code>, <code>Zanzibar</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:country"></a><a id="country"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">country <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/country">http://rs.tdwg.org/dwc/terms/country</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name of the country or major administrative unit in which the Location occurs.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the Location spans multiple entities at this administrative level or if the Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term higherGeography or in the term locality, or both.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Denmark</code>, <code>Colombia</code>, <code>España</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:countryCode"></a><a id="countryCode"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">countryCode <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/countryCode">http://rs.tdwg.org/dwc/terms/countryCode</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The standard code for the country in which the Location occurs.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use an ISO 3166-1-alpha-2 country code.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>AR</code>, <code>SV</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:stateProvince"></a><a id="stateProvince"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">stateProvince <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/stateProvince">http://rs.tdwg.org/dwc/terms/stateProvince</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the Location occurs.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Montana</code>, <code>Minas Gerais</code>, <code>Córdoba</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:county"></a><a id="county"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">county <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/county">http://rs.tdwg.org/dwc/terms/county</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the Location occurs.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Missoula</code>, <code>Los Lagos</code>, <code>Mataró</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:municipality"></a><a id="municipality"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">municipality <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/municipality">http://rs.tdwg.org/dwc/terms/municipality</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full, unabbreviated name of the next smaller administrative region than county (city, municipality, etc.) in which the Location occurs. Do not use this term for a nearby named place that does not contain the actual location.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Holzminden</code>, <code>Araçatuba</code>, <code>Ga-Segonyana</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:locality"></a><a id="locality"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">locality <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/locality">http://rs.tdwg.org/dwc/terms/locality</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The specific description of the place.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Less specific geographic information can be provided in other geographic terms (higherGeography, continent, country, stateProvince, county, municipality, waterBody, island, islandGroup). This term may contain information modified from the original to correct perceived errors or standardize the description.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Bariloche, 25 km NNE via Ruta Nacional 40 (=Ruta 237)</code>, <code>Queets Rainforest, Olympic National Park</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimLocality"></a><a id="verbatimLocality"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimLocality <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimLocality">http://rs.tdwg.org/dwc/terms/verbatimLocality</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The original textual description of the place.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>25 km NNE Bariloche por R. Nac. 237</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:minimumElevationInMeters"></a><a id="minimumElevationInMeters"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">minimumElevationInMeters <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/minimumElevationInMeters">http://rs.tdwg.org/dwc/terms/minimumElevationInMeters</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The lower limit of the range of elevation (altitude, usually above sea level), in meters.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>-100</code>, <code>802</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:maximumElevationInMeters"></a><a id="maximumElevationInMeters"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">maximumElevationInMeters <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/maximumElevationInMeters">http://rs.tdwg.org/dwc/terms/maximumElevationInMeters</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The upper limit of the range of elevation (altitude, usually above sea level), in meters.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>-205</code>, <code>1236</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimElevation"></a><a id="verbatimElevation"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimElevation <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimElevation">http://rs.tdwg.org/dwc/terms/verbatimElevation</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The original description of the elevation (altitude, usually above sea level) of the Location.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>100-200 m</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verticalDatum"></a><a id="verticalDatum"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verticalDatum <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verticalDatum">http://rs.tdwg.org/dwc/terms/verticalDatum</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The vertical datum used as the reference upon which the values in the elevation terms are based.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>EGM84</code>, <code>EGM96</code>, <code>EGM2008</code>, <code>PGM2000A</code>, <code>PGM2004</code>, <code>PGM2006</code>, <code>PGM2007</code>, <code>epsg:7030</code>, <code>unknown</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:minimumDepthInMeters"></a><a id="minimumDepthInMeters"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">minimumDepthInMeters <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/minimumDepthInMeters">http://rs.tdwg.org/dwc/terms/minimumDepthInMeters</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The lesser depth of a range of depth below the local surface, in meters.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>0</code>, <code>100</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:maximumDepthInMeters"></a><a id="maximumDepthInMeters"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">maximumDepthInMeters <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/maximumDepthInMeters">http://rs.tdwg.org/dwc/terms/maximumDepthInMeters</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The greater depth of a range of depth below the local surface, in meters.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>0</code>, <code>200</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimDepth"></a><a id="verbatimDepth"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimDepth <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimDepth">http://rs.tdwg.org/dwc/terms/verbatimDepth</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The original description of the depth below the local surface.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>100-200 m</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:minimumDistanceAboveSurfaceInMeters"></a><a id="minimumDistanceAboveSurfaceInMeters"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">minimumDistanceAboveSurfaceInMeters <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/minimumDistanceAboveSurfaceInMeters">http://rs.tdwg.org/dwc/terms/minimumDistanceAboveSurfaceInMeters</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The lesser distance in a range of distance from a reference surface in the vertical direction, in meters. Use positive values for locations above the surface, negative values for locations below. If depth measures are given, the reference surface is the location given by the depth, otherwise the reference surface is the location given by the elevation.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>-1.5</code> (below the surface). <code>4.2</code> (above the surface). For a 1.5 meter sediment core from the bottom of a lake (at depth 20m) at 300m elevation: verbatimElevation: <code>300m</code> minimumElevationInMeters: <code>300</code>, maximumElevationInMeters: <code>300</code>, verbatimDepth: <code>20m</code>, minimumDepthInMeters: <code>20</code>, maximumDepthInMeters: <code>20</code>, minimumDistanceAboveSurfaceInMeters: <code>0</code>, maximumDistanceAboveSurfaceInMeters: <code>-1.5</code>.</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:maximumDistanceAboveSurfaceInMeters"></a><a id="maximumDistanceAboveSurfaceInMeters"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">maximumDistanceAboveSurfaceInMeters <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/maximumDistanceAboveSurfaceInMeters">http://rs.tdwg.org/dwc/terms/maximumDistanceAboveSurfaceInMeters</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The greater distance in a range of distance from a reference surface in the vertical direction, in meters. Use positive values for locations above the surface, negative values for locations below. If depth measures are given, the reference surface is the location given by the depth, otherwise the reference surface is the location given by the elevation.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>-1.5</code> (below the surface). <code>4.2</code> (above the surface). For a 1.5 meter sediment core from the bottom of a lake (at depth 20m) at 300m elevation: verbatimElevation: <code>300m</code> minimumElevationInMeters: <code>300</code>, maximumElevationInMeters: <code>300</code>, verbatimDepth: <code>20m</code>, minimumDepthInMeters: <code>20</code>, maximumDepthInMeters: <code>20</code>, minimumDistanceAboveSurfaceInMeters: <code>0</code>, maximumDistanceAboveSurfaceInMeters: <code>-1.5</code>.</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:locationAccordingTo"></a><a id="locationAccordingTo"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">locationAccordingTo <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/locationAccordingTo">http://rs.tdwg.org/dwc/terms/locationAccordingTo</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Information about the source of this Location information. Could be a publication (gazetteer), institution, or team of individuals.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Getty Thesaurus of Geographic Names</code>, <code>GADM</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:locationRemarks"></a><a id="locationRemarks"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">locationRemarks <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/locationRemarks">http://rs.tdwg.org/dwc/terms/locationRemarks</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Comments or notes about the Location.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>under water since 2005</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:decimalLatitude"></a><a id="decimalLatitude"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">decimalLatitude <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/decimalLatitude">http://rs.tdwg.org/dwc/terms/decimalLatitude</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The geographic latitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are north of the Equator, negative values are south of it. Legal values lie between -90 and 90, inclusive.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>-41.0983423</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:decimalLongitude"></a><a id="decimalLongitude"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">decimalLongitude <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/decimalLongitude">http://rs.tdwg.org/dwc/terms/decimalLongitude</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The geographic longitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are east of the Greenwich Meridian, negative values are west of it. Legal values lie between -180 and 180, inclusive.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>-121.1761111</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:geodeticDatum"></a><a id="geodeticDatum"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">geodeticDatum <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/geodeticDatum">http://rs.tdwg.org/dwc/terms/geodeticDatum</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in decimalLatitude and decimalLongitude as based.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>EPSG:4326</code>, <code>WGS84</code>, <code>NAD27</code>, <code>Campo Inchauspe</code>, <code>European 1950</code>, <code>Clarke 1866</code>, <code>unknown</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:coordinateUncertaintyInMeters"></a><a id="coordinateUncertaintyInMeters"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">coordinateUncertaintyInMeters <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters">http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The horizontal distance (in meters) from the given decimalLatitude and decimalLongitude describing the smallest circle containing the whole of the Location. Leave the value empty if the uncertainty is unknown, cannot be estimated, or is not applicable (because there are no coordinates). Zero is not a valid value for this term.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>30</code> (reasonable lower limit on or after 2020-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time). <code>100</code> (reasonable lower limit before 2020-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time). <code>71</code> (uncertainty for a UTM coordinate having 100 meter precision and a known spatial reference system).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:coordinatePrecision"></a><a id="coordinatePrecision"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">coordinatePrecision <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/coordinatePrecision">http://rs.tdwg.org/dwc/terms/coordinatePrecision</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A decimal representation of the precision of the coordinates given in the decimalLatitude and decimalLongitude.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>0.00001</code> (normal GPS limit for decimal degrees). <code>0.000278</code> (nearest second). <code>0.01667</code> (nearest minute). <code>1.0</code> (nearest degree).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:pointRadiusSpatialFit"></a><a id="pointRadiusSpatialFit"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">pointRadiusSpatialFit <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit">http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The ratio of the area of the point-radius (decimalLatitude, decimalLongitude, coordinateUncertaintyInMeters) to the area of the true (original, or most specific) spatial representation of the Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given point-radius does not completely contain the original representation. The pointRadiusSpatialFit is undefined (and should be left empty) if the original representation is a point without uncertainty and the given georeference is not that same point (without uncertainty). If both the original and the given georeference are the same point, the pointRadiusSpatialFit is 1.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (<a href="https://doi.org/10.15468/doc-gg7h-s853">https://doi.org/10.15468/doc-gg7h-s853</a>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>0</code>, <code>1</code>, <code>1.5708</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimCoordinates"></a><a id="verbatimCoordinates"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimCoordinates <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimCoordinates">http://rs.tdwg.org/dwc/terms/verbatimCoordinates</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The verbatim original spatial coordinates of the Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in verbatimSRS and the coordinate system should be stored in verbatimCoordinateSystem.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>41 05 54S 121 05 34W</code>, <code>17T 630000 4833400</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimLatitude"></a><a id="verbatimLatitude"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimLatitude <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimLatitude">http://rs.tdwg.org/dwc/terms/verbatimLatitude</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The verbatim original latitude of the Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in verbatimSRS and the coordinate system should be stored in verbatimCoordinateSystem.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>41 05 54.03S</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimLongitude"></a><a id="verbatimLongitude"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimLongitude <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimLongitude">http://rs.tdwg.org/dwc/terms/verbatimLongitude</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The verbatim original longitude of the Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in verbatimSRS and the coordinate system should be stored in verbatimCoordinateSystem.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>121d 10' 34" W</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimCoordinateSystem"></a><a id="verbatimCoordinateSystem"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimCoordinateSystem <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimCoordinateSystem">http://rs.tdwg.org/dwc/terms/verbatimCoordinateSystem</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The coordinate format for the verbatimLatitude and verbatimLongitude or the verbatimCoordinates of the Location.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>decimal degrees</code>, <code>degrees decimal minutes</code>, <code>degrees minutes seconds</code>, <code>UTM</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimSRS"></a><a id="verbatimSRS"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimSRS <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimSRS">http://rs.tdwg.org/dwc/terms/verbatimSRS</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which coordinates given in verbatimLatitude and verbatimLongitude, or verbatimCoordinates are based.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>unknown</code>, <code>EPSG:4326</code>, <code>WGS84</code>, <code>NAD27</code>, <code>Campo Inchauspe</code>, <code>European 1950</code>, <code>Clarke 1866</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:footprintWKT"></a><a id="footprintWKT"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">footprintWKT <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/footprintWKT">http://rs.tdwg.org/dwc/terms/footprintWKT</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines the Location. A Location may have both a point-radius representation (see decimalLatitude) and a footprint representation, and they may differ from each other.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>POLYGON ((10 20, 11 20, 11 21, 10 21, 10 20))</code> (the one-degree bounding box with opposite corners at longitude=10, latitude=20 and longitude=11, latitude=21)</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:footprintSRS"></a><a id="footprintSRS"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">footprintSRS <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/footprintSRS">http://rs.tdwg.org/dwc/terms/footprintSRS</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geometry given in footprintWKT is based.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>. It is also permitted to provide the SRS in Well-Known-Text, especially if no EPSG code provides the necessary values for the attributes of the SRS. Do not use this term to describe the SRS of the decimalLatitude and decimalLongitude, nor of any verbatim coordinates - use the geodeticDatum and verbatimSRS instead.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>epsg:4326</code>, <code>GEOGCS["GCS_WGS_1984", DATUM["D_WGS_1984", SPHEROID["WGS_1984",6378137,298.257223563]], PRIMEM["Greenwich",0], UNIT["Degree",0.0174532925199433]]</code> (WKT for the standard WGS84 Spatial Reference System EPSG:4326)</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:footprintSpatialFit"></a><a id="footprintSpatialFit"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">footprintSpatialFit <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/footprintSpatialFit">http://rs.tdwg.org/dwc/terms/footprintSpatialFit</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The ratio of the area of the footprint (footprintWKT) to the area of the true (original, or most specific) spatial representation of the Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given footprint does not completely contain the original representation. The footprintSpatialFit is undefined (and should be left empty) if the original representation is a point without uncertainty and the given georeference is not that same point (without uncertainty). If both the original and the given georeference are the same point, the footprintSpatialFit is 1.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (<a href="https://doi.org/10.15468/doc-gg7h-s853">https://doi.org/10.15468/doc-gg7h-s853</a>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>0</code>, <code>1</code>, <code>1.5708</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:georeferencedBy"></a><a id="georeferencedBy"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferencedBy <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferencedBy">http://rs.tdwg.org/dwc/terms/georeferencedBy</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of names of people, groups, or organizations who determined the georeference (spatial representation) for the Location.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Brad Millen (ROM)</code>, <code>Kristina Yamamoto | Janet Fang</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:georeferencedDate"></a><a id="georeferencedDate"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferencedDate <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferencedDate">http://rs.tdwg.org/dwc/terms/georeferencedDate</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The date on which the Location was georeferenced.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). <code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC). <code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018). <code>1809-02-12</code> (some time during 12 February 1809). <code>1906-06</code> (some time in June 1906). <code>1971</code> (some time in the year 1971). <code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). <code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909). <code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:georeferenceProtocol"></a><a id="georeferenceProtocol"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferenceProtocol <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferenceProtocol">http://rs.tdwg.org/dwc/terms/georeferenceProtocol</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A description or reference to the methods used to determine the spatial footprint, coordinates, and uncertainties.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Georeferencing Quick Reference Guide (Zermoglio et al. 2020, <a href="https://doi.org/10.35035/e09p-h128">https://doi.org/10.35035/e09p-h128</a>)</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:georeferenceSources"></a><a id="georeferenceSources"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferenceSources <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferenceSources">http://rs.tdwg.org/dwc/terms/georeferenceSources</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of maps, gazetteers, or other resources used to georeference the Location, described specifically enough to allow anyone in the future to use the same resources.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="https://www.geonames.org/">https://www.geonames.org/</a></code>, <code>USGS 1:24000 Florence Montana Quad 1967 | Terrametrics 2008 on Google Earth</code>, <code>GeoLocate</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:georeferenceRemarks"></a><a id="georeferenceRemarks"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferenceRemarks <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/georeferenceRemarks">http://rs.tdwg.org/dwc/terms/georeferenceRemarks</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Notes or comments about the spatial description determination, explaining assumptions made in addition or opposition to the those formalized in the method referred to in georeferenceProtocol.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Assumed distance by road (Hwy. 101)</code>.</td></tr>
    </tbody>
</table>


## GeologicalContext

<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:geologicalContextID">geologicalContextID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:earliestEonOrLowestEonothem">earliestEonOrLowestEonothem</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:latestEonOrHighestEonothem">latestEonOrHighestEonothem</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:earliestEraOrLowestErathem">earliestEraOrLowestErathem</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:latestEraOrHighestErathem">latestEraOrHighestErathem</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:earliestPeriodOrLowestSystem">earliestPeriodOrLowestSystem</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:latestPeriodOrHighestSystem">latestPeriodOrHighestSystem</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:earliestEpochOrLowestSeries">earliestEpochOrLowestSeries</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:latestEpochOrHighestSeries">latestEpochOrHighestSeries</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:earliestAgeOrLowestStage">earliestAgeOrLowestStage</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:latestAgeOrHighestStage">latestAgeOrHighestStage</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:lowestBiostratigraphicZone">lowestBiostratigraphicZone</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:highestBiostratigraphicZone">highestBiostratigraphicZone</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:lithostratigraphicTerms">lithostratigraphicTerms</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:group">group</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:formation">formation</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:member">member</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:bed">bed</a>
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">GeologicalContext <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/GeologicalContext">http://rs.tdwg.org/dwc/terms/GeologicalContext</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Geological information, such as stratigraphy, that qualifies a region or place.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>A lithostratigraphic layer.</td></tr>
    </tbody>
</table>

<p class="invisible">
    <a id="dwc:geologicalContextID"></a><a id="geologicalContextID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">geologicalContextID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/geologicalContextID">http://rs.tdwg.org/dwc/terms/geologicalContextID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the set of information associated with a GeologicalContext (the location within a geological context, such as stratigraphy). May be a global unique identifier or an identifier specific to the data set.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9">https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:earliestEonOrLowestEonothem"></a><a id="earliestEonOrLowestEonothem"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">earliestEonOrLowestEonothem <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/earliestEonOrLowestEonothem">http://rs.tdwg.org/dwc/terms/earliestEonOrLowestEonothem</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the earliest possible geochronologic eon or lowest chrono-stratigraphic eonothem or the informal name ("Precambrian") attributable to the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Phanerozoic</code>, <code>Proterozoic</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:latestEonOrHighestEonothem"></a><a id="latestEonOrHighestEonothem"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">latestEonOrHighestEonothem <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/latestEonOrHighestEonothem">http://rs.tdwg.org/dwc/terms/latestEonOrHighestEonothem</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the latest possible geochronologic eon or highest chrono-stratigraphic eonothem or the informal name ("Precambrian") attributable to the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Phanerozoic</code>, <code>Proterozoic</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:earliestEraOrLowestErathem"></a><a id="earliestEraOrLowestErathem"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">earliestEraOrLowestErathem <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/earliestEraOrLowestErathem">http://rs.tdwg.org/dwc/terms/earliestEraOrLowestErathem</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the earliest possible geochronologic era or lowest chronostratigraphic erathem attributable to the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Cenozoic</code>, <code>Mesozoic</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:latestEraOrHighestErathem"></a><a id="latestEraOrHighestErathem"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">latestEraOrHighestErathem <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/latestEraOrHighestErathem">http://rs.tdwg.org/dwc/terms/latestEraOrHighestErathem</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the latest possible geochronologic era or highest chronostratigraphic erathem attributable to the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Cenozoic</code>, <code>Mesozoic</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:earliestPeriodOrLowestSystem"></a><a id="earliestPeriodOrLowestSystem"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">earliestPeriodOrLowestSystem <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/earliestPeriodOrLowestSystem">http://rs.tdwg.org/dwc/terms/earliestPeriodOrLowestSystem</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the earliest possible geochronologic period or lowest chronostratigraphic system attributable to the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Neogene</code>, <code>Tertiary</code>, <code>Quaternary</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:latestPeriodOrHighestSystem"></a><a id="latestPeriodOrHighestSystem"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">latestPeriodOrHighestSystem <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/latestPeriodOrHighestSystem">http://rs.tdwg.org/dwc/terms/latestPeriodOrHighestSystem</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the latest possible geochronologic period or highest chronostratigraphic system attributable to the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Neogene</code>, <code>Tertiary</code>, <code>Quaternary</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:earliestEpochOrLowestSeries"></a><a id="earliestEpochOrLowestSeries"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">earliestEpochOrLowestSeries <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/earliestEpochOrLowestSeries">http://rs.tdwg.org/dwc/terms/earliestEpochOrLowestSeries</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the earliest possible geochronologic epoch or lowest chronostratigraphic series attributable to the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Holocene</code>, <code>Pleistocene</code>, <code>Ibexian Series</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:latestEpochOrHighestSeries"></a><a id="latestEpochOrHighestSeries"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">latestEpochOrHighestSeries <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/latestEpochOrHighestSeries">http://rs.tdwg.org/dwc/terms/latestEpochOrHighestSeries</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the latest possible geochronologic epoch or highest chronostratigraphic series attributable to the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Holocene</code>, <code>Pleistocene</code>, <code>Ibexian Series</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:earliestAgeOrLowestStage"></a><a id="earliestAgeOrLowestStage"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">earliestAgeOrLowestStage <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/earliestAgeOrLowestStage">http://rs.tdwg.org/dwc/terms/earliestAgeOrLowestStage</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the earliest possible geochronologic age or lowest chronostratigraphic stage attributable to the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Atlantic</code>, <code>Boreal</code>, <code>Skullrockian</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:latestAgeOrHighestStage"></a><a id="latestAgeOrHighestStage"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">latestAgeOrHighestStage <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/latestAgeOrHighestStage">http://rs.tdwg.org/dwc/terms/latestAgeOrHighestStage</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the latest possible geochronologic age or highest chronostratigraphic stage attributable to the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Atlantic</code>, <code>Boreal</code>, <code>Skullrockian</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:lowestBiostratigraphicZone"></a><a id="lowestBiostratigraphicZone"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">lowestBiostratigraphicZone <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/lowestBiostratigraphicZone">http://rs.tdwg.org/dwc/terms/lowestBiostratigraphicZone</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the lowest possible geological biostratigraphic zone of the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Maastrichtian</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:highestBiostratigraphicZone"></a><a id="highestBiostratigraphicZone"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">highestBiostratigraphicZone <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/highestBiostratigraphicZone">http://rs.tdwg.org/dwc/terms/highestBiostratigraphicZone</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the highest possible geological biostratigraphic zone of the stratigraphic horizon from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Blancan</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:lithostratigraphicTerms"></a><a id="lithostratigraphicTerms"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">lithostratigraphicTerms <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms">http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The combination of all litho-stratigraphic names for the rock from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Pleistocene-Weichselien</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:group"></a><a id="group"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">group <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/group">http://rs.tdwg.org/dwc/terms/group</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the lithostratigraphic group from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Bathurst</code>, <code>Lower Wealden</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:formation"></a><a id="formation"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">formation <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/formation">http://rs.tdwg.org/dwc/terms/formation</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the lithostratigraphic formation from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Notch Peak Formation</code>, <code>House Limestone</code>, <code>Fillmore Formation</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:member"></a><a id="member"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">member <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/member">http://rs.tdwg.org/dwc/terms/member</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the lithostratigraphic member from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Lava Dam Member</code>, <code>Hellnmaria Member</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:bed"></a><a id="bed"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">bed <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/bed">http://rs.tdwg.org/dwc/terms/bed</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name of the lithostratigraphic bed from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Harlem coal</code></td></tr>
    </tbody>
</table>


## Identification

<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:identificationID">identificationID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimIdentification">verbatimIdentification</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:identificationQualifier">identificationQualifier</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:typeStatus">typeStatus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:identifiedBy">identifiedBy</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:identifiedByID">identifiedByID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:dateIdentified">dateIdentified</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:identificationReferences">identificationReferences</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:identificationVerificationStatus">identificationVerificationStatus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:identificationRemarks">identificationRemarks</a>
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">Identification <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/Identification">http://rs.tdwg.org/dwc/terms/Identification</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A taxonomic determination (e.g., the assignment to a taxon).</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>A subspecies determination of an organism.</td></tr>
    </tbody>
</table>

<p class="invisible">
    <a id="dwc:identificationID"></a><a id="identificationID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identificationID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identificationID">http://rs.tdwg.org/dwc/terms/identificationID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the Identification (the body of information associated with the assignment of a scientific name). May be a global unique identifier or an identifier specific to the data set.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>9992</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimIdentification"></a><a id="verbatimIdentification"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimIdentification <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimIdentification">http://rs.tdwg.org/dwc/terms/verbatimIdentification</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A string representing the taxonomic identification as it appeared in the original record.</td></tr>
        <tr><td class="theme-label">Comments</td><td>This term is meant to allow the capture of an unaltered original identification/determination, including identification qualifiers, hybrid formulas, uncertainties, etc. This term is meant to be used in addition to <code>scientificName</code> (and <code>identificationQualifier</code> etc.), not instead of it.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Peromyscus sp.</code>, <code>Ministrymon sp. nov. 1</code>, <code>Anser anser X Branta canadensis</code>, <code>Pachyporidae?</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:identificationQualifier"></a><a id="identificationQualifier"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identificationQualifier <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identificationQualifier">http://rs.tdwg.org/dwc/terms/identificationQualifier</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A brief phrase or a standard term ("cf.", "aff.") to express the determiner's doubts about the Identification.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>aff. agrifolia var. oxyadenia</code> (for <code>Quercus aff. agrifolia var. oxyadenia</code> with accompanying values <code>Quercus</code> in genus, <code>agrifolia</code>  in specificEpithet, <code>oxyadenia</code>  in infraspecificEpithet, and <code>var.</code> in taxonRank. <code>cf. var. oxyadenia</code> for <code>Quercus agrifolia cf. var. oxyadenia</code> with accompanying values <code>Quercus</code> in genus, <code>agrifolia</code> in specificEpithet, <code>oxyadenia</code> in infraspecificEpithet, and <code>var.</code> in taxonRank.</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:typeStatus"></a><a id="typeStatus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">typeStatus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/typeStatus">http://rs.tdwg.org/dwc/terms/typeStatus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of nomenclatural types (type status, typified scientific name, publication) applied to the subject.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>holotype of Ctenomys sociabilis. Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388</code>, <code>holotype of Pinus abies | holotype of Picea abies</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:identifiedBy"></a><a id="identifiedBy"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identifiedBy <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identifiedBy">http://rs.tdwg.org/dwc/terms/identifiedBy</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of names of people, groups, or organizations who assigned the Taxon to the subject.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>James L. Patton</code>, <code>Theodore Pappenfuss | Robert Macey</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:identifiedByID"></a><a id="identifiedByID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identifiedByID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identifiedByID">http://rs.tdwg.org/dwc/terms/identifiedByID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of the globally unique identifier for the person, people, groups, or organizations responsible for assigning the Taxon to the subject.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to provide a single identifier that disambiguates the details of the identifying agent. If a list is used, the order of the identifiers on the list should not be assumed to convey any semantics. Recommended best practice is to separate the values in a list with space vertical bar space ( | ).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a></code> (for an individual), <code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a> | <a href="https://orcid.org/0000-0002-1825-0098">https://orcid.org/0000-0002-1825-0098</a></code> (for a list of people). </td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:dateIdentified"></a><a id="dateIdentified"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">dateIdentified <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/dateIdentified">http://rs.tdwg.org/dwc/terms/dateIdentified</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The date on which the subject was determined as representing the Taxon.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). <code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC). <code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018). <code>1809-02-12</code> (some time during 12 February 1809). <code>1906-06</code> (some time in June 1906). <code>1971</code> (some time in the year 1971). <code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). <code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909). <code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:identificationReferences"></a><a id="identificationReferences"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identificationReferences <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identificationReferences">http://rs.tdwg.org/dwc/terms/identificationReferences</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of references (publication, global unique identifier, URI) used in the Identification.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Aves del Noroeste Patagonico. Christie et al. 2004.</code>, <code>Stebbins, R. Field Guide to Western Reptiles and Amphibians. 3rd Edition. 2003. | Irschick, D.J. and Shaffer, H.B. (1997). The polytypic species revisited: Morphological differentiation among tiger salamanders (Ambystoma tigrinum) (Amphibia: Caudata). Herpetologica, 53(1), 30-49.</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:identificationVerificationStatus"></a><a id="identificationVerificationStatus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identificationVerificationStatus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identificationVerificationStatus">http://rs.tdwg.org/dwc/terms/identificationVerificationStatus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A categorical indicator of the extent to which the taxonomic identification has been verified to be correct.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>0</code> ("unverified" in HISPID/ABCD).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:identificationRemarks"></a><a id="identificationRemarks"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identificationRemarks <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/identificationRemarks">http://rs.tdwg.org/dwc/terms/identificationRemarks</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Comments or notes about the Identification.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Distinguished between Anthus correndera and Anthus hellmayri based on the comparative lengths of the uñas.</code></td></tr>
    </tbody>
</table>


## Taxon

<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:taxonID">taxonID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:scientificNameID">scientificNameID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:acceptedNameUsageID">acceptedNameUsageID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:parentNameUsageID">parentNameUsageID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:originalNameUsageID">originalNameUsageID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:nameAccordingToID">nameAccordingToID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:namePublishedInID">namePublishedInID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:taxonConceptID">taxonConceptID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:scientificName">scientificName</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:acceptedNameUsage">acceptedNameUsage</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:parentNameUsage">parentNameUsage</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:originalNameUsage">originalNameUsage</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:nameAccordingTo">nameAccordingTo</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:namePublishedIn">namePublishedIn</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:namePublishedInYear">namePublishedInYear</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:higherClassification">higherClassification</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:kingdom">kingdom</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:phylum">phylum</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:class">class</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:order">order</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:family">family</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:subfamily">subfamily</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:genus">genus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:genericName">genericName</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:subgenus">subgenus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:infragenericEpithet">infragenericEpithet</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:specificEpithet">specificEpithet</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:infraspecificEpithet">infraspecificEpithet</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:cultivarEpithet">cultivarEpithet</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:taxonRank">taxonRank</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:verbatimTaxonRank">verbatimTaxonRank</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:scientificNameAuthorship">scientificNameAuthorship</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:vernacularName">vernacularName</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:nomenclaturalCode">nomenclaturalCode</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:taxonomicStatus">taxonomicStatus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:nomenclaturalStatus">nomenclaturalStatus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:taxonRemarks">taxonRemarks</a>
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">Taxon <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/Taxon">http://rs.tdwg.org/dwc/terms/Taxon</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A group of organisms (sensu <a href="http://purl.obolibrary.org/obo/OBI_0100026">http://purl.obolibrary.org/obo/OBI_0100026</a>) considered by taxonomists to form a homogeneous unit.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>The genus Truncorotaloides as published by Brönnimann et al. in 1953 in the Journal of Paleontology Vol. 27(6) p. 817-820.</td></tr>
    </tbody>
</table>

<p class="invisible">
    <a id="dwc:taxonID"></a><a id="taxonID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">taxonID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/taxonID">http://rs.tdwg.org/dwc/terms/taxonID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the set of taxon information (data associated with the Taxon class). May be a global unique identifier or an identifier specific to the data set.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>8fa58e08-08de-4ac1-b69c-1235340b7001</code>, <code>32567</code>, <code><a href="https://www.gbif.org/species/212">https://www.gbif.org/species/212</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:scientificNameID"></a><a id="scientificNameID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">scientificNameID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/scientificNameID">http://rs.tdwg.org/dwc/terms/scientificNameID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the nomenclatural (not taxonomic) details of a scientific name.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>urn:lsid:ipni.org:names:37829-1:1.3</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:acceptedNameUsageID"></a><a id="acceptedNameUsageID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">acceptedNameUsageID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/acceptedNameUsageID">http://rs.tdwg.org/dwc/terms/acceptedNameUsageID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the name usage (documented meaning of the name according to a source) of the currently valid (zoological) or accepted (botanical) taxon.</td></tr>
        <tr><td class="theme-label">Comments</td><td>This term should be used for synonyms or misapplied names to refer to the taxonID of a Taxon record that represents the accepted (botanical) or valid (zoological) name. For Darwin Core Archives the related record should be present locally in the same archive.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>tsn:41107</code> (ITIS), <code>urn:lsid:ipni.org:names:320035-2</code> (IPNI), <code>2704179</code> (GBIF), <code>6W3C4</code> (COL)</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:parentNameUsageID"></a><a id="parentNameUsageID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">parentNameUsageID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/parentNameUsageID">http://rs.tdwg.org/dwc/terms/parentNameUsageID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the name usage (documented meaning of the name according to a source) of the direct, most proximate higher-rank parent taxon (in a classification) of the most specific element of the scientificName.</td></tr>
        <tr><td class="theme-label">Comments</td><td>This term should be used for accepted names to refer to the taxonID of a Taxon record that represents the next higher taxon rank in the same taxonomic classification. For Darwin Core Archives the related record should be present locally in the same archive.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>tsn:41074</code> (ITIS), <code>urn:lsid:ipni.org:names:30001404-2</code> (IPNI), <code>2704173</code> (GBIF), <code>6T8N</code> (COL)</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:originalNameUsageID"></a><a id="originalNameUsageID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">originalNameUsageID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/originalNameUsageID">http://rs.tdwg.org/dwc/terms/originalNameUsageID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the name usage (documented meaning of the name according to a source) in which the terminal element of the scientificName was originally established under the rules of the associated nomenclaturalCode.</td></tr>
        <tr><td class="theme-label">Comments</td><td>This term should be used to refer to the taxonID of a Taxon record that represents the usage of the terminal element of the scientificName as originally established under the rules of the associated nomenclaturalCode. For example, for names governed by the ICNafp, this term would establish the relationship between a record representing a subsequent combination and the record for its corresponding basionym. Unlike basionyms, however, this term can apply to scientific names at all ranks. For Darwin Core Archives the related record should be present locally in the same archive.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>tsn:41107</code> (ITIS), <code>urn:lsid:ipni.org:names:320035-2</code> (IPNI), <code>2704179</code> (GBIF), <code>6W3C4</code> (COL)</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:nameAccordingToID"></a><a id="nameAccordingToID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">nameAccordingToID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/nameAccordingToID">http://rs.tdwg.org/dwc/terms/nameAccordingToID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the source in which the specific taxon concept circumscription is defined or implied. See nameAccordingTo.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="https://doi.org/10.1016/S0269-915X(97)80026-2">https://doi.org/10.1016/S0269-915X(97)80026-2</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:namePublishedInID"></a><a id="namePublishedInID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">namePublishedInID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/namePublishedInID">http://rs.tdwg.org/dwc/terms/namePublishedInID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the publication in which the scientificName was originally established under the rules of the associated nomenclaturalCode.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:taxonConceptID"></a><a id="taxonConceptID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">taxonConceptID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/taxonConceptID">http://rs.tdwg.org/dwc/terms/taxonConceptID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the taxonomic concept to which the record refers - not for the nomenclatural details of a taxon.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>8fa58e08-08de-4ac1-b69c-1235340b7001</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:scientificName"></a><a id="scientificName"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">scientificName <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/scientificName">http://rs.tdwg.org/dwc/terms/scientificName</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full scientific name, with authorship and date information if known. When forming part of an Identification, this should be the name in lowest level taxonomic rank that can be determined. This term should not contain identification qualifications, which should instead be supplied in the IdentificationQualifier term.</td></tr>
        <tr><td class="theme-label">Comments</td><td>This term should not contain identification qualifications, which should instead be supplied in the IdentificationQualifier term. When applied to an Organism or Occurrence, this term should be used to represent the scientific name that was applied to the associated Organism in accordance with the Taxon to which it was or is currently identified.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Coleoptera</code> (order). <code>Vespertilionidae</code> (family). <code>Manis</code> (genus). <code>Ctenomys sociabilis</code> (genus + specificEpithet). <code>Ambystoma tigrinum diaboli</code> (genus + specificEpithet + infraspecificEpithet). <code>Roptrocerus typographi (Györfi, 1952)</code> (genus + specificEpithet + scientificNameAuthorship), <code>Quercus agrifolia var. oxyadenia (Torr.) J.T. Howell</code> (genus + specificEpithet + taxonRank + infraspecificEpithet + scientificNameAuthorship).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:acceptedNameUsage"></a><a id="acceptedNameUsage"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">acceptedNameUsage <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/acceptedNameUsage">http://rs.tdwg.org/dwc/terms/acceptedNameUsage</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name, with authorship and date information if known, of the currently valid (zoological) or accepted (botanical) taxon.</td></tr>
        <tr><td class="theme-label">Comments</td><td>The full scientific name, with authorship and date information if known, of the accepted (botanical) or valid (zoological) name in cases where the provided scientificName is considered by the reference indicated in the accordingTo property, or of the content provider, to be a synonym or misapplied name. When applied to an Organism or Occurrence, this term should be used in cases where a content provider regards the provided scientificName to be inconsistent with the taxonomic perspective of the content provider. For example, there are many discrepancies within specimen collections and observation datasets between the recorded name (e.g., the most recent identification from an expert who examined a specimen, or a field identification for an observed organism), and the name asserted by the content provider to be taxonomically accepted.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Tamias minimus</code> (valid name for Eutamias minimus).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:parentNameUsage"></a><a id="parentNameUsage"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">parentNameUsage <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/parentNameUsage">http://rs.tdwg.org/dwc/terms/parentNameUsage</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full name, with authorship and date information if known, of the direct, most proximate higher-rank parent taxon (in a classification) of the most specific element of the scientificName.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Rubiaceae</code>, <code>Gruiformes</code>, <code>Testudinae</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:originalNameUsage"></a><a id="originalNameUsage"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">originalNameUsage <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/originalNameUsage">http://rs.tdwg.org/dwc/terms/originalNameUsage</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The taxon name, with authorship and date information if known, as it originally appeared when first established under the rules of the associated nomenclaturalCode. The basionym (botany) or basonym (bacteriology) of the scientificName or the senior/earlier homonym for replaced names.</td></tr>
        <tr><td class="theme-label">Comments</td><td>The full scientific name, with authorship and date information if known, of the name usage in which the terminal element of the scientificName was originally established under the rules of the associated nomenclaturalCode. For example, for names governed by the ICNafp, this term would indicate the basionym of a record representing a subsequent combination. Unlike basionyms, however, this term can apply to scientific names at all ranks.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Pinus abies</code>, <code>Gasterosteus saltatrix Linnaeus 1768</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:nameAccordingTo"></a><a id="nameAccordingTo"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">nameAccordingTo <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/nameAccordingTo">http://rs.tdwg.org/dwc/terms/nameAccordingTo</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The reference to the source in which the specific taxon concept circumscription is defined or implied - traditionally signified by the Latin "sensu" or "sec." (from secundum, meaning "according to"). For taxa that result from identifications, a reference to the keys, monographs, experts and other sources should be given.</td></tr>
        <tr><td class="theme-label">Comments</td><td>This term provides context to the <code>scientificName</code>. Together with the <code>scientificName</code>, separated by ‘sensu’ or ‘sec.’, it forms the taxon concept label, which may be seen as having the same relationship to <code>taxonConceptID</code> as, for example, <code>acceptedNameUsage</code> has to <code>acceptedNameUsageID</code>. When not provided, in Taxon Core data sets the <code>nameAccordingTo</code> can be taken to be the data set. In this case the data set mostly provides sufficient context to infer the delimitation of the taxon and its relationship with other taxa. In Occurrence Core data sets, when not provided, <code>nameAccordingTo</code> can be an underlying taxonomy of the data set, e.g. Plants of the World Online (<a href="http://powo.science.kew.org/">http://powo.science.kew.org/</a>) for vascular plant records in iNaturalist (in which case it should be provided), or, which is the case for most <code>PreservedSpecimen</code> data sets, the <code>Identification</code>, in which case there is no further context.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Franz NM, Cardona-Duque J (2013) Description of two new species and phylogenetic reassessment of Perelleschus Wibmer & O’Brien, 1986 (Coleoptera: Curculionidae), with a complete taxonomic concept history of Perelleschus sec. Franz & Cardona-Duque, 2013. Syst Biodivers. 11: 209–236.</code> (as the full citation of the Franz & Cardona-Duque (2013) in Perelleschus splendida sec. Franz & Cardona-Duque (2013))</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:namePublishedIn"></a><a id="namePublishedIn"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">namePublishedIn <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/namePublishedIn">http://rs.tdwg.org/dwc/terms/namePublishedIn</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A reference for the publication in which the scientificName was originally established under the rules of the associated nomenclaturalCode.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388</code>, <code>Forel, Auguste, Diagnosies provisoires de quelques espèces nouvelles de fourmis de Madagascar, récoltées par M. Grandidier., Annales de la Societe Entomologique de Belgique, Comptes-rendus des Seances 30, 1886</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:namePublishedInYear"></a><a id="namePublishedInYear"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">namePublishedInYear <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/namePublishedInYear">http://rs.tdwg.org/dwc/terms/namePublishedInYear</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The four-digit year in which the scientificName was published.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1915</code>, <code>2008</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:higherClassification"></a><a id="higherClassification"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">higherClassification <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/higherClassification">http://rs.tdwg.org/dwc/terms/higherClassification</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of taxa names terminating at the rank immediately superior to the taxon referenced in the taxon record.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>), with terms in order from the highest taxonomic rank to the lowest.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Plantae | Tracheophyta | Magnoliopsida | Ranunculales | Ranunculaceae | Ranunculus</code>, <code>Animalia</code>, <code>Animalia | Chordata | Vertebrata | Mammalia | Theria | Eutheria | Rodentia | Hystricognatha | Hystricognathi | Ctenomyidae | Ctenomyini | Ctenomys</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:kingdom"></a><a id="kingdom"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">kingdom <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/kingdom">http://rs.tdwg.org/dwc/terms/kingdom</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full scientific name of the kingdom in which the taxon is classified.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Animalia</code>, <code>Archaea</code>, <code>Bacteria</code>, <code>Chromista</code>, <code>Fungi</code>, <code>Plantae</code>, <code>Protozoa</code>, <code>Viruses</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:phylum"></a><a id="phylum"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">phylum <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/phylum">http://rs.tdwg.org/dwc/terms/phylum</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full scientific name of the phylum or division in which the taxon is classified.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Chordata</code> (phylum). <code>Bryophyta</code> (division).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:class"></a><a id="class"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">class <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/class">http://rs.tdwg.org/dwc/terms/class</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full scientific name of the class in which the taxon is classified.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Mammalia</code>, <code>Hepaticopsida</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:order"></a><a id="order"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">order <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/order">http://rs.tdwg.org/dwc/terms/order</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full scientific name of the order in which the taxon is classified.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Carnivora</code>, <code>Monocleales</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:family"></a><a id="family"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">family <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/family">http://rs.tdwg.org/dwc/terms/family</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full scientific name of the family in which the taxon is classified.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Felidae</code>, <code>Monocleaceae</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:subfamily"></a><a id="subfamily"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">subfamily <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/subfamily">http://rs.tdwg.org/dwc/terms/subfamily</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full scientific name of the subfamily in which the taxon is classified.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Periptyctinae</code>, <code>Orchidoideae</code>, <code>Sphindociinae</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:genus"></a><a id="genus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">genus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/genus">http://rs.tdwg.org/dwc/terms/genus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full scientific name of the genus in which the taxon is classified.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Puma</code>, <code>Monoclea</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:genericName"></a><a id="genericName"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">genericName <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/genericName">http://rs.tdwg.org/dwc/terms/genericName</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The genus part of the scientificName without authorship.</td></tr>
        <tr><td class="theme-label">Comments</td><td>For synonyms the accepted genus and the genus part of the name may be different. The term genericName should be used together with specificEpithet to form a binomial and with infraspecificEpithet to form a trinomial. The term genericName should only be used for combinations. Uninomials of generic rank do not have a genericName.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Felis</code> (for scientificName "Felis concolor", with accompanying values of "Puma concolor" in acceptedNameUsage and "Puma" in genus).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:subgenus"></a><a id="subgenus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">subgenus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/subgenus">http://rs.tdwg.org/dwc/terms/subgenus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The full scientific name of the subgenus in which the taxon is classified. Values should include the genus to avoid homonym confusion.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Strobus</code>, <code>Amerigo</code>, <code>Pilosella</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:infragenericEpithet"></a><a id="infragenericEpithet"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">infragenericEpithet <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/infragenericEpithet">http://rs.tdwg.org/dwc/terms/infragenericEpithet</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The infrageneric part of a binomial name at ranks above species but below genus.</td></tr>
        <tr><td class="theme-label">Comments</td><td>The term infragenericEpithet should be used in conjunction with genericName, specificEpithet, infraspecificEpithet, taxonRank and scientificNameAuthorship to represent the individual elements of the complete scientificName. It can be used to indicate the subgenus placement of a species, which in zoology is often given in parentheses. Can also be used to share infrageneric names such as botanical sections (e.g., <code>Vicia sect. Cracca</code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Abacetillus</code> (for scientificName "Abacetus (Abacetillus) ambiguus", <code>Cracca</code> (for scientificName "Vicia sect. Cracca")</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:specificEpithet"></a><a id="specificEpithet"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">specificEpithet <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/specificEpithet">http://rs.tdwg.org/dwc/terms/specificEpithet</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name of the first or species epithet of the scientificName.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>concolor</code>, <code>gottschei</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:infraspecificEpithet"></a><a id="infraspecificEpithet"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">infraspecificEpithet <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/infraspecificEpithet">http://rs.tdwg.org/dwc/terms/infraspecificEpithet</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The name of the lowest or terminal infraspecific epithet of the scientificName, excluding any rank designation.</td></tr>
        <tr><td class="theme-label">Comments</td><td>In botany, where there can be more than one infraspecific rank, name strings may be provided, in literature and in identifications, that have more than two epithets. Only the last of these epithets is the infraspecificEpithet and only the first and the last epithets belong to the scientificName. For example: the infraspecificEpithet in the string "Indigofera charlieriana subsp. sessilis var. scaberrima" is <code>scaberrima</code> and the scientificName is <code>Indigophera charlieriana var. scaberrima</code>.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>concolor</code> (for scientificName "Puma concolor concolor"), <code>oxyadenia</code> (for scientificName "Quercus agrifolia var. oxyadenia"), <code>laxa</code> (for scientificName "Cheilanthes hirta f. laxa"), <code>scaberrima</code> (for scientificName "Indigofera charlieriana var. scaberrima").</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:cultivarEpithet"></a><a id="cultivarEpithet"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">cultivarEpithet <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/cultivarEpithet">http://rs.tdwg.org/dwc/terms/cultivarEpithet</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Part of the name of a cultivar, cultivar group or grex that follows the scientific name.</td></tr>
        <tr><td class="theme-label">Comments</td><td>According to the Rules of the Cultivated Plant Code, a cultivar name consists of a botanical name followed by a cultivar epithet. The value given as the cultivarEpithet should exclude any quotes. The term taxonRank should be used to indicate which type of cultivated plant name (e.g. cultivar, cultivar group, grex) is concerned. This epithet, including any enclosing apostrophes or suffix, should be provided in scientificName as well.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>King Edward</code> (for scientificName "Solanum tuberosum 'King Edward'" and taxonRank "cultivar"); <code>Mishmiense</code> (for scientificName "Rhododendron boothii Mishmiense Group" and taxonRank "cultivar group"); <code>Atlantis</code> (for scientificName "Paphiopedilum Atlantis grex" and taxonRank "grex").</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:taxonRank"></a><a id="taxonRank"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">taxonRank <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/taxonRank">http://rs.tdwg.org/dwc/terms/taxonRank</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The taxonomic rank of the most specific name in the scientificName.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>subspecies</code>, <code>varietas</code>, <code>forma</code>, <code>species</code>, <code>genus</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:verbatimTaxonRank"></a><a id="verbatimTaxonRank"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimTaxonRank <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/verbatimTaxonRank">http://rs.tdwg.org/dwc/terms/verbatimTaxonRank</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The taxonomic rank of the most specific name in the scientificName as it appears in the original record.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Agamospecies</code>, <code>sub-lesus</code>, <code>prole</code>, <code>apomict</code>, <code>nothogrex</code>, <code>sp.</code>, <code>subsp.</code>, <code>var.</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:scientificNameAuthorship"></a><a id="scientificNameAuthorship"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">scientificNameAuthorship <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/scientificNameAuthorship">http://rs.tdwg.org/dwc/terms/scientificNameAuthorship</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The authorship information for the scientificName formatted according to the conventions of the applicable nomenclaturalCode.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>(Torr.) J.T. Howell</code>, <code>(Martinovský) Tzvelev</code>, <code>(Györfi, 1952)</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:vernacularName"></a><a id="vernacularName"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">vernacularName <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/vernacularName">http://rs.tdwg.org/dwc/terms/vernacularName</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A common or vernacular name.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Andean Condor</code>, <code>Condor Andino</code>, <code>American Eagle</code>, <code>Gänsegeier</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:nomenclaturalCode"></a><a id="nomenclaturalCode"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">nomenclaturalCode <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/nomenclaturalCode">http://rs.tdwg.org/dwc/terms/nomenclaturalCode</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The nomenclatural code (or codes in the case of an ambiregnal name) under which the scientificName is constructed.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>ICN</code>, <code>ICZN</code>, <code>BC</code>, <code>ICNCP</code>, <code>BioCode</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:taxonomicStatus"></a><a id="taxonomicStatus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">taxonomicStatus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/taxonomicStatus">http://rs.tdwg.org/dwc/terms/taxonomicStatus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The status of the use of the scientificName as a label for a taxon. Requires taxonomic opinion to define the scope of a taxon. Rules of priority then are used to define the taxonomic status of the nomenclature contained in that scope, combined with the experts opinion. It must be linked to a specific taxonomic reference that defines the concept.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>invalid</code>, <code>misapplied</code>, <code>homotypic synonym</code>, <code>accepted</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:nomenclaturalStatus"></a><a id="nomenclaturalStatus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">nomenclaturalStatus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/nomenclaturalStatus">http://rs.tdwg.org/dwc/terms/nomenclaturalStatus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The status related to the original publication of the name and its conformance to the relevant rules of nomenclature. It is based essentially on an algorithm according to the business rules of the code. It requires no taxonomic opinion.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>nom. ambig.</code>, <code>nom. illeg.</code>, <code>nom. subnud.</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:taxonRemarks"></a><a id="taxonRemarks"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">taxonRemarks <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/taxonRemarks">http://rs.tdwg.org/dwc/terms/taxonRemarks</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Comments or notes about the taxon or name.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>this name is a misspelling in common use</code></td></tr>
    </tbody>
</table>


## MeasurementOrFact

<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:measurementID">measurementID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:measurementType">measurementType</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:measurementValue">measurementValue</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:measurementAccuracy">measurementAccuracy</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:measurementUnit">measurementUnit</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:measurementDeterminedBy">measurementDeterminedBy</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:measurementDeterminedDate">measurementDeterminedDate</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:measurementMethod">measurementMethod</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:measurementRemarks">measurementRemarks</a>
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">MeasurementOrFact <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/MeasurementOrFact">http://rs.tdwg.org/dwc/terms/MeasurementOrFact</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A measurement of or fact about an rdfs:Resource (<a href="http://www.w3.org/2000/01/rdf-schema#Resource">http://www.w3.org/2000/01/rdf-schema#Resource</a>).</td></tr>
        <tr><td class="theme-label">Comments</td><td>Resources can be thought of as identifiable records or instances of classes and may include, but need not be limited to dwc:Occurrence, dwc:Organism, dwc:MaterialSample, dwc:Event, dwc:Location, dwc:GeologicalContext, dwc:Identification, or dwc:Taxon.</td></tr>
        <tr><td class="theme-label">Examples</td><td>The weight of an organism in grams. The number of placental scars. Surface water temperature in Celsius.</td></tr>
    </tbody>
</table>

<p class="invisible">
    <a id="dwc:measurementID"></a><a id="measurementID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementID">http://rs.tdwg.org/dwc/terms/measurementID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the MeasurementOrFact (information pertaining to measurements, facts, characteristics, or assertions). May be a global unique identifier or an identifier specific to the data set.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>9c752d22-b09a-11e8-96f8-529269fb1459</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:measurementType"></a><a id="measurementType"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementType <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementType">http://rs.tdwg.org/dwc/terms/measurementType</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The nature of the measurement, fact, characteristic, or assertion.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>tail length</code>, <code>temperature</code>, <code>trap line length</code>, <code>survey area</code>, <code>trap type</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:measurementValue"></a><a id="measurementValue"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementValue <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementValue">http://rs.tdwg.org/dwc/terms/measurementValue</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The value of the measurement, fact, characteristic, or assertion.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>45</code>, <code>20</code>, <code>1</code>, <code>14.5</code>, <code>UV-light</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:measurementAccuracy"></a><a id="measurementAccuracy"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementAccuracy <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementAccuracy">http://rs.tdwg.org/dwc/terms/measurementAccuracy</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The description of the potential error associated with the measurementValue.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>0.01</code>, <code>normal distribution with variation of 2 m</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:measurementUnit"></a><a id="measurementUnit"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementUnit <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementUnit">http://rs.tdwg.org/dwc/terms/measurementUnit</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The units associated with the measurementValue.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use the International System of Units (SI).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>mm</code>, <code>C</code>, <code>km</code>, <code>ha</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:measurementDeterminedBy"></a><a id="measurementDeterminedBy"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementDeterminedBy <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementDeterminedBy">http://rs.tdwg.org/dwc/terms/measurementDeterminedBy</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A list (concatenated and separated) of names of people, groups, or organizations who determined the value of the MeasurementOrFact.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Rob Guralnick</code>, <code>Peter Desmet | Stijn Van Hoey</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:measurementDeterminedDate"></a><a id="measurementDeterminedDate"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementDeterminedDate <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementDeterminedDate">http://rs.tdwg.org/dwc/terms/measurementDeterminedDate</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The date on which the MeasurementOrFact was made.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). <code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC). <code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018). <code>1809-02-12</code> (some time during 12 February 1809). <code>1906-06</code> (some time in June 1906). <code>1971</code> (some time in the year 1971). <code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). <code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909). <code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:measurementMethod"></a><a id="measurementMethod"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementMethod <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementMethod">http://rs.tdwg.org/dwc/terms/measurementMethod</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A description of or reference to (publication, URI) the method or protocol used to determine the measurement, fact, characteristic, or assertion.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>minimum convex polygon around burrow entrances</code> (for a home range area). <code>barometric altimeter</code> (for an elevation).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:measurementRemarks"></a><a id="measurementRemarks"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementRemarks <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/measurementRemarks">http://rs.tdwg.org/dwc/terms/measurementRemarks</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Comments or notes accompanying the MeasurementOrFact.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>tip of tail missing</code></td></tr>
    </tbody>
</table>


## ResourceRelationship

<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:resourceRelationshipID">resourceRelationshipID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:resourceID">resourceID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:relationshipOfResourceID">relationshipOfResourceID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:relatedResourceID">relatedResourceID</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:relationshipOfResource">relationshipOfResource</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:relationshipAccordingTo">relationshipAccordingTo</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:relationshipEstablishedDate">relationshipEstablishedDate</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwc:relationshipRemarks">relationshipRemarks</a>
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">ResourceRelationship <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/ResourceRelationship">http://rs.tdwg.org/dwc/terms/ResourceRelationship</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A relationship of one rdfs:Resource (<a href="http://www.w3.org/2000/01/rdf-schema#Resource">http://www.w3.org/2000/01/rdf-schema#Resource</a>) to another.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Resources can be thought of as identifiable records or instances of classes and may include, but need not be limited to dwc:Occurrence, dwc:Organism, dwc:MaterialSample, dwc:Event, dwc:Location, dwc:GeologicalContext, dwc:Identification, or dwc:Taxon.</td></tr>
        <tr><td class="theme-label">Examples</td><td>An instance of an Organism is the mother of another instance of an Organism. A uniquely identified Occurrence represents the same Occurrence as another uniquely identified Occurrence. A MaterialSample is a subsample of another MaterialSample.</td></tr>
    </tbody>
</table>

<p class="invisible">
    <a id="dwc:resourceRelationshipID"></a><a id="resourceRelationshipID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">resourceRelationshipID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/resourceRelationshipID">http://rs.tdwg.org/dwc/terms/resourceRelationshipID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for an instance of relationship between one resource (the subject) and another (relatedResource, the object).</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>04b16710-b09c-11e8-96f8-529269fb1459</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:resourceID"></a><a id="resourceID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">resourceID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/resourceID">http://rs.tdwg.org/dwc/terms/resourceID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the resource that is the subject of the relationship.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>f809b9e0-b09b-11e8-96f8-529269fb1459</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:relationshipOfResourceID"></a><a id="relationshipOfResourceID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">relationshipOfResourceID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relationshipOfResourceID">http://rs.tdwg.org/dwc/terms/relationshipOfResourceID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for the relationship type (predicate) that connects the subject identified by resourceID to its object identified by relatedResourceID.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use the identifiers of the terms in a controlled vocabulary, such as the OBO Relation Ontology.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://purl.obolibrary.org/obo/RO_0002456">http://purl.obolibrary.org/obo/RO_0002456</a></code> (for the relation "pollinated by"), <code><a href="http://purl.obolibrary.org/obo/RO_0002455">http://purl.obolibrary.org/obo/RO_0002455</a></code> (for the relation "pollinates"), <code><a href="https://www.inaturalist.org/observation_fields/879">https://www.inaturalist.org/observation_fields/879</a></code> (for the relation "eaten by")</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:relatedResourceID"></a><a id="relatedResourceID"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">relatedResourceID <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relatedResourceID">http://rs.tdwg.org/dwc/terms/relatedResourceID</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier for a related resource (the object, rather than the subject of the relationship).</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>dc609808-b09b-11e8-96f8-529269fb1459</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:relationshipOfResource"></a><a id="relationshipOfResource"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">relationshipOfResource <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relationshipOfResource">http://rs.tdwg.org/dwc/terms/relationshipOfResource</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The relationship of the subject (identified by resourceID) to the object (identified by relatedResourceID).</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>sameAs</code>, <code>duplicate of</code>, <code>mother of</code>, <code>offspring of</code>, <code>sibling of</code>, <code>parasite of</code>, <code>host of</code>, <code>valid synonym of</code>, <code>located within</code>, <code>pollinator of members of taxon</code>, <code>pollinated specific plant</code>, <code>pollinated by members of taxon</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:relationshipAccordingTo"></a><a id="relationshipAccordingTo"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">relationshipAccordingTo <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relationshipAccordingTo">http://rs.tdwg.org/dwc/terms/relationshipAccordingTo</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The source (person, organization, publication, reference) establishing the relationship between the two resources.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>Julie Woodruff</code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:relationshipEstablishedDate"></a><a id="relationshipEstablishedDate"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">relationshipEstablishedDate <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relationshipEstablishedDate">http://rs.tdwg.org/dwc/terms/relationshipEstablishedDate</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The date-time on which the relationship between the two resources was established.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). <code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC). <code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018). <code>1809-02-12</code> (some time during 12 February 1809). <code>1906-06</code> (some time in June 1906). <code>1971</code> (some time in the year 1971). <code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). <code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909). <code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007).</td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwc:relationshipRemarks"></a><a id="relationshipRemarks"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">relationshipRemarks <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/relationshipRemarks">http://rs.tdwg.org/dwc/terms/relationshipRemarks</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Comments or notes about the relationship between the two resources.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td><code>mother and offspring collected from the same nest</code>, <code>pollinator captured in the act</code></td></tr>
    </tbody>
</table>


## UseWithIRI

For more information on `UseWithIRI`, see [Section 2.5 of the RDF Guide](https://dwc.tdwg.org/rdf/#25-terms-in-the-dwciri-namespace-normative).
<div class="my-4">
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:language">language</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:inDescribedPlace">inDescribedPlace</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:identifiedBy">identifiedBy</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:recordedBy">recordedBy</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:toTaxon">toTaxon</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:inCollection">inCollection</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:georeferencedBy">georeferencedBy</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:behavior">behavior</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:dataGeneralizations">dataGeneralizations</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:degreeOfEstablishment">degreeOfEstablishment</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:disposition">disposition</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:earliestGeochronologicalEra">earliestGeochronologicalEra</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:establishmentMeans">establishmentMeans</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:fieldNotes">fieldNotes</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:fieldNumber">fieldNumber</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:footprintSRS">footprintSRS</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:footprintWKT">footprintWKT</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:fromLithostratigraphicUnit">fromLithostratigraphicUnit</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:geodeticDatum">geodeticDatum</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:georeferenceProtocol">georeferenceProtocol</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:georeferenceSources">georeferenceSources</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:georeferenceVerificationStatus">georeferenceVerificationStatus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:habitat">habitat</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:identificationQualifier">identificationQualifier</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:identificationVerificationStatus">identificationVerificationStatus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:inDataset">inDataset</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:informationWithheld">informationWithheld</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:latestGeochronologicalEra">latestGeochronologicalEra</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:lifeStage">lifeStage</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:locationAccordingTo">locationAccordingTo</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:measurementDeterminedBy">measurementDeterminedBy</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:measurementMethod">measurementMethod</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:measurementType">measurementType</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:measurementUnit">measurementUnit</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:measurementValue">measurementValue</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:occurrenceStatus">occurrenceStatus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:organismQuantityType">organismQuantityType</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:pathway">pathway</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:preparations">preparations</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:recordNumber">recordNumber</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:reproductiveCondition">reproductiveCondition</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:sampleSizeUnit">sampleSizeUnit</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:samplingProtocol">samplingProtocol</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:sex">sex</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:typeStatus">typeStatus</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:verbatimCoordinateSystem">verbatimCoordinateSystem</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:verbatimSRS">verbatimSRS</a>
        <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:verticalDatum">verticalDatum</a>
    </div>


<p class="invisible">
    <a id="dcterms:language"></a><a id="language"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">language <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://purl.org/dc/terms/language">http://purl.org/dc/terms/language</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A language of the resource.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use an IRI from the Library of Congress ISO 639-2 scheme <a href="http://id.loc.gov/vocabulary/iso639-2">http://id.loc.gov/vocabulary/iso639-2</a></td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:inDescribedPlace"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">inDescribedPlace <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/inDescribedPlace">http://rs.tdwg.org/dwc/iri/inDescribedPlace</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Use to link a dcterms:Location instance subject to the lowest level standardized hierarchically-described resource.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use an IRI from a controlled registry. A "convenience property" that replaces Darwin Core literal-value terms related to locations. See Section 2.7.5 of the Darwin Core RDF Guide for details.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://vocab.getty.edu/tgn/1019987">http://vocab.getty.edu/tgn/1019987</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:identifiedBy"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identifiedBy <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/identifiedBy">http://rs.tdwg.org/dwc/iri/identifiedBy</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A person, group, or organization who assigned the Taxon to the subject.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:recordedBy"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">recordedBy <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/recordedBy">http://rs.tdwg.org/dwc/iri/recordedBy</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A person, group, or organization responsible for recording the original Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:toTaxon"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">toTaxon <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/toTaxon">http://rs.tdwg.org/dwc/iri/toTaxon</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Use to link a dwc:Identification instance subject to a taxonomic entity such as a taxon, taxon concept, or taxon name use.</td></tr>
        <tr><td class="theme-label">Comments</td><td>A "convenience property" that replaces Darwin Core literal-value terms related to taxonomic entities. See Section 2.7.4 of the Darwin Core RDF Guide for details.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:inCollection"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">inCollection <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/inCollection">http://rs.tdwg.org/dwc/iri/inCollection</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Use to link any subject resource that is part of a collection to the collection containing the resource.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use an IRI from a controlled registry. A "convenience property" that replaces literal-value terms related to collections and institutions. See Section 2.7.3 of the Darwin Core RDF Guide for details.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:georeferencedBy"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferencedBy <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferencedBy">http://rs.tdwg.org/dwc/iri/georeferencedBy</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A person, group, or organization who determined the georeference (spatial representation) for the Location.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:behavior"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">behavior <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/behavior">http://rs.tdwg.org/dwc/iri/behavior</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A description of the behavior shown by the subject at the time the Occurrence was recorded.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:dataGeneralizations"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">dataGeneralizations <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/dataGeneralizations">http://rs.tdwg.org/dwc/iri/dataGeneralizations</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:degreeOfEstablishment"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">degreeOfEstablishment <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/degreeOfEstablishment">http://rs.tdwg.org/dwc/iri/degreeOfEstablishment</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The degree to which an Organism survives, reproduces, and expands its range at the given place and time.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use IRIs from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/doe/">http://rs.tdwg.org/dwc/doc/doe/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a> . Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://rs.tdwg.org/dwcdoe/values/d003">http://rs.tdwg.org/dwcdoe/values/d003</a></code>, <code><a href="http://rs.tdwg.org/dwcdoe/values/d005">http://rs.tdwg.org/dwcdoe/values/d005</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:disposition"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">disposition <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/disposition">http://rs.tdwg.org/dwc/iri/disposition</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The current state of a specimen with respect to the collection identified in collectionCode or collectionID.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:earliestGeochronologicalEra"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">earliestGeochronologicalEra <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/earliestGeochronologicalEra">http://rs.tdwg.org/dwc/iri/earliestGeochronologicalEra</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Use to link a dwc:GeologicalContext instance to chronostratigraphic time periods at the lowest possible level in a standardized hierarchy.   Use this property to point to the earliest possible geological time period from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.6 of the Darwin Core RDF Guide for details.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:establishmentMeans"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">establishmentMeans <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/establishmentMeans">http://rs.tdwg.org/dwc/iri/establishmentMeans</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The process by which the biological individual(s) represented in the Occurrence became established at the location.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use IRIs from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/em/">http://rs.tdwg.org/dwc/doc/em/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a> . Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://rs.tdwg.org/dwcem/values/e001">http://rs.tdwg.org/dwcem/values/e001</a></code>, <code><a href="http://rs.tdwg.org/dwcem/values/e005">http://rs.tdwg.org/dwcem/values/e005</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:fieldNotes"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">fieldNotes <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/fieldNotes">http://rs.tdwg.org/dwc/iri/fieldNotes</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the Event.</td></tr>
        <tr><td class="theme-label">Comments</td><td>The subject is a dwc:Event instance and the object is a (possibly IRI-identified) resource that is the field notes.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:fieldNumber"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">fieldNumber <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/fieldNumber">http://rs.tdwg.org/dwc/iri/fieldNumber</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier given to the event in the field. Often serves as a link between field notes and the Event.</td></tr>
        <tr><td class="theme-label">Comments</td><td>The subject is a (possibly IRI-identified) resource that is the field notes and the object is a dwc:Event instance.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:footprintSRS"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">footprintSRS <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/footprintSRS">http://rs.tdwg.org/dwc/iri/footprintSRS</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geometry given in footprintWKT is based.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:footprintWKT"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">footprintWKT <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/footprintWKT">http://rs.tdwg.org/dwc/iri/footprintWKT</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines the Location. A Location may have both a point-radius representation (see decimalLatitude) and a footprint representation, and they may differ from each other.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:fromLithostratigraphicUnit"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">fromLithostratigraphicUnit <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/fromLithostratigraphicUnit">http://rs.tdwg.org/dwc/iri/fromLithostratigraphicUnit</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Use to link a dwc:GeologicalContext instance to an IRI-identified lithostratigraphic unit at the lowest possible level in a hierarchy.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.7 of the Darwin Core RDF Guide for details.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:geodeticDatum"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">geodeticDatum <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/geodeticDatum">http://rs.tdwg.org/dwc/iri/geodeticDatum</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in decimalLatitude and decimalLongitude as based.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use an IRI for the EPSG code of the SRS, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="https://epsg.io/4326">https://epsg.io/4326</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:georeferenceProtocol"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferenceProtocol <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferenceProtocol">http://rs.tdwg.org/dwc/iri/georeferenceProtocol</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A description or reference to the methods used to determine the spatial footprint, coordinates, and uncertainties.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:georeferenceSources"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferenceSources <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferenceSources">http://rs.tdwg.org/dwc/iri/georeferenceSources</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A map, gazetteer, or other resource used to georeference the Location.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:georeferenceVerificationStatus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferenceVerificationStatus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferenceVerificationStatus">http://rs.tdwg.org/dwc/iri/georeferenceVerificationStatus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description for the Location of the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:habitat"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">habitat <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/habitat">http://rs.tdwg.org/dwc/iri/habitat</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A category or description of the habitat in which the Event occurred.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:identificationQualifier"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identificationQualifier <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/identificationQualifier">http://rs.tdwg.org/dwc/iri/identificationQualifier</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A controlled value to express the determiner's doubts about the Identification.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:identificationVerificationStatus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identificationVerificationStatus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/identificationVerificationStatus">http://rs.tdwg.org/dwc/iri/identificationVerificationStatus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A categorical indicator of the extent to which the taxonomic identification has been verified to be correct.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects. Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:inDataset"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">inDataset <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/inDataset">http://rs.tdwg.org/dwc/iri/inDataset</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Use to link a subject dataset record to the dataset which contains it.</td></tr>
        <tr><td class="theme-label">Comments</td><td>A string literal name of the dataset can be provided using the term dwc:datasetName. See the Darwin Core RDF Guide for details.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:informationWithheld"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">informationWithheld <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/informationWithheld">http://rs.tdwg.org/dwc/iri/informationWithheld</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Additional information that exists, but that has not been shared in the given record.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:latestGeochronologicalEra"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">latestGeochronologicalEra <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/latestGeochronologicalEra">http://rs.tdwg.org/dwc/iri/latestGeochronologicalEra</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Use to link a dwc:GeologicalContext instance to chronostratigraphic time periods at the lowest possible level in a standardized hierarchy.   Use this property to point to the latest possible geological time period from which the cataloged item was collected.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.6 of the Darwin Core RDF Guide for details.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:lifeStage"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">lifeStage <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/lifeStage">http://rs.tdwg.org/dwc/iri/lifeStage</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The age class or life stage of the Organism(s) at the time the Occurrence was recorded.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:locationAccordingTo"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">locationAccordingTo <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/locationAccordingTo">http://rs.tdwg.org/dwc/iri/locationAccordingTo</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>Information about the source of this Location information. Could be a publication (gazetteer), institution, or team of individuals.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:measurementDeterminedBy"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementDeterminedBy <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementDeterminedBy">http://rs.tdwg.org/dwc/iri/measurementDeterminedBy</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A person, group, or organization who determined the value of the MeasurementOrFact.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:measurementMethod"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementMethod <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementMethod">http://rs.tdwg.org/dwc/iri/measurementMethod</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The method or protocol used to determine the measurement, fact, characteristic, or assertion.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:measurementType"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementType <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementType">http://rs.tdwg.org/dwc/iri/measurementType</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The nature of the measurement, fact, characteristic, or assertion.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:measurementUnit"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementUnit <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementUnit">http://rs.tdwg.org/dwc/iri/measurementUnit</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The units associated with the measurementValue.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use the International System of Units (SI).</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:measurementValue"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementValue <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementValue">http://rs.tdwg.org/dwc/iri/measurementValue</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The value of the measurement, fact, characteristic, or assertion.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://vocab.nerc.ac.uk/collection/L22/current/TOOL0960/">http://vocab.nerc.ac.uk/collection/L22/current/TOOL0960/</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:occurrenceStatus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">occurrenceStatus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/occurrenceStatus">http://rs.tdwg.org/dwc/iri/occurrenceStatus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A statement about the presence or absence of a Taxon at a Location.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:organismQuantityType"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">organismQuantityType <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/organismQuantityType">http://rs.tdwg.org/dwc/iri/organismQuantityType</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The type of quantification system used for the quantity of organisms.</td></tr>
        <tr><td class="theme-label">Comments</td><td>A dwc:organismQuantityType must have a corresponding dwc:organismQuantity.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:pathway"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">pathway <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/pathway">http://rs.tdwg.org/dwc/iri/pathway</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The process by which an Organism came to be in a given place at a given time.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use IRIs from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/pw/">http://rs.tdwg.org/dwc/doc/pw/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a> . Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="http://rs.tdwg.org/dwcpw/values/p002">http://rs.tdwg.org/dwcpw/values/p002</a></code>, <code><a href="http://rs.tdwg.org/dwcpw/values/p046">http://rs.tdwg.org/dwcpw/values/p046</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:preparations"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">preparations <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/preparations">http://rs.tdwg.org/dwc/iri/preparations</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A preparation or preservation method for a specimen.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:recordNumber"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">recordNumber <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/recordNumber">http://rs.tdwg.org/dwc/iri/recordNumber</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An identifier given to the Occurrence at the time it was recorded. Often serves as a link between field notes and an Occurrence record, such as a specimen collector's number.</td></tr>
        <tr><td class="theme-label">Comments</td><td>The subject is a dwc:Occurrence and the object is a (possibly IRI-identified) resource that is the field notes.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:reproductiveCondition"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">reproductiveCondition <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/reproductiveCondition">http://rs.tdwg.org/dwc/iri/reproductiveCondition</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The reproductive condition of the biological individual(s) represented in the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:sampleSizeUnit"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">sampleSizeUnit <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/sampleSizeUnit">http://rs.tdwg.org/dwc/iri/sampleSizeUnit</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling event.</td></tr>
        <tr><td class="theme-label">Comments</td><td>A sampleSizeUnit must have a corresponding sampleSizeValue. Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure <a href="http://www.wurvoc.org/vocabularies/om-1.8/">http://www.wurvoc.org/vocabularies/om-1.8/</a> of SI units, derived units, or other non-SI units accepted for use within the SI.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:samplingProtocol"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">samplingProtocol <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/samplingProtocol">http://rs.tdwg.org/dwc/iri/samplingProtocol</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The methods or protocols used during an Event, denoted by an IRI.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is describe an Event with no more than one sampling protocol. In the case of a summary Event in which a specific protocol can not be attributed to specific Occurrences, the recommended best practice is to repeat the property for each IRI that denotes a different sampling protocol that applies to the Occurrence.</td></tr>
        <tr><td class="theme-label">Examples</td><td><code><a href="https://doi.org/10.1111/j.1466-8238.2009.00467.x">https://doi.org/10.1111/j.1466-8238.2009.00467.x</a></code></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:sex"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">sex <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/sex">http://rs.tdwg.org/dwc/iri/sex</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The sex of the biological individual(s) represented in the Occurrence.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:typeStatus"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">typeStatus <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/typeStatus">http://rs.tdwg.org/dwc/iri/typeStatus</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A nomenclatural type (type status, typified scientific name, publication) applied to the subject.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:verbatimCoordinateSystem"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimCoordinateSystem <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/verbatimCoordinateSystem">http://rs.tdwg.org/dwc/iri/verbatimCoordinateSystem</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The spatial coordinate system for the verbatimLatitude and verbatimLongitude or the verbatimCoordinates of the Location.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:verbatimSRS"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimSRS <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/verbatimSRS">http://rs.tdwg.org/dwc/iri/verbatimSRS</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which coordinates given in verbatimLatitude and verbatimLongitude, or verbatimCoordinates are based.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use an IRI for the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary IRI for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary IRI for the name or code of the ellipsoid, if known.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>
<p class="invisible">
    <a id="dwciri:verticalDatum"></a></p>
<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verticalDatum <span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/verticalDatum">http://rs.tdwg.org/dwc/iri/verticalDatum</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>The vertical datum used as the reference upon which the values in the elevation terms are based.</td></tr>
        <tr><td class="theme-label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
        <tr><td class="theme-label">Examples</td><td></td></tr>
    </tbody>
</table>


## LivingSpecimen

<div class="my-4">
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">LivingSpecimen <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/LivingSpecimen">http://rs.tdwg.org/dwc/terms/LivingSpecimen</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A specimen that is alive.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>A living plant in a botanical garden. A living animal in a zoo.</td></tr>
    </tbody>
</table>



## PreservedSpecimen

<div class="my-4">
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">PreservedSpecimen <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/PreservedSpecimen">http://rs.tdwg.org/dwc/terms/PreservedSpecimen</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A specimen that has been preserved.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>A plant on an herbarium sheet. A cataloged lot of fish in a jar.</td></tr>
    </tbody>
</table>



## FossilSpecimen

<div class="my-4">
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">FossilSpecimen <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/FossilSpecimen">http://rs.tdwg.org/dwc/terms/FossilSpecimen</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A preserved specimen that is a fossil.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>A body fossil. A coprolite. A gastrolith. An ichnofossil. A piece of a petrified tree.</td></tr>
    </tbody>
</table>



## MaterialCitation

<div class="my-4">
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">MaterialCitation <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/MaterialCitation">http://rs.tdwg.org/dwc/terms/MaterialCitation</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>A reference to or citation of one, a part of, or multiple specimens in scholarly publications.</td></tr>
        <tr><td class="theme-label">Comments</td><td>This class constitutes a new value for the controlled vocabulary in the recommendations for basisOfRecord. When importing Darwin Core Archives of literature-based datasets to GBIF, the basisOfRecord should be changed from “Occurrence”, "PreservedSpecimen" or "Literature" to “MaterialCitation”.</td></tr>
        <tr><td class="theme-label">Examples</td><td>A citation of a physical specimen from a scientific collection in a taxonomic treatment in a scientific publication. A citation of a group of physical specimens, such as paratypes in a taxonomic treatment in a scientific publication. An occurrence mentioned in a field note book.</td></tr>
    </tbody>
</table>



## HumanObservation

<div class="my-4">
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">HumanObservation <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/HumanObservation">http://rs.tdwg.org/dwc/terms/HumanObservation</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An output of a human observation process.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>Evidence of an Occurrence taken from field notes or literature. A record of an Occurrence without physical evidence nor evidence captured with a machine. </td></tr>
    </tbody>
</table>



## MachineObservation

<div class="my-4">
    </div>

<table class="table table-sm table-bordered">
    <tbody>
        <tr class="table-primary"><th colspan="2">MachineObservation <span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="theme-label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/MachineObservation">http://rs.tdwg.org/dwc/terms/MachineObservation</a></td></tr>
        <tr><td class="theme-label">Definition</td><td>An output of a machine observation process.</td></tr>
        <tr><td class="theme-label">Comments</td><td></td></tr>
        <tr><td class="theme-label">Examples</td><td>A photograph. A video. An audio recording. A remote sensing image. A Occurrence record based on telemetry.</td></tr>
    </tbody>
</table>


