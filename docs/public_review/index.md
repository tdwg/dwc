# Darwin Core Public Review - July 2026

## 1 Introduction

This is the first public review that is part of a three-times-per-year update and release cycle for the Darwin Core Standard. It follows the change procedures established in the [TDWG Vocabulary Maintenance Specification](http://rs.tdwg.org/vms/doc/specification/). 

### 1.1 Timeline

The public review will consist of 30 days of active discussion during which the proposed changes may be modified, followed by a 30 day period with no dissenting opinion. Any proposals for which consensus is reached during the first 30 day discussion period will be included in this release cycle. Those proposals for which dissent and discussion continues beyond the first 30 day period will be considered for the following release cycle. 

It is anticipated that changes achieving consensus in this cycle will be published in early October 2026, subject to Executive Committee ratification of the changes, with public review for the next cycle beginning in early November.

### 1.2 Categories of changes included in this review

Because of the extended review of the Darwin Core Data Package (DwC-DP) and Conceptual Model additions to Darwin Core, a large number of other proposals have accumulated. To control the size of this review, the proposals under consideration have been limited to issues that arose as a result of the previous review, term proposals associated with the Mineralogy extension of Darwin Core, and ratification of the first set of schemas built based on the DwC-DP guide. Other issues will be included in the next review cycle.

### 1.3 How to participate

Each proposed change is described in an issue in the Darwin Core GitHub issues tracker. To participate in the discussion of a proposed change, enter a comment in the issue for that change. The Darwin Core Maintenance Group will monitor the discussion and work with the community and those who created the proposals to modify the proposals in a way that achieves consensus. If you have any questions about the review, contact the Darwin Core Maintenance Group convener at [steve.baskauf@gmail.com](mailto:steve.baskauf@gmail.com) or any [member of the Maintenance Group](https://www.tdwg.org/community/dwc/). 

## 2 Proposed changes by category

To make it easier to find and comment on issues of relevance to different parts of the community, similar issues have been grouped under categorical umbrella issues linked in the following sections. To view all issues under consideration during this cycle without categorization, see the [First post-DwC-DP release milestone](https://github.com/tdwg/dwc/issues?q=is%3Aissue%20state%3Aopen%20milestone%3A%22First%20post-DwC-DP%20release%22).

Note: some [issues in this milestone are only related to document maintenance](https://github.com/tdwg/dwc/issues/902) and do not include proposals that require public comment. 

### 2.1 Mineralogy extension term proposals

There are a number of term addition proposals that have been made as a result of the work of the [Mineralogy Extension Task Group](https://www.tdwg.org/community/esp/mineralogy/) over the past several years. Although the extension primarily serves earth science collections, several of its terms have broader applicability across botanical and zoological collections. Reviewers from all disciplines are therefore encouraged to comment. 

The part of the Task Group's work included in this review consists only of term additions to Darwin Core. Other aspects of the Task Group's work (such as controlled vocabularies and guides) are not included in this review but may be proposed in future reviews. The terms that are currently proposed to be added to Darwin Core to support the Mineralogy extension have been grouped under the umbrella [issue 900](https://github.com/tdwg/dwc/issues/900).

The Task Group has prepared a [user feedback and implementation experience report](https://docs.google.com/document/d/1SaX-MOtBA_JNdnoz8b-cwpUYswu48qogLFxVqO4BYeo/edit?usp=sharing) that provides background on how they established the scope of their work and describes implementation testing. Please note that that term names, IRIs, and metadata given in the report may differ from what is proposed here, since the report reflects the state of their work at the time of testing.  

### 2.2 Initial Darwin Core Data Package (DwC-DP) schemas

As a result of the discussion that took place during the DwC-DP public review, there was a consensus that the schemas built based on the DwC-DP guide would be ratified as part of the Darwin Core Standard and that the Darwin Core Maintenance Group would take responsibility for developing them, moving them through the review process, and publishing them as versioned resources. The review of the first draft of schemas is taking place during this cycle. 

The schemas are linked to [issue 903](https://github.com/tdwg/dwc/issues/903). Given that the raw schemas are machine-readable, that issue also has links to two tools that will make it easier for humans to examine the content of the schemas.

### 2.3 Guidance for values of Humboldt vocabulary terms having boolean values

There are several related term proposals that clarify how values should be provided for terms in the Humboldt vocabulary for ecological inventories. They are grouped in [issue 901](https://github.com/tdwg/dwc/issues/901)

### 2.4 Corrections to terms related to units

Two terms that were ratified recently had value recommendations that were not usable. The proposal in [issue 925](https://github.com/tdwg/dwc/issues/925) corrects that problem.

### 2.5 Organization of Humboldt extension terms within new classes.

Previously, all Humboldt extension terms were organized within the dwc:Event class. However, for use with DwC-DP, it is better to organize them within classes so that they make sense when used with DwC-DP. The [umbrella issue 933](https://github.com/tdwg/dwc/issues/933) contains subissues organizing Humboldt terms accordingly.

### 2.6 Remaining issues not falling in the previous categories

The remaining issues not included in the categories above can be filtered using [this link](https://github.com/tdwg/dwc/issues?q=is%3Aissue%20state%3Aopen%20milestone%3A%22First%20post-DwC-DP%20release%22%20-parent-issue%3Atdwg%2Fdwc%23900%20-parent-issue%3Atdwg%2Fdwc%23901%20-parent-issue%3Atdwg%2Fdwc%23902%20-parent-issue%3Atdwg%2Fdwc%23903%20-parent-issue%3Atdwg%2Fdwc%23933)