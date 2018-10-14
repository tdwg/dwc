

# Darwin Core quick reference guide

This page provides a list of all currently recommended terms of the Darwin Core standard. Categories such as `Occurrence` or `Event` correspond to Darwin Core classes which group other terms. Convenient [files of these terms](https://github.com/tdwg/dwc/tree/master/dist) and [their full history](https://github.com/tdwg/dwc/blob/master/vocabulary/term_versions.csv) can be found in the [Darwin Core repository](https://github.com/tdwg/dwc).



## Record-level
    
<div class="my-4">
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:type">type</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:modified">modified</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:language">language</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:license">license</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:rightsHolder">rightsHolder</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:accessRights">accessRights</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:bibliographicCitation">bibliographicCitation</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dcterms:references">references</a>
    
</div>




<a id="dcterms:type" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">type<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://purl.org/dc/terms/type">http://purl.org/dc/terms/type</a></td></tr>
        <tr><td class="label">Definition</td><td>The nature or genre of the resource.</td></tr>
        <tr><td class="label">Comments</td><td>Must be populated with a value from the DCMI type vocabulary (<a href="http://dublincore.org/documents/2010/10/11/dcmi-type-vocabulary/">http://dublincore.org/documents/2010/10/11/dcmi-type-vocabulary/</a>).</td></tr>
    </tbody>
</table>

<a id="dcterms:modified" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">modified<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://purl.org/dc/terms/modified">http://purl.org/dc/terms/modified</a></td></tr>
        <tr><td class="label">Definition</td><td>The most recent date-time on which the resource was changed.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a date that conforms to ISO 8601:2004(E).</td></tr>
    </tbody>
</table>

<a id="dcterms:language" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">language<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://purl.org/dc/terms/language">http://purl.org/dc/terms/language</a></td></tr>
        <tr><td class="label">Definition</td><td>A language of the resource.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use RFC 5646 as a controlled vocabulary.</td></tr>
    </tbody>
</table>

<a id="dcterms:license" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">license<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://purl.org/dc/terms/license">http://purl.org/dc/terms/license</a></td></tr>
        <tr><td class="label">Definition</td><td>A legal document giving official permission to do something with the resource.</td></tr>
        <tr><td class="label">Comments</td><td></td></tr>
    </tbody>
</table>

<a id="dcterms:rightsHolder" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">rightsHolder<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://purl.org/dc/terms/rightsHolder">http://purl.org/dc/terms/rightsHolder</a></td></tr>
        <tr><td class="label">Definition</td><td>A person or organization owning or managing rights over the resource.</td></tr>
        <tr><td class="label">Comments</td><td></td></tr>
    </tbody>
</table>

<a id="dcterms:accessRights" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">accessRights<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://purl.org/dc/terms/accessRights">http://purl.org/dc/terms/accessRights</a></td></tr>
        <tr><td class="label">Definition</td><td>Information about who can access the resource or an indication of its security status. Access Rights may include information regarding access or restrictions based on privacy, security, or other policies.</td></tr>
        <tr><td class="label">Comments</td><td></td></tr>
    </tbody>
</table>

<a id="dcterms:bibliographicCitation" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">bibliographicCitation<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://purl.org/dc/terms/bibliographicCitation">http://purl.org/dc/terms/bibliographicCitation</a></td></tr>
        <tr><td class="label">Definition</td><td>A bibliographic reference for the resource as a statement indicating how this record should be cited (attributed) when used.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended practice is to include sufficient bibliographic detail to identify the resource as unambiguously as possible.</td></tr>
    </tbody>
</table>

<a id="dcterms:references" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">references<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://purl.org/dc/terms/references">http://purl.org/dc/terms/references</a></td></tr>
        <tr><td class="label">Definition</td><td>A related resource that is referenced, cited, or otherwise pointed to by the described resource.</td></tr>
        <tr><td class="label">Comments</td><td></td></tr>
    </tbody>
</table>




## Location
    
<div class="my-4">
    
</div>



<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-primary"><th colspan="2">Location<span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://purl.org/dc/terms/Location">http://purl.org/dc/terms/Location</a></td></tr>
        <tr><td class="label">Definition</td><td>A spatial region or named place.</td></tr>
        <tr><td class="label">Comments</td><td></td></tr>
    </tbody>
</table>






## UseWithIRI
    
<div class="my-4">
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:inDescribedPlace">inDescribedPlace</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:identifiedBy">identifiedBy</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:recordedBy">recordedBy</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:toTaxon">toTaxon</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:inCollection">inCollection</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:georeferencedBy">georeferencedBy</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:behavior">behavior</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:dataGeneralizations">dataGeneralizations</a>
    
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
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:occurrenceStatus">occurrenceStatus</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:organismQuantityType">organismQuantityType</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:preparations">preparations</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:recordNumber">recordNumber</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:reproductiveCondition">reproductiveCondition</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:sampleSizeUnit">sampleSizeUnit</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:samplingProtocol">samplingProtocol</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:sex">sex</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:typeStatus">typeStatus</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:verbatimCoordinateSystem">verbatimCoordinateSystem</a>
    
    <a class="btn btn-sm btn-outline-secondary m-1" href="#dwciri:verbatimSRS">verbatimSRS</a>
    
</div>



<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-primary"><th colspan="2">UseWithIRI<span class="badge badge-primary float-right">Class</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/terms/attributes/UseWithIRI">http://rs.tdwg.org/dwc/terms/attributes/UseWithIRI</a></td></tr>
        <tr><td class="label">Definition</td><td>The category of terms that are recommended to have an IRI as a value.</td></tr>
        <tr><td class="label">Comments</td><td>A utility class to organize the dwciri: terms.</td></tr>
    </tbody>
</table>



<a id="dwciri:inDescribedPlace" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">inDescribedPlace<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/inDescribedPlace">http://rs.tdwg.org/dwc/iri/inDescribedPlace</a></td></tr>
        <tr><td class="label">Definition</td><td>Use to link a dcterms:Location instance subject to the lowest level standardized hierarchically-described resource.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use an IRI from a controlled registry. A "convenience property" that replaces Darwin Core literal-value terms related to locations. See Section 2.7.5 of the Darwin Core RDF Guide for details.</td></tr>
    </tbody>
</table>

<a id="dwciri:identifiedBy" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identifiedBy<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/identifiedBy">http://rs.tdwg.org/dwc/iri/identifiedBy</a></td></tr>
        <tr><td class="label">Definition</td><td>A person, group, or organization who assigned the Taxon to the subject.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:recordedBy" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">recordedBy<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/recordedBy">http://rs.tdwg.org/dwc/iri/recordedBy</a></td></tr>
        <tr><td class="label">Definition</td><td>A person, group, or organization responsible for recording the original Occurrence.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:toTaxon" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">toTaxon<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/toTaxon">http://rs.tdwg.org/dwc/iri/toTaxon</a></td></tr>
        <tr><td class="label">Definition</td><td>Use to link a dwc:Identification instance subject to a taxonomic entity such as a taxon, taxon concept, or taxon name use.</td></tr>
        <tr><td class="label">Comments</td><td>A "convenience property" that replaces Darwin Core literal-value terms related to taxonomic entities. See Section 2.7.4 of the Darwin Core RDF Guide for details.</td></tr>
    </tbody>
</table>

<a id="dwciri:inCollection" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">inCollection<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/inCollection">http://rs.tdwg.org/dwc/iri/inCollection</a></td></tr>
        <tr><td class="label">Definition</td><td>Use to link any subject resource that is part of a collection to the collection containing the resource.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use an IRI from a controlled registry. A "convenience property" that replaces literal-value terms related to collections and institutions. See Section 2.7.3 of the Darwin Core RDF Guide for details.</td></tr>
    </tbody>
</table>

<a id="dwciri:georeferencedBy" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferencedBy<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferencedBy">http://rs.tdwg.org/dwc/iri/georeferencedBy</a></td></tr>
        <tr><td class="label">Definition</td><td>A person, group, or organization who determined the georeference (spatial representation) for the Location.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:behavior" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">behavior<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/behavior">http://rs.tdwg.org/dwc/iri/behavior</a></td></tr>
        <tr><td class="label">Definition</td><td>A description of the behavior shown by the subject at the time the Occurrence was recorded.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:dataGeneralizations" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">dataGeneralizations<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/dataGeneralizations">http://rs.tdwg.org/dwc/iri/dataGeneralizations</a></td></tr>
        <tr><td class="label">Definition</td><td>Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:disposition" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">disposition<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/disposition">http://rs.tdwg.org/dwc/iri/disposition</a></td></tr>
        <tr><td class="label">Definition</td><td>The current state of a specimen with respect to the collection identified in collectionCode or collectionID.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:earliestGeochronologicalEra" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">earliestGeochronologicalEra<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/earliestGeochronologicalEra">http://rs.tdwg.org/dwc/iri/earliestGeochronologicalEra</a></td></tr>
        <tr><td class="label">Definition</td><td>Use to link a dwc:GeologicalContext instance to chronostratigraphic time periods at the lowest possible level in a standardized hierarchy.   Use this property to point to the earliest possible geological time period from which the cataloged item was collected.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.6 of the Darwin Core RDF Guide for details.</td></tr>
    </tbody>
</table>

<a id="dwciri:establishmentMeans" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">establishmentMeans<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/establishmentMeans">http://rs.tdwg.org/dwc/iri/establishmentMeans</a></td></tr>
        <tr><td class="label">Definition</td><td>The process by which the biological individual(s) represented in the Occurrence became established at the location.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:fieldNotes" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">fieldNotes<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/fieldNotes">http://rs.tdwg.org/dwc/iri/fieldNotes</a></td></tr>
        <tr><td class="label">Definition</td><td>One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the Event.</td></tr>
        <tr><td class="label">Comments</td><td>The subject is a dwc:Event instance and the object is a (possibly IRI-identified) resource that is the field notes.</td></tr>
    </tbody>
</table>

<a id="dwciri:fieldNumber" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">fieldNumber<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/fieldNumber">http://rs.tdwg.org/dwc/iri/fieldNumber</a></td></tr>
        <tr><td class="label">Definition</td><td>An identifier given to the event in the field. Often serves as a link between field notes and the Event.</td></tr>
        <tr><td class="label">Comments</td><td>The subject is a (possibly IRI-identified) resource that is the field notes and the object is a dwc:Event instance.</td></tr>
    </tbody>
</table>

<a id="dwciri:footprintSRS" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">footprintSRS<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/footprintSRS">http://rs.tdwg.org/dwc/iri/footprintSRS</a></td></tr>
        <tr><td class="label">Definition</td><td>A Well-Known Text (WKT) representation of the Spatial Reference System (SRS) for the footprintWKT of the Location. Do not use this term to describe the SRS of the decimalLatitude and decimalLongitude, even if it is the same as for the footprintWKT - use the geodeticDatum instead.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:footprintWKT" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">footprintWKT<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/footprintWKT">http://rs.tdwg.org/dwc/iri/footprintWKT</a></td></tr>
        <tr><td class="label">Definition</td><td>A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines the Location. A Location may have both a point-radius representation (see decimalLatitude) and a footprint representation, and they may differ from each other.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:fromLithostratigraphicUnit" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">fromLithostratigraphicUnit<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/fromLithostratigraphicUnit">http://rs.tdwg.org/dwc/iri/fromLithostratigraphicUnit</a></td></tr>
        <tr><td class="label">Definition</td><td>Use to link a dwc:GeologicalContext instance to an IRI-identified lithostratigraphic unit at the lowest possible level in a hierarchy.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.7 of the Darwin Core RDF Guide for details.</td></tr>
    </tbody>
</table>

<a id="dwciri:geodeticDatum" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">geodeticDatum<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/geodeticDatum">http://rs.tdwg.org/dwc/iri/geodeticDatum</a></td></tr>
        <tr><td class="label">Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in decimalLatitude and decimalLongitude as based.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use an IRI for the EPSG code of the SRS, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>.</td></tr>
    </tbody>
</table>

<a id="dwciri:georeferenceProtocol" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferenceProtocol<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferenceProtocol">http://rs.tdwg.org/dwc/iri/georeferenceProtocol</a></td></tr>
        <tr><td class="label">Definition</td><td>A description or reference to the methods used to determine the spatial footprint, coordinates, and uncertainties.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:georeferenceSources" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferenceSources<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferenceSources">http://rs.tdwg.org/dwc/iri/georeferenceSources</a></td></tr>
        <tr><td class="label">Definition</td><td>A map, gazetteer, or other resource used to georeference the Location.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:georeferenceVerificationStatus" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">georeferenceVerificationStatus<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/georeferenceVerificationStatus">http://rs.tdwg.org/dwc/iri/georeferenceVerificationStatus</a></td></tr>
        <tr><td class="label">Definition</td><td>A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:habitat" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">habitat<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/habitat">http://rs.tdwg.org/dwc/iri/habitat</a></td></tr>
        <tr><td class="label">Definition</td><td>A category or description of the habitat in which the Event occurred.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:identificationQualifier" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identificationQualifier<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/identificationQualifier">http://rs.tdwg.org/dwc/iri/identificationQualifier</a></td></tr>
        <tr><td class="label">Definition</td><td>A controlled value to express the determiner's doubts about the Identification.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:identificationVerificationStatus" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">identificationVerificationStatus<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/identificationVerificationStatus">http://rs.tdwg.org/dwc/iri/identificationVerificationStatus</a></td></tr>
        <tr><td class="label">Definition</td><td>A categorical indicator of the extent to which the taxonomic identification has been verified to be correct.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects. Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD.</td></tr>
    </tbody>
</table>

<a id="dwciri:inDataset" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">inDataset<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/inDataset">http://rs.tdwg.org/dwc/iri/inDataset</a></td></tr>
        <tr><td class="label">Definition</td><td>Use to link a subject dataset record to the dataset which contains it.</td></tr>
        <tr><td class="label">Comments</td><td>A string literal name of the dataset can be provided using the term dwc:datasetName. See the Darwin Core RDF Guide for details.</td></tr>
    </tbody>
</table>

<a id="dwciri:informationWithheld" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">informationWithheld<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/informationWithheld">http://rs.tdwg.org/dwc/iri/informationWithheld</a></td></tr>
        <tr><td class="label">Definition</td><td>Additional information that exists, but that has not been shared in the given record.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:latestGeochronologicalEra" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">latestGeochronologicalEra<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/latestGeochronologicalEra">http://rs.tdwg.org/dwc/iri/latestGeochronologicalEra</a></td></tr>
        <tr><td class="label">Definition</td><td>Use to link a dwc:GeologicalContext instance to chronostratigraphic time periods at the lowest possible level in a standardized hierarchy.   Use this property to point to the latest possible geological time period from which the cataloged item was collected.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.6 of the Darwin Core RDF Guide for details.</td></tr>
    </tbody>
</table>

<a id="dwciri:lifeStage" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">lifeStage<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/lifeStage">http://rs.tdwg.org/dwc/iri/lifeStage</a></td></tr>
        <tr><td class="label">Definition</td><td>The age class or life stage of the biological individual(s) at the time the Occurrence was recorded.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:locationAccordingTo" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">locationAccordingTo<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/locationAccordingTo">http://rs.tdwg.org/dwc/iri/locationAccordingTo</a></td></tr>
        <tr><td class="label">Definition</td><td>Information about the source of this Location information. Could be a publication (gazetteer), institution, or team of individuals.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:measurementDeterminedBy" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementDeterminedBy<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementDeterminedBy">http://rs.tdwg.org/dwc/iri/measurementDeterminedBy</a></td></tr>
        <tr><td class="label">Definition</td><td>A person, group, or organization who determined the value of the MeasurementOrFact.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:measurementMethod" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementMethod<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementMethod">http://rs.tdwg.org/dwc/iri/measurementMethod</a></td></tr>
        <tr><td class="label">Definition</td><td>The method or protocol used to determine the measurement, fact, characteristic, or assertion.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:measurementType" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementType<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementType">http://rs.tdwg.org/dwc/iri/measurementType</a></td></tr>
        <tr><td class="label">Definition</td><td>The nature of the measurement, fact, characteristic, or assertion.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:measurementUnit" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">measurementUnit<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/measurementUnit">http://rs.tdwg.org/dwc/iri/measurementUnit</a></td></tr>
        <tr><td class="label">Definition</td><td>The units associated with the measurementValue.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use the International System of Units (SI).</td></tr>
    </tbody>
</table>

<a id="dwciri:occurrenceStatus" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">occurrenceStatus<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/occurrenceStatus">http://rs.tdwg.org/dwc/iri/occurrenceStatus</a></td></tr>
        <tr><td class="label">Definition</td><td>A statement about the presence or absence of a Taxon at a Location.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:organismQuantityType" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">organismQuantityType<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/organismQuantityType">http://rs.tdwg.org/dwc/iri/organismQuantityType</a></td></tr>
        <tr><td class="label">Definition</td><td>The type of quantification system used for the quantity of organisms.</td></tr>
        <tr><td class="label">Comments</td><td>A dwc;organismQuantityType must have a corresponding dwc:organismQuantity.</td></tr>
    </tbody>
</table>

<a id="dwciri:preparations" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">preparations<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/preparations">http://rs.tdwg.org/dwc/iri/preparations</a></td></tr>
        <tr><td class="label">Definition</td><td>A preparation or preservation method for a specimen.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:recordNumber" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">recordNumber<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/recordNumber">http://rs.tdwg.org/dwc/iri/recordNumber</a></td></tr>
        <tr><td class="label">Definition</td><td>An identifier given to the Occurrence at the time it was recorded. Often serves as a link between field notes and an Occurrence record, such as a specimen collector's number.</td></tr>
        <tr><td class="label">Comments</td><td>The subject is a dwc:Occurrence and the object is a (possibly IRI-identified) resource that is the field notes.</td></tr>
    </tbody>
</table>

<a id="dwciri:reproductiveCondition" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">reproductiveCondition<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/reproductiveCondition">http://rs.tdwg.org/dwc/iri/reproductiveCondition</a></td></tr>
        <tr><td class="label">Definition</td><td>The reproductive condition of the biological individual(s) represented in the Occurrence.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:sampleSizeUnit" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">sampleSizeUnit<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/sampleSizeUnit">http://rs.tdwg.org/dwc/iri/sampleSizeUnit</a></td></tr>
        <tr><td class="label">Definition</td><td>The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling event.</td></tr>
        <tr><td class="label">Comments</td><td>A sampleSizeUnit must have a corresponding sampleSizeValue. Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure <a href="http://www.wurvoc.org/vocabularies/om-1.8/">http://www.wurvoc.org/vocabularies/om-1.8/</a> of SI units, derived units, or other non-SI units accepted for use within the SI.</td></tr>
    </tbody>
</table>

<a id="dwciri:samplingProtocol" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">samplingProtocol<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/samplingProtocol">http://rs.tdwg.org/dwc/iri/samplingProtocol</a></td></tr>
        <tr><td class="label">Definition</td><td>The method or protocol used during an Event.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:sex" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">sex<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/sex">http://rs.tdwg.org/dwc/iri/sex</a></td></tr>
        <tr><td class="label">Definition</td><td>The sex of the biological individual(s) represented in the Occurrence.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:typeStatus" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">typeStatus<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/typeStatus">http://rs.tdwg.org/dwc/iri/typeStatus</a></td></tr>
        <tr><td class="label">Definition</td><td>A nomenclatural type (type status, typified scientific name, publication) applied to the subject.</td></tr>
        <tr><td class="label">Comments</td><td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:verbatimCoordinateSystem" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimCoordinateSystem<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/verbatimCoordinateSystem">http://rs.tdwg.org/dwc/iri/verbatimCoordinateSystem</a></td></tr>
        <tr><td class="label">Definition</td><td>The spatial coordinate system for the verbatimLatitude and verbatimLongitude or the verbatimCoordinates of the Location.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td></tr>
    </tbody>
</table>

<a id="dwciri:verbatimSRS" class="anchor"></a>
<table class="table table-sm border mb-3">
    <tbody>
        <tr class="table-secondary"><th colspan="2">verbatimSRS<span class="badge badge-secondary float-right">Property</span></th></tr>
        <tr><td class="label">Identifier</td><td><a href="http://rs.tdwg.org/dwc/iri/verbatimSRS">http://rs.tdwg.org/dwc/iri/verbatimSRS</a></td></tr>
        <tr><td class="label">Definition</td><td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which coordinates given in verbatimLatitude and verbatimLongitude, or verbatimCoordinates are based.</td></tr>
        <tr><td class="label">Comments</td><td>Recommended best practice is to use an IRI for the EPSG code of the SRS, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>.</td></tr>
    </tbody>
</table>


