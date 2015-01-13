#!/usr/bin/env python

''' 
easy_install pip
pip install -r requirements.txt
'''

import yaml, re, csv, codecs
from Cheetah.Template import Template
from rdflib import Graph, URIRef, Namespace, Literal
from rdflib.namespace import RDFS

DWC=Namespace("http://rs.tdwg.org/dwc/terms/")
DC=Namespace("http://purl.org/dc/terms/")
DWCA=Namespace("http://rs.tdwg.org/dwc/terms/attributes/")
REC_LEVEL=DWC.term("Record-level")


def buildHtml(groups):    
    print """building html files"""
    data={}
    data["groups"]=groups
    html = Template(file="terms.tmpl", searchList=[data])
    recommended = open("../terms/index.html", "w")
    recommended.write(str(html))
    recommended.close()    

def buildDownloads(groups):
    print """building dwc_terms.csv"""
    with open('../resources/dwc_terms.csv', 'w') as csvf:
        writer=csv.writer(csvf, delimiter=',', quotechar='"', quoting=csv.QUOTE_ALL)
        writer.writerow(['TermName', 'URI', "Label_en", "Group", "Definition", "Comments"])
        for g in groups:
            for t in g["terms"]:
                writer.writerow([t["name"], t["uri"], utf8(t["label"]), t["class"], utf8(t["definition"]), utf8(t["comment"])])
    print """building simple_dwc_terms_list.csv"""
    with codecs.open('../resources/simple_dwc_terms_list.csv', 'w', 'utf-8') as f:
        for g in groups:
            for t in g["terms"]:
                f.write(t["name_simple"] + "\n")
    print """building simple_dwc.properties"""
    with codecs.open('../resources/simple_dwc.properties', 'w', 'utf-8') as f:
        for g in groups:
            for t in g["terms"]:
                term=t["name_simple"]
                f.write("%s.name=%s\n" % (term,term))
                f.write("%s.uri=%s\n" % (term,t["uri"]))
                f.write("%s.label=%s\n" % (term, n2e(t["label"])))
                f.write("%s.definition=%s\n" % (term, n2e(t["definition"])))
                f.write("%s.comment=%s\n" % (term, n2e(t["comment"])))
    print """building simple_dwc_terms_header.csv"""
    with codecs.open('../resources/simple_dwc_terms_header.csv', 'w', 'utf-8') as f:
        started=False
        for g in groups:
            for t in g["terms"]:
                if started:
                    f.write(",")
                f.write('"'+t["name_simple"]+'"')
                started=True
        f.write("\n")
    print """building simple_dwc_pgsql.sql"""
    with open('term_type.yaml', 'r') as f:
        types = yaml.load(f)
    with codecs.open('../resources/simple_dwc_pgsql.sql', 'w', 'utf-8') as f:
        started=False
        f.write("CREATE TABLE dwc (\n")
        for g in groups:
            for t in g["terms"]:
                if started:
                    f.write(",\n")
                f.write('  "%s" ' % t["name_simple"])
                f.write(types.get(t["name_simple"], "text"))
                started=True
        f.write("\n);\n")

def n2e(x):
    if x is None:
        return ""
    return x

def utf8(x):
    if x is None:
        return x
    return x.encode("utf-8")    

def anchorLinks(x):
    if x is None:
        return x
    return re.sub('(https?://\S+)', "<a href='\\1'>\\1</a>", x)
    
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
        t["definition"]=anchorLinks(g.value(subject=uri, predicate=RDFS.comment))
        t["comment"]=anchorLinks(g.value(subject=uri, predicate=DC.description))
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
    # finally verify we have all terms covered in both the order yaml and the graph
    verifyCompleteness(g, groups)
    return groups

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
    data=parseTerms()
    buildHtml(data)
    buildDownloads(data)
