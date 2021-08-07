# Darwin Core XML guide

Title
: Darwin Core XML guide

Date version issued
: 2021-07-15

Date created
: 2009-02-12

Part of TDWG Standard
: <http://www.tdwg.org/standards/450/>

This version
: <http://rs.tdwg.org/dwc/terms/guides/xml/2021-07-15>

Latest version
: <http://rs.tdwg.org/dwc/terms/guides/xml/>

Previous version
: <http://rs.tdwg.org/dwc/terms/guides/xml/2014-11-08>

Abstract
: Guidelines for the implementation of Darwin Core in XML.

Contributors
: John Wieczorek (MVZ), Markus Döring (GBIF), Renato De Giovanni (CRIA), Tim Robertson (GBIF), Dave Vieglais (KUNHM)

Creator
: Darwin Core Task Group

Bibliographic citation
: Darwin Core Task Group. 2021. Darwin Core XML guide. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/terms/guides/xml/2021-07-15>

## 1 Introduction

This document provides guidelines for implementing application schemas based on [Darwin Core terms](../../terms/) using [XML](http://www.w3.org/XML/). The underlying metadata model is described (in a syntax neutral way), followed by some specific guidelines for XML implementations. Some guidance on the use of non-Darwin Core terms is also provided.

This document does not provide guidelines for encoding Darwin Core in RDF/XML. Nor does it take a position on the relative merits of encoding metadata in "plain" XML rather than RDF/XML. This document provides guidelines in those cases where RDF/XML is not considered appropriate.

### 1.1 Status of the content of this document

All sections of this document are normative, except for sections that are explicitly marked as non-normative.

#### 1.1.1 RFC 2119 key words

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

### 1.2 Audience

This document is targeted toward those who wish to use or construct application schemas using Darwin Core terms in XML. It includes explanations of existing schemas such as [Simple Darwin Core](../simple/) and how to build new schemas to meet specific models of information.

## 2 Implementation guide

### 2.1 XML schema

Implementors SHOULD base their XML applications on [XML Schemas](http://www.w3.org/XML/Schema) rather than _XML DTDs_. Approaches based on _XML Schemas_ are more flexible and are more easily re-used within other XML applications.

### 2.2 XML namespaces

Implementors MUST use [XML Namespaces](http://www.w3.org/TR/1999/REC-xml-names-19990114/) to uniquely identify elements. Darwin Core namespaces are defined in the [Darwin Core Namespace Policy](../../namespace/), while Dublin Core namespaces are defined in the [DCMI Namespace Recommendation](http://dublincore.org/documents/dcmi-namespace/).

### 2.3 Abstract model

The Darwin Core follows the [Dublin Core Metadata Initiative Abstract Model](http://dublincore.org/documents/abstract-model/) except that the Darwin Core _record_ is roughly equivalent to the Dublin Core _resource_.

- Darwin Core terms MUST be either `classes` or `properties`.
- A `Darwin Core record` MUST be made up of zero or more `classes` and one or more `properties` with their associated `values`.
- Each `value` MUST be a literal string.
- The `values` of `properties` within a `Darwin Core record` describe that record.
- A `Darwin Core record` MUST include all required `properties`, if any, and their associated `values`.

### 2.4 Properties and values

Darwin Core follows the guidelines for expressing [Dublin Core metadata using XML](http://dublincore.org/documents/dc-xml/) except in that Darwin Core implementors MUST encode `properties` as XML elements and `values` as the content of those elements instead of having each property contain a value representation and its associated value. The name of the XML element MUST be an XML qualified name (QName), which associates the value given in the `Term name` attribute in the [Darwin Core Terms](../../terms/) recommendation with the appropriate namespace name. For example, use:

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

Elements for which the value is null SHOULD be omitted from the document or explicitly coded using the attribute `xsi:nil="true"`.

```xml
<dwc:locality xsi:nil="true"/>
```

An empty string - an element with no content - MUST NOT be used:

```xml
<dwc:locality></dwc:locality>
```

### 2.6 Simple Darwin Core

[Simple Darwin Core](tdwg_dwc_simple.xsd) most closely models the "flat" nature of many data sets. It is a ready-made schema for sharing information with no structure beyond properties of a _record_ (equivalent to fields in a table, or columns in a spreadsheet). It is meant to accommodate all properties except those that require further structure to be meaningful (auxilliary terms in the classes [ResourceRelationship](http://rs.tdwg.org/dwc/terms/ResourceRelationship), [MeasurementOrFact](http://rs.tdwg.org/dwc/terms/MeasurementOrFact), and [ChronometricAge](http://rs.tdwg.org/chrono/terms/ChronometricAge). The schema has no required terms and no term is repeated within a given _record_. Refer to [Simple Darwin Core](../simple/) for the rationale behind this schema.

The term [`dcterms:type`](http://rs.tdwg.org/dwc/terms/dcterms:type) (which is controlled by the [Dublin Core Type Vocabulary](http://dublincore.org/documents/dcmi-type-vocabulary/)), gives the basic category of object (`PhysicalObject`, `StillImage`, `MovingImage`, `Sound`, `Text`) the record is about. The term [`basisOfRecord`](http://rs.tdwg.org/dwc/terms/basisOfRecord), which has a controlled vocabulary distinct from that of `dcterms:type`, shows the name of the Darwin Core class (e.g., [`LivingSpecimen`](http://rs.tdwg.org/dwc/terms/LivingSpecimen), [`PreservedSpecimen`](http://rs.tdwg.org/dwc/terms/PreservedSpecimen), [`FossilSpecimen`](http://rs.tdwg.org/dwc/terms/FossilSpecimen), [`MaterialCitation`](http://rs.tdwg.org/dwc/terms/MaterialCitation), [`HumanObservation`](http://rs.tdwg.org/dwc/terms/HumanObservation), [`MachineObservation`](http://rs.tdwg.org/dwc/terms/MachineObservation), [`Taxon`](http://rs.tdwg.org/dwc/terms/Taxon)) the record is about.

#### 2.6.1 Simple Darwin Core example (non-normative)

Following is a brief example of an XML document for a single specimen complying with the [Simple Darwin Core Schema](tdwg_dwc_simple.xsd)].

```xml
<?xml version="1.0"?>
<dwr:SimpleDarwinRecordSet
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/xsd/simpledarwincore/  http://rs.tdwg.org/dwc/xsd/tdwg_dwc_simple.xsd"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:dcterms="http://purl.org/dc/terms/"
    xmlns:dwc="http://rs.tdwg.org/dwc/terms/"
    xmlns:dwr="http://rs.tdwg.org/dwc/xsd/simpledarwincore/">
    <dwr:SimpleDarwinRecord>
        <dc:type>PhysicalObject</dc:type>
        <dcterms:modified>2009-02-12T12:43:31</dcterms:modified>
        <dc:language>en</dc:language>
        <dcterms:rightsHolder>Regents of the University of California</dcterms:rightsHolder>
        <dcterms:license>http://creativecommons.org/publicdomain/zero/1.0/legalcode</dcterms:license>
        <dwc:basisOfRecord>PreservedSpecimen</dwc:basisOfRecord>
        <dwc:institutionCode>MVZ</dwc:institutionCode>
        <dwc:collectionCode>Mammal specimens</dwc:collectionCode>
        <dwc:catalogNumber>MVZ:Mamm:14523</dwc:catalogNumber>
        <dec:sex>male</dwc:sex>
        <dwc:occurrenceID>http://arctos.database.museum/guid/MVZ:Mamm:14523?seid=770093</dwc:occurrenceID>
        <dwc:country>United States</dwc:country>
        <dwc:countryCode>US</dwc:countryCode>
        <dwc:stateProvince>California</dwc:stateProvince>
        <dwc:county>Kern County</dwc:county>
        <dwc:locality>8 mi NE Bakersfield</dwc:locality>
        <dwc:decimalLatitude>35.45038</dwc:decimalLatitude>
        <dwc:decimalLongitude>-118.9092</dwc:decimalLongitude>
        <dwc:geodeticDatum>epdg:4267</dwc:geodeticDatum>
        <dwc:coordinateUncertaintyInMeters>13696</dwc:coordinateUncertaintyInMeters>
        <dwc:eventDate>1911-05-14</dwc:eventDate>
        <dwc:scientificName><Perognathus inornatus inornatus/dwc:scientificName>
    </dwr:SimpleDarwinRecord>
</dwr:SimpleDarwinRecordSet>
```

### 2.7 Classes and containment

Many Darwin Core terms (`properties`) are defined as being associated with another term (a `class`). For example, [`scientificName`](http://rs.tdwg.org/dwc/terms/scientificName) and [`Taxon`](http://rs.tdwg.org/dwc/terms/Taxon) are both Darwin Core terms, but `scientificName` is a property organized within the `Taxon` class. When constructing schemas that take advantage of classes in structures, implementors SHOULD maintain the property/class organization for the terms whenever possible (refer to the grouping of the term within a class in the [Quick Reference Guide](../../terms/). To promote reuse, Darwin Core provides a set of xml schemas to use as the basis of additional schemas:

- [Terms XML Schema](tdwg_dwcterms.xsd) - property term definitions as typed global elements and named groups for all terms for a given class to be referenced. The schema makes use of substitution groups `anyClass`, `anyProperty`, `anyIdentifier` and `anyXYZTerm` for each class, e.g. `anyTaxonTerm`. This is the schema upon which the [Simple Darwin Core XML Schema](tdwg_dwc_simple.xsd) is based.
- [Class Terms XML Schema](tdwg_dwc_class_terms.xsd) - class term definitions as typed global elements with subelements referencing all corresponding property terms via their substitution group.

Classes SHOULD be used in a normalized way to avoid deep nesting. An [XML schema](tdwg_dwc_classes.xsd) is provided to freely mix any Darwin Core Class in a global list and allow them to reference each other using the respective class identifier terms.

#### 2.7.1 Normalized classes examples (non-normative)

Following is an example of using a normalized class-based schema to represent two related specimen occurrences from one Event. In this example a Western garter snake collected by Gordon W Gullion in 1949 was found to have eaten a Coastal giant salamander. Note the reuse of class instances by referring to the identifiers declared in the instances of those classes:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<dwr:DarwinRecordSet xmlns:dwr="http://rs.tdwg.org/dwc/dwcrecord/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dwc="http://rs.tdwg.org/dwc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://rs.tdwg.org/dwc/dwcrecord/  http://rs.tdwg.org/dwc/xsd/tdwg_dwc_classes.xsd">
   <dwc:Occurrence>
      <dwc:occurrenceID>http://arctos.database.museum/guid/MVZ:Herp:51568?seid=525813</dwc:occurrenceID>
      <dcterms:type>PhysicalObject</dcterms:type>
      <dwc:basisOfRecord>PreservedSpecimen</dwc:basisOfRecord>
      <dwc:institutionCode>MVZ</dwc:institutionCode>
      <dwc:collectionCode>Amphibian and reptile specimens</dwc:collectionCode>
      <dwc:catalogNumber>MVZ:Herp:51568</dwc:catalogNumber>
      <dwc:recordedBy>Gordon W. Gullion</dwc:recordedBy>
      <dwc:organismID>http://arctos.database.museum/guid/MVZ:Herp:51568</dwc:organismID>
      <dwc:eventID>525813</dwc:eventID>
      <dwc:associatedMedia>http://arctos.database.museum/MediaSearch.cfm?collection_object_id=10513964</dwc:associatedMedia>
      <dwc:associatedOccurrences>"had stomach contents":"http://arctos.database.museum/guid/MVZ:Herp:51500?seid=670405"</dwc:associatedOccurrences>
   </dwc:Occurrence>
   <dwc:Organism>
      <dwc:organismID>http://arctos.database.museum/guid/MVZ:Herp:51568</dwc:organismID>
      <dwc:organismScope>multicellular organism</dwc:organismScope>
      <dwc:associatedOrganisms>"ate":"http://arctos.database.museum/guid/MVZ:Herp:51500"</dwc:associatedOrganisms>
   </dwc:Organism>
   <dwc:Event>
      <dwc:eventID>525813</dwc:eventID>
      <dwc:eventDate>1949-09-02</dwc:eventDate>
      <dwc:verbatimEventDate>2 Sep 1949</dwc:verbatimEventDate>
      <dwc:locationID>https://arctos.database.museum/place.cfm?action=detail&amp;locality_id=10754971</dwc:locationID>
   </dwc:Event>
   <dcterms:Location>
      <dwc:locationID>https://arctos.database.museum/place.cfm?action=detail&amp;locality_id=10754971</dwc:locationID>
      <dwc:country>United States</dwc:country>
      <dwc:countryCode>US</dwc:countryCode>
      <dwc:stateProvince>California</dwc:stateProvince>
      <dwc:county>Humboldt County</dwc:county>
      <dwc:locality>Raccoon Creek, 3 mi N Willow Creek</dwc:locality>
   </dcterms:Location>
   <dwc:Identification>
      <dwc:identifiedBy>Museum of Vertebrate Zoology, University of California, Berkeley</dwc:identifiedBy>
      <dwc:dateIdentified>1999-01-27</dwc:dateIdentified>
      <dwc:occurrenceID>http://arctos.database.museum/guid/MVZ:Herp:51568?seid=525813</dwc:occurrenceID>
      <dwc:taxonID>https://www.gbif.org/species/2457545</dwc:taxonID>
   </dwc:Identification>
   <dwc:Taxon>
      <dwc:taxonID>https://www.gbif.org/species/2457545</dwc:taxonID>
      <dwc:scientificName>Thamnophis elegans (Baird &amp; Girard, 1853)</dwc:scientificName>
      <dwc:taxonRank>species</dwc:taxonRank>
      <dwc:genus>Thamnophis</dwc:genus>
      <dwc:specificEpithet>elgans</dwc:specificEpithet>
   </dwc:Taxon>
   <dwc:Occurrence>
      <dwc:occurrenceID>http://arctos.database.museum/guid/MVZ:Herp:51500?seid=670405</dwc:occurrenceID>
      <dcterms:type>PhysicalObject</dcterms:type>
      <dwc:basisOfRecord>PreservedSpecimen</dwc:basisOfRecord>
      <dwc:institutionCode>MVZ</dwc:institutionCode>
      <dwc:collectionCode>Amphibian and reptile specimens</dwc:collectionCode>
      <dwc:catalogNumber>MVZ:Herp:51500</dwc:catalogNumber>
      <dwc:recordedBy>Gordon W. Gullion</dwc:recordedBy>
      <dwc:eventID>525813</dwc:eventID>
      <dwc:associatedMedia>http://arctos.database.museum/MediaSearch.cfm?collection_object_id=10513964</dwc:associatedMedia>
      <dwc:associatedOccurrences>"found as stomach contents of":"http://arctos.database.museum/guid/MVZ:Herp:51568?seid=525813"</dwc:associatedOccurrences>
   </dwc:Occurrence>
   <dwc:Organism>
      <dwc:organismID>http://arctos.database.museum/guid/MVZ:Herp:51500</dwc:organismID>
      <dwc:organismScope>multicellular organism</dwc:organismScope>
      <dwc:associatedOrganisms>"eaten by":"http://arctos.database.museum/guid/MVZ:Herp:51568"</dwc:associatedOrganisms>
   </dwc:Organism>
   <dwc:Identification>
      <dwc:identifiedBy>Museum of Vertebrate Zoology, University of California, Berkeley</dwc:identifiedBy>
      <dwc:dateIdentified>1999-01-27</dwc:dateIdentified>
      <dwc:occurrenceID>http://arctos.database.museum/guid/MVZ:Herp:51500?seid=670405</dwc:occurrenceID>
      <dwc:taxonID>https://www.gbif.org/species/2432022</dwc:taxonID>
   </dwc:Identification>
   <dwc:Taxon>
      <dwc:taxonID>https://www.gbif.org/species/2432022</dwc:taxonID>
      <dwc:scientificName>Dicamptodon tenebrosus (Baird &amp; Girard, 1852)</dwc:scientificName>
      <dwc:taxonRank>species</dwc:taxonRank>
      <dwc:genus>Dicamptodon</dwc:genus>
      <dwc:specificEpithet>tenebrosus</dwc:specificEpithet>
   </dwc:Taxon>
   <dwc:ResourceRelationship>
      <dwc:resourceID>http://arctos.database.museum/guid/MVZ:Herp:51568</dwc:resourceID>
      <dwc:relationshipOfResource>ate</dwc:relationshipOfResource>
      <dwc:relatedResourceID>http://arctos.database.museum/guid/MVZ:Herp:51500</dwc:relatedResourceID>
   </dwc:ResourceRelationship>
   <dwc:ResourceRelationship>
      <dwc:resourceID>http://arctos.database.museum/guid/MVZ:Herp:51500</dwc:resourceID>
      <dwc:relationshipOfResource>eaten by</dwc:relationshipOfResource>
      <dwc:relatedResourceID>http://arctos.database.museum/guid/MVZ:Herp:51568</dwc:relatedResourceID>
   </dwc:ResourceRelationship>
</dwr:DarwinRecordSet>```

Here is an example demonstrating area count observations for Events on two different days at the same location. Note that we omit the identification class here as there is no identification-related data and link directly to the Taxon via the `taxonID`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<dwr:DarwinRecordSet xmlns:dwr="http://rs.tdwg.org/dwc/dwcrecord/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dwc="http://rs.tdwg.org/dwc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://rs.tdwg.org/dwc/dwcrecord/  http://rs.tdwg.org/dwc/xsd/tdwg_dwc_classes.xsd">
   <dcterms:Location>
      <dwc:locationID>AR-NQ-LL-ERG</dwc:locationID>
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
      <dwc:eventID>JW-AR-NQ-LL-ERG/2006/11/26</dwc:eventID>
      <dwc:samplingProtocol>area count</dwc:samplingProtocol>
      <dwc:eventDate>2006-11-26</dwc:eventDate>
      <dwc:locationID>AR-NQ-LL-ERG</dwc:locationID>
   </dwc:Event>
   <dwc:Occurrence>
      <dwc:occurrenceID>URN:catalog:CLO:EBIRD:OBS64515288</dwc:occurrenceID>
      <dwc:institutionCode>CLO</dwc:institutionCode>
      <dwc:collectionCode>EBIRD</dwc:collectionCode>
      <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
      <dwc:individualCount>2</dwc:individualCount>
      <dwc:eventID>JW-AR-NQ-LL-ERG/2006/11/26</dwc:eventID>
      <dwc:taxonID>https://www.gbif.org/species/2490280</dwc:taxonID>
   </dwc:Occurrence>
   <dwc:Taxon>
      <dwc:taxonID>https://www.gbif.org/species/2490280</dwc:taxonID>
      <dwc:scientificName>Anthus hellmayri Hartert, 1909</dwc:scientificName>
      <dwc:class>Aves</dwc:class>
      <dwc:genus>Anthus</dwc:genus>
      <dwc:specificEpithet>hellmayri</dwc:specificEpithet>
   </dwc:Taxon>
   <dwc:Occurrence>
      <dwc:occurrenceID>URN:catalog:CLO:EBIRD:OBS64515286</dwc:occurrenceID>
      <dwc:institutionCode>CLO</dwc:institutionCode>
      <dwc:collectionCode>EBIRD</dwc:collectionCode>
      <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
      <dwc:individualCount>4</dwc:individualCount>
      <dwc:eventID>JW-AR-NQ-LL-ERG/2006/11/26</dwc:eventID>
      <dwc:taxonID>https://www.gbif.org/species/9286490</dwc:taxonID>
   </dwc:Occurrence>
   <dwc:Taxon>
      <dwc:taxonID>https://www.gbif.org/species/9286490</dwc:taxonID>
      <dwc:scientificName>Anthus correndera Vieillot, 1818</dwc:scientificName>
      <dwc:class>Aves</dwc:class>
      <dwc:genus>Anthus</dwc:genus>
      <dwc:specificEpithet>correndera</dwc:specificEpithet>
   </dwc:Taxon>
   <dwc:Event>
      <dwc:eventID>JW-AR-NQ-LL-ERG/2006/11/27</dwc:eventID>
      <dwc:samplingProtocol>area count</dwc:samplingProtocol>
      <dwc:eventDate>2006-11-27</dwc:eventDate>
      <dwc:locationID>AR-NQ-LL-ERG</dwc:locationID>
   </dwc:Event>
   <dwc:Occurrence>
      <dwc:occurrenceID>URN:catalog:CLO:EBIRD:OBS64515333</dwc:occurrenceID>
      <dwc:institutionCode>CLO</dwc:institutionCode>
      <dwc:collectionCode>EBIRD</dwc:collectionCode>
      <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
      <dwc:individualCount>2</dwc:individualCount>
      <dwc:eventID>JW-AR-NQ-LL-ERG/2006/11/27</dwc:eventID>
      <dwc:taxonID>https://www.gbif.org/species/2490280</dwc:taxonID>
   </dwc:Occurrence>
   <dwc:Occurrence>
      <dwc:occurrenceID>urn:catalog:AUDCLO:EBIRD:OBS64515331</dwc:occurrenceID>
      <dwc:institutionCode>CLO</dwc:institutionCode>
      <dwc:collectionCode>EBIRD</dwc:collectionCode>
      <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
      <dwc:individualCount>4</dwc:individualCount>
      <dwc:eventID>JW-AR-NQ-LL-ERG/2006/11/27</dwc:eventID>
      <dwc:taxonID>https://www.gbif.org/species/9286490</dwc:taxonID>
   </dwc:Occurrence>
</dwr:DarwinRecordSet>
```
