## Header section

Title
: Darwin Core Namespace Policy

Date version issued
: 2018-08-26

Date created
: 2009-02-12

Part of TDWG Standard
: [http://www.tdwg.org/standards/450/](http://www.tdwg.org/standards/450/)

This version
: [http://rs.tdwg.org/dwc/terms/namespace/2018-08-26](http://rs.tdwg.org/dwc/terms/namespace/2018-08-26)

Latest version
: [http://rs.tdwg.org/dwc/terms/namespace/](http://rs.tdwg.org/dwc/terms/namespace/)

Previous version
: [http://rs.tdwg.org/dwc/terms/namespace/2013-09-23](http://rs.tdwg.org/dwc/terms/namespace/2013-09-23)

Abstract
: All terms in the Darwin Core must be assigned a unique Uniform Resource Identifier (URI). For convenience, the term URIs that are assigned and managed by the Darwin Core Task Group are grouped into collections known as Darwin Core namespaces. This document describes how term URIs are allocated by the Darwin Core Maintenance Group and the policies associated with Darwin Core namespaces.

Contributors
: John Wieczorek (MVZ), Markus Döring (GBIF), Renato De Giovanni (CRIA), Tim Robertson (GBIF), Dave Vieglais (KUNHM)

Creator
: Darwin Core Task Group

## 1. Introduction

This document and the policies contained herein are modeled on the _Dublin Core Metadata Initiative Namespace Policy_ \[[DCMINAMESPACEPOLICY](http://dublincore.org/documents/2007/07/02/dcmi-namespace/)\]. All terms in the Darwin Core must be identified with a unique Uniform Resource Identifier (URI). For convenience, the term URIs are grouped into collections known as _Darwin Core namespaces_. This document describes the policies associated with Darwin Core namespaces and how term URIs are allocated by the _Darwin Core Maintenance Group_ \[[DWC-TASK](http://www.tdwg.org/activities/darwincore/)\].

### 1.1 Status of the content of this document

All sections of this document are normative.

### 1.2 Audience

This document is targeted toward those who want to make changes to the Darwin Core, either by refining terms that already exist or by adding new terms to increase the capabilities of the standard.

## 2. Namespace URIs

The Darwin Core namespace URI for the collection of all Darwin Core properties, classes, and encoding schemes is:

```
http://rs.tdwg.org/dwc/terms/
```

The term identifier for the current (recommended) version of a term is a URI based on the namespace and the term name without version information. Some example Darwin Core term identifiers follow:

```
http://rs.tdwg.org/dwc/terms/scientificName
```
is the Darwin Core term identifier for the _scientificName_ property, while

```
http://rs.tdwg.org/dwc/terms/MachineObservation
```

is the Darwin Core term identifier for the _MachineObservation_ class.

All Darwin Core identifiers will dereference to a Darwin Core term declaration for the identified term.

## 3. Term Change Policy

(This section has been superseded by the [Vocabulary Maintenance Specification](https://github.com/tdwg/vocab/blob/master/vms/maintenance-specification.md) )

## 4. Persistence Policy

[TDWG](https://www.tdwg.org/) recognizes that people and applications depend on the persistence of formal documents and machine processable schemas that have been made publicly available. In particular, the stability of Darwin Core term URIs and Darwin Core namespace URIs is critical to interoperability over time. Thus, the wide promulgation of this set of URIs dictates that they be maintained to support legacy applications that have adopted them.
