---
layout: default
title: Darwin Core Maintenance
toc: true
---

# Darwin Core Maintenance

## Introduction

This page is a reference for maintainers of the Darwin Core standard. It describes the recurring public-review and release cycle used by the Darwin Core Maintenance Group, identifies the principal tasks that should be completed at each stage, and the principles that guide the content of standard artifacts.

## Maintenance principles and process conventions

The Maintenance Group uses the following principles to keep changes to Darwin Core open, traceable, stable, and consistent with TDWG standards processes. These principles supplement, rather than replace, the applicable TDWG standards and vocabulary-maintenance specifications.

### Follow TDWG maintenance requirements

Changes to Darwin Core vocabulary terms are maintained in accordance with the [TDWG Vocabulary Maintenance Specification](https://github.com/tdwg/vocab/blob/master/vms/maintenance-specification.md). Where other TDWG requirements apply to Documents, schemas, or other parts of the standard, those requirements also govern the corresponding maintenance activity.

Darwin Core-specific conventions described on this page are intended to make those requirements operational for the Maintenance Group. They must not be interpreted as overriding TDWG-wide specifications.

### Keep maintenance open and traceable

Substantive proposals should be represented by GitHub issues so that the motivation, evidence, alternatives, discussion, and resolution remain publicly traceable.

Public-review milestones define the set of issues under consideration in a particular review cycle. Issue labels and milestone assignments should therefore be kept current enough that the state of a proposal can be understood without reconstructing it from meeting discussions.

Maintenance Group meetings are public, and meeting notes should remain publicly accessible. Important decisions made in meetings should also be recorded in the relevant issue or other durable maintenance record so that the decision is discoverable in the context of the proposal to which it applies.

### Mature proposals before public review

A public review should contain proposals that are sufficiently mature for meaningful community evaluation. Before assigning an issue to a public-review milestone, the Maintenance Group should seek enough information to understand:

- the problem or use case being addressed
- the proposed change
- evidence of demand
- expected efficacy
- effects on stability and existing implementations
- dependencies on other terms, documents, schemas, or artifacts

Exploratory questions and incomplete proposals can remain open, but they should not be added to a public-review milestone merely to force resolution during the review.

### Use scheduled public-review phases

Darwin Core uses scheduled maintenance cycles with distinct phases for issue maturation, active public commentary, consensus seeking, release-candidate preparation, ratification, and publication.

Substantial new scope should not normally be introduced after the active-commentary phase. After the consensus-seeking phase closes, unresolved proposals should be deferred rather than incorporated into the release candidate without adequate public review.

### Keep the issue tracker usable

Issues should be labeled and assigned to milestones consistently enough to support maintenance planning and public participation.

Before each public review, **Controversial** or **Unresolved** issues that have had no activity for at least one year should be reviewed for closure. Closing such an issue does not prevent it from being reopened or replaced by a new proposal if new evidence, implementation experience, or community interest emerges.

### Treat a release as the result of a reviewed change set

A Darwin Core release candidate should contain the changes that emerged from the corresponding public review and consensus process, together with consequential changes required to keep the standard internally consistent.

Changes that are substantive but were not part of the completed review should be deferred to a later maintenance cycle. Corrections necessary to prepare a coherent release candidate should be documented.

Ratified versions are publication records and should not be silently rewritten. Current canonical resources can advance to a new ratified version, while immutable versioned resources preserve the released state.

## Conventions for term metadata

The following conventions are intended to keep term metadata semantically clear and consistent across Darwin Core namespaces and implementations.

### Normative and non-normative information

Whether a resource is normative depends on its declared role in the Darwin Core standard. Changes to normative vocabulary or documentation must follow the maintenance process appropriate to that part of the standard.

Non-normative guides, examples, mappings, and implementation material may provide additional explanation or context, but they must not redefine or contradict the semantics of normative resources.

### Definitions and usage notes

A **definition** should state what a term means. It should be concise, implementation-independent, and sufficient to distinguish the concept from related concepts.

**Usage notes** should explain how the term is intended to be applied. They are the appropriate place for recommendations, implementation guidance, relationships to other terms, formatting advice, caveats, and other contextual information that does not belong in the definition itself.

Implementation-specific guidance should not be added to a definition merely because one current serialization or data model requires it.

### Refer to terms unambiguously

When referring to a specific term in maintenance discussions or documentation, use its namespace-qualified name, for example `dwc:eventID`, `dcterms:type`, `eco:targetTaxonomicScope`, `chrono:chronometricAge`, `dwciri:establishmentMeans`.

### Contextual usage notes in DwC-DP

DwC-DP table and field documentation may provide usage notes that are specific to the role of a term in a particular table or relationship. Such contextual notes do not need to reproduce the general term usage notes verbatim.

Contextual DwC-DP guidance may narrow the implementation context, but it must not change the meaning of the underlying Darwin Core term. For example, the usage notes for the term `dwc:occurrenceID` say:

```In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the dwc:occurrenceID globally unique.```

The contextual usage notes in Darwin Core Data Package for the field `occurrenceID` say:

```The value in this field MUST be preserved in aggregation. Recommended best practice is to use a globally unique identifier.```

### Create new terms only when needed

A new Darwin Core term should not be created merely because a convenient label is absent. A proposal should demonstrate an expressed data-sharing need and should consider whether an existing Darwin Core term or a suitable term from another maintained vocabulary already represents the required concept.

Where an existing external term has suitable semantics and stable governance, reuse or borrowing should be considered before creating a semantically duplicative Darwin Core term. For example, `dwc:agentID` is reused in Darwin Core Data Package table schemas as the underlying version of terms for `dwc:Agent`s in particular roles; `authorID` in the `BibliographicResource` table `dcterms:isVersionOf: dwc:agentID`.

### Borrowed terms

When Darwin Core includes a term maintained by another vocabulary, the authoritative namespace and term IRI remain those of the source vocabulary. Inclusion in Darwin Core does not transfer ownership of the term or authorize Darwin Core to redefine its semantics independently.

The Maintenance Group should make explicit decisions about when changes in an external vocabulary are adopted into Darwin Core products. Updated external metadata should not be treated as automatically changing a previously ratified Darwin Core release.

### Controlled vocabularies

When a term is intended to use a controlled vocabulary, the usage notes should identify the recommended vocabulary by a stable reference whenever possible. A recommendation should not imply stronger conformance than the standard intends. 

Controlled vocabulary recommendation template: 

```Recommended best practice is to use a controlled vocabulary. ```
```Recommended best practice is to use a controlled vocabulary such as RFC 5646. ```

### Lists encoded in string literals

When a term permits multiple values in a single string literal, its usage notes should state that the value is a list and identify the recommended delimiter convention. Unless a term specifies otherwise, Darwin Core list-valued string terms should follow the established convention of separating values with space, vertical bar, space (` | `). For example: `Oliver P. Pearson | Anita K. Pearson`

List formatting recommendation template: 

```Recommended best practice is to separate the values in a list with space vertical bar space (` | `).```

### Boolean values

Where a term represents a boolean value, its usage notes should refer to the applicable Darwin Core guidance for encoding boolean values rather than introducing a new local convention. Examples should use the canonical boolean forms described by that guidance.

Boolean value recommendation template: 

```Recommended best practice is to follow the TDWG Boolean Controlled Vocabulary http://rs.tdwg.org/tag/doc/boolean/.```

### Examples

Examples should illustrate plausible values of the term without adding requirements that are absent from the definition or usage notes.

Examples of literal values should be formatted so that the boundaries of each example are clear. Where several examples are given, they should be distinguishable from a single list-valued example. Examples should not be used as a substitute for a controlled vocabulary or other explicit constraint. Examples of examples (`; ` separates examples, ` | ` separates values in a list for one example):

``` `José E. Crespo`; `Oliver P. Pearson | Anita K. Pearson` ```

### IRI-value terms

An IRI-value term should be created or changed only when the corresponding property is intended to support an IRI object in an RDF or otherwise IRI-aware implementation.

Where an IRI-value term has a literal-value counterpart with the same local name, the two terms should express the same underlying semantic relationship. The distinction is the form of the value, not a different meaning.

The usage notes for the literal-value term should indicate the existence of the IRI-value equivalent where that information is useful to implementers. The usage notes for the IRI-value term should state that its value is expected to be an IRI and should direct users to the corresponding literal-value term where appropriate.

IRI equivalent template: 

```This term has an equivalent in the dwciri: namespace that allows only an IRI as a value, whereas this term allows for any string literal value.```

### RFC 2119 keywords

The uppercase keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, **MAY**, and related RFC 2119 / RFC 8174 terminology should be used only when normative force is intended in documents. They should not be used in term definitions or usage notes.

Ordinary explanatory prose should avoid uppercase requirement keywords when the statement is merely descriptive or advisory. Definitions in particular should describe meaning rather than introduce conformance requirements unless such a requirement is genuinely part of the term's semantics.

## External agreements

Where an agreement or memorandum of understanding with another standards organization governs term reuse, mappings, or maintenance responsibilities, the Maintenance Group should follow that agreement and document consequential decisions in the relevant issue or maintenance record.

The [GSC/MIxS term-mapping agreement](https://github.com/tdwg/gbwg/blob/main/dwc-mixs/MoU/MemorandumOfUnderstanding_TDWG-GSC.md) is an example of an external relationship for which the applicable mapping and maintenance responsibilities should remain explicitly documented.

## Calendar

Darwin Core uses three overlapping maintenance cycles per year. The three annual cycles begin on **1 February**, **1 June**, and **1 October**. Each cycle runs for approximately five and a half months from the first announcement through the target release date.
Each cycle follows the same sequence of relative dates, identified below by labels such as **[M0D1](#m0d1)**, **[M1D16](#m1d16)**, and **[M5D15](#m5d15)**. These labels are intended to make the checklist reusable from year to year.


| Cycle date | Meaning | Cycle 1 | Cycle 2 | Cycle 3 |
| --- | --- | --- | --- | --- |
| **[M0D1](#m0d1)** | Announce the upcoming review cycle and begin support for maturing issues | 1 February | 1 June | 1 October |
| **[M1D1](#m1d1)** | Deadline for submission of mature issues for consideration | 1 March | 1 July | 1 November |
| **[M1D15](#m1d15)** | Final milestone triage and issue review | 15 March | 15 July | 15 November |
| **[M1D16](#m1d16)** | Public review begins; active commentary phase begins | 16 March | 16 July | 16 November |
| **[M2D16](#m2d16)** | Active commentary ends; consensus-seeking phase begins | 16 April | 16 August | 16 December |
| **[M3D16](#m3d16)** | Consensus-seeking ends; Executive Committee preparation begins | 16 May | 16 September | 16 January of the following year |
| **[M4D1](#m4d1)** | Present the release candidate and review summary to the Executive Committee | 1 June | 1 October | 1 February of the following year |
| **[M5D1](#m5d1)** | Target deadline for Executive Committee ratification | 1 July | 1 November | 1 March of the following year |
| **[M5D15](#m5d15)** | Target release date | 15 July | 15 November | 15 March of the following year |

The **[M0D1](#m0d1)** announcement for one cycle coincides with **[M4D1](#m4d1)** of the preceding cycle. Where practical, the community announcement for the upcoming review should therefore be combined with the public-review summary for the cycle entering Executive Committee consideration.

## Maintenance Checklist

### M0D1 — Open the cycle {#m0d1}

- [ ] Create or confirm the GitHub milestone for the upcoming public review.
- [ ] Announce the timeline for the upcoming public review.
- [ ] Identify issues already expected to be considered in the upcoming milestone.
- [ ] Announce the **M1D1** deadline for submitting mature issues for consideration.
- [ ] Begin Maintenance Group support for contributors who need help maturing issues before the submission deadline.
- [ ] Confirm that relevant issue labels and milestone conventions are being applied consistently.

### M0D1 to M1D1 — Mature candidate issues

- [ ] Review candidate issues for clarity, scope, use cases, proposed definitions or changes, and implementation consequences.
- [ ] Help contributors separate mature proposals from questions or exploratory discussions where necessary.
- [ ] Identify dependencies between issues.
- [ ] Encourage implementation evidence, examples, and demand justification where relevant.
- [ ] Make sure proposals that would change normative artifacts identify the affected terms, documents, schemas, or other standard components.

### M1D1 — Close submissions for the upcoming review {#m1d1}

- [ ] Treat this date as the deadline for submitting mature issues for consideration in the upcoming public review.
- [ ] Finish active Maintenance Group support for incomplete proposals intended for this cycle.
- [ ] Defer proposals that are not sufficiently mature to a later cycle rather than allowing them to destabilize the review scope.

### M1D1 to M1D15 — Final milestone triage {#m1d15}

- [ ] Review all candidate issues for the upcoming public-review milestone.
- [ ] Assign mature issues to the milestone.
- [ ] Apply all appropriate labels.
- [ ] Confirm that each issue has enough information for meaningful public review.
- [ ] Identify issues that require coordinated changes across more than one artifact.
- [ ] Close **Controversial** or **Unresolved** issues that have had no activity for at least one year, where appropriate.
- [ ] Confirm the final scope of the public review.

### M1D16 — Begin public review {#m1d16}

- [ ] Announce the public review to the community.
- [ ] Publish the milestone and instructions for participation.
- [ ] Begin the active commentary phase.
- [ ] Make clear which artifacts and proposals are in scope.
- [ ] Make working drafts or previews available when they help reviewers evaluate proposals.

### M1D16 to M2D16 — Active commentary phase

- [ ] Monitor milestone issues and respond to questions.
- [ ] Encourage concrete use cases and implementation evidence.
- [ ] Revise proposals in response to review comments where appropriate.
- [ ] Record decisions and emerging consensus in the relevant issues.
- [ ] Keep issue labels and milestone assignments current.
- [ ] Identify proposals that are unlikely to reach consensus in the current cycle.

### M2D16 — Begin consensus-seeking phase {#m2d16}

- [ ] Announce the end of active commentary and the beginning of consensus seeking.
- [ ] Summarize the principal alternatives on unresolved issues.
- [ ] Ask participants to converge on implementable resolutions.
- [ ] Avoid introducing substantial new scope except where necessary to resolve issues already under review.

### M2D16 to M3D16 — Seek resolution

- [ ] Resolve wording, modeling, vocabulary, schema, and implementation questions.
- [ ] Record the final proposed resolution of each issue.
- [ ] Confirm that normative changes are reflected in the authoritative maintained inputs.
- [ ] Identify issues that cannot reach consensus and prepare to move them to the next appropriate milestone.
- [ ] Check for consequential changes required in guides, examples, schemas, navigation, or machine-readable artifacts.

### M3D16 — Close consensus seeking and freeze the review scope {#m3d16}

- [ ] End the consensus-seeking phase.
- [ ] Move unresolved issues to the next appropriate milestone.
- [ ] Confirm the set of changes proposed for ratification.
- [ ] Begin preparation of the Executive Committee release candidate.
- [ ] Avoid adding new substantive changes that were not part of the public review.

### M3D16 to M4D1 — Prepare and audit the release candidate

#### Audit the public-review milestone

- [ ] Review every issue in the milestone.
- [ ] Confirm that every agreed change has been made.
- [ ] Confirm that rejected, deferred, or unresolved proposals have not been incorporated accidentally.
- [ ] Check consequential documentation, navigation, examples, schemas, and cross-references.
- [ ] Confirm that the public-review milestone accurately represents the release scope.

#### Prepare authoritative metadata

See the [`rs.tdwg.org` vocabulary and standards processing documentation](https://github.com/tdwg/rs.tdwg.org/blob/master/process/process-vocabulary.md) for the generic publication process used to prepare authoritative standards metadata.

- [ ] Complete the required processing of authoritative vocabulary, term-version, document, decision, and other standards metadata in `rs.tdwg.org`.
- [ ] Review the resulting metadata changes before using them as the publication baseline.
- [ ] Preserve legitimate corrections to historical metadata.
- [ ] Ensure that generated Darwin Core publication artifacts are not mistaken for authoritative maintained inputs.

#### Generate and validate Darwin Core artifacts

See the [Darwin Core build documentation](https://github.com/tdwg/dwc/blob/master/build/README.md) for the integrated artifact-build workflow.

- [ ] Run `build/build_artifacts.py --dry-run` against the intended `rs.tdwg.org` state.
- [ ] Review preflight results, lifecycle decisions, warnings, and proposed outputs.
- [ ] Run the normal artifact build.
- [ ] Review generated term lists, guides, schemas, DwC-A artifacts, DwC-DP artifacts, and other configured outputs.
- [ ] Run `git diff --check`.
- [ ] Review the scope of modified and generated files for unexpected changes.
- [ ] Confirm that generated schemas and packages pass their configured validation checks.

#### Review the website

- [ ] Render the website locally with Jekyll.
- [ ] Review navigation and all changed documents.
- [ ] Check links, headings, tables of contents, examples, and formatting.
- [ ] Confirm that newly added standard components appear where expected in site navigation and landing pages.

#### Verify reproducibility

- [ ] Run the same artifact build again without changing inputs.
- [ ] Confirm that the second run produces no repository changes.
- [ ] Resolve any nondeterministic or non-idempotent output before proceeding.

#### Prepare the public release candidate

- [ ] Commit the reviewed release-candidate artifacts.
- [ ] Deploy the exact committed candidate to <https://dwc-dev-preview.tdwg.org/>.
- [ ] Review the deployed preview.
- [ ] Prepare a concise public-review summary describing the changes proposed for ratification.
- [ ] Prepare the Executive Committee presentation or message with links to the preview, milestone, and review summary.

### M4D1 — Present to the Executive Committee {#m4d1}

- [ ] Present the release candidate at <https://dwc-dev-preview.tdwg.org/> to the Executive Committee accompanied by the associated release processing report in the `process/reports/` directory of the local copy of the rs.tdwg.org repository where the process was run.
- [ ] Request ratification by **M5D1**.
- [ ] Announce the completed public-review summary to the community.
- [ ] Combine that announcement, where practical, with the **M0D1** announcement for the next maintenance cycle.

### M4D1 to M5D1 — Ratification period

- [ ] Keep the release candidate stable while it is under Executive Committee consideration.
- [ ] Respond to questions from the Executive Committee.
- [ ] Make only corrections necessary for ratification, and document any such changes.
- [ ] If a substantive change would exceed the scope of the completed public review, defer it to a later maintenance cycle rather than silently incorporating it.

### M5D1 — Ratification deadline {#m5d1}

- [ ] Record the Executive Committee decision.
- [ ] If ratification is delayed, update the expected release date and communicate the revised schedule.
- [ ] If ratified, prepare the approved candidate for publication without substantive alteration.

### M5D1 to M5D15 — Publish the ratified release

- [ ] Publish the approved Darwin Core standard documents and vocabulary metadata.
- [ ] Publish current and immutable machine-readable artifacts in their intended locations.
- [ ] Publish the DwC-A schemas and related artifacts.
- [ ] Publish the DwC-DP profile, table schemas, and other package artifacts in their intended versioned locations.
- [ ] Update canonical resources and redirects where required.
- [ ] Confirm that public URLs resolve correctly.
- [ ] Confirm that the production website reflects the ratified release.
- [ ] Create the corresponding GitHub release and other release records used by the project.

### M5D15 — Complete the release {#m5d15}

- [ ] Confirm that the published release matches the ratified release candidate.
- [ ] Confirm that canonical and immutable resources are internally consistent.
- [ ] Close the completed public-review milestone.
- [ ] Close or update resolved issues as appropriate.
- [ ] Record any follow-up work for the next maintenance cycle.
- [ ] Announce the release to the community.
