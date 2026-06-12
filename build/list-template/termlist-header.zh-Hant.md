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

建立者
: {creator}

書目引用
: {creator}. {year}. {document_title}. {publisher}. <{current_iri}{ratification_date}>

## 1 簡介 (資訊性)

本文件包含的術語是達爾文核心標準詞彙 (<http://rs.tdwg.org/version/dwc/{ratification_date}>) 最新版本的一部分。

This document provides a comprehensive list of terms, from multiple namespaces, that have ever been recommended for use in Darwin Core. The status of some terms, as noted in their metadata, is deprecated or superseded and such terms should no longer be used. Terms from namespaces that contain only deprecated terms are not included in this document, but metadata about those terms can be retrieved by dereferencing their IRIs.

如需只包含目前推薦術語的簡化清單，請參閱 [達爾文核心標準快速參考指南](../terms/)。

### 1.1 本文件內容的現況

第 1 和第 3 節為非規範性。

第 2 節為規範性。

在第 4 節中，`Term IRI`和`Definition`的值為規範性。 `Term Name`的值為非規範性，不過可以預期命名空間縮寫是術語命名空間的常用前綴。  標籤`Label`及其他所有屬性（例如範例`Examples`與備註`Notes`）的值都是非規範性。

### 1.2 RFC 2119 關鍵字

關鍵字「必須」、「不得」、「要求」、「應」、「不應」、「應當」、「不應當」、「建議」、「可」、「可選」的定義，請參照[BCP 14](https://www.rfc-editor.org/info/bcp14) [\[RFC 2119\]](https://datatracker.ietf.org/doc/html/rfc2119) 及 [\[RFC 8174\]](https://datatracker.ietf.org/doc/html/rfc8174) 所定義之含義，惟詞彙須以全大寫形式呈現時方適用。

### 1.3 命名空間縮寫

本文件使用以下命名空間縮寫：

| 縮寫                       | IRI                                                                              |
| ------------------------ | -------------------------------------------------------------------------------- |
| ac:      | http://rs.tdwg.org/ac/terms/     |
| dwc:     | http://rs.tdwg.org/dwc/terms/    |
| dwciri:  | http://rs.tdwg.org/dwc/iri/      |
| dc:      | http://purl.org/dc/elements/1.1/ |
| dcterms: | http://purl.org/dc/terms/                        |

## 2 使用條款

Due to the requirements of [Section 1.4.3 of the Darwin Core RDF Guide](../rdf/#143-use-of-darwin-core-terms-in-rdf-normative), properties in the `dwciri:` namespace MUST be used with IRI values. Properties in the `dwc:` and `dc:` namespaces are generally expected to have string literal values. Values for properties in the `dcterms:` namespace will depend on the details of the term. 詳情請參閱[達爾文核心 RDF 指南第 3 節](../rdf/#3-term-reference-normative)。

## 3 術語索引
