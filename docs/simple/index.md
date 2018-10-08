# Simple Darwin Core

Title
: Simple Darwin Core

Date version issued
: 2015-06-02

Date created
: 2009-04-21

Part of TDWG Standard
: <http://www.tdwg.org/standards/450/>

This version
: <http://rs.tdwg.org/dwc/terms/simple/2014-11-08>

Latest Version
: <http://rs.tdwg.org/dwc/terms/simple/>

Previous version
: <http://rs.tdwg.org/dwc/terms/simple/2013-10-22>

Abstract
: This document is a reference for the Simple Darwin Core standard.

Contributors
: John Wieczorek (MVZ), Markus Döring (GBIF), Renato De Giovanni (CRIA), Tim Robertson (GBIF), Dave Vieglais (KUNHM)

Creator
: Darwin Core Task Group

Bibliographic citation
: Darwin Core Task Group. 2009. Simple Darwin Core. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/terms/simple/>

## 1 Introduction

Simple Darwin Core is a predefined subset of the terms that have common use across a wide variety of biodiversity applications. The terms used in Simple Darwin Core are those that are found at the cross-section of taxonomic names, places, and events that document biological occurrences on the planet. The two driving principles are simplicity and flexibility.

### 1.1 Status of the content of this document

All sections of this document are normative, except for examples, which are explicitly marked as non-normative.

## 2 Audience

This document is targeted toward those who want to share biodiversity information using the simplest methods and structure: Simple Darwin Core. It explains the uses and limitations of this structure and how to expand upon it.

## 3 What makes it simple?

Simple Darwin Core is simple in that it assumes (and allows) no structure beyond the concept of rows and columns, which might be thought of as attributes and their values, or fields and records. The words field and record will be used throughout the rest of the document to refer to the two dimensions of the Simple Darwin Core structure. Think of the term names as the field names. In other words, a Simple Darwin Core record could be captured in a spreadsheet or in a single database table.

## 4 What makes it flexible?

Simple Darwin Core has minimal restrictions on which fields are required (none). You might argue that there should be more required fields, that there isn't anything useful you can do without them. That is partially true. A record with no fields in it wouldn't be very interesting, but there is a difference between requiring that there be a field in a record and requiring that a particular field be in all records. By having no required field restriction, Simple Darwin Core can be used to share any meaningful combination of fields - for example, to share "just names", or "just places", or observations of individuals detected in the wild at a given place and time following a method (an occurrence). This flexibility promotes the reuse of the terms and sharing mechanisms for a wide variety of services.

## 5 Are there any rules?

There are just a few general guiding principles on how to make the best use of Simple Darwin Core:

1. Any Darwin Core term name can be used as a field name.
2. No field name may be repeated in a record.
3. Do not use a _Class_ ([`Occurrence`](http://rs.tdwg.org/dwc/terms/Occurrence), [`Organism`](http://rs.tdwg.org/dwc/terms/Organism), [`MaterialSample`](http://rs.tdwg.org/dwc/terms/MaterialSample), [`LivingSpecimen`](http://rs.tdwg.org/dwc/terms/LivingSpecimen), [`PreservedSpecimen`](http://rs.tdwg.org/dwc/terms/PreservedSpecimen), [`FossilSpecimen`](http://rs.tdwg.org/dwc/terms/FossilSpecimen), [`Event`](http://rs.tdwg.org/dwc/terms/Event), [`HumanObservation`](http://rs.tdwg.org/dwc/terms/HumanObservation), [`MachineObservation`](http://rs.tdwg.org/dwc/terms/MachineObservation), [`Location`](http://rs.tdwg.org/dwc/terms/Location), [`GeologicalContext`](http://rs.tdwg.org/dwc/terms/GeologicalContext), [`Identification`](http://rs.tdwg.org/dwc/terms/Identification), [`Taxon`](http://rs.tdwg.org/dwc/terms/Taxon)) as a field.
4. Provide data in as many fields as you can.
5. Use the [`dcterms:type`](http://rs.tdwg.org/dwc/terms/dcterms:type) field to provide the name of the what Dublin Core type class (`PhysicalObject`, `StillImage`, `MovingImage`, `Sound`, `Text`) the record represents.
6. Use the [`basisOfRecord`](http://rs.tdwg.org/dwc/terms/basisOfRecord) field to provide the name of the most specific Darwin Core class (`LivingSpecimen`, `PreservedSpecimen`, `FossilSpecimen`, `MaterialSample`, `HumanObservation`, `MachineObservation`, `Event`, `Occurrence`, `Taxon`, `Identification`, `Organism`, `Location`, `GeologicalContext`, `MeasurementOrFact`, `ResourceRelationship`) the record represents.
7. Populate fields with data that match the definition of the field.
8. Use the controlled vocabulary for the values of fields that recommend them.
9. If data are withheld, use [`informationWithheld`](http://rs.tdwg.org/dwc/terms/informationWithheld) to say so.
10. If data are shared in lower quality than the original, use [`dataGeneralizations`](http://rs.tdwg.org/dwc/terms/dataGeneralizations) to say so.

Every field in Simple Darwin Core may appear either once or not at all in a single record - otherwise how could you distinguish one [`scientificName`](http://rs.tdwg.org/dwc/terms/scientificName) field from another one? Think of a database table. It will not allow you to have the same name for two different fields. Because of this design restriction (lack of flexibility for the sake of simplicity), the auxiliary fields from the [`MeasurementOrFact`](http://rs.tdwg.org/dwc/terms/MeasurementOrFact) and [`ResourceRelationship`](http://rs.tdwg.org/dwc/terms/ResourceRelationship) classes are of somewhat limited utility here - you could only share one `MeasurementOrFact` and one `ResourceRelationship` per record. You might argue then that there is no way to share information that requires related structures, such as a history of identifications of a specimen. That is mostly true. The only recourse within Simple Darwin Core is to force the data into one of the catch all "list" terms such as [`recordedBy`](http://rs.tdwg.org/dwc/terms/recordedBy), [`preparations`](http://rs.tdwg.org/dwc/terms/preparations), [`otherCatalogNumbers`](http://rs.tdwg.org/dwc/terms/otherCatalogNumbers), [`associatedMedia`](http://rs.tdwg.org/dwc/terms/associatedMedia), [`associatedReferences`](http://rs.tdwg.org/dwc/terms/associatedReferences), [`associatedSequences`](http://rs.tdwg.org/dwc/terms/associatedSequences), [`associatedTaxa`](http://rs.tdwg.org/dwc/terms/associatedTaxa), [`associatedOccurrences`](http://rs.tdwg.org/dwc/terms/associatedOccurrences), [`associatedOrganisms`](http://rs.tdwg.org/dwc/terms/associatedOrganisms), [`previousIdentifications`](http://rs.tdwg.org/dwc/terms/previousIdentifications), [`higherGeography`](http://rs.tdwg.org/dwc/terms/higherGeography), [`georeferencedBy`](http://rs.tdwg.org/dwc/terms/georeferencedBy), [`georeferenceSources`](http://rs.tdwg.org/dwc/terms/georeferenceSources), [`identifiedBy`](http://rs.tdwg.org/dwc/terms/identifiedBy), [`identificationReferences`](http://rs.tdwg.org/dwc/terms/identificationReferences), and [`higherClassification`](http://rs.tdwg.org/dwc/terms/higherClassification).

There is a difference between having data in a field and requiring that field to have a value from among a legal set of values. Darwin Core is simple in that it has minimal restrictions on the contents of fields. The term comments give recommendations about the use of controlled vocabularies and how to structure content wherever appropriate. Data contributors are encouraged to follow these recommendations as well as possible. You might argue that having no restrictions will promote "dirty" data (data of low quality or dubious value). Consider the simple axiom "It's not what you have, but what you do with it that matters." If data restrictions were in place at the fundamental level, then a record having any non-compliant data in any of its fields could not be shared via the standard. Not only would there be a dearth of shared data in that case (or an unused standard), but also there would be no way to use the standard to build shared data cleaning tools to actually improve the situation, nor to use data services to look up alternative representations (language translations, for example) to serve a broader audience. The rest is up to how the records will be used - in other words, it is up to applications to enforce further restrictions if appropriate, and it is up to the stakeholders of those applications to decide what the restrictions will be for the purpose the application is trying to serve.

## 6 How do I use Simple Darwin Core?

Darwin Core is simple in that data "complying with" Simple Darwin Core can be easily shared in a variety of ways, including, but not limited to, text files and xml documents. Equivalent ways of sharing the same data are described in the sections [Simple Darwin Core as Text](#61-simple-darwin-core-as-text) and [Simple Darwin Core as XML](#62-simple-darwin-core-as-xml).

What you need to do as a contributor of data via Simple Darwin Core depends on the requirements of the ones who are going to consume those data. For example, if you have a collaborator who wants to share data via Simple Darwin Core, then it may be sufficient to create a spreadsheet that contains column headers matching as many of the Darwin Core term names as you are both interested in sharing - just to be sure you both understand the meaning of the fields you share, and therefore hopefully something about their content. You might create a table in a database using Simple Darwin Core as a model (if it met all of your needs), and then connect that database with services for sharing via the web. You might use that same database (or spreadsheet) to export a comma-separated value (CSV) file for upload into a hosted service that could serve the data on your behalf. Or you might use that same file to upload into a service that would allow you to add value (such as a georeference) or quality (with a data cleaning tool), or to see your data in the context of other shared data.

### 6.1 Simple Darwin Core as text

The [Text guide](../text/) describes how to construct and format a text file using a simplified subset of the [Fielded Text](http://www.fieldedtext.org/) specification, which allows the contributor to describe the contents of a text file, or set of text files (related or not) through a separate configuration file (called a metafile). The metafile allows the contributor to communicate the structure of the content of the file or files and any relationships between them. Though it is good practice to describe a Simple Darwin Core file with such a metafile, it isn't strictly necessary if the file follows the CSV file specification and the first line of the file contains the field names. A `Fielded Text` metafile for any text file based on Simple Darwin Core can be created by customizing the [example metafile](../text/example_text_simpledwc_complete.xml), which includes references to all Darwin Core terms. Refer to the comments in the file itself as well as the metafile specification in the [Text guide](../text/) for more information.

### 6.2 Simple Darwin Core as XML

The [XML guide](../xml/) describes how to construct XML schemas to share data based on Darwin Core terms. Looking at the [Simple Darwin Core XML Schema](../xml/tdwg_dwc_simple.xsd) using the XML guide as a reference you will be able to see that the schema supports the notion of a `SimpleDarwinRecord`, which is just a grouping of up to one of each of the Darwin Core terms that are `Properties` (not `Classes`).

#### 6.2.1 Example of Simple Darwin Core as XML (non-normative)

The following example shows a `SimpleDarwinRecordSet` containing one `SimpleDarwinRecord` for a `Taxon`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SimpleDarwinRecordSet
    xmlns="http://rs.tdwg.org/dwc/xsd/simpledarwincore/"
    xmlns:dc="http://purl.org/dc/terms/"
    xmlns:dwc="http://rs.tdwg.org/dwc/terms/"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/xsd/simpledarwincore/ http://rs.tdwg.org/dwc/xsd/tdwg_dwc_simple.xsd">
    <SimpleDarwinRecord>
        <dc:modified>2006-05-04T18:13:51.0Z</dc:modified>
        <dc:language>en</dc:language>
        <dwc:basisOfRecord>Taxon</dwc:basisOfRecord>
        <dwc:scientificNameID>http://research.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=53548</dwc:scientificNameID>
        <dwc:acceptedNameUsageID>http://research.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=22010</dwc:acceptedNameUsageID>
        <dwc:originalNameUsageID>http://research.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=53548</dwc:originalNameUsageID>
        <dwc:nameAccordingToID>http://research.calacademy.org/research/ichthyology/catalog/getref.asp?id=22764</dwc:nameAccordingToID>
        <dwc:namePublishedInID>http://research.calacademy.org/research/ichthyology/catalog/getref.asp?id=671</dwc:namePublishedInID>
        <dwc:scientificName>Centropyge flavicauda Fraser-Brunner 1933</dwc:scientificName>
        <dwc:acceptedNameUsage>Centropyge fisheri (Snyder 1904)</dwc:acceptedNameUsage>
        <dwc:parentNameUsage>Centropyge  Kaup, 1860</dwc:parentNameUsage>
        <dwc:originalNameUsage>Centropyge flavicauda Fraser-Brunner 1933</dwc:originalNameUsage>
        <dwc:nameAccordingTo>Allen, G.R. 1980. Butterfly and angelfishes of the world. Volume II. Mergus Publishers. Pp. 149-352.</dwc:nameAccordingTo>
        <dwc:namePublishedIn>Fraser-Brunner, A. 1933. A revision of the chaetodont fishes of the subfamily Pomacanthinae. Proceedings of the General
              Meetings for Scientific Business of the Zoological Society of London 1933 (pt 3, no.30): 543-599, Pl. 1.</dwc:namePublishedIn>
        <dwc:higherClassification>Animalia;Chordata;Vertebrata;Osteichthyes;Actinopterygii;Neopterygii;Teleostei;Acanthopterygii;Perciformes;
              Percoidei;Pomacanthidae;Centropyge</dwc:higherClassification>
        <dwc:kingdom>Animalia</dwc:kingdom>
        <dwc:phylum>Chordata</dwc:phylum>
        <dwc:class>Osteichthyes</dwc:class>
        <dwc:order>Perciformes</dwc:order>
        <dwc:family>Pomacanthidae</dwc:family>
        <dwc:genus>Centropyge</dwc:genus>
        <dwc:specificEpithet>flavicauda</dwc:specificEpithet>
        <dwc:scientificNameAuthorship>Fraser-Brunner 1933</dwc:scientificNameAuthorship>
        <dwc:taxonRank>species</dwc:taxonRank>
        <dwc:nomenclaturalCode>ICZN</dwc:nomenclaturalCode>
        <dwc:taxonomicStatus>accepted</dwc:taxonomicStatus>
    </SimpleDarwinRecord>
</SimpleDarwinRecordSet>
```

The `SimpleDarwinRecord` acts as a `Class` in implementation, because all of the terms are properties of it. The Simple Darwin Core schema has just one other level of structure, the `SimpleDarwinRecordSet`, which is a grouping of one or more `SimpleDarwinRecords`. The `SimpleDarwinRecordSet` acts as a `Class` to define a data set during implementation.

## 7 Doing more with Simple Darwin Core

Sooner or later you may want to share more information than Simple Darwin Core seems to allow. For example, you and your colleagues might decide that it would be useful to have a standard way to exchange additional information relevant to questions in Conservation. How would you do it?

One way would be to try to "overload" existing terms by using them to hold information other than what was intended based on the definition of the terms. Please don't do this. If an existing term has close to the same meaning as one you want to use, but just doesn't quite fit because of the way the definition is worded, it would be better to request an amendment to the term definition so that it will be clear for your community how to use it. You can request such a change by submitting an issue in the [Darwin Core repository](https://github.com/tdwg/dwc).

### 7.1 Structured content using dynamicProperties

Another way to get more out of Darwin Core without adding a term is to "payload" the [`dynamicProperties`](http://rs.tdwg.org/dwc/terms/dynamicProperties) term with structured content, as shown in the example below, using Javascript Open Notation (JSON). This is perfectly legal, since it doesn't compromise the meaning of the term. One of the weaknesses of payloading data in this way is that it is subject to a lack of stable or well-defined semantics. Also, it is highly recommended to flatten the content into a single string with no non-printing characters (such as line feeds) to facilitate use in the widest variety of data sharing contexts. Still, this might be a reasonable way to at least allow you to share all of your data, even if there might be problems with people using it reliably.

#### 7.1.1 Example of structured JSON content within XML (non-normative)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SimpleDarwinRecordSet
    xmlns="http://rs.tdwg.org/dwc/xsd/simpledarwincore/"
    xmlns:dc="http://purl.org/dc/terms/"
    xmlns:dwc="http://rs.tdwg.org/dwc/terms/"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/xsd/simpledarwincore/ http://rs.tdwg.org/dwc/xsd/tdwg_dwc_simple.xsd">
    <SimpleDarwinRecord>
        <dc:modified>2009-02-12T12:43:31</dc:modified>
        <dc:language>en</dc:language>
        <dwc:basisOfRecord>Taxon</dwc:basisOfRecord>
        <dwc:scientificName>Ctenomys sociabilis</dwc:scientificName>
        <dwc:acceptedNameUsage>Ctenomys sociabilis Pearson and Christie, 1985</dwc:acceptedNameUsage>
        <dwc:parentNameUsage>Ctenomys Blainville, 1826</dwc:parentNameUsage>
        <dwc:higherClassification>Animalia; Chordata; Vertebrata; Mammalia; Theria; Eutheria; Rodentia; Hystricognatha; Hystricognathi; Ctenomyidae; Ctenomyini; Ctenomys</dwc:higherClassification>
        <dwc:kingdom>Animalia</dwc:kingdom>
        <dwc:phylum>Chordata</dwc:phylum>
        <dwc:class>Mammalia</dwc:class>
        <dwc:order>Rodentia</dwc:order>
        <dwc:family>Ctenomyidae</dwc:family>
        <dwc:genus>Ctenomys</dwc:genus>
        <dwc:specificEpithet>sociabilis</dwc:specificEpithet>
        <dwc:taxonRank>species</dwc:taxonRank>
        <dwc:scientificNameAuthorship>Pearson and Christie, 1985</dwc:scientificNameAuthorship>
        <dwc:nomenclaturalCode>ICZN</dwc:nomenclaturalCode>
        <dwc:namePublishedIn>Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388</dwc:namePublishedIn>
        <dwc:taxonomicStatus>valid</dwc:taxonomicStatus>
        <dwc:dynamicProperties>{"iucnStatus":"vulnerable", "distribution":"Neuquén, Argentina"}</dwc:dynamicProperties>
    </SimpleDarwinRecord>
</SimpleDarwinRecordSet>
```

### 7.2 Extending Darwin Core by adding terms

If you were using just CSV text files to exchange information, then you might be tempted to just add the new fields to the files. This approach suffers most of the same problems as payloading - no one aside from those with whom you communicated would know what those new fields were or how to use them. Sharing in this way via XML would be an even bigger problem, because the [Simple Darwin Core XML Schema](../xml/tdwg_dwc_simple.xsd) defines the terms that it supports and the new fields would not correspond with any terms understood by the schema. In other words, the XML with your fields in it would not be a valid Simple Darwin Core XML document.

So, if you really need to extend the capabilities of Darwin Core, the best first step is to follow the standards process to add the terms you need. See the [Contributing guide](https://github.com/tdwg/dwc/blob/master/.github/CONTRIBUTING.md) to understand how to suggest a new term.

## 8 Going beyond Simple Darwin Core

For cases where rich data require rich (non-simple) structure, Simple Darwin Core alone is not suitable. When sharing information via [Fielded Text](http://www.fieldedtext.org/), the solution is to use Simple Darwin Core as a core record with one or more associated extensions for the additional information. See the [Text guide](../text/) for an explanation and examples.

When sharing information via [XML](http://www.w3.org/XML/), a richer structure such as the Access to Biological Collections Data schema ([ABCD](https://github.com/tdwg/abcd)), or the [Generic Darwin Core](../xml/tdwg_dwcterms.xsd), or another schema built from Darwin Core terms to suit the use of the data in a particular context. See the [XML guide](../xml/) for examples and references to model schemas.
