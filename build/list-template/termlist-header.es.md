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

Este documento proporciona una lista exhaustiva de términos, provenientes de múltiples espacios de nombres, que en algún momento han sido recomendados para su uso en Darwin Core. El estado de algunos términos, según se indica en sus metadatos, es obsoleto o ha sido reemplazado, por lo que dichos términos ya no deben utilizarse. Los términos de espacios de nombres que contienen únicamente términos obsoletos no se incluyen en este documento, pero los metadatos sobre esos términos pueden recuperarse desreferenciando sus IRI.

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

Debido a los requisitos de la [Sección 1.4.3 de la Guía RDF de Darwin Core](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), las propiedades del espacio de nombres `dwciri:` DEBEN utilizarse con valores IRI. Por lo general, se espera que las propiedades de los espacios de nombres `dwc:` y `dc:` tengan valores literales de cadena de texto. Los valores de las propiedades del espacio de nombres dcterms: dependerán de los detalles del término. Consulte la [Sección 3 de la Guía RDF de Darwin Core](../rdf/#3-term-reference-normative) para más detalles.

## 3. Índices de términos
