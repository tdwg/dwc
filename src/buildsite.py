#!/usr/bin/env python

''' 
Install the required libraries for this script with PIP:
$ easy_install pip
$ sudo pip install -r requirements.txt

To run the script just run it from inside the build folder:
$ ./buildsite.py
'''

import re, codecs, os, mistune
from os.path import isdir, join, isfile, abspath, splitext, basename
import datetime as dt


BASE="http://rs.gbif.org"

ROOT = abspath(join(os.curdir, os.pardir))
PARAMS_MD = re.compile("^([A-Z0-9_]+)\s*\:\s*(.*)$", re.MULTILINE)
MENU_PARAMS_HTML = re.compile("\$MENU[A-Z0-9_/]+", re.MULTILINE)

def traverse():
    print """building site starting at %s""" % ROOT
    with codecs.open(join(os.curdir, "header.inc"), 'r', 'utf-8') as f:
        header = f.read()
    with codecs.open(join(os.curdir, "footer.inc"), 'r', 'utf-8') as f:
        footer = f.read()
    startinglevel = ROOT.count(os.sep)
    for top, dirs, files in os.walk(ROOT):
        level = top.count(os.sep) - startinglevel
        print "traverse lvl %s" % level, top
        # skip hidden folders
        dirs[:] = [d for d in dirs if not d[0] == '.']
        for file in [f for f in files if not f[0] == '.']:
            (name, extension) = splitext(file)
            if extension == ".md":
                parse(level, join(top, name), header, footer)

def parse(level, fn, header, footer):
    mdFile = fn + ".md"
    htmlFile = fn + ".html"
    print """PARSE %s -> %s""" % (mdFile,htmlFile)
    (md, metadata)=parseMetadata(mdFile)
    print metadata
    body = mistune.markdown(md)
    path=fn[len(ROOT):]
    with codecs.open(htmlFile, 'w', 'utf-8') as f:
        f.write(processMetadata(header, level, path, metadata))
        f.write(processMetadata(body, level, path, metadata))
        f.write(processMetadata(footer, level, path, metadata))

def parseMetadata(mdFile):
    metadata={}
    with codecs.open(mdFile, 'r', 'utf-8') as f:
        md = f.read().strip()
    metadata["LAST_MODIFIED"]=str(dt.date.today())
    metadata["TITLE"]=""
    metadata["DESCRIPTION"]=""
    for m in PARAMS_MD.finditer(md):
        metadata[m.group(1)]=m.group(2).strip()
    md=PARAMS_MD.sub("", md)
    return (md, metadata)

def processMetadata(html, level, path, metadata):
    html=html.replace("$BASE", "../"*level)
    # replace menu vars
    html=html.replace("$MENU"+path.upper(), "active")
    html=MENU_PARAMS_HTML.sub("", html)
    for k, v in metadata.iteritems():
        html=html.replace("$"+k, v)
    return html

def anchorLinks(x):
    if x is None:
        return x
    return re.sub('(https?://\S+[a-zA-Z0-9/_-])', "<a href='\\1'>\\1</a>", x)



if __name__ == "__main__":
    traverse()
