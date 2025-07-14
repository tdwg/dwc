# Darwin Core 用語一覧

タイトル
: Darwin Core 用語一覧

バージョン発行日
: {ratification_date}

作成日
: {created_date}

TDWGスタンダードでのパート
: <{standard_iri}>

このバージョン
: <{current_iri}{ratification_date}>

最新のバージョン
: <{current_iri}>

以前のバージョン
: {previous_version_slot}

要旨
: Darwin Core は生物多様性に関する情報を伝えるための語彙の標準です。 この文書では、この語彙で現在使用されている名前空間のすべての用語を一覧にしています。

協力者
: {contributors}

作成者
: {creator}

書誌的引用
: {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1 イントロダクション（参考情報）

この文書には、Darwin Core 語彙の最新のバージョン（<http://rs.tdwg.org/version/dwc/{ratification_date}>）の用語が含まれています。

この文書は、推奨される用語を含む以下の4つの名前空間の用語で構成されています： `dwc:`、`dwciri:`、`dc:`、 `dcterms:` しかし、これらの名前空間に属するいくつかの用語は、非推奨であったり差し替えられたりしていて、もはや使用すべきではありません。 非推奨や差し替えについては用語のメタデータに記載されています。 非推奨の用語のみを含む名前空間はこの文書では取り扱っていませんが、それらの用語のメタデータは、それらのIRIを逆参照することで取得できます。

現在推奨されている用語のみの簡易な一覧は、[Darwin Core クイックリファレンスガイド](../terms/) でご覧になれます。

### 1.1 この文書の内容のステータス

セクション 1 および 3 は非規範的なものです。

セクション 2 は規範的な内容です。

セクション 4 では、`用語のIRI（Term IRI）`と`定義（Definition）`の値は規範的です。 `用語の名前（Term Name）`の値は非規範的ですが、名前空間の略語の接頭辞はその用語の名前空間で一般的に使われるものであると予想できます。  `ラベル（Label）`とそのほかのすべての属性（`例（Examples）`や`備考（Notes）`など）は非規範的なものです。

### 1.2 RFC 2119 キーワード

この文書における "MUST"、"MUST NOT"、"REQUIRED"、"SHALL"、"SHALL NOT"、"SHOULD"、"SHOULD NOT"、"RECOMMENDED"、"MAY"、"OPTIONAL" というキーワードは、ここに示されているようにすべて大文字で記載されている場合に限り、[BCP 14](https://www.rfc-editor.org/info/bcp14)、[\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) 、[\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174) に記述されているように解釈されます。

### 1.3 名前空間の略語

以下の名前空間の略語がこの文書で使用されています：

| 略語                       | IRI                                                                              |
| ------------------------ | -------------------------------------------------------------------------------- |
| dwc:     | http://rs.tdwg.org/dwc/terms/    |
| dwciri:  | http://rs.tdwg.org/dwc/iri/      |
| dc:      | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/                        |

## 2 用語の使い方

[セクション 1.4.3 の Darwin Core RDF ガイド](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative) の要件により、 `dwciri:` 名前空間の用語は、IRI値と共に使用しなければなりません（MUST）。 `dwc:` と `dc:` 名前空間の用語は通常、文字列リテラル値を持つことを想定されています。 `dcterms:` 名前空間の用語の値は、用語の詳細により異なります。 詳細は[セクション 3 のDarwin Core RDF ガイド](../rdf/#3-term-reference-normative)をご覧ください。

## 3 用語の索引
