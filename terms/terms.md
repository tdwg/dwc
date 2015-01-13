## Darwin Core terms

These pages provide a list of all of the current terms of the Darwin core. The terms are organized by categories (nodes) in the index. The categories correspond to Darwin Core terms that are classes (terms that have other terms to describe them). The terms that describe a given class (the class properties) appear within the list inside the node for the Class. The links provided by term names open to pages with further discussions about those terms.

## Record level terms

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#dcindex>

### dcterms:language

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#language>

As of 2012-04-11, the Dublin Core metadata Initiative recommends the use of a controlled vocabulary such as RFC 4646. For Darwin Core, the latest RFC for ISO 639-1 is the recommended version (RFC 5646 as of 2012-04-11). 

Further documentation on the Internet Engineering Task Force (IETF) language codes can be found at <http://en.wikipedia.org/wiki/IETF_language_tag>.

A list of language codes can be found at <http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes>.

### basisOfRecord

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#basisOfRecord>

The `basisOfRecord` is meant to express the category of the source of information in a record. It is more specific than the `dcterms:type` term, which expresses the Dublin Core resource type (`PhysicalObject`, `Event`, `StillImage`, `MovingImage`, `Sound`, etc.) of a record. The values listed here are string literal versions of the formal Darwin Core Type Vocabulary (<http://rs.tdwg.org/dwc/terms/type-vocabulary/index.htm>) that can be represented by URIs, which should be used when appropriate, such as in RDF. For example, use 

```xml
<dwc:basisOfRecord rdf:resource="http://rs.tdwg.org/dwc/dwctype/PreservedSpecimen"/>
```

rather than 

```xml
<dwc:basisOfRecord>PreservedSpecimen</dwc:basisOfRecord>
```

(where `xmlns:dwc="http://rs.tdwg.org/dwc/terms/"`).

The recommended `basisOfRecord` controlled vocabulary includes:

Term | Definition
--- | ---
Occurrence | A resource describing an instance of the Occurrence class.
Event | A non-persistent, time-based occurrence. For Darwin Core, a resource describing an instance of the Event class.
Location | A resource describing an instance of the Location class.
Taxon | A resource describing an instance of the Taxon class.
PreservedSpecimen | A resource describing a preserved specimen.
FossilSpecimen | A resource describing a fossilized specimen.
LivingSpecimen | A resource describing a living specimen.
HumanObservation | A resource describing an observation made by one or more people.
MachineObservation | A resource describing an observation made by a machine.
MaterialSample | A resource describing a material sample.
NomenclaturalChecklist | A resource describing a nomenclatural checklist.

See also the [Type Vocabulary Terms](DwCTypeVocabulary) page for further discussion and elaborated definitions of the Darwin Core Type Vocabulary terms.

### dynamicProperties

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#dynamicProperties>

JSON is a natural fit for the structured content of the `dynamicProperties` field. Following is an example of how one might encode standard mammal measurements using JSON:

```json 
{ 
	"totalLengthInMM":"150",
	"tailLengthInMM":"40",
	"hindFootLengthInMM":"12",
	"earLengthInMM":"5", 
	"weightInGrams":"120"
}
```

## Occurrence terms

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#Occurrence>

### occurrenceID

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#occurrenceID>

The `occurrenceID` is supposed to (globally and persistently) uniquely identify an object or act establishing an Occurrence, whether it is a specimen-based occurrence, a one-time observation of a species at a location, or one of many
occurrences of an individual who is being tracked, monitored, or
recaptured.

### catalogNumber

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#catalogNumber>

`catalogNumber` is an unfortunate name for this term because it suggests a
catalog, which suggests a specimen. The definition tries to ameliorate
the potential bias by saying that it is a number to identify an
occurrence record within a data set or collection. So, it could be a
specimen catalog number or it could be a unique identifier for a
record within an observation or animal movement data set.

### recordedBy

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#recordedBy>

For observations this is the equivalent of the observer or observers.

For specimens this is the equivalent of the name of a collector, or list of names of collectors. If there is more than one person (or any other collecting agent) associated with the specimen, the one whose recordNumber (see below) is recorded should appear first in the list. The names in the list should be separated by a character that unambiguously distinguishes them from each other, for example, a semi-colon `;`.

### recordNumber

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#recordNumber>

For specimens this is the equivalent of a collector's number - the identifier given by the collector to a specimen or sample in the field and which is likely to have been written in associated field notes. The same idea applies to original numbers applied to any observation or sample in the field, though the terminology in a given discipline might be distinct. The recordNumber isn't the same as the `catalogNumber`, which is usually only applied once the specimen gets accessioned into a collection.

### individualID

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#individualID>

`individualID` is meant for any records that need to identify
individuals for whom there may be more than one record. Banded birds,
marine mammal photos allowing individual identification, individual
trees resampled overtime, periodic biopsies on the same individuals,
etc. could all use this term to group the records corresponding to
individuals.

### sex

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#sex>

The recommended controlled vocabulary includes:

```
unknowable
undetermined
female
male
hermaphrodite
gynandromorph
```

### lifeStage

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#lifeStage>

The recommended controlled vocabulary includes:

```
zygote
embryo
larva
juvenile
adult
sporophyte
spore
gametophyte
gamete
pupa
```

### establishmentMeans

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#establishmentMeans>

The recommended controlled vocabulary includes:

```
native
introduced
naturalised
invasive
managed
uncertain
```

### occurrenceStatus

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#occurrenceStatus>

The recommended controlled vocabulary includes:

Value | Usage
--- | ---
present[^1] | There is at least one well documented record of the taxon's presence in the area.
absent[^1] | There is evidence to document the absence of a taxon in the area.
common | The taxon has been observed frequently in the area.
irregular | The presence of the taxon varies episodically in the area.
rare | The taxon has been observed infrequently in the area.
doubtful | The taxon is presumed present in the area, but there is doubt over the evidence, including taxonomic or geographic imprecision in the records.

[^1]: Use only `present` or `absent` as the possible values for `occurrenceStatus` of particular Events. It should be considered critical to include this term with the value `absent` for Occurrence records that document that a particular Taxon was not present during an event. Other values of the vocabulary are permissible for taxon distribution records.

### associatedSequences

A semicolon delimited list of sequence identifiers with an optional prefix to indicate their origin. If the prefix is omitted it should be a well known identifier format from one of the INSDC databases (International Nucleotide Sequence Database Collaboration), see <http://www.ddbj.nig.ac.jp/sub/acc_def-e.html>

Examples would be:

```
AB425960;AB425963;DQ286547
```

For other sequence identifiers a prefix indicating the source or a full URL is desirable. The individual INSDC sequence read archives should be prefixed with the following:

 * SRA: NCBI Sequence Read Archive
 * DRA: DDBJ Sequence Read Archive
 * ERA: EMBL Sequence Read Archive

## MaterialSample terms

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#MaterialSample>

### materialSampleID

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#materialSampleID>

The `materialSampleID` is supposed to (globally) uniquely identify a material sample, not a particular digital artefact of a material sample.

## Event terms

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#Event>

### eventDate

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#eventDate>

The `eventDate` term can be used to capture specific dates at various levels of resolution as well as periods of time with distinct beginnings and endings. It is for this reason that the legacy beginning and ending dates were not retained from previous versions of Darwin Core. Note that eventDate cannot be used to capture information about events on geological time scales. To do so, use the terms in the [GeologicalContext](<https://code.google.com/p/darwincore/wiki/GeologicalContext) class.

Further explanation of the International Standards Organization standard ISO 8601 can be found at <http://en.wikipedia.org/wiki/ISO_8601>, but here are some examples:

date | ISO 8601 date
--- | ---
year only | 2010
year and month | 2010-01
year, month, and day | 2010-01-17
year, month, day, and UTC time | 2010-01-17T09:26Z
year, month, day, and local time | 2010-01-17T09:33:59-0300
interval between years | 2009/2010
interval between months | 2009-02/2010-01
interval between months | 2009-02/10
interval between days | 2009-02-12/2009-10-08
interval between times on one day | 2010-01-17T12:26Z/12:52:17Z
interval between times on different days | 1963-03-08T14:07-0600/1971-08-03T06:00-0000

It is not possible to render a month without a year, or a day without a month and year, or other vague or partial dates and times such as `spring 2010`. Dates such as these should be captured in the `verbatimEventDate`.

### eventTime

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#eventTime>

Further explanation of the International Standards Organization standard ISO 8601 can be found at <http://en.wikipedia.org/wiki/ISO_8601>.

### habitat

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#habitat>

The Environment Ontology (ENVO, <http://environmentontology.org/>) provides a granular way of referring to the environment in which an organism lives than is currently possible with the Darwin Core habitat term alone. In addition to `habitat` (<http://purl.obolibrary.org/obo/ENVO_00002036>), ENVO provides three broad classifications for environment - biome, feature, and material. For example, in describing the environment inhabited by a particular individual bird, we would describe the material as `air` (<http://purl.obolibrary.org/obo/ENVO_00002005>), the feature as `flood meadow` (<http://purl.obolibrary.org/obo/ENVO_00000154>), and the biome as `flooded grassland biome` (<http://purl.obolibrary.org/obo/ENVO_01000195>). Microbial communities may be more significantly affected by their environmental material than a bird, as the microbe more directly interacts on this scale. The advantage of integrating Darwin Core with ENVO is that it provides a mechanism for integrating environmental descriptions for a broad range of species. Further, ENVO provides distinct URIs that can be used to denote the exact material, feature, or biome in question, making the content more semantically precise. Thus, it is recommended that the value of the Darwin Core habitat property be selected from the ENVO habitat class. For publishing using Darwin Core Archives, the ENVO label for the term should be used, e.g., `brackish water habitat` while, if publishing the data in RDF, the URI <http://purl.obolibrary.org/obo/ENVO_00000570> should be used. It is also recommended that Darwin Core include three new properties (environmental material, environmental feature, and biome), the recommended vocabulary for which should be from the equivalent ENVO classes.

## GeologicalContext terms

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#GeologicalContext>

## Location terms

***Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#Location>

### Geographic terms

A good reference for place names is the Getty Thesaurus of Geographic Names (TGN), which can be found at <http://www.getty.edu/research/conducting_research/vocabularies/tgn/>.

Administrative boundary files can be obtained from the Global Administrative Areas (GADM) data set at <http://biogeo.berkeley.edu/gadm/>.

MARC records for geographic names, including URIs, can be found at <http://id.loc.gov/vocabulary/geographicAreas.html>.

GBIF maintains a list of named area standards and how to use them as a `dwc:locationID` at <http://rs.gbif.org/areas/>

#### locationID

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#locationID>

A `locationID` should identify the specific locality.

It can be used to refer to known named areas from external vocabularies such as the TDWG World Geographical Scheme for Recording Plant Distributions. GBIF maintains a list of named area standards and how to use them as a `dwc:locationID`: <http://rs.gbif.org/areas/>

#### higherGeography

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#higherGeography>

The term `higherGeography` is meant to allow the capture of information about geographic features that are not in the standard admnistrative terms (`continent`, `country`, `countryCode`, `stateProvince`, `county`, `municipality`, `waterBody`, `islandGroup`, `island`) as well as the verbatim original data for those same terms. A common use of `higherGeography`, therefore, is to share information about a protected area, where that information reside in a field in the original data rather than in the locality field. 

Example: `South America; Argentina; Patagonia; Parque Nacional Nahuel Huapi; Neuquén; Los Lagos` with accompanying values `South America` in `continent`, `Argentina` in `country`, `Neuquén` in `stateProvince`, and `Los Lagos` in `county`.

#### continent

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#continent>

Standard continents and their codes can be found at <http://en.wikipedia.org/wiki/List_of_countries_by_continent_(data_file)>.

#### countryCode

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#countryCode>

The official list of ISO 3166-1-alpha-2 country codes can be found at <http://www.iso.org/iso/english_country_names_and_code_elements>.

#### stateProvince

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#stateProvince>

The name of this term is not meant to limit its content to the names of states or provinces. The term name is a legacy from the original version of the Darwin Core. Despite the term's name, the content has always been intended to include the name of a first-level administrative subdivision of a country.

#### county

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#county>

The name of this term is not meant to limit its content to the names of counties. The term name is a legacy from the original version of the Darwin Core. Despite the term's name, the content has always been intended to include the name of a second-level administrative subdivision of a country.

#### municipality

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#municipality>

The name of this term is not meant to limit its content to names of municipalities. Instead, it is intended to include the name of a third-level administrative subdivision of a country.

### Verbatim coordinate terms

The terms beginning with `verbatim` are meant to capture the original record of the coordinates of the Location. `verbatimCoordinates` is meant to capture coordinates that have not or cannot be separated into the `verbatimLatitude` and `verbatimLongitude`. If the coordinates can be separated, they should be, since there is less chance to misinterpret the content. The `verbatimCoordinateSystem` and the `verbatimSRS` both refer to the values in `verbatimLatitude` and `verbatimLongitude`, or to the value in `verbatimCoordinates`.

#### verbatimLatitude, verbatimLongitude

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#verbatimLatitude>

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#verbatimLongitude>

These terms are meant to capture the original coordinates for the Location in their original format. If possible, these coordinates should also be translated into the combination of `decimalLatitude`, `decimalLongitude`, `geodeticDatum`, and `coordinateUncertaintyInMeters`, but only if you really know what you are doing - coordinate transformations can be challenging. Use these two verbatim fields to capture coordinates in systems such as UTM, providing the spatial reference system for them in the `verbatimSRS`. If the original spatial information is an area (for example, a grid cell or a protected area polygon), use the `footprintWKT` and the `footprintSRS` to capture the complete area information.

#### verbatimCoordinateSystem

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#verbatimCoordinateSystem>

The `verbatimCoordinateSystem` term is meant to help with the interpretation of the values given in `verbatimLatitude` and `verbatimLongitude`, or `verbatimCoordinates`.

The recommended controlled vocabulary includes:

```
decimal degrees
degrees decimal minutes
degrees minutes seconds
UTM
CRTM
```

UTM refers to Universal Transverse Mercator. CRTM refers to Costa Rica Transverse Mercator.

For verbatim coordinates given in degrees, or degrees and minutes, use `degrees minutes seconds`.

#### verbatimSRS

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#verbatimSRS>

This term refers only to the values given in `verbatimLatitude` and `verbatimLongitude`, or `verbatimCoordinates`, but the recommended best practice is the same as for `geodeticDatum`, below.

### Georeference terms

Further detailed explanations of the terms associated with georeferences (spatial descriptions of place using points, circles, lines, polygons, etc.) can be found in the Guide to Best Practices for Georeferencing <http://www.gbif.org/prog/digit/Georeferencing>.

#### decimalLatitude, decimalLongitude

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#decimalLatitude>

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#decimalLongitude>

`decimalLatitude` and `decimalLongitude` are always in decimal degrees. The Spatial Reference System for these coordinates must be given in the `geodeticDatum` term. Other types of original coordinates, such as UTM, should be given in one or both of the following combinations:

```
verbatimLatitude, verbatimLongitude, verbatimSRS
```

or

```
footprintWKT, footprintSRS
```

#### geodeticDatum

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#geodeticDatum>

Ideally one should use a standard European Petroleum Survey Group (EPSG) code to a Spatial Reference System as a value for this term. The recommended controlled vocabulary is to use a value consisting of the string `EPSG:` followed by a valid EPSG code corresponding to the spatial reference system used for the geographic coordinates in the terms `decimalLatitude` and `decimalLongitude`. 

A good resource for determining the EPSG code from the Datum name can be found at <http://spatialreference.org/>.

Some common EPSG codes and the Datums they use can be found in the following table:

EPSG code | Datum
--- | ---
EPSG:4326 | WGS84
EPSG:4269 | NAD83
EPSG:4267 | NAD27

If you don't know the details of the SRS, then it is permissible to provide the name or code of the geodetic datum for the `decimalLatitude` and `decimalLongitude` coordinates. Sometimes this information is not on the original source (such as a map), while an ellipsoid name is given. In this case, provide the name of the ellipsoid. If the spatial reference system, datum, or ellipsoid are not known, use the value `unknown` for this term.

A good reference for datum and ellipsoid names is <http://www.colorado.edu/geography/gcraft/notes/datum/edlist.html>

#### georeferenceProtocol

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#georeferenceProtocol>

It is recommended to give a citation (publication or URL) to the resource describing the methods used to determine the georeference (coordinates AND uncertainty, or footprint). Good resources on methods include:

1. Chapman, A.D. and J. Wieczorek (eds). 2006. Guide to Best Practices for Georeferencing. Copenhagen: Global Biodiversity Information Facility. Accessible from <http://www.gbif.org/orc/?doc_id=1288>
2. MaNIS/HerpNet/ORNIS Georeferencing Guidelines.(HTML) Accessible from <http://manisnet.org/GeorefGuide.html>
3. Georeferencing Quick Reference Guide. (PDF) Accessible from <http://manisnet.org/GeoreferencingQuickReferenceGuide.pdf>

#### georeferenceVerificationStatus

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#georeferenceVerificationStatus>

The recommended controlled vocabulary includes:

```
unverified
verified by data custodian
verified by contributor
```

The data contributor is the agent who participated in the Event that produced the Location. Verification by the contributor means that the georeference as recorded is correct and as specific as it can be based on the contributor's personal knowledge of the event and location.

The data custodian is the agent responsible for the management of the primary source of the record. Verification by the data custodian means that the georeference as recorded is correct and as specific as it can be based on the all of the resources at the disposal of the agent (field notes, maps, labels) in the absence of verification by the contributor.

All other georeferences, those produced without consulting all existing primary sources, should be `unverified`.

#### footprintSRS

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#footprintSRS>

The specification for constructing Spatial Reference Systems in WKT can be found at <http://geoapi.sourceforge.net/2.0/javadoc/org/opengis/referencing/doc-files/WKT.html>. Following are some example WKT renditions of common Spatial Reference Systems:

WGS84:

```
GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137,298.257223563]],PRIMEM["Greenwich",0],UNIT["Degree",0.0174532925199433]]
```

NAD27:

```
GEOGCS["NAD27",DATUM["NORTH_AMERICAN_DATUM_1927",SPHEROID["CLARKE 1866",6378206.4,294.9786982138982]],PRIMEM["Greenwich",0],UNIT["Degree",0.01745329251994283]]
```

## Identification terms

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#Identification>

### dateIdentified

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#dateIdentified>

Further explanation of the International Standards Organization standard ISO 8601 can be found at <http://en.wikipedia.org/wiki/ISO_8601>.

### typeStatus

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#typeStatus>

The recommended controlled vocabulary for the status portion of the content of the `typeStatus` term includes:

```
holotype
paratype
neotype
syntype
lectotype
paralectotype
hapantotype
```

## Taxon Terms

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#Taxon>

### higherClassification

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#higherClassification>

The typical use for this term is to capture the rank-ordered list of names in a classification for a given `scientificName`. Thus, if `scientificName` with the rank `species` is given, then the `higherClassification` would normally contain the list of names in the classification from kingdom to genus, inclusive.

**Example**:

scientificName: `Ctenomys sociabilis` (rank: `species`)

higherClassification: 

```
Animalia;Chordata;Vertebrata;Mammalia;Theria;Eutheria;Rodentia;Hystricognatha;Hystricognathi;Ctenomyidae;Ctenomyini;Ctenomys
```

### infraspecificEpithet

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#infraspecificEpithet>

The `infraspecificEpithet` should only be the terminal name part - the part of the name with the lowest or most specific rank. Thus, given the `scientificName` `Carex viridula subsp. brachyrrhyncha var. elatior`, the atomized Taxon terms for this name would be:

genus: `Carex`

specificEpithet: `viridula`

infraspecificEpithet: `elatior`

taxonRank: `varietas`

scientificNameAuthorship: `(Schltdl.) Crins`

Ideally the scientific name would include the authorship and have three parts to comply with the nomenclatural code (ICBN in this case):

```
Carex viridula var. elatior (Schltdl.) Crins
```

### nameAccordingToID, nameAccordingTo

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#nameAccordingToID>

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#nameAccordingTo>

If no `nameAccordingTo` or `nameAccordingToID` is given explicitly given for a Taxon record, the "nominal concept" as defined by TCS should be assumed. In most cases, the `nameAccordingTo` will refer to a publication, but it may also refer to other sources, such as single-copy documents and other documented taxon concept definitions asserted by an individual, institution, or team of individuals.

### nomenclaturalCode

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#nomenclaturalCode>

The GBIF recommended controlled value vocabulary can be found at <http://rs.gbif.org/vocabulary/gbif/nomenclatural_code.xml> and include the following:

Value | Comment |
--- | ---
BioCode | 
ICBN | International Code of Botanical Nomenclature
ICNB | International Code of Nomenclature of Bacteria
ICNCP | International Code of Nomenclature for Cultivated Plants
ICZN | International Code of Zoological Nomenclature
ICVCN | International Code of Virus Classifications and Nomenclature

Combinations of codes for ambiregnal names should be made by concatenating the codes, separated by a semi-colon (`;`). Example: `ICZN; ICBN`

See also the discussion at <http://vocabularies.gbif.org/vocabularies/nomeclaturalCode>.

### originalNameUsageID, originalNameUsage

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#originalNameUsageID>

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#originalNameUsage>

* For an original name usage record, the `nameAccordingTo` value should match the `namePublishedIn` value.
* A description of basionym and basonym can be found at <http://en.wikipedia.org/wiki/Basionym>.
* Good examples for synonyms, basionyms, replaced names, etc. can be found in <http://www.peabody.yale.edu/other/PROTEM/TAXSIG/taxonomy_synonyms_examples.pdf>.

### scientificName

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#scientificName>

In an Occurrence record, the `scientificName` (and associated taxon fields) should be populated at the source based on the identification (determination) currently accepted by the institution maintaining the original record (usually, but not necessarily, the latest determination).

### taxonomicStatus

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#taxonomicStatus>

The GBIF recommended controlled value vocabulary can be found at <http://rs.gbif.org/vocabulary/gbif/taxonomic_status.xml> and includes the following:

Value | Comment
--- | ---
accepted | botanical
valid | zoological
synonym | unknown if homo- or heterotypic
homotypic synonym | objective
heterotypic synonym | subjective
proParteSynonym |s ome series members assigned to new type
misapplied | 

See also the discussion at <http://vocabularies.gbif.org/vocabularies/taxonomic_status>.

### taxonRank

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#taxonRank>

The GBIF recommended controlled value vocabulary can be found at <http://rs.gbif.org/vocabulary/gbif/rank.xml> and includes the following:

English | Latin
--- | ---
kingdom | regnum
subkingdom | subregnum
division or phylum | divisio or phylum
subdivision or subphylum | subdivisio or subphylum
class | classis
subclass | subclassis
order | ordo
suborder | subordo
family | familia
subfamily | subfamilia
tribe | tribus
subtribe | subtribus
genus | genus
subgenus | subgenus
section | sectio
subsection | subsectio
series | series
subseries | subseries
species | species
subspecies | subspecies
variety | varietas
subvariety | subvarietas
form | forma
subform | subforma

See also the discussion at <http://vocabularies.gbif.org/vocabularies/taxonomic_status>.

## ResourceRelationship terms

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#ResourceRelationship>

### relationshipEstablishedDate

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#relationshipEstablishedDate>

Further explanation of the International Standards Organization standard ISO 8601 can be found at <http://en.wikipedia.org/wiki/ISO_8601>.

## MeasurementOrFact terms

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#MeasurementOrFact>

### measurementUnit

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#measurementUnit>

An explanation of the International System of Units can be found at <http://physics.nist.gov/cuu/Units/>.

### measurementDeterminedDate

**Quick reference**: <http://rs.tdwg.org/dwc/terms/index.htm#measurementDeterminedDate>

Further explanation of the International Standards Organization standard ISO 8601 can be found at <http://en.wikipedia.org/wiki/ISO_8601>.

## Type vocabulary terms

The Type Vocabulary used in Darwin Core consists of two parts, vocabulary to describe the record in terms consistent with the Dublin Core Type vocabulary (using the `dcterms:type` term) and vocabulary to describe the specific biodiversity-related content for a record (using the `basisOfRecord` term).

### dcterms:type

The list of valid values for the `dcterms:type` include:

```
PhysicalObject
StillImage
MovingImage
Sound
Event
```

`dcterms` designates the namespace for the Dublin Core terms, which is <http://purl.org/dc/terms>.

### basisOfRecord

The list of valid values for the `basisOfRecord` include:

```
Occurrence
MaterialSample
Event
Location
Taxon
PreservedSpecimen
FossilSpecimen
LivingSpecimen
HumanObservation
MachineObservation
NomenclaturalChecklist
``

#### PreservedSpecimen

**Quick reference**: <http://rs.tdwg.org/dwc/terms/type-vocabulary/index.htm#PreservedSpecimen>

There is (or was at one time) a preserved physical part of the organism (however small) that could be re-evaluated. The organism is preserved (dead) but was living within historic times. 

#### MaterialSample

**Quick reference**: <http://rs.tdwg.org/dwc/terms/type-vocabulary/index.htm#MaterialSample>

There is (or was at one time) physical material collected using a sampling or subsampling method. 

#### FossilSpecimen

**Quick reference**: <http://rs.tdwg.org/dwc/terms/type-vocabulary/index.htm#FossilSpecimen>

There is (or was at one time) a preserved physical part of the organism that could be re-evaluated. The organism was living within prehistoric times. 

#### LivingSpecimen

**Quick reference**: <http://rs.tdwg.org/dwc/terms/type-vocabulary/index.htm#LivingSpecimen>

There is a specimen available. The specimen was living (growing/metabolizing, not a dormant part of a PreservedSpecimen), at least when the resource was created.

#### HumanObservation

**Quick reference**: <http://rs.tdwg.org/dwc/terms/type-vocabulary/index.htm#HumanObservation>

The occurrence was documented without collected physical or digital evidence that could be re-evaluated.

#### MachineObservation

**Quick reference**: <http://rs.tdwg.org/dwc/terms/type-vocabulary/index.htm#MachineObservation>

The occurrence was documented with machine-recorded evidence that could be re-evaluated, such as photographs (camera-trap or hand-held camera), video, or sound recordings.
