# List of Darwin Core terms

Title
: List of Darwin Core terms

Date version issued
: 2020-08-12

Date created
: 2020-08-12

Part of TDWG Standard
: <http://www.tdwg.org/standards/450>

This version
: <http://rs.tdwg.org/dwc/doc/list/2020-08-12>

Latest version
: <http://rs.tdwg.org/dwc/doc/list/>

Abstract
: Darwin Core is a vocabulary standard for transmitting information about biodiversity. This document lists all terms in namespaces currently used in the vocabulary.

Contributors
: John Wieczorek (VertNet), Peter Desmet (INBO), Steve Baskauf (Vanderbilt University Libraries), Tim Robertson (GBIF), Markus Döring (GBIF), Quentin Groom (Botanic Garden Meise), Stijn Van Hoey (INBO), David Bloom (VertNet), Paula Zermoglio (VertNet), Robert Guralnick (University of Florida), John Deck (Genomic Biodiversity Working Group), Gail Kampmeier (INHS), Dave Vieglais (KUNHM), Renato De Giovanni (CRIA), Campbell Webb (TDWG RDF/OWL Task Group), Paul J. Morris (Harvard University Herbaria/Museum of Comparative Zoölogy), Mark Schildhauer (NCEAS)

Creator
: TDWG Darwin Core Maintenance Group

Bibliographic citation
: Darwin Core Maintenance Group. 2020. List of Darwin Core terms. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/doc/list/2020-08-12>


## 1 Introduction (Informative)

This document contains terms that are part of the most recent version of the Darwin Core vocabulary (http://rs.tdwg.org/version/dwc/2020-08-12).

This document includes terms in four namespaces that contain recommended terms: `dwc:`, `dwciri:`, `dc:`, and `dcterms:`. However, some terms in these namespaces are deprecated and should no longer be used. Deprecation is noted in the term metadata. Namespaces that contain only deprecated terms are not included in this document, but metadata about those terms can be retrieved by dereferencing their IRIs.

For a simplified list that contains only the currently recommended terms, see the [Darwin Core Quick Reference Guide](https://dwc.tdwg.org/terms/).

### 1.1 Status of the content of this document

Sections 1 and 3 are non-normative.

Section 2 is normative.

In Section 4, the values of the `Term IRI` and `Definition` are normative. The values of `Term Name` are non-normative, although one can expect that the namespace abbreviation prefix is one commonly used for the term namespace.  `Label` and the values of all other properties (such as `Examples` and `Notes`) are non-normative.

### 1.2 RFC 2119 key words
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

### 1.3 Namespace abbreviations

The following namespace abbreviations are used in this document:

| abbreviation | IRI |
| --- | --- |
| dwc: | http://rs.tdwg.org/dwc/terms/ |
| dwciri: | http://rs.tdwg.org/dwc/iri/ |
| dc: | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/ |

## 2 Use of Terms

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](https://dwc.tdwg.org/rdf/#143-use-of-darwin-core-terms-in-rdf-normative), terms in the `dwciri:` namespace MUST be used with IRI values. Terms in the `dwc:` and `dc:` namespaces are generally expected to have string literal values. Values for terms in the `dcterms:` namespace will depend on the details of the term. See [Section 3 of the Darwin Core RDF Guide](https://dwc.tdwg.org/rdf/#3-term-reference-normative) for details.

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
[dwc:Taxon](#dwc_Taxon) |

**Record level**

[dwc:accordingTo](#dwc_accordingTo) |
[dwc:accuracy](#dwc_accuracy) |
[dwc:DwCType](#dwc_DwCType) |

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
[dwc:associatedReferences](#dwc_associatedReferences) |
[dwc:associatedSequences](#dwc_associatedSequences) |
[dwc:associatedTaxa](#dwc_associatedTaxa) |
[dwc:behavior](#dwc_behavior) |
[dwc:catalogNumber](#dwc_catalogNumber) |
[dwc:CatalogNumberNumeric](#dwc_CatalogNumberNumeric) |
[dwc:disposition](#dwc_disposition) |
[dwc:establishmentMeans](#dwc_establishmentMeans) |
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
[dwc:preparations](#dwc_preparations) |
[dwc:recordedBy](#dwc_recordedBy) |
[dwc:recordNumber](#dwc_recordNumber) |
[dwc:reproductiveCondition](#dwc_reproductiveCondition) |
[dwc:sex](#dwc_sex)

**Organism**

[dwc:associatedOccurrences](#dwc_associatedOccurrences) |
[dwc:associatedOrganisms](#dwc_associatedOrganisms) |
[dwc:organismID](#dwc_organismID) |
[dwc:organismName](#dwc_organismName) |
[dwc:organismRemarks](#dwc_organismRemarks) |
[dwc:organismScope](#dwc_organismScope) |
[dwc:previousIdentifications](#dwc_previousIdentifications)

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
[dwc:georeferenceVerificationStatus](#dwc_georeferenceVerificationStatus) |
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
[dwc:PreviousIdentifications](#dwc_PreviousIdentifications) |
[dwc:typeStatus](#dwc_typeStatus)

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
[dwc:family](#dwc_family) |
[dwc:genus](#dwc_genus) |
[dwc:higherClassification](#dwc_higherClassification) |
[dwc:HigherTaxon](#dwc_HigherTaxon) |
[dwc:higherTaxonconceptID](#dwc_higherTaxonconceptID) |
[dwc:HigherTaxonID](#dwc_HigherTaxonID) |
[dwc:higherTaxonName](#dwc_higherTaxonName) |
[dwc:higherTaxonNameID](#dwc_higherTaxonNameID) |
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
[dwc:subgenus](#dwc_subgenus) |
[dwc:taxonAccordingTo](#dwc_taxonAccordingTo) |
[dwc:taxonAttributes](#dwc_taxonAttributes) |
[dwc:taxonConceptID](#dwc_taxonConceptID) |
[dwc:TaxonID](#dwc_TaxonID) |
[dwc:taxonID](#dwc_taxonID) |
[dwc:taxonNameID](#dwc_taxonNameID) |
[dwc:taxonomicStatus](#dwc_taxonomicStatus) |
[dwc:taxonRank](#dwc_taxonRank) |
[dwc:taxonRemarks](#dwc_taxonRemarks) |
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
[dwc:measurementValue](#dwc_measurementValue)

**Resource Relationship**

[dwc:RelatedBasisOfRecord](#dwc_RelatedBasisOfRecord) |
[dwc:relatedResourceID](#dwc_relatedResourceID) |
[dwc:relatedResourceType](#dwc_relatedResourceType) |
[dwc:relationshipAccordingTo](#dwc_relationshipAccordingTo) |
[dwc:relationshipEstablishedDate](#dwc_relationshipEstablishedDate) |
[dwc:relationshipOfResource](#dwc_relationshipOfResource) |
[dwc:relationshipRemarks](#dwc_relationshipRemarks) |
[dwc:resourceID](#dwc_resourceID) |
[dwc:resourceRelationshipID](#dwc_resourceRelationshipID)

**IRI-value terms**

[dwciri:behavior](#dwciri_behavior) |
[dwciri:dataGeneralizations](#dwciri_dataGeneralizations) |
[dwciri:disposition](#dwciri_disposition) |
[dwciri:earliestGeochronologicalEra](#dwciri_earliestGeochronologicalEra) |
[dwciri:establishmentMeans](#dwciri_establishmentMeans) |
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
[dwciri:occurrenceStatus](#dwciri_occurrenceStatus) |
[dwciri:organismQuantityType](#dwciri_organismQuantityType) |
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
[dwciri:verbatimSRS](#dwciri_verbatimSRS)

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
[Material Sample](#dwc_MaterialSample) |
[Measurement or Fact](#dwc_MeasurementOrFact) |
[Occurrence](#dwc_Occurrence) |
[Occurrence Measurement](#dwc_OccurrenceMeasurement) |
[Organism](#dwc_Organism) |
[Preserved Specimen](#dwc_PreservedSpecimen) |
[Resource Relationship](#dwc_ResourceRelationship) |
[Sample](#dwc_Sample) |
[Sample Attribute](#dwc_SampleAttribute) |
[Sampling Event](#dwc_SamplingEvent) |
[Sampling Location](#dwc_SamplingLocation) |
[Taxon](#dwc_Taxon) |

**Record level**

[According To](#dwc_accordingTo) |
[Accuracy](#dwc_accuracy) |
[Darwin Core Type](#dwc_DwCType) |

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
[Associated References](#dwc_associatedReferences) |
[Associated Sequences](#dwc_associatedSequences) |
[Associated Taxa](#dwc_associatedTaxa) |
[Behavior](#dwc_behavior) |
[Catalog Number](#dwc_catalogNumber) |
[Catalog Number Numeric](#dwc_CatalogNumberNumeric) |
[Disposition](#dwc_disposition) |
[Establishment Means](#dwc_establishmentMeans) |
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
[Preparations](#dwc_preparations) |
[Record Number](#dwc_recordNumber) |
[Recorded By](#dwc_recordedBy) |
[Reproductive Condition](#dwc_reproductiveCondition) |
[Sex](#dwc_sex)

**Organism**

[Associated Occurrences](#dwc_associatedOccurrences) |
[Associated Organisms](#dwc_associatedOrganisms) |
[Organism ID](#dwc_organismID) |
[Organism Name](#dwc_organismName) |
[Organism Remarks](#dwc_organismRemarks) |
[Organism Scope](#dwc_organismScope) |
[Previous Identifications](#dwc_previousIdentifications)

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
[County](#dwc_county) |
[Decimal Latitude](#dwc_decimalLatitude) |
[Decimal Longitude](#dwc_decimalLongitude) |
[Footprint SRS](#dwc_footprintSRS) |
[Footprint Spatial Fit](#dwc_footprintSpatialFit) |
[Footprint WKT](#dwc_footprintWKT) |
[Geodetic Datum](#dwc_geodeticDatum) |
[Georeference Protocol](#dwc_georeferenceProtocol) |
[Georeference Remarks](#dwc_georeferenceRemarks) |
[Georeference Sources](#dwc_georeferenceSources) |
[Georeference Verification Status](#dwc_georeferenceVerificationStatus) |
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
[Municipality](#dwc_municipality) |
[Point Radius Spatial Fit](#dwc_pointRadiusSpatialFit) |
[Sampling Location ID](#dwc_SamplingLocationID) |
[Sampling Location Remarks](#dwc_SamplingLocationRemarks) |
[State Province](#dwc_stateProvince) |
[Verbatim Coordinate System](#dwc_verbatimCoordinateSystem) |
[Verbatim Coordinates](#dwc_verbatimCoordinates) |
[Verbatim Depth](#dwc_verbatimDepth) |
[Verbatim Elevation](#dwc_verbatimElevation) |
[Verbatim Latitude](#dwc_verbatimLatitude) |
[Verbatim Locality](#dwc_verbatimLocality) |
[Verbatim Longitude](#dwc_verbatimLongitude) |
[Verbatim SRS](#dwc_verbatimSRS) |
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
[Latest AgeOr Highest Stage](#dwc_latestAgeOrHighestStage) |
[Latest Eon Or Highest Eonothem](#dwc_latestEonOrHighestEonothem) |
[Latest Epoch Or Highest Series](#dwc_latestEpochOrHighestSeries) |
[Latest Era Or Highest Erathem](#dwc_latestEraOrHighestErathem) |
[Latest Period Or Highest System](#dwc_latestPeriodOrHighestSystem) |
[Lithostratigraphic Terms](#dwc_lithostratigraphicTerms) |
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
[Previous Identifications](#dwc_PreviousIdentifications) |
[Type Status](#dwc_typeStatus)

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
[Family](#dwc_family) |
[Genus](#dwc_genus) |
[Higher Classification](#dwc_higherClassification) |
[Higher Taxon](#dwc_HigherTaxon) |
[Higher Taxon Concept ID](#dwc_higherTaxonconceptID) |
[Higher Taxon ID](#dwc_HigherTaxonID) |
[Higher Taxon Name](#dwc_higherTaxonName) |
[Higher Taxon Name ID](#dwc_higherTaxonNameID) |
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
[Subgenus](#dwc_subgenus) |
[Taxon According To](#dwc_taxonAccordingTo) |
[Taxon Attributes](#dwc_taxonAttributes) |
[Taxon Concept ID](#dwc_taxonConceptID) |
[Taxon ID](#dwc_TaxonID) |
[Taxon Name ID](#dwc_taxonNameID) |
[Taxon Rank](#dwc_taxonRank) |
[Taxon Remarks](#dwc_taxonRemarks) |
[Taxonomic Status](#dwc_taxonomicStatus) |
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
[Measurement Value](#dwc_measurementValue)

**Resource Relationship**

[Related Basis of Record](#dwc_RelatedBasisOfRecord) |
[Related Resource ID](#dwc_relatedResourceID) |
[Related Resource Type](#dwc_relatedResourceType) |
[Relationship According To](#dwc_relationshipAccordingTo) |
[Relationship Established Date](#dwc_relationshipEstablishedDate) |
[Relationship Of Resource](#dwc_relationshipOfResource) |
[Relationship Remarks](#dwc_relationshipRemarks) |
[Resource ID](#dwc_resourceID) |
[Resource Relationship ID](#dwc_resourceRelationshipID)

**IRI-value terms**

[Behavior (IRI)](#dwciri_behavior) |
[Data Generalizations (IRI)](#dwciri_dataGeneralizations) |
[Disposition (IRI)](#dwciri_disposition) |
[Earliest Geochronological Era](#dwciri_earliestGeochronologicalEra) |
[Establishment Means (IRI)](#dwciri_establishmentMeans) |
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
[Occurrence Status (IRI)](#dwciri_occurrenceStatus) |
[Organism Quantity Type (IRI)](#dwciri_organismQuantityType) |
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
[Verbatim SRS (IRI)](#dwciri_verbatimSRS)

## 4 Vocabulary
<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedNameUsage"></a>Term Name  dwc:acceptedNameUsage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedNameUsage">http://rs.tdwg.org/dwc/terms/acceptedNameUsage</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/acceptedNameUsage-2017-10-06">http://rs.tdwg.org/dwc/terms/version/acceptedNameUsage-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Accepted Name Usage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name, with authorship and date information if known, of the currently valid (zoological) or accepted (botanical) taxon.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Tamias minimus` (valid name for Eutamias minimus).</td>
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
			<th colspan="2"><a id="dwc_acceptedNameUsageID"></a>Term Name  dwc:acceptedNameUsageID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedNameUsageID">http://rs.tdwg.org/dwc/terms/acceptedNameUsageID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/acceptedNameUsageID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/acceptedNameUsageID-2017-10-06</a></td>
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
			<td>Examples</td>
			<td>`8fa58e08-08de-4ac1-b69c-1235340b7001`</td>
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
			<th colspan="2"><a id="dwc_acceptedScientificName"></a>Term Name  dwc:acceptedScientificName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedScientificName">http://rs.tdwg.org/dwc/terms/acceptedScientificName</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedScientificNameID"></a>Term Name  dwc:acceptedScientificNameID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedScientificNameID">http://rs.tdwg.org/dwc/terms/acceptedScientificNameID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_AcceptedTaxon"></a>Term Name  dwc:AcceptedTaxon</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/AcceptedTaxon">http://rs.tdwg.org/dwc/terms/AcceptedTaxon</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_AcceptedTaxonID"></a>Term Name  dwc:AcceptedTaxonID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/AcceptedTaxonID">http://rs.tdwg.org/dwc/terms/AcceptedTaxonID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedTaxonID"></a>Term Name  dwc:acceptedTaxonID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedTaxonID">http://rs.tdwg.org/dwc/terms/acceptedTaxonID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedTaxonName"></a>Term Name  dwc:acceptedTaxonName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedTaxonName">http://rs.tdwg.org/dwc/terms/acceptedTaxonName</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_acceptedTaxonNameID"></a>Term Name  dwc:acceptedTaxonNameID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/acceptedTaxonNameID">http://rs.tdwg.org/dwc/terms/acceptedTaxonNameID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_AccessConstraints"></a>Term Name  dwc:AccessConstraints</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/AccessConstraints">http://rs.tdwg.org/dwc/terms/AccessConstraints</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_accessRights"></a>Term Name  dcterms:accessRights</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/accessRights">http://purl.org/dc/terms/accessRights</a></td>
		</tr>
			<td>Modified</td>
			<td>2008-01-14</td>
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
			<td>`not-for-profit use only`, `<a href="https://www.fieldmuseum.org/field-museum-natural-history-conditions-and-suggested-norms-use-collections-data-and-images`">https://www.fieldmuseum.org/field-museum-natural-history-conditions-and-suggested-norms-use-collections-data-and-images`</a></td>
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
			<th colspan="2"><a id="dwc_accordingTo"></a>Term Name  dwc:accordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/accordingTo">http://rs.tdwg.org/dwc/terms/accordingTo</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_accuracy"></a>Term Name  dwc:accuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/accuracy">http://rs.tdwg.org/dwc/terms/accuracy</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_associatedMedia"></a>Term Name  dwc:associatedMedia</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedMedia">http://rs.tdwg.org/dwc/terms/associatedMedia</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedMedia-2020-08-12">http://rs.tdwg.org/dwc/terms/version/associatedMedia-2020-08-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated Media</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers (publication, global unique identifier, URI) of media associated with the Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="https://arctos.database.museum/media/10520962">https://arctos.database.museum/media/10520962</a> | <a href="https://arctos.database.museum/media/10520964`">https://arctos.database.museum/media/10520964`</a></td>
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
			<th colspan="2"><a id="dwc_associatedOccurrences"></a>Term Name  dwc:associatedOccurrences</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedOccurrences">http://rs.tdwg.org/dwc/terms/associatedOccurrences</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedOccurrences-2017-10-06">http://rs.tdwg.org/dwc/terms/version/associatedOccurrences-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated Occurrences</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers of other Occurrence records and their associations to this Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3175067</a> | <a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177393</a> | <a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177394">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177394</a> | <a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177392">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3177392</a> | <a href="http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3609139`">http://arctos.database.museum/guid/MSB:Mamm:292063?seid=3609139`</a></td>
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
			<th colspan="2"><a id="dwc_associatedOrganisms"></a>Term Name  dwc:associatedOrganisms</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedOrganisms">http://rs.tdwg.org/dwc/terms/associatedOrganisms</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedOrganisms-2017-10-06">http://rs.tdwg.org/dwc/terms/version/associatedOrganisms-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated Organisms</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers of other Organisms and their associations to this Organism.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`"sibling of":"DMNS:Mamm <a href="http://arctos.database.museum/guid/DMNS:Mamm:14171">http://arctos.database.museum/guid/DMNS:Mamm:14171</a>"`, `"parent of":"MSB:Mamm <a href="http://arctos.database.museum/guid/MSB:Mamm:196208">http://arctos.database.museum/guid/MSB:Mamm:196208</a>" | "parent of":"MSB:Mamm <a href="http://arctos.database.museum/guid/MSB:Mamm:196523">http://arctos.database.museum/guid/MSB:Mamm:196523</a>" | "sibling of":"MSB:Mamm <a href="http://arctos.database.museum/guid/MSB:Mamm:142638">http://arctos.database.museum/guid/MSB:Mamm:142638</a>"`</td>
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
			<th colspan="2"><a id="dwc_associatedReferences"></a>Term Name  dwc:associatedReferences</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedReferences">http://rs.tdwg.org/dwc/terms/associatedReferences</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedReferences-2017-10-06">http://rs.tdwg.org/dwc/terms/version/associatedReferences-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated References</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers (publication, bibliographic reference, global unique identifier, URI) of literature associated with the Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="http://www.sciencemag.org/cgi/content/abstract/322/5899/261`">http://www.sciencemag.org/cgi/content/abstract/322/5899/261`</a>, `Christopher J. Conroy, Jennifer L. Neuwald. 2008. Phylogeographic study of the California vole, Microtus californicus Journal of Mammalogy, 89(3):755-767.`, `Steven R. Hoofer and Ronald A. Van Den Bussche. 2001. Phylogenetic Relationships of Plecotine Bats and Allies Based on Mitochondrial Ribosomal Sequences. Journal of Mammalogy 82(1):131-137. | Walker, Faith M., Jeffrey T. Foster, Kevin P. Drees, Carol L. Chambers. 2014. Spotted bat (Euderma maculatum) microsatellite discovery using illumina sequencing. Conservation Genetics Resources.`</td>
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
			<th colspan="2"><a id="dwc_associatedSequences"></a>Term Name  dwc:associatedSequences</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedSequences">http://rs.tdwg.org/dwc/terms/associatedSequences</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedSequences-2017-10-06">http://rs.tdwg.org/dwc/terms/version/associatedSequences-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated Sequences</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers (publication, global unique identifier, URI) of genetic sequence information associated with the Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="http://www.ncbi.nlm.nih.gov/nuccore/U34853.1`">http://www.ncbi.nlm.nih.gov/nuccore/U34853.1`</a>, `<a href="http://www.ncbi.nlm.nih.gov/nuccore/GU328060">http://www.ncbi.nlm.nih.gov/nuccore/GU328060</a> | <a href="http://www.ncbi.nlm.nih.gov/nuccore/AF326093`">http://www.ncbi.nlm.nih.gov/nuccore/AF326093`</a></td>
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
			<th colspan="2"><a id="dwc_associatedTaxa"></a>Term Name  dwc:associatedTaxa</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/associatedTaxa">http://rs.tdwg.org/dwc/terms/associatedTaxa</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/associatedTaxa-2017-10-06">http://rs.tdwg.org/dwc/terms/version/associatedTaxa-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Associated Taxa</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of identifiers or names of taxa and their associations with the Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`"host":"Quercus alba"`, `"parasitoid of":"Cyclocephala signaticollis" | "predator of":"Apis mellifera"`</td>
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
			<th colspan="2"><a id="dwc_basionym"></a>Term Name  dwc:basionym</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/basionym">http://rs.tdwg.org/dwc/terms/basionym</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_basionymID"></a>Term Name  dwc:basionymID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/basionymID">http://rs.tdwg.org/dwc/terms/basionymID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_basisOfRecord"></a>Term Name  dwc:basisOfRecord</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/basisOfRecord">http://rs.tdwg.org/dwc/terms/basisOfRecord</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/basisOfRecord-2017-10-06">http://rs.tdwg.org/dwc/terms/version/basisOfRecord-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Basis of Record</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The specific nature of the data record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the standard label of one of the Darwin Core classes.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`PreservedSpecimen`, `FossilSpecimen`, `LivingSpecimen`, `MaterialSample`, `Event`, `HumanObservation`, `MachineObservation`, `Taxon`, `Occurrence`</td>
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
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_bed"></a>Term Name  dwc:bed</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/bed">http://rs.tdwg.org/dwc/terms/bed</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/bed-2017-10-06">http://rs.tdwg.org/dwc/terms/version/bed-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Bed</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the lithostratigraphic bed from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Harlem coal`</td>
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
			<th colspan="2"><a id="dwciri_behavior"></a>Term Name  dwciri:behavior</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/behavior">http://rs.tdwg.org/dwc/iri/behavior</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/behavior-2015-03-27">http://rs.tdwg.org/dwc/iri/version/behavior-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Behavior (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A description of the behavior shown by the subject at the time the Occurrence was recorded.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_behavior"></a>Term Name  dwc:behavior</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/behavior">http://rs.tdwg.org/dwc/terms/behavior</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/behavior-2017-10-06">http://rs.tdwg.org/dwc/terms/version/behavior-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Behavior</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The behavior shown by the subject at the time the Occurrence was recorded.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`roosting`, `foraging`, `running`</td>
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
			<th colspan="2"><a id="dcterms_bibliographicCitation"></a>Term Name  dcterms:bibliographicCitation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/bibliographicCitation">http://purl.org/dc/terms/bibliographicCitation</a></td>
		</tr>
			<td>Modified</td>
			<td>2008-01-14</td>
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
			<td>A bibliographic reference for the resource as a statement indicating how this record should be cited (attributed) when used.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended practice is to include sufficient bibliographic detail to identify the resource as unambiguously as possible.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>Specimen example: `Museum of Vertebrate Zoology, UC Berkeley. MVZ Mammal Collection (Arctos). Record ID: <a href="http://arctos.database.museum/guid/MVZ:Mamm:165861?seid=101356">http://arctos.database.museum/guid/MVZ:Mamm:165861?seid=101356</a>. Source: <a href="http://ipt.vertnet.org:8080/ipt/resource.do?r=mvz_mammal`">http://ipt.vertnet.org:8080/ipt/resource.do?r=mvz_mammal`</a>. Taxon example: `Oliver P. Pearson. 1985. Los tuco-tucos (genera Ctenomys) de los Parques Nacionales Lanin y Nahuel Huapi, Argentina Historia Natural, 5(37):337-343.`.</td>
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
			<th colspan="2"><a id="dwc_binomial"></a>Term Name  dwc:binomial</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/binomial">http://rs.tdwg.org/dwc/terms/binomial</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_catalogNumber"></a>Term Name  dwc:catalogNumber</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/catalogNumber">http://rs.tdwg.org/dwc/terms/catalogNumber</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/catalogNumber-2017-10-06">http://rs.tdwg.org/dwc/terms/version/catalogNumber-2017-10-06</a></td>
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
			<td>`145732`, `145732a`, `2008.1334`, `R-4313`</td>
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
			<th colspan="2"><a id="dwc_CatalogNumberNumeric"></a>Term Name  dwc:CatalogNumberNumeric</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/CatalogNumberNumeric">http://rs.tdwg.org/dwc/terms/CatalogNumberNumeric</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_class"></a>Term Name  dwc:class</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/class">http://rs.tdwg.org/dwc/terms/class</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/class-2017-10-06">http://rs.tdwg.org/dwc/terms/version/class-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Class</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the class in which the taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Mammalia`, `Hepaticopsida`</td>
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
			<th colspan="2"><a id="dwc_collectionCode"></a>Term Name  dwc:collectionCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/collectionCode">http://rs.tdwg.org/dwc/terms/collectionCode</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/collectionCode-2017-10-06">http://rs.tdwg.org/dwc/terms/version/collectionCode-2017-10-06</a></td>
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
			<td>`Mammals`, `Hildebrandt`, `EBIRD`, `VP`</td>
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
			<th colspan="2"><a id="dwc_collectionID"></a>Term Name  dwc:collectionID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/collectionID">http://rs.tdwg.org/dwc/terms/collectionID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/collectionID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/collectionID-2017-10-06</a></td>
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
			<td>For physical specimens, the recommended best practice is to use an identifier from a collections registry such as the Global Registry of Biodiversity Repositories (<a href="http://grbio.org/">http://grbio.org/</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="http://biocol.org/urn:lsid:biocol.org:col:1001`">http://biocol.org/urn:lsid:biocol.org:col:1001`</a>, `<a href="http://grbio.org/cool/p5fp-c036`">http://grbio.org/cool/p5fp-c036`</a></td>
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
			<th colspan="2"><a id="dwc_continent"></a>Term Name  dwc:continent</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/continent">http://rs.tdwg.org/dwc/terms/continent</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/continent-2017-10-06">http://rs.tdwg.org/dwc/terms/version/continent-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Continent</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the continent in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Africa`, `Antarctica`, `Asia`, `Europe`, `North America`, `Oceania`, `South America`</td>
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
			<th colspan="2"><a id="dwc_coordinatePrecision"></a>Term Name  dwc:coordinatePrecision</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/coordinatePrecision">http://rs.tdwg.org/dwc/terms/coordinatePrecision</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/coordinatePrecision-2017-10-06">http://rs.tdwg.org/dwc/terms/version/coordinatePrecision-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Coordinate Precision</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A decimal representation of the precision of the coordinates given in the decimalLatitude and decimalLongitude.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`0.00001` (normal GPS limit for decimal degrees). `0.000278` (nearest second). `0.01667` (nearest minute). `1.0` (nearest degree).</td>
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
			<th colspan="2"><a id="dwc_coordinateUncertaintyInMeters"></a>Term Name  dwc:coordinateUncertaintyInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters">http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/coordinateUncertaintyInMeters-2017-10-06">http://rs.tdwg.org/dwc/terms/version/coordinateUncertaintyInMeters-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Coordinate Uncertainty In Meters</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The horizontal distance (in meters) from the given decimalLatitude and decimalLongitude describing the smallest circle containing the whole of the Location. Leave the value empty if the uncertainty is unknown, cannot be estimated, or is not applicable (because there are no coordinates). Zero is not a valid value for this term.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`30` (reasonable lower limit of a GPS reading under good conditions if the actual precision was not recorded at the time). `71` (uncertainty for a UTM coordinate having 100 meter precision and a known spatial reference system).</td>
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
			<th colspan="2"><a id="dwc_country"></a>Term Name  dwc:country</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/country">http://rs.tdwg.org/dwc/terms/country</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/country-2017-10-06">http://rs.tdwg.org/dwc/terms/version/country-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Country</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the country or major administrative unit in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Denmark`, `Colombia`, `España`</td>
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
			<th colspan="2"><a id="dwc_countryCode"></a>Term Name  dwc:countryCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/countryCode">http://rs.tdwg.org/dwc/terms/countryCode</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/countryCode-2017-10-06">http://rs.tdwg.org/dwc/terms/version/countryCode-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Country Code</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The standard code for the country in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an ISO 3166-1-alpha-2 country code.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`AR`, `SV`</td>
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
			<th colspan="2"><a id="dwc_county"></a>Term Name  dwc:county</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/county">http://rs.tdwg.org/dwc/terms/county</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/county-2017-10-06">http://rs.tdwg.org/dwc/terms/version/county-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>County</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Missoula`, `Los Lagos`, `Mataró`</td>
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
			<th colspan="2"><a id="dwc_dataGeneralizations"></a>Term Name  dwc:dataGeneralizations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/dataGeneralizations">http://rs.tdwg.org/dwc/terms/dataGeneralizations</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/dataGeneralizations-2017-10-06">http://rs.tdwg.org/dwc/terms/version/dataGeneralizations-2017-10-06</a></td>
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
			<td>Examples</td>
			<td>`Coordinates generalized from original GPS coordinates to the nearest half degree grid cell`.</td>
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
			<th colspan="2"><a id="dwciri_dataGeneralizations"></a>Term Name  dwciri:dataGeneralizations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/dataGeneralizations">http://rs.tdwg.org/dwc/iri/dataGeneralizations</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_Dataset"></a>Term Name  dwc:Dataset</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Dataset">http://rs.tdwg.org/dwc/terms/Dataset</a></td>
		</tr>
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
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_datasetID"></a>Term Name  dwc:datasetID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/datasetID">http://rs.tdwg.org/dwc/terms/datasetID</a></td>
		</tr>
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
			<td>`b15d4952-7d20-46f1-8a3e-556a512b04c5`</td>
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
			<th colspan="2"><a id="dwc_datasetName"></a>Term Name  dwc:datasetName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/datasetName">http://rs.tdwg.org/dwc/terms/datasetName</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/datasetName-2017-10-06">http://rs.tdwg.org/dwc/terms/version/datasetName-2017-10-06</a></td>
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
			<td>`Grinnell Resurvey Mammals`, `Lacey Ctenomys Recaptures`</td>
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
			<th colspan="2"><a id="dwc_dateIdentified"></a>Term Name  dwc:dateIdentified</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/dateIdentified">http://rs.tdwg.org/dwc/terms/dateIdentified</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/dateIdentified-2020-08-12">http://rs.tdwg.org/dwc/terms/version/dateIdentified-2020-08-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Date Identified</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the subject was determined as representing the Taxon.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`1963-03-08T14:07-0600` (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). `2009-02-20T08:40Z` (20 February 2009 8:40am UTC). `2018-08-29T15:19` (3:19pm local time on 29 August 2018). `1809-02-12` (some time during 12 February 1809). `1906-06` (some time in June 1906). `1971` (some time in the year 1971). `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). `1900/1909` (some time during the interval between the beginning of the year 1900 and the end of the year 1909). `2007-11-13/15` (some time in the interval between 13 November 2007 and 15 November 2007).</td>
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
			<th colspan="2"><a id="dwc_day"></a>Term Name  dwc:day</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/day">http://rs.tdwg.org/dwc/terms/day</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/day-2017-10-06">http://rs.tdwg.org/dwc/terms/version/day-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Day</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The integer day of the month on which the Event occurred.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`9`, `28`</td>
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
			<th colspan="2"><a id="dwc_decimalLatitude"></a>Term Name  dwc:decimalLatitude</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/decimalLatitude">http://rs.tdwg.org/dwc/terms/decimalLatitude</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/decimalLatitude-2017-10-06">http://rs.tdwg.org/dwc/terms/version/decimalLatitude-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Decimal Latitude</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The geographic latitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are north of the Equator, negative values are south of it. Legal values lie between -90 and 90, inclusive.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`-41.0983423`</td>
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
			<th colspan="2"><a id="dwc_decimalLongitude"></a>Term Name  dwc:decimalLongitude</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/decimalLongitude">http://rs.tdwg.org/dwc/terms/decimalLongitude</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/decimalLongitude-2017-10-06">http://rs.tdwg.org/dwc/terms/version/decimalLongitude-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Decimal Longitude</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The geographic longitude (in decimal degrees, using the spatial reference system given in geodeticDatum) of the geographic center of a Location. Positive values are east of the Greenwich Meridian, negative values are west of it. Legal values lie between -180 and 180, inclusive.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`-121.1761111`</td>
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
			<th colspan="2"><a id="dwciri_disposition"></a>Term Name  dwciri:disposition</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/disposition">http://rs.tdwg.org/dwc/iri/disposition</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/disposition-2015-03-27">http://rs.tdwg.org/dwc/iri/version/disposition-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Disposition (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The current state of a specimen with respect to the collection identified in collectionCode or collectionID.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_disposition"></a>Term Name  dwc:disposition</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/disposition">http://rs.tdwg.org/dwc/terms/disposition</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/disposition-2017-10-06">http://rs.tdwg.org/dwc/terms/version/disposition-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Disposition</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The current state of a specimen with respect to the collection identified in collectionCode or collectionID.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`in collection`, `missing`, `voucher elsewhere`, `duplicates elsewhere`</td>
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
			<th colspan="2"><a id="dwc_DwCType"></a>Term Name  dwc:DwCType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/DwCType">http://rs.tdwg.org/dwc/terms/DwCType</a></td>
		</tr>
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
			<td>Type</td>
			<td>http://purl.org/dc/dcam/VocabularyEncodingScheme</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_dynamicProperties"></a>Term Name  dwc:dynamicProperties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/dynamicProperties">http://rs.tdwg.org/dwc/terms/dynamicProperties</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/dynamicProperties-2017-10-06">http://rs.tdwg.org/dwc/terms/version/dynamicProperties-2017-10-06</a></td>
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
			<td>`{"heightInMeters":1.5}`, `{"tragusLengthInMeters":0.014, "weightInGrams":120}`, `{"natureOfID":"expert identification", "identificationEvidence":"cytochrome B sequence"}`, `{"relativeHumidity":28, "airTemperatureInCelsius":22, "sampleSizeInKilograms":10}`, `{"aspectHeading":277, "slopeInDegrees":6}`, `{"iucnStatus":"vulnerable", "taxonDistribution":"Neuquén, Argentina"}`</td>
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
			<th colspan="2"><a id="dwc_earliestAgeOrLowestStage"></a>Term Name  dwc:earliestAgeOrLowestStage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/earliestAgeOrLowestStage">http://rs.tdwg.org/dwc/terms/earliestAgeOrLowestStage</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/earliestAgeOrLowestStage-2017-10-06">http://rs.tdwg.org/dwc/terms/version/earliestAgeOrLowestStage-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Age Or Lowest Stage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the earliest possible geochronologic age or lowest chronostratigraphic stage attributable to the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Atlantic`, `Boreal`, `Skullrockian`</td>
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
			<th colspan="2"><a id="dwc_EarliestDateCollected"></a>Term Name  dwc:EarliestDateCollected</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EarliestDateCollected">http://rs.tdwg.org/dwc/terms/EarliestDateCollected</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_earliestEonOrLowestEonothem"></a>Term Name  dwc:earliestEonOrLowestEonothem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/earliestEonOrLowestEonothem">http://rs.tdwg.org/dwc/terms/earliestEonOrLowestEonothem</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/earliestEonOrLowestEonothem-2017-10-06">http://rs.tdwg.org/dwc/terms/version/earliestEonOrLowestEonothem-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Eon Or Lowest Eonothem</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the earliest possible geochronologic eon or lowest chrono-stratigraphic eonothem or the informal name ("Precambrian") attributable to the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Phanerozoic`, `Proterozoic`</td>
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
			<th colspan="2"><a id="dwc_earliestEpochOrLowestSeries"></a>Term Name  dwc:earliestEpochOrLowestSeries</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/earliestEpochOrLowestSeries">http://rs.tdwg.org/dwc/terms/earliestEpochOrLowestSeries</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/earliestEpochOrLowestSeries-2017-10-06">http://rs.tdwg.org/dwc/terms/version/earliestEpochOrLowestSeries-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Epoch Or Lowest Series</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the earliest possible geochronologic epoch or lowest chronostratigraphic series attributable to the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Holocene`, `Pleistocene`, `Ibexian Series`</td>
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
			<th colspan="2"><a id="dwc_earliestEraOrLowestErathem"></a>Term Name  dwc:earliestEraOrLowestErathem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/earliestEraOrLowestErathem">http://rs.tdwg.org/dwc/terms/earliestEraOrLowestErathem</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/earliestEraOrLowestErathem-2017-10-06">http://rs.tdwg.org/dwc/terms/version/earliestEraOrLowestErathem-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Era Or Lowest Erathem</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the earliest possible geochronologic era or lowest chronostratigraphic erathem attributable to the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Cenozoic`, `Mesozoic`</td>
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
			<th colspan="2"><a id="dwciri_earliestGeochronologicalEra"></a>Term Name  dwciri:earliestGeochronologicalEra</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/earliestGeochronologicalEra">http://rs.tdwg.org/dwc/iri/earliestGeochronologicalEra</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/earliestGeochronologicalEra-2015-03-27">http://rs.tdwg.org/dwc/iri/version/earliestGeochronologicalEra-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Geochronological Era</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Use to link a dwc:GeologicalContext instance to chronostratigraphic time periods at the lowest possible level in a standardized hierarchy.   Use this property to point to the earliest possible geological time period from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.6 of the Darwin Core RDF Guide for details.</td>
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
			<th colspan="2"><a id="dwc_earliestPeriodOrLowestSystem"></a>Term Name  dwc:earliestPeriodOrLowestSystem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/earliestPeriodOrLowestSystem">http://rs.tdwg.org/dwc/terms/earliestPeriodOrLowestSystem</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/earliestPeriodOrLowestSystem-2017-10-06">http://rs.tdwg.org/dwc/terms/version/earliestPeriodOrLowestSystem-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Earliest Period Or Lowest System</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the earliest possible geochronologic period or lowest chronostratigraphic system attributable to the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Neogene`, `Tertiary`, `Quaternary`</td>
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
			<th colspan="2"><a id="dwc_endDayOfYear"></a>Term Name  dwc:endDayOfYear</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/endDayOfYear">http://rs.tdwg.org/dwc/terms/endDayOfYear</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/endDayOfYear-2017-10-06">http://rs.tdwg.org/dwc/terms/version/endDayOfYear-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>End Day Of Year</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The latest ordinal day of the year on which the Event occurred (1 for January 1, 365 for December 31, except in a leap year, in which case it is 366).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`1` (1 January). `32` (1 February). `366` (31 December). `365` (30 December in a leap year, 31 December in a non-leap year).</td>
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
			<th colspan="2"><a id="dwc_EndTimeOfDay"></a>Term Name  dwc:EndTimeOfDay</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EndTimeOfDay">http://rs.tdwg.org/dwc/terms/EndTimeOfDay</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_establishmentMeans"></a>Term Name  dwc:establishmentMeans</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/establishmentMeans">http://rs.tdwg.org/dwc/terms/establishmentMeans</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/establishmentMeans-2017-10-06">http://rs.tdwg.org/dwc/terms/version/establishmentMeans-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Establishment Means</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The process by which the biological individual(s) represented in the Occurrence became established at the location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`native`, `introduced`, `naturalised`, `invasive`, `managed`</td>
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
			<th colspan="2"><a id="dwciri_establishmentMeans"></a>Term Name  dwciri:establishmentMeans</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/establishmentMeans">http://rs.tdwg.org/dwc/iri/establishmentMeans</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/establishmentMeans-2015-03-27">http://rs.tdwg.org/dwc/iri/version/establishmentMeans-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Establishment Means (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The process by which the biological individual(s) represented in the Occurrence became established at the location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_Event"></a>Term Name  dwc:Event</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Event">http://rs.tdwg.org/dwc/terms/Event</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/Event-2018-09-06">http://rs.tdwg.org/dwc/terms/version/Event-2018-09-06</a></td>
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
			<td>A specimen collection process. A camera trap image capture.  A marine trawl.</td>
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
			<th colspan="2"><a id="dwc_EventAttribute"></a>Term Name  dwc:EventAttribute</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttribute">http://rs.tdwg.org/dwc/terms/EventAttribute</a></td>
		</tr>
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
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeAccuracy"></a>Term Name  dwc:EventAttributeAccuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeAccuracy">http://rs.tdwg.org/dwc/terms/EventAttributeAccuracy</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeDeterminedBy"></a>Term Name  dwc:EventAttributeDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeDeterminedBy">http://rs.tdwg.org/dwc/terms/EventAttributeDeterminedBy</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeDeterminedDate"></a>Term Name  dwc:EventAttributeDeterminedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeDeterminedDate">http://rs.tdwg.org/dwc/terms/EventAttributeDeterminedDate</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeID"></a>Term Name  dwc:EventAttributeID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeID">http://rs.tdwg.org/dwc/terms/EventAttributeID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeRemarks"></a>Term Name  dwc:EventAttributeRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeRemarks">http://rs.tdwg.org/dwc/terms/EventAttributeRemarks</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventAttributes"></a>Term Name  dwc:eventAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventAttributes">http://rs.tdwg.org/dwc/terms/eventAttributes</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeType"></a>Term Name  dwc:EventAttributeType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeType">http://rs.tdwg.org/dwc/terms/EventAttributeType</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeUnit"></a>Term Name  dwc:EventAttributeUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeUnit">http://rs.tdwg.org/dwc/terms/EventAttributeUnit</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_EventAttributeValue"></a>Term Name  dwc:EventAttributeValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventAttributeValue">http://rs.tdwg.org/dwc/terms/EventAttributeValue</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventDate"></a>Term Name  dwc:eventDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventDate">http://rs.tdwg.org/dwc/terms/eventDate</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventDate-2020-08-12">http://rs.tdwg.org/dwc/terms/version/eventDate-2020-08-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Date</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date-time or interval during which an Event occurred. For occurrences, this is the date-time when the event was recorded. Not suitable for a time in a geological context.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`1963-03-08T14:07-0600` (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). `2009-02-20T08:40Z` (20 February 2009 8:40am UTC). `2018-08-29T15:19` (3:19pm local time on 29 August 2018). `1809-02-12` (some time during 12 February 1809). `1906-06` (some time in June 1906). `1971` (some time in the year 1971). `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). `1900/1909` (some time during the interval between the beginning of the year 1900 and the end of the year 1909). `2007-11-13/15` (some time in the interval between 13 November 2007 and 15 November 2007).</td>
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
			<th colspan="2"><a id="dwc_eventID"></a>Term Name  dwc:eventID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventID">http://rs.tdwg.org/dwc/terms/eventID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/eventID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the set of information associated with an Event (something that occurs at a place and time). May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`INBO:VIS:Ev:00009375`</td>
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
			<th colspan="2"><a id="dwc_EventMeasurement"></a>Term Name  dwc:EventMeasurement</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/EventMeasurement">http://rs.tdwg.org/dwc/terms/EventMeasurement</a></td>
		</tr>
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
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementAccuracy"></a>Term Name  dwc:eventMeasurementAccuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementAccuracy">http://rs.tdwg.org/dwc/terms/eventMeasurementAccuracy</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementDeterminedBy"></a>Term Name  dwc:eventMeasurementDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementDeterminedBy">http://rs.tdwg.org/dwc/terms/eventMeasurementDeterminedBy</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementDeterminedDate"></a>Term Name  dwc:eventMeasurementDeterminedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementDeterminedDate">http://rs.tdwg.org/dwc/terms/eventMeasurementDeterminedDate</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementID"></a>Term Name  dwc:eventMeasurementID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementID">http://rs.tdwg.org/dwc/terms/eventMeasurementID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementRemarks"></a>Term Name  dwc:eventMeasurementRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementRemarks">http://rs.tdwg.org/dwc/terms/eventMeasurementRemarks</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementType"></a>Term Name  dwc:eventMeasurementType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementType">http://rs.tdwg.org/dwc/terms/eventMeasurementType</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementUnit"></a>Term Name  dwc:eventMeasurementUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementUnit">http://rs.tdwg.org/dwc/terms/eventMeasurementUnit</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventMeasurementValue"></a>Term Name  dwc:eventMeasurementValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventMeasurementValue">http://rs.tdwg.org/dwc/terms/eventMeasurementValue</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_eventRemarks"></a>Term Name  dwc:eventRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventRemarks">http://rs.tdwg.org/dwc/terms/eventRemarks</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventRemarks-2017-10-06">http://rs.tdwg.org/dwc/terms/version/eventRemarks-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the Event.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`After the recent rains the river is nearly at flood stage.`</td>
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
			<th colspan="2"><a id="dwc_eventTime"></a>Term Name  dwc:eventTime</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/eventTime">http://rs.tdwg.org/dwc/terms/eventTime</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/eventTime-2020-08-12">http://rs.tdwg.org/dwc/terms/version/eventTime-2020-08-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Event Time</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The time or interval during which an Event occurred.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`14:07-0600` (2:07pm in the time zone six hours earlier than UTC). `08:40:21Z` (8:40:21am UTC). `13:00:00Z/15:30:00Z` (the interval between 1pm UTC and 3:30pm UTC).</td>
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
			<th colspan="2"><a id="dwc_family"></a>Term Name  dwc:family</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/family">http://rs.tdwg.org/dwc/terms/family</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/family-2017-10-06">http://rs.tdwg.org/dwc/terms/version/family-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Family</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the family in which the taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Felidae`, `Monocleaceae`</td>
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
			<th colspan="2"><a id="dwc_fieldNotes"></a>Term Name  dwc:fieldNotes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/fieldNotes">http://rs.tdwg.org/dwc/terms/fieldNotes</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/fieldNotes-2017-10-06">http://rs.tdwg.org/dwc/terms/version/fieldNotes-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Field Notes</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the Event.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Notes available in the Grinnell-Miller Library.`</td>
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
			<th colspan="2"><a id="dwciri_fieldNotes"></a>Term Name  dwciri:fieldNotes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/fieldNotes">http://rs.tdwg.org/dwc/iri/fieldNotes</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/fieldNotes-2015-03-27">http://rs.tdwg.org/dwc/iri/version/fieldNotes-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Field Notes (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The subject is a dwc:Event instance and the object is a (possibly IRI-identified) resource that is the field notes.</td>
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
			<th colspan="2"><a id="dwc_fieldNumber"></a>Term Name  dwc:fieldNumber</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/fieldNumber">http://rs.tdwg.org/dwc/terms/fieldNumber</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/fieldNumber-2017-10-06">http://rs.tdwg.org/dwc/terms/version/fieldNumber-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Field Number</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier given to the event in the field. Often serves as a link between field notes and the Event.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`RV Sol 87-03-08`</td>
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
			<th colspan="2"><a id="dwciri_fieldNumber"></a>Term Name  dwciri:fieldNumber</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/fieldNumber">http://rs.tdwg.org/dwc/iri/fieldNumber</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/fieldNumber-2015-03-27">http://rs.tdwg.org/dwc/iri/version/fieldNumber-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Field Number (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier given to the event in the field. Often serves as a link between field notes and the Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The subject is a (possibly IRI-identified) resource that is the field notes and the object is a dwc:Event instance.</td>
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
			<th colspan="2"><a id="dwc_footprintSpatialFit"></a>Term Name  dwc:footprintSpatialFit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/footprintSpatialFit">http://rs.tdwg.org/dwc/terms/footprintSpatialFit</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/footprintSpatialFit-2017-10-06">http://rs.tdwg.org/dwc/terms/version/footprintSpatialFit-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint Spatial Fit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ratio of the area of the footprint (footprintWKT) to the area of the true (original, or most specific) spatial representation of the Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given footprint does not completely contain the original representation. The footprintSpatialFit is undefined (and should be left blank) if the original representation is a point and the given georeference is not that same point. If both the original and the given georeference are the same point, the footprintSpatialFit is 1.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Detailed explanations with graphical examples can be found in the Guide to Best Practices for Georeferencing, Chapman and Wieczorek, eds. 2006.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>Detailed explanations with graphical examples can be found in the Guide to Best Practices for Georeferencing, Chapman and Wieczorek, eds. 2006.</td>
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
			<th colspan="2"><a id="dwc_footprintSRS"></a>Term Name  dwc:footprintSRS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/footprintSRS">http://rs.tdwg.org/dwc/terms/footprintSRS</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/footprintSRS-2018-09-06">http://rs.tdwg.org/dwc/terms/version/footprintSRS-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint SRS</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A Well-Known Text (WKT) representation of the Spatial Reference System (SRS) for the footprintWKT of the Location. Do not use this term to describe the SRS of the decimalLatitude and decimalLongitude, even if it is the same as for the footprintWKT - use the geodeticDatum instead.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`GEOGCS["GCS_WGS_1984", DATUM["D_WGS_1984", SPHEROID["WGS_1984",6378137,298.257223563]], PRIMEM["Greenwich",0], UNIT["Degree",0.0174532925199433]]` (WKT for the standard WGS84 Spatial Reference System EPSG:4326).</td>
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
			<th colspan="2"><a id="dwciri_footprintSRS"></a>Term Name  dwciri:footprintSRS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/footprintSRS">http://rs.tdwg.org/dwc/iri/footprintSRS</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/footprintSRS-2015-03-27">http://rs.tdwg.org/dwc/iri/version/footprintSRS-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint SRS (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A Well-Known Text (WKT) representation of the Spatial Reference System (SRS) for the footprintWKT of the Location. Do not use this term to describe the SRS of the decimalLatitude and decimalLongitude, even if it is the same as for the footprintWKT - use the geodeticDatum instead.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwciri_footprintWKT"></a>Term Name  dwciri:footprintWKT</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/footprintWKT">http://rs.tdwg.org/dwc/iri/footprintWKT</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/footprintWKT-2015-03-27">http://rs.tdwg.org/dwc/iri/version/footprintWKT-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint WKT (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines the Location. A Location may have both a point-radius representation (see decimalLatitude) and a footprint representation, and they may differ from each other.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_footprintWKT"></a>Term Name  dwc:footprintWKT</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/footprintWKT">http://rs.tdwg.org/dwc/terms/footprintWKT</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/footprintWKT-2017-10-06">http://rs.tdwg.org/dwc/terms/version/footprintWKT-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Footprint WKT</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines the Location. A Location may have both a point-radius representation (see decimalLatitude) and a footprint representation, and they may differ from each other.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`POLYGON ((10 20, 11 20, 11 21, 10 21, 10 20))` (the one-degree bounding box with opposite corners at longitude=10, latitude=20 and longitude=11, latitude=21)</td>
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
			<th colspan="2"><a id="dwc_formation"></a>Term Name  dwc:formation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/formation">http://rs.tdwg.org/dwc/terms/formation</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/formation-2017-10-06">http://rs.tdwg.org/dwc/terms/version/formation-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Formation</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the lithostratigraphic formation from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Notch Peak Formation`, `House Limestone`, `Fillmore Formation`</td>
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
			<th colspan="2"><a id="dwc_FossilSpecimen"></a>Term Name  dwc:FossilSpecimen</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/FossilSpecimen">http://rs.tdwg.org/dwc/terms/FossilSpecimen</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/FossilSpecimen-2018-09-06">http://rs.tdwg.org/dwc/terms/version/FossilSpecimen-2018-09-06</a></td>
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
			<td>A body fossil. A coprolite. A gastrolith. An ichnofossil. A piece of a petrified tree.</td>
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
			<th colspan="2"><a id="dwciri_fromLithostratigraphicUnit"></a>Term Name  dwciri:fromLithostratigraphicUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/fromLithostratigraphicUnit">http://rs.tdwg.org/dwc/iri/fromLithostratigraphicUnit</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_Generalizations"></a>Term Name  dwc:Generalizations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Generalizations">http://rs.tdwg.org/dwc/terms/Generalizations</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_genus"></a>Term Name  dwc:genus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/genus">http://rs.tdwg.org/dwc/terms/genus</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/genus-2017-10-06">http://rs.tdwg.org/dwc/terms/version/genus-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Genus</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the genus in which the taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Puma`, `Monoclea`</td>
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
			<th colspan="2"><a id="dwciri_geodeticDatum"></a>Term Name  dwciri:geodeticDatum</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/geodeticDatum">http://rs.tdwg.org/dwc/iri/geodeticDatum</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/geodeticDatum-2015-03-27">http://rs.tdwg.org/dwc/iri/version/geodeticDatum-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Geodetic Datum (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in decimalLatitude and decimalLongitude as based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI for the EPSG code of the SRS, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use an IRI or controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value `unknown`.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="https://epsg.io/4326`">https://epsg.io/4326`</a></td>
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
			<th colspan="2"><a id="dwc_geodeticDatum"></a>Term Name  dwc:geodeticDatum</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/geodeticDatum">http://rs.tdwg.org/dwc/terms/geodeticDatum</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/geodeticDatum-2017-10-06">http://rs.tdwg.org/dwc/terms/version/geodeticDatum-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Geodetic Datum</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in decimalLatitude and decimalLongitude as based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value `unknown`.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`EPSG:4326`, `WGS84`, `NAD27`, `Campo Inchauspe`, `European 1950`, `Clarke 1866`, `unknown`</td>
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
			<th colspan="2"><a id="dwc_GeologicalContext"></a>Term Name  dwc:GeologicalContext</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/GeologicalContext">http://rs.tdwg.org/dwc/terms/GeologicalContext</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/GeologicalContext-2018-09-06">http://rs.tdwg.org/dwc/terms/version/GeologicalContext-2018-09-06</a></td>
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
			<td>A lithostratigraphic layer.</td>
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
			<th colspan="2"><a id="dwc_geologicalContextID"></a>Term Name  dwc:geologicalContextID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/geologicalContextID">http://rs.tdwg.org/dwc/terms/geologicalContextID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/geologicalContextID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/geologicalContextID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Geological Context ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the set of information associated with a GeologicalContext (the location within a geological context, such as stratigraphy). May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9`">https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9`</a></td>
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
			<th colspan="2"><a id="dwc_georeferencedBy"></a>Term Name  dwc:georeferencedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferencedBy">http://rs.tdwg.org/dwc/terms/georeferencedBy</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferencedBy-2017-10-06">http://rs.tdwg.org/dwc/terms/version/georeferencedBy-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeferenced By</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of names of people, groups, or organizations who determined the georeference (spatial representation) for the Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Brad Millen (ROM)`, `Kristina Yamamoto | Janet Fang`</td>
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
			<th colspan="2"><a id="dwciri_georeferencedBy"></a>Term Name  dwciri:georeferencedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/georeferencedBy">http://rs.tdwg.org/dwc/iri/georeferencedBy</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/georeferencedBy-2015-03-27">http://rs.tdwg.org/dwc/iri/version/georeferencedBy-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeferenced By (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A person, group, or organization who determined the georeference (spatial representation) for the Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_georeferencedDate"></a>Term Name  dwc:georeferencedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferencedDate">http://rs.tdwg.org/dwc/terms/georeferencedDate</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferencedDate-2020-08-12">http://rs.tdwg.org/dwc/terms/version/georeferencedDate-2020-08-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeferenced Date</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the Location was georeferenced.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`1963-03-08T14:07-0600` (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). `2009-02-20T08:40Z` (20 February 2009 8:40am UTC). `2018-08-29T15:19` (3:19pm local time on 29 August 2018). `1809-02-12` (some time during 12 February 1809). `1906-06` (some time in June 1906). `1971` (some time in the year 1971). `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). `1900/1909` (some time during the interval between the beginning of the year 1900 and the end of the year 1909). `2007-11-13/15` (some time in the interval between 13 November 2007 and 15 November 2007).</td>
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
			<th colspan="2"><a id="dwc_georeferenceProtocol"></a>Term Name  dwc:georeferenceProtocol</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferenceProtocol">http://rs.tdwg.org/dwc/terms/georeferenceProtocol</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferenceProtocol-2017-10-06">http://rs.tdwg.org/dwc/terms/version/georeferenceProtocol-2017-10-06</a></td>
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
			<td>Examples</td>
			<td>`Guide to Best Practices for Georeferencing. (Chapman and Wieczorek, eds. 2006). Global Biodiversity Information Facility.`, `MaNIS/HerpNet/ORNIS Georeferencing Guidelines`, `Georeferencing Quick Reference Guide`</td>
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
			<th colspan="2"><a id="dwciri_georeferenceProtocol"></a>Term Name  dwciri:georeferenceProtocol</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/georeferenceProtocol">http://rs.tdwg.org/dwc/iri/georeferenceProtocol</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_georeferenceRemarks"></a>Term Name  dwc:georeferenceRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferenceRemarks">http://rs.tdwg.org/dwc/terms/georeferenceRemarks</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferenceRemarks-2017-10-06">http://rs.tdwg.org/dwc/terms/version/georeferenceRemarks-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Notes or comments about the spatial description determination, explaining assumptions made in addition or opposition to the those formalized in the method referred to in georeferenceProtocol.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Assumed distance by road (Hwy. 101)`.</td>
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
			<th colspan="2"><a id="dwc_georeferenceSources"></a>Term Name  dwc:georeferenceSources</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferenceSources">http://rs.tdwg.org/dwc/terms/georeferenceSources</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferenceSources-2017-10-06">http://rs.tdwg.org/dwc/terms/version/georeferenceSources-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Sources</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of maps, gazetteers, or other resources used to georeference the Location, described specifically enough to allow anyone in the future to use the same resources.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="https://www.geonames.org/`">https://www.geonames.org/`</a>, `USGS 1:24000 Florence Montana Quad | Terrametrics 2008 on Google Earth`, `GeoLocate`</td>
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
			<th colspan="2"><a id="dwciri_georeferenceSources"></a>Term Name  dwciri:georeferenceSources</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/georeferenceSources">http://rs.tdwg.org/dwc/iri/georeferenceSources</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/georeferenceSources-2015-03-27">http://rs.tdwg.org/dwc/iri/version/georeferenceSources-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Sources (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A map, gazetteer, or other resource used to georeference the Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_georeferenceVerificationStatus"></a>Term Name  dwc:georeferenceVerificationStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/georeferenceVerificationStatus">http://rs.tdwg.org/dwc/terms/georeferenceVerificationStatus</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/georeferenceVerificationStatus-2017-10-06">http://rs.tdwg.org/dwc/terms/version/georeferenceVerificationStatus-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Verification Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`requires verification`, `verified by collector`, `verified by curator`</td>
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
			<th colspan="2"><a id="dwciri_georeferenceVerificationStatus"></a>Term Name  dwciri:georeferenceVerificationStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/georeferenceVerificationStatus">http://rs.tdwg.org/dwc/iri/georeferenceVerificationStatus</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/georeferenceVerificationStatus-2015-03-27">http://rs.tdwg.org/dwc/iri/version/georeferenceVerificationStatus-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Georeference Verification Status (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_group"></a>Term Name  dwc:group</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/group">http://rs.tdwg.org/dwc/terms/group</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/group-2017-10-06">http://rs.tdwg.org/dwc/terms/version/group-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Group</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the lithostratigraphic group from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Bathurst`, `Lower Wealden`</td>
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
			<th colspan="2"><a id="dwciri_habitat"></a>Term Name  dwciri:habitat</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/habitat">http://rs.tdwg.org/dwc/iri/habitat</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/habitat-2015-03-27">http://rs.tdwg.org/dwc/iri/version/habitat-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Habitat (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A category or description of the habitat in which the Event occurred.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_habitat"></a>Term Name  dwc:habitat</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/habitat">http://rs.tdwg.org/dwc/terms/habitat</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/habitat-2017-10-06">http://rs.tdwg.org/dwc/terms/version/habitat-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Habitat</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A category or description of the habitat in which the Event occurred.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`oak savanna`, `pre-cordilleran steppe`</td>
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
			<th colspan="2"><a id="dwc_higherClassification"></a>Term Name  dwc:higherClassification</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherClassification">http://rs.tdwg.org/dwc/terms/higherClassification</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/higherClassification-2017-10-06">http://rs.tdwg.org/dwc/terms/version/higherClassification-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Classification</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of taxa names terminating at the rank immediately superior to the taxon referenced in the taxon record.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `), with terms in order from the highest taxonomic rank to the lowest.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Plantae | Tracheophyta | Magnoliopsida | Ranunculales | Ranunculaceae | Ranunculus`, `Animalia`, `Animalia | Chordata | Vertebrata | Mammalia | Theria | Eutheria | Rodentia | Hystricognatha | Hystricognathi | Ctenomyidae | Ctenomyini | Ctenomys`</td>
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
			<th colspan="2"><a id="dwc_higherGeography"></a>Term Name  dwc:higherGeography</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherGeography">http://rs.tdwg.org/dwc/terms/higherGeography</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/higherGeography-2017-10-06">http://rs.tdwg.org/dwc/terms/version/higherGeography-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Geography</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of geographic names less specific than the information captured in the locality term.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `), with terms in order from least specific to most specific.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`North Atlantic Ocean`. `South America | Argentina | Patagonia | Parque Nacional Nahuel Huapi | Neuquén | Los Lagos` (with accompanying values `South America` in continent, `Argentina` in country, `Neuquén` in stateProvince, and `Los Lagos` in county.</td>
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
			<th colspan="2"><a id="dwc_higherGeographyID"></a>Term Name  dwc:higherGeographyID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherGeographyID">http://rs.tdwg.org/dwc/terms/higherGeographyID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/higherGeographyID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/higherGeographyID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Higher Geography ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the geographic region within which the Location occurred.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a persistent identifier from a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="http://vocab.getty.edu/tgn/1002002`">http://vocab.getty.edu/tgn/1002002`</a> (Antártida e Islas del Atlántico Sur, Territorio Nacional de la Tierra del Fuego, Argentina).</td>
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
			<th colspan="2"><a id="dwc_HigherTaxon"></a>Term Name  dwc:HigherTaxon</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/HigherTaxon">http://rs.tdwg.org/dwc/terms/HigherTaxon</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_higherTaxonconceptID"></a>Term Name  dwc:higherTaxonconceptID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherTaxonconceptID">http://rs.tdwg.org/dwc/terms/higherTaxonconceptID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_HigherTaxonID"></a>Term Name  dwc:HigherTaxonID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/HigherTaxonID">http://rs.tdwg.org/dwc/terms/HigherTaxonID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_higherTaxonName"></a>Term Name  dwc:higherTaxonName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherTaxonName">http://rs.tdwg.org/dwc/terms/higherTaxonName</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_higherTaxonNameID"></a>Term Name  dwc:higherTaxonNameID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/higherTaxonNameID">http://rs.tdwg.org/dwc/terms/higherTaxonNameID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_highestBiostratigraphicZone"></a>Term Name  dwc:highestBiostratigraphicZone</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/highestBiostratigraphicZone">http://rs.tdwg.org/dwc/terms/highestBiostratigraphicZone</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/highestBiostratigraphicZone-2017-10-06">http://rs.tdwg.org/dwc/terms/version/highestBiostratigraphicZone-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Highest Biostratigraphic Zone</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the highest possible geological biostratigraphic zone of the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Blancan`</td>
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
			<th colspan="2"><a id="dwc_HumanObservation"></a>Term Name  dwc:HumanObservation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/HumanObservation">http://rs.tdwg.org/dwc/terms/HumanObservation</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/HumanObservation-2018-09-06">http://rs.tdwg.org/dwc/terms/version/HumanObservation-2018-09-06</a></td>
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
			<td>Evidence of an Occurrence taken from field notes or literature. A record of an Occurrence without physical evidence nor evidence captured with a machine. </td>
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
			<th colspan="2"><a id="dwc_Identification"></a>Term Name  dwc:Identification</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Identification">http://rs.tdwg.org/dwc/terms/Identification</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/Identification-2018-09-06">http://rs.tdwg.org/dwc/terms/version/Identification-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A taxonomic determination (e.g., the assignment to a taxon).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>A subspecies determination of an organism.</td>
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
			<th colspan="2"><a id="dwc_identificationAttributes"></a>Term Name  dwc:identificationAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationAttributes">http://rs.tdwg.org/dwc/terms/identificationAttributes</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_identificationID"></a>Term Name  dwc:identificationID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationID">http://rs.tdwg.org/dwc/terms/identificationID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identificationID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/identificationID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the Identification (the body of information associated with the assignment of a scientific name). May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`9992`</td>
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
			<th colspan="2"><a id="dwc_identificationQualifier"></a>Term Name  dwc:identificationQualifier</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationQualifier">http://rs.tdwg.org/dwc/terms/identificationQualifier</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identificationQualifier-2017-10-06">http://rs.tdwg.org/dwc/terms/version/identificationQualifier-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification Qualifier</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A brief phrase or a standard term ("cf.", "aff.") to express the determiner's doubts about the Identification.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`aff. agrifolia var. oxyadenia` (for `Quercus aff. agrifolia var. oxyadenia` with accompanying values `Quercus` in genus, `agrifolia`  in specificEpithet, `oxyadenia`  in infraspecificEpithet, and `var.` in taxonRank. `cf. var. oxyadenia` for `Quercus agrifolia cf. var. oxyadenia` with accompanying values `Quercus` in genus, `agrifolia` in specificEpithet, `oxyadenia` in infraspecificEpithet, and `var.` in taxonRank.</td>
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
			<th colspan="2"><a id="dwciri_identificationQualifier"></a>Term Name  dwciri:identificationQualifier</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/identificationQualifier">http://rs.tdwg.org/dwc/iri/identificationQualifier</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/identificationQualifier-2015-03-27">http://rs.tdwg.org/dwc/iri/version/identificationQualifier-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification Qualifier (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A controlled value to express the determiner's doubts about the Identification.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_identificationReferences"></a>Term Name  dwc:identificationReferences</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationReferences">http://rs.tdwg.org/dwc/terms/identificationReferences</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identificationReferences-2017-10-06">http://rs.tdwg.org/dwc/terms/version/identificationReferences-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification References</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of references (publication, global unique identifier, URI) used in the Identification.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Aves del Noroeste Patagonico. Christie et al. 2004.`, `Stebbins, R. Field Guide to Western Reptiles and Amphibians. 3rd Edition. 2003. | Irschick, D.J. and Shaffer, H.B. (1997). The polytypic species revisited: Morphological differentiation among tiger salamanders (Ambystoma tigrinum) (Amphibia: Caudata). Herpetologica, 53(1), 30-49.`</td>
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
			<th colspan="2"><a id="dwc_identificationRemarks"></a>Term Name  dwc:identificationRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationRemarks">http://rs.tdwg.org/dwc/terms/identificationRemarks</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identificationRemarks-2017-10-06">http://rs.tdwg.org/dwc/terms/version/identificationRemarks-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identification Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the Identification.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Distinguished between Anthus correndera and Anthus hellmayri based on the comparative lengths of the uñas.`</td>
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
			<th colspan="2"><a id="dwciri_identificationVerificationStatus"></a>Term Name  dwciri:identificationVerificationStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/identificationVerificationStatus">http://rs.tdwg.org/dwc/iri/identificationVerificationStatus</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_identificationVerificationStatus"></a>Term Name  dwc:identificationVerificationStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identificationVerificationStatus">http://rs.tdwg.org/dwc/terms/identificationVerificationStatus</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identificationVerificationStatus-2017-10-06">http://rs.tdwg.org/dwc/terms/version/identificationVerificationStatus-2017-10-06</a></td>
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
			<td>Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`0` ("unverified" in HISPID/ABCD).</td>
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
			<th colspan="2"><a id="dwc_identifiedBy"></a>Term Name  dwc:identifiedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/identifiedBy">http://rs.tdwg.org/dwc/terms/identifiedBy</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/identifiedBy-2017-10-06">http://rs.tdwg.org/dwc/terms/version/identifiedBy-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identified By</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of names of people, groups, or organizations who assigned the Taxon to the subject.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`James L. Patton`, `Theodore Pappenfuss | Robert Macey`</td>
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
			<th colspan="2"><a id="dwciri_identifiedBy"></a>Term Name  dwciri:identifiedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/identifiedBy">http://rs.tdwg.org/dwc/iri/identifiedBy</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/identifiedBy-2015-03-27">http://rs.tdwg.org/dwc/iri/version/identifiedBy-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Identified By (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A person, group, or organization who assigned the Taxon to the subject.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwciri_inCollection"></a>Term Name  dwciri:inCollection</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/inCollection">http://rs.tdwg.org/dwc/iri/inCollection</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_inDataset"></a>Term Name  dwciri:inDataset</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/inDataset">http://rs.tdwg.org/dwc/iri/inDataset</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_inDescribedPlace"></a>Term Name  dwciri:inDescribedPlace</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/inDescribedPlace">http://rs.tdwg.org/dwc/iri/inDescribedPlace</a></td>
		</tr>
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
			<td>`<a href="http://vocab.getty.edu/tgn/1019987`">http://vocab.getty.edu/tgn/1019987`</a></td>
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
			<th colspan="2"><a id="dwc_individualCount"></a>Term Name  dwc:individualCount</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/individualCount">http://rs.tdwg.org/dwc/terms/individualCount</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/individualCount-2017-10-06">http://rs.tdwg.org/dwc/terms/version/individualCount-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Individual Count</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The number of individuals represented present at the time of the Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`0`, `1`, `25`</td>
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
			<th colspan="2"><a id="dwc_individualID"></a>Term Name  dwc:individualID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/individualID">http://rs.tdwg.org/dwc/terms/individualID</a></td>
		</tr>
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
			<th colspan="2"><a id="dwciri_informationWithheld"></a>Term Name  dwciri:informationWithheld</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/informationWithheld">http://rs.tdwg.org/dwc/iri/informationWithheld</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_informationWithheld"></a>Term Name  dwc:informationWithheld</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/informationWithheld">http://rs.tdwg.org/dwc/terms/informationWithheld</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/informationWithheld-2017-10-06">http://rs.tdwg.org/dwc/terms/version/informationWithheld-2017-10-06</a></td>
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
			<td>Examples</td>
			<td>`location information not given for endangered species`, `collector identities withheld | ask about tissue samples`</td>
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
			<th colspan="2"><a id="dwc_infraspecificEpithet"></a>Term Name  dwc:infraspecificEpithet</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/infraspecificEpithet">http://rs.tdwg.org/dwc/terms/infraspecificEpithet</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/infraspecificEpithet-2017-10-06">http://rs.tdwg.org/dwc/terms/version/infraspecificEpithet-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Infraspecific Epithet</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the lowest or terminal infraspecific epithet of the scientificName, excluding any rank designation.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`concolor`, `oxyadenia`, `sayi`</td>
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
			<th colspan="2"><a id="dwc_institutionCode"></a>Term Name  dwc:institutionCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/institutionCode">http://rs.tdwg.org/dwc/terms/institutionCode</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/institutionCode-2017-10-06">http://rs.tdwg.org/dwc/terms/version/institutionCode-2017-10-06</a></td>
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
			<td>`MVZ`, `FMNH`, `CLO`, `UCMP`</td>
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
			<th colspan="2"><a id="dwc_institutionID"></a>Term Name  dwc:institutionID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/institutionID">http://rs.tdwg.org/dwc/terms/institutionID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/institutionID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/institutionID-2017-10-06</a></td>
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
			<td>For physical specimens, the recommended best practice is to use an identifier from a collections registry such as the Global Registry of Biodiversity Repositories (<a href="http://grbio.org/">http://grbio.org/</a>).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="http://biocol.org/urn:lsid:biocol.org:col:34777`">http://biocol.org/urn:lsid:biocol.org:col:34777`</a>, `<a href="http://grbio.org/cool/km06-gtbn`">http://grbio.org/cool/km06-gtbn`</a></td>
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
			<th colspan="2"><a id="dwc_island"></a>Term Name  dwc:island</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/island">http://rs.tdwg.org/dwc/terms/island</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/island-2017-10-06">http://rs.tdwg.org/dwc/terms/version/island-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Island</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the island on or near which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Nosy Be`, `Bikini Atoll`, `Vancouver`, `Viti Levu`, `Zanzibar`</td>
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
			<th colspan="2"><a id="dwc_islandGroup"></a>Term Name  dwc:islandGroup</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/islandGroup">http://rs.tdwg.org/dwc/terms/islandGroup</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/islandGroup-2017-10-06">http://rs.tdwg.org/dwc/terms/version/islandGroup-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Island Group</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the island group in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Alexander Archipelago`, `Archipiélago Diego Ramírez`, `Seychelles`</td>
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
			<th colspan="2"><a id="dwc_kingdom"></a>Term Name  dwc:kingdom</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/kingdom">http://rs.tdwg.org/dwc/terms/kingdom</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/kingdom-2017-10-06">http://rs.tdwg.org/dwc/terms/version/kingdom-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Kingdom</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the kingdom in which the taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Animalia`, `Archaea`, `Bacteria`, `Chromista`, `Fungi`, `Plantae`, `Protozoa`, `Viruses`</td>
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
			<th colspan="2"><a id="dc_language"></a>Term Name  dc:language</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/elements/1.1/language">http://purl.org/dc/elements/1.1/language</a></td>
		</tr>
			<td>Modified</td>
			<td>2008-01-14</td>
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
			<td>Recommended best practice is to use a controlled vocabulary such as RFC 4646.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`en` (for English), `es` (for Spanish)</td>
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
			<th colspan="2"><a id="dcterms_language"></a>Term Name  dcterms:language</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/language">http://purl.org/dc/terms/language</a></td>
		</tr>
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
			<th colspan="2"><a id="dwc_latestAgeOrHighestStage"></a>Term Name  dwc:latestAgeOrHighestStage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/latestAgeOrHighestStage">http://rs.tdwg.org/dwc/terms/latestAgeOrHighestStage</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/latestAgeOrHighestStage-2017-10-06">http://rs.tdwg.org/dwc/terms/version/latestAgeOrHighestStage-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest AgeOr Highest Stage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the latest possible geochronologic age or highest chronostratigraphic stage attributable to the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Atlantic`, `Boreal`, `Skullrockian`</td>
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
			<th colspan="2"><a id="dwc_LatestDateCollected"></a>Term Name  dwc:LatestDateCollected</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/LatestDateCollected">http://rs.tdwg.org/dwc/terms/LatestDateCollected</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_latestEonOrHighestEonothem"></a>Term Name  dwc:latestEonOrHighestEonothem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/latestEonOrHighestEonothem">http://rs.tdwg.org/dwc/terms/latestEonOrHighestEonothem</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/latestEonOrHighestEonothem-2017-10-06">http://rs.tdwg.org/dwc/terms/version/latestEonOrHighestEonothem-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Eon Or Highest Eonothem</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the latest possible geochronologic eon or highest chrono-stratigraphic eonothem or the informal name ("Precambrian") attributable to the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Phanerozoic`, `Proterozoic`</td>
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
			<th colspan="2"><a id="dwc_latestEpochOrHighestSeries"></a>Term Name  dwc:latestEpochOrHighestSeries</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/latestEpochOrHighestSeries">http://rs.tdwg.org/dwc/terms/latestEpochOrHighestSeries</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/latestEpochOrHighestSeries-2017-10-06">http://rs.tdwg.org/dwc/terms/version/latestEpochOrHighestSeries-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Epoch Or Highest Series</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the latest possible geochronologic epoch or highest chronostratigraphic series attributable to the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Holocene`, `Pleistocene`, `Ibexian Series`</td>
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
			<th colspan="2"><a id="dwc_latestEraOrHighestErathem"></a>Term Name  dwc:latestEraOrHighestErathem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/latestEraOrHighestErathem">http://rs.tdwg.org/dwc/terms/latestEraOrHighestErathem</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/latestEraOrHighestErathem-2017-10-06">http://rs.tdwg.org/dwc/terms/version/latestEraOrHighestErathem-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Era Or Highest Erathem</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the latest possible geochronologic era or highest chronostratigraphic erathem attributable to the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Cenozoic`, `Mesozoic`</td>
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
			<th colspan="2"><a id="dwciri_latestGeochronologicalEra"></a>Term Name  dwciri:latestGeochronologicalEra</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/latestGeochronologicalEra">http://rs.tdwg.org/dwc/iri/latestGeochronologicalEra</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/latestGeochronologicalEra-2015-03-27">http://rs.tdwg.org/dwc/iri/version/latestGeochronologicalEra-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Geochronological Era</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Use to link a dwc:GeologicalContext instance to chronostratigraphic time periods at the lowest possible level in a standardized hierarchy.   Use this property to point to the latest possible geological time period from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI from a controlled vocabulary. A "convenience property" that replaces Darwin Core literal-value terms related to geological context. See Section 2.7.6 of the Darwin Core RDF Guide for details.</td>
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
			<th colspan="2"><a id="dwc_latestPeriodOrHighestSystem"></a>Term Name  dwc:latestPeriodOrHighestSystem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/latestPeriodOrHighestSystem">http://rs.tdwg.org/dwc/terms/latestPeriodOrHighestSystem</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/latestPeriodOrHighestSystem-2017-10-06">http://rs.tdwg.org/dwc/terms/version/latestPeriodOrHighestSystem-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Latest Period Or Highest System</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the latest possible geochronologic period or highest chronostratigraphic system attributable to the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Neogene`, `Tertiary`, `Quaternary`</td>
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
			<th colspan="2"><a id="dcterms_license"></a>Term Name  dcterms:license</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/license">http://purl.org/dc/terms/license</a></td>
		</tr>
			<td>Modified</td>
			<td>2008-01-14</td>
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
			<td>`<a href="http://creativecommons.org/publicdomain/zero/1.0/legalcode`">http://creativecommons.org/publicdomain/zero/1.0/legalcode`</a>, `<a href="http://creativecommons.org/licenses/by/4.0/legalcode`">http://creativecommons.org/licenses/by/4.0/legalcode`</a></td>
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
			<th colspan="2"><a id="dwciri_lifeStage"></a>Term Name  dwciri:lifeStage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/lifeStage">http://rs.tdwg.org/dwc/iri/lifeStage</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/lifeStage-2015-03-27">http://rs.tdwg.org/dwc/iri/version/lifeStage-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Life Stage (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The age class or life stage of the biological individual(s) at the time the Occurrence was recorded.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_lifeStage"></a>Term Name  dwc:lifeStage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/lifeStage">http://rs.tdwg.org/dwc/terms/lifeStage</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/lifeStage-2017-10-06">http://rs.tdwg.org/dwc/terms/version/lifeStage-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Life Stage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The age class or life stage of the biological individual(s) at the time the Occurrence was recorded.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`egg`, `eft`, `juvenile`, `adult`</td>
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
			<th colspan="2"><a id="dwc_lithostratigraphicTerms"></a>Term Name  dwc:lithostratigraphicTerms</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms">http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/lithostratigraphicTerms-2017-10-06">http://rs.tdwg.org/dwc/terms/version/lithostratigraphicTerms-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Lithostratigraphic Terms</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The combination of all litho-stratigraphic names for the rock from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Pleistocene-Weichselien`</td>
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
			<th colspan="2"><a id="dwc_LivingSpecimen"></a>Term Name  dwc:LivingSpecimen</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/LivingSpecimen">http://rs.tdwg.org/dwc/terms/LivingSpecimen</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/LivingSpecimen-2018-09-06">http://rs.tdwg.org/dwc/terms/version/LivingSpecimen-2018-09-06</a></td>
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
			<td>A living plant in a botanical garden. A living animal in a zoo.</td>
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
			<th colspan="2"><a id="dwc_locality"></a>Term Name  dwc:locality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/locality">http://rs.tdwg.org/dwc/terms/locality</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/locality-2017-10-06">http://rs.tdwg.org/dwc/terms/version/locality-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Locality</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The specific description of the place. Less specific geographic information can be provided in other geographic terms (higherGeography, continent, country, stateProvince, county, municipality, waterBody, island, islandGroup). This term may contain information modified from the original to correct perceived errors or standardize the description.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Bariloche, 25 km NNE via Ruta Nacional 40 (=Ruta 237)`.</td>
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
			<th colspan="2"><a id="dcterms_Location"></a>Term Name  dcterms:Location</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/Location">http://purl.org/dc/terms/Location</a></td>
		</tr>
			<td>Modified</td>
			<td>2008-01-14</td>
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
			<td>The municipality of San Carlos de Bariloche, Río Negro, Argentina. The place defined by a georeference.</td>
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
			<th colspan="2"><a id="dwc_locationAccordingTo"></a>Term Name  dwc:locationAccordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/locationAccordingTo">http://rs.tdwg.org/dwc/terms/locationAccordingTo</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/locationAccordingTo-2017-10-06">http://rs.tdwg.org/dwc/terms/version/locationAccordingTo-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Location According To</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about the source of this Location information. Could be a publication (gazetteer), institution, or team of individuals.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Getty Thesaurus of Geographic Names`, `GADM`</td>
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
			<th colspan="2"><a id="dwciri_locationAccordingTo"></a>Term Name  dwciri:locationAccordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/locationAccordingTo">http://rs.tdwg.org/dwc/iri/locationAccordingTo</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/locationAccordingTo-2015-03-27">http://rs.tdwg.org/dwc/iri/version/locationAccordingTo-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Location According To (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Information about the source of this Location information. Could be a publication (gazetteer), institution, or team of individuals.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_locationAttributes"></a>Term Name  dwc:locationAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/locationAttributes">http://rs.tdwg.org/dwc/terms/locationAttributes</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_locationID"></a>Term Name  dwc:locationID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/locationID">http://rs.tdwg.org/dwc/terms/locationID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/locationID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/locationID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Location ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the set of location information (data associated with dcterms:Location). May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1`">https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1`</a></td>
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
			<th colspan="2"><a id="dwc_locationRemarks"></a>Term Name  dwc:locationRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/locationRemarks">http://rs.tdwg.org/dwc/terms/locationRemarks</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/locationRemarks-2017-10-06">http://rs.tdwg.org/dwc/terms/version/locationRemarks-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Location Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the Location.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`under water since 2005`</td>
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
			<th colspan="2"><a id="dwc_lowestBiostratigraphicZone"></a>Term Name  dwc:lowestBiostratigraphicZone</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/lowestBiostratigraphicZone">http://rs.tdwg.org/dwc/terms/lowestBiostratigraphicZone</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/lowestBiostratigraphicZone-2017-10-06">http://rs.tdwg.org/dwc/terms/version/lowestBiostratigraphicZone-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Lowest Biostratigraphic Zone</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the lowest possible geological biostratigraphic zone of the stratigraphic horizon from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Maastrichtian`</td>
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
			<th colspan="2"><a id="dwc_MachineObservation"></a>Term Name  dwc:MachineObservation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/MachineObservation">http://rs.tdwg.org/dwc/terms/MachineObservation</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/MachineObservation-2018-09-06">http://rs.tdwg.org/dwc/terms/version/MachineObservation-2018-09-06</a></td>
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
			<td>A photograph. A video. An audio recording. A remote sensing image. A Occurrence record based on telemetry.</td>
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
			<th colspan="2"><a id="dwc_MaterialSample"></a>Term Name  dwc:MaterialSample</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/MaterialSample">http://rs.tdwg.org/dwc/terms/MaterialSample</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/MaterialSample-2018-09-06">http://rs.tdwg.org/dwc/terms/version/MaterialSample-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Sample</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A physical result of a sampling (or subsampling) event. In biological collections, the material sample is typically collected, and either preserved or destructively processed.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>A whole organism preserved in a collection. A part of an organism isolated for some purpose. A soil sample. A marine microbial sample.</td>
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
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_materialSampleID"></a>Term Name  dwc:materialSampleID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/materialSampleID">http://rs.tdwg.org/dwc/terms/materialSampleID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/materialSampleID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/materialSampleID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Material Sample ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the MaterialSample (as opposed to a particular digital record of the material sample). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the materialSampleID globally unique.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`06809dc5-f143-459a-be1a-6f03e63fc083`</td>
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
			<th colspan="2"><a id="dwc_maximumDepthInMeters"></a>Term Name  dwc:maximumDepthInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/maximumDepthInMeters">http://rs.tdwg.org/dwc/terms/maximumDepthInMeters</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/maximumDepthInMeters-2017-10-06">http://rs.tdwg.org/dwc/terms/version/maximumDepthInMeters-2017-10-06</a></td>
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
			<td>`0`, `200`</td>
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
			<th colspan="2"><a id="dwc_maximumDistanceAboveSurfaceInMeters"></a>Term Name  dwc:maximumDistanceAboveSurfaceInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/maximumDistanceAboveSurfaceInMeters">http://rs.tdwg.org/dwc/terms/maximumDistanceAboveSurfaceInMeters</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/maximumDistanceAboveSurfaceInMeters-2017-10-06">http://rs.tdwg.org/dwc/terms/version/maximumDistanceAboveSurfaceInMeters-2017-10-06</a></td>
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
			<td>`-1.5` (below the surface). `4.2` (above the surface). For a 1.5 meter sediment core from the bottom of a lake (at depth 20m) at 300m elevation: verbatimElevation: `300m` minimumElevationInMeters: `300`, maximumElevationInMeters: `300`, verbatimDepth: `20m`, minimumDepthInMeters: `20`, maximumDepthInMeters: `20`, minimumDistanceAboveSurfaceInMeters: `0`, maximumDistanceAboveSurfaceInMeters: `-1.5`.</td>
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
			<th colspan="2"><a id="dwc_maximumElevationInMeters"></a>Term Name  dwc:maximumElevationInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/maximumElevationInMeters">http://rs.tdwg.org/dwc/terms/maximumElevationInMeters</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/maximumElevationInMeters-2017-10-06">http://rs.tdwg.org/dwc/terms/version/maximumElevationInMeters-2017-10-06</a></td>
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
			<td>`-205`, `1236`</td>
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
			<th colspan="2"><a id="dwc_measurementAccuracy"></a>Term Name  dwc:measurementAccuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementAccuracy">http://rs.tdwg.org/dwc/terms/measurementAccuracy</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementAccuracy-2018-09-06">http://rs.tdwg.org/dwc/terms/version/measurementAccuracy-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Accuracy</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The description of the potential error associated with the measurementValue.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`0.01`, `normal distribution with variation of 2 m`</td>
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
			<th colspan="2"><a id="dwciri_measurementDeterminedBy"></a>Term Name  dwciri:measurementDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/measurementDeterminedBy">http://rs.tdwg.org/dwc/iri/measurementDeterminedBy</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/measurementDeterminedBy-2015-03-27">http://rs.tdwg.org/dwc/iri/version/measurementDeterminedBy-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Determined By (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A person, group, or organization who determined the value of the MeasurementOrFact.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_measurementDeterminedBy"></a>Term Name  dwc:measurementDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementDeterminedBy">http://rs.tdwg.org/dwc/terms/measurementDeterminedBy</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementDeterminedBy-2018-09-06">http://rs.tdwg.org/dwc/terms/version/measurementDeterminedBy-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Determined By</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of names of people, groups, or organizations who determined the value of the MeasurementOrFact.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Rob Guralnick`, `Peter Desmet | Stijn Van Hoey`</td>
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
			<th colspan="2"><a id="dwc_measurementDeterminedDate"></a>Term Name  dwc:measurementDeterminedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementDeterminedDate">http://rs.tdwg.org/dwc/terms/measurementDeterminedDate</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementDeterminedDate-2020-08-12">http://rs.tdwg.org/dwc/terms/version/measurementDeterminedDate-2020-08-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Determined Date</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The date on which the MeasurementOrFact was made.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a date that conforms to ISO 8601-1:2019.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`1963-03-08T14:07-0600` (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). `2009-02-20T08:40Z` (20 February 2009 8:40am UTC). `2018-08-29T15:19` (3:19pm local time on 29 August 2018). `1809-02-12` (some time during 12 February 1809). `1906-06` (some time in June 1906). `1971` (some time in the year 1971). `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). `1900/1909` (some time during the interval between the beginning of the year 1900 and the end of the year 1909). `2007-11-13/15` (some time in the interval between 13 November 2007 and 15 November 2007).</td>
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
			<th colspan="2"><a id="dwc_measurementID"></a>Term Name  dwc:measurementID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementID">http://rs.tdwg.org/dwc/terms/measurementID</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementID-2018-09-06">http://rs.tdwg.org/dwc/terms/version/measurementID-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the MeasurementOrFact (information pertaining to measurements, facts, characteristics, or assertions). May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`9c752d22-b09a-11e8-96f8-529269fb1459`</td>
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
			<th colspan="2"><a id="dwc_measurementMethod"></a>Term Name  dwc:measurementMethod</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementMethod">http://rs.tdwg.org/dwc/terms/measurementMethod</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementMethod-2018-09-06">http://rs.tdwg.org/dwc/terms/version/measurementMethod-2018-09-06</a></td>
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
			<td>Examples</td>
			<td>`minimum convex polygon around burrow entrances` (for a home range area). `barometric altimeter` (for an elevation).</td>
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
			<th colspan="2"><a id="dwciri_measurementMethod"></a>Term Name  dwciri:measurementMethod</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/measurementMethod">http://rs.tdwg.org/dwc/iri/measurementMethod</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_MeasurementOrFact"></a>Term Name  dwc:MeasurementOrFact</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/MeasurementOrFact">http://rs.tdwg.org/dwc/terms/MeasurementOrFact</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/MeasurementOrFact-2018-09-06">http://rs.tdwg.org/dwc/terms/version/MeasurementOrFact-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement or Fact</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A measurement of or fact about an rdfs:Resource (http://www.w3.org/2000/01/rdf-schema#Resource).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Resources can be thought of as identifiable records or instances of classes and may include, but need not be limited to dwc:Occurrence, dwc:Organism, dwc:MaterialSample, dwc:Event, dwc:Location, dwc:GeologicalContext, dwc:Identification, or dwc:Taxon.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>The weight of an organism in grams. The number of placental scars. Surface water temperature in Celsius.</td>
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
			<th colspan="2"><a id="dwc_measurementRemarks"></a>Term Name  dwc:measurementRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementRemarks">http://rs.tdwg.org/dwc/terms/measurementRemarks</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementRemarks-2018-09-06">http://rs.tdwg.org/dwc/terms/version/measurementRemarks-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes accompanying the MeasurementOrFact.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`tip of tail missing`</td>
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
			<th colspan="2"><a id="dwciri_measurementType"></a>Term Name  dwciri:measurementType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/measurementType">http://rs.tdwg.org/dwc/iri/measurementType</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_measurementType"></a>Term Name  dwc:measurementType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementType">http://rs.tdwg.org/dwc/terms/measurementType</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementType-2018-09-06">http://rs.tdwg.org/dwc/terms/version/measurementType-2018-09-06</a></td>
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
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`tail length`, `temperature`, `trap line length`, `survey area`, `trap type`</td>
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
			<th colspan="2"><a id="dwc_measurementUnit"></a>Term Name  dwc:measurementUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementUnit">http://rs.tdwg.org/dwc/terms/measurementUnit</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementUnit-2018-09-06">http://rs.tdwg.org/dwc/terms/version/measurementUnit-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Unit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The units associated with the measurementValue.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the International System of Units (SI).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`mm`, `C`, `km`, `ha`</td>
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
			<th colspan="2"><a id="dwciri_measurementUnit"></a>Term Name  dwciri:measurementUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/measurementUnit">http://rs.tdwg.org/dwc/iri/measurementUnit</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/measurementUnit-2015-03-27">http://rs.tdwg.org/dwc/iri/version/measurementUnit-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Measurement Unit (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The units associated with the measurementValue.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the International System of Units (SI).</td>
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
			<th colspan="2"><a id="dwc_measurementValue"></a>Term Name  dwc:measurementValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/measurementValue">http://rs.tdwg.org/dwc/terms/measurementValue</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/measurementValue-2018-09-06">http://rs.tdwg.org/dwc/terms/version/measurementValue-2018-09-06</a></td>
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
			<td>Examples</td>
			<td>`45`, `20`, `1`, `14.5`, `UV-light`</td>
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
			<th colspan="2"><a id="dwc_member"></a>Term Name  dwc:member</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/member">http://rs.tdwg.org/dwc/terms/member</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/member-2017-10-06">http://rs.tdwg.org/dwc/terms/version/member-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Member</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name of the lithostratigraphic member from which the cataloged item was collected.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Lava Dam Member`, `Hellnmaria Member`</td>
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
			<th colspan="2"><a id="dwc_minimumDepthInMeters"></a>Term Name  dwc:minimumDepthInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/minimumDepthInMeters">http://rs.tdwg.org/dwc/terms/minimumDepthInMeters</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/minimumDepthInMeters-2017-10-06">http://rs.tdwg.org/dwc/terms/version/minimumDepthInMeters-2017-10-06</a></td>
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
			<td>`0`, `100`</td>
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
			<th colspan="2"><a id="dwc_minimumDistanceAboveSurfaceInMeters"></a>Term Name  dwc:minimumDistanceAboveSurfaceInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/minimumDistanceAboveSurfaceInMeters">http://rs.tdwg.org/dwc/terms/minimumDistanceAboveSurfaceInMeters</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/minimumDistanceAboveSurfaceInMeters-2017-10-06">http://rs.tdwg.org/dwc/terms/version/minimumDistanceAboveSurfaceInMeters-2017-10-06</a></td>
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
			<td>`-1.5` (below the surface). `4.2` (above the surface). For a 1.5 meter sediment core from the bottom of a lake (at depth 20m) at 300m elevation: verbatimElevation: `300m` minimumElevationInMeters: `300`, maximumElevationInMeters: `300`, verbatimDepth: `20m`, minimumDepthInMeters: `20`, maximumDepthInMeters: `20`, minimumDistanceAboveSurfaceInMeters: `0`, maximumDistanceAboveSurfaceInMeters: `-1.5`.</td>
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
			<th colspan="2"><a id="dwc_minimumElevationInMeters"></a>Term Name  dwc:minimumElevationInMeters</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/minimumElevationInMeters">http://rs.tdwg.org/dwc/terms/minimumElevationInMeters</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/minimumElevationInMeters-2017-10-06">http://rs.tdwg.org/dwc/terms/version/minimumElevationInMeters-2017-10-06</a></td>
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
			<td>`-100`, `802`</td>
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
			<th colspan="2"><a id="dcterms_modified"></a>Term Name  dcterms:modified</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/modified">http://purl.org/dc/terms/modified</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
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
			<td>`1963-03-08T14:07-0600` (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). `2009-02-20T08:40Z` (20 February 2009 8:40am UTC). `2018-08-29T15:19` (3:19pm local time on 29 August 2018). `1809-02-12` (some time during 12 February 1809). `1906-06` (some time in June 1906). `1971` (some time in the year 1971). `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). `1900/1909` (some time during the interval between the beginning of the year 1900 and the end of the year 1909). `2007-11-13/15` (some time in the interval between 13 November 2007 and 15 November 2007).</td>
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
			<th colspan="2"><a id="dwc_month"></a>Term Name  dwc:month</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/month">http://rs.tdwg.org/dwc/terms/month</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/month-2020-08-12">http://rs.tdwg.org/dwc/terms/version/month-2020-08-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Month</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The integer month in which the Event occurred.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`1` (January). `10` (October).</td>
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
			<th colspan="2"><a id="dwc_municipality"></a>Term Name  dwc:municipality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/municipality">http://rs.tdwg.org/dwc/terms/municipality</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/municipality-2017-10-06">http://rs.tdwg.org/dwc/terms/version/municipality-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Municipality</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full, unabbreviated name of the next smaller administrative region than county (city, municipality, etc.) in which the Location occurs. Do not use this term for a nearby named place that does not contain the actual location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Holzminden`, `Araçatuba`, `Ga-Segonyana`</td>
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
			<th colspan="2"><a id="dwc_nameAccordingTo"></a>Term Name  dwc:nameAccordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/nameAccordingTo">http://rs.tdwg.org/dwc/terms/nameAccordingTo</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/nameAccordingTo-2017-10-06">http://rs.tdwg.org/dwc/terms/version/nameAccordingTo-2017-10-06</a></td>
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
			<td>Examples</td>
			<td>`McCranie, J. R., D. B. Wake, and L. D. Wilson. 1996. The taxonomic status of Bolitoglossa schmidti, with comments on the biology of the Mesoamerican salamander Bolitoglossa dofleini (Caudata: Plethodontidae). Carib. J. Sci. 32:395-398.`, `Werner Greuter 2008`. `Lilljeborg 1861, Upsala Univ. Arsskrift, Math. Naturvet., pp. 4, 5`</td>
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
			<th colspan="2"><a id="dwc_nameAccordingToID"></a>Term Name  dwc:nameAccordingToID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/nameAccordingToID">http://rs.tdwg.org/dwc/terms/nameAccordingToID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/nameAccordingToID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/nameAccordingToID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name According To ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the source in which the specific taxon concept circumscription is defined or implied. See nameAccordingTo.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="https://doi.org/10.1016/S0269-915X(97">https://doi.org/10.1016/S0269-915X(97</a>)80026-2`</td>
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
			<th colspan="2"><a id="dwc_namePublicationID"></a>Term Name  dwc:namePublicationID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublicationID">http://rs.tdwg.org/dwc/terms/namePublicationID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_namePublishedIn"></a>Term Name  dwc:namePublishedIn</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublishedIn">http://rs.tdwg.org/dwc/terms/namePublishedIn</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/namePublishedIn-2017-10-06">http://rs.tdwg.org/dwc/terms/version/namePublishedIn-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Published In</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A reference for the publication in which the scientificName was originally established under the rules of the associated nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388`, `Forel, Auguste, Diagnosies provisoires de quelques espèces nouvelles de fourmis de Madagascar, récoltées par M. Grandidier., Annales de la Societe Entomologique de Belgique, Comptes-rendus des Seances 30, 1886`</td>
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
			<th colspan="2"><a id="dwc_namePublishedInID"></a>Term Name  dwc:namePublishedInID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublishedInID">http://rs.tdwg.org/dwc/terms/namePublishedInID</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/namePublishedInID-2020-08-12">http://rs.tdwg.org/dwc/terms/version/namePublishedInID-2020-08-12</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Published In ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the publication in which the scientificName was originally established under the rules of the associated nomenclaturalCode.</td>
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
			<th colspan="2"><a id="dwc_namePublishedInYear"></a>Term Name  dwc:namePublishedInYear</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/namePublishedInYear">http://rs.tdwg.org/dwc/terms/namePublishedInYear</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/namePublishedInYear-2017-10-06">http://rs.tdwg.org/dwc/terms/version/namePublishedInYear-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Name Published In Year</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The four-digit year in which the scientificName was published.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`1915`, `2008`</td>
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
			<th colspan="2"><a id="dwc_nomenclaturalCode"></a>Term Name  dwc:nomenclaturalCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/nomenclaturalCode">http://rs.tdwg.org/dwc/terms/nomenclaturalCode</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/nomenclaturalCode-2017-10-06">http://rs.tdwg.org/dwc/terms/version/nomenclaturalCode-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Nomenclatural Code</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The nomenclatural code (or codes in the case of an ambiregnal name) under which the scientificName is constructed.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`ICN`, `ICZN`, `BC`, `ICNCP`, `BioCode`</td>
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
			<th colspan="2"><a id="dwc_nomenclaturalStatus"></a>Term Name  dwc:nomenclaturalStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/nomenclaturalStatus">http://rs.tdwg.org/dwc/terms/nomenclaturalStatus</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/nomenclaturalStatus-2017-10-06">http://rs.tdwg.org/dwc/terms/version/nomenclaturalStatus-2017-10-06</a></td>
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
			<td>`nom. ambig.`, `nom. illeg.`, `nom. subnud.`</td>
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
			<th colspan="2"><a id="dwc_Occurrence"></a>Term Name  dwc:Occurrence</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Occurrence">http://rs.tdwg.org/dwc/terms/Occurrence</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/Occurrence-2018-09-06">http://rs.tdwg.org/dwc/terms/version/Occurrence-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An existence of an Organism (sensu http://rs.tdwg.org/dwc/terms/Organism) at a particular place at a particular time.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>A wolf pack on the shore of Kluane Lake in 1988. A virus in a plant leaf in a the New York Botanical Garden at 15:29 on 2014-10-23. A fungus in Central Park in the summer of 1929.</td>
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
			<th colspan="2"><a id="dwc_occurrenceAttributes"></a>Term Name  dwc:occurrenceAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceAttributes">http://rs.tdwg.org/dwc/terms/occurrenceAttributes</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceDetails"></a>Term Name  dwc:occurrenceDetails</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceDetails">http://rs.tdwg.org/dwc/terms/occurrenceDetails</a></td>
		</tr>
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
			<th colspan="2"><a id="dwc_occurrenceID"></a>Term Name  dwc:occurrenceID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceID">http://rs.tdwg.org/dwc/terms/occurrenceID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/occurrenceID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/occurrenceID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the Occurrence (as opposed to a particular digital record of the occurrence). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the occurrenceID globally unique.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a persistent, globally unique identifier.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="http://arctos.database.museum/guid/MSB:Mamm:233627`">http://arctos.database.museum/guid/MSB:Mamm:233627`</a>, `000866d2-c177-4648-a200-ead4007051b9`, `urn:catalog:UWBM:Bird:89776`</td>
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
			<th colspan="2"><a id="dwc_OccurrenceMeasurement"></a>Term Name  dwc:OccurrenceMeasurement</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/OccurrenceMeasurement">http://rs.tdwg.org/dwc/terms/OccurrenceMeasurement</a></td>
		</tr>
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
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementAccuracy"></a>Term Name  dwc:occurrenceMeasurementAccuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementAccuracy">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementAccuracy</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementDeterminedBy"></a>Term Name  dwc:occurrenceMeasurementDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementDeterminedBy">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementDeterminedBy</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementDeterminedDate"></a>Term Name  dwc:occurrenceMeasurementDeterminedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementDeterminedDate">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementDeterminedDate</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementID"></a>Term Name  dwc:occurrenceMeasurementID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementID">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementRemarks"></a>Term Name  dwc:occurrenceMeasurementRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementRemarks">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementRemarks</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementType"></a>Term Name  dwc:occurrenceMeasurementType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementType">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementType</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementUnit"></a>Term Name  dwc:occurrenceMeasurementUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementUnit">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementUnit</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceMeasurementValue"></a>Term Name  dwc:occurrenceMeasurementValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceMeasurementValue">http://rs.tdwg.org/dwc/terms/occurrenceMeasurementValue</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_occurrenceRemarks"></a>Term Name  dwc:occurrenceRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceRemarks">http://rs.tdwg.org/dwc/terms/occurrenceRemarks</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/occurrenceRemarks-2017-10-06">http://rs.tdwg.org/dwc/terms/version/occurrenceRemarks-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the Occurrence.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`found dead on road`</td>
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
			<th colspan="2"><a id="dwc_occurrenceStatus"></a>Term Name  dwc:occurrenceStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/occurrenceStatus">http://rs.tdwg.org/dwc/terms/occurrenceStatus</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/occurrenceStatus-2017-10-06">http://rs.tdwg.org/dwc/terms/version/occurrenceStatus-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A statement about the presence or absence of a Taxon at a Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`present`, `absent`</td>
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
			<th colspan="2"><a id="dwciri_occurrenceStatus"></a>Term Name  dwciri:occurrenceStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/occurrenceStatus">http://rs.tdwg.org/dwc/iri/occurrenceStatus</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/occurrenceStatus-2015-03-27">http://rs.tdwg.org/dwc/iri/version/occurrenceStatus-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Occurrence Status (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A statement about the presence or absence of a Taxon at a Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_order"></a>Term Name  dwc:order</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/order">http://rs.tdwg.org/dwc/terms/order</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/order-2017-10-06">http://rs.tdwg.org/dwc/terms/version/order-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Order</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the order in which the taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Carnivora`, `Monocleales`</td>
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
			<th colspan="2"><a id="dwc_Organism"></a>Term Name  dwc:Organism</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Organism">http://rs.tdwg.org/dwc/terms/Organism</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/Organism-2018-09-06">http://rs.tdwg.org/dwc/terms/version/Organism-2018-09-06</a></td>
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
			<td>Instances of the dwc:Organism class are intended to facilitate linking one or more dwc:Identification instances to one or more dwc:Occurrence instances. Therefore, things that are typically assigned scientific names (such as viruses, hybrids, and lichens) and aggregates whose occurrences are typically recorded (such as packs, clones, and colonies) are included in the scope of this class.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>A specific bird. A specific wolf pack. A specific instance of a bacterial culture.</td>
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
			<th colspan="2"><a id="dwc_organismID"></a>Term Name  dwc:organismID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismID">http://rs.tdwg.org/dwc/terms/organismID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/organismID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the Organism instance (as opposed to a particular digital record of the Organism). May be a globally unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="http://arctos.database.museum/guid/WNMU:Mamm:1249`">http://arctos.database.museum/guid/WNMU:Mamm:1249`</a></td>
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
			<th colspan="2"><a id="dwc_organismName"></a>Term Name  dwc:organismName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismName">http://rs.tdwg.org/dwc/terms/organismName</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismName-2017-10-06">http://rs.tdwg.org/dwc/terms/version/organismName-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A textual name or label assigned to an Organism instance.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Huberta`, `Boab Prison Tree`, `J pod`</td>
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
			<th colspan="2"><a id="dwc_organismQuantity"></a>Term Name  dwc:organismQuantity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismQuantity">http://rs.tdwg.org/dwc/terms/organismQuantity</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismQuantity-2017-10-06">http://rs.tdwg.org/dwc/terms/version/organismQuantity-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Quantity</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A number or enumeration value for the quantity of organisms.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A dwc:organismQuantity must have a corresponding dwc:organismQuantityType.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`27` (organismQuantity) with `individuals` (organismQuantityType). `12.5` (organismQuantity) with `%biomass` (organismQuantityType). `r` (organismQuantity) with `BraunBlanquetScale` (organismQuantityType).</td>
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
			<th colspan="2"><a id="dwciri_organismQuantityType"></a>Term Name  dwciri:organismQuantityType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/organismQuantityType">http://rs.tdwg.org/dwc/iri/organismQuantityType</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_organismQuantityType"></a>Term Name  dwc:organismQuantityType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismQuantityType">http://rs.tdwg.org/dwc/terms/organismQuantityType</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismQuantityType-2017-10-06">http://rs.tdwg.org/dwc/terms/version/organismQuantityType-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Quantity Type</td>
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
			<td>Examples</td>
			<td>`27` (organismQuantity) with `individuals` (organismQuantityType). `12.5` (organismQuantity) with `%biomass` (organismQuantityType). `r` (organismQuantity) with `BraunBlanquetScale` (organismQuantityType).</td>
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
			<th colspan="2"><a id="dwc_organismRemarks"></a>Term Name  dwc:organismRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismRemarks">http://rs.tdwg.org/dwc/terms/organismRemarks</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismRemarks-2017-10-06">http://rs.tdwg.org/dwc/terms/version/organismRemarks-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Remarks</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>Comments or notes about the Organism instance.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`One of a litter of six`</td>
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
			<th colspan="2"><a id="dwc_organismScope"></a>Term Name  dwc:organismScope</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/organismScope">http://rs.tdwg.org/dwc/terms/organismScope</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/organismScope-2017-10-06">http://rs.tdwg.org/dwc/terms/version/organismScope-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Organism Scope</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A description of the kind of Organism instance. Can be used to indicate whether the Organism instance represents a discrete organism or if it represents a particular type of aggregation.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. This term is not intended to be used to specify a type of taxon. To describe the kind of dwc:Organism using a URI object in RDF, use rdf:type (<a href="http://www.w3.org/1999/02/22-rdf-syntax-ns#type">http://www.w3.org/1999/02/22-rdf-syntax-ns#type</a>) instead.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`multicellular organism`, `virus`, `clone`, `pack`, `colony`</td>
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
			<th colspan="2"><a id="dwc_originalNameUsage"></a>Term Name  dwc:originalNameUsage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/originalNameUsage">http://rs.tdwg.org/dwc/terms/originalNameUsage</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/originalNameUsage-2017-10-06">http://rs.tdwg.org/dwc/terms/version/originalNameUsage-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Original Name Usage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The taxon name, with authorship and date information if known, as it originally appeared when first established under the rules of the associated nomenclaturalCode. The basionym (botany) or basonym (bacteriology) of the scientificName or the senior/earlier homonym for replaced names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Pinus abies`, `Gasterosteus saltatrix Linnaeus 1768`</td>
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
			<th colspan="2"><a id="dwc_originalNameUsageID"></a>Term Name  dwc:originalNameUsageID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/originalNameUsageID">http://rs.tdwg.org/dwc/terms/originalNameUsageID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/originalNameUsageID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/originalNameUsageID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Original Name Usage ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the name usage (documented meaning of the name according to a source) in which the terminal element of the scientificName was originally established under the rules of the associated nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="https://www.gbif.org/species/2685484`">https://www.gbif.org/species/2685484`</a></td>
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
			<th colspan="2"><a id="dwc_otherCatalogNumbers"></a>Term Name  dwc:otherCatalogNumbers</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/otherCatalogNumbers">http://rs.tdwg.org/dwc/terms/otherCatalogNumbers</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/otherCatalogNumbers-2017-10-06">http://rs.tdwg.org/dwc/terms/version/otherCatalogNumbers-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Other Catalog Numbers</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of previous or alternate fully qualified catalog numbers or other human-used identifiers for the same Occurrence, whether in the current or any other data set or collection.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`FMNH:Mammal:1234`, `NPS YELLO6778 | MBG 33424`</td>
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
			<th colspan="2"><a id="dwc_ownerInstitutionCode"></a>Term Name  dwc:ownerInstitutionCode</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/ownerInstitutionCode">http://rs.tdwg.org/dwc/terms/ownerInstitutionCode</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/ownerInstitutionCode-2017-10-06">http://rs.tdwg.org/dwc/terms/version/ownerInstitutionCode-2017-10-06</a></td>
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
			<td>`NPS`, `APN`, `InBio`</td>
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
			<th colspan="2"><a id="dwc_parentEventID"></a>Term Name  dwc:parentEventID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/parentEventID">http://rs.tdwg.org/dwc/terms/parentEventID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/parentEventID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/parentEventID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Parent Event ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the broader Event that groups this and potentially other Events.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Use a globally unique identifier for a dwc:Event or an identifier for a dwc:Event that is specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`A1` (parentEventID to identify the main Whittaker Plot in nested samples, each with its own eventID - `A1:1`, `A1:2`).</td>
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
			<th colspan="2"><a id="dwc_parentNameUsage"></a>Term Name  dwc:parentNameUsage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/parentNameUsage">http://rs.tdwg.org/dwc/terms/parentNameUsage</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/parentNameUsage-2017-10-06">http://rs.tdwg.org/dwc/terms/version/parentNameUsage-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Parent Name Usage</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full name, with authorship and date information if known, of the direct, most proximate higher-rank parent taxon (in a classification) of the most specific element of the scientificName.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Rubiaceae`, `Gruiformes`, `Testudinae`</td>
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
			<th colspan="2"><a id="dwc_parentNameUsageID"></a>Term Name  dwc:parentNameUsageID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/parentNameUsageID">http://rs.tdwg.org/dwc/terms/parentNameUsageID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/parentNameUsageID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/parentNameUsageID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Parent Name Usage ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the name usage (documented meaning of the name according to a source) of the direct, most proximate higher-rank parent taxon (in a classification) of the most specific element of the scientificName.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`<a href="https://www.gbif.org/species/2684876`">https://www.gbif.org/species/2684876`</a></td>
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
			<th colspan="2"><a id="dwc_phylum"></a>Term Name  dwc:phylum</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/phylum">http://rs.tdwg.org/dwc/terms/phylum</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/phylum-2017-10-06">http://rs.tdwg.org/dwc/terms/version/phylum-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Phylum</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the phylum or division in which the taxon is classified.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Chordata` (phylum). `Bryophyta` (division).</td>
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
			<th colspan="2"><a id="dwc_pointRadiusSpatialFit"></a>Term Name  dwc:pointRadiusSpatialFit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit">http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/pointRadiusSpatialFit-2017-10-06">http://rs.tdwg.org/dwc/terms/version/pointRadiusSpatialFit-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Point Radius Spatial Fit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ratio of the area of the point-radius (decimalLatitude, decimalLongitude, coordinateUncertaintyInMeters) to the area of the true (original, or most specific) spatial representation of the Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given point-radius does not completely contain the original representation. The pointRadiusSpatialFit is undefined (and should be left blank) if the original representation is a point without uncertainty and the given georeference is not that same point (without uncertainty). If both the original and the given georeference are the same point, the pointRadiusSpatialFit is 1.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Detailed explanations with graphical examples can be found in the Guide to Best Practices for Georeferencing, Chapman and Wieczorek, eds. 2006.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>Detailed explanations with graphical examples can be found in the Guide to Best Practices for Georeferencing, Chapman and Wieczorek, eds. 2006.</td>
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
			<th colspan="2"><a id="dwc_preparations"></a>Term Name  dwc:preparations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/preparations">http://rs.tdwg.org/dwc/terms/preparations</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/preparations-2017-10-06">http://rs.tdwg.org/dwc/terms/version/preparations-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Preparations</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of preparations and preservation methods for a specimen.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`fossil`, `cast`, `photograph`, `DNA extract`, `skin | skull | skeleton`, `whole animal (ETOH) | tissue (EDTA)`</td>
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
			<th colspan="2"><a id="dwciri_preparations"></a>Term Name  dwciri:preparations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/preparations">http://rs.tdwg.org/dwc/iri/preparations</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_PreservedSpecimen"></a>Term Name  dwc:PreservedSpecimen</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/PreservedSpecimen">http://rs.tdwg.org/dwc/terms/PreservedSpecimen</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/PreservedSpecimen-2018-09-06">http://rs.tdwg.org/dwc/terms/version/PreservedSpecimen-2018-09-06</a></td>
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
			<td>A plant on an herbarium sheet. A cataloged lot of fish in a jar.</td>
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
			<th colspan="2"><a id="dwc_PreviousIdentifications"></a>Term Name  dwc:PreviousIdentifications</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/PreviousIdentifications">http://rs.tdwg.org/dwc/terms/PreviousIdentifications</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_previousIdentifications"></a>Term Name  dwc:previousIdentifications</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/previousIdentifications">http://rs.tdwg.org/dwc/terms/previousIdentifications</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/previousIdentifications-2017-10-06">http://rs.tdwg.org/dwc/terms/version/previousIdentifications-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Previous Identifications</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of previous assignments of names to the Organism.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Chalepidae`, `Pinus abies`, `Anthus sp., field ID by G. Iglesias | Anthus correndera, expert ID by C. Cicero 2009-02-12 based on morphology`</td>
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
			<th colspan="2"><a id="dwciri_recordedBy"></a>Term Name  dwciri:recordedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/recordedBy">http://rs.tdwg.org/dwc/iri/recordedBy</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/recordedBy-2015-03-27">http://rs.tdwg.org/dwc/iri/version/recordedBy-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Recorded By (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A person, group, or organization responsible for recording the original Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_recordedBy"></a>Term Name  dwc:recordedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/recordedBy">http://rs.tdwg.org/dwc/terms/recordedBy</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/recordedBy-2017-10-06">http://rs.tdwg.org/dwc/terms/version/recordedBy-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Recorded By</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A list (concatenated and separated) of names of people, groups, or organizations responsible for recording the original Occurrence. The primary collector or observer, especially one who applies a personal identifier (recordNumber), should be listed first.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`José E. Crespo`. `Oliver P. Pearson | Anita K. Pearson` (where the value in recordNumber `OPP 7101` corresponds to the collector number for the specimen in the field catalog of Oliver P. Pearson).</td>
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
			<th colspan="2"><a id="dwc_recordNumber"></a>Term Name  dwc:recordNumber</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/recordNumber">http://rs.tdwg.org/dwc/terms/recordNumber</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/recordNumber-2017-10-06">http://rs.tdwg.org/dwc/terms/version/recordNumber-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Record Number</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier given to the Occurrence at the time it was recorded. Often serves as a link between field notes and an Occurrence record, such as a specimen collector's number.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`OPP 7101`</td>
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
			<th colspan="2"><a id="dwciri_recordNumber"></a>Term Name  dwciri:recordNumber</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/recordNumber">http://rs.tdwg.org/dwc/iri/recordNumber</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/recordNumber-2015-03-27">http://rs.tdwg.org/dwc/iri/version/recordNumber-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Record Number (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier given to the Occurrence at the time it was recorded. Often serves as a link between field notes and an Occurrence record, such as a specimen collector's number.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>The subject is a dwc:Occurrence and the object is a (possibly IRI-identified) resource that is the field notes.</td>
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
			<th colspan="2"><a id="dcterms_references"></a>Term Name  dcterms:references</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/references">http://purl.org/dc/terms/references</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
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
			<td>Examples</td>
			<td>`<a href="http://arctos.database.museum/guid/MVZ:Mamm:165861?seid=101356`">http://arctos.database.museum/guid/MVZ:Mamm:165861?seid=101356`</a>, `<a href="http://www.catalogueoflife.org/col/details/species/id/55501d5898c605670da76dee09746aa9`">http://www.catalogueoflife.org/col/details/species/id/55501d5898c605670da76dee09746aa9`</a></td>
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
			<th colspan="2"><a id="dwc_RelatedBasisOfRecord"></a>Term Name  dwc:RelatedBasisOfRecord</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/RelatedBasisOfRecord">http://rs.tdwg.org/dwc/terms/RelatedBasisOfRecord</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relatedResourceID"></a>Term Name  dwc:relatedResourceID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relatedResourceID">http://rs.tdwg.org/dwc/terms/relatedResourceID</a></td>
		</tr>
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
			<td>`dc609808-b09b-11e8-96f8-529269fb1459`</td>
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
			<th colspan="2"><a id="dwc_relatedResourceType"></a>Term Name  dwc:relatedResourceType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relatedResourceType">http://rs.tdwg.org/dwc/terms/relatedResourceType</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_relationshipAccordingTo"></a>Term Name  dwc:relationshipAccordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipAccordingTo">http://rs.tdwg.org/dwc/terms/relationshipAccordingTo</a></td>
		</tr>
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
			<td>`Julie Woodruff`</td>
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
			<th colspan="2"><a id="dwc_relationshipEstablishedDate"></a>Term Name  dwc:relationshipEstablishedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipEstablishedDate">http://rs.tdwg.org/dwc/terms/relationshipEstablishedDate</a></td>
		</tr>
			<td>Modified</td>
			<td>2020-08-12</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relationshipEstablishedDate-2020-08-12">http://rs.tdwg.org/dwc/terms/version/relationshipEstablishedDate-2020-08-12</a></td>
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
			<td>`1963-03-08T14:07-0600` (8 Mar 1963 at 2:07pm in the time zone six hours earlier than UTC). `2009-02-20T08:40Z` (20 February 2009 8:40am UTC). `2018-08-29T15:19` (3:19pm local time on 29 August 2018). `1809-02-12` (some time during 12 February 1809). `1906-06` (some time in June 1906). `1971` (some time in the year 1971). `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time during the interval between 1 March 2007 1pm UTC and 11 May 2008 3:30pm UTC). `1900/1909` (some time during the interval between the beginning of the year 1900 and the end of the year 1909). `2007-11-13/15` (some time in the interval between 13 November 2007 and 15 November 2007).</td>
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
			<th colspan="2"><a id="dwc_relationshipOfResource"></a>Term Name  dwc:relationshipOfResource</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipOfResource">http://rs.tdwg.org/dwc/terms/relationshipOfResource</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relationshipOfResource-2018-09-06">http://rs.tdwg.org/dwc/terms/version/relationshipOfResource-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Relationship Of Resource</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The relationship of the resource identified by relatedResourceID to the subject (optionally identified by the resourceID).</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`sameAs`, `duplicate of`, `mother of`, `endoparasite of`, `host to`, `sibling of`, `valid synonym of`, `located within`</td>
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
			<th colspan="2"><a id="dwc_relationshipRemarks"></a>Term Name  dwc:relationshipRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/relationshipRemarks">http://rs.tdwg.org/dwc/terms/relationshipRemarks</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/relationshipRemarks-2018-09-06">http://rs.tdwg.org/dwc/terms/version/relationshipRemarks-2018-09-06</a></td>
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
			<td>`mother and offspring collected from the same nest`, `pollinator captured in the act`</td>
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
			<th colspan="2"><a id="dwc_reproductiveCondition"></a>Term Name  dwc:reproductiveCondition</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/reproductiveCondition">http://rs.tdwg.org/dwc/terms/reproductiveCondition</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/reproductiveCondition-2017-10-06">http://rs.tdwg.org/dwc/terms/version/reproductiveCondition-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Reproductive Condition</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The reproductive condition of the biological individual(s) represented in the Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`non-reproductive`, `pregnant`, `in bloom`, `fruit-bearing`</td>
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
			<th colspan="2"><a id="dwciri_reproductiveCondition"></a>Term Name  dwciri:reproductiveCondition</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/reproductiveCondition">http://rs.tdwg.org/dwc/iri/reproductiveCondition</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/reproductiveCondition-2015-03-27">http://rs.tdwg.org/dwc/iri/version/reproductiveCondition-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Reproductive Condition (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The reproductive condition of the biological individual(s) represented in the Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_resourceID"></a>Term Name  dwc:resourceID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/resourceID">http://rs.tdwg.org/dwc/terms/resourceID</a></td>
		</tr>
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
			<td>`f809b9e0-b09b-11e8-96f8-529269fb1459`</td>
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
			<th colspan="2"><a id="dwc_ResourceRelationship"></a>Term Name  dwc:ResourceRelationship</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/ResourceRelationship">http://rs.tdwg.org/dwc/terms/ResourceRelationship</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/ResourceRelationship-2018-09-06">http://rs.tdwg.org/dwc/terms/version/ResourceRelationship-2018-09-06</a></td>
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
			<td>Resources can be thought of as identifiable records or instances of classes and may include, but need not be limited to dwc:Occurrence, dwc:Organism, dwc:MaterialSample, dwc:Event, dwc:Location, dwc:GeologicalContext, dwc:Identification, or dwc:Taxon.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>An instance of an Organism is the mother of another instance of an Organism. A uniquely identified Occurrence represents the same Occurrence as another uniquely identified Occurrence. A MaterialSample is a subsample of another MaterialSample.</td>
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
			<th colspan="2"><a id="dwc_resourceRelationshipID"></a>Term Name  dwc:resourceRelationshipID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/resourceRelationshipID">http://rs.tdwg.org/dwc/terms/resourceRelationshipID</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/resourceRelationshipID-2018-09-06">http://rs.tdwg.org/dwc/terms/version/resourceRelationshipID-2018-09-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Resource Relationship ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for an instance of relationship between one resource (the subject) and another (relatedResource, the object).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`04b16710-b09c-11e8-96f8-529269fb1459`</td>
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
			<th colspan="2"><a id="dcterms_rights"></a>Term Name  dcterms:rights</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/rights">http://purl.org/dc/terms/rights</a></td>
		</tr>
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
			<th colspan="2"><a id="dcterms_rightsHolder"></a>Term Name  dcterms:rightsHolder</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/rightsHolder">http://purl.org/dc/terms/rightsHolder</a></td>
		</tr>
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
			<td>`The Regents of the University of California`</td>
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
			<th colspan="2"><a id="dwc_Sample"></a>Term Name  dwc:Sample</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Sample">http://rs.tdwg.org/dwc/terms/Sample</a></td>
		</tr>
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
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttribute"></a>Term Name  dwc:SampleAttribute</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttribute">http://rs.tdwg.org/dwc/terms/SampleAttribute</a></td>
		</tr>
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
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeAccuracy"></a>Term Name  dwc:SampleAttributeAccuracy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeAccuracy">http://rs.tdwg.org/dwc/terms/SampleAttributeAccuracy</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeDeterminedBy"></a>Term Name  dwc:SampleAttributeDeterminedBy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeDeterminedBy">http://rs.tdwg.org/dwc/terms/SampleAttributeDeterminedBy</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeDeterminedDate"></a>Term Name  dwc:SampleAttributeDeterminedDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeDeterminedDate">http://rs.tdwg.org/dwc/terms/SampleAttributeDeterminedDate</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeRemarks"></a>Term Name  dwc:SampleAttributeRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeRemarks">http://rs.tdwg.org/dwc/terms/SampleAttributeRemarks</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeUnit"></a>Term Name  dwc:SampleAttributeUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeUnit">http://rs.tdwg.org/dwc/terms/SampleAttributeUnit</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleAttributeValue"></a>Term Name  dwc:SampleAttributeValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleAttributeValue">http://rs.tdwg.org/dwc/terms/SampleAttributeValue</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SampleRemarks"></a>Term Name  dwc:SampleRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SampleRemarks">http://rs.tdwg.org/dwc/terms/SampleRemarks</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_sampleSizeUnit"></a>Term Name  dwc:sampleSizeUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/sampleSizeUnit">http://rs.tdwg.org/dwc/terms/sampleSizeUnit</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/sampleSizeUnit-2017-10-06">http://rs.tdwg.org/dwc/terms/version/sampleSizeUnit-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Size Unit</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A sampleSizeUnit must have a corresponding sampleSizeValue, e.g., `5` for sampleSizeValue with `metre` for sampleSizeUnit.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`minute`, `hour`, `day`, `metre`, `square metre`, `cubic metre`</td>
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
			<th colspan="2"><a id="dwciri_sampleSizeUnit"></a>Term Name  dwciri:sampleSizeUnit</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/sampleSizeUnit">http://rs.tdwg.org/dwc/iri/sampleSizeUnit</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/sampleSizeUnit-2015-03-27">http://rs.tdwg.org/dwc/iri/version/sampleSizeUnit-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Size Unit (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A sampleSizeUnit must have a corresponding sampleSizeValue. Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure <a href="http://www.wurvoc.org/vocabularies/om-1.8/">http://www.wurvoc.org/vocabularies/om-1.8/</a> of SI units, derived units, or other non-SI units accepted for use within the SI.</td>
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
			<th colspan="2"><a id="dwc_sampleSizeValue"></a>Term Name  dwc:sampleSizeValue</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/sampleSizeValue">http://rs.tdwg.org/dwc/terms/sampleSizeValue</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/sampleSizeValue-2017-10-06">http://rs.tdwg.org/dwc/terms/version/sampleSizeValue-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sample Size Value</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>A numeric value for a measurement of the size (time duration, length, area, or volume) of a sample in a sampling event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>A sampleSizeValue must have a corresponding sampleSizeUnit. </td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`5` for sampleSizeValue with `metre` for sampleSizeUnit.</td>
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
			<th colspan="2"><a id="dwc_SamplingAttributeID"></a>Term Name  dwc:SamplingAttributeID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingAttributeID">http://rs.tdwg.org/dwc/terms/SamplingAttributeID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingAttributeType"></a>Term Name  dwc:SamplingAttributeType</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingAttributeType">http://rs.tdwg.org/dwc/terms/SamplingAttributeType</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_samplingEffort"></a>Term Name  dwc:samplingEffort</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/samplingEffort">http://rs.tdwg.org/dwc/terms/samplingEffort</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/samplingEffort-2017-10-06">http://rs.tdwg.org/dwc/terms/version/samplingEffort-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Effort</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The amount of effort expended during an Event.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`40 trap-nights`, `10 observer-hours`, `10 km by foot`, `30 km by car`</td>
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
			<th colspan="2"><a id="dwc_SamplingEvent"></a>Term Name  dwc:SamplingEvent</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingEvent">http://rs.tdwg.org/dwc/terms/SamplingEvent</a></td>
		</tr>
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
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingEventAttributes"></a>Term Name  dwc:SamplingEventAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingEventAttributes">http://rs.tdwg.org/dwc/terms/SamplingEventAttributes</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingEventID"></a>Term Name  dwc:SamplingEventID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingEventID">http://rs.tdwg.org/dwc/terms/SamplingEventID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingEventRemarks"></a>Term Name  dwc:SamplingEventRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingEventRemarks">http://rs.tdwg.org/dwc/terms/SamplingEventRemarks</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingLocation"></a>Term Name  dwc:SamplingLocation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingLocation">http://rs.tdwg.org/dwc/terms/SamplingLocation</a></td>
		</tr>
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
			<td>Type</td>
			<td>Class</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingLocationID"></a>Term Name  dwc:SamplingLocationID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingLocationID">http://rs.tdwg.org/dwc/terms/SamplingLocationID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_SamplingLocationRemarks"></a>Term Name  dwc:SamplingLocationRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/SamplingLocationRemarks">http://rs.tdwg.org/dwc/terms/SamplingLocationRemarks</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_samplingProtocol"></a>Term Name  dwciri:samplingProtocol</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/samplingProtocol">http://rs.tdwg.org/dwc/iri/samplingProtocol</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/samplingProtocol-2015-03-27">http://rs.tdwg.org/dwc/iri/version/samplingProtocol-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Protocol (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The method or protocol used during an Event.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_samplingProtocol"></a>Term Name  dwc:samplingProtocol</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/samplingProtocol">http://rs.tdwg.org/dwc/terms/samplingProtocol</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/samplingProtocol-2017-10-06">http://rs.tdwg.org/dwc/terms/version/samplingProtocol-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sampling Protocol</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of, reference to, or description of the method or protocol used during an Event.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`UV light trap`, `mist net`, `bottom trawl`, `ad hoc observation`, `point count`, `Penguins from space: faecal stains reveal the location of emperor penguin colonies, <a href="https://doi.org/10.1111/j.1466-8238.2009.00467.x`">https://doi.org/10.1111/j.1466-8238.2009.00467.x`</a>, `Takats et al. 2001. Guidelines for Nocturnal Owl Monitoring in North America. Beaverhill Bird Observatory and Bird Studies Canada, Edmonton, Alberta. 32 pp.`, `<a href="http://www.bsc-eoc.org/download/Owl.pdf`">http://www.bsc-eoc.org/download/Owl.pdf`</a></td>
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
			<th colspan="2"><a id="dwc_scientificName"></a>Term Name  dwc:scientificName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/scientificName">http://rs.tdwg.org/dwc/terms/scientificName</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/scientificName-2017-10-06">http://rs.tdwg.org/dwc/terms/version/scientificName-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Scientific Name</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name, with authorship and date information if known. When forming part of an Identification, this should be the name in lowest level taxonomic rank that can be determined. This term should not contain identification qualifications, which should instead be supplied in the IdentificationQualifier term.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Coleoptera` (order). `Vespertilionidae` (family). `Manis` (genus). `Ctenomys sociabilis` (genus + specificEpithet). `Ambystoma tigrinum diaboli` (genus + specificEpithet + infraspecificEpithet). `Roptrocerus typographi (Györfi, 1952)` (genus + specificEpithet + scientificNameAuthorship), `Quercus agrifolia var. oxyadenia (Torr.) J.T. Howell` (genus + specificEpithet + taxonRank + infraspecificEpithet + scientificNameAuthorship).</td>
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
			<th colspan="2"><a id="dwc_scientificNameAuthorship"></a>Term Name  dwc:scientificNameAuthorship</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/scientificNameAuthorship">http://rs.tdwg.org/dwc/terms/scientificNameAuthorship</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/scientificNameAuthorship-2017-10-06">http://rs.tdwg.org/dwc/terms/version/scientificNameAuthorship-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Scientific Name Authorship</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The authorship information for the scientificName formatted according to the conventions of the applicable nomenclaturalCode.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`(Torr.) J.T. Howell`, `(Martinovský) Tzvelev`, `(Györfi, 1952)`</td>
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
			<th colspan="2"><a id="dwc_scientificNameID"></a>Term Name  dwc:scientificNameID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/scientificNameID">http://rs.tdwg.org/dwc/terms/scientificNameID</a></td>
		</tr>
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
			<td>`urn:lsid:ipni.org:names:37829-1:1.3`</td>
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
			<th colspan="2"><a id="dwc_scientificNameRank"></a>Term Name  dwc:scientificNameRank</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/scientificNameRank">http://rs.tdwg.org/dwc/terms/scientificNameRank</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwciri_sex"></a>Term Name  dwciri:sex</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/sex">http://rs.tdwg.org/dwc/iri/sex</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/sex-2015-03-27">http://rs.tdwg.org/dwc/iri/version/sex-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sex (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The sex of the biological individual(s) represented in the Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_sex"></a>Term Name  dwc:sex</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/sex">http://rs.tdwg.org/dwc/terms/sex</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/sex-2017-10-06">http://rs.tdwg.org/dwc/terms/version/sex-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Sex</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The sex of the biological individual(s) represented in the Occurrence.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`female`, `male`, `hermaphrodite`</td>
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
			<th colspan="2"><a id="dwc_specificEpithet"></a>Term Name  dwc:specificEpithet</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/specificEpithet">http://rs.tdwg.org/dwc/terms/specificEpithet</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/specificEpithet-2017-10-06">http://rs.tdwg.org/dwc/terms/version/specificEpithet-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Specific Epithet</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the first or species epithet of the scientificName.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`concolor`, `gottschei`</td>
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
			<th colspan="2"><a id="dwc_startDayOfYear"></a>Term Name  dwc:startDayOfYear</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/startDayOfYear">http://rs.tdwg.org/dwc/terms/startDayOfYear</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/startDayOfYear-2017-10-06">http://rs.tdwg.org/dwc/terms/version/startDayOfYear-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Start Day Of Year</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The earliest ordinal day of the year on which the Event occurred (1 for January 1, 365 for December 31, except in a leap year, in which case it is 366).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`1` (1 January). `366` (31 December), `365` (30 December in a leap year, 31 December in a non-leap year).</td>
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
			<th colspan="2"><a id="dwc_StartTimeOfDay"></a>Term Name  dwc:StartTimeOfDay</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/StartTimeOfDay">http://rs.tdwg.org/dwc/terms/StartTimeOfDay</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_stateProvince"></a>Term Name  dwc:stateProvince</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/stateProvince">http://rs.tdwg.org/dwc/terms/stateProvince</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/stateProvince-2017-10-06">http://rs.tdwg.org/dwc/terms/version/stateProvince-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>State Province</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Montana`, `Minas Gerais`, `Córdoba`</td>
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
			<th colspan="2"><a id="dwc_subgenus"></a>Term Name  dwc:subgenus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/subgenus">http://rs.tdwg.org/dwc/terms/subgenus</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/subgenus-2017-10-06">http://rs.tdwg.org/dwc/terms/version/subgenus-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Subgenus</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The full scientific name of the subgenus in which the taxon is classified. Values should include the genus to avoid homonym confusion.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Strobus`, `Amerigo`, `Pilosella`</td>
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
			<th colspan="2"><a id="dwc_Taxon"></a>Term Name  dwc:Taxon</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/Taxon">http://rs.tdwg.org/dwc/terms/Taxon</a></td>
		</tr>
			<td>Modified</td>
			<td>2018-09-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/Taxon-2018-09-06">http://rs.tdwg.org/dwc/terms/version/Taxon-2018-09-06</a></td>
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
			<td>The genus Truncorotaloides as published by Brönnimann et al. in 1953 in the Journal of Paleontology Vol. 27(6) p. 817-820.</td>
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
			<th colspan="2"><a id="dwc_taxonAccordingTo"></a>Term Name  dwc:taxonAccordingTo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonAccordingTo">http://rs.tdwg.org/dwc/terms/taxonAccordingTo</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonAttributes"></a>Term Name  dwc:taxonAttributes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonAttributes">http://rs.tdwg.org/dwc/terms/taxonAttributes</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonConceptID"></a>Term Name  dwc:taxonConceptID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonConceptID">http://rs.tdwg.org/dwc/terms/taxonConceptID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonConceptID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/taxonConceptID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Concept ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the taxonomic concept to which the record refers - not for the nomenclatural details of a taxon.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`8fa58e08-08de-4ac1-b69c-1235340b7001`</td>
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
			<th colspan="2"><a id="dwc_TaxonID"></a>Term Name  dwc:TaxonID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/TaxonID">http://rs.tdwg.org/dwc/terms/TaxonID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonID"></a>Term Name  dwc:taxonID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonID">http://rs.tdwg.org/dwc/terms/taxonID</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonID-2017-10-06">http://rs.tdwg.org/dwc/terms/version/taxonID-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon ID</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>An identifier for the set of taxon information (data associated with the Taxon class). May be a global unique identifier or an identifier specific to the data set.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`8fa58e08-08de-4ac1-b69c-1235340b7001`, `32567`, `<a href="https://www.gbif.org/species/212`">https://www.gbif.org/species/212`</a></td>
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
			<th colspan="2"><a id="dwc_taxonNameID"></a>Term Name  dwc:taxonNameID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonNameID">http://rs.tdwg.org/dwc/terms/taxonNameID</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_taxonomicStatus"></a>Term Name  dwc:taxonomicStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonomicStatus">http://rs.tdwg.org/dwc/terms/taxonomicStatus</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonomicStatus-2017-10-06">http://rs.tdwg.org/dwc/terms/version/taxonomicStatus-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxonomic Status</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The status of the use of the scientificName as a label for a taxon. Requires taxonomic opinion to define the scope of a taxon. Rules of priority then are used to define the taxonomic status of the nomenclature contained in that scope, combined with the experts opinion. It must be linked to a specific taxonomic reference that defines the concept.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`invalid`, `misapplied`, `homotypic synonym`, `accepted`</td>
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
			<th colspan="2"><a id="dwc_taxonRank"></a>Term Name  dwc:taxonRank</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonRank">http://rs.tdwg.org/dwc/terms/taxonRank</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/taxonRank-2017-10-06">http://rs.tdwg.org/dwc/terms/version/taxonRank-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Taxon Rank</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The taxonomic rank of the most specific name in the scientificName.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`subspecies`, `varietas`, `forma`, `species`, `genus`</td>
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
			<th colspan="2"><a id="dwc_taxonRemarks"></a>Term Name  dwc:taxonRemarks</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/taxonRemarks">http://rs.tdwg.org/dwc/terms/taxonRemarks</a></td>
		</tr>
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
			<td>`this name is a misspelling in common use`</td>
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
			<th colspan="2"><a id="dwciri_toTaxon"></a>Term Name  dwciri:toTaxon</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/toTaxon">http://rs.tdwg.org/dwc/iri/toTaxon</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dcterms_type"></a>Term Name  dcterms:type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/terms/type">http://purl.org/dc/terms/type</a></td>
		</tr>
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
			<th colspan="2"><a id="dc_type"></a>Term Name  dc:type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://purl.org/dc/elements/1.1/type">http://purl.org/dc/elements/1.1/type</a></td>
		</tr>
			<td>Modified</td>
			<td>2008-01-14</td>
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
			<td>`StillImage`, `MovingImage`, `Sound`, `PhysicalObject`, `Event`, `Text`</td>
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
			<th colspan="2"><a id="dwciri_typeStatus"></a>Term Name  dwciri:typeStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/typeStatus">http://rs.tdwg.org/dwc/iri/typeStatus</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_typeStatus"></a>Term Name  dwc:typeStatus</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/typeStatus">http://rs.tdwg.org/dwc/terms/typeStatus</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/typeStatus-2017-10-06">http://rs.tdwg.org/dwc/terms/version/typeStatus-2017-10-06</a></td>
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
			<td>Recommended best practice is to separate the values in a list with space vertical bar space (` | `).</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`holotype of Ctenomys sociabilis. Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388`, `holotype of Pinus abies | holotype of Picea abies`</td>
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
			<th colspan="2"><a id="dwc_verbatimCoordinates"></a>Term Name  dwc:verbatimCoordinates</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimCoordinates">http://rs.tdwg.org/dwc/terms/verbatimCoordinates</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimCoordinates-2017-10-06">http://rs.tdwg.org/dwc/terms/version/verbatimCoordinates-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Coordinates</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The verbatim original spatial coordinates of the Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in verbatimSRS and the coordinate system should be stored in verbatimCoordinateSystem.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`41 05 54S 121 05 34W`, `17T 630000 4833400`</td>
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
			<th colspan="2"><a id="dwc_verbatimCoordinateSystem"></a>Term Name  dwc:verbatimCoordinateSystem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimCoordinateSystem">http://rs.tdwg.org/dwc/terms/verbatimCoordinateSystem</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimCoordinateSystem-2017-10-06">http://rs.tdwg.org/dwc/terms/version/verbatimCoordinateSystem-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Coordinate System</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The spatial coordinate system for the verbatimLatitude and verbatimLongitude or the verbatimCoordinates of the Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`decimal degrees`, `degrees decimal minutes`, `degrees minutes seconds`, `UTM`</td>
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
			<th colspan="2"><a id="dwciri_verbatimCoordinateSystem"></a>Term Name  dwciri:verbatimCoordinateSystem</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/verbatimCoordinateSystem">http://rs.tdwg.org/dwc/iri/verbatimCoordinateSystem</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/verbatimCoordinateSystem-2015-03-27">http://rs.tdwg.org/dwc/iri/version/verbatimCoordinateSystem-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Coordinate System (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The spatial coordinate system for the verbatimLatitude and verbatimLongitude or the verbatimCoordinates of the Location.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary. Terms in the dwciri namespace are intended to be used in RDF with non-literal objects.</td>
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
			<th colspan="2"><a id="dwc_verbatimDepth"></a>Term Name  dwc:verbatimDepth</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimDepth">http://rs.tdwg.org/dwc/terms/verbatimDepth</a></td>
		</tr>
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
			<td>`100-200 m`</td>
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
			<th colspan="2"><a id="dwc_verbatimElevation"></a>Term Name  dwc:verbatimElevation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimElevation">http://rs.tdwg.org/dwc/terms/verbatimElevation</a></td>
		</tr>
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
			<td>`100-200 m`</td>
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
			<th colspan="2"><a id="dwc_verbatimEventDate"></a>Term Name  dwc:verbatimEventDate</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimEventDate">http://rs.tdwg.org/dwc/terms/verbatimEventDate</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimEventDate-2017-10-06">http://rs.tdwg.org/dwc/terms/version/verbatimEventDate-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim EventDate</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The verbatim original representation of the date and time information for an Event.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`spring 1910`, `Marzo 2002`, `1999-03-XX`, `17IV1934`</td>
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
			<th colspan="2"><a id="dwc_verbatimLatitude"></a>Term Name  dwc:verbatimLatitude</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimLatitude">http://rs.tdwg.org/dwc/terms/verbatimLatitude</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimLatitude-2017-10-06">http://rs.tdwg.org/dwc/terms/version/verbatimLatitude-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Latitude</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The verbatim original latitude of the Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in verbatimSRS and the coordinate system should be stored in verbatimCoordinateSystem.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`41 05 54.03S`</td>
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
			<th colspan="2"><a id="dwc_verbatimLocality"></a>Term Name  dwc:verbatimLocality</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimLocality">http://rs.tdwg.org/dwc/terms/verbatimLocality</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimLocality-2017-10-06">http://rs.tdwg.org/dwc/terms/version/verbatimLocality-2017-10-06</a></td>
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
			<td>`25 km NNE Bariloche por R. Nac. 237`</td>
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
			<th colspan="2"><a id="dwc_verbatimLongitude"></a>Term Name  dwc:verbatimLongitude</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimLongitude">http://rs.tdwg.org/dwc/terms/verbatimLongitude</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimLongitude-2017-10-06">http://rs.tdwg.org/dwc/terms/version/verbatimLongitude-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Longitude</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The verbatim original longitude of the Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in verbatimSRS and the coordinate system should be stored in verbatimCoordinateSystem.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`121d 10' 34" W`</td>
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
			<th colspan="2"><a id="dwc_verbatimScientificNameRank"></a>Term Name  dwc:verbatimScientificNameRank</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimScientificNameRank">http://rs.tdwg.org/dwc/terms/verbatimScientificNameRank</a></td>
		</tr>
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
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>

<table>
	<thead>
		<tr>
			<th colspan="2"><a id="dwc_verbatimSRS"></a>Term Name  dwc:verbatimSRS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimSRS">http://rs.tdwg.org/dwc/terms/verbatimSRS</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimSRS-2017-10-06">http://rs.tdwg.org/dwc/terms/version/verbatimSRS-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim SRS</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which coordinates given in verbatimLatitude and verbatimLongitude, or verbatimCoordinates are based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value `unknown`.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`unknown`, `EPSG:4326`, `WGS84`, `NAD27`, `Campo Inchauspe`, `European 1950`, `Clarke 1866`</td>
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
			<th colspan="2"><a id="dwciri_verbatimSRS"></a>Term Name  dwciri:verbatimSRS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/verbatimSRS">http://rs.tdwg.org/dwc/iri/verbatimSRS</a></td>
		</tr>
			<td>Modified</td>
			<td>2015-03-27</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/iri/version/verbatimSRS-2015-03-27">http://rs.tdwg.org/dwc/iri/version/verbatimSRS-2015-03-27</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim SRS (IRI)</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which coordinates given in verbatimLatitude and verbatimLongitude, or verbatimCoordinates are based.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use an IRI for the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary IRI for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary IRI for the name or code of the ellipsoid, if known.</td>
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
			<th colspan="2"><a id="dwc_verbatimTaxonRank"></a>Term Name  dwc:verbatimTaxonRank</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/verbatimTaxonRank">http://rs.tdwg.org/dwc/terms/verbatimTaxonRank</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/verbatimTaxonRank-2017-10-06">http://rs.tdwg.org/dwc/terms/version/verbatimTaxonRank-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Verbatim Taxon Rank</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The taxonomic rank of the most specific name in the scientificName as it appears in the original record.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Agamospecies`, `sub-lesus`, `prole`, `apomict`, `nothogrex`, `sp.`, `subsp.`, `var.`</td>
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
			<th colspan="2"><a id="dwc_vernacularName"></a>Term Name  dwc:vernacularName</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/vernacularName">http://rs.tdwg.org/dwc/terms/vernacularName</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/vernacularName-2017-10-06">http://rs.tdwg.org/dwc/terms/version/vernacularName-2017-10-06</a></td>
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
			<td>`Andean Condor`, `Condor Andino`, `American Eagle`, `Gänsegeier`</td>
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
			<th colspan="2"><a id="dwc_waterBody"></a>Term Name  dwc:waterBody</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/waterBody">http://rs.tdwg.org/dwc/terms/waterBody</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/waterBody-2017-10-06">http://rs.tdwg.org/dwc/terms/version/waterBody-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Water Body</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The name of the water body in which the Location occurs.</td>
		</tr>
		<tr>
			<td>Notes</td>
			<td>Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`Indian Ocean`, `Baltic Sea`, `Hudson River`, `Lago Nahuel Huapi`</td>
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
			<th colspan="2"><a id="dwc_year"></a>Term Name  dwc:year</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Term IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/year">http://rs.tdwg.org/dwc/terms/year</a></td>
		</tr>
			<td>Modified</td>
			<td>2017-10-06</td>
		</tr>
		<tr>
			<td>Term version IRI</td>
			<td><a href="http://rs.tdwg.org/dwc/terms/version/year-2017-10-06">http://rs.tdwg.org/dwc/terms/version/year-2017-10-06</a></td>
		</tr>
		<tr>
			<td>Label</td>
			<td>Year</td>
		</tr>
		<tr>
			<td>Definition</td>
			<td>The four-digit year in which the Event occurred, according to the Common Era Calendar.</td>
		</tr>
		<tr>
			<td>Examples</td>
			<td>`1160`, `2008`</td>
		</tr>
		<tr>
			<td>Type</td>
			<td>Property</td>
		</tr>
	</tbody>
</table>


