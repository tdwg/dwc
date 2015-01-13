#!/usr/bin/env python

''' 
easy_install pip
pip install -r requirements.txt
'''

import yaml
from Cheetah.Template import Template
from rdflib import Graph, URIRef, Namespace, Literal
from rdflib.namespace import RDFS

DWC=Namespace("http://rs.tdwg.org/dwc/terms/")
DC=Namespace("http://purl.org/dc/terms/")
DWCA=Namespace("http://rs.tdwg.org/dwc/terms/attributes/")
REC_LEVEL=DWC.term("Record-level")


def buildHtml():
    data=parseTerms()
    print """building html files"""
    html = Template(file="terms.tmpl", searchList=[data])
    recommended = open("../terms/index.html", "w")
    recommended.write(str(html))
    recommended.close()    

def buildDownloads():
    print """building downloads"""
    print """TBD"""

def anchorLinks(x):
    print """TBD"""
    
def getTermDef(name, g):
    t={}
    if name.startswith("DC_"):
        name=name[3:]
        t["name"]="dcterms:"+name
        t["name_simple"]=name
        t["name_prefixed"]=t["name"]
        t["fullname"]=t["name"]
        uri=DC.term(name)
    else:
        t["name"]=name
        t["name_simple"]=name
        t["name_prefixed"]="dwc:"+name
        uri=DWC.term(name)
        if uri==REC_LEVEL:
            uri=None
    t["uri"]=uri
    if uri is not None:
        t["label"]=g.value(subject=uri, predicate=RDFS.label)
        t["class"]=g.value(subject=uri, predicate=DWCA.organizedInClass)
        t["definition"]=g.value(subject=uri, predicate=RDFS.comment)
        t["comment"]=g.value(subject=uri, predicate=DC.description)
        t["version"]=g.value(subject=uri, predicate=DC.hasVersion)
        if t["definition"] is None:
            raise AssertionError("Unknown term definition "+str(uri))
    return t
    
def parseTerms():
    g = Graph()
    g.parse("../terms/dwc_normative.rdf")
    # we remove the abstract dwc term accordingTo
    g.remove((DWC.accordingTo,None,None))
    g.remove((DWC+"",None,None))
    if (DWC+"", None, None) in g:
        raise AssertionError("DWC NS in here")
    with open('dc.yaml', 'r') as dcf:
        dc = yaml.load(dcf)
    for t in dc:
        uri=DC[t]
        g.add( (uri, RDFS.comment, Literal(dc[t]["definition"])) )        
        g.add( (uri, DC.description, Literal(dc[t]["comment"])) )        
        g.add( (uri, DC.hasVersion, URIRef(dc[t]["details"])) )
    with open('term_order.yaml', 'r') as f:
        terms = yaml.load(f)
    data={}
    groups=[]
    for group in terms:
        groupTerm=getTermDef(sorted(group.keys())[0], g)
        groupTerm["terms"]=[]
        if group.values() is not None and sorted(group.values())[0] is not None:
            for t in sorted(group.values())[0]:
                groupTerm["terms"].append(getTermDef(t, g))            
        groups.append(groupTerm)
    data["groups"]=groups
    # finally verify we have all terms covered in both the order yaml and the graph
    verifyCompleteness(g, groups)
    return data

def verifyCompleteness(graph, groups):    
    terms={}
    for g in groups:
        if "uri" in g:
            terms[str(g["uri"])]=1
        for t in g["terms"]:
            terms[str(t["uri"])]=1
    print """%s terms defined""" % len(terms)
    for s in graph.subjects():
        if s not in (DWC.accordingTo, DWC.term("")) and str(s) not in terms:
            raise AssertionError("Term missing from terms_order.yaml: "+s)        
    print """All terms exist in both the graph and yaml"""




if __name__ == "__main__":
    buildHtml()
    buildDownloads()
