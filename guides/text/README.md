dcterms.title: Darwin Core text guide
dcterms.description: Guidelines for implementing Darwin Core in Text files.
dcterms.modified: 2015-01-14

---

# Darwin Core text guide

## 1. Introduction

This document provides guidelines for formatting and sharing Darwin Core terms [[TERMS](../../terms/index.html)] in _fielded text_ formats, such as one or more comma separated value (CSV) files. Data conforming to the Simple Darwin Core [[SIMPLEDWC](../../simple_dwc.html)] (CSV format and having the first row include Darwin Core standard term names) can be shared in a single file, while a non-standard text file can be understood using an [[XML](http://www.w3.org/XML/)] metafile to describe its contents and formatting.

![Usage](images/usage.png)

More complex structure can be shared in multiple related files. The description of content and relationships between files can be achieved using the metafile. This guideline makes recommendations for the simple case of a _core_ file, upon which Darwin Core _records_ are based, and _extensions_ that are linked to records in that core file. Specifically, extension records have a _many-to-one_ relationship with records in the core file. For example, a core file might contain specimen records, with one specimen per row in the file, while an extension file contains one or more identifications for those specimens, with one identification per row in the extension file, and with an identifier to the specimen for each identification row. This example would allow many identifications to be associated with each specimen.

### 1.1 Simple example metafile content

A simple comma separated values (CSV) data file with the following content:

```
ID,Species,Count
123,"Cryptantha gypsophila Reveal & C.R. Broome",12
124,"Buxbaumia piperi",2 
```

can be described with the following Darwin Core metafile:

```
<?xml version="1.0" encoding="UTF-8"?>
<archive xmlns="http://rs.tdwg.org/dwc/text/"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/text/ http://rs.tdwg.org/dwc/text/tdwg_dwc_text.xsd">
	<core rowType="http://rs.tdwg.org/dwc/xsd/simpledarwincore/SimpleDarwinRecord" ignoreHeaderLines="1">
		<files>
			<location>http://data.gbif.org/download/specimens.csv</location>
    	</files>
    	<field index="0" term="http://rs.tdwg.org/dwc/terms/catalogNumber" />
    	<field index="1" term="http://rs.tdwg.org/dwc/terms/scientificName" />
    	<field index="2" term="http://rs.tdwg.org/dwc/terms/individualCount" />
   		<!-- A constant value has no index, but applies to all rows -->
    	<field term="http://rs.tdwg.org/dwc/terms/datasetID" default="urn:lsid:tim.lsid.tdwg.org:collections:1"/>
	</core>
</archive>
```

These same data could be understood without the metafile if the first row of the CSV file contained the term names:

```
type,institutionCode,collectionCode,catalogNumber,scientificName,individualCount,datasetID
PhysicalObject,ANSP,PH,123,"Cryptantha gypsophila Reveal & C.R. Broome",12,urn:lsid:tim.lsid.tdwg.org:collections:1
PhysicalObject,ANSP,PH,124,"Buxbaumia piperi",2,urn:lsid:tim.lsid.tdwg.org:collections:1
```

### 1.2 XML versus _fielded text_

Many resources exist on the web describing the advantages of Extensible Markup Language [[XML](http://www.w3.org/XML/)] over less structured content such as _fielded text_. The Darwin Core Text Guide (this document) is not meant to promote the use of _fielded text_ over XML for data exchange, but rather to provide recommendations for how to handle such data files when necessary.

Two scenarios that might benefit from the use of _fielded text_ are:

* The transfer of large numbers of Darwin Core records and related data from one database to another. Typically databases are very efficient at exporting and importing comma separated text files.
* The description of legacy data existing in a _fielded text_ format, such that it might be automatically understood and loaded into another system. It could be that this system would then serve the data in another format such as XML.

## 2. Metafile Content

The text metafile schema [[TEXTSCHEMA](tdwg_dwc_text.xsd)] provides technical details for the structure of a metafile by defining the elements and attributes required to describe the contents and relationships between text files. These elements and attributes, with descriptions and specifications for their use in a metafile, are described in the following table.

### 2.1 The `<archive>` element

The `<archive>` element is the container for the list of related files (one core and zero or more extensions). The `<archive>` element has just one attribute, `metadata`.

#### `metadata` attribute

Contains a qualified Uniform Resource Locator (URL) defining the location of a metadata description of the entire archive. The format of the metadata is not prescribed, but a standardized format such as Ecological Metadata Language (EML), Federal Geographic Data Committee (FGDC), or ISO 19115 family is recommended.

* **Required**: no
* **Default**: metadata.xml

#### `<core>` subelement

An `<archive>` must contain exactly one `<core>` element, representing the data entity (the actual file and its column header mappings to Darwin Core terms) upon which records are based.

If extensions are being used, each record in the core data must have a unique identifier. The field for this identifier must be specified in an explicit `<id>` field in order to associate extension records with the core record.

#### `<extension>` subelement

An `<archive>` may define zero or more `<extension>` elements, each representing an individual extension entity directly related to the core. In addition to the general file attributes described below, every extension entity must have an explicit `<coreId>` field to relate the extension record to a row in the core entity. The extension itself does not have to have a unique ID field and many rows can point to the same core record.

### 2.2 The `<core>` or `<extension>` element

#### `rowType` attribute

A Unified Resource Identifier (URI) for the term identifying the class of data represented by each row, for example, http://rs.tdwg.org/dwc/terms/Occurrence for Occurrence records or http://rs.tdwg.org/dwc/terms/Taxon for Taxon records. Additional classes may be referenced by URI and defined outside the Darwin Core specification. The row type is required. For convenience the URIs for classes defined by the Darwin Core are listed below:

<dl class="dl-horizontal">
    <dt>Occurrence</dt><dd>http://rs.tdwg.org/dwc/terms/Occurrence</dd>
    <dt>Event</dt><dd>http://rs.tdwg.org/dwc/terms/Event</dd>
    <dt>Location</dt><dd>http://purl.org/dc/terms/Location</dd>
    <dt>GeologicalContext</dt><dd>http://purl.org/dc/terms/GeologicalContext</dd>
    <dt>Identification</dt><dd>http://rs.tdwg.org/dwc/terms/Identification</dd>
    <dt>Taxon</dt><dd>http://rs.tdwg.org/dwc/terms/Taxon</dd>
    <dt>ResourceRelationship</dt><dd>http://rs.tdwg.org/dwc/terms/ResourceRelationship</dd>
    <dt>MeasurementOrFact</dt><dd>http://rs.tdwg.org/dwc/terms/MeasurementOrFact</dd>
</dl>

* **Required**: yes

#### `fieldsTerminatedBy` attribute

Specifies the delimiter between fields. Typical values might be `,` or `\t` for CSV or Tab files respectively.

* **Required**: no
* **Default**: `,`

#### `linesTerminatedBy` attribute

Specifies the row separator character.

* **Required**: no
* **Default**: `\n`

#### `fieldsEnclosedBy` attribute

Specifies the character used to enclose (mark the start and end of) each field. CSV files frequently use the double quote character (`"`), but the default is no enclosing character. Note that a comma separated value file that has commas within the content of any field must have an enclosing character.</td>

* **Required**: no
* **Default**: `"`

#### `encoding` attribute

Specifies the [character encoding](http://en.wikipedia.org/wiki/Character_encoding) for the data file. The encoding is extremely important, but often ignored. The most frequently used encodings are:

<dl class="dl-horizontal">
    <dt>UTF-8</dt><dd>8-bit Unicode Transformation Format.</dd>
    <dt>UTF-16</dt><dd>16-bit Unicode Transformation Format.</dd>
    <dt>ISO-8859-1</dt><dd>Commonly known as Latin-1 and a common default on systems configured for a single western European language.</dd>
    <dt>Windows-1252</dt><dd>Commonly known as WinLatin and a common default of legacy versions of Microsoft Windows based operating systems.</dd>
</dl>

* **Required**: no
* **Default**: `UTF-8`

#### `ignoreHeaderLines` attribute

Specifies the number lines to ignore from the beginning of the file. This can be used to ignore files with column headings or preamble comments for example.

* **Required**: no
* **Default**: `0`

#### `dateFormat` attribute

When verbatim dates are consistent in format, this field can be used to indicate the format represented. It is recommended to use the date, dateTime and time for field formats wherever possible, but where verbatim dates are required, a format may be specified here. This should be considered a 'hint' for consumers. It is recommended that consumers support the minimum combinations of `DD` `MM` and `YYYY` with the separators `/` and `-`. Examples:

<dl class="dl-horizontal">
    <dt>DDMMYYYY</dt><dd>For dates of the form 21121978</dd>
    <dt>DD-MM-YYYY</dt><dd>For dates of the form 21-12-1978</dd>
    <dt>MMDDYYYY</dt><dd>For dates of the form 12211978</dd>
    <dt>MM-DD-YYYY</dt><dd>For dates of the form 12-21-1978</dd>
    <dt>YYYYMMDD</dt><dd>For dates of the form 19781221</dd>
</dl>

#### `<files>` subelement

`<core>` or `<extension>` element must contain one `<files>` element to locate the data being described.

#### `<id>` subelement

If extensions are being used, the `<core>` must contain an <id> element that indicates the identifier for a record.

#### `<coreId>` subelement

If extensions are being used, the `<extension>` element must contain a `<coreId>` element that indicates the column in the extension file that contains the core record identifier (the matching `<id>` in the core file).

#### `<field>` subelement

A `<core>` or `<extension>` element must contain one or more <field> elements, each representing a 'column' in the row.

### 2.3 `<files>` element

The files element must contain one or more <location> elements, each defining where a file resides. Each core or extension entity can be composed from one or more files. If an entity has data in more than one file, use the `<location>` element multiple times, once for each file that makes up the entity.

#### `<location>` subelement

Specifies the location of the file being described, which may take either of the following forms:

* A web accessible URL such as `http://www.gbif.org/data/specimen.csv` or `ftp://ftp.gbif.org/tim/specimen.txt`.
* A filepath relative to the location of the metafile such as `specimen.txt`, `./specimen.txt`, `data/specimen.txt`.

### 2.4 The `<field>` element

The field element is used to specify the location and content of data within a file. There must be one field element for every term being shared for the entity, whether explicitly or through the use of a default value for all rows in the file.

#### `index` attribute

Specifies the position of the column in the row. The first column has an index of 0, the second column 1, etc. If no column index is specified, then the term and the default may be used to define a constant value for all rows.

* **Required**: no
* **Default**:

#### `term` attribute

A Unified Resource Identifier (URI) for the term represented by this field. For example, a field containing the scientific name would have term="http://rs.tdwg.org/dwc/terms/scientificName". Terms outside of the Darwin Core specification may be used, such as those from the Dublin Core Metadata Initative, for example, dcterms:modified would be term="http://purl.org/dc/terms/modified".

* **Required**: yes

#### `default` attribute

Specifies value to use if one is not supplied for the field in a given row. If no index is supplied, the default can be used to define a constant for all rows for a field that is not in the data file.

* **Required**: no
* **Default**:

#### `vocabulary` attribute

A Unified Resource Identifier (URI) for a vocabulary that the source values for this field are based on. The URI ideally should resolve to some machine readable definition like SKOS, RDF or at least some simple text or html file often found for ISO or RFC standards. For example http://rs.gbif.org/vocabulary/gbif/nomenclatural_code.xml, http://www.ietf.org/rfc/rfc3066.txt or http://www.iso.org/iso/list-en1-semic-3.txt.

* **Required**: no
* **Default**:

## 3. Implementation Guide

### 3.1 Extension example

The following example illustrates the use of extensions. In this example there are three files in the archive, all of which are located in the same directory as the metafile. The whales.txt file acts as a core file of Taxon records. The whales.txt file is extended by two other files, types.txt and distribution.txt. The types.txt file contains records of a type specified in an external definition at http://http://rs.gbif.org/terms/1.0/Types and consists of Dublin Core and Darwin Core terms, while the distribution.txt file contains records of a type specified at http://http://rs.gbif.org/terms/1.0/Distribution and consists of Darwin Core terms plus an additional term for threatStatus. Both extension files are related to the core file by the taxonNameID fields. Presumably, this archive contains information about whale species, type specimen records for those species, and lists of countries and the threat status for those species.

![Extension](images/extension.png)

```XML
<?xml version="1.0" encoding="UTF-8"?>
<archive xmlns="http://rs.tdwg.org/dwc/text/"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xsi:schemaLocation="http://rs.tdwg.org/dwc/text/ http://rs.tdwg.org/dwc/text/tdwg_dwc_text.xsd">
    
    <core encoding="UTF-8" fieldsTerminatedBy="\t" linesTerminatedBy="\n" ignoreHeaderLines="1" rowType="http://rs.tdwg.org/dwc/terms/Taxon">
        <files>
            <location>whales.txt</location>
        </files>
        <id index="0" />
        <field index="0" term="http://rs.tdwg.org/dwc/terms/taxonID" />
        <field index="1" term="http://purl.org/dc/terms/modified" />
        <field index="2" term="http://rs.tdwg.org/dwc/terms/scientificName"/>
        <field index="3" term="http://rs.tdwg.org/dwc/terms/acceptedNameUsageID"/>
        <field index="4" term="http://rs.tdwg.org/dwc/terms/parentNameUsageID"/>
        <field index="5" term="http://rs.tdwg.org/dwc/terms/originalNameUsageID"/>
    </core>
    
    <extension encoding="UTF-8" fieldsTerminatedBy="," linesTerminatedBy="\n" fieldsEnclosedBy='"' ignoreHeaderLines="1" rowType="http://rs.gbif.org/terms/1.0/Types">
        <files>
            <location>types.csv</location>
        </files>
        <coreId index="0" />
        <field index="1" term="http://purl.org/dc/terms/bibliographicCitation"/>
        <field index="2" term="http://rs.tdwg.org/dwc/terms/catalogNumber"/>
        <field index="3" term="http://rs.tdwg.org/dwc/terms/collectionCode"/>
        <field index="4" term="http://rs.tdwg.org/dwc/terms/institutionCode"/>
        <field index="5" term="http://rs.tdwg.org/dwc/terms/typeStatus"/>
    </extension>
    
    <extension encoding="UTF-8" fieldsTerminatedBy="," linesTerminatedBy="\n" fieldsEnclosedBy='"' ignoreHeaderLines="1" rowType="http://rs.gbif.org/terms/1.0/Distribution">
        <files>
            <location>distribution.csv</location>
        </files>
        <coreId index="0" />
        <field index="1" term="http://rs.tdwg.org/dwc/terms/countryCode"/>
        <field index="2" term="http://rs.gbif.org/terms/1.0/threatStatus"/>
        <field index="3" term="http://rs.tdwg.org/dwc/terms/occurrenceStatus"/>
    </extension>
</archive>
```

## 4. Database Example

### 4.1 MySQL

It is very easy to produce _fielded text_ using the `SELECT INTO` outfile command from MySQL. The encoding of the resulting file will depend on the server variables and collations used, and might need to be modified before the operation is done. Note that MySQL will export `NULL` values as \N by default. Use the `IFNULL()` function as shown in the following example to avoid this.

```SQL
SELECT 
    IFNULL(id, ''), IFNULL(scientific_name, ''), IFNULL(count,'') 
        INTO outfile '/tmp/dwc.txt' 
            FIELDS TERMINATED BY ',' 
            OPTIONALLY ENCLOSED BY '"' 
            LINES TERMINATED BY '\n' 
FROM 
    dwc;
```

## 5. Tools

For tools and applications, including a Java-based application to read Darwin Core text archives, see the [resources page](../../resources/index.html).
