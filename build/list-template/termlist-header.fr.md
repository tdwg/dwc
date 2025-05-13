# Liste des termes du Darwin Core

Titre : Liste des termes du Darwin Core

Date de publication de la dernière mise à jour : {ratification_date}

Date de création : {created_date}

Fait partie du standard TDWG : <{standard_iri}>

Cette version : <{current_iri}{ratification_date}>

Dernière version : <{current_iri}>

Version précédente : {previous_version_slot}

Résumé : le Darwin Core est un standard conçu pour la transmission de données sur la biodiversité. Ce document dresse la liste de tous les termes des espaces de noms actuellement utilisés dans le vocabulaire.

Contributeurs : {contributors}

Créateur : {creator}

Citation : {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1 Introduction (À titre informatif)

Ce document contient les termes qui font partie de la version la plus récente du standard Darwin Core (<http://rs.tdwg.org/version/dwc/{ratification_date}>).

Ce document inclut des termes dans quatre espaces de noms qui contiennent les termes recommandés `dwc:`, `dwciri:`, `dc:`, et `dcterms:`. Cependant, certains termes de ces espaces de noms sont obsolètes ou remplacés et ne doivent plus être utilisés. La dépréciation ou le remplacement d’un terme est indiqué dans les métadonnées de ce dernier. Les espaces de noms qui ne contiennent que des termes obsolètes ne sont pas inclus dans ce document, mais les métadonnées de ces termes peuvent être récupérées en déréférençant leurs IRI.

Pour une liste simplifiée ne contenant que les termes actuellement recommandés, voir le [Guide de référence rapide du Darwin Core](../terms/).

### 1.1 Statut du contenu de ce document

Les sections 1 et 3 ne sont pas normatives.

La section 2 est normative.

Dans la section 4, les valeurs de l'`IRI du terme` et de la `Définition` sont normatives. Les valeurs de `Nom du Terme` ne sont pas normatives, bien que l'on puisse s'attendre à ce que le préfixe de l'abréviation de l'espace de noms soit celui couramment utilisé pour l'espace de noms du terme.  `Label` and the values of all other properties (such as `Examples` and `Notes`) are non-normative.

### 1.2 Mots clés RFC 2119

Les mots clés "MUST/DOIT", "MUST NOT/NE DOIT PAS", "REQUIRED/OBLIGATOIRE", "SHALL/DEVRA", "SHALL NOT/NE DEVRA PAS", "SHOULD/DEVRAIT", "SHOULD NOT/NE DEVRAIT PAS", "RECOMMENDED/RECOMMANDÉ", "MAY/POURRAIT", et "OPTIONAL/OPTIONNEL" dans ce document doivent être interprétés comme défini dans les références [BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) et [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174)] uniquement lorsqu’ils apparaissent en majuscules, comme ci-dessus.

### 1.3 Namespace abbreviations

The following namespace abbreviations are used in this document:

| abréviation              | IRI                                                                              |
| ------------------------ | -------------------------------------------------------------------------------- |
| dwc:     | http://rs.tdwg.org/dwc/terms/    |
| dwciri:  | http://rs.tdwg.org/dwc/iri/      |
| dc:      | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/                        |

## 2 Use of Terms

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), terms in the `dwciri:` namespace MUST be used with IRI values. Terms in the `dwc:` and `dc:` namespaces are generally expected to have string literal values. Values for terms in the `dcterms:` namespace will depend on the details of the term. See [Section 3 of the Darwin Core RDF Guide](../rdf/#3-term-reference-normative) for details.

## 3 Term indices
