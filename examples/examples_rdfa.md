## Examples - RDFa

### Tagging content in HTML with Darwin Core terms

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
