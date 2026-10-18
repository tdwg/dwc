# Darwin Core conceptual model

Title
: Darwin Core conceptual model

Date version issued
: 2026-05-26

Date created
: 2026-05-26

Fait partie du standard TDWG
: <http://www.tdwg.org/standards/450>

This version
: <http://rs.tdwg.org/dwc/doc/cm/2026-05-26>

Latest version
: <http://rs.tdwg.org/dwc/doc/cm/>

Abstract
: Guidelines for the semantics of relationships between Darwin Core classes.

Contributors
: [John Wieczorek](https://orcid.org/0000-0003-1144-0290) ([Rauthiflor LLC, Global Biodiversity Information Facility](http://www.wikidata.org/entity/Q1531570)), [Tim Robertson](https://orcid.org/0000-0001-6215-3617) ([Global Biodiversity Information Facility](http://www.wikidata.org/entity/Q1531570)), [Paula Zermoglio](https://orcid.org/0000-0002-6056-5084) ([Instituto de Investigaciones en Recursos Naturales, Agroecología y Desarrollo Rural (IRNAD, CONICET - Universidad Nacional de Río Negro)](https://www.wikidata.org/wiki/Q6978293)), [Cecilie Svenningsen](https://orcid.org/0000-0002-9216-2917) ([Global Biodiversity Information Facility](http://www.wikidata.org/entity/Q1531570)), [Kate Ingenloff](https://orcid.org/0000-0001-5942-9053) ([Global Biodiversity Information Facility](http://www.wikidata.org/entity/Q1531570)), [Markus Döring](https://orcid.org/0000-0001-7757-1889) ([Global Biodiversity Information Facility](http://www.wikidata.org/entity/Q1531570)), [Peter Desmet](https://orcid.org/0000-0002-8442-8025) ([Instituut voor Natuur- en Bosonderzoek (INBO)](http://www.wikidata.org/entity/Q7315097)), [Tobias Guldberg Frøslev](https://orcid.org/0000-0002-3530-013X) ([Global Biodiversity Information Facility](http://www.wikidata.org/entity/Q1531570))

Creator
: Darwin Core Maintenance Group

Citation
: Darwin Core Maintenance Group. 2026. Darwin Core conceptual model. Biodiversity Information Standards (TDWG). <http://rs.tdwg.org/dwc/doc/cm/2026-05-26>

## 1 Introduction

### 1.1 Purpose (non-normative)

The **Darwin Core Conceptual Model (DwC-CM)** provides a high‑level framework that shows how [Darwin Core](https://dwc.tdwg.org) (DwC) classes relate to one another in typical biodiversity information workflows. Darwin Core formally defines a [set of terms](https://dwc.tdwg.org/list/) grouped by classes; DwC‑CM **clarifies the conceptual meaning of those classes and the relationships among them** so implementers can make consistent, interoperable design choices across different technologies.

The DwC‑CM does not prescribe an ontology of formal predicates for the relationships between classes. Instead, it uses natural‑language labels to convey semantic intent.

The DwC-CM does not prescribe the implementation of systems based on Darwin Core using any particular technology. The model is not a strict blueprint for system design; instead, it is a **reference framework that can be applied in whole or in part**. An implementation can include entities and relationships that are not in the Conceptual Model. This includes using a less strict cardinality than is suggested by a predicate in this document, if warranted. Different system architectures may realize the model in different ways—for example:

- A relational database or tabular data publishing schema may represent relationships through joins across normalized tables.
- A document-oriented approach may choose to embed related classes as nested objects within a record rather than by linking separate records.
- A graph database may represent relationships as explicit links between nodes.

The DwC-CM is a synthesis of discussion within the Biodiversity Information Standards (TDWG) community. It accommodates the observed use of DwC to date and accommodates the results of a wide variety of targeted case studies to broaden the scope of Darwin Core. It does not attempt to anticipate every possible use, and it is expected to evolve as the demand for new uses arises.

By clarifying the conceptual relationships between Darwin Core classes, the DwC-CM helps implementers understand which connections are essential and the minimum cardinalities involved so that implementations are fundamentally consistent and correctly adapted in specific technical environments.

### 1.2 Audience (non-normative)

This guide is intended for developers, data architects, and system designers who are building applications, databases, or services that rely on Darwin Core. It highlights how the conceptual model can be used as a reference when making design decisions, ensuring both consistency when using the Darwin Core standard and flexibility in implementation.

This guide is will also play an important role for scientists (in particular scientists dealing with data intensive workflows) to better understand what entities like Occurrence, Event, and Location mean, how they are related, and how they are supposed to be used. This matters, for example, when designing analyses, merging datasets, or interpreting integrated data.

### 1.3 Associated Documents (non-normative)

The following resources are closely related and are recommended reading:

- [Darwin Core Quick Reference Guide](https://dwc.tdwg.org/terms/) (abridged presentation of currently recommended Darwin Core term versions)
- [Darwin Core List of Terms](https://dwc.tdwg.org/list/) (complete normative definitions of all Darwin Core term versions)
- [Darwin Core Data Package Guide](https://gbif.github.io/dwc-dp/dp/) (specification for creating Darwin Core data packages)
- [Darwin Core Data Package Quick Reference Guide](https://gbif.github.io/dwc-dp/qrg/) (contextual term definitions for tables and fields for a Darwin Core Data Package implementation of DwC-CM)
- [Darwin Core Data Package Designer](https://gbif.github.io/dwc-dp/designer/) (tool to find terms, explore and visualize relationships, and build Darwin Core Data Package descriptors)

### 1.4 Status of the content of this document (normative)

Sections may be either normative (defines what is required to comply with the standard) or non-normative (supports understanding but is not binding) and are marked as such.

All sections of this document except this one are non-normative.

### 1.5 Notes on diagrams (non-normative)

Diagrams in this document are class diagrams. The boxes represent Darwin Core classes and the lines connecting the boxes represent established relationships between classes. Boxes do not represent instances of those classes (e.g., a specific _Event_ as opposed to _Events_ in general). For example, in Figure 1, the _Organism Interaction_ class has two relationships to the _Occurrence_ class. This does not mean that both relationships necessarily apply to the same _Occurrence_ (instance). Indeed, most _Organism Interactions_ involve two distinct _Occurrence_ instances (two specific _Organisms_ interacting in the same _Event_).

In Figures 2-9, the relationships between classes are labeled with predicates that describe that relationship succinctly using explanatory natural language. This document does not prescribe specific predicates from controlled vocabularies or ontologies.

Throughout the text, when a class is referred to in the plural, this is done by including the plural form of the class label within the formatting. Thus, _Material Entities_ refers to multiple instances of the class labeled _Material Entity_, not to a single instance of a class labeled _Material Entities_.

## 2 Overview (non-normative)

The Darwin Core Conceptual Model is meant to facilitate understanding of established relationships between Darwin Core classes. This document relies on diagrams of these relationships with accompanying descriptions.

Throughout the diagrams in this document, classes are referred to with the labels recommended by Darwin Core in bold (e.g., **Material Entity** for the class [http://rs.tdwg.org/dwc/terms/Material Entity](http://rs.tdwg.org/dwc/terms/Material Entity)). In the narrative, classes are referred to by their names in italics, (e.g., _Material Entity_). Thus, for example, when _Organism_ is used, it is meant precisely in the sense of [http://rs.tdwg.org/dwc/terms/Organism](http://rs.tdwg.org/dwc/terms/Organism).

Figure 1 provides an overview of the DwC-CM. To avoid clutter, the nature of the relationships (directionality, cardinality and predicates) are omitted. This diagram also omits the vast number of possible relationships between the classes _Agent_, _Media Entity_, and _Protocol_ to all of the other classes in the model. Relationships are described in detail in the thematic sections that follow the Overview.

<img src="dwc-cm.png" alt="Darwin Core Conceptual Model"
  style="max-width:100%;height:auto;width:100%;">

**Figure 1.** An overview of the Darwin Core Conceptual Model. Boxes represent classes and lines represent relationships between classes.

### 2.1 Event and Event hierarchies (non-normative)

In Darwin Core, an _Event_ is an action, a process, or a set of circumstances occurring at some place during some interval of time. Figure 2 illustrates the basic types of _Events_ in the DwC-CM.

<img src="event.png" alt="Event Conceptual Model"
  style="max-width:100%;height:auto;width:65%;">

**Figure 2.** Details of the fundamental relationships of _Events_, of which there are four basic types – _Occurrences_, _Organism Interactions_, _Surveys_, and generic _Events_. Material gathering is considered here as a generic _Event_.

#### Description

- An _Event_ is expected to include properties that document its nature (e.g., material gathering, observation, device deployment, expedition, etc.) and that document the time interval it spanned.

- Special types of _Events_ (_Occurrences_, _Organism Interactions_, and _Surveys_) have distinct special characteristics in addition to those that cover their _Event_ nature.

- _Events_ must happen at some _Location_, even if that _Location_ is not known or not shared. Many distinct _Events_ can happen at the same _Location_.

- _Events_ may be conducted by _Agents_ (e.g., people, organizations, groups, devices, software, etc.). Many distinct _Events_ can be conducted by the same _Agent_. _Agents_ may have many other distinct roles (e.g., funded, observed, archived, etc.) in relation to _Events_ that are not explicitly defined here (i.e., not shown in Figure 2).

- _Events_ can be nested in hierarchies. An _Event_ hierarchy is structured on the premise that one _Event_ (a child) is contained entirely within another _Event_ (its parent), both spatially and temporally, and with some dependent connection. An _Event_ can be the parent for many distinct _Events_, but it can have only one parent _Event_. An example of an _Event_ hierarchy is a project (an _Event_) in which several camera trap deployments (_Events_) were made, each of which resulted in series of _Media Entity_ captures (_Events_), some of which provided evidence for one or more _Occurrences_ (_Events_).

#### Simplifications

Figure 2 represents a small subset of the DwC-CM, focusing only on the fundamental aspects of _Events_. _Events_ can be related to many other classes in the DwC-CM. Those relationships are covered in further thematic sections below.

Connections to _Event_ from _Occurrence_, _Organism Interaction_, and _Survey_ must not be interpreted to mean that a single _Event_ can be a combination of those three classes. It only means that those three classes have _Event_ properties in addition to their own distinct properties.

#### Implementation notes

In theory, each distinct action, process, or set of circumstances occurring at some place during some interval of time is a distinct _Event_. In practice, it may be beneficial to allow a single _Event_ to provide the spatio-temporal context for multiple activities simultaneously. For example, an _Organism Interaction_ most often happens at the same place and time as each _Occurrence_ it is related to. The _Organisms_ involved in the interaction may also have been gathered at the same time. For all of these activities, the spatio-temporal information is the same. Rather than require the creation of five _Event_ instances for the same place and time, a single _Event_ could be created and referred to by the _Organism Interaction_, by both _Occurrences_, and by both the _Material Entities_ that were gathered. Care must be taken in this implementation choice to allow the option to designate an _Event_ as multi-faceted (e.g., dwc:eventCategory `context`).

Depending on the intended use of _Event_ data, it may simplify data sharing models to subsume _Location_ information within _Events_.

### 2.2 Survey (non-normative)

In Darwin Core, a _Survey_ refers to an _Event_ that is a biotic survey or inventory, which, with sufficiently detailed information, can support not only evidence of presence of _Organisms_ but also absences of detection and estimations of abundance. Figure 3 illustrates the part of the DwC-CM most closely related to _Surveys_.

<img src="survey.png" alt="Survey Conceptual Model"
  style="max-width:100%;height:auto;width:65%;">

**Figure 3.** Details of the fundamental relationships associated with _Surveys_.

#### Description

- Since a _Survey_ is a type of _Event_, it happens at a _Location_, can be conducted by an _Agent_, and can participate in an _Event_ hierarchy, all as described in the _Event_ section. The _Event_ hierarchy relationships in the diagram are labeled with "happened during".

- Complex structured _Surveys_ can be expressed through an _Event_ hierarchy. For example, a regional monitoring program (_Survey_) could consist of multiple repeated _Surveys_ with the same or distinct _Protocols_ conducted by different groups of people (_Agents_) with distinct devices (_Agents_) at specific sites (_Locations_).

- Being a special type of _Event_, a _Survey_ has special characteristics in addition to those due to its _Event_ nature. Many of these characteristics are defined in the [list of terms](https://eco.tdwg.org/list/) for the Humboldt Extension to Darwin Core.

- One important aspect of _Surveys_ is that they often adhere to documented _Protocols_, where a _Protocol_ is a method used during an action. A _Survey_ may follow many different kinds of _Protocols_, including protocols for sampling and sampling effort (time spent, area covered, distance travelled, participants involved, etc).

- In conjunction with _Protocols_, a _Survey_ can be limited to specific _Survey Targets_. A _Survey Target_ is intended to declare what was being sought, either through _a priori_ intention or through _post facto_ filtering.

- The results of a _Survey_ are expressed in the _Occurrences_ it reports. Those _Occurrences_ may be incidental ("bycatch") or they might match the criteria in a _Survey Target_.

- _Survey Targets_ can be defined based on any combination of taxa, environmental conditions, organismal traits, etc. With sufficient supporting information, such as _Occurrences_ accompanied by organism quantities, and whether reporting for the target was complete, a _Survey_ has the potential to support inference of absence of detection, estimations of abundance, and statistical analyses of change over time.

#### Simplifications

Figure 3 is a small subset of the DwC-CM focusing on _Surveys_. Additional relationships such as _Media Entities_ recorded, _Material Entities_ gathered, and _Identifications_ of _Organisms_, among others, are omitted here. Those relationships are covered in further thematic sections below.

### 2.3 Occurrence, Organism, and OrganismInteraction (non-normative)

In Darwin Core, the _Occurrence_ class has had a long history of evolving meaning. It originated from the need to capture information about organisms in nature along with the evidence gathered (observations and specimens) to support the use of that information. The original definition of the term, "The category of information pertaining to evidence of an occurrence in nature, in a collection, or in a dataset (specimen, observation, etc.)", betrayed its semantic ambiguity. With the addition of _Material Sample_ in 2013 and _Organism_ in 2014, the semantics of Darwin Core became more clearly defined. In 2023, the introduction of _Material Entity_ gave _Occurrence_ its modern definition: "A dwc:Event that establishes the state of a dwc:Organism at a particular place and time." The "state" of a dwc:Organism covered by the dwc:Occurrence class consists of attributes of a dwc:Organism that can differ between dwc:Occurrences, such as dwc:lifeStage, dwc:sex, dwc:reproductiveCondition, dwc:behavior, weight, color, etc.

An _Organism_ is defined in Darwin Core as "A particular organism or defined group of organisms considered to be taxonomically homogeneous." _Organisms_ manifest both permanent and ephemeral characteristics. For example, the date a mammal was born, and the identity of its mother will never change, though its life stage and reproductive condition can. An _Occurrence_ can capture the ephemeral state of a particular _Organism_ at a place and time or posit that there was some _Organism_ there and then based on indirect evidence.

Figure 4 illustrates how the DwC-CM relates _Occurrence_, _Organism_, and _Organism Interaction_.

<img src="occurrence-organism.png" alt="Occurrence Conceptual Model"
  style="max-width:100%;height:auto;width:60%;">

**Figure 4.** Details of the fundamental relationships relating _Occurrence_ and _Organism_.

#### Description

- Since an _Occurrence_ is a type of _Event_, it happens at a _Location_, can be conducted by an _Agent_, and can participate in an _Event_ hierarchy, all as described in the _Event_ section.

- Being a special type of _Event_, an _Occurrence_ has special characteristics in addition to those due to its _Event_ nature. Specifically, an _Occurrence_ represents an _Event_ in which there was one of 1) a direct observation of an _Organism_, 2) or indirect inference that _Organism_ existed, or 3) the absence of detection of any _Organism_ of a given _Taxon_ in a particular state (e.g., exhibiting a behavior, having a particular trait, etc.) during the given time interval at the given _Location_, potentially recorded by an _Agent_.

- An _Organism_ can be present in many _Occurrences_, each time with potentially different characteristics.

- The permanent characteristics of the _Organism_ are properties of that class.

- The permanent relationships (e.g., mother of, sibling of, etc.) of _Organisms_ to other _Organisms_ are represented by the _Organism Relationship_ class.

- Non-permanent relationships between _Organisms_ can be represented by _Organism Interactions_. Note that these interactions are explicitly at the _Organism_ level, not at the _Taxon_ level. Thus, you would expect observed interaction types such as "visited" rather than habitual interactions types such as "visits". Similarly, you should not capture an interaction type such as "parasitoid of" unless that behavior was observed for that particular _Organism_, in which case a better relationship phrase might be "parasitized".

- Figure 4 shows two relationships between _Organism Interaction_ and _Occurrence_. One of these is to represent the actor or subject side of the interaction while the other is to represent the target or object side of the interaction. In practice, this would usually involve creating two _Occurrence_ records (instances) — one for each _Organism_. In the special case of an _Organism_ engaged in a self-directed behavior, only one _Occurrence_ record is needed, which can be pointed to by both the `by` and `with` relationships.

- The two _Occurrences_ participating in an _Organism Interaction_ are different things that happened at the same place and time (e.g., the behaviors of the two participating _Organism_ could easily be different). The _Organism Interaction_ is yet something else that happened at that same _Location_ and time. Though all three of these _Events_ may (but do not necessarily) share the same spatio-temporal context, the activities were distinct. For example, a hummingbird was flying (a behavior characterizing one _Occurrence_) as it "drank nectar from" (the interaction with) a flower (the other _Occurrence_). The _Organism Interaction_ did not fly, the hummingbird did. The interaction is its own _Event_ with its potentially own characteristics apart from those of the _Occurrences_.

#### Implementation notes

The implementation notes in the _Event_ section also apply to _Occurrences_ and _Organism Interactions_, namely, that in practice it may be beneficial to allow a single _Event_ to provide the spatio-temporal context for multiple activities (two _Occurrences_ and their corresponding _Organism Interaction_).

Depending on the intended use of _Occurrence_ and _Organism_ data, it may simplify data sharing models to subsume _Organism_ information within _Occurrences_.

### 2.4 Material Entity, Chronometric Age and GeologicalContext (non-normative)

In Darwin Core, a _Material Entity_ is defined as "An entity that can be identified, exists for some period of time, and consists in whole or in part of physical matter while it exists." The DwC-CM provides a framework for representing the relationships between _Material Entities_ and other classes that provide the contexts in which they are found and used, as shown in Figure 5.

<img src="material.png" alt="Material Entity Conceptual Model"
  style="max-width:100%;height:auto;width:100%;">

**Figure 5.** Details of the fundamental relationships of specimens and material samples expressed as _Material Entities_.

#### Description

- A _Material Entity_ represents physical matter that may be gathered (in whole) or sampled (in part) during an _Event_ at a specific _Location_ and time.

- A _Material Entity_ may consist of, for example, an entire _Organism_, a part of the _Organism_ (e.g., a leaf), a member of an _Organism_ that is a group (e.g., a fish in a jar), non-biological material (e.g., a rock, an ice core), some environmental material (e.g., soil), or a DNA extract.

- A _Material Entity_ may be the subject of interest while being part of, yet not separate from, a containing _Material Entity_. For example, a fossil in a rock.

- A _Material Entity_ may be processed in some way that removes a part of the original material, resulting in new _Material Entities_. For example, a skeleton removed from the full body of an _Organism_. This can be expressed using the “derived from” relationship from the extracted _Material Entity_ to the source _Material Entity_. When a _Material Entity_ is derived from another _Material Entity_, the two parts become distinct from each other and distinct from the original _Material Entity_. The DwC-CM does not take a stance on the generation of new _Material Entity_ instances other than that the derived and derived-from _Material Entities_ must both have instances.

- An _Identification_ may be based on evidence in the form of a _Material Entity_. The gathering context (_Event_) of that _Material Entity_ may in turn provide evidence of an _Occurrence_.

- The context during the gathering _Event_ for a _Material Entity_ may provide evidence of a remote (in time or place) _Occurrence_. The _Occurrence_ might be derived from a _GeologicalContext_ at the gathering _Location_, or from a _Chronometric Age_ determination (e.g., radiocarbon dating) based either on the _Material Entity_ itself or based on a datable associated _Material Entity_ or context.

#### Simplifications

In DwC-CM, the Darwin Core _Material Sample_ class is omitted in favor of _Material Entity_ because the narrower scope of _Material Sample_ is of little practical use. A _Material Sample_ is simply a _Material Entity_ that was derived from another _Material Entity_ whether explicitly or not.

### 2.5 Identification (non-normative)

In Darwin Core, an _Identification_ is defined as "A classification of a resource according to a classification scheme." For Organisms, this means, "A taxonomic determination (i.e., the assignment of a dwc:Taxon to a dwc:Organism)". Figure 6 illustrates how DwC-CM relates _Identification_ to other classes.

<img src="identification.png" alt="Identification Conceptual Model"
  style="max-width:100%;height:auto;width:90%;">

**Figure 6.** Details of the fundamental relationships between _Identification_ and other classes.

#### Description

- An _Identification_ expresses an opinion by an _Agent_ (human or otherwise) that an _Organism_ or other _Material Entity_ (whether observed or inferred) was a member of a class within a classification scheme. _Organism_ example: an _Identification_ registers an opinion that an _Organism_ is a member of the set of all _Organisms_ that make up a _Taxon_, ideally based on verifiable evidence. Non-_Organism_ _Material Entity_ example: an _Identification_ registers an opinion that a mineral (_Material Entity_) has the characteristics that qualify it to be given a specific mineral name according to a classification scheme.

- A _Taxon_ can occupy a rank in a hierarchical classification system.

- There can be multiple _Identifications_ for a single _Organism_ or other _Material Entity_, including historical ones, accepted ones, and differing opinions, each according to an _Agent_.

- An _Agent_ can make an _Identification_ based on an observation of an _Occurrence_ of an _Organism_ without verifiable evidence.

- An _Agent_ can be responsible for making many _Identifications_.

- In addition to _Identifications_ based solely on observations, there can be _Identifications_ based on several other kinds of evidence:
  - the inspection or processing of a _Media Entity_ of an _Occurrence_ by an _Agent_,
  - the inspection or processing of a _Material Entity_ by an _Agent_,
  - the inspection or processing of a _Media Entity_ of a _Material Entity_ by an _Agent_, or
  - a _Nucleotide Analysis_ that detects a _Nucleotide Sequence_ or confirms the presence of evidence of an _Organism_ representing a _Taxon_. This may subsequently be used to infer an _Occurrence_ (see the _NucleotideAnalysis, NucleotideSequence and MolecularProtocol_ section).

#### Simplifications

Figure 6 shows a single arrow from _Identification_ to the group of distinct classes that it might be based on. The arrow signifies that each of those targets is possible, not that they all must contribute to a given _Identification_. Indeed, a given _Identification_ must be based on only one of those classes, though multiple _Identifications_ based on distinct classes might yield the same _Taxon_ determination.

#### Implementation notes

Depending on the intended context of _Identification_ and _Taxon_ data, it may simplify data sharing models to subsume _Taxon_ information within _Identifications_.

### 2.6 NucleotideAnalysis, NucleotideSequence and MolecularProtocol (non-normative)

The DwC-CM provides a framework for representing _Nucleotide Analyses_, accommodating:

1. Metabarcoding and metagenomic techniques for detecting taxa in sampled _Material Entities_.
2. Targeted DNA-based assays (e.g., qPCR) to confirm the presence or absence of specific target _Taxa_.
3. Integration of sequence-based (barcoding) and non-sequence-based _Identifications_ derived from the same _Material Entity_.

These cases are represented within the model as depicted in Figure 7.

<img src="nucleotide.png" alt="Nucleotide Conceptual Model"
  style="max-width:100%;height:auto;width:100%;">

**Figure 7.** Details of the fundamental relationships associated with _Nucleotide Analyses_.

#### Description

- A _Nucleotide Analysis_ of a _Material Entity_ follows a _Molecular Protocol_ that records the procedures used (e.g., primers, target regions).

- The _Material Entity_ is linked to the originating _Event_, documenting when, where, and by whom it was gathered, along with any additional context.

- A _Nucleotide Analysis_ may produce one or more _Nucleotide Sequences_, or may only confirm the presence or absence of the _Molecular Protocol_ target.

- The _Material Entity_, _Nucleotide Analysis_, and _Nucleotide Sequence_ provide evidence for one or more _Identifications_ based on:
  - the _Material Entity_ alone (e.g., a human _Agent_ identifying an _Organism_),
  - a _Nucleotide Analysis_ detecting or confirming the presence of one or more target _Taxa_, or
  - comparisons of detected _Nucleotide Sequences_ against a reference catalogue (potentially yielding many _Identifications_).

- The resulting body of evidence may be used to infer the _Occurrence_ of an _Organism_ in the sampled _Material Entity_ — whether a taxon-specific detection (e.g., qPCR) or from sequenced genomic reads or barcode genes that are identified from matching with a DNA reference database (e.g., barcoding, metabarcoding, and metagenomics).

#### Simplifications

_Agents_ (e.g., people) responsible for activities are omitted here, but can be associated with the relevant classes (see the _Agent_ section).

A _Material Entity_ may be either a defined `part of` or `derived from` another _Material Entity_, such as a tissue extract (see the _Material Entity_ section).

An _Event_ representing the gathering of the _Material Entity_ may belong to a larger _Survey_ or to a hierarchy of nested _Events_ (see the _Event_ and _Survey_ sections).

#### Implementation notes

Inferred _Occurrences_ should be subject to data quality control or confidence measures, since several factors may affect detection results. The DwC-CM does not prescribe how such measures should be implemented.

In some cases, the analyzed _Material Entity_ is not preserved or documented. If so, implementers may link the _Nucleotide Analysis_ directly to the relevant sampling _Event_ to provide the spatio-temporal context and allow _Occurrence_ inferences to be made.

### 2.7 Agents (non-normative)

In Darwin Core, an _Agent_ is defined as "A resource that acts or has the power to act" with the following usage comment:

```
A person, group, organization, machine, software or other entity that can act. Membership in the dcterms:Agent class is determined by the capacity to act, even if not doing so in a specific context. To act: To participate in an event or process by contributing through behavior, operation, or an effect resulting from active participation — regardless of whether that contribution is intentional, volitional, or conscious.
```

_Agents_ have the capacity to act in relation to any other class as well as to be related to each other. Figure 8 shows a few examples that illustrate the ways in which _Agents_ can be related to other classes in the DwC-CM.

<img src="agent.png" alt="Agent Conceptual Model"
  style="max-width:100%;height:auto;width:65%;">

**Figure 8.** Details of the ways in which _Agents_ can be related to other classes. The labels on the relationships all represent well-established _Agent_ relationships, but constitute only a few of the many relationships one might want to establish.

#### Description

- An _Agent_ is distinguished by its capacity to act, but is not otherwise limited in its nature.

- An _Agent_ may be related to another _Agent_. For example, a person (an _Agent_) might belong to a crew (an _Agent_ that is a group of people), deploy a camera trap (an _Agent_ that is a device), or be associated with an institution (an _Agent_) that owns the device.

- In addition to relationships between _Agents_, the DwC-CM supports any relationship that involves an _Agent_ acting in or otherwise fulfilling a role with respect to an instance of another class. For example, a _Material Entity_ can be identified by an _Agent_. This relationship might be enabled by a dedicated "identifiedByID" property for the _Material Entity_. This is a convenient way to capture well-established _Agent_ roles.

#### Simplifications

There are myriad ways in which an _Agent_ might be related to other classes. This section shows only a few examples without prescribing the details of how those relationships should be implemented.

#### Implementation notes

In practice, classes may be directly related to _Agents_ through dedicated properties that expect to be populated with an _Agent_ identifier. Examples from Darwin Core of this way of connecting classes with _Agents_ include terms such as identifiedByID and recordedByID along with many others from the dwciri: namespace.

In addition to direct relationships through properties of classes as described in the previous paragraph, any relationship involving an _Agent_ for which there is no dedicated property on the target class could be constructed through the implementation of an _Agent Role_, which would join an instance of _Agent_ to an instance of another class and declare the relationship type.

### 2.8 Media (non-normative)

In Darwin Core, _Media Entities_ are things that are recorded (e.g, instances of the Dublin Core type vocabulary terms _Still Image_, _Moving Image_, _Sound_, and _Text_). The DwC-CM provides a framework for representing the relationships of _Media Entities_ to other classes as shown in Figure 9.

<img src="media.png" alt="Media Conceptual Model"
  style="max-width:100%;height:auto;width:60%;">

**Figure 9.** Details of the fundamental relationships associated with _Media Entity_.

#### Description

- A _Media Entity_ can be about a wide variety of subject matter, including _Agents_, _Events_, _Material Entities,_ and _Occurrences_.

- One _Media Entity_ instance can have many subjects and each subject can be in many _Media Entity_ instances.

- A _Media Entity_ can be used as the basis for making an _Identification_ of an _Organism_ either via an _Occurrence_ (e.g., a sound recording of a bird) or via a _Material Entity_ (e.g., an image of a specimen).

- A _Material Entity_ might be created from _Media Entity_ (e.g., 3D printed model of a skull from a 3D digital model).

- In some cases, relationships need to be made to specific "regions of interest" within a _Media Entity_ (e.g., a segment of a video or sound track or a region within an image). A region of interest can be treated as a _Media Entity_ instance that is part of its parent _Media Entity_ instance.

#### Simplifications

This section does not illustrate all anticipated uses of _Media Entities_. For example, relationships of _Media Entity_ to _Chronometric Age_, _Geological Context_, and _Organism Interaction_ are not shown.

## 3 Example implementations (non-normative)

- The Darwin Core Data Package Guide specifies how to create Frictionless Data packages using Darwin Core terms. A Darwin Core Data Package (DwC-DP) consists of schemas for describing tabular data, such as CSV files. DwC-DP is considered a reference implementation of the DwC-CM.
- The openDS format provides a JSON Schema for modelling extended information about digital specimens and implements the relevant parts of the DwC-CM.

## 4 Acknowledgements (non-normative)

The DwC-CM is a synthesis of years of discussion and contributions to Biodiversity Information Standards (TDWG) Interest Groups. The synthesis arose during research towards "Diversifying the GBIF Data Model” within the Global Biodiversity Information Facility work program, which brought additional perspectives from the GBIF community and included a series of iterative approaches to refine and validate both a conceptual model and a data publishing model through a wide variety of biodiversity data use cases. Data structures of many operational systems, including all commonly used open source collection management systems, have been studied and have influenced this model.
