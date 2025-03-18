# Darwin Core List of Terms

Title
: Darwin Core List of Terms

Date version issued
: 2023-09-18

Date created
: 2020-08-12

Part of TDWG Standard
: <http://www.tdwg.org/standards/450>

This version
: <http://rs.tdwg.org/dwc/doc/list/2023-09-18>

Latest version
: <http://rs.tdwg.org/dwc/doc/list/>

Previous version
: <http://rs.tdwg.org/dwc/doc/list/2023-09-13>

Abstract
: Darwin Core is a vocabulary standard for transmitting information about biodiversity. This document lists all terms in namespaces currently used in the vocabulary.

Contributors
: [John Wieczorek](https://orcid.org/0000-0003-1144-0290) ([VertNet](http://www.wikidata.org/entity/Q98382028)), [Peter Desmet](https://orcid.org/0000-0002-8442-8025) ([Instituut voor Natuur- en Bosonderzoek (INBO)](http://www.wikidata.org/entity/Q7315097)), [Steve Baskauf](https://orcid.org/0000-0003-4365-3135) ([Vanderbilt University Libraries](http://www.wikidata.org/entity/Q16849893)), [Tim Robertson](https://orcid.org/0000-0001-6215-3617) ([Global Biodiversity Information Facility](http://www.wikidata.org/entity/Q1531570)), [Markus Döring](https://orcid.org/0000-0001-7757-1889) ([Global Biodiversity Information Facility](http://www.wikidata.org/entity/Q1531570)), [Quentin Groom](https://orcid.org/0000-0002-0596-5376) ([Botanic Garden Meise](http://www.wikidata.org/entity/Q3052500)), [Stijn Van Hoey](https://orcid.org/0000-0001-6413-3185) ([Instituut voor Natuur- en Bosonderzoek (INBO)](http://www.wikidata.org/entity/Q7315097)), [David Bloom](https://orcid.org/0000-0003-1273-1807) ([VertNet](http://www.wikidata.org/entity/Q98382028)), [Paula Zermoglio](https://orcid.org/0000-0002-6056-5084) ([VertNet](http://www.wikidata.org/entity/Q98382028)), [Robert Guralnick](https://orcid.org/0000-0001-6682-1504) ([University of Florida](http://www.wikidata.org/entity/Q501758)), [John Deck](https://orcid.org/0000-0002-5905-1617) ([Genomic Biodiversity Working Group](http://www.wikidata.org/entity/Q98382041)), [Gail Kampmeier](https://orcid.org/0000-0002-5178-4170) ([Illinois Natural History Survey](http://www.wikidata.org/entity/Q5999587)), [Dave Vieglais](https://orcid.org/0000-0002-6513-4996) ([KU Natural History Museum](http://www.wikidata.org/entity/Q1111807)), [Renato De Giovanni](https://orcid.org/0000-0002-7104-7266) ([Centro de Referência em Informação Ambiental](http://www.wikidata.org/entity/Q29168927)), [Campbell Webb](https://orcid.org/0000-0003-1031-3249) ([TDWG RDF/OWL Task Group](http://www.wikidata.org/entity/Q4914768)), [Paul J. Morris](http://purl.oclc.org/net/edu.harvard.huh/guid/uuid/5e51de22-d841-4c47-b0c4-d5ad0bd03035) ([Harvard University Herbaria/Museum of Comparative Zoölogy](http://www.wikidata.org/entity/Q51926077)), [Mark Schildhauer](https://orcid.org/0000-0003-0632-7576) ([National Center for Ecological Analysis and Synthesis](http://www.wikidata.org/entity/Q6971323)), [Sophia Ratcliffe](https://orcid.org/0000-0001-9284-7900) ([National Biodiversity Network Trust](http://www.wikidata.org/entity/Q6970988)), [Teresa J. Mayfield-Meyer](https://orcid.org/0000-0002-1970-7044) ([The University of New Mexico, Arctos](http://www.wikidata.org/entity/Q1190812)), [Christian Bölling](https://orcid.org/0000-0002-6544-1363) ([Museum für Naturkunde Berlin - Leibniz-Institut für Evolutions- und Biodiversitätsforschung](http://www.wikidata.org/entity/Q233098))

Creator
: Darwin Core Maintenance Group

Bibliographic citation
: Darwin Core Maintenance Group. 2023. Darwin Core List of Terms. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/doc/list/2023-09-18>


## 1 Introduction (Informative)

This document contains terms that are part of the most recent version of the Darwin Core vocabulary (<http://rs.tdwg.org/version/dwc/2023-09-18>).

This document includes terms in four namespaces that contain recommended terms: `dwc:`, `dwciri:`, `dc:`, and `dcterms:`. However, some terms in these namespaces are deprecated or superseded and should no longer be used. Deprecation or supersession is noted in the term metadata. Namespaces that contain only deprecated terms are not included in this document, but metadata about those terms can be retrieved by dereferencing their IRIs.

For a simplified list that contains only the currently recommended terms, see the [Darwin Core Quick Reference Guide](../terms/).

### 1.1 Status of the content of this document

Sections 1 and 3 are non-normative.

Section 2 is normative.

In Section 4, the values of the `Term IRI` and `Definition` are normative. The values of `Term Name` are non-normative, although one can expect that the namespace abbreviation prefix is one commonly used for the term namespace.  `Label` and the values of all other properties (such as `Examples` and `Notes`) are non-normative.

### 1.2 RFC 2119 key words
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) and [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174) when, and only when, they appear in all capitals, as shown here.

### 1.3 Namespace abbreviations

The following namespace abbreviations are used in this document:

| abbreviation | IRI |
| --- | --- |
| dwc: | http://rs.tdwg.org/dwc/terms/ |
| dwciri: | http://rs.tdwg.org/dwc/iri/ |
| dc: | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/ |

## 2 Use of Terms

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), terms in the `dwciri:` namespace MUST be used with IRI values. Terms in the `dwc:` and `dc:` namespaces are generally expected to have string literal values. Values for terms in the `dcterms:` namespace will depend on the details of the term. See [Section 3 of the Darwin Core RDF Guide](../rdf/#3-term-reference-normative) for details.

## 3 Term indices
### 3.1 Index By Term Name

(See also [3.2 Index By Label](#32-index-by-label))

**Classes**

[dwc:Dataset](#dwc_Dataset) |
[dwc:Event](#dwc_Event) |
[dwc:EventAttribute](#dwc_EventAttribute) |
[dwc:EventMeasurement](#dwc_EventMeasurement) |
[dwc:FossilSpecimen](#dwc_FossilSpecimen) |
[dwc:GeologicalContext](#dwc_GeologicalContext) |
[dwc:HumanObservation](#dwc_HumanObservation) |
[dwc:Identification](#dwc_Identification) |
[dwc:LivingSpecimen](#dwc_LivingSpecimen) |
[dcterms:Location](#dcterms_Location) |
[dwc:MachineObservation](#dwc_MachineObservation) |
[dwc:MaterialCitation](#dwc_MaterialCitation) |
[dwc:MaterialEntity](#dwc_MaterialEntity) |
[dwc:MaterialSample](#dwc_MaterialSample) |
[dwc:MeasurementOrFact](#dwc_MeasurementOrFact) |
[dwc:Occurrence](#dwc_Occurrence) |
[dwc:OccurrenceMeasurement](#dwc_OccurrenceMeasurement) |
[dwc:Organism](#dwc_Organism) |
[dwc:PreservedSpecimen](#dwc_PreservedSpecimen) |
[dwc:ResourceRelationship](#dwc_ResourceRelationship) |
[dwc:Sample](#dwc_Sample) |
[dwc:SampleAttribute](#dwc_SampleAttribute) |
[dwc:SamplingEvent](#dwc_SamplingEvent) |
[dwc:SamplingLocation](#dwc_SamplingLocation) |
[dwc:Taxon](#dwc_Taxon)

**Record level**

[dwc:accordingTo](#dwc_accordingTo) |
[dwc:accuracy](#dwc_accuracy) |
[dwc:basisOfRecord](#dwc_basisOfRecord) |
[dwc:collectionCode](#dwc_collectionCode) |
[dwc:collectionID](#dwc_collectionID) |
[dwc:dataGeneralizations](#dwc_dataGeneralizations) |
[dwc:datasetID](#dwc_datasetID) |
[dwc:datasetName](#dwc_datasetName) |
[dwc:DwCType](#dwc_DwCType) |
[dwc:dynamicProperties](#dwc_dynamicProperties) |
[dwc:Generalizations](#dwc_Generalizations) |
[dwc:informationWithheld](#dwc_informationWithheld) |
[dwc:institutionCode](#dwc_institutionCode) |
[dwc:institutionID](#dwc_institutionID) |
[dwc:ownerInstitutionCode](#dwc_ownerInstitutionCode)

**Dublin Core legacy namespace**

[dc:language](#dc_language) |
[dc:type](#dc_type)

**Dublin Core terms namespace**

[dcterms:accessRights](#dcterms_accessRights) |
[dcterms:bibliographicCitation](#dcterms_bibliographicCitation) |
[dcterms:language](#dcterms_language) |
[dcterms:license](#dcterms_license) |
[dcterms:modified](#dcterms_modified) |
[dcterms:references](#dcterms_references) |
[dcterms:rights](#dcterms_rights) |
[dcterms:rightsHolder](#dcterms_rightsHolder) |
[dcterms:type](#dcterms_type)

**Occurrence**

[dwc:associatedMedia](#dwc_associatedMedia) |
[dwc:associatedOccurrences](#dwc_associatedOccurrences) |
[dwc:associatedReferences](#dwc_associatedReferences) |
[dwc:associatedTaxa](#dwc_associatedTaxa) |
[dwc:behavior](#dwc_behavior) |
[dwc:caste](#dwc_caste) |
[dwc:catalogNumber](#dwc_catalogNumber) |
[dwc:CatalogNumberNumeric](#dwc_CatalogNumberNumeric) |
[dwc:degreeOfEstablishment](#dwc_degreeOfEstablishment) |
[dwc:establishmentMeans](#dwc_establishmentMeans) |
[dwc:georeferenceVerificationStatus](#dwc_georeferenceVerificationStatus) |
[dwc:individualCount](#dwc_individualCount) |
[dwc:individualID](#dwc_individualID) |
[dwc:lifeStage](#dwc_lifeStage) |
[dwc:occurrenceAttributes](#dwc_occurrenceAttributes) |
[dwc:occurrenceDetails](#dwc_occurrenceDetails) |
[dwc:occurrenceID](#dwc_occurrenceID) |
[dwc:occurrenceRemarks](#dwc_occurrenceRemarks) |
[dwc:occurrenceStatus](#dwc_occurrenceStatus) |
[dwc:organismQuantity](#dwc_organismQuantity) |
[dwc:organismQuantityType](#dwc_organismQuantityType) |
[dwc:otherCatalogNumbers](#dwc_otherCatalogNumbers) |
[dwc:pathway](#dwc_pathway) |
[dwc:recordedBy](#dwc_recordedBy) |
[dwc:recordedByID](#dwc_recordedByID) |
[dwc:recordNumber](#dwc_recordNumber) |
[dwc:reproductiveCondition](#dwc_reproductiveCondition) |
[dwc:sex](#dwc_sex) |
[dwc:vitality](#dwc_vitality)

**Organism**

[dwc:associatedOrganisms](#dwc_associatedOrganisms) |
[dwc:organismID](#dwc_organismID) |
[dwc:organismName](#dwc_organismName) |
[dwc:organismRemarks](#dwc_organismRemarks) |
[dwc:organismScope](#dwc_organismScope) |
[dwc:previousIdentifications](#dwc_previousIdentifications)

**Material Entity**

[dwc:associatedSequences](#dwc_associatedSequences) |
[dwc:disposition](#dwc_disposition) |
[dwc:materialEntityID](#dwc_materialEntityID) |
[dwc:materialEntityRemarks](#dwc_materialEntityRemarks) |
[dwc:preparations](#dwc_preparations) |
[dwc:verbatimLabel](#dwc_verbatimLabel)

**Material Sample**

[dwc:materialSampleID](#dwc_materialSampleID)

**Event**

[dwc:day](#dwc_day) |
[dwc:EarliestDateCollected](#dwc_EarliestDateCollected) |
[dwc:endDayOfYear](#dwc_endDayOfYear) |
[dwc:EndTimeOfDay](#dwc_EndTimeOfDay) |
[dwc:eventAttributes](#dwc_eventAttributes) |
[dwc:eventDate](#dwc_eventDate) |
[dwc:eventID](#dwc_eventID) |
[dwc:eventRemarks](#dwc_eventRemarks) |
[dwc:eventTime](#dwc_eventTime) |
[dwc:eventType](#dwc_eventType) |
[dwc:fieldNotes](#dwc_fieldNotes) |
[dwc:fieldNumber](#dwc_fieldNumber) |
[dwc:habitat](#dwc_habitat) |
[dwc:LatestDateCollected](#dwc_LatestDateCollected) |
[dwc:month](#dwc_month) |
[dwc:parentEventID](#dwc_parentEventID) |
[dwc:sampleSizeUnit](#dwc_sampleSizeUnit) |
[dwc:sampleSizeValue](#dwc_sampleSizeValue) |
[dwc:samplingEffort](#dwc_samplingEffort) |
[dwc:samplingProtocol](#dwc_samplingProtocol) |
[dwc:startDayOfYear](#dwc_startDayOfYear) |
[dwc:StartTimeOfDay](#dwc_StartTimeOfDay) |
[dwc:verbatimEventDate](#dwc_verbatimEventDate) |
[dwc:year](#dwc_year)

**Location**

[dwc:continent](#dwc_continent) |
[dwc:coordinatePrecision](#dwc_coordinatePrecision) |
[dwc:coordinateUncertaintyInMeters](#dwc_coordinateUncertaintyInMeters) |
[dwc:country](#dwc_country) |
[dwc:countryCode](#dwc_countryCode) |
[dwc:county](#dwc_county) |
[dwc:decimalLatitude](#dwc_decimalLatitude) |
[dwc:decimalLongitude](#dwc_decimalLongitude) |
[dwc:footprintSpatialFit](#dwc_footprintSpatialFit) |
[dwc:footprintSRS](#dwc_footprintSRS) |
[dwc:footprintWKT](#dwc_footprintWKT) |
[dwc:geodeticDatum](#dwc_geodeticDatum) |
[dwc:georeferencedBy](#dwc_georeferencedBy) |
[dwc:georeferencedDate](#dwc_georeferencedDate) |
[dwc:georeferenceProtocol](#dwc_georeferenceProtocol) |
[dwc:georeferenceRemarks](#dwc_georeferenceRemarks) |
[dwc:georeferenceSources](#dwc_georeferenceSources) |
[dwc:higherGeography](#dwc_higherGeography) |
[dwc:higherGeographyID](#dwc_higherGeographyID) |
[dwc:island](#dwc_island) |
[dwc:islandGroup](#dwc_islandGroup) |
[dwc:locality](#dwc_locality) |
[dwc:locationAccordingTo](#dwc_locationAccordingTo) |
[dwc:locationAttributes](#dwc_locationAttributes) |
[dwc:locationID](#dwc_locationID) |
[dwc:locationRemarks](#dwc_locationRemarks) |
[dwc:maximumDepthInMeters](#dwc_maximumDepthInMeters) |
[dwc:maximumDistanceAboveSurfaceInMeters](#dwc_maximumDistanceAboveSurfaceInMeters) |
[dwc:maximumElevationInMeters](#dwc_maximumElevationInMeters) |
[dwc:minimumDepthInMeters](#dwc_minimumDepthInMeters) |
[dwc:minimumDistanceAboveSurfaceInMeters](#dwc_minimumDistanceAboveSurfaceInMeters) |
[dwc:minimumElevationInMeters](#dwc_minimumElevationInMeters) |
[dwc:municipality](#dwc_municipality) |
[dwc:pointRadiusSpatialFit](#dwc_pointRadiusSpatialFit) |
[dwc:SamplingLocationID](#dwc_SamplingLocationID) |
[dwc:SamplingLocationRemarks](#dwc_SamplingLocationRemarks) |
[dwc:stateProvince](#dwc_stateProvince) |
[dwc:verbatimCoordinates](#dwc_verbatimCoordinates) |
[dwc:verbatimCoordinateSystem](#dwc_verbatimCoordinateSystem) |
[dwc:verbatimDepth](#dwc_verbatimDepth) |
[dwc:verbatimElevation](#dwc_verbatimElevation) |
[dwc:verbatimLatitude](#dwc_verbatimLatitude) |
[dwc:verbatimLocality](#dwc_verbatimLocality) |
[dwc:verbatimLongitude](#dwc_verbatimLongitude) |
[dwc:verbatimSRS](#dwc_verbatimSRS) |
[dwc:verticalDatum](#dwc_verticalDatum) |
[dwc:waterBody](#dwc_waterBody)

**Geological Context**

[dwc:bed](#dwc_bed) |
[dwc:earliestAgeOrLowestStage](#dwc_earliestAgeOrLowestStage) |
[dwc:earliestEonOrLowestEonothem](#dwc_earliestEonOrLowestEonothem) |
[dwc:earliestEpochOrLowestSeries](#dwc_earliestEpochOrLowestSeries) |
[dwc:earliestEraOrLowestErathem](#dwc_earliestEraOrLowestErathem) |
[dwc:earliestPeriodOrLowestSystem](#dwc_earliestPeriodOrLowestSystem) |
[dwc:formation](#dwc_formation) |
[dwc:geologicalContextID](#dwc_geologicalContextID) |
[dwc:group](#dwc_group) |
[dwc:highestBiostratigraphicZone](#dwc_highestBiostratigraphicZone) |
[dwc:latestAgeOrHighestStage](#dwc_latestAgeOrHighestStage) |
[dwc:latestEonOrHighestEonothem](#dwc_latestEonOrHighestEonothem) |
[dwc:latestEpochOrHighestSeries](#dwc_latestEpochOrHighestSeries) |
[dwc:latestEraOrHighestErathem](#dwc_latestEraOrHighestErathem) |
[dwc:latestPeriodOrHighestSystem](#dwc_latestPeriodOrHighestSystem) |
[dwc:lithostratigraphicTerms](#dwc_lithostratigraphicTerms) |
[dwc:lowestBiostratigraphicZone](#dwc_lowestBiostratigraphicZone) |
[dwc:member](#dwc_member)

**Identification**

[dwc:dateIdentified](#dwc_dateIdentified) |
[dwc:identificationAttributes](#dwc_identificationAttributes) |
[dwc:identificationID](#dwc_identificationID) |
[dwc:identificationQualifier](#dwc_identificationQualifier) |
[dwc:identificationReferences](#dwc_identificationReferences) |
[dwc:identificationRemarks](#dwc_identificationRemarks) |
[dwc:identificationVerificationStatus](#dwc_identificationVerificationStatus) |
[dwc:identifiedBy](#dwc_identifiedBy) |
[dwc:identifiedByID](#dwc_identifiedByID) |
[dwc:PreviousIdentifications](#dwc_PreviousIdentifications) |
[dwc:typeStatus](#dwc_typeStatus) |
[dwc:verbatimIdentification](#dwc_verbatimIdentification)

**Taxon**

[dwc:acceptedNameUsage](#dwc_acceptedNameUsage) |
[dwc:acceptedNameUsageID](#dwc_acceptedNameUsageID) |
[dwc:acceptedScientificName](#dwc_acceptedScientificName) |
[dwc:acceptedScientificNameID](#dwc_acceptedScientificNameID) |
[dwc:AcceptedTaxon](#dwc_AcceptedTaxon) |
[dwc:AcceptedTaxonID](#dwc_AcceptedTaxonID) |
[dwc:acceptedTaxonID](#dwc_acceptedTaxonID) |
[dwc:acceptedTaxonName](#dwc_acceptedTaxonName) |
[dwc:acceptedTaxonNameID](#dwc_acceptedTaxonNameID) |
[dwc:basionym](#dwc_basionym) |
[dwc:basionymID](#dwc_basionymID) |
[dwc:binomial](#dwc_binomial) |
[dwc:class](#dwc_class) |
[dwc:cultivarEpithet](#dwc_cultivarEpithet) |
[dwc:family](#dwc_family) |
[dwc:genericName](#dwc_genericName) |
[dwc:genus](#dwc_genus) |
[dwc:higherClassification](#dwc_higherClassification) |
[dwc:HigherTaxon](#dwc_HigherTaxon) |
[dwc:higherTaxonconceptID](#dwc_higherTaxonconceptID) |
[dwc:HigherTaxonID](#dwc_HigherTaxonID) |
[dwc:higherTaxonName](#dwc_higherTaxonName) |
[dwc:higherTaxonNameID](#dwc_higherTaxonNameID) |
[dwc:infragenericEpithet](#dwc_infragenericEpithet) |
[dwc:infraspecificEpithet](#dwc_infraspecificEpithet) |
[dwc:kingdom](#dwc_kingdom) |
[dwc:nameAccordingTo](#dwc_nameAccordingTo) |
[dwc:nameAccordingToID](#dwc_nameAccordingToID) |
[dwc:namePublicationID](#dwc_namePublicationID) |
[dwc:namePublishedIn](#dwc_namePublishedIn) |
[dwc:namePublishedInID](#dwc_namePublishedInID) |
[dwc:namePublishedInYear](#dwc_namePublishedInYear) |
[dwc:nomenclaturalCode](#dwc_nomenclaturalCode) |
[dwc:nomenclaturalStatus](#dwc_nomenclaturalStatus) |
[dwc:order](#dwc_order) |
[dwc:originalNameUsage](#dwc_originalNameUsage) |
[dwc:originalNameUsageID](#dwc_originalNameUsageID) |
[dwc:parentNameUsage](#dwc_parentNameUsage) |
[dwc:parentNameUsageID](#dwc_parentNameUsageID) |
[dwc:phylum](#dwc_phylum) |
[dwc:scientificName](#dwc_scientificName) |
[dwc:scientificNameAuthorship](#dwc_scientificNameAuthorship) |
[dwc:scientificNameID](#dwc_scientificNameID) |
[dwc:scientificNameRank](#dwc_scientificNameRank) |
[dwc:specificEpithet](#dwc_specificEpithet) |
[dwc:subfamily](#dwc_subfamily) |
[dwc:subgenus](#dwc_subgenus) |
[dwc:subtribe](#dwc_subtribe) |
[dwc:superfamily](#dwc_superfamily) |
[dwc:taxonAccordingTo](#dwc_taxonAccordingTo) |
[dwc:taxonAttributes](#dwc_taxonAttributes) |
[dwc:taxonConceptID](#dwc_taxonConceptID) |
[dwc:TaxonID](#dwc_TaxonID) |
[dwc:taxonID](#dwc_taxonID) |
[dwc:taxonNameID](#dwc_taxonNameID) |
[dwc:taxonomicStatus](#dwc_taxonomicStatus) |
[dwc:taxonRank](#dwc_taxonRank) |
[dwc:taxonRemarks](#dwc_taxonRemarks) |
[dwc:tribe](#dwc_tribe) |
[dwc:verbatimScientificNameRank](#dwc_verbatimScientificNameRank) |
[dwc:verbatimTaxonRank](#dwc_verbatimTaxonRank) |
[dwc:vernacularName](#dwc_vernacularName)

**Measurement or Fact**

[dwc:measurementAccuracy](#dwc_measurementAccuracy) |
[dwc:measurementDeterminedBy](#dwc_measurementDeterminedBy) |
[dwc:measurementDeterminedDate](#dwc_measurementDeterminedDate) |
[dwc:measurementID](#dwc_measurementID) |
[dwc:measurementMethod](#dwc_measurementMethod) |
[dwc:measurementRemarks](#dwc_measurementRemarks) |
[dwc:measurementType](#dwc_measurementType) |
[dwc:measurementUnit](#dwc_measurementUnit) |
[dwc:measurementValue](#dwc_measurementValue) |
[dwc:parentMeasurementID](#dwc_parentMeasurementID)

**Resource Relationship**

[dwc:RelatedBasisOfRecord](#dwc_RelatedBasisOfRecord) |
[dwc:relatedResourceID](#dwc_relatedResourceID) |
[dwc:relatedResourceType](#dwc_relatedResourceType) |
[dwc:relationshipAccordingTo](#dwc_relationshipAccordingTo) |
[dwc:relationshipEstablishedDate](#dwc_relationshipEstablishedDate) |
[dwc:relationshipOfResource](#dwc_relationshipOfResource) |
[dwc:relationshipOfResourceID](#dwc_relationshipOfResourceID) |
[dwc:relationshipRemarks](#dwc_relationshipRemarks) |
[dwc:resourceID](#dwc_resourceID) |
[dwc:resourceRelationshipID](#dwc_resourceRelationshipID)

**IRI-value terms**

[dwciri:behavior](#dwciri_behavior) |
[dwciri:caste](#dwciri_caste) |
[dwciri:dataGeneralizations](#dwciri_dataGeneralizations) |
[dwciri:degreeOfEstablishment](#dwciri_degreeOfEstablishment) |
[dwciri:disposition](#dwciri_disposition) |
[dwciri:earliestGeochronologicalEra](#dwciri_earliestGeochronologicalEra) |
[dwciri:establishmentMeans](#dwciri_establishmentMeans) |
[dwciri:eventType](#dwciri_eventType) |
[dwciri:fieldNotes](#dwciri_fieldNotes) |
[dwciri:fieldNumber](#dwciri_fieldNumber) |
[dwciri:footprintSRS](#dwciri_footprintSRS) |
[dwciri:footprintWKT](#dwciri_footprintWKT) |
[dwciri:fromLithostratigraphicUnit](#dwciri_fromLithostratigraphicUnit) |
[dwciri:geodeticDatum](#dwciri_geodeticDatum) |
[dwciri:georeferencedBy](#dwciri_georeferencedBy) |
[dwciri:georeferenceProtocol](#dwciri_georeferenceProtocol) |
[dwciri:georeferenceSources](#dwciri_georeferenceSources) |
[dwciri:georeferenceVerificationStatus](#dwciri_georeferenceVerificationStatus) |
[dwciri:habitat](#dwciri_habitat) |
[dwciri:identificationQualifier](#dwciri_identificationQualifier) |
[dwciri:identificationVerificationStatus](#dwciri_identificationVerificationStatus) |
[dwciri:identifiedBy](#dwciri_identifiedBy) |
[dwciri:inCollection](#dwciri_inCollection) |
[dwciri:inDataset](#dwciri_inDataset) |
[dwciri:inDescribedPlace](#dwciri_inDescribedPlace) |
[dwciri:informationWithheld](#dwciri_informationWithheld) |
[dwciri:latestGeochronologicalEra](#dwciri_latestGeochronologicalEra) |
[dwciri:lifeStage](#dwciri_lifeStage) |
[dwciri:locationAccordingTo](#dwciri_locationAccordingTo) |
[dwciri:measurementDeterminedBy](#dwciri_measurementDeterminedBy) |
[dwciri:measurementMethod](#dwciri_measurementMethod) |
[dwciri:measurementType](#dwciri_measurementType) |
[dwciri:measurementUnit](#dwciri_measurementUnit) |
[dwciri:measurementValue](#dwciri_measurementValue) |
[dwciri:occurrenceStatus](#dwciri_occurrenceStatus) |
[dwciri:organismQuantityType](#dwciri_organismQuantityType) |
[dwciri:pathway](#dwciri_pathway) |
[dwciri:preparations](#dwciri_preparations) |
[dwciri:recordedBy](#dwciri_recordedBy) |
[dwciri:recordNumber](#dwciri_recordNumber) |
[dwciri:reproductiveCondition](#dwciri_reproductiveCondition) |
[dwciri:sampleSizeUnit](#dwciri_sampleSizeUnit) |
[dwciri:samplingProtocol](#dwciri_samplingProtocol) |
[dwciri:sex](#dwciri_sex) |
[dwciri:toTaxon](#dwciri_toTaxon) |
[dwciri:typeStatus](#dwciri_typeStatus) |
[dwciri:verbatimCoordinateSystem](#dwciri_verbatimCoordinateSystem) |
[dwciri:verbatimSRS](#dwciri_verbatimSRS) |
[dwciri:verticalDatum](#dwciri_verticalDatum) |
[dwciri:vitality](#dwciri_vitality)



### 3.2 Index By Label

(See also [3.1 Index By Term Name](#31-index-by-term-name))

**Classes**

[Dataset](#dwc_Dataset) |
[Event](#dwc_Event) |
[Event Attribute](#dwc_EventAttribute) |
[Event Measurement](#dwc_EventMeasurement) |
[Fossil Specimen](#dwc_FossilSpecimen) |
[Geological Context](#dwc_GeologicalContext) |
[Human Observation](#dwc_HumanObservation) |
[Identification](#dwc_Identification) |
[Living Specimen](#dwc_LivingSpecimen) |
[Location](#dcterms_Location) |
[Machine Observation](#dwc_MachineObservation) |
[Material Citation](#dwc_MaterialCitation) |
[Material Entity](#dwc_MaterialEntity) |
[Material Sample](#dwc_MaterialSample) |
[Measurement Or Fact](#dwc_MeasurementOrFact) |
[Occurrence](#dwc_Occurrence) |
[Occurrence Measurement](#dwc_OccurrenceMeasurement) |
[Organism](#dwc_Organism) |
[Preserved Specimen](#dwc_PreservedSpecimen) |
[Resource Relationship](#dwc_ResourceRelationship) |
[Sample](#dwc_Sample) |
[Sample Attribute](#dwc_SampleAttribute) |
[Sampling Event](#dwc_SamplingEvent) |
[Sampling Location](#dwc_SamplingLocation) |
[Taxon](#dwc_Taxon)

**Record level**

[According To](#dwc_accordingTo) |
[Accuracy](#dwc_accuracy) |
[Basis Of Record](#dwc_basisOfRecord) |
[Collection Code](#dwc_collectionCode) |
[Collection ID](#dwc_collectionID) |
[Darwin Core Type](#dwc_DwCType) |
[Data Generalizations](#dwc_dataGeneralizations) |
[Dataset ID](#dwc_datasetID) |
[Dataset Name](#dwc_datasetName) |
[Dynamic Properties](#dwc_dynamicProperties) |
[Generalizations](#dwc_Generalizations) |
[Information Withheld](#dwc_informationWithheld) |
[Institution Code](#dwc_institutionCode) |
[Institution ID](#dwc_institutionID) |
[Owner Institution Code](#dwc_ownerInstitutionCode)

**Dublin Core legacy namespace**

[Language](#dc_language) |
[Type](#dc_type)

**Dublin Core terms namespace**

[Access Rights](#dcterms_accessRights) |
[Bibliographic Citation](#dcterms_bibliographicCitation) |
[Date Modified](#dcterms_modified) |
[Language](#dcterms_language) |
[License](#dcterms_license) |
[References](#dcterms_references) |
[Rights](#dcterms_rights) |
[Rights Holder](#dcterms_rightsHolder) |
[Type](#dcterms_type)

**Occurrence**

[Associated Media](#dwc_associatedMedia) |
[Associated Occurrences](#dwc_associatedOccurrences) |
[Associated References](#dwc_associatedReferences) |
[Associated Taxa](#dwc_associatedTaxa) |
[Behavior](#dwc_behavior) |
[Caste](#dwc_caste) |
[Catalog Number](#dwc_catalogNumber) |
[Catalog Number Numeric](#dwc_CatalogNumberNumeric) |
[Degree of Establishment](#dwc_degreeOfEstablishment) |
[Establishment Means](#dwc_establishmentMeans) |
[Georeference Verification Status](#dwc_georeferenceVerificationStatus) |
[Individual Count](#dwc_individualCount) |
[Individual ID](#dwc_individualID) |
[Life Stage](#dwc_lifeStage) |
[Occurrence Attributes](#dwc_occurrenceAttributes) |
[Occurrence Details](#dwc_occurrenceDetails) |
[Occurrence ID](#dwc_occurrenceID) |
[Occurrence Remarks](#dwc_occurrenceRemarks) |
[Occurrence Status](#dwc_occurrenceStatus) |
[Organism Quantity](#dwc_organismQuantity) |
[Organism Quantity Type](#dwc_organismQuantityType) |
[Other Catalog Numbers](#dwc_otherCatalogNumbers) |
[Pathway](#dwc_pathway) |
[Record Number](#dwc_recordNumber) |
[Recorded By](#dwc_recordedBy) |
[Recorded By ID](#dwc_recordedByID) |
[Reproductive Condition](#dwc_reproductiveCondition) |
[Sex](#dwc_sex) |
[Vitality](#dwc_vitality)

**Organism**

[Associated Organisms](#dwc_associatedOrganisms) |
[Organism ID](#dwc_organismID) |
[Organism Name](#dwc_organismName) |
[Organism Remarks](#dwc_organismRemarks) |
[Organism Scope](#dwc_organismScope) |
[Previous Identifications](#dwc_previousIdentifications)

**Material Entity**

[Associated Sequences](#dwc_associatedSequences) |
[Disposition](#dwc_disposition) |
[Material Entity ID](#dwc_materialEntityID) |
[Material Entity Remarks](#dwc_materialEntityRemarks) |
[Preparations](#dwc_preparations) |
[Verbatim Label](#dwc_verbatimLabel)

**Material Sample**

[Material Sample ID](#dwc_materialSampleID)

**Event**

[Day](#dwc_day) |
[Earliest Date Collected](#dwc_EarliestDateCollected) |
[End Day Of Year](#dwc_endDayOfYear) |
[End Time of Day](#dwc_EndTimeOfDay) |
[Event Attributes](#dwc_eventAttributes) |
[Event Date](#dwc_eventDate) |
[Event ID](#dwc_eventID) |
[Event Remarks](#dwc_eventRemarks) |
[Event Time](#dwc_eventTime) |
[Event Type](#dwc_eventType) |
[Field Notes](#dwc_fieldNotes) |
[Field Number](#dwc_fieldNumber) |
[Habitat](#dwc_habitat) |
[Latest Date Collected](#dwc_LatestDateCollected) |
[Month](#dwc_month) |
[Parent Event ID](#dwc_parentEventID) |
[Sample Size Unit](#dwc_sampleSizeUnit) |
[Sample Size Value](#dwc_sampleSizeValue) |
[Sampling Effort](#dwc_samplingEffort) |
[Sampling Protocol](#dwc_samplingProtocol) |
[Start Day Of Year](#dwc_startDayOfYear) |
[Start Time of Day](#dwc_StartTimeOfDay) |
[Verbatim EventDate](#dwc_verbatimEventDate) |
[Year](#dwc_year)

**Location**

[Continent](#dwc_continent) |
[Coordinate Precision](#dwc_coordinatePrecision) |
[Coordinate Uncertainty In Meters](#dwc_coordinateUncertaintyInMeters) |
[Country](#dwc_country) |
[Country Code](#dwc_countryCode) |
[Decimal Latitude](#dwc_decimalLatitude) |
[Decimal Longitude](#dwc_decimalLongitude) |
[First Order Division](#dwc_stateProvince) |
[Footprint SRS](#dwc_footprintSRS) |
[Footprint Spatial Fit](#dwc_footprintSpatialFit) |
[Footprint WKT](#dwc_footprintWKT) |
[Geodetic Datum](#dwc_geodeticDatum) |
[Georeference Protocol](#dwc_georeferenceProtocol) |
[Georeference Remarks](#dwc_georeferenceRemarks) |
[Georeference Sources](#dwc_georeferenceSources) |
[Georeferenced By](#dwc_georeferencedBy) |
[Georeferenced Date](#dwc_georeferencedDate) |
[Higher Geography](#dwc_higherGeography) |
[Higher Geography ID](#dwc_higherGeographyID) |
[Island](#dwc_island) |
[Island Group](#dwc_islandGroup) |
[Locality](#dwc_locality) |
[Location According To](#dwc_locationAccordingTo) |
[Location Attributes](#dwc_locationAttributes) |
[Location ID](#dwc_locationID) |
[Location Remarks](#dwc_locationRemarks) |
[Maximum Depth In Meters](#dwc_maximumDepthInMeters) |
[Maximum Distance Above Surface In Meters](#dwc_maximumDistanceAboveSurfaceInMeters) |
[Maximum Elevation In Meters](#dwc_maximumElevationInMeters) |
[Minimum Depth In Meters](#dwc_minimumDepthInMeters) |
[Minimum Distance Above Surface In Meters](#dwc_minimumDistanceAboveSurfaceInMeters) |
[Minimum Elevation In Meters](#dwc_minimumElevationInMeters) |
[Point Radius Spatial Fit](#dwc_pointRadiusSpatialFit) |
[Sampling Location ID](#dwc_SamplingLocationID) |
[Sampling Location Remarks](#dwc_SamplingLocationRemarks) |
[Second Order Division](#dwc_county) |
[Third Order Division](#dwc_municipality) |
[Verbatim Coordinate System](#dwc_verbatimCoordinateSystem) |
[Verbatim Coordinates](#dwc_verbatimCoordinates) |
[Verbatim Depth](#dwc_verbatimDepth) |
[Verbatim Elevation](#dwc_verbatimElevation) |
[Verbatim Latitude](#dwc_verbatimLatitude) |
[Verbatim Locality](#dwc_verbatimLocality) |
[Verbatim Longitude](#dwc_verbatimLongitude) |
[Verbatim SRS](#dwc_verbatimSRS) |
[Vertical Datum](#dwc_verticalDatum) |
[Water Body](#dwc_waterBody)

**Geological Context**

[Bed](#dwc_bed) |
[Earliest Age Or Lowest Stage](#dwc_earliestAgeOrLowestStage) |
[Earliest Eon Or Lowest Eonothem](#dwc_earliestEonOrLowestEonothem) |
[Earliest Epoch Or Lowest Series](#dwc_earliestEpochOrLowestSeries) |
[Earliest Era Or Lowest Erathem](#dwc_earliestEraOrLowestErathem) |
[Earliest Period Or Lowest System](#dwc_earliestPeriodOrLowestSystem) |
[Formation](#dwc_formation) |
[Geological Context ID](#dwc_geologicalContextID) |
[Group](#dwc_group) |
[Highest Biostratigraphic Zone](#dwc_highestBiostratigraphicZone) |
[Latest Age Or Highest Stage](#dwc_latestAgeOrHighestStage) |
[Latest Epoch Or Highest Series](#dwc_latestEpochOrHighestSeries) |
[Latest Era Or Highest Erathem](#dwc_latestEraOrHighestErathem) |
[Latest Period Or Highest System](#dwc_latestPeriodOrHighestSystem) |
[Lithostratigraphic Terms](#dwc_lithostratigraphicTerms) |
[Llatest Eon Or Highest Eonothem](#dwc_latestEonOrHighestEonothem) |
[Lowest Biostratigraphic Zone](#dwc_lowestBiostratigraphicZone) |
[Member](#dwc_member)

**Identification**

[Date Identified](#dwc_dateIdentified) |
[Identification Attributes](#dwc_identificationAttributes) |
[Identification ID](#dwc_identificationID) |
[Identification Qualifier](#dwc_identificationQualifier) |
[Identification References](#dwc_identificationReferences) |
[Identification Remarks](#dwc_identificationRemarks) |
[Identification Verification Status](#dwc_identificationVerificationStatus) |
[Identified By](#dwc_identifiedBy) |
[Identified By ID](#dwc_identifiedByID) |
[Previous Identifications](#dwc_PreviousIdentifications) |
[Type Status](#dwc_typeStatus) |
[Verbatim Identification](#dwc_verbatimIdentification)

**Taxon**

[Accepted Name Usage](#dwc_acceptedNameUsage) |
[Accepted Name Usage ID](#dwc_acceptedNameUsageID) |
[Accepted Scientific Name](#dwc_acceptedScientificName) |
[Accepted Scientific Name ID](#dwc_acceptedScientificNameID) |
[Accepted Taxon](#dwc_AcceptedTaxon) |
[Accepted Taxon ID](#dwc_AcceptedTaxonID) |
[Accepted Taxon Name](#dwc_acceptedTaxonName) |
[Accepted Taxon Name ID](#dwc_acceptedTaxonNameID) |
[Basionym](#dwc_basionym) |
[Basionym ID](#dwc_basionymID) |
[Binomial](#dwc_binomial) |
[Class](#dwc_class) |
[Cultivar Epithet](#dwc_cultivarEpithet) |
[Family](#dwc_family) |
[Generic Name](#dwc_genericName) |
[Genus](#dwc_genus) |
[Higher Classification](#dwc_higherClassification) |
[Higher Taxon](#dwc_HigherTaxon) |
[Higher Taxon Concept ID](#dwc_higherTaxonconceptID) |
[Higher Taxon ID](#dwc_HigherTaxonID) |
[Higher Taxon Name](#dwc_higherTaxonName) |
[Higher Taxon Name ID](#dwc_higherTaxonNameID) |
[Infrageneric Epithet](#dwc_infragenericEpithet) |
[Infraspecific Epithet](#dwc_infraspecificEpithet) |
[Kingdom](#dwc_kingdom) |
[Name According To](#dwc_nameAccordingTo) |
[Name According To ID](#dwc_nameAccordingToID) |
[Name Publication ID](#dwc_namePublicationID) |
[Name Published In](#dwc_namePublishedIn) |
[Name Published In ID](#dwc_namePublishedInID) |
[Name Published In Year](#dwc_namePublishedInYear) |
[Nomenclatural Code](#dwc_nomenclaturalCode) |
[Nomenclatural Status](#dwc_nomenclaturalStatus) |
[Order](#dwc_order) |
[Original Name Usage](#dwc_originalNameUsage) |
[Original Name Usage ID](#dwc_originalNameUsageID) |
[Parent Name Usage](#dwc_parentNameUsage) |
[Parent Name Usage ID](#dwc_parentNameUsageID) |
[Phylum](#dwc_phylum) |
[Scientific Name](#dwc_scientificName) |
[Scientific Name Authorship](#dwc_scientificNameAuthorship) |
[Scientific Name ID](#dwc_scientificNameID) |
[Scientific Name Rank](#dwc_scientificNameRank) |
[Specific Epithet](#dwc_specificEpithet) |
[Subfamily](#dwc_subfamily) |
[Subgenus](#dwc_subgenus) |
[Subtribe](#dwc_subtribe) |
[Superfamily](#dwc_superfamily) |
[Taxon According To](#dwc_taxonAccordingTo) |
[Taxon Attributes](#dwc_taxonAttributes) |
[Taxon Concept ID](#dwc_taxonConceptID) |
[Taxon ID](#dwc_TaxonID) |
[Taxon Name ID](#dwc_taxonNameID) |
[Taxon Rank](#dwc_taxonRank) |
[Taxon Remarks](#dwc_taxonRemarks) |
[Taxonomic Status](#dwc_taxonomicStatus) |
[Tribe](#dwc_tribe) |
[Verbatim Scientific Name Rank](#dwc_verbatimScientificNameRank) |
[Verbatim Taxon Rank](#dwc_verbatimTaxonRank) |
[Vernacular Name](#dwc_vernacularName)

**Measurement or Fact**

[Measurement Accuracy](#dwc_measurementAccuracy) |
[Measurement Determined By](#dwc_measurementDeterminedBy) |
[Measurement Determined Date](#dwc_measurementDeterminedDate) |
[Measurement ID](#dwc_measurementID) |
[Measurement Method](#dwc_measurementMethod) |
[Measurement Remarks](#dwc_measurementRemarks) |
[Measurement Type](#dwc_measurementType) |
[Measurement Unit](#dwc_measurementUnit) |
[Measurement Value](#dwc_measurementValue) |
[Parent Measurement ID](#dwc_parentMeasurementID)

**Resource Relationship**

[Related Basis of Record](#dwc_RelatedBasisOfRecord) |
[Related Resource ID](#dwc_relatedResourceID) |
[Related Resource Type](#dwc_relatedResourceType) |
[Relationship According To](#dwc_relationshipAccordingTo) |
[Relationship Established Date](#dwc_relationshipEstablishedDate) |
[Relationship Of Resource](#dwc_relationshipOfResource) |
[Relationship Of Resource ID](#dwc_relationshipOfResourceID) |
[Relationship Remarks](#dwc_relationshipRemarks) |
[Resource ID](#dwc_resourceID) |
[Resource Relationship ID](#dwc_resourceRelationshipID)

**IRI-value terms**

[Behavior (IRI)](#dwciri_behavior) |
[Caste (IRI)](#dwciri_caste) |
[Data Generalizations (IRI)](#dwciri_dataGeneralizations) |
[Degree of Establishment (IRI)](#dwciri_degreeOfEstablishment) |
[Disposition (IRI)](#dwciri_disposition) |
[Earliest Geochronological Era](#dwciri_earliestGeochronologicalEra) |
[Establishment Means (IRI)](#dwciri_establishmentMeans) |
[Event Type (IRI)](#dwciri_eventType) |
[Field Notes (IRI)](#dwciri_fieldNotes) |
[Field Number (IRI)](#dwciri_fieldNumber) |
[Footprint SRS (IRI)](#dwciri_footprintSRS) |
[Footprint WKT (IRI)](#dwciri_footprintWKT) |
[From Lithostratigraphic Unit](#dwciri_fromLithostratigraphicUnit) |
[Geodetic Datum (IRI)](#dwciri_geodeticDatum) |
[Georeference Protocol (IRI)](#dwciri_georeferenceProtocol) |
[Georeference Sources (IRI)](#dwciri_georeferenceSources) |
[Georeference Verification Status (IRI)](#dwciri_georeferenceVerificationStatus) |
[Georeferenced By (IRI)](#dwciri_georeferencedBy) |
[Habitat (IRI)](#dwciri_habitat) |
[Identification Qualifier (IRI)](#dwciri_identificationQualifier) |
[Identification Verification Status (IRI)](#dwciri_identificationVerificationStatus) |
[Identified By (IRI)](#dwciri_identifiedBy) |
[In Collection](#dwciri_inCollection) |
[In Dataset](#dwciri_inDataset) |
[In Described Place](#dwciri_inDescribedPlace) |
[Information Withheld (IRI)](#dwciri_informationWithheld) |
[Latest Geochronological Era](#dwciri_latestGeochronologicalEra) |
[Life Stage (IRI)](#dwciri_lifeStage) |
[Location According To (IRI)](#dwciri_locationAccordingTo) |
[Measurement Determined By (IRI)](#dwciri_measurementDeterminedBy) |
[Measurement Method (IRI)](#dwciri_measurementMethod) |
[Measurement Type (IRI)](#dwciri_measurementType) |
[Measurement Unit (IRI)](#dwciri_measurementUnit) |
[Measurement Value (IRI)](#dwciri_measurementValue) |
[Occurrence Status (IRI)](#dwciri_occurrenceStatus) |
[Organism Quantity Type (IRI)](#dwciri_organismQuantityType) |
[Pathway (IRI)](#dwciri_pathway) |
[Preparations (IRI)](#dwciri_preparations) |
[Record Number (IRI)](#dwciri_recordNumber) |
[Recorded By (IRI)](#dwciri_recordedBy) |
[Reproductive Condition (IRI)](#dwciri_reproductiveCondition) |
[Sampling Protocol (IRI)](#dwciri_samplingProtocol) |
[Sampling Size Unit (IRI)](#dwciri_sampleSizeUnit) |
[Sex (IRI)](#dwciri_sex) |
[To Taxon](#dwciri_toTaxon) |
[Type Status (IRI)](#dwciri_typeStatus) |
[Verbatim Coordinate System (IRI)](#dwciri_verbatimCoordinateSystem) |
[Verbatim SRS (IRI)](#dwciri_verbatimSRS) |
[Vertical Datum (IRI)](#dwciri_verticalDatum) |
[Vitality (IRI)](#dwciri_vitality)

## 4 Vocabulary
<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedNameUsage"></a>Term Name dwc:acceptedNameUsage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedNameUsage">http://rs.tdwg.org/dwc/terms/acceptedNameUsage</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/acceptedNameUsage-2023-06-28">http://rs.tdwg.org/dwc/terms/version/acceptedNameUsage-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accepted Name Usage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name, with authorship and date information if known, of the currently valid (zoological) or accepted (botanical) dwc:Taxon.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The full scientific name, with authorship and date information if known, of the accepted (botanical) or valid (zoological) name in cases where the provided dwc:scientificName is considered by the reference indicated in the dwc:accordingTo property, or of the content provider, to be a synonym or misapplied name. When applied to a dwc:Organism or dwc:Occurrence, this term should be used in cases where a content provider regards the provided dwc:scientificName to be inconsistent with the taxonomic perspective of the content provider. For example, there are many discrepancies within specimen collections and observation datasets between the recorded name (e.g., the most recent identification from an expert who examined a specimen, or a field identification for an observed dwc:Organism), and the name asserted by the content provider to be taxonomically accepted.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Tamias minimus</code> (valid name for <code>Eutamias minimus</code>)</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedNameUsageID"></a>Term Name dwc:acceptedNameUsageID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedNameUsageID">http://rs.tdwg.org/dwc/terms/acceptedNameUsageID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/acceptedNameUsageID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/acceptedNameUsageID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accepted Name Usage ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the name usage (documented meaning of the name according to a source) of the currently valid (zoological) or accepted (botanical) taxon.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term should be used for synonyms or misapplied names to refer to the dwc:taxonID of a dwc:Taxon record that represents the accepted (botanical) or valid (zoological) name. For Darwin Core Archives the related record should be present locally in the same archive.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>tsn:41107</code> (ITIS)</li>
  <li class="list-group-item"><code>urn:lsid:ipni.org:names:320035-2</code> (IPNI)</li>
  <li class="list-group-item"><code>2704179</code> (GBIF)</li>
  <li class="list-group-item"><code>6W3C4</code> (COL)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedScientificName"></a>Term Name dwc:acceptedScientificName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedScientificName">http://rs.tdwg.org/dwc/terms/acceptedScientificName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-09-21</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accepted Scientific Name</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_acceptedNameUsage">http://rs.tdwg.org/dwc/terms/acceptedNameUsage</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The currently valid (zoological) or accepted (botanical) name for the scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Tamias minimus" valid name for "Eutamias minimus"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedScientificNameID"></a>Term Name dwc:acceptedScientificNameID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedScientificNameID">http://rs.tdwg.org/dwc/terms/acceptedScientificNameID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-08-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accepted Scientific Name ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_acceptedTaxonID">http://rs.tdwg.org/dwc/terms/acceptedTaxonID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A unique identifier for the acceptedScientificName.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_AcceptedTaxon"></a>Term Name dwc:AcceptedTaxon</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/AcceptedTaxon">http://rs.tdwg.org/dwc/terms/AcceptedTaxon</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accepted Taxon</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_acceptedTaxonName">http://rs.tdwg.org/dwc/terms/acceptedTaxonName</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The currently valid (zoological) or accepted (botanical) name for the ScientificName.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_AcceptedTaxonID"></a>Term Name dwc:AcceptedTaxonID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/AcceptedTaxonID">http://rs.tdwg.org/dwc/terms/AcceptedTaxonID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accepted Taxon ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_acceptedTaxonNameID">http://rs.tdwg.org/dwc/terms/acceptedTaxonNameID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A global unique identifier for the parent to the AcceptedTaxon.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedTaxonID"></a>Term Name dwc:acceptedTaxonID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedTaxonID">http://rs.tdwg.org/dwc/terms/acceptedTaxonID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-09-21</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accepted Taxon ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_acceptedNameUsageID">http://rs.tdwg.org/dwc/terms/acceptedNameUsageID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the name of the currently valid (zoological) or accepted (botanical) taxon. See acceptedTaxon.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "8fa58e08-08de-4ac1-b69c-1235340b7001"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedTaxonName"></a>Term Name dwc:acceptedTaxonName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedTaxonName">http://rs.tdwg.org/dwc/terms/acceptedTaxonName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-07-06</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accepted Taxon Name</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_acceptedScientificName">http://rs.tdwg.org/dwc/terms/acceptedScientificName</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The currently valid (zoological) or accepted (botanical) name for the scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Tamias minimus" valid name for "Eutamias minimus"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedTaxonNameID"></a>Term Name dwc:acceptedTaxonNameID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedTaxonNameID">http://rs.tdwg.org/dwc/terms/acceptedTaxonNameID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-07-06</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accepted Taxon Name ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_acceptedScientificNameID">http://rs.tdwg.org/dwc/terms/acceptedScientificNameID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A unique identifier for the acceptedTaxonName.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_AccessConstraints"></a>Term Name dwc:AccessConstraints</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/AccessConstraints">http://rs.tdwg.org/dwc/terms/AccessConstraints</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-09-21</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Access Constraints</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dcterms_accessRights">http://purl.org/dc/terms/accessRights</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A description of constraints on the use of the data as shared or access to further data that is not shared.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "not-for-profit use only".</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/IPRStatements</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_accessRights"></a>Term Name dcterms:accessRights</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/accessRights">http://purl.org/dc/terms/accessRights</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://dublincore.org/usage/terms/history/#accessRights-002">http://dublincore.org/usage/terms/history/#accessRights-002</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Access Rights</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about who can access the resource or an indication of its security status.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Access Rights may include information regarding access or restrictions based on privacy, security, or other policies.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>not-for-profit use only</code> (string literal example)</li>
  <li class="list-group-item"><code><a href="https://www.fieldmuseum.org/field-museum-natural-history-conditions-and-suggested-norms-use-collections-data-and-images">https://www.fieldmuseum.org/field-museum-natural-history-conditions-and-suggested-norms-use-collections-data-and-images</a></code> (URI example)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_accordingTo"></a>Term Name dwc:accordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/accordingTo">http://rs.tdwg.org/dwc/terms/accordingTo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2020-08-06</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>According To</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Abstract term to attribute information to a source.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_accuracy"></a>Term Name dwc:accuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/accuracy">http://rs.tdwg.org/dwc/terms/accuracy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accuracy</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Abstract term to capture error information about a measurement or fact.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Aspect/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Accuracy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_associatedMedia"></a>Term Name dwc:associatedMedia</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedMedia">http://rs.tdwg.org/dwc/terms/associatedMedia</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedMedia-2023-06-28">http://rs.tdwg.org/dwc/terms/version/associatedMedia-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated Media</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers (publication, global unique identifier, URI) of media associated with the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="https://arctos.database.museum/media/10520962">https://arctos.database.museum/media/10520962</a> | <a href="https://arctos.database.museum/media/10520964">https://arctos.database.museum/media/10520964</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MultimediaObjects</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_associatedOccurrences"></a>Term Name dwc:associatedOccurrences</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedOccurrences">http://rs.tdwg.org/dwc/terms/associatedOccurrences</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedOccurrences-2023-06-28">http://rs.tdwg.org/dwc/terms/version/associatedOccurrences-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated Occurrences</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers of other dwc:Occurrence records and their associations to this dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term can be used to provide a list of associations to other dwc:Occurrences. Note that the dwc:ResourceRelationship class is an alternative means of representing associations, and with more detail. Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>"parasite collected from":"<a href="https://arctos.database.museum/guid/MSB:Mamm:215895?seid=950760">https://arctos.database.museum/guid/MSB:Mamm:215895?seid=950760</a>"</code></li>
  <li class="list-group-item"><code>"encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177394">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177394</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177392">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177392</a>" | "encounter previous to":"<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3609139">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3609139</a>"</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Associations/UnitAssociation/AssociatedUnitSourceInstitutionCode + DataSets/DataSet/Units/Unit/Associations/UnitAssociation/AssociatedUnitSourceName + DataSets/DataSet/Units/Unit/Associations/UnitAssociation/AssociatedUnitID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_14">http://rs.tdwg.org/decisions/decision-2014-10-26_14</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_associatedOrganisms"></a>Term Name dwc:associatedOrganisms</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedOrganisms">http://rs.tdwg.org/dwc/terms/associatedOrganisms</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedOrganisms-2023-06-28">http://rs.tdwg.org/dwc/terms/version/associatedOrganisms-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated Organisms</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers of other dwc:Organisms and the associations of this dwc:Organism to each of them.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term can be used to provide a list of associations to other dwc:Organisms. Note that the dwc:ResourceRelationship class is an alternative means of representing associations, and with more detail. Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>"sibling of":"<a href="http://arctos.database.museum/guid/DMNS:Mamm:14171">http://arctos.database.museum/guid/DMNS:Mamm:14171</a>"</code></li>
  <li class="list-group-item"><code>"parent of":"<a href="http://arctos.database.museum/guid/MSB:Mamm:196208">http://arctos.database.museum/guid/MSB:Mamm:196208</a>" | "parent of":"<a href="http://arctos.database.museum/guid/MSB:Mamm:196523">http://arctos.database.museum/guid/MSB:Mamm:196523</a>" | "sibling of":"<a href="http://arctos.database.museum/guid/MSB:Mamm:142638">http://arctos.database.museum/guid/MSB:Mamm:142638</a>"</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_14">http://rs.tdwg.org/decisions/decision-2014-10-26_14</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_associatedReferences"></a>Term Name dwc:associatedReferences</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedReferences">http://rs.tdwg.org/dwc/terms/associatedReferences</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedReferences-2023-06-28">http://rs.tdwg.org/dwc/terms/version/associatedReferences-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated References</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers (publication, bibliographic reference, global unique identifier, URI) of literature associated with the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). Note that the dwc:ResourceRelationship class is an alternative means of representing associations, and with more detail. Note also that the intended usage of the term dcterms:references in Darwin Core when applied to a dwc:Occurrence is to point to the definitive source representation of that dwc:Occurrence if one is available. Note also that the intended usage of dcterms:bibliographicCitation in Darwin Core when applied to a dwc:Occurrence is to provide the preferred way to cite the dwc:Occurrence itself.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="http://www.sciencemag.org/cgi/content/abstract/322/5899/261">http://www.sciencemag.org/cgi/content/abstract/322/5899/261</a></code></li>
  <li class="list-group-item"><code>Christopher J. Conroy, Jennifer L. Neuwald. 2008. Phylogeographic study of the California vole, Microtus californicus Journal of Mammalogy, 89(3):755-767.</code></li>
  <li class="list-group-item"><code>Steven R. Hoofer and Ronald A. Van Den Bussche. 2001. Phylogenetic Relationships of Plecotine Bats and Allies Based on Mitochondrial Ribosomal Sequences. Journal of Mammalogy 82(1):131-137. | Walker, Faith M., Jeffrey T. Foster, Kevin P. Drees, Carol L. Chambers. 2014. Spotted bat (Euderma maculatum) microsatellite discovery using illumina sequencing. Conservation Genetics Resources.</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/UnitReferences</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_associatedSequences"></a>Term Name dwc:associatedSequences</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedSequences">http://rs.tdwg.org/dwc/terms/associatedSequences</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedSequences-2023-09-13">http://rs.tdwg.org/dwc/terms/version/associatedSequences-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated Sequences</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers (publication, global unique identifier, URI) of genetic sequence information associated with the dwc:MaterialEntity.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="http://www.ncbi.nlm.nih.gov/nuccore/U34853.1">http://www.ncbi.nlm.nih.gov/nuccore/U34853.1</a></code></li>
  <li class="list-group-item"><code><a href="http://www.ncbi.nlm.nih.gov/nuccore/GU328060">http://www.ncbi.nlm.nih.gov/nuccore/GU328060</a> | <a href="http://www.ncbi.nlm.nih.gov/nuccore/AF326093">http://www.ncbi.nlm.nih.gov/nuccore/AF326093</a></code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Sequences/Sequence/ID-in-Database + constant</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_associatedTaxa"></a>Term Name dwc:associatedTaxa</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedTaxa">http://rs.tdwg.org/dwc/terms/associatedTaxa</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedTaxa-2023-06-28">http://rs.tdwg.org/dwc/terms/version/associatedTaxa-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated Taxa</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers or names of dwc:Taxon records and the associations of this dwc:Occurrence to each of them.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term can be used to provide a list of associations to dwc:Taxon records other than the one defined in the dwc:Occurrence. Note that the dwc:ResourceRelationship class is an alternative means of representing associations, and with more detail. This term is not apt for establishing relationships between dwc:Taxon records, only between specific dwc:Occurrences of a dwc:Organism with other dwc:Taxon records. Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>"host":"Quercus alba"</code></li>
  <li class="list-group-item"><code>"host":"gbif.org/species/2879737"</code></li>
  <li class="list-group-item"><code>"parasitoid of":"Cyclocephala signaticollis" | "predator of":"Apis mellifera"</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Synecology/AssociatedTaxa</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_basionym"></a>Term Name dwc:basionym</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/basionym">http://rs.tdwg.org/dwc/terms/basionym</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-09-21</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Basionym</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_originalNameUsage">http://rs.tdwg.org/dwc/terms/originalNameUsage</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The basionym (botany) or basonym (bacteriology) of the scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Pinus abies"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_basionymID"></a>Term Name dwc:basionymID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/basionymID">http://rs.tdwg.org/dwc/terms/basionymID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-09-21</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Basionym ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_originalNameUsageID">http://rs.tdwg.org/dwc/terms/originalNameUsageID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A unique identifier for the basionym (botany) or basonym (bacteriology) of the scientificName.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_basisOfRecord"></a>Term Name dwc:basisOfRecord</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/basisOfRecord">http://rs.tdwg.org/dwc/terms/basisOfRecord</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/basisOfRecord-2023-09-13">http://rs.tdwg.org/dwc/terms/version/basisOfRecord-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Basis Of Record</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The specific nature of the data record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the set of local names of the identifiers for classes in Darwin Core.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>MaterialEntity</code></li>
  <li class="list-group-item"><code>PreservedSpecimen</code></li>
  <li class="list-group-item"><code>FossilSpecimen</code></li>
  <li class="list-group-item"><code>LivingSpecimen</code></li>
  <li class="list-group-item"><code>MaterialSample</code></li>
  <li class="list-group-item"><code>Event</code></li>
  <li class="list-group-item"><code>HumanObservation</code></li>
  <li class="list-group-item"><code>MachineObservation</code></li>
  <li class="list-group-item"><code>Taxon</code></li>
  <li class="list-group-item"><code>Occurrence</code></li>
  <li class="list-group-item"><code>MaterialCitation</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/RecordBasis</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2009-12-07_2">http://rs.tdwg.org/decisions/decision-2009-12-07_2</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_bed"></a>Term Name dwc:bed</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/bed">http://rs.tdwg.org/dwc/terms/bed</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/bed-2023-09-13">http://rs.tdwg.org/dwc/terms/version/bed-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Bed</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the lithostratigraphic bed from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Harlem coal</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_behavior"></a>Term Name dwciri:behavior</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/behavior">http://rs.tdwg.org/dwc/iri/behavior</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/behavior-2023-06-28">http://rs.tdwg.org/dwc/iri/version/behavior-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Behavior (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A description of the behavior shown by the subject at the time the dwc:Occurrence was recorded.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_behavior"></a>Term Name dwc:behavior</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/behavior">http://rs.tdwg.org/dwc/terms/behavior</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/behavior-2023-06-28">http://rs.tdwg.org/dwc/terms/version/behavior-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Behavior</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The behavior shown by the subject at the time the dwc:Occurrence was recorded.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>roosting</code></li>
  <li class="list-group-item"><code>foraging</code></li>
  <li class="list-group-item"><code>running</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_bibliographicCitation"></a>Term Name dcterms:bibliographicCitation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/bibliographicCitation">http://purl.org/dc/terms/bibliographicCitation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://dublincore.org/usage/terms/history/#bibliographicCitation-002">http://dublincore.org/usage/terms/history/#bibliographicCitation-002</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Bibliographic Citation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A bibliographic reference for the resource.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>From Dublin Core, "Recommended practice is to include sufficient bibliographic detail to identify the resource as unambiguously as possible." The intended usage of this term in Darwin Core is to provide the preferred way to cite the resource itself - "how to cite this record". Note that the intended usage of dcterms:references in Darwin Core, by contrast, is to point to the definitive source representation of the resource - "where to find the as-close-to-original reference", if one is available.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Museum of Vertebrate Zoology, UC Berkeley. MVZ Mammal Collection (Arctos). Record ID: <a href="http://arctos.database.museum/guid/MVZ:Mamm:165861?seid=101356">http://arctos.database.museum/guid/MVZ:Mamm:165861?seid=101356</a>. Source: <a href="http://ipt.vertnet.org:8080/ipt/resource.do?r=mvz_mammal">http://ipt.vertnet.org:8080/ipt/resource.do?r=mvz_mammal</a>.</code> (Occurrence example)</li>
  <li class="list-group-item"><code><a href="https://www.gbif.org/species/2439608">https://www.gbif.org/species/2439608</a> Source: GBIF Taxonomic Backbone</code> (Taxon example)</li>
  <li class="list-group-item"><code>Rand, K.M., Logerwell, E.A. The first demersal trawl survey of benthic fish and invertebrates in the Beaufort Sea since the late 1970s. Polar Biol 34, 475–488 (2011). <a href="https://doi.org/10.1007/s00300-010-0900-2">https://doi.org/10.1007/s00300-010-0900-2</a></code> (Event example)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_binomial"></a>Term Name dwc:binomial</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/binomial">http://rs.tdwg.org/dwc/terms/binomial</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Binomial</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The combination of genus and first (species) epithet of the scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Ctenomys sociabilis"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Synecology/AssociatedTaxa/TaxonIdentified/ScientificName/FullScientificNameString</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_caste"></a>Term Name dwciri:caste</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/caste">http://rs.tdwg.org/dwc/iri/caste</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/caste-2023-06-28">http://rs.tdwg.org/dwc/iri/version/caste-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Caste (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Categorisation of individuals for eusocial species (including some mammals and arthropods).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary that aligns best with the dwc:Taxon. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_caste"></a>Term Name dwc:caste</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/caste">http://rs.tdwg.org/dwc/terms/caste</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/caste-2023-06-28">http://rs.tdwg.org/dwc/terms/version/caste-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Caste</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Categorisation of individuals for eusocial species (including some mammals and arthropods).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary that aligns best with the dwc:Taxon. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>queen</code></li>
  <li class="list-group-item"><code>male alate</code></li>
  <li class="list-group-item"><code>intercaste</code></li>
  <li class="list-group-item"><code>minor worker</code></li>
  <li class="list-group-item"><code>soldier</code></li>
  <li class="list-group-item"><code>ergatoid</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_catalogNumber"></a>Term Name dwc:catalogNumber</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/catalogNumber">http://rs.tdwg.org/dwc/terms/catalogNumber</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/catalogNumber-2023-06-28">http://rs.tdwg.org/dwc/terms/version/catalogNumber-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Catalog Number</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier (preferably unique) for the record within the data set or collection.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>145732</code></li>
  <li class="list-group-item"><code>145732a</code></li>
  <li class="list-group-item"><code>2008.1334</code></li>
  <li class="list-group-item"><code>R-4313</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/UnitID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_CatalogNumberNumeric"></a>Term Name dwc:CatalogNumberNumeric</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/CatalogNumberNumeric">http://rs.tdwg.org/dwc/terms/CatalogNumberNumeric</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Catalog Number Numeric</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The numeric value of the catalogNumber, used to facilitate numerical sorting and searching by ranges.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/UnitIDNumeric</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_class"></a>Term Name dwc:class</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/class">http://rs.tdwg.org/dwc/terms/class</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/class-2023-06-28">http://rs.tdwg.org/dwc/terms/version/class-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the class in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Mammalia</code></li>
  <li class="list-group-item"><code>Hepaticopsida</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/HigherTaxa/HigherTaxon/HigherTaxonName with HigherTaxa/HigherTaxon/HigherTaxonRank = classis</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_collectionCode"></a>Term Name dwc:collectionCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/collectionCode">http://rs.tdwg.org/dwc/terms/collectionCode</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/collectionCode-2023-06-28">http://rs.tdwg.org/dwc/terms/version/collectionCode-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Collection Code</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name, acronym, coden, or initialism identifying the collection or data set from which the record was derived.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Mammals</code></li>
  <li class="list-group-item"><code>Hildebrandt</code></li>
  <li class="list-group-item"><code>EBIRD</code></li>
  <li class="list-group-item"><code>VP</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SourceID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_collectionID"></a>Term Name dwc:collectionID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/collectionID">http://rs.tdwg.org/dwc/terms/collectionID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/collectionID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/collectionID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Collection ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the collection or dataset from which the record was derived.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>For physical specimens, the recommended best practice is to use a globally unique and resolvable identifier from a collections registry such as the GBIF Registry of Scientific Collections (<a href="https://www.gbif.org/grscicoll">https://www.gbif.org/grscicoll</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="https://www.gbif.org/grscicoll/collection/fbd3ed74-5a21-4e01-b86a-33d36f032d9c">https://www.gbif.org/grscicoll/collection/fbd3ed74-5a21-4e01-b86a-33d36f032d9c</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SourceID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_continent"></a>Term Name dwc:continent</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/continent">http://rs.tdwg.org/dwc/terms/continent</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/continent-2023-06-28">http://rs.tdwg.org/dwc/terms/version/continent-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Continent</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the continent in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Africa</code></li>
  <li class="list-group-item"><code>Antarctica</code></li>
  <li class="list-group-item"><code>Asia</code></li>
  <li class="list-group-item"><code>Europe</code></li>
  <li class="list-group-item"><code>North America</code></li>
  <li class="list-group-item"><code>Oceania</code></li>
  <li class="list-group-item"><code>South America</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= Continent</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_coordinatePrecision"></a>Term Name dwc:coordinatePrecision</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/coordinatePrecision">http://rs.tdwg.org/dwc/terms/coordinatePrecision</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/coordinatePrecision-2023-06-28">http://rs.tdwg.org/dwc/terms/version/coordinatePrecision-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Coordinate Precision</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A decimal representation of the precision of the coordinates given in the dwc:decimalLatitude and dwc:decimalLongitude.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>0.00001</code> (normal GPS limit for decimal degrees)</li>
  <li class="list-group-item"><code>0.000278</code> (nearest second)</li>
  <li class="list-group-item"><code>0.01667</code> (nearest minute)</li>
  <li class="list-group-item"><code>1.0</code> (nearest degree)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLong/ISOAccuracy or DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLong/AccuracyStatement</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_coordinateUncertaintyInMeters"></a>Term Name dwc:coordinateUncertaintyInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters">http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/coordinateUncertaintyInMeters-2023-06-28">http://rs.tdwg.org/dwc/terms/version/coordinateUncertaintyInMeters-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Coordinate Uncertainty In Meters</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The horizontal distance (in meters) from the given dwc:decimalLatitude and dwc:decimalLongitude describing the smallest circle containing the whole of the dcterms:Location. Leave the value empty if the uncertainty is unknown, cannot be estimated, or is not applicable (because there are no coordinates). Zero is not a valid value for this term.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>30</code> (reasonable lower limit on or after 2000-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time)</li>
  <li class="list-group-item"><code>100</code> (reasonable lower limit before 2000-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time)</li>
  <li class="list-group-item"><code>71</code> (uncertainty for a UTM coordinate having 100 meter precision and a known spatial reference system)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLon/CoordinateErrorDistanceInMeters</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_country"></a>Term Name dwc:country</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/country">http://rs.tdwg.org/dwc/terms/country</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/country-2023-06-28">http://rs.tdwg.org/dwc/terms/version/country-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Country</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the country or major administrative unit in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Denmark</code></li>
  <li class="list-group-item"><code>Colombia</code></li>
  <li class="list-group-item"><code>España</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Country/Name</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_countryCode"></a>Term Name dwc:countryCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/countryCode">http://rs.tdwg.org/dwc/terms/countryCode</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/countryCode-2023-06-28">http://rs.tdwg.org/dwc/terms/version/countryCode-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Country Code</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The standard code for the country in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an ISO 3166-1-alpha-2 country code. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>AR</code></li>
  <li class="list-group-item"><code>SV</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Country/ISO3166Code</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_county"></a>Term Name dwc:county</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/county">http://rs.tdwg.org/dwc/terms/county</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/county-2023-06-28">http://rs.tdwg.org/dwc/terms/version/county-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Second Order Division</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Missoula</code></li>
  <li class="list-group-item"><code>Los Lagos</code></li>
  <li class="list-group-item"><code>Mataró</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= County</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_cultivarEpithet"></a>Term Name dwc:cultivarEpithet</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/cultivarEpithet">http://rs.tdwg.org/dwc/terms/cultivarEpithet</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/cultivarEpithet-2023-06-28">http://rs.tdwg.org/dwc/terms/version/cultivarEpithet-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Cultivar Epithet</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Part of the name of a cultivar, cultivar group or grex that follows the dwc:scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>According to the Rules of the Cultivated Plant Code, a cultivar name consists of a botanical name followed by a cultivar epithet. The value given as the dwc:cultivarEpithet should exclude any quotes. The term dwc:taxonRank should be used to indicate which type of cultivated plant name (e.g. cultivar, cultivar group, grex) is concerned. This epithet, including any enclosing apostrophes or suffix, should be provided in dwc:scientificName as well.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>King Edward</code> (for scientificName <code>Solanum tuberosum 'King Edward'</code> and taxonRank <code>cultivar</code>)</li>
  <li class="list-group-item"><code>Mishmiense</code> (for scientificName <code>Rhododendron boothii Mishmiense Group</code> and taxonRank <code>cultivar group</code>)</li>
  <li class="list-group-item"><code>Atlantis</code> (for scientificName <code>Paphiopedilum Atlantis grex</code> and taxonRank <code>grex</code>)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td><a href="http://rs.tdwg.org/abcd/terms/cultivarName">http://rs.tdwg.org/abcd/terms/cultivarName</a> or <a href="http://rs.tdwg.org/abcd/terms/cultivarGroupName">http://rs.tdwg.org/abcd/terms/cultivarGroupName</a> or <a href="http://rs.tdwg.org/abcd/terms/breed">http://rs.tdwg.org/abcd/terms/breed</a> (ABCD 3.0)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_dataGeneralizations"></a>Term Name dwc:dataGeneralizations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/dataGeneralizations">http://rs.tdwg.org/dwc/terms/dataGeneralizations</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/dataGeneralizations-2023-06-28">http://rs.tdwg.org/dwc/terms/version/dataGeneralizations-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Data Generalizations</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Coordinates generalized from original GPS coordinates to the nearest half degree grid cell</code>.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_dataGeneralizations"></a>Term Name dwciri:dataGeneralizations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/dataGeneralizations">http://rs.tdwg.org/dwc/iri/dataGeneralizations</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/dataGeneralizations-2015-03-27">http://rs.tdwg.org/dwc/iri/version/dataGeneralizations-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Data Generalizations (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_Dataset"></a>Term Name dwc:Dataset</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Dataset">http://rs.tdwg.org/dwc/terms/Dataset</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-09-11</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Dataset</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The category of information pertaining to a logical set of records.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_datasetID"></a>Term Name dwc:datasetID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/datasetID">http://rs.tdwg.org/dwc/terms/datasetID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/datasetID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/datasetID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Dataset ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the set of data. May be a global unique identifier or an identifier specific to a collection or institution.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>b15d4952-7d20-46f1-8a3e-556a512b04c5</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/DataSetGUID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_datasetName"></a>Term Name dwc:datasetName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/datasetName">http://rs.tdwg.org/dwc/terms/datasetName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/datasetName-2023-06-28">http://rs.tdwg.org/dwc/terms/version/datasetName-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Dataset Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name identifying the data set from which the record was derived.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Grinnell Resurvey Mammals</code></li>
  <li class="list-group-item"><code>Lacey Ctenomys Recaptures</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SourceID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_dateIdentified"></a>Term Name dwc:dateIdentified</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/dateIdentified">http://rs.tdwg.org/dwc/terms/dateIdentified</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/dateIdentified-2023-06-28">http://rs.tdwg.org/dwc/terms/version/dateIdentified-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Date Identified</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the subject was determined as representing the dwc:Taxon.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li>
  <li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li>
  <li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li>
  <li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li>
  <li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li>
  <li class="list-group-item"><code>1971</code> (some time in the year 1971)</li>
  <li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li>
  <li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li>
  <li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/Date/DateText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_day"></a>Term Name dwc:day</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/day">http://rs.tdwg.org/dwc/terms/day</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/day-2023-06-28">http://rs.tdwg.org/dwc/terms/version/day-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Day</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The integer day of the month on which the dwc:Event occurred.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>9</code></li>
  <li class="list-group-item"><code>28</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>accessible from DataSets/DataSet/Units/Unit/Gathering/ISODateTimeBegin</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_decimalLatitude"></a>Term Name dwc:decimalLatitude</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/decimalLatitude">http://rs.tdwg.org/dwc/terms/decimalLatitude</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/decimalLatitude-2023-06-28">http://rs.tdwg.org/dwc/terms/version/decimalLatitude-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Decimal Latitude</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The geographic latitude (in decimal degrees, using the spatial reference system given in dwc:geodeticDatum) of the geographic center of a dcterms:Location. Positive values are north of the Equator, negative values are south of it. Legal values lie between -90 and 90, inclusive.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>-41.0983423</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLon/LatitudeDecimal</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_decimalLongitude"></a>Term Name dwc:decimalLongitude</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/decimalLongitude">http://rs.tdwg.org/dwc/terms/decimalLongitude</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/decimalLongitude-2023-06-28">http://rs.tdwg.org/dwc/terms/version/decimalLongitude-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Decimal Longitude</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The geographic longitude (in decimal degrees, using the spatial reference system given in dwc:geodeticDatum) of the geographic center of a dcterms:Location. Positive values are east of the Greenwich Meridian, negative values are west of it. Legal values lie between -180 and 180, inclusive.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>-121.1761111</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLon/LongitudeDecimal</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_degreeOfEstablishment"></a>Term Name dwciri:degreeOfEstablishment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/degreeOfEstablishment">http://rs.tdwg.org/dwc/iri/degreeOfEstablishment</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/degreeOfEstablishment-2023-06-28">http://rs.tdwg.org/dwc/iri/version/degreeOfEstablishment-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Degree of Establishment (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The degree to which a dwc:Organism survives, reproduces, and expands its range at the given place and time.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use IRIs from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/doe/">http://rs.tdwg.org/dwc/doc/doe/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a> . Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcdoe/values/d003">http://rs.tdwg.org/dwcdoe/values/d003</a></code></li>
  <li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcdoe/values/d005">http://rs.tdwg.org/dwcdoe/values/d005</a></code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_27">http://rs.tdwg.org/decisions/decision-2020-10-13_27</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_degreeOfEstablishment"></a>Term Name dwc:degreeOfEstablishment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/degreeOfEstablishment">http://rs.tdwg.org/dwc/terms/degreeOfEstablishment</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/degreeOfEstablishment-2023-06-28">http://rs.tdwg.org/dwc/terms/version/degreeOfEstablishment-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Degree of Establishment</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The degree to which a dwc:Organism survives, reproduces, and expands its range at the given place and time.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/doe/">http://rs.tdwg.org/dwc/doc/doe/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>native</code></li>
  <li class="list-group-item"><code>captive</code></li>
  <li class="list-group-item"><code>cultivated</code></li>
  <li class="list-group-item"><code>released</code></li>
  <li class="list-group-item"><code>failing</code></li>
  <li class="list-group-item"><code>casual</code></li>
  <li class="list-group-item"><code>reproducing</code></li>
  <li class="list-group-item"><code>established</code></li>
  <li class="list-group-item"><code>colonising</code></li>
  <li class="list-group-item"><code>invasive</code></li>
  <li class="list-group-item"><code>widespreadInvasive</code></li>
</ul></td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_27">http://rs.tdwg.org/decisions/decision-2020-10-13_27</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_disposition"></a>Term Name dwc:disposition</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/disposition">http://rs.tdwg.org/dwc/terms/disposition</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/disposition-2023-09-13">http://rs.tdwg.org/dwc/terms/version/disposition-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Disposition</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The current state of a dwc:MaterialEntity with respect to a collection.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>in collection</code></li>
  <li class="list-group-item"><code>missing</code></li>
  <li class="list-group-item"><code>on loan</code></li>
  <li class="list-group-item"><code>used up</code></li>
  <li class="list-group-item"><code>destroyed</code></li>
  <li class="list-group-item"><code>deaccessioned</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SpecimenUnit/Disposition</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_disposition"></a>Term Name dwciri:disposition</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/disposition">http://rs.tdwg.org/dwc/iri/disposition</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/disposition-2023-06-28">http://rs.tdwg.org/dwc/iri/version/disposition-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Disposition (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The current state of a specimen with respect to the collection identified in dwc:collectionCode or dwc:collectionID.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_DwCType"></a>Term Name dwc:DwCType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/DwCType">http://rs.tdwg.org/dwc/terms/DwCType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2014-10-23</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Darwin Core Type</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The set of classes specified by the Darwin Core Type Vocabulary, used to categorize the nature or genre of the resource.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>http://purl.org/dc/dcam/VocabularyEncodingScheme</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_dynamicProperties"></a>Term Name dwc:dynamicProperties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/dynamicProperties">http://rs.tdwg.org/dwc/terms/dynamicProperties</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/dynamicProperties-2023-06-28">http://rs.tdwg.org/dwc/terms/version/dynamicProperties-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Dynamic Properties</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list of additional measurements, facts, characteristics, or assertions about the record. Meant to provide a mechanism for structured content.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a key:value encoding schema for a data interchange format such as JSON.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>{"heightInMeters":1.5}</code></li>
  <li class="list-group-item"><code>{"targusLengthInMeters":0.014, "weightInGrams":120}</code></li>
  <li class="list-group-item"><code>{"natureOfID":"expert identification", "identificationEvidence":"cytochrome B sequence"}</code></li>
  <li class="list-group-item"><code>{"relativeHumidity":28, "airTemperatureInCelsius":22, "sampleSizeInKilograms":10}</code></li>
  <li class="list-group-item"><code>{"aspectHeading":277, "slopeInDegrees":6}</code></li>
  <li class="list-group-item"><code>{"iucnStatus":"vulnerable", "taxonDistribution":"Neuquén, Argentina"}</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_earliestAgeOrLowestStage"></a>Term Name dwc:earliestAgeOrLowestStage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/earliestAgeOrLowestStage">http://rs.tdwg.org/dwc/terms/earliestAgeOrLowestStage</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/earliestAgeOrLowestStage-2023-09-13">http://rs.tdwg.org/dwc/terms/version/earliestAgeOrLowestStage-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Age Or Lowest Stage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the earliest possible geochronologic age or lowest chronostratigraphic stage attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Atlantic</code></li>
  <li class="list-group-item"><code>Boreal</code></li>
  <li class="list-group-item"><code>Skullrockian</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EarliestDateCollected"></a>Term Name dwc:EarliestDateCollected</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EarliestDateCollected">http://rs.tdwg.org/dwc/terms/EarliestDateCollected</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Date Collected</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventDate">http://rs.tdwg.org/dwc/terms/eventDate</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The earliest date-time in a period during which a event occurred. If the event is recorded as occurring at a single date-time, populate both EarliestDateCollected and LatestDateCollected with the same value. Recommended best practice is to use an encoding scheme, such as ISO 8601:2004(E).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Date may be used to express temporal information at any level of granularity. Recommended best practice is to use an encoding scheme, such as the W3CDTF profile of ISO 8601 [W3CDTF].</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/ISODateTimeBegin</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_earliestEonOrLowestEonothem"></a>Term Name dwc:earliestEonOrLowestEonothem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/earliestEonOrLowestEonothem">http://rs.tdwg.org/dwc/terms/earliestEonOrLowestEonothem</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/earliestEonOrLowestEonothem-2023-09-13">http://rs.tdwg.org/dwc/terms/version/earliestEonOrLowestEonothem-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Eon Or Lowest Eonothem</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the earliest possible geochronologic eon or lowest chrono-stratigraphic eonothem or the informal name ("Precambrian") attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Phanerozoic</code></li>
  <li class="list-group-item"><code>Proterozoic</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_earliestEpochOrLowestSeries"></a>Term Name dwc:earliestEpochOrLowestSeries</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/earliestEpochOrLowestSeries">http://rs.tdwg.org/dwc/terms/earliestEpochOrLowestSeries</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/earliestEpochOrLowestSeries-2023-09-13">http://rs.tdwg.org/dwc/terms/version/earliestEpochOrLowestSeries-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Epoch Or Lowest Series</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the earliest possible geochronologic epoch or lowest chronostratigraphic series attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Holocene</code></li>
  <li class="list-group-item"><code>Pleistocene</code></li>
  <li class="list-group-item"><code>Ibexian Series</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_earliestEraOrLowestErathem"></a>Term Name dwc:earliestEraOrLowestErathem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/earliestEraOrLowestErathem">http://rs.tdwg.org/dwc/terms/earliestEraOrLowestErathem</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/earliestEraOrLowestErathem-2023-09-13">http://rs.tdwg.org/dwc/terms/version/earliestEraOrLowestErathem-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Era Or Lowest Erathem</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the earliest possible geochronologic era or lowest chronostratigraphic erathem attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Cenozoic</code></li>
  <li class="list-group-item"><code>Mesozoic</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_earliestGeochronologicalEra"></a>Term Name dwciri:earliestGeochronologicalEra</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/earliestGeochronologicalEra">http://rs.tdwg.org/dwc/iri/earliestGeochronologicalEra</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/earliestGeochronologicalEra-2023-09-13">http://rs.tdwg.org/dwc/iri/version/earliestGeochronologicalEra-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Geochronological Era</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Use to link a dwc:GeologicalContext instance to chronostratigraphic time periods at the lowest possible level in a standardized hierarchy. Use this property to point to the earliest possible geological time period from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.6 of the Darwin Core RDF Guide for details.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_earliestPeriodOrLowestSystem"></a>Term Name dwc:earliestPeriodOrLowestSystem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/earliestPeriodOrLowestSystem">http://rs.tdwg.org/dwc/terms/earliestPeriodOrLowestSystem</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/earliestPeriodOrLowestSystem-2023-09-13">http://rs.tdwg.org/dwc/terms/version/earliestPeriodOrLowestSystem-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Period Or Lowest System</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the earliest possible geochronologic period or lowest chronostratigraphic system attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Neogene</code></li>
  <li class="list-group-item"><code>Tertiary</code></li>
  <li class="list-group-item"><code>Quaternary</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_endDayOfYear"></a>Term Name dwc:endDayOfYear</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/endDayOfYear">http://rs.tdwg.org/dwc/terms/endDayOfYear</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/endDayOfYear-2023-06-28">http://rs.tdwg.org/dwc/terms/version/endDayOfYear-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>End Day Of Year</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The latest integer day of the year on which the dwc:Event occurred (1 for January 1, 365 for December 31, except in a leap year, in which case it is 366).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1</code> (1 January)</li>
  <li class="list-group-item"><code>32</code> (1 February)</li>
  <li class="list-group-item"><code>366</code> (31 December)</li>
  <li class="list-group-item"><code>365</code> (30 December in a leap year, 31 December in a non-leap year)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/DateTime/DayNumberEnd</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EndTimeOfDay"></a>Term Name dwc:EndTimeOfDay</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EndTimeOfDay">http://rs.tdwg.org/dwc/terms/EndTimeOfDay</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>End Time of Day</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventTime">http://rs.tdwg.org/dwc/terms/eventTime</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The time of day when the event ended, expressed as decimal hours from midnight, local time.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: "12.0" (= noon), "13.5" (= 1:30pm)</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/DateTime/TimeOfDayEnd</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_establishmentMeans"></a>Term Name dwciri:establishmentMeans</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/establishmentMeans">http://rs.tdwg.org/dwc/iri/establishmentMeans</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/establishmentMeans-2023-06-28">http://rs.tdwg.org/dwc/iri/version/establishmentMeans-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Establishment Means (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Statement about whether a dwc:Organism has been introduced to a given place and time through the direct or indirect activity of modern humans.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use IRIs from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/em/">http://rs.tdwg.org/dwc/doc/em/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a> . Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcem/values/e001">http://rs.tdwg.org/dwcem/values/e001</a></code></li>
  <li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcem/values/e005">http://rs.tdwg.org/dwcem/values/e005</a></code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_25">http://rs.tdwg.org/decisions/decision-2020-10-13_25</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_establishmentMeans"></a>Term Name dwc:establishmentMeans</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/establishmentMeans">http://rs.tdwg.org/dwc/terms/establishmentMeans</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/establishmentMeans-2023-06-28">http://rs.tdwg.org/dwc/terms/version/establishmentMeans-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Establishment Means</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Statement about whether a dwc:Organism has been introduced to a given place and time through the direct or indirect activity of modern humans.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/em/">http://rs.tdwg.org/dwc/doc/em/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>native</code></li>
  <li class="list-group-item"><code>nativeReintroduced</code></li>
  <li class="list-group-item"><code>introduced</code></li>
  <li class="list-group-item"><code>introducedAssistedColonisation</code></li>
  <li class="list-group-item"><code>vagrant</code></li>
  <li class="list-group-item"><code>uncertain</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/EstablishmentMeans</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_25">http://rs.tdwg.org/decisions/decision-2020-10-13_25</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_Event"></a>Term Name dwc:Event</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Event">http://rs.tdwg.org/dwc/terms/Event</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/Event-2023-09-18">http://rs.tdwg.org/dwc/terms/version/Event-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An action that occurs at some location during some time.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>a specimen collecting event</code></li>
  <li class="list-group-item"><code>a camera trap image capture</code></li>
  <li class="list-group-item"> <code>a marine trawl</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttribute"></a>Term Name dwc:EventAttribute</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttribute">http://rs.tdwg.org/dwc/terms/EventAttribute</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Attribute</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Container class for information about attributes related to a given sampling event.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeAccuracy"></a>Term Name dwc:EventAttributeAccuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeAccuracy">http://rs.tdwg.org/dwc/terms/EventAttributeAccuracy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Attribute Accuracy</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventMeasurementAccuracy">http://rs.tdwg.org/dwc/terms/eventMeasurementAccuracy</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The description of the error associated with the EventAttributeValue.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "0.01", "normal distribution with variation of 2 m"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Aspect/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Accuracy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeDeterminedBy"></a>Term Name dwc:EventAttributeDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeDeterminedBy">http://rs.tdwg.org/dwc/terms/EventAttributeDeterminedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Attribute Determined By</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventMeasurementDeterminedBy">http://rs.tdwg.org/dwc/terms/eventMeasurementDeterminedBy</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The agent responsible for having determined the value of the measurement or characteristic of the sampling event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Robert Hijmans"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/MeasuredBy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeDeterminedDate"></a>Term Name dwc:EventAttributeDeterminedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeDeterminedDate">http://rs.tdwg.org/dwc/terms/EventAttributeDeterminedDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Attribute Determined Date</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventMeasurementDeterminedDate">http://rs.tdwg.org/dwc/terms/eventMeasurementDeterminedDate</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the the measurement or characteristic of the sampling event was made.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Date may be used to express temporal information at any level of granularity. Recommended best practice is to use an encoding scheme, such as the W3CDTF profile of ISO 8601 [W3CDTF].</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/MeasurementDateTime</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeID"></a>Term Name dwc:EventAttributeID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeID">http://rs.tdwg.org/dwc/terms/EventAttributeID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Attribute ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventMeasurementID">http://rs.tdwg.org/dwc/terms/eventMeasurementID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the event attribute. May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeRemarks"></a>Term Name dwc:EventAttributeRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeRemarks">http://rs.tdwg.org/dwc/terms/EventAttributeRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Attribute Remarks</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes accompanying the measurement or characteristic of the sampling event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "temperature taken at 15:00"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventAttributes"></a>Term Name dwc:eventAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventAttributes">http://rs.tdwg.org/dwc/terms/eventAttributes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Attributes</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of additional measurements or characteristics of the Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Relative humidity: 28 %; Temperature: 22 C; Sample size: 10 kg"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeType"></a>Term Name dwc:EventAttributeType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeType">http://rs.tdwg.org/dwc/terms/EventAttributeType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Attribute Type</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventMeasurementType">http://rs.tdwg.org/dwc/terms/eventMeasurementType</a></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_SamplingAttributeType">http://rs.tdwg.org/dwc/terms/SamplingAttributeType</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature of the measurement or characteristic of the sampling event. Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Temperature"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Parameter</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeUnit"></a>Term Name dwc:EventAttributeUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeUnit">http://rs.tdwg.org/dwc/terms/EventAttributeUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Attribute Unit</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventMeasurementUnit">http://rs.tdwg.org/dwc/terms/eventMeasurementUnit</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The units for the value of the measurement or characteristic of the sampling event. Recommended best practice is to use International System of Units (SI) units.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "C"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UnitOfMeasurement</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeValue"></a>Term Name dwc:EventAttributeValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeValue">http://rs.tdwg.org/dwc/terms/EventAttributeValue</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Attribute</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventMeasurementValue">http://rs.tdwg.org/dwc/terms/eventMeasurementValue</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The value of the measurement or characteristic of the sampling event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "22"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/UpperValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventDate"></a>Term Name dwc:eventDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventDate">http://rs.tdwg.org/dwc/terms/eventDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventDate-2023-06-28">http://rs.tdwg.org/dwc/terms/version/eventDate-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Date</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date-time or interval during which a dwc:Event occurred. For occurrences, this is the date-time when the dwc:Event was recorded. Not suitable for a time in a geological context.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li>
  <li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li>
  <li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li>
  <li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li>
  <li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li>
  <li class="list-group-item"><code>1971</code> (some time in the year 1971)</li>
  <li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li>
  <li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li>
  <li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>accessible from DataSets/DataSet/Units/Unit/Gathering/ISODateTimeBegin and DataSets/DataSet/Units/Unit/Gathering/ISODateTimeEnd</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventID"></a>Term Name dwc:eventID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventID">http://rs.tdwg.org/dwc/terms/eventID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/eventID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the set of information associated with a dwc:Event (something that occurs at a place and time). May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>INBO:VIS:Ev:00009375</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Code</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventMeasurement"></a>Term Name dwc:EventMeasurement</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventMeasurement">http://rs.tdwg.org/dwc/terms/EventMeasurement</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Measurement</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_MeasurementOrFact">http://rs.tdwg.org/dwc/terms/MeasurementOrFact</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The category of information pertaining to measurements associated with an event.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementAccuracy"></a>Term Name dwc:eventMeasurementAccuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementAccuracy">http://rs.tdwg.org/dwc/terms/eventMeasurementAccuracy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Measurement Accuracy</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementAccuracy">http://rs.tdwg.org/dwc/terms/measurementAccuracy</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The description of the error associated with the EventAttributeValue.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "0.01", "normal distribution with variation of 2 m"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Aspect/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Accuracy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementDeterminedBy"></a>Term Name dwc:eventMeasurementDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementDeterminedBy">http://rs.tdwg.org/dwc/terms/eventMeasurementDeterminedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Measurement Determined By</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementDeterminedBy">http://rs.tdwg.org/dwc/terms/measurementDeterminedBy</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The agent responsible for having determined the value of the measurement or characteristic of the event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Robert Hijmans"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/MeasuredBy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementDeterminedDate"></a>Term Name dwc:eventMeasurementDeterminedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementDeterminedDate">http://rs.tdwg.org/dwc/terms/eventMeasurementDeterminedDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Measurement Determined Date</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementDeterminedDate">http://rs.tdwg.org/dwc/terms/measurementDeterminedDate</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the the measurement or characteristic of the event was made. Recommended best practice is to use an encoding scheme, such as ISO 8601:2004(E).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: "1963-03-08T14:07-0600" is 8 Mar 1963 2:07pm in the time zone six hours earlier than UTC, "2009-02-20T08:40Z" is 20 Feb 2009 8:40am UTC, "1809-02-12" is 12 Feb 1809, "1906-06" is Jun 1906, "1971" is just that year, "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z" is the interval between 1 Mar 2007 1pm UTC and 11 May 2008 3:30pm UTC, "2007-11-13/15" is the interval between 13 Nov 2007 and 15 Nov 2007.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/MeasurementDateTime</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementID"></a>Term Name dwc:eventMeasurementID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementID">http://rs.tdwg.org/dwc/terms/eventMeasurementID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Measurement ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementID">http://rs.tdwg.org/dwc/terms/measurementID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the event attribute. May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementRemarks"></a>Term Name dwc:eventMeasurementRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementRemarks">http://rs.tdwg.org/dwc/terms/eventMeasurementRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Measurement Remarks</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementRemarks">http://rs.tdwg.org/dwc/terms/measurementRemarks</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes accompanying the measurement or characteristic of the event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "temperature taken at 15:00"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementType"></a>Term Name dwc:eventMeasurementType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementType">http://rs.tdwg.org/dwc/terms/eventMeasurementType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Measurement Type</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementType">http://rs.tdwg.org/dwc/terms/measurementType</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature of the measurement or characteristic of the event. Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "temperature"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Parameter</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementUnit"></a>Term Name dwc:eventMeasurementUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementUnit">http://rs.tdwg.org/dwc/terms/eventMeasurementUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Measurement Unit</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementUnit">http://rs.tdwg.org/dwc/terms/measurementUnit</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The units for the value of the measurement or characteristic of the event. Recommended best practice is to use International System of Units (SI) units.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "C"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UnitOfMeasurement</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementValue"></a>Term Name dwc:eventMeasurementValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementValue">http://rs.tdwg.org/dwc/terms/eventMeasurementValue</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Measurement Value</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementValue">http://rs.tdwg.org/dwc/terms/measurementValue</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The value of the measurement or characteristic of the event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "22"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/UpperValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventRemarks"></a>Term Name dwc:eventRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventRemarks">http://rs.tdwg.org/dwc/terms/eventRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventRemarks-2023-06-28">http://rs.tdwg.org/dwc/terms/version/eventRemarks-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the dwc:Event.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>After the recent rains the river is nearly at flood stage.</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Notes</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventTime"></a>Term Name dwc:eventTime</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventTime">http://rs.tdwg.org/dwc/terms/eventTime</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventTime-2023-06-28">http://rs.tdwg.org/dwc/terms/version/eventTime-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Time</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The time or interval during which a dwc:Event occurred.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a time of day that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>14:07-0600</code> (2:07pm in the time zone six hours earlier than UTC)</li>
  <li class="list-group-item"><code>08:40:21Z</code> (8:40:21am UTC)</li>
  <li class="list-group-item"><code>13:00:00Z/15:30:00Z</code> (the interval between 1pm UTC and 3:30pm UTC)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>accessible from DataSets/DataSet/Units/Unit/Gathering/ISODateTimeBegin and DataSets/DataSet/Units/Unit/Gathering/ISODateTimeEnd</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventType"></a>Term Name dwc:eventType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventType">http://rs.tdwg.org/dwc/terms/eventType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventType-2023-06-28">http://rs.tdwg.org/dwc/terms/version/eventType-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature of the dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Regardless of the dwc:eventType, the interval of the dwc:Event can be captured in dwc:eventDate. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Sample</code></li>
  <li class="list-group-item"><code>Observation</code></li>
  <li class="list-group-item"><code>Site Visit</code></li>
  <li class="list-group-item"><code>Biotic Interaction</code></li>
  <li class="list-group-item"><code>Bioblitz</code></li>
  <li class="list-group-item"><code>Expedition</code></li>
  <li class="list-group-item"><code>Survey</code></li>
  <li class="list-group-item"><code>Project</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_eventType"></a>Term Name dwciri:eventType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/eventType">http://rs.tdwg.org/dwc/iri/eventType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/eventType-2023-06-28">http://rs.tdwg.org/dwc/iri/version/eventType-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Type (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature of the dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Regardless of the dwc:eventType, the interval of the dwc:Event can be captured in dwc:eventDate. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_family"></a>Term Name dwc:family</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/family">http://rs.tdwg.org/dwc/terms/family</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/family-2023-06-28">http://rs.tdwg.org/dwc/terms/version/family-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Family</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the family in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Felidae</code></li>
  <li class="list-group-item"><code>Monocleaceae</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/HigherTaxa/HigherTaxon/HigherTaxonName with HigherTaxa/HigherTaxon/HigherTaxonRank = familia</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_fieldNotes"></a>Term Name dwciri:fieldNotes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/fieldNotes">http://rs.tdwg.org/dwc/iri/fieldNotes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/fieldNotes-2023-06-28">http://rs.tdwg.org/dwc/iri/version/fieldNotes-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Field Notes (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The subject is a dwc:Event instance and the object is a (possibly IRI-identified) resource that is the field notes.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_fieldNotes"></a>Term Name dwc:fieldNotes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/fieldNotes">http://rs.tdwg.org/dwc/terms/fieldNotes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/fieldNotes-2023-06-28">http://rs.tdwg.org/dwc/terms/version/fieldNotes-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Field Notes</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Notes available in the Grinnell-Miller Library.</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/FieldNotes</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_fieldNumber"></a>Term Name dwciri:fieldNumber</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/fieldNumber">http://rs.tdwg.org/dwc/iri/fieldNumber</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/fieldNumber-2023-06-28">http://rs.tdwg.org/dwc/iri/version/fieldNumber-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Field Number (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier given to the event in the field. Often serves as a link between field notes and the dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The subject is a (possibly IRI-identified) resource that is the field notes and the object is a dwc:Event instance.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_fieldNumber"></a>Term Name dwc:fieldNumber</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/fieldNumber">http://rs.tdwg.org/dwc/terms/fieldNumber</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/fieldNumber-2023-06-28">http://rs.tdwg.org/dwc/terms/version/fieldNumber-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Field Number</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier given to the dwc:Event in the field. Often serves as a link between field notes and the dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>RV Sol 87-03-08</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Code</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_footprintSpatialFit"></a>Term Name dwc:footprintSpatialFit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/footprintSpatialFit">http://rs.tdwg.org/dwc/terms/footprintSpatialFit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/footprintSpatialFit-2023-06-28">http://rs.tdwg.org/dwc/terms/version/footprintSpatialFit-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint Spatial Fit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ratio of the area of the dwc:footprintWKT to the area of the true (original, or most specific) spatial representation of the dcterms:Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given dwc:footprintWKT does not completely contain the original representation. The dwc:footprintSpatialFit is undefined (and should be left empty) if the original representation is any geometry without area (e.g., a point or polyline) and without uncertainty and the given georeference is not that same geometry (without uncertainty). If both the original and the given georeference are the same point, the dwc:footprintSpatialFit is 1.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (<a href="https://doi.org/10.15468/doc-gg7h-s853">https://doi.org/10.15468/doc-gg7h-s853</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>0</code></li>
  <li class="list-group-item"><code>1</code></li>
  <li class="list-group-item"><code>1.5708</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/FootprintSpatialFit</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_footprintSRS"></a>Term Name dwciri:footprintSRS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/footprintSRS">http://rs.tdwg.org/dwc/iri/footprintSRS</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/footprintSRS-2023-06-28">http://rs.tdwg.org/dwc/iri/version/footprintSRS-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint SRS (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geometry given in dwc:footprintWKT is based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_footprintSRS"></a>Term Name dwc:footprintSRS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/footprintSRS">http://rs.tdwg.org/dwc/terms/footprintSRS</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/footprintSRS-2023-06-28">http://rs.tdwg.org/dwc/terms/version/footprintSRS-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint SRS</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geometry given in dwc:footprintWKT is based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>. It is also permitted to provide the SRS in Well-Known-Text, especially if no EPSG code provides the necessary values for the attributes of the SRS. Do not use this term to describe the SRS of the dwc:decimalLatitude and dwc:decimalLongitude, nor of any verbatim coordinates - use the dwc:geodeticDatum and dwc:verbatimSRS instead. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>epsg:4326</code></li>
  <li class="list-group-item"><code>GEOGCS["GCS_WGS_1984", DATUM["D_WGS_1984", SPHEROID["WGS_1984",6378137,298.257223563]], PRIMEM["Greenwich",0], UNIT["Degree",0.0174532925199433]]</code> (WKT for the standard WGS84 Spatial Reference System EPSG:4326)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_footprintWKT"></a>Term Name dwciri:footprintWKT</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/footprintWKT">http://rs.tdwg.org/dwc/iri/footprintWKT</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/footprintWKT-2023-06-28">http://rs.tdwg.org/dwc/iri/version/footprintWKT-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint WKT (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines the dcterms:Location. A dcterms:Location may have both a point-radius representation (see dwc:decimalLatitude) and a footprint representation, and they may differ from each other.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_footprintWKT"></a>Term Name dwc:footprintWKT</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/footprintWKT">http://rs.tdwg.org/dwc/terms/footprintWKT</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/footprintWKT-2023-06-28">http://rs.tdwg.org/dwc/terms/version/footprintWKT-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint WKT</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines the dcterms:Location. A dcterms:Location may have both a point-radius representation (see dwc:decimalLatitude) and a footprint representation, and they may differ from each other.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>POLYGON ((10 20, 11 20, 11 21, 10 21, 10 20))</code> (the one-degree bounding box with opposite corners at longitude=10, latitude=20 and longitude=11, latitude=21)</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/FootprintWKT (ABCD v2.06b)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_formation"></a>Term Name dwc:formation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/formation">http://rs.tdwg.org/dwc/terms/formation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/formation-2023-09-13">http://rs.tdwg.org/dwc/terms/version/formation-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Formation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the lithostratigraphic formation from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Notch Peak Formation</code></li>
  <li class="list-group-item"><code>House Limestone</code></li>
  <li class="list-group-item"><code>Fillmore Formation</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_FossilSpecimen"></a>Term Name dwc:FossilSpecimen</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/FossilSpecimen">http://rs.tdwg.org/dwc/terms/FossilSpecimen</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/FossilSpecimen-2023-09-18">http://rs.tdwg.org/dwc/terms/version/FossilSpecimen-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Fossil Specimen</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A preserved specimen that is a fossil.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>a body fossil</code></li>
  <li class="list-group-item"><code>a coprolite</code></li>
  <li class="list-group-item"><code>a gastrolith</code></li>
  <li class="list-group-item"><code>an ichnofossil</code></li>
  <li class="list-group-item"><code>a piece of a petrified tree</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>RecordBasisEnum/FossileSpecimen</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_fromLithostratigraphicUnit"></a>Term Name dwciri:fromLithostratigraphicUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/fromLithostratigraphicUnit">http://rs.tdwg.org/dwc/iri/fromLithostratigraphicUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/fromLithostratigraphicUnit-2015-03-27">http://rs.tdwg.org/dwc/iri/version/fromLithostratigraphicUnit-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>From Lithostratigraphic Unit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Use to link a dwc:GeologicalContext instance to an IRI-identified lithostratigraphic unit at the lowest possible level in a hierarchy.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.7 of the Darwin Core RDF Guide for details.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_Generalizations"></a>Term Name dwc:Generalizations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Generalizations">http://rs.tdwg.org/dwc/terms/Generalizations</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Generalizations</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_dataGeneralizations">http://rs.tdwg.org/dwc/terms/dataGeneralizations</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Actions taken to make the data as shared less specific or complete than in its original form. Suggests that alternative data of highly quality may be available on request.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: "Coordinates generalized from original GPS coordinates to the nearest half degree grid cell", "locality information given only to nearest county".</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_genericName"></a>Term Name dwc:genericName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/genericName">http://rs.tdwg.org/dwc/terms/genericName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/genericName-2023-06-28">http://rs.tdwg.org/dwc/terms/version/genericName-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Generic Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The genus part of the dwc:scientificName without authorship.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>For synonyms the accepted genus and the genus part of the name may be different. The term dwc:genericName should be used together with dwc:specificEpithet to form a binomial and with dwc:infraspecificEpithet to form a trinomial. The term dwc:genericName should only be used for combinations. Uninomials of generic rank do not have a dwc:genericName.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Felis</code> (for scientificName <code>Felis concolor</code>, with accompanying values of <code>Puma concolor</code> in acceptedNameUsage and <code>Puma</code> in genus)</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_genus"></a>Term Name dwc:genus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/genus">http://rs.tdwg.org/dwc/terms/genus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/genus-2023-06-28">http://rs.tdwg.org/dwc/terms/version/genus-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Genus</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the genus in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Puma</code></li>
  <li class="list-group-item"><code>Monoclea</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>{DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Bacterial/GenusOrMonomial or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/GenusOrMonomial or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Viral/GenusOrMonomial or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Zoological/GenusOrMonomial}</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_geodeticDatum"></a>Term Name dwciri:geodeticDatum</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/geodeticDatum">http://rs.tdwg.org/dwc/iri/geodeticDatum</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/geodeticDatum-2023-06-28">http://rs.tdwg.org/dwc/iri/version/geodeticDatum-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Geodetic Datum (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in dwc:decimalLatitude and dwc:decimalLongitude is based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI for the EPSG code of the SRS, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="https://epsg.io/4326">https://epsg.io/4326</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_geodeticDatum"></a>Term Name dwc:geodeticDatum</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/geodeticDatum">http://rs.tdwg.org/dwc/terms/geodeticDatum</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/geodeticDatum-2023-06-28">http://rs.tdwg.org/dwc/terms/version/geodeticDatum-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Geodetic Datum</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in dwc:decimalLatitude and dwc:decimalLongitude are based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>EPSG:4326</code></li>
  <li class="list-group-item"><code>WGS84</code></li>
  <li class="list-group-item"><code>NAD27</code></li>
  <li class="list-group-item"><code>Campo Inchauspe</code></li>
  <li class="list-group-item"><code>European 1950</code></li>
  <li class="list-group-item"><code>Clarke 1866</code></li>
  <li class="list-group-item"><code>unknown</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLon/SpatialDatum</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_GeologicalContext"></a>Term Name dwc:GeologicalContext</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/GeologicalContext">http://rs.tdwg.org/dwc/terms/GeologicalContext</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/GeologicalContext-2023-09-18">http://rs.tdwg.org/dwc/terms/version/GeologicalContext-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Geological Context</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Geological information, such as stratigraphy, that qualifies a region or place.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>a lithostratigraphic layer</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Stratigraphy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_geologicalContextID"></a>Term Name dwc:geologicalContextID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/geologicalContextID">http://rs.tdwg.org/dwc/terms/geologicalContextID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/geologicalContextID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/geologicalContextID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Geological Context ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the set of information associated with a dwc:GeologicalContext (the location within a geological context, such as stratigraphy). May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9">https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_georeferencedBy"></a>Term Name dwc:georeferencedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferencedBy">http://rs.tdwg.org/dwc/terms/georeferencedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferencedBy-2023-06-28">http://rs.tdwg.org/dwc/terms/version/georeferencedBy-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeferenced By</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of names of people, groups, or organizations who determined the georeference (spatial representation) for the dcterms:Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Brad Millen (ROM)</code></li>
  <li class="list-group-item"><code>Kristina Yamamoto | Janet Fang</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_georeferencedBy"></a>Term Name dwciri:georeferencedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/georeferencedBy">http://rs.tdwg.org/dwc/iri/georeferencedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/georeferencedBy-2023-06-28">http://rs.tdwg.org/dwc/iri/version/georeferencedBy-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeferenced By (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A person, group, or organization who determined the georeference (spatial representation) for the dcterms:Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_georeferencedDate"></a>Term Name dwc:georeferencedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferencedDate">http://rs.tdwg.org/dwc/terms/georeferencedDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferencedDate-2023-06-28">http://rs.tdwg.org/dwc/terms/version/georeferencedDate-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeferenced Date</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the dcterms:Location was georeferenced.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li>
  <li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li>
  <li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li>
  <li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li>
  <li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li>
  <li class="list-group-item"><code>1971</code> (some time in the year 1971)</li>
  <li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li>
  <li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li>
  <li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2011-10-16_9">http://rs.tdwg.org/decisions/decision-2011-10-16_9</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_georeferenceProtocol"></a>Term Name dwciri:georeferenceProtocol</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/georeferenceProtocol">http://rs.tdwg.org/dwc/iri/georeferenceProtocol</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/georeferenceProtocol-2015-03-27">http://rs.tdwg.org/dwc/iri/version/georeferenceProtocol-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Protocol (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A description or reference to the methods used to determine the spatial footprint, coordinates, and uncertainties.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_georeferenceProtocol"></a>Term Name dwc:georeferenceProtocol</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferenceProtocol">http://rs.tdwg.org/dwc/terms/georeferenceProtocol</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferenceProtocol-2023-06-28">http://rs.tdwg.org/dwc/terms/version/georeferenceProtocol-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Protocol</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A description or reference to the methods used to determine the spatial footprint, coordinates, and uncertainties.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Georeferencing Quick Reference Guide (Zermoglio et al. 2020, <a href="https://doi.org/10.35035/e09p-h128">https://doi.org/10.35035/e09p-h128</a>)</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinateMethod</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_georeferenceRemarks"></a>Term Name dwc:georeferenceRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferenceRemarks">http://rs.tdwg.org/dwc/terms/georeferenceRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferenceRemarks-2023-06-28">http://rs.tdwg.org/dwc/terms/version/georeferenceRemarks-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Notes or comments about the spatial description determination, explaining assumptions made in addition or opposition to the those formalized in the method referred to in dwc:georeferenceProtocol.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Assumed distance by road (Hwy. 101)</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/GeoreferenceRemarks</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_georeferenceSources"></a>Term Name dwciri:georeferenceSources</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/georeferenceSources">http://rs.tdwg.org/dwc/iri/georeferenceSources</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/georeferenceSources-2023-06-28">http://rs.tdwg.org/dwc/iri/version/georeferenceSources-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Sources (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A map, gazetteer, or other resource used to georeference the dcterms:Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_georeferenceSources"></a>Term Name dwc:georeferenceSources</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferenceSources">http://rs.tdwg.org/dwc/terms/georeferenceSources</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferenceSources-2023-06-28">http://rs.tdwg.org/dwc/terms/version/georeferenceSources-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Sources</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of maps, gazetteers, or other resources used to georeference the dcterms:Location, described specifically enough to allow anyone in the future to use the same resources.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="https://www.geonames.org/">https://www.geonames.org/</a></code></li>
  <li class="list-group-item"><code>USGS 1:24000 Florence Montana Quad 1967 | Terrametrics 2008 on Google Earth</code></li>
  <li class="list-group-item"><code>GeoLocate</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/GeoreferenceSources</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_georeferenceVerificationStatus"></a>Term Name dwciri:georeferenceVerificationStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/georeferenceVerificationStatus">http://rs.tdwg.org/dwc/iri/georeferenceVerificationStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/georeferenceVerificationStatus-2023-06-28">http://rs.tdwg.org/dwc/iri/version/georeferenceVerificationStatus-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Verification Status (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description for the dcterms:Location of the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_georeferenceVerificationStatus"></a>Term Name dwc:georeferenceVerificationStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferenceVerificationStatus">http://rs.tdwg.org/dwc/terms/georeferenceVerificationStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferenceVerificationStatus-2023-06-28">http://rs.tdwg.org/dwc/terms/version/georeferenceVerificationStatus-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Verification Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description for the dcterms:Location of the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>unable to georeference</code></li>
  <li class="list-group-item"><code>requires georeference</code></li>
  <li class="list-group-item"><code>requires verification</code></li>
  <li class="list-group-item"><code>verified by data custodian</code></li>
  <li class="list-group-item"><code>verified by contributor</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/GeoreferenceVerificationStatus</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_group"></a>Term Name dwc:group</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/group">http://rs.tdwg.org/dwc/terms/group</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/group-2023-09-13">http://rs.tdwg.org/dwc/terms/version/group-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Group</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the lithostratigraphic group from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Bathurst</code></li>
  <li class="list-group-item"><code>Lower Wealden</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_habitat"></a>Term Name dwciri:habitat</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/habitat">http://rs.tdwg.org/dwc/iri/habitat</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/habitat-2023-06-28">http://rs.tdwg.org/dwc/iri/version/habitat-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Habitat (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A category or description of the habitat in which the dwc:Event occurred.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_habitat"></a>Term Name dwc:habitat</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/habitat">http://rs.tdwg.org/dwc/terms/habitat</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/habitat-2023-06-28">http://rs.tdwg.org/dwc/terms/version/habitat-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Habitat</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A category or description of the habitat in which the dwc:Event occurred.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>oak savanna</code></li>
  <li class="list-group-item"><code>pre-cordilleran steppe</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Biotope/Text</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_higherClassification"></a>Term Name dwc:higherClassification</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherClassification">http://rs.tdwg.org/dwc/terms/higherClassification</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/higherClassification-2023-06-28">http://rs.tdwg.org/dwc/terms/version/higherClassification-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Classification</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of taxa names terminating at the rank immediately superior to the referenced dwc:Taxon.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>), with terms in order from the highest taxonomic rank to the lowest.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Plantae | Tracheophyta | Magnoliopsida | Ranunculales | Ranunculaceae | Ranunculus</code></li>
  <li class="list-group-item"><code>Animalia</code></li>
  <li class="list-group-item"><code>Animalia | Chordata | Vertebrata | Mammalia | Theria | Eutheria | Rodentia | Hystricognatha | Hystricognathi | Ctenomyidae | Ctenomyini | Ctenomys</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_higherGeography"></a>Term Name dwc:higherGeography</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherGeography">http://rs.tdwg.org/dwc/terms/higherGeography</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/higherGeography-2023-06-28">http://rs.tdwg.org/dwc/terms/version/higherGeography-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Geography</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of geographic names less specific than the information captured in the dwc:locality term.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>), with terms in order from least specific to most specific.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>North Atlantic Ocean</code></li>
  <li class="list-group-item"><code>South America | Argentina | Patagonia | Parque Nacional Nahuel Huapi | Neuquén | Los Lagos</code> with accompanying values <code>South America</code> (continent) <code>Argentina</code> (country), <code>Neuquén</code> (first order division), and <code>Los Lagos</code> (second order division)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>{DataSets/DataSet/Units/Unit/Gathering/LocalityText or DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName}</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_higherGeographyID"></a>Term Name dwc:higherGeographyID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherGeographyID">http://rs.tdwg.org/dwc/terms/higherGeographyID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/higherGeographyID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/higherGeographyID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Geography ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the geographic region within which the dcterms:Location occurred.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a persistent identifier from a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="http://vocab.getty.edu/tgn/1002002">http://vocab.getty.edu/tgn/1002002</a></code> (Antártida e Islas del Atlántico Sur, Territorio Nacional de la Tierra del Fuego, Argentina).</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_HigherTaxon"></a>Term Name dwc:HigherTaxon</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/HigherTaxon">http://rs.tdwg.org/dwc/terms/HigherTaxon</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-08-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Taxon</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of the names for the taxonomic ranks less specific than the ScientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Animalia, Chordata, Vertebrata, Mammalia, Theria, Eutheria, Rodentia, Hystricognatha, Hystricognathi, Ctenomyidae, Ctenomyini, Ctenomys".</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/HigherTaxa/HigherTaxon/HigherTaxonName</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_higherTaxonconceptID"></a>Term Name dwc:higherTaxonconceptID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherTaxonconceptID">http://rs.tdwg.org/dwc/terms/higherTaxonconceptID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-08-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Taxon Concept ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A unique identifier for the taxon concept less specific than that given in the taxonConceptID.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_HigherTaxonID"></a>Term Name dwc:HigherTaxonID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/HigherTaxonID">http://rs.tdwg.org/dwc/terms/HigherTaxonID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-08-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Taxon ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_higherTaxonNameID">http://rs.tdwg.org/dwc/terms/higherTaxonNameID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A global unique identifier for the parent to the taxon.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_higherTaxonName"></a>Term Name dwc:higherTaxonName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherTaxonName">http://rs.tdwg.org/dwc/terms/higherTaxonName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-08-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Taxon Name</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_higherClassification">http://rs.tdwg.org/dwc/terms/higherClassification</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of the names for the taxonomic ranks less specific than that given in the scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Animalia; Chordata; Vertebrata; Mammalia; Theria; Eutheria; Rodentia; Hystricognatha; Hystricognathi; Ctenomyidae; Ctenomyini; Ctenomys"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/HigherTaxa/HigherTaxon/HigherTaxonName</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_higherTaxonNameID"></a>Term Name dwc:higherTaxonNameID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherTaxonNameID">http://rs.tdwg.org/dwc/terms/higherTaxonNameID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-08-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Taxon Name ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_parentNameUsageID">http://rs.tdwg.org/dwc/terms/parentNameUsageID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A unique identifier for the name of the next higher rank than the scientificName in a taxonomic classification. See higherTaxonName.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_highestBiostratigraphicZone"></a>Term Name dwc:highestBiostratigraphicZone</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/highestBiostratigraphicZone">http://rs.tdwg.org/dwc/terms/highestBiostratigraphicZone</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/highestBiostratigraphicZone-2023-09-13">http://rs.tdwg.org/dwc/terms/version/highestBiostratigraphicZone-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Highest Biostratigraphic Zone</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the highest possible geological biostratigraphic zone of the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Blancan</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_HumanObservation"></a>Term Name dwc:HumanObservation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/HumanObservation">http://rs.tdwg.org/dwc/terms/HumanObservation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/HumanObservation-2023-09-18">http://rs.tdwg.org/dwc/terms/version/HumanObservation-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Human Observation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An output of a human observation process.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>evidence of a dwc:Occurrence taken from field notes or literature</code></li>
  <li class="list-group-item"><code>a record of a dwc:Occurrence without physical evidence or evidence captured with a machine</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>RecordBasisEnum/HumanObservation</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_Identification"></a>Term Name dwc:Identification</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Identification">http://rs.tdwg.org/dwc/terms/Identification</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/Identification-2023-09-18">http://rs.tdwg.org/dwc/terms/version/Identification-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A taxonomic determination (e.g., the assignment to a dwc:Taxon).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>a subspecies determination of an organism</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_identificationAttributes"></a>Term Name dwc:identificationAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationAttributes">http://rs.tdwg.org/dwc/terms/identificationAttributes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification Attributes</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of additional measurements, facts, characteristics, or assertions about the Identification.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "natureOfID=expert identification; identificationEvidence=cytochrome B sequence"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_identificationID"></a>Term Name dwc:identificationID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationID">http://rs.tdwg.org/dwc/terms/identificationID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identificationID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/identificationID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the dwc:Identification (the body of information associated with the assignment of a scientific name). May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>9992</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_identificationQualifier"></a>Term Name dwc:identificationQualifier</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationQualifier">http://rs.tdwg.org/dwc/terms/identificationQualifier</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identificationQualifier-2023-06-28">http://rs.tdwg.org/dwc/terms/version/identificationQualifier-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification Qualifier</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A brief phrase or a standard term ("cf.", "aff.") to express the determiner's doubts about the dwc:Identification.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>aff. agrifolia var. oxyadenia</code> (for <code>Quercus aff. agrifolia var. oxyadenia</code> with accompanying values <code>Quercus</code> in genus, <code>agrifolia</code>  in specificEpithet, <code>oxyadenia</code>  in infraspecificEpithet, and <code>var.</code> in taxonRank)</li>
  <li class="list-group-item"><code>cf. var. oxyadenia</code> (for <code>Quercus agrifolia cf. var. oxyadenia</code> with accompanying values <code>Quercus</code> in genus, <code>agrifolia</code> in specificEpithet, <code>oxyadenia</code> in infraspecificEpithet, and <code>var.</code> in taxonRank)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/IdentificationQualifier</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_identificationQualifier"></a>Term Name dwciri:identificationQualifier</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/identificationQualifier">http://rs.tdwg.org/dwc/iri/identificationQualifier</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/identificationQualifier-2023-06-28">http://rs.tdwg.org/dwc/iri/version/identificationQualifier-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification Qualifier (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A controlled value to express the determiner's doubts about the dwc:Identification.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_identificationReferences"></a>Term Name dwc:identificationReferences</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationReferences">http://rs.tdwg.org/dwc/terms/identificationReferences</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identificationReferences-2023-06-28">http://rs.tdwg.org/dwc/terms/version/identificationReferences-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification References</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of references (publication, global unique identifier, URI) used in the dwc:Identification.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Aves del Noroeste Patagonico. Christie et al. 2004.</code></li>
  <li class="list-group-item"><code>Stebbins, R. Field Guide to Western Reptiles and Amphibians. 3rd Edition. 2003. | Irschick, D.J. and Shaffer, H.B. (1997). The polytypic species revisited: Morphological differentiation among tiger salamanders (Ambystoma tigrinum) (Amphibia: Caudata). Herpetologica, 53(1), 30-49.</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/References</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_identificationRemarks"></a>Term Name dwc:identificationRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationRemarks">http://rs.tdwg.org/dwc/terms/identificationRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identificationRemarks-2023-06-28">http://rs.tdwg.org/dwc/terms/version/identificationRemarks-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the dwc:Identification.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Distinguished between Anthus correndera and Anthus hellmayri based on the comparative lengths of the uñas.</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/Notes</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_identificationVerificationStatus"></a>Term Name dwciri:identificationVerificationStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/identificationVerificationStatus">http://rs.tdwg.org/dwc/iri/identificationVerificationStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/identificationVerificationStatus-2015-03-27">http://rs.tdwg.org/dwc/iri/version/identificationVerificationStatus-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification Verification Status (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A categorical indicator of the extent to which the taxonomic identification has been verified to be correct.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects. Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_identificationVerificationStatus"></a>Term Name dwc:identificationVerificationStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationVerificationStatus">http://rs.tdwg.org/dwc/terms/identificationVerificationStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identificationVerificationStatus-2023-06-28">http://rs.tdwg.org/dwc/terms/version/identificationVerificationStatus-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification Verification Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A categorical indicator of the extent to which the taxonomic identification has been verified to be correct.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>0</code> ("unverified" in HISPID/ABCD).</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2011-10-16_10">http://rs.tdwg.org/decisions/decision-2011-10-16_10</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_identifiedBy"></a>Term Name dwciri:identifiedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/identifiedBy">http://rs.tdwg.org/dwc/iri/identifiedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/identifiedBy-2023-06-28">http://rs.tdwg.org/dwc/iri/version/identifiedBy-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identified By (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A person, group, or organization who assigned the dwc:Taxon to the subject.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_identifiedBy"></a>Term Name dwc:identifiedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identifiedBy">http://rs.tdwg.org/dwc/terms/identifiedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identifiedBy-2023-06-28">http://rs.tdwg.org/dwc/terms/version/identifiedBy-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identified By</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of names of people, groups, or organizations who assigned the dwc:Taxon to the subject.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>James L. Patton</code></li>
  <li class="list-group-item"><code>Theodore Pappenfuss | Robert Macey</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/Identifiers/IdentifiersText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_identifiedByID"></a>Term Name dwc:identifiedByID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identifiedByID">http://rs.tdwg.org/dwc/terms/identifiedByID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identifiedByID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/identifiedByID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identified By ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of the globally unique identifier for the person, people, groups, or organizations responsible for assigning the dwc:Taxon to the subject.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to provide a single identifier that disambiguates the details of the identifying agent. If a list is used, the order of the identifiers on the list should not be assumed to convey any semantics. Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a></code> (for an individual)</li>
  <li class="list-group-item"><code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a> | <a href="https://orcid.org/0000-0002-1825-0098">https://orcid.org/0000-0002-1825-0098</a></code> (for a list of people)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_inCollection"></a>Term Name dwciri:inCollection</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/inCollection">http://rs.tdwg.org/dwc/iri/inCollection</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/inCollection-2015-03-27">http://rs.tdwg.org/dwc/iri/version/inCollection-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>In Collection</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Use to link any subject resource that is part of a collection to the collection containing the resource.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI from a controlled registry. A "convenience property" that replaces literal-value terms related to collections and institutions. See Section 2.7.3 of the Darwin Core RDF Guide for details.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_inDataset"></a>Term Name dwciri:inDataset</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/inDataset">http://rs.tdwg.org/dwc/iri/inDataset</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/inDataset-2015-03-27">http://rs.tdwg.org/dwc/iri/version/inDataset-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>In Dataset</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Use to link a subject dataset record to the dataset which contains it.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A string literal name of the dataset can be provided using the term dwc:datasetName. See the Darwin Core RDF Guide for details.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_inDescribedPlace"></a>Term Name dwciri:inDescribedPlace</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/inDescribedPlace">http://rs.tdwg.org/dwc/iri/inDescribedPlace</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/inDescribedPlace-2015-03-27">http://rs.tdwg.org/dwc/iri/version/inDescribedPlace-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>In Described Place</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Use to link a dcterms:Location instance subject to the lowest level standardized hierarchically-described resource.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI from a controlled registry. A "convenience property" that replaces Darwin Core literal-value terms related to locations. See Section 2.7.5 of the Darwin Core RDF Guide for details.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="http://vocab.getty.edu/tgn/1019987">http://vocab.getty.edu/tgn/1019987</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_individualCount"></a>Term Name dwc:individualCount</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/individualCount">http://rs.tdwg.org/dwc/terms/individualCount</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/individualCount-2023-06-28">http://rs.tdwg.org/dwc/terms/version/individualCount-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Individual Count</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The number of individuals present at the time of the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>0</code></li>
  <li class="list-group-item"><code>1</code></li>
  <li class="list-group-item"><code>25</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/LowerValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_individualID"></a>Term Name dwc:individualID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/individualID">http://rs.tdwg.org/dwc/terms/individualID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2014-10-23</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Individual ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_organismID">http://rs.tdwg.org/dwc/terms/organismID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for an individual or named group of individual organisms represented in the Occurrence. Meant to accommodate resampling of the same individual or group for monitoring purposes. May be a global unique identifier or an identifier specific to a data set.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: "U.amer. 44", "Smedley", "Orca J 23"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/Result/TaxonIdentified/ScientificName/NameAtomised/Zoological/NamedIndividual or DataSets/DataSet/Units/Unit/ObservationUnit/ObservationUnitIdentifiers/ObservationUnitIdentifier or DataSets/DataSet/Units/Unit/SpecimenUnit/Accessions/AccessionNumber</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_14">http://rs.tdwg.org/decisions/decision-2014-10-26_14</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_informationWithheld"></a>Term Name dwciri:informationWithheld</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/informationWithheld">http://rs.tdwg.org/dwc/iri/informationWithheld</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/informationWithheld-2015-03-27">http://rs.tdwg.org/dwc/iri/version/informationWithheld-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Information Withheld (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Additional information that exists, but that has not been shared in the given record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_informationWithheld"></a>Term Name dwc:informationWithheld</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/informationWithheld">http://rs.tdwg.org/dwc/terms/informationWithheld</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/informationWithheld-2023-06-28">http://rs.tdwg.org/dwc/terms/version/informationWithheld-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Information Withheld</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Additional information that exists, but that has not been shared in the given record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>location information not given for endangered species</code></li>
  <li class="list-group-item"><code>collector identities withheld | ask about tissue samples</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/InformationWithheld</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_infragenericEpithet"></a>Term Name dwc:infragenericEpithet</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/infragenericEpithet">http://rs.tdwg.org/dwc/terms/infragenericEpithet</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/infragenericEpithet-2023-06-28">http://rs.tdwg.org/dwc/terms/version/infragenericEpithet-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Infrageneric Epithet</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The infrageneric part of a binomial name at ranks above species but below genus.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The term dwc:infragenericEpithet should be used in conjunction with dwc:genericName, dwc:specificEpithet, dwc:infraspecificEpithet, dwc:taxonRank and dwc:scientificNameAuthorship to represent the individual elements of the complete dwc:scientificName. It can be used to indicate the subgenus placement of a species, which in zoology is often given in parentheses. Can also be used to share infrageneric names such as botanical sections (e.g., <code>Vicia sect. Cracca</code>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Abacetillus</code> (for scientificName <code>Abacetus (Abacetillus) ambiguus</code>)</li>
  <li class="list-group-item"><code>Cracca</code> (for scientificName <code>Vicia sect. Cracca</code>)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/Result/TaxonIdentified/ScientificName/NameAtomised/Bacterial/Subgenus (for bacterial names) or  DataSets/DataSet/Units/Unit/Identifications/Identification/Result/TaxonIdentified/ScientificName/NameAtomised/Zoological/Subgenus (for zoological names) or DataSets/DataSet/Units/Unit/Identifications/Identification/Result/TaxonIdentified/ScientificName/NameAtomised/Botanical/FirstEpithet (for botanical names)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_infraspecificEpithet"></a>Term Name dwc:infraspecificEpithet</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/infraspecificEpithet">http://rs.tdwg.org/dwc/terms/infraspecificEpithet</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/infraspecificEpithet-2023-06-28">http://rs.tdwg.org/dwc/terms/version/infraspecificEpithet-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Infraspecific Epithet</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the lowest or terminal infraspecific epithet of the dwc:scientificName, excluding any rank designation.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>In botany, name strings in literature and identifications may have multiple infraspecific ranks. According to the International Code of Nomenclature for algae, fungi, and plants (Schenzhen Code Articles 6.7 & Art. 24.1), valid names only have two epithets, with the lowest rank being the dwc:infraspecificEpithet. For example: the dwc:infraspecificEpithet in the string <code>Indigofera charlieriana subsp. sessilis var. scaberrima</code> is <code>scaberrima</code> and the dwc:scientificName is <code>Indigofera charlieriana var. scaberrima (Schinz) J.B.Gillett</code>. Use dwc:verbatimIdentification for the full name string used in a dwc:Identification.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>concolor</code> (for scientificName <code>Puma concolor concolor (Linnaeus, 1771)</code>)</li>
  <li class="list-group-item"><code>oxyadenia</code> (for scientificName <code>Quercus agrifolia var. oxyadenia (Torr.) J.T. Howell</code>)</li>
  <li class="list-group-item"><code>laxa</code> (for scientificName <code>Cheilanthes hirta f. laxa (Kunze) W.Jacobsen & N.Jacobsen</code>)</li>
  <li class="list-group-item"><code>scaberrima</code> (for scientificName <code>Indigofera charlieriana var. scaberrima (Schinz) J.B.Gillett</code>)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Bacterial/SubspeciesEpithet or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/SecondEpithet or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Zoological/SubspeciesEpithet</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_institutionCode"></a>Term Name dwc:institutionCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/institutionCode">http://rs.tdwg.org/dwc/terms/institutionCode</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/institutionCode-2023-06-28">http://rs.tdwg.org/dwc/terms/version/institutionCode-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Institution Code</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name (or acronym) in use by the institution having custody of the object(s) or information referred to in the record.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>MVZ</code></li>
  <li class="list-group-item"><code>FMNH</code></li>
  <li class="list-group-item"><code>CLO</code></li>
  <li class="list-group-item"><code>UCMP</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SourceInstitutionID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_institutionID"></a>Term Name dwc:institutionID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/institutionID">http://rs.tdwg.org/dwc/terms/institutionID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/institutionID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/institutionID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Institution ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the institution having custody of the object(s) or information referred to in the record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>For physical specimens, the recommended best practice is to use a globally unique and resolvable identifier from a collections registry such as the Research Organization Registry (ROR) or the GBIF Registry of Scientific Collections (<a href="https://www.gbif.org/grscicoll">https://www.gbif.org/grscicoll</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="https://ror.org/015hz7p22">https://ror.org/015hz7p22</a></code></li>
  <li class="list-group-item"><code><a href="http://grscicoll.org/institution/museum-southwestern-biology">http://grscicoll.org/institution/museum-southwestern-biology</a></code></li>
  <li class="list-group-item"><code><a href="https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381">https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381</a></code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SourceInstitutionID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_island"></a>Term Name dwc:island</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/island">http://rs.tdwg.org/dwc/terms/island</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/island-2023-06-28">http://rs.tdwg.org/dwc/terms/version/island-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Island</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the island on or near which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Nosy Be</code></li>
  <li class="list-group-item"><code>Bikini Atoll</code></li>
  <li class="list-group-item"><code>Vancouver</code></li>
  <li class="list-group-item"><code>Viti Levu</code></li>
  <li class="list-group-item"><code>Zanzibar</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= Island</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_islandGroup"></a>Term Name dwc:islandGroup</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/islandGroup">http://rs.tdwg.org/dwc/terms/islandGroup</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/islandGroup-2023-06-28">http://rs.tdwg.org/dwc/terms/version/islandGroup-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Island Group</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the island group in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Alexander Archipelago</code></li>
  <li class="list-group-item"><code>Archipiélago Diego Ramírez</code></li>
  <li class="list-group-item"><code>Seychelles</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= Island group</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_kingdom"></a>Term Name dwc:kingdom</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/kingdom">http://rs.tdwg.org/dwc/terms/kingdom</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/kingdom-2023-06-28">http://rs.tdwg.org/dwc/terms/version/kingdom-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Kingdom</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the kingdom in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Animalia</code></li>
  <li class="list-group-item"><code>Archaea</code></li>
  <li class="list-group-item"><code>Bacteria</code></li>
  <li class="list-group-item"><code>Chromista</code></li>
  <li class="list-group-item"><code>Fungi</code></li>
  <li class="list-group-item"><code>Plantae</code></li>
  <li class="list-group-item"><code>Protozoa</code></li>
  <li class="list-group-item"><code>Viruses</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/HigherTaxa/HigherTaxon/HigherTaxonName with HigherTaxa/HigherTaxon/HigherTaxonRank = regnum</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_language"></a>Term Name dcterms:language</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/language">http://purl.org/dc/terms/language</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2008-01-14</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://dublincore.org/usage/terms/history/#languageT-001">http://dublincore.org/usage/terms/history/#languageT-001</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Language</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A language of the resource.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI from the Library of Congress ISO 639-2 scheme <a href="http://id.loc.gov/vocabulary/iso639-2">http://id.loc.gov/vocabulary/iso639-2</a></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dc_language"></a>Term Name dc:language</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/elements/1.1/language">http://purl.org/dc/elements/1.1/language</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://dublincore.org/usage/terms/history/#language-007">http://dublincore.org/usage/terms/history/#language-007</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Language</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A language of the resource.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as RFC 5646. This term has an equivalent in the dcterms: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>en</code> (for English)</li>
  <li class="list-group-item"><code>es</code> (for Spanish)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_latestAgeOrHighestStage"></a>Term Name dwc:latestAgeOrHighestStage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/latestAgeOrHighestStage">http://rs.tdwg.org/dwc/terms/latestAgeOrHighestStage</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/latestAgeOrHighestStage-2023-09-13">http://rs.tdwg.org/dwc/terms/version/latestAgeOrHighestStage-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Age Or Highest Stage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the latest possible geochronologic age or highest chronostratigraphic stage attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Atlantic</code></li>
  <li class="list-group-item"><code>Boreal</code></li>
  <li class="list-group-item"><code>Skullrockian</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_LatestDateCollected"></a>Term Name dwc:LatestDateCollected</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/LatestDateCollected">http://rs.tdwg.org/dwc/terms/LatestDateCollected</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Date Collected</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventDate">http://rs.tdwg.org/dwc/terms/eventDate</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The latest date-time in a period during which a event occurred. If the event is recorded as occurring at a single date-time, populate both EarliestDateCollected and LatestDateCollected with the same value. Recommended best practice is to use an encoding scheme, such as ISO 8601:2004(E).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Date may be used to express temporal information at any level of granularity. Recommended best practice is to use an encoding scheme, such as the W3CDTF profile of ISO 8601 [W3CDTF].</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/ISODateTimeEnd</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_latestEonOrHighestEonothem"></a>Term Name dwc:latestEonOrHighestEonothem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/latestEonOrHighestEonothem">http://rs.tdwg.org/dwc/terms/latestEonOrHighestEonothem</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/latestEonOrHighestEonothem-2023-09-13">http://rs.tdwg.org/dwc/terms/version/latestEonOrHighestEonothem-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Llatest Eon Or Highest Eonothem</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the latest possible geochronologic eon or highest chrono-stratigraphic eonothem or the informal name ("Precambrian") attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Phanerozoic</code></li>
  <li class="list-group-item"><code>Proterozoic</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_latestEpochOrHighestSeries"></a>Term Name dwc:latestEpochOrHighestSeries</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/latestEpochOrHighestSeries">http://rs.tdwg.org/dwc/terms/latestEpochOrHighestSeries</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/latestEpochOrHighestSeries-2023-09-13">http://rs.tdwg.org/dwc/terms/version/latestEpochOrHighestSeries-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Epoch Or Highest Series</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the latest possible geochronologic epoch or highest chronostratigraphic series attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Holocene</code></li>
  <li class="list-group-item"><code>Pleistocene</code></li>
  <li class="list-group-item"><code>Ibexian Series</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_latestEraOrHighestErathem"></a>Term Name dwc:latestEraOrHighestErathem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/latestEraOrHighestErathem">http://rs.tdwg.org/dwc/terms/latestEraOrHighestErathem</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/latestEraOrHighestErathem-2023-09-13">http://rs.tdwg.org/dwc/terms/version/latestEraOrHighestErathem-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Era Or Highest Erathem</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the latest possible geochronologic era or highest chronostratigraphic erathem attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Cenozoic</code></li>
  <li class="list-group-item"><code>Mesozoic</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_latestGeochronologicalEra"></a>Term Name dwciri:latestGeochronologicalEra</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/latestGeochronologicalEra">http://rs.tdwg.org/dwc/iri/latestGeochronologicalEra</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/latestGeochronologicalEra-2023-09-13">http://rs.tdwg.org/dwc/iri/version/latestGeochronologicalEra-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Geochronological Era</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Use to link a dwc:GeologicalContext instance to chronostratigraphic time periods at the lowest possible level in a standardized hierarchy. Use this property to point to the latest possible geological time period from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.6 of the Darwin Core RDF Guide for details.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_latestPeriodOrHighestSystem"></a>Term Name dwc:latestPeriodOrHighestSystem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/latestPeriodOrHighestSystem">http://rs.tdwg.org/dwc/terms/latestPeriodOrHighestSystem</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/latestPeriodOrHighestSystem-2023-09-13">http://rs.tdwg.org/dwc/terms/version/latestPeriodOrHighestSystem-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Period Or Highest System</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the latest possible geochronologic period or highest chronostratigraphic system attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Neogene</code></li>
  <li class="list-group-item"><code>Tertiary</code></li>
  <li class="list-group-item"><code>Quaternary</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_license"></a>Term Name dcterms:license</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/license">http://purl.org/dc/terms/license</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://dublincore.org/usage/terms/history/#license-002">http://dublincore.org/usage/terms/history/#license-002</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>License</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A legal document giving official permission to do something with the resource.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="http://creativecommons.org/publicdomain/zero/1.0/legalcode">http://creativecommons.org/publicdomain/zero/1.0/legalcode</a></code></li>
  <li class="list-group-item"><code><a href="http://creativecommons.org/licenses/by/4.0/legalcode">http://creativecommons.org/licenses/by/4.0/legalcode</a></code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-11-06_17">http://rs.tdwg.org/decisions/decision-2014-11-06_17</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_lifeStage"></a>Term Name dwc:lifeStage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/lifeStage">http://rs.tdwg.org/dwc/terms/lifeStage</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/lifeStage-2023-06-28">http://rs.tdwg.org/dwc/terms/version/lifeStage-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Life Stage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The age class or life stage of the dwc:Organism(s) at the time the dwc:Occurrence was recorded.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>zygote</code></li>
  <li class="list-group-item"><code>larva</code></li>
  <li class="list-group-item"><code>juvenile</code></li>
  <li class="list-group-item"><code>adult</code></li>
  <li class="list-group-item"><code>seedling</code></li>
  <li class="list-group-item"><code>flowering</code></li>
  <li class="list-group-item"><code>fruiting</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MycologicalUnit/MycologicalSexualStage or DataSets/DataSet/Units/Unit/MycologicalUnit/MycologicalLiveStages/MycologicalLiveStage or DataSets/DataSet/Units/Unit/ZoologicalUnit/PhasesOrStages/PhaseOrStage</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_lifeStage"></a>Term Name dwciri:lifeStage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/lifeStage">http://rs.tdwg.org/dwc/iri/lifeStage</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/lifeStage-2023-06-28">http://rs.tdwg.org/dwc/iri/version/lifeStage-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Life Stage (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The age class or life stage of the dwc:Organism(s) at the time the dwc:Occurrence was recorded.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_lithostratigraphicTerms"></a>Term Name dwc:lithostratigraphicTerms</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms">http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/lithostratigraphicTerms-2023-09-13">http://rs.tdwg.org/dwc/terms/version/lithostratigraphicTerms-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Lithostratigraphic Terms</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The combination of all litho-stratigraphic names for the rock from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Pleistocene-Weichselien</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Stratigraphy/LithostratigraphicTerms</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_LivingSpecimen"></a>Term Name dwc:LivingSpecimen</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/LivingSpecimen">http://rs.tdwg.org/dwc/terms/LivingSpecimen</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/LivingSpecimen-2023-09-18">http://rs.tdwg.org/dwc/terms/version/LivingSpecimen-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Living Specimen</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A specimen that is alive.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>a living plant in a botanical garden</code></li>
  <li class="list-group-item"><code>a living animal in a zoo</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>RecordBasisEnum/LivingSpecimen</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_locality"></a>Term Name dwc:locality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/locality">http://rs.tdwg.org/dwc/terms/locality</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/locality-2023-06-28">http://rs.tdwg.org/dwc/terms/version/locality-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Locality</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The specific description of the place.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Less specific geographic information can be provided in other geographic terms (dwc:higherGeography, dwc:continent, dwc:country, dwc:stateProvince, dwc:county, dwc:municipality, dwc:waterBody, dwc:island, dwc:islandGroup). This term may contain information modified from the original to correct perceived errors or standardize the description.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Bariloche, 25 km NNE via Ruta Nacional 40 (=Ruta 237)</code></li>
  <li class="list-group-item"><code>Queets Rainforest, Olympic National Park</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_Location"></a>Term Name dcterms:Location</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/Location">http://purl.org/dc/terms/Location</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://dublincore.org/usage/terms/history/#Location-001">http://dublincore.org/usage/terms/history/#Location-001</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Location</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A spatial region or named place.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>the municipality of San Carlos de Bariloche, Río Negro, Argentina</code></li>
  <li class="list-group-item"><code>the place defined by a georeference</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_locationAccordingTo"></a>Term Name dwc:locationAccordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/locationAccordingTo">http://rs.tdwg.org/dwc/terms/locationAccordingTo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/locationAccordingTo-2023-06-28">http://rs.tdwg.org/dwc/terms/version/locationAccordingTo-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Location According To</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about the source of this dcterms:Location information. Could be a publication (gazetteer), institution, or team of individuals.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Getty Thesaurus of Geographic Names</code></li>
  <li class="list-group-item"><code>GADM</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_locationAccordingTo"></a>Term Name dwciri:locationAccordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/locationAccordingTo">http://rs.tdwg.org/dwc/iri/locationAccordingTo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/locationAccordingTo-2023-06-28">http://rs.tdwg.org/dwc/iri/version/locationAccordingTo-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Location According To (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about the source of this dcterms:Location information. Could be a publication (gazetteer), institution, or team of individuals.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_locationAttributes"></a>Term Name dwc:locationAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/locationAttributes">http://rs.tdwg.org/dwc/terms/locationAttributes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2014-10-23</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Location Attributes</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of additional measurements, facts, characteristics, or assertions about the location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "aspectheading=277; slopeindegrees=6"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_locationID"></a>Term Name dwc:locationID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/locationID">http://rs.tdwg.org/dwc/terms/locationID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/locationID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/locationID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Location ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the set of dcterms:Location information. May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1">https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_locationRemarks"></a>Term Name dwc:locationRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/locationRemarks">http://rs.tdwg.org/dwc/terms/locationRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/locationRemarks-2023-06-28">http://rs.tdwg.org/dwc/terms/version/locationRemarks-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Location Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the dcterms:Location.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>under water since 2005</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/AreaDetail</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_lowestBiostratigraphicZone"></a>Term Name dwc:lowestBiostratigraphicZone</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/lowestBiostratigraphicZone">http://rs.tdwg.org/dwc/terms/lowestBiostratigraphicZone</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/lowestBiostratigraphicZone-2023-09-13">http://rs.tdwg.org/dwc/terms/version/lowestBiostratigraphicZone-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Lowest Biostratigraphic Zone</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the lowest possible geological biostratigraphic zone of the stratigraphic horizon from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Maastrichtian</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_MachineObservation"></a>Term Name dwc:MachineObservation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/MachineObservation">http://rs.tdwg.org/dwc/terms/MachineObservation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/MachineObservation-2023-09-18">http://rs.tdwg.org/dwc/terms/version/MachineObservation-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Machine Observation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An output of a machine observation process.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>a photograph</code></li>
  <li class="list-group-item"><code>a video</code></li>
  <li class="list-group-item"><code>an audio recording</code></li>
  <li class="list-group-item"><code>a remote sensing image</code></li>
  <li class="list-group-item"><code>a dwc:Occurrence record based on telemetry</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>RecordBasisEnum/MachineObservation</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_MaterialCitation"></a>Term Name dwc:MaterialCitation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/MaterialCitation">http://rs.tdwg.org/dwc/terms/MaterialCitation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/MaterialCitation-2023-09-18">http://rs.tdwg.org/dwc/terms/version/MaterialCitation-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Citation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A reference to or citation of one, a part of, or multiple specimens in scholarly publications.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This class constitutes a new value for the controlled vocabulary in the recommendations for basisOfRecord. When importing Darwin Core Archives of literature-based datasets to GBIF, the basisOfRecord should be changed from "Occurrence", "PreservedSpecimen" or "Literature" to "MaterialCitation".</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>a citation of a physical specimen from a scientific collection in a taxonomic treatment in a scientific publication</code></li>
  <li class="list-group-item"><code>a citation of a group of physical specimens, such as paratypes in a taxonomic treatment in a scientific publication</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_MaterialEntity"></a>Term Name dwc:MaterialEntity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/MaterialEntity">http://rs.tdwg.org/dwc/terms/MaterialEntity</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/MaterialEntity-2023-09-13">http://rs.tdwg.org/dwc/terms/version/MaterialEntity-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Entity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An entity that can be identified, exists for some period of time, and consists in whole or in part of physical matter while it exists.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The term is defined at the most general level to admit descriptions of any subtype of material entity within the scope of Darwin Core. In particular, any kind of material sample, preserved specimen, fossil, or exemplar from living collections is intended to be subsumed under this term.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>an instance of a fossil</code></li>
  <li class="list-group-item"><code>an instance of a herbarium sheet with its attached plant specimen</code></li>
  <li class="list-group-item"><code>a particular part of the plant-derived material affixed to a herbarium sheet</code></li>
  <li class="list-group-item"><code>an instance of a frozen tissue sample</code></li>
  <li class="list-group-item"><code>a specific water sample</code></li>
  <li class="list-group-item"><code>an instance of a meteorite fragment</code></li>
  <li class="list-group-item"><code>a particular wolf in a zoo</code></li>
  <li class="list-group-item"><code>a particular pack of wolves in the wild</code></li>
  <li class="list-group-item"><code>an isolated molecule of DNA</code></li>
  <li class="list-group-item"><code>a specific deep-frozen DNA sample</code></li>
  <li class="list-group-item"><code>a particular field notebook</code></li>
  <li class="list-group-item"><code>a particular paper page from a field notebook</code></li>
  <li class="list-group-item"><code>an instance of a printed photograph</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>None (Specimen Unit, when used to denote a class of things, appears to be a broadly construed subclass.)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_materialEntityID"></a>Term Name dwc:materialEntityID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/materialEntityID">http://rs.tdwg.org/dwc/terms/materialEntityID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/materialEntityID-2023-09-13">http://rs.tdwg.org/dwc/terms/version/materialEntityID-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Entity ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for a particular instance of a dwc:MaterialEntity.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Values of dwc:materialEntityID are intended to uniquely and persistently identify a particular dwc:MaterialEntity within some context. Examples of context include a particular sample collection, an organization, or the worldwide scale. Recommended best practice is to use a persistent, globally unique identifier. The identifier is bound to a physical object (the dwc:MaterialEntity) as opposed to a particular digital record (representation) of that physical object.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>06809dc5-f143-459a-be1a-6f03e63fc083</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>Unit/UnitGUID or Unit/UnitID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_materialEntityRemarks"></a>Term Name dwc:materialEntityRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/materialEntityRemarks">http://rs.tdwg.org/dwc/terms/materialEntityRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/materialEntityRemarks-2023-09-13">http://rs.tdwg.org/dwc/terms/version/materialEntityRemarks-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Entity Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the dwc:MaterialEntity instance.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>found in association with charred remains</code></li>
  <li class="list-group-item"><code>some original fragments missing</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Notes</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_MaterialSample"></a>Term Name dwc:MaterialSample</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/MaterialSample">http://rs.tdwg.org/dwc/terms/MaterialSample</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/MaterialSample-2023-09-13">http://rs.tdwg.org/dwc/terms/version/MaterialSample-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Sample</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A material entity that represents an entity of interest in whole or in part.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>a whole organism preserved in a collection</code></li>
  <li class="list-group-item"><code>a part of an organism isolated for some purpose</code></li>
  <li class="list-group-item"><code>a soil sample</code></li>
  <li class="list-group-item"><code>a marine microbial sample</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2013-10-09_11">http://rs.tdwg.org/decisions/decision-2013-10-09_11</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_materialSampleID"></a>Term Name dwc:materialSampleID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/materialSampleID">http://rs.tdwg.org/dwc/terms/materialSampleID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/materialSampleID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/materialSampleID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Sample ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the dwc:MaterialSample (as opposed to a particular digital record of the dwc:MaterialSample). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the dwc:materialSampleID globally unique.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a persistent, globally unique identifier.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>06809dc5-f143-459a-be1a-6f03e63fc083</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2013-10-09_13">http://rs.tdwg.org/decisions/decision-2013-10-09_13</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_maximumDepthInMeters"></a>Term Name dwc:maximumDepthInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/maximumDepthInMeters">http://rs.tdwg.org/dwc/terms/maximumDepthInMeters</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/maximumDepthInMeters-2023-06-28">http://rs.tdwg.org/dwc/terms/version/maximumDepthInMeters-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Maximum Depth In Meters</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The greater depth of a range of depth below the local surface, in meters.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>0</code></li>
  <li class="list-group-item"><code>200</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/UpperValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_maximumDistanceAboveSurfaceInMeters"></a>Term Name dwc:maximumDistanceAboveSurfaceInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/maximumDistanceAboveSurfaceInMeters">http://rs.tdwg.org/dwc/terms/maximumDistanceAboveSurfaceInMeters</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/maximumDistanceAboveSurfaceInMeters-2023-06-28">http://rs.tdwg.org/dwc/terms/version/maximumDistanceAboveSurfaceInMeters-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Maximum Distance Above Surface In Meters</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The greater distance in a range of distance from a reference surface in the vertical direction, in meters. Use positive values for locations above the surface, negative values for locations below. If depth measures are given, the reference surface is the location given by the depth, otherwise the reference surface is the location given by the elevation.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>-1.5</code> (below the surface)</li>
  <li class="list-group-item"><code>4.2</code> (above the surface)</li>
  <li class="list-group-item">For a 1.5 meter sediment core from the bottom of a lake (at depth 20m) at 300m elevation: verbatimElevation: <code>300m</code> minimumElevationInMeters: <code>300</code>, maximumElevationInMeters: <code>300</code>, verbatimDepth: <code>20m</code>, minimumDepthInMeters: <code>20</code>, maximumDepthInMeters: <code>20</code>, minimumDistanceAboveSurfaceInMeters: <code>0</code>, maximumDistanceAboveSurfaceInMeters: <code>-1.5</code>.</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/UpperValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_maximumElevationInMeters"></a>Term Name dwc:maximumElevationInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/maximumElevationInMeters">http://rs.tdwg.org/dwc/terms/maximumElevationInMeters</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/maximumElevationInMeters-2023-06-28">http://rs.tdwg.org/dwc/terms/version/maximumElevationInMeters-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Maximum Elevation In Meters</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The upper limit of the range of elevation (altitude, usually above sea level), in meters.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>-205</code></li>
  <li class="list-group-item"><code>1236</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/UpperValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementAccuracy"></a>Term Name dwc:measurementAccuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementAccuracy">http://rs.tdwg.org/dwc/terms/measurementAccuracy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementAccuracy-2023-06-28">http://rs.tdwg.org/dwc/terms/version/measurementAccuracy-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Accuracy</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The description of the potential error associated with the dwc:measurementValue.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>0.01</code></li>
  <li class="list-group-item"><code>normal distribution with variation of 2 m</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Accuracy or DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Aspect/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/Accuracy or DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Accuracy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementDeterminedBy"></a>Term Name dwc:measurementDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementDeterminedBy">http://rs.tdwg.org/dwc/terms/measurementDeterminedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementDeterminedBy-2023-06-28">http://rs.tdwg.org/dwc/terms/version/measurementDeterminedBy-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Determined By</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of names of people, groups, or organizations who determined the value of the dwc:MeasurementOrFact.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Rob Guralnick</code></li>
  <li class="list-group-item"><code>Peter Desmet | Stijn Van Hoey</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/MeasuredBy or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/MeasuredBy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_measurementDeterminedBy"></a>Term Name dwciri:measurementDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/measurementDeterminedBy">http://rs.tdwg.org/dwc/iri/measurementDeterminedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/measurementDeterminedBy-2023-06-28">http://rs.tdwg.org/dwc/iri/version/measurementDeterminedBy-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Determined By (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A person, group, or organization who determined the value of the dwc:MeasurementOrFact.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementDeterminedDate"></a>Term Name dwc:measurementDeterminedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementDeterminedDate">http://rs.tdwg.org/dwc/terms/measurementDeterminedDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementDeterminedDate-2023-06-28">http://rs.tdwg.org/dwc/terms/version/measurementDeterminedDate-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Determined Date</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the dwc:MeasurementOrFact was made.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li>
  <li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li>
  <li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li>
  <li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li>
  <li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li>
  <li class="list-group-item"><code>1971</code> (some time in the year 1971)</li>
  <li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li>
  <li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li>
  <li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/MeasurementDateTime or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/MeasurementDateTime</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementID"></a>Term Name dwc:measurementID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementID">http://rs.tdwg.org/dwc/terms/measurementID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/measurementID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the dwc:MeasurementOrFact (information pertaining to measurements, facts, characteristics, or assertions). May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>9c752d22-b09a-11e8-96f8-529269fb1459</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementMethod"></a>Term Name dwc:measurementMethod</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementMethod">http://rs.tdwg.org/dwc/terms/measurementMethod</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementMethod-2023-06-28">http://rs.tdwg.org/dwc/terms/version/measurementMethod-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Method</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A description of or reference to (publication, URI) the method or protocol used to determine the measurement, fact, characteristic, or assertion.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>minimum convex polygon around burrow entrances</code> (for a home range area)</li>
  <li class="list-group-item"><code>barometric altimeter</code> (for an elevation)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>/DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Method or /DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/Method or /DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/Method</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_measurementMethod"></a>Term Name dwciri:measurementMethod</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/measurementMethod">http://rs.tdwg.org/dwc/iri/measurementMethod</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/measurementMethod-2015-03-27">http://rs.tdwg.org/dwc/iri/version/measurementMethod-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Method (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The method or protocol used to determine the measurement, fact, characteristic, or assertion.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_MeasurementOrFact"></a>Term Name dwc:MeasurementOrFact</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/MeasurementOrFact">http://rs.tdwg.org/dwc/terms/MeasurementOrFact</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/MeasurementOrFact-2023-09-13">http://rs.tdwg.org/dwc/terms/version/MeasurementOrFact-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Or Fact</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A measurement of or fact about an rdfs:Resource (http://www.w3.org/2000/01/rdf-schema#Resource).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Resources can be thought of as identifiable records or instances of classes and may include, but need not be limited to instances of dwc:Occurrence, dwc:Organism, dwc:MaterialEntity, dwc:Event, dcterms:Location, dwc:GeologicalContext, dwc:Identification, or dwc:Taxon.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>the weight of a dwc:Organism in grams</code></li>
  <li class="list-group-item"><code>the number of placental scars</code></li>
  <li class="list-group-item"><code>surface water temperature in Celsius</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>Datasets/Dataset/Units/Unit/MeasurementsOrFacts or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementRemarks"></a>Term Name dwc:measurementRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementRemarks">http://rs.tdwg.org/dwc/terms/measurementRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementRemarks-2023-06-28">http://rs.tdwg.org/dwc/terms/version/measurementRemarks-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes accompanying the dwc:MeasurementOrFact.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>tip of tail missing</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_measurementType"></a>Term Name dwciri:measurementType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/measurementType">http://rs.tdwg.org/dwc/iri/measurementType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/measurementType-2015-03-27">http://rs.tdwg.org/dwc/iri/version/measurementType-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Type (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature of the measurement, fact, characteristic, or assertion.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementType"></a>Term Name dwc:measurementType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementType">http://rs.tdwg.org/dwc/terms/measurementType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementType-2023-06-28">http://rs.tdwg.org/dwc/terms/version/measurementType-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature of the measurement, fact, characteristic, or assertion.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>tail length</code></li>
  <li class="list-group-item"><code>temperature</code></li>
  <li class="list-group-item"><code>trap line length</code></li>
  <li class="list-group-item"><code>survey area</code></li>
  <li class="list-group-item"><code>trap type</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Parameter or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Parameter</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_measurementUnit"></a>Term Name dwciri:measurementUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/measurementUnit">http://rs.tdwg.org/dwc/iri/measurementUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/measurementUnit-2023-06-28">http://rs.tdwg.org/dwc/iri/version/measurementUnit-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Unit (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The units associated with the dwc:measurementValue.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure <a href="http://www.wurvoc.org/vocabularies/om-1.8/">http://www.wurvoc.org/vocabularies/om-1.8/</a> of SI units, derived units, or other non-SI units accepted for use within the SI.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementUnit"></a>Term Name dwc:measurementUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementUnit">http://rs.tdwg.org/dwc/terms/measurementUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementUnit-2023-06-28">http://rs.tdwg.org/dwc/terms/version/measurementUnit-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Unit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The units associated with the dwc:measurementValue.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the International System of Units (SI). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>m</code></li>
  <li class="list-group-item"><code>g</code></li>
  <li class="list-group-item"><code>l</code></li>
  <li class="list-group-item"><code>°C</code></li>
  <li class="list-group-item"><code>mm</code></li>
  <li class="list-group-item"><code>km²</code></li>
  <li class="list-group-item"><code>%</code></li>
  <li class="list-group-item"><code>hh:mm:ss</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UnitOfMeasurement or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UnitOfMeasurement</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_measurementValue"></a>Term Name dwciri:measurementValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/measurementValue">http://rs.tdwg.org/dwc/iri/measurementValue</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-07-15</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/measurementValue-2021-07-15">http://rs.tdwg.org/dwc/iri/version/measurementValue-2021-07-15</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Value (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The value of the measurement, fact, characteristic, or assertion.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="http://vocab.nerc.ac.uk/collection/L22/current/TOOL0960/">http://vocab.nerc.ac.uk/collection/L22/current/TOOL0960/</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementValue"></a>Term Name dwc:measurementValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementValue">http://rs.tdwg.org/dwc/terms/measurementValue</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementValue-2023-06-28">http://rs.tdwg.org/dwc/terms/version/measurementValue-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Value</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The value of the measurement, fact, characteristic, or assertion.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>45</code></li>
  <li class="list-group-item"><code>20</code></li>
  <li class="list-group-item"><code>1</code></li>
  <li class="list-group-item"><code>14.5</code></li>
  <li class="list-group-item"><code>UV-light</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/SiteMeasurementOrFact/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Biotope/MeasurementsOrFacts/MeasurementOrFactAtomised/UpperValue or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/UpperValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_member"></a>Term Name dwc:member</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/member">http://rs.tdwg.org/dwc/terms/member</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/member-2023-09-13">http://rs.tdwg.org/dwc/terms/version/member-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Member</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the lithostratigraphic member from which the dwc:MaterialEntity was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Lava Dam Member</code></li>
  <li class="list-group-item"><code>Hellnmaria Member</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_minimumDepthInMeters"></a>Term Name dwc:minimumDepthInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/minimumDepthInMeters">http://rs.tdwg.org/dwc/terms/minimumDepthInMeters</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/minimumDepthInMeters-2023-06-28">http://rs.tdwg.org/dwc/terms/version/minimumDepthInMeters-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Minimum Depth In Meters</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The lesser depth of a range of depth below the local surface, in meters.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>0</code></li>
  <li class="list-group-item"><code>100</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactAtomised/LowerValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_minimumDistanceAboveSurfaceInMeters"></a>Term Name dwc:minimumDistanceAboveSurfaceInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/minimumDistanceAboveSurfaceInMeters">http://rs.tdwg.org/dwc/terms/minimumDistanceAboveSurfaceInMeters</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/minimumDistanceAboveSurfaceInMeters-2023-06-28">http://rs.tdwg.org/dwc/terms/version/minimumDistanceAboveSurfaceInMeters-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Minimum Distance Above Surface In Meters</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The lesser distance in a range of distance from a reference surface in the vertical direction, in meters. Use positive values for locations above the surface, negative values for locations below. If depth measures are given, the reference surface is the location given by the depth, otherwise the reference surface is the location given by the elevation.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>-1.5</code> (below the surface)</li>
  <li class="list-group-item"><code>4.2</code> (above the surface)</li>
  <li class="list-group-item">For a 1.5 meter sediment core from the bottom of a lake (at depth 20m) at 300m elevation: verbatimElevation: <code>300m</code> minimumElevationInMeters: <code>300</code>, maximumElevationInMeters: <code>300</code>, verbatimDepth: <code>20m</code>, minimumDepthInMeters: <code>20</code>, maximumDepthInMeters: <code>20</code>, minimumDistanceAboveSurfaceInMeters: <code>0</code>, maximumDistanceAboveSurfaceInMeters: <code>-1.5</code>.</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Height/MeasurementOrFactAtomised/LowerValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_minimumElevationInMeters"></a>Term Name dwc:minimumElevationInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/minimumElevationInMeters">http://rs.tdwg.org/dwc/terms/minimumElevationInMeters</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/minimumElevationInMeters-2023-06-28">http://rs.tdwg.org/dwc/terms/version/minimumElevationInMeters-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Minimum Elevation In Meters</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The lower limit of the range of elevation (altitude, usually above sea level), in meters.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>-100</code></li>
  <li class="list-group-item"><code>802</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactAtomised/LowerValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_modified"></a>Term Name dcterms:modified</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/modified">http://purl.org/dc/terms/modified</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://dublincore.org/usage/terms/history/#modified-003">http://dublincore.org/usage/terms/history/#modified-003</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Date Modified</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The most recent date-time on which the resource was changed.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li>
  <li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li>
  <li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li>
  <li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li>
  <li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li>
  <li class="list-group-item"><code>1971</code> (some time in the year 1971)</li>
  <li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li>
  <li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li>
  <li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_month"></a>Term Name dwc:month</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/month">http://rs.tdwg.org/dwc/terms/month</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/month-2023-06-28">http://rs.tdwg.org/dwc/terms/version/month-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Month</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The integer month in which the dwc:Event occurred.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1</code> (January)</li>
  <li class="list-group-item"><code>10</code> (October)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>accessible from DataSets/DataSet/Units/Unit/Gathering/ISODateTimeBegin</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_municipality"></a>Term Name dwc:municipality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/municipality">http://rs.tdwg.org/dwc/terms/municipality</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/municipality-2023-06-28">http://rs.tdwg.org/dwc/terms/version/municipality-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Third Order Division</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region than county (city, municipality, etc.) in which the dcterms:Location occurs. Do not use this term for a nearby named place that does not contain the actual dcterms:Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Holzminden</code></li>
  <li class="list-group-item"><code>Araçatuba</code></li>
  <li class="list-group-item"><code>Ga-Segonyana</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_nameAccordingTo"></a>Term Name dwc:nameAccordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/nameAccordingTo">http://rs.tdwg.org/dwc/terms/nameAccordingTo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/nameAccordingTo-2023-06-28">http://rs.tdwg.org/dwc/terms/version/nameAccordingTo-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name According To</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The reference to the source in which the specific taxon concept circumscription is defined or implied - traditionally signified by the Latin "sensu" or "sec." (from secundum, meaning "according to"). For taxa that result from identifications, a reference to the keys, monographs, experts and other sources should be given.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term provides context to the dwc:scientificName. Together with the dwc:scientificName, separated by <code>sensu</code> or <code>sec.</code>, it forms the taxon concept label, which may be seen as having the same relationship to dwc:taxonConceptID as, for example, dwc:acceptedNameUsage has to dwc:acceptedNameUsageID. When not provided, in Taxon Core data sets the dwc:nameAccordingTo can be taken to be the data set. In this case the data set mostly provides sufficient context to infer the delimitation of the taxon and its relationship with other taxa. In Occurrence Core data sets, when not provided, dwc:nameAccordingTo can be an underlying taxonomy of the data set, e.g. Plants of the World Online (<a href="http://powo.science.kew.org/">http://powo.science.kew.org/</a>) for vascular plant records in iNaturalist (in which case it should be provided), or, which is the case for most dwc:PreservedSpecimen data sets, the dwc:Identification, in which case there is no further context.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Franz NM, Cardona-Duque J (2013) Description of two new species and phylogenetic reassessment of Perelleschus Wibmer & O’Brien, 1986 (Coleoptera: Curculionidae), with a complete taxonomic concept history of Perelleschus sec. Franz & Cardona-Duque, 2013. Syst Biodivers. 11: 209–236.</code> (as the full citation of the Franz & Cardona-Duque (2013) in Perelleschus splendida sec. Franz & Cardona-Duque (2013))</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_nameAccordingToID"></a>Term Name dwc:nameAccordingToID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/nameAccordingToID">http://rs.tdwg.org/dwc/terms/nameAccordingToID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/nameAccordingToID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/nameAccordingToID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name According To ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the source in which the specific taxon concept circumscription is defined or implied. See dwc:nameAccordingTo.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="https://doi.org/10.1016/S0269-915X(97)80026-2">https://doi.org/10.1016/S0269-915X(97)80026-2</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_namePublicationID"></a>Term Name dwc:namePublicationID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublicationID">http://rs.tdwg.org/dwc/terms/namePublicationID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-09-21</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Publication ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_namePublishedInID">http://rs.tdwg.org/dwc/terms/namePublishedInID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A resolvable globally unique identifier for the original publication of the scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "<a href="http://hdl.handle.net/10199/7">http://hdl.handle.net/10199/7</a>"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_namePublishedIn"></a>Term Name dwc:namePublishedIn</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublishedIn">http://rs.tdwg.org/dwc/terms/namePublishedIn</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/namePublishedIn-2023-06-28">http://rs.tdwg.org/dwc/terms/version/namePublishedIn-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Published In</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A reference for the publication in which the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A citation of the first publication of the name in its given combination, not the basionym / original name. Recombinations are often not published in zoology, in which case dwc:namePublishedIn should be empty.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388</code></li>
  <li class="list-group-item"><code>Forel, Auguste, Diagnosies provisoires de quelques espèces nouvelles de fourmis de Madagascar, récoltées par M. Grandidier., Annales de la Societe Entomologique de Belgique, Comptes-rendus des Seances 30, 1886</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SpecimenUnit/NomenclaturalTypeDesignations/NomenclaturalTypeDesignation/NomenclaturalReference/TitleCitation</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_namePublishedInID"></a>Term Name dwc:namePublishedInID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublishedInID">http://rs.tdwg.org/dwc/terms/namePublishedInID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/namePublishedInID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/namePublishedInID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Published In ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the publication in which the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A citation of the first publication of the name in its given combination, not the basionym / original name. Recombinations are often not published in zoology, in which case dwc:namePublishedInID should be empty.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_namePublishedInYear"></a>Term Name dwc:namePublishedInYear</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublishedInYear">http://rs.tdwg.org/dwc/terms/namePublishedInYear</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/namePublishedInYear-2023-06-28">http://rs.tdwg.org/dwc/terms/version/namePublishedInYear-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Published In Year</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The four-digit year in which the dwc:scientificName was published.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1915</code></li>
  <li class="list-group-item"><code>2008</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2011-10-16_8">http://rs.tdwg.org/decisions/decision-2011-10-16_8</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_nomenclaturalCode"></a>Term Name dwc:nomenclaturalCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/nomenclaturalCode">http://rs.tdwg.org/dwc/terms/nomenclaturalCode</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/nomenclaturalCode-2023-06-28">http://rs.tdwg.org/dwc/terms/version/nomenclaturalCode-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Nomenclatural Code</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nomenclatural code (or codes in the case of an ambiregnal name) under which the dwc:scientificName is constructed.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>ICN</code></li>
  <li class="list-group-item"><code>ICZN</code></li>
  <li class="list-group-item"><code>BC</code></li>
  <li class="list-group-item"><code>ICNCP</code></li>
  <li class="list-group-item"><code>BioCode</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/Code</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_nomenclaturalStatus"></a>Term Name dwc:nomenclaturalStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/nomenclaturalStatus">http://rs.tdwg.org/dwc/terms/nomenclaturalStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/nomenclaturalStatus-2023-06-28">http://rs.tdwg.org/dwc/terms/version/nomenclaturalStatus-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Nomenclatural Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The status related to the original publication of the name and its conformance to the relevant rules of nomenclature. It is based essentially on an algorithm according to the business rules of the code. It requires no taxonomic opinion.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>nom. ambig.</code></li>
  <li class="list-group-item"><code>nom. illeg.</code></li>
  <li class="list-group-item"><code>nom. subnud.</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>(DataSets/DataSet/Units/Unit/SpecimenUnit/NomenclaturalTypeDesignations/NomenclaturalTypeDesignation/NomenclaturalReference/TitleCitation) pro parte</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_Occurrence"></a>Term Name dwc:Occurrence</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Occurrence">http://rs.tdwg.org/dwc/terms/Occurrence</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/Occurrence-2023-09-18">http://rs.tdwg.org/dwc/terms/version/Occurrence-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An existence of a dwc:Organism at a particular place at a particular time.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>a wolf pack on the shore of Kluane Lake in 1988</code></li>
  <li class="list-group-item"><code>a virus in a plant leaf in the New York Botanical Garden at 15:29 on 2014-10-23</code></li>
  <li class="list-group-item"><code>a fungus in Central Park in the summer of 1929</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceAttributes"></a>Term Name dwc:occurrenceAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceAttributes">http://rs.tdwg.org/dwc/terms/occurrenceAttributes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Attributes</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of additional measurements, facts, characteristics, or assertions about the Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: "Tragus length: 14mm; Weight: 120g", "Height: 1-1.5 meters tall; flowers yellow; uncommon".</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceDetails"></a>Term Name dwc:occurrenceDetails</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceDetails">http://rs.tdwg.org/dwc/terms/occurrenceDetails</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Details</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A reference (publication, URI) to the most detailed information available about the Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "<a href="http://mvzarctos.berkeley.edu/guid/MVZ:Mamm:165861">http://mvzarctos.berkeley.edu/guid/MVZ:Mamm:165861</a>"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/RecordURI</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2011-10-16_7">http://rs.tdwg.org/decisions/decision-2011-10-16_7</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceID"></a>Term Name dwc:occurrenceID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceID">http://rs.tdwg.org/dwc/terms/occurrenceID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/occurrenceID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/occurrenceID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the dwc:Occurrence (as opposed to a particular digital record of the dwc:Occurrence). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the dwc:occurrenceID globally unique.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a persistent, globally unique identifier.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="http://arctos.database.museum/guid/MSB:Mamm:233627">http://arctos.database.museum/guid/MSB:Mamm:233627</a></code></li>
  <li class="list-group-item"><code>000866d2-c177-4648-a200-ead4007051b9</code></li>
  <li class="list-group-item"><code>urn:catalog:UWBM:Bird:89776</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/UnitGUID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_OccurrenceMeasurement"></a>Term Name dwc:OccurrenceMeasurement</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/OccurrenceMeasurement">http://rs.tdwg.org/dwc/terms/OccurrenceMeasurement</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Measurement</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The category of information pertaining to measurements accociated with an occurrence.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>Datasets/Dataset/Units/Unit/MeasurementsOrFacts</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementAccuracy"></a>Term Name dwc:occurrenceMeasurementAccuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementAccuracy">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementAccuracy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Measurement Accuracy</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementAccuracy">http://rs.tdwg.org/dwc/terms/measurementAccuracy</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The description of the error associated with the occurrenceAttributeValue.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "0.01", "normal distribution with variation of 2 m"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Accuracy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementDeterminedBy"></a>Term Name dwc:occurrenceMeasurementDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementDeterminedBy">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementDeterminedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Measurement Determined By</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The agent responsible for having determined the value of the measurement or characteristic of the occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Javier de la Torre"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/MeasuredBy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementDeterminedDate"></a>Term Name dwc:occurrenceMeasurementDeterminedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementDeterminedDate">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementDeterminedDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Measurement Determined Date</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementDeterminedDate">http://rs.tdwg.org/dwc/terms/measurementDeterminedDate</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the the measurement or characteristic of the occurrence was made. Recommended best practice is to use an encoding scheme, such as ISO 8601:2004(E).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: "1963-03-08T14:07-0600" is 8 Mar 1963 2:07pm in the time zone six hours earlier than UTC, "2009-02-20T08:40Z" is 20 Feb 2009 8:40am UTC, "1809-02-12" is 12 Feb 1809, "1906-06" is Jun 1906, "1971" is just that year, "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z" is the interval between 1 Mar 2007 1pm UTC and 11 May 2008 3:30pm UTC, "2007-11-13/15" is the interval between 13 Nov 2007 and 15 Nov 2007.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/MeasurementDateTime</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementID"></a>Term Name dwc:occurrenceMeasurementID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementID">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Measurement ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementID">http://rs.tdwg.org/dwc/terms/measurementID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the occurrence attribute. May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementRemarks"></a>Term Name dwc:occurrenceMeasurementRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementRemarks">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Measurement Remarks</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementRemarks">http://rs.tdwg.org/dwc/terms/measurementRemarks</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes accompanying the measurement or characteristic of the occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "tip of tail missing"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementType"></a>Term Name dwc:occurrenceMeasurementType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementType">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Measurement Type</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementType">http://rs.tdwg.org/dwc/terms/measurementType</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature of the measurement or characteristic of the occurrence. Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "tail length"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Parameter</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementUnit"></a>Term Name dwc:occurrenceMeasurementUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementUnit">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Measurement Unit</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementUnit">http://rs.tdwg.org/dwc/terms/measurementUnit</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The units for the value of the measurement or characteristic of the occurrence. Recommended best practice is to use International System of Units (SI) units.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "mm"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UnitOfMeasurement</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementValue"></a>Term Name dwc:occurrenceMeasurementValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementValue">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementValue</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Measurement Value</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_measurementValue">http://rs.tdwg.org/dwc/terms/measurementValue</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The value of the measurement or characteristic of the occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "45"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UpperValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceRemarks"></a>Term Name dwc:occurrenceRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceRemarks">http://rs.tdwg.org/dwc/terms/occurrenceRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/occurrenceRemarks-2023-06-28">http://rs.tdwg.org/dwc/terms/version/occurrenceRemarks-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>found dead on road</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Notes</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceStatus"></a>Term Name dwc:occurrenceStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceStatus">http://rs.tdwg.org/dwc/terms/occurrenceStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/occurrenceStatus-2023-06-28">http://rs.tdwg.org/dwc/terms/version/occurrenceStatus-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A statement about the presence or absence of a dwc:Taxon at a dcterms:Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>For dwc:Occurrences, the default vocabulary is recommended to consist of <code>present</code> and <code>absent</code>, but can be extended by implementers with good justification. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>present</code></li>
  <li class="list-group-item"><code>absent</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_occurrenceStatus"></a>Term Name dwciri:occurrenceStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/occurrenceStatus">http://rs.tdwg.org/dwc/iri/occurrenceStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/occurrenceStatus-2023-06-28">http://rs.tdwg.org/dwc/iri/version/occurrenceStatus-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Status (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A statement about the presence or absence of a dwc:Taxon at a dcterms:Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_order"></a>Term Name dwc:order</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/order">http://rs.tdwg.org/dwc/terms/order</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/order-2023-06-28">http://rs.tdwg.org/dwc/terms/version/order-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Order</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the order in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Carnivora</code></li>
  <li class="list-group-item"><code>Monocleales</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/HigherTaxa/HigherTaxon/HigherTaxonName with HigherTaxa/HigherTaxon/HigherTaxonRank = ordo</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_Organism"></a>Term Name dwc:Organism</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Organism">http://rs.tdwg.org/dwc/terms/Organism</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/Organism-2023-09-18">http://rs.tdwg.org/dwc/terms/version/Organism-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A particular organism or defined group of organisms considered to be taxonomically homogeneous.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Instances of the dwc:Organism class are intended to facilitate linking one or more dwc:Identification instances to one or more dwc:Occurrence instances. Therefore, things that are typically assigned scientific names (such as viruses, hybrids, and lichens) and aggregates whose dwc:Occurrences are typically recorded (such as packs, clones, and colonies) are included in the scope of this class.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>a specific bird</code></li>
  <li class="list-group-item"><code>a specific wolf pack</code></li>
  <li class="list-group-item"><code>a specific instance of a bacterial culture</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_14">http://rs.tdwg.org/decisions/decision-2014-10-26_14</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismID"></a>Term Name dwc:organismID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismID">http://rs.tdwg.org/dwc/terms/organismID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/organismID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the dwc:Organism instance (as opposed to a particular digital record of the dwc:Organism). May be a globally unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="http://arctos.database.museum/guid/WNMU:Mamm:1249">http://arctos.database.museum/guid/WNMU:Mamm:1249</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_14">http://rs.tdwg.org/decisions/decision-2014-10-26_14</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismName"></a>Term Name dwc:organismName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismName">http://rs.tdwg.org/dwc/terms/organismName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismName-2023-06-28">http://rs.tdwg.org/dwc/terms/version/organismName-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A textual name or label assigned to a dwc:Organism instance.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Huberta</code></li>
  <li class="list-group-item"><code>Boab Prison Tree</code></li>
  <li class="list-group-item"><code>J pod</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_14">http://rs.tdwg.org/decisions/decision-2014-10-26_14</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismQuantity"></a>Term Name dwc:organismQuantity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismQuantity">http://rs.tdwg.org/dwc/terms/organismQuantity</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismQuantity-2023-06-28">http://rs.tdwg.org/dwc/terms/version/organismQuantity-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Quantity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A number or enumeration value for the quantity of dwc:Organisms.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A dwc:organismQuantity must have a corresponding dwc:organismQuantityType.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>27</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>12.5</code> (organismQuantity) with <code>% biomass</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>r</code> (organismQuantity) with <code>Braun-Blanquet Scale</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>many</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2015-03-19_18">http://rs.tdwg.org/decisions/decision-2015-03-19_18</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismQuantityType"></a>Term Name dwc:organismQuantityType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismQuantityType">http://rs.tdwg.org/dwc/terms/organismQuantityType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismQuantityType-2023-06-28">http://rs.tdwg.org/dwc/terms/version/organismQuantityType-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Quantity Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The type of quantification system used for the quantity of dwc:Organisms.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A dwc:organismQuantityType must have a corresponding dwc:organismQuantity. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>27</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>12.5</code> (organismQuantity) with <code>% biomass</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>r</code> (organismQuantity) with <code>Braun-Blanquet Scale</code> (organismQuantityType)</li>
  <li class="list-group-item"><code>many</code> (organismQuantity) with <code>individuals</code> (organismQuantityType)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2015-03-19_18">http://rs.tdwg.org/decisions/decision-2015-03-19_18</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_organismQuantityType"></a>Term Name dwciri:organismQuantityType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/organismQuantityType">http://rs.tdwg.org/dwc/iri/organismQuantityType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/organismQuantityType-2015-03-27">http://rs.tdwg.org/dwc/iri/version/organismQuantityType-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Quantity Type (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The type of quantification system used for the quantity of organisms.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A dwc:organismQuantityType must have a corresponding dwc:organismQuantity.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismRemarks"></a>Term Name dwc:organismRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismRemarks">http://rs.tdwg.org/dwc/terms/organismRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismRemarks-2023-06-28">http://rs.tdwg.org/dwc/terms/version/organismRemarks-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the dwc:Organism instance.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>One of a litter of six</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_14">http://rs.tdwg.org/decisions/decision-2014-10-26_14</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismScope"></a>Term Name dwc:organismScope</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismScope">http://rs.tdwg.org/dwc/terms/organismScope</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismScope-2023-06-28">http://rs.tdwg.org/dwc/terms/version/organismScope-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Scope</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A description of the kind of dwc:Organism instance. Can be used to indicate whether the dwc:Organism instance represents a discrete organism or if it represents a particular type of aggregation.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. This term is not intended to be used to specify a type of dwc:Taxon. To describe the kind of dwc:Organism using a URI object in RDF, use rdf:type (<a href="http://www.w3.org/1999/02/22-rdf-syntax-ns#type">http://www.w3.org/1999/02/22-rdf-syntax-ns#type</a>) instead.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>multicellular organism</code></li>
  <li class="list-group-item"><code>virus</code></li>
  <li class="list-group-item"><code>clone</code></li>
  <li class="list-group-item"><code>pack</code></li>
  <li class="list-group-item"><code>colony</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_14">http://rs.tdwg.org/decisions/decision-2014-10-26_14</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_originalNameUsage"></a>Term Name dwc:originalNameUsage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/originalNameUsage">http://rs.tdwg.org/dwc/terms/originalNameUsage</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/originalNameUsage-2023-06-28">http://rs.tdwg.org/dwc/terms/version/originalNameUsage-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Original Name Usage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The taxon name, with authorship and date information if known, as it originally appeared when first established under the rules of the associated dwc:nomenclaturalCode. The basionym (botany) or basonym (bacteriology) of the dwc:scientificName or the senior/earlier homonym for replaced names.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The full scientific name, with authorship and date information if known, of the name usage in which the terminal element of the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode. For example, for names governed by the ICNafp, this term would indicate the basionym of a record representing a subsequent combination. Unlike basionyms, however, this term can apply to scientific names at all ranks.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Pinus abies</code></li>
  <li class="list-group-item"><code>Gasterosteus saltatrix Linnaeus 1768</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_originalNameUsageID"></a>Term Name dwc:originalNameUsageID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/originalNameUsageID">http://rs.tdwg.org/dwc/terms/originalNameUsageID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/originalNameUsageID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/originalNameUsageID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Original Name Usage ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the name usage (documented meaning of the name according to a source) in which the terminal element of the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term should be used to refer to the dwc:taxonID of a dwc:Taxon record that represents the usage of the terminal element of the dwc:scientificName as originally established under the rules of the associated dwc:nomenclaturalCode. For example, for names governed by the ICNafp, this term would establish the relationship between a record representing a subsequent combination and the record for its corresponding basionym. Unlike basionyms, however, this term can apply to scientific names at all ranks. For Darwin Core Archives the related record should be present locally in the same archive.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>tsn:41107</code> (ITIS)</li>
  <li class="list-group-item"><code>urn:lsid:ipni.org:names:320035-2</code> (IPNI)</li>
  <li class="list-group-item"><code>2704179</code> (GBIF)</li>
  <li class="list-group-item"><code>6W3C4</code> (COL)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_otherCatalogNumbers"></a>Term Name dwc:otherCatalogNumbers</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/otherCatalogNumbers">http://rs.tdwg.org/dwc/terms/otherCatalogNumbers</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/otherCatalogNumbers-2023-06-28">http://rs.tdwg.org/dwc/terms/version/otherCatalogNumbers-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Other Catalog Numbers</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of previous or alternate fully qualified catalog numbers or other human-used identifiers for the same dwc:Occurrence, whether in the current or any other data set or collection.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>FMNH:Mammal:1234</code></li>
  <li class="list-group-item"><code>NPS YELLO6778 | MBG 33424</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SpecimenUnit/History/PreviousUnitsText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_ownerInstitutionCode"></a>Term Name dwc:ownerInstitutionCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/ownerInstitutionCode">http://rs.tdwg.org/dwc/terms/ownerInstitutionCode</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/ownerInstitutionCode-2023-06-28">http://rs.tdwg.org/dwc/terms/version/ownerInstitutionCode-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Owner Institution Code</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name (or acronym) in use by the institution having ownership of the object(s) or information referred to in the record.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>NPS</code></li>
  <li class="list-group-item"><code>APN</code></li>
  <li class="list-group-item"><code>InBio</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_parentEventID"></a>Term Name dwc:parentEventID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/parentEventID">http://rs.tdwg.org/dwc/terms/parentEventID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/parentEventID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/parentEventID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Parent Event ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the broader dwc:Event that groups this and potentially other dwc:Events.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Use a globally unique identifier for a dwc:Event or an identifier for a dwc:Event that is specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>A1</code> (parentEventID to identify the main Whittaker Plot in nested samples, each with its own eventID - <code>A1:1</code>, <code>A1:2</code>).</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2015-03-19_18">http://rs.tdwg.org/decisions/decision-2015-03-19_18</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_parentMeasurementID"></a>Term Name dwc:parentMeasurementID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/parentMeasurementID">http://rs.tdwg.org/dwc/terms/parentMeasurementID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/parentMeasurementID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/parentMeasurementID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Parent Measurement ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for a broader dwc:MeasurementOrFact that groups this and potentially other dwc:MeasurementOrFacts.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>May be a globally unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>9c752d22-b09a-11e8-96f8-529269fb1459</code></li>
  <li class="list-group-item"><code>E1_E1_O1_M1</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_parentNameUsage"></a>Term Name dwc:parentNameUsage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/parentNameUsage">http://rs.tdwg.org/dwc/terms/parentNameUsage</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/parentNameUsage-2023-06-28">http://rs.tdwg.org/dwc/terms/version/parentNameUsage-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Parent Name Usage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name, with authorship and date information if known, of the direct, most proximate higher-rank parent dwc:Taxon (in a classification) of the most specific element of the dwc:scientificName.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Rubiaceae</code></li>
  <li class="list-group-item"><code>Gruiformes</code></li>
  <li class="list-group-item"><code>Testudinae</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/HigherTaxa/HigherTaxon/HigherTaxonName</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_parentNameUsageID"></a>Term Name dwc:parentNameUsageID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/parentNameUsageID">http://rs.tdwg.org/dwc/terms/parentNameUsageID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/parentNameUsageID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/parentNameUsageID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Parent Name Usage ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the name usage (documented meaning of the name according to a source) of the direct, most proximate higher-rank parent taxon (in a classification) of the most specific element of the dwc:scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term should be used for accepted names to refer to the dwc:taxonID of a dwc:Taxon record that represents the next higher taxon rank in the same taxonomic classification. For Darwin Core Archives the related record should be present locally in the same archive.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>tsn:41074</code> (ITIS)</li>
  <li class="list-group-item"><code>urn:lsid:ipni.org:names:30001404-2</code> (IPNI)</li>
  <li class="list-group-item"><code>2704173</code> (GBIF)</li>
  <li class="list-group-item"><code>6T8N</code> (COL)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_pathway"></a>Term Name dwciri:pathway</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/pathway">http://rs.tdwg.org/dwc/iri/pathway</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/pathway-2023-06-28">http://rs.tdwg.org/dwc/iri/version/pathway-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Pathway (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The process by which a dwc:Organism came to be in a given place at a given time.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use IRIs from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/pw/">http://rs.tdwg.org/dwc/doc/pw/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a> . Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcpw/values/p002">http://rs.tdwg.org/dwcpw/values/p002</a></code></li>
  <li class="list-group-item"><code><a href="http://rs.tdwg.org/dwcpw/values/p046">http://rs.tdwg.org/dwcpw/values/p046</a></code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_23">http://rs.tdwg.org/decisions/decision-2020-10-13_23</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_pathway"></a>Term Name dwc:pathway</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/pathway">http://rs.tdwg.org/dwc/terms/pathway</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/pathway-2023-06-28">http://rs.tdwg.org/dwc/terms/version/pathway-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Pathway</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The process by which a dwc:Organism came to be in a given place at a given time.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at <a href="http://rs.tdwg.org/dwc/doc/pw/">http://rs.tdwg.org/dwc/doc/pw/</a>. For details, refer to <a href="https://doi.org/10.3897/biss.3.38084">https://doi.org/10.3897/biss.3.38084</a>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>releasedForUse</code></li>
  <li class="list-group-item"><code>otherEscape</code></li>
  <li class="list-group-item"><code>transportContaminant</code></li>
  <li class="list-group-item"><code>transportStowaway</code></li>
  <li class="list-group-item"><code>corridor</code></li>
  <li class="list-group-item"><code>unaided</code></li>
</ul></td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2020-10-13_23">http://rs.tdwg.org/decisions/decision-2020-10-13_23</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_phylum"></a>Term Name dwc:phylum</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/phylum">http://rs.tdwg.org/dwc/terms/phylum</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/phylum-2023-06-28">http://rs.tdwg.org/dwc/terms/version/phylum-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Phylum</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the phylum or division in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Chordata</code> (phylum)</li>
  <li class="list-group-item"><code>Bryophyta</code> (division)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/HigherTaxa/HigherTaxon/HigherTaxonName with HigherTaxa/HigherTaxon/HigherTaxonRank = phylum</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_pointRadiusSpatialFit"></a>Term Name dwc:pointRadiusSpatialFit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit">http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/pointRadiusSpatialFit-2023-06-28">http://rs.tdwg.org/dwc/terms/version/pointRadiusSpatialFit-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Point Radius Spatial Fit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ratio of the area of the point-radius (dwc:decimalLatitude, dwc:decimalLongitude, dwc:coordinateUncertaintyInMeters) to the area of the true (original, or most specific) spatial representation of the dcterms:Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given point-radius does not completely contain the original representation. The dwc:pointRadiusSpatialFit is undefined (and should be left empty) if the original representation is any geometry without area (e.g., a point or polyline) and without uncertainty and the given georeference is not that same geometry (without uncertainty). If both the original and the given georeference are the same point, the dwc:pointRadiusSpatialFit is 1.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (<a href="https://doi.org/10.15468/doc-gg7h-s853">https://doi.org/10.15468/doc-gg7h-s853</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>0</code></li>
  <li class="list-group-item"><code>1</code></li>
  <li class="list-group-item"><code>1.5708</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/PointRadiusSpatialFit</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_preparations"></a>Term Name dwc:preparations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/preparations">http://rs.tdwg.org/dwc/terms/preparations</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/preparations-2023-09-13">http://rs.tdwg.org/dwc/terms/version/preparations-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Preparations</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of preparations and preservation methods for a dwc:MaterialEntity.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>fossil</code></li>
  <li class="list-group-item"><code>cast</code></li>
  <li class="list-group-item"><code>photograph</code></li>
  <li class="list-group-item"><code>DNA extract</code></li>
  <li class="list-group-item"><code>skin | skull | skeleton</code></li>
  <li class="list-group-item"><code>whole animal (ETOH) | tissue (EDTA)</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SpecimenUnit/Preparations/PreparationsText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_preparations"></a>Term Name dwciri:preparations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/preparations">http://rs.tdwg.org/dwc/iri/preparations</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/preparations-2015-03-27">http://rs.tdwg.org/dwc/iri/version/preparations-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Preparations (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A preparation or preservation method for a specimen.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_PreservedSpecimen"></a>Term Name dwc:PreservedSpecimen</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/PreservedSpecimen">http://rs.tdwg.org/dwc/terms/PreservedSpecimen</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/PreservedSpecimen-2023-09-18">http://rs.tdwg.org/dwc/terms/version/PreservedSpecimen-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Preserved Specimen</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A specimen that has been preserved.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>a plant on an herbarium sheet</code></li>
  <li class="list-group-item"><code>a cataloged lot of fish in a jar</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>RecordBasisEnum/PreservedSpecimen</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_previousIdentifications"></a>Term Name dwc:previousIdentifications</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/previousIdentifications">http://rs.tdwg.org/dwc/terms/previousIdentifications</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/previousIdentifications-2023-06-28">http://rs.tdwg.org/dwc/terms/version/previousIdentifications-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Previous Identifications</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of previous assignments of names to the dwc:Organism.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Chalepidae</code></li>
  <li class="list-group-item"><code>Pinus abies</code></li>
  <li class="list-group-item"><code>Anthus sp., field ID by G. Iglesias | Anthus correndera, expert ID by C. Cicero 2009-02-12 based on morphology</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification with PreferredFlag = false</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_14">http://rs.tdwg.org/decisions/decision-2014-10-26_14</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_PreviousIdentifications"></a>Term Name dwc:PreviousIdentifications</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/PreviousIdentifications">http://rs.tdwg.org/dwc/terms/PreviousIdentifications</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Previous Identifications</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_previousIdentifications">http://rs.tdwg.org/dwc/terms/previousIdentifications</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of previous ScientificNames to which the sample was identified.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Anthus correndera".</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification with PreferredFlag = false</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_recordedBy"></a>Term Name dwciri:recordedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/recordedBy">http://rs.tdwg.org/dwc/iri/recordedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/recordedBy-2023-06-28">http://rs.tdwg.org/dwc/iri/version/recordedBy-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Recorded By (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A person, group, or organization responsible for recording the original dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_recordedBy"></a>Term Name dwc:recordedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/recordedBy">http://rs.tdwg.org/dwc/terms/recordedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/recordedBy-2023-06-28">http://rs.tdwg.org/dwc/terms/version/recordedBy-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Recorded By</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original dwc:Occurrence. The primary collector or observer, especially one who applies a personal identifier (dwc:recordNumber), should be listed first.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>José E. Crespo</code></li>
  <li class="list-group-item"><code>Oliver P. Pearson | Anita K. Pearson</code> (where the value in recordNumber <code>OPP 7101</code> corresponds to the collector number for the specimen in the field catalog of Oliver P. Pearson)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/GatheringAgents/GatheringAgentsText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_recordedByID"></a>Term Name dwc:recordedByID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/recordedByID">http://rs.tdwg.org/dwc/terms/recordedByID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/recordedByID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/recordedByID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Recorded By ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of the globally unique identifier for the person, people, groups, or organizations responsible for recording the original dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to provide a single identifier that disambiguates the details of the identifying agent. If a list is used, it is recommended to separate the values in the list with space vertical bar space (<code> | </code>). The order of the identifiers on any list for this term can not be guaranteed to convey any semantics.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a></code> (for an individual)</li>
  <li class="list-group-item"><code><a href="https://orcid.org/0000-0002-1825-0097">https://orcid.org/0000-0002-1825-0097</a> | <a href="https://orcid.org/0000-0002-1825-0098">https://orcid.org/0000-0002-1825-0098</a></code> (for a list of people)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_recordNumber"></a>Term Name dwciri:recordNumber</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/recordNumber">http://rs.tdwg.org/dwc/iri/recordNumber</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/recordNumber-2023-06-28">http://rs.tdwg.org/dwc/iri/version/recordNumber-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Record Number (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier given to the dwc:Occurrence at the time it was recorded. Often serves as a link between field notes and a dwc:Occurrence record, such as a specimen collector's number.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The subject is a dwc:Occurrence and the object is a (possibly IRI-identified) resource that is the field notes.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_recordNumber"></a>Term Name dwc:recordNumber</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/recordNumber">http://rs.tdwg.org/dwc/terms/recordNumber</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/recordNumber-2023-06-28">http://rs.tdwg.org/dwc/terms/version/recordNumber-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Record Number</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier given to the dwc:Occurrence at the time it was recorded. Often serves as a link between field notes and a dwc:Occurrence record, such as a specimen collector's number.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>OPP 7101</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/CollectorsFieldNumber</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_references"></a>Term Name dcterms:references</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/references">http://purl.org/dc/terms/references</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://dublincore.org/usage/terms/history/#references-003">http://dublincore.org/usage/terms/history/#references-003</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>References</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A related resource that is referenced, cited, or otherwise pointed to by the described resource.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>From Dublin Core, "This property is intended to be used with non-literal values. This property is an inverse property of Is Referenced By." The intended usage of this term in Darwin Core is to point to the definitive source representation of the resource (e.g.,dwc:Taxon, dwc:Occurrence, dwc:Event), if one is available. Note that the intended usage of dcterms:bibliographicCitation in Darwin Core, by contrast, is to provide the preferred way to cite the resource itself.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="http://arctos.database.museum/guid/MVZ:Mamm:165861">http://arctos.database.museum/guid/MVZ:Mamm:165861</a></code> (MaterialEntity example)</li>
  <li class="list-group-item"><code><a href="https://www.catalogueoflife.org/data/taxon/32664">https://www.catalogueoflife.org/data/taxon/32664</a></code> (Taxon example)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2011-10-16_7">http://rs.tdwg.org/decisions/decision-2011-10-16_7</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_RelatedBasisOfRecord"></a>Term Name dwc:RelatedBasisOfRecord</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/RelatedBasisOfRecord">http://rs.tdwg.org/dwc/terms/RelatedBasisOfRecord</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-01-26</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Related Basis of Record</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature of the related resource. Recommended best practice is to use the same controlled vocabulary as for basisOfRecord.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "PreservedSpecimen"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relatedResourceID"></a>Term Name dwc:relatedResourceID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relatedResourceID">http://rs.tdwg.org/dwc/terms/relatedResourceID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relatedResourceID-2018-09-06">http://rs.tdwg.org/dwc/terms/version/relatedResourceID-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Related Resource ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for a related resource (the object, rather than the subject of the relationship).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>dc609808-b09b-11e8-96f8-529269fb1459</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Associations/UnitAssociation/AssociatedUnitSourceInstitutionCode + DataSets/DataSet/Units/Unit/Associations/UnitAssociation/AssociatedUnitSourceName + DataSets/DataSet/Units/Unit/Associations/UnitAssociation/AssociatedUnitID</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relatedResourceType"></a>Term Name dwc:relatedResourceType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relatedResourceType">http://rs.tdwg.org/dwc/terms/relatedResourceType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Related Resource Type</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The type of the related resource. Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: "StillImage", "MovingImage", "Sound", PhysicalObject", "PreservedSpecimen", FossilSpecimen", LivingSpecimen", "HumanObservation", "MachineObservation", "Location", "Taxonomy", "NomeclaturalChecklist", "Publication"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relationshipAccordingTo"></a>Term Name dwc:relationshipAccordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipAccordingTo">http://rs.tdwg.org/dwc/terms/relationshipAccordingTo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relationshipAccordingTo-2018-09-06">http://rs.tdwg.org/dwc/terms/version/relationshipAccordingTo-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Relationship According To</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The source (person, organization, publication, reference) establishing the relationship between the two resources.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>Julie Woodruff</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relationshipEstablishedDate"></a>Term Name dwc:relationshipEstablishedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipEstablishedDate">http://rs.tdwg.org/dwc/terms/relationshipEstablishedDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relationshipEstablishedDate-2023-06-28">http://rs.tdwg.org/dwc/terms/version/relationshipEstablishedDate-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Relationship Established Date</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date-time on which the relationship between the two resources was established.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1963-03-08T14:07-0600</code> (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC)</li>
  <li class="list-group-item"><code>2009-02-20T08:40Z</code> (20 February 2009 8:40am UTC)</li>
  <li class="list-group-item"><code>2018-08-29T15:19</code> (3:19pm local time on 29 August 2018)</li>
  <li class="list-group-item"><code>1809-02-12</code> (some time during 12 February 1809)</li>
  <li class="list-group-item"><code>1906-06</code> (some time in June 1906)</li>
  <li class="list-group-item"><code>1971</code> (some time in the year 1971)</li>
  <li class="list-group-item"><code>2007-03-01T13:00:00Z/2008-05-11T15:30:00Z</code> (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC)</li>
  <li class="list-group-item"><code>1900/1909</code> (some time during the interval between the beginning of the year 1900 and the end of the year 1909)</li>
  <li class="list-group-item"><code>2007-11-13/15</code> (some time in the interval between 13 November 2007 and 15 November 2007)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relationshipOfResource"></a>Term Name dwc:relationshipOfResource</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipOfResource">http://rs.tdwg.org/dwc/terms/relationshipOfResource</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relationshipOfResource-2023-06-28">http://rs.tdwg.org/dwc/terms/version/relationshipOfResource-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Relationship Of Resource</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The relationship of the subject (identified by dwc:resourceID) to the object (identified by dwc:relatedResourceID).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>same as</code></li>
  <li class="list-group-item"><code>duplicate of</code></li>
  <li class="list-group-item"><code>mother of</code></li>
  <li class="list-group-item"><code>offspring of</code></li>
  <li class="list-group-item"><code>sibling of</code></li>
  <li class="list-group-item"><code>parasite of</code></li>
  <li class="list-group-item"><code>host of</code></li>
  <li class="list-group-item"><code>valid synonym of</code></li>
  <li class="list-group-item"><code>located within</code></li>
  <li class="list-group-item"><code>pollinator of members of taxon</code></li>
  <li class="list-group-item"><code>pollinated specific plant</code></li>
  <li class="list-group-item"><code>pollinated by members of taxon</code></li>
  <li class="list-group-item"><code>on slab with</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Associations/UnitAssociation/AssociationType</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relationshipOfResourceID"></a>Term Name dwc:relationshipOfResourceID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipOfResourceID">http://rs.tdwg.org/dwc/terms/relationshipOfResourceID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relationshipOfResourceID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/relationshipOfResourceID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Relationship Of Resource ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the relationship type (predicate) that connects the subject identified by dwc:resourceID to its object identified by dwc:relatedResourceID.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the identifiers of the terms in a controlled vocabulary, such as the OBO Relation Ontology.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code><a href="http://purl.obolibrary.org/obo/RO_0002456">http://purl.obolibrary.org/obo/RO_0002456</a></code> (for the relation <code>pollinated by</code>)</li>
  <li class="list-group-item"><code><a href="http://purl.obolibrary.org/obo/RO_0002455">http://purl.obolibrary.org/obo/RO_0002455</a></code> (for the relation <code>pollinates</code>)</li>
  <li class="list-group-item"><code><a href="https://www.inaturalist.org/observation_fields/879">https://www.inaturalist.org/observation_fields/879</a></code> (for the relation <code>eaten by</code>)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relationshipRemarks"></a>Term Name dwc:relationshipRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipRemarks">http://rs.tdwg.org/dwc/terms/relationshipRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relationshipRemarks-2023-06-28">http://rs.tdwg.org/dwc/terms/version/relationshipRemarks-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Relationship Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the relationship between the two resources.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>mother and offspring collected from the same nest</code></li>
  <li class="list-group-item"><code>pollinator captured in the act</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Associations/UnitAssociation/Comments</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_reproductiveCondition"></a>Term Name dwciri:reproductiveCondition</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/reproductiveCondition">http://rs.tdwg.org/dwc/iri/reproductiveCondition</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/reproductiveCondition-2023-06-28">http://rs.tdwg.org/dwc/iri/version/reproductiveCondition-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Reproductive Condition (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The reproductive condition of the biological individual(s) represented in the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_reproductiveCondition"></a>Term Name dwc:reproductiveCondition</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/reproductiveCondition">http://rs.tdwg.org/dwc/terms/reproductiveCondition</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/reproductiveCondition-2023-06-28">http://rs.tdwg.org/dwc/terms/version/reproductiveCondition-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Reproductive Condition</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The reproductive condition of the biological individual(s) represented in the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>non-reproductive</code></li>
  <li class="list-group-item"><code>pregnant</code></li>
  <li class="list-group-item"><code>in bloom</code></li>
  <li class="list-group-item"><code>fruit-bearing</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_resourceID"></a>Term Name dwc:resourceID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/resourceID">http://rs.tdwg.org/dwc/terms/resourceID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/resourceID-2018-09-06">http://rs.tdwg.org/dwc/terms/version/resourceID-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Resource ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the resource that is the subject of the relationship.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>f809b9e0-b09b-11e8-96f8-529269fb1459</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_ResourceRelationship"></a>Term Name dwc:ResourceRelationship</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/ResourceRelationship">http://rs.tdwg.org/dwc/terms/ResourceRelationship</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/ResourceRelationship-2023-09-13">http://rs.tdwg.org/dwc/terms/version/ResourceRelationship-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Resource Relationship</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A relationship of one rdfs:Resource (http://www.w3.org/2000/01/rdf-schema#Resource) to another.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Resources can be thought of as identifiable records or instances of classes and may include, but need not be limited to instances of dwc:Occurrence, dwc:Organism, dwc:MaterialEntity, dwc:Event, dcterms:Location, dwc:GeologicalContext, dwc:Identification, or dwc:Taxon.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>an instance of a dwc:Organism is the mother of another instance of a dwc:Organism</code></li>
  <li class="list-group-item"><code>a uniquely identified dwc:Occurrence represents the same dwc:Occurrence as another uniquely identified dwc:Occurrence</code></li>
  <li class="list-group-item"><code>a dwc:MaterialEntity is a subsample of another dwc:MaterialEntity</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Associations</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_resourceRelationshipID"></a>Term Name dwc:resourceRelationshipID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/resourceRelationshipID">http://rs.tdwg.org/dwc/terms/resourceRelationshipID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/resourceRelationshipID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/resourceRelationshipID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Resource Relationship ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for an instance of relationship between one resource (the subject) and another (dwc:relatedResource, the object).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>04b16710-b09c-11e8-96f8-529269fb1459</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_rights"></a>Term Name dcterms:rights</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/rights">http://purl.org/dc/terms/rights</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2008-01-14</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Rights</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dcterms_license">http://purl.org/dc/terms/license</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about rights held in and over the resource.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Typically, rights information includes a statement about various property rights associated with the resource, including intellectual property rights.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-11-06_17">http://rs.tdwg.org/decisions/decision-2014-11-06_17</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_rightsHolder"></a>Term Name dcterms:rightsHolder</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/rightsHolder">http://purl.org/dc/terms/rightsHolder</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2008-01-14</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://dublincore.org/usage/terms/history/#rightsHolder-002">http://dublincore.org/usage/terms/history/#rightsHolder-002</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Rights Holder</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A person or organization owning or managing rights over the resource.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>The Regents of the University of California</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_Sample"></a>Term Name dwc:Sample</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Sample">http://rs.tdwg.org/dwc/terms/Sample</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_Occurrence">http://rs.tdwg.org/dwc/terms/Occurrence</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Container class for information about the results of a sampling event (specimen, observation, etc.)</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttribute"></a>Term Name dwc:SampleAttribute</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttribute">http://rs.tdwg.org/dwc/terms/SampleAttribute</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Attribute</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Container class for information about attributes related to a given sample.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>Datasets/Dataset/Units/Unit/MeasurementsOrFacts</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeAccuracy"></a>Term Name dwc:SampleAttributeAccuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeAccuracy">http://rs.tdwg.org/dwc/terms/SampleAttributeAccuracy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Attribute Accuracy</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_occurrenceMeasurementAccuracy">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementAccuracy</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The description of the error associated with the SampleAttributeValue.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "0.01", "normal distribution with variation of 2 m"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Accuracy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeDeterminedBy"></a>Term Name dwc:SampleAttributeDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeDeterminedBy">http://rs.tdwg.org/dwc/terms/SampleAttributeDeterminedBy</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Attribute Determined By</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_occurrenceMeasurementDeterminedBy">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementDeterminedBy</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The agent responsible for having determined the value of the measurement or characteristic of the sample.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Javier de la Torre"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/MeasuredBy</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeDeterminedDate"></a>Term Name dwc:SampleAttributeDeterminedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeDeterminedDate">http://rs.tdwg.org/dwc/terms/SampleAttributeDeterminedDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Attribute Determined Date</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_occurrenceMeasurementDeterminedDate">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementDeterminedDate</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the the measurement or characteristic of the sample was made.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Date may be used to express temporal information at any level of granularity. Recommended best practice is to use an encoding scheme, such as the W3CDTF profile of ISO 8601 [W3CDTF].</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/MeasurementDateTime</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeRemarks"></a>Term Name dwc:SampleAttributeRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeRemarks">http://rs.tdwg.org/dwc/terms/SampleAttributeRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Attribute Remarks</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes accompanying the measurement or characteristic of the sample.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "tip of tail missing"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeUnit"></a>Term Name dwc:SampleAttributeUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeUnit">http://rs.tdwg.org/dwc/terms/SampleAttributeUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Attribute Unit</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_occurrenceMeasurementUnit">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementUnit</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The units for the value of the measurement or characteristic of the sample. Recommended best practice is to use International System of Units (SI) units.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "mm"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UnitOfMeasurement</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeValue"></a>Term Name dwc:SampleAttributeValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeValue">http://rs.tdwg.org/dwc/terms/SampleAttributeValue</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Attribute Value</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_occurrenceMeasurementValue">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementValue</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The value of the measurement or characteristic of the sample.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "45"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/LowerValue or DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/UpperValue</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleRemarks"></a>Term Name dwc:SampleRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleRemarks">http://rs.tdwg.org/dwc/terms/SampleRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Remarks</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_occurrenceRemarks">http://rs.tdwg.org/dwc/terms/occurrenceRemarks</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the sample or record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "found dead on road"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Notes</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_sampleSizeUnit"></a>Term Name dwc:sampleSizeUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/sampleSizeUnit">http://rs.tdwg.org/dwc/terms/sampleSizeUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/sampleSizeUnit-2023-06-28">http://rs.tdwg.org/dwc/terms/version/sampleSizeUnit-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Size Unit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A dwc:sampleSizeUnit must have a corresponding dwc:sampleSizeValue, e.g., <code>5</code> for dwc:sampleSizeValue with <code>m</code> for dwc:sampleSizeUnit. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>minute</code></li>
  <li class="list-group-item"><code>hour</code></li>
  <li class="list-group-item"><code>day</code></li>
  <li class="list-group-item"><code>metre</code></li>
  <li class="list-group-item"><code>square metre</code></li>
  <li class="list-group-item"><code>cubic metre</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2015-03-19_18">http://rs.tdwg.org/decisions/decision-2015-03-19_18</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_sampleSizeUnit"></a>Term Name dwciri:sampleSizeUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/sampleSizeUnit">http://rs.tdwg.org/dwc/iri/sampleSizeUnit</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/sampleSizeUnit-2023-06-28">http://rs.tdwg.org/dwc/iri/version/sampleSizeUnit-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Size Unit (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A dwciri:sampleSizeUnit must have a corresponding dwc:sampleSizeValue. Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure <a href="http://www.wurvoc.org/vocabularies/om-1.8/">http://www.wurvoc.org/vocabularies/om-1.8/</a> of SI units, derived units, or other non-SI units accepted for use within the SI.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_sampleSizeValue"></a>Term Name dwc:sampleSizeValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/sampleSizeValue">http://rs.tdwg.org/dwc/terms/sampleSizeValue</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/sampleSizeValue-2023-06-28">http://rs.tdwg.org/dwc/terms/version/sampleSizeValue-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Size Value</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A numeric value for a measurement of the size (time duration, length, area, or volume) of a sample in a sampling dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A dwc:sampleSizeValue must have a corresponding dwc:sampleSizeUnit.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>5</code> (sampleSizeValue) with <code>metre</code> (sampleSizeUnit)</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2015-03-19_18">http://rs.tdwg.org/decisions/decision-2015-03-19_18</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingAttributeID"></a>Term Name dwc:SamplingAttributeID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingAttributeID">http://rs.tdwg.org/dwc/terms/SamplingAttributeID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Attribute ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the sampling attribute. May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingAttributeType"></a>Term Name dwc:SamplingAttributeType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingAttributeType">http://rs.tdwg.org/dwc/terms/SamplingAttributeType</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Attribute Type</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature of the measurement or characteristic of the sample. Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "tail length"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/MeasurementsOrFacts/MeasurementOrFact/MeasurementOrFactAtomised/Parameter</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_samplingEffort"></a>Term Name dwc:samplingEffort</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/samplingEffort">http://rs.tdwg.org/dwc/terms/samplingEffort</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/samplingEffort-2023-06-28">http://rs.tdwg.org/dwc/terms/version/samplingEffort-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Effort</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The amount of effort expended during a dwc:Event.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>40 trap-nights</code></li>
  <li class="list-group-item"><code>10 observer-hours</code></li>
  <li class="list-group-item"><code>10 km by foot</code></li>
  <li class="list-group-item"><code>30 km by car</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingEvent"></a>Term Name dwc:SamplingEvent</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingEvent">http://rs.tdwg.org/dwc/terms/SamplingEvent</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Event</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_Event">http://rs.tdwg.org/dwc/terms/Event</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Container class for information about the conditions and methods of acquisition of samples.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingEventAttributes"></a>Term Name dwc:SamplingEventAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingEventAttributes">http://rs.tdwg.org/dwc/terms/SamplingEventAttributes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Event Attributes</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of additional measurements or characteristics of the sampling event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "Relative humidity: 28 %; Temperature: 22 C; Sample size: 10 kg"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteMeasurementsOrFacts</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingEventID"></a>Term Name dwc:SamplingEventID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingEventID">http://rs.tdwg.org/dwc/terms/SamplingEventID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Event ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventID">http://rs.tdwg.org/dwc/terms/eventID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the sampling event. May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Code</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingEventRemarks"></a>Term Name dwc:SamplingEventRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingEventRemarks">http://rs.tdwg.org/dwc/terms/SamplingEventRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Event Remarks</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the sampling event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "found dead on road"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingLocation"></a>Term Name dwc:SamplingLocation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingLocation">http://rs.tdwg.org/dwc/terms/SamplingLocation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Location</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Container class for information about the location where a sampling event occurred.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/LocalityText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingLocationID"></a>Term Name dwc:SamplingLocationID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingLocationID">http://rs.tdwg.org/dwc/terms/SamplingLocationID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Location ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_locationID">http://rs.tdwg.org/dwc/terms/locationID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the sampling location. May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "MVZ:LocID:12345"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingLocationRemarks"></a>Term Name dwc:SamplingLocationRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingLocationRemarks">http://rs.tdwg.org/dwc/terms/SamplingLocationRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-29</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Location Remarks</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_locationRemarks">http://rs.tdwg.org/dwc/terms/locationRemarks</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the sampling location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "under water since 2005"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/AreaDetail</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_samplingProtocol"></a>Term Name dwciri:samplingProtocol</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/samplingProtocol">http://rs.tdwg.org/dwc/iri/samplingProtocol</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/samplingProtocol-2023-06-28">http://rs.tdwg.org/dwc/iri/version/samplingProtocol-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Protocol (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The methods or protocols used during a dwc:Event, denoted by an IRI.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is describe a dwc:Event with no more than one sampling protocol. In the case of a summary dwc:Event in which a specific protocol can not be attributed to specific dwc:Occurrences, the recommended best practice is to repeat the property for each IRI that denotes a different sampling protocol that applies to the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code><a href="https://doi.org/10.1111/j.1466-8238.2009.00467.x">https://doi.org/10.1111/j.1466-8238.2009.00467.x</a></code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_samplingProtocol"></a>Term Name dwc:samplingProtocol</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/samplingProtocol">http://rs.tdwg.org/dwc/terms/samplingProtocol</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/samplingProtocol-2023-06-28">http://rs.tdwg.org/dwc/terms/version/samplingProtocol-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Protocol</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The names of, references to, or descriptions of the methods or protocols used during a dwc:Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is describe a dwc:Event with no more than one sampling protocol. In the case of a summary Event with multiple protocols, in which a specific protocol can not be attributed to specific dwc:Occurrences, the recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>UV light trap</code></li>
  <li class="list-group-item"><code>mist net</code></li>
  <li class="list-group-item"><code>bottom trawl</code></li>
  <li class="list-group-item"><code>ad hoc observation | point count</code></li>
  <li class="list-group-item"><code>Penguins from space: faecal stains reveal the location of emperor penguin colonies, <a href="https://doi.org/10.1111/j.1466-8238.2009.00467.x">https://doi.org/10.1111/j.1466-8238.2009.00467.x</a></code></li>
  <li class="list-group-item"><code>Takats et al. 2001. Guidelines for Nocturnal Owl Monitoring in North America. Beaverhill Bird Observatory and Bird Studies Canada, Edmonton, Alberta. 32 pp., <a href="http://www.bsc-eoc.org/download/Owl.pdf">http://www.bsc-eoc.org/download/Owl.pdf</a></code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Method</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_scientificName"></a>Term Name dwc:scientificName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/scientificName">http://rs.tdwg.org/dwc/terms/scientificName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/scientificName-2023-06-28">http://rs.tdwg.org/dwc/terms/version/scientificName-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Scientific Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name, with authorship and date information if known. When forming part of a dwc:Identification, this should be the name in lowest level taxonomic rank that can be determined. This term should not contain identification qualifications, which should instead be supplied in the dwc:identificationQualifier term.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term should not contain identification qualifications, which should instead be supplied in the IdentificationQualifier term. When applied to an Organism or Occurrence, this term should be used to represent the scientific name that was applied to the associated Organism in accordance with the Taxon to which it was or is currently identified. Names should be compliant to the most recent nomenclatural code. For example, names of hybrids for algae, fungi and plants should follow the rules of the International Code of Nomenclature for algae, fungi, and plants (Schenzhen Code Articles H.1, H.2 and H.3). Thus, use the multiplication sign <code>×</code> (Unicode <code>U+00D7</code>, HTML <code>&times;</code>) to identify a hybrid, not <code>x</code> or <code>X</code>, if possible.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Coleoptera</code> (order)</li>
  <li class="list-group-item"><code>Vespertilionidae</code> (family)</li>
  <li class="list-group-item"><code>Manis</code> (genus)</li>
  <li class="list-group-item"><code>Ctenomys sociabilis</code> (genus + specificEpithet)</li>
  <li class="list-group-item"><code>Ambystoma tigrinum diaboli</code> (genus + specificEpithet + infraspecificEpithet)</li>
  <li class="list-group-item"><code>Roptrocerus typographi (Györfi, 1952)</code> (genus + specificEpithet + scientificNameAuthorship)</li>
  <li class="list-group-item"><code>Quercus agrifolia var. oxyadenia (Torr.) J.T. Howell</code> (genus + specificEpithet + taxonRank + infraspecificEpithet + scientificNameAuthorship)</li>
  <li class="list-group-item"><code>×Agropogon littoralis (Sm.) C. E. Hubb.</code></li>
  <li class="list-group-item"><code>Mentha ×smithiana R. A. Graham</code></li>
  <li class="list-group-item"><code>Agrostis stolonifera L. × Polypogon monspeliensis (L.) Desf.</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/FullScientificNameString</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_scientificNameAuthorship"></a>Term Name dwc:scientificNameAuthorship</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/scientificNameAuthorship">http://rs.tdwg.org/dwc/terms/scientificNameAuthorship</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/scientificNameAuthorship-2023-06-28">http://rs.tdwg.org/dwc/terms/version/scientificNameAuthorship-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Scientific Name Authorship</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The authorship information for the dwc:scientificName formatted according to the conventions of the applicable dwc:nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>(Torr.) J.T. Howell</code></li>
  <li class="list-group-item"><code>(Martinovský) Tzvelev</code></li>
  <li class="list-group-item"><code>(Györfi, 1952)</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>{DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Bacterial/ParentheticalAuthorTeamAndYear + DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Bacterial/AuthorTeamAndYear} or {DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/AuthorTeamParenthesis + DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/AuthorTeam} or {DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Zoological/AuthorTeamOriginalAndYear + [= or] DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Zoological/AuthorTeamParenthesisAndYear}</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_scientificNameID"></a>Term Name dwc:scientificNameID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/scientificNameID">http://rs.tdwg.org/dwc/terms/scientificNameID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/scientificNameID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/scientificNameID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Scientific Name ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the nomenclatural (not taxonomic) details of a scientific name.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>urn:lsid:ipni.org:names:37829-1:1.3</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_scientificNameRank"></a>Term Name dwc:scientificNameRank</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/scientificNameRank">http://rs.tdwg.org/dwc/terms/scientificNameRank</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-09-21</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Scientific Name Rank</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_taxonRank">http://rs.tdwg.org/dwc/terms/taxonRank</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The taxonomic rank of the most specific name in the scientificName. Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: "subsp.", "var.", "forma", "species", "genus"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/Rank</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_sex"></a>Term Name dwc:sex</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/sex">http://rs.tdwg.org/dwc/terms/sex</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/sex-2023-06-28">http://rs.tdwg.org/dwc/terms/version/sex-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sex</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The sex of the biological individual(s) represented in the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>female</code></li>
  <li class="list-group-item"><code>male</code></li>
  <li class="list-group-item"><code>hermaphrodite</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Sex</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_sex"></a>Term Name dwciri:sex</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/sex">http://rs.tdwg.org/dwc/iri/sex</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/sex-2023-06-28">http://rs.tdwg.org/dwc/iri/version/sex-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sex (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The sex of the biological individual(s) represented in the dwc:Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_specificEpithet"></a>Term Name dwc:specificEpithet</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/specificEpithet">http://rs.tdwg.org/dwc/terms/specificEpithet</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/specificEpithet-2023-06-28">http://rs.tdwg.org/dwc/terms/version/specificEpithet-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Specific Epithet</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the first or species epithet of the dwc:scientificName.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>concolor</code></li>
  <li class="list-group-item"><code>gottschei</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>{DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Bacterial/SpeciesEpithet or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/FirstEpithet or DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Zoological/SpeciesEpithet}</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_startDayOfYear"></a>Term Name dwc:startDayOfYear</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/startDayOfYear">http://rs.tdwg.org/dwc/terms/startDayOfYear</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/startDayOfYear-2023-06-28">http://rs.tdwg.org/dwc/terms/version/startDayOfYear-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Start Day Of Year</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The earliest integer day of the year on which the dwc:Event occurred (1 for January 1, 365 for December 31, except in a leap year, in which case it is 366).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1</code> (1 January)</li>
  <li class="list-group-item"><code>366</code> (31 December)</li>
  <li class="list-group-item"><code>365</code> (30 December in a leap year, 31 December in a non-leap year)</li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/DateTime/DayNumberBegin</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_StartTimeOfDay"></a>Term Name dwc:StartTimeOfDay</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/StartTimeOfDay">http://rs.tdwg.org/dwc/terms/StartTimeOfDay</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Start Time of Day</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_eventTime">http://rs.tdwg.org/dwc/terms/eventTime</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The time of day when the event began, expressed as decimal hours from midnight, local time.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: "12.0" (= noon), "13.5" (= 1:30pm)</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>accessible from DataSets/DataSet/Units/Unit/Gathering/ISODateTimeBegin</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_stateProvince"></a>Term Name dwc:stateProvince</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/stateProvince">http://rs.tdwg.org/dwc/terms/stateProvince</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/stateProvince-2023-06-28">http://rs.tdwg.org/dwc/terms/version/stateProvince-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>First Order Division</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Montana</code></li>
  <li class="list-group-item"><code>Minas Gerais</code></li>
  <li class="list-group-item"><code>Córdoba</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= State or = Province (etc.)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_subfamily"></a>Term Name dwc:subfamily</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/subfamily">http://rs.tdwg.org/dwc/terms/subfamily</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/subfamily-2023-06-28">http://rs.tdwg.org/dwc/terms/version/subfamily-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Subfamily</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the subfamily in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Periptyctinae</code></li>
  <li class="list-group-item"><code>Orchidoideae</code></li>
  <li class="list-group-item"><code>Sphindociinae</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/Result/TaxonIdentified/HigherTaxa/HigherTaxon/HigherTaxonName if DataSets/DataSet/Units/Unit/Identifications/Identification/Result/TaxonIdentified/HigherTaxa/HigherTaxon/HigherTaxonRank == "subfamilia"</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_subgenus"></a>Term Name dwc:subgenus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/subgenus">http://rs.tdwg.org/dwc/terms/subgenus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/subgenus-2023-06-28">http://rs.tdwg.org/dwc/terms/version/subgenus-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Subgenus</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the subgenus in which the dwc:Taxon is classified. Values should include the genus to avoid homonym confusion.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Strobus</code></li>
  <li class="list-group-item"><code>Amerigo</code></li>
  <li class="list-group-item"><code>Pilosella</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Zoological/Subgenus</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_subtribe"></a>Term Name dwc:subtribe</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/subtribe">http://rs.tdwg.org/dwc/terms/subtribe</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/subtribe-2023-06-28">http://rs.tdwg.org/dwc/terms/version/subtribe-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Subtribe</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the subtribe in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Plotinini</code></li>
  <li class="list-group-item"><code>Typhaeini</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>ScientificNameIdentified/HigherTaxon/HigherTaxonRank (enumeration value: )</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_superfamily"></a>Term Name dwc:superfamily</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/superfamily">http://rs.tdwg.org/dwc/terms/superfamily</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-07-07</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/superfamily-2023-07-07">http://rs.tdwg.org/dwc/terms/version/superfamily-2023-07-07</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Superfamily</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the superfamily in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A taxonomic category subordinate to an order and superior to a family. According to ICZN article 29.2, the suffix <code>-oidea</code> is used for a superfamily name.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Achatinoidea</code></li>
  <li class="list-group-item"><code>Cerithioidea</code></li>
  <li class="list-group-item"><code>Helicoidea</code></li>
  <li class="list-group-item"><code>Hypsibioidea</code></li>
  <li class="list-group-item"><code>Valvatoidea</code></li>
  <li class="list-group-item"><code>Zonitoidea</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>ScientificNameIdentified/HigherTaxon/HigherTaxonRank (enumeration value: superfamilia)</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_Taxon"></a>Term Name dwc:Taxon</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Taxon">http://rs.tdwg.org/dwc/terms/Taxon</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-18</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/Taxon-2023-09-18">http://rs.tdwg.org/dwc/terms/version/Taxon-2023-09-18</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A group of organisms (sensu http://purl.obolibrary.org/obo/OBI_0100026) considered by taxonomists to form a homogeneous unit.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>the genus Truncorotaloides as published by Brönnimann et al. in 1953 in the Journal of Paleontology Vol. 27(6) p. 817-820</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>no simple equivalent in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-26_15">http://rs.tdwg.org/decisions/decision-2014-10-26_15</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonAccordingTo"></a>Term Name dwc:taxonAccordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonAccordingTo">http://rs.tdwg.org/dwc/terms/taxonAccordingTo</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-09-21</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon According To</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_nameAccordingTo">http://rs.tdwg.org/dwc/terms/nameAccordingTo</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about the authorship of this taxon concept which uses the scientificName in their sense (secundum, sensu). Could be a publication (identification key), institution or team of individuals.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonAttributes"></a>Term Name dwc:taxonAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonAttributes">http://rs.tdwg.org/dwc/terms/taxonAttributes</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-10-09</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Attributes</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of additional measurements, facts, characteristics, or assertions about the taxon.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Example: "iucnstatus=vulnerable; distribution=Neuquen, Argentina"</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/Result/TaxonIdentified/InformalNameString</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonConceptID"></a>Term Name dwc:taxonConceptID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonConceptID">http://rs.tdwg.org/dwc/terms/taxonConceptID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonConceptID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/taxonConceptID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Concept ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the taxonomic concept to which the record refers - not for the nomenclatural details of a dwc:Taxon.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>8fa58e08-08de-4ac1-b69c-1235340b7001</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_TaxonID"></a>Term Name dwc:TaxonID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/TaxonID">http://rs.tdwg.org/dwc/terms/TaxonID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-04-24</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_taxonNameID">http://rs.tdwg.org/dwc/terms/taxonNameID</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A global unique identifier for the taxon (name in a classification).</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonID"></a>Term Name dwc:taxonID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonID">http://rs.tdwg.org/dwc/terms/taxonID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonID-2023-06-28">http://rs.tdwg.org/dwc/terms/version/taxonID-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the set of dwc:Taxon information. May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>8fa58e08-08de-4ac1-b69c-1235340b7001</code></li>
  <li class="list-group-item"><code>32567</code></li>
  <li class="list-group-item"><code><a href="https://www.gbif.org/species/212">https://www.gbif.org/species/212</a></code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonNameID"></a>Term Name dwc:taxonNameID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonNameID">http://rs.tdwg.org/dwc/terms/taxonNameID</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-07-06</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Name ID</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A unique identifier for the scientificName.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonomicStatus"></a>Term Name dwc:taxonomicStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonomicStatus">http://rs.tdwg.org/dwc/terms/taxonomicStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonomicStatus-2023-06-28">http://rs.tdwg.org/dwc/terms/version/taxonomicStatus-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxonomic Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The status of the use of the dwc:scientificName as a label for a taxon. Requires taxonomic opinion to define the scope of a dwc:Taxon. Rules of priority then are used to define the taxonomic status of the nomenclature contained in that scope, combined with the experts opinion. It must be linked to a specific taxonomic reference that defines the concept.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>invalid</code></li>
  <li class="list-group-item"><code>misapplied</code></li>
  <li class="list-group-item"><code>homotypic synonym</code></li>
  <li class="list-group-item"><code>accepted</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonRank"></a>Term Name dwc:taxonRank</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonRank">http://rs.tdwg.org/dwc/terms/taxonRank</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonRank-2023-06-28">http://rs.tdwg.org/dwc/terms/version/taxonRank-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Rank</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The taxonomic rank of the most specific name in the dwc:scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. The taxon ranks of algae, fungi and plants are defined in the International Code of Nomenclature for algae, fungi, and plants (Schenzhen Code Articles H3.2, H4.4 and H.3.1).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>subspecies</code></li>
  <li class="list-group-item"><code>varietas</code></li>
  <li class="list-group-item"><code>forma</code></li>
  <li class="list-group-item"><code>species</code></li>
  <li class="list-group-item"><code>genus</code></li>
  <li class="list-group-item"><code>nothogenus</code></li>
  <li class="list-group-item"><code>nothospecies</code></li>
  <li class="list-group-item"><code>nothosubspecies</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Identifications/Identification/TaxonIdentified/ScientificName/NameAtomised/Botanical/Rank</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonRemarks"></a>Term Name dwc:taxonRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonRemarks">http://rs.tdwg.org/dwc/terms/taxonRemarks</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonRemarks-2017-10-06">http://rs.tdwg.org/dwc/terms/version/taxonRemarks-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the taxon or name.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>this name is a misspelling in common use</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_toTaxon"></a>Term Name dwciri:toTaxon</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/toTaxon">http://rs.tdwg.org/dwc/iri/toTaxon</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/toTaxon-2015-03-27">http://rs.tdwg.org/dwc/iri/version/toTaxon-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>To Taxon</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Use to link a dwc:Identification instance subject to a taxonomic entity such as a taxon, taxon concept, or taxon name use.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A "convenience property" that replaces Darwin Core literal-value terms related to taxonomic entities. See Section 2.7.4 of the Darwin Core RDF Guide for details.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_tribe"></a>Term Name dwc:tribe</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/tribe">http://rs.tdwg.org/dwc/terms/tribe</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/tribe-2023-06-28">http://rs.tdwg.org/dwc/terms/version/tribe-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Tribe</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the tribe in which the dwc:Taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Ortaliini</code></li>
  <li class="list-group-item"><code>Arethuseae</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>ScientificNameIdentified/HigherTaxon/HigherTaxonRank (enumeration value: )</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dc_type"></a>Term Name dc:type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/elements/1.1/type">http://purl.org/dc/elements/1.1/type</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://dublincore.org/usage/terms/history/#type-006">http://dublincore.org/usage/terms/history/#type-006</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Type</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature or genre of the resource.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Must be populated with a value from the DCMI type vocabulary (<a href="http://dublincore.org/documents/2010/10/11/dcmi-type-vocabulary/">http://dublincore.org/documents/2010/10/11/dcmi-type-vocabulary/</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>StillImage</code></li>
  <li class="list-group-item"><code>MovingImage</code></li>
  <li class="list-group-item"><code>Sound</code></li>
  <li class="list-group-item"><code>PhysicalObject</code></li>
  <li class="list-group-item"><code>Event</code></li>
  <li class="list-group-item"><code>Text</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_20">http://rs.tdwg.org/decisions/decision-2019-12-01_20</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_type"></a>Term Name dcterms:type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/type">http://purl.org/dc/terms/type</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2008-01-14</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Type</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dc_type">http://purl.org/dc/elements/1.1/type</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nature or genre of the resource.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>To provide a string literal value for type, use dc:type rather than this term. In accordance with the Darwin Core RDF guide, rdf:type should be used instead of this term to indicate an IRI value for type.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2009-12-07_1">http://rs.tdwg.org/decisions/decision-2009-12-07_1</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_20">http://rs.tdwg.org/decisions/decision-2019-12-01_20</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_typeStatus"></a>Term Name dwciri:typeStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/typeStatus">http://rs.tdwg.org/dwc/iri/typeStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/typeStatus-2015-03-27">http://rs.tdwg.org/dwc/iri/version/typeStatus-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Type Status (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A nomenclatural type (type status, typified scientific name, publication) applied to the subject.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_typeStatus"></a>Term Name dwc:typeStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/typeStatus">http://rs.tdwg.org/dwc/terms/typeStatus</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/typeStatus-2023-06-28">http://rs.tdwg.org/dwc/terms/version/typeStatus-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Type Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of nomenclatural types (type status, typified scientific name, publication) applied to the subject.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (<code> | </code>). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>holotype of Ctenomys sociabilis. Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388</code></li>
  <li class="list-group-item"><code>holotype of Pinus abies | holotype of Picea abies</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/SpecimenUnit/NomenclaturalTypeDesignations/NomenclaturalTypeText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2014-10-30_16">http://rs.tdwg.org/decisions/decision-2014-10-30_16</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimCoordinates"></a>Term Name dwc:verbatimCoordinates</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimCoordinates">http://rs.tdwg.org/dwc/terms/verbatimCoordinates</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimCoordinates-2023-06-28">http://rs.tdwg.org/dwc/terms/version/verbatimCoordinates-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Coordinates</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The verbatim original spatial coordinates of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>41 05 54S 121 05 34W</code></li>
  <li class="list-group-item"><code>17T 630000 4833400</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>{DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLon/CoordinatesText or DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesUTM/UTMText}</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimCoordinateSystem"></a>Term Name dwc:verbatimCoordinateSystem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimCoordinateSystem">http://rs.tdwg.org/dwc/terms/verbatimCoordinateSystem</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimCoordinateSystem-2023-06-28">http://rs.tdwg.org/dwc/terms/version/verbatimCoordinateSystem-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Coordinate System</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The coordinate format for the dwc:verbatimLatitude and dwc:verbatimLongitude or the dwc:verbatimCoordinates of the dcterms:Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>decimal degrees</code></li>
  <li class="list-group-item"><code>degrees decimal minutes</code></li>
  <li class="list-group-item"><code>degrees minutes seconds</code></li>
  <li class="list-group-item"><code>UTM</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>(partly) DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesGrid/GridCellSystem</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_verbatimCoordinateSystem"></a>Term Name dwciri:verbatimCoordinateSystem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/verbatimCoordinateSystem">http://rs.tdwg.org/dwc/iri/verbatimCoordinateSystem</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/verbatimCoordinateSystem-2023-06-28">http://rs.tdwg.org/dwc/iri/version/verbatimCoordinateSystem-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Coordinate System (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The spatial coordinate system for the dwc:verbatimLatitude and dwc:verbatimLongitude or the dwc:verbatimCoordinates of the dcterms:Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimDepth"></a>Term Name dwc:verbatimDepth</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimDepth">http://rs.tdwg.org/dwc/terms/verbatimDepth</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimDepth-2017-10-06">http://rs.tdwg.org/dwc/terms/version/verbatimDepth-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Depth</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The original description of the depth below the local surface.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>100-200 m</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Depth/MeasurementOrFactText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimElevation"></a>Term Name dwc:verbatimElevation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimElevation">http://rs.tdwg.org/dwc/terms/verbatimElevation</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimElevation-2017-10-06">http://rs.tdwg.org/dwc/terms/version/verbatimElevation-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Elevation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The original description of the elevation (altitude, usually above sea level) of the Location.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>100-200 m</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/Altitude/MeasurementOrFactText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimEventDate"></a>Term Name dwc:verbatimEventDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimEventDate">http://rs.tdwg.org/dwc/terms/verbatimEventDate</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimEventDate-2023-06-28">http://rs.tdwg.org/dwc/terms/version/verbatimEventDate-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim EventDate</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The verbatim original representation of the date and time information for a dwc:Event.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>spring 1910</code></li>
  <li class="list-group-item"><code>Marzo 2002</code></li>
  <li class="list-group-item"><code>1999-03-XX</code></li>
  <li class="list-group-item"><code>17IV1934</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/DateTime/DateText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimIdentification"></a>Term Name dwc:verbatimIdentification</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimIdentification">http://rs.tdwg.org/dwc/terms/verbatimIdentification</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimIdentification-2023-06-28">http://rs.tdwg.org/dwc/terms/version/verbatimIdentification-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Identification</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A string representing the taxonomic identification as it appeared in the original record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>This term is meant to allow the capture of an unaltered original identification/determination, including identification qualifiers, hybrid formulas, uncertainties, etc. This term is meant to be used in addition to dwc:scientificName (and dwc:identificationQualifier etc.), not instead of it.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Peromyscus sp.</code></li>
  <li class="list-group-item"><code>Ministrymon sp. nov. 1</code></li>
  <li class="list-group-item"><code>Anser anser × Branta canadensis</code></li>
  <li class="list-group-item"><code>Pachyporidae?</code></li>
  <li class="list-group-item"><code>Potentilla × pantotricha Soják</code></li>
  <li class="list-group-item"><code>Aconitum pilipes × A. variegatum</code></li>
  <li class="list-group-item"><code>Lepomis auritus x cyanellus</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimLabel"></a>Term Name dwc:verbatimLabel</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimLabel">http://rs.tdwg.org/dwc/terms/verbatimLabel</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimLabel-2023-09-13">http://rs.tdwg.org/dwc/terms/version/verbatimLabel-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Label</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The content of this term should include no embellishments, prefixes, headers or other additions made to the text. Abbreviations must not be expanded and supposed misspellings must not be corrected. Lines or breakpoints between blocks of text that could be verified by seeing the original labels or images of them may be used. Examples of material entities include preserved specimens, fossil specimens, and material samples. Best practice is to use UTF-8 for all characters. Best practice is to add comment “verbatimLabel derived from human transcription” in dwc:occurrenceRemarks.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples can be found at <a href="https://dwc.tdwg.org/examples/verbatimLabel">https://dwc.tdwg.org/examples/verbatimLabel</a>.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>Marks/Mark/MarkText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimLatitude"></a>Term Name dwc:verbatimLatitude</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimLatitude">http://rs.tdwg.org/dwc/terms/verbatimLatitude</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimLatitude-2023-06-28">http://rs.tdwg.org/dwc/terms/version/verbatimLatitude-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Latitude</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The verbatim original latitude of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>41 05 54.03S</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLon/VerbatimLatitude</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimLocality"></a>Term Name dwc:verbatimLocality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimLocality">http://rs.tdwg.org/dwc/terms/verbatimLocality</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-07-15</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimLocality-2021-07-15">http://rs.tdwg.org/dwc/terms/version/verbatimLocality-2021-07-15</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Locality</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The original textual description of the place.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>25 km NNE Bariloche por R. Nac. 237</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/LocalityText</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimLongitude"></a>Term Name dwc:verbatimLongitude</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimLongitude">http://rs.tdwg.org/dwc/terms/verbatimLongitude</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimLongitude-2023-06-28">http://rs.tdwg.org/dwc/terms/version/verbatimLongitude-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Longitude</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The verbatim original longitude of the dcterms:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><code>121d 10' 34" W</code></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/SiteCoordinateSets/SiteCoordinates/CoordinatesLatLon/VerbatimLongitude</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimScientificNameRank"></a>Term Name dwc:verbatimScientificNameRank</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimScientificNameRank">http://rs.tdwg.org/dwc/terms/verbatimScientificNameRank</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2009-09-21</td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Scientific Name Rank</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>This term is deprecated and should no longer be used.</strong></td>
		</tr>
		<tr>
			<td>Is replaced by</td>
			<td><a href="#dwc_verbatimTaxonRank">http://rs.tdwg.org/dwc/terms/verbatimTaxonRank</a></td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The taxonomic rank of the most specific name in the scientificName as it appears in the original record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Examples: "Agamospecies", "sub-lesus", "prole", "apomict", "nothogrex".</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_verbatimSRS"></a>Term Name dwciri:verbatimSRS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/verbatimSRS">http://rs.tdwg.org/dwc/iri/verbatimSRS</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/verbatimSRS-2023-06-28">http://rs.tdwg.org/dwc/iri/version/verbatimSRS-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim SRS (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which coordinates given in dwc:verbatimLatitude and dwc:verbatimLongitude, or dwc:verbatimCoordinates are based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI for the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary IRI for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary IRI for the name or code of the ellipsoid, if known.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimSRS"></a>Term Name dwc:verbatimSRS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimSRS">http://rs.tdwg.org/dwc/terms/verbatimSRS</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimSRS-2023-06-28">http://rs.tdwg.org/dwc/terms/version/verbatimSRS-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim SRS</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which coordinates given in dwc:verbatimLatitude and dwc:verbatimLongitude, or dwc:verbatimCoordinates are based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value <code>unknown</code>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>unknown</code></li>
  <li class="list-group-item"><code>EPSG:4326</code></li>
  <li class="list-group-item"><code>WGS84</code></li>
  <li class="list-group-item"><code>NAD27</code></li>
  <li class="list-group-item"><code>Campo Inchauspe</code></li>
  <li class="list-group-item"><code>European 1950</code></li>
  <li class="list-group-item"><code>Clarke 1866</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimTaxonRank"></a>Term Name dwc:verbatimTaxonRank</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimTaxonRank">http://rs.tdwg.org/dwc/terms/verbatimTaxonRank</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimTaxonRank-2023-06-28">http://rs.tdwg.org/dwc/terms/version/verbatimTaxonRank-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Taxon Rank</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The taxonomic rank of the most specific name in the dwc:scientificName as it appears in the original record.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Agamospecies</code></li>
  <li class="list-group-item"><code>sub-lesus</code></li>
  <li class="list-group-item"><code>prole</code></li>
  <li class="list-group-item"><code>apomict</code></li>
  <li class="list-group-item"><code>nothogrex</code></li>
  <li class="list-group-item"><code>sp.</code></li>
  <li class="list-group-item"><code>subsp.</code></li>
  <li class="list-group-item"><code>var.</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_vernacularName"></a>Term Name dwc:vernacularName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/vernacularName">http://rs.tdwg.org/dwc/terms/vernacularName</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/vernacularName-2023-06-28">http://rs.tdwg.org/dwc/terms/version/vernacularName-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Vernacular Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A common or vernacular name.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Andean Condor</code></li>
  <li class="list-group-item"><code>Condor Andino</code></li>
  <li class="list-group-item"><code>American Eagle</code></li>
  <li class="list-group-item"><code>Gänsegeier</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2019-12-01_19">http://rs.tdwg.org/decisions/decision-2019-12-01_19</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verticalDatum"></a>Term Name dwc:verticalDatum</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verticalDatum">http://rs.tdwg.org/dwc/terms/verticalDatum</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verticalDatum-2023-06-28">http://rs.tdwg.org/dwc/terms/version/verticalDatum-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Vertical Datum</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The vertical datum used as the reference upon which the values in the elevation terms are based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>EGM84</code></li>
  <li class="list-group-item"><code>EGM96</code></li>
  <li class="list-group-item"><code>EGM2008</code></li>
  <li class="list-group-item"><code>PGM2000A</code></li>
  <li class="list-group-item"><code>PGM2004</code></li>
  <li class="list-group-item"><code>PGM2006</code></li>
  <li class="list-group-item"><code>PGM2007</code></li>
  <li class="list-group-item"><code>epsg:7030</code></li>
  <li class="list-group-item"><code>unknown</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_verticalDatum"></a>Term Name dwciri:verticalDatum</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/verticalDatum">http://rs.tdwg.org/dwc/iri/verticalDatum</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2021-07-15</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/verticalDatum-2021-07-15">http://rs.tdwg.org/dwc/iri/version/verticalDatum-2021-07-15</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Vertical Datum (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The vertical datum used as the reference upon which the values in the elevation terms are based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2021-07-15_34">http://rs.tdwg.org/decisions/decision-2021-07-15_34</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_vitality"></a>Term Name dwc:vitality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/vitality">http://rs.tdwg.org/dwc/terms/vitality</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/vitality-2023-09-13">http://rs.tdwg.org/dwc/terms/version/vitality-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Vitality</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An indication of whether a dwc:Organism was alive or dead at the time of collection or observation.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Intended to be used with records having a dwc:basisOfRecord of <code>PreservedSpecimen</code>, <code>MaterialEntity</code>, <code>MaterialSample</code>, or <code>HumanObservation</code>. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>alive</code></li>
  <li class="list-group-item"><code>dead</code></li>
  <li class="list-group-item"><code>mixedLot</code></li>
  <li class="list-group-item"><code>uncertain</code></li>
  <li class="list-group-item"><code>notAssessed</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_vitality"></a>Term Name dwciri:vitality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/vitality">http://rs.tdwg.org/dwc/iri/vitality</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-09-13</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/vitality-2023-09-13">http://rs.tdwg.org/dwc/iri/version/vitality-2023-09-13</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Vitality (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An indication of whether a dwc:Organism was alive or dead at the time of collection or observation.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Intended to be used with records having a dwc:basisOfRecord of <code>PreservedSpecimen</code>, <code>MaterialEntity</code>, <code>MaterialSample</code>, or <code>HumanObservation</code>. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>not in ABCD</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-06-28_40">http://rs.tdwg.org/decisions/decision-2023-06-28_40</a></td>
		</tr>
		<tr>
			<td>Executive Committee decision</td>
			<td><a href="http://rs.tdwg.org/decisions/decision-2023-09-13_41">http://rs.tdwg.org/decisions/decision-2023-09-13_41</a></td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_waterBody"></a>Term Name dwc:waterBody</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/waterBody">http://rs.tdwg.org/dwc/terms/waterBody</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/waterBody-2023-06-28">http://rs.tdwg.org/dwc/terms/version/waterBody-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Water Body</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the water body in which the dcterms:Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>Indian Ocean</code></li>
  <li class="list-group-item"><code>Baltic Sea</code></li>
  <li class="list-group-item"><code>Hudson River</code></li>
  <li class="list-group-item"><code>Lago Nahuel Huapi</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>DataSets/DataSet/Units/Unit/Gathering/NamedAreas/NamedArea/AreaName with NamedAreas/NamedArea/AreaClass= Water body</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_year"></a>Term Name dwc:year</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/year">http://rs.tdwg.org/dwc/terms/year</a></td>
		</tr>
		<tr>
			<td>Modified</td>
			<td>2023-06-28</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/year-2023-06-28">http://rs.tdwg.org/dwc/terms/version/year-2023-06-28</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Year</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The four-digit year in which the dwc:Event occurred, according to the Common Era Calendar.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td><ul class="list-group list-group-flush">
  <li class="list-group-item"><code>1160</code></li>
  <li class="list-group-item"><code>2008</code></li>
</ul></td>
		</tr>
		<tr>
			<td>ABCD equivalence</td>
			<td>accessible from DataSets/DataSet/Units/Unit/Gathering/ISODateTimeBegin</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


