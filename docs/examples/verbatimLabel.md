# verbatimLabel Examples

Title
: verbatimLabel Examples

Date modified
: 2023-09-14

Date created
: 2023-06-14

Part of TDWG Standard
: Not formally part of any standard. 

Abstract
: This document provides examples and guidance for the use of Darwin Core verbatimLabel.

Contributors
: Tommy McElrath, Debbie Paul, Christian Bölling, Tim Robertson

Creator
: Darwin Core Maintenance Group

Bibliographic citation
: Darwin Core Maintenance Group. 2023. verbatimLabel examples. Biodiversity Information Standards (TDWG). <https://dwc.tdwg.org/examples/verbatimLabel>

The following provides examples and guidance for the use of Darwin Core verbatimLabel.

## Example 1

For a label affixed to a pinned insect specimen, the dwc:verbatimLabel would contain:

> ILL: Union Co.
> Wolf Lake by Powder Plant
> Bridge. 1 March 1975
> Coll. S. Ketzler, S. Herbert
> 
> Monotoma
> longicollis 4 ♂
> Det TC McElrath 2018
> 
> INHS
> Insect Collection
> 456782

With comment `verbatimLabel derived from human transcription` added in dwc:occurrenceRemarks.

## Example 2

When using Optical Character Recognition (OCR) techniques against an herbarium sheet, the dwc:verbatimLabel would contain:

> 0 1 2 3 4 5 6 7 8 9 10
> cm	copyright reserved
> The New York
> Botanical Garden
> 
> 
> NEW YORK
> BOTANICAL
> GARDEN
> 
> 
> NEW YORK BOTANICAL GARDEN
> ACADEMY OF NATURAL SCIENCES OF PHILADELPHIA
> EXPLORATION OF BERMUDA
> NO. 355
> Cymbalaria Cymbalaria (L.) Wettst
> Roadside wall, The Crawl.
> STEWARDSON BROWN
> }COLLECTORS AUG. 31-SEPT. 20, 1905
> N.L. BRITTON
> 
> 
> NEW YORK BOTANICAL GARDEN
> 00499439
      
With comment `verbatimLabel derived from unadulterated OCR output` added in dwc:occurrenceRemarks.
