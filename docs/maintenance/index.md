---
layout: default
title: Darwin Core Maintenance
toc: true
---

# Darwin Core Maintenance

## Introduction

This page is a checklist for maintainers of the Darwin Core standard. It describes the recurring public-review and release cycle used by the Darwin Core Maintenance Group and identifies the principal tasks that should be completed at each stage.

Darwin Core uses three overlapping maintenance cycles per year. Each cycle follows the same sequence of relative dates, identified below by labels such as **M0D1**, **M1D16**, and **M5D15**. These labels are intended to make the checklist reusable from year to year.

## Calendar

The three annual cycles begin on **1 February**, **1 June**, and **1 October**. Each cycle runs for approximately five and a half months from the first announcement through the target release date.

| Cycle date | Meaning | Cycle 1 | Cycle 2 | Cycle 3 |
| --- | --- | --- | --- | --- |
| **M0D1** | Announce the upcoming review cycle and begin support for maturing issues | 1 February | 1 June | 1 October |
| **M1D1** | Deadline for submission of mature issues for consideration | 1 March | 1 July | 1 November |
| **M1D15** | Final milestone triage and issue review | 15 March | 15 July | 15 November |
| **M1D16** | Public review begins; active commentary phase begins | 16 March | 16 July | 16 November |
| **M2D16** | Active commentary ends; consensus-seeking phase begins | 16 April | 16 August | 16 December |
| **M3D16** | Consensus-seeking ends; Executive Committee preparation begins | 16 May | 16 September | 16 January of the following year |
| **M4D1** | Present the release candidate and review summary to the Executive Committee | 1 June | 1 October | 1 February of the following year |
| **M5D1** | Target deadline for Executive Committee ratification | 1 July | 1 November | 1 March of the following year |
| **M5D15** | Target release date | 15 July | 15 November | 15 March of the following year |

The **M0D1** announcement for one cycle coincides with **M4D1** of the preceding cycle. Where practical, the community announcement for the upcoming review should therefore be combined with the public-review summary for the cycle entering Executive Committee consideration.

## Maintenance Checklist

### M0D1 — Open the cycle

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

### M1D1 — Close submissions for the upcoming review

- [ ] Treat this date as the deadline for submitting mature issues for consideration in the upcoming public review.
- [ ] Finish active Maintenance Group support for incomplete proposals intended for this cycle.
- [ ] Defer proposals that are not sufficiently mature to a later cycle rather than allowing them to destabilize the review scope.

### M1D1 to M1D15 — Final milestone triage

- [ ] Review all candidate issues for the upcoming public-review milestone.
- [ ] Assign mature issues to the milestone.
- [ ] Apply all appropriate labels.
- [ ] Confirm that each issue has enough information for meaningful public review.
- [ ] Identify issues that require coordinated changes across more than one artifact.
- [ ] Close **Controversial** or **Unresolved** issues that have had no activity for at least one year, where appropriate.
- [ ] Confirm the final scope of the public review.

### M1D16 — Begin public review

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

### M2D16 — Begin consensus-seeking phase

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

### M3D16 — Close consensus seeking and freeze the review scope

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

### M4D1 — Present to the Executive Committee

- [ ] Present the release candidate at <https://dwc-dev-preview.tdwg.org/> to the Executive Committee.
- [ ] Provide the public-review summary and relevant decision context.
- [ ] Request ratification by **M5D1**.
- [ ] Announce the completed public-review summary to the community.
- [ ] Combine that announcement, where practical, with the **M0D1** announcement for the next maintenance cycle.

### M4D1 to M5D1 — Ratification period

- [ ] Keep the release candidate stable while it is under Executive Committee consideration.
- [ ] Respond to questions from the Executive Committee.
- [ ] Make only corrections necessary for ratification, and document any such changes.
- [ ] If a substantive change would exceed the scope of the completed public review, defer it to a later maintenance cycle rather than silently incorporating it.

### M5D1 — Ratification deadline

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
- [ ] Announce the release to the community.

### M5D15 — Complete the release

- [ ] Confirm that the published release matches the ratified release candidate.
- [ ] Confirm that canonical and immutable resources are internally consistent.
- [ ] Close the completed public-review milestone.
- [ ] Close or update resolved issues as appropriate.
- [ ] Record any follow-up work for the next maintenance cycle.
