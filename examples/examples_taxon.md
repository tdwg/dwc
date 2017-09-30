## Examples - Taxa

This page shows examples of how to populate Darwin Core terms for Taxon records.

### Species Checklists

#### Taxonomic treatment, normalized

Taxon records comprising a single accepted subspecies extracted from <a href="http://www.bucknell.edu/msw3">Mammal Species of the World, 3rd Edition</a> with its normalised classification hierarchy and synonyms. See the denormalized example below.

```
taxonID = 1
scientificName = Mammalia
taxonRank = class
taxonomicStatus = valid
nomenclaturalCode = ICZN

taxonID = 10400001
parentNameUsageID = 1
scientificName = Didelphimorphia Gill, 1872
scientificNameAuthorship = Gill, 1872
taxonRank = order
taxonomicStatus = valid
nomenclaturalCode = ICZN
taxonRemarks = Traditionally included in Marsupialia; included in Ameridelphia (see Aplin and Archer, 1987; Marshall et al., 1990; and Szalay, 1982); but not Microbiotheriidae (Marshall et al., 1990; contra Reig et al., 1987).
references = http://www.bucknell.edu/msw3/browse.asp?id=10400001

taxonID = 10400002
parentNameUsageID = 10400001
scientificName = Didelphidae Gray, 1821
scientificNameAuthorship = Gray, 1821
taxonRank = family
taxonomicStatus = valid
nomenclaturalCode = ICZN
namePublishedIn = London Med. Repos., 15: 308.
taxonRemarks = Placed in the order Polyprotodontia by Kirsch (1977); also see Aplin and Archer (1987). Does not include Dromiciops; see Kirsch and Calaby (1977). Includes Caluromyidae, Glironiidae, and Marmosidae sensu Hershkovitz (1992a).
references = http://www.bucknell.edu/msw3/browse.asp?id=10400002

taxonID = 10400030
parentNameUsageID = 10400002
scientificName = Didelphinae Gray, 1821
scientificNameAuthorship = Gray, 1821
taxonRank = subfamily
taxonomicStatus = valid
nomenclaturalCode = ICZN
namePublishedIn = London Med. Repos., 15: 308.
taxonRemarks = Hershkovitz (1992a) restricted the Didelphinae to the genera Chironectes, Didelphis, Philander, and Lutreolina. Hershkovitz (1997) further restricted the Didelphinae by establishing Chironectinae and Lutreolininae for Chironectes and Lutreolina, respectively.
references = http://www.bucknell.edu/msw3/browse.asp?id=10400030

taxonID = 10400152
parentNameUsageID = 10400030
scientificName = Philander Brisson, 1762
scientificNameAuthorship = Brisson, 1762
taxonRank = genus
taxonomicStatus = valid
typeStatus = Type Species: Didelphis opossum Linnaeus, 1758, by plenary action (Opinion 1894 of the International Commission on Zoological Nomenclature, 1998).
nomenclaturalCode = ICZN
namePublishedIn = Regnum animale: 13.
taxonRemarks = Pine (1973) used Metachirops for this genus, as did Hall (1981), Husson (1978), and Corbet and Hill (1980; but not 1991 when they used Philander).
references = http://www.bucknell.edu/msw3/browse.asp?id=10400152

taxonID = 10400156
parentNameUsageID = 10400152
scientificName = Philander opossum Linnaeus, 1758
scientificNameAuthorship = Linnaeus, 1758
taxonRank = species
taxonomicStatus = valid
nomenclaturalCode = ICZN
namePublishedIn = Syst. Nat., 10th ed., 1: 55.
taxonRemarks = Corbet and Hill (1980), Hall (1981), Husson (1978), and Pine (1973) used Metachirops opossum for this species. Reviewed by Castro-Arellano et al. (2000, Mammalian Species, 638). The name D. larvata Jentink, 1888, is a nomen nudum. Didelphis opossum Linnaeus, 1758, is the type species for Holothylax Cabrera, 1919.
vernacularName = Gray Four-eyed Opossum
references = http://www.bucknell.edu/msw3/browse.asp?id=10400156

taxonID = 10400158
parentNameUsageID = 10400156
scientificName = Philander opossum canus Osgood, 1913
scientificNameAuthorship = Osgood, 1913
taxonRank = subspecies
taxonomicStatus = valid
nomenclaturalCode = ICZN
references = http://www.bucknell.edu/msw3/browse.asp?id=10400158

acceptedNameUsageID=10400158
scientificName=Philander opossum crucialis (Thomas, 1923)
taxonRank=subspecies
taxonomicStatus=synonym
nomenclaturalCode=ICZN
```

##### Taxonomic treatment, denormalised

Same information as in the normalized version above, but given in a denormalised form with implicit higher taxa.

```
taxonID = 10400156
scientificName = Philander opossum Linnaeus, 1758
scientificNameAuthorship = Linnaeus, 1758
taxonRank = species
taxonomicStatus = valid
nomenclaturalCode = ICZN
namePublishedIn = Syst. Nat., 10th ed., 1: 55.
taxonRemarks = Corbet and Hill (1980), Hall (1981), Husson (1978), and Pine (1973) used Metachirops opossum for this species. Reviewed by Castro-Arellano et al. (2000, Mammalian Species, 638). The name D. larvata Jentink, 1888, is a nomen nudum. Didelphis opossum Linnaeus, 1758, is the type species for Holothylax Cabrera, 1919.
vernacularName = Gray Four-eyed Opossum
kingdom = Animalia
class = Mammalia
order = Didelphimorphia
family = Didelphidae
genus = Philander

taxonID = 10400158
scientificName = Philander opossum canus Osgood, 1913
scientificNameAuthorship = Osgood, 1913
taxonRank = subspecies
taxonomicStatus = valid
nomenclaturalCode = ICZN
kingdom = Animalia
class = Mammalia
order = Didelphimorphia
family = Didelphidae
genus = Philander

scientificName = Philander opossum crucialis (Thomas, 1923)
taxonRank = subspecies
taxonomicStatus = synonym
acceptedNameUsage = Philander opossum canus
nomenclaturalCode = ICZN
```

##### Nomenclatural name records

##### Invasive species checklist

##### Redlist
