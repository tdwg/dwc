# 達爾文核心標準術語清單

標題
: 達爾文核心標準術語清單

版本發行日期
: {ratification_date}

建立日期

生物多樣性訊息標準的一部分
: <{standard_iri}>

此版本
: <{current_iri}{ratification_date}>

最新版本
: <{current_iri}>

{previous_version_slot}

摘要：達爾文核心標準是傳輸生物多樣性資訊的詞彙標準。 本文件列出了目前在詞彙表中使用的命名空間中的所有術語。

貢獻者
: {contributors}

Creator
: {creator}

書目引用
: {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1 簡介 (資訊性)

本文件包含的詞彙是達爾文核心標準詞彙 (<http://rs.tdwg.org/version/dwc/{ratification_date}>) 最新版本的一部分。

本文件包含四個命名空間中的詞彙，這些命名空間包含推薦的詞彙：「dwc:」、「dwciri:」、「dc:」和「dcterms:」。 但是，這些命名空間中的某些術語已被廢棄或取代，不應再使用。 詞彙 metadata 中會註明廢棄或取代。 本文件不包含只有已廢棄術語的命名空間，但可以透過取消參照其 IRI 來檢索這些術語的詮釋資料。

如需只包含目前推薦術語的簡化清單，請參閱 [達爾文核心標準快速參考指南](../terms/)。

### 1.1 本文件內容的現況

第 1 和第 3 節為非規範性。

第 2 節為規範性。

在第 4 節中，「Term IRI」和「Definition」的值為規範性。 「Term Name」的值為非規範性，不過可以預期命名空間縮寫是術語命名空間的常用前綴。  `Label` and the values of all other properties (such as `Examples` and `Notes`) are non-normative.

### 1.2 RFC 2119 關鍵字

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) and [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174) when, and only when, they appear in all capitals, as shown here.

### 1.3 Namespace abbreviations

The following namespace abbreviations are used in this document:

| abbreviation             | IRI                                                                              |
| ------------------------ | -------------------------------------------------------------------------------- |
| dwc:     | http://rs.tdwg.org/dwc/terms/    |
| dwciri:  | http://rs.tdwg.org/dwc/iri/      |
| dc:      | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/                        |

## 2 使用條款

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), terms in the `dwciri:` namespace MUST be used with IRI values. Terms in the `dwc:` and `dc:` namespaces are generally expected to have string literal values. Values for terms in the `dcterms:` namespace will depend on the details of the term. See [Section 3 of the Darwin Core RDF Guide](../rdf/#3-term-reference-normative) for details.

## 3 Term indices
