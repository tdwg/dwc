<?xml version="1.0" encoding="UTF-8"?>
<!-- $Rev: 1321 $ -->
<!-- $Date: 2007-09-10 17:23:32 +0200 (Mon, 10 Sep 2007) $ -->
<!-- $Author: RogerHyam $ -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" version="1.0"
     xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:dwc="http://rs.tdwg.org/dwc/terms/" xmlns:dwctype="http://rs.tdwg.org/dwc/terms/vocabulary/"
     xmlns:owl="http://www.w3.org/2002/07/owl#">
     <xsl:output method="html" encoding="UTF-8" indent="yes"/>
     <xsl:variable name="wikiPrefix">http://code.google.com/p/darwincore/wiki/</xsl:variable>
     <xsl:template match="rdf:RDF">
          <html>
               <head>
                    <title>Darwin Core Terms</title>
                    <link rel="stylesheet" type="text/css" href="human.css"/>
               </head>
               <body>
                    <div class="container">

                         <div id="RDF-header">
                              <div id="logoBox">
                                   <a href="http://www.tdwg.org">
                                        <img src="http://rs.tdwg.org/ontology/voc/images/logo_RDF.gif" alt="TDWG logo" width="117"
                                             height="67" border="0" id="logo"/>
                                   </a>
                              </div>
                              <div id="RDF-header-title"> Darwin Core Terms</div>
                         </div>

                         <div id="RDF-title-bar">
                              <img src="http://rs.tdwg.org/ontology/voc/images/left-bar-top.gif" alt="left bar top"/>
                         </div>

                         <div id="left-bar">
                              <div id="left-bar-menu">
                                   <a href="http://www.tdwg.org">TDWG home</a>
                                   <div class="separator"><hr/></div>
                                   <a href="http://128.32.146.144/dcterms/index.htm">DarwinCore Home</a>
                                   <a href="http://code.google.com/p/darwincore/">DarwinCore Google Code</a>                                   
                                   <div class="separator"><hr/></div>
                                   <a href="http://128.32.146.144/dcterms/terms/index.htm">Terms</a><br/>
                                   <a href="http://128.32.146.144/dcterms/terms/type-vocabulary/index.htm">Type Vocabulary</a><br/>
                                   <a href="http://128.32.146.144/dcterms/terms/namespace/index.htm">Namespaces</a><br/>
                                   <a href="http://128.32.146.144/dcterms/terms/xsd/guide/index.htm">XML encoding</a><br/>
                                   <a href="">Text encoding</a><br/>
                              </div>
                         </div>

                         <div id="RDF-main">

                              <h1>
                                   Darwin Core Terms
                              </h1>
                              <p>(This is an HTML view of the RDF term definitions. Use View-Source to
                                   see the underlying RDF.) </p>
                              <xsl:apply-templates select="rdf:Description"/>
                         </div>
                    </div>
               </body>
          </html>
     </xsl:template>


     <xsl:template match="rdf:Description">
          <xsl:variable name="currentTerm">
               <xsl:value-of select="concat('#', @rdf:ID)"/>
          </xsl:variable>

          <a>
               <xsl:attribute name="name">
                    <xsl:value-of select="@rdf:ID"/>
               </xsl:attribute>
          </a>

          <xsl:if test="@rdf:ID">
               <h2>Term: <xsl:value-of select="@rdf:ID"/></h2>
          </xsl:if>
          <h3><xsl:value-of select="@rdf:about"/></h3>
          <dl>
               <xsl:apply-templates select="rdfs:*"/>
          </dl>
          <dl>
               <xsl:apply-templates select="rdf:*"/>
          </dl>
          <dl>
               <xsl:apply-templates select="dcterms:*"/>
          </dl>
          
          <dl>
               <dt>
                    <a>
                         <xsl:attribute name="href">
                              <xsl:value-of select="concat($wikiPrefix ,@rdf:ID)"/>
                         </xsl:attribute> Discussion Page. </a>
               </dt>
               <dd>Discussions related to this term on the wiki.</dd>
          </dl>
     </xsl:template>     
     

     <!-- RDF links -->     
     <xsl:template match="rdf:type">
          <dt>
               Type
          </dt>
          <dd>
               <a>
                    <xsl:attribute name="href"><xsl:value-of select="./@rdf:resource"/></xsl:attribute><xsl:value-of select="./@rdf:resource"/></a>               
          </dd>
     </xsl:template>     
     <!-- RDFS links -->
     <xsl:template match="rdfs:label">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://www.w3.org/2000/01/rdf-schema#label</xsl:attribute> Label </a>
          </dt>
          <dd>
               <xsl:value-of select="."/>
          </dd>
     </xsl:template>

     <xsl:template match="rdfs:comment">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://www.w3.org/2000/01/rdf-schema#comment</xsl:attribute> Comment </a>
          </dt>
          <dd>
               <xsl:value-of select="."/>
          </dd>
     </xsl:template>

     <xsl:template match="rdfs:isDefinedBy">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://www.w3.org/2000/01/rdf-schema#isDefinedBy</xsl:attribute> Is Defined By
               </a>
          </dt>
          <dd>
               <a>
                    <xsl:attribute name="href">
                         <xsl:value-of select="./@rdf:resource"/>
                    </xsl:attribute>
                    <xsl:value-of select="./@rdf:resource"/>
               </a>
          </dd>
     </xsl:template>

     <xsl:template match="rdfs:subClassOf">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://www.w3.org/2000/01/rdf-schema#subClassOf</xsl:attribute> Sub Class Of
               </a>
          </dt>
          <dd>
               <a>
                    <xsl:attribute name="href">
                         <xsl:value-of select="./@rdf:resource"/>
                    </xsl:attribute>
                    <xsl:value-of select="./@rdf:resource"/>
               </a>
          </dd>
     </xsl:template>
     <!-- subPropertyOf -->
     <xsl:template match="rdfs:subPropertyOf">
          <dt>
               Refines
          </dt>
          <dd>
               <a>
                    <xsl:attribute name="href"><xsl:value-of select="./@rdf:resource"/></xsl:attribute><xsl:value-of select="./@rdf:resource"/></a>               
          </dd>
     </xsl:template>
     <xsl:template match="rdfs:range">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://www.w3.org/2000/01/rdf-schema#range</xsl:attribute> Range </a>
          </dt>
          <dd>
               <a>
                    <xsl:attribute name="href">
                         <xsl:value-of select="./@rdf:resource"/>
                    </xsl:attribute>
                    <xsl:value-of select="./@rdf:resource"/>
               </a>
          </dd>
     </xsl:template>

     <xsl:template match="rdfs:domain">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://www.w3.org/2000/01/rdf-schema#domain</xsl:attribute> Class </a>
          </dt>
          <dd>
               <a>
                    <xsl:attribute name="href">
                         <xsl:value-of select="./@rdf:resource"/>
                    </xsl:attribute>
                    <xsl:value-of select="./@rdf:resource"/>
               </a>
          </dd>
     </xsl:template>

     <!-- DC Links -->
     <xsl:template match="dc:title">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://purl.org/dc/elements/1.1/title</xsl:attribute>Title</a>
          </dt>
          <dd>
               <xsl:value-of select="."/>
          </dd>
     </xsl:template>
     <xsl:template match="dc:creator">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://purl.org/dc/elements/1.1/creator</xsl:attribute>Creator</a>
          </dt>
          <dd>
               <xsl:value-of select="."/>
          </dd>
     </xsl:template>

     <xsl:template match="dc:publisher">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://purl.org/dc/elements/1.1/publisher</xsl:attribute>Publisher</a>
          </dt>
          <dd>
               <xsl:value-of select="."/>
          </dd>
     </xsl:template>

     <xsl:template match="dcterms:description">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://purl.org/dc/elements/1.1/description</xsl:attribute>Description</a>
          </dt>
          <dd>
               <xsl:value-of select="."/>
          </dd>
     </xsl:template>

     <xsl:template match="dcterms:issued">
          <dt>
               <a>
                    <xsl:attribute name="href"
               >http://purl.org/dc/terms/issued</xsl:attribute>Issued</a>
          </dt>
          <dd>
               <xsl:value-of select="."/>
          </dd>
     </xsl:template>

     <xsl:template match="dcterms:modified">
          <dt>
               <a>
                    <xsl:attribute name="href"
                    >http://purl.org/dc/terms/modified</xsl:attribute>Modified</a>
          </dt>
          <dd>
               <xsl:value-of select="."/>
          </dd>
     </xsl:template>


     <!-- hasVersion -->
     <xsl:template match="dcterms:hasVersion">
          <dt>
               Version
          </dt>
          <dd>
               <a>
               <xsl:attribute name="href"><xsl:value-of select="./@rdf:resource"/></xsl:attribute><xsl:value-of select="./@rdf:resource"/></a>               
          </dd>
     </xsl:template>
     
</xsl:stylesheet>
