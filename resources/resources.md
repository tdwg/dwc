## Tools and applications

This page is meant to be an index to Darwin Core resources such as schemas, applications, properties files, and example data sets.

If you have schema to contribute or discuss, create a wiki page for it, provide clear and succinct sections on Purpose and Audience, and give it an appropriate schema Label (schema-XML, schema-TEXT). When the page is developed satisfactorily a reference to it can be placed in the index on this page, which is referenced in the Darwin Core Standard documents.

### Normative term definition document

* RDF file of the complete history of all terms used in Darwin Core http://darwincore.googlecode.com/svn/trunk/rdf/dwctermshistory.rdf

### Archive

* Zip file of complete standard (usable offline) http://darwincore.googlecode.com/svn/trunk/archive/darwincore.zip

### Translations

* DwC terms definitions for translation http://darwincore.googlecode.com/svn/trunk/downloads/DwCTermsForTranslations.csv
* RDF file of existing translations http://rs.gbif.org/terms/dwc/dwc_translations.rdf

### Presentations

#### Darwin Core ratified in the year of Darwin

* Presentation: http://darwincore.googlecode.com/svn/trunk/downloads/Kampmeier_ECN09DwC.ppt
* Abstract: Entomological Collections Network meeting 13 December 2009. The concept of the Darwin Core (http://www.tdwg.org/activities/darwincore/) as a standard by which to share information about species and biodiversity information has been evolving over the last 10 years. Many of us used the now historical versions (http://rs.tdwg.org/dwc/terms/history/versions/index.htm) to guide how we would parse our specimen data into fields, using the Classic Darwin Core (1.2) or the Draft Standard Darwin Core (1.4), perhaps with curatorial, geospatial, or paleontology extensions, or even the specimen interaction extension under discussion mainly by those interested in pollination ecology. The newly ratified Darwin Core Standard (http://rs.tdwg.org/dwc/) of the Biodiversity Information Standards (TDWG) group (www.tdwg.org) has elevated the process to an entirely new level, firmly rooting it in the Dublin Core (dublincore.org) where applicable, and using modern tools to allow documentation, issue tracking, discussion, and changes to encourage a dynamic and flexible yet grounded standard on which to build a framework for sharing our biodiversity information. And in the year celebrating anniversaries of the birth of Darwin and the publication of his "On the Origin of Species"--how cool is that?!

#### What is a Darwin Core Archive and who uses it?

http://www.youtube.com/watch?v=hYbDN2jCCoc

### Templates

* Simple DwC CSV file header (UTF8 encoding): http://darwincore.googlecode.com/svn/trunk/downloads/SimpleDwCCSVheaderUTF8.txt
* Simple DwC Properties file (language=en): http://darwincore.googlecode.com/svn/trunk/downloads/SimpleDwC.properties
* Simple DwC MySQL CREATE TABLE statement: http://darwincore.googlecode.com/svn/trunk/downloads/SimpleDwCMySQL.sql
* Simple DwC Microsoft Access database: http://darwincore.googlecode.com/svn/trunk/downloads/SimpleDwCMSAccess.mdb
* Simple DwC Microsoft Excel spreadsheet: http://darwincore.googlecode.com/svn/trunk/downloads/SimpleDwCMSExcel.xls

### Vocabularies

Controlled Vocabulary Tools (lists, web services): 

* http://rs.gbif.org
* http://vocabularies.gbif.org/
* Apple Core: https://code.google.com/p/applecore/
* DwC Java Enumerations: https://github.com/gbif/dwc-api

### Simple Darwin Core

* Introduction: http://rs.tdwg.org/dwc/terms/simple/index.htm
* XML schema: http://rs.tdwg.org/dwc/xsd/tdwg_dwc_simple.xsd
* Extensible XML schema: http://rs.tdwg.org/dwc/xsd/tdwg_dwc_simple_extensible.xsd

### Darwin Core Archives (DwC-A)

#### GBIF Darwin Core Archive references

GBIF Resource for [Darwin Core Archives](http://www.gbif.org/search/node/Darwin%20Core%20Archive)

#### Darwin Core Archive Reader (Java)

See https://github.com/gbif/dwca-reader/ for more details.

#### Darwin Core Archive Reader (Python)

* Code: https://github.com/BelgianBiodiversityPlatform/python-dwca-reader
* Documentation: http://python-dwca-reader.readthedocs.org/en/latest/

#### Darwin Core Archive Validator

The validator was written by GBIF to test Darwin Core Archives as specified in the [Darwin Core Text Guide](http://rs.tdwg.org/dwc/terms/guides/text/index.htm). Due to the simplicity of the archives GBIF encourages publishers to create them using simple custom scripts. Therefore the need arises to provide a testing framework for developers to make sure GBIF and others can read the information as expected.

The validator uses the [official XML schema](http://rs.tdwg.org/dwc/text/tdwg_dwc_text.xsd) to validate the meta.xml descriptor, but additionally it validates the content against the known extensions and terms registered within the GBIF network for sharing biodiversity data. GBIF runs a production and a development registry that keeps track of extensions, both of which are used by this validator.

* online validator service at GBIF: http://tools.gbif.org/dwca-validator/
* source code: https://github.com/gbif/dwca-validator

#### Darwin Core Archive Assistant

See http://code.google.com/p/gbif-meta-maker/

Online service at http://tools.gbif.org/dwca-assistant 

The Darwin Core Archive Assistant is a web application that presents a simple interface for describing the data elements a data publisher wishes to serve to the GBIF network as basic text files and composes the appropriate XML descriptor file as defined in the Darwin Core Text Guidelines to accompany them. It communicates with the GBIF registry to provide an up-to-date listing of all relevant Darwin Core terms and available extensions and presents these in a simple checklist format.

#### GBIF Integrated Publishing Toolkit

The GBIF Integrated Publishing Toolkit (IPT) is a freely available open source web application that makes it easy to produce, share, and publish biodiversity-related information using Darwin Core Archives. 

* GBIF IPT home: http://www.gbif.org/ipt
* Online demo installation: http://ipt.gbif.org 
* Source code: http://code.google.com/p/gbif-providertoolkit/

#### dwca2sql

Darwin Core to SQL (dwca2sql) is a lightweight tool to ease the importation of Darwin Core archives into a relational database. It translates the structure and content of a Darwin Core Archive file into CREATE TABLE and/or INSERT INTO SQL statements, packaged as an .sql file, which you can then import in your database.

* Source code: https://github.com/Canadensys/dwca2sql
