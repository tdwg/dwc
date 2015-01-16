<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Darwin Core XML Guide</title>
    <link href="http://rs.tdwg.org/dwc/" rel="schema.DwC">
    <meta name="DC.title" content="$TITLE">
    <meta name="DC.description" content="$DESCRIPTION">
    <meta name="DC.modified" content="$LAST_MODIFIED">

    <meta name="dcterms.subject" content="biodiversity, standards">
    <meta name="dcterms.creator" content="Darwin Core Task Group">
    <meta name="dcterms.contributor" content="John Wieczorek (MVZ)">
    <meta name="dcterms.contributor" content="Markus Döring (GBIF)">
    <meta name="dcterms.contributor" content="Renato De Giovanni (CRIA)">
    <meta name="dcterms.contributor" content="Tim Robertson (GBIF)">
    <meta name="dcterms.contributor" content="Dave Vieglais (KUNHM)">
    <meta name="dcterms.contributor" content="Peter Desmet (INBO)">
    <meta name="dcterms.publisher" content="Biodiversity Information Standards (TDWG)">
    <meta name="dcterms.license" content="http://creativecommons.org/licenses/by/4.0/legalcode">
    <meta name="dcterms.language" content="en">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="$BASEassets/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="$BASEassets/main.css">
</head>

<body>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="$BASEindex.html">Darwin Core</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="$MENU/TERMS/INDEX"><a href="$BASEterms/index.html">Terms</a></li>
                    <li class="$MENU/EXAMPLES/INDEX"><a href="$BASEexamples/index.html">Examples</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Reference <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li class="$MENU/CHANGE_POLICY"><a href="$BASEchange_policy.html">Change policy</a></li>
                            <li class="divider"></li>
                            <li class="$MENU/SIMPLE_DWC"><a href="$BASEsimple_dwc.html">Simple Darwin Core</a></li>
                            <li class="divider"></li>
                            <li class="$MENU/GUIDES/TEXT/INDEX"><a href="$BASEguides/text/index.html">Text guide</a></li>
                            <li class="$MENU/GUIDES/XML/INDEX"><a href="$BASEguides/xml/index.html">XML guide</a></li>
                            <li class="$MENU/GUIDES/RDF/INDEX disabled"><a href="$BASEguides/rdf/index.html">RDF guide</a></li>
                            <li class="divider"></li>
                            <li class="$MENU/TERMS/HISTORY"><a href="$BASEterms/history.html">Term history</a></li>
                            <li class="$MENU/TERMS/DECISIONS"><a href="$BASEterms/decisions.html">Term decisions</a></li>
                            <li class="$MENU/TERMS/MAPPINGS"><a href="$BASEterms/mappings.html">Term mappings</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="$MENU/RESOURCES/INDEX"><a href="$BASEresources/index.html">Resources</a></li>
                    <li><a href="http://github.com/tdwg/dwc">Source</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="content">
        <div class="container">
            <div class="page-header">
                <h1>$TITLE</h1>
                <p>$DESCRIPTION</p>
            </div>
