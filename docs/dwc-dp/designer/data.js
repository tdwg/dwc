window.DWC_DP_DESIGNER_DATA = {
  "dwcDpVersion": "http://rs.tdwg.org/dwc-dp/1.0-RC",
  "profileIdentifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/dwc-dp-profile.json",
  "profile": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Darwin Core Data Package (DwC-DP) profile",
    "version": "http://rs.tdwg.org/dwc-dp/1.0-RC",
    "description": "Profile for organizing biodiversity data as a Data Package (https://specs.frictionlessdata.io/).",
    "type": "object",
    "$defs": {
      "dwc-dp-resource-names": {
        "enum": [
          "agent",
          "agent-agent-role",
          "agent-identifier",
          "agent-media",
          "bibliographic-resource",
          "chronometric-age",
          "chronometric-age-agent-role",
          "chronometric-age-assertion",
          "chronometric-age-media",
          "chronometric-age-protocol",
          "chronometric-age-reference",
          "event",
          "event-agent-role",
          "event-assertion",
          "event-identifier",
          "event-media",
          "event-protocol",
          "event-provenance",
          "event-reference",
          "event-usage-policy",
          "geological-context",
          "geological-context-media",
          "geological-material",
          "identification",
          "identification-agent-role",
          "identification-reference",
          "identification-taxon",
          "material",
          "material-agent-role",
          "material-assertion",
          "material-geological-context",
          "material-identifier",
          "material-media",
          "material-protocol",
          "material-provenance",
          "material-reference",
          "material-usage-policy",
          "media",
          "media-agent-role",
          "media-assertion",
          "media-identifier",
          "media-provenance",
          "media-usage-policy",
          "molecular-protocol",
          "molecular-protocol-agent-role",
          "molecular-protocol-assertion",
          "molecular-protocol-reference",
          "nucleotide-analysis",
          "nucleotide-analysis-assertion",
          "nucleotide-sequence",
          "occurrence",
          "occurrence-agent-role",
          "occurrence-assertion",
          "occurrence-identifier",
          "occurrence-media",
          "occurrence-protocol",
          "occurrence-reference",
          "organism",
          "organism-assertion",
          "organism-identifier",
          "organism-interaction",
          "organism-interaction-agent-role",
          "organism-interaction-assertion",
          "organism-interaction-media",
          "organism-interaction-reference",
          "organism-reference",
          "organism-relationship",
          "protocol",
          "protocol-reference",
          "provenance",
          "resource-relationship",
          "survey",
          "survey-agent-role",
          "survey-assertion",
          "survey-identifier",
          "survey-protocol",
          "survey-reference",
          "survey-survey-target",
          "survey-target",
          "survey-target-descriptor",
          "usage-policy"
        ]
      }
    },
    "allOf": [
      {
        "$ref": "https://specs.frictionlessdata.io/schemas/data-package.json"
      },
      {
        "required": [
          "profile"
        ],
        "properties": {
          "profile": {
            "format": "uri"
          },
          "resources": {
            "items": {
              "oneOf": [
                {
                  "properties": {
                    "name": {
                      "not": {
                        "$ref": "#/$defs/dwc-dp-resource-names"
                      }
                    }
                  }
                },
                {
                  "required": [
                    "profile"
                  ],
                  "properties": {
                    "profile": {
                      "enum": [
                        "tabular-data-resource"
                      ]
                    },
                    "name": {
                      "$ref": "#/$defs/dwc-dp-resource-names"
                    },
                    "schema": {
                      "properties": {
                        "fields": {
                          "items": {
                            "required": [
                              "name",
                              "title",
                              "description",
                              "type",
                              "dcterms:isVersionOf"
                            ],
                            "properties": {
                              "dcterms:isVersionOf": {
                                "type": "string",
                                "format": "uri",
                                "pattern": "^http.*$"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  },
  "schemas": {
    "agent": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/agent",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/agent.json",
      "name": "agent",
      "title": "Agent",
      "description": "A resource that acts or has the power to act.",
      "notes": "A person, group, organization, machine, software or other entity that can act. Membership in the dcterms:Agent class is determined by the capacity to act, even if not doing so in a specific context. To act: To participate in an event or process by contributing through behavior, operation, or an effect resulting from active participation — regardless of whether that contribution is intentional, volitional, or conscious.",
      "examples": "`Carl Linnaeus`; `The Terra Nova Expedition`; `The National Science Foundation`; `The El Yunque National Forest ARBIMON System`; `ChatGPT`",
      "namespace": "dcterms",
      "dcterms:isVersionOf": "http://purl.org/dc/terms/Agent",
      "fields": [
        {
          "name": "agent_pk",
          "title": "Agent (Primary Key)",
          "description": "A unique identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "agentID",
          "title": "Agent ID",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID"
        },
        {
          "name": "agentType",
          "title": "Agent Type",
          "description": "A category that best matches the nature of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`person`; `group`; `organization`; `camera`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentType"
        },
        {
          "name": "preferredAgentName",
          "title": "Preferred Agent Name",
          "description": "A name of a dcterms:Agent preferred in searches and results.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/title"
        },
        {
          "name": "agentRemarks",
          "title": "Agent Remarks",
          "description": "Comments or notes about a dcterms:Agent.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRemarks"
        }
      ],
      "primaryKey": "agent_pk",
      "weakPrimaryKey": "agentID"
    },
    "agent-agent-role": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/agent-agent-role",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/agent-agent-role.json",
      "name": "agent-agent-role",
      "title": "Agent Agent Role",
      "description": "A role filled by a dcterms:Agent with respect to another dcterms:Agent.",
      "notes": "",
      "examples": "`an instance of a dcterms:Agent that is a person is the director of another instance of a dcterms:Agent that is an organization`; `an instance of a dcterms:Agent that is a person is a member of another instance of a dcterms:Agent that is a group`; `an instance of a dcterms:Agent that is a person is the author of another instance of a dcterms:Agent that is software`",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//agent-agent-role",
      "fields": [
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relatedAgent_fk",
          "title": "Related Agent (Foreign Key)",
          "description": "An identifier for a related dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agentRole",
          "title": "Agent Role",
          "description": "A category that best matches the nature of a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary for the roles appropriate to the class of resource a dcterms:AgentRole is related to.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "agentRoleIRI",
          "title": "Agent Role IRI",
          "description": "An IRI of the controlled vocabulary value for a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "agentRoleSource",
          "title": "Agent Role Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:agentRole is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "agentRoleOrder",
          "title": "Agent Role Order",
          "description": "A numerical position of an AgentRole in a set of AgentRoles that have the same combination of agentRole, agentRoleIRI, agentRoleSource and related target identifier.",
          "notes": "One could use dwc:agentRoleOrder to create an ordered list of collectors (dwc:agentRole = 'collector') for a dwc:MaterialEntity, for example. The first would have agentRoleOrder=1, the second would have agentRoleOrder=2.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRoleOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "agentRoleDate",
          "title": "Agent Role Date",
          "description": "An interval during which a dcterms:AgentRole was in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        }
      ],
      "foreignKeys": [
        {
          "fields": "agent_fk",
          "predicate": "role holder",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "relatedAgent_fk",
          "predicate": "role for",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "agent-identifier": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/agent-identifier",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/agent-identifier.json",
      "name": "agent-identifier",
      "title": "Agent Identifier",
      "description": "An adms:Identifier for a dcterms:Agent.",
      "notes": "An important point to note is that properties of the adms:Identifier class are properties of the Identifier, not the resource that it identifies or the agency that issued it.",
      "examples": "`an ORCID`; `a Wikidata Q-number`; `an Index Herbariorum Institution Code`; `an International Standard Name Identifier`",
      "namespace": "adms",
      "dcterms:isVersionOf": "http://www.w3.org/ns/adms#Identifier",
      "fields": [
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "description": "An unambiguous reference to a resource within a given context.",
          "notes": "Recommended best practice is to identify a resource by means of a string conforming to a formal identification system.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`; `https://ror.org/00mh9zx15`",
          "type": "string",
          "format": "default",
          "namespace": "skos",
          "dcterms:isVersionOf": "http://www.w3.org/2004/02/skos/core#notation",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifierType",
          "title": "Identifier Type",
          "description": "A category or system that best matches the nature of an identifier (skos:notation).",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/type"
        },
        {
          "name": "identifierTypeIRI",
          "title": "Identifier Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of identifier.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "identifierTypeSource",
          "title": "Identifier Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:identifierType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "identifierLanguage",
          "title": "Identifier Language",
          "description": "A language in which an identifier is presented.",
          "notes": "Recommended best practice is to use an ISO639-2 three-letter language code.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/language"
        }
      ],
      "foreignKeys": [
        {
          "fields": "agent_fk",
          "predicate": "for",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "agent-media": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/agent-media",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/agent-media.json",
      "name": "agent-media",
      "title": "Agent Media",
      "description": "A dcterms:Agent as content in an ac:Media entity.",
      "notes": "",
      "examples": "`a person shown in a photograph`; `a group of people in a video`",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//agent-media",
      "fields": [
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "subjectCategory",
          "title": "Subject Category",
          "description": "A term to describe the content of a image or a region of interest within an image using a controlled value string.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/CVtermLiteral"
        },
        {
          "name": "subjectCategoryIRI",
          "title": "Subject Category IRI",
          "description": "An IRI of a controlled vocabulary value for the subject category of an ac:Media resource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "Iptc4xmpExt",
          "dcterms:isVersionOf": "http://iptc.org/std/Iptc4xmpExt/2008-02-29/CVterm"
        },
        {
          "name": "subjectCategoryVocabulary",
          "title": "Subject Category Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:subjectCategory is given.",
          "notes": "The Audiovisual Core recommended vocabularies do not need to be cited here. There is no required linkage between individual Subject Category terms and the vocabulary; the mechanism is intended to support discovery of the normative URI for a term, but not guarantee it.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectCategoryVocabulary"
        },
        {
          "name": "subjectPartLiteral",
          "title": "Subject Part Literal",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectPart. It is best practice to use ac:subjectPart instead of ac:subjectPartLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPartLiteral"
        },
        {
          "name": "subjectPart",
          "title": "Subject Part",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by an IRI.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPart"
        },
        {
          "name": "subjectOrientationLiteral",
          "title": "Subject Orientation Literal",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectOrientation. It is best practice to use ac:subjectOrientation instead of ac:subjectOrientationLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientationLiteral"
        },
        {
          "name": "subjectOrientation",
          "title": "Subject Orientation",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientation"
        },
        {
          "name": "physicalSetting",
          "title": "Physical Setting",
          "description": "The setting of the content represented in an ac:Media resource, such as images, sounds, and movies if the provider deems them relevant.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/physicalSetting"
        }
      ],
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "this media instance",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "agent_fk",
          "predicate": "about",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "bibliographic-resource": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/bibliographic-resource",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/bibliographic-resource.json",
      "name": "bibliographic-resource",
      "title": "Bibliographic Resource",
      "description": "A book, article, or other documentary resource.",
      "notes": "",
      "examples": "",
      "namespace": "dcterms",
      "dcterms:isVersionOf": "http://purl.org/dc/terms/BibliographicResource",
      "fields": [
        {
          "name": "reference_pk",
          "title": "Reference (Primary Key)",
          "description": "A unique identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "referenceID",
          "title": "Reference ID",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID"
        },
        {
          "name": "isPartOfReference_fk",
          "title": "Is Part Of Reference (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource that this dcterms:BibliographicResource is a part of.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "isPartOfReferenceID",
          "title": "Is Part Of Reference ID",
          "description": "An identifier for a dcterms:BibliographicResource that this dcterms:BibliographicResource is a part of.",
          "notes": "The value in this field MAY refer to a dcterms:BibliographicResource within or external to the dataset in which this record originated.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "referenceType",
          "title": "Reference Type",
          "description": "A category that best matches the nature of a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceType"
        },
        {
          "name": "bibliographicCitation",
          "title": "Bibliographic Citation",
          "description": "A bibliographic reference for a dcterms:BibliographicResource.",
          "notes": "Recommended practice is to include sufficient bibliographic detail to identify the resource as unambiguously as possible. The intended usage of this term in Darwin Core is to provide the preferred way to cite the resource itself. Note that the intended usage of dcterms:references in Darwin Core, by contrast, is to point to the definitive source representation of the resource, if one is available.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/bibliographicCitation"
        },
        {
          "name": "bibliographicIdentifier",
          "title": "Bibliographic Identifier",
          "description": "A number or symbol to uniquely identify a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a globally unique identifier issued by recognizable authority (e.g., International ISBN Agency, International DOI Foundation).",
          "examples": "`978-0565095024`; `10998406`; `10.1046/j.1420-9101.1997.10010039.x`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/bibliographicIdentifier"
        },
        {
          "name": "bibliographicIdentifierType",
          "title": "Bibliographic Identifier Type",
          "description": "A code that best matches the nature of an identifier for a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a limited, tightly controlled vocabulary of identifier issuers. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`ISBN`; `DOI`; `ISSN`; `OCN`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/bibliographicIdentifierType"
        },
        {
          "name": "title",
          "title": "Title",
          "description": "A name given to a resource.",
          "notes": "Typically, a dc:title will be a name by which the resource is formally known.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/title"
        },
        {
          "name": "author",
          "title": "Author",
          "description": "A name of a dcterms:Agent primarily responsible for creating a dcterms:BibliographicResource.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/creator"
        },
        {
          "name": "author_fk",
          "title": "Author (Foreign Key)",
          "description": "An identifier for a dcterms:Agent primarily responsible for making a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "authorID",
          "title": "Author ID",
          "description": "An identifier for a dcterms:Agent primarily responsible for making a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "editor",
          "title": "Editor",
          "description": "A name of a dcterms:Agent having managerial and sometimes policy-making responsibility for the editorial part of a publishing firm or of a newspaper, magazine, or other publication.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "bibo",
          "dcterms:isVersionOf": "http://purl.org/ontology/bibo/editor"
        },
        {
          "name": "editor_fk",
          "title": "Editor (Foreign Key)",
          "description": "An identifier for a dcterms:Agent having managerial and sometimes policy-making responsibility for the editorial part of a publishing firm or of a newspaper, magazine, or other publication.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "editorID",
          "title": "Editor ID",
          "description": "An identifier for a dcterms:Agent having managerial and sometimes policy-making responsibility for the editorial part of a publishing firm or of a newspaper, magazine, or other publication.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "publisher",
          "title": "Publisher",
          "description": "A name of a dcterms:Agent responsible for making a dcterms:BibliographicResource available.",
          "notes": "Examples of a dcterms:publisher include a person, an organization, or a service. Typically, the name of a dcterms:publisher should be used to indicate the entity.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/publisher"
        },
        {
          "name": "publisher_fk",
          "title": "Publisher (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a Reference available.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "publisherID",
          "title": "Publisher ID",
          "description": "An identifier for a dcterms:Agent responsible for making a Reference available.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "volume",
          "title": "Volume",
          "description": "A volume number of a dcterms:BibliographicResource.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "bibo",
          "dcterms:isVersionOf": "http://purl.org/ontology/bibo/volume"
        },
        {
          "name": "issue",
          "title": "Issue",
          "description": "An issue number of a dcterms:BibliographicResource.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "bibo",
          "dcterms:isVersionOf": "http://purl.org/ontology/bibo/issue"
        },
        {
          "name": "edition",
          "title": "Edition",
          "description": "An edition of a dcterms:BibliographicResource.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "bibo",
          "dcterms:isVersionOf": "http://purl.org/ontology/bibo/edition"
        },
        {
          "name": "pages",
          "title": "Pages",
          "description": "A range of pages within a dcterms:BibliographicResource.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "bibo",
          "dcterms:isVersionOf": "http://purl.org/ontology/bibo/pages"
        },
        {
          "name": "version",
          "title": "Version",
          "description": "A version number of a dcterms:BibliographicResource.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "bibo",
          "dcterms:isVersionOf": "http://purl.org/pav/version"
        },
        {
          "name": "issued",
          "title": "Issued",
          "description": "Date of formal issuance of a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/issued"
        },
        {
          "name": "accessed",
          "title": "Accessed",
          "description": "The resource is related to a source which was originally accessed or consulted on the given date as part of creating or authoring the resource. The source(s) should be specified using pav:sourceAccessedAt.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "bibo",
          "dcterms:isVersionOf": "http://purl.org/pav/sourceAccessedOn"
        },
        {
          "name": "peerReviewStatus",
          "title": "Peer Review Status",
          "description": "An indication of whether a dcterms:BibliographicResource was peer reviewed.",
          "notes": "",
          "examples": "",
          "type": "boolean",
          "format": "default",
          "namespace": "bibo",
          "dcterms:isVersionOf": "http://purl.org/ontology/bibo/status"
        },
        {
          "name": "referenceRemarks",
          "title": "Reference Remarks",
          "description": "Comments or notes about a dcterms:BibliographicResource.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceRemarks"
        }
      ],
      "primaryKey": "reference_pk",
      "weakPrimaryKey": "referenceID",
      "foreignKeys": [
        {
          "fields": "isPartOfReference_fk",
          "predicate": "part of",
          "reference": {
            "resource": "",
            "fields": "reference_pk"
          }
        },
        {
          "fields": "author_fk",
          "predicate": "authored by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "editor_fk",
          "predicate": "edited by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "publisher_fk",
          "predicate": "published by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "isPartOfReferenceID",
          "predicate": "part of",
          "reference": {
            "resource": "",
            "fields": "referenceID"
          }
        },
        {
          "fields": "authorID",
          "predicate": "authored by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "editorID",
          "predicate": "edited by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "publisherID",
          "predicate": "published by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "chronometric-age": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/chronometric-age",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/chronometric-age.json",
      "name": "chronometric-age",
      "title": "Chronometric Age",
      "description": "An approximation of temporal position (in the sense conveyed by https://www.w3.org/TR/owl-time/#time:TemporalPosition) that is supported via evidence.",
      "notes": "The age of a dwc:MaterialEntity and how this age is known, whether by a dating assay, a relative association with dated material, or legacy collections information.",
      "examples": "`An age range associated with a specimen derived from an AMS dating assay applied to an oyster shell in the same stratum`; `An age range associated with a specimen derived from a ceramics analysis based on other materials found in the same stratum`; `A maximum age associated with a specimen derived from K-Ar dating applied to a proximal volcanic tuff found stratigraphically below the specimen`; `An age range of a specimen based on its biostratigraphic context`; `An age of a specimen based on what is reported in legacy collections data.`",
      "namespace": "chrono",
      "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/ChronometricAge",
      "fields": [
        {
          "name": "chronometricAge_pk",
          "title": "Chronometric Age (Primary Key)",
          "description": "A unique identifier for a chrono:ChronometricAge.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "`https://www.canadianarchaeology.ca/samples/70673`",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "chronometricAgeID",
          "title": "Chronometric Age ID",
          "description": "An identifier for a chrono:ChronometricAge.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "`https://www.canadianarchaeology.ca/samples/70673`",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeID"
        },
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimChronometricAge",
          "title": "Verbatim Chronometric Age",
          "description": "A verbatim age for a dwc:Event, whether reported by a dating assay, associated references, or legacy information.",
          "notes": "For example, this could be the radiocarbon age as given in an AMS dating report. This could also be simply what is reported as the age of a specimen in legacy collections data.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/verbatimChronometricAge"
        },
        {
          "name": "chronometricAgeProtocol",
          "title": "Chronometric Age Protocol",
          "description": "A description of or reference to a dwc:Protocol used to determine a chrono:ChronometricAge.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeProtocol"
        },
        {
          "name": "chronometricAgeProtocol_fk",
          "title": "Chronometric Age Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to determine a chrono:ChronometricAge.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "uncalibratedChronometricAge",
          "title": "Uncalibrated Chronometric Age",
          "description": "An output of a dating assay before it is calibrated into an age using a specific conversion protocol.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/uncalibratedChronometricAge"
        },
        {
          "name": "chronometricAgeConversionProtocol",
          "title": "Chronometric Age Conversion Protocol",
          "description": "A description of or reference to a dwc:Protocol used to convert a chrono:uncalibratedChronometricAge into a chronometric age in years, as captured in the chrono:earliestChronometricAge, chrono:earliestChronometricAgeReferenceSystem, chrono:latestChronometricAge, and chrono:latestChronometricAgeReferenceSystem fields.",
          "notes": "For example, calibration of conventional radiocarbon age or the currently accepted age range of a cultural or geological period.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeConversionProtocol"
        },
        {
          "name": "chronometricAgeConversionProtocol_fk",
          "title": "Chronometric Age Conversion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to convert a chrono:uncalibratedChronometricAge into a chronometric age in years, as captured in the chrono:earliestChronometricAge, chrono:earliestChronometricAgeReferenceSystem, chrono:latestChronometricAge, and chrono:latestChronometricAgeReferenceSystem fields.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "earliestChronometricAge",
          "title": "Earliest Chronometric Age",
          "description": "A maximum/earliest/oldest possible age of a dwc:MaterialEntity as determined by a dating method.",
          "notes": "The expected unit for this field is years. This field, if populated, must have an associated chrono:earliestChronometricAgeReferenceSystem.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/earliestChronometricAge"
        },
        {
          "name": "earliestChronometricAgeReferenceSystem",
          "title": "Earliest Chronometric Age Reference System",
          "description": "A reference system associated with a chrono:earliestChronometricAge.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/earliestChronometricAgeReferenceSystem"
        },
        {
          "name": "latestChronometricAge",
          "title": "Latest Chronometric Age",
          "description": "A minimum/latest/youngest possible age of a dwc:MaterialEntity as determined by a dating method.",
          "notes": "The expected unit for this field is years. This field, if populated, must have an associated latestChronometricAgeReferenceSystem.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/latestChronometricAge"
        },
        {
          "name": "latestChronometricAgeReferenceSystem",
          "title": "Latest Chronometric Age Reference System",
          "description": "A reference system associated with a chrono:latestChronometricAge.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/latestChronometricAgeReferenceSystem"
        },
        {
          "name": "chronometricAgeUncertaintyInYears",
          "title": "Chronometric Age Uncertainty In Years",
          "description": "A temporal uncertainty of a chrono:earliestChronometricAge and chrono:latestChronometricAge in years.",
          "notes": "The expected unit for this field is years. The value in this field is number of years before and after the values given in the earliest and latest chronometric age fields within which the actual values are estimated to be.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeUncertaintyInYears"
        },
        {
          "name": "chronometricAgeUncertaintyMethod",
          "title": "Chronometric Age Uncertainty Method",
          "description": "A method used to generate a value of chrono:ChronometricAgeUncertaintyInYears.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeUncertaintyMethod"
        },
        {
          "name": "materialDated",
          "title": "Material Dated",
          "description": "A description of a dwc:MaterialEntity on which a chrono:ChronometricAgeProtocol was actually performed, if known.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/materialDated"
        },
        {
          "name": "materialDated_fk",
          "title": "Material Dated (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity on which a chrono:ChronometricAgeProtocol was performed, if applicable.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/materialDatedID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "materialDatedID",
          "title": "Material Dated ID",
          "description": "An identifier for a dwc:MaterialEntity on which a chrono:ChronometricAgeProtocol was performed, if applicable.",
          "notes": "The value in this field MAY refer to a dwc:MaterialEntity within or external to the dataset in which this record originated.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/materialDatedID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "materialDatedRelationship",
          "title": "Material Dated Relationship",
          "description": "A relationship of a chrono:materialDated to a dwc:MaterialEntity, from which a chrono:ChronometricAge of the related dwc:MaterialEntity and any related dwc:Occurrence is inferred.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/materialDatedRelationship"
        },
        {
          "name": "chronometricAgeDeterminedBy",
          "title": "Chronometric Age Determined By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for determining the chrono:ChronometricAge.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeDeterminedBy"
        },
        {
          "name": "chronometricAgeDeterminedBy_fk",
          "title": "Chronometric Age Determined By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for determining a chrono:ChronometricAge.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "chronometricAgeDeterminedByID",
          "title": "Chronometric Age Determined By ID",
          "description": "An identifier for a dcterms:Agent responsible for determining a chrono:ChronometricAge.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "chronometricAgeDeterminedDate",
          "title": "Chronometric Age Determined Date",
          "description": "A date on which a chrono:ChronometricAge was determined.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeDeterminedDate"
        },
        {
          "name": "chronometricAgeReferences",
          "title": "Chronometric Age References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a chrono:ChronometricAge.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeReferences"
        },
        {
          "name": "chronometricAgeRemarks",
          "title": "Chronometric Age Remarks",
          "description": "Comments or notes about a chrono:ChronometricAge.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeRemarks"
        }
      ],
      "primaryKey": "chronometricAge_pk",
      "weakPrimaryKey": "chronometricAgeID",
      "foreignKeys": [
        {
          "fields": "event_fk",
          "predicate": "for",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        },
        {
          "fields": "chronometricAgeProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "chronometricAgeConversionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "materialDated_fk",
          "predicate": "dated",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        },
        {
          "fields": "chronometricAgeDeterminedBy_fk",
          "predicate": "determined by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "materialDatedID",
          "predicate": "dated",
          "reference": {
            "resource": "material",
            "fields": "materialEntityID"
          }
        },
        {
          "fields": "chronometricAgeDeterminedByID",
          "predicate": "determined by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "chronometric-age-agent-role": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/chronometric-age-agent-role",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/chronometric-age-agent-role.json",
      "name": "chronometric-age-agent-role",
      "title": "Chronometric Age Agent Role",
      "description": "A role filled by a dcterms:Agent with respect to a chrono:ChronometricAge.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//chronometric-age-agent-role",
      "fields": [
        {
          "name": "chronometricAge_fk",
          "title": "Chronometric Age (Foreign Key)",
          "description": "An identifier for a chrono:ChronometricAge.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agentRole",
          "title": "Agent Role",
          "description": "A category that best matches the nature of a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary for the roles appropriate to the class of resource a dcterms:AgentRole is related to.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "agentRoleIRI",
          "title": "Agent Role IRI",
          "description": "An IRI of the controlled vocabulary value for a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "agentRoleSource",
          "title": "Agent Role Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:agentRole is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "agentRoleOrder",
          "title": "Agent Role Order",
          "description": "A numerical position of an AgentRole in a set of AgentRoles that have the same combination of agentRole, agentRoleIRI, agentRoleSource and related target identifier.",
          "notes": "One could use dwc:agentRoleOrder to create an ordered list of collectors (dwc:agentRole = 'collector') for a dwc:MaterialEntity, for example. The first would have dwc:agentRoleOrder=1, the second would have dwc:agentRoleOrder=2.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRoleOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "agentRoleDate",
          "title": "Agent Role Date",
          "description": "An interval during which a dcterms:AgentRole was in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        }
      ],
      "foreignKeys": [
        {
          "fields": "chronometricAge_fk",
          "predicate": "role for",
          "reference": {
            "resource": "chronometric-age",
            "fields": "chronometricAge_pk"
          }
        },
        {
          "fields": "agent_fk",
          "predicate": "role holder",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "chronometric-age-assertion": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/chronometric-age-assertion",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/chronometric-age-assertion.json",
      "name": "chronometric-age-assertion",
      "title": "Chronometric Age Assertion",
      "description": "A dwc:Assertion made by a dcterms:Agent about a chrono:ChronometricAge.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
      "fields": [
        {
          "name": "assertionID",
          "title": "Assertion ID",
          "description": "An identifier for a dwc:Assertion.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionID",
          "constraints": {
            "required": false,
            "unique": true
          }
        },
        {
          "name": "chronometricAge_fk",
          "title": "Chronometric Age (Foreign Key)",
          "description": "An identifier for a chrono:ChronometricAge.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimAssertionType",
          "title": "Verbatim Assertion Type",
          "description": "A string representing the type of dwc:Assertion as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original name for a dwc:assertionType. This term is meant to be used in addition to dwc:assertionType, not instead of it.",
          "examples": "`water_temp`; `Fish biomass`; `sampling net mesh size`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimAssertionType"
        },
        {
          "name": "assertionType",
          "title": "Assertion Type",
          "description": "A category that best matches the nature of a dwc:Assertion.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`tail length`; `temperature`; `trap line length`; `survey area`; `trap type`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionType"
        },
        {
          "name": "assertionTypeIRI",
          "title": "Assertion Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementType"
        },
        {
          "name": "assertionTypeSource",
          "title": "Assertion Type Source",
          "description": "A reference to the controlled vocabulary in which the definition of a value in dwc:assertionType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionMadeDate",
          "title": "Assertion Made Date",
          "description": "A date on which a dwc:Assertion was created.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionMadeDate"
        },
        {
          "name": "assertionEffectiveDate",
          "title": "Assertion Effective Date",
          "description": "A date-time or time interval during which an asserted state or measurement was deemed to be in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        },
        {
          "name": "assertionValue",
          "title": "Assertion Value",
          "description": "An asserted value.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionValue"
        },
        {
          "name": "assertionValueIRI",
          "title": "Assertion Value IRI",
          "description": "An IRI of the controlled vocabulary value for a value of a dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementValue"
        },
        {
          "name": "assertionValueSource",
          "title": "Assertion Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:assertionValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionUnit",
          "title": "Assertion Unit",
          "description": "Unit associated with the value in dwc:assertionValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure http://www.wurvoc.org/vocabularies/om-1.8/ of SI units, derived units, or other non-SI units accepted for use within the SI. For units that are composed of multiple parts, use the patterns as given in \"A Primer for Communicating Mathematics via Plain Text\" (https://cse.sc.edu/~fenner/latex-ASCII.pdf) by Stephen Fenner (e.g., `g/cm^3` for grams per cubic centimeter). For other units, provide the value as a recognizable standard (e.g., '%') or written out in full and in the plural (e.g., `individuals`). It is fine to provide non-SI units in the original language of the dataset.",
          "examples": "`m`; `s`; `g`; `ml`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionUnit"
        },
        {
          "name": "assertionUnitIRI",
          "title": "Assertion Unit IRI",
          "description": "An IRI of a controlled vocabulary value for the unit of a dwc:assertionValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/assertionUnit"
        },
        {
          "name": "assertionUnitSource",
          "title": "Assertion Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of the value in dwc:assertionUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionError",
          "title": "Assertion Error",
          "description": "A description of the potential error associated with a dwc:assertionValue.",
          "notes": "",
          "examples": "`0.01`; `normal distribution with variation of 2 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionError"
        },
        {
          "name": "assertionBy",
          "title": "Assertion By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for making a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionBy"
        },
        {
          "name": "assertionBy_fk",
          "title": "Assertion By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionByID",
          "title": "Assertion By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionProtocols",
          "title": "Assertion Protocols",
          "description": "Names of, references to, or descriptions of dwc:Protocols used in making a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionProtocols"
        },
        {
          "name": "assertionProtocol_fk",
          "title": "Assertion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to make a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionReferences",
          "title": "Assertion References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionReferences"
        },
        {
          "name": "assertionRemarks",
          "title": "Assertion Remarks",
          "description": "Comments or notes about a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionRemarks"
        }
      ],
      "weakPrimaryKey": "assertionID",
      "foreignKeys": [
        {
          "fields": "chronometricAge_fk",
          "predicate": "about",
          "reference": {
            "resource": "chronometric-age",
            "fields": "chronometricAge_pk"
          }
        },
        {
          "fields": "assertionBy_fk",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "assertionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "assertionByID",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "chronometric-age-media": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/chronometric-age-media",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/chronometric-age-media.json",
      "name": "chronometric-age-media",
      "title": "Chronometric Age Media",
      "description": "A chrono:ChronometricAge as content in an ac:Media entity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//chronometric-age-media",
      "fields": [
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "chronometricAge_fk",
          "title": "Chronometric Age (Foreign Key)",
          "description": "An identifier for a chrono:ChronometricAge.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "subjectCategory",
          "title": "Subject Category",
          "description": "A term to describe the content of a image or a region of interest within an image using a controlled value string.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/CVtermLiteral"
        },
        {
          "name": "subjectCategoryIRI",
          "title": "Subject Category IRI",
          "description": "An IRI of a controlled vocabulary value for the subject category of an ac:Media resource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "Iptc4xmpExt",
          "dcterms:isVersionOf": "http://iptc.org/std/Iptc4xmpExt/2008-02-29/CVterm"
        },
        {
          "name": "subjectCategoryVocabulary",
          "title": "Subject Category Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:subjectCategory is given.",
          "notes": "The Audiovisual Core recommended vocabularies do not need to be cited here. There is no required linkage between individual Subject Category terms and the vocabulary; the mechanism is intended to support discovery of the normative URI for a term, but not guarantee it.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectCategoryVocabulary"
        },
        {
          "name": "subjectPartLiteral",
          "title": "Subject Part Literal",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectPart. It is best practice to use ac:subjectPart instead of ac:subjectPartLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPartLiteral"
        },
        {
          "name": "subjectPart",
          "title": "Subject Part",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by an IRI.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPart"
        },
        {
          "name": "subjectOrientationLiteral",
          "title": "Subject Orientation Literal",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectOrientation. It is best practice to use ac:subjectOrientation instead of ac:subjectOrientationLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientationLiteral"
        },
        {
          "name": "subjectOrientation",
          "title": "Subject Orientation",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientation"
        },
        {
          "name": "physicalSetting",
          "title": "Physical Setting",
          "description": "The setting of the content represented in an ac:Media resource, such as images, sounds, and movies if the provider deems them relevant.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/physicalSetting"
        }
      ],
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "this media instance",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "chronometricAge_fk",
          "predicate": "about",
          "reference": {
            "resource": "chronometric-age",
            "fields": "chronometricAge_pk"
          }
        }
      ]
    },
    "chronometric-age-protocol": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/chronometric-age-protocol",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/chronometric-age-protocol.json",
      "name": "chronometric-age-protocol",
      "title": "Chronometric Age Protocol",
      "description": "A dwc:Protocol used for a chrono:ChronometricAge.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//chronometric-age-protocol",
      "fields": [
        {
          "name": "protocol_fk",
          "title": "Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "chronometricAge_fk",
          "title": "Chronometric Age (Foreign Key)",
          "description": "An identifier for a chrono:ChronometricAge.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "protocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "chronometricAge_fk",
          "predicate": "used for",
          "reference": {
            "resource": "chronometric-age",
            "fields": "chronometricAge_pk"
          }
        }
      ]
    },
    "chronometric-age-reference": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/chronometric-age-reference",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/chronometric-age-reference.json",
      "name": "chronometric-age-reference",
      "title": "Chronometric Age Reference",
      "description": "A dcterms:BibliographicResource related to a chrono:ChronometricAge.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//chronometric-age-reference",
      "fields": [
        {
          "name": "reference_fk",
          "title": "Reference (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "chronometricAge_fk",
          "title": "Chronometric Age (Foreign Key)",
          "description": "An identifier for a chrono:ChronometricAge.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "chrono",
          "dcterms:isVersionOf": "http://rs.tdwg.org/chrono/terms/chronometricAgeID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource to a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`cited in`; `referenced`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        }
      ],
      "foreignKeys": [
        {
          "fields": "reference_fk",
          "predicate": "mentioned in",
          "reference": {
            "resource": "bibliographic-resource",
            "fields": "reference_pk"
          }
        },
        {
          "fields": "chronometricAge_fk",
          "predicate": "mentioned",
          "reference": {
            "resource": "chronometric-age",
            "fields": "chronometricAge_pk"
          }
        }
      ]
    },
    "event": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/event",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/event.json",
      "name": "event",
      "title": "Event",
      "description": "An action, process, or set of circumstances occurring at a dcterms:Location during a period of time.",
      "notes": "",
      "examples": "`a material collecting event`; `a bird observation`; `a camera trap image capture`; `an organism occurrence`; `a biotic survey`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/Event",
      "fields": [
        {
          "name": "event_pk",
          "title": "Event (Primary Key)",
          "description": "A unique identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "`INBO:VIS:Ev:00009375`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "eventID",
          "title": "Event ID",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "`INBO:VIS:Ev:00009375`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID"
        },
        {
          "name": "parentEvent_fk",
          "title": "Parent Event (Foreign Key)",
          "description": "An identifier for a broader dwc:Event that contains this and potentially other dwc:Events.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/parentEventID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "eventProtocol_fk",
          "title": "Event Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used during a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "provenance_fk",
          "title": "Provenance (Foreign Key)",
          "description": "An identifier for a dwc:Provenance.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/provenanceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "preferredEventName",
          "title": "Preferred Event Name",
          "description": "The name of a dwc:Event preferred in searches and results.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/title"
        },
        {
          "name": "eventCategory",
          "title": "Event Category",
          "description": "A broad category that best matches the nature of a dwc:Event.",
          "notes": "Recommended best practice is to use a limited, tightly controlled vocabulary.",
          "examples": "`material collection`; `nucleotide analysis`; `occurrence`; `organism interaction`; `survey`; `context`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventCategory",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "eventType",
          "title": "Event Type",
          "description": "A narrow category that best matches the nature of a dwc:Event.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`BioBlitz`; `camera trap deployment`; `expedition`; `project`; `site visit`; `trawl`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventType"
        },
        {
          "name": "datasetName",
          "title": "Dataset Name",
          "description": "A name of a source dataset.",
          "notes": "",
          "examples": "`Grinnell Resurvey Mammals`; `Lacey Ctenomys Recaptures`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/datasetName"
        },
        {
          "name": "datasetID",
          "title": "Dataset ID",
          "description": "An identifier for a source dataset.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/datasetID"
        },
        {
          "name": "fieldNumber",
          "title": "Field Number",
          "description": "An identifier given to a dwc:Event in the field.",
          "notes": "Often serves as a link between field notes and a dwc:Event. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`RV Sol 87-03-08`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/fieldNumber"
        },
        {
          "name": "recordedBy",
          "title": "Recorded By",
          "description": "A name for a dcterms:Agent responsible for recording a dwc:Event.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`José E. Crespo`; `Oliver P. Pearson | Anita K. Pearson` (where the value in dwc:collectorNumber `OPP 7101` corresponds to the collector number for the specimen in the field catalog of Oliver P. Pearson)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/recordedBy"
        },
        {
          "name": "recordedBy_fk",
          "title": "Recorded By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for recording a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/version/recordedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "recordedByID",
          "title": "Recorded By ID",
          "description": "An identifier for a dcterms:Agent responsible for recording a dwc:Event.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`; `https://ror.org/00mh9zx15`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/version/recordedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "eventDurationValue",
          "title": "Event Duration Value",
          "description": "The numeric value for the duration of a dwc:Event.",
          "notes": "`An eco:eventDurationValue must have a corresponding eco:eventDurationUnit.`",
          "examples": "`1`; `30`",
          "type": "number",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/eventDurationValue",
          "constraints": {
            "minimum": 0
          }
        },
        {
          "name": "eventDurationUnit",
          "title": "Event Duration Unit",
          "description": "Units associated with a value in eco:eventDurationValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`minutes`; `hours`; `days`; `months`; `years`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/eventDurationUnit"
        },
        {
          "name": "eventDate",
          "title": "Event Date",
          "description": "A date-time or time interval during which a dwc:Event occurred.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019. Not suitable for a time in a geological context.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventDate"
        },
        {
          "name": "eventTime",
          "title": "Event Time",
          "description": "The time or interval during which a dwc:Event occurred.",
          "notes": "Recommended best practice is to use a time of day that conforms to ISO 8601-1:2019.",
          "examples": "`14:07-06:00` (at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `08:40:21Z` (at or after 8:40:21am and before 8:41:22am UTC); `13:00:00Z/15:30:00Z` (at or after 1pm and before 3:30pm UTC)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventTime"
        },
        {
          "name": "startDayOfYear",
          "title": "Start Day Of Year",
          "description": "The earliest integer day of the year on which a dwc:Event occurred.",
          "notes": "The value is 1 for January 1 and 365 for December 31, except in a leap year, in which case it is 366.",
          "examples": "`1` (1 January); `32` (1 February); `366` (31 December); `365` (30 December in a leap year, 31 December in a non-leap year)",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/startDayOfYear",
          "constraints": {
            "minimum": 1,
            "maximum": 366
          }
        },
        {
          "name": "endDayOfYear",
          "title": "End Day Of Year",
          "description": "The latest integer day of the year on which a dwc:Event occurred.",
          "notes": "The value is 1 for January 1 and 365 for December 31, except in a leap year, in which case it is 366.",
          "examples": "`1` (1 January); `32` (1 February); `366` (31 December); `365` (30 December in a leap year, 31 December in a non-leap year)",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/endDayOfYear",
          "constraints": {
            "minimum": 1,
            "maximum": 366
          }
        },
        {
          "name": "year",
          "title": "Year",
          "description": "The four-digit year in which the dwc:Event occurred, according to the Common Era Calendar.",
          "notes": "",
          "examples": "`1160`; `2008`",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/year"
        },
        {
          "name": "month",
          "title": "Month",
          "description": "The integer month in which the dwc:Event occurred.",
          "notes": "",
          "examples": "`1` (January); `10` (October)",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/month",
          "constraints": {
            "minimum": 1,
            "maximum": 12
          }
        },
        {
          "name": "day",
          "title": "Day",
          "description": "The integer day of the month on which the dwc:Event occurred.",
          "notes": "",
          "examples": "`9`; `28`",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/day",
          "constraints": {
            "minimum": 1,
            "maximum": 31
          }
        },
        {
          "name": "verbatimEventDate",
          "title": "Verbatim Event Date",
          "description": "The verbatim original representation of the date and time information for a dwc:Event.",
          "notes": "",
          "examples": "`spring 1910`; `Marzo 2002`; `1999-03-XX`; `17IV1934`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimEventDate"
        },
        {
          "name": "verbatimLocality",
          "title": "Verbatim Locality",
          "description": "An original textual description of a dcterms:Location.",
          "notes": "",
          "examples": "`25 km NNE Bariloche por R. Nac. 237`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimLocality"
        },
        {
          "name": "verbatimElevation",
          "title": "Verbatim Elevation",
          "description": "An original description of the elevation of a dcterms:Location.",
          "notes": "",
          "examples": "`100-200 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimElevation"
        },
        {
          "name": "verbatimDepth",
          "title": "Verbatim Depth",
          "description": "The original description of the depth below the local surface.",
          "notes": "",
          "examples": "`100-200 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimDepth"
        },
        {
          "name": "verbatimCoordinates",
          "title": "Verbatim Coordinates",
          "description": "Verbatim original spatial coordinates of a dcterms:Location.",
          "notes": "The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.",
          "examples": "`41 05 54S 121 05 34W`; `17T 630000 4833400`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimCoordinates"
        },
        {
          "name": "verbatimLatitude",
          "title": "Verbatim Latitude",
          "description": "A verbatim original latitude of a dcterms:Location.",
          "notes": "The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.",
          "examples": "`41 05 54.03S`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimLatitude"
        },
        {
          "name": "verbatimLongitude",
          "title": "Verbatim Longitude",
          "description": "A verbatim original longitude of a dcterms:Location.",
          "notes": "The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem.",
          "examples": "`121d 10' 34\" W`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimLongitude"
        },
        {
          "name": "verbatimCoordinateSystem",
          "title": "Verbatim Coordinate System",
          "description": "A coordinate format for dwc:verbatimLatitude and dwc:verbatimLongitude or dwc:verbatimCoordinates.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`decimal degrees`; `degrees decimal minutes`; `degrees minutes seconds`; `UTM`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimCoordinateSystem"
        },
        {
          "name": "verbatimSRS",
          "title": "Verbatim SRS",
          "description": "The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which coordinates given in dwc:verbatimLatitude and dwc:verbatimLongitude, or dwc:verbatimCoordinates are based.",
          "notes": "Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value `not recorded`. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`EPSG:4326`; `WGS84`; `NAD27`; `Campo Inchauspe`; `European 1950`; `Clarke 1866`; `not recorded`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimSRS"
        },
        {
          "name": "georeferenceVerificationStatus",
          "title": "Georeference Verification Status",
          "description": "A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description for the dcterms:Location of the dwc:Occurrence.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`unable to georeference`; `requires georeference`; `requires verification`; `verified by data custodian`; `verified by contributor`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/georeferenceVerificationStatus"
        },
        {
          "name": "habitat",
          "title": "Habitat",
          "description": "A category or description of the habitat in which the dwc:Event occurred.",
          "notes": "This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`oak savanna`; `pre-cordilleran steppe`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/habitat"
        },
        {
          "name": "isVegetationCoverReported",
          "title": "Is Vegetation Cover Reported",
          "description": "A vegetation cover metric was reported.",
          "notes": "Typically values or descriptions of vegetation cover would be captured under the term eco:verbatimSiteDescriptions. Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/isVegetationCoverReported"
        },
        {
          "name": "sampledSubstrateCategory",
          "title": "Sampled Substrate Category",
          "description": "A category or type of substrate sampled during a dwc:Event.",
          "notes": "Recommended best practice is to use a controlled vocabulary and separate the values in a list with space vertical bar space ( | ).",
          "examples": "`vegetation`; `soil`; `ocean`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/sampledSubstrateCategory"
        },
        {
          "name": "sampledSubstrateLayer",
          "title": "Sampled Substrate Layer",
          "description": "A list (concatenated and separated) of substrate layers sampled during a dwc:Event.",
          "notes": "Recommended best practice is to use a controlled vocabulary and separate the values in a list with space vertical bar space ( | ).",
          "examples": "`forest floor`; `herbaceous | shrub`; `understory`; `canopy`; `organic (O)`; `surface (A)`; `eluviated (E)`; `subsoil (B)`; `parent material (C)`; `bedrock (R)`; `epipelagic | mesopelagic`; `bathypelagic`; `abysopelagic`; `hadalpelagic`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/sampledSubstrateLayer"
        },
        {
          "name": "fieldNotes",
          "title": "Field Notes",
          "description": "One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the dwc:Event.",
          "notes": "This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Notes available in the Grinnell-Miller Library.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/fieldNotes"
        },
        {
          "name": "reportedExtremeConditions",
          "title": "Reported Extreme Conditions",
          "description": "A description of any extreme weather or environmental conditions that may have affected a dwc:Event.",
          "notes": "",
          "examples": "`{\"minimumTemperatureInDegreesFahrenheit\": 18, \"maximumTemperatureInDegreesFahrenheit\": 32}`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/reportedExtremeConditions"
        },
        {
          "name": "reportedWeather",
          "title": "Reported Weather",
          "description": "A list of weather or climatic conditions present during a dwc:Event.",
          "notes": "Recommended best practice is to use a key:value encoding schema for a data interchange format such as JSON.",
          "examples": "`flooding during week 3 of surveys`; `rockslide at site 2`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/reportedWeather"
        },
        {
          "name": "eventReferences",
          "title": "Event References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Event.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space ( | ). Note that the intended usage of the term dcterms:references in Darwin Core is to point to the definitive source representation of the resource, if one is available. Note also that the intended usage of dcterms:bibliographicCitation in Darwin Core is to provide the preferred way to cite the resource itself.",
          "examples": "`http://www.sciencemag.org/cgi/content/abstract/322/5899/261`; `Christopher J. Conroy, Jennifer L. Neuwald. 2008. Phylogeographic study of the California vole, Microtus californicus Journal of Mammalogy, 89(3):755-767.`; `Steven R. Hoofer and Ronald A. Van Den Bussche. 2001. Phylogenetic Relationships of Plecotine Bats and Allies Based on Mitochondrial Ribosomal Sequences. Journal of Mammalogy 82(1):131-137. | Walker, Faith M., Jeffrey T. Foster, Kevin P. Drees, Carol L. Chambers. 2014. Spotted bat (Euderma maculatum) microsatellite discovery using illumina sequencing. Conservation Genetics Resources.`; `https://doi.org/10.3897/BDJ.14.e177525`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/associatedReferences"
        },
        {
          "name": "eventRemarks",
          "title": "Event Remarks",
          "description": "Comments or notes about the dwc:Event.",
          "notes": "",
          "examples": "`After the recent rains the river is nearly at flood stage.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventRemarks"
        },
        {
          "name": "geologicalContext_fk",
          "title": "Geological Context (Foreign Key)",
          "description": "An identifier for a dwc:GeologicalContext.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicalContextID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "geologicalContextID",
          "title": "Geological Context ID",
          "description": "An identifier for a dwc:GeologicalContext.",
          "notes": "The value in this field may refer to a dwc:GeologicalContext within or external to the dataset in which this record originated.",
          "examples": "`https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicalContextID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "locationID",
          "title": "Location ID",
          "description": "An identifier for a dcterms:Location.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "`https://opencontext.org/subjects/768A875F-E205-4D0B-DE55-BAB7598D0FD1`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/locationID"
        },
        {
          "name": "siteNumber",
          "title": "Site Number",
          "description": "An identifier (preferably globally unambiguous) for a named site.",
          "notes": "",
          "examples": "`USGS CENO LOC 21387`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/siteNumber"
        },
        {
          "name": "higherGeographyID",
          "title": "Higher Geography ID",
          "description": "An identifier for the geographic region within which the dcterms:Location occurred.",
          "notes": "Recommended best practice is to use a persistent identifier from a controlled vocabulary such as the Getty Thesaurus of Geographic Names.",
          "examples": "`http://vocab.getty.edu/tgn/1002002` (Antártida e Islas del Atlántico Sur, Territorio Nacional de la Tierra del Fuego, Argentina).",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/higherGeographyID"
        },
        {
          "name": "higherGeography",
          "title": "Higher Geography",
          "description": "A list (concatenated and separated) of geographic names less specific than the information captured in the dwc:locality term.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `), with terms in order from least specific to most specific.",
          "examples": "`North Atlantic Ocean`; `South America | Argentina | Patagonia | Parque Nacional Nahuel Huapi | Neuquén | Los Lagos` with accompanying values `South America` (continent) `Argentina` (country), `Neuquén` (first order division), and `Los Lagos` (second order division)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/higherGeography"
        },
        {
          "name": "continent",
          "title": "Continent",
          "description": "The name of the continent in which the dcterms:Location occurs.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.",
          "examples": "`Africa`; `Antarctica`; `Asia`; `Europe`; `North America`; `Oceania`; `South America`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/continent"
        },
        {
          "name": "waterBody",
          "title": "Water Body",
          "description": "The name of the water body in which the dcterms:Location occurs.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.",
          "examples": "`Indian Ocean`; `Baltic Sea`; `Hudson River`; `Lago Nahuel Huapi`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/waterBody"
        },
        {
          "name": "islandGroup",
          "title": "Island Group",
          "description": "The name of the island group in which the dcterms:Location occurs.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.",
          "examples": "`Alexander Archipelago`; `Archipiélago Diego Ramírez`; `Seychelles`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/islandGroup"
        },
        {
          "name": "island",
          "title": "Island",
          "description": "The name of the island on or near which the dcterms:Location occurs.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names.",
          "examples": "`Nosy Be`; `Bikini Atoll`; `Vancouver`; `Viti Levu`; `Zanzibar`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/island"
        },
        {
          "name": "country",
          "title": "Country",
          "description": "The name of the country or major administrative unit in which the dcterms:Location occurs.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.",
          "examples": "`Denmark`; `Colombia`; `España`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/country"
        },
        {
          "name": "countryCode",
          "title": "Country Code",
          "description": "The standard code for the country in which the dcterms:Location occurs.",
          "notes": "Recommended best practice is to use an ISO 3166-1-alpha-2 country code, or 'ZZ' (for an unknown location or a location unassignable to a single country code), or 'XZ' (for the high seas beyond national jurisdictions). Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.",
          "examples": "`AR`; `SV`; `XZ`; `ZZ`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/countryCode"
        },
        {
          "name": "stateProvince",
          "title": "First Order Division",
          "description": "The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the dcterms:Location occurs.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.",
          "examples": "`Montana`; `Minas Gerais`; `Córdoba`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/stateProvince"
        },
        {
          "name": "county",
          "title": "Second Order Division",
          "description": "The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the dcterms:Location occurs.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.",
          "examples": "`Missoula`; `Los Lagos`; `Mataró`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/county"
        },
        {
          "name": "municipality",
          "title": "Municipality",
          "description": "The full, unabbreviated name of the next smaller administrative region than county (city, municipality, etc.) in which the dcterms:Location occurs. Do not use this term for a nearby named place that does not contain the actual dcterms:Location.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names. Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities at this administrative level or if the dcterms:Location might be in one or another of multiple possible entities at this level. Multiplicity and uncertainty of the geographic entity can be captured either in the term dwc:higherGeography or in the term dwc:locality, or both.",
          "examples": "`Holzminden`; `Araçatuba`; `Ga-Segonyana`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/municipality"
        },
        {
          "name": "locality",
          "title": "Locality",
          "description": "The specific description of the place.",
          "notes": "Less specific geographic information can be provided in other geographic terms (dwc:higherGeography, dwc:continent, dwc:country, dwc:stateProvince, dwc:county, dwc:municipality, dwc:waterBody, dwc:island, dwc:islandGroup). This term may contain information modified from the original to correct perceived errors or standardize the description.",
          "examples": "`Bariloche, 25 km NNE via Ruta Nacional 40 (=Ruta 237)`; `Queets Rainforest, Olympic National Park`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/locality"
        },
        {
          "name": "namedPlace",
          "title": "Named Place",
          "description": "The full, unabbreviated name of a geographic location not otherwise categorized by a dcterms:Location property that is naturally occurring or anthropogenic in origin within a historical, administrative, or cultural context in which a dcterms:Location occurs.",
          "notes": "Recommended best practice is to leave this field blank if the dcterms:Location spans multiple entities or may be in multiple possible entities that meet the term definition.  For named places represented as URIs or global unique identifiers, please use dwc:locationID.",
          "examples": "`11th Level, Bergwerksglücker Lode, Wiemannsbucht Mine`; `Craigleith Quarry`; `Red Cloud Mine`; `NEON Niwot Ridge Mountain Research Station (NIWO)`; `Hagerman Fossil Beds`; `Mauna Kea`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/namedPlace"
        },
        {
          "name": "minimumElevationInMeters",
          "title": "Minimum Elevation In Meters",
          "description": "The least elevation within a range of elevations, measured relative to the vertical reference surface indicated by the value of dwc:verticalDatum.",
          "notes": "See https://docs.gbif.org/georeferencing-best-practices/1.0/en/#img-depth-elevation-distance-above-surface.",
          "examples": "`-100`; `802`",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/minimumElevationInMeters"
        },
        {
          "name": "maximumElevationInMeters",
          "title": "Maximum Elevation In Meters",
          "description": "The greatest elevation within a range of elevations, measured relative to the vertical reference surface indicated by the value of dwc:verticalDatum.",
          "notes": "See https://docs.gbif.org/georeferencing-best-practices/1.0/en/#img-depth-elevation-distance-above-surface.",
          "examples": "`-205`; `1236`",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/maximumElevationInMeters"
        },
        {
          "name": "verticalDatum",
          "title": "Vertical Datum",
          "description": "The vertical datum used as the reference upon which the values in the elevation terms are based.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`EGM84`; `EGM96`; `EGM2008`; `PGM2000A`; `PGM2004`; `PGM2006`; `PGM2007`; `EPSG:7030`; `not recorded`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verticalDatum"
        },
        {
          "name": "minimumDepthInMeters",
          "title": "Minimum Depth In Meters",
          "description": "The least depth within a range of depths, measured relative to the vertical reference surface indicated by the value of dwc:verticalDatum.",
          "notes": "See https://docs.gbif.org/georeferencing-best-practices/1.0/en/#img-depth-elevation-distance-above-surface.",
          "examples": "`0`; `100`",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/minimumDepthInMeters",
          "constraints": {
            "minimum": 0,
            "maximum": 11000
          }
        },
        {
          "name": "maximumDepthInMeters",
          "title": "Maximum Depth In Meters",
          "description": "The greatest depth within a range of depths, measured relative to the vertical reference surface indicated by the value of dwc:verticalDatum.",
          "notes": "See https://docs.gbif.org/georeferencing-best-practices/1.0/en/#img-depth-elevation-distance-above-surface.",
          "examples": "`0`; `200`",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/maximumDepthInMeters",
          "constraints": {
            "minimum": 0,
            "maximum": 11000
          }
        },
        {
          "name": "minimumDistanceAboveSurfaceInMeters",
          "title": "Minimum Distance Above Surface In Meters",
          "description": "The lesser distance in a range of distance from a reference surface in the vertical direction, in meters. Use positive values for locations above the surface, negative values for locations below. If depth measures are given, the reference surface is the location given by the depth, otherwise the reference surface is the location given by the elevation.",
          "notes": "See https://docs.gbif.org/georeferencing-best-practices/1.0/en/#img-depth-elevation-distance-above-surface.",
          "examples": "`-1.5` (below the surface); `4.2` (above the surface); For a 1.5 meter sediment core from the bottom of a lake (at depth 20m) at 300m elevation: verbatimElevation: `300m` minimumElevationInMeters: `300`, maximumElevationInMeters: `300`, verbatimDepth: `20m`, minimumDepthInMeters: `20`, maximumDepthInMeters: `20`, minimumDistanceAboveSurfaceInMeters: `0`, maximumDistanceAboveSurfaceInMeters: `-1.5`.",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/minimumDistanceAboveSurfaceInMeters"
        },
        {
          "name": "maximumDistanceAboveSurfaceInMeters",
          "title": "Maximum Distance Above Surface In Meters",
          "description": "The greater distance in a range of distance from a reference surface in the vertical direction, in meters. Use positive values for locations above the surface, negative values for locations below. If depth measures are given, the reference surface is the location given by the depth, otherwise the reference surface is the location given by the elevation.",
          "notes": "See https://docs.gbif.org/georeferencing-best-practices/1.0/en/#img-depth-elevation-distance-above-surface.",
          "examples": "`-1.5` (below the surface); `4.2` (above the surface); For a 1.5 meter sediment core from the bottom of a lake (at depth 20m) at 300m elevation: verbatimElevation: `300m` minimumElevationInMeters: `300`, maximumElevationInMeters: `300`, verbatimDepth: `20m`, minimumDepthInMeters: `20`, maximumDepthInMeters: `20`, minimumDistanceAboveSurfaceInMeters: `0`, maximumDistanceAboveSurfaceInMeters: `-1.5`.",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/maximumDistanceAboveSurfaceInMeters"
        },
        {
          "name": "locationAccordingTo",
          "title": "Location According To",
          "description": "Information about the source of this dcterms:Location information. Could be a publication (gazetteer), institution, or team of individuals.",
          "notes": "This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Getty Thesaurus of Geographic Names`; `GADM`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/locationAccordingTo"
        },
        {
          "name": "locationRemarks",
          "title": "Location Remarks",
          "description": "Comments or notes about the dcterms:Location.",
          "notes": "",
          "examples": "`under water since 2005`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/locationRemarks"
        },
        {
          "name": "decimalLatitude",
          "title": "Decimal Latitude",
          "description": "A geographic latitude (in decimal degrees, using the spatial reference system given in dwc:geodeticDatum) of a dcterms:Location.",
          "notes": "Positive values are north of the Equator, negative values are south of it. Valid values lie between -90 and 90, inclusive.",
          "examples": "`-41.0983423`",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/decimalLatitude",
          "constraints": {
            "minimum": -90,
            "maximum": 90
          }
        },
        {
          "name": "decimalLongitude",
          "title": "Decimal Longitude",
          "description": "A geographic longitude (in decimal degrees, using the spatial reference system given in dwc:geodeticDatum) of a dcterms:Location.",
          "notes": "Positive values are east of the Greenwich Meridian, negative values are west of it. Valid values lie between -180 and 180, inclusive.",
          "examples": "`-121.1761111`",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/decimalLongitude",
          "constraints": {
            "minimum": -180,
            "maximum": 180
          }
        },
        {
          "name": "geodeticDatum",
          "title": "Geodetic Datum",
          "description": "The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in dwc:decimalLatitude and dwc:decimalLongitude are based.",
          "notes": "Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value `not recorded`. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for a string literal value.",
          "examples": "`EPSG:4326`; `WGS84`; `NAD27`; `Campo Inchauspe`; `European 1950`; `Clarke 1866`; `not recorded`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geodeticDatum"
        },
        {
          "name": "coordinateUncertaintyInMeters",
          "title": "Coordinate Uncertainty In Meters",
          "description": "A horizontal distance (in meters) from a given dwc:decimalLatitude and dwc:decimalLongitude describing the smallest circle containing the whole of the dcterms:Location. Zero is not a valid value for this term.",
          "notes": "Leave the value empty if the uncertainty is unknown, cannot be estimated, or is not applicable (because there are no coordinates).",
          "examples": "`30` (reasonable lower limit on or after 2000-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time); `100` (reasonable lower limit before 2000-05-01 of a GPS reading under good conditions if the actual precision was not recorded at the time); `71` (uncertainty for a UTM coordinate having 100 meter precision and a known spatial reference system)",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters",
          "constraints": {
            "minimum": 1,
            "maximum": 20037509
          }
        },
        {
          "name": "coordinatePrecision",
          "title": "Coordinate Precision",
          "description": "A decimal representation of the precision of the coordinates given in the dwc:decimalLatitude and dwc:decimalLongitude.",
          "notes": "",
          "examples": "`0.00001` (normal GPS limit for decimal degrees); `0.000278` (nearest second); `0.01667` (nearest minute); `1.0` (nearest degree)",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/coordinatePrecision"
        },
        {
          "name": "pointRadiusSpatialFit",
          "title": "Point Radius Spatial Fit",
          "description": "A ratio of the area of a point-radius (dwc:decimalLatitude, dwc:decimalLongitude, dwc:coordinateUncertaintyInMeters) to the area of a true (original, or most specific) spatial representation of a dcterms:Location.",
          "notes": "Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given point-radius does not completely contain the original representation. The pointRadiusSpatialFit is undefined (and should be left empty) if the original representation is any geometry without area (e.g., a point or polyline) and without uncertainty and the given georeference is not that same geometry (without uncertainty). If both the original and the given georeference are the same point, the pointRadiusSpatialFit is 1. Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (https://doi.org/10.15468/doc-gg7h-s853).",
          "examples": "`0`; `1`; `1.5708`",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/pointRadiusSpatialFit",
          "constraints": {
            "minimum": 0
          }
        },
        {
          "name": "footprintWKT",
          "title": "Footprint WKT",
          "description": "A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines a dcterms:Location.",
          "notes": "A dcterms:Location may have both a point-radius representation (see dwc:decimalLatitude) and a footprint representation, and they may differ from each other.",
          "examples": "`POLYGON ((10 20, 11 20, 11 21, 10 21, 10 20))` (the one-degree bounding box with opposite corners at longitude=10, latitude=20 and longitude=11, latitude=21)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/footprintWKT"
        },
        {
          "name": "footprintSRS",
          "title": "Footprint SRS",
          "description": "The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geometry given in dwc:footprintWKT is based.",
          "notes": "Recommended best practice is to use the EPSG code of the SRS, if known. Otherwise use a controlled vocabulary for the name or code of the geodetic datum, if known. Otherwise use a controlled vocabulary for the name or code of the ellipsoid, if known. If none of these is known, use the value `not recorded`. It is also permitted to provide the SRS in Well-Known-Text, especially if no EPSG code provides the necessary values for the attributes of the SRS. Do not use this term to describe the SRS of the dwc:decimalLatitude and dwc:decimalLongitude, nor of any verbatim coordinates - use the dwc:geodeticDatum and dwc:verbatimSRS instead. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`EPSG:4326`; `GEOGCS[\"GCS_WGS_1984\", DATUM[\"D_WGS_1984\", SPHEROID[\"WGS_1984\",6378137,298.257223563]], PRIMEM[\"Greenwich\",0], UNIT[\"Degree\",0.0174532925199433]]` (WKT for the standard WGS84 Spatial Reference System EPSG:4326); `not recorded`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/footprintSRS"
        },
        {
          "name": "footprintSpatialFit",
          "title": "Footprint Spatial Fit",
          "description": "A ratio of the area of a footprint (dwc:footprintWKT) to the area of a true (original, or most specific) spatial representation of a dcterms:Location.",
          "notes": "Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given footprint does not completely contain the original representation. A dwc:footprintSpatialFit is undefined (and should be left empty) if the original representation is any geometry without area (e.g., a point or polyline) and without uncertainty and the given georeference is not that same geometry (without uncertainty). If both the original and the given georeference are the same point, a dwc:footprintSpatialFit is 1. Detailed explanations with graphical examples can be found in the Georeferencing Best Practices, Chapman and Wieczorek, 2020 (https://doi.org/10.15468/doc-gg7h-s853).",
          "examples": "`0`; `1`; `1.5708`",
          "type": "number",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/footprintSpatialFit"
        },
        {
          "name": "georeferencedBy",
          "title": "Georeferenced By",
          "description": "A name for a dcterms:Agent responsible for providing a georeference.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Brad Millen (ROM)`; `Kristina Yamamoto | Janet Fang`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/georeferencedBy"
        },
        {
          "name": "georeferencedBy_fk",
          "title": "Georeferenced By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for determining a georeference for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "georeferencedByID",
          "title": "Georeferenced By ID",
          "description": "An identifier for a dcterms:Agent responsible for determining a georeference for a dwc:Event.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "georeferencedDate",
          "title": "Georeferenced Date",
          "description": "The date on which the dcterms:Location was georeferenced.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/georeferencedDate"
        },
        {
          "name": "georeferenceProtocol",
          "title": "Georeference Protocol",
          "description": "A description or reference to a dwc:Protocol used to determine a spatial footprint, coordinates, and uncertainties.",
          "notes": "This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Georeferencing Quick Reference Guide (Zermoglio et al. 2020, https://doi.org/10.35035/e09p-h128)`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/georeferenceProtocol"
        },
        {
          "name": "georeferenceProtocol_fk",
          "title": "Georeference Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to determine a spatial footprint, coordinates, and uncertainties.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "georeferenceSources",
          "title": "Georeference Sources",
          "description": "A list (concatenated and separated) of maps, gazetteers, or other resources used to georeference a dcterms:Location, described specifically enough to allow anyone in the future to use the same resources.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`GeoLocate`; `GeoPick`; `https://www.geonames.org/`; `USGS 1:24000 Florence Montana Quad 1967 | Terrametrics 2008 on Google Earth`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/georeferenceSources"
        },
        {
          "name": "georeferenceRemarks",
          "title": "Georeference Remarks",
          "description": "Comments or notes about the spatial description determination, explaining assumptions made in addition or opposition to the those formalized in the method referred to in dwc:georeferenceProtocol.",
          "notes": "",
          "examples": "`Assumed distance by road (Hwy. 101)`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/georeferenceRemarks"
        },
        {
          "name": "preferredSpatialRepresentation",
          "title": "Preferred Spatial Representation",
          "description": "An indication of which spatial representation best represents the dcterms:Location.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`point-radius`; `footprint`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/preferredSpatialRepresentation"
        },
        {
          "name": "informationWithheld",
          "title": "Information Withheld",
          "description": "Additional information that exists about a resource, but that is not shared publicly. Suggests that alternative data of higher quality may be available on request.",
          "notes": "This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`location information not given for endangered species`; `collector identities withheld | ask about tissue samples`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/informationWithheld"
        },
        {
          "name": "dataGeneralizations",
          "title": "Data Generalizations",
          "description": "Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.",
          "notes": "This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Coordinates generalized from original GPS coordinates to the nearest half degree grid cell.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/dataGeneralizations"
        },
        {
          "name": "feedbackURL",
          "title": "Feedback URL",
          "description": "A uniform resource locator (URL) that points to a webpage on which a form may be submitted to gather feedback about the record.",
          "notes": "Recommended best practice is to optionally include query strings that act to pre-populate web page form elements and communicate the context.",
          "examples": "`https://example.com/new?title=New+issue&body=This+comment+is+about+CAN12345`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/feedbackURL"
        }
      ],
      "primaryKey": "event_pk",
      "weakPrimaryKey": "eventID",
      "foreignKeys": [
        {
          "fields": "parentEvent_fk",
          "predicate": "happened during",
          "reference": {
            "resource": "",
            "fields": "event_pk"
          }
        },
        {
          "fields": "eventProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "provenance_fk",
          "predicate": "has",
          "reference": {
            "resource": "provenance",
            "fields": "provenance_pk"
          }
        },
        {
          "fields": "recordedBy_fk",
          "predicate": "recorded by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "geologicalContext_fk",
          "predicate": "within",
          "reference": {
            "resource": "geological-context",
            "fields": "geologicalContext_pk"
          }
        },
        {
          "fields": "georeferencedBy_fk",
          "predicate": "georeferenced by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "georeferenceProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "recordedByID",
          "predicate": "recorded by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "geologicalContextID",
          "predicate": "within",
          "reference": {
            "resource": "geological-context",
            "fields": "geologicalContextID"
          }
        },
        {
          "fields": "georeferencedByID",
          "predicate": "georeferenced by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "event-agent-role": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/event-agent-role",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/event-agent-role.json",
      "name": "event-agent-role",
      "title": "Event Agent Role",
      "description": "A role filled by a dcterms:Agent with respect to a dwc:Event.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//event-agent-role",
      "fields": [
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agentRole",
          "title": "Agent Role",
          "description": "A category that best matches the nature of a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary for the roles appropriate to the class of resource a dcterms:AgentRole is related to.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "agentRoleIRI",
          "title": "Agent Role IRI",
          "description": "An IRI of the controlled vocabulary value for a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "agentRoleSource",
          "title": "Agent Role Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:agentRole is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "agentRoleOrder",
          "title": "Agent Role Order",
          "description": "A numerical position of an AgentRole in a set of AgentRoles that have the same combination of agentRole, agentRoleIRI, agentRoleSource and related target identifier.",
          "notes": "One could use dwc:agentRoleOrder to create an ordered list of collectors (dwc:agentRole = 'collector') for a dwc:MaterialEntity, for example. The first would have dwc:agentRoleOrder=1, the second would have dwc:agentRoleOrder=2.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRoleOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "agentRoleDate",
          "title": "Agent Role Date",
          "description": "An interval during which a dcterms:AgentRole was in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        }
      ],
      "foreignKeys": [
        {
          "fields": "event_fk",
          "predicate": "role for",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        },
        {
          "fields": "agent_fk",
          "predicate": "role holder",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "event-assertion": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/event-assertion",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/event-assertion.json",
      "name": "event-assertion",
      "title": "Event Assertion",
      "description": "A dwc:Assertion made by a dcterms:Agent about a dwc:Event.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
      "fields": [
        {
          "name": "assertionID",
          "title": "Assertion ID",
          "description": "An identifier for a dwc:Assertion.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionID",
          "constraints": {
            "required": false,
            "unique": true
          }
        },
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimAssertionType",
          "title": "Verbatim Assertion Type",
          "description": "A string representing the type of dwc:Assertion as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original name for a dwc:assertionType. This term is meant to be used in addition to dwc:assertionType, not instead of it.",
          "examples": "`water_temp`; `Fish biomass`; `sampling net mesh size`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimAssertionType"
        },
        {
          "name": "assertionType",
          "title": "Assertion Type",
          "description": "A category that best matches the nature of a dwc:Assertion.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`tail length`; `temperature`; `trap line length`; `survey area`; `trap type`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionType"
        },
        {
          "name": "assertionTypeIRI",
          "title": "Assertion Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementType"
        },
        {
          "name": "assertionTypeSource",
          "title": "Assertion Type Source",
          "description": "A reference to the controlled vocabulary in which the definition of a value in dwc:assertionType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionMadeDate",
          "title": "Assertion Made Date",
          "description": "A date on which a dwc:Assertion was created.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionMadeDate"
        },
        {
          "name": "assertionEffectiveDate",
          "title": "Assertion Effective Date",
          "description": "A date-time or time interval during which an asserted state or measurement was deemed to be in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        },
        {
          "name": "assertionValue",
          "title": "Assertion Value",
          "description": "An asserted value.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionValue"
        },
        {
          "name": "assertionValueIRI",
          "title": "Assertion Value IRI",
          "description": "An IRI of the controlled vocabulary value for a value of a dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementValue"
        },
        {
          "name": "assertionValueSource",
          "title": "Assertion Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:assertionValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionUnit",
          "title": "Assertion Unit",
          "description": "Unit associated with the value in dwc:assertionValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure http://www.wurvoc.org/vocabularies/om-1.8/ of SI units, derived units, or other non-SI units accepted for use within the SI. For units that are composed of multiple parts, use the patterns as given in \"A Primer for Communicating Mathematics via Plain Text\" (https://cse.sc.edu/~fenner/latex-ASCII.pdf) by Stephen Fenner (e.g., `g/cm^3` for grams per cubic centimeter). For other units, provide the value as a recognizable standard (e.g., '%') or written out in full and in the plural (e.g., `individuals`). It is fine to provide non-SI units in the original language of the dataset.",
          "examples": "`m`; `s`; `g`; `ml`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionUnit"
        },
        {
          "name": "assertionUnitIRI",
          "title": "Assertion Unit IRI",
          "description": "An IRI of a controlled vocabulary value for the unit of a dwc:assertionValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/assertionUnit"
        },
        {
          "name": "assertionUnitSource",
          "title": "Assertion Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of the value in dwc:assertionUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionError",
          "title": "Assertion Error",
          "description": "A description of the potential error associated with a dwc:assertionValue.",
          "notes": "",
          "examples": "`0.01`; `normal distribution with variation of 2 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionError"
        },
        {
          "name": "assertionBy",
          "title": "Assertion By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for making a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionBy"
        },
        {
          "name": "assertionBy_fk",
          "title": "Assertion By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionByID",
          "title": "Assertion By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionProtocols",
          "title": "Assertion Protocols",
          "description": "Names of, references to, or descriptions of dwc:Protocols used in making a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionProtocols"
        },
        {
          "name": "assertionProtocol_fk",
          "title": "Assertion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to make a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionReferences",
          "title": "Assertion References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionReferences"
        },
        {
          "name": "assertionRemarks",
          "title": "Assertion Remarks",
          "description": "Comments or notes about a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionRemarks"
        }
      ],
      "weakPrimaryKey": "assertionID",
      "foreignKeys": [
        {
          "fields": "event_fk",
          "predicate": "about",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        },
        {
          "fields": "assertionBy_fk",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "assertionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "assertionByID",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "event-identifier": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/event-identifier",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/event-identifier.json",
      "name": "event-identifier",
      "title": "Event Identifier",
      "description": "An adms:Identifier for a dwc:Event.",
      "notes": "An important point to note is that properties of the adms:Identifier class are properties of the Identifier, not the resource that it identifies or the agency that issued it.",
      "examples": "",
      "namespace": "adms",
      "dcterms:isVersionOf": "http://www.w3.org/ns/adms#Identifier",
      "fields": [
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "description": "An unambiguous reference to a resource within a given context.",
          "notes": "Recommended best practice is to identify a resource by means of a string conforming to a formal identification system.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "skos",
          "dcterms:isVersionOf": "http://www.w3.org/2004/02/skos/core#notation",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifierType",
          "title": "Identifier Type",
          "description": "A category or system that best matches the nature of an identifier (skos:notation).",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/type"
        },
        {
          "name": "identifierTypeIRI",
          "title": "Identifier Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of identifier.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "identifierTypeSource",
          "title": "Identifier Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:identifierType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "identifierLanguage",
          "title": "Identifier Language",
          "description": "A language in which an identifier is presented.",
          "notes": "Recommended best practice is to use an ISO639-2 three-letter language code.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/language"
        }
      ],
      "foreignKeys": [
        {
          "fields": "event_fk",
          "predicate": "for",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        }
      ]
    },
    "event-media": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/event-media",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/event-media.json",
      "name": "event-media",
      "title": "Event Media",
      "description": "A dwc:Event as content in an ac:Media entity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//event-media",
      "fields": [
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "subjectCategory",
          "title": "Subject Category",
          "description": "A term to describe the content of a image or a region of interest within an image using a controlled value string.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/CVtermLiteral"
        },
        {
          "name": "subjectCategoryIRI",
          "title": "Subject Category IRI",
          "description": "An IRI of a controlled vocabulary value for the subject category of an ac:Media resource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "Iptc4xmpExt",
          "dcterms:isVersionOf": "http://iptc.org/std/Iptc4xmpExt/2008-02-29/CVterm"
        },
        {
          "name": "subjectCategoryVocabulary",
          "title": "Subject Category Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:subjectCategory is given.",
          "notes": "The Audiovisual Core recommended vocabularies do not need to be cited here. There is no required linkage between individual Subject Category terms and the vocabulary; the mechanism is intended to support discovery of the normative URI for a term, but not guarantee it.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectCategoryVocabulary"
        },
        {
          "name": "subjectPartLiteral",
          "title": "Subject Part Literal",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectPart. It is best practice to use ac:subjectPart instead of ac:subjectPartLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPartLiteral"
        },
        {
          "name": "subjectPart",
          "title": "Subject Part",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by an IRI.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPart"
        },
        {
          "name": "subjectOrientationLiteral",
          "title": "Subject Orientation Literal",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectOrientation. It is best practice to use ac:subjectOrientation instead of ac:subjectOrientationLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientationLiteral"
        },
        {
          "name": "subjectOrientation",
          "title": "Subject Orientation",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientation"
        },
        {
          "name": "physicalSetting",
          "title": "Physical Setting",
          "description": "The setting of the content represented in an ac:Media resource, such as images, sounds, and movies if the provider deems them relevant.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/physicalSetting"
        }
      ],
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "this media instance",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "event_fk",
          "predicate": "about",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        }
      ]
    },
    "event-protocol": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/event-protocol",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/event-protocol.json",
      "name": "event-protocol",
      "title": "Event Protocol",
      "description": "A dwc:Protocol used for a dwc:Event.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//event-protocol",
      "fields": [
        {
          "name": "protocol_fk",
          "title": "Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "protocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "event_fk",
          "predicate": "used during",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        }
      ]
    },
    "event-provenance": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/event-provenance",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/event-provenance.json",
      "name": "event-provenance",
      "title": "Event Provenance",
      "description": "A dwc:Provenance for a dwc:Event.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//event-provenance",
      "fields": [
        {
          "name": "provenance_fk",
          "title": "Provenance (Foreign Key)",
          "description": "An identifier for a dwc:Provenance.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/provenanceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "provenance_fk",
          "predicate": "has",
          "reference": {
            "resource": "provenance",
            "fields": "provenance_pk"
          }
        },
        {
          "fields": "event_fk",
          "predicate": "for",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        }
      ]
    },
    "event-reference": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/event-reference",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/event-reference.json",
      "name": "event-reference",
      "title": "Event Reference",
      "description": "A dcterms:BibliographicResource related to a dwc:Event.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//event-reference",
      "fields": [
        {
          "name": "reference_fk",
          "title": "Reference (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource to a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`cited in`; `referenced`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        }
      ],
      "foreignKeys": [
        {
          "fields": "reference_fk",
          "predicate": "mentioned in",
          "reference": {
            "resource": "bibliographic-resource",
            "fields": "reference_pk"
          }
        },
        {
          "fields": "event_fk",
          "predicate": "mentioned",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        }
      ]
    },
    "event-usage-policy": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/event-usage-policy",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/event-usage-policy.json",
      "name": "event-usage-policy",
      "title": "Event Usage Policy",
      "description": "Rights, usage, and attribution statements applicable to a dwc:MaterialEntity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//event-usage-policy",
      "fields": [
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "usagePolicy_fk",
          "title": "Usage Policy (Foreign Key)",
          "description": "An identifier for a dwc:UsagePolicy.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/usagePolicyID",
          "constraints": {
            "required": false,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "event_fk",
          "predicate": "for",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        },
        {
          "fields": "usagePolicy_fk",
          "predicate": "has",
          "reference": {
            "resource": "usage-policy",
            "fields": "usagePolicy_pk"
          }
        }
      ]
    },
    "geological-context": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/geological-context",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/geological-context.json",
      "name": "geological-context",
      "title": "Geological Context",
      "description": "A set of geological designations, such as stratigraphy, that qualify a dcterms:Location or source of a dwc:MaterialEntity.",
      "notes": "",
      "examples": "`a particular lithostratigraphic layer`; `a specific chronostratigraphic unit`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/GeologicalContext",
      "fields": [
        {
          "name": "geologicalContext_pk",
          "title": "Geological Context (Primary Key)",
          "description": "A unique identifier for a dwc:GeologicalContext.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "`https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicalContextID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "geologicalContextID",
          "title": "Geological Context ID",
          "description": "An identifier for a dwc:GeologicalContext.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "`https://opencontext.org/subjects/e54377f7-4452-4315-b676-40679b10c4d9`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicalContextID"
        },
        {
          "name": "earliestEonOrLowestEonothem",
          "title": "Earliest Eon Or Lowest Eonothem",
          "description": "The full name of the earliest possible geochronologic eon or lowest chronostratigraphic eonothem or the informal name attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Phanerozoic`; `Proterozoic`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/earliestEonOrLowestEonothem"
        },
        {
          "name": "latestEonOrHighestEonothem",
          "title": "Latest Eon Or Highest Eonothem",
          "description": "The full name of the latest possible geochronologic eon or highest chronostratigraphic eonothem or the informal name attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Phanerozoic`; `Proterozoic`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/latestEonOrHighestEonothem"
        },
        {
          "name": "earliestEraOrLowestErathem",
          "title": "Earliest Era Or Lowest Erathem",
          "description": "The full name of the earliest possible geochronologic era or lowest chronostratigraphic erathem attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Cenozoic`; `Mesozoic`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/earliestEraOrLowestErathem"
        },
        {
          "name": "latestEraOrHighestErathem",
          "title": "Latest Era Or Highest Erathem",
          "description": "The full name of the latest possible geochronologic era or highest chronostratigraphic erathem attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Cenozoic`; `Mesozoic`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/latestEraOrHighestErathem"
        },
        {
          "name": "earliestPeriodOrLowestSystem",
          "title": "Earliest Period Or Lowest System",
          "description": "The full name of the earliest possible geochronologic period or lowest chronostratigraphic system attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Neogene`; `Tertiary`; `Quaternary`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/earliestPeriodOrLowestSystem"
        },
        {
          "name": "latestPeriodOrHighestSystem",
          "title": "Latest Period Or Highest System",
          "description": "The full name of the latest possible geochronologic period or highest chronostratigraphic system attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Neogene`; `Tertiary`; `Quaternary`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/latestPeriodOrHighestSystem"
        },
        {
          "name": "earliestEpochOrLowestSeries",
          "title": "Earliest Epoch Or Lowest Series",
          "description": "The full name of the earliest possible geochronologic epoch or lowest chronostratigraphic series attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Holocene`; `Pleistocene`; `Ibexian Series`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/earliestEpochOrLowestSeries"
        },
        {
          "name": "latestEpochOrHighestSeries",
          "title": "Latest Epoch Or Highest Series",
          "description": "The full name of the latest possible geochronologic epoch or highest chronostratigraphic series attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Holocene`; `Pleistocene`; `Ibexian Series`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/latestEpochOrHighestSeries"
        },
        {
          "name": "earliestAgeOrLowestStage",
          "title": "Earliest Age Or Lowest Stage",
          "description": "The full name of the earliest possible geochronologic age or lowest chronostratigraphic stage attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Atlantic`; `Boreal`; `Skullrockian`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/earliestAgeOrLowestStage"
        },
        {
          "name": "latestAgeOrHighestStage",
          "title": "Latest Age Or Highest Stage",
          "description": "The full name of the latest possible geochronologic age or highest chronostratigraphic stage attributable to the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Atlantic`; `Boreal`; `Skullrockian`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/latestAgeOrHighestStage"
        },
        {
          "name": "lowestBiostratigraphicZone",
          "title": "Lowest Biostratigraphic Zone",
          "description": "The full name of the lowest possible geological biostratigraphic zone of the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Maastrichtian`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/lowestBiostratigraphicZone"
        },
        {
          "name": "highestBiostratigraphicZone",
          "title": "Highest Biostratigraphic Zone",
          "description": "The full name of the highest possible geological biostratigraphic zone of the stratigraphic horizon from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Blancan`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/highestBiostratigraphicZone"
        },
        {
          "name": "lithostratigraphicTerms",
          "title": "Lithostratigraphic Terms",
          "description": "The combination of all lithostratigraphic names for the rock from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Pleistocene-Weichselien`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/lithostratigraphicTerms"
        },
        {
          "name": "group",
          "title": "Group",
          "description": "The full name of the lithostratigraphic group from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Bathurst`; `Lower Wealden`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/group"
        },
        {
          "name": "formation",
          "title": "Formation",
          "description": "The full name of the lithostratigraphic formation from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Notch Peak Formation`; `House Limestone`; `Fillmore Formation`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/formation"
        },
        {
          "name": "member",
          "title": "Member",
          "description": "The full name of the lithostratigraphic member from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Lava Dam Member`; `Hellnmaria Member`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/member"
        },
        {
          "name": "bed",
          "title": "Bed",
          "description": "The full name of the lithostratigraphic bed from which the dwc:MaterialEntity was collected.",
          "notes": "",
          "examples": "`Harlem coal`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/bed"
        },
        {
          "name": "geologicEvent",
          "title": "Geologic Event",
          "description": "A name of an identifiable event during which one or more geologic processes acted to create or modify one or more dwc:GeologicalMaterials.",
          "notes": "This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Sevier orogeny`; `Alleghanian orogeny`; `Alpine orogeny`; `Variscan orogeny`; `Vredefort impact`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicEvent"
        },
        {
          "name": "geologicProvince",
          "title": "Geologic Province",
          "description": "An extensive named region with similar geologic history, structural, petrographic, or physiographic features throughout in which the GeologicalContext was located.",
          "notes": "This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Northwest Province`; `Surprise Paleovalley`; `Basin and Range` ;`Coastal Plain`; `Piedmont`; `Blue Ridge`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicProvince"
        },
        {
          "name": "lithodemicUnit",
          "title": "Lithodemic Unit",
          "description": "A geologic unit that lacks stratification, is primarily comprised of intrusive, deformed, and/or metamorphosed rock, and is characterized by irregularly mixed lithology or highly complicated structural relations.",
          "notes": "Due to the unstructured nature of complexes, both named units and lithological descriptive terms are acceptable values.",
          "examples": "`Catalina Core Complex`; `injection complex`; `New England Plutonic Suite`; `Sierra Nevada batholith`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/lithodemicUnit"
        },
        {
          "name": "tectonicUnits",
          "title": "Tectonic Units",
          "description": "The combination of all tectonic unit names for the rock from which a dwc:MaterialEntity was collected.",
          "notes": "Recommended best practice is to use an authoritative tectonic unit lexicon such as the Tectonic Map of Switzerland (TK500). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Upper Helvetic`; `Wildhorn Nappe Complex`; `Sublage Nappe`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/tectonicUnits"
        }
      ],
      "primaryKey": "geologicalContext_pk",
      "weakPrimaryKey": "geologicalContextID"
    },
    "geological-context-media": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/geological-context-media",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/geological-context-media.json",
      "name": "geological-context-media",
      "title": "Geological Context Media",
      "description": "A dwc:GeologicalContext as content in an ac:Media entity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//geological-context-media",
      "fields": [
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "geologicalContext_fk",
          "title": "Geological Context (Foreign Key)",
          "description": "An identifier for a dwc:GeologicalContext.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicalContextID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "subjectCategory",
          "title": "Subject Category",
          "description": "A term to describe the content of a image or a region of interest within an image using a controlled value string.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/CVtermLiteral"
        },
        {
          "name": "subjectCategoryIRI",
          "title": "Subject Category IRI",
          "description": "An IRI of a controlled vocabulary value for the subject category of an ac:Media resource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "Iptc4xmpExt",
          "dcterms:isVersionOf": "http://iptc.org/std/Iptc4xmpExt/2008-02-29/CVterm"
        },
        {
          "name": "subjectCategoryVocabulary",
          "title": "Subject Category Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:subjectCategory is given.",
          "notes": "The Audiovisual Core recommended vocabularies do not need to be cited here. There is no required linkage between individual Subject Category terms and the vocabulary; the mechanism is intended to support discovery of the normative URI for a term, but not guarantee it.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectCategoryVocabulary"
        },
        {
          "name": "subjectPartLiteral",
          "title": "Subject Part Literal",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectPart. It is best practice to use ac:subjectPart instead of ac:subjectPartLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPartLiteral"
        },
        {
          "name": "subjectPart",
          "title": "Subject Part",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by an IRI.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPart"
        },
        {
          "name": "subjectOrientationLiteral",
          "title": "Subject Orientation Literal",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectOrientation. It is best practice to use ac:subjectOrientation instead of ac:subjectOrientationLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientationLiteral"
        },
        {
          "name": "subjectOrientation",
          "title": "Subject Orientation",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientation"
        },
        {
          "name": "physicalSetting",
          "title": "Physical Setting",
          "description": "The setting of the content represented in an ac:Media resource, such as images, sounds, and movies if the provider deems them relevant.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/physicalSetting"
        }
      ],
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "this media instance",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "geologicalContext_fk",
          "predicate": "about",
          "reference": {
            "resource": "geological-context",
            "fields": "geologicalContext_pk"
          }
        }
      ]
    },
    "geological-material": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/geological-material",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/geological-material.json",
      "name": "geological-material",
      "title": "Geological Material",
      "description": "A dwc:MaterialEntity that is geological in nature.",
      "notes": "",
      "examples": "`a specific mineral`; `a specific rock`; `a specific ore`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/GeologicalMaterial",
      "fields": [
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "A unique identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "materialEntityID",
          "title": "Material Entity ID",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "`06809dc5-f143-459a-be1a-6f03e63fc083`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID"
        },
        {
          "name": "geologicalMaterialNames",
          "title": "Geological Material Names",
          "description": "A list (concatenated and separated) of mineral or lithotaxon names for a dwc:GeologicalMaterial.",
          "notes": "May includes both informal (e.g., variety, synonym) and formal (classification) names. The first name in the list should be considered the preferred name. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`quartz | smoky quartz`; `muscovite`; `garnet group`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicalMaterialNames"
        },
        {
          "name": "geologicMaterialNameID",
          "title": "Geologic Material Name ID",
          "description": "An identifier for a mineral or lithotaxon name for a dwc:GeologicalMaterial. May be a global unique identifier or an identifier specific to the data set.",
          "notes": "Recommended best practice is to use a persistent, globally unique identifier.",
          "examples": "`https://geospecimens.org/api/v1/catalog/resource/mineral-name/ba673bdf-7228-11f0-a057-52f8e1bb0628`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicMaterialNameID"
        },
        {
          "name": "geologicalMaterialNameTypes",
          "title": "Geological Material Name Types",
          "description": "A list (concatenated and separated) of the types of names provided in dwc:geologicalMaterialNames.",
          "notes": "If this term is populated, it should have an equal number of items in the list as for the list in dwc:geologicalMaterialNames and the types should have the same order as the names to which they refer. Recommended best practice is to use a controlled vocabulary for the values in a list (e.g., https://kos.geospecimens.org/def/geological-specimen-name-type). See Gavryliv (2023), https://doi.org/10.1180/mgm.2023.23, for a detailed breakdown of informal, alternate names.",
          "examples": "`species | variety`; `species`; `group`;  `synonym`; `classification`; `historical`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicalMaterialNameTypes"
        },
        {
          "name": "classificationCodes",
          "title": "Classification Codes",
          "description": "A list (concatenated and separated) of codes that each identifies a name from a classification system applied to a dwc:GeologicalMaterial.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`71.02.02a.01` (\"muscovite\" in the Dana classification system); `9.AD.25` (\"garnet group\" in the Nickel-Strunz classification system); `75.01.03.01 | 4.DA.05` (\"quartz\" the Dana classification system and \"quartz group\" in the Nickel-Strunz classification system)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/classificationCodes"
        },
        {
          "name": "mineralSequence",
          "title": "Mineral Sequence",
          "description": "A list (concatenated and separated) of minerals in a dwc:GeologicalMaterial, ordered in a manner that illustrates the relative timing of mineral formation.",
          "notes": "The list should only contain minerals that belong to a readily identifiable sequence of formation. Therefore, a list may contain a subset of the minerals in a specimen. Minerals that formed in-situ with one another are separated by a plus. Minerals that formed in the sequence are separated by a greater than (' > ') symbol.",
          "examples": "`Sphalerite > Quartz > Pyrite`; `Calcite > Quartz > Sphalerite > Pyrite`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/mineralSequence"
        },
        {
          "name": "measuredChemistry",
          "title": "Measured Chemistry",
          "description": "A concise expression of the chemical composition of a mineral that shows the number of atoms of each element in a molecule, their spatial arrangement, and their linkage to each other.",
          "notes": "",
          "examples": "`SiO2 (65.76)`; `TiO2 (32.120)`; `Al2O3 (2.21)`; `(Mg0.77Fe0.23)2SiO4`; `An6.4 Ab73.6 Or20`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/measuredChemistry"
        },
        {
          "name": "measuredChemistrySource",
          "title": "Measured Chemistry Source",
          "description": "A list (concatenated and separated) of resources associated with the reported measured chemistry described specifically enough to allow anyone in the future to use the same resources.",
          "notes": "Recommended best practice is to use full bibliographic citations, global unique identifiers, or resolvable and persistent IRIs. See the broader concept http://rs.tdwg.org/dwc/terms/associatedReferences. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Novak, G. A., & Gibbs, G. V. (1971). The crystal chemistry of the silicate garnets. American Mineralogist: Journal of Earth and Planetary Materials, 56(5-6), 791-825.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/measuredChemistrySource"
        },
        {
          "name": "mineralogicalAnalysisProtocol",
          "title": "Mineralogical Analysis Protocol",
          "description": "A technique used to determine the chemical composition or crystallography of a mineral.",
          "notes": "Acronyms should be avoided even for widely recognized annotations. Recommended best practice is to use a controlled vocabulary such as https://vocabs.ardc.edu.au/viewById/650. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Wet Chemistry`; `X-ray fluorescence`; `Electron probe microanalysis`; `Scanning electron microscopy with energy-dispersive X-ray spectroscopy`; `X-ray diffraction`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/mineralogicalAnalysisProtocol"
        },
        {
          "name": "mineralogicalAnalysisProtocol_fk",
          "title": "Mineralogical Analysis Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used for a mineralogical analysis.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "chemistryRemarks",
          "title": "Chemistry Remarks",
          "description": "General remarks about the chemical and isotopic composition of a dwc:GeologicalMaterial.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/chemistryRemarks"
        }
      ],
      "weakPrimaryKey": "materialEntityID",
      "foreignKeys": [
        {
          "fields": "materialEntity_fk",
          "predicate": "is a",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        },
        {
          "fields": "mineralogicalAnalysisProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ]
    },
    "identification": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/identification",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/identification.json",
      "name": "identification",
      "title": "Identification",
      "description": "A classification of a resource according to a classification scheme.",
      "notes": "For biology, the assignment of a scientific name or taxon concept to a dwc:Organism.",
      "examples": "`a subspecies determination of an organism`; `a nomenclatural act designating a specimen as a holotype`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/Identification",
      "fields": [
        {
          "name": "identification_pk",
          "title": "Identification (Primary Key)",
          "description": "A unique identifier for a dwc:Identification.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "`9992`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "identificationID",
          "title": "Identification ID",
          "description": "An identifier for a dwc:Identification.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "`9992`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationID"
        },
        {
          "name": "identificationType",
          "title": "Identification Type",
          "description": "A category that best matches the nature of a dwc:Identification.",
          "notes": "The evidentiary basis, analytical approach, or inferential method by which an identification was determined. Values describe the dominant source of information supporting the identification (e.g., morphology, geography, molecular data, functional attributes, relationships, or taxonomic revision), independent of confidence level or taxonomic outcome.",
          "examples": "`geography`; `taxonomicRevision`; `functionalAttributes`; `nucleotideAnalysis`; `karyotype`; `media`; `relationship`; `features`; `fine features`; `unknown`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationType"
        },
        {
          "name": "identificationProtocol_fk",
          "title": "Identification Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used for a dwc:Identification.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity based on which a dwc:Identification was made.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource based on which a dwc:Identification was made.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "nucleotideAnalysis_fk",
          "title": "Nucleotide Analysis (Foreign Key)",
          "description": "An identifier for a dwc:NucleotideAnalysis based on which a dwc:Identification was made.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "nucleotideSequence_fk",
          "title": "Nucleotide Sequence (Foreign Key)",
          "description": "An identifier for a dwc:NucleotideSequence based on which a dwc:Identification was made.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "occurrence_fk",
          "title": "Occurrence (Foreign Key)",
          "description": "An identifier for a dwc:Occurrence based on which a dwc:Identification was made.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "organism_fk",
          "title": "Organism (Foreign Key)",
          "description": "An identifier for a dwc:Organism based on which a dwc:Identification was made.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "verbatimIdentification",
          "title": "Verbatim Identification",
          "description": "A string representing the classification as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original identification/determination, including identification qualifiers, hybrid formulas, uncertainties, etc. This term is meant to be used in addition to dwc:geologicalMaterialNames or dwc:scientificName (and dwc:identificationQualifier etc.), not instead of it.",
          "examples": "`Peromyscus sp.`; `Ministrymon sp. nov. 1`; `Anser anser × Branta canadensis`; `Pachyporidae?`; `Potentilla × pantotricha Soják`; `Aconitum pilipes × A. variegatum`; `Lepomis auritus x cyanellus`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimIdentification"
        },
        {
          "name": "isAcceptedIdentification",
          "title": "Is Accepted Identification",
          "description": "An indicator that a dwc:Identification of a dwc:Organism is a currently an accepted or preferred one.",
          "notes": "Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "",
          "type": "boolean",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/isAcceptedIdentification"
        },
        {
          "name": "taxonFormula",
          "title": "Taxon Formula",
          "description": "A string representing the pattern to use to construct a dwc:Identification from dwc:Taxon names and identification qualifiers.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as https://arctos.database.museum/info/ctDocumentation.cfm?table=cttaxa_formula.",
          "examples": "`A`; `not A`; `A ?`; `A or B`; `A and B`; `A x B`; `A cf.`; `A aff.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonFormula"
        },
        {
          "name": "typeStatus",
          "title": "Type Status",
          "description": "A list (concatenated and separated) of nomenclatural types (type status, typified scientific name, publication) applied to the subject.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`holotype`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/typeStatus"
        },
        {
          "name": "typeDesignationType",
          "title": "typeDesignationType",
          "description": "A category that best matches the nature of a type designation.",
          "notes": "From https://rs.gbif.org/extension/gbif/1.0/typesandspecimen.xml.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "gbif",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/1.0/typeDesignationType"
        },
        {
          "name": "identifiedBy",
          "title": "Identified By",
          "description": "A name for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "When used in the context of an eco:Survey, the subject consists of all of the dwc:Identifications related to the eco:Survey. Recommended best practice is to separate the values in a list with space vertical bar space (`|`). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`James L. Patton`; `Theodore Pappenfuss | Robert Macey`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedBy"
        },
        {
          "name": "identifiedBy_fk",
          "title": "Identified By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "identifiedByID",
          "title": "Identified By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097` (for an individual); `https://orcid.org/0000-0002-1825-0097 | https://orcid.org/0000-0002-1825-0098` (for a list of people)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "dateIdentified",
          "title": "Date Identified",
          "description": "The date on which the dwc:Identification was made.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/dateIdentified"
        },
        {
          "name": "identificationReferences",
          "title": "Identification References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources used in a dwc:Identification.",
          "notes": "When used in the context of an eco:Survey, the subject consists of all of the dwc:Identifications related to the eco:Survey. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`Aves del Noroeste Patagonico. Christie et al. 2004.`; `Stebbins, R. Field Guide to Western Reptiles and Amphibians. 3rd Edition. 2003. | Irschick, D.J. and Shaffer, H.B. (1997). The polytypic species revisited: Morphological differentiation among tiger salamanders (Ambystoma tigrinum) (Amphibia: Caudata). Herpetologica, 53(1), 30-49.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationReferences"
        },
        {
          "name": "identificationVerificationStatus",
          "title": "Identification Verification Status",
          "description": "A categorical indicator of the extent to which a dwc:Identification has been verified to be correct.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`0` (unverified in HISPID/ABCD).",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationVerificationStatus"
        },
        {
          "name": "identificationRemarks",
          "title": "Identification Remarks",
          "description": "Comments or notes about the dwc:Identification.",
          "notes": "",
          "examples": "`Distinguished between Anthus correndera and Anthus hellmayri based on the comparative lengths of the uñas.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationRemarks"
        },
        {
          "name": "taxonID",
          "title": "Taxon ID",
          "description": "An identifier for a dwc:Taxon.",
          "notes": "",
          "examples": "`8fa58e08-08de-4ac1-b69c-1235340b7001`; `32567`; `https://www.gbif.org/species/212`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonID"
        },
        {
          "name": "scientificNameID",
          "title": "Scientific Name ID",
          "description": "An identifier for the nomenclatural (not taxonomic) details of a scientific name.",
          "notes": "",
          "examples": "`urn:lsid:ipni.org:names:37829-1:1.3`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificNameID"
        },
        {
          "name": "geologicalClassificationCodes",
          "title": "Geological Classification Codes",
          "description": "A list (concatenated and separated) of codes that each identifies a name from a classification system applied to a dwc:GeologicalMaterial.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`71.02.02a.01` (\"muscovite\" in the Dana classification system); `9.AD.25` (\"garnet group\" in the Nickel-Strunz classification system); `75.01.03.01 | 4.DA.05` (\"quartz\" the Dana classification system and \"quartz group\" in the Nickel-Strunz classification system)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/classificationCodes"
        },
        {
          "name": "geologicalMaterialNames",
          "title": "Geological Material Names",
          "description": "A list (concatenated and separated) of mineral or lithotaxon names for a dwc:GeologicalMaterial.",
          "notes": "May includes both informal (e.g., variety, synonym) and formal (classification) names. The first name in the list should be considered the preferred name. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`quartz | smoky quartz`; `muscovite`; `garnet group`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicalMaterialNames"
        },
        {
          "name": "scientificName",
          "title": "Scientific Name",
          "description": "A scientific name string, not including authorship, date or identification qualifiers.",
          "notes": "When applied to an Organism or Occurrence, this term should be used to represent the scientific name that was applied to the associated Organism in accordance with the Taxon to which it was or is currently identified. Names should be compliant to the most recent nomenclatural code. For example, names of hybrids for algae, fungi and plants should follow the rules of the International Code of Nomenclature for algae, fungi, and plants (Shenzhen Code Articles H.1, H.2 and H.3). Thus, use the multiplication sign `×` (Unicode `U+00D7`, HTML `&times;`) to identify a hybrid, not `x` or `X`, if possible.",
          "examples": "`Coleoptera` (order); `Vespertilionidae` (family); `Manis` (genus); `Ctenomys sociabilis` (genus + specificEpithet); `Ambystoma tigrinum diaboli` (genus + specificEpithet + infraspecificEpithet); `Quercus agrifolia var. oxyadenia` (genus + specificEpithet + taxonRank + infraspecificEpithet); `×Agropogon littoralis`; `Mentha ×smithiana`; `Agrostis stolonifera L. × Polypogon monspeliensis`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificName"
        },
        {
          "name": "scientificNameAuthorship",
          "title": "Scientific Name Authorship",
          "description": "The authorship information for the dwc:scientificName formatted according to the conventions of the applicable dwc:nomenclaturalCode.",
          "notes": "",
          "examples": "`(Torr.) J.T. Howell`; `(Martinovský) Tzvelev`; `(Györfi, 1952)`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificNameAuthorship"
        },
        {
          "name": "vernacularName",
          "title": "Vernacular Name",
          "description": "A common or vernacular name.",
          "notes": "",
          "examples": "`cóndor andino`; `death cap`; `rainbow trout`; `Gänsegeier`; `smoky quartz`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/vernacularName"
        },
        {
          "name": "taxonRank",
          "title": "Taxon Rank",
          "description": "The taxonomic rank of the most specific name in the dwc:scientificName.",
          "notes": "Recommended best practice is to use a controlled vocabulary. The taxon ranks of algae, fungi and plants are defined in the International Code of Nomenclature for algae, fungi, and plants (Shenzhen Code Articles H3.2, H4.4 and H.3.1).",
          "examples": "`subspecies`; `varietas`; `forma`; `species`; `genus`; `nothogenus`; `nothospecies`; `nothosubspecies`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonRank"
        },
        {
          "name": "classificationSystem",
          "title": "Classification System",
          "description": "A reference to the classification system in which an authoritative name or formal classification belongs.",
          "notes": "Recommended best practice is to provide a formal citation or IRI. This term should not be confused with dwc:namePublishedIn as a classification system is not equivalent to a publication in which a taxon is first described. This term should not be confused with dwc:nameAccordingTo as a classification system is not equivalent to a publication or other source in which a specific taxon concept circumscription is defined or implied. This term should not be confused with dwc:nomenclaturalCode as a classification system is not equivalent to code of nomenclature, which states the rules for naming rather than an organized source of names. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Strunz, H., Nickel, E.H. (2001): Strunz Mineralogical Tables. Chemical-Structural Mineral Classification System. 9th edition. E. Schweizerbart’sche Verlagsbuchhandlung, Stuttgart, ix + 870 p. (ISBN 3-510-65188-X)`; `Gaines, R.V., Skinner, H.C.W., Foord, E.E., Mason, B., Rosenzweig, A. (1997): Dana's New Mineralogy: The System of Mineralogy of James Dwight Dana and Edward Salisbury Dana. 8th edition. John Wiley & Sons, New York, xlv + 1819 p. (ISBN 0-471-19310-0).`; `https://kos.geospecimens.org/vocab/meteorite-classification`; `Mammal Diversity Database. (2026). Mammal Diversity Database (Version 2.5) [Data set]. [Zenodo](https://zenodo.org/records/10595931). https://doi.org/10.5281/zenodo.17033774`; `Index Fungorum. (2026). Index Fungorum electronic database. Royal Botanic Gardens, Kew. Retrieved August 17, 2026, from indexfungorum.org.`",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/classificationSystem"
        },
        {
          "name": "kingdom",
          "title": "Kingdom",
          "description": "The full scientific name of the kingdom in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Animalia`; `Archaea`; `Bacteria`; `Chromista`; `Fungi`; `Plantae`; `Protozoa`; `Viruses`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/kingdom"
        },
        {
          "name": "phylum",
          "title": "Phylum",
          "description": "The full scientific name of the phylum or division in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Chordata` (phylum); `Bryophyta` (division)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/phylum"
        },
        {
          "name": "class",
          "title": "Class",
          "description": "The full scientific name of the class in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Mammalia`; `Hepaticopsida`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/class"
        },
        {
          "name": "order",
          "title": "Order",
          "description": "The full scientific name of the order in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Carnivora`; `Monocleales`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/order"
        },
        {
          "name": "superfamily",
          "title": "Superfamily",
          "description": "The full scientific name of the superfamily in which the dwc:Taxon is classified.",
          "notes": "A taxonomic category subordinate to an order and superior to a family. According to ICZN article 29.2, the suffix -oidea is used for a superfamily name.",
          "examples": "`Achatinoidea`; `Cerithioidea`; `Helicoidea`; `Hypsibioidea`; `Valvatoidea`; `Zonitoidea`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/superfamily"
        },
        {
          "name": "family",
          "title": "Family",
          "description": "The full scientific name of the family in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Felidae`; `Monocleaceae`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/family"
        },
        {
          "name": "subfamily",
          "title": "Subfamily",
          "description": "The full scientific name of the subfamily in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Periptyctinae`; `Orchidoideae`; `Sphindociinae`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/subfamily"
        },
        {
          "name": "tribe",
          "title": "Tribe",
          "description": "The full scientific name of the tribe in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Ortaliini`; `Arethuseae`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/tribe"
        },
        {
          "name": "subtribe",
          "title": "Subtribe",
          "description": "The full scientific name of the subtribe in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Plotinini`; `Typhaeini`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/subtribe"
        },
        {
          "name": "genus",
          "title": "Genus",
          "description": "The full scientific name of the genus in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Puma`; `Monoclea`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/genus"
        },
        {
          "name": "genericName",
          "title": "Generic Name",
          "description": "The genus part of the dwc:scientificName without authorship.",
          "notes": "For synonyms the accepted genus and the genus part of the name may be different. The term dwc:genericName should be used together with dwc:specificEpithet to form a binomial and with dwc:infraspecificEpithet to form a trinomial. The term dwc:genericName should only be used for combinations. Uninomials of generic rank do not have a dwc:genericName.",
          "examples": "`Felis` (for scientificName `Felis concolor`, with accompanying values of `Puma concolor` in acceptedNameUsage and `Puma` in genus)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/genericName"
        },
        {
          "name": "subgenus",
          "title": "Subgenus",
          "description": "The full scientific name of the subgenus in which the dwc:Taxon is classified.",
          "notes": "A value for this term should be a complete subgenus name as required by the appropriate nomenclatural code.",
          "examples": "`Abacetus (Parastygis)`; `Dicranum subgen. Orthodicranum`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/subgenus"
        },
        {
          "name": "infragenericEpithet",
          "title": "Infrageneric Epithet",
          "description": "The infrageneric part of a binomial name at ranks above species but below genus.",
          "notes": "The term dwc:infragenericEpithet should be used in conjunction with dwc:genericName, dwc:specificEpithet, dwc:infraspecificEpithet, dwc:taxonRank and dwc:scientificNameAuthorship to represent the individual elements of the complete dwc:scientificName. It can be used to indicate the subgenus placement of a species, which in zoology is often given in parentheses. Can also be used to share infrageneric names such as botanical sections (e.g., `Vicia sect. Cracca`).",
          "examples": "`Abacetillus` (for scientificName `Abacetus (Abacetillus) ambiguus`); `Cracca` (for scientificName `Vicia sect. Cracca`)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/infragenericEpithet"
        },
        {
          "name": "specificEpithet",
          "title": "Specific Epithet",
          "description": "The name of the first or species epithet of the dwc:scientificName.",
          "notes": "",
          "examples": "`concolor`; `gottschei`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/specificEpithet"
        },
        {
          "name": "infraspecificEpithet",
          "title": "Infraspecific Epithet",
          "description": "The name of the lowest or terminal infraspecific of the dwc:scientificName.",
          "notes": "In botany, name strings in literature and identifications may have multiple infraspecific ranks. According to the International Code of Nomenclature for algae, fungi, and plants (Shenzhen Code Articles 6.7 & Art. 24.1), valid names only have two epithets, with the lowest rank being the dwc:infraspecificEpithet. For example: the dwc:infraspecificEpithet in the string `Indigofera charlieriana subsp. sessilis var. scaberrima` is `scaberrima` and the dwc:scientificName is `Indigofera charlieriana var. scaberrima (Schinz) J.B.Gillett`. Use dwc:verbatimIdentification for the full name string used in a dwc:Identification.",
          "examples": "`concolor` (for scientificName `Puma concolor concolor`); `oxyadenia` (for scientificName `Quercus agrifolia var. oxyadenia`); `laxa` (for scientificName `Cheilanthes hirta f. laxa`); `scaberrima` (for scientificName `Indigofera charlieriana var. scaberrima`)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/infraspecificEpithet"
        },
        {
          "name": "cultivarEpithet",
          "title": "Cultivar Epithet",
          "description": "Part of the name of a cultivar, cultivar group or grex that follows the dwc:scientificName.",
          "notes": "According to the Rules of the Cultivated Plant Code, a cultivar name consists of a botanical name followed by a cultivar epithet. The value given as the dwc:cultivarEpithet should exclude any quotes. The term dwc:taxonRank should be used to indicate which type of cultivated plant name (e.g., cultivar, cultivar group, grex) is concerned. This epithet, including any enclosing apostrophes or suffix, should be provided in dwc:scientificName as well.",
          "examples": "`King Edward` (for scientificName `Solanum tuberosum 'King Edward'` and taxonRank `cultivar`); `Mishmiense` (for scientificName `Rhododendron boothii Mishmiense Group` and taxonRank `cultivar group`); `Atlantis` (for scientificName `Paphiopedilum Atlantis grex` and taxonRank `grex`)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/cultivarEpithet"
        },
        {
          "name": "nameAccordingTo",
          "title": "Name According To",
          "description": "The reference to the source in which the specific taxon concept circumscription is defined or implied - traditionally signified by the Latin \"sensu\" or \"sec.\" (from secundum, meaning \"according to\"). For taxa that result from identifications, a reference to the keys, monographs, experts and other sources should be given.",
          "notes": "This term provides context to the dwc:scientificName. Together with the dwc:scientificName, separated by `sensu` or `sec.`, it forms the taxon concept label, which may be seen as having the same relationship to dwc:taxonConceptID as, for example, dwc:acceptedNameUsage has to dwc:acceptedNameUsageID. When not provided, in Taxon Core data sets the dwc:nameAccordingTo can be taken to be the data set. In this case the data set mostly provides sufficient context to infer the delimitation of the taxon and its relationship with other taxa. In Occurrence Core data sets, when not provided, dwc:nameAccordingTo can be an underlying taxonomy of the data set, e.g., Plants of the World Online (http://powo.science.kew.org/) for vascular plant records in iNaturalist (in which case it should be provided), or, which is the case for most dwc:PreservedSpecimen data sets, the dwc:Identification, in which case there is no further context.",
          "examples": "`Franz NM, Cardona-Duque J (2013) Description of two new species and phylogenetic reassessment of Perelleschus Wibmer & O’Brien, 1986 (Coleoptera: Curculionidae), with a complete taxonomic concept history of Perelleschus sec. Franz & Cardona-Duque, 2013. Syst Biodivers. 11: 209–236.` (as the full citation of the Franz & Cardona-Duque (2013) in Perelleschus splendida sec. Franz & Cardona-Duque (2013))",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/nameAccordingTo"
        },
        {
          "name": "nomenclaturalCode",
          "title": "Nomenclatural Code",
          "description": "The nomenclatural code (or codes in the case of an ambiregnal name) under which the dwc:scientificName is constructed.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`ICN`; `ICZN`; `BC`; `ICNCP`; `BioCode`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/nomenclaturalCode"
        },
        {
          "name": "nomenclaturalStatus",
          "title": "Nomenclatural Status",
          "description": "The status related to the original publication of the name and its conformance to the relevant rules of nomenclature. It is based essentially on an algorithm according to the business rules of the code. It requires no taxonomic opinion.",
          "notes": "",
          "examples": "`nom. ambig.`; `nom. illeg.`; `nom. subnud.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/nomenclaturalStatus"
        },
        {
          "name": "namePublishedIn",
          "title": "Name Published In",
          "description": "A reference for the publication in which the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode.",
          "notes": "A citation of the first publication of the name in its given combination, not the basionym / original name. Recombinations are often not published in zoology, in which case dwc:namePublishedIn should be empty.",
          "examples": "`Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388`; `Forel, Auguste, Diagnosies provisoires de quelques espèces nouvelles de fourmis de Madagascar, récoltées par M. Grandidier., Annales de la Societe Entomologique de Belgique, Comptes-rendus des Seances 30, 1886`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/namePublishedIn"
        },
        {
          "name": "namePublishedInYear",
          "title": "Name Published In Year",
          "description": "The four-digit year in which the dwc:scientificName was published.",
          "notes": "",
          "examples": "`1915`; `2008`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/namePublishedInYear"
        },
        {
          "name": "taxonRemarks",
          "title": "Taxon Remarks",
          "description": "Comments or notes about the taxon or name.",
          "notes": "",
          "examples": "`this name is a misspelling in common use`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonRemarks"
        },
        {
          "name": "feedbackURL",
          "title": "Feedback URL",
          "description": "A uniform resource locator (URL) that points to a webpage on which a form may be submitted to gather feedback about the record.",
          "notes": "A uniform resource locator (URL) that points to a webpage on which a form may be submitted to gather feedback about the record.",
          "examples": "`https://example.com/new?title=New+issue&body=This+comment+is+about+CAN12345`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/feedbackURL"
        }
      ],
      "primaryKey": "identification_pk",
      "weakPrimaryKey": "identificationID",
      "foreignKeys": [
        {
          "fields": "identificationProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "materialEntity_fk",
          "predicate": "of a",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        },
        {
          "fields": "media_fk",
          "predicate": "based on",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "nucleotideAnalysis_fk",
          "predicate": "based on",
          "reference": {
            "resource": "nucleotide-analysis",
            "fields": "nucleotideAnalysis_pk"
          }
        },
        {
          "fields": "nucleotideSequence_fk",
          "predicate": "based on",
          "reference": {
            "resource": "nucleotide-sequence",
            "fields": "nucleotideSequence_pk"
          }
        },
        {
          "fields": "occurrence_fk",
          "predicate": "based on",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrence_pk"
          }
        },
        {
          "fields": "organism_fk",
          "predicate": "of an",
          "reference": {
            "resource": "organism",
            "fields": "organism_pk"
          }
        },
        {
          "fields": "identifiedBy_fk",
          "predicate": "identified by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "identifiedByID",
          "predicate": "identified by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "identification-agent-role": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/identification-agent-role",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/identification-agent-role.json",
      "name": "identification-agent-role",
      "title": "Identification Agent Role",
      "description": "A role filled by a dcterms:Agent with respect to a dwc:Identification.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//identification-agent-role",
      "fields": [
        {
          "name": "identification_fk",
          "title": "Identification (Foreign Key)",
          "description": "An identifier for a dwc:Identification.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agentRole",
          "title": "Agent Role",
          "description": "A category that best matches the nature of a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary for the roles appropriate to the class of resource a dcterms:AgentRole is related to.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "agentRoleIRI",
          "title": "Agent Role IRI",
          "description": "An IRI of the controlled vocabulary value for a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "agentRoleSource",
          "title": "Agent Role Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:agentRole is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "agentRoleOrder",
          "title": "Agent Role Order",
          "description": "A numerical position of an AgentRole in a set of AgentRoles that have the same combination of agentRole, agentRoleIRI, agentRoleSource and related target identifier.",
          "notes": "One could use dwc:agentRoleOrder to create an ordered list of collectors (dwc:agentRole = 'collector') for a dwc:MaterialEntity, for example. The first would have dwc:agentRoleOrder=1, the second would have dwc:agentRoleOrder=2.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRoleOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "agentRoleDate",
          "title": "Agent Role Date",
          "description": "An interval during which a dcterms:AgentRole was in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        }
      ],
      "foreignKeys": [
        {
          "fields": "identification_fk",
          "predicate": "role for",
          "reference": {
            "resource": "identification",
            "fields": "identification_pk"
          }
        },
        {
          "fields": "agent_fk",
          "predicate": "role holder",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "identification-reference": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/identification-reference",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/identification-reference.json",
      "name": "identification-reference",
      "title": "Identification Reference",
      "description": "A dcterms:BibliographicResource related to a dwc:Identification.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//identification-reference",
      "fields": [
        {
          "name": "reference_fk",
          "title": "Reference (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "identification_fk",
          "title": "Identification (Foreign Key)",
          "description": "An identifier for a dwc:Protocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource to a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`cited in`; `referenced`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        }
      ],
      "foreignKeys": [
        {
          "fields": "reference_fk",
          "predicate": "used",
          "reference": {
            "resource": "bibliographic-resource",
            "fields": "reference_pk"
          }
        },
        {
          "fields": "identification_fk",
          "predicate": "used for",
          "reference": {
            "resource": "identification",
            "fields": "identification_pk"
          }
        }
      ]
    },
    "identification-taxon": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/identification-taxon",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/identification-taxon.json",
      "name": "identification-taxon",
      "title": "Identification Taxon",
      "description": "A construct of components and positions of dwc:Taxa in a dwc:Identification.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//identification-taxon",
      "fields": [
        {
          "name": "identification_fk",
          "title": "Identification (Foreign Key)",
          "description": "An identifier for a dwc:Identification.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "taxonSortOrder",
          "title": "Taxon Sort Order",
          "description": "A numerical position of a dwc:Taxon in a dwc:taxonFormula.",
          "notes": "The number signifies which dwc:Taxon in the related dwc:taxonFormula this record refers to (e.g., `1` refs to the `A` in the dwc:taxonFormula \"A x B\").",
          "examples": "`1`; `2`",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonSortOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "taxonID",
          "title": "Taxon ID",
          "description": "An identifier for a dwc:Taxon.",
          "notes": "In DwC-DP, the dwc:taxonID is always an external link to a taxon record. As such, if present, it should be a resolvable globally unique identifier. See the Identifiers section of https://github.com/CatalogueOfLife/coldp/blob/master/README.md.",
          "examples": "`8fa58e08-08de-4ac1-b69c-1235340b7001`; `32567`; `https://www.gbif.org/species/212`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonID"
        },
        {
          "name": "scientificNameID",
          "title": "Scientific Name ID",
          "description": "An identifier for the nomenclatural (not taxonomic) details of a scientific name.",
          "notes": "In DwC-DP, the dwc:scientificNameID is always an external link to a taxon record. As such, if present, it should be a resolvable globally unique identifier. See the Identifiers section of https://github.com/CatalogueOfLife/coldp/blob/master/README.md.",
          "examples": "`urn:lsid:ipni.org:names:37829-1:1.3`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificNameID"
        },
        {
          "name": "geologicalClassificationCodes",
          "title": "Geological Classification Codes",
          "description": "A list (concatenated and separated) of codes that each identifies a name from a classification system applied to a dwc:GeologicalMaterial.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`71.02.02a.01` (\"muscovite\" in the Dana classification system); `9.AD.25` (\"garnet group\" in the Nickel-Strunz classification system); `75.01.03.01 | 4.DA.05` (\"quartz\" the Dana classification system and \"quartz group\" in the Nickel-Strunz classification system)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/classificationCodes"
        },
        {
          "name": "geologicalMaterialNames",
          "title": "Geological Material Names",
          "description": "A list (concatenated and separated) of mineral or lithotaxon names for a dwc:GeologicalMaterial.",
          "notes": "May includes both informal (e.g., variety, synonym) and formal (classification) names. The first name in the list should be considered the preferred name. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`quartz | smoky quartz`; `muscovite`; `garnet group`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicalMaterialNames"
        },
        {
          "name": "scientificName",
          "title": "Scientific Name",
          "description": "A scientific name string, not including authorship, date or identification qualifiers.",
          "notes": "",
          "examples": "`Coleoptera` (order); `Vespertilionidae` (family); `Manis` (genus); `Ctenomys sociabilis` (genus + specificEpithet); `Ambystoma tigrinum diaboli` (genus + specificEpithet + infraspecificEpithet); `Quercus agrifolia var. oxyadenia` (genus + specificEpithet + taxonRank + infraspecificEpithet); `×Agropogon littoralis`; `Mentha ×smithiana`; `Agrostis stolonifera L. × Polypogon monspeliensis`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificName"
        },
        {
          "name": "scientificNameAuthorship",
          "title": "Scientific Name Authorship",
          "description": "The authorship information for a dwc:scientificName formatted according to the conventions of the applicable dwc:nomenclaturalCode.",
          "notes": "",
          "examples": "`(Torr.) J.T. Howell`; `(Martinovský) Tzvelev`; `(Györfi, 1952)`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificNameAuthorship"
        },
        {
          "name": "vernacularName",
          "title": "Vernacular Name",
          "description": "A common or vernacular name.",
          "notes": "",
          "examples": "`Andean Condor`; `death cap`; `rainbow trout`; `Smoky Quartz`; `Amethyst`; `Agate`; `Tiger's Eye`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/vernacularName"
        },
        {
          "name": "taxonRank",
          "title": "Taxon Rank",
          "description": "A taxonomic rank of the most specific name in a dwc:scientificName.",
          "notes": "Recommended best practice is to use a controlled vocabulary. The taxon ranks of algae, fungi and plants are defined in the International Code of Nomenclature for algae, fungi, and plants (Shenzhen Code Articles H3.2, H4.4 and H.3.1).",
          "examples": "`subspecies`; `varietas`; `forma`; `species`; `genus`; `nothogenus`; `nothospecies`; `nothosubspecies`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonRank"
        },
        {
          "name": "classificationSystem",
          "title": "Classification System",
          "description": "A reference to the classification system in which an authoritative name or formal classification belongs.",
          "notes": "Recommended best practice is to provide a formal citation or IRI. This term should not be confused with dwc:namePublishedIn as a classification system is not equivalent to a publication in which a taxon is first described. This term should not be confused with dwc:nameAccordingTo as a classification system is not equivalent to a publication or other source in which a specific taxon concept circumscription is defined or implied. This term should not be confused with dwc:nomenclaturalCode as a classification system is not equivalent to code of nomenclature, which states the rules for naming rather than an organized source of names. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Strunz, H., Nickel, E.H. (2001): Strunz Mineralogical Tables. Chemical-Structural Mineral Classification System. 9th edition. E. Schweizerbart’sche Verlagsbuchhandlung, Stuttgart, ix + 870 p. (ISBN 3-510-65188-X)`; `Gaines, R.V., Skinner, H.C.W., Foord, E.E., Mason, B., Rosenzweig, A. (1997): Dana's New Mineralogy: The System of Mineralogy of James Dwight Dana and Edward Salisbury Dana. 8th edition. John Wiley & Sons, New York, xlv + 1819 p. (ISBN 0-471-19310-0).`; `https://kos.geospecimens.org/vocab/meteorite-classification`; `Mammal Diversity Database. (2026). Mammal Diversity Database (Version 2.5) [Data set]. [Zenodo](https://zenodo.org/records/10595931). https://doi.org/10.5281/zenodo.17033774`; `Index Fungorum. (2026). Index Fungorum electronic database. Royal Botanic Gardens, Kew. Retrieved August 17, 2026, from indexfungorum.org.`",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/classificationSystem"
        },
        {
          "name": "kingdom",
          "title": "Kingdom",
          "description": "The full scientific name of the kingdom in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Animalia`; `Archaea`; `Bacteria`; `Chromista`; `Fungi`; `Plantae`; `Protozoa`; `Viruses`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/kingdom"
        },
        {
          "name": "phylum",
          "title": "Phylum",
          "description": "The full scientific name of the phylum or division in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Chordata` (phylum); `Bryophyta` (division)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/phylum"
        },
        {
          "name": "class",
          "title": "Class",
          "description": "The full scientific name of the class in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Mammalia`; `Hepaticopsida`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/class"
        },
        {
          "name": "order",
          "title": "Order",
          "description": "The full scientific name of the order in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Carnivora`; `Monocleales`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/order"
        },
        {
          "name": "family",
          "title": "Family",
          "description": "The full scientific name of the family in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Felidae`; `Monocleaceae`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/family"
        },
        {
          "name": "subfamily",
          "title": "Subfamily",
          "description": "The full scientific name of the subfamily in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Periptyctinae`; `Orchidoideae`; `Sphindociinae`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/subfamily"
        },
        {
          "name": "genus",
          "title": "Genus",
          "description": "The full scientific name of the genus in which the dwc:Taxon is classified.",
          "notes": "",
          "examples": "`Puma`; `Monoclea`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/genus"
        },
        {
          "name": "genericName",
          "title": "Generic Name",
          "description": "The genus part of the dwc:scientificName without authorship.",
          "notes": "For synonyms the accepted genus and the genus part of the name may be different. The term dwc:genericName should be used together with dwc:specificEpithet to form a binomial and with dwc:infraspecificEpithet to form a trinomial. The term dwc:genericName should only be used for combinations. Uninomials of generic rank do not have a dwc:genericName.",
          "examples": "`Felis` (for scientificName `Felis concolor`, with accompanying values of `Puma concolor` in acceptedNameUsage and `Puma` in genus)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/genericName"
        },
        {
          "name": "subgenus",
          "title": "Subgenus",
          "description": "The full scientific name of the subgenus in which the dwc:Taxon is classified.",
          "notes": "A value for this term should be a complete subgenus name as required by the appropriate nomenclatural code.",
          "examples": "`Abacetus (Parastygis)`; `Dicranum subgen. Orthodicranum`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/subgenus"
        },
        {
          "name": "infragenericEpithet",
          "title": "Infrageneric Epithet",
          "description": "The infrageneric part of a binomial name at ranks above species but below genus.",
          "notes": "",
          "examples": "`Abacetillus` (for scientificName `Abacetus (Abacetillus) ambiguus`); `Cracca` (for scientificName `Vicia sect. Cracca`)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/infragenericEpithet"
        },
        {
          "name": "specificEpithet",
          "title": "Specific Epithet",
          "description": "The name of the first or species epithet of the dwc:scientificName.",
          "notes": "",
          "examples": "`concolor`; `gottschei`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/specificEpithet"
        },
        {
          "name": "infraspecificEpithet",
          "title": "Infraspecific Epithet",
          "description": "The name of the lowest or terminal infraspecific of the dwc:scientificName.",
          "notes": "In botany, name strings in literature and identifications may have multiple infraspecific ranks. According to the International Code of Nomenclature for algae, fungi, and plants (Shenzhen Code Articles 6.7 & Art. 24.1), valid names only have two epithets, with the lowest rank being the dwc:infraspecificEpithet. For example: the dwc:infraspecificEpithet in the string Indigofera charlieriana subsp. sessilis var. scaberrima is scaberrima and the dwc:scientificName is Indigofera charlieriana var. scaberrima (Schinz) J.B.Gillett. Use dwc:verbatimIdentification for the full name string used in a dwc:Identification.",
          "examples": "`concolor` (for scientificName `Puma concolor concolor`); `oxyadenia` (for scientificName `Quercus agrifolia var. oxyadenia`); `laxa` (for scientificName `Cheilanthes hirta f. laxa`); `scaberrima` (for scientificName `Indigofera charlieriana var. scaberrima`)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/infraspecificEpithet"
        },
        {
          "name": "cultivarEpithet",
          "title": "Cultivar Epithet",
          "description": "Part of the name of a cultivar, cultivar group or grex that follows the dwc:scientificName.",
          "notes": "According to the Rules of the Cultivated Plant Code, a cultivar name consists of a botanical name followed by a cultivar epithet. The value given as the dwc:cultivarEpithet should exclude any quotes. The term dwc:taxonRank should be used to indicate which type of cultivated plant name (e.g., cultivar, cultivar group, grex) is concerned. This epithet, including any enclosing apostrophes or suffix, should be provided in dwc:scientificName as well.",
          "examples": "`King Edward` (for scientificName `Solanum tuberosum 'King Edward'` and taxonRank `cultivar`); `Mishmiense` (for scientificName `Rhododendron boothii Mishmiense Group` and taxonRank `cultivar group`); `Atlantis` (for scientificName `Paphiopedilum Atlantis grex` and taxonRank `grex`)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/cultivarEpithet"
        },
        {
          "name": "nameAccordingTo",
          "title": "Name According To",
          "description": "The reference to the source in which the specific taxon concept circumscription is defined or implied - traditionally signified by the Latin \"sensu\" or \"sec.\" (from secundum, meaning \"according to\"). For taxa that result from identifications, a reference to the keys, monographs, experts and other sources should be given.",
          "notes": "This term provides context to the dwc:scientificName. Together with the dwc:scientificName, separated by sensu or sec., it forms the taxon concept label, which may be seen as having the same relationship to dwc:taxonConceptID as, for example, dwc:acceptedNameUsage has to dwc:acceptedNameUsageID. When not provided, in Taxon Core data sets the dwc:nameAccordingTo can be taken to be the data set. In this case the data set mostly provides sufficient context to infer the delimitation of the taxon and its relationship with other taxa. In Occurrence Core data sets, when not provided, dwc:nameAccordingTo can be an underlying taxonomy of the data set, e.g., Plants of the World Online (http://powo.science.kew.org/) for vascular plant records in iNaturalist (in which case it should be provided), or, which is the case for most dwc:PreservedSpecimen data sets, the dwc:Identification, in which case there is no further context.",
          "examples": "`Franz NM, Cardona-Duque J (2013) Description of two new species and phylogenetic reassessment of Perelleschus Wibmer & O’Brien, 1986 (Coleoptera: Curculionidae), with a complete taxonomic concept history of Perelleschus sec. Franz & Cardona-Duque, 2013. Syst Biodivers. 11: 209–236.` (as the full citation of the Franz & Cardona-Duque (2013) in Perelleschus splendida sec. Franz & Cardona-Duque (2013))",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/nameAccordingTo"
        },
        {
          "name": "nomenclaturalCode",
          "title": "Nomenclatural Code",
          "description": "The nomenclatural code (or codes in the case of an ambiregnal name) under which the dwc:scientificName is constructed.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`ICN`; `ICZN`; `BC`; `ICNCP`; `BioCode`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/nomenclaturalCode"
        },
        {
          "name": "nomenclaturalStatus",
          "title": "Nomenclatural Status",
          "description": "The status related to the original publication of the name and its conformance to the relevant rules of nomenclature. It is based essentially on an algorithm according to the business rules of the code. It requires no taxonomic opinion.",
          "notes": "",
          "examples": "`nom. ambig.`; `nom. illeg.`; `nom. subnud.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/nomenclaturalStatus"
        },
        {
          "name": "namePublishedIn",
          "title": "Name Published In",
          "description": "A reference for the publication in which the dwc:scientificName was originally established under the rules of the associated dwc:nomenclaturalCode.",
          "notes": "A citation of the first publication of the name in its given combination, not the basionym / original name. Recombinations are often not published in zoology, in which case dwc:namePublishedIn should be empty.",
          "examples": "`Pearson O. P., and M. I. Christie. 1985. Historia Natural, 5(37):388`; `Forel, Auguste, Diagnosies provisoires de quelques espèces nouvelles de fourmis de Madagascar, récoltées par M. Grandidier., Annales de la Societe Entomologique de Belgique, Comptes-rendus des Seances 30, 1886`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/namePublishedIn"
        },
        {
          "name": "namePublishedInYear",
          "title": "Name Published In Year",
          "description": "The four-digit year in which the dwc:scientificName was published.",
          "notes": "",
          "examples": "`1915`; `2008`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/namePublishedInYear"
        }
      ],
      "foreignKeys": [
        {
          "fields": "identification_fk",
          "predicate": "for",
          "reference": {
            "resource": "identification",
            "fields": "identification_pk"
          }
        }
      ]
    },
    "material": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/material",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/material.json",
      "name": "material",
      "title": "Material",
      "description": "An entity that can be identified, exist for some period of time, and consist in whole or in part of physical matter while it exists.",
      "notes": "The term is defined at the most general level to admit descriptions of any subtype of material entity within the scope of Darwin Core. In particular, any kind of material sample, preserved specimen, fossil, or exemplar from living collections is intended to be subsumed under this term.",
      "examples": "`the entire contents of a trawl`; `a subset of the contents of a trawl`; `the body of a fish`; `the stomach contents of a fish`; `a rock containing fossils`; `a fossil within a rock`; `an herbarium sheet with its attached plant specimen`; `a flower on a plant specimen`; `a pollen grain`; `a specific water sample`; `an isolated molecule of DNA`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MaterialEntity",
      "fields": [
        {
          "name": "materialEntity_pk",
          "title": "Material Entity (Primary Key)",
          "description": "A unique identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "`06809dc5-f143-459a-be1a-6f03e63fc083`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "materialEntityID",
          "title": "Material Entity ID",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "`06809dc5-f143-459a-be1a-6f03e63fc083`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID"
        },
        {
          "name": "digitalSpecimenID",
          "title": "Digital Specimen ID",
          "description": "An identifier for a Digital Specimen resource.",
          "notes": "A Digital Specimen is defined in https://doi.org/10.3897/rio.7.e67379. A dwc:digitalSpecimenID is intended to uniquely and persistently identify a Digital Specimen. Recommended best practice is to use a DOI with machine readable metadata in the DOI record that uses a community agreed metadata profile (also known as FDO profile) for a Digital Specimen. For an example see: https://doi.org/10.3535/N75-CR4-0SM?noredirect. The identifier is for a digital information artifact (the Digital Specimen) as opposed to an identifier for a specific instance of a dwc:MaterialEntity.",
          "examples": "`https://doi.org/10.3535/M42-Z4P-DRD`; `https://doi.org/10.3535/M42-Z4P-DRD?urlappend=/1`; `https://doi.org/10.3535/M42-Z4P-DRD?locatt=/1`; `doi:10.3535/M42-Z4P-DRD`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/digitalSpecimenID"
        },
        {
          "name": "collectionEvent_fk",
          "title": "Collection Event (Foreign Key)",
          "description": "An identifier for a dwc:Event during which a dwc:MaterialEntity was collected.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "evidenceForOccurrence_fk",
          "title": "Evidence For Occurrence (Foreign Key)",
          "description": "An identifier for a dwc:Occurrence for which a dwc:MaterialEntity provides evidence.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "derivedFromMaterialEntity_fk",
          "title": "Derived From Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity from which this dwc:MaterialEntity was derived.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "derivedFromMaterialEntityID",
          "title": "Derived From Material Entity ID",
          "description": "An identifier for a dwc:MaterialEntity from which this dwc:MaterialEntity was derived.",
          "notes": "This dwc:MaterialEntity is separate from a dwc:MaterialEntity from which it was derived (cf. dwc:isPartOfMaterialEntityID). Recommended best practice is to use a globally unique identifier. The value in this field MAY refer to a dwc:MaterialEntity within or external to the dataset in which this record originated.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "derivationEvent_fk",
          "title": "Derivation Event (Foreign Key)",
          "description": "An identifier for a dwc:Event during which a dwc:MaterialEntity was derived from another dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "derivationEventID",
          "title": "Derivation Event ID",
          "description": "An identifier for a dwc:Event during which a dwc:MaterialEntity was derived from another dwc:MaterialEntity.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "isPartOfMaterialEntity_fk",
          "title": "Is Part Of Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity of which this dwc:MaterialEntity is a part.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/isPartOfMaterialEntityID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "isPartOfMaterialEntityID",
          "title": "Is Part Of Material Entity ID",
          "description": "An identifier for a dwc:MaterialEntity of which this dwc:MaterialEntity is a part.",
          "notes": "This dwc:MaterialEntity was not taken from a dwc:MaterialEntity of which it is a part. Recommended best practice is to use a globally unique identifier. The value in this field MAY refer to a dwc:MaterialEntity within or external to the dataset in which this record originated.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/isPartOfMaterialEntityID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "materialRole",
          "title": "Material Role",
          "description": "A category that best matches the nature of the relationship between a dwc:MaterialEntity and another dwc:MaterialEntity of which it is a part.",
          "notes": "",
          "examples": "`matrix`; `groundmass`; `phenocryst`; `xenolith`; `vein`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialRole"
        },
        {
          "name": "materialProportion",
          "title": "Material Proportion",
          "description": "The qualitative or quantitative abundance of a dwc:MaterialEntity with respect to another dwc:MaterialEntity of which it is a part.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as http://resource.geosciml.org/classifier/cgi/proportionterm. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`20%`; `minor`;  `dominant`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialProportion"
        },
        {
          "name": "materialEntityCategory",
          "title": "Material Entity Category",
          "description": "A high-level, mutually exclusive classification describing the fundamental substance and origin of a dwc:MaterialEntity.",
          "notes": "Recommended best practice is to use a limited, tightly controlled vocabulary.",
          "examples": "`preserved`; `living`; `fossilized`; `tissue`; `DNA extract`; `non-biological`; `human-made`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityCategory"
        },
        {
          "name": "materialEntityType",
          "title": "Material Entity Type",
          "description": "A more generic classification of a dwc:MaterialEntity than dwc:preparations but less broad than dwc:materialEntityCategory.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Macro-object`; `Micro-object`; `Oversized object`; `Cut/polished gemstone`; `Compound Specimen`; `Core`; `Mixed Materials`; `Environmental sample`; `Microscope slide`; `Spore print`; `Macrofossil`; `Mesofossil`; `Microfossil`; `Pinned object/specimen`; `Taxidermy mount`; `Blood sampling cards`; `Oversized fossil`; `Anthropogenic Artifact`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityType"
        },
        {
          "name": "discipline",
          "title": "Discipline",
          "description": "The primary branch or branches of knowledge represented by a dwc:MaterialEntity.",
          "notes": "This term can be used to classify records according to branches of knowledge. Recommended best practice is to use a controlled vocabulary and to separate the values in a list with space vertical bar space (` | `). It is also recommended to use this field to describe specimenType in MIDS.",
          "examples": "`Botany`; `Botany | Virology | Taxonomy`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/discipline"
        },
        {
          "name": "sampledFeatureType",
          "title": "Sampled Feature Type",
          "description": "The type of naturally occurring or anthropogenic physical feature from which a dwc:MaterialEntity was sampled.",
          "notes": "This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`float`; `mine dump`; `mine/quarry pit`; `outcrop`; `erratic boulder`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/sampledFeatureType"
        },
        {
          "name": "institutionCode",
          "title": "Institution Code",
          "description": "A name (or acronym) in use by an institution having custody of a dwc:MaterialEntity.",
          "notes": "",
          "examples": "`MVZ`; `FMNH`; `CLO`; `UCMP`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/institutionCode"
        },
        {
          "name": "institutionID",
          "title": "Institution ID",
          "description": "An identifier for an organization.",
          "notes": "For physical specimens, the recommended best practice is to use a globally unique and resolvable identifier from a collections registry such as the Research Organization Registry (ROR) or the Global Registry of Scientific Collections (https://scientific-collections.gbif.org/). The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://ror.org/015hz7p22`; `http://grscicoll.org/institution/museum-southwestern-biology`; `https://www.gbif.org/grscicoll/institution/e3d4dcc4-81e2-444c-8a5c-41d1044b5381`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/institutionID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "ownerInstitutionCode",
          "title": "Owner Institution Code",
          "description": "A name (or acronym) in use by an institution having ownership of a dwc:MaterialEntity.",
          "notes": "",
          "examples": "`NPS`; `APN`; `InBio`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/ownerInstitutionCode"
        },
        {
          "name": "ownerInstitutionID",
          "title": "Owner Institution ID",
          "description": "An identifier for an institution that owns a dwc:MaterialEntity.",
          "notes": "For physical specimens, the recommended best practice is to use a globally unique and resolvable identifier from a collections registry such as the Research Organization Registry (ROR) or the Global Registry of Scientific Collections (https://scientific-collections.gbif.org/). The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "collectionCode",
          "title": "Collection Code",
          "description": "A name, acronym, coden, or initialism identifying a collection.",
          "notes": "",
          "examples": "`Mammals`; `Hildebrandt`; `EBIRD`; `VP`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/collectionCode"
        },
        {
          "name": "collectionID",
          "title": "Collection ID",
          "description": "An identifier for a collection.",
          "notes": "For physical specimens, the recommended best practice is to use a globally unique and resolvable identifier from a collections registry such as the Global Registry of Scientific Collections (https://scientific-collections.gbif.org/).",
          "examples": "`https://scientific-collections.gbif.org/collection/fbd3ed74-5a21-4e01-b86a-33d36f032d9c`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/collectionID"
        },
        {
          "name": "catalogNumber",
          "title": "Catalog Number",
          "description": "An identifier (preferably unique) for a dwc:MaterialEntity within a collection.",
          "notes": "",
          "examples": "`145732`; `145732a`; `2008.1334`; `R-4313`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/catalogNumber"
        },
        {
          "name": "otherCatalogNumbers",
          "title": "Other Catalog Numbers",
          "description": "A list (concatenated and separated) of previous or alternate fully qualified catalog numbers or other human-used identifiers for the same dwc:MaterialEntity, whether in the current or any other data set or collection.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`FMNH:Mammal:1234`; `NPS YELLO6778 | MBG 33424`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/otherCatalogNumbers"
        },
        {
          "name": "collectorNumber",
          "title": "Collector Number",
          "description": "An identifier given to a dwc:MaterialEntity at the time it was collected.",
          "notes": "Often serves as a link between field notes and a dwc:MaterialEntity, such as a specimen collector's number.",
          "examples": "`OPP 7101`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/recordNumber"
        },
        {
          "name": "collectedBy",
          "title": "Collected By",
          "description": "A name for a dcterms:Agent responsible for recording a dwc:MaterialEntity.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`José E. Crespo`; `Oliver P. Pearson | Anita K. Pearson` (where the value in dwc:collectorNumber `OPP 7101` corresponds to the collector number for the specimen in the field catalog of Oliver P. Pearson)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/recordedBy"
        },
        {
          "name": "collectedBy_fk",
          "title": "Collected By (Foreign Key)",
          "description": "An identifier for the dcterms:Agent responsible for collecting a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/version/recordedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "collectedByID",
          "title": "Collected By ID",
          "description": "An identifier for the dcterms:Agent responsible for collecting a dwc:MaterialEntity.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`; `https://ror.org/00mh9zx15`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/version/recordedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "objectQuantity",
          "title": "Object Quantity",
          "description": "A number or enumeration value for the quantity of differentiable dwc:MaterialEntities comprising this dwc:MaterialEntity.",
          "notes": "An dwc:objectQuantity must have a corresponding dwc:objectQuantityType.",
          "examples": "`27` (objectQuantity) with `individuals` (objectQuantityType); `many` (objectQuantity) with `individuals` (objectQuantityType); `3` (objectQuantity) with `legs` (objectQuantityType)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/objectQuantity"
        },
        {
          "name": "objectQuantityType",
          "title": "Object Quantity Type",
          "description": "The type of quantification system used for the quantity of dwc:MaterialEntities.",
          "notes": "An dwc:objectQuantityType must have a corresponding dwc:objectQuantity.",
          "examples": "`27` (objectQuantity) with `individuals` (objectQuantityType); `many` (objectQuantity) with `individuals` (objectQuantityType); `3` (objectQuantity) with `legs` (objectQuantityType)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/objectQuantityType"
        },
        {
          "name": "preparations",
          "title": "Preparations",
          "description": "A list (concatenated and separated) of preparations and preservation methods for a dwc:MaterialEntity.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`fossil`; `cast`; `photograph`; `DNA extract`; `skin | skull | skeleton`; `whole animal (EtOH) | tissue (EDTA)`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/preparations"
        },
        {
          "name": "disposition",
          "title": "Disposition",
          "description": "A current state of a dwc:MaterialEntity with respect to where it can be found.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`in collection`; `missing`; `on loan`; `used up`; `destroyed`; `deaccessioned`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/disposition"
        },
        {
          "name": "measuredMassInGrams",
          "title": "Measured Mass In Grams",
          "description": "Mass of a dwc:MaterialEntity, measured in grams.",
          "notes": "",
          "examples": "`0.03`; `2.34`; `56.6`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/measuredMassInGrams"
        },
        {
          "name": "verbatimMass",
          "title": "Verbatim Mass",
          "description": "The verbatim original representation of the mass of a dwc:MaterialEntity, including original units of measurement.",
          "notes": "",
          "examples": "`11.01 Lbs`; `105.07 g`; `2.45 kg`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimMass"
        },
        {
          "name": "verbatimLabel",
          "title": "Verbatim Label",
          "description": "A verbatim original representation of the written information affixed or related to a dwc:MaterialEntity.",
          "notes": "The content of this term should include no embellishments, prefixes, headers or other additions made to the text. Abbreviations must not be expanded and supposed misspellings must not be corrected. Lines or breakpoints between blocks of text that could be verified by seeing the original labels or images of them may be used. Examples of material entities include preserved specimens, fossil specimens, and material samples. Best practice is to use UTF-8 for all characters. Best practice is to add comment “verbatimLabel derived from human transcription” in dwc:materialEntityRemarks. Examples can be found at https://dwc.tdwg.org/examples/verbatimLabel.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimLabel"
        },
        {
          "name": "associatedSequences",
          "title": "Associated Sequences",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources for dwc:NucleotideSequences associated with a dwc:MaterialEntity.",
          "notes": "",
          "examples": "`http://www.ncbi.nlm.nih.gov/nuccore/U34853.1`; `http://www.ncbi.nlm.nih.gov/nuccore/GU328060 | http://www.ncbi.nlm.nih.gov/nuccore/AF326093`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/associatedSequences"
        },
        {
          "name": "materialReferences",
          "title": "Material References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:MaterialEntity.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space ( | ). Note that the intended usage of the term dcterms:references in Darwin Core is to point to the definitive source representation of the resource, if one is available. Note also that the intended usage of dcterms:bibliographicCitation in Darwin Core is to provide the preferred way to cite the resource itself.",
          "examples": "`http://www.sciencemag.org/cgi/content/abstract/322/5899/261`; `Christopher J. Conroy, Jennifer L. Neuwald. 2008. Phylogeographic study of the California vole, Microtus californicus Journal of Mammalogy, 89(3):755-767.`; `Steven R. Hoofer and Ronald A. Van Den Bussche. 2001. Phylogenetic Relationships of Plecotine Bats and Allies Based on Mitochondrial Ribosomal Sequences. Journal of Mammalogy 82(1):131-137. | Walker, Faith M., Jeffrey T. Foster, Kevin P. Drees, Carol L. Chambers. 2014. Spotted bat (Euderma maculatum) microsatellite discovery using illumina sequencing. Conservation Genetics Resources.`; `https://doi.org/10.3897/BDJ.14.e177525`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/associatedReferences"
        },
        {
          "name": "treatments",
          "title": "Treatments",
          "description": "Description of any processes or curatorial actions taken specifically to mitigate damage to a dwc:MaterialEntity.",
          "notes": "Includes both proactive and reactive actions.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/treatments"
        },
        {
          "name": "handlingRequirements",
          "title": "Handling Requirements",
          "description": "A description of the procedures required to preserve and protect a dwc:MaterialEntity during handling.",
          "notes": "",
          "examples": "`handle with gloves`; `not to be taken out of storage medium`; `avoid contact with direct sunlight`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/handlingRequirements"
        },
        {
          "name": "hazardType",
          "title": "Hazard Type",
          "description": "A term that belongs to a hazard classification scheme based on a set of unique characteristics and negative health outcomes.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as https://kos.geospecimens.org/vocab/hazard-type. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`carcinogen`; `skin irritant`; `radioactive`; `toxic`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/hazardType"
        },
        {
          "name": "hazardRemarks",
          "title": "Hazard Remarks",
          "description": "Comments or notes about the type of hazards associated with a dwc:MaterialEntity.",
          "notes": "",
          "examples": "`asbestos`; `slightly radioactive`; `requires skin protection`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/hazardRemarks"
        },
        {
          "name": "damageRemarks",
          "title": "Damage Remarks",
          "description": "A general description of any physical changes to a dwc:MaterialEntity that have negatively affected its value.",
          "notes": "See Royce, K., Baars, C., & Viles, H. (2021). Defining Damage and Susceptibility, with Implications for Mineral Specimens and Objects: Introducing the Mineral Susceptibility Database. Studies in Conservation, 68(3), 298-317. https://doi.org/10.1080/00393630.2021.2015947",
          "examples": "`Due to oxidation and hydration of the pyrite in the coal, the sample has largely decayed to a coal powder with some larger coal pieces | Some terminations broken off | Attached label not legible (or torn, or covered)`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/damageRemarks"
        },
        {
          "name": "materialDescription",
          "title": "Material Description",
          "description": "Remarks on the physical characteristics of a dwc:MaterialEntity, particularly those that distinguish it from otherwise similar dwc:MaterialEntities.",
          "notes": "",
          "examples": "`Showpiece`; `Historically valuable`; `Extraordinary composition`; `Two generations of quartz`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialDescription"
        },
        {
          "name": "materialEntityRemarks",
          "title": "Material Entity Remarks",
          "description": "Comments or notes about a dwc:MaterialEntity.",
          "notes": "",
          "examples": "`found in association with charred remains`; `some original fragments missing`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityRemarks"
        },
        {
          "name": "verbatimIdentification",
          "title": "Verbatim Identification",
          "description": "A string representing the classification as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original identification/determination, including identification qualifiers, hybrid formulas, uncertainties, etc. This term is meant to be used in addition to dwc:geologicalMaterialNames or dwc:scientificName (and dwc:identificationQualifier etc.), not instead of it.",
          "examples": "`Peromyscus sp.`; `Ministrymon sp. nov. 1`; `Anser anser × Branta canadensis`; `Pachyporidae?`, `Potentilla × pantotricha Soják`; `Aconitum pilipes × A. variegatum; `Lepomis auritus x cyanellus`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimIdentification"
        },
        {
          "name": "typeStatus",
          "title": "Type Status",
          "description": "A nomenclatural type (type status, typified scientific name, publication) applied to the subject.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`holotype`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/typeStatus"
        },
        {
          "name": "typeDesignationType",
          "title": "typeDesignationType",
          "description": "A category that best matches the nature of a type designation.",
          "notes": "From https://rs.gbif.org/extension/gbif/1.0/typesandspecimen.xml.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "gbif",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/1.0/typeDesignationType"
        },
        {
          "name": "typeOfType",
          "title": "Type Of Type",
          "description": "A category of nomenclatural type of a dwc:MaterialEntity.",
          "notes": "The term dwc:typeOfType must be used in combination with dwc:typifiedName. Together they make up the type status of a specimen. Note that relatively very few specimens are nomenclatural types (types of names), so in most cases this term will have no value. Unlike dwc:typeStatus, dwc:typeOfType can only have a single value. Recommended best practice is to use a controlled vocabulary such as the GBIF Nomenclatural Type Status Vocabulary. This term has an equivalent in the tcs: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`holotype`; `isotype`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/typeOfType"
        },
        {
          "name": "typifiedName",
          "title": "Typified Name",
          "description": "A scientific name for which a specimen or other name is the type.",
          "notes": "Recommended best practice is also to indicate the dwc:typeStatus of the specimen.",
          "examples": "`Polysiphonia amphibolis Womersley`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/version/typifiedName"
        },
        {
          "name": "identifiedBy",
          "title": "Identified By",
          "description": "A name for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "When used in the context of an eco:Survey, the subject consists of all of the dwc:Identifications related to the eco:Survey. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`James L. Patton`; `Theodore Pappenfuss | Robert Macey`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedBy"
        },
        {
          "name": "identifiedBy_fk",
          "title": "Identified By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "identifiedByID",
          "title": "Identified By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097` (for an individual); `https://orcid.org/0000-0002-1825-0097 | https://orcid.org/0000-0002-1825-0098` (for a list of people)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "dateIdentified",
          "title": "Date Identified",
          "description": "The date on which the subject was determined as representing the dwc:Taxon.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/dateIdentified"
        },
        {
          "name": "identificationReferences",
          "title": "Identification References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources used in a dwc:Identification.",
          "notes": "When used in the context of an eco:Survey, the subject consists of all of the dwc:Identifications related to the eco:Survey. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`Aves del Noroeste Patagonico. Christie et al. 2004.`; `Stebbins, R. Field Guide to Western Reptiles and Amphibians. 3rd Edition. 2003. | Irschick, D.J. and Shaffer, H.B. (1997). The polytypic species revisited: Morphological differentiation among tiger salamanders (Ambystoma tigrinum) (Amphibia: Caudata). Herpetologica, 53(1), 30-49.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationReferences"
        },
        {
          "name": "identificationVerificationStatus",
          "title": "Identification Verification Status",
          "description": "A categorical indicator of the extent to which a dwc:Identification has been verified to be correct.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`0` (unverified in HISPID/ABCD)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationVerificationStatus"
        },
        {
          "name": "identificationRemarks",
          "title": "Identification Remarks",
          "description": "Comments or notes about a dwc:Identification.",
          "notes": "",
          "examples": "`Distinguished between Anthus correndera and Anthus hellmayri based on the comparative lengths of the uñas.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationRemarks"
        },
        {
          "name": "taxonID",
          "title": "Taxon ID",
          "description": "An identifier for a dwc:Taxon.",
          "notes": "In DwC-DP, the dwc:taxonID is always an external link to a taxon record. As such, if present, it should be a resolvable globally unique identifier. See the Identifiers section of https://github.com/CatalogueOfLife/coldp/blob/master/README.md.",
          "examples": "`8fa58e08-08de-4ac1-b69c-1235340b7001`; `32567`; `https://www.gbif.org/species/212`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonID"
        },
        {
          "name": "scientificNameID",
          "title": "Scientific Name ID",
          "description": "An identifier for the nomenclatural (not taxonomic) details of a scientific name.",
          "notes": "In DwC-DP, the dwc:scientificNameID is always an external link to a taxon record. As such, if present, it should be a resolvable globally unique identifier. See the Identifiers section of https://github.com/CatalogueOfLife/coldp/blob/master/README.md.",
          "examples": "`urn:lsid:ipni.org:names:37829-1:1.3`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificNameID"
        },
        {
          "name": "scientificName",
          "title": "Scientific Name",
          "description": "A scientific name string, not including authorship, date or identification qualifiers.",
          "notes": "",
          "examples": "`Coleoptera` (order); `Vespertilionidae` (family); `Manis` (genus); `Ctenomys sociabilis` (genus + specificEpithet); `Ambystoma tigrinum diaboli` (genus + specificEpithet + infraspecificEpithet); `Quercus agrifolia var. oxyadenia` (genus + specificEpithet + taxonRank + infraspecificEpithet); `×Agropogon littoralis`; `Mentha ×smithiana`; `Agrostis stolonifera L. × Polypogon monspeliensis`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificName"
        },
        {
          "name": "scientificNameAuthorship",
          "title": "Scientific Name Authorship",
          "description": "The authorship information for a dwc:scientificName formatted according to the conventions of the applicable dwc:nomenclaturalCode.",
          "notes": "",
          "examples": "`(Torr.) J.T. Howell`; `(Martinovský) Tzvelev`; `(Györfi, 1952)`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificNameAuthorship"
        },
        {
          "name": "vernacularName",
          "title": "Vernacular Name",
          "description": "A common or vernacular name.",
          "notes": "",
          "examples": "`Andean Condor`; `death cap`; `rainbow trout`; `Smoky Quartz`; `Amethyst`; `Agate`; `Tiger's Eye`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/vernacularName"
        },
        {
          "name": "taxonRank",
          "title": "Taxon Rank",
          "description": "A taxonomic rank of the most specific name in a dwc:scientificName.",
          "notes": "Recommended best practice is to use a controlled vocabulary. The taxon ranks of algae, fungi and plants are defined in the International Code of Nomenclature for algae, fungi, and plants (Shenzhen Code Articles H3.2, H4.4 and H.3.1).",
          "examples": "`subspecies`; `varietas`; `forma`; `species`; `genus`; `nothogenus`; `nothospecies`; `nothosubspecies`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonRank"
        },
        {
          "name": "classificationSystem",
          "title": "Classification System",
          "description": "A reference to the classification system in which an authoritative name or formal classification belongs.",
          "notes": "Recommended best practice is to provide a formal citation or IRI. This term should not be confused with dwc:namePublishedIn as a classification system is not equivalent to a publication in which a taxon is first described. This term should not be confused with dwc:nameAccordingTo as a classification system is not equivalent to a publication or other source in which a specific taxon concept circumscription is defined or implied. This term should not be confused with dwc:nomenclaturalCode as a classification system is not equivalent to code of nomenclature, which states the rules for naming rather than an organized source of names. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Strunz, H., Nickel, E.H. (2001): Strunz Mineralogical Tables. Chemical-Structural Mineral Classification System. 9th edition. E. Schweizerbart’sche Verlagsbuchhandlung, Stuttgart, ix + 870 p. (ISBN 3-510-65188-X)`; `Gaines, R.V., Skinner, H.C.W., Foord, E.E., Mason, B., Rosenzweig, A. (1997): Dana's New Mineralogy: The System of Mineralogy of James Dwight Dana and Edward Salisbury Dana. 8th edition. John Wiley & Sons, New York, xlv + 1819 p. (ISBN 0-471-19310-0).`; `https://kos.geospecimens.org/vocab/meteorite-classification`; `Mammal Diversity Database. (2026). Mammal Diversity Database (Version 2.5) [Data set]. [Zenodo](https://zenodo.org/records/10595931). https://doi.org/10.5281/zenodo.17033774`; `Index Fungorum. (2026). Index Fungorum electronic database. Royal Botanic Gardens, Kew. Retrieved August 17, 2026, from indexfungorum.org.`",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/classificationSystem"
        },
        {
          "name": "modified",
          "title": "Modified",
          "description": "Date on which the resource was changed.",
          "notes": "Date that the digital record of the material resource was altered. The date and time MUST comply with the World Wide Web Consortium (W3C) datetime practice, https://www.w3.org/TR/NOTE-datetime, which requires that date and time representation correspond to ISO 8601:1998, https://www.iso.org/standard/40874.html, but with year fields always comprising 4 digits. This makes datetime records compliant with 8601:2004. AC datetime values MAY also follow 8601:2004 for ranges by separating two ISO 8601 datetime fields by a solidus (\"forward slash\", '/'). dcterms:modified permits all modification dates to be recorded, or if only one is recorded, it is assumed to be the latest. See also the Wikipedia ISO 8601 entry, https://en.wikipedia.org/wiki/ISO_8601, for further explanation and examples.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/modified"
        },
        {
          "name": "provenance_fk",
          "title": "Provenance (Foreign Key)",
          "description": "An identifier for a dwc:Provenance.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/provenanceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "usagePolicy_fk",
          "title": "Usage Policy (Foreign Key)",
          "description": "An identifier for a dwc:UsagePolicy.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/usagePolicyID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "owner",
          "title": "Owner",
          "description": "A list of legal owners of the resource.",
          "notes": "`unknown`",
          "examples": "`The names of the owners `Ron Thomas, Roz Thomas` or a URI that identifies the owner`",
          "type": "string",
          "format": "default",
          "namespace": "xmprights",
          "dcterms:isVersionOf": "http://ns.adobe.com/xap/1.0/rights/Owner"
        },
        {
          "name": "owner_fk",
          "title": "Owner (Foreign Key)",
          "description": "An identifier for a dcterms:Agent that is the owner of the ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "license",
          "title": "License",
          "description": "A legal document giving official permission to do something with the resource.",
          "notes": "Recommended practice is to identify the license document with a URI. If this is not possible or feasible, a literal value that identifies the license may be provided.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/license"
        },
        {
          "name": "informationWithheld",
          "title": "Information Withheld",
          "description": "Additional information that exists about a resource, but that is not shared publicly. Suggests that alternative data of higher quality may be available on request.",
          "notes": "",
          "examples": "`location information not given for endangered species`; `collector identities withheld | ask about tissue samples`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/informationWithheld"
        },
        {
          "name": "dataGeneralizations",
          "title": "Data Generalizations",
          "description": "Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.",
          "notes": "",
          "examples": "`Coordinates generalized from original GPS coordinates to the nearest half degree grid cell.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/dataGeneralizations"
        },
        {
          "name": "feedbackURL",
          "title": "Feedback URL",
          "description": "A uniform resource locator (URL) that points to a webpage on which a form may be submitted to gather feedback about the record.",
          "notes": "Recommended best practice is to optionally include query strings that act to pre-populate web page form elements and communicate the context.",
          "examples": "`https://example.com/new?title=New+issue&body=This+comment+is+about+CAN12345`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/feedbackURL"
        }
      ],
      "primaryKey": "materialEntity_pk",
      "weakPrimaryKey": "materialEntityID",
      "foreignKeys": [
        {
          "fields": "collectionEvent_fk",
          "predicate": "collected during",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        },
        {
          "fields": "evidenceForOccurrence_fk",
          "predicate": "evidence for",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrence_pk"
          }
        },
        {
          "fields": "derivedFromMaterialEntity_fk",
          "predicate": "derived from",
          "reference": {
            "resource": "",
            "fields": "materialEntity_pk"
          }
        },
        {
          "fields": "derivationEvent_fk",
          "predicate": "derived during",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        },
        {
          "fields": "isPartOfMaterialEntity_fk",
          "predicate": "part of",
          "reference": {
            "resource": "",
            "fields": "materialEntity_pk"
          }
        },
        {
          "fields": "collectedBy_fk",
          "predicate": "collected by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "identifiedBy_fk",
          "predicate": "identified by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "provenance_fk",
          "predicate": "has",
          "reference": {
            "resource": "provenance",
            "fields": "provenance_pk"
          }
        },
        {
          "fields": "usagePolicy_fk",
          "predicate": "has",
          "reference": {
            "resource": "usage-policy",
            "fields": "usagePolicy_pk"
          }
        },
        {
          "fields": "owner_fk",
          "predicate": "owned by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "derivedFromMaterialEntityID",
          "predicate": "derived from",
          "reference": {
            "resource": "",
            "fields": "materialEntityID"
          }
        },
        {
          "fields": "derivationEventID",
          "predicate": "derived during",
          "reference": {
            "resource": "event",
            "fields": "eventID"
          }
        },
        {
          "fields": "isPartOfMaterialEntityID",
          "predicate": "part of",
          "reference": {
            "resource": "",
            "fields": "materialEntityID"
          }
        },
        {
          "fields": "institutionID",
          "predicate": "stored in",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "ownerInstitutionID",
          "predicate": "owned by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "collectedByID",
          "predicate": "collected by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "identifiedByID",
          "predicate": "identified by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "material-agent-role": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/material-agent-role",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/material-agent-role.json",
      "name": "material-agent-role",
      "title": "Material Agent Role",
      "description": "A role filled by a dcterms:Agent with respect to a dwc:MaterialEntity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//material-agent-role",
      "fields": [
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agentRole",
          "title": "Agent Role",
          "description": "A category that best matches the nature of a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary for the roles appropriate to the class of resource a dcterms:AgentRole is related to.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "agentRoleIRI",
          "title": "Agent Role IRI",
          "description": "An IRI of the controlled vocabulary value for a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "agentRoleSource",
          "title": "Agent Role Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:agentRole is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "agentRoleOrder",
          "title": "Agent Role Order",
          "description": "A numerical position of an AgentRole in a set of AgentRoles that have the same combination of agentRole, agentRoleIRI, agentRoleSource and related target identifier.",
          "notes": "One could use dwc:agentRoleOrder to create an ordered list of collectors (dwc:agentRole = 'collector') for a dwc:MaterialEntity, for example. The first would have dwc:agentRoleOrder=1, the second would have dwc:agentRoleOrder=2.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRoleOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "agentRoleDate",
          "title": "Agent Role Date",
          "description": "An interval during which a dcterms:AgentRole was in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        }
      ],
      "foreignKeys": [
        {
          "fields": "materialEntity_fk",
          "predicate": "role for",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        },
        {
          "fields": "agent_fk",
          "predicate": "role holder",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "material-assertion": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/material-assertion",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/material-assertion.json",
      "name": "material-assertion",
      "title": "Material Assertion",
      "description": "A dwc:Assertion made by a dcterms:Agent about a dwc:MaterialEntity.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
      "fields": [
        {
          "name": "assertionID",
          "title": "Assertion ID",
          "description": "An identifier for a dwc:Assertion.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionID",
          "constraints": {
            "required": false,
            "unique": true
          }
        },
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimAssertionType",
          "title": "Verbatim Assertion Type",
          "description": "A string representing the type of dwc:Assertion as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original name for a dwc:assertionType. This term is meant to be used in addition to dwc:assertionType, not instead of it.",
          "examples": "`water_temp`; `Fish biomass`; `sampling net mesh size`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimAssertionType"
        },
        {
          "name": "assertionType",
          "title": "Assertion Type",
          "description": "A category that best matches the nature of a dwc:Assertion.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`tail length`; `temperature`; `trap line length`; `survey area`; `trap type`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionType"
        },
        {
          "name": "assertionTypeIRI",
          "title": "Assertion Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementType"
        },
        {
          "name": "assertionTypeSource",
          "title": "Assertion Type Source",
          "description": "A reference to the controlled vocabulary in which the definition of a value in dwc:assertionType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionMadeDate",
          "title": "Assertion Made Date",
          "description": "A date on which a dwc:Assertion was created.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionMadeDate"
        },
        {
          "name": "assertionEffectiveDate",
          "title": "Assertion Effective Date",
          "description": "A date-time or time interval during which an asserted state or measurement was deemed to be in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        },
        {
          "name": "assertionValue",
          "title": "Assertion Value",
          "description": "An asserted value.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionValue"
        },
        {
          "name": "assertionValueIRI",
          "title": "Assertion Value IRI",
          "description": "An IRI of the controlled vocabulary value for a value of a dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementValue"
        },
        {
          "name": "assertionValueSource",
          "title": "Assertion Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:assertionValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionUnit",
          "title": "Assertion Unit",
          "description": "Unit associated with the value in dwc:assertionValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure http://www.wurvoc.org/vocabularies/om-1.8/ of SI units, derived units, or other non-SI units accepted for use within the SI. For units that are composed of multiple parts, use the patterns as given in \"A Primer for Communicating Mathematics via Plain Text\" (https://cse.sc.edu/~fenner/latex-ASCII.pdf) by Stephen Fenner (e.g., `g/cm^3` for grams per cubic centimeter). For other units, provide the value as a recognizable standard (e.g., '%') or written out in full and in the plural (e.g., `individuals`). It is fine to provide non-SI units in the original language of the dataset.",
          "examples": "`m`; `s`; `g`; `ml`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionUnit"
        },
        {
          "name": "assertionUnitIRI",
          "title": "Assertion Unit IRI",
          "description": "An IRI of a controlled vocabulary value for the unit of a dwc:assertionValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/assertionUnit"
        },
        {
          "name": "assertionUnitSource",
          "title": "Assertion Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of the value in dwc:assertionUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionError",
          "title": "Assertion Error",
          "description": "A description of the potential error associated with a dwc:assertionValue.",
          "notes": "",
          "examples": "`0.01`; `normal distribution with variation of 2 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionError"
        },
        {
          "name": "assertionBy",
          "title": "Assertion By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for making a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionBy"
        },
        {
          "name": "assertionBy_fk",
          "title": "Assertion By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionByID",
          "title": "Assertion By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionProtocols",
          "title": "Assertion Protocols",
          "description": "Names of, references to, or descriptions of dwc:Protocols used in making a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionProtocols"
        },
        {
          "name": "assertionProtocol_fk",
          "title": "Assertion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to make a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionReferences",
          "title": "Assertion References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionReferences"
        },
        {
          "name": "assertionRemarks",
          "title": "Assertion Remarks",
          "description": "Comments or notes about a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionRemarks"
        }
      ],
      "weakPrimaryKey": "assertionID",
      "foreignKeys": [
        {
          "fields": "materialEntity_fk",
          "predicate": "about",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        },
        {
          "fields": "assertionBy_fk",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "assertionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "assertionByID",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "material-geological-context": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/material-geological-context",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/material-geological-context.json",
      "name": "material-geological-context",
      "title": "Material Geological Context",
      "description": "A dwc:GeologicalContext from which a dwc:MaterialEntify was derived.",
      "notes": "Use this table to establish one or more GeologicalContexts represented in a dwc:MaterialEntity.",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//material-geological-context",
      "fields": [
        {
          "name": "geologicalContext_fk",
          "title": "Geological Context (Foreign Key)",
          "description": "An identifier for a dwc:GeologicalContext.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/geologicalContextID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "geologicalContext_fk",
          "predicate": "within",
          "reference": {
            "resource": "geological-context",
            "fields": "geologicalContext_pk"
          }
        },
        {
          "fields": "materialEntity_fk",
          "predicate": "for",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        }
      ]
    },
    "material-identifier": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/material-identifier",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/material-identifier.json",
      "name": "material-identifier",
      "title": "Material Identifier",
      "description": "An adms:Identifier for a dwc:MaterialEntity.",
      "notes": "An important point to note is that properties of the adms:Identifier class are properties of the Identifier, not the resource that it identifies or the agency that issued it.",
      "examples": "",
      "namespace": "adms",
      "dcterms:isVersionOf": "http://www.w3.org/ns/adms#Identifier",
      "fields": [
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "description": "An unambiguous reference to a resource within a given context.",
          "notes": "Recommended best practice is to identify a resource by means of a string conforming to a formal identification system.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "skos",
          "dcterms:isVersionOf": "http://www.w3.org/2004/02/skos/core#notation",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifierType",
          "title": "Identifier Type",
          "description": "A category or system that best matches the nature of an identifier (skos:notation).",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/type"
        },
        {
          "name": "identifierTypeIRI",
          "title": "Identifier Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of identifier.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "identifierTypeSource",
          "title": "Identifier Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:identifierType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "identifierLanguage",
          "title": "Identifier Language",
          "description": "A language in which an identifier is presented.",
          "notes": "Recommended best practice is to use an ISO639-2 three-letter language code.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/language"
        }
      ],
      "foreignKeys": [
        {
          "fields": "materialEntity_fk",
          "predicate": "for",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        }
      ]
    },
    "material-media": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/material-media",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/material-media.json",
      "name": "material-media",
      "title": "Material Media",
      "description": "A dwc:MaterialEntity as content in an ac:Media entity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//material-media",
      "fields": [
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "subjectCategory",
          "title": "Subject Category",
          "description": "A term to describe the content of a image or a region of interest within an image using a controlled value string.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/CVtermLiteral"
        },
        {
          "name": "subjectCategoryIRI",
          "title": "Subject Category IRI",
          "description": "An IRI of a controlled vocabulary value for the subject category of an ac:Media resource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "Iptc4xmpExt",
          "dcterms:isVersionOf": "http://iptc.org/std/Iptc4xmpExt/2008-02-29/CVterm"
        },
        {
          "name": "subjectCategoryVocabulary",
          "title": "Subject Category Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:subjectCategory is given.",
          "notes": "The Audiovisual Core recommended vocabularies do not need to be cited here. There is no required linkage between individual Subject Category terms and the vocabulary; the mechanism is intended to support discovery of the normative URI for a term, but not guarantee it.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectCategoryVocabulary"
        },
        {
          "name": "subjectPartLiteral",
          "title": "Subject Part Literal",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectPart. It is best practice to use ac:subjectPart instead of ac:subjectPartLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPartLiteral"
        },
        {
          "name": "subjectPart",
          "title": "Subject Part",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by an IRI.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPart"
        },
        {
          "name": "subjectOrientationLiteral",
          "title": "Subject Orientation Literal",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectOrientation. It is best practice to use ac:subjectOrientation instead of ac:subjectOrientationLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientationLiteral"
        },
        {
          "name": "subjectOrientation",
          "title": "Subject Orientation",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientation"
        },
        {
          "name": "physicalSetting",
          "title": "Physical Setting",
          "description": "The setting of the content represented in an ac:Media resource, such as images, sounds, and movies if the provider deems them relevant.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/physicalSetting"
        }
      ],
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "this media instance",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "materialEntity_fk",
          "predicate": "about",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        }
      ]
    },
    "material-protocol": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/material-protocol",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/material-protocol.json",
      "name": "material-protocol",
      "title": "Material Protocol",
      "description": "A dwc:Protocol used for a dwc:MaterialEntity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//material-protocol",
      "fields": [
        {
          "name": "protocol_fk",
          "title": "Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "protocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "materialEntity_fk",
          "predicate": "used for",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        }
      ]
    },
    "material-provenance": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/material-provenance",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/material-provenance.json",
      "name": "material-provenance",
      "title": "Material Provenance",
      "description": "A dwc:Provenance for a dwc:MaterialEntity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//material-provenance",
      "fields": [
        {
          "name": "provenance_fk",
          "title": "Provenance (Foreign Key)",
          "description": "An identifier for a dwc:Provenance.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/provenanceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "provenance_fk",
          "predicate": "has",
          "reference": {
            "resource": "provenance",
            "fields": "provenance_pk"
          }
        },
        {
          "fields": "materialEntity_fk",
          "predicate": "for",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        }
      ]
    },
    "material-reference": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/material-reference",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/material-reference.json",
      "name": "material-reference",
      "title": "Material Reference",
      "description": "A dcterms:BibliographicResource related to a dwc:MaterialEntity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//material-reference",
      "fields": [
        {
          "name": "reference_fk",
          "title": "Reference (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource to a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`cited in`; `referenced`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        }
      ],
      "foreignKeys": [
        {
          "fields": "reference_fk",
          "predicate": "mentioned in",
          "reference": {
            "resource": "bibliographic-resource",
            "fields": "reference_pk"
          }
        },
        {
          "fields": "materialEntity_fk",
          "predicate": "mentioned",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        }
      ]
    },
    "material-usage-policy": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/material-usage-policy",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/material-usage-policy.json",
      "name": "material-usage-policy",
      "title": "Material Usage Policy",
      "description": "Rights, usage, and attribution statements applicable to a dwc:MaterialEntity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//material-usage-policy",
      "fields": [
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "usagePolicy_fk",
          "title": "Usage Policy (Foreign Key)",
          "description": "An identifier for a dwc:UsagePolicy.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/usagePolicyID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "materialEntity_fk",
          "predicate": "for",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        },
        {
          "fields": "usagePolicy_fk",
          "predicate": "has",
          "reference": {
            "resource": "usage-policy",
            "fields": "usagePolicy_pk"
          }
        }
      ]
    },
    "media": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/media",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/media.json",
      "name": "media",
      "title": "Media",
      "description": "A digital or physical media resource.",
      "notes": "An instance of digital textual media may be better represented as a dcterms:BibliographicResource.",
      "examples": "`dcmi:Sound`; `dcmi:StillImage`; `dcmi:MovingImage`; `dcmi:InteractiveResource`; `ac:Digital3DResource`",
      "namespace": "ac",
      "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/Media",
      "fields": [
        {
          "name": "media_pk",
          "title": "Media (Primary Key)",
          "description": "A unique identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "mediaID",
          "title": "Media ID",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier"
        },
        {
          "name": "derivedFromMedia_fk",
          "title": "Derived From Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource from which this ac:Media resource was derived.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "derivedFromMediaID",
          "title": "Derived From Media ID",
          "description": "An identifier for an ac:Media resource from which this ac:Media resource was derived.",
          "notes": "This term can be used when an ac:Media resource has been separated from its source ac:Media resource. Recommended best practice is to use a globally unique identifier. The value in this field MAY refer to an ac:Media instance within or external to the dataset in which this record originated.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "isPartOfMedia_fk",
          "title": "Is Part Of Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource of which this ac:Media resource is a part.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/isROIOf",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "isPartOfMediaID",
          "title": "Is Part Of Media ID",
          "description": "An identifier for an ac:Media resource of which this ac:Media resource is a part.",
          "notes": "This term can be used to define an ac:RegionOfInterest within an ac:Media resource. Recommended best practice is to use a globally unique identifier. The value in this field MAY refer to an ac:Media instance within or external to the dataset in which this record originated.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/isROIOf",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "mediaType",
          "title": "Media Type",
          "description": "A category that best matches the nature of an ac:Media resource.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "`Sound`; `StillImage`; `MovingImage`; `InteractiveResource`; `Text`",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "title",
          "title": "Title",
          "description": "A name given to the resource.",
          "notes": "Concise title, name, or brief descriptive label of institution, resource collection, or individual resource. This field SHOULD include the complete title with all the subtitles, if any. It is strongly suggested to provide a title. The title facilitates interactions with humans: e.g., it could be used as display text of hyperlinks or to provide a choice of images in a pick list. The title is therefore highly useful and an effort should be made to provide it where it is not already available. When the resource is a collection without an institutional or official name, but with a thematic content, a descriptive title, e.g., \"Urban Ants of New England,\" would be suitable. In individual media resources depicting taxa, the scientific name or names of taxa often form a good title. Common names in addition to or instead of scientific names are also acceptable. Indications of action or roles captured by the media resource, such as predatory acts, are desirable (\"Rattlesnake eating deer mouse\", \"Pollinators of California Native Plants\").",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/title"
        },
        {
          "name": "description",
          "title": "Description",
          "description": "An account of the resource.",
          "notes": "Description of collection or individual resource, containing the Who, What, When, Where and Why as free-form text. This property optionally allows the presentation of detailed information and will in most cases be shown together with the resource title. If both a description and a caption are present in the metadata, a description is typically displayed instead of the resource, whereas a caption is displayed together with the resource. The description should aim to be a good proxy for the underlying media resource in cases where only text can be shown, whereas the caption may only make sense when shown together with the media. Thus, in HTML it would be appropriate to use dcterms:description values for alt attributes in img elements. Often only one of description or caption is present; choose the term most appropriate for your metadata. It is the role of implementers of an AC concrete representation (e.g., an XML Schema, an RDF representation, etc.) to decide and document how formatting advice will be represented in descriptions serialized according to such representations.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/description"
        },
        {
          "name": "caption",
          "title": "Caption",
          "description": "Free-form text to be displayed together with (rather than instead of) a resource that is suitable for captions (especially images).",
          "notes": "If both description and caption are present in the metadata, a description is typically displayed instead of the resource, a caption together with the resource. Thus, in HTML it would be appropriate to use ac:caption values in figcaption elements. Often only one of description or caption is present; choose the term most appropriate for your metadata.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/caption"
        },
        {
          "name": "subtypeLiteral",
          "title": "Subtype Literal",
          "description": "A subcategory that allows further specialization of an ac:Media resource type than mediaType.",
          "notes": "The subtypeLiteral term MUST NOT be applied to Collection objects. However, the Description term in the Content Coverage Vocabulary might add further description to a Collection object. Controlled string values SHOULD be selected from the Controlled Vocabulary for ac:subtype. Human-readable information about the Controlled Vocabulary for ac:subtype is at http://rs.tdwg.org/ac/doc/subtype/. It is best practice to use ac:subtype instead of ac:subytpeLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subtypeLiteral"
        },
        {
          "name": "subtypeIRI",
          "title": "Subtype IRI",
          "description": "A class, represented by an IRI, that provides for more specialization of an ac:Media resource type than dcterms:type.",
          "notes": "The subtype term MUST NOT be applied to Collection objects. However, the Description term in the Content Coverage Vocabulary might add further description to a Collection object. IRI values SHOULD be selected from the Controlled Vocabulary for ac:subtype. Human-readable information about the Controlled Vocabulary for ac:subtype is at http://rs.tdwg.org/ac/doc/subtype/. In text-based systems such as tables, IRI values MUST be in unabbreviated form. When an appropriate subtype is not available in the Audiovisual Core controlled vocabulary, a term IRI that is not in a TDWG namespace MAY be used. Conforming applications MAY choose to ignore controlled values not issued by Audiovisual Core. See ac:subtypeLiteral for usage with strings.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subtype"
        },
        {
          "name": "collectionCode",
          "title": "Collection Code",
          "description": "A name, acronym, coden, or initialism identifying a collection.",
          "notes": "",
          "examples": "`Mammals`; `Hildebrandt`; `EBIRD`; `VP`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/collectionCode"
        },
        {
          "name": "collectionID",
          "title": "Collection ID",
          "description": "An identifier for a collection.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/collectionID"
        },
        {
          "name": "createDate",
          "title": "Original Date and Time",
          "description": "The date and time the resource was created. For a digital file, this need not match a file-system creation time. For a freshly created resource, it should be close to that time, modulo the time taken to write the file. Later file transfer, copying, and so on, can make the file-system time arbitrarily different.",
          "notes": "The date of the creation of the original resource from which the digital media was derived or created. The date and time MUST comply with the World Wide Web Consortium (W3C) datetime practice, https://www.w3.org/TR/NOTE-datetime, which requires that date and time representation correspond to ISO 8601:1998, but with year fields always comprising 4 digits. This makes datetime records compliant with 8601:2004, https://www.iso.org/standard/40874.html. AC datetime values MAY also follow 8601:2004 for ranges by separating two ISO 8601 datetime fields by a solidus (\"forward slash\", '/'). When applied to a media resource with temporal extent such as audio or video, this property indicates the startTime of the recording. What constitutes \"original\" is determined by the metadata author. Example: Digitization of a photographic slide of a map would normally give the date at which the map was created; however a photographic work of art including the same map as its content may give the date of the original photographic exposure. Imprecise or unknown dates can be represented as ISO dates or ranges. Compare also Date and Time Digitized in the Resource Creation Vocabulary. See also the Wikipedia ISO 8601 entry, https://en.wikipedia.org/wiki/ISO_8601, for further explanation and examples.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "xmp",
          "dcterms:isVersionOf": "http://ns.adobe.com/xap/1.0/CreateDate"
        },
        {
          "name": "timeOfDay",
          "title": "Time Of Day",
          "description": "Free text information beyond exact clock times.",
          "notes": "",
          "examples": "`afternoon`; `twilight`",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/timeOfDay"
        },
        {
          "name": "digitizationDate",
          "title": "Digitization Date",
          "description": "A date on which the first digital version of a resource was created, if different from xmp:CreateDate.",
          "notes": "The date and time MUST comply with the World Wide Web Consortium (W3C) datetime practice, https://www.w3.org/TR/NOTE-datetime, which requires that date and time representation correspond to ISO 8601:1998, but with year fields always comprising 4 digits. This makes datetime records compliant with 8601:2004, https://www.iso.org/standard/40874.html. AC datetime values MAY also follow 8601:2004 for ranges by separating two ISO 8601 datetime fields by a solidus (\"forward slash\", '/'). Use the international (ISO/xml) format yyyy-mm-ddThh:mm (e.g., \"2007-12-31\" or \"2007-12-31T14:59\"). Where available, timezone information SHOULD be added. This is often not the media creation or modification date. For example, if photographic prints have been scanned, the date of that scanning is what this term carries, but Original Date and Time is that depicted in the print. In the case of digital images containing EXIF, whereas the EXIF capture date does not contain time zone information, but EXIF GPSDateStamp and GPSTimeStamp may be relevant as these include time-zone information. See also Metadata Working Group Guidelines for Handling Image Metadata, Version 2.0 (November 2010), https://web.archive.org/web/20180919181934/http://www.metadataworkinggroup.org/pdf/mwg_guidance.pdf, which has best practice advice on handling time-zone-less EXIF date/time data. See also the Wikipedia ISO 8601 entry, https://en.wikipedia.org/wiki/ISO_8601, for further explanation and examples.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/digitizationDate"
        },
        {
          "name": "captureDevice",
          "title": "Capture Device",
          "description": "Free form text describing the device or devices used to create the resource.",
          "notes": "It is best practice to record the device; this may include a combination such as camera plus lens, or camera plus microscope. Examples: \"Canon Supershot 2000\", \"Makroscan Scanner 2000\", \"Zeiss Axioscope with Camera IIIu\", \"SEM (Scanning Electron Microscope)\".",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/captureDevice"
        },
        {
          "name": "frameRate",
          "title": "Frame Rate",
          "description": "The decimal fraction representing the frequency (rate) at which consecutive images (frames) were captured in real time for a dcmi:MovingImage, expressed as the number of frames per second.",
          "notes": "This term represents the rate at which consecutive images were captured in real time, not the rate at which the media is encoded to play back the recording. For example, in a recording where 60 consecutive images (frames) are captured for each second of the real-time recording, this would be 60. In a time-lapse recording where one image (frame) is recorded every 5 seconds of recording, this would be 0.2.",
          "examples": "`60`; `0.2`",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/frameRate"
        },
        {
          "name": "resourceCreationTechnique",
          "title": "Resource Creation Technique",
          "description": "Information about technical aspects of the creation and digitization process of the resource. This includes modification steps (\"retouching\") after the initial resource capture.",
          "notes": "Annotating whether and how a resource has been modified or edited significantly in ways that are not immediately obvious to, or expected by, consumers is of special significance. Examples for images are: Removing a distracting twig from a picture, moving an object to a different surrounding, changing the color in parts of the image, or blurring the background of an image. Modifications that are standard practice and expected or obvious are not necessary to document; examples of such practices include changing resolution, cropping, minor sharpening or overall color correction, and clearly perceptible modifications (e.g., addition of arrows or labels, or the placement of multiple pictures into a table.) If it is only known that significant modifications were made, but no details are known, a general statement like \"Media may have been manipulated to improve appearance\" may be appropriate. See also Subject Preparation Technique. Encoding method or settings, numbers of channels, lighting, frames per second, data rate, interlaced or progressive, multiflash lighting, remote control, automatic interval exposure.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/resourceCreationTechnique"
        },
        {
          "name": "sample-rate",
          "title": "Sample Rate",
          "description": "Associates a digital signal to its sample rate.",
          "notes": "Numeric value in hertz (Hz). For example, a Service Access Point may have a specific resolution, quality, or format. “Sample rate” is distinct from the related concept of “bit rate” for compressed files such as MP3, and is applicable to both uncompressed and compressed files. See http://musicontology.com/specification/#term-sample_rate for additional information.",
          "examples": "",
          "type": "number",
          "format": "default",
          "namespace": "mo",
          "dcterms:isVersionOf": "http://purl.org/ontology/mo/sample_rate"
        },
        {
          "name": "modified",
          "title": "Modified",
          "description": "Date on which the resource was changed.",
          "notes": "Date that the media resource was altered. The date and time MUST comply with the World Wide Web Consortium (W3C) datetime practice, https://www.w3.org/TR/NOTE-datetime, which requires that date and time representation correspond to ISO 8601:1998, https://www.iso.org/standard/40874.html, but with year fields always comprising 4 digits. This makes datetime records compliant with 8601:2004. AC datetime values MAY also follow 8601:2004 for ranges by separating two ISO 8601 datetime fields by a solidus (\"forward slash\", '/'). dcterms:modified permits all modification dates to be recorded, or if only one is recorded, it is assumed to be the latest. See also the Wikipedia ISO 8601 entry, https://en.wikipedia.org/wiki/ISO_8601, for further explanation and examples.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/modified"
        },
        {
          "name": "language",
          "title": "Language",
          "description": "A language of the resource.",
          "notes": "URI from the ISO639-2 list of URIs for ISO 3-letter language codes, http://id.loc.gov/vocabulary/iso639-2. An image may contain language such as superimposed labels. If an image is of a natural scene or organism, without any language included, the resource is language-neutral with URI http://id.loc.gov/vocabulary/iso639-2/zxx corresponding to ISO ISO639-2 code \"zxx\". Resources with present but unknown language are to be coded as undetermined, with URI http://id.loc.gov/vocabulary/iso639-2/und corresponding to ISO639-2 code \"und\". Regional dialects or other special cases should conform to the ISO639-5 Alpha-3 Code for Language Families and Groups, http://id.loc.gov/vocabulary/iso639-5.html, where possible or the IETF Best Practices for Tags Identifying Languages, https://tools.ietf.org/html/rfc5646, where not. See also the entry for dc:language in the Audiovisual Core term list document and see the DCMI FAQ on DC and DCTERMS Namespaces, https://web.archive.org/web/20171126043657/https://github.com/dcmi/repository/blob/master/mediawiki_wiki/FAQ/DC_and_DCTERMS_Namespaces.md, for discussion of the rationale for terms in two namespaces. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/language"
        },
        {
          "name": "languageIRI",
          "title": "Language IRI",
          "description": "A language of the resource.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/language"
        },
        {
          "name": "metadataDate",
          "title": "Metadata Date",
          "description": "The date and time that any metadata for this resource was last changed. It should be the same as or more recent than dcterms:modified.",
          "notes": "Point in time recording when the last modification to metadata (not necessarily the media object itself) occurred. The date and time MUST comply with the World Wide Web Consortium (W3C) datetime practice, https://www.w3.org/TR/NOTE-datetime, which requires that date and time representation correspond to ISO 8601:1998, but with year fields always comprising 4 digits. This makes datetime records compliant with 8601:2004, https://www.iso.org/standard/40874.html. AC datetime values MAY also follow 8601:2004 for ranges by separating two ISO 8601 datetime fields by a solidus (\"forward slash\", '/'). This is not dcterms:modified, which refers to the resource itself rather than its metadata. See also the Wikipedia ISO 8601 entry, https://en.wikipedia.org/wiki/ISO_8601, for further explanation and examples.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "xmp",
          "dcterms:isVersionOf": "http://ns.adobe.com/xap/1.0/MetadataDate"
        },
        {
          "name": "metadataLanguageLiteral",
          "title": "Metadata Language Literal",
          "description": "Language of description and other metadata (but not necessarily of the image itself) represented as an ISO639-2 three letter language code.",
          "notes": "ISO639-1 two-letter codes are permitted but deprecated. At least one of ac:metadataLanguage and ac:metadataLanguageLiteral MUST be supplied but, when feasible, supplying both might make the metadata more widely useful. They MUST specify the same language. In case of ambiguity, ac:metadataLanguage prevails. This is NOT dc:language, which is about the resource, not the metadata. Metadata Language is deliberately single-valued, imposing on unstructured serializations a requirement that multi-lingual metadata be represented as separate, complete, metadata records. Audiovisual Core requires that each record also contains the language-neutral terms. In the absence of this requirement, metadata consumers would need to know which terms are language-neutral and merge these terms from all provided metadataLanguages into a single record. Metadata consumers may re-combine the information based on the dcterms:identifier that identifies the multimedia resource. Nothing in this document would, however, prevent an implementer, e.g., of an XML-Schema representation, from providing a fully hierarchical schema in which language neutral terms occur only a single time, and only the language-specific terms are repeated in a way that unambiguously relates them to a metadata language. In RDF it may be a simple repetition of plain literals associated with a language (e.g., xml:lang attribute in RDF/XML). The language attribute would then be required in Audiovisual Core and would replace ac:metadataLanguage.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/metadataLanguageLiteral"
        },
        {
          "name": "metadataLanguageIRI",
          "title": "Metadata Language IRI",
          "description": "The URI of the language of description and other metadata (but not necessarily of the image itself).",
          "notes": "Recommended best practice is to use the ISO639-2 list of URIs for ISO 3-letter language codes, http://id.loc.gov/vocabulary/iso639-2. At least one of ac:metadataLanguage and ac:metadataLanguageLiteral should be supplied but, when feasible, supplying both might make the metadata more widely useful. They must specify the same language. In case of ambiguity, ac:metadataLanguage prevails. This is NOT dcterms:language, which is about the resource, not the metadata. Metadata Language is deliberately single-valued, imposing on unstructured serializations a requirement that multi-lingual metadata be represented as separate, complete, metadata records. Audiovisual Core requires that each record also contains the language-neutral terms. In the absence of this requirement, metadata consumers would need to know which terms are language-neutral and merge these terms from all provided metadataLanguages into a single record. Metadata consumers may re-combine the information based on the dcterms:identifier that identifies the multimedia resource. Nothing in this document would, however, prevent an implementer, e.g., of an XML-Schema representation, from providing a fully hierarchical schema in which language neutral terms occur only a single time, and only the language-specific terms are repeated in a way that unambiguously relates them to a metadata language. In RDF it may be a simple repetition of plain literals associated with a language (e.g., xml:lang attribute in RDF/XML). The language attribute would then be required in Audiovisual Core and would replace ac:metadataLanguage.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/metadataLanguage"
        },
        {
          "name": "providerManagedID",
          "title": "Provider-managed ID",
          "description": "A free-form identifier (a simple number, an alphanumeric code, a URL, etc.) for the resource that is unique and meaningful primarily for the data provider.",
          "notes": "Ideally, this would be a globally unique identifier (GUID), but the provider is encouraged to supply any form of identifier that simplifies communications on resources within their project and helps to locate individual data items in the provider's data repositories. It is the provider's decision whether to expose this value or not.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/providerManagedID"
        },
        {
          "name": "available",
          "title": "Available",
          "description": "Date (often a range) that the resource became or will become available.",
          "notes": "The date (often a range) that the resource became or will become available. The date and time MUST comply with the World Wide Web Consortium (W3C) datetime practice, https://www.w3.org/TR/NOTE-datetime, which requires that date and time representation correspond to ISO 8601:1998, but with year fields always comprising 4 digits. This makes datetime records compliant with 8601:2004, https://www.iso.org/standard/40874.html. AC datetime values MAY also follow 8601:2004 for ranges by separating two ISO 8601 datetime fields by a solidus (\"forward slash\", '/'). A use case is the harvesting of metadata published before the media are available, which are pending a formal publication elsewhere. One important example is the case of metadata that documents an occurrence, which metadata harvesters might exploit without use of the media. See also the Wikipedia ISO 8601 entry, https://en.wikipedia.org/wiki/ISO_8601, for further explanation and examples.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/available"
        },
        {
          "name": "hasServiceAccessPoint",
          "title": "Service Access Point",
          "description": "In a chosen serialization (RDF, XML Schema, etc.) the potentially multiple service access points (e.g., for different resolutions of an image) might be provided in a referenced or in a nested object.",
          "notes": "This property identifies one such access point. That is, each of potentially multiple values of hasServiceAccessPoint identifies a set of representation-dependent metadata using the properties defined under the Service Access Point Vocabulary section of the Audiovisual Core Term List document. Some serializations may flatten the model of service-access points by (a) dropping ac:hasServiceAccessPoint, ac:variant and ac:variantLiteral, (b) repeating properties from the Service Access Point Vocabulary and prefixing them with values of ac:variantLiteral. If such a flat serialization is necessary for services, we recommend to select from among term names of the form \"AB\" where \"A\" is one of thumbnail, trailer, lowerQuality, mediumQuality, goodQuality, bestQuality, offline and \"B\" is one of AccessURI, Format, Extent, FurtherInformationURL, LicensingException, ServiceExpectation (example: thumbnailAccessURI). Implementers in specific constraint languages such as XML Schema or RDF may wish to make Access URI and perhaps dcterms:format mandatory on instances of the service access point.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/hasServiceAccessPoint"
        },
        {
          "name": "serviceExpectation",
          "title": "Service Expectation",
          "description": "A term that describes what service expectations users may have of the ac:accessURI.",
          "notes": "Recommended terms include online (denotes that the URL is expected to deliver the resource), authenticate (denotes that the URL delivers a login or other authentication interface requiring completion before delivery of the resource) published (non digital, denotes that the URL is the identifier of a non-digital published work, for example a doi.) Communities should develop their own controlled vocabularies for ac:serviceExpectation.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/serviceExpectation"
        },
        {
          "name": "accessURI",
          "title": "Access URI",
          "description": "A URI that uniquely identifies a service that provides a representation of the underlying resource.",
          "notes": "If this resource can be acquired by an http request, its http URL SHOULD be given. If not, but it has some URI in another URI scheme, that MAY be given here. Value might point to something offline, such as a published CD, etc. For example, the doi of a published CD would be a suitable value.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/accessURI"
        },
        {
          "name": "format",
          "title": "Format",
          "description": "The file format, physical medium, or dimensions of the resource, denoted by a controlled value string.",
          "notes": "A controlled value string describing the technical format of the resource (file format or physical medium). The string SHOULD be a controlled value from the Audiovisual Core Controlled Vocabulary for Dublin Core dcterms:format, although it MAY be any Media Type (MIME type) value from the IANA list of Media Types (https://www.iana.org/assignments/media-types/media-types.xhtml) or any commonly used file extension string. Human-readable information about the Controlled Vocabulary for format is at http://rs.tdwg.org/ac/doc/format/. This term can be used to describe offline digital content. In cases where the provided Service Access Point URL includes a standard file extension from which the format can be inferred, it is permissible to not provide a value for this property. See also the entry for dcterms:format in the Audiovisual Core term list document and see the DCMI FAQ on DC and DCTERMS Namespaces, https://web.archive.org/web/20171126043657/https://github.com/dcmi/repository/blob/master/mediawiki_wiki/FAQ/DC_and_DCTERMS_Namespaces.md, for discussion of the rationale for terms in two namespaces. It is best practice to use dcterms:format instead of dc:format whenever practical. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/format"
        },
        {
          "name": "formatIRI",
          "title": "Format IRI",
          "description": "The file format, physical medium, or dimensions of the resource, denoted by an IRI.",
          "notes": "An IRI denoting the technical format of the resource (file format or physical medium). The IRI SHOULD be from the Audiovisual Core Controlled Vocabulary for Dublin Core dcterms:format. Human-readable information about the Controlled Vocabulary for dcterms:format is at http://rs.tdwg.org/ac/doc/format/. In cases where an IRI for the format does not exist in the controlled vocabulary, a provider can omit this property and provide a media type or file extension value for dc:format. See the DCMI FAQ on DC and DCTERMS Namespaces, https://web.archive.org/web/20171126043657/https://github.com/dcmi/repository/blob/master/mediawiki_wiki/FAQ/DC_and_DCTERMS_Namespaces.md, for discussion of the rationale for terms in two namespaces. Labels have no effect on information discovery and are only suggestions.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/format"
        },
        {
          "name": "variantLiteral",
          "title": "Variant Literal",
          "description": "The category describing this Service Access Point variant, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:variant. Human-readable information about the Controlled Vocabulary for ac:variant is at http://rs.tdwg.org/ac/doc/variant/. It is best practice to use ac:variant instead of ac:variantLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/variantLiteral"
        },
        {
          "name": "variantIRI",
          "title": "Variant IRI",
          "description": "The category describing this Service Access Point variant, denoted by an IRI.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:variant. Human-readable information about the Controlled Vocabulary for ac:variant is at http://rs.tdwg.org/ac/doc/variant/. In text-based systems such as tables, IRI values MUST be in unabbreviated form.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/variant"
        },
        {
          "name": "variantDescription",
          "title": "Variant Description",
          "description": "Text that describes this Service Access Point variant.",
          "notes": "Most variants (thumb, low-res, high-res) are self-explanatory and it is best practice to leave this property empty if no special description is needed. It is provided for cases that require additional information (e.g., video shortened instead of simply quality reduced).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/variantDescription"
        },
        {
          "name": "pixelXDimension",
          "title": "Image Width",
          "description": "Information specific to compressed data. When a compressed file is recorded, the valid width of the meaningful image shall be recorded in this tag, whether or not there is padding data or a restart marker. This tag shall not exist in an uncompressed file.",
          "notes": "The width in pixels of the media specified by the access point. Contrary to the definition, in Audiovisual Core, this term MAY be used with uncompressed files. Audiovisual Core uses this term for any image type, including those to which EXIF does not apply and those that are not a compressed file type like JPEG.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "exif",
          "dcterms:isVersionOf": "http://ns.adobe.com/exif/1.0/PixelXDimension",
          "constraints": {
            "minimum": 1
          }
        },
        {
          "name": "pixelYDimension",
          "title": "Image Height",
          "description": "Information specific to compressed data. When a compressed file is recorded, the valid height of the meaningful image shall be recorded in this tag, whether or not there is padding data or a restart marker. This tag shall not exist in an uncompressed file.",
          "notes": "The height in pixels of the media specified by the access point. Contrary to the definition, in Audiovisual Core, this term MAY be used with uncompressed files. Audiovisual Core uses this term for any image type, including those to which EXIF does not apply and those that are not a compressed file type like JPEG.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "exif",
          "dcterms:isVersionOf": "http://ns.adobe.com/exif/1.0/PixelYDimension",
          "constraints": {
            "minimum": 1
          }
        },
        {
          "name": "hashFunction",
          "title": "Hash Function",
          "description": "The cryptographic hash function used to compute the value given in the ac:hashValue.",
          "notes": "Recommended values include MD5, SHA-1, SHA-224,SHA-256, SHA-384, SHA-512, SHA-512/224 and SHA-512/256",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/hashFunction"
        },
        {
          "name": "hashValue",
          "title": "Hash Value",
          "description": "The value computed by an ac:hashFunction applied to the media that will be delivered at the access point.",
          "notes": "Best practice is to also specify the ac:hash Function using one of the standard literals from the Notes there.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/hashValue"
        },
        {
          "name": "furtherInformationURL",
          "title": "Further Information URL",
          "description": "The URL of a Web site that provides additional information about the version of the ac:Media resource that is provided by the ac:hasServiceAccessPoint.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/furtherInformationURL"
        },
        {
          "name": "commenterLiteral",
          "title": "Commenter Literal",
          "description": "A name of a dcterms:Agent primarily responsible for providing the ac:comments",
          "notes": "See also ac:reviewerComments for the distinction between ac:comments and ac:reviewerComments. See also the entry for ac:commenter and the section Namespaces, Prefixes and Term Names in the Audiovisual Core Term List document for discussion of the rationale for separate terms taking URI values from those taking Literal values where both are possible. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions.",
          "examples": "`anonymous`",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/commenterLiteral"
        },
        {
          "name": "commenter_fk",
          "title": "Commenter (Foreign Key)",
          "description": "An identifier for a dcterms:Agent primarily responsible for providing the ac:comments.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "commenterID",
          "title": "Commenter ID",
          "description": "An identifier for a dcterms:Agent primarily responsible for providing the ac:comments.",
          "notes": "Implementers and communities of practice MAY produce restrictions or recommendations on the choice of vocabularies. See also ac:reviewerComments for the distinction between ac:comments and ac:reviewerComments. See also the entry for ac:commenterLiteral and the section Namespaces, Prefixes and Term Names in the Audiovisual Core Term List document for discussion of the rationale for separate terms taking URI values from those taking Literal values where both are possible. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions. The value in this field MAY refer to a dcterms:BibliographicResource within or external to the dataset in which this record originated. The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "comments",
          "title": "Comments",
          "description": "Any comment provided on the ac:Media resource, as free-form text.",
          "notes": "Best practice would also identify the ac:commenter. Comments may refer to the resource itself (e.g., asserting a taxon name or location of a biological subject in an image), or to the relation between resource and associated metadata (e.g., asserting that the taxon name given in the metadata is wrong, without asserting a positive identification). There is a separate item from ac:reviewerComments, which is defined more as an expert-level review. Implementers or communities of practice might establish conventions about the meaning of the absence of an ac:commenter, but this specification is silent on that matter.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/comments"
        },
        {
          "name": "rating",
          "title": "Rating",
          "description": "A user-assigned rating for this file. The value shall be -1 or in the range [0..5], where -1 indicates \"rejected\" and 0 indicates \"unrated\". If xmp:Rating is not present, a value of 0 should be assumed.",
          "notes": "A rating for an ac:Media resource, provided by record originators or editors, with '1' (worst) to '5' (best). Anticipated usage is for a typical 'star rating' UI, with the addition of a notion of rejection. Values MAY be decimal numbers in the permitted range. The origin of the rating is not communicated. It may, e.g., be based on user feedback or on editorial ratings. By \"user-assigned\" is meant assigned by the originator or editor of the record using the term.",
          "examples": "`1`; `5`",
          "type": "string",
          "format": "default",
          "namespace": "xmp",
          "dcterms:isVersionOf": "http://ns.adobe.com/xap/1.0/Rating"
        },
        {
          "name": "reviewerLiteral",
          "title": "Reviewer Literal",
          "description": "A name of a dcterms:Agent primarily responsible for providing the ac:reviewerComments",
          "notes": "If present, then resource is peer-reviewed, even if ac:reviewerComments is absent or empty. Its presence tells whether an expert in the subject featured in the media has reviewed an ac:Media resource or collection and approved its metadata description; MUST display a name or the literal \"anonymous\" (= anonymously reviewed). Provider is asserting they accept this review as competent. See also ac:reviewer and the section Namespaces, Prefixes and Term Names in the Audiovisual Core Term List document for discussion of the rationale for separate terms taking URI values from those taking Literal values where both are possible. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/reviewerLiteral"
        },
        {
          "name": "reviewer_fk",
          "title": "Reviewer (Foreign Key)",
          "description": "An identifier for a dcterms:Agent primarily responsible for providing the ac:reviewerComments.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "reviewerID",
          "title": "Reviewer ID",
          "description": "An identifier for a dcterms:Agent primarily responsible for providing the ac:reviewerComments",
          "notes": "If present, then resource is peer-reviewed, even if ac:reviewerComments is absent or empty. Its presence tells whether an expert in the subject featured in the media has reviewed an ac:Media resource or collection and approved its metadata description; MUST display a name or the literal \"anonymous\" (= anonymously reviewed). Provider is asserting they accept this review as competent. See also ac:reviewerLiteral and the section Namespaces, Prefixes and Term Names in the Audiovisual Core Term List document for discussion of the rationale for separate terms taking URI values from those taking Literal values where both are possible. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions. The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "reviewerComments",
          "title": "Reviewer Comments",
          "description": "Any comment provided by a reviewer with expertise in the subject, as free-form text.",
          "notes": "Reviewer Comments may refer to the resource itself (e.g., asserting a taxon name or location of a biological subject in an image), or to the relation between resource and associated metadata (e.g., asserting that the taxon name given in the metadata is wrong, without asserting a positive identification). There is a separate item \"Comments\" for text from commenters of unrecorded expertise.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/reviewerComments"
        },
        {
          "name": "physicalSetting",
          "title": "Physical Setting",
          "description": "The setting of the content represented in an ac:Media resource, such as images, sounds, and movies if the provider deems them relevant.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/physicalSetting"
        },
        {
          "name": "subjectCategory",
          "title": "Subject Category",
          "description": "A term to describe the content of a image or a region of interest within an image using a controlled value string.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/CVtermLiteral"
        },
        {
          "name": "subjectCategoryIRI",
          "title": "Subject Category IRI",
          "description": "An IRI of a controlled vocabulary value for the subject category of an ac:Media resource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "Iptc4xmpExt",
          "dcterms:isVersionOf": "http://iptc.org/std/Iptc4xmpExt/2008-02-29/CVterm"
        },
        {
          "name": "subjectCategoryVocabulary",
          "title": "Subject Category Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:subjectCategory is given.",
          "notes": "The Audiovisual Core recommended vocabularies do not need to be cited here. There is no required linkage between individual Subject Category terms and the vocabulary; the mechanism is intended to support discovery of the normative URI for a term, but not guarantee it.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectCategoryVocabulary"
        },
        {
          "name": "tag",
          "title": "Tag",
          "description": "General keywords or tags.",
          "notes": "Tags may be multi-worded phrases. Where scientific names, common names, geographic locations, etc. are separable, those should go into the more specific coverage metadata items provided further below. Examples: \"flower diagram\". Character or part keywords like \"leaf\", or \"flower color\" are especially desirable.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/tag"
        },
        {
          "name": "subjectPartLiteral",
          "title": "Subject Part Literal",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectPart. It is best practice to use ac:subjectPart instead of ac:subjectPartLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPartLiteral"
        },
        {
          "name": "subjectPartIRI",
          "title": "Subject Part IRI",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by an IRI.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPart"
        },
        {
          "name": "subjectOrientationLiteral",
          "title": "Subject Orientation Literal",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectOrientation. It is best practice to use ac:subjectOrientation instead of ac:subjectOrientationLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientationLiteral"
        },
        {
          "name": "subjectOrientationIRI",
          "title": "Subject Orientation IRI",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device, denoted by an IRI.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientation"
        },
        {
          "name": "startTime",
          "title": "Start Time in Seconds",
          "description": "The beginning of a temporal region, specified as an absolute offset relative to the beginning of an ac:Media resource (this corresponds to Normal Play Time RFC 2326), specified as seconds, with an optional fractional part to indicate milliseconds or finer.",
          "notes": "This term MUST only be applied to a region of interest.",
          "examples": "",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/startTime",
          "constraints": {
            "minimum": 0
          }
        },
        {
          "name": "endTime",
          "title": "End Time in Seconds",
          "description": "The end of a temporal region, specified as an absolute offset relative to the beginning of an ac:Media resource (this corresponds to Normal Play Time RFC 2326), specified as seconds, with an optional fractional part to indicate milliseconds or finer.",
          "notes": "This term MUST only be applied to a region of interest.",
          "examples": "",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/endTime",
          "constraints": {
            "minimum": 0
          }
        },
        {
          "name": "startTimestamp",
          "title": "Start Time Stamp",
          "description": "The beginning of a temporal region, specified as real-world clock time ISO 8601 timestamps, using UTC timezone, with an optional fractional part to indicate milliseconds or finer. There is no limit on the number of decimal places for the decimal fraction.",
          "notes": "This term MAY be applied to a region of interest or an entire media item.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/startTimestamp"
        },
        {
          "name": "endTimestamp",
          "title": "End Time Stamp",
          "description": "The end of a temporal region, specified as real-world clock time ISO 8601 timestamps, using UTC timezone, with an optional fractional part to indicate milliseconds or finer. There is no limit on the number of decimal places for the decimal fraction.",
          "notes": "This term MAY be applied to a region of interest or an entire media item.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/endTimestamp"
        },
        {
          "name": "mediaDuration",
          "title": "Media Duration",
          "description": "The playback duration of an audio or video file in seconds.",
          "notes": "This might be different from the time in seconds calculated as the difference of ac:endTimestamp and ac:startTimestamp if ac:mediaSpeed is not equal to 1.",
          "examples": "",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/mediaDuration",
          "constraints": {
            "minimum": 0
          }
        },
        {
          "name": "mediaSpeed",
          "title": "Media Speed",
          "description": "The decimal fraction representing the natural speed over the encoded speed.",
          "notes": "If a value for ac:mediaSpeed is not provided, applications SHOULD assume that 1.0 is the value. For example, in a time-lapse recording where 60 seconds of natural time is represented in 1 second of media this would be 60. In a time-expanded recording where 1 second of recording is represented in 5 seconds of media, this would be 0.2.",
          "examples": "`60`; `0.2`",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/mediaSpeed"
        },
        {
          "name": "freqHigh",
          "title": "Upper frequency bound",
          "description": "The highest frequency of the phenomena reflected in the multimedia item or Region of Interest.",
          "notes": "Numeric value in hertz (Hz). This term refers to the sound events depicted and not to the constraints of the recording medium, so are in principle independent from sampleRate. If dwc:scientificName is specified and if applied to the entire multimedia item, these frequency bounds refer to the sounds of the species given in the dwc:scientificName throughout the whole recording. Although many users will specify both freqLow and freqHigh, it is permitted to specify just one or the other, for example if only one of the bounds is discernible.",
          "examples": "`60`",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/freqHigh"
        },
        {
          "name": "freqLow",
          "title": "Lower frequency bound",
          "description": "The lowest frequency of the phenomena reflected in the multimedia item or Region of Interest.",
          "notes": "Numeric value in hertz (Hz). This term refers to the sound events depicted and not to the constraints of the recording medium, so are in principle independent from sampleRate. If dwc:scientificName is specified and if applied to the entire multimedia item, these frequency bounds refer to the sounds of the species given in the dwc:scientificName throughout the whole recording. Although many users will specify both freqLow and freqHigh, it is permitted to specify just one or the other, for example if only one of the bounds is discernible.",
          "examples": "`60`",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/freqLow"
        },
        {
          "name": "xFrac",
          "title": "Fractional X",
          "description": "The horizontal position of a reference point, measured from the left side of an ac:Media resource and expressed as a decimal fraction of the width of an ac:Media resource.",
          "notes": "A valid value MUST be greater than or equal to zero and less than or equal to one. The precision of this value SHOULD be great enough that when the ac:xFrac value is multiplied by the exif:PixelXDimension of the Best Quality variant of the Service Access point, rounding to the nearest integer results in the same horizontal pixel location originally used to define the point. This point can serve as the horizontal position of the upper left corner of a bounding rectangle, or as the center of a circle.",
          "examples": "`0.5`; `1`",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/xFrac",
          "constraints": {
            "minimum": 0,
            "maximum": 1
          }
        },
        {
          "name": "yFrac",
          "title": "Fractional Y",
          "description": "The vertical position of a reference point, measured from the top of an ac:Media resource and expressed as a decimal fraction of the height of an ac:Media resource.",
          "notes": "A valid value MUST be greater than or equal to zero and less than or equal to one. The precision of this value SHOULD be great enough that when the ac:yFrac value is multiplied by the exif:PixelYDimension of the Best Quality variant of the Service Access point, rounding to the nearest integer results in the same vertical pixel originally used to define the point. This point can serve as the vertical position of the upper left corner of a bounding rectangle, or as the center of a circle.",
          "examples": "`0.5`; `1`",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/yFrac",
          "constraints": {
            "minimum": 0,
            "maximum": 1
          }
        },
        {
          "name": "heightFrac",
          "title": "Fractional Height",
          "description": "The height of the bounding rectangle, expressed as a decimal fraction of the height of an ac:Media resource.",
          "notes": "The sum of a valid value plus ac:yFrac MUST be greater than zero and less than or equal to one. The precision of this value SHOULD be great enough that when ac:heightFrac and ac:yFrac are used with the exif:PixelYDimension of the Best Quality variant of the Service Access point to calculate the lower right corner of the rectangle, rounding to the nearest integer results in the same vertical pixel originally used to define the point. This term MUST NOT be used with ac:radius to define a region of interest. Zero-sized bounding rectangles are not allowed. To designate a point, use the radius option with a zero value.",
          "examples": "`0.5`; `1`",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/heightFrac",
          "constraints": {
            "minimum": 0,
            "maximum": 1
          }
        },
        {
          "name": "widthFrac",
          "title": "Fractional Width",
          "description": "The width of the bounding rectangle, expressed as a decimal fraction of the width of an ac:Media resource.",
          "notes": "The sum of a valid value plus ac:xFrac MUST be greater than zero and less than or equal to one. The precision of this value SHOULD be great enough that when ac:widthFrac and ac:xFrac are used with the exif:PixelXDimension of the Best Quality variant of the Service Access point to calculate the lower right corner of the rectangle, rounding to the nearest integer results in the same horizontal pixel originally used to define the point. This term MUST NOT be used with ac:radius to define a region of interest. Zero-sized bounding rectangles are not allowed. To designate a point, use the radius option with a zero value.",
          "examples": "`0.5`; `1`",
          "type": "number",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/widthFrac",
          "constraints": {
            "minimum": 0,
            "maximum": 1
          }
        },
        {
          "name": "radius",
          "title": "Radius",
          "description": "The radius of a bounding circle or arc, expressed as a fraction of the width of an ac:Media resource.",
          "notes": "A valid value MUST be greater than or equal to zero. A valid value MAY cause the designated circle to extend beyond the bounds of an ac:Media resource. In that case, the arc within an ac:Media resource plus the bounds of an ac:Media resource specify the region of interest. This term MUST NOT be used with ac:widthFrac or ac:heightFrac to define a region of interest. This term may be used with ac:xFrac and ac:yFrac to define a point. In that case, the implication is that the point falls on some object of interest within an ac:Media resource, but nothing more can be assumed about the bounds of that object.",
          "examples": "`100`",
          "type": "integer",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/radius",
          "constraints": {
            "minimum": 0
          }
        },
        {
          "name": "provenance_fk",
          "title": "Provenance (Foreign Key)",
          "description": "An identifier for a dwc:Provenance.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/provenanceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "usagePolicy_fk",
          "title": "Usage Policy (Foreign Key)",
          "description": "An identifier for a dwc:UsagePolicy for an ac:Media.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/usagePolicyID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "owner",
          "title": "Owner",
          "description": "A list of legal owners of the resource.",
          "notes": "`unknown`",
          "examples": "`The names of the owners `Ron Thomas, Roz Thomas` or a URI that identifies the owner`",
          "type": "string",
          "format": "default",
          "namespace": "xmprights",
          "dcterms:isVersionOf": "http://ns.adobe.com/xap/1.0/rights/Owner"
        },
        {
          "name": "owner_fk",
          "title": "Owner (Foreign Key)",
          "description": "An identifier for a dcterms:Agent that is the owner of the ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "license",
          "title": "License",
          "description": "A legal document giving official permission to do something with the resource.",
          "notes": "Recommended practice is to identify the license document with a URI. If this is not possible or feasible, a literal value that identifies the license may be provided.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/license"
        }
      ],
      "primaryKey": "media_pk",
      "weakPrimaryKey": "mediaID",
      "foreignKeys": [
        {
          "fields": "derivedFromMedia_fk",
          "predicate": "derived from",
          "reference": {
            "resource": "",
            "fields": "media_pk"
          }
        },
        {
          "fields": "isPartOfMedia_fk",
          "predicate": "part of",
          "reference": {
            "resource": "",
            "fields": "media_pk"
          }
        },
        {
          "fields": "commenter_fk",
          "predicate": "comment by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "reviewer_fk",
          "predicate": "reviewed by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "provenance_fk",
          "predicate": "has",
          "reference": {
            "resource": "provenance",
            "fields": "provenance_pk"
          }
        },
        {
          "fields": "usagePolicy_fk",
          "predicate": "has",
          "reference": {
            "resource": "usage-policy",
            "fields": "usagePolicy_pk"
          }
        },
        {
          "fields": "owner_fk",
          "predicate": "owned by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "derivedFromMediaID",
          "predicate": "derived from",
          "reference": {
            "resource": "",
            "fields": "mediaID"
          }
        },
        {
          "fields": "isPartOfMediaID",
          "predicate": "part of",
          "reference": {
            "resource": "",
            "fields": "mediaID"
          }
        },
        {
          "fields": "commenterID",
          "predicate": "comment by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "reviewerID",
          "predicate": "reviewed by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "media-agent-role": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/media-agent-role",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/media-agent-role.json",
      "name": "media-agent-role",
      "title": "Media Agent Role",
      "description": "A role filled by a dcterms:Agent with respect to an ac:Media entity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//media-agent-role",
      "fields": [
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agentRole",
          "title": "Agent Role",
          "description": "A category that best matches the nature of a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary for the roles appropriate to the class of resource a dcterms:AgentRole is related to.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "agentRoleIRI",
          "title": "Agent Role IRI",
          "description": "An IRI of the controlled vocabulary value for a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "agentRoleSource",
          "title": "Agent Role Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:agentRole is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "agentRoleOrder",
          "title": "Agent Role Order",
          "description": "A numerical position of an AgentRole in a set of AgentRoles that have the same combination of agentRole, agentRoleIRI, agentRoleSource and related target identifier.",
          "notes": "One could use dwc:agentRoleOrder to create an ordered list of collectors (dwc:agentRole = 'collector') for a dwc:MaterialEntity, for example. The first would have dwc:agentRoleOrder=1, the second would have dwc:agentRoleOrder=2.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRoleOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "agentRoleDate",
          "title": "Agent Role Date",
          "description": "An interval during which a dcterms:AgentRole was in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        }
      ],
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "role for",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "agent_fk",
          "predicate": "role holder",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "media-assertion": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/media-assertion",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/media-assertion.json",
      "name": "media-assertion",
      "title": "Media Assertion",
      "description": "A dwc:Assertion made by a dcterms:Agent about an ac:Media entity.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
      "fields": [
        {
          "name": "assertionID",
          "title": "Assertion ID",
          "description": "An identifier for a dwc:Assertion.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionID",
          "constraints": {
            "required": false,
            "unique": true
          }
        },
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimAssertionType",
          "title": "Verbatim Assertion Type",
          "description": "A string representing the type of dwc:Assertion as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original name for a dwc:assertionType. This term is meant to be used in addition to dwc:assertionType, not instead of it.",
          "examples": "`water_temp`; `Fish biomass`; `sampling net mesh size`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimAssertionType"
        },
        {
          "name": "assertionType",
          "title": "Assertion Type",
          "description": "A category that best matches the nature of a dwc:Assertion.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`tail length`; `temperature`; `trap line length`; `survey area`; `trap type`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionType"
        },
        {
          "name": "assertionTypeIRI",
          "title": "Assertion Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementType"
        },
        {
          "name": "assertionTypeSource",
          "title": "Assertion Type Source",
          "description": "A reference to the controlled vocabulary in which the definition of a value in dwc:assertionType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionMadeDate",
          "title": "Assertion Made Date",
          "description": "A date on which a dwc:Assertion was created.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionMadeDate"
        },
        {
          "name": "assertionEffectiveDate",
          "title": "Assertion Effective Date",
          "description": "A date-time or time interval during which an asserted state or measurement was deemed to be in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        },
        {
          "name": "assertionValue",
          "title": "Assertion Value",
          "description": "An asserted value.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionValue"
        },
        {
          "name": "assertionValueIRI",
          "title": "Assertion Value IRI",
          "description": "An IRI of the controlled vocabulary value for a value of a dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementValue"
        },
        {
          "name": "assertionValueSource",
          "title": "Assertion Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:assertionValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionUnit",
          "title": "Assertion Unit",
          "description": "Unit associated with the value in dwc:assertionValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure http://www.wurvoc.org/vocabularies/om-1.8/ of SI units, derived units, or other non-SI units accepted for use within the SI. For units that are composed of multiple parts, use the patterns as given in \"A Primer for Communicating Mathematics via Plain Text\" (https://cse.sc.edu/~fenner/latex-ASCII.pdf) by Stephen Fenner (e.g., `g/cm^3` for grams per cubic centimeter). For other units, provide the value as a recognizable standard (e.g., '%') or written out in full and in the plural (e.g., `individuals`). It is fine to provide non-SI units in the original language of the dataset.",
          "examples": "`m`; `s`; `g`; `ml`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionUnit"
        },
        {
          "name": "assertionUnitIRI",
          "title": "Assertion Unit IRI",
          "description": "An IRI of a controlled vocabulary value for the unit of a dwc:assertionValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/assertionUnit"
        },
        {
          "name": "assertionUnitSource",
          "title": "Assertion Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of the value in dwc:assertionUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionError",
          "title": "Assertion Error",
          "description": "A description of the potential error associated with a dwc:assertionValue.",
          "notes": "",
          "examples": "`0.01`; `normal distribution with variation of 2 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionError"
        },
        {
          "name": "assertionBy",
          "title": "Assertion By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for making a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionBy"
        },
        {
          "name": "assertionBy_fk",
          "title": "Assertion By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionByID",
          "title": "Assertion By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionProtocols",
          "title": "Assertion Protocols",
          "description": "Names of, references to, or descriptions of dwc:Protocols used in making a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionProtocols"
        },
        {
          "name": "assertionProtocol_fk",
          "title": "Assertion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to make a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionReferences",
          "title": "Assertion References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionReferences"
        },
        {
          "name": "assertionRemarks",
          "title": "Assertion Remarks",
          "description": "Comments or notes about a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionRemarks"
        }
      ],
      "weakPrimaryKey": "assertionID",
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "about",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "assertionBy_fk",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "assertionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "assertionByID",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "media-identifier": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/media-identifier",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/media-identifier.json",
      "name": "media-identifier",
      "title": "Media Identifier",
      "description": "An adms:Identifier for an ac:Media entity.",
      "notes": "An important point to note is that properties of the adms:Identifier class are properties of the Identifier, not the resource that it identifies or the agency that issued it.",
      "examples": "",
      "namespace": "adms",
      "dcterms:isVersionOf": "http://www.w3.org/ns/adms#Identifier",
      "fields": [
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "description": "An unambiguous reference to a resource within a given context.",
          "notes": "Recommended best practice is to identify a resource by means of a string conforming to a formal identification system.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "skos",
          "dcterms:isVersionOf": "http://www.w3.org/2004/02/skos/core#notation",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifierType",
          "title": "Identifier Type",
          "description": "A category or system that best matches the nature of an identifier (skos:notation).",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/type"
        },
        {
          "name": "identifierTypeIRI",
          "title": "Identifier Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of identifier.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "identifierTypeSource",
          "title": "Identifier Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:identifierType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "identifierLanguage",
          "title": "Identifier Language",
          "description": "A language in which an identifier is presented.",
          "notes": "Recommended best practice is to use an ISO639-2 three-letter language code.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/language"
        }
      ],
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "for",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        }
      ]
    },
    "media-provenance": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/media-provenance",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/media-provenance.json",
      "name": "media-provenance",
      "title": "Media Provenance",
      "description": "A dwc:Provenance for an ac:Media entity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//media-provenance",
      "fields": [
        {
          "name": "provenance_fk",
          "title": "Provenance (Foreign Key)",
          "description": "An identifier for a dwc:Provenance.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/provenanceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "provenance_fk",
          "predicate": "has",
          "reference": {
            "resource": "provenance",
            "fields": "provenance_pk"
          }
        },
        {
          "fields": "media_fk",
          "predicate": "for",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        }
      ]
    },
    "media-usage-policy": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/media-usage-policy",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/media-usage-policy.json",
      "name": "media-usage-policy",
      "title": "Media Usage Policy",
      "description": "Rights, usage, and attribution statements applicable to an ac:Media entity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//media-usage-policy",
      "fields": [
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "usagePolicy_fk",
          "title": "Usage Policy (Foreign Key)",
          "description": "An identifier for a dwc:UsagePolicy.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/usagePolicyID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "for",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "usagePolicy_fk",
          "predicate": "has",
          "reference": {
            "resource": "usage-policy",
            "fields": "usagePolicy_pk"
          }
        }
      ]
    },
    "molecular-protocol": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/molecular-protocol",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/molecular-protocol.json",
      "name": "molecular-protocol",
      "title": "Molecular Protocol",
      "description": "A protocol used to perform a dwc:NucleotideAnalysis and potentially derive a dwc:NucleotideSequence from a dwc:MaterialEntity.",
      "notes": "",
      "examples": "`a standard DNA barcoding workflow using Sanger sequencing`; `a shotgun metagenomics pipeline for microbial community profiling`; `a high-throughput amplicon sequencing protocol targeting 16S rRNA`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MolecularProtocol",
      "fields": [
        {
          "name": "molecularProtocol_pk",
          "title": "Molecular Protocol (Primary Key)",
          "description": "A unique identifier for a dwc:MolecularProtocol.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/molecularProtocolID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "molecularProtocolID",
          "title": "Molecular Protocol ID",
          "description": "An identifier for a dwc:MolecularProtocol.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/molecularProtocolID"
        },
        {
          "name": "assayType",
          "title": "Assay Type",
          "description": "A type of method used in a study to detect taxon/taxa of interest in a dwc:MaterialEntity.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`targeted`; `metabarcoding`; `other`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assayType"
        },
        {
          "name": "samp_name",
          "title": "samp_name",
          "description": "Sample Name is a name that you choose for the sample. It can have any format, but we suggest that you make it concise, unique and consistent within your lab, and as informative as possible. Every Sample Name from a single Submitter must be unique.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0001107"
        },
        {
          "name": "project_name",
          "title": "project_name",
          "description": "Name of the project within which the sequencing was organized.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000092"
        },
        {
          "name": "experimental_factor",
          "title": "experimental_factor",
          "description": "Experimental factors are essentially the variable aspects of an experiment design which can be used to describe an experiment, or set of experiments, in an increasingly detailed manner. This field accepts ontology terms from Experimental Factor Ontology (EFO) and/or Ontology for Biomedical Investigations (OBI). For a browser of EFO (v 2.95) terms, please see http://purl.bioontology.org/ontology/EFO; for a browser of OBI (v 2018-02-12) terms please see http://purl.bioontology.org/ontology/OBI.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000008"
        },
        {
          "name": "samp_taxon_id",
          "title": "samp_taxon_id",
          "description": "NCBI taxon id of the sample. Maybe be a single taxon or mixed taxa sample. Use \"synthetic metagenome\" for mock community/positive controls, or \"blank sample\" for negative controls.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0001320"
        },
        {
          "name": "neg_cont_type",
          "title": "neg_cont_type",
          "description": "The substance or equipment used as a negative control in an investigation.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0001321"
        },
        {
          "name": "pos_cont_type",
          "title": "pos_cont_type",
          "description": "The substance, mixture, product, or apparatus used to verify that a process which is part of an investigation delivers a true positive.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0001322"
        },
        {
          "name": "env_broad_scale",
          "title": "env_broad_scale",
          "description": "In this field, report which major environmental system your sample or specimen came from. The systems identified should have a coarse spatial grain, to provide the general environmental context of where the sampling was done (e.g., were you in the desert or a rainforest?). We recommend using subclasses of ENVO’s biome class: http://purl.obolibrary.org/obo/ENVO_00000428. Format (one term): termLabel [termID], Format (multiple terms): termLabel [termID]|termLabel [termID]|termLabel [termID]. Example: Annotating a water sample from the photic zone in middle of the Atlantic Ocean, consider: oceanic epipelagic zone biome [ENVO:01000033]. Example: Annotating a sample from the Amazon rainforest consider: tropical moist broadleaf forest biome [ENVO:01000228]. If needed, request new terms on the ENVO tracker, identified here: http://www.obofoundry.org/ontology/envo.html.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000012"
        },
        {
          "name": "env_local_scale",
          "title": "env_local_scale",
          "description": "In this field, report the entity or entities which are in your sample or specimen’s local vicinity and which you believe have significant causal influences on your sample or specimen. Please use terms that are present in ENVO and which are of smaller spatial grain than your entry for env_broad_scale. Format (one term): termLabel [termID]; Format (multiple terms): termLabel [termID]|termLabel [termID]|termLabel [termID]. Example: Annotating a pooled sample taken from various vegetation layers in a forest consider: canopy [ENVO:00000047]|herb and fern layer [ENVO:01000337]|litter layer [ENVO:01000338]|understory [01000335]|shrub layer [ENVO:01000336]. If needed, request new terms on the ENVO tracker, identified here: http://www.obofoundry.org/ontology/envo.html.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000013"
        },
        {
          "name": "env_medium",
          "title": "env_medium",
          "description": "In this field, report which environmental material or materials (pipe separated) immediately surrounded your sample or specimen prior to sampling, using one or more subclasses of ENVO’s environmental material class: http://purl.obolibrary.org/obo/ENVO_00010483. Format (one term): termLabel [termID]; Format (multiple terms): termLabel [termID]|termLabel [termID]|termLabel [termID]. Example: Annotating a fish swimming in the upper 100 m of the Atlantic Ocean, consider: ocean water [ENVO:00002151]. Example: Annotating a duck on a pond consider: pond water [ENVO:00002228]|air ENVO_00002005. If needed, request new terms on the ENVO tracker, identified here: http://www.obofoundry.org/ontology/envo.html.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000014"
        },
        {
          "name": "subspecf_gen_lin",
          "title": "subspecf_gen_lin",
          "description": "This should provide further information about the genetic distinctness of the sequenced organism by recording additional information e.g., serovar, serotype, biotype, ecotype, or any relevant genetic typing schemes like Group I plasmid. It can also contain alternative taxonomic information. It should contain both the lineage name, and the lineage rank, i.e. biovar:abc123.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000020"
        },
        {
          "name": "ploidy",
          "title": "ploidy",
          "description": "The ploidy level of the genome (e.g., allopolyploid, haploid, diploid, triploid, tetraploid). It has implications for the downstream study of duplicated gene and regions of the genomes (and perhaps for difficulties in assembly). For terms, please select terms listed under class ploidy (PATO:001374) of Phenotypic Quality Ontology (PATO), and for a browser of PATO (v 2018-03-27) please refer to http://purl.bioontology.org/ontology/PATO.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000021"
        },
        {
          "name": "num_replicons",
          "title": "num_replicons",
          "description": "Reports the number of replicons in a nuclear genome of eukaryotes, in the genome of a bacterium or archaea or the number of segments in a segmented virus. Always applied to the haploid chromosome count of a eukaryote.",
          "notes": "",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000022"
        },
        {
          "name": "extrachrom_elements",
          "title": "extrachrom_elements",
          "description": "Do plasmids exist of significant phenotypic consequence (e.g., ones that determine virulence or antibiotic resistance). Megaplasmids? Other plasmids (borrelia has 15+ plasmids).",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000023"
        },
        {
          "name": "estimated_size",
          "title": "estimated_size",
          "description": "The estimated size of the genome prior to sequencing. Of particular importance in the sequencing of (eukaryotic) genome which could remain in draft form for a long or unspecified period.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000024"
        },
        {
          "name": "ref_biomaterial",
          "title": "ref_biomaterial",
          "description": "Primary publication if isolated before genome publication; otherwise, primary genome report.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000025"
        },
        {
          "name": "source_mat_fk",
          "title": "Source Material (Primary Key)",
          "description": "A unique identifier assigned to a material sample (as defined by http://rs.tdwg.org/dwc/terms/materialEntityID, and as opposed to a particular digital record of a material sample) used for extracting nucleic acids, and subsequent sequencing. The identifier can refer either to the original material collected or to any derived sub-samples. The INSDC qualifiers /specimen_voucher, /bio_material, or /culture_collection may or may not share the same value as the source_mat_id field. For instance, the /specimen_voucher qualifier and source_mat_id may both contain ´UAM:Herps:14´, referring to both the specimen voucher and sampled tissue with the same identifier. However, the /culture_collection qualifier may refer to a value from an initial culture (e.g., ATCC:11775) while source_mat_id would refer to an identifier from some derived culture from which the nucleic acids were extracted (e.g., xatc123 or ark:/2154/R2).",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "source_mat_id",
          "title": "source_mat_id",
          "description": "A unique identifier assigned to a material sample (as defined by http://rs.tdwg.org/dwc/terms/materialEntityID, and as opposed to a particular digital record of a material sample) used for extracting nucleic acids, and subsequent sequencing. The identifier can refer either to the original material collected or to any derived sub-samples. The INSDC qualifiers /specimen_voucher, /bio_material, or /culture_collection may or may not share the same value as the source_mat_id field. For instance, the /specimen_voucher qualifier and source_mat_id may both contain ´UAM:Herps:14´, referring to both the specimen voucher and sampled tissue with the same identifier. However, the /culture_collection qualifier may refer to a value from an initial culture (e.g., ATCC:11775) while source_mat_id would refer to an identifier from some derived culture from which the nucleic acids were extracted (e.g., xatc123 or ark:/2154/R2).",
          "notes": "The value in this field MAY refer to a dwc:MaterialEntity within or external to the dataset in which this record originated.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000026",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "pathogenicity",
          "title": "pathogenicity",
          "description": "To what is the entity pathogenic.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000027"
        },
        {
          "name": "biotic_relationship",
          "title": "biotic_relationship",
          "description": "Description of relationship(s) between the subject organism and other organism(s) it is associated with. E.g., parasite on species X; mutualist with species Y. The target organism is the subject of the relationship, and the other organism(s) is the object.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000028"
        },
        {
          "name": "specific_host",
          "title": "specific_host",
          "description": "If there is a host involved, please provide its taxid (or environmental if not actually isolated from the dead or alive host - i.e. a pathogen could be isolated from a swipe of a bench etc) and report whether it is a laboratory or natural host).",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000029"
        },
        {
          "name": "host_spec_range",
          "title": "host_spec_range",
          "description": "The NCBI taxonomy identifier of the specific host if it is known.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000030"
        },
        {
          "name": "host_disease_stat",
          "title": "host_disease_stat",
          "description": "List of diseases with which the host has been diagnosed; can include multiple diagnoses. The value of the field depends on host; for humans the terms should be chosen from the DO (Human Disease Ontology) at https://www.disease-ontology.org, non-human host diseases are free text.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000031"
        },
        {
          "name": "trophic_level",
          "title": "trophic_level",
          "description": "Trophic levels are the feeding position in a food chain. Microbes can be a range of producers (e.g., chemolithotroph).",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000032"
        },
        {
          "name": "propagation",
          "title": "propagation",
          "description": "This field is specific to different taxa. For phages: lytic/lysogenic, for plasmids: incompatibility group, for eukaryotes: sexual/asexual (Note: there is the strong opinion to name phage propagation obligately lytic or temperate, therefore we also give this choice.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000033"
        },
        {
          "name": "encoded_traits",
          "title": "encoded_traits",
          "description": "Should include key traits like antibiotic resistance or xenobiotic degradation phenotypes for plasmids, converting genes for phage.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000034"
        },
        {
          "name": "rel_to_oxygen",
          "title": "rel_to_oxygen",
          "description": "Is this organism an aerobe, anaerobe? Please note that aerobic and anaerobic are valid descriptors for microbial environments.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000015"
        },
        {
          "name": "isol_growth_condt",
          "title": "isol_growth_condt",
          "description": "Publication reference in the form of pubmed ID (pmid), digital object identifier (doi) or url for isolation and growth condition specifications of the organism/material.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000003"
        },
        {
          "name": "samp_collect_device",
          "title": "sample collection device",
          "description": "The device used to collect an environmental sample.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the entities listed under specimen collection device (http://purl.obolibrary.org/obo/OBI_0002814) in the Ontology for Biomedical Investigations.",
          "examples": "`air filter`, `malaise trap`, `surface swab`",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000002"
        },
        {
          "name": "samp_collect_method",
          "title": "samp_collect_method",
          "description": "The method employed for collecting the sample.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0001225"
        },
        {
          "name": "samp_mat_process",
          "title": "samp_mat_process",
          "description": "Any processing applied to the sample during or after retrieving the sample from environment. This field accepts OBI, for a browser of OBI (v 2018-02-12) terms please see http://purl.bioontology.org/ontology/OBI.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000016"
        },
        {
          "name": "size_frac",
          "title": "size_frac",
          "description": "Filtering pore size used in sample preparation.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000017"
        },
        {
          "name": "samp_size",
          "title": "samp_size",
          "description": "Amount or size of sample (volume, mass or area) that was collected.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000001"
        },
        {
          "name": "samp_vol_we_dna_ext",
          "title": "samp_vol_we_dna_ext",
          "description": "Volume (ml) or mass (g) of total collected sample processed for DNA extraction. Note: total sample collected should be entered under the term Sample Size (MIXS:0000001).",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000111"
        },
        {
          "name": "source_uvig",
          "title": "source_uvig",
          "description": "Type of dataset from which the UViG was obtained.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000035"
        },
        {
          "name": "virus_enrich_appr",
          "title": "virus_enrich_appr",
          "description": "List of approaches used to enrich the sample for viruses, if any.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000036"
        },
        {
          "name": "nucl_acid_ext",
          "title": "nucl_acid_ext",
          "description": "A link to a literature reference, electronic resource or a standard operating procedure (SOP), that describes the material separation to recover the nucleic acid fraction from a sample.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000037"
        },
        {
          "name": "nucl_acid_amp",
          "title": "nucl_acid_amp",
          "description": "A link to a literature reference, electronic resource or a standard operating procedure (SOP), that describes the enzymatic amplification (PCR, TMA, NASBA) of specific nucleic acids.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000038"
        },
        {
          "name": "lib_size",
          "title": "lib_size",
          "description": "Total number of clones in the library prepared for the project.",
          "notes": "",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000039"
        },
        {
          "name": "lib_reads_seqd",
          "title": "lib_reads_seqd",
          "description": "Total number of clones sequenced from the library.",
          "notes": "",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000040"
        },
        {
          "name": "lib_layout",
          "title": "lib_layout",
          "description": "Specify whether to expect single, paired, or other configuration of reads.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000041"
        },
        {
          "name": "lib_vector",
          "title": "lib_vector",
          "description": "Cloning vector type(s) used in construction of libraries.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000042"
        },
        {
          "name": "lib_screen",
          "title": "lib_screen",
          "description": "Specific enrichment or screening methods applied before and/or after creating libraries.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000043"
        },
        {
          "name": "target_gene",
          "title": "target_gene",
          "description": "Targeted gene or locus name for marker gene studies.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000044"
        },
        {
          "name": "target_subfragment",
          "title": "target_subfragment",
          "description": "Name of subfragment of a gene or locus. Important to e.g., identify special regions on marker genes like V6 on 16S rRNA.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000045"
        },
        {
          "name": "pcr_primers",
          "title": "pcr_primers",
          "description": "PCR primers that were used to amplify the sequence of the targeted gene, locus or subfragment. This field should contain all the primers used for a single PCR reaction if multiple forward or reverse primers are present in a single PCR reaction. The primer sequence should be reported in uppercase letters.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000046"
        },
        {
          "name": "mid",
          "title": "mid",
          "description": "Molecular barcodes, called Multiplex Identifiers (MIDs), that are used to specifically tag unique samples in a sequencing run. Sequence should be reported in uppercase letters.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000047"
        },
        {
          "name": "adapters",
          "title": "adapters",
          "description": "Adapters provide priming sequences for both amplification and sequencing of the sample-library fragments. Both adapters should be reported; in uppercase letters.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000048"
        },
        {
          "name": "pcr_cond",
          "title": "pcr_cond",
          "description": "Description of reaction conditions and components of PCR in the form of ´initial denaturation:94degC_1.5min; annealing=...´.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000049"
        },
        {
          "name": "seq_meth",
          "title": "seq_meth",
          "description": "Sequencing method used; e.g., Sanger, ABI-solid.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000050"
        },
        {
          "name": "seq_quality_check",
          "title": "seq_quality_check",
          "description": "Indicate if the sequence has been called by automatic systems (none) or undergone a manual editing procedure (e.g., by inspecting the raw data or chromatograms). Applied only for sequences that are not submitted to SRA,ENA or DRA.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000051"
        },
        {
          "name": "chimera_check",
          "title": "chimera_check",
          "description": "A chimeric sequence, or chimera for short, is a sequence comprised of two or more phylogenetically distinct parent sequences. Chimeras are usually PCR artifacts thought to occur when a prematurely terminated amplicon reanneals to a foreign DNA strand and is copied to completion in the following PCR cycles. The point at which the chimeric sequence changes from one parent to the next is called the breakpoint or conversion point.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000052"
        },
        {
          "name": "tax_ident",
          "title": "tax_ident",
          "description": "The phylogenetic marker(s) used to assign an organism name to the SAG or MAG.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000053"
        },
        {
          "name": "assembly_qual",
          "title": "assembly_qual",
          "description": "The assembly quality category is based on sets of criteria outlined for each assembly quality category. For MISAG/MIMAG; Finished: Single, validated, contiguous sequence per replicon without gaps or ambiguities with a consensus error rate equivalent to Q50 or better. High Quality Draft:Multiple fragments where gaps span repetitive regions. Presence of the 23S, 16S and 5S rRNA genes and at least 18 tRNAs. Medium Quality Draft:Many fragments with little to no review of assembly other than reporting of standard assembly statistics. Low Quality Draft:Many fragments with little to no review of assembly other than reporting of standard assembly statistics. Assembly statistics include, but are not limited to total assembly size, number of contigs, contig N50/L50, and maximum contig length. For MIUVIG; Finished: Single, validated, contiguous sequence per replicon without gaps or ambiguities, with extensive manual review and editing to annotate putative gene functions and transcriptional units. High-quality draft genome: One or multiple fragments, totaling ≥ 90% of the expected genome or replicon sequence or predicted complete. Genome fragment(s): One or multiple fragments, totalling < 90% of the expected genome or replicon sequence, or for which no genome size could be estimated.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000056"
        },
        {
          "name": "assembly_name",
          "title": "assembly_name",
          "description": "Name/version of the assembly provided by the submitter that is used in the genome browsers and in the community.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000057"
        },
        {
          "name": "assembly_software",
          "title": "assembly_software",
          "description": "Tool(s) used for assembly, including version number and parameters.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000058"
        },
        {
          "name": "annot",
          "title": "annot",
          "description": "Tool used for annotation, or for cases where annotation was provided by a community jamboree or model organism database rather than by a specific submitter.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000059"
        },
        {
          "name": "number_contig",
          "title": "number_contig",
          "description": "Total number of contigs in the cleaned/submitted assembly that makes up a given genome, SAG, MAG, or UViG.",
          "notes": "",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000060"
        },
        {
          "name": "feat_pred",
          "title": "feat_pred",
          "description": "Method used to predict UViGs features such as ORFs, integration site, etc.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000061"
        },
        {
          "name": "ref_db",
          "title": "ref_db",
          "description": "List of database(s) used for ORF annotation, along with version number and reference to website or publication.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000062"
        },
        {
          "name": "sim_search_meth",
          "title": "sim_search_meth",
          "description": "Tool used to compare ORFs with database, along with version and cutoffs used.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000063"
        },
        {
          "name": "tax_class",
          "title": "tax_class",
          "description": "Method used for taxonomic classification, along with reference database used, classification rank, and thresholds used to classify new genomes.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000064"
        },
        {
          "name": "_16s_recover",
          "title": "_16s_recover",
          "description": "Can a 16S gene be recovered from the submitted SAG or MAG?.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000065"
        },
        {
          "name": "_16s_recover_software",
          "title": "_16s_recover_software",
          "description": "Tools used for 16S rRNA gene extraction.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000066"
        },
        {
          "name": "trnas",
          "title": "trnas",
          "description": "The total number of tRNAs identified from the SAG or MAG.",
          "notes": "",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000067"
        },
        {
          "name": "trna_ext_software",
          "title": "trna_ext_software",
          "description": "Tools used for tRNA identification.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000068"
        },
        {
          "name": "compl_score",
          "title": "compl_score",
          "description": "Completeness score is typically based on either the fraction of markers found as compared to a database or the percent of a genome found as compared to a closely related reference genome. High Quality Draft: >90%, Medium Quality Draft: >50%, and Low Quality Draft: < 50% should have the indicated completeness scores.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000069"
        },
        {
          "name": "compl_software",
          "title": "compl_software",
          "description": "Tools used for completion estimate, i.e. checkm, anvi´o, busco.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000070"
        },
        {
          "name": "compl_appr",
          "title": "compl_appr",
          "description": "The approach used to determine the completeness of a given SAG or MAG, which would typically make use of a set of conserved marker genes or a closely related reference genome. For UViG completeness, include reference genome or group used, and contig feature suggesting a complete genome.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000071"
        },
        {
          "name": "contam_score",
          "title": "contam_score",
          "description": "The contamination score is based on the fraction of single-copy genes that are observed more than once in a query genome. The following scores are acceptable for; High Quality Draft: < 5%, Medium Quality Draft: < 10%, Low Quality Draft: < 10%. Contamination must be below 5% for a SAG or MAG to be deposited into any of the public databases.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000072"
        },
        {
          "name": "contam_screen_input",
          "title": "contam_screen_input",
          "description": "The type of sequence data used as input.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000005"
        },
        {
          "name": "contam_screen_param",
          "title": "contam_screen_param",
          "description": "Specific parameters used in the decontamination software, such as reference database, coverage, and kmers. Combinations of these parameters may also be used, i.e. kmer and coverage, or reference database and kmer.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000073"
        },
        {
          "name": "decontam_software",
          "title": "decontam_software",
          "description": "Tool(s) used in contamination screening.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000074"
        },
        {
          "name": "sort_tech",
          "title": "sort_tech",
          "description": "Method used to sort/isolate cells or particles of interest.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000075"
        },
        {
          "name": "single_cell_lysis_appr",
          "title": "single_cell_lysis_appr",
          "description": "Method used to free DNA from interior of the cell(s) or particle(s).",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000076"
        },
        {
          "name": "single_cell_lysis_prot",
          "title": "single_cell_lysis_prot",
          "description": "Name of the kit or standard protocol used for cell(s) or particle(s) lysis.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000054"
        },
        {
          "name": "wga_amp_appr",
          "title": "wga_amp_appr",
          "description": "Method used to amplify genomic DNA in preparation for sequencing.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000055"
        },
        {
          "name": "wga_amp_kit",
          "title": "wga_amp_kit",
          "description": "Kit used to amplify genomic DNA in preparation for sequencing.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000006"
        },
        {
          "name": "bin_param",
          "title": "bin_param",
          "description": "The parameters that have been applied during the extraction of genomes from metagenomic datasets.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000077"
        },
        {
          "name": "bin_software",
          "title": "bin_software",
          "description": "Tool(s) used for the extraction of genomes from metagenomic datasets.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000078"
        },
        {
          "name": "reassembly_bin",
          "title": "reassembly_bin",
          "description": "Has an assembly been performed on a genome bin extracted from a metagenomic assembly?.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000079"
        },
        {
          "name": "mag_cov_software",
          "title": "mag_cov_software",
          "description": "Tool(s) used to determine the genome coverage if coverage is used as a binning parameter in the extraction of genomes from metagenomic datasets.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000080"
        },
        {
          "name": "vir_ident_software",
          "title": "vir_ident_software",
          "description": "Tool(s) used for the identification of UViG as a viral genome, software or protocol name including version number, parameters, and cutoffs used.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000081"
        },
        {
          "name": "pred_genome_type",
          "title": "pred_genome_type",
          "description": "Type of genome predicted for the UViG.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000082"
        },
        {
          "name": "pred_genome_struc",
          "title": "pred_genome_struc",
          "description": "Expected structure of the viral genome.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000083"
        },
        {
          "name": "detec_type",
          "title": "detec_type",
          "description": "Type of UViG detection.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000084"
        },
        {
          "name": "otu_class_appr",
          "title": "otu_class_appr",
          "description": "Cutoffs and approach used when clustering new UViGs in \"species-level\" OTUs. Note that results from standard 95% ANI / 85% AF clustering should be provided alongside OTUS defined from another set of thresholds, even if the latter are the ones primarily used during the analysis.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000085"
        },
        {
          "name": "otu_seq_comp_appr",
          "title": "otu_seq_comp_appr",
          "description": "Tool and thresholds used to compare sequences when computing \"species-level\" OTUs.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000086"
        },
        {
          "name": "otu_db",
          "title": "otu_db",
          "description": "Reference database (i.e. sequences not generated as part of the current study) used to cluster new genomes in \"species-level\" OTUs, if any.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000087"
        },
        {
          "name": "host_pred_appr",
          "title": "host_pred_appr",
          "description": "Tool or approach used for host prediction.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000088"
        },
        {
          "name": "host_pred_est_acc",
          "title": "host_pred_est_acc",
          "description": "For each tool or approach used for host prediction, estimated false discovery rates should be included, either computed de novo or from the literature.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000089"
        },
        {
          "name": "associated_resource",
          "title": "associated_resource",
          "description": "A related resource that is referenced, cited, or otherwise associated to the sequence.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000091"
        },
        {
          "name": "sop",
          "title": "sop",
          "description": "Standard operating procedures used in assembly and/or annotation of genomes, metagenomes or environmental sequences.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "mixs",
          "dcterms:isVersionOf": "https://w3id.org/mixs/0000090"
        },
        {
          "name": "pcr_primer_forward",
          "title": "pcr_primer_forward",
          "description": "Forward PCR primer that were used to amplify the sequence of the targeted gene, locus or subfragment. If multiple multiple forward or reverse primers are present in a single PCR reaction, there should be a full row for each of these linked to the same dwc:Occurrence. The primer sequence should be reported in uppercase letters.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "gbif",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/pcr_primer_forward"
        },
        {
          "name": "pcr_primer_reverse",
          "title": "pcr_primer_reverse",
          "description": "Reverse PCR primer that were used to amplify the sequence of the targeted gene, locus or subfragment. If multiple multiple forward or reverse primers are present in a single PCR reaction, there should be a full row for each of these linked to the same dwc:Occurrence. The primer sequence should be reported in uppercase letters.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "gbif",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/pcr_primer_reverse"
        },
        {
          "name": "pcr_primer_name_forward",
          "title": "pcr_primer_name_forward",
          "description": "Name of the forward PCR primer that were used to amplify the sequence of the targeted gene, locus or subfragment. If multiple multiple forward or reverse primers are present in a single PCR reaction, there should be a full row for each of these linked to the same dwc:Occurrence.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "gbif",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/pcr_primer_name_forward"
        },
        {
          "name": "pcr_primer_name_reverse",
          "title": "pcr_primer_name_reverse",
          "description": "Name of the reverse PCR primer that were used to amplify the sequence of the targeted gene, locus or subfragment. If multiple multiple forward or reverse primers are present in a single PCR reaction, there should be a full row for each of these linked to the same dwc:Occurrence.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "gbif",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/pcr_primer_name_reverse"
        },
        {
          "name": "pcr_primer_reference",
          "title": "pcr_primer_reference",
          "description": "Reference for the PCR primers that were used to amplify the sequence of the targeted gene, locus or subfragment.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "gbif",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/pcr_primer_reference"
        },
        {
          "name": "sequence",
          "title": "Sequence",
          "description": "A string representing nucleotide base pairs.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/sequence"
        },
        {
          "name": "concentration",
          "title": "Concentration (DNA)",
          "description": "Concentration of DNA (weight ng/volume µl).",
          "notes": "in ABCD this element has stringUnit as attribute (example ng/µl); in DarwinCore this element has to be used together with ggbn:concentrationUnit",
          "examples": "67.5",
          "type": "number",
          "format": "default",
          "namespace": "ggbn",
          "dcterms:isVersionOf": "http://data.ggbn.org/schemas/ggbn/terms/concentration"
        },
        {
          "name": "concentrationUnit",
          "title": "Unit of Concentration (DNA)",
          "description": "Unit used for concentration measurement (DNA)",
          "notes": "in DarwinCore this element has to be used together with ggbn:concentration; this element is not required in ABCD (see ggbn:concentration for details)",
          "examples": "ng/µl",
          "type": "string",
          "format": "default",
          "namespace": "ggbn",
          "dcterms:isVersionOf": "http://data.ggbn.org/schemas/ggbn/terms/concentrationUnit"
        },
        {
          "name": "methodDeterminationConcentrationAndRatios",
          "title": "Method used for Determination of Concentration and Ratios of Absorbance (DNA)",
          "description": "Description of method used for concentration measurement (DNA)",
          "notes": "",
          "examples": "Nanodrop, Qubit",
          "type": "string",
          "format": "default",
          "namespace": "ggbn",
          "dcterms:isVersionOf": "http://data.ggbn.org/schemas/ggbn/terms/methodDeterminationConcentrationAndRatios"
        },
        {
          "name": "ratioOfAbsorbance260_230",
          "title": "Ratio of Absorbance 260/230 (DNA)",
          "description": "Ratio of absorbance at 260 nm and 230 nm assessing DNA purity (mostly secondary measure, indicates mainly EDTA, carbohydrates, phenol), (DNA samples only)",
          "notes": "",
          "examples": "1.89",
          "type": "number",
          "format": "default",
          "namespace": "ggbn",
          "dcterms:isVersionOf": "http://data.ggbn.org/schemas/ggbn/terms/ratioOfAbsorbance260_230"
        },
        {
          "name": "ratioOfAbsorbance260_280",
          "title": "Ratio of Absorbance 260/280 (DNA)",
          "description": "Ratio of absorbance at 260 nm and 280 nm assessing DNA purity (mostly secondary measure, indicates mainly EDTA, carbohydrates, phenol), (DNA samples only)",
          "notes": "",
          "examples": "1.8",
          "type": "number",
          "format": "default",
          "namespace": "ggbn",
          "dcterms:isVersionOf": "http://data.ggbn.org/schemas/ggbn/terms/ratioOfAbsorbance260_280"
        },
        {
          "name": "annealingTemp",
          "title": "annealingTemp",
          "description": "The reaction temperature during the annealing phase of PCR.",
          "notes": "",
          "examples": "",
          "type": "number",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/annealingTemp"
        },
        {
          "name": "annealingTempUnit",
          "title": "annealingTempUnit",
          "description": "Measurement unit of the reaction temperature during the annealing phase of PCR.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/annealingTempUnit"
        },
        {
          "name": "probeReporter",
          "title": "probeReporter",
          "description": "Type of fluorophore (reporter) used. Probe anneals within amplified target DNA. Polymerase activity degrades the probe that has annealed to the template, and the probe releases the fluorophore from it and breaks the proximity to the quencher, thus allowing fluorescence of the fluorophore.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/probeReporter"
        },
        {
          "name": "probeQuencher",
          "title": "probeQuencher",
          "description": "Type of quencher used. The quencher molecule quenches the fluorescence emitted by the fluorophore when excited by the cycler’s light source As long as fluorophore and the quencher are in proximity, quenching inhibits any fluorescence signals.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/probeQuencher"
        },
        {
          "name": "ampliconSize",
          "title": "ampliconSize",
          "description": "The length of the amplicon in basepairs.",
          "notes": "",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/ampliconSize"
        },
        {
          "name": "thresholdQuantificationCycle",
          "title": "thresholdQuantificationCycle",
          "description": "Threshold for change in fluorescence signal between cycles.",
          "notes": "",
          "examples": "",
          "type": "number",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/thresholdQuantificationCycle"
        },
        {
          "name": "baselineValue",
          "title": "baselineValue",
          "description": "The number of cycles when fluorescence signal from the target amplification is below background fluorescence not originated from the real target amplification.",
          "notes": "",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/baselineValue"
        },
        {
          "name": "quantificationCycle",
          "title": "quantificationCycle",
          "description": "The number of cycles required for the fluorescent signal to cross a given value threshold above the baseline. Quantification cycle (Cq), threshold cycle (Ct), crossing point (Cp), and take-off point (TOP) refer to the same value from the real-time instrument. Use of quantification cycle (Cq), is preferable according to the RDML (Real-Time PCR Data Markup Language) data standard (http://www.rdml.org).",
          "notes": "",
          "examples": "",
          "type": "number",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/quantificationCycle"
        },
        {
          "name": "automaticThresholdQuantificationCycle",
          "title": "automaticThresholdQuantificationCycle",
          "description": "Whether the threshold was set by the instrument or manually.",
          "notes": "",
          "examples": "",
          "type": "boolean",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/automaticThresholdQuantificationCycle"
        },
        {
          "name": "automaticBaselineValue",
          "title": "automaticBaselineValue",
          "description": "Whether the baseline value was set by the instrument or manually.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/automaticBaselineValue"
        },
        {
          "name": "contaminationAssessment",
          "title": "contaminationAssessment",
          "description": "Whether DNA or RNA contamination assessment was done or not.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/contaminationAssessment"
        },
        {
          "name": "partitionVolume",
          "title": "partitionVolume",
          "description": "An accurate estimation of partition volume. The sum of the partitions multiplied by the partition volume will enable the total volume of the reaction to be calculated.",
          "notes": "",
          "examples": "",
          "type": "number",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/partitionVolume"
        },
        {
          "name": "partitionVolumeUnit",
          "title": "partitionVolumeUnit",
          "description": "Unit used for partition volume.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/partitionVolumeUnit"
        },
        {
          "name": "estimatedNumberOfCopies",
          "title": "estimatedNumberOfCopies",
          "description": "Number of target molecules per µl. Mean copies per partition (?) can be calculated using the number of partitions (n) and the estimated copy number in the total volume of all partitions (m) with a formula ?=m/n.",
          "notes": "",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/estimatedNumberOfCopies"
        },
        {
          "name": "amplificationReactionVolume",
          "title": "amplificationReactionVolume",
          "description": "PCR reaction volume.",
          "notes": "",
          "examples": "",
          "type": "number",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/amplificationReactionVolume"
        },
        {
          "name": "amplificationReactionVolumeUnit",
          "title": "amplificationReactionVolumeUnit",
          "description": "Unit used for PCR reaction volume. Many of the instruments require preparation of a much larger initial sample volume than is actually analyzed.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/amplificationReactionVolumeUnit"
        },
        {
          "name": "pcr_analysis_software",
          "title": "pcr_analysis_software",
          "description": "The program used to analyse the d(d)PCR runs.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/pcr_analysis_software"
        },
        {
          "name": "experimentalVariance",
          "title": "experimentalVariance",
          "description": "Multiple biological replicates are encouraged to assess total experimental variation. When single dPCR experiments are performed, a minimal estimate of variance due to counting error alone must be calculated from the binomial (or suitable equivalent) distribution.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/experimentalVariance"
        },
        {
          "name": "pcr_primer_lod",
          "title": "pcr_primer_lod",
          "description": "The assay’s ability to detect the target at low levels.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/pcr_primer_lod"
        },
        {
          "name": "pcr_primer_loq",
          "title": "pcr_primer_loq",
          "description": "The assay’s ability to quantify copy number at low levels.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "miqe",
          "dcterms:isVersionOf": "http://rs.gbif.org/terms/miqe/pcr_primer_loq"
        }
      ],
      "primaryKey": "molecularProtocol_pk",
      "weakPrimaryKey": "molecularProtocolID",
      "foreignKeys": [
        {
          "fields": "source_mat_fk",
          "predicate": "has source",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "source_mat_id",
          "predicate": "has source",
          "reference": {
            "resource": "material",
            "fields": "materialEntityID"
          }
        }
      ]
    },
    "molecular-protocol-agent-role": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/molecular-protocol-agent-role",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/molecular-protocol-agent-role.json",
      "name": "molecular-protocol-agent-role",
      "title": "Molecular Protocol Agent Role",
      "description": "A role filled by a dcterms:Agent with respect to a dwc:MolecularProtocol.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//molecular-protocol-agent-role",
      "fields": [
        {
          "name": "molecularProtocol_fk",
          "title": "Molecular Protocol (Foreign Key)",
          "description": "An identifier for a dwc:MolecularProtocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/molecularProtocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agentRole",
          "title": "Agent Role",
          "description": "A category that best matches the nature of a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary for the roles appropriate to the class of resource a dcterms:AgentRole is related to.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "agentRoleIRI",
          "title": "Agent Role IRI",
          "description": "An IRI of the controlled vocabulary value for a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "agentRoleSource",
          "title": "Agent Role Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:agentRole is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "agentRoleOrder",
          "title": "Agent Role Order",
          "description": "A numerical position of an AgentRole in a set of AgentRoles that have the same combination of agentRole, agentRoleIRI, agentRoleSource and related target identifier.",
          "notes": "One could use dwc:agentRoleOrder to create an ordered list of collectors (dwc:agentRole = 'collector') for a dwc:MaterialEntity, for example. The first would have dwc:agentRoleOrder=1, the second would have dwc:agentRoleOrder=2.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRoleOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "agentRoleDate",
          "title": "Agent Role Date",
          "description": "An interval during which a dcterms:AgentRole was in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        }
      ],
      "foreignKeys": [
        {
          "fields": "molecularProtocol_fk",
          "predicate": "role for",
          "reference": {
            "resource": "molecular-protocol",
            "fields": "molecularProtocol_pk"
          }
        },
        {
          "fields": "agent_fk",
          "predicate": "role holder",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "molecular-protocol-assertion": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/molecular-protocol-assertion",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/molecular-protocol-assertion.json",
      "name": "molecular-protocol-assertion",
      "title": "Molecular Protocol Assertion",
      "description": "A dwc:Assertion made by a dcterms:Agent about a dwc:MolecularProtocol.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
      "fields": [
        {
          "name": "assertionID",
          "title": "Assertion ID",
          "description": "An identifier for a dwc:Assertion.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionID",
          "constraints": {
            "required": false,
            "unique": true
          }
        },
        {
          "name": "molecularProtocol_fk",
          "title": "Molecular Protocol (Foreign Key)",
          "description": "An identifier for a dwc:MolecularProtocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/molecularProtocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimAssertionType",
          "title": "Verbatim Assertion Type",
          "description": "A string representing the type of dwc:Assertion as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original name for a dwc:assertionType. This term is meant to be used in addition to dwc:assertionType, not instead of it.",
          "examples": "`water_temp`; `Fish biomass`; `sampling net mesh size`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimAssertionType"
        },
        {
          "name": "assertionType",
          "title": "Assertion Type",
          "description": "A category that best matches the nature of a dwc:Assertion.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`tail length`; `temperature`; `trap line length`; `survey area`; `trap type`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionType"
        },
        {
          "name": "assertionTypeIRI",
          "title": "Assertion Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementType"
        },
        {
          "name": "assertionTypeSource",
          "title": "Assertion Type Source",
          "description": "A reference to the controlled vocabulary in which the definition of a value in dwc:assertionType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionMadeDate",
          "title": "Assertion Made Date",
          "description": "A date on which a dwc:Assertion was created.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionMadeDate"
        },
        {
          "name": "assertionEffectiveDate",
          "title": "Assertion Effective Date",
          "description": "A date-time or time interval during which an asserted state or measurement was deemed to be in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        },
        {
          "name": "assertionValue",
          "title": "Assertion Value",
          "description": "An asserted value.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionValue"
        },
        {
          "name": "assertionValueIRI",
          "title": "Assertion Value IRI",
          "description": "An IRI of the controlled vocabulary value for a value of a dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementValue"
        },
        {
          "name": "assertionValueSource",
          "title": "Assertion Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:assertionValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionUnit",
          "title": "Assertion Unit",
          "description": "Unit associated with the value in dwc:assertionValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure http://www.wurvoc.org/vocabularies/om-1.8/ of SI units, derived units, or other non-SI units accepted for use within the SI. For units that are composed of multiple parts, use the patterns as given in \"A Primer for Communicating Mathematics via Plain Text\" (https://cse.sc.edu/~fenner/latex-ASCII.pdf) by Stephen Fenner (e.g., `g/cm^3` for grams per cubic centimeter). For other units, provide the value as a recognizable standard (e.g., '%') or written out in full and in the plural (e.g., `individuals`). It is fine to provide non-SI units in the original language of the dataset.",
          "examples": "`m`; `s`; `g`; `ml`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionUnit"
        },
        {
          "name": "assertionUnitIRI",
          "title": "Assertion Unit IRI",
          "description": "An IRI of a controlled vocabulary value for the unit of a dwc:assertionValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/assertionUnit"
        },
        {
          "name": "assertionUnitSource",
          "title": "Assertion Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of the value in dwc:assertionUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionError",
          "title": "Assertion Error",
          "description": "A description of the potential error associated with a dwc:assertionValue.",
          "notes": "",
          "examples": "`0.01`; `normal distribution with variation of 2 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionError"
        },
        {
          "name": "assertionBy",
          "title": "Assertion By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for making a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionBy"
        },
        {
          "name": "assertionBy_fk",
          "title": "Assertion By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionByID",
          "title": "Assertion By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionProtocols",
          "title": "Assertion Protocols",
          "description": "Names of, references to, or descriptions of dwc:Protocols used in making a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionProtocols"
        },
        {
          "name": "assertionProtocol_fk",
          "title": "Assertion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to make a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionReferences",
          "title": "Assertion References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionReferences"
        },
        {
          "name": "assertionRemarks",
          "title": "Assertion Remarks",
          "description": "Comments or notes about a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionRemarks"
        }
      ],
      "weakPrimaryKey": "assertionID",
      "foreignKeys": [
        {
          "fields": "molecularProtocol_fk",
          "predicate": "about",
          "reference": {
            "resource": "molecular-protocol",
            "fields": "molecularProtocol_pk"
          }
        },
        {
          "fields": "assertionBy_fk",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "assertionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "assertionByID",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "molecular-protocol-reference": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/molecular-protocol-reference",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/molecular-protocol-reference.json",
      "name": "molecular-protocol-reference",
      "title": "Molecular Protocol Reference",
      "description": "A dcterms:BibliographicResource related to a dwc:MolecularProtocol.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//molecular-protocol-reference",
      "fields": [
        {
          "name": "reference_fk",
          "title": "Reference ID (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "molecularProtocol_fk",
          "title": "Molecular Protocol (Foreign Key)",
          "description": "An identifier for a dwc:MolecularProtocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/molecularProtocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource to a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`cited in`; `referenced`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        }
      ],
      "foreignKeys": [
        {
          "fields": "reference_fk",
          "predicate": "mentioned in",
          "reference": {
            "resource": "bibliographic-resource",
            "fields": "reference_pk"
          }
        },
        {
          "fields": "molecularProtocol_fk",
          "predicate": "mentioned",
          "reference": {
            "resource": "molecular-protocol",
            "fields": "molecularProtocol_pk"
          }
        }
      ]
    },
    "nucleotide-analysis": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/nucleotide-analysis",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/nucleotide-analysis.json",
      "name": "nucleotide-analysis",
      "title": "Nucleotide Analysis",
      "description": "A link between a dwc:NucleotideSequence and a dwc:Event and a dwc:MaterialEntity from which it was derived, using a specified dwc:Protocol.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/NucleotideAnalysis",
      "fields": [
        {
          "name": "nucleotideAnalysis_pk",
          "title": "Nucleotide Analysis (Primary Key)",
          "description": "A unique identifier for a dwc:NucleotideAnalysis.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "nucleotideAnalysisID",
          "title": "Nucleotide Analysis ID",
          "description": "An identifier for a dwc:NucleotideAnalysis.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier"
        },
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "molecularProtocol_fk",
          "title": "Molecular Protocol (Foreign Key)",
          "description": "An identifier for a dwc:MolecularProtocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/molecularProtocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "nucleotideSequence_fk",
          "title": "Nucleotide Sequence (Foreign Key)",
          "description": "An identifier for a dwc:NucleotideSequence.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "materialEntity_fk",
          "title": "Material Entity (Foreign Key)",
          "description": "An identifier for a dwc:MaterialEntity.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/materialEntityID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "readCount",
          "title": "Read Count",
          "description": "The number of reads obtained for a processed dwc:NucleotideSequence during a dwc:NucleotideAnalysis.",
          "notes": "",
          "examples": "`325`; `73591`; `8302`",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/readCount"
        },
        {
          "name": "processedTotalReadCount",
          "title": "Processed Total Read Count",
          "description": "The total number of reads obtained for a processed dwc:NucleotideSequence during a dwc:NucleotideAnalysis.",
          "notes": "",
          "examples": "`50638`; `345987`; `764032`",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/processedTotalReadCount"
        },
        {
          "name": "rawTotalReadCount",
          "title": "Raw Total Read Count",
          "description": "A total number of raw, unprocessed reads from a dwc:NucleotideAnalysis.",
          "notes": "",
          "examples": "`70463`; `150456`; `586031`",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/rawTotalReadCount"
        }
      ],
      "primaryKey": "nucleotideAnalysis_pk",
      "weakPrimaryKey": "nucleotideAnalysisID",
      "foreignKeys": [
        {
          "fields": "event_fk",
          "predicate": "material collected during",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        },
        {
          "fields": "molecularProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "molecular-protocol",
            "fields": "molecularProtocol_pk"
          }
        },
        {
          "fields": "nucleotideSequence_fk",
          "predicate": "produced",
          "reference": {
            "resource": "nucleotide-sequence",
            "fields": "nucleotideSequence_pk"
          }
        },
        {
          "fields": "materialEntity_fk",
          "predicate": "based on",
          "reference": {
            "resource": "material",
            "fields": "materialEntity_pk"
          }
        }
      ]
    },
    "nucleotide-analysis-assertion": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/nucleotide-analysis-assertion",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/nucleotide-analysis-assertion.json",
      "name": "nucleotide-analysis-assertion",
      "title": "Nucleotide Analysis Assertion",
      "description": "A dwc:Assertion made by a dcterms:Agent about a dwc:NucleotideSequence.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
      "fields": [
        {
          "name": "assertionID",
          "title": "Assertion ID",
          "description": "An identifier for a dwc:Assertion.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionID",
          "constraints": {
            "required": false,
            "unique": true
          }
        },
        {
          "name": "nucleotideAnalysis_fk",
          "title": "Nucleotide Analysis (Foreign Key)",
          "description": "An identifier for a dwc:NucleotideAnalysis.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimAssertionType",
          "title": "Verbatim Assertion Type",
          "description": "A string representing the type of dwc:Assertion as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original name for a dwc:assertionType. This term is meant to be used in addition to dwc:assertionType, not instead of it.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimAssertionType"
        },
        {
          "name": "assertionType",
          "title": "Assertion Type",
          "description": "A category that best matches the nature of a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionType"
        },
        {
          "name": "assertionTypeIRI",
          "title": "Assertion Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementType"
        },
        {
          "name": "assertionTypeSource",
          "title": "Assertion Type Source",
          "description": "A reference to the controlled vocabulary in which the definition of a value in dwc:assertionType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionMadeDate",
          "title": "Assertion Made Date",
          "description": "A date on which a dwc:Assertion was created.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionMadeDate"
        },
        {
          "name": "assertionEffectiveDate",
          "title": "Assertion Effective Date",
          "description": "A date-time or time interval during which an asserted state or measurement was deemed to be in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        },
        {
          "name": "assertionValue",
          "title": "Assertion Value",
          "description": "An asserted value.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionValue"
        },
        {
          "name": "assertionValueIRI",
          "title": "Assertion Value IRI",
          "description": "An IRI of the controlled vocabulary value for a value of a dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementValue"
        },
        {
          "name": "assertionValueSource",
          "title": "Assertion Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:assertionValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionUnit",
          "title": "Assertion Unit",
          "description": "Unit associated with the value in dwc:assertionValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure http://www.wurvoc.org/vocabularies/om-1.8/ of SI units, derived units, or other non-SI units accepted for use within the SI. For units that are composed of multiple parts, use the patterns as given in \"A Primer for Communicating Mathematics via Plain Text\" (https://cse.sc.edu/~fenner/latex-ASCII.pdf) by Stephen Fenner (e.g., `g/cm^3` for grams per cubic centimeter). For other units, provide the value as a recognizable standard (e.g., '%') or written out in full and in the plural (e.g., `individuals`). It is fine to provide non-SI units in the original language of the dataset.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionUnit"
        },
        {
          "name": "assertionUnitIRI",
          "title": "Assertion Unit IRI",
          "description": "An IRI of a controlled vocabulary value for the unit of a dwc:assertionValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/assertionUnit"
        },
        {
          "name": "assertionUnitSource",
          "title": "Assertion Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of the value in dwc:assertionUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionError",
          "title": "Assertion Error",
          "description": "A description of the potential error associated with a dwc:assertionValue.",
          "notes": "",
          "examples": "`0.01`; `normal distribution with variation of 2 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionError"
        },
        {
          "name": "assertionBy",
          "title": "Assertion By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for making a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionBy"
        },
        {
          "name": "assertionBy_fk",
          "title": "Assertion By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionByID",
          "title": "Assertion By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionProtocols",
          "title": "Assertion Protocols",
          "description": "Names of, references to, or descriptions of dwc:Protocols used in making a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionProtocols"
        },
        {
          "name": "assertionProtocol_fk",
          "title": "Assertion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to make a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionReferences",
          "title": "Assertion References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionReferences"
        },
        {
          "name": "assertionRemarks",
          "title": "Assertion Remarks",
          "description": "Comments or notes about a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionRemarks"
        }
      ],
      "weakPrimaryKey": "assertionID",
      "foreignKeys": [
        {
          "fields": "nucleotideAnalysis_fk",
          "predicate": "about",
          "reference": {
            "resource": "nucleotide-analysis",
            "fields": "nucleotideAnalysis_pk"
          }
        },
        {
          "fields": "assertionBy_fk",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "assertionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "assertionByID",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "nucleotide-sequence": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/nucleotide-sequence",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/nucleotide-sequence.json",
      "name": "nucleotide-sequence",
      "title": "Nucleotide Sequence",
      "description": "A digital representation of a nucleotide sequence.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/NucleotideSequence",
      "fields": [
        {
          "name": "nucleotideSequence_pk",
          "title": "Nucleotide Sequence (Primary Key)",
          "description": "A unique identifier for a dwc:NucleotideSequence.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "nucleotideSequenceID",
          "title": "Nucleotide Sequence ID",
          "description": "An identifier for a dwc:NucleotideSequence.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier"
        },
        {
          "name": "sequence",
          "title": "Sequence",
          "description": "A string representing nucleotide base pairs.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/sequence"
        },
        {
          "name": "nucleotideSequenceRemarks",
          "title": "Nucleotide Sequence Remarks",
          "description": "Comments or notes about a dwc:NucleotideSequence.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/nucleotideSequenceRemarks"
        }
      ],
      "primaryKey": "nucleotideSequence_pk",
      "weakPrimaryKey": "nucleotideSequenceID"
    },
    "occurrence": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/occurrence",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/occurrence.json",
      "name": "occurrence",
      "title": "Occurrence",
      "description": "A dwc:Event that establishes the state of a dwc:Organism at a particular place and time.",
      "notes": "",
      "examples": "`a wolf pack on the shore of Kluane Lake in 1988`; `a virus in a plant leaf in the New York Botanical Garden at 15:29 on 2014-10-23`; `a fungus in Central Park in the summer of 1929`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/Occurrence",
      "fields": [
        {
          "name": "occurrence_pk",
          "title": "Occurrence (Primary Key)",
          "description": "A unique identifier for a dwc:Occurrence.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "`http://arctos.database.museum/guid/MSB:Mamm:233627`; `000866d2-c177-4648-a200-ead4007051b9`; `urn:catalog:UWBM:Bird:89776`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "occurrenceID",
          "title": "Occurrence ID",
          "description": "An identifier for a dwc:Occurrence.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "`http://arctos.database.museum/guid/MSB:Mamm:233627`; `000866d2-c177-4648-a200-ead4007051b9`; `urn:catalog:UWBM:Bird:89776`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID"
        },
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "isPartOfOccurrence_fk",
          "title": "Is Part Of Occurrence (Foreign Key)",
          "description": "An identifier for a dwc:Occurrence of which this dwc:Occurrence is a part.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "occurrenceProtocol_fk",
          "title": "Occurrence Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used for a dwc:Occurrence.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "surveyTarget_fk",
          "title": "Survey Target (Foreign Key)",
          "description": "An identifier for an eco:SurveyTarget.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyTargetID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "recordNumber",
          "title": "Record Number",
          "description": "An identifier given to the dwc:Occurrence at the time it was recorded. Often serves as a link between field notes and a dwc:MaterialEntity record, such as a specimen collector's number.",
          "notes": "Often serves as a link between field notes and a dwc:MaterialEntity, such as a specimen collector's number.",
          "examples": "`OPP 7101`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/recordNumber"
        },
        {
          "name": "organismQuantity",
          "title": "Organism Quantity",
          "description": "A number or enumeration value for the quantity of dwc:Organisms.",
          "notes": "A dwc:organismQuantity must have a corresponding dwc:organismQuantityType.",
          "examples": "`27` (organismQuantity) with `individuals` (organismQuantityType); `12.5` (organismQuantity) with `% biomass` (organismQuantityType); `r` (organismQuantity) with `Braun-Blanquet Scale` (organismQuantityType); `many` (organismQuantity) with `individuals` (organismQuantityType)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismQuantity"
        },
        {
          "name": "organismQuantityType",
          "title": "Organism Quantity Type",
          "description": "The type of quantification system used for the quantity of dwc:Organisms.",
          "notes": "A dwc:organismQuantityType must have a corresponding dwc:organismQuantity. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`27` (organismQuantity) with `individuals` (organismQuantityType); `12.5` (organismQuantity) with `% biomass` (organismQuantityType); `r` (organismQuantity) with `Braun-Blanquet Scale` (organismQuantityType); `many` (organismQuantity) with `individuals` (organismQuantityType)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismQuantityType"
        },
        {
          "name": "sex",
          "title": "Sex",
          "description": "A sex of a dwc:Organism.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`female`; `male`; `hermaphrodite`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/sex"
        },
        {
          "name": "lifeStage",
          "title": "Life Stage",
          "description": "An age class or life stage of a dwc:Organism.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`zygote`; `larva`; `juvenile`; `adult`; `seedling`; `flowering`; `fruiting`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/lifeStage"
        },
        {
          "name": "reproductiveCondition",
          "title": "Reproductive Condition",
          "description": "A reproductive condition of a dwc:Organism.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`non-reproductive`; `pregnant`; `in bloom`; `fruit-bearing`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/reproductiveCondition"
        },
        {
          "name": "caste",
          "title": "Caste",
          "description": "A social caste of a dwc:Organism.",
          "notes": "Recommended best practice is to use a controlled vocabulary that aligns best with a dwc:Taxon. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`queen`; `male alate`; `intercaste`; `minor worker`; `soldier`; `ergatoid`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/caste"
        },
        {
          "name": "behavior",
          "title": "Behavior",
          "description": "A behavior shown by a dwc:Organism.",
          "notes": "This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`roosting`; `foraging`; `running`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/behavior"
        },
        {
          "name": "vitality",
          "title": "Vitality",
          "description": "An indication of whether a dwc:Organism was alive or dead at the time of collection or observation.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`alive`; `dead`; `mixedLot`; `uncertain`; `notAssessed`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/vitality"
        },
        {
          "name": "establishmentMeans",
          "title": "Establishment Means",
          "description": "Statement about whether a dwc:Organism has been introduced to a given place and time through the direct or indirect activity of modern humans.",
          "notes": "Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at http://rs.tdwg.org/dwc/doc/em/. For details, refer to https://doi.org/10.3897/biss.3.38084. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`native`; `nativeReintroduced`; `introduced`; `introducedAssistedColonisation`; `vagrant`; `uncertain`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/establishmentMeans"
        },
        {
          "name": "degreeOfEstablishment",
          "title": "Degree Of Establishment",
          "description": "The degree to which a dwc:Organism survives, reproduces, and expands its range at the given place and time.",
          "notes": "Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at http://rs.tdwg.org/dwc/doc/doe/. For details, refer to https://doi.org/10.3897/biss.3.38084. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`native`; `captive`; `cultivated`; `released`; `failing`; `casual`; `reproducing`; `established`; `colonising`; `invasive`; `widespreadInvasive`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/degreeOfEstablishment"
        },
        {
          "name": "pathway",
          "title": "Pathway",
          "description": "The process by which a dwc:Organism came to be in a given place at a given time.",
          "notes": "Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at http://rs.tdwg.org/dwc/doc/pw/. For details, refer to https://doi.org/10.3897/biss.3.38084. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`releasedForUse`; `otherEscape`; `transportContaminant`; `transportStowaway`; `corridor`; `unaided`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/pathway"
        },
        {
          "name": "substrate",
          "title": "Substrate",
          "description": "A type of biotic or abiotic material to which a dwc:Organism was attached during a dwc:Occurrence.",
          "notes": "No inference can be made from this term that a dwc:Organism interacted in any other way than being connected to some (not a particular) material resource of the substrate type (such as during parasitization or decomposition). A host-parasite relationship is better expressed as a dwc:OrganismInteraction. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`stone`; `wall`; `decaying wood`; `wooden board fence`; `animal bones`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/substrate"
        },
        {
          "name": "occurrenceStatus",
          "title": "Occurrence Status",
          "description": "A statement about the detection or non-detection of a dwc:Organism during a dwc:Event.",
          "notes": "For dwc:Occurrences, the default vocabulary is recommended to consist of 'detected' and 'notDetected', but can be extended by implementers with good justification. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`detected`; `notDetected`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceStatus",
          "constraints": {
            "required": true
          }
        },
        {
          "name": "occurrenceReferences",
          "title": "Occurrence References",
          "description": "A list (concatenated and separated) of identifiers (publication, bibliographic reference, global unique identifier, URI) of literature associated with the dwc:Occurrence.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space ( | ). Note that the intended usage of the term dcterms:references in Darwin Core is to point to the definitive source representation of the resource, if one is available. Note also that the intended usage of dcterms:bibliographicCitation in Darwin Core is to provide the preferred way to cite the resource itself.",
          "examples": "`http://www.sciencemag.org/cgi/content/abstract/322/5899/261`; `Christopher J. Conroy, Jennifer L. Neuwald. 2008. Phylogeographic study of the California vole, Microtus californicus Journal of Mammalogy, 89(3):755-767.`; `Steven R. Hoofer and Ronald A. Van Den Bussche. 2001. Phylogenetic Relationships of Plecotine Bats and Allies Based on Mitochondrial Ribosomal Sequences. Journal of Mammalogy 82(1):131-137. | Walker, Faith M., Jeffrey T. Foster, Kevin P. Drees, Carol L. Chambers. 2014. Spotted bat (Euderma maculatum) microsatellite discovery using illumina sequencing. Conservation Genetics Resources.`; `https://doi.org/10.3897/BDJ.14.e177525`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/associatedReferences"
        },
        {
          "name": "occurrenceRemarks",
          "title": "Occurrence Remarks",
          "description": "Comments or notes about the dwc:Occurrence.",
          "notes": "",
          "examples": "`found dead on road`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceRemarks"
        },
        {
          "name": "organism_fk",
          "title": "Organism (Foreign Key)",
          "description": "An identifier for a dwc:Organism.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "organismID",
          "title": "Organism ID",
          "description": "An identifier for a dwc:Organism.",
          "notes": "The value in this field MAY refer to a dwc:Organism within or external to the dataset in which this record originated.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "organismScope",
          "title": "Organism Scope",
          "description": "A description of the kind of dwc:Organism instance. Can be used to indicate whether the dwc:Organism instance represents a discrete organism or if it represents a particular type of aggregation.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`multicellular organism`; `virus`; `clone`; `pack`; `colony`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismScope"
        },
        {
          "name": "organismName",
          "title": "Organism Name",
          "description": "A textual name or label assigned to a dwc:Organism instance.",
          "notes": "",
          "examples": "`Huberta`; `Boab Prison Tree`; `J pod`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismName"
        },
        {
          "name": "causeOfDeath",
          "title": "Cause Of Death",
          "description": "An indication of the known or suspected cause of death of a dwc:Organism.",
          "notes": "The cause may be due to natural causes (e.g., disease, predation), human-related activities (e.g., roadkill, pollution), or other environmental factors (e.g., extreme weather events).",
          "examples": "`trapped`; `poisoned`; `starved`; `drowned`; `shot`; `old age`; `roadkill`; `disease`; `herbicide`; `burned`; `infanticide`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/causeOfDeath"
        },
        {
          "name": "organismRemarks",
          "title": "Organism Remarks",
          "description": "Comments or notes about the dwc:Organism instance.",
          "notes": "`One of a litter of six`",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismRemarks"
        },
        {
          "name": "verbatimIdentification",
          "title": "Verbatim Identification",
          "description": "A string representing the classification as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original identification/determination, including identification qualifiers, hybrid formulas, uncertainties, etc. This term is meant to be used in addition to dwc:geologicalMaterialNames or dwc:scientificName (and dwc:identificationQualifier etc.), not instead of it.",
          "examples": "`Peromyscus sp.`; `Ministrymon sp. nov. 1`; `Anser anser × Branta canadensis`; `Pachyporidae?`, `Potentilla × pantotricha Soják`; `Aconitum pilipes × A. variegatum; `Lepomis auritus x cyanellus`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimIdentification"
        },
        {
          "name": "identifiedBy",
          "title": "Identified By",
          "description": "A name for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "When used in the context of a Survey, the subject consists of all of the dwc:Identifications related to the Event. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`James L. Patton`; `Theodore Pappenfuss | Robert Macey`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedBy"
        },
        {
          "name": "identifiedBy_fk",
          "title": "Identified By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "identifiedByID",
          "title": "Identified By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097` (for an individual); `https://orcid.org/0000-0002-1825-0097 | https://orcid.org/0000-0002-1825-0098` (for a list of people)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "dateIdentified",
          "title": "Date Identified",
          "description": "The date on which the subject was determined as representing the dwc:Taxon.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/dateIdentified"
        },
        {
          "name": "identificationReferences",
          "title": "Identification References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources used in a dwc:Identification.",
          "notes": "When used in the context of a Survey, the subject consists of all of the dwc:Identifications related to the Survey. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`Aves del Noroeste Patagonico. Christie et al. 2004.`; `Stebbins, R. Field Guide to Western Reptiles and Amphibians. 3rd Edition. 2003. | Irschick, D.J. and Shaffer, H.B. (1997). The polytypic species revisited: Morphological differentiation among tiger salamanders (Ambystoma tigrinum) (Amphibia: Caudata). Herpetologica, 53(1), 30-49.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationReferences"
        },
        {
          "name": "identificationVerificationStatus",
          "title": "Identification Verification Status",
          "description": "A categorical indicator of the extent to which a taxonomic determination has been verified to be correct.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as that used in HISPID and ABCD.",
          "examples": "`0` (unverified in HISPID/ABCD).",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationVerificationStatus"
        },
        {
          "name": "identificationRemarks",
          "title": "Identification Remarks",
          "description": "Comments or notes about the dwc:Identification.",
          "notes": "",
          "examples": "`Distinguished between Anthus correndera and Anthus hellmayri based on the comparative lengths of the uñas.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationRemarks"
        },
        {
          "name": "taxonID",
          "title": "Taxon ID",
          "description": "An identifier for a dwc:Taxon.",
          "notes": "In DwC-DP, the taxonID is always an external link to a taxon record. As such, if present, it should be a resolvable globally unique identifier. See the Identifiers section of https://github.com/CatalogueOfLife/coldp/blob/master/README.md.",
          "examples": "`8fa58e08-08de-4ac1-b69c-1235340b7001`; `32567`; `https://www.gbif.org/species/212`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonID"
        },
        {
          "name": "scientificNameID",
          "title": "Scientific Name ID",
          "description": "An identifier for the nomenclatural (not taxonomic) details of a scientific name.",
          "notes": "In DwC-DP, the taxonID is always an external link to a taxon record. As such, if present, it should be a resolvable globally unique identifier. See the Identifiers section of https://github.com/CatalogueOfLife/coldp/blob/master/README.md.",
          "examples": "`urn:lsid:ipni.org:names:37829-1:1.3`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificNameID"
        },
        {
          "name": "scientificName",
          "title": "Scientific Name",
          "description": "A scientific name string, not including authorship, date or identification qualifiers.",
          "notes": "",
          "examples": "`Coleoptera` (order); `Vespertilionidae` (family); `Manis` (genus); `Ctenomys sociabilis` (genus + specificEpithet); `Ambystoma tigrinum diaboli` (genus + specificEpithet + infraspecificEpithet); `Quercus agrifolia var. oxyadenia` (genus + specificEpithet + taxonRank + infraspecificEpithet); `×Agropogon littoralis`; `Mentha ×smithiana`; `Agrostis stolonifera L. × Polypogon monspeliensis`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificName"
        },
        {
          "name": "scientificNameAuthorship",
          "title": "Scientific Name Authorship",
          "description": "The authorship information for a dwc:scientificName formatted according to the conventions of the applicable dwc:nomenclaturalCode.",
          "notes": "",
          "examples": "`(Torr.) J.T. Howell`; `(Martinovský) Tzvelev`; `(Györfi, 1952)`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/scientificNameAuthorship"
        },
        {
          "name": "vernacularName",
          "title": "Vernacular Name",
          "description": "A common or vernacular name.",
          "notes": "",
          "examples": "`Andean Condor`; `death cap`; `rainbow trout`; `Smoky Quartz`; `Amethyst`; `Agate`; `Tiger's Eye`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/vernacularName"
        },
        {
          "name": "taxonRank",
          "title": "Taxon Rank",
          "description": "A taxonomic rank of the most specific name in a dwc:scientificName.",
          "notes": "Recommended best practice is to use a controlled vocabulary. The taxon ranks of algae, fungi and plants are defined in the International Code of Nomenclature for algae, fungi, and plants (Shenzhen Code Articles H3.2, H4.4 and H.3.1).",
          "examples": "`subspecies`; `varietas`; `forma`; `species`; `genus`; `nothogenus`; `nothospecies`; `nothosubspecies`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/taxonRank"
        },
        {
          "name": "classificationSystem",
          "title": "Classification System",
          "description": "A reference to the classification system in which an authoritative name or formal classification belongs.",
          "notes": "Recommended best practice is to provide a formal citation or IRI. This term should not be confused with dwc:namePublishedIn as a classification system is not equivalent to a publication in which a taxon is first described. This term should not be confused with dwc:nameAccordingTo as a classification system is not equivalent to a publication or other source in which a specific taxon concept circumscription is defined or implied. This term should not be confused with dwc:nomenclaturalCode as a classification system is not equivalent to code of nomenclature, which states the rules for naming rather than an organized source of names. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Strunz, H., Nickel, E.H. (2001): Strunz Mineralogical Tables. Chemical-Structural Mineral Classification System. 9th edition. E. Schweizerbart’sche Verlagsbuchhandlung, Stuttgart, ix + 870 p. (ISBN 3-510-65188-X)`; `Gaines, R.V., Skinner, H.C.W., Foord, E.E., Mason, B., Rosenzweig, A. (1997): Dana's New Mineralogy: The System of Mineralogy of James Dwight Dana and Edward Salisbury Dana. 8th edition. John Wiley & Sons, New York, xlv + 1819 p. (ISBN 0-471-19310-0).`; `https://kos.geospecimens.org/vocab/meteorite-classification`; `Mammal Diversity Database. (2026). Mammal Diversity Database (Version 2.5) [Data set]. [Zenodo](https://zenodo.org/records/10595931). https://doi.org/10.5281/zenodo.17033774`; `Index Fungorum. (2026). Index Fungorum electronic database. Royal Botanic Gardens, Kew. Retrieved August 17, 2026, from indexfungorum.org.`",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/classificationSystem"
        },
        {
          "name": "informationWithheld",
          "title": "Information Withheld",
          "description": "Additional information that exists about a resource, but that is not shared publicly. Suggests that alternative data of higher quality may be available on request.",
          "notes": "",
          "examples": "`location information not given for endangered species`; `collector identities withheld | ask about tissue samples`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/informationWithheld"
        },
        {
          "name": "dataGeneralizations",
          "title": "Data Generalizations",
          "description": "Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.",
          "notes": "",
          "examples": "`Coordinates generalized from original GPS coordinates to the nearest half degree grid cell.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/dataGeneralizations"
        },
        {
          "name": "feedbackURL",
          "title": "Feedback URL",
          "description": "A uniform resource locator (URL) that points to a webpage on which a form may be submitted to gather feedback about the record.",
          "notes": "Recommended best practice is to optionally include query strings that act to pre-populate web page form elements and communicate the context.",
          "examples": "`https://example.com/new?title=New+issue&body=This+comment+is+about+CAN12345`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/feedbackURL"
        }
      ],
      "primaryKey": "occurrence_pk",
      "weakPrimaryKey": "occurrenceID",
      "foreignKeys": [
        {
          "fields": "event_fk",
          "predicate": "has context",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        },
        {
          "fields": "isPartOfOccurrence_fk",
          "predicate": "part of",
          "reference": {
            "resource": "",
            "fields": "occurrence_pk"
          }
        },
        {
          "fields": "occurrenceProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "surveyTarget_fk",
          "predicate": "satisfied",
          "reference": {
            "resource": "survey-target",
            "fields": "surveyTarget_pk"
          }
        },
        {
          "fields": "organism_fk",
          "predicate": "of an",
          "reference": {
            "resource": "organism",
            "fields": "organism_pk"
          }
        },
        {
          "fields": "identifiedBy_fk",
          "predicate": "identified by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "organismID",
          "predicate": "of an",
          "reference": {
            "resource": "organism",
            "fields": "organismID"
          }
        },
        {
          "fields": "identifiedByID",
          "predicate": "identified by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "occurrence-agent-role": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/occurrence-agent-role",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/occurrence-agent-role.json",
      "name": "occurrence-agent-role",
      "title": "Occurrence Agent Role",
      "description": "A role filled by a dcterms:Agent with respect to a dwc:Occurrence.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//occurrence-agent-role",
      "fields": [
        {
          "name": "occurrence_fk",
          "title": "Occurrence (Foreign Key)",
          "description": "An identifier for a dwc:Occurrence.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agentRole",
          "title": "Agent Role",
          "description": "A category that best matches the nature of a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary for the roles appropriate to the class of resource a dcterms:AgentRole is related to.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "agentRoleIRI",
          "title": "Agent Role IRI",
          "description": "An IRI of the controlled vocabulary value for a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "agentRoleSource",
          "title": "Agent Role Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:agentRole is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "agentRoleOrder",
          "title": "Agent Role Order",
          "description": "A numerical position of an AgentRole in a set of AgentRoles that have the same combination of agentRole, agentRoleIRI, agentRoleSource and related target identifier.",
          "notes": "One could use dwc:agentRoleOrder to create an ordered list of collectors (dwc:agentRole = 'collector') for a dwc:MaterialEntity, for example. The first would have dwc:agentRoleOrder=1, the second would have dwc:agentRoleOrder=2.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRoleOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "agentRoleDate",
          "title": "Agent Role Date",
          "description": "An interval during which a dcterms:AgentRole was in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        }
      ],
      "foreignKeys": [
        {
          "fields": "occurrence_fk",
          "predicate": "role for",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrence_pk"
          }
        },
        {
          "fields": "agent_fk",
          "predicate": "role holder",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "occurrence-assertion": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/occurrence-assertion",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/occurrence-assertion.json",
      "name": "occurrence-assertion",
      "title": "Occurrence Assertion",
      "description": "A dwc:Assertion made by a dcterms:Agent about a dwc:Occurrence.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
      "fields": [
        {
          "name": "assertionID",
          "title": "Assertion ID",
          "description": "An identifier for a dwc:Assertion.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionID",
          "constraints": {
            "required": false,
            "unique": true
          }
        },
        {
          "name": "occurrence_fk",
          "title": "Occurrence (Foreign Key)",
          "description": "An identifier for a dwc:Occurrence.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimAssertionType",
          "title": "Verbatim Assertion Type",
          "description": "A string representing the type of dwc:Assertion as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original name for a dwc:assertionType. This term is meant to be used in addition to dwc:assertionType, not instead of it.",
          "examples": "`water_temp`; `Fish biomass`; `sampling net mesh size`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimAssertionType"
        },
        {
          "name": "assertionType",
          "title": "Assertion Type",
          "description": "A category that best matches the nature of a dwc:Assertion.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`tail length`; `temperature`; `trap line length`; `survey area`; `trap type`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionType"
        },
        {
          "name": "assertionTypeIRI",
          "title": "Assertion Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementType"
        },
        {
          "name": "assertionTypeSource",
          "title": "Assertion Type Source",
          "description": "A reference to the controlled vocabulary in which the definition of a value in dwc:assertionType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionMadeDate",
          "title": "Assertion Made Date",
          "description": "A date on which a dwc:Assertion was created.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionMadeDate"
        },
        {
          "name": "assertionEffectiveDate",
          "title": "Assertion Effective Date",
          "description": "A date-time or time interval during which an asserted state or measurement was deemed to be in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        },
        {
          "name": "assertionValue",
          "title": "Assertion Value",
          "description": "An asserted value.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionValue"
        },
        {
          "name": "assertionValueIRI",
          "title": "Assertion Value IRI",
          "description": "An IRI of the controlled vocabulary value for a value of a dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementValue"
        },
        {
          "name": "assertionValueSource",
          "title": "Assertion Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:assertionValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionUnit",
          "title": "Assertion Unit",
          "description": "Unit associated with the value in dwc:assertionValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure http://www.wurvoc.org/vocabularies/om-1.8/ of SI units, derived units, or other non-SI units accepted for use within the SI. For units that are composed of multiple parts, use the patterns as given in \"A Primer for Communicating Mathematics via Plain Text\" (https://cse.sc.edu/~fenner/latex-ASCII.pdf) by Stephen Fenner (e.g., `g/cm^3` for grams per cubic centimeter). For other units, provide the value as a recognizable standard (e.g., '%') or written out in full and in the plural (e.g., `individuals`). It is fine to provide non-SI units in the original language of the dataset.",
          "examples": "`m`; `s`; `g`; `ml`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionUnit"
        },
        {
          "name": "assertionUnitIRI",
          "title": "Assertion Unit IRI",
          "description": "An IRI of a controlled vocabulary value for the unit of a dwc:assertionValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/assertionUnit"
        },
        {
          "name": "assertionUnitSource",
          "title": "Assertion Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of the value in dwc:assertionUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionError",
          "title": "Assertion Error",
          "description": "A description of the potential error associated with a dwc:assertionValue.",
          "notes": "",
          "examples": "`0.01`; `normal distribution with variation of 2 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionError"
        },
        {
          "name": "assertionBy",
          "title": "Assertion By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for making a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionBy"
        },
        {
          "name": "assertionBy_fk",
          "title": "Assertion By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionByID",
          "title": "Assertion By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionProtocols",
          "title": "Assertion Protocols",
          "description": "Names of, references to, or descriptions of dwc:Protocols used in making a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionProtocols"
        },
        {
          "name": "assertionProtocol_fk",
          "title": "Assertion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to make a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionReferences",
          "title": "Assertion References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionReferences"
        },
        {
          "name": "assertionRemarks",
          "title": "Assertion Remarks",
          "description": "Comments or notes about a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionRemarks"
        }
      ],
      "weakPrimaryKey": "assertionID",
      "foreignKeys": [
        {
          "fields": "occurrence_fk",
          "predicate": "about",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrence_pk"
          }
        },
        {
          "fields": "assertionBy_fk",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "assertionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "assertionByID",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "occurrence-identifier": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/occurrence-identifier",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/occurrence-identifier.json",
      "name": "occurrence-identifier",
      "title": "Occurrence Identifier",
      "description": "An adms:Identifier for a dwc:Occurrence.",
      "notes": "An important point to note is that properties of the adms:Identifier class are properties of the Identifier, not the resource that it identifies or the agency that issued it.",
      "examples": "",
      "namespace": "adms",
      "dcterms:isVersionOf": "http://www.w3.org/ns/adms#Identifier",
      "fields": [
        {
          "name": "occurrence_fk",
          "title": "Occurrence (Foreign Key)",
          "description": "An identifier for a dwc:Occurrence.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "description": "An unambiguous reference to a resource within a given context.",
          "notes": "Recommended best practice is to identify a resource by means of a string conforming to a formal identification system.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "skos",
          "dcterms:isVersionOf": "http://www.w3.org/2004/02/skos/core#notation",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifierType",
          "title": "Identifier Type",
          "description": "A category or system that best matches the nature of an identifier (skos:notation).",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/type"
        },
        {
          "name": "identifierTypeIRI",
          "title": "Identifier Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of identifier.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "identifierTypeSource",
          "title": "Identifier Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:identifierType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "identifierLanguage",
          "title": "Identifier Language",
          "description": "A language in which an identifier is presented.",
          "notes": "Recommended best practice is to use an ISO639-2 three-letter language code.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/language"
        }
      ],
      "foreignKeys": [
        {
          "fields": "occurrence_fk",
          "predicate": "for",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrence_pk"
          }
        }
      ]
    },
    "occurrence-media": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/occurrence-media",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/occurrence-media.json",
      "name": "occurrence-media",
      "title": "Occurrence Media",
      "description": "A dwc:Occurrence as content in an ac:Media entity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//occurrence-media",
      "fields": [
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "occurrence_fk",
          "title": "Occurrence (Foreign Key)",
          "description": "An identifier for a dwc:Occurrence.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "subjectCategory",
          "title": "Subject Category",
          "description": "A term to describe the content of a image or a region of interest within an image using a controlled value string.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/CVtermLiteral"
        },
        {
          "name": "subjectCategoryIRI",
          "title": "Subject Category IRI",
          "description": "An IRI of a controlled vocabulary value for the subject category of an ac:Media resource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "Iptc4xmpExt",
          "dcterms:isVersionOf": "http://iptc.org/std/Iptc4xmpExt/2008-02-29/CVterm"
        },
        {
          "name": "subjectCategoryVocabulary",
          "title": "Subject Category Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:subjectCategory is given.",
          "notes": "The Audiovisual Core recommended vocabularies do not need to be cited here. There is no required linkage between individual Subject Category terms and the vocabulary; the mechanism is intended to support discovery of the normative URI for a term, but not guarantee it.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectCategoryVocabulary"
        },
        {
          "name": "subjectPartLiteral",
          "title": "Subject Part Literal",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectPart. It is best practice to use ac:subjectPart instead of ac:subjectPartLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPartLiteral"
        },
        {
          "name": "subjectPart",
          "title": "Subject Part",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by an IRI.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPart"
        },
        {
          "name": "subjectOrientationLiteral",
          "title": "Subject Orientation Literal",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectOrientation. It is best practice to use ac:subjectOrientation instead of ac:subjectOrientationLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientationLiteral"
        },
        {
          "name": "subjectOrientation",
          "title": "Subject Orientation",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientation"
        },
        {
          "name": "physicalSetting",
          "title": "Physical Setting",
          "description": "The setting of the content represented in an ac:Media resource, such as images, sounds, and movies if the provider deems them relevant.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/physicalSetting"
        }
      ],
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "this media instance",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "occurrence_fk",
          "predicate": "about",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrence_pk"
          }
        }
      ]
    },
    "occurrence-protocol": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/occurrence-protocol",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/occurrence-protocol.json",
      "name": "occurrence-protocol",
      "title": "Occurrence Protocol",
      "description": "A dwc:Protocol used for a dwc:Occurrence.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//occurrence-protocol",
      "fields": [
        {
          "name": "protocol_fk",
          "title": "Occurrence Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "occurrence_fk",
          "title": "Occurrence (Foreign Key)",
          "description": "An identifier for a dwc:Occurrence.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "protocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "occurrence_fk",
          "predicate": "used during",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrence_pk"
          }
        }
      ]
    },
    "occurrence-reference": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/occurrence-reference",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/occurrence-reference.json",
      "name": "occurrence-reference",
      "title": "Occurrence Reference",
      "description": "A dcterms:BibliographicResource related to a dwc:Occurrence.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//occurrence-reference",
      "fields": [
        {
          "name": "reference_fk",
          "title": "Reference (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "occurrence_fk",
          "title": "Occurrence (Foreign Key)",
          "description": "An identifier for a dwc:Occurrence.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource to a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`cited in`; `referenced`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        }
      ],
      "foreignKeys": [
        {
          "fields": "reference_fk",
          "predicate": "mentioned in",
          "reference": {
            "resource": "bibliographic-resource",
            "fields": "reference_pk"
          }
        },
        {
          "fields": "occurrence_fk",
          "predicate": "mentioned",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrence_pk"
          }
        }
      ]
    },
    "organism": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/organism",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/organism.json",
      "name": "organism",
      "title": "Organism",
      "description": "A particular organism or defined group of organisms considered to be taxonomically homogeneous.",
      "notes": "Instances of the dwc:Organism class are intended to facilitate linking one or more dwc:Identification instances to one or more dwc:Occurrence instances. Therefore, things that are typically assigned scientific names (such as viruses, hybrids, and lichens) and aggregates whose dwc:Occurrences are typically recorded (such as packs, clones, and colonies) are included in the scope of this class.",
      "examples": "`a specific bird`; `a specific wolf pack`; `a specific instance of a bacterial culture`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/Organism",
      "fields": [
        {
          "name": "organism_pk",
          "title": "Organism (Primary Key)",
          "description": "A unique identifier for a dwc:Organism.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "organismID",
          "title": "Organism ID",
          "description": "An identifier for a dwc:Organism.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID"
        },
        {
          "name": "organismScope",
          "title": "Organism Scope",
          "description": "A description of the kind of dwc:Organism instance. Can be used to indicate whether the dwc:Organism instance represents a discrete organism or if it represents a particular type of aggregation.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`multicellular organism`; `virus`; `clone`; `pack`; `colony`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismScope"
        },
        {
          "name": "organismName",
          "title": "Organism Name",
          "description": "A textual name or label assigned to a dwc:Organism instance.",
          "notes": "",
          "examples": "`Huberta`; `Boab Prison Tree`; `J pod`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismName"
        },
        {
          "name": "causeOfDeath",
          "title": "Cause Of Death",
          "description": "An indication of the known or suspected cause of death of a dwc:Organism.",
          "notes": "The cause may be due to natural causes (e.g., disease, predation), human-related activities (e.g., roadkill, pollution), or other environmental factors (e.g., extreme weather events).",
          "examples": "`trapped`; `poisoned`; `starved`; `drowned`; `shot`; `old age`; `roadkill`; `disease`; `herbicide`; `burned`; `infanticide`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/causeOfDeath"
        },
        {
          "name": "associatedOrganisms",
          "title": "Associated Organisms",
          "description": "A list (concatenated and separated) of identifiers of other dwc:Organisms and the associations of this dwc:Organism to each of them.",
          "notes": "This term can be used to provide a list of associations to other dwc:Organisms. Note that the dwc:ResourceRelationship class is an alternative means of representing associations, and with more detail. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`\"sibling of\":\"http://arctos.database.museum/guid/DMNS:Mamm:14171\"`; `\"parent of\":\"http://arctos.database.museum/guid/MSB:Mamm:196208\" | \"parent of\":\"http://arctos.database.museum/guid/MSB:Mamm:196523\" | \"sibling of\":\"http://arctos.database.museum/guid/MSB:Mamm:142638\"`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/associatedOrganisms"
        },
        {
          "name": "organismRemarks",
          "title": "Organism Remarks",
          "description": "Comments or notes about the dwc:Organism instance.",
          "notes": "",
          "examples": "`One of a litter of six`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismRemarks"
        }
      ],
      "primaryKey": "organism_pk",
      "weakPrimaryKey": "organismID"
    },
    "organism-assertion": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/organism-assertion",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/organism-assertion.json",
      "name": "organism-assertion",
      "title": "Organism Assertion",
      "description": "A dwc:Assertion made by a dcterms:Agent about a dwc:Organism.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
      "fields": [
        {
          "name": "assertionID",
          "title": "Assertion ID",
          "description": "An identifier for a dwc:Assertion.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionID",
          "constraints": {
            "required": false,
            "unique": true
          }
        },
        {
          "name": "organism_fk",
          "title": "Organism (Foreign Key)",
          "description": "An identifier for a dwc:Organism.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimAssertionType",
          "title": "Verbatim Assertion Type",
          "description": "A string representing the type of dwc:Assertion as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original name for a dwc:assertionType. This term is meant to be used in addition to dwc:assertionType, not instead of it.",
          "examples": "`water_temp`; `Fish biomass`; `sampling net mesh size`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimAssertionType"
        },
        {
          "name": "assertionType",
          "title": "Assertion Type",
          "description": "A category that best matches the nature of a dwc:Assertion.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`tail length`; `temperature`; `trap line length`; `survey area`; `trap type`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionType"
        },
        {
          "name": "assertionTypeIRI",
          "title": "Assertion Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementType"
        },
        {
          "name": "assertionTypeSource",
          "title": "Assertion Type Source",
          "description": "A reference to the controlled vocabulary in which the definition of a value in dwc:assertionType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionMadeDate",
          "title": "Assertion Made Date",
          "description": "A date on which a dwc:Assertion was created.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionMadeDate"
        },
        {
          "name": "assertionEffectiveDate",
          "title": "Assertion Effective Date",
          "description": "A date-time or time interval during which an asserted state or measurement was deemed to be in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        },
        {
          "name": "assertionValue",
          "title": "Assertion Value",
          "description": "An asserted value.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionValue"
        },
        {
          "name": "assertionValueIRI",
          "title": "Assertion Value IRI",
          "description": "An IRI of the controlled vocabulary value for a value of a dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementValue"
        },
        {
          "name": "assertionValueSource",
          "title": "Assertion Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:assertionValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionUnit",
          "title": "Assertion Unit",
          "description": "Unit associated with the value in dwc:assertionValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure http://www.wurvoc.org/vocabularies/om-1.8/ of SI units, derived units, or other non-SI units accepted for use within the SI. For units that are composed of multiple parts, use the patterns as given in \"A Primer for Communicating Mathematics via Plain Text\" (https://cse.sc.edu/~fenner/latex-ASCII.pdf) by Stephen Fenner (e.g., `g/cm^3` for grams per cubic centimeter). For other units, provide the value as a recognizable standard (e.g., '%') or written out in full and in the plural (e.g., `individuals`). It is fine to provide non-SI units in the original language of the dataset.",
          "examples": "`m`; `s`; `g`; `ml`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionUnit"
        },
        {
          "name": "assertionUnitIRI",
          "title": "Assertion Unit IRI",
          "description": "An IRI of a controlled vocabulary value for the unit of a dwc:assertionValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/assertionUnit"
        },
        {
          "name": "assertionUnitSource",
          "title": "Assertion Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of the value in dwc:assertionUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionError",
          "title": "Assertion Error",
          "description": "A description of the potential error associated with a dwc:assertionValue.",
          "notes": "",
          "examples": "`0.01`; `normal distribution with variation of 2 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionError"
        },
        {
          "name": "assertionBy",
          "title": "Assertion By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for making a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionBy"
        },
        {
          "name": "assertionBy_fk",
          "title": "Assertion By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionByID",
          "title": "Assertion By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionProtocols",
          "title": "Assertion Protocols",
          "description": "Names of, references to, or descriptions of dwc:Protocols used in making a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionProtocols"
        },
        {
          "name": "assertionProtocol_fk",
          "title": "Assertion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to make a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionReferences",
          "title": "Assertion References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionReferences"
        },
        {
          "name": "assertionRemarks",
          "title": "Assertion Remarks",
          "description": "Comments or notes about a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionRemarks"
        }
      ],
      "weakPrimaryKey": "assertionID",
      "foreignKeys": [
        {
          "fields": "organism_fk",
          "predicate": "about",
          "reference": {
            "resource": "organism",
            "fields": "organism_pk"
          }
        },
        {
          "fields": "assertionBy_fk",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "assertionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "assertionByID",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "organism-identifier": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/organism-identifier",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/organism-identifier.json",
      "name": "organism-identifier",
      "title": "Organism Identifier",
      "description": "An adms:Identifier for a dwc:Organism.",
      "notes": "An important point to note is that properties of the adms:Identifier class are properties of the Identifier, not the resource that it identifies or the agency that issued it.",
      "examples": "",
      "namespace": "adms",
      "dcterms:isVersionOf": "http://www.w3.org/ns/adms#Identifier",
      "fields": [
        {
          "name": "organism_fk",
          "title": "Organism (Foreign Key)",
          "description": "An identifier for a dwc:Organism.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "description": "An unambiguous reference to a resource within a given context.",
          "notes": "Recommended best practice is to identify a resource by means of a string conforming to a formal identification system.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "skos",
          "dcterms:isVersionOf": "http://www.w3.org/2004/02/skos/core#notation",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifierType",
          "title": "Identifier Type",
          "description": "A category or system that best matches the nature of an identifier (skos:notation).",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/type"
        },
        {
          "name": "identifierTypeIRI",
          "title": "Identifier Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of identifier.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "identifierTypeSource",
          "title": "Identifier Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:identifierType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "identifierLanguage",
          "title": "Identifier Language",
          "description": "A language in which an identifier is presented.",
          "notes": "Recommended best practice is to use an ISO639-2 three-letter language code.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/language"
        }
      ],
      "foreignKeys": [
        {
          "fields": "organism_fk",
          "predicate": "for",
          "reference": {
            "resource": "organism",
            "fields": "organism_pk"
          }
        }
      ]
    },
    "organism-interaction": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/organism-interaction",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/organism-interaction.json",
      "name": "organism-interaction",
      "title": "Organism Interaction",
      "description": "An interaction between two dwc:Organisms during a dwc:Event.",
      "notes": "Supports only primary observed interactions, not habitual or derived taxon-level interactions. Pairwise interactions must be used to represent multi-organism interactions. When possible, typify the action rather than the state from which an action is inferred, with the actor as the subject dwc:Occurrence and the acted-upon as the related dwc:Occurrence. Only one direction of a two-way interaction is necessary, though both are permissible as distinct OrganismInteractions with distinct subject dwc:Occurrences.",
      "examples": "`a bee visiting a flower`; `a Mallophora ruficauda hunting an Apis mellifera in flight`; `a viral infection in a plant`; `a female spider mating with a male spider`; `a lion cub nursing from its mother`; `a mosquito sucking blood from a chimpanzee's arm`; `a slug eating a fungus growing on decomposing stump (2 interactions)`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/OrganismInteraction",
      "fields": [
        {
          "name": "organismInteraction_pk",
          "title": "Organism Interaction (Primary Key)",
          "description": "A unique identifier for a dwc:OrganismInteraction.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismInteractionID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "organismInteractionID",
          "title": "Organism Interaction ID",
          "description": "An identifier for a dwc:OrganismInteraction.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismInteractionID"
        },
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "organismInteractionDescription",
          "title": "Organism Interaction Description",
          "description": "A verbatim description of a dwc:OrganismInteraction.",
          "notes": "",
          "examples": "`Mallophora ruficauda capturing an Apis mellifera worker in flight.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismInteractionDescription"
        },
        {
          "name": "subjectOccurrence_fk",
          "title": "Subject Occurrence (Foreign Key)",
          "description": "An identifier for a subject dwc:Occurrence in a dwc:OrganismInteraction.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "subjectOrganismPart",
          "title": "Subject Organism Part",
          "description": "An anatomical part of a subject dwc:Organism involved in a dwc:OrganismInteraction.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`leaf`; `stomach`; `stamen`; `leg`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismPart"
        },
        {
          "name": "organismInteractionType",
          "title": "Organism Interaction Type",
          "description": "A category that best matches the nature of a dwc:OrganismInteraction.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`visited flower of`; `pollinated by`; `parasitoid of`; `mated with`; `was attached to`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismInteractionType"
        },
        {
          "name": "relatedOccurrence_fk",
          "title": "Related Occurrence (Foreign Key)",
          "description": "An identifier for a related dwc:Occurrence in a dwc:OrganismInteraction.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "relatedOccurrenceID",
          "title": "Related Occurrence ID",
          "description": "An identifier for a related dwc:Occurrence in a dwc:OrganismInteraction.",
          "notes": "The value in this field MAY refer to a dwc:Occurrence within or external to the dataset in which this record originated.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "externalRelatedOccurrenceID",
          "title": "External Related Occurrence ID",
          "description": "An identifier for a related dwc:Occurrence (the object) of a dwc:ResourceRelationship that is not within the same dataset.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/occurrenceID"
        },
        {
          "name": "externalRelatedOccurrenceSource",
          "title": "External Related Occurrence Source",
          "description": "A reference to a source outside the dataset where the related dwc:Occurrence record can be found.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "relatedOrganismPart",
          "title": "Related Organism Part",
          "description": "An anatomical part of a object dwc:Organism involved in a dwc:OrganismInteraction.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`leaf`; `stomach`; `stamen`; `leg`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismPart"
        },
        {
          "name": "feedbackURL",
          "title": "Feedback URL",
          "description": "A uniform resource locator (URL) that points to a webpage on which a form may be submitted to gather feedback about the record.",
          "notes": "Recommended best practice is to optionally include query strings that act to pre-populate web page form elements and communicate the context.",
          "examples": "`https://example.com/new?title=New+issue&body=This+comment+is+about+CAN12345`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/feedbackURL"
        }
      ],
      "primaryKey": "organismInteraction_pk",
      "weakPrimaryKey": "organismInteractionID",
      "foreignKeys": [
        {
          "fields": "event_fk",
          "predicate": "has context",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        },
        {
          "fields": "subjectOccurrence_fk",
          "predicate": "by",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrence_pk"
          }
        },
        {
          "fields": "relatedOccurrence_fk",
          "predicate": "with",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrence_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "relatedOccurrenceID",
          "predicate": "with",
          "reference": {
            "resource": "occurrence",
            "fields": "occurrenceID"
          }
        }
      ]
    },
    "organism-interaction-agent-role": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/organism-interaction-agent-role",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/organism-interaction-agent-role.json",
      "name": "organism-interaction-agent-role",
      "title": "Organism Interaction Agent Role",
      "description": "A role filled by a dcterms:Agent with respect to a dwc:OrganismInteraction.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//organism-interaction-agent-role",
      "fields": [
        {
          "name": "organismInteraction_fk",
          "title": "Organism Interaction (Foreign Key)",
          "description": "An identifier for a dwc:OrganismInteraction.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismInteractionID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agentRole",
          "title": "Agent Role",
          "description": "A category that best matches the nature of a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary for the roles appropriate to the class of resource a dcterms:AgentRole is related to.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "agentRoleIRI",
          "title": "Agent Role IRI",
          "description": "An IRI of the controlled vocabulary value for a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "agentRoleSource",
          "title": "Agent Role Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:agentRole is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "agentRoleOrder",
          "title": "Agent Role Order",
          "description": "A numerical position of an AgentRole in a set of AgentRoles that have the same combination of agentRole, agentRoleIRI, agentRoleSource and related target identifier.",
          "notes": "One could use dwc:agentRoleOrder to create an ordered list of collectors (dwc:agentRole = 'collector') for a dwc:MaterialEntity, for example. The first would have dwc:agentRoleOrder=1, the second would have dwc:agentRoleOrder=2.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRoleOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "agentRoleDate",
          "title": "Agent Role Date",
          "description": "An interval during which a dcterms:AgentRole was in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        }
      ],
      "foreignKeys": [
        {
          "fields": "organismInteraction_fk",
          "predicate": "role for",
          "reference": {
            "resource": "organism-interaction",
            "fields": "organismInteraction_pk"
          }
        },
        {
          "fields": "agent_fk",
          "predicate": "role holder",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "organism-interaction-assertion": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/organism-interaction-assertion",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/organism-interaction-assertion.json",
      "name": "organism-interaction-assertion",
      "title": "Organism Interaction Assertion",
      "description": "A dwc:Assertion made by a dcterms:Agent about a dwc:OrganismInteraction.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
      "fields": [
        {
          "name": "assertionID",
          "title": "Assertion ID",
          "description": "An identifier for a dwc:Assertion.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionID",
          "constraints": {
            "required": false,
            "unique": true
          }
        },
        {
          "name": "organismInteraction_fk",
          "title": "Organism Interaction (Foreign Key)",
          "description": "An identifier for a dwc:OrganismInteraction.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismInteractionID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimAssertionType",
          "title": "Verbatim Assertion Type",
          "description": "A string representing the type of dwc:Assertion as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original name for a dwc:assertionType. This term is meant to be used in addition to dwc:assertionType, not instead of it.",
          "examples": "`water_temp`; `Fish biomass`; `sampling net mesh size`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimAssertionType"
        },
        {
          "name": "assertionType",
          "title": "Assertion Type",
          "description": "A category that best matches the nature of a dwc:Assertion.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`tail length`; `temperature`; `trap line length`; `survey area`; `trap type`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionType"
        },
        {
          "name": "assertionTypeIRI",
          "title": "Assertion Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementType"
        },
        {
          "name": "assertionTypeSource",
          "title": "Assertion Type Source",
          "description": "A reference to the controlled vocabulary in which the definition of a value in dwc:assertionType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionMadeDate",
          "title": "Assertion Made Date",
          "description": "A date on which a dwc:Assertion was created.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionMadeDate"
        },
        {
          "name": "assertionEffectiveDate",
          "title": "Assertion Effective Date",
          "description": "A date-time or time interval during which an asserted state or measurement was deemed to be in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        },
        {
          "name": "assertionValue",
          "title": "Assertion Value",
          "description": "An asserted value.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionValue"
        },
        {
          "name": "assertionValueIRI",
          "title": "Assertion Value IRI",
          "description": "An IRI of the controlled vocabulary value for a value of a dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementValue"
        },
        {
          "name": "assertionValueSource",
          "title": "Assertion Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:assertionValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionUnit",
          "title": "Assertion Unit",
          "description": "Unit associated with the value in dwc:assertionValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure http://www.wurvoc.org/vocabularies/om-1.8/ of SI units, derived units, or other non-SI units accepted for use within the SI. For units that are composed of multiple parts, use the patterns as given in \"A Primer for Communicating Mathematics via Plain Text\" (https://cse.sc.edu/~fenner/latex-ASCII.pdf) by Stephen Fenner (e.g., `g/cm^3` for grams per cubic centimeter). For other units, provide the value as a recognizable standard (e.g., '%') or written out in full and in the plural (e.g., `individuals`). It is fine to provide non-SI units in the original language of the dataset.",
          "examples": "`m`; `s`; `g`; `ml`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionUnit"
        },
        {
          "name": "assertionUnitIRI",
          "title": "Assertion Unit IRI",
          "description": "An IRI of a controlled vocabulary value for the unit of a dwc:assertionValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/assertionUnit"
        },
        {
          "name": "assertionUnitSource",
          "title": "Assertion Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of the value in dwc:assertionUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionError",
          "title": "Assertion Error",
          "description": "A description of the potential error associated with a dwc:assertionValue.",
          "notes": "",
          "examples": "`0.01`; `normal distribution with variation of 2 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionError"
        },
        {
          "name": "assertionBy",
          "title": "Assertion By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for making a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionBy"
        },
        {
          "name": "assertionBy_fk",
          "title": "Assertion By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionByID",
          "title": "Assertion By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionProtocols",
          "title": "Assertion Protocols",
          "description": "Names of, references to, or descriptions of dwc:Protocols used in making a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionProtocols"
        },
        {
          "name": "assertionProtocol_fk",
          "title": "Assertion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to make a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionReferences",
          "title": "Assertion References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionReferences"
        },
        {
          "name": "assertionRemarks",
          "title": "Assertion Remarks",
          "description": "Comments or notes about a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionRemarks"
        }
      ],
      "weakPrimaryKey": "assertionID",
      "foreignKeys": [
        {
          "fields": "organismInteraction_fk",
          "predicate": "about",
          "reference": {
            "resource": "organism-interaction",
            "fields": "organismInteraction_pk"
          }
        },
        {
          "fields": "assertionBy_fk",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "assertionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "assertionByID",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "organism-interaction-media": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/organism-interaction-media",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/organism-interaction-media.json",
      "name": "organism-interaction-media",
      "title": "Organism Interaction Media",
      "description": "A dwc:OrganismInteraction as content in an ac:Media entity.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//organism-interaction-media",
      "fields": [
        {
          "name": "media_fk",
          "title": "Media (Foreign Key)",
          "description": "An identifier for an ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "organismInteraction_fk",
          "title": "Organism Interaction (Foreign Key)",
          "description": "An identifier for a dwc:OrganismInteraction.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismInteractionID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "subjectCategory",
          "title": "Subject Category",
          "description": "A term to describe the content of a image or a region of interest within an image using a controlled value string.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/CVtermLiteral"
        },
        {
          "name": "subjectCategoryIRI",
          "title": "Subject Category IRI",
          "description": "An IRI of a controlled vocabulary value for the subject category of an ac:Media resource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "Iptc4xmpExt",
          "dcterms:isVersionOf": "http://iptc.org/std/Iptc4xmpExt/2008-02-29/CVterm"
        },
        {
          "name": "subjectCategoryVocabulary",
          "title": "Subject Category Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:subjectCategory is given.",
          "notes": "The Audiovisual Core recommended vocabularies do not need to be cited here. There is no required linkage between individual Subject Category terms and the vocabulary; the mechanism is intended to support discovery of the normative URI for a term, but not guarantee it.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectCategoryVocabulary"
        },
        {
          "name": "subjectPartLiteral",
          "title": "Subject Part Literal",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectPart. It is best practice to use ac:subjectPart instead of ac:subjectPartLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPartLiteral"
        },
        {
          "name": "subjectPart",
          "title": "Subject Part",
          "description": "The portion or product of organism morphology, behaviour, environment, etc. that is either predominantly shown or particularly well exemplified by the ac:Media resource.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectPart"
        },
        {
          "name": "subjectOrientationLiteral",
          "title": "Subject Orientation Literal",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device, denoted by a controlled value string.",
          "notes": "Values SHOULD be selected from the Controlled Vocabulary for ac:subjectOrientation. It is best practice to use ac:subjectOrientation instead of ac:subjectOrientationLiteral whenever practical.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientationLiteral"
        },
        {
          "name": "subjectOrientation",
          "title": "Subject Orientation",
          "description": "Specific orientation (= direction, view angle) of the subject represented in the ac:Media resource with respect to the acquisition device.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/subjectOrientation"
        },
        {
          "name": "physicalSetting",
          "title": "Physical Setting",
          "description": "The setting of the content represented in an ac:Media resource, such as images, sounds, and movies if the provider deems them relevant.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/physicalSetting"
        }
      ],
      "foreignKeys": [
        {
          "fields": "media_fk",
          "predicate": "this media instance",
          "reference": {
            "resource": "media",
            "fields": "media_pk"
          }
        },
        {
          "fields": "organismInteraction_fk",
          "predicate": "about",
          "reference": {
            "resource": "organism-interaction",
            "fields": "organismInteraction_pk"
          }
        }
      ]
    },
    "organism-interaction-reference": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/organism-interaction-reference",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/organism-interaction-reference.json",
      "name": "organism-interaction-reference",
      "title": "Organism Interaction Reference",
      "description": "A dcterms:BibliographicResource related to a dwc:OrganismInteraction.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//organism-interaction-reference",
      "fields": [
        {
          "name": "reference_fk",
          "title": "Reference (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "organismInteraction_fk",
          "title": "Organism Interaction (Foreign Key)",
          "description": "An identifier for a dwc:OrganismInteraction.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismInteractionID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource to a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`cited in`; `referenced`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        }
      ],
      "foreignKeys": [
        {
          "fields": "reference_fk",
          "predicate": "mentioned in",
          "reference": {
            "resource": "bibliographic-resource",
            "fields": "reference_pk"
          }
        },
        {
          "fields": "organismInteraction_fk",
          "predicate": "mentioned",
          "reference": {
            "resource": "organism-interaction",
            "fields": "organismInteraction_pk"
          }
        }
      ]
    },
    "organism-reference": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/organism-reference",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/organism-reference.json",
      "name": "organism-reference",
      "title": "Organism Reference",
      "description": "A dcterms:BibliographicResource related to a dwc:Organism.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//organism-reference",
      "fields": [
        {
          "name": "organism_fk",
          "title": "Organism (Foreign Key)",
          "description": "An identifier for a dwc:Organism.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "reference_fk",
          "title": "Reference (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource to a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`cited in`; `referenced`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        }
      ],
      "foreignKeys": [
        {
          "fields": "organism_fk",
          "predicate": "mentioned",
          "reference": {
            "resource": "organism",
            "fields": "organism_pk"
          }
        },
        {
          "fields": "reference_fk",
          "predicate": "mentioned in",
          "reference": {
            "resource": "bibliographic-resource",
            "fields": "reference_pk"
          }
        }
      ]
    },
    "organism-relationship": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/organism-relationship",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/organism-relationship.json",
      "name": "organism-relationship",
      "title": "Organism Relationship",
      "description": "A dwc:ResourceRelationship of one dwc:Organism to another dwc:Organism.",
      "notes": "An OrganismRelationship must be a permanent relationship. Ephemeral relationships between dwc:Organisms should be recorded as dwc:OrganismInteractions.",
      "examples": "`an instance of a dwc:Organism is the mother of another instance of a dwc:Organism`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/ResourceRelationship",
      "fields": [
        {
          "name": "organismRelationshipID",
          "title": "Organism Relationship ID",
          "description": "An identifier for a dwc:ResourceRelationship.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/resourceRelationshipID"
        },
        {
          "name": "subjectOrganism_fk",
          "title": "Subject Organism (Foreign Key)",
          "description": "An identifier for the dwc:Organism that is the subject of a dwc:ResourceRelationship.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource (identified by dwc:subjectOrganismID) to a related resource (identified by dwc:relatedOrganismID).",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`same as`; `duplicate of`; `mother of`; `offspring of`; `sibling of`; `parasite of`; `host of`; `valid synonym of`; `located within`; `pollinator of members of taxon`; `pollinated specific plant`; `pollinated by members of taxon`; `on slab with`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "relationshipTypeIRI",
          "title": "Relationship Type IRI",
          "description": "An IRI of a controlled vocabulary value for the type of a dwc:ResourceRelationship.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "`http://purl.obolibrary.org/obo/RO_0002456` (for the relation pollinated by); `http://purl.obolibrary.org/obo/RO_0002455` (for the relation pollinates); `https://www.inaturalist.org/observation_fields/879` (for the relation eaten by)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "relationshipTypeSource",
          "title": "Relationship Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:relationshipType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "relatedOrganism_fk",
          "title": "Related Organism (Foreign Key)",
          "description": "An identifier for the related dwc:Organism (the object) of a dwc:ResourceRelationship.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "relatedOrganismID",
          "title": "Related Organism ID",
          "description": "An identifier for the related dwc:Organism (the object) of a dwc:ResourceRelationship.",
          "notes": "The value in this field MAY refer to a dwc:Organism within or external to the dataset in which this record originated.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "externalRelatedOrganismID",
          "title": "External Related Organism ID",
          "description": "An identifier for the related dwc:Organism (the object) of a dwc:ResourceRelationship that is not within the same dataset.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/organismID"
        },
        {
          "name": "externalRelatedOrganismSource",
          "title": "External Related Organism Source",
          "description": "A reference to a source outside the dataset where the related dwc:Organism record can be found.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "relationshipAccordingTo",
          "title": "Relationship According To",
          "description": "A name of a dcterms:Agent responsible for asserting a dwc:ResourceRelationship.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipAccordingTo"
        },
        {
          "name": "relationshipAccordingTo_fk",
          "title": "Relationship According To (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for asserting a dwc:ResourceRelationship.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "relationshipAccordingToID",
          "title": "Relationship According To ID",
          "description": "An identifier for a dcterms:Agent responsible for asserting a dwc:ResourceRelationship.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "relationshipEstablishedDate",
          "title": "Relationship Established Date",
          "description": "A date on which a dwc:ResourceRelationship was established.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipEstablishedDate"
        },
        {
          "name": "relationshipRemarks",
          "title": "Relationship Remarks",
          "description": "Comments or notes about a dwc:ResourceRelationship.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipRemarks"
        }
      ],
      "weakPrimaryKey": "organismRelationshipID",
      "foreignKeys": [
        {
          "fields": "subjectOrganism_fk",
          "predicate": "of",
          "reference": {
            "resource": "organism",
            "fields": "organism_pk"
          }
        },
        {
          "fields": "relatedOrganism_fk",
          "predicate": "to",
          "reference": {
            "resource": "organism",
            "fields": "organism_pk"
          }
        },
        {
          "fields": "relationshipAccordingTo_fk",
          "predicate": "according to",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "relatedOrganismID",
          "predicate": "to",
          "reference": {
            "resource": "organism",
            "fields": "organismID"
          }
        },
        {
          "fields": "relationshipAccordingToID",
          "predicate": "according to",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "protocol": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/protocol",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/protocol.json",
      "name": "protocol",
      "title": "Protocol",
      "description": "A method used during an action.",
      "notes": "",
      "examples": "`a pitfall trap method for sampling ground-dwelling arthropods`; `a point-radius georeferencing method`; `a linear regression model to estimate body mass from skeletal measurements`; `a Bayesian phylogenetic inference method`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/Protocol",
      "fields": [
        {
          "name": "protocol_pk",
          "title": "Protocol (Primary Key)",
          "description": "A unique identifier for a dwc:Protocol.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "protocolID",
          "title": "Protocol ID",
          "description": "An identifier for a dwc:Protocol.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID"
        },
        {
          "name": "protocolType",
          "title": "Protocol Type",
          "description": "A category that best matches the nature of a dwc:Protocol.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`measurement`; `georeference`; `chronometric age`; `chronometric age conversion`; `sampling effort`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolType"
        },
        {
          "name": "protocolName",
          "title": "Protocol Name",
          "description": "A name of a dwc:Protocol.",
          "notes": "`ad hoc observation`; `bottom trawl`; `point count`; `UV light trap`",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/title"
        },
        {
          "name": "protocolDescription",
          "title": "Protocol Description",
          "description": "A detailed description of a dwc:Protocol.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolDescription"
        },
        {
          "name": "protocolReferences",
          "title": "Protocol References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources used in a dwc:Protocol.",
          "notes": "Recommended best practice is to separate multiple values in a list with space vertical bar space (` | `).",
          "examples": "`Penguins from space: faecal stains reveal the location of emperor penguin colonies, https://doi.org/10.1111/j.1466-8238.2009.00467.x`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/protocolReferences"
        },
        {
          "name": "protocolRemarks",
          "title": "Protocol Remarks",
          "description": "Comments or notes about a dwc:Protocol.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolRemarks"
        }
      ],
      "primaryKey": "protocol_pk",
      "weakPrimaryKey": "protocolID"
    },
    "protocol-reference": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/protocol-reference",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/protocol-reference.json",
      "name": "protocol-reference",
      "title": "Protocol Reference",
      "description": "A dcterms:BibliographicResource related to a dwc:Protocol.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//protocol-reference",
      "fields": [
        {
          "name": "reference_fk",
          "title": "Reference (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "protocol_fk",
          "title": "Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource to a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`cited in`; `referenced`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        }
      ],
      "foreignKeys": [
        {
          "fields": "reference_fk",
          "predicate": "mentioned in",
          "reference": {
            "resource": "bibliographic-resource",
            "fields": "reference_pk"
          }
        },
        {
          "fields": "protocol_fk",
          "predicate": "mentioned",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ]
    },
    "provenance": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/provenance",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/provenance.json",
      "name": "provenance",
      "title": "Provenance",
      "description": "Information about an entity’s origins.",
      "notes": "This is a convenience class to group related properties.",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/Provenance",
      "fields": [
        {
          "name": "provenance_pk",
          "title": "Provenance (Primary Key)",
          "description": "A unique identifier for a dwc:Provenance.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "provenanceID",
          "title": "Provenance ID",
          "description": "An identifier for a dwc:Provenance.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier"
        },
        {
          "name": "datasetName",
          "title": "Dataset Name",
          "description": "A name of a source dataset.",
          "notes": "",
          "examples": "`Grinnell Resurvey Mammals`; `Lacey Ctenomys Recaptures`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/datasetName"
        },
        {
          "name": "datasetID",
          "title": "Dataset ID",
          "description": "An identifier for a dataset from which data originated.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "`b15d4952-7d20-46f1-8a3e-556a512b04c5`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/datasetID"
        },
        {
          "name": "fundingAttribution",
          "title": "Funding Attribution",
          "description": "A list (concatenated and separated) of names of the funding organizations or agencies that provided funding for a project.",
          "notes": "Specify the full official name of the funding body. This should include the complete name without abbreviations, unless the abbreviation is an official and commonly recognized form (e.g., NSF for the National Science Foundation). Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`Artsdatabanken`; `National Science Foundation`; `Norges forskningsråd`; `Ocean Census | Nippon Foundation`",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/fundingAttribution"
        },
        {
          "name": "fundingAttribution_fk",
          "title": "Funding Attribution (Foreign Key)",
          "description": "An identifier for a dcterms:Agent that financially supported a project.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/fundingAttributionID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "fundingAttributionID",
          "title": "Funding Attribution ID",
          "description": "An identifier for a dcterms:Agent that financially supported a project.",
          "notes": "Provide a unique identifier for the funding body, such as an identifier used in governmental or international databases. If no official identifier exists, use a persistent and unique identifier within your organization or dataset. Recommended best practice is to separate the values in a list with space vertical bar space (` | `). The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://ror.org/00epmv149`; `https://ror.org/00epmv149 | https://ror.org/04jnzhb65`; `https://www.wikidata.org/wiki/Q13102615`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/fundingAttributionID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "source",
          "title": "Source",
          "description": "A related resource from which this resource is derived.",
          "notes": "The described resource may be derived from the related resource in whole or in part. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "sourceIRI",
          "title": "Source IRI",
          "description": "An identifier for a resource from which this resource is derived.",
          "notes": "This property is intended to be used with non-literal values. The described resource may be derived from the related resource in whole or in part. Best practice is to identify the related resource by means of a URI or a string conforming to a formal identification system.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/source"
        },
        {
          "name": "creator",
          "title": "Creator",
          "description": "A name of a dcterms:Agent primarily responsible for making the resource.",
          "notes": "Human readable, or doi number, or URL. Simple name of parent for human readable.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/creator"
        },
        {
          "name": "creator_fk",
          "title": "Creator (Foreign Key)",
          "description": "An identifier for a dcterms:Agent primarily responsible for making the resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "creatorID",
          "title": "Creator ID",
          "description": "An identifier for a dcterms:Agent primarily responsible for making the resource.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "providerLiteral",
          "title": "Provider",
          "description": "A name of a dcterms:Agent responsible for presenting the ac:Media resource.",
          "notes": "If no separate Metadata Provider is given, this also attributes the metadata.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/providerLiteral"
        },
        {
          "name": "provider_fk",
          "title": "Provider (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for presenting the ac:Media resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "providerID",
          "title": "Provider ID",
          "description": "An identifier for a dcterms:Agent responsible for presenting the ac:Media resource.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "metadataCreatorLiteral",
          "title": "Metadata Creator",
          "description": "A name of a dcterms:Agent that created the resource metadata.",
          "notes": "See also the entry for ac:metadataCreator and the section Namespaces, Prefixes and Term Names in the Audiovisual Core Term List document for discussion of the rationale for separate terms taking URI values from those taking Literal values where both are possible. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/metadataCreatorLiteral"
        },
        {
          "name": "metadataCreator_fk",
          "title": "Metadata Creator (Foreign Key)",
          "description": "An identifier for a dcterms:Agent that created the resource metadata.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "metadataCreatorID",
          "title": "Metadata Creator ID",
          "description": "An identifier for a dcterms:Agent that created the resource metadata.",
          "notes": "See also the entry for ac:metadataCreatorLiteral and the section Namespaces, Prefixes and Term Names in the Audiovisual Core Term List document for discussion of the rationale for separate terms taking URI values from those taking Literal values where both are possible. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions. The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "metadataProviderLiteral",
          "title": "Metadata Provider",
          "description": "A name of a dcterms:Agent that provided the resource metadata.",
          "notes": "Media resources and their metadata may be served from different institutions, e.g., in the case of aggregators adding user annotations, taxon identifications, or ratings. Compare Provider. See also the entry for ac:metadataProvider in this document and the section Namespaces, Prefixes and Term Names for discussion of the rationale for separate terms taking URI values from those taking Literal values where both are possible. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/metadataProviderLiteral"
        },
        {
          "name": "metadataProvider_fk",
          "title": "Metadata Provider (Foreign Key)",
          "description": "An identifier for a dcterms:Agent that provided the resource metadata.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "metadataProviderID",
          "title": "Metadata Provider ID",
          "description": "An identifier for a dcterms:Agent that provided the resource metadata.",
          "notes": "Media resources and their metadata may be served from different institutions, e.g., in the case of aggregators adding user annotations, taxon identifications, or ratings. Compare Provider. See also the entry for ac:metadataProviderLiteral and the section Namespaces, Prefixes and Term Names in the Audiovisual Core Term List document for discussion of the rationale for separate terms taking URI values from those taking Literal values where both are possible. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions. The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "furtherInformationURL",
          "title": "Further Information URL",
          "description": "A URL of a website that provides additional information about the version of the ac:Media resource that is provided by the Service Access Point.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/furtherInformationURL"
        },
        {
          "name": "references",
          "title": "References",
          "description": "A related resource that is referenced, cited, or otherwise pointed to by the described resource.",
          "notes": "This property is intended to be used with non-literal values. This property is an inverse property of Is Referenced By.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/references"
        },
        {
          "name": "bibliographicCitation",
          "title": "Bibliographic Citation",
          "description": "A bibliographic reference for the resource.",
          "notes": "From Dublin Core, 'Recommended practice is to include sufficient bibliographic detail to identify the resource as unambiguously as possible.' The intended usage of this term in Darwin Core is to provide the preferred way to cite the resource itself. Note that the intended usage of dcterms:references in Darwin Core, by contrast, is to point to the definitive source representation of the resource, if one is available.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/bibliographicCitation"
        },
        {
          "name": "projectTitle",
          "title": "Project Title",
          "description": "A list (concatenated and separated) of titles or names for projects that contributed to a dwc:Event.",
          "notes": "Use this term to provide the official name or title of a project as it is commonly known and cited. Avoid abbreviations unless they are widely understood. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`Arctic Deep`; `Scalidophora i Noreg`; `The Nansen Legacy`; `Underwater Oases of the Mar del Plata Canyon: Talud Continental IV`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/projectTitle"
        },
        {
          "name": "projectID",
          "title": "Project ID",
          "description": "A list (concatenated and separated) of identifiers for projects that contributed to a dwc:Event.",
          "notes": "A projectID may be shared in multiple distinct datasets. The nature of the association can be described in the metadata project description element. This term should be used to provide a globally unique identifier (GUID) for a project, if available. This could be a DOI, URI, or any other persistent identifier that ensures a project can be uniquely distinguished from others. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`https://arvenetternansen.com/`; `https://doi.org/10.26259/3b15eca7`; `https://doi.org/10.3030/101180559`; `OC202405`; `RCN276730`; `RCN276730 | Artsproject_7-24`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/projectID"
        },
        {
          "name": "feedbackURL",
          "title": "Feedback URL",
          "description": "A uniform resource locator (URL) that points to a webpage on which a form may be submitted to gather feedback about the record.",
          "notes": "Recommended best practice is to optionally include query strings that act to pre-populate web page form elements and communicate the context.",
          "examples": "`https://example.com/new?title=New+issue&body=This+comment+is+about+CAN12345`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/feedbackURL"
        }
      ],
      "primaryKey": "provenance_pk",
      "weakPrimaryKey": "provenanceID",
      "foreignKeys": [
        {
          "fields": "fundingAttribution_fk",
          "predicate": "funded by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "creator_fk",
          "predicate": "created by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "provider_fk",
          "predicate": "provided by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "metadataCreator_fk",
          "predicate": "metadata created by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "metadataProvider_fk",
          "predicate": "metadata provided by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "fundingAttributionID",
          "predicate": "funded by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "creatorID",
          "predicate": "created by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "providerID",
          "predicate": "provided by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "metadataCreatorID",
          "predicate": "metadata created by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "metadataProviderID",
          "predicate": "metadata provided by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "resource-relationship": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/resource-relationship",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/resource-relationship.json",
      "name": "resource-relationship",
      "title": "Resource Relationship",
      "description": "A relationship of one rdfs:Resource (http://www.w3.org/2000/01/rdf-schema#Resource) to another.",
      "notes": "Resources can be thought of as identifiable records or instances of classes and may include, but need not be limited to instances of dwc:Occurrence, dwc:Organism, dwc:MaterialEntity, dwc:Event, dcterms:Location, dwc:GeologicalContext, dwc:Identification, or dwc:Taxon.",
      "examples": "`an instance of a dwc:Organism is the mother of another instance of a dwc:Organism`; `a uniquely identified dwc:Occurrence represents the same dwc:Occurrence as another uniquely identified dwc:Occurrence`; `a dwc:MaterialEntity is a subsample of another dwc:MaterialEntity`",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/ResourceRelationship",
      "fields": [
        {
          "name": "resourceRelationshipID",
          "title": "Resource Relationship ID",
          "description": "An identifier for a dwc:ResourceRelationship.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/resourceRelationshipID"
        },
        {
          "name": "subjectResourceID",
          "title": "Subject Resource ID",
          "description": "An identifier for the resource that is the subject of a dwc:ResourceRelationship.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/resourceID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "subjectResourceType",
          "title": "Subject Resource Type",
          "description": "A category that best matches the nature of a subject resource.",
          "notes": "Recommended best practice is to use a controlled vocabulary consisting of the classes of resources that can be related to each other.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/type"
        },
        {
          "name": "subjectResourceTypeIRI",
          "title": "Subject Resource Type IRI",
          "description": "An IRI of a controlled vocabulary value for the type of a subject resource.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "subjectResourceTypeSource",
          "title": "Subject Resource Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:subjectResourceType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource (identified by dwc:subjectResourceID) to a related resource (identified by dwc:relatedResourceID).",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`same as`; `duplicate of`; `mother of`; `offspring of`; `sibling of`; `parasite of`; `host of`; `valid synonym of`; `located within`; `pollinator of members of taxon`; `pollinated specific plant`; `pollinated by members of taxon`; `on slab with`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "relationshipTypeIRI",
          "title": "Relationship Type IRI",
          "description": "An IRI of a controlled vocabulary value for the type of a dwc:ResourceRelationship.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "`http://purl.obolibrary.org/obo/RO_0002456` (for the relation pollinated by); `http://purl.obolibrary.org/obo/RO_0002455` (for the relation pollinates); `https://www.inaturalist.org/observation_fields/879` (for the relation eaten by)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "relationshipTypeSource",
          "title": "Relationship Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:relationshipType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "relatedResourceID",
          "title": "Related Resource ID",
          "description": "An identifier for the related resource (the object) of a dwc:ResourceRelationship.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "`dc609808-b09b-11e8-96f8-529269fb1459`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relatedResourceID"
        },
        {
          "name": "externalRelatedResourceID",
          "title": "External Related Resource ID",
          "description": "An identifier for the related resource (the object) of a dwc:ResourceRelationship that is not within the same dataset.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier"
        },
        {
          "name": "externalRelatedResourceSource",
          "title": "External Related Resource Source",
          "description": "A reference to a source outside the dataset where the related resource can be found.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "relatedResourceType",
          "title": "Related Resource Type",
          "description": "A category that best matches the nature of a related resource.",
          "notes": "Recommended best practice is to use a controlled vocabulary consisting of the classes of resources that can be related to each other.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/type"
        },
        {
          "name": "relatedResourceTypeIRI",
          "title": "Related Resource Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of related resource.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "relatedResourceTypeSource",
          "title": "Related Resource Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:relatedResourceType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "relationshipAccordingTo",
          "title": "Relationship According To",
          "description": "A name of a dcterms:Agent responsible for asserting a dwc:ResourceRelationship.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipAccordingTo"
        },
        {
          "name": "relationshipAccordingToID",
          "title": "Relationship According To ID",
          "description": "An identifier for a dcterms:Agent responsible for asserting a dwc:ResourceRelationship.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID"
        },
        {
          "name": "relationshipEstablishedDate",
          "title": "Relationship Established Date",
          "description": "A date-time or time interval during which a dwc:ResourceRelationship was established.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipEstablishedDate"
        },
        {
          "name": "relationshipRemarks",
          "title": "Relationship Remarks",
          "description": "Comments or notes about a dwc:ResourceRelationship.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipRemarks"
        }
      ],
      "weakPrimaryKey": "resourceRelationshipID"
    },
    "survey": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/survey",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/survey.json",
      "name": "survey",
      "title": "Survey",
      "description": "A dwc:Event intentionally designed to characterize a defined biotic target or domain in such a way that the resulting dwc:Occurrences can be interpreted collectively to support ecological and monitoring inference (such as detectability, abundance, species co-occurence, spatial distribution, or temporal trends), rather than merely documenting individual observations or gathered material.",
      "notes": "Many terms from the Humboldt Extension for Ecological Inventories (eco: namespace) are organized in this class, particularly those that help describe and document the sampling process.",
      "examples": "`a botanical survey of a protected area to assess native and invasive plant species`; `a wetland vegetation mapping`; `a camera trap deployment in a rainforest to monitor large mammals`; `a frog call survey in wetlands across breeding seasons`; `a coverboard survey for reptiles in forested environments`; `a pollinator survey in an agricultural landscape`; `a macroinvertebrate sampling in a freshwater stream to assess water quality`; `a habitat- or ecosystem-level survey (e.g., coral reef health assessment, forest biodiversity assessment)`; `an environmental impact assessment (e.g., pre-construction biological baseline survey for a wind farm project)`",
      "namespace": "eco",
      "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/Survey",
      "fields": [
        {
          "name": "survey_pk",
          "title": "Survey (Primary Key)",
          "description": "A unique identifier for an eco:Survey.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "surveyID",
          "title": "Survey ID",
          "description": "An identifier for an eco:Survey.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyID"
        },
        {
          "name": "event_fk",
          "title": "Event (Foreign Key)",
          "description": "An identifier for a dwc:Event.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/eventID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "surveySiteType",
          "title": "Survey Site Type",
          "description": "A spatial category of a sampling location for an eco:Survey.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the ecoiri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`horizontalTransect`; `verticalTransect`; `arealPlot`; `observationPoint`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/siteSurveyType"
        },
        {
          "name": "siteCount",
          "title": "Site Count",
          "description": "Total number of individual sites surveyed during an eco:Survey.",
          "notes": "Site refers to the dcterms:Location at which observations are made or samples/measurements are taken. The site can be at any level of hierarchy.",
          "examples": "`1`; `15`",
          "type": "integer",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/siteCount",
          "constraints": {
            "minimum": 1
          }
        },
        {
          "name": "siteNestingDescription",
          "title": "Site Nesting Description",
          "description": "Textual description of a hierarchical sampling design.",
          "notes": "Site refers to the location at which observations are made or samples/measurements are taken. The site can be at any level of hierarchy.",
          "examples": "`5 sampling sites of 3-5 plots each`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/siteNestingDescription"
        },
        {
          "name": "verbatimSiteDescriptions",
          "title": "Verbatim Site Descriptions",
          "description": "Original textual description of the site(s).",
          "notes": "Site refers to the dcterms:Location at which observations are made or samples/measurements are taken. The site can be at any level of hierarchy. Recommended best practice is to separate multiple values in a list with space vertical bar space ( | ).",
          "examples": "`Wet flatwoods | Wet depression surrounded by mesic longleaf pine flatwoods | Ground cover of thick Andropogon spp., Sporobolus floridanus, Vaccinium spp, Rhynchospora spp., Centella erecta, Panicum rigidulum.`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/verbatimSiteDescriptions"
        },
        {
          "name": "verbatimSiteNames",
          "title": "Verbatim Site Names",
          "description": "A list (concatenated and separated) of original site names.",
          "notes": "Site refers to the dcterms:Location at which observations are made or samples/measurements are taken. The site can be at any level of hierarchy. Recommended best practice is to separate multiple values in a list with space vertical bar space ( | ).",
          "examples": "`East Coastal Fringe | St. Marks Wildlife Management Area`; `S1 | S2 | C1 | C2 | R14 | R22 | W1`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/verbatimSiteNames"
        },
        {
          "name": "geospatialScopeAreaValue",
          "title": "Geospatial Scope Area Value",
          "description": "The numeric value for the total area of the geospatial scope of an eco:Survey.",
          "notes": "Geospatial scope refers to the place described by a dcterms:Location. This area is always greater than or equal to the eco:totalAreaSampledValue because it reflects the targeted location for which an inventory is intended and informs the sampling design. An eco:geospatialScopeAreaValue must have a corresponding eco:geospatialScopeAreaUnit.",
          "examples": "`25`",
          "type": "number",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/geospatialScopeAreaValue",
          "constraints": {
            "minimum": 0
          }
        },
        {
          "name": "geospatialScopeAreaUnit",
          "title": "Geospatial Scope Area Unit",
          "description": "Units associated with a value in eco:geospatialScopeAreaValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary. For units containing exponents, use characters from the Unicode Latin-1 Supplement character set (hex 00B2 for squared and 00B3 for cubed). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`km²`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/geospatialScopeAreaUnit"
        },
        {
          "name": "totalAreaSampledUnit",
          "title": "Total Area Sampled Unit",
          "description": "Units associated with a value in eco:totalAreaSampledValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary. For units containing exponents, use characters from the Unicode Latin-1 Supplement character set (hex 00B2 for squared and 00B3 for cubed). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`km²`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/totalAreaSampledUnit"
        },
        {
          "name": "totalAreaSampledValue",
          "title": "Total Area Sampled Value",
          "description": "A numeric value for the total area, volume or distance surveyed during the eco:Survey.",
          "notes": "This value is always less than or equal to the eco:geospatialScopeAreaValue because it reflects the portion of the geospatialScope that was actually sampled. An eco:totalAreaSampledValue must have a corresponding eco:totalAreaSampledUnit.",
          "examples": "`0.8`",
          "type": "number",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/totalAreaSampledValue",
          "constraints": {
            "minimum": 0
          }
        },
        {
          "name": "taxonCompletenessReported",
          "title": "Taxon Completeness Reported",
          "description": "Statement about whether the taxonomic completeness of an eco:Survey was assessed.",
          "notes": "This term is meant to alert users that the inventory was conducted in such a way that all of the target taxa (the combination of eco:targetTaxonomicScope and eco:excludedTaxonomicScope) should have been detectable if they were present during an eco:Survey. This term can provide data users with a qualitative measure of how comprehensively an area has been surveyed, which assists in interpreting species populations, areas of occupancy, inferring species absences, etc. This term is only relevant if an eco:Survey used restricted search or open search methods. If taxonomic completeness was assessed, the methods used or an explanation of the basis of the completeness should be stated in eco:taxonCompletenessProtocols. Recommended best practice is to use controlled value strings from the controlled vocabulary designated for use with this term, listed at http://rs.tdwg.org/dwc/doc/tcr/. This term has an equivalent in the ecoiri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`notReported`; `reportedComplete`; `reportedIncomplete`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/taxonCompletenessReported"
        },
        {
          "name": "taxonCompletenessProtocols",
          "title": "Taxon Completeness Protocols",
          "description": "A description of or reference to the dwc:Protocols used to determine eco:taxonCompletenessReported.",
          "notes": "This term allows users to determine how comprehensively an area has been sampled. Recommended best practice is to separate multiple values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`census | based on sampling effort`; `based on species accumulation curves`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/taxonCompletenessProtocols"
        },
        {
          "name": "isAbsenceReported",
          "title": "Is Absence Reported",
          "description": "Taxonomic absences were reported.",
          "notes": "Absences can be reported at any taxonomic level. Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/isAbsenceReported"
        },
        {
          "name": "absentTaxa",
          "title": "Absent Taxa",
          "description": "A list (concatenated and separated) of taxa reported absent during an eco:Survey",
          "notes": "Absences can be reported at any taxonomic level. This term refers to the list of taxa within an eco:targetTaxonomicScope that were not detected in an eco:Survey. Recommended best practice is to separate multiple values in a list with space vertical bar space ( | ). This term has an equivalent in the ecoiri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Parabuteo unicinctus | Geranoaetus melanoleucus`; `Cetoniinae | Aclopinae | Cyclocephala modesta`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/absentTaxa"
        },
        {
          "name": "hasNonTargetTaxa",
          "title": "Has Non Target Taxa",
          "description": "One or more dwc:Occurrences of taxa outside the target taxonomic scope (the combination of eco:targetTaxonomicScope and eco:excludedTaxonomicScope) were detected and reported for an eco:Survey.",
          "notes": "This term is meant to alert users to the presence of non-target taxa (in some disciplines called “bycatch”) reported in an eco:Survey. This term is relevant only if a target taxonomic scope is declared. Taxonomic scope is based on the combination of eco:targetTaxonomicScope and eco:excludedTaxonomicScope. Examination of the taxonomic scope is needed in order to identify the non-target taxa. It should be possible to confirm the expectations by investigating the dwc:Occurrences in an eco:Survey and in its child eco:Surveys (if available) or by exploring eco:nonTargetTaxa for an eco:Survey (if populated). The value of this term should be 'true' if dwc:Occurrences of taxa outside the taxonomic scope as defined at the time of an eco:Survey are reported, otherwise the value of this term should be 'false'. Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/hasNonTargetTaxa"
        },
        {
          "name": "nonTargetTaxa",
          "title": "Non Target Taxa",
          "description": "A list (concatenated and separated) of taxa reported during an eco:Survey that are outside of the target taxonomic scope (the combination of eco:targetTaxonomicScope and eco:excludedTaxonomicScope).",
          "notes": "This term is meant to allow the full list of taxa that are considered outside of the taxonomic scope and yet were reported in an eco:Survey. This term is relevant only if a target taxonomic scope is declared and eco:hasNonTargetTaxa is ‘true’. Taxonomic scope is based on the combination of eco:targetTaxonomicScope and eco:excludedTaxonomicScope. Non-target taxa (in some disciplines called “bycatch”) can be reported at any taxonomic level. Recommended best practice is to separate multiple values in a list with space vertical bar space ( | ). This term has an equivalent in the ecoiri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`Parabuteo unicinctus | Geranoaetus melanoleucus`; `Cetoniinae | Aclopinae | Cyclocephala modesta`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/nonTargetTaxa"
        },
        {
          "name": "areNonTargetTaxaFullyReported",
          "title": "Are Non Target Taxa Fully Reported",
          "description": "Every dwc:Occurrence that was outside of the target taxonomic scope (the combination of eco:targetTaxonomicScope and eco:excludedTaxonomicScope) and detected during an eco:Survey, and that was detectable using the given protocol (given in eco:protocolDescriptions and dwc:samplingProtocol), was reported.",
          "notes": "This term is meant to inform a user of the data whether there were non-target taxa that were detected, but left unreported. This term is only relevant if an eco:Survey used restricted search or open search methods and if a target taxonomic scope is declared. Taxonomic scope is based on the combination of eco:targetTaxonomicScope and eco:excludedTaxonomicScope. Within eco:Surveys that used either a restricted search or an open search method and declared a taxonomic scope, if all dwc:Occurrences that are not included within the target taxonomic scope and that were detected during an eco:Survey were reported, the value of this term should be 'true', otherwise the value of this term should be ‘false'. Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/areNonTargetTaxaFullyReported"
        },
        {
          "name": "hasNonTargetOrganisms",
          "title": "Has Non Target Organisms",
          "description": "One or more dwc:Occurrences outside the target organismal scopes (eco:targetDegreeOfEstablishmentScope, eco:targetGrowthFormScope, and eco:targetLifeStageScope) were detected and reported for an eco:Survey.",
          "notes": "This term is meant to alert users to the presence of non-target organisms (in some disciplines called “bycatch”) reported in an eco:Survey. This term is relevant only if a target organismal scope is declared. Organismal scope is based on the combination of all of the following terms: eco:targetLifeStageScope, eco:excludedLifeStageScope, eco:targetDegreeOfEstablishmentScope, eco:excludedDegreeOfEstablishmentScope, eco:targetGrowthFormScope, and eco:excludedGrowthFormScope. Examination of the organismal scope is needed in order to identify the non-target dwc:Occurrences. It should be possible to confirm the expectations by investigating dwc:Occurrences in an eco:Survey and in its child eco:Surveys (if available). The value of this term should be 'true' if dwc:Occurrences outside the organismal scope(s) as defined at the time of an eco:Survey are reported, otherwise the value of this term should be 'false'. Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/hasNonTargetOrganisms"
        },
        {
          "name": "verbatimTargetScope",
          "title": "Verbatim Target Scope",
          "description": "The verbatim original description of an eco:Survey scope.",
          "notes": "Recommended best practice is first to populate explicit scope terms to the fullest extent possible (e.g., eco:targetTaxonomicScope). It is not recommended to use this term in assessing absence or completeness.",
          "examples": "`small mammals`; `freshwater macroinvertebrates`; `dead animals`, `ground-living insects`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/verbatimTargetScope"
        },
        {
          "name": "identifiedBy",
          "title": "Identified By",
          "description": "A name for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "When used in the context of a Survey, the subject consists of all of the dwc:Identifications related to the Event. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`James L. Patton`; `Theodore Pappenfuss | Robert Macey`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedBy"
        },
        {
          "name": "identifiedBy_fk",
          "title": "Identified By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "identifiedByID",
          "title": "Identified By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Identification.",
          "notes": "When used in the context of a Survey, the subject consists of all of the dwc:Identifications related to the Survey. Recommended best practice is to provide a single identifier that disambiguates the details of the identifying dcterms:Agent. If a list is used, the order of the identifiers on the list should not be assumed to convey any semantics. Recommended best practice is to separate the values in a list with space vertical bar space (` | `). The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identifiedByID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "identificationReferences",
          "title": "Identification References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources used in a dwc:Identification.",
          "notes": "When used in the context of a Survey, the subject consists of all of the dwc:Identifications related to the Survey. Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "`Aves del Noroeste Patagonico. Christie et al. 2004.`; `Stebbins, R. Field Guide to Western Reptiles and Amphibians. 3rd Edition. 2003. | Irschick, D.J. and Shaffer, H.B. (1997). The polytypic species revisited: Morphological differentiation among tiger salamanders (Ambystoma tigrinum) (Amphibia: Caudata). Herpetologica, 53(1), 30-49.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/identificationReferences"
        },
        {
          "name": "compilationTypes",
          "title": "Compilation Types",
          "description": "A statement specifying whether data reported are derived from sampling events, ancillary data compiled from other sources, or a combination of both.",
          "notes": "This term is only relevant if a dwc:Event is an inventory. Recommended best practice is to use a controlled vocabulary. Recommended best practice is to separate the values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`samplingEvents`; `compilationOfExistingSourcesAndSamplingEvents`; `compilationOfExistingSources`; `compilationOfExistingSourcesAndSamplingEvents | compilationOfExistingSources`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/compilationTypes"
        },
        {
          "name": "compilationSourceTypes",
          "title": "Compilation Source Types",
          "description": "The types of data sources contributing to the compilation reported.",
          "notes": "This term is only relevant if a dwc:Event is a compilation in which one or more types of data sources were used. Recommended best practice is to use a controlled vocabulary and separate multiple values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`museumSpecimens`; `literature`; `expertKnowledge | localKnowledge`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/compilationSourceTypes"
        },
        {
          "name": "inventoryTypes",
          "title": "Inventory Types",
          "description": "The types of search processes used to conduct an eco:Survey.",
          "notes": "This term is only relevant if an eco:Survey represents an inventory. Recommended best practice is to use a controlled vocabulary. Recommended best practice is to separate multiple values in a list with space vertical bar space ( | ). This term has an equivalent in the ecoiri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`restrictedSearch`; `openSearch`; `opportunisticSearch`; `adventitious`; `compilation`; `openSearch | opportunisticSearch`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/inventoryTypes"
        },
        {
          "name": "protocolNames",
          "title": "Protocol Names",
          "description": "Categorical descriptive names for the methods used during an eco:Survey.",
          "notes": "Recommended best practice is to use a controlled vocabulary and separate multiple values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`boxTrapping`; `floraInventory`; `boxTrapping | funnelTrapping`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/protocolNames"
        },
        {
          "name": "protocolDescriptions",
          "title": "Protocol Descriptions",
          "description": "A detailed description of the methods used during an eco:Survey.",
          "notes": "This description should be associated with protocols provided in eco:protocolNames. The description may include deviations from a protocol referred to in eco:protocolReferences. Recommended good practice is to provide information about instruments used, calibration, etc. Recommended best practice is to separate multiple values in a list with space vertical bar space (` | `).",
          "examples": "`Three conventional harp traps (3.2m ht x 2.2m w) were established in flight path zones for a period of 4 hrs at dawn and dusk for a total of 10 trap nights. Traps were visited on an hourly basis during each deployment period and the trap catch recorded for species, size, weight, sex, age and maternal status.`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/protocolDescriptions"
        },
        {
          "name": "protocolReferences",
          "title": "Protocol References",
          "description": "The references to the methods used during an eco:Survey.",
          "notes": "Recommended best practice is to separate multiple values in a list with space vertical bar space (` | `).",
          "examples": "`Penguins from space: faecal stains reveal the location of emperor penguin colonies, https://doi.org/10.1111/j.1466-8238.2009.00467.x`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/protocolReferences"
        },
        {
          "name": "isAbundanceReported",
          "title": "Is Abundance Reported",
          "description": "The number of dwc:Organisms collected or observed was reported.",
          "notes": "Typically the abundance values would be reported in the dwc:organismQuantity and dwc:organismQuantityType terms for the child dwc:Occurrence records for an eco:Survey. Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/isAbundanceReported"
        },
        {
          "name": "isAbundanceCapReported",
          "title": "Is Abundance Cap Reported",
          "description": "A maximum number of dwc:Organisms was reported, as specified or restricted by the protocol used.",
          "notes": "Values of abundance cap should be captured under the term eco:abundanceCap. Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/isAbundanceCapReported"
        },
        {
          "name": "isLeastSpecificTargetCategoryQuantityInclusive",
          "title": "Is Least Specific Target Category Quantity Inclusive",
          "description": "The total detected quantity for a dwc:Taxon (including subcategories thereof) in an eco:Survey is given explicitly in a single record (dwc:organismQuantity value) for that dwc:Taxon.",
          "notes": "This term is only relevant if dwc:organismQuantity is a number. For a detailed explanation, see http://rs.tdwg.org/dwc/doc/inclusive/. Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/isLeastSpecificTargetCategoryQuantityInclusive"
        },
        {
          "name": "hasVouchers",
          "title": "Has Vouchers",
          "description": "One or more specimen vouchers were collected during an eco:Survey.",
          "notes": "Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/hasVouchers"
        },
        {
          "name": "voucherInstitutions",
          "title": "Voucher Institutions",
          "description": "A list (concatenated and separated) of the names or acronyms of the institutions where vouchers collected during an eco:Survey were deposited.",
          "notes": "Recommended best practice is to separate multiple values in a list with space vertical bar space ( | ).",
          "examples": "`FMNH`; `AMNH | MVZ`; `Nairobi National Museum`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/voucherInstitutions"
        },
        {
          "name": "hasMaterialSamples",
          "title": "Has Material Samples",
          "description": "One or more dwc:MaterialEntities were collected during an eco:Survey.",
          "notes": "Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/hasMaterialSamples"
        },
        {
          "name": "materialSampleTypes",
          "title": "Material Sample Types",
          "description": "A list (concatenated and separated) of material sample types collected during an eco:Survey.",
          "notes": "Recommended best practice is to use a controlled vocabulary and separate multiple values in a list with space vertical bar space (` | `). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`wholeOrganism`; `skeleton`; `tissue | blood | fecal | stomachContent`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/materialSampleTypes"
        },
        {
          "name": "samplingProtocol",
          "title": "Sampling Protocol",
          "description": "The names of, references to, or descriptions of the methods or protocols used during an eco:Survey.",
          "notes": "Recommended best practice is describe an eco:Survey with no more than one sampling protocol. In the case of a summary eco:Survey with multiple protocols, in which a specific protocol can not be attributed to specific dwc:Occurrences, the recommended best practice is to separate the values in a list with space vertical bar space ( | ). This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`UV light trap`; `mist net`; `bottom trawl`; `ad hoc observation | point count`; `Penguins from space: faecal stains reveal the location of emperor penguin colonies, https://doi.org/10.1111/j.1466-8238.2009.00467.x`; `Takats et al. 2001. Guidelines for Nocturnal Owl Monitoring in North America. Beaverhill Bird Observatory and Bird Studies Canada, Edmonton, Alberta. 32 pp., http://www.bsc-eoc.org/download/Owl.pdf`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/samplingProtocol"
        },
        {
          "name": "samplingProtocol_fk",
          "title": "Sampling Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used as a sampling protocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "sampleSizeValue",
          "title": "Sample Size Value",
          "description": "A numeric value for a measurement of the size (time duration, length, area, or volume) of a sample in a sampling dwc:Event.",
          "notes": "A dwc:sampleSizeValue must have a corresponding dwc:sampleSizeUnit.",
          "examples": "`5` (sampleSizeValue) with `metre` (sampleSizeUnit)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/sampleSizeValue"
        },
        {
          "name": "sampleSizeUnit",
          "title": "Sample Size Unit",
          "description": "The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling dwc:Event.",
          "notes": "A dwc:sampleSizeUnit must have a corresponding dwc:sampleSizeValue, e.g., `5` for dwc:sampleSizeValue with `m` for dwc:sampleSizeUnit. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`minute`; `hour`; `day`; `metre`; `square metre`; `cubic metre`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/sampleSizeUnit"
        },
        {
          "name": "samplingPerformedBy",
          "title": "Sampling Performed By",
          "description": "A person, group, or organization responsible for recording an eco:Survey.",
          "notes": "An eco:Survey could be at any level of hierarchy. In the case of a higher level (parent) eco:Survey, include all the organizations or people involved in the child eco:Surveys that contributed to the parent eco:Survey. Recommended best practice is to separate multiple values in a list with space vertical bar space ( | ). This term has an equivalent in the ecoiri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`North American Butterfly Association`; `KK Wall`; `JJ Green`; `LL Pink and FF Grey | Aspen Center for Environmental Studies`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/samplingPerformedBy"
        },
        {
          "name": "samplingPerformedBy_fk",
          "title": "Sampling Performed By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for sampling.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "samplingPerformedByID",
          "title": "Sampling Performed By ID",
          "description": "An identifier for a dcterms:Agent responsible for sampling.",
          "notes": "Recommended best practice is to provide a single identifier that disambiguates the details of the sampling dcterms:Agent. If a list is used, the order of the identifiers on the list should not be assumed to convey any semantics. Recommended best practice is to separate the values in a list with space vertical bar space (` | `). The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "isSamplingEffortReported",
          "title": "Is Sampling Effort Reported",
          "description": "The sampling effort associated with an eco:Survey was reported.",
          "notes": "Typically values of effort would be captured under the terms eco:samplingEffortValue and eco:samplingEffortUnit. Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/isSamplingEffortReported"
        },
        {
          "name": "samplingEffortProtocol",
          "title": "Sampling Effort Protocol",
          "description": "A description of or reference to a Protocol used to determine a eco:samplingEffortValue.",
          "notes": "This description should be associated with the values reported in eco:samplingEffortValue and eco:samplingEffortUnit. This is a specialization of eco:protocolDescriptions focused on effort, distinct from the survey method. The effort relates to the intensity of sampling and therefore can assist in interpreting estimates of completeness. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`40 box traps deployed at even spacings along 4 parallel 100m transects placed 50m apart and visited at 6 hourly intervals over a 48 hour period`; `2 people occupying a bird hide for a period of 8 hours and undertaking a 30 minute count of species within the 150 degree field of view every 2 hours`; `A single baited camera trap station with motion sensor trigger, deployed for a period of 10 days and configured for detecting large fauna moving through a known traffic way`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/samplingEffortProtocol"
        },
        {
          "name": "samplingEffortProtocol_fk",
          "title": "Sampling Effort Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to determine an eco:samplingEffortValue.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "samplingEffortValue",
          "title": "Sampling Effort Value",
          "description": "The numeric value for the sampling effort expended during an eco:Survey.",
          "notes": "This term is meant to capture the total sampling effort value. To express details of how the effort was determined use eco:samplingEffortProtocol. For compilations it is recommend not to infer effort. An eco:samplingEffortValue must have a corresponding eco:samplingEffortUnit.",
          "examples": "`1900`; `40`; `5.5`",
          "type": "number",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/samplingEffortValue",
          "constraints": {
            "minimum": 0
          }
        },
        {
          "name": "samplingEffortUnit",
          "title": "Sampling Effort Unit",
          "description": "The units associated with an eco:samplingEffortValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`trapHours`; `personHours`; `trapDays`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/samplingEffortUnit"
        },
        {
          "name": "informationWithheld",
          "title": "Information Withheld",
          "description": "Additional information that exists about a resource, but that is not shared publicly. Suggests that alternative data of higher quality may be available on request.",
          "notes": "",
          "examples": "`location information not given for endangered species`; `collector identities withheld | ask about tissue samples`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/informationWithheld"
        },
        {
          "name": "dataGeneralizations",
          "title": "Data Generalizations",
          "description": "Actions taken to make the shared data less specific or complete than in its original form. Suggests that alternative data of higher quality may be available on request.",
          "notes": "",
          "examples": "`Coordinates generalized from original GPS coordinates to the nearest half degree grid cell.`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/dataGeneralizations"
        },
        {
          "name": "feedbackURL",
          "title": "Feedback URL",
          "description": "A uniform resource locator (URL) that points to a webpage on which a form may be submitted to gather feedback about the record.",
          "notes": "Recommended best practice is to optionally include query strings that act to pre-populate web page form elements and communicate the context.",
          "examples": "`https://example.com/new?title=New+issue&body=This+comment+is+about+CAN12345`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/feedbackURL"
        }
      ],
      "primaryKey": "survey_pk",
      "weakPrimaryKey": "surveyID",
      "foreignKeys": [
        {
          "fields": "event_fk",
          "predicate": "has context",
          "reference": {
            "resource": "event",
            "fields": "event_pk"
          }
        },
        {
          "fields": "identifiedBy_fk",
          "predicate": "identified by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "samplingProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "samplingPerformedBy_fk",
          "predicate": "sampling performed by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "samplingEffortProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "identifiedByID",
          "predicate": "identifications by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "samplingPerformedByID",
          "predicate": "sampling performed by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "survey-agent-role": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/survey-agent-role",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/survey-agent-role.json",
      "name": "survey-agent-role",
      "title": "Survey Agent Role",
      "description": "A role filled by a dcterms:Agent with respect to an eco:Survey.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//survey-agent-role",
      "fields": [
        {
          "name": "survey_fk",
          "title": "Survey (Foreign Key)",
          "description": "An identifier for an eco:Survey.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agent_fk",
          "title": "Agent (Foreign Key)",
          "description": "An identifier for a dcterms:Agent.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "agentRole",
          "title": "Agent Role",
          "description": "A category that best matches the nature of a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use a controlled vocabulary for the roles appropriate to the class of resource a dcterms:AgentRole is related to.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        },
        {
          "name": "agentRoleIRI",
          "title": "Agent Role IRI",
          "description": "An IRI of the controlled vocabulary value for a role of a dcterms:Agent.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResourceID"
        },
        {
          "name": "agentRoleSource",
          "title": "Agent Role Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:agentRole is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "agentRoleOrder",
          "title": "Agent Role Order",
          "description": "A numerical position of an AgentRole in a set of AgentRoles that have the same combination of agentRole, agentRoleIRI, agentRoleSource and related target identifier.",
          "notes": "One could use dwc:agentRoleOrder to create an ordered list of collectors (dwc:agentRole = 'collector') for a dwc:MaterialEntity, for example. The first would have dwc:agentRoleOrder=1, the second would have dwc:agentRoleOrder=2.",
          "examples": "",
          "type": "integer",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentRoleOrder",
          "constraints": {
            "required": true,
            "minimum": 1
          }
        },
        {
          "name": "agentRoleDate",
          "title": "Agent Role Date",
          "description": "An interval during which a dcterms:AgentRole was in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        }
      ],
      "foreignKeys": [
        {
          "fields": "survey_fk",
          "predicate": "role for",
          "reference": {
            "resource": "survey",
            "fields": "survey_pk"
          }
        },
        {
          "fields": "agent_fk",
          "predicate": "role holder",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ]
    },
    "survey-assertion": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/survey-assertion",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/survey-assertion.json",
      "name": "survey-assertion",
      "title": "Survey Assertion",
      "description": "A dwc:Assertion made by a dcterms:Agent about an eco:Survey.",
      "notes": "",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/MeasurementOrFact",
      "fields": [
        {
          "name": "assertionID",
          "title": "Assertion ID",
          "description": "An identifier for a dwc:Assertion.",
          "notes": "Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionID",
          "constraints": {
            "required": false,
            "unique": true
          }
        },
        {
          "name": "survey_fk",
          "title": "Survey (Foreign Key)",
          "description": "An identifier for an eco:Survey.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "verbatimAssertionType",
          "title": "Verbatim Assertion Type",
          "description": "A string representing the type of dwc:Assertion as it appeared in the original record.",
          "notes": "This term is meant to allow the capture of an unaltered original name for a dwc:assertionType. This term is meant to be used in addition to dwc:assertionType, not instead of it.",
          "examples": "`water_temp`; `Fish biomass`; `sampling net mesh size`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/verbatimAssertionType"
        },
        {
          "name": "assertionType",
          "title": "Assertion Type",
          "description": "A category that best matches the nature of a dwc:Assertion.",
          "notes": "Recommended best practice is to use a controlled vocabulary. This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.",
          "examples": "`tail length`; `temperature`; `trap line length`; `survey area`; `trap type`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionType"
        },
        {
          "name": "assertionTypeIRI",
          "title": "Assertion Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementType"
        },
        {
          "name": "assertionTypeSource",
          "title": "Assertion Type Source",
          "description": "A reference to the controlled vocabulary in which the definition of a value in dwc:assertionType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionMadeDate",
          "title": "Assertion Made Date",
          "description": "A date on which a dwc:Assertion was created.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionMadeDate"
        },
        {
          "name": "assertionEffectiveDate",
          "title": "Assertion Effective Date",
          "description": "A date-time or time interval during which an asserted state or measurement was deemed to be in effect.",
          "notes": "Recommended best practice is to use a date that conforms to ISO 8601-1:2019.",
          "examples": "`1963-03-08T14:07-06:00` (8 Mar 1963 at or after 2:07pm and before 2:08pm in the time zone six hours earlier than UTC); `2009-02-20T08:40Z` (20 February 2009 at or after 8:40am and before 8:41 UTC); `2018-08-29T15:19` (29 August 2018 at or after 3:19pm and before 3:20pm local time); `1809-02-12` (within the day 12 February 1809); `1906-06` (in the month of June 1906); `1971` (in the year 1971); `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (some time within the interval beginning 1 March 2007 at 1pm UTC and before 11 May 2008 at 3:30pm UTC); `1900/1909` (some time within the interval between the beginning of the year 1900 and before the year 1909); `2007-11-13/15` (some time in the interval between the beginning of 13 November 2007 and before 15 November 2007)",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionEffectiveDate"
        },
        {
          "name": "assertionValue",
          "title": "Assertion Value",
          "description": "An asserted value.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionValue"
        },
        {
          "name": "assertionValueIRI",
          "title": "Assertion Value IRI",
          "description": "An IRI of the controlled vocabulary value for a value of a dwc:Assertion.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/measurementValue"
        },
        {
          "name": "assertionValueSource",
          "title": "Assertion Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:assertionValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionUnit",
          "title": "Assertion Unit",
          "description": "Unit associated with the value in dwc:assertionValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary such as the Ontology of Units of Measure http://www.wurvoc.org/vocabularies/om-1.8/ of SI units, derived units, or other non-SI units accepted for use within the SI. For units that are composed of multiple parts, use the patterns as given in \"A Primer for Communicating Mathematics via Plain Text\" (https://cse.sc.edu/~fenner/latex-ASCII.pdf) by Stephen Fenner (e.g., `g/cm^3` for grams per cubic centimeter). For other units, provide the value as a recognizable standard (e.g., '%') or written out in full and in the plural (e.g., `individuals`). It is fine to provide non-SI units in the original language of the dataset.",
          "examples": "`m`; `s`; `g`; `ml`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionUnit"
        },
        {
          "name": "assertionUnitIRI",
          "title": "Assertion Unit IRI",
          "description": "An IRI of a controlled vocabulary value for the unit of a dwc:assertionValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwciri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/iri/assertionUnit"
        },
        {
          "name": "assertionUnitSource",
          "title": "Assertion Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of the value in dwc:assertionUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "assertionError",
          "title": "Assertion Error",
          "description": "A description of the potential error associated with a dwc:assertionValue.",
          "notes": "",
          "examples": "`0.01`; `normal distribution with variation of 2 m`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionError"
        },
        {
          "name": "assertionBy",
          "title": "Assertion By",
          "description": "A list (concatenated and separated) of names of dcterms:Agents responsible for making a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionBy"
        },
        {
          "name": "assertionBy_fk",
          "title": "Assertion By (Foreign Key)",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionByID",
          "title": "Assertion By ID",
          "description": "An identifier for a dcterms:Agent responsible for making a dwc:Assertion.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionProtocols",
          "title": "Assertion Protocols",
          "description": "Names of, references to, or descriptions of dwc:Protocols used in making a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionProtocols"
        },
        {
          "name": "assertionProtocol_fk",
          "title": "Assertion Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol used to make a dwc:Assertion.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "assertionReferences",
          "title": "Assertion References",
          "description": "A list (concatenated and separated) of dcterms:BibliographicResources associated with a dwc:Assertion.",
          "notes": "Recommended best practice is to separate the values in a list with space vertical bar space (` | `).",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionReferences"
        },
        {
          "name": "assertionRemarks",
          "title": "Assertion Remarks",
          "description": "Comments or notes about a dwc:Assertion.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/assertionRemarks"
        }
      ],
      "weakPrimaryKey": "assertionID",
      "foreignKeys": [
        {
          "fields": "survey_fk",
          "predicate": "about",
          "reference": {
            "resource": "survey",
            "fields": "survey_pk"
          }
        },
        {
          "fields": "assertionBy_fk",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "assertionProtocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "assertionByID",
          "predicate": "asserted by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    },
    "survey-identifier": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/survey-identifier",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/survey-identifier.json",
      "name": "survey-identifier",
      "title": "Survey Identifier",
      "description": "An adms:Identifier for an eco:Survey.",
      "notes": "An important point to note is that properties of the adms:Identifier class are properties of the Identifier, not the resource that it identifies or the agency that issued it.",
      "examples": "",
      "namespace": "adms",
      "dcterms:isVersionOf": "http://www.w3.org/ns/adms#Identifier",
      "fields": [
        {
          "name": "survey_fk",
          "title": "Survey (Foreign Key)",
          "description": "An identifier for an eco:Survey.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "description": "An unambiguous reference to a resource within a given context.",
          "notes": "Recommended best practice is to identify a resource by means of a string conforming to a formal identification system.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "skos",
          "dcterms:isVersionOf": "http://www.w3.org/2004/02/skos/core#notation",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "identifierType",
          "title": "Identifier Type",
          "description": "A category or system that best matches the nature of an identifier (skos:notation).",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/type"
        },
        {
          "name": "identifierTypeIRI",
          "title": "Identifier Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of identifier.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "identifierTypeSource",
          "title": "Identifier Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in dwc:identifierType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "identifierLanguage",
          "title": "Identifier Language",
          "description": "A language in which an identifier is presented.",
          "notes": "Recommended best practice is to use an ISO639-2 three-letter language code.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/language"
        }
      ],
      "foreignKeys": [
        {
          "fields": "survey_fk",
          "predicate": "for",
          "reference": {
            "resource": "survey",
            "fields": "survey_pk"
          }
        }
      ]
    },
    "survey-protocol": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/survey-protocol",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/survey-protocol.json",
      "name": "survey-protocol",
      "title": "Survey Protocol",
      "description": "A dwc:Protocol used for an eco:Survey.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//survey-protocol",
      "fields": [
        {
          "name": "protocol_fk",
          "title": "Protocol (Foreign Key)",
          "description": "An identifier for a dwc:Protocol.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/protocolID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "survey_fk",
          "title": "Survey (Foreign Key)",
          "description": "An identifier for an eco:Survey.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "protocol_fk",
          "predicate": "followed",
          "reference": {
            "resource": "protocol",
            "fields": "protocol_pk"
          }
        },
        {
          "fields": "survey_fk",
          "predicate": "used during",
          "reference": {
            "resource": "survey",
            "fields": "survey_pk"
          }
        }
      ]
    },
    "survey-reference": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/survey-reference",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/survey-reference.json",
      "name": "survey-reference",
      "title": "Survey Reference",
      "description": "A dcterms:BibliographicResource related to an eco:Survey.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//survey-reference",
      "fields": [
        {
          "name": "reference_fk",
          "title": "Reference (Foreign Key)",
          "description": "An identifier for a dcterms:BibliographicResource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/referenceID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "survey_fk",
          "title": "Survey (Foreign Key)",
          "description": "An identifier for an eco:Survey.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "relationshipType",
          "title": "Relationship Type",
          "description": "A relationship of a subject resource to a dcterms:BibliographicResource.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`cited in`; `referenced`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/relationshipOfResource"
        }
      ],
      "foreignKeys": [
        {
          "fields": "reference_fk",
          "predicate": "mentioned in",
          "reference": {
            "resource": "bibliographic-resource",
            "fields": "reference_pk"
          }
        },
        {
          "fields": "survey_fk",
          "predicate": "mentioned",
          "reference": {
            "resource": "survey",
            "fields": "survey_pk"
          }
        }
      ]
    },
    "survey-survey-target": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/survey-survey-target",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/survey-survey-target.json",
      "name": "survey-survey-target",
      "title": "Survey Survey Target",
      "description": "An eco:SurveyTarget used for an eco:Survey.",
      "notes": "",
      "examples": "",
      "namespace": "",
      "dcterms:isVersionOf": "http://example.com/term-pending//survey-survey-target",
      "fields": [
        {
          "name": "survey_fk",
          "title": "Survey (Foreign Key)",
          "description": "An identifier for an eco:Survey.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "surveyTarget_fk",
          "title": "Survey Target (Foreign Key)",
          "description": "An identifier for an eco:SurveyTarget.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyTargetID",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "survey_fk",
          "predicate": "target for",
          "reference": {
            "resource": "survey",
            "fields": "survey_pk"
          }
        },
        {
          "fields": "surveyTarget_fk",
          "predicate": "has target",
          "reference": {
            "resource": "survey-target",
            "fields": "surveyTarget_pk"
          }
        }
      ]
    },
    "survey-target": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/survey-target",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/survey-target.json",
      "name": "survey-target",
      "title": "Survey Target",
      "description": "One or more scopes that describe a target for dwc:Occurrences in an eco:Survey.",
      "notes": "",
      "examples": "`all bird species`; `all bird species except Larus gulls, fulmars and kittiwakes`; `reproductive female Ctenomys sociabilis (only)`; `Oncorhynchus mykiss and Oncorhynchus clarkii (only)`, `all total lengths except < 12 inches`",
      "namespace": "eco",
      "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/SurveyTarget",
      "fields": [
        {
          "name": "surveyTarget_pk",
          "title": "Survey Target (Primary Key)",
          "description": "A unique identifier for an eco:SurveyTarget.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyTargetID",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "surveyTargetID",
          "title": "Survey Target ID",
          "description": "An identifier for an eco:SurveyTarget.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyTargetID"
        },
        {
          "name": "surveyTargetDescription",
          "title": "Survey Target Description",
          "description": "A verbatim description of an eco:SurveyTarget.",
          "notes": "",
          "examples": "`all passerine birds`; `all flowering Rosaceae`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyTargetDescription"
        },
        {
          "name": "isSurveyTargetFullyReported",
          "title": "Is Survey Target Fully Reported",
          "description": "Whether an eco:SurveyTarget can be used to infer absence of detection because all counts of detected dwc:Occurrences matching an eco:SurveyTarget were fully reported.",
          "notes": "Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/. If true (the survey target is fully reported - nothing was left unreported), then this enables inference of absence of detection for everything in that eco:SurveyTarget that is included but that does not appear in the counts (absent counts signify absence of detection).",
          "examples": "`true`; `false`",
          "type": "boolean",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/isSurveyTargetFullyReported",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "abundanceCap",
          "title": "Abundance Cap",
          "description": "The reported maximum number of dwc:Occurrences matching an eco:SurveyTarget.",
          "notes": "",
          "examples": "`300`; `700`",
          "type": "integer",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/abundanceCap",
          "constraints": {
            "minimum": 0
          }
        },
        {
          "name": "surveyTargetRemarks",
          "title": "Survey Target Remarks",
          "description": "Comments or notes about an eco:SurveyTarget.",
          "notes": "",
          "examples": "`Survey target scopes reflect post-facto filtering, not original survey design.`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyTargetRemarks"
        }
      ],
      "primaryKey": "surveyTarget_pk",
      "weakPrimaryKey": "surveyTargetID"
    },
    "survey-target-descriptor": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/survey-target-descriptor",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/survey-target-descriptor.json",
      "name": "survey-target-descriptor",
      "title": "Survey Target Descriptor",
      "description": "A combination of a survey target value and a survey target type for a given eco:SurveyTarget.",
      "notes": "",
      "examples": "`taxon: Aves`; `pathway: transportContaminant`; `minimumTotalLength: 20 cm`",
      "namespace": "eco",
      "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/SurveyTargetDescriptor",
      "fields": [
        {
          "name": "surveyTarget_fk",
          "title": "Survey Target (Foreign Key)",
          "description": "An identifier for an eco:SurveyTarget.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyTargetID",
          "constraints": {
            "required": true,
            "unique": false
          }
        },
        {
          "name": "surveyTargetType",
          "title": "Survey Target Type",
          "description": "A category that best matches the nature of a scope in an eco:SurveyTarget.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`taxon`; `habitat`; `establishmentMeans`; `growthForm`; `sex`; `lifeStage`; `minimum length`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyTargetType"
        },
        {
          "name": "surveyTargetTypeIRI",
          "title": "Survey Target Type IRI",
          "description": "An IRI of a controlled vocabulary value for a type of target.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/type"
        },
        {
          "name": "surveyTargetTypeSource",
          "title": "Survey Target Type Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in eco:SurveyTargetType is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "surveyTargetValue",
          "title": "Survey Target Value",
          "description": "A value to include or exclude in a scope categorized by eco:surveyTargetType.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`Aves`; `oak savannah`; `native`; `tree`; `female`; `adult`; `height`; `weight`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyTargetValue"
        },
        {
          "name": "surveyTargetValueIRI",
          "title": "Survey Target Value IRI",
          "description": "A value to include or exclude in a scope categorized by eco:surveyTargetType.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ecoiri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/iri/surveyTargetValue"
        },
        {
          "name": "surveyTargetValueSource",
          "title": "Survey Target Value Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in eco:SurveyTargetValue is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "surveyTargetUnit",
          "title": "Survey Target Unit",
          "description": "Unit associated with a value in eco:surveyTargetValue.",
          "notes": "Recommended best practice is to use a controlled vocabulary.",
          "examples": "`m`; `g`; `years`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/surveyTargetUnit"
        },
        {
          "name": "surveyTargetUnitIRI",
          "title": "Survey Target Unit IRI",
          "description": "Unit associated with a value in eco:surveyTargetValue.",
          "notes": "Recommended best practice is to use an IRI for a term in a controlled vocabulary.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ecoiri",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/iri/surveyTargetUnit"
        },
        {
          "name": "surveyTargetUnitSource",
          "title": "Survey Target Unit Source",
          "description": "A reference to a controlled vocabulary in which the definition of a value in eco:SurveyTargetUnit is given.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/source"
        },
        {
          "name": "includeOrExclude",
          "title": "Include Or Exclude",
          "description": "Whether to include or exclude eco:surveyTargetValue in a scope categorized by eco:surveyTargetType.",
          "notes": "Combinations of eco:SurveyTarget records of inclusions and exclusions can define complex scopes such as all flying adult Aves except Passeriformes. Recommended best practice is to use a controlled vocabulary consisting of 'include' and 'exclude' only.",
          "examples": "`include`; `exclude`",
          "type": "string",
          "format": "default",
          "namespace": "eco",
          "dcterms:isVersionOf": "http://rs.tdwg.org/eco/terms/includeOrExclude",
          "constraints": {
            "required": true,
            "unique": false
          }
        }
      ],
      "foreignKeys": [
        {
          "fields": "surveyTarget_fk",
          "predicate": "for target",
          "reference": {
            "resource": "survey-target",
            "fields": "surveyTarget_pk"
          }
        }
      ]
    },
    "usage-policy": {
      "identifier": "http://rs.tdwg.org/dwc-dp/1.0-RC/usage-policy",
      "dcterms:isPartOf": "http://www.tdwg.org/standards/450",
      "url": "table-schemas/usage-policy.json",
      "name": "usage-policy",
      "title": "Usage Policy",
      "description": "Information about rights, usage, and attribution statements applicable to an entity.",
      "notes": "This is a convenience class to group related properties.",
      "examples": "",
      "namespace": "dwc",
      "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/UsagePolicy",
      "fields": [
        {
          "name": "usagePolicy_pk",
          "title": "Usage Policy (Primary Key)",
          "description": "A unique identifier for a dwc:UsagePolicy.",
          "notes": "The value in this field MAY be changed in aggregation to guarantee uniqueness.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/identifier",
          "constraints": {
            "required": true,
            "unique": true
          }
        },
        {
          "name": "usagePolicyID",
          "title": "Usage Policy ID",
          "description": "An identifier for a dwc:UsagePolicy.",
          "notes": "The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/usagePolicyID"
        },
        {
          "name": "rights",
          "title": "Rights",
          "description": "Information about rights held in and over the resource. A full-text, readable copyright statement, as required by the national legislation of the copyright holder. On collections, this applies to all contained objects, unless the object itself has a different statement. Examples: “Copyright XY 2008, all rights reserved”, “© 2008 XY Museum” , `Public Domain.`; `Copyright unknown.` Do not place just the name of the copyright holder(s) here! That belongs in a list in the xmpRights:Owner field, which should be supplied if dc:rights is not 'Public Domain', which is appropriate only if the resource is known to be not under copyright. See also the entry for dcterms:rights in this document and see the DCMI FAQ on DC and DCTERMS Namespaces for discussion of the rationale for terms in two namespaces. Normal practice is to use the same Label if both are provided. Labels have no effect on information discovery and are only suggestions.",
          "notes": "",
          "examples": "`Copyright 2014 Ron Thomas` or a URI like `http://creativecommons.org/licenses/by/3.0/legalcode`",
          "type": "string",
          "format": "default",
          "namespace": "dc",
          "dcterms:isVersionOf": "http://purl.org/dc/elements/1.1/rights"
        },
        {
          "name": "rightsIRI",
          "title": "Rights IRI",
          "description": "A URI pointing to structured information about rights held in and over the resource. Examples include http://creativecommons.org/licenses/by/3.0/legalcode and http://creativecommons.org/publicdomain/zero/1.0/. At least one of dcterms:rights and dc:rights must be supplied but, when feasible, supplying both may make the metadata more widely useful. They must specify the same rights. In case of ambiguity, dcterms:rights prevails.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/rights"
        },
        {
          "name": "rightsHolder",
          "title": "Rights Holder",
          "description": "A name of a dcterms:Agent that owns or manages rights over a resource.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/rightsHolder"
        },
        {
          "name": "rightsHolder_fk",
          "title": "Rights Holder (Foreign Key)",
          "description": "An identifier for a dcterms:Agent that owns or manages rights over a resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "rightsHolderID",
          "title": "Rights Holder ID",
          "description": "An identifier for a dcterms:Agent that owns or manages rights over a resource.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "owner",
          "title": "Owner",
          "description": "A list of legal owners of the resource.",
          "notes": "`unknown`",
          "examples": "`The names of the owners `Ron Thomas, Roz Thomas` or a URI that identifies the owner`",
          "type": "string",
          "format": "default",
          "namespace": "xmprights",
          "dcterms:isVersionOf": "http://ns.adobe.com/xap/1.0/rights/Owner"
        },
        {
          "name": "owner_fk",
          "title": "Owner (Foreign Key)",
          "description": "An identifier for a dcterms:Agent that is the owner of the resource.",
          "notes": "The value in this field MAY be changed in aggregation to preserve the relationship to the related primary key.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "ownerID",
          "title": "Owner ID",
          "description": "An identifier for a dcterms:Agent that owns the copyright for a resource.",
          "notes": "The value in this field MAY refer to a dcterms:Agent within or external to the dataset in which this record originated.",
          "examples": "`https://orcid.org/0000-0002-1825-0097`",
          "type": "string",
          "format": "default",
          "namespace": "dwc",
          "dcterms:isVersionOf": "http://rs.tdwg.org/dwc/terms/agentID",
          "constraints": {
            "required": false,
            "unique": false
          }
        },
        {
          "name": "usageTerms",
          "title": "Usage Terms",
          "description": "A collection of text instructions on how a resource can be legally used, given in a variety of languages.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "xmprights",
          "dcterms:isVersionOf": "http://ns.adobe.com/xap/1.0/rights/UsageTerms"
        },
        {
          "name": "webStatement",
          "title": "Web Statement",
          "description": "A URL defining or further elaborating on a license statement (e.g., a web page explaining the precise terms of use).",
          "notes": "",
          "examples": "`http://creativecommons.org/licenses/by-nc-sa/3.0/us/`",
          "type": "string",
          "format": "default",
          "namespace": "xmprights",
          "dcterms:isVersionOf": "http://ns.adobe.com/xap/1.0/rights/WebStatement"
        },
        {
          "name": "accessRights",
          "title": "Access Rights",
          "description": "Information about who can access the resource or an indication of its security status.",
          "notes": "Access Rights may include information regarding access or restrictions based on privacy, security, or other policies.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/accessRights"
        },
        {
          "name": "license",
          "title": "License",
          "description": "A legal document giving official permission to do something with the resource.",
          "notes": "Recommended practice is to identify the license document with a URI. If this is not possible or feasible, a literal value that identifies the license may be provided.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "dcterms",
          "dcterms:isVersionOf": "http://purl.org/dc/terms/license"
        },
        {
          "name": "licenseLogoURL",
          "title": "License Logo URL",
          "description": "A URL providing access to a logo that symbolizes a dcterms:license.",
          "notes": "The originating metadata provider is strongly urged to choose a suitable logo as a graphical representation of the license. Failure to do so may leave downstream aggregators in a difficult position to supply a logo that adequately represents the professional, legal, or social aims of the licensors (license givers). Example: http://i.creativecommons.org/l/by-nc-sa/3.0/us/88x31.png provides access to a logo image.",
          "examples": "`http://i.creativecommons.org/l/by-nc-sa/3.0/us/88x31.png`",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/licenseLogoURL"
        },
        {
          "name": "licensingException",
          "title": "Licensing Exception",
          "description": "The licensing statement for this variant of the ac:Media resource if different from that given in the dcterms:license property of the resource.",
          "notes": "Required only if this version has different licensing than that of a corresponding ac:Media resource. For example, the highest resolution version may be more restricted than lower resolution versions.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/licensingException"
        },
        {
          "name": "credit",
          "title": "Credit",
          "description": "The credit to person(s) and/or organisation(s) required by the supplier of the item to be used when published. This is a free-text field.",
          "notes": "For example, `Please cite this as…`.",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "photoshop",
          "dcterms:isVersionOf": "http://ns.adobe.com/photoshop/1.0/Credit"
        },
        {
          "name": "attributionLogoURL",
          "title": "Attribution Logo URL",
          "description": "The URL of the icon or logo image to appear in source attribution.",
          "notes": "",
          "examples": "`http://www.morphbank.net/images/userLogos/11a.jpg`",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/attributionLogoURL"
        },
        {
          "name": "attributionLinkURL",
          "title": "Attribution Link URL",
          "description": "The URL where information about ownership, attribution, etc. of the resource may be found.",
          "notes": "",
          "examples": "",
          "type": "string",
          "format": "default",
          "namespace": "ac",
          "dcterms:isVersionOf": "http://rs.tdwg.org/ac/terms/attributionLinkURL"
        }
      ],
      "primaryKey": "usagePolicy_pk",
      "weakPrimaryKey": "usagePolicyID",
      "foreignKeys": [
        {
          "fields": "rightsHolder_fk",
          "predicate": "rights held by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        },
        {
          "fields": "owner_fk",
          "predicate": "owned by",
          "reference": {
            "resource": "agent",
            "fields": "agent_pk"
          }
        }
      ],
      "weakForeignKeys": [
        {
          "fields": "rightsHolderID",
          "predicate": "rights held by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        },
        {
          "fields": "ownerID",
          "predicate": "owned by",
          "reference": {
            "resource": "agent",
            "fields": "agentID"
          }
        }
      ]
    }
  }
};
