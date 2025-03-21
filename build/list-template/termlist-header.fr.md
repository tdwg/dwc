# Liste des termes de Darwin Core

Titre
: Liste des termes de Darwin Core

Date de publication de la version
: {ratification_date}

Date de création
: {created_date}

Fait partie de la norme TDWG
: <{standard_iri}>

Cette version
: <{current_iri}{ratification_date}>

Dernière version
: <{current_iri}>

{previous_version_slot}

Abstrait
: Darwin Core est un vocabulaire standard pour la transmission d'informations sur la biodiversité. Ce document répertorie tous les termes des espaces de noms actuellement utilisés dans le vocabulaire.

Contributeurs
: {contributors}

Créateur
: {creator}

Citation bibliographique
: {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>


## 1 Introduction (informative)

Ce document contient des termes qui font partie de la version la plus récente du vocabulaire de base de Darwin (<http://rs.tdwg.org/version/dwc/{ratification_date}>).

Ce document inclut des termes dans quatre espaces de noms contenant des termes recommandés : `dwc:`, `dwciri:`, `dc:` et  `dcterms:`. Cependant, certains termes de ces espaces de noms sont obsolètes ou remplacés et ne doivent plus être utilisés. L'obsolescence ou le remplacement est indiqué dans les métadonnées du terme. Les espaces de noms qui contiennent uniquement des termes obsolètes ne sont pas inclus dans ce document, mais les métadonnées relatives à ces termes peuvent être récupérées en déréférençant leurs IRI.

Pour une liste simplifiée contenant uniquement les termes actuellement recommandés, consultez le [Guide de référence rapide Darwin Core](../terms/).

### 1.1 État du contenu de ce document

Les sections 1 et 3 ne sont pas normatives.

L'article 2 est normatif.

Dans la section 4, les valeurs de `Term IRI` et `Definitions` ont normatives. Les valeurs de `Term Name` ne sont pas normatives, bien que l'on puisse s'attendre à ce que le préfixe d'abréviation d'espace de noms soit celui couramment utilisé pour le terme espace de noms. `Label` et les valeurs de toutes les autres propriétés (telles que `Examples` et `Notes`) ne sont pas normatives.

### 1.2 RFC 2119 key words

Les mots clés « DOIT », « NE DOIT PAS », « OBLIGATOIRE », « DEVRA », « NE DEVRA PAS », « DEVRAIT », « NE DEVRAIT PAS », « RECOMMANDÉ », « PEUT » et « FACULTATIF » dans ce document doivent être interprétés comme décrit dans [le BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) et [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174) lorsque, et seulement lorsque, ils apparaissent en majuscules, comme indiqué ici.

### 1.3 Abréviations d'espaces de noms

Les abréviations d'espace de noms suivantes sont utilisées dans ce document :

| abréviation | IRI |
| --- | --- |
| dwc: | http://rs.tdwg.org/dwc/terms/ |
| dwciri: | http://rs.tdwg.org/dwc/iri/ |
| dc: | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/ |

## 2 Utilisation des termes

En raison des exigences de [la section 1.4.3 du Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), les terms de l'`dwciri:` DOIVENT être utilisés avec des valeurs IRI. Les terms des espaces de noms `dwc:` et `dc:` doivent généralement avoid dev valeurs littérales de chaîne. Les valeurs des termes de l'`determs:` espace de noms dépendant des détails du terme. Voir [la section 3 du Darwin Core RDF Guide](../rdf/#3-term-reference-normative) pour plus de détails.

## 3 Indices de terme
