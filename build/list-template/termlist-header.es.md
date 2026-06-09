# Lista de Términos Darwin Core

Título
: Lista de Términos Darwin Core

Fecha de publicación de la versión
: {ratification_date}

Fecha de creación
: {created_date}

Parte del Estándar TDWG
: <{standard_iri}>

Esta versión
: <{current_iri}{ratification_date}>

Última versión
: <{current_iri}>

{previous_version_slot}

Resumen:
Darwin Core es vocabulario estándar para la transmisión de información sobre biodiversidad. Este documento lista todos los términos en los espacios de nombres actualmente utilizados en el vocabulario.

Colaboradores
: {contributors}

Creador
: {creator}

Cita bibliográfica
: {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1. Introducción (Informativa)

Este documento contiene los términos que forman parte de la versión más reciente del vocabulario Darwin Core (<http://rs.tdwg.org/version/dwc/{ratification_date}>).

This document provides a comprehensive list of terms, from multiple namespaces, that have ever been recommended for use in Darwin Core. The status of some terms, as noted in their metadata, is deprecated or superseded and such terms should no longer be used. Terms from namespaces that contain only deprecated terms are not included in this document, but metadata about those terms can be retrieved by dereferencing their IRIs.

Para una lista simplificada que solo contiene los términos actualmente recomendados, consulte la [Guía de Referencia Rápida de Darwin Core](../terms/).

### 1.1 Estado del contenido de este documento

Las secciones 1 y 3 son no normativas.

La sección 2 es normativa.

En la sección 4, los valores del `Término IRI` y la `Definición` son normativos. Los valores del 'Nombre del Término' no son normativos, aunque se espera que el prefijo abreviado del espacio de nombre utilizado sea el más comúnmente asociado a ese espacio.  La `Etiqueta` y los valores de todas las demás propiedades (como `Ejemplos` y `Notas`) son no normativos.

### 1.2 Palabras clave RFC 2119

Las palabras clave "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY" y "OPTIONAL" en este documento deben interpretarse como se describe en [BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) y [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174), únicamente cuando aparezcan en mayúsculas, tal como se muestra aquí.

### 1.3 Abreviaciones de espacio de nombres

Se utilizan las siguientes abreviaciones de espacios de nombres en este documento:

| Abreviación              | IRI                                                                              |
| ------------------------ | -------------------------------------------------------------------------------- |
| ac:      | http://rs.tdwg.org/ac/terms/     |
| dwc:     | http://rs.tdwg.org/dwc/terms/    |
| dwciri:  | http://rs.tdwg.org/dwc/iri/      |
| dc:      | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/                        |

## 2 Uso de los Términos

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), properties in the `dwciri:` namespace MUST be used with IRI values. Properties in the `dwc:` and `dc:` namespaces are generally expected to have string literal values. Values for properties in the `dcterms:` namespace will depend on the details of the term. Consulte la [Sección 3 de la Guía RDF de Darwin Core](../rdf/#3-term-reference-normative) para más detalles.

## 3. Índices de términos
