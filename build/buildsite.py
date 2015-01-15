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
    with codecs.open(mdFile, 'r', 'utf-8') as f:
        html = mistune.markdown(f.read())
    with codecs.open(htmlFile, 'w', 'utf-8') as f:
        f.write(buildInc(header, level))
        f.write(html)
        f.write(buildInc(footer, level))

def buildInc(html, level):
    return html.replace("$BASE", "../"*level)\
        .replace("$DATE", str(dt.date.today()))\
        .replace("$DESCRIPTION", "")\
        .replace("$TITLE", "my title")


def anchorLinks(x):
    if x is None:
        return x
    return re.sub('(https?://\S+[a-zA-Z0-9/_-])', "<a href='\\1'>\\1</a>", x)



if __name__ == "__main__":
    traverse()
