#
# Author: John Wieczorek
# 
# Build script for XML-based extension files for use with the Integrated Publishing
# Toolkit (IPT). XML files produced from this script need to go into the appropriate
# directories in https://github.com/gbif/rs.gbif.org/tree/master/core or
# https://github.com/gbif/rs.gbif.org/tree/master/extension/dwc with file names reflecting 
# version dates (e.g., dwc_taxon_2023-07-07.xml).
# Extensions are defined first in the CSVtoXMLConverter class' __init__ member function
# by populating the dictionary extensions_configuration.
# One extension can be generated per run of the script, with the extension's name and
# destination file as parameters (see main() for syntax).
#
__version__ = '2023-07-07T22:22-03:00'

import csv
import sys
import argparse

class CSVtoXMLConverter:
    '''
    Class to manage the configurations for Darwin Core extension definitions and build
    XML output from the term history document (../vocabulary/term_versions.csv).
    '''
    def __init__(self, csv_file_path):
        self.csv_file_path = csv_file_path
        self.root_element = None
        self.row_element = None
        self.extensions_configuration = {
            "Occurrence": {
                "title":"Darwin Core Occurrence",
                "namespace":"http://rs.tdwg.org/dwc/terms/",
                "rowType":"http://rs.tdwg.org/dwc/terms/Occurrence",
                "dc:issued":"2023-07-07",
                "dc:relation":"http://rs.tdwg.org/dwc/terms/index.htm#Occurrence",
                "dc:description":"An existence of a dwc:Organism at a particular place at a particular time.",
                "included_terms":[
                    "type",
                    "modified",
                    "language",
                    "license",
                    "rightsHolder",
                    "accessRights",
                    "bibliographicCitation",
                    "references",
                    "institutionID",
                    "collectionID",
                    "datasetID",
                    "institutionCode",
                    "collectionCode",
                    "datasetName",
                    "ownerInstitutionCode",
                    "basisOfRecord",
                    "informationWithheld",
                    "dataGeneralizations",
                    "dynamicProperties",
                    "occurrenceID",
                    "catalogNumber",
                    "recordNumber",
                    "recordedBy",
                    "recordedByID",
                    "individualCount",
                    "organismQuantity",
                    "organismQuantityType",
                    "sex",
                    "lifeStage",
                    "reproductiveCondition",
                    "caste",
                    "behavior",
                    "vitality",
                    "establishmentMeans",
                    "degreeOfEstablishment",
                    "pathway",
                    "georeferenceVerificationStatus",
                    "occurrenceStatus",
                    "preparations",
                    "disposition",
                    "associatedMedia",
                    "associatedOccurrences",
                    "associatedReferences",
                    "associatedSequences",
                    "associatedTaxa",
                    "otherCatalogNumbers",
                    "occurrenceRemarks",
                    "organismID",
                    "organismName",
                    "organismScope",
                    "associatedOrganisms",
                    "previousIdentifications",
                    "organismRemarks",
                    "materialSampleID",
                    "verbatimLabel",
                    "eventID",
                    "parentEventID",
                    "eventType",
                    "fieldNumber",
                    "eventDate",
                    "eventTime",
                    "startDayOfYear",
                    "endDayOfYear",
                    "year",
                    "month",
                    "day",
                    "verbatimEventDate",
                    "habitat",
                    "samplingProtocol",
                    "sampleSizeValue",
                    "sampleSizeUnit",
                    "samplingEffort",
                    "fieldNotes",
                    "eventRemarks",
                    "locationID",
                    "higherGeographyID",
                    "higherGeography",
                    "continent",
                    "waterBody",
                    "islandGroup",
                    "island",
                    "country",
                    "countryCode",
                    "stateProvince",
                    "county",
                    "municipality",
                    "locality",
                    "verbatimLocality",
                    "minimumElevationInMeters",
                    "maximumElevationInMeters",
                    "verbatimElevation",
                    "verticalDatum",
                    "minimumDepthInMeters",
                    "maximumDepthInMeters",
                    "verbatimDepth",
                    "minimumDistanceAboveSurfaceInMeters",
                    "maximumDistanceAboveSurfaceInMeters",
                    "locationAccordingTo",
                    "locationRemarks",
                    "decimalLatitude",
                    "decimalLongitude",
                    "geodeticDatum",
                    "coordinateUncertaintyInMeters",
                    "coordinatePrecision",
                    "pointRadiusSpatialFit",
                    "verbatimCoordinates",
                    "verbatimLatitude",
                    "verbatimLongitude",
                    "verbatimCoordinateSystem",
                    "verbatimSRS",
                    "footprintWKT",
                    "footprintSRS",
                    "footprintSpatialFit",
                    "georeferencedBy",
                    "georeferencedDate",
                    "georeferenceProtocol",
                    "georeferenceSources",
                    "georeferenceRemarks",
                    "geologicalContextID",
                    "earliestEonOrLowestEonothem",
                    "latestEonOrHighestEonothem",
                    "earliestEraOrLowestErathem",
                    "latestEraOrHighestErathem",
                    "earliestPeriodOrLowestSystem",
                    "latestPeriodOrHighestSystem",
                    "earliestEpochOrLowestSeries",
                    "latestEpochOrHighestSeries",
                    "earliestAgeOrLowestStage",
                    "latestAgeOrHighestStage",
                    "lowestBiostratigraphicZone",
                    "highestBiostratigraphicZone",
                    "lithostratigraphicTerms",
                    "group",
                    "formation",
                    "member",
                    "bed",
                    "identificationID",
                    "verbatimIdentification",
                    "identificationQualifier",
                    "typeStatus",
                    "identifiedBy",
                    "identifiedByID",
                    "dateIdentified",
                    "identificationReferences",
                    "identificationVerificationStatus",
                    "identificationRemarks",
                    "taxonID",
                    "scientificNameID",
                    "acceptedNameUsageID",
                    "parentNameUsageID",
                    "originalNameUsageID",
                    "nameAccordingToID",
                    "namePublishedInID",
                    "taxonConceptID",
                    "scientificName",
                    "acceptedNameUsage",
                    "parentNameUsage",
                    "originalNameUsage",
                    "nameAccordingTo",
                    "namePublishedIn",
                    "namePublishedInYear",
                    "higherClassification",
                    "kingdom",
                    "phylum",
                    "class",
                    "order",
                    "superfamily",
                    "family",
                    "subfamily",
                    "tribe",
                    "subtribe",
                    "genus",
                    "genericName",
                    "subgenus",
                    "infragenericEpithet",
                    "specificEpithet",
                    "infraspecificEpithet",
                    "cultivarEpithet",
                    "taxonRank",
                    "verbatimTaxonRank",
                    "scientificNameAuthorship",
                    "vernacularName",
                    "nomenclaturalCode",
                    "taxonomicStatus",
                    "nomenclaturalStatus",
                    "taxonRemarks"
                ],
                "required":["basisOfRecord"],
                "thesauri":{
                    "type":"http://rs.gbif.org/vocabulary/dcterms/type.xml",
                    "basisOfRecord":"http://rs.gbif.org/vocabulary/dwc/basis_of_record_2022-02-02.xml",
                    "organismQuantityType":"http://rs.gbif.org/vocabulary/gbif/quantity_type_2015-07-10.xml",
                    "establishmentMeans":"http://rs.gbif.org/vocabulary/dwc/establishment_means_2022-02-02.xml",
                    "degreeOfEstablishment":"http://rs.gbif.org/vocabulary/dwc/degree_of_establishment_2022-02-02.xml",
                    "pathway":"http://rs.gbif.org/vocabulary/dwc/pathway_2022-02-02.xml",
                    "occurrenceStatus":"http://rs.gbif.org/vocabulary/gbif/occurrence_status_2020-07-15.xml",
                    "sampleSizeUnit":"http://rs.gbif.org/vocabulary/gbif/unit_of_measurement_2015-07-10.xml",
                    "taxonRank":"http://rs.gbif.org/vocabulary/gbif/rank_2015-04-24.xml",
                    "nomenclaturalCode":"http://rs.gbif.org/vocabulary/gbif/nomenclatural_code.xml"
                },
                "gbif_additions":[
#                        "<property group='Record Level' name='source' type='uri' namespace='http://purl.org/dc/terms/' qualName='http://purl.org/dc/terms/source' dc:relation='' dc:description='Deprecated in favor over new dcterm:references! A URI link or reference to the source of this record. A link to a webpage or RESTful webservice is recommended.  URI is mandatory format.' examples='http://www.catalogueoflife.org/annual-checklist/show_species_details.php?record_id=6197868' required='false'/>"
                ]
            },
            "Event": {
                "title":"Darwin Core Event",
                "namespace":"http://rs.tdwg.org/dwc/terms/",
                "rowType":"http://rs.tdwg.org/dwc/terms/Event",
                "dc:issued":"2023-07-07",
                "dc:relation":"http://rs.tdwg.org/dwc/terms/index.htm#Event",
                "dc:description":"An action that occurs at some location during some time.",
                "included_terms":[
                    "type",
                    "modified",
                    "language",
                    "license",
                    "rightsHolder",
                    "accessRights",
                    "bibliographicCitation",
                    "references",
                    "institutionID",
                    "datasetID",
                    "institutionCode",
                    "datasetName",
                    "ownerInstitutionCode",
                    "informationWithheld",
                    "dataGeneralizations",
                    "dynamicProperties",
                    "eventID",
                    "parentEventID",
                    "eventType",
                    "fieldNumber",
                    "eventDate",
                    "eventTime",
                    "startDayOfYear",
                    "endDayOfYear",
                    "year",
                    "month",
                    "day",
                    "verbatimEventDate",
                    "habitat",
                    "samplingProtocol",
                    "sampleSizeValue",
                    "sampleSizeUnit",
                    "samplingEffort",
                    "fieldNotes",
                    "eventRemarks",
                    "locationID",
                    "higherGeographyID",
                    "higherGeography",
                    "continent",
                    "waterBody",
                    "islandGroup",
                    "island",
                    "country",
                    "countryCode",
                    "stateProvince",
                    "county",
                    "municipality",
                    "locality",
                    "verbatimLocality",
                    "minimumElevationInMeters",
                    "maximumElevationInMeters",
                    "verbatimElevation",
                    "verticalDatum",
                    "minimumDepthInMeters",
                    "maximumDepthInMeters",
                    "verbatimDepth",
                    "minimumDistanceAboveSurfaceInMeters",
                    "maximumDistanceAboveSurfaceInMeters",
                    "locationAccordingTo",
                    "locationRemarks",
                    "decimalLatitude",
                    "decimalLongitude",
                    "geodeticDatum",
                    "coordinateUncertaintyInMeters",
                    "coordinatePrecision",
                    "pointRadiusSpatialFit",
                    "verbatimCoordinates",
                    "verbatimLatitude",
                    "verbatimLongitude",
                    "verbatimCoordinateSystem",
                    "verbatimSRS",
                    "footprintWKT",
                    "footprintSRS",
                    "footprintSpatialFit",
                    "georeferencedBy",
                    "georeferencedDate",
                    "georeferenceProtocol",
                    "georeferenceSources",
                    "georeferenceRemarks",
                    "geologicalContextID",
                    "earliestEonOrLowestEonothem",
                    "latestEonOrHighestEonothem",
                    "earliestEraOrLowestErathem",
                    "latestEraOrHighestErathem",
                    "earliestPeriodOrLowestSystem",
                    "latestPeriodOrHighestSystem",
                    "earliestEpochOrLowestSeries",
                    "latestEpochOrHighestSeries",
                    "earliestAgeOrLowestStage",
                    "latestAgeOrHighestStage",
                    "lowestBiostratigraphicZone",
                    "highestBiostratigraphicZone",
                    "lithostratigraphicTerms",
                    "group",
                    "formation",
                    "member",
                    "bed"
                ],
                "required":[],
                "thesauri":{
                    "type":"http://rs.gbif.org/vocabulary/dcterms/type.xml",
                    "sampleSizeUnit":"http://rs.gbif.org/vocabulary/gbif/unit_of_measurement_2015-07-10.xml"
                },
                "gbif_additions":[
#                        "<property group='Record Level' name='source' type='uri' namespace='http://purl.org/dc/terms/' qualName='http://purl.org/dc/terms/source' dc:relation='' dc:description='Deprecated in favor over new dcterm:references! A URI link or reference to the source of this record. A link to a webpage or RESTful webservice is recommended.  URI is mandatory format.' examples='http://www.catalogueoflife.org/annual-checklist/show_species_details.php?record_id=6197868' required='false'/>"
                ]
            },
            "Taxon": {
                "title":"Darwin Core Taxon",
                "namespace":"http://rs.tdwg.org/dwc/terms/",
                "rowType":"http://rs.tdwg.org/dwc/terms/Taxon",
                "dc:issued":"2023-07-07",
                "dc:relation":"http://rs.tdwg.org/dwc/terms/index.htm#Taxon",
                "dc:description":"A group of organisms (sensu http://purl.obolibrary.org/obo/OBI_0100026) considered by taxonomists to form a homogeneous unit.",
                "included_terms":[
                    "taxonID",
                    "scientificNameID",
                    "acceptedNameUsageID",
                    "parentNameUsageID",
                    "originalNameUsageID",
                    "nameAccordingToID",
                    "namePublishedInID",
                    "taxonConceptID",
                    "scientificName",
                    "acceptedNameUsage",
                    "parentNameUsage",
                    "originalNameUsage",
                    "nameAccordingTo",
                    "namePublishedIn",
                    "namePublishedInYear",
                    "higherClassification",
                    "kingdom",
                    "phylum",
                    "class",
                    "order",
                    "superfamily",
                    "family",
                    "subfamily",
                    "tribe",
                    "subtribe",
                    "genus",
                    "genericName",
                    "subgenus",
                    "infragenericEpithet",
                    "specificEpithet",
                    "infraspecificEpithet",
                    "cultivarEpithet",
                    "taxonRank",
                    "verbatimTaxonRank",
                    "scientificNameAuthorship",
                    "vernacularName",
                    "nomenclaturalCode",
                    "taxonomicStatus",
                    "nomenclaturalStatus",
                    "taxonRemarks",
                    "modified",
                    "language",
                    "license",
                    "rightsHolder",
                    "accessRights",
                    "bibliographicCitation",
                    "references",
                    "institutionCode",
                    "institutionID",
                    "datasetID",
                    "datasetName",
                    "informationWithheld"
                ],
                "required":[],
                "thesauri":{
                    "taxonRank":"http://rs.gbif.org/vocabulary/gbif/rank_2015-04-24.xml",
                    "nomenclaturalCode":"http://rs.gbif.org/vocabulary/gbif/nomenclatural_code.xml"
                },
                "gbif_additions":[
#                        "<property group='Record Level' name='source' type='uri' namespace='http://purl.org/dc/terms/' qualName='http://purl.org/dc/terms/source' dc:relation='' dc:description='Deprecated in favor over new dcterm:references! A URI link or reference to the source of this record. A link to a webpage or RESTful webservice is recommended.  URI is mandatory format.' examples='http://www.catalogueoflife.org/annual-checklist/show_species_details.php?record_id=6197868' required='false'/>"
                ]
            },
            "Identification": {
                "title":"Darwin Core Identification History",
                "namespace":"http://rs.tdwg.org/dwc/terms/",
                "rowType":"http://rs.tdwg.org/dwc/terms/Identification",
                "dc:issued":"2023-07-07",
                "dc:subject":"dwc:Occurrence",
                "dc:relation":"http://rs.tdwg.org/dwc/terms/index.htm#Identification",
                "dc:description":"Support for multiple identifications (determinations) of dwc:Occurrences. All identifications including the most current one should be listed, while the current one should also be repeated in the Occurrence Core.",
                "included_terms":[
                    "identificationID",
                    "verbatimIdentification",
                    "identificationQualifier",
                    "typeStatus",
                    "identifiedBy",
                    "identifiedByID",
                    "dateIdentified",
                    "identificationReferences",
                    "identificationVerificationStatus",
                    "identificationRemarks",
                    "taxonID",
                    "scientificNameID",
                    "acceptedNameUsageID",
                    "parentNameUsageID",
                    "originalNameUsageID",
                    "nameAccordingToID",
                    "namePublishedInID",
                    "taxonConceptID",
                    "scientificName",
                    "acceptedNameUsage",
                    "parentNameUsage",
                    "originalNameUsage",
                    "nameAccordingTo",
                    "namePublishedIn",
                    "namePublishedInYear",
                    "higherClassification",
                    "kingdom",
                    "phylum",
                    "class",
                    "order",
                    "superfamily",
                    "family",
                    "subfamily",
                    "tribe",
                    "subtribe",
                    "genus",
                    "genericName",
                    "subgenus",
                    "infragenericEpithet",
                    "specificEpithet",
                    "infraspecificEpithet",
                    "cultivarEpithet",
                    "taxonRank",
                    "verbatimTaxonRank",
                    "scientificNameAuthorship",
                    "vernacularName",
                    "nomenclaturalCode",
                    "taxonomicStatus",
                    "nomenclaturalStatus",
                    "taxonRemarks"
                ],
                "required":[],
                "thesauri":{
                    "taxonRank":"http://rs.gbif.org/vocabulary/gbif/rank_2015-04-24.xml",
                    "nomenclaturalCode":"http://rs.gbif.org/vocabulary/gbif/nomenclatural_code.xml"
                },
                "gbif_additions":[
#                        "<property group='Record Level' name='source' type='uri' namespace='http://purl.org/dc/terms/' qualName='http://purl.org/dc/terms/source' dc:relation='' dc:description='Deprecated in favor over new dcterm:references! A URI link or reference to the source of this record. A link to a webpage or RESTful webservice is recommended.  URI is mandatory format.' examples='http://www.catalogueoflife.org/annual-checklist/show_species_details.php?record_id=6197868' required='false'/>"
                ]
            },
            "MeasurementOrFacts": {
                "title":"Darwin Core Measurement or Facts",
                "namespace":"http://rs.tdwg.org/dwc/terms/",
                "rowType":"http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
                "dc:issued":"2023-07-07",
                "dc:subject":"dwc:Occurrence dwc:Event dwc:Taxon",
                "dc:relation":"http://rs.tdwg.org/dwc/terms/index.htm#MeasurementOrFact",
                "dc:description":"Support for multiple Darwin Core MeasurementOrFacts per core record. Allows links to any core.",
                "included_terms":[
                    "measurementID",
                    "parentMeasurementID",
                    "measurementType",
                    "measurementValue",
                    "measurementAccuracy",
                    "measurementUnit",
                    "measurementDeterminedBy",
                    "measurementDeterminedDate",
                    "measurementMethod",
                    "measurementRemarks"
                ],
                "required":["measurementType"],
                "thesauri":{
                },
                "gbif_additions":[
#                        "<property group='Record Level' name='source' type='uri' namespace='http://purl.org/dc/terms/' qualName='http://purl.org/dc/terms/source' dc:relation='' dc:description='Deprecated in favor over new dcterm:references! A URI link or reference to the source of this record. A link to a webpage or RESTful webservice is recommended.  URI is mandatory format.' examples='http://www.catalogueoflife.org/annual-checklist/show_species_details.php?record_id=6197868' required='false'/>"
                ]
            },
            "ResourceRelationships": {
                "title":"Darwin Core Resource Relationships",
                "namespace":"http://rs.tdwg.org/dwc/terms/",
                "rowType":"http://rs.tdwg.org/dwc/terms/ResourceRelationship",
                "dc:issued":"2023-07-07",
                "dc:subject":"dwc:Occurrence dwc:Event dwc:Taxon",
                "dc:relation":"http://rs.tdwg.org/dwc/terms/index.htm#ResourceRelationship",
                "dc:description":"Support for multiple Darwin Core ResourceRelationships between records in the Core, in an extension, or resources external to the data set. The identifiers for subject (resourceID) and object (relatedResourceID) may exist in the dataset or be accessible via an externally resolvable identifier.",
                "included_terms":[
                    "resourceRelationshipID",
                    "resourceID",
                    "relationshipOfResourceID",
                    "relatedResourceID",
                    "relationshipOfResource",
                    "relationshipAccordingTo",
                    "relationshipEstablishedDate",
                    "relationshipRemarks"
                ],
                "required":[
                    "resourceID",
                    "relatedResourceID",
                    "relationshipOfResource"
                ],
                "thesauri":{
                },
                "gbif_additions":[
#                        "<property group='Record Level' name='source' type='uri' namespace='http://purl.org/dc/terms/' qualName='http://purl.org/dc/terms/source' dc:relation='' dc:description='Deprecated in favor over new dcterm:references! A URI link or reference to the source of this record. A link to a webpage or RESTful webservice is recommended.  URI is mandatory format.' examples='http://www.catalogueoflife.org/annual-checklist/show_species_details.php?record_id=6197868' required='false'/>"
                ]
            }
        }

    def get_xml(self, extension_name):
        '''
        Use extension_name to read the XML configuration and build the XML.
        '''
        extension = self.extensions_configuration.get(extension_name)
        if extension is None:
            print(f'Extension {extension_name} not found in extensions configuration.')
            return
        xml =  '<?xml version="1.0" encoding="UTF-8"?>\n'
        xml += '<?xml-stylesheet type="text/xsl" href="/style/human.xsl"?>\n'
        xml += '<extension xmlns="http://rs.gbif.org/extension/"\n'
        xml += '    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n'
        xml += '    xmlns:dc="http://purl.org/dc/terms/"\n'
        xml += '    xsi:schemaLocation="http://rs.gbif.org/extension/ http://rs.gbif.org/schema/extension.xsd"\n'
        xml += f'    dc:title="{extension.get("title")}"\n'
        xml += f'    name="{extension_name}" namespace="{extension.get("namespace")}" rowType="{extension.get("rowType")}"\n'
        xml += f'    dc:issued="{extension.get("dc:issued")}"\n'
        subject = extension.get("dc:subject")
        if subject is not None:
            xml += f'    dc:subject="{extension.get("dc:subject")}"\n'
        xml += f'    dc:relation="{extension.get("dc:relation")}"\n'
        xml += f'    dc:description="{extension.get("dc:description")}">\n'
        xml += '\n'
        with open(self.csv_file_path, 'r') as csv_file:
            reader = csv.reader(csv_file)
            header = next(reader)
            for row in reader:
                row_dict = dict(zip(header, row))
                if row_dict["status"] != "recommended":
                    break
                if row_dict['rdf_type'] == "http://www.w3.org/2000/01/rdf-schema#Class":
                    continue
                if row_dict["term_localName"] not in extension.get("included_terms"):
                    continue
                term_xml =  "<property "
                group = row_dict["organized_in"].rsplit("/", 1)[1]
                if group == "":
                    group="Record-level"
                term_xml += f'group="{group}" '
                term_xml += f'name="{row_dict["term_localName"]}" '
                namespace = row_dict["term_iri"].rsplit('/', 1)[0]
                term_xml += f'namespace="{namespace}/" '
                term_xml += f'qualName="{row_dict["term_iri"]}" '
                relation_base = "http://rs.tdwg.org/dwc/terms/index.htm#"
                if namespace == "http://purl.org/dc/elements/1.1/":
                    relation_base = "https://dwc.tdwg.org/terms/#dc:"
                elif namespace == "http://purl.org/dc/terms/":
                    relation_base = "https://dwc.tdwg.org/terms/#dcterms:"
                term_xml += f'dc:relation="{relation_base}{row_dict["term_localName"]}" '
                description = row_dict["definition"]
                if row_dict.get("comments") is not None and len(row_dict.get("comments"))>0:
                    description += f' {row_dict["comments"]}'
                term_xml += f'dc:description="{description}" '
                examples = row_dict.get("examples") or ""
                term_xml += f'examples="{examples}" '
                if row_dict["term_localName"] in extension.get("required"):
                    term_xml += f'required="true"/>'
                else:
                    term_xml += f'required="false"/>'
                    
                xml += f'    {term_xml}\n'
        for addition in extension.get("gbif_additions"):
            xml += f'    {addition}'
        xml += "</extension>"
        return xml

    def write_xml(self, extension_name, filename):
        '''
        Use extension_name to read the XML configuration, build the XML, and write the 
        result to the output file.
        '''
        with open(filename, 'w') as xml_file:
            xml_file.write(self.get_xml(extension_name))

def _getoptions():
  ''' Parse command line options and return them.'''
  parser = argparse.ArgumentParser()

  help = 'extension name (required)'
  parser.add_argument("-e", "--extension_name", required=True, help=help)

  help = 'output file name with full path (required)'
  parser.add_argument("-o", "--outputfile", required=True, help=help)

  return parser.parse_args()

def main():
    ''' Get the commend-line options for extension to build and output file for it.'''
    options = _getoptions()

    '''If the required parameters are not given provide a script syntax message and exit.'''
    if options.extension_name is None or len(options.extension_name)==0 \
        or options.outputfile is None or len(options.outputfile)==0:
      s =  'syntax:\n'
      s += 'python buildxml.py'
      s += ' -e Taxon'
      s += ' -o dwc_taxon_2023-07-07.xml'
      print(f'{s}')
      exit(1)

    '''Build the selected extension XML file from the normative term history document.'''
    term_versions_file = "../vocabulary/term_versions.csv"
    print(f"Building the {options.extension_name} extension XML file:")

    '''Create the class that reads the term versions file and constructs the XML output.'''
    converter = CSVtoXMLConverter(term_versions_file)

    '''
    Build the XML extension file based on the choice of extension and write the result
    to the output file.
    '''
    converter.write_xml(options.extension_name, options.outputfile)
    print(f"Extension {options.extension_name} written to {options.outputfile}.")

if __name__ == "__main__":
    sys.exit(main())