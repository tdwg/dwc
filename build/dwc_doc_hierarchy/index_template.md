# {document_title}

Title
: {document_title}

Date version issued
: {ratification_date}

Date created
: {created_date}

Part of TDWG Standard
: <{standard_iri}>

This version
: <{current_iri}{ratification_date}>

Latest version
: <{current_iri}>

{previous_version_slot}

Abstract
: {abstract}

Contributors
: {contributors}

Creator
: {creator}

Bibliographic citation
: {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

<a id="introduction">
## 1 Introduction (non-normative)

### 1.1 Status of the content of this document

Section 3 of this document is normative, serving as official guidelines in application of the Humboldt Extension. The other sections are non-normative and designed to help improve overall understanding in application and interpretation of the Extension.

### 1.2 RFC 2119 keywords
---------------------

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14) [[RFC2119]](https://datatracker.ietf.org/doc/html/rfc2119) [[RFC8174]](https://datatracker.ietf.org/doc/html/rfc8174) when, and only when, they are written in capitals (as shown here).

## 1.3 Namespaces and terminology

The namespace `eco:` abbreviates terms minted for the purpose of supporting ecological inventories ([http://rs.tdwg.org/eco/terms/](http://rs.tdwg.org/eco/terms/)). `dwc:` abbreviates terms from the main Darwin Core vocabulary namespace ([http://rs.tdwg.org/dwc/terms/](http://rs.tdwg.org/dwc/terms/)). All of these terms are part of the Darwin Core standard.

Text in `code markup` represents namespace prefixes, qualified names (QNames) for terms, or literal values. The word "organism" is used colloquially and is not used in the technical sense of the `dwc:Organism` class, unless specifically presented as "`dwc:Organism`." The word "Event" is used in the technical sense of the `dwc:Event` class. An `eco:Survey` is a type of `dwc:Event` intentionally designed to characterize a defined biotic target or domain so that the resulting `dwc:Occurrence`s can be interpreted collectively to support ecological and monitoring inference.

### 1.4 Intended audience and use for this document

The information in this document is targeted at data providers, data aggregators, and data consumers. *Data providers* are the individuals responsible for mapping ecological inventory data either into an Event-based [Darwin Core Archive](https://ipt.gbif.org/manual/en/ipt/latest/dwca-guide) format that includes the Humboldt Extension or into Darwin Core Data Packages with `eco:Survey` records. *Data aggregators* and *data consumers* can use this document to better understand the data shared by data providers, specifically with respect to the **relationships between hierarchical `dwc:Event` levels** and **when it is or is not appropriate to make inferences** about attributes such as abundance or absence of detection.

<a id="rationale">
## 2 Rationale (non-normative)

Ecological inventories in the context of Darwin Core can be considered as types of [`dwc:Event`s](http://rs.tdwg.org/dwc/terms/Event) --- they are actions that occur at specific locations over defined periods of time. Many terms originating in the Humboldt Extension are properties of `eco:Survey`; other terms describe resources related to surveys, such as `eco:SurveyTarget`.

There are many types of ecological inventory, ranging from singular observations of individual taxa (1 event:1 observation; Example 1 in <a href="#fig1">Figure 1</a>) to highly structured and deeply nested observations within other observations (e.g., 1 event:2 sub-events, each sub-event:2 sub-sub-events; Example 4 in <a href="#fig1">Figure 1</a>). The need for guidance on **how to capture the details of nested observations** (`dwc:Event` hierarchies) is the rationale for this document. Nested sampling designs can be translated into a relational database schema of parent-child `dwc:Event` relationships (a parent event with one or more child sub-events; <a href="#fig1">Figure 1</a>). This document describes the circumstances under which specific properties of parent and child `dwc:Event`s SHOULD be populated based on the parent-child relationship.

When hierarchical surveys are represented using Darwin Core Archive, the representation does not follow a normalized database structure. Whilst a (relational) database would store information in multiple tables to avoid repetition of key information, datasets shared using the Darwin Core archive format and the Humboldt Extension instead use a "flattened" structure. In order to share inventory data such that no information is lost and no information is incorrectly inferred, one SHOULD **report all information at all applicable levels**. The rules for applicability and how to populate terms at parent and child levels in the `dwc:Event` hierarchy are captured in section *<a href="#guiding">3.2 Guiding principles</a>* and in section *<a href="#implementation">3.3 Implementation principles</a>*.

Darwin Core Data Package provides a relational representation in which `eco:Survey`, its contextual `dwc:Event`, survey targets, and related resources can be represented in separate related tables.

<a id="fig1">
![Illustration of four examples of nested `dwc:Event`s](fig1.png)

**Figure 1.** Visual representation of an ecological inventory illustrating four examples of occurrence data associated with `dwc:Event`s nested within parent `dwc:Event`s, at varying levels of complexity ranging from low (Example 1) to high (Example 4).

<a id="usage">
## 3 Usage guidelines (normative)

### 3.1 Definitions

**Inventory dataset** - An inventory (dataset) consists of one or more `dwc:Event`s that MAY be related to each other in a hierarchy of parent and child `dwc:Event`s. This is not new to the capabilities or intentions of Darwin Core.

**Inventory hierarchy** - A set of related `dwc:Event`s, in which a narrower `dwc:Event` (child) points to the related broader `dwc:Event` (parent) via the child's `dwc:parentEventID`. A higher-level `dwc:Event` might contain information about the inventory design that applies to all of its children.

**Parent `dwc:Event`** - A parent `dwc:Event` is any `dwc:Event` whose `dwc:eventID` is a `dwc:parentEventID` for at least one other `dwc:Event` (e.g. EVENT_01 in Figure 2).

**Child `dwc:Event`** - A child `dwc:Event` is any `dwc:Event` whose `dwc:parentEventID` is populated with the `dwc:eventID` of another `dwc:Event` (e.g. EVENT_02 or EVENT_03 in Figure 2).

![Visual representation of parent/child relationship](fig2.png)

**Figure 2.** Visual representation of an inventory hierarchy illustrating parent-child `dwc:Event` relations. The higher-level (parent) `dwc:Event`, EVENT_01, may include general information about the inventory design. Species occurrences are captured for two child `dwc:Event`s (EVENT_02 and EVENT_03).

<a id="guiding">
## 3.2 Guiding principles

<a id="coverage">
### 3.2.1 Principle of spatiotemporal coverage

**A parent `dwc:Event` MUST encompass its child `dwc:Event`s spatially <u>and</u> temporally.** Specifically, the spatial extent and temporal interval of a parent `dwc:Event` MUST contain the spatial extents and temporal intervals of all of its children. For example, if child `dwc:Event`s took place in various locations throughout, and only within, Burundi, then the spatial extent of the parent `dwc:Event` would be Burundi. Similarly, if the child `dwc:Event`s took place periodically throughout the year 2019, the temporal interval of the parent `dwc:Event` would begin when the earliest child `dwc:Event` began and end when the latest child `dwc:Event` ended.

<a id="applicability">
### 3.2.2 Principle of applicability

**Terms that are properties of an `eco:Survey` SHOULD be populated explicitly at every level in the `dwc:Event` hierarchy to which they *directly* apply.** The value of a property for any `dwc:Event` SHOULD be populated for the Event itself rather than merely summarized in a higher-level `dwc:Event`. For example, a child `eco:Survey` (**C**) with multiple `dwc:Occurrence`s, some of which resulted in voucher specimens, SHOULD possess a value of `true` for the term `eco:hasVouchers`. The data user SHOULD NOT be expected to look at the `eco:hasVouchers` term for the parent `eco:Survey` (**P**) of **C** in order to find the value.

If a term genuinely applies at multiple levels of a `dwc:Event` hierarchy, values SHOULD be reported explicitly at *each* of those levels. The values for child `dwc:Event`s might be the same as their parental values, or child `dwc:Event`s might possess their own more specific values. This principle allows child `dwc:Event`s to be "autonomous" to the greatest degree possible, and avoids uncertainty about where to look for the values of properties of any given `dwc:Event`.

<a id="non-derivation">
### 3.2.3 Principle of non-derivation

As a complement to the *Principle of applicability*, **properties of an `eco:Survey` SHOULD NOT be populated for a parent `eco:Survey` by deriving or summarizing information from child `dwc:Event`s**. If a property does not directly apply to a given level of `dwc:Event` (i.e., it is not an actual property of that `dwc:Event`), it SHOULD NOT be populated with a value. For example, if the parent `eco:Survey` **P** from the example in section *<a href="#applicability">3.2.2</a>* above is not directly linked to `dwc:Occurrence`s, then the term `eco:hasVouchers` does not apply at that `eco:Survey` level and SHOULD be left unpopulated. Stated generally, data providers SHOULD NOT construct a value for a parent `dwc:Event` from values at the level of child `dwc:Event`s.

In some cases, including the example above, it would not be valid to derive or summarize information from child `dwc:Event`s to populate a parent `dwc:Event`. Suppose parent `dwc:Event` **P** has two child `dwc:Event`s, one with `eco:hasVouchers` `true` and one with `eco:hasVouchers` `false`. The value of `eco:hasVouchers` for **P** cannot be derived or summarized from its children, as it is neither `true` nor `false` for all of them (the only two values consistent with the recommended controlled vocabulary for the term). It would be neither desirable nor reliable to use the values of the child `dwc:Event`s to infer a value for the parent `dwc:Event`. The *Principle of inference* (below) provides a further example, where *scope* terms of parent `dwc:Event`s MUST NOT be populated by summarizing from lower levels (either through the scope values of child `dwc:Event`s or, for example, through taxa detected in child `dwc:Event`s).

There are terms which could theoretically be populated for a parent `dwc:Event` from the primary data already provided for that `dwc:Event`\'s children (e.g., `eco:materialSampleTypes`). Populating the parent term could facilitate the discovery of higher-level `dwc:Event`s among whose children there is a particular value of a property (e.g., a search through the highest-level `dwc:Event`s in datasets to find datasets in which there are particular `eco:materialSampleTypes`). However, providing such summary values is specifically NOT RECOMMENDED. Doing so a\) adds no information to the dataset (the summary information is already available by inspecting the primary data in the `dwc:Event`s in the dataset), b\) adds an extra burden of summary upon the data provider, and c\) is susceptible to errors (ambiguities, inconsistencies, incompleteness) when trying to construct secondary summary information for higher-level Events.

<a id="inference">
### 3.2.4 Principle of inference

**Certain terms in the Humboldt Extension support inferences.** Examples of terms that help data users to determine whether or not inferences can be made include those describing the *scope* of the inventory, such as `eco:targetTaxonomicScope` and `eco:excludedTaxonomicScope`, and terms describing *completeness*, such as `eco:taxonCompletenessReported`, `eco:taxonCompletenessProtocols` and `eco:isTaxonomicScopeFullyReported`. The values of these terms in an `eco:Survey` have implications for the interpretation of all of that `eco:Survey`'s child `dwc:Event`s. These terms MUST be populated for the highest-level `eco:Survey` to which they apply and for every descendant `eco:Survey` in its `dwc:Event` hierarchy to which the same scope or completeness statement applies.

**The *scope* terms of an `eco:Survey` MUST be populated whenever the scope was in effect**. Having this information in an `eco:Survey` is the only way **to be able to infer absences of detection** within that `eco:Survey`, whenever the `dwc:Occurrence`s linked to that `eco:Survey` do not explicitly state zero counts or when there are no `dwc:Occurrence` records for a given taxon that fell within the taxonomic scope (the combination of `eco:targetTaxonomicScope` and `eco:excludedTaxonomicScope`). The ability to "implicitly" support inferences about undetected `dwc:Taxon` targets (and other organismal targets) was a high priority objective in the design and structure of the Humboldt Extension. By "implicitly support inferences" we mean that a `dwc:organismQuantity` of zero individuals within a particular scope does not need to be provided explicitly as a separate `dwc:Occurrence` record, for an `eco:Survey` that does declare an encompassing scope and where all the taxa/targets that *were* detected were fully reported. Instead, those zero counts can be reconstituted by data users based on the data contained in other terms. When the target taxonomic scope (the combination of `eco:targetTaxonomicScope` and `eco:excludedTaxonomicScope`) is determined in advance of inventory data collection, and `eco:isTaxonomicScopeFullyReported` = `true`, then any `dwc:Taxon` that falls within the taxonomic scope but is not reported in the `dwc:Occurrence`s of any child `dwc:Event`s **can be inferred to have `dwc:Occurrence`s with a `dwc:organismQuantity` of zero** (i.e., undetected `dwc:Organism`s of a given `dwc:Taxon`).

These inferred zero counts, in combination with information about sampling effort (i.e., `eco:samplingEffortProtocol`, `eco:samplingEffortValue` and `eco:samplingEffortUnit`), can then be used to estimate the likelihood that a count of zero organisms represents a true absence of `dwc:Organism`s belonging to a `dwc:Taxon`. However, if `eco:taxonCompletenessReported` = `reported incomplete` and/or `eco:isTaxonomicScopeFullyReported` = `false` for an `eco:Survey`, then future users SHOULD NOT make assumptions about absences.

Data providers **MUST NOT retrospectively infer and populate `eco:targetTaxonomicScope`, or other *scope* terms**, for inclusion in a dataset shared with the Humboldt Extension. This is a further example of the *<a href="#non-derivation">Principle of non-derivation</a>* (*3.2.3*). Likewise, data users SHOULD NOT assume or reconstruct a scope that was not explicitly given by the data provider. There are at least two reasons for this: (1) Artificial construction of scope: retrospective inference of target scope by a data provider by aggregating information across all child `dwc:Event`s may result in a reported scope that is narrower than the actual intended scope of the inventory. (2) Artificial broadening of scope: it is possible that the inferred scope can be described in multiple ways. For example, the scope of a list of species within a single genus could be described as the genus, as the family containing that genus, or as an even broader taxonomic concept. Thus, unless the true taxonomic scope is a known variable in the inventory protocol, then a presumed scope may be too broad or too narrow, leading to errors when inferring counts of zero.

<a id="implementation">
## 3.3 Implementation principles

1.  A Darwin Core-based inventory dataset MUST consist of at least one `dwc:Event` record.

2.  Each `dwc:Event` in an inventory dataset MUST have a non-empty value for `dwc:eventID` that is unique within the dataset. More benefits are realizable if the `dwc:eventID`s are also globally unique.

3.  Information associated with an `eco:Survey` MUST be explicitly related to the corresponding `dwc:Event`. In a Darwin Core Archive using the Humboldt Extension, the association MUST be made by using the same `dwc:eventID` in the Event and extension records. In a Darwin Core Data Package, the association MUST be made using the relationship defined by the applicable table schemas. It is permissible to have `dwc:Event` records without associated Humboldt Extension records.

4.  An inventory hierarchy MUST be realized by explicitly relating each child `dwc:Event` to a parent `dwc:Event` through the child `dwc:Event`'s `dwc:parentEventID`.

5.  Data providers SHOULD follow [Darwin Core principle 4](../simple/#5-are-there-any-rules-normative), which is to fill the values of as many terms as possible, subject to the *Principle of applicability* and the *Principle of non-derivation* (sections *<a href="#applicability">3.2.2</a>* and *<a href="#non-derivation">3.2.3</a>*, respectively).

6.  A child `dwc:Event` MUST NOT be assumed to implicitly "inherit" the value of any property of any of its parent `dwc:Event`s; rather, the value SHOULD be provided explicitly as discussed in section *<a href="#applicability">3.2.2 Principle of applicability</a>*.

7.  A parent `dwc:Event` property SHOULD NOT be populated by deriving or summarizing information from child `dwc:Event`s; rather, the value SHOULD be provided explicitly if appropriate to the nature and level of the `dwc:Event`, as discussed in section *<a href="#non-derivation">3.2.3 Principle of non-derivation</a>*.

<a id="examples">
## 4 Examples (non-normative)

![Tables illustrating implementation principles](fig3.png)

**Figure 3.** Example illustrating the [Implementation principles](#implementation). Numbering of colored rectangles indicates the relevant principle; lines, arrows or rectangles in the same color indicate that the cells, columns or records are affected by the principle. *Notolepis coatsi* and *Cranchiidae* are not within the reported `eco:targetTaxonomicScope`. Principle 1 - an inventory dataset must have at least one `dwc:Event` record; here, 3 records can be identified. Principle 2 - each `dwc:Event` record must have a unique `dwc:eventID`. Principle 3 - in the Darwin Core Archive representation illustrated here, Humboldt Extension records must be linked to the core `dwc:Event`s via shared `dwc:eventID`s. Principle 4 - every child `dwc:Event` must be related to its parent `dwc:Event` through a `dwc:parentEventID`. Principle 5 - term values for `dwc:Event`s should be populated whenever possible; in the figure all records follow Darwin Core principle 4, subject to the *<a href="#applicability">Principle of applicability</a>* and the *<a href="#non-derivation">Principle of non-derivation</a>*. Principle 6 - terms for child `dwc:Event`s must be explicitly populated rather than "inheriting" values from their parent `dwc:Event`s. Principle 7 - terms for parent `dwc:Event`s should be populated whenever relevant, but not be derived or summarized from their child `dwc:Event`s.
