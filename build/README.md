# Building Darwin Core artifacts

The `build` directory contains the configuration, templates, validation
resources, and Python code used to generate Darwin Core documentation and
machine-readable artifacts.

The build is controlled primarily by:

- `build_artifacts.py` — the build script;
- `build_artifacts.yaml` — the build configuration;
- `requirements.txt` — required Python packages; and
- artifact-specific templates and supporting files in this directory.

The build is designed to generate the complete configured Darwin Core artifact
state in one deterministic, transactional run from authoritative inputs.

# 1 Introduction

## 1.1 Audience

This document is intended primarily for Darwin Core maintainers preparing,
reviewing, or reconstructing Darwin Core release artifacts. It may also be used
by developers working on the build machinery or by reviewers generating draft
artifacts from a fork or working branch.

## 1.2 Scope and current build model

`build_artifacts.py` is a release-level artifact builder. One invocation uses a
selected Darwin Core source/configuration state together with one selected
`rs.tdwg.org` source state to determine and generate the complete configured
current artifact state.

The selected `rs.tdwg.org` state is an indivisible build input. It supplies:

- current term and term-version metadata;
- current Document and Document-version metadata;
- controlled-vocabulary source data and related metadata;
- metadata required for generated human-readable documents; and
- for independently versioned DwC-A artifacts, the previously published
  canonical artifact used as the comparison baseline and as the source of the
  current immutable publication identity.

The same source-selection rule applies throughout the build. When `--rspath`
is supplied, all applicable `rs.tdwg.org` inputs are read from that local
checkout. Otherwise they are read from the configured `rs.tdwg.org` GitHub
repository and branch.

Publication state for independently versioned DwC-A artifacts is not inferred
from generated files in the Darwin Core working tree. The selected
`rs.tdwg.org` state supplies that comparison baseline and publication identity.
Some document-generation operations are a separate case: when a current
human-readable Document is being versioned, the build can preserve the existing
current document as a dated historical publication record.

## 1.3 Relationship between `rs.tdwg.org` processing and the Darwin Core build

Changes to Darwin Core terms, borrowed terms, Document metadata, Standard
composition, and related authoritative metadata are prepared and processed in
[`rs.tdwg.org`](https://github.com/tdwg/rs.tdwg.org/) before the corresponding
Darwin Core artifact build.

See the [`rs.tdwg.org` vocabulary and Document processing
documentation](https://github.com/tdwg/rs.tdwg.org/blob/master/process/process-vocabulary.md)
for that workflow.

For a release build, the selected `rs.tdwg.org` state should normally contain:

1. the processed authoritative metadata for the target release; and
2. the previously published canonical DwC-A artifacts and the existing
   immutable publication records needed to resolve their current identities.

It should not yet contain the new DwC-A artifact outputs produced by the Darwin
Core build being performed. Those outputs are generated in the Darwin Core
repository and can subsequently be copied into the appropriate publication
locations in `rs.tdwg.org` as part of the release process.

This ordering allows the build to compare a fully rendered target-release
candidate with the artifact that is actually published in the selected
`rs.tdwg.org` state.

## 1.4 Determinism, generation, and publication

The intended invariant is:

> Given the same Darwin Core source/configuration state and the same selected
> `rs.tdwg.org` source state, `build_artifacts.py` determines the same complete
> generated artifact state.

For independently versioned DwC-A artifacts, version identity is part of that
deterministic result:

- if no canonical artifact exists in the selected `rs.tdwg.org` state, the
  build generates an initial publication using the configured `release_date`;
- if the rendered candidate differs substantively from the published canonical,
  the build generates a new immutable version using `release_date`; and
- if the candidate is substantively unchanged, the build retains the immutable
  publication identity identified by the published canonical and reconstructs
  that current artifact state.

Generating a local new version is therefore a deterministic build result.
Publication occurs later when reviewed generated artifacts are incorporated into
the publication repository and released through the normal TDWG process.

# 2 Build recipe

For a normal Darwin Core development or release cycle:

1. **Prepare and process the authoritative `rs.tdwg.org` release state.** Start
   from the state that should precede the release, preserve the previously
   published DwC-A canonical artifacts, and complete the applicable
   `rs.tdwg.org` release processing. See [3.1](#31-prepare-or-select-the-rstdwgorg-source-state).
2. **Prepare `build_artifacts.yaml`.** Review `release_date`, the selected
   source repository, enabled artifacts and documents, languages, and the
   declared DwC-DP version. See [3.2](#32-prepare-the-build-configuration).
3. **Run a complete dry run.** Use `--dry-run` so the build performs preflight,
   generation, version determination, and validation in staging without
   committing artifact outputs to the Darwin Core working tree. See
   [3.3](#33-run-a-dry-run).
4. **Review the proposed artifact state.** Inspect lifecycle decisions,
   validation results, proposed create/update/remove counts, and the detailed
   build log. Investigate unexpected initial publications or new versions. See
   [3.4](#34-review-the-dry-run).
5. **Run the normal build.** Use the same source and configuration without
   `--dry-run`. The validated staged transaction is committed transactionally to the
   Darwin Core working tree. See [3.5](#35-run-the-build).
6. **Review the generated result.** Inspect console output, the build log,
   `git status`, the repository diff, generated documents, schemas, and
   derivatives. See [3.6](#36-review-the-generated-result).
7. **Run the identical build again.** An unchanged same-input rerun should
   report `Transaction committed: 0 repository files updated.` See
   [3.8](#38-confirm-idempotence).
8. **Commit and proceed through review/publication.** Commit the intended
   Darwin Core source/configuration and generated changes, then publish through
   the normal review and release process. See
   [3.9](#39-commit-review-and-publish).

When changing build machinery or artifact lifecycle behavior, the
[clean-build reconstruction test](#311-clean-build-reconstruction-test) is also
recommended.

# 3 Detailed workflow

## 3.1 Prepare or select the `rs.tdwg.org` source state

The `rs.tdwg.org` source used by the build must represent the release state
against which the Darwin Core artifacts are to be generated.

For a normal release:

1. begin with the `rs.tdwg.org` state that immediately precedes the release;
2. preserve the previously published DwC-A canonical and immutable artifacts;
3. prepare the release inputs and run `process/process.py` as described in the
   `rs.tdwg.org` processing documentation;
4. review and correct that processed state until it is stable; and
5. point the Darwin Core build at that same state.

For local work, use:

```bash
python build_artifacts.py --rspath /path/to/rs.tdwg.org --dry-run
```

For a remote branch or fork, configure `source_repository` in
`build_artifacts.yaml` or use `--ghuser` and `--branch`.

The important rule is that **all `rs.tdwg.org` information for one build must
come from the same selected source state**. Do not combine target-release term
metadata from one checkout with canonical artifact baselines from another.

### Previously published canonical artifacts

For each independently versioned DwC-A artifact, the configured canonical path
is looked up in the selected `rs.tdwg.org` state.

- If the canonical exists, it is the comparison baseline.
- If it does not exist, the artifact is treated as an initial publication.

For core, extension, and controlled-vocabulary XML artifacts, the published
canonical also identifies its current immutable version through
`dcterms:source`.

A local `rs.tdwg.org` checkout intended to support a release build must
therefore retain previously published canonical artifacts even though the new
release's generated artifacts have not yet been copied into it.

## 3.2 Prepare the build configuration

`build_artifacts.yaml` is the primary build configuration. Review at least:

- `release_date`;
- `source_repository`;
- enabled artifacts;
- enabled documents;
- configured languages;
- DwC-DP source files and declared package version;
- controlled-vocabulary configuration;
- Quick Reference Guide configuration; and
- derivative-output configuration.

The configured `release_date` is the date assigned to independently versioned
artifacts that are initial publications or are found to have changed
substantively. It is not imposed on unchanged independently versioned
artifacts.

Normally, maintainers should change build behavior through authoritative
source data, `build_artifacts.yaml`, or templates rather than by editing
`build_artifacts.py`.

## 3.3 Run a dry run

For a local `rs.tdwg.org` source:

```bash
python build_artifacts.py \
  --rspath /path/to/rs.tdwg.org \
  --dry-run
```

A dry run follows the normal build path through:

1. preflight validation;
2. artifact lifecycle determination;
3. complete generation in a temporary staging tree;
4. DwC-DP validation;
5. DwC-A XML Schema validation;
6. construction of the proposed repository transaction; and
7. transaction reporting.

The final artifact transaction is not committed to the Darwin Core working
tree.

A successful dry run reports counts of files that the corresponding normal
build would create, update, and remove. The detailed paths are recorded in the
timestamped build log.

Build logs are operational outputs and are written outside the artifact
transaction, so a dry run can create a new log file even though artifact
outputs remain unchanged.

## 3.4 Review the dry run

Review the console output and the log beneath `build/logs/`.

For independently versioned DwC-A artifacts, confirm that each lifecycle result
is expected:

- **initial publication** — no canonical artifact exists at the configured path
  in the selected `rs.tdwg.org` state;
- **changed** — a published canonical exists but differs substantively from the
  rendered candidate; or
- **unchanged** — the candidate is substantively equivalent to the published
  canonical and retains its existing immutable identity.

An unexpected initial publication usually means either that the configured
canonical path is wrong or that the selected `rs.tdwg.org` source state does
not contain the expected previously published artifact.

An unexpected new version should be investigated as a difference in
source/configuration inputs or rendered artifact content. Do not alter a
version decision manually merely to make the output look like an expected
release.

Also review warnings and validation output, including Quick Reference Guide
coverage warnings and controlled-vocabulary resource checks.

## 3.5 Run the build

After the dry-run result is satisfactory, run the same command without
`--dry-run`:

```bash
python build_artifacts.py --rspath /path/to/rs.tdwg.org
```

The build again performs preflight, generation, and validation in staging. Only
if the staged build succeeds is the resulting transaction committed to the
Darwin Core working tree.

A successful run reports the number of repository files actually updated by
the transaction. This number can be zero even though the build generated many
files in staging, because byte-identical repository files are not rewritten.

## 3.6 Review the generated result

Review:

```bash
git diff --check
git status --short
git diff --stat
git diff
```

Also inspect:

- command-line warnings and validation results;
- `build/logs/build_artifacts_YYYYMMDD-HHMMSS.log`;
- generated DwC-A canonical and immutable artifacts;
- DwC-A CSV derivatives;
- the Darwin Core Schemas document;
- DwC-DP profile and table schemas;
- DwC-DP QRG, SQL, CSV headers, and Designer;
- generated List-of-Terms and controlled-vocabulary documents; and
- version dates and provenance pointers on independently versioned artifacts.

Do not hand-edit generated current artifacts to make a persistent change.
Correct the applicable authoritative input, configuration, or template and
rerun the build.

## 3.7 Correct and rerun

If the proposed or generated result is wrong, correct the authoritative input
and rerun against the same selected `rs.tdwg.org` state.

Depending on the problem, the correction may belong in:

- the processed `rs.tdwg.org` state;
- `build_artifacts.yaml`;
- an artifact term-membership input;
- a template;
- a translation or controlled-vocabulary resource; or
- another build source file.

The build is intended to converge on the state represented by its current
inputs. There is no need to preserve a generated Darwin Core output merely so
that it can serve as the input to the next build.

## 3.8 Confirm idempotence

Run the identical normal build again without changing either repository state
or configuration.

The expected stable result is:

```text
Transaction committed: 0 repository files updated.
```

A non-zero transaction on an otherwise identical second run should be
investigated before release.

The intended invariant is stronger than simple file preservation: rebuilding
from the same authoritative inputs must select the same artifact versions and
produce the same current generated state.

## 3.9 Commit, review, and publish

Once the Darwin Core generated state is satisfactory:

1. inspect the complete diff;
2. exclude local development files and build logs;
3. commit the intended source/configuration and generated changes;
4. create the appropriate pull request and conduct normal review; and
5. after approval, publish the generated artifacts and documents through the
   normal Darwin Core/TDWG release process.

For the `rs.tdwg.org` publication step, copy the reviewed build products to the
appropriate canonical and immutable/version locations. The next release build
will then see those published canonical artifacts as its comparison baseline.

## 3.10 Generating drafts

The same workflow can be used before ratification.

Use a fork, branch, or local working copy of `rs.tdwg.org` that contains the
draft processed metadata and the publication baseline that should apply to the
draft build. Then use the corresponding Darwin Core branch/configuration to
produce and review draft artifacts.

A normal draft cycle is:

1. prepare or correct the draft `rs.tdwg.org` release inputs;
2. process them in `rs.tdwg.org`;
3. run the Darwin Core build with `--dry-run`;
4. inspect the proposed result;
5. run the normal build when useful for document/artifact review;
6. correct authoritative inputs; and
7. rerun on the same branches.

When the draft is finalized, use the actual ratification/release date and the
appropriate pre-release publication state for the final release processing and
build.

## 3.11 Clean-build reconstruction test

When build machinery or publication lifecycle behavior changes, a clean-build
test can verify that generated Darwin Core artifacts are truly outputs rather
than hidden inputs.

Historical publication records require care. The build reconstructs the
complete **current generated state**, not the complete historical archive of
all old immutable artifacts and dated documents. Perform destructive clean
build tests in a disposable checkout or remove only outputs that the build is
responsible for reconstructing.

A useful test sequence is:

1. establish a known-good state and run the build until an identical rerun
   reports zero repository updates;
2. preserve the selected `rs.tdwg.org` source state, including its previously
   published canonical artifact baselines;
3. remove selected current generated products in the Darwin Core working tree;
4. run the build again against the same `rs.tdwg.org` source;
5. confirm that already published artifacts are recognized from
   `rs.tdwg.org`, not from missing local Darwin Core files;
6. confirm that the expected current canonical and immutable representations
   are reconstructed and all validation succeeds; and
7. run the identical build once more and confirm zero repository updates.

A successful sequence demonstrates:

```text
stable generated state
    -> idempotent build (0 updates)
    -> deliberate deletion of current generated products
    -> reconstruction from authoritative inputs and publication baseline
    -> idempotent build (0 updates)
```

# 4 What `build_artifacts.py` generates

This section summarizes the principal generated products. Exact output is
controlled by `build_artifacts.yaml`.

## 4.1 DwC-A core and extension XML artifacts

Configured DwC-A core schemas are generated beneath:

```text
dwc-a/schemas/core/
```

Configured DwC-A extensions are generated beneath:

```text
dwc-a/schemas/extension/
```

For each maintained independently versioned artifact, the build generates the
mutable canonical representation and the applicable immutable dated
representation.

Configured horizontal and vertical CSV derivatives are generated beneath:

```text
dist/dwc-a/
```

The XML core and extension schemas are validated against the generated current
`extension.xsd` before the artifact transaction is committed.

## 4.2 DwC-A `extension.xsd` and supporting schemas

The build maintains:

```text
dwc-a/schemas/extension.xsd
dwc-a/schemas/extension_YYYY-MM-DD.xsd
dwc-a/schemas/dcterms-attributes.xsd
dwc-a/schemas/xml.xsd
```

`extension.xsd` is independently versioned by substantive comparison with the
canonical `extension.xsd` in the selected `rs.tdwg.org` state. If unchanged,
the build identifies the applicable immutable dated XSD by matching published
content. If changed or initial, the configured `release_date` supplies its new
version date.

`dcterms-attributes.xsd` and `xml.xsd` are supporting compatibility/validation
resources rather than independently versioned Darwin Core artifacts.

The source `extension.xsd` currently documents its intended future status as a
non-normative part of Darwin Core, while the machine-readable
`dcterms:isPartOf` relationship remains intentionally inactive pending the
applicable review and ratification.

## 4.3 Controlled-vocabulary XML artifacts

Configured controlled-vocabulary XML artifacts are generated beneath:

```text
dwc-a/schemas/vocabulary/
```

They use the same independently versioned lifecycle as the core and extension
XML artifacts: compare a fully rendered candidate with the canonical artifact
in the selected `rs.tdwg.org` state, create a new dated version only when
initial or substantively changed, and otherwise reconstruct the current
published identity.

Some vocabularies use alternative labels obtained from the GBIF Vocabulary
service and/or a configured local cache. Preflight verifies the required
resource according to the selected build mode before artifact outputs are
committed.

Controlled-vocabulary XML artifacts are not validated against `extension.xsd`
because they use a different XML structure.

## 4.4 Darwin Core Data Package

The DwC-DP build can generate, as configured:

- the Data Package profile;
- table schemas;
- header-only CSV files;
- the Quick Reference Guide;
- Quick Reference Guide images;
- PostgreSQL DDL; and
- the Designer.

Generated package artifacts are written beneath `dwc-dp/`; derivatives are
written beneath `dist/dwc-dp/` and `docs/dwc-dp/` as configured.

The profile and table schemas are validated as part of the build.

Unlike independently versioned DwC-A artifacts, DwC-DP does not use automatic
published-state comparison to decide its package version. Its version is the
value explicitly declared in `build_artifacts.yaml`. The configured `dwc-dp/`
output is the complete build product for that declared package version and can
subsequently be published as a unit to the corresponding `rs.tdwg.org/dwc-dp/`
version location.

## 4.5 Term-version history and CSV derivatives

Depending on configuration, the build generates the complete Darwin Core
term-version history in:

```text
vocabulary/term_versions.csv
```

It also generates configured horizontal and vertical CSV derivatives of the
current term metadata beneath `dist/`.

These products are derived from the selected authoritative `rs.tdwg.org` term
and term-version state.

## 4.6 Human-readable documents

Depending on configuration, the build generates current human-readable
resources beneath `docs/`, including:

- the Darwin Core List of Terms;
- controlled-vocabulary documents;
- the Darwin Core Schemas document; and
- localized Quick Reference Guide documentation.

Document metadata come from the applicable Document configuration and metadata
in the selected `rs.tdwg.org` state.

The Document lifecycle machinery can preserve the preceding current
`index.md` as a dated historical document when a new Document version is being
created. Historical dated documents are publication records and are not simply
reconstructed from current metadata.

## 4.7 Darwin Core Schemas document

The Darwin Core Schemas document is generated from its template and the
artifact lifecycle state determined during the same build.

For maintained DwC-A schemas, it identifies the current immutable version of
each configured core and extension schema. For DwC-DP, it links to the current
package version declared in the build configuration.

The Schemas document has its own Document lifecycle. Its version date is not a
release clock imposed on the schemas it describes.

## 4.8 Quick Reference Guide and navigation products

The structure and ordering of terms in the Darwin Core Quick Reference Guide
and associated derivatives are controlled by:

```text
qrg_template/qrg-list.csv
```

The positions of class terms in this file determine QRG sections. When new
recommended terms are introduced, their IRIs must be added in the appropriate
positions for them to appear in the QRG and its derivatives.

The build reports recommended List-of-Terms properties that are absent from
`qrg-list.csv`; such warnings should be reviewed during release preparation.

The build also generates configured language-navigation files beneath
`docs/_data/`.

# 5 Publication lifecycle for independently versioned DwC-A artifacts

## 5.1 Candidate and publication baseline

For each independently versioned DwC-A artifact, preflight renders a complete
candidate from current authoritative inputs before repository artifact outputs
are committed.

The candidate is compared with the canonical artifact at the configured
publication path in the same selected `rs.tdwg.org` source state used for all
other build metadata.

The publication baseline is therefore external to the generated Darwin Core
working-tree output. Deleting `dwc-a/` locally does not by itself imply an
initial publication.

## 5.2 Lifecycle states

The lifecycle is:

| Publication state | Canonical representation | Current immutable representation | New immutable version |
| --- | --- | --- | --- |
| Initial publication | generated | generated using `release_date` | yes |
| Substantively changed | generated | generated using `release_date` | yes |
| Unchanged | reconstructed | reconstructed using retained published identity | no |

The lifecycle state follows deterministically from the selected inputs.

## 5.3 Substantive XML comparison

For independently versioned DwC-A XML artifacts, release bookkeeping is
excluded from the substantive comparison. In particular, the comparison
ignores:

- `dc:issued`; and
- the canonical `dcterms:source` pointer to the immutable version.

A release-date change alone therefore does not manufacture a new artifact
version.

The comparison uses canonicalized XML so that irrelevant serialization
variation does not control versioning.

## 5.4 Canonical and immutable representations

For core, extension, and controlled-vocabulary XML artifacts, the mutable
canonical representation contains `dcterms:source` identifying the immutable
dated representation to which it is equivalent. The immutable representation
does not contain that canonical-to-version provenance pointer.

When an artifact is unchanged, the published canonical representation in the
selected `rs.tdwg.org` state supplies the identity of the current immutable
version. The build then regenerates both current representations from
authoritative inputs while retaining that version identity and date.

The build does not copy the published canonical bytes into the Darwin Core
working tree. Published state supplies the comparison baseline and publication
identity; the artifact itself is regenerated.

## 5.5 `extension.xsd`

`extension.xsd` follows the same substantive principle but does not carry the
same `dcterms:source` mechanism as the generated core/extension XML artifacts.

When the canonical XSD is unchanged, the build determines its current immutable
identity by locating the newest dated `extension_YYYY-MM-DD.xsd` in the same
selected `rs.tdwg.org` state whose canonicalized content matches the canonical
`extension.xsd`.

When the canonical is absent or changed, `release_date` supplies the new
immutable version date.

## 5.6 Missing Darwin Core output does not affect publication state

Publication state is determined from `rs.tdwg.org`, not from whether a
corresponding generated file happens to exist in the Darwin Core working tree.

Therefore:

- deleting a generated local canonical does not turn an already published
  artifact into an initial publication;
- deleting a generated local immutable current version does not change its
  retained publication identity; and
- a clean reconstruction can regenerate the current artifact set from the
  selected source states.

## 5.7 Historical artifacts

The build reconstructs the current generated artifact state. It does not claim
to reconstruct every historical immutable artifact ever published.

Historical immutable schema/vocabulary versions and dated historical documents
may coexist with the current generated state and should be preserved unless a
separate intentional repository-maintenance operation calls for changing or
removing them.

# 6 Transaction, validation, and reporting

## 6.1 Preflight

Preflight validates the configuration and the resources required to determine
the complete build before committing artifact outputs.

Checks include, as applicable:

- build configuration structure;
- availability and readability of selected `rs.tdwg.org` resources;
- term metadata required by configured artifacts;
- Document lifecycle metadata;
- artifact publication state and current immutable identity;
- required templates and term-membership files;
- DwC-DP source structure;
- controlled-vocabulary resources and caches; and
- output-path prerequisites.

Preflight also renders comparison candidates for independently versioned
artifacts so that lifecycle state is known before generation of the staged
repository transaction.

## 6.2 Staging and generation

After preflight succeeds, the build creates a temporary staging tree and
generates the complete configured artifact state there. Repository artifact
outputs remain unchanged during staging.

Build-owned directories that are defined as complete generated products are
compared as directory trees so that stale generated files can be removed when
the transaction is committed.

## 6.3 Validation

Validation occurs before the artifact transaction is committed.

The build validates, as configured:

- DwC-DP profile and table schemas; and
- generated DwC-A core and extension XML schemas against the staged
  `extension.xsd`.

A validation failure stops the build before staged artifact outputs are
committed.

## 6.4 Dry run and normal commit

`--dry-run` and a normal build calculate and generate the same proposed artifact
state.

The difference is only the final transaction step:

```text
normal build
  preflight -> generate -> validate -> calculate transaction -> commit

--dry-run
  preflight -> generate -> validate -> calculate transaction -> report -> discard staging
```

A dry run reports create/update/remove counts and records the affected paths in
the build log.

A normal build applies the staged transaction only after successful generation
and validation. Files that are byte-identical to existing repository files are
not rewritten.

## 6.5 Failure behavior

If preflight fails, no artifact transaction is started. If generation or
validation fails, the staged artifact transaction is discarded rather than
intentionally applied as a partial repository update.

The final commit mechanism also uses backups/restoration logic for generated
directory replacement so that a failure during transaction publication does
not intentionally leave a partially replaced artifact state.

Operational log files are outside the artifact transaction and may be written
even when a build or dry run does not commit artifact outputs.

## 6.6 Build reporting and logs

Each run writes a timestamped log beneath:

```text
build/logs/
```

with a name of the form:

```text
build_artifacts_YYYYMMDD-HHMMSS.log
```

The console output gives the operational summary. The log contains additional
detail, including lifecycle decisions and, for dry runs, the paths in the
proposed create/update/remove transaction.

Build logs are working/review files and are not intended to be committed as
Darwin Core release artifacts.

# 7 Reference

## 7.1 Installation

Install the required Python packages from the `build` directory:

```bash
pip install -r requirements.txt
```

Run the build from this directory.

DwC-A XML Schema validation requires `lxml`; it is included in
`requirements.txt`.

## 7.2 Build configuration

`build_artifacts.yaml` documents the configured build inputs and identifies
which artifacts and documents are generated.

### `release_date`

The top-level setting:

```yaml
release_date: YYYY-MM-DD
```

is the date assigned to an independently versioned artifact when the build
determines that the artifact is an initial publication or differs
substantively from the published canonical in the selected `rs.tdwg.org`
state.

It is not a universal date imposed on every generated artifact. Unchanged
independently versioned artifacts retain their existing published version
identity and date.

The release date is also not derived from the List of Terms document, Humboldt
document, Chronometric Age document, or Darwin Core Schemas document.

### `source_repository`

`source_repository` defines the default `rs.tdwg.org` source, for example:

```yaml
source_repository:
  github_user: tdwg
  github_branch: master
  local_path: null
```

Command-line source options override the corresponding configured values.

The selected source applies consistently to both authoritative metadata and
DwC-A publication baselines.

### Languages

The configured `languages` list controls localized List of Terms,
controlled-vocabulary, and Quick Reference Guide pages. English pages are
written beneath `docs/<resource>/`; non-English pages are written beneath
`docs/<locale>/<resource>/`.

These current localized pages are generated artifacts. Dated historical
Document versions are publication records and must not be treated as disposable
build output merely because current pages are generated.

### Artifact selection

Machine-readable artifacts are declared under `artifacts`. Each enabled
artifact identifies its source term populations, template and other
artifact-specific inputs, and publication location.

The current build includes independently versioned DwC-A core schemas,
extensions, and controlled-vocabulary XML artifacts.

### Documents

Standard and supporting documents enabled in the configuration are generated
under `docs/`. Their metadata come from the corresponding authoritative
Document configuration in the selected `rs.tdwg.org` source state.

### DwC-DP version

The Darwin Core Data Package version is an explicit declaration in the build
configuration. The build applies that declared version consistently to the
DwC-DP profile and table schemas.

The build does not discover, compare, increment, or recommend a DwC-DP package
version from `rs.tdwg.org`.

## 7.3 Command-line options

### Use configured sources

```bash
python build_artifacts.py
```

This uses the source repository values declared in `build_artifacts.yaml`.

### Use a local `rs.tdwg.org` checkout

```bash
python build_artifacts.py --rspath /path/to/rs.tdwg.org
```

`--rs-path` is retained as a backward-compatible alias.

Supplying a local path puts the build in offline mode for `rs.tdwg.org`
resources. The same checkout supplies both authoritative metadata and the
canonical artifact comparison baseline.

### Use a GitHub fork and branch

```bash
python build_artifacts.py --ghuser USER --branch BRANCH
```

These options override the corresponding defaults in `build_artifacts.yaml`.
The selected GitHub `rs.tdwg.org` repository/branch supplies both metadata and
published canonical artifact baselines.

### Use another build configuration

```bash
python build_artifacts.py --config /path/to/config.yaml
```

### Perform a dry run

```bash
python build_artifacts.py --dry-run
```

Combine this with the desired source options, for example:

```bash
python build_artifacts.py \
  --rspath /path/to/rs.tdwg.org \
  --dry-run
```

A dry run performs the complete staged build and validation but does not commit
the artifact transaction to the Darwin Core working tree.

## 7.4 Term dereferencing

Dereferencing Darwin Core terms to human- and machine-readable representations
is handled by infrastructure managed by GBIF. Updated authoritative metadata
are incorporated into the production dereferencing service as part of the
`rs.tdwg.org` release process.
