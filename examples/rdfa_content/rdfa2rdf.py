'''
Very simple example of an RDFa to RDF converter.

Requires RDFLib from http://code.google.com/p/rdflib/
'''

import sys
import logging
from rdflib import ConjunctiveGraph

logging.basicConfig(level=logging.INFO)
if len(sys.argv) < 2:
  logging.info('Usage: rdfa2rdf <URL for RDFa>')
  sys.exit()
try:
  g = ConjunctiveGraph()
  res = g.parse(sys.argv[1], format='rdfa')
  print g.serialize()
except Exception,e:
  logging.error('Exception raised: %s' % str(e))
  
  