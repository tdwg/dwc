# Darwin Core XML Guide

## 1\. Introduction

**Audience**: This document is targeted toward those who wish to use or construct application schemas using Darwin Core terms in XML. It includes explanations of existing schemas such as the Simple Darwin Core \[[SIMPLEDWC](../../simple/index.htm)\] and how to build new schemas to meet specific models of information.

This document provides guidelines for implementing application schemas based on Darwin Core terms \[[TERMS](../../index.htm)\] using \[[XML](http://www.w3.org/XML/)\]. The underlying metadata model is described (in a syntax neutral way), followed by some specific guidelines for XML implementations. Some guidance on the use of non\-Darwin Core terms is also provided.

This document does not provide guidelines for encoding Darwin Core in RDF/XML. Nor does it take a position on the relative merits of encoding metadata in 'plain' XML rather than RDF/XML. This document provides guidelines in those cases where RDF/XML is not considered appropriate.

## 2\. Implementation Guide

### 2.1 XML Schema

Implementors should base their XML applications on _XML Schemas_ \[[XMLSCHEMA](http://www.w3.org/XML/Schema)\] rather than _XML DTDs_. Approaches based on _XML Schemas_ are more flexible and are more easily re\-used within other XML applications.

### 2.2 XML Namespaces

Implementors should use _XML Namespaces_ \[[XMLNS](http://www.w3.org/TR/1999/REC-xml-names-19990114/)\] to uniquely identify elements. Darwin Core namespaces are defined in the _Darwin Core Namespace Policy_ \[[NAMESPACEPOLICY](../../namespace/index.htm)\], while Dublin Core namespaces are defined in the _DCMI Namespace Recommendation_ \[[DCMINS](http://dublincore.org/documents/dcmi-namespace/)\].

### 2.3 Abstract model

The Darwin Core follows the _Dublin Core Metadata Initiative Abstract Model_ \[[ABSTRACTMODEL](http://dublincore.org/documents/abstract-model/)\] except that the Darwin Core _record_ is roughly equivalent to the Dublin Core _resource_.

<ul>
<li>-   Darwin Core terms are either _classes_ or _properties_.</li>
<li>-   Each _property_ has at most one _class_ as its domain (describes no more than one _class_).</li>
<li>-   A _Darwin Core record_ is made up of zero or more _classes_ and one or more _properties_ with their associated _values_.</li>
<li>-   Each _value_ is a literal string.</li>
<li>-   The _values_ of _properties_ within a _Darwin Core record_ describe that record.</li>
<li>-   A _Darwin Core record_ must include all required _properties_, if any, and their associated _values_.</li>
</ul>

### 2.4 Properties and Values

The Darwin Core follows the guidelines for expressing Dublin Core metadata using XML \[[DCMIXMLGUIDE](http://dublincore.org/documents/dc-xml/)\] except in that Darwin Core implementors should encode _properties_ as XML elements and _values_ as the content of those elements instead of having each property contain a value representation and its associated value. The name of the XML element should be an XML qualified name (QName), which associates the value given in the _Term name_ attribute in the Darwin Core Terms recommendation \[[TERMS](../../index.htm)\] with the appropriate namespace name. For example, use

```XML
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
    targetNamespace="http://rs.tdwg.org/dwc/terms/"
    xmlns:dwc="http://rs.tdwg.org/dwc/terms/">
...
<dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
```

rather than

```XML
<dwc:basisOfRecord value="HumanObservation" />
```

### 2.5 Null values

Elements for which the value is null should be omitted from the document or explicitly coded using the attribute _xsi:nil="true"_.

```XML
<dwc:locality xsi:nil="true"/>
```

Do not use an empty string \- an element with no content:

```XML
<dwc:locality></dwc:locality>
'''

### 2.6 Simple Darwin Core

The _Simple Darwin Core_ \[[SIMPLEXMLSCHEMA](../../../xsd/tdwg_dwc_simple.xsd)\] most closely models the "flat" nature of many data sets. It is a ready\-made schema for sharing information with no structure beyond properties of a _record_ (equivalent to fields in a table, or columns in a spreadsheet). It is meant to accommodate all properties except those that require further structure to be meaningful (auxilliary terms in the classes [ResourceRelationship](../../index.htm#ResourceRelationship) and [MeasurementOrFact](../../index.htm#MeasurementOrFact). The schema has no required terms and no term is repeated within a given _record_. Refer to the _Simple Darwin Core_ page \[[SIMPLEDWC](../../simple/index.htm)\] for the rationale behind this schema.

The term [dcterms:type](../../index.htm#type) (which is controlled by the _Dublin Core Type Vocabulary_ \[[DCMI\-TYPE](http://dublincore.org/documents/dcmi-type-vocabulary/)\]), gives the basic category of object (PhysicalObject, StillImage, MovingImage, Sound, or Text) the record is about. The term [basisOfRecord](../../index.htm#basisOfRecord), which has a controlled vocabulary distinct from that of _dcterms:type_, shows the name of the Darwin Core class (e.g., LivingSpecimen, PreservedSpecimen, FossilSpecimen, HumanObservation, MachineObservation, Taxon) the record is about.

Following is a brief example of an XML document for a single specimen complying with the _Simple Darwin Core Schema_ \[[SIMPLEXMLSCHEMA](../../../xsd/tdwg_dwc_simple.xsd)\]. The Simple Darwin Core XML example document \[[SIMPLEXMLEXAMPLE](../../../examples/xml/example_simple.xml)\] (if this link shows a blank page in your browser, use the View Source option to see the XML document) shows detail for a single record having a more complete set of elements.

```XML
<?xml version="1.0"?>
<dwr:SimpleDarwinRecordSet
    xmlns:xsi="http://www.w3.org/2001/XMLSchema\-instance"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/xsd/simpledarwincore/  http://rs.tdwg.org/dwc/xsd/tdwg\_dwc\_simple.xsd"
    xmlns:dcterms="http://purl.org/dc/terms/"
    xmlns:dwc="http://rs.tdwg.org/dwc/terms/"
    xmlns:dwr="http://rs.tdwg.org/dwc/xsd/simpledarwincore/">
    <dwr:SimpleDarwinRecord>
        <dcterms:type>PhysicalObject</dcterms:type>
        <dcterms:modified>2009\-02\-12T12:43:31</dcterms:modified>
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

### 2.7 Classes and Containment

Many Darwin Core terms (_properties_) are defined as being associated with another term (a _class_). For example, [scientificName](../../index.htm#ScientificName) and [Taxon](../../index.htm#Taxon) are both Darwin Core terms, but _scientificName_ is a property associated with the _Taxon_ class. When constructing schemas that take advantage of classes in structures, implementors are encouraged to maintain the property/class relationships defined by the terms whenever possible (refer to the _Class_ attribute of the term as given in the _Quick Reference Guide_ \[[TERMS](../../index.htm)\]) or the attribute _dwcattributes:organizedInClass_ in the term declaration in the [dcterms.rdf](../../../rdf/dcterms.rdf) file. To promote reuse, Darwin Core provides a set of xml schemas to use as the basis of additional schemas:

-   \[[TERMSXMLSCHEMA](../../../xsd/tdwg_dwcterms.xsd)\] \- property term definitions as typed global elements and named groups for all terms for a given class to be referenced. The schema makes use of substitution groups anyClass, anyProperty, anyIdentifier and anyXYZTerm for each class, e.g. anyTaxonTerm. This is the schema upon which the _Simple Darwin Core XML Schema_ \[[SIMPLEXMLSCHEMA](../../../xsd/tdwg_dwc_simple.xsd)\] is based.
-   \[[CLASSTERMSXMLSCHEMA](../../../xsd/tdwg_dwc_class_terms.xsd)\] \- class term definitions as typed global elements with subelements referencing all corresponding property terms via their substitution group.

It is encouraged to use classes in a normalized way to avoid deep nesting. A _Darwin Core Tools and Applications_ wiki page \[[TOOLS](https://github.com/tdwg/dwc-documentation/blob/master/documentation/resources.md)\] has been created as an index to example schemas for the purpose of community discussions and development. An XML schema \[[CLASSXMLSCHEMA](../../../xsd/tdwg_dwc_classes.xsd)\] is provided to freely mix any Darwin Core Class in a global list and allow them to reference each other using the respective class identifier terms. Following is an example of using normalized classes to represent two related specimen occurrences (one of which has had a second identification) at one location following this class\-based schema. Note that you can reuse the location definition here by referring to it via locationID:

```XML
<?xml version="1.0"?>
<dwr:DarwinRecordSet
    xmlns:xsi="http://www.w3.org/2001/XMLSchema\-instance"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/dwcrecord/  http://rs.tdwg.org/dwc/xsd/tdwg\_dwc\_classes.xsd"
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
        <dcterms:modified>2009\-02\-12T12:43:31</dcterms:modified>
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
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:d79c11aa\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
    </dwc:Identification>
    <dwc:Taxon>
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:d79c11aa\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
      <dwc:scientificName>Ctenomys</dwc:scientificName>
      <dwc:taxonRank>genus</dwc:taxonRank>
      <dwc:nomenclaturalCode>ICZN</dwc:nomenclaturalCode>
      <dwc:genus>Ctenomys</dwc:genus>
    </dwc:Taxon>
    <dwc:Identification>
      <dwc:identificationID>http://guid.mvz.org/identifications/94752</dwc:identificationID>
      <dwc:identifiedBy>James L Patton</dwc:identifiedBy>
      <dwc:dateIdentified>2001\-09\-14</dwc:dateIdentified>
      <dwc:occurrenceID>urn:catalog:MVZ:Mammals:14523</dwc:occurrenceID>
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:df0a797c\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
    </dwc:Identification>
    <dwc:Taxon>
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:df0a797c\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
      <dwc:parentNameUsageID>urn:lsid:catalogueoflife.org:taxon:d79c11aa\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:parentNameUsageID>
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
        <dcterms:modified>2009\-02\-12T12:43:31</dcterms:modified>
        <dwc:institutionCode>MVZ</dwc:institutionCode>
        <dwc:collectionCode>Mammals</dwc:collectionCode>
        <dwc:occurrenceID>urn:catalog:MVZ:Mammals:14524</dwc:occurrenceID>
        <dwc:basisOfRecord>PreservedSpecimen</dwc:basisOfRecord>
        <dwc:locationID>http://guid.mvz.org/sites/arg/127</dwc:locationID>
    </dwc:Occurrence>
    <dwc:Identification>
      <dwc:identificationID>http://guid.mvz.org/identifications/94753</dwc:identificationID>
      <dwc:identifiedBy>James L Patton</dwc:identifiedBy>
      <dwc:dateIdentified>2001\-09\-14</dwc:dateIdentified>
      <dwc:occurrenceID>urn:catalog:MVZ:Mammals:14524</dwc:occurrenceID>
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:df0a797c\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
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

Here is different example demonstrating area count observations for events on two different days at one location. Note that we omit the identification class here as there is not identification related data and link via the taxonID directly:

```XML
<?xml version="1.0"?>
<dwr:DarwinRecordSet
    xmlns:xsi="http://www.w3.org/2001/XMLSchema\-instance"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/dwcrecord/  http://rs.tdwg.org/dwc/xsd/tdwg\_dwc\_classes.xsd"
    xmlns:dcterms="http://purl.org/dc/terms/"
    xmlns:dwc="http://rs.tdwg.org/dwc/terms/"
    xmlns:dwr="http://rs.tdwg.org/dwc/dwcrecord/">
    <dcterms:Location>
      <dwc:locationID>http://guid.mvz.org/sites/arg/127</dwc:locationID>
      <dwc:country>Argentina</dwc:country>
      <dwc:countryCode>AR</dwc:countryCode>
      <dwc:stateProvince>Neuquén</dwc:stateProvince>
      <dwc:locality>Valle Limay, Estancia Rincon Grande, 48 ha area with centroid at this point</dwc:locality>
      <dwc:decimalLatitude>\-40.97467</dwc:decimalLatitude>
      <dwc:decimalLongitude>\-71.0734</dwc:decimalLongitude>
      <dwc:geodeticDatum>WGS84</dwc:geodeticDatum>
      <dwc:coordinateUncertaintyInMeters>200</dwc:coordinateUncertaintyInMeters>
    </dcterms:Location>
    <dwc:Event>
      <dwc:eventID>http://guid.mvz.org/events/2006/11/26/17</dwc:eventID>
      <dwc:samplingProtocol>area count</dwc:samplingProtocol>
      <dwc:eventDate>2006\-11\-26</dwc:eventDate>
      <dwc:locationID>http://guid.mvz.org/sites/arg/127</dwc:locationID>
    </dwc:Event>
    <dwc:Occurrence>
      <dwc:occurrenceID>urn:catalog:AUDCLO:EBIRD:OBS64515288</dwc:occurrenceID>
      <dcterms:type>Event</dcterms:type>
      <dcterms:modified>2009\-02\-17T07:33:04Z</dcterms:modified>
      <dwc:institutionCode>AUDCLO</dwc:institutionCode>
      <dwc:collectionCode>EBIRD</dwc:collectionCode>
      <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
      <dwc:individualCount>2</dwc:individualCount>
      <dwc:eventID>http://guid.mvz.org/events/2006/11/26/17</dwc:eventID>
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000ee00\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
    </dwc:Occurrence>
    <dwc:Taxon>
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000ee00\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
      <dwc:scientificName>Anthus hellmayri Hartert, 1909</dwc:scientificName>
      <dwc:class>Aves</dwc:class>
      <dwc:genus>Anthus</dwc:genus>
      <dwc:specificEpithet>hellmayri</dwc:specificEpithet>
    </dwc:Taxon>
    <dwc:Occurrence>
      <dwc:occurrenceID>urn:catalog:AUDCLO:EBIRD:OBS64515286</dwc:occurrenceID>
      <dcterms:type>Event</dcterms:type>
      <dcterms:modified>2009\-02\-17T07:33:04Z</dcterms:modified>
      <dwc:institutionCode>AUDCLO</dwc:institutionCode>
      <dwc:collectionCode>EBIRD</dwc:collectionCode>
      <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
      <dwc:individualCount>1</dwc:individualCount>
      <dwc:eventID>http://guid.mvz.org/events/2006/11/26/17</dwc:eventID>
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000e838\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
    </dwc:Occurrence>
    <dwc:Taxon>
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000e838\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
      <dwc:scientificName>Anthus correndera Vieillot, 1818</dwc:scientificName>
      <dwc:class>Aves</dwc:class>
      <dwc:genus>Anthus</dwc:genus>
      <dwc:specificEpithet>correndera</dwc:specificEpithet>
    </dwc:Taxon>
    <dwc:Event>
      <dwc:eventID>http://guid.mvz.org/events/2006/11/27/6</dwc:eventID>
      <dwc:samplingProtocol>area count</dwc:samplingProtocol>
      <dwc:eventDate>2006\-11\-27</dwc:eventDate>
      <dwc:locationID>http://guid.mvz.org/sites/arg/127</dwc:locationID>
    </dwc:Event>
    <dwc:Occurrence>
      <dwc:occurrenceID>urn:catalog:AUDCLO:EBIRD:OBS64515333</dwc:occurrenceID>
      <dcterms:type>Event</dcterms:type>
      <dcterms:modified>2009\-02\-17T07:33:04Z</dcterms:modified>
      <dwc:institutionCode>AUDCLO</dwc:institutionCode>
      <dwc:collectionCode>EBIRD</dwc:collectionCode>
      <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
      <dwc:individualCount>1</dwc:individualCount>
      <dwc:eventID>http://guid.mvz.org/events/2006/11/27/6</dwc:eventID>
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000ee00\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
    </dwc:Occurrence>
    <dwc:Occurrence>
      <dwc:occurrenceID>urn:catalog:AUDCLO:EBIRD:OBS64515331</dwc:occurrenceID>
      <dcterms:type>Event</dcterms:type>
      <dcterms:modified>2009\-02\-17T07:33:04Z</dcterms:modified>
      <dwc:institutionCode>AUDCLO</dwc:institutionCode>
      <dwc:collectionCode>EBIRD</dwc:collectionCode>
      <dwc:basisOfRecord>HumanObservation</dwc:basisOfRecord>
      <dwc:individualCount>2</dwc:individualCount>
      <dwc:eventID>http://guid.mvz.org/events/2006/11/27/6</dwc:eventID>
      <dwc:taxonID>urn:lsid:catalogueoflife.org:taxon:f000ee00\-29c1\-102b\-9a4a\-00304854f820:col20120721</dwc:taxonID>
    </dwc:Occurrence>
</dwr:DarwinRecordSet>
```
