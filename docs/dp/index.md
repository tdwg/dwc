# Darwin Core Data Package guide

Title
: Darwin Core Data Package guide

Date version issued
: 2026-04-17

Date created
: 2026-04-17

Part of TDWG Standard
: <http://www.tdwg.org/standards/450>

This version
: <http://rs.tdwg.org/dwc/doc/dp/2026-04-17>

Latest version
: <http://rs.tdwg.org/dwc/doc/dp/>

Abstract
: Specification for creating a Darwin Core Data Package.

Contributors
: [Peter Desmet](https://orcid.org/0000-0002-8442-8025) ([Instituut voor Natuur- en Bosonderzoek (INBO)](http://www.wikidata.org/entity/Q7315097)), [Tim Robertson](https://orcid.org/0000-0001-6215-3617) ([Global Biodiversity Information Facility](http://www.wikidata.org/entity/Q1531570)), [John Wieczorek](https://orcid.org/0000-0003-1144-0290) ([Rauthiflor LLC, Global Biodiversity Information Facility](http://www.wikidata.org/entity/Q1531570))

Creator
: Darwin Core Maintenance Group

Bibliographic citation
: Darwin Core Maintenance Group. 2026. Darwin Core Data Package guide. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/doc/dp/2026-04-17>

[dp.v1]: https://specs.frictionlessdata.io/
[dp.v2]: https://datapackage.org/
[data-package]: https://specs.frictionlessdata.io/data-package/
[package.descriptor]: https://specs.frictionlessdata.io/data-package/#descriptor
[package.resources]: https://specs.frictionlessdata.io/data-package/#required-properties
[package.profile]: https://specs.frictionlessdata.io/data-package/#profile
[package.id]: https://specs.frictionlessdata.io/data-package/#id
[package.created]: https://specs.frictionlessdata.io/data-package/#created
[package.version]: https://specs.frictionlessdata.io/data-package/#version
[data-resource]: https://specs.frictionlessdata.io/data-resource/
[tabular-data-resource]: https://specs.frictionlessdata.io/tabular-data-resource/
[csv-dialect]: https://specs.frictionlessdata.io/csv-dialect/
[resource]: https://specs.frictionlessdata.io/data-resource/#name
[resource.name]: https://specs.frictionlessdata.io/data-resource/#name
[resource.path]: https://specs.frictionlessdata.io/data-resource/#path-data-in-files
[resource.profile]: https://specs.frictionlessdata.io/data-resource/#profile
[resource.format]: https://specs.frictionlessdata.io/data-resource/#optional-properties
[resource.mediatype]: https://specs.frictionlessdata.io/data-resource/#optional-properties
[resource.dialect]: https://specs.frictionlessdata.io/tabular-data-resource/#csv-dialect
[resource.schema]: https://specs.frictionlessdata.io/data-resource/#resource-schemas
[resource.encoding]: https://specs.frictionlessdata.io/data-resource/#metadata-properties
[table-schema]: https://specs.frictionlessdata.io/table-schema/
[schema.fields]: https://specs.frictionlessdata.io/table-schema/#descriptor
[schema.primaryKey]: https://specs.frictionlessdata.io/table-schema/#primary-key
[schema.foreignKeys]: https://specs.frictionlessdata.io/table-schema/#foreign-keys
[schema.missingValues]: https://specs.frictionlessdata.io/table-schema/#missing-values
[field.name]: https://specs.frictionlessdata.io/table-schema/#name
[field.title]: https://specs.frictionlessdata.io/table-schema/#title
[field.description]: https://specs.frictionlessdata.io/table-schema/#description
[field.type]: https://specs.frictionlessdata.io/table-schema/#types-and-formats
[field.format]: https://specs.frictionlessdata.io/table-schema/#types-and-formats
[field.constraints]: https://specs.frictionlessdata.io/table-schema/#constraints

## 1 Introduction

Darwin Core Data Package (hereafter referred to as “**DwC-DP**”) is a community-developed container format to exchange biodiversity data. It extends the [Data Package specification][dp.v1] (developed by Frictionless Data) as an implementation for the [Darwin Core Conceptual Model](../cm/). This document specifies the requirements for a dataset to comply with DwC-DP.

### 1.1 Audience (non-normative)

This guide is intended for biodiversity data providers, curators, aggregators, researchers, software implementers, and standards developers who prepare or consume datasets using Darwin Core. It assumes familiarity with tabular data, but not with the Data Package specification. Where helpful, it references relevant parts of the Data Package specification and the Darwin Core standard.

### 1.2 Status of the content of this document

All sections of this document are normative (define what is required to comply with the standard), except for sections that are explicitly marked as non-normative (support understanding, but are not binding).

### 1.3 RFC 2119 key words

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) and [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174) when, and only when, they appear in all capitals, as shown here.

## 2 DwC-DP Data Package example (non-normative)

Consider a dataset containing four bird *Occurrences* observed during a single parent *Event*. The data can be captured in two CSV files, each representing a DwC-DP table:

**event.csv**

```text
eventID,eventDate,locationID
S229876476,2025-04-26T20:57:00+02:00,https://ebird.org/hotspot/L43523233
```

**occurrence.csv**

```text
occurrenceID,eventID,scientificName,organismQuantity,organismQuantityType
1,S229876476,Apus apus,3,individuals
2,S229876476,Troglodytes troglodytes,1,individuals
3,S229876476,Turdus merula,1,individuals
4,S229876476,Erithacus rubecula,1,individuals
```

This dataset can be described as a DwC-DP with the following **descriptor** (`datapackage.json`):

```json
{
  "profile": "http://rs.tdwg.org/dwc-dp/1.0/dwc-dp-profile.json",
  "id": "https://doi.org/10.9999/dwc-dp-example-dataset-doi",
  "created": "2025-09-08T09:52:03-03:00",
  "version": "1.0",
  "resources": [
    {
      "name": "event",
      "path": "event.csv",
      "profile": "tabular-data-resource",
      "format": "csv",
      "mediatype": "text/csv",
      "schema": {
        "fields": [
          {
            "name": "eventID",
            "title": "Event ID",
            "description": "An identifier for a dwc:Event.",
            "type": "string",
            "format": "default",
            "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
            "dcterms:references": "http://rs.tdwg.org/dwc/terms/version/eventID-2023-06-28"
          },
          {
            "name": "eventDate",
            "title": "Event Date",
            "description": "A date or time interval during which a dwc:Event occurred.",
            "type": "string",
            "format": "default",
            "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventDate",
            "dcterms:references": "http://rs.tdwg.org/dwc/terms/version/eventDate-2025-06-12"
          },
          {
            "name": "locationID",
            "title": "Location ID",
            "description": "An identifier a dcterms:Location.",
            "type": "string",
            "format": "default",
            "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/locationID",
            "dcterms:references": "http://rs.tdwg.org/dwc/terms/version/locationID-2023-06-28"
          }
        ],
        "primaryKey": ["eventID"]
      }
    },
    {
      "name": "occurrence",
      "path": "occurrence.csv",
      "profile": "tabular-data-resource",
      "format": "csv",
      "mediatype": "text/csv",
      "schema": {
        "fields": [
          {
            "name": "occurrenceID",
            "title": "Occurrence ID",
            "description": "An identifier for a dwc:Occurrence.",
            "type": "string",
            "format": "default",
            "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
            "dcterms:references": "http://rs.tdwg.org/dwc/terms/version/occurrenceID-2023-06-28"
          },
          {
            "name": "eventID",
            "title": "Event ID",
            "description": "An identifier for a dwc:Event.",
            "type": "string",
            "format": "default",
            "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
            "dcterms:references": "http://rs.tdwg.org/dwc/terms/version/eventID-2023-06-28"
          },
          {
            "name": "scientificName",
            "title": "Scientific Name",
            "description": "A full scientific name, with authorship and date information if known. When forming part of a dwc:Identification, this should be the name in lowest level taxonomic rank that can be determined. This term should not contain identification qualifications, which should instead be supplied in dwc:verbatimIdentification.",
            "type": "string",
            "format": "default",
            "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificName",
            "dcterms:references": "http://rs.tdwg.org/dwc/terms/version/scientificName-2023-06-28"
          },
          {
            "name": "organismQuantity",
            "title": "Organism Quantity",
            "description": "A number or enumeration value for the quantity of dwc:Organisms.",
            "type": "string",
            "format": "default",
            "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismQuantity",
            "dcterms:references": "http://rs.tdwg.org/dwc/terms/version/organismQuantity-2023-06-28"
          },
          {
            "name": "organismQuantityType",
            "title": "Organism Quantity Type",
            "description": "A type of quantification system used for the quantity of dwc:Organisms.",
            "type": "string",
            "format": "default",
            "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismQuantityType",
            "dcterms:references": "http://rs.tdwg.org/dwc/terms/version/organismQuantityType-2023-06-28"
          }
        ],
        "primaryKey": ["occurrenceID"],
        "foreignKeys": [
          {
            "fields": "eventID",
            "predicate": "happened during",
            "reference": {
              "resource": "event",
              "fields": "eventID"
            }
          }
        ]
      }
    }
  ]
}
```

Together with an `eml.xml` file containing dataset-level **metadata**, the dataset would consist of the following files that could be zipped for easier transfer:

```text
datapackage.json
eml.xml
event.csv
occurrence.csv
```

## 3 DwC-DP content
 
1. A DwC-DP MAY have an EML **metadata** file named `eml.xml`, which describes the scientific meaning, provenance, stewardship, and contextual interpretation of a dataset. A metadata file MUST follow the [Ecological Metadata Language specification](https://eml.ecoinformatics.org/).

2. A DwC-DP MUST have a JSON **descriptor** file named `datapackage.json`, which describes the structure and relational mechanics of the data in the dataset. A descriptor file MUST follow the [Data Package specification][package.descriptor]. See [section 3.1](#31-descriptor-content). 

3. A DwC-DP MUST have at least one **resource** file that represents a data package table and contains data for a dataset. See [section 3.2](#32-resources). Resource files MAY be at the root level of the data package.

4. A DwC-DP MAY have **other resource** files that do not represent data package tables. See [section 3.2.3](#323-other-resources). Other resource files MAY be at the root level of the data package.

The entire contents of a data package MAY be compressed using gzip (only) and if compressed must have a file name that ends with `.gz` (e.g., `example-dwc-dp.gz`). If a compressed data package is unzipped, the metadata (`eml.xml`) and descriptor (`datapackage.json`) files MUST be at the root level of the data package and MUST NOT be individually compressed.

Whether the entire contents of a data package is compressed or not, resource files MAY be individually compressed using gzip (only). An individually compressed resource file MUST have a name that appends `.gz` to the name of the compressed file (e.g., `event.csv` becomes `event.csv.gz`).
 
### 3.1 Descriptor content

A DwC-DP **descriptor** file (named `datapackage.json`) contains a reference to the profile the dataset conforms to, a list of data files (resources) and (optionally) dataset-level metadata in addition to or instead of the metadata in an `eml.xml` file. The requirements for these elements of a descriptor file are described below.

{:.alert .alert-info}
All requirements and examples in this guide use [version 1][dp.v1] of the Data Package specification, which is RECOMMENDED for DwC-DPs.

1. The descriptor MUST have a `profile` property, with a URL referencing the [profile][package.profile] the dataset conforms to. This MUST be a string representing the URL to a **DwC-DP profile** served from `http://rs.tdwg.org`. The URL MUST include the version of the profile (e.g., `http://rs.tdwg.org/dwc-dp/1.0/dwc-dp-profile.json`, where `1.0` is the version).

    {:.alert .alert-info}
    (non-normative) The DwC-DP profile imports all [Data Package requirements](https://specs.frictionlessdata.io/schemas/data-package.json). A dataset that conforms to the DwC-DP profile will therefore also conform to the Data Package requirements. In other words: a DwC-DP is also a Data Package.

2. The descriptor SHOULD have an `id` property, with an identifier for the dataset, preferably a DOI. The `id` property MUST follow the [Data Package specification][package.id].

3. The descriptor SHOULD have a `created` property, with a timestamp indicating when the dataset was created. The `created` property MUST follow the [Data Package specification][package.created].

4. The descriptor SHOULD have a `version` property, indicating the version of the dataset. The `version` property MUST follow the [Data Package specification][package.version].

5. The descriptor MUST have a `resources` property, with an array of data files that are considered part of a dataset. The `resources` property MUST follow the [Data Package specification][package.resources] and MUST contain at least one data resource. See [section 3.2](#32-resources) for details.

6. The descriptor MAY have additional package-level properties. This includes dataset-level metadata defined by the [Data Package specification][data-package] (e.g., `title`, `description`, `contributors`, `sources`, `licenses`) or custom properties.

### 3.2 Resources

Each data file included in DwC-DP is a **resource**. Each resource MUST follow the [Data Resource specification][resource].

Of special interest are resources with data organized in tables that implement the [Darwin Core Conceptual Model](../cm/) (DwC-CM)]. These resources/tables (hereafter referred to as “**DwC-DP table files**”) have additional requirements.

#### 3.2.1 DwC-DP table files

A data file representing a DwC-DP table MUST be a delimited text files (hereafter referred to as “**CSV files**”, irrespective of the chosen dialect). Table files MUST follow [RFC 4180](https://tools.ietf.org/html/rfc4180), with the following exceptions:

1. A table file MUST be encoded as UTF-8 OR, when deviating from that encoding, the MUST have an appropriate `encoding` property that MUST follow the [Data Resource specification][resource.encoding].

2. When a table file deviates from RFC 4180 regarding dialect (e.g., line terminators, field delimiters, quote characters), the DwC-DP table MUST have a `dialect` property describing the dialect. That property MUST follow the [CSV Dialect specification][csv-dialect]. Only dialect properties deviating from the default SHOULD be provided. If the CSV file follows all defaults, a `dialect` property SHOULD NOT be provided.

#### 3.2.2 DwC-DP table properties

1. A DwC-DP table MUST have a `name` property, with the name of the table. The `name` property MUST follow the [Data Resource specification][resource.name] and MUST be one of the reserved table names defined in the DwC-DP profile (e.g., `event`, `occurrence`). See [section 4](#dwc-dp-tables) for an overview.

2. A DwC-DP table MUST have a `path` property, with the path to the data file. The `path` property MUST follow the [Data Resource specification][resource.path].

3. A DwC-DP table MUST have a `profile` property, indicating the type of resource. The `profile` property MUST be the value `tabular-data-resource`, thereby indicating that it follows the [Tabular Data Resource][tabular-data-resource] specification.

4. A DwC-DP table SHOULD have a `format` property, indicating the standard file extension of the data file (e.g., `csv`, `tsv`). The `format` property MUST follow the [Data Resource specification][resource.format].

5. A DwC-DP table MUST have a `mediatype` property, indicating the mediatype of the data file (e.g., `text/csv`). The `mediatype` property MUST follow the [Data Resource specification][resource.mediatype] and MUST be the value `text/csv`.

6. A DwC-DP table MUST have a `schema` property, with a **table schema** describing the fields and relationships of the table. The `schema` property MUST follow the [Data Resource specification][resource.schema], and MUST be an object representing the schema (not merely a string referencing it). See [section 3.3](#33-table-schemas) for details.

    {:.alert .alert-info}
    (non-normative) By verbosely including the `schema`, a descriptor does not rely on externally hosted files (except for the DwC-DP profile) to describe the data it represents.

7. A DwC-DP table MAY have additional properties. This includes those defined by the [Data Resource specification][data-resource] (e.g., `bytes`, `hash`) or custom properties.

#### 3.2.3 Other resources

A DwC-DP MAY include other resources that do not represent a DwC-DP table. They MUST NOT have a `name` that is one of the reserved table names defined in the DwC-DP profile. See [section 4](#dwc-dp-tables) for an overview.

### 3.3 Table Schemas

A **table schema** describes the fields, relationships and missing values of a tabular data file. A table schema MUST follow the [Table Schema specification][table-schema].

Table schemas are provided at `rs.tdwg.org` for each DwC-DP table. See [section 4](#dwc-dp-tables). These table schemas include all possible fields, primary keys and foreign key relationships a table can have. Use these to select the fields and keys that are applicable to your data.

1. A DwC-DP table schema MUST have a `fields` property, with an array of **field descriptors** describing the fields/columns in the data file. The `fields` property MUST follow the [Table Schema specification][schema.fields]. In addition, the order and number of elements in `fields` MUST be the order and number of fields in the CSV file. See [section 3.4](#3.4-field-descriptors) for details.

2. Each field in a DwC-DP table schema MUST be described with the field descriptor of the table schema provided at `rs.tdwg.org` for that table. For example, if you want to describe an `eventID` field in an `event` table, you MUST use the field descriptor for `eventID` in the table schema for `event` provided at `rs.tdwg.org`. Fields MUST NOT be misrepresented. Custom fields SHOULD NOT be added.

3. A DwC-DP table schema SHOULD have a `primaryKey` property indicating the field(s) that act as primary keys. A `primaryKey` property MUST follow the [Table Schema specification][schema.primaryKey]. The `primaryKey` property is REQUIRED if the field is referenced by another table. `primaryKey` values MUST be one or more of the `primaryKey` values defined in the table schema provided at `rs.tdwg.org` for that table (i.e., do not define primary keys not defined there). See [section 3.3.1](#331-relationships-example).

4. A DwC-DP table schema SHOULD have a `foreignKeys` property with an array of relationships the table has with other tables. It MUST follow the [Table Schema specification][schema.foreignKeys]. If a table has a foreign key relationship with another table, then the `foreignKeys` property is REQUIRED and every relationship MUST be expressed therein. `foreignKeys` values MUST be one or more of the `foreignKeys` values defined in the table schema provided at `rs.tdwg.org` (i.e., do not define foreign key relationships not defined there). `foreignKeys` MAY have a `predicate` property to document relationship semantics. See [section 3.3.1](#331-relationships-example).

5. A DwC-DP table schema MAY have a `missingValues` property, indicating what values should be interpreted as `null`. A `missingValues` property MUST follow the [Table Schema specification][schema.missingValues].

6. A DwC-DP table schema MAY have custom properties.

#### 3.3.1 Relationships example (non-normative)

Consider an `event` table with the following table schema:

```json
{
  "fields": [],
  "primaryKey": "eventID",
  "foreignKeys": [
    {
      "fields": "eventConductedByID",
      "predicate": "conducted by",
      "reference": {
        "resource": "agent",
        "fields": "agentID"
      }
    },
    {
      "fields": "parentEventID",
      "predicate": "happened during",
      "reference": {
        "resource": "",
        "fields": "eventID"
      }
    }
  ]
}
```

For brevity, let's name fields as `table_name.field_name` (e.g., `event.eventID` refers to the `eventID` field in the `event` table). The above schema expresses:

1. A relationship between the `event` and `agent` tables. For each value in `event.eventConductedByID` a corresponding value is expected in `agent.agentID`, linking those records.

2. A relationship between the `event` table and itself. For each value in `event.parentEventID` a corresponding value is expected in `event.eventID`, linking those records.

3. Since `event.eventID` is the target of a foreign key relationship, it must be a primary key.

### 3.4 Field descriptors

A **field descriptor** describes a single field in a table schema (e.g., its name, description, format, constraints).

1. A field descriptor MUST have a `name` property, with the name of the field (e.g., `eventID`). A `name` property MUST follow the [Table schema specification][field.name] and SHOULD correspond to the name of field/column in the data file (if a header is present).

2. A field descriptor MUST have a `title` property, with the label of the field (e.g., `Event ID`). A `title` property MUST follow the [Table schema specification][field.title].

3. A field descriptor MUST have a `description` property, with a human-readable description of the field, such as a Darwin Core definition. A `description` property MUST follow the [Table schema specification][field.description]. The definition of a field MAY differ (in this context) from the original definition for the corresponding term found in the `dcterms:isVersionOf` property.

4. A field descriptor MAY have a `comments` property, with context-specific usage notes.

5. A field descriptor MAY have a `examples` property, with context-specific examples of content appropriate for the field.

6. A field descriptor MUST have a `type` property, indicating the data type of values in the field (e.g., `string`, `number`). A `type` property MUST follow the [Table schema specification][field.type].

7. A field descriptor SHOULD have a `format` property, indicating how values should be parsed. A `format` property MUST follow the [Table schema specification](field.format).

8. A field descriptor MAY have a `namespace` property, with an abbreviation of the namespace of the source term (e.g., `dwc`, `dcterms`).

9. A field descriptor MUST have a `dcterms:isVersionOf` property, with the URL of the unversioned source term the field is based on (e.g., `http://rs.tdwg.org/dwc/terms/eventID`).

10. A field descriptor MAY have a `dcterms:references` property, with the URL of the version of the source term the field is based on (e.g., `http://rs.tdwg.org/dwc/terms/version/eventID-2023-06-28`).

11. A field descriptor MAY have an `rdfs:comment` property, which MUST contain the canonical definition of the source term found in the `dcterms:references` property.

12. A field descriptor MAY have a `constraints` property, indicating value requirements that SHOULD be used in validation. A `constraints` property MUST follow the [Table Schema specification][field.constraints].

13. A field descriptor MAY have additional properties, including optional properties defined by the [Table Schema specification][table-schema] or custom properties.

{:.alert .alert-info}
(non-normative) You will be guaranteed to meet the requirements for field descriptors by copying field descriptors directly from the table schemas provided at `rs.tdwg.org`.

## 4. DwC-DP tables (non-normative)

- **Reserved table names**: see the `enum` values for `dwc-dp-resource-names` in the Darwin Core Profile at http://rs.tdwg.org/dwc-dp/1.0/dwc-dp-profile.json
- **Table schemas**: see the `tableSchemas` at http://rs.tdwg.org/dwc-dp/1.0/table-schemas