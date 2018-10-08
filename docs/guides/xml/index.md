# Darwin Core XML guide

Title
: Darwin Core XML guide

Date version issued
: 2015-06-02

Date created
: 2009-02-12

Part of TDWG Standard
: <http://www.tdwg.org/standards/450/>

This version
: <http://rs.tdwg.org/dwc/terms/guides/xml/2014-11-08>

Latest version
: <http://rs.tdwg.org/dwc/terms/guides/xml/>

Previous version
: <http://rs.tdwg.org/dwc/terms/guides/xml/2010-05-23>

Abstract
: Guidelines for the implementation of Darwin Core in XML.

Contributors
: John Wieczorek (MVZ), Markus Döring (GBIF), Renato De Giovanni (CRIA), Tim Robertson (GBIF), Dave Vieglais (KUNHM)

Creator
: Darwin Core Task Group

Bibliographic citation
: Darwin Core Task Group. 2009. Darwin Core XML guide. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/terms/guides/xml/>

## 1 Introduction

This document provides guidelines for implementing application schemas based on [Darwin Core terms](../../terms/) using [XML](http://www.w3.org/XML/). The underlying metadata model is described (in a syntax neutral way), followed by some specific guidelines for XML implementations. Some guidance on the use of non-Darwin Core terms is also provided.

This document does not provide guidelines for encoding Darwin Core in RDF/XML. Nor does it take a position on the relative merits of encoding metadata in "plain" XML rather than RDF/XML. This document provides guidelines in those cases where RDF/XML is not considered appropriate.

### 1.1 Status of the content of this document

All sections of this document are normative, except for sections that are explicitly marked as non-normative.

### 1.2 Audience

This document is targeted toward those who wish to use or construct application schemas using Darwin Core terms in XML. It includes explanations of existing schemas such as [Simple Darwin Core](../simple/) and how to build new schemas to meet specific models of information.

## 2 Implementation guide

### 2.1 XML schema

Implementors should base their XML applications on [XML Schemas](http://www.w3.org/XML/Schema) rather than _XML DTDs_. Approaches based on _XML Schemas_ are more flexible and are more easily re-used within other XML applications.

### 2.2 XML namespaces

Implementors should use [XML Namespaces](http://www.w3.org/TR/1999/REC-xml-names-19990114/) to uniquely identify elements. Darwin Core namespaces are defined in the [Darwin Core Namespace Policy](../../namespace/), while Dublin Core namespaces are defined in the [DCMI Namespace Recommendation](http://dublincore.org/documents/dcmi-namespace/).

### 2.3 Abstract model

The Darwin Core follows the [Dublin Core Metadata Initiative Abstract Model](http://dublincore.org/documents/abstract-model/) except that the Darwin Core _record_ is roughly equivalent to the Dublin Core _resource_.

- Darwin Core terms are either `classes` or `properties`.
- Each `property` has at most one `class` as its domain (describes no more than one `class`).
- A `Darwin Core record` is made up of zero or more `classes` and one or more `properties` with their associated `values`.
- Each `value` is a literal string.
- The `values` of `properties` within a `Darwin Core record` describe that record.
- A `Darwin Core record` must include all required `properties`, if any, and their associated `values`.

### 2.4 Properties and values

Darwin Core follows the guidelines for expressing [Dublin Core metadata using XML](http://dublincore.org/documents/dc-xml/) except in that Darwin Core implementors should encode `properties` as XML elements and `values` as the content of those elements instead of having each property contain a value representation and its associated value. The name of the XML element should be an XML qualified name (QName), which associates the value given in the `Term name` attribute in the [Darwin Core Terms](../../terms/) recommendation with the appropriate namespace name. For example, use:

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
    targetNamespace="http://rs.tdwg.org/dwc/terms/"
    xmlns:dwc="http://rs.tdwg.org/dwc/terms/">
...
<dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
```

rather than:

```xml
<dwc:basisOfRecord value="HumanObservation"/>
```

### 2.5 Null values

Elements for which the value is null should be omitted from the document or explicitly coded using the attribute `xsi:nil="true"`.

```xml
<dwc:locality xsi:nil="true"/>
```

Do not use an empty string - an element with no content:

```xml
<dwc:locality></dwc:locality>
```

### 2.6 Simple Darwin Core

[Simple Darwin Core](tdwg_dwc_simple.xsd) most closely models the "flat" nature of many data sets. It is a ready-made schema for sharing information with no structure beyond properties of a _record_ (equivalent to fields in a table, or columns in a spreadsheet). It is meant to accommodate all properties except those that require further structure to be meaningful (auxilliary terms in the classes [ResourceRelationship](http://rs.tdwg.org/dwc/terms/ResourceRelationship) and [MeasurementOrFact](http://rs.tdwg.org/dwc/terms/MeasurementOrFact). The schema has no required terms and no term is repeated within a given _record_. Refer to [Simple Darwin Core](../simple/) for the rationale behind this schema.

The term [`dcterms:type`](http://rs.tdwg.org/dwc/terms/dcterms:type) (which is controlled by the [Dublin Core Type Vocabulary](http://dublincore.org/documents/dcmi-type-vocabulary/)), gives the basic category of object (`PhysicalObject`, `StillImage`, `MovingImage`, `Sound`, `Text`) the record is about. The term [`basisOfRecord`](http://rs.tdwg.org/dwc/terms/basisOfRecord), which has a controlled vocabulary distinct from that of `dcterms:type`, shows the name of the Darwin Core class (e.g., [`LivingSpecimen`](http://rs.tdwg.org/dwc/terms/LivingSpecimen), [`PreservedSpecimen`](http://rs.tdwg.org/dwc/terms/PreservedSpecimen), [`FossilSpecimen`](http://rs.tdwg.org/dwc/terms/FossilSpecimen), [`HumanObservation`](http://rs.tdwg.org/dwc/terms/HumanObservation), [`MachineObservation`](http://rs.tdwg.org/dwc/terms/MachineObservation), [`Taxon`](http://rs.tdwg.org/dwc/terms/Taxon)) the record is about.

#### 2.6.1 Simple Darwin Core example (non-normative)

Following is a brief example of an XML document for a single specimen complying with the [Simple Darwin Core Schema](tdwg_dwc_simple.xsd)]. The [Simple Darwin Core XML example document](example_simple.xml) (if this link shows a blank page in your browser, use the View Source option to see the XML document) shows detail for a single record having a more complete set of elements.

```xml
<?xml version="1.0"?>
<dwr:SimpleDarwinRecordSet
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/xsd/simpledarwincore/  http://rs.tdwg.org/dwc/xsd/tdwg_dwc_simple.xsd"
    xmlns:dcterms="http://purl.org/dc/terms/"
    xmlns:dwc="http://rs.tdwg.org/dwc/terms/"
    xmlns:dwr="http://rs.tdwg.org/dwc/xsd/simpledarwincore/">
    <dwr:SimpleDarwinRecord>
        <dcterms:type>PhysicalObject</dcterms:type>
        <dcterms:modified>2009-02-12T12:43:31</dcterms:modified>
        <dcterms:rightsHolder>Museum of Vertebrate Zoology</dcterms:rightsHolder>
        <dcterms:rights>Creative Commons License</dcterms:rights>
        <dwc:institutionCode>MVZ</dwc:institutionCode>
        <dwc:collectionCode>Mammals</dwc:collectionCode>
        <dwc:occurrenceID>urn:catalog:MVZ:Mammals:14523</dwc:occurrenceID>
        <dwc:basisOfRecord>PreservedSpecimen</dwc:basisOfRecord>
        <dwc:country>Argentina</dwc:country>
        <dwc:countryCode>AR</dwc:countryCode>
        <dwc:stateProvince>Neuquén</dwc:stateProvince>
        <dwc:locality>25 km al NNE de Bariloche por Ruta 40 (=237)</dwc:locality>
    </dwr:SimpleDarwinRecord>
</dwr:SimpleDarwinRecordSet>
```

### 2.7 Classes and containment

Many Darwin Core terms (`properties`) are defined as being associated with another term (a `class`). For example, [`scientificName`](http://rs.tdwg.org/dwc/terms/scientificName) and [`Taxon`](http://rs.tdwg.org/dwc/terms/Taxon) are both Darwin Core terms, but `scientificName` is a property associated with the `Taxon` class. When constructing schemas that take advantage of classes in structures, implementors are encouraged to maintain the property/class relationships defined by the terms whenever possible (refer to the `Class` attribute of the term as given in the [Quick Reference Guide](../../terms/) or the attribute `dwcattributes:organizedInClass` in the term declaration in the [`dcterms.rdf`](../rdf/dcterms.rdf) file. To promote reuse, Darwin Core provides a set of xml schemas to use as the basis of additional schemas:

- [Terms XML Schema](tdwg_dwcterms.xsd) - property term definitions as typed global elements and named groups for all terms for a given class to be referenced. The schema makes use of substitution groups `anyClass`, `anyProperty`, `anyIdentifier` and `anyXYZTerm` for each class, e.g. `anyTaxonTerm`. This is the schema upon which the [Simple Darwin Core XML Schema](tdwg_dwc_simple.xsd) is based.
- [Class Terms XML Schema](tdwg_dwc_class_terms.xsd) - class term definitions as typed global elements with subelements referencing all corresponding property terms via their substitution group.

It is encouraged to use classes in a normalized way to avoid deep nesting. A [Darwin Core Tools and Applications page](https://github.com/tdwg/dwc-documentation/blob/master/documentation/resources.md) has been created as an index to example schemas for the purpose of community discussions and development. An [XML schema](tdwg_dwc_classes.xsd) is provided to freely mix any Darwin Core Class in a global list and allow them to reference each other using the respective class identifier terms.

#### 2.7.1 Normalized classes examples (non-normative)

Following is an example of using normalized classes to represent two related specimen occurrences (one of which has had a second identification) at one location following this class-based schema. Note that you can reuse the location definition here by referring to it via locationID:

```xml
<?xml version="1.0"?>
<dwr:DarwinRecordSet
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/dwcrecord/  http://rs.tdwg.org/dwc/xsd/tdwg_dwc_classes.xsd"
    xmlns:dcterms="http://purl.org/dc/terms/"
    xmlns:dwc="http://rs.tdwg.org/dwc/terms/"
    xmlns:dwr="http://rs.tdwg.org/dwc/dwcrecord/">
    <dcterms:Location>
        <dwc:locationID>http://guid.mvz.org/sites/arg/127</dwc:locationID>
        <dwc:country>Argentina</dwc:country>
        <dwc:countryCode>AR</dwc:countryCode>
        <dwc:stateProvince>Neuquén</dwc:stateProvince>
        <dwc:locality>25 km al NNE de Bariloche por Ruta 40 (=237)</dwc:locality>
    </dcterms:Location>
    <dwc:Occurrence>
        <dcterms:type>PhysicalObject</dcterms:type>
        <dcterms:modified>2009-02-12T12:43:31</dcterms:modified>
        <dwc:institutionCode>MVZ</dwc:institutionCode>
        <dwc:collectionCode>Mammals</dwc:collectionCode>
        <dwc:occurrenceID>urn:catalog:MVZ:Mammals:14523</dwc:occurrenceID>
        <dwc:basisOfRecord>PreservedSpecimen</dwc:basisOfRecord>
        <dwc:locationID>http://guid.mvz.org/sites/arg/127</dwc:locationID>
    </dwc:Occurrence>
    <dwc:Identification>
        <dwc:identificationID>http://guid.mvz.org/identifications/23459</dwc:identificationID>
        <dwc:identifiedBy>Richard Sage</dwc:identifiedBy>
        <dwc:dateIdentified>2000</dwc:dateIdentified>
        <dwc:identificationQualifier>sp.</dwc:identificationQualifier>
        <dwc:occurrenceID>urn:catalog:MVZ:Mammals:14523</dwc:occurrenceID>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:d79c11aa-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
    </dwc:Identification>
    <dwc:Taxon>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:d79c11aa-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
        <dwc:scientificName>Ctenomys</dwc:scientificName>
        <dwc:taxonRank>genus</dwc:taxonRank>
        <dwc:nomenclaturalCode>ICZN</dwc:nomenclaturalCode>
        <dwc:genus>Ctenomys</dwc:genus>
    </dwc:Taxon>
    <dwc:Identification>
        <dwc:identificationID>http://guid.mvz.org/identifications/94752</dwc:identificationID>
        <dwc:identifiedBy>James L Patton</dwc:identifiedBy>
        <dwc:dateIdentified>2001-09-14</dwc:dateIdentified>
        <dwc:occurrenceID>urn:catalog:MVZ:Mammals:14523</dwc:occurrenceID>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:df0a797c-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
    </dwc:Identification>
    <dwc:Taxon>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:df0a797c-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
        <dwc:parentNameUsageID>urn:lsid:catalogueoflife.org:taxon:d79c11aa-29c1-102b-9a4a-00304854f820:col20120721</dwc:parentNameUsageID>
        <dwc:scientificName>Ctenomys sociabilis</dwc:scientificName>
        <dwc:scientificNameAuthorship>Pearson and Christie, 1985</dwc:scientificNameAuthorship>
        <dwc:taxonRank>species</dwc:taxonRank>
        <dwc:nomenclaturalCode>ICZN</dwc:nomenclaturalCode>
        <dwc:higherClassification>Animalia; Chordata; Vertebrata; Mammalia; Theria; Eutheria; Rodentia; Hystricognatha; Hystricognathi; Ctenomyidae; Ctenomyini; Ctenomys</dwc:higherClassification>
        <dwc:kingdom>Animalia</dwc:kingdom>
        <dwc:phylum>Chordata</dwc:phylum>
        <dwc:class>Mammalia</dwc:class>
        <dwc:order>Rodentia</dwc:order>
        <dwc:family>Ctenomyidae</dwc:family>
        <dwc:genus>Ctenomys</dwc:genus>
        <dwc:specificEpithet>sociabilis</dwc:specificEpithet>
    </dwc:Taxon>
    <dwc:Occurrence>
        <dcterms:type>PhysicalObject</dcterms:type>
        <dcterms:modified>2009-02-12T12:43:31</dcterms:modified>
        <dwc:institutionCode>MVZ</dwc:institutionCode>
        <dwc:collectionCode>Mammals</dwc:collectionCode>
        <dwc:occurrenceID>urn:catalog:MVZ:Mammals:14524</dwc:occurrenceID>
        <dwc:basisOfRecord>PreservedSpecimen</dwc:basisOfRecord>
        <dwc:locationID>http://guid.mvz.org/sites/arg/127</dwc:locationID>
    </dwc:Occurrence>
    <dwc:Identification>
        <dwc:identificationID>http://guid.mvz.org/identifications/94753</dwc:identificationID>
        <dwc:identifiedBy>James L Patton</dwc:identifiedBy>
        <dwc:dateIdentified>2001-09-14</dwc:dateIdentified>
        <dwc:occurrenceID>urn:catalog:MVZ:Mammals:14524</dwc:occurrenceID>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:df0a797c-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
    </dwc:Identification>
    <dwc:ResourceRelationship>
        <dwc:resourceRelationshipID>http://guid.mvz.org/relations/23423</dwc:resourceRelationshipID>
        <dwc:resourceID>urn:catalog:MVZ:Mammals:14523</dwc:resourceID>
        <dwc:relatedResourceID>urn:catalog:MVZ:Mammals:14524</dwc:relatedResourceID>
        <dwc:relationshipOfResource>offspring of</dwc:relationshipOfResource>
    </dwc:ResourceRelationship>
    <dwc:ResourceRelationship>
        <dwc:resourceRelationshipID>http://guid.mvz.org/relations/23424</dwc:resourceRelationshipID>
        <dwc:resourceID>urn:catalog:MVZ:Mammals:14524</dwc:resourceID>
        <dwc:relatedResourceID>urn:catalog:MVZ:Mammals:14523</dwc:relatedResourceID>
        <dwc:relationshipOfResource>mother of</dwc:relationshipOfResource>
    </dwc:ResourceRelationship>
</dwr:DarwinRecordSet>
```

Here is different example demonstrating area count observations for events on two different days at one location. Note that we omit the identification class here as there is not identification related data and link via the `taxonID` directly:

```xml
<?xml version="1.0"?>
<dwr:DarwinRecordSet
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/dwcrecord/  http://rs.tdwg.org/dwc/xsd/tdwg_dwc_classes.xsd"
    xmlns:dcterms="http://purl.org/dc/terms/"
    xmlns:dwc="http://rs.tdwg.org/dwc/terms/"
    xmlns:dwr="http://rs.tdwg.org/dwc/dwcrecord/">
    <dcterms:Location>
        <dwc:locationID>http://guid.mvz.org/sites/arg/127</dwc:locationID>
        <dwc:country>Argentina</dwc:country>
        <dwc:countryCode>AR</dwc:countryCode>
        <dwc:stateProvince>Neuquén</dwc:stateProvince>
        <dwc:locality>Valle Limay, Estancia Rincon Grande, 48 ha area with centroid at this point</dwc:locality>
        <dwc:decimalLatitude>-40.97467</dwc:decimalLatitude>
        <dwc:decimalLongitude>-71.0734</dwc:decimalLongitude>
        <dwc:geodeticDatum>WGS84</dwc:geodeticDatum>
        <dwc:coordinateUncertaintyInMeters>200</dwc:coordinateUncertaintyInMeters>
    </dcterms:Location>
    <dwc:Event>
        <dwc:eventID>http://guid.mvz.org/events/2006/11/26/17</dwc:eventID>
        <dwc:samplingProtocol>area count</dwc:samplingProtocol>
        <dwc:eventDate>2006-11-26</dwc:eventDate>
        <dwc:locationID>http://guid.mvz.org/sites/arg/127</dwc:locationID>
    </dwc:Event>
    <dwc:Occurrence>
        <dwc:occurrenceID>urn:catalog:AUDCLO:EBIRD:OBS64515288</dwc:occurrenceID>
        <dcterms:type>Event</dcterms:type>
        <dcterms:modified>2009-02-17T07:33:04Z</dcterms:modified>
        <dwc:institutionCode>AUDCLO</dwc:institutionCode>
        <dwc:collectionCode>EBIRD</dwc:collectionCode>
        <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
        <dwc:individualCount>2</dwc:individualCount>
        <dwc:eventID>http://guid.mvz.org/events/2006/11/26/17</dwc:eventID>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000ee00-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
    </dwc:Occurrence>
    <dwc:Taxon>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000ee00-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
        <dwc:scientificName>Anthus hellmayri Hartert, 1909</dwc:scientificName>
        <dwc:class>Aves</dwc:class>
        <dwc:genus>Anthus</dwc:genus>
        <dwc:specificEpithet>hellmayri</dwc:specificEpithet>
    </dwc:Taxon>
    <dwc:Occurrence>
        <dwc:occurrenceID>urn:catalog:AUDCLO:EBIRD:OBS64515286</dwc:occurrenceID>
        <dcterms:type>Event</dcterms:type>
        <dcterms:modified>2009-02-17T07:33:04Z</dcterms:modified>
        <dwc:institutionCode>AUDCLO</dwc:institutionCode>
        <dwc:collectionCode>EBIRD</dwc:collectionCode>
        <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
        <dwc:individualCount>1</dwc:individualCount>
        <dwc:eventID>http://guid.mvz.org/events/2006/11/26/17</dwc:eventID>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000e838-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
    </dwc:Occurrence>
    <dwc:Taxon>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000e838-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
        <dwc:scientificName>Anthus correndera Vieillot, 1818</dwc:scientificName>
        <dwc:class>Aves</dwc:class>
        <dwc:genus>Anthus</dwc:genus>
        <dwc:specificEpithet>correndera</dwc:specificEpithet>
    </dwc:Taxon>
    <dwc:Event>
        <dwc:eventID>http://guid.mvz.org/events/2006/11/27/6</dwc:eventID>
        <dwc:samplingProtocol>area count</dwc:samplingProtocol>
        <dwc:eventDate>2006-11-27</dwc:eventDate>
        <dwc:locationID>http://guid.mvz.org/sites/arg/127</dwc:locationID>
    </dwc:Event>
    <dwc:Occurrence>
        <dwc:occurrenceID>urn:catalog:AUDCLO:EBIRD:OBS64515333</dwc:occurrenceID>
        <dcterms:type>Event</dcterms:type>
        <dcterms:modified>2009-02-17T07:33:04Z</dcterms:modified>
        <dwc:institutionCode>AUDCLO</dwc:institutionCode>
        <dwc:collectionCode>EBIRD</dwc:collectionCode>
        <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
        <dwc:individualCount>1</dwc:individualCount>
        <dwc:eventID>http://guid.mvz.org/events/2006/11/27/6</dwc:eventID>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000ee00-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
    </dwc:Occurrence>
    <dwc:Occurrence>
        <dwc:occurrenceID>urn:catalog:AUDCLO:EBIRD:OBS64515331</dwc:occurrenceID>
        <dcterms:type>Event</dcterms:type>
        <dcterms:modified>2009-02-17T07:33:04Z</dcterms:modified>
        <dwc:institutionCode>AUDCLO</dwc:institutionCode>
        <dwc:collectionCode>EBIRD</dwc:collectionCode>
        <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
        <dwc:individualCount>2</dwc:individualCount>
        <dwc:eventID>http://guid.mvz.org/events/2006/11/27/6</dwc:eventID>
        <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000ee00-29c1-102b-9a4a-00304854f820:col20120721</dwc:taxonID>
    </dwc:Occurrence>
</dwr:DarwinRecordSet>
```
