# {document_title}

Title
: {document_title}

Date de publication de la dernière mise à jour
: {ratification_date}

Date de création
: {created_date}

Fait partie du standard TDWG
: <{standard_iri}>

Cette version
: <{current_iri}{ratification_date}>

Dernière version
: <{current_iri}>

Version précédente
: {previous_version_slot}

Abstract
: {abstract}

Contributeurs
: {contributors}

Créateur :
{creator}

Citation :
{creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1 Introduction (À titre informatif)

This document provides a comprehensive list of terms, from multiple namespaces, that are or have been recommended for use in Darwin Core as of this vocabulary version. The status of some terms, as noted in their metadata, is deprecated or superseded. Such terms should no longer be used. Terms from namespaces that contain only deprecated terms are not included in this document, but metadata about those terms can still be retrieved by dereferencing their IRIs.

Pour une liste simplifiée ne contenant que les termes actuellement recommandés, voir le [Guide de référence rapide du Darwin Core](../terms/).

### 1.1 Statut du contenu de ce document

Les sections 1 et 3 ne sont pas normatives.

La section 2 est normative.

Dans la section 4, les valeurs de l'`IRI du terme` et de la `Définition` sont normatives. Les valeurs de `Nom du Terme` ne sont pas normatives, bien que l'on puisse s'attendre à ce que le préfixe de l'abréviation de l'espace de noms soit celui couramment utilisé pour l'espace de noms du terme.  Le `Label` et les valeurs de toutes les autres propriétés (telles que les `Exemples` et les `Notes`) ne sont pas normatives.

### 1.2 Mots clés RFC 2119

Les mots clés "MUST/DOIT", "MUST NOT/NE DOIT PAS", "REQUIRED/OBLIGATOIRE", "SHALL/DEVRA", "SHALL NOT/NE DEVRA PAS", "SHOULD/DEVRAIT", "SHOULD NOT/NE DEVRAIT PAS", "RECOMMENDED/RECOMMANDÉ", "MAY/POURRAIT", et "OPTIONAL/OPTIONNEL" dans ce document doivent être interprétés comme défini dans les références [BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) et [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174)] uniquement lorsqu’ils apparaissent en majuscules, comme ci-dessus.

### 1.3 Abréviation des espaces de noms

Les abréviations suivantes d'espace de noms sont utilisées dans ce document :

| abréviation  | IRI                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| `ac:`        | <http://rs.tdwg.org/ac/terms/>     |
| `chrono:`    | <http://rs.tdwg.org/chrono/terms/> |
| `chronoiri:` | <http://rs.tdwg.org/chrono/iri/>   |
| `dc:`        | <http://purl.org/dc/elements/1.1/> |
| `dcterms:`   | <http://purl.org/dc/terms/>                        |
| `dwc:`       | <http://rs.tdwg.org/dwc/terms/>    |
| `dwciri:`    | <http://rs.tdwg.org/dwc/iri/>      |
| `eco:`       | <http://rs.tdwg.org/eco/terms/>    |
| `ecoiri:`    | <http://rs.tdwg.org/eco/iri/>      |

## 2 Utilisation des termes

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), properties in the `chronoiri:`, `dwciri:` and `ecoiri:` namespaces MUST be used with IRI values. Values for properties in the `chrono:`, `dwc:`, `eco:` and `dc:` namespaces are generally expected to have string literal values. Values for properties in the `ac:` and `dcterms:` namespaces will depend on the details of the individual terms. Pour plus de détails, voir la section 3 du [Darwin Core RDF Guide](../rdf/#3-term-reference-normative).

## 3 Index des termes
