# {document_title}

Title
: {document_title}

バージョン発行日
: {ratification_date}

作成日
: {created_date}

TDWG標準での該当箇所
: <{standard_iri}>

このバージョン
: <{current_iri}{ratification_date}>

最新バージョン
: <{current_iri}>

前のバージョン
{previous_version_slot}

Abstract
: {abstract}

貢献者
: {contributors}

作成者
: {creator}

書誌的引用
: {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1 イントロダクション（参考情報）

This document provides a comprehensive list of terms, from multiple namespaces, that are or have been recommended for use in Darwin Core as of this vocabulary version. The status of some terms, as noted in their metadata, is deprecated or superseded. Such terms should no longer be used. Terms from namespaces that contain only deprecated terms are not included in this document, but metadata about those terms can still be retrieved by dereferencing their IRIs.

現在推奨されている用語のみの簡易な一覧は、[Darwin Core クイックリファレンスガイド](../terms/) をご覧ください。

### 1.1 本文書の記載内容のステータス

第1節および第3節は規範的な内容ではありません。

第2節は規範的な内容です。

第4節では、`用語のIRI（Term IRI）`と `定義（Definition）`の値は規範的です。`用語の名前（Term Name）`の値は非規範的ですが、名前空間の略語の接頭辞はその用語の名前空間で一般的に使われるものであると予想できます。`ラベル（Label）`とそのほかのすべての属性（ `例（Examples）`や `備考（Notes）`など）は非規範的なものです。

### 1.2 RFC 2119 キーワード

この文書における "MUST"、"MUST NOT"、"REQUIRED"、"SHALL"、"SHALL NOT"、"SHOULD"、"SHOULD NOT"、"RECOMMENDED"、"MAY"、"OPTIONAL" というキーワードは、ここに示されているようにすべて大文字で記載されている場合に限り、[BCP 14](https://www.rfc-editor.org/info/bcp14)、[\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) 、[\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174) に記述されているように解釈されます。

### 1.3 名前空間の略語

以下の名前空間の略語がこの文書で使用されています：

| 略語           | IRI                                                                                                         |
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

## 2 用語の使い方

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), properties in the `chronoiri:`, `dwciri:` and `ecoiri:` namespaces MUST be used with IRI values. Values for properties in the `chrono:`, `dwc:`, `eco:` and `dc:` namespaces are generally expected to have string literal values. Values for properties in the `ac:` and `dcterms:` namespaces will depend on the details of the individual terms. 詳細は [Darwin Core RDF ガイドのセクション 3](../rdf/#3-term-reference-normative) をご覧ください。

## 3 用語の索引
