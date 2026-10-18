# {document_title}

Title
: {document_title}

Дата публикации версии
: {ratification_date}

Дата создания
: {created_date}

Часть стандарта TDWG
: <{standard_iri}>

Текущая версия
: <{current_iri}{ratification_date}>

Последняя версия: {current_iri}

Предыдущая версия {previous_version_slot}

Abstract
: {abstract}

Авторы: {contributors}

Создатель:{creator}

Библиографическая ссылка:{creator}. Год{year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1 Введение (Информативное)

This document provides a comprehensive list of terms, from multiple namespaces, that are or have been recommended for use in Darwin Core as of this vocabulary version. The status of some terms, as noted in their metadata, is deprecated or superseded. Such terms should no longer be used. Terms from namespaces that contain only deprecated terms are not included in this document, but metadata about those terms can still be retrieved by dereferencing their IRIs.

Для упрощенного списка, содержащего только рекомендуемые в настоящее время термины, обратитесь к [Darwin Core Quick Reference Guide](../terms/).

### 1.1 Статус содержания документа

Разделы 1 и 3 являются ненормативными.

Раздел 2 является нормативным.

В разделе 4 значения `Термина IRI` и `Определения` являются нормативными. Значения `Term Name` не являются нормативными, хотя можно ожидать, что префикс сокращения пространства имен является одним из общепринятых префиксов, используемых для термина пространство имен.  `Label` и значения всех остальных свойств (таких, как `Examples` и `Notes`) являются ненормативными.

### 1.2 Ключевые слова RFC 2119

Ключевые слова «MUST», «MUST NOT», «REQUIRED», «SHALL», «SHALL NOT», «SHOULD», «SHOULD NOT», «RECOMMENDED», «MAY» и «OPTIONAL» в настоящем документе должны толковаться так, как это описано в [BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) и [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174) только тогда, когда они написаны заглавными буквами.

### 1.3 Сокращения пространств имен

В этом документе используются следующие сокращения пространств имен:

| сокращение   | IRI                                                                                                         |
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

## 2 Применение терминов

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), properties in the `chronoiri:`, `dwciri:` and `ecoiri:` namespaces MUST be used with IRI values. Values for properties in the `chrono:`, `dwc:`, `eco:` and `dc:` namespaces are generally expected to have string literal values. Values for properties in the `ac:` and `dcterms:` namespaces will depend on the details of the individual terms. Подробности см. в [Разделе 3 руководства Darwin Core RDF](../rdf/#3-term-reference-normative).

## 3 Индексы терминов
