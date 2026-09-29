# Building Darwin Core artifacts

The `build` directory contains the configuration, templates, and Python
code used to generate Darwin Core documentation and other derived
artifacts.

The build is controlled by:

-   `build_artifacts.py` --- the build script
-   `build_artifacts.yaml` --- configuration specifying what is built
    and the sources used
-   `requirements.txt` --- required Python packages
-   artifact-specific templates and supporting files in this directory

The build is intended to generate the configured Darwin Core artifacts
in a single run.

## Source data

The definitive term metadata used by Darwin Core are maintained in the
[TDWG rs.tdwg.org repository](https://github.com/tdwg/rs.tdwg.org/).

Changes to Darwin Core terms or borrowed terms must first be prepared
and processed there. See the [rs.tdwg.org vocabulary processing
documentation](https://github.com/tdwg/rs.tdwg.org/blob/master/process/process-vocabulary.md)
for that workflow.

`build_artifacts.py` can use term data from:

-   the configured TDWG `rs.tdwg.org` repository and branch;
-   another GitHub fork and branch; or
-   a local working copy of `rs.tdwg.org`.

This makes it possible to build and review draft Darwin Core artifacts
before proposed changes have been merged into the authoritative
repository.

Darwin Core Data Package (DwC-DP) build inputs are maintained directly
in this repository under:

``` text
build/dwc-dp/
```

These include the authoritative DwC-DP table and field CSVs, the profile
and Quick Reference Guide templates, SQL generation configuration, and
Designer template. Their paths and output destinations are configured
under `dwc_dp` in `build_artifacts.yaml`.

## Installation

Install the required Python packages:

``` bash
pip install -r requirements.txt
```

Run the build from this directory.

## Configuration

`build_artifacts.yaml` is the primary configuration for the build. The
file documents the available configuration properties and identifies
which artifacts and documents are to be generated.

Among other things, the configuration controls:

-   the default source repository and branch;
-   the term sources used by the build;
-   the languages to generate;
-   standard documents and List of Terms documents to update;
-   Quick Reference Guide generation;
-   derivative files and schemas; and
-   other generated Darwin Core artifacts.

Normally, maintainers should change build behavior through
`build_artifacts.yaml` rather than by modifying `build_artifacts.py`.

## Running the build

Using the sources configured in `build_artifacts.yaml`:

``` bash
python3 build_artifacts.py
```

A local `rs.tdwg.org` working copy can be selected with:

``` bash
python3 build_artifacts.py --rspath /path/to/rs.tdwg.org
```

A GitHub fork and branch can be selected with:

``` bash
python3 build_artifacts.py --ghuser USER --branch BRANCH
```

Command-line source options override the corresponding defaults in
`build_artifacts.yaml`.

## Build reporting and logs

During a build, `build_artifacts.py` reports progress, warnings, and
errors on the command line. It also writes a more detailed build log to:

``` text
build/logs/
```

The log summarizes the build and the artifacts that were processed or
generated, and provides additional detail useful for reviewing the build
or diagnosing problems. Build logs are working files and are not
intended to be committed to the repository.

## Creating a new document version

By default, the build protects against inadvertently creating a new
version of a standard document.

When a build is intentionally creating a new version, use:

``` bash
python3 build_artifacts.py --permit-new-version
```

For example:

``` bash
python3 build_artifacts.py \
  --rspath /path/to/rs.tdwg.org \
  --permit-new-version
```

The build performs its preflight checks before generating artifacts.
Generated changes are staged and committed to their target locations
only after successful generation, so a failed build does not
intentionally leave a partially updated set of artifacts.

## Darwin Core Quick Reference Guide

The structure and ordering of terms in the classic Darwin Core Quick Reference
Guide and associated derivative CSVs are controlled by:

``` text
qrg_template/qrg-list.csv
```

The positions of class terms in this file determine the sections of the
Quick Reference Guide. When new terms are introduced, their IRIs must be
added in the appropriate positions for them to appear in the Quick
Reference Guide and its derivatives.

## Darwin Core Data Package artifacts

The unified build also generates the configured DwC-DP artifacts. These
have three different roles and destinations:

-   `dwcdp/` contains generated profile and table-schema resources. These
    are intermediate release artifacts intended for publication to their
    canonical locations in `rs.tdwg.org`; the directory is Git-ignored.
-   `docs/dwc-dp/` contains persistent web artifacts, currently the
    DwC-DP Quick Reference Guide and Designer.
-   `dist/dwcdp/` contains persistent implementation and distribution
    artifacts, currently the PostgreSQL DDL.

The profile and table schemas are generated and validated before
dependent DwC-DP artifacts are built. Validation includes JSON and
required metadata checks, Frictionless Table Schema validation, DwC-DP
profile constraints, and foreign-key integrity checks.

The DwC-DP Quick Reference Guide, PostgreSQL DDL, and Designer are
generated from the validated schema resources. Generated directories
that must represent a complete set are replaced transactionally when
their contents change, preventing stale generated files from remaining
in the repository.

## Generated documents

Documents enabled in `build_artifacts.yaml` are generated in their
configured locations under `docs/`. Depending on the configuration,
these can include resources such as the Darwin Core List of Terms,
Conceptual Model, and controlled-vocabulary documents.

Where configured, multilingual versions are generated from the available
translations.

Do not hand-edit generated artifacts to make persistent changes. Modify
the appropriate source data, configuration, or template and rebuild
instead.

## Reviewing a release

A typical release workflow is:

1.  Prepare and process the required term changes in `rs.tdwg.org`.
2.  Create a working branch of the `dwc` repository.
3.  Configure the desired build in `build_artifacts.yaml`.
4.  Run `build_artifacts.py`, using command-line source overrides when
    appropriate.
5.  Review the generated changes and build log.
6.  Repeat the build as necessary until the results are satisfactory.
7.  Commit the reviewed changes and create a pull request.

For draft builds, the source data may come from a local `rs.tdwg.org`
working copy or a branch in a fork. For a final release, the build
should use the appropriate authoritative source data.

## Term dereferencing

Dereferencing Darwin Core terms to human- and machine-readable
representations is handled by infrastructure managed by GBIF. Updated
metadata are incorporated into the production dereferencing service as
part of the release process for `rs.tdwg.org`.
