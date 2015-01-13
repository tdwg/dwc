## Examples

This page contains examples of how to populate Darwin Core terms for various use cases.

### Occurrence

#### Specimen

##### Preserved Specimen

Model: Organism collected in the wild and put into a collection.

Model: Single whole native organism collected in the wild and put into a collection. 

```
dcterms:type=PhysicalObject
dwc:basisOfRecord=PreservedSpecimen
dcterms:modified=2009-02-12T12:43:31
dwc:institutionCode=MVZ
dwc:collectionCode=Mammals
dwc:catalogNumber=14523
dwc:collectionID=urn:lsid:biocol.org:col:34904
dwc:occurrenceID=urn:catalog:MVZ:Mammals:14523
dwc:establishmentMeans=wild
dwc:country=Argentina
dwc:countryCode=AR
dwc:stateProvince=Neuquén
dwc:locality=25 km al NNE de Bariloche por Ruta 40 (=237)
```

Model: Whole organism recorded (any combination of sound, image, video, field notes) in the wild and entered in a collection database. 

Model: Whole organism captured, recorded (sound, image, video) along with measurements, released in the wild and entered in a collection database.

Model: Whole organism collected from captivity and put into a collection.

Model: Whole organism collected from the wild, but escaped from captivity, and put into a collection.

Model: Parasite of organism, parasite cataloged with specimen of organism.

Model: Parasite of organism, parasite cataloged separate from specimen (in the same or in a different collection).

Model: Record of organism, where specimen is now in another collection.

Model: Repeated instances of material sample for the same organism over time, then organism put into a collection.

Model: Repeated instances of material sample for the same captive organism over time, then organism put into a collection.

Model: Repeated instances of the same organism (with media, literature) captured over time.

Model: Multiple organisms collected in the wild together, put into a collection and cataloged as a lot.

##### Fossil specimen

##### Living specimen

##### Material sample

Model: Organism sampled (e.g., biopsy) in the wild.

Model: Material sample from an organism in the wild and sample put into a collection (blood sample, biopsy).

Model: Material sample from an organism in captivity and sample put into a collection (blood sample, biopsy)

Model: Repeated instances of material sample for the same organism over time.

Model: Repeated instances of material sample from the same captive organism over time.

#### Observation

##### Human Observation

Model: Organism observed in the wild and written in field notes.

Model: Pair of living organisms observed in the wild and documented in field notes. 

```
dwc:basisOfRecord>HumanObservation
dcterms:type=Event
dwc:occurrenceID=urn:catalog:AUDCLO:EBIRD:OBS64515288
dcterms:modified=2009-02-17T07:33:04Z
dwc:institutionCode=AUDCLO
dwc:collectionCode>EBIRD
dwc:individualCount>2
dwc:eventID>http://guid.mvz.org/events/2006/11/26/17
dwc:samplingProtocol>area count
dwc:eventDate>2006-11-26
dwc:locationID>http://guid.mvz.org/sites/arg/127
dwc:country>Argentina
dwc:countryCode>AR
dwc:stateProvince>Neuquén
dwc:locality>Valle Limay, Estancia Rincon Grande, 48 ha area with centroid at this point
dwc:decimalLatitude>-40.97467
dwc:decimalLongitude>-71.0734
dwc:geodeticDatum>WGS84
dwc:coordinateUncertaintyInMeters>200
dwc:scientificName>Anthus hellmayri
dwc:class>Aves
dwc:genus>Anthus
dwc:specificEpithet>hellmayri
```

Model: Organism photographed in the wild.

Model: Organism measured in a study and published in journal article.

Model: Taxon said to occur in a protected area in 2009.

##### Machine Observation

### Species Checklists

#### Taxonomic treatment, normalised

A single accepted subspecies extracted from the http://www.bucknell.edu/msw3 mammal species of the world, 3rd edition] with its normalised classification hierarchy and synonyms. See also the denormalised example below.

```
dwc:taxonID=1
dwc:scientificName=Mammalia
dwc:taxonRank=class
dwc:taxonomicStatus=valid
dwc:nomenclaturalCode=ICZN

dwc:taxonID=10400001
dwc:parentNameUsageID=1
dwc:scientificName=Didelphimorphia Gill, 1872
dwc:scientificNameAuthorship=Gill, 1872
dwc:taxonRank=order
dwc:taxonomicStatus=valid
dwc:nomenclaturalCode=ICZN
dwc:taxonRemarks=Traditionally included in Marsupialia; included in Ameridelphia (see Aplin and Archer, 1987; Marshall et al., 1990; and Szalay, 1982); but not Microbiotheriidae (Marshall et al., 1990; contra Reig et al., 1987).
dc:source=http://www.bucknell.edu/msw3/browse.asp?id=10400001

dwc:taxonID=10400002
dwc:parentNameUsageID=10400001
dwc:scientificName=Didelphidae Gray, 1821
dwc:scientificNameAuthorship=Gray, 1821
dwc:taxonRank=family
dwc:taxonomicStatus=valid
dwc:nomenclaturalCode=ICZN
dwc:namePublishedIn=London Med. Repos., 15: 308.
dwc:taxonRemarks=Placed in the order Polyprotodontia by Kirsch (1977); also see Aplin and Archer (1987). Does not include Dromiciops; see Kirsch and Calaby (1977). Includes Caluromyidae, Glironiidae, and Marmosidae sensu Hershkovitz (1992a).
dc:source=http://www.bucknell.edu/msw3/browse.asp?id=10400002

dwc:taxonID=10400030
dwc:parentNameUsageID=10400002
dwc:scientificName=Didelphinae Gray, 1821
dwc:scientificNameAuthorship=Gray, 1821
dwc:taxonRank=subfamily
dwc:taxonomicStatus=valid
dwc:nomenclaturalCode=ICZN
dwc:namePublishedIn=London Med. Repos., 15: 308.
dwc:taxonRemarks=Hershkovitz (1992a) restricted the Didelphinae to the genera Chironectes, Didelphis, Philander, and Lutreolina. Hershkovitz (1997) further restricted the Didelphinae by establishing Chironectinae and Lutreolininae for Chironectes and Lutreolina, respectively.
dc:source=http://www.bucknell.edu/msw3/browse.asp?id=10400030

dwc:taxonID=10400152
dwc:parentNameUsageID=10400030
dwc:scientificName=Philander Brisson, 1762
dwc:scientificNameAuthorship=Brisson, 1762
dwc:taxonRank=genus
dwc:taxonomicStatus=valid
dwc:typeStatus=Type Species: Didelphis opossum Linnaeus, 1758, by plenary action (Opinion 1894 of the International Commission on Zoological Nomenclature, 1998).
dwc:nomenclaturalCode=ICZN
dwc:namePublishedIn=Regnum animale: 13.
dwc:taxonRemarks=Pine (1973) used Metachirops for this genus, as did Hall (1981), Husson (1978), and Corbet and Hill (1980; but not 1991 when they used Philander).
dc:source=http://www.bucknell.edu/msw3/browse.asp?id=10400152

dwc:taxonID=10400156
dwc:parentNameUsageID=10400152
dwc:scientificName=Philander opossum Linnaeus, 1758
dwc:scientificNameAuthorship=Linnaeus, 1758
dwc:taxonRank=species
dwc:taxonomicStatus=valid
dwc:nomenclaturalCode=ICZN
dwc:namePublishedIn=Syst. Nat., 10th ed., 1: 55.
dwc:taxonRemarks=Corbet and Hill (1980), Hall (1981), Husson (1978), and Pine (1973) used Metachirops opossum for this species. Reviewed by Castro-Arellano et al. (2000, Mammalian Species, 638). The name D. larvata Jentink, 1888, is a nomen nudum. Didelphis opossum Linnaeus, 1758, is the type species for Holothylax Cabrera, 1919.
dwc:vernacularName=Gray Four-eyed Opossum
dc:source=http://www.bucknell.edu/msw3/browse.asp?id=10400156

dwc:taxonID=10400158
dwc:parentNameUsageID=10400156
dwc:scientificName=Philander opossum canus Osgood, 1913
dwc:scientificNameAuthorship=Osgood, 1913
dwc:taxonRank=subspecies
dwc:taxonomicStatus=valid
dwc:nomenclaturalCode=ICZN
dc:source=http://www.bucknell.edu/msw3/browse.asp?id=10400158

dwc:acceptedNameUsageID=10400158
dwc:scientificName=Philander opossum crucialis (Thomas, 1923)
dwc:taxonRank=subspecies
dwc:taxonomicStatus=synonym
dwc:nomenclaturalCode=ICZN
```

##### Taxonomic treatment, denormalised

Same information as the normalised version above, but given in a denormalised form with implicit higher taxa

```
dwc:taxonID=10400156
dwc:scientificName=Philander opossum Linnaeus, 1758
dwc:scientificNameAuthorship=Linnaeus, 1758
dwc:taxonRank=species
dwc:taxonomicStatus=valid
dwc:nomenclaturalCode=ICZN
dwc:namePublishedIn=Syst. Nat., 10th ed., 1: 55.
dwc:taxonRemarks=Corbet and Hill (1980), Hall (1981), Husson (1978), and Pine (1973) used Metachirops opossum for this species. Reviewed by Castro-Arellano et al. (2000, Mammalian Species, 638). The name D. larvata Jentink, 1888, is a nomen nudum. Didelphis opossum Linnaeus, 1758, is the type species for Holothylax Cabrera, 1919.
dwc:vernacularName=Gray Four-eyed Opossum
dwc:kingdom=Animalia
dwc:class=Mammalia
dwc:order=Didelphimorphia
dwc:family=Didelphidae
dwc:genus=Philander

dwc:taxonID=10400158
dwc:scientificName=Philander opossum canus Osgood, 1913
dwc:scientificNameAuthorship=Osgood, 1913
dwc:taxonRank=subspecies
dwc:taxonomicStatus=valid
dwc:nomenclaturalCode=ICZN
dwc:kingdom=Animalia
dwc:class=Mammalia
dwc:order=Didelphimorphia
dwc:family=Didelphidae
dwc:genus=Philander

dwc:scientificName=Philander opossum crucialis (Thomas, 1923)
dwc:taxonRank=subspecies
dwc:taxonomicStatus=synonym
dwc:acceptedNameUsage=Philander opossum canus
dwc:nomenclaturalCode=ICZN
```

##### Nomenclatural name records

##### Invasive species checklist

##### Redlist

## RDFa examples

### Tagging content in HTML with DWC terms

[RDFa](http://www.w3.org/TR/rdfa-syntax/) provides a mechanism for expressing 
semantic markup within HTML documents using RDF constructs.

Resources:

* An [RDFa parser](http://www.siatec.net/rdfaparser/) is available to convert RDFa to RDF. Note that this parser seems to drop the rdf typeof property.
* A [simple standalone RDFa to RDF converter](http://code.google.com/p/darwincore/source/browse/trunk/examples/rdfa_content/rdfa2rdf.py) in python.
* The [W3C RDF validator](http://www.w3.org/RDF/Validator/) provides a convenient tool for quickly visualizing an RDF structure.

#### Example 1: Name without context

Indicating that a string within a document is semantically equivalent
to a scientific name as defined in the Darwin Core. 

There is no additional information about the scientific name, only an indication that the character string represents a scientific name, and so parsers that are able to interpret RDFa are able to identify that value in the document, though no additional context is explicitly stated.

* [Source](http://darwincore.googlecode.com/svn/trunk/examples/rdfa_content/sciname_1.html)
* [RDF](http://www.siatec.net/rdfaparser/index.php?xml=http%3A%2F%2Fdarwincore.googlecode.com%2Fsvn%2Ftrunk%2Fexamples%2Frdfa_content%2Fsciname_1.html)
* [RDF Visualized](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fwww.siatec.net%2Frdfaparser%2Findex.php%3Fxml%3Dhttp%253A%252F%252Fdarwincore.googlecode.com%252Fsvn%252Ftrunk%252Fexamples%252Frdfa_content%252Fsciname_1.html&PARSE=Parse+URI%3A+&TRIPLES_AND_GRAPH=PRINT_BOTH&FORMAT=PNG_EMBED)

```HTML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:dc="http://purl.org/dc/terms/"
      xmlns:dwc="http://rs.tdwg.org/dwc/terms/">
<head >
<title>Scientific Name in RDFa</title>
  <meta about='taxonname_1.html' property='dc:creator' content="Dave Vieglais"/>
  <meta about='taxonname_1.html' property='dc:date' content="2008-11-14T09:52:00+00:00" />
  <meta about='taxonname_1.html' property='dc:description' content="Demonstrates how to 
    tag a scientific name with RDFa markup so that a parser can recognize that a string
    value represents a scientific name." />
</head>
<body>
  <p>This example shows how to tag a scientific name with RDFa markup so that a 
  parser can recognize that the string 
<span property='dwc:scientificName' style='font-style: italic;'>Bufo marinus</span> 
as a scientific name, and the string &quot;<span property='dwc:family'>Bufonidae</span>
is a family name, but there is no statement that the B. marinus is a 
member of the family Bufonidae.</p>
</body>
</html>
```

#### Example 2: Name with simple context

This example wraps the scientific name and family within a named node, implying that the two are properties about the node rather than the whole document.  This in turn infers that the scientific name is a member of the family, although this information is only contained in the human readable descriptions of the Darwin Core terms and can not be directly inferred from the RDF.

* [Source](http://darwincore.googlecode.com/svn/trunk/examples/rdfa_content/sciname_2.html)
* [RDF](http://www.siatec.net/rdfaparser/index.php?xml=http%3A%2F%2Fdarwincore.googlecode.com%2Fsvn%2Ftrunk%2Fexamples%2Frdfa_content%2Fsciname_2.html)
* [RDF Visualized](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fwww.siatec.net%2Frdfaparser%2Findex.php%3Fxml%3Dhttp%253A%252F%252Fdarwincore.googlecode.com%252Fsvn%252Ftrunk%252Fexamples%252Frdfa_content%252Fsciname_2.html&PARSE=Parse+URI%3A+&TRIPLES_AND_GRAPH=PRINT_BOTH&FORMAT=PNG_EMBED)

```HTML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:dc="http://purl.org/dc/terms/"
      xmlns:dwc="http://rs.tdwg.org/dwc/terms/">
<head>
<title>Scientific Name in RDFa</title>
  <meta about='taxonname_2.html' property='dc:creator' content="Dave Vieglais"/>
  <meta about='taxonname_2.html' property='dc:date' content="2008-11-14T09:52:00+00:00" />
  <meta about='taxonname_2.html' property='dc:description' content="Demonstrates how to 
    tag a scientific name with RDFa markup so that a parser can recognize that a string
    value represents a scientific name." />
</head>
<body>
  <p>This example shows how to tag a scientific name with RDFa markup so that a 
  parser can recognize that the string
<span about='#name1' typeof='dwct:Record'>
<span property='dwc:scientificName' style='font-style: italic;'>Bufo marinus</span> 
as a scientific name, and the string &quot;<span property='dwc:family'>Bufonidae</span>
is a family name</span>, and since both terms form part of a Darwin Core record,
infers that Bufonidae is the family name for &quot;#name1&quote; and Bufo marinus
is the scientific name.</p>
</body>
</html>
```

### Example 3 Observation with name and location

Describes an observation in a HTML document using RDFa notation.  This minimal example expresses the location two ways- using the Darwin Core DecimalLatitude and DecimalLongitude terms and the GeoRSS point.

* [Source](http://darwincore.googlecode.com/svn/trunk/examples/rdfa_content/sciname_location.html) 
* [RDF](http://www.siatec.net/rdfaparser/index.php?xml=http%3A%2F%2Fdarwincore.googlecode.com%2Fsvn%2Ftrunk%2Fexamples%2Frdfa_content%2Fsciname_location.html RDF)
* [RDF Visualized](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fwww.siatec.net%2Frdfaparser%2Findex.php%3Fxml%3Dhttp%253A%252F%252Fdarwincore.googlecode.com%252Fsvn%252Ftrunk%252Fexamples%252Frdfa_content%252Fsciname_location.html&PARSE=Parse+URI%3A+&TRIPLES_AND_GRAPH=PRINT_BOTH&FORMAT=PNG_EMBED)

```HTML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:dc="http://purl.org/dc/terms/"
      xmlns:dwc="http://rs.tdwg.org/dwc/terms/"
      xmlns:dwct="http://rs.tdwg.org/dwc/dwctype/"
      xmlns:georss='http://www.georss.org/georss#'>
<head >
<title>Scientific Name in RDFa</title>
  <meta about='sciname_location.html' property='dc:creator' content="Dave Vieglais"/>
  <meta about='sciname_location.html' property='dc:date' content="2008-11-14T09:52:00+00:00" />
  <meta about='sciname_location.html' property='dc:description' content="Demonstrates how to
    create the equivalent of a simple observation record within a HTML document that can be
    converted to an RDF document." />
</head>
<body>
  <p>This example document contains a record with of an observation tagged with an lsid of xxx
  <span about="lsid:blah.blah" typeof="oboe:Observation">
  that includes the scientific name 
  <span property='dwc:scientificName' style='font-style: italic;'>Bufo marinus</span>,
  <span about='lsid:blah.blah' typeof="dc:Location" > 
    <span property='dwc:geodeticDatum' content='epsg:4326' />
  a geographic location of
    <span about='lsid:blah.blah' property='georss:point' content='-25.273262 152.725067' />
  longitude <span property='dwc:decimalLongitude'>152.725067</span> east, 
  latitude <span property='dwc:decimalLatitude'>-25.273262</span>, 
  </span> 
  and a time of
  <span about='lsid:blah.blah' property='dwc:eventDate' content="2008-11-10T23:32:00+00:00">
  9:32 in the morning of the 12th of November.</span>
  </span>
</p>
</body>
</html>
```
