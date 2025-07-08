#
# Author: S. Van Hoey
# Contributors: John Wieczorek
#
# Build script for tdwg dwc handling
#
__version__ = '2023-09-14T-03:00'
import io
import os
import re
import csv
import sys
import codecs

from urllib import request
from jinja2 import FileSystemLoader, Environment

NAMESPACES = {
    'http://rs.tdwg.org/dwc/iri/' : 'dwciri',
    'http://rs.tdwg.org/dwc/terms/' : 'dwc',
    'http://rs.tdwg.org/chrono/terms/' : 'chrono',
    'http://purl.org/dc/elements/1.1/' : 'dc',
    'http://purl.org/dc/terms/' : 'dcterms',
    'http://rs.tdwg.org/dwc/terms/attributes/' : 'tdwgutility'}

class ProvidedTermsError(Exception):
    """inconsistency in the available terms Error"""
    pass


class RdfTypeError(Exception):
    """rdftype encountered that is not known by builder"""
    pass

class DwcNamespaceError(Exception):
    """Namespace link is not available in the currently provided links"""
    pass

class DwcBuildReader():

    def __init__(self, dwc_build_file):
        """Custom Reader switching between raw Github or local file"""
        self.dwc_build_file = dwc_build_file

    def __enter__(self):
        if "https://raw.github" in self.dwc_build_file:
            self.open_dwc_term = request.urlopen(self.dwc_build_file)
        else:
            self.open_dwc_term = open(self.dwc_build_file, 'rb')
        return self.open_dwc_term

    def __exit__(self, *args):
        self.open_dwc_term.close()


class DwcDigester(object):

    def __init__(self, term_versions):
        """Digest the term document of Darwin Core to support automatic
        generation of derivatives

        Parameters
        -----------
        term_versions : str
            Either a relative path and filename of the normative Dwc document
            or a URL link to the raw Github version of the file

        Notes
        -----
        Remark that the sequence of the term versions entries is
        essential for the automatic generation of the individual documents
        (mainly the index.html)
        """
        self.term_versions = term_versions

        self.term_versions_data = {}
        self._store_versions()

    def versions(self):
        """Iterator providing the terms as represented in the normative term
        versions file
        """
        with DwcBuildReader(self.term_versions) as versions:
            for vterm in csv.DictReader(io.TextIOWrapper(versions), delimiter=','):
                if vterm["status"] == "recommended":
                    yield vterm

    def _store_versions(self):
        """Collect all the versions data in a dictionary as the
        term_versions_data attribute
        """
        for term in self.versions():
            self.term_versions_data[term["term_iri"]] = term

    @property
    def _version_terms(self):
        """Get an overview of the terms in the term_versions file
        """
        return set(self.term_versions_data.keys())

    def _select_versions_term(self, term_iri):
        """Select a specific term of the versions data, using term_iri match
        """
        return self.term_versions_data[term_iri]

    def get_term_definition(self, term_iri):
        """Extract the required information from the terms table to show on
        the webpage of a single term by using the term_iri as the identifier

        Notes
        ------
        Due to the current implementation, make sure to provide the same keys
        represented in the record-level specific version `process_terms`
        method (room for improvement)
        """
        vs_term = self._select_versions_term(term_iri)

        term_data = {}
        term_data["label"] = vs_term['term_localName'] # See https://github.com/tdwg/dwc/issues/253#issuecomment-670098202
        term_data["iri"] = term_iri
        term_data["class"] = vs_term['organized_in']
        term_data["rdf_type"] = vs_term['rdf_type']
        return term_data

    def simple_dwc_terms(self):
        """Only extract those terms that are simple dwc, defined as `simple`
        in the flags column of the config file of terms
        """
        properties = []
        for term in self.versions():
            term_data = self.get_term_definition(term['term_iri'])
            if (term_data["rdf_type"] == "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property" and
                term["flags"] == "simple"):
                properties.append(term_data["label"])
        return properties

    def all_dwc_terms(self):
        """Extract all property terms that are defined as `simple` or 'extension'
        in the flags column of the config file of terms
        """
        properties = []
        for term in self.versions():
            term_data = self.get_term_definition(term['term_iri'])
            if (term_data["rdf_type"] == "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property" and
                term["flags"] in ("simple","extension")):
                properties.append(term_data["label"])
        return properties

    def create_simple_dwc_list(self, file_output="../dist/simple_dwc_vertical.csv"):
        """Build a list of simple dwc terms and write it to file

        Parameters
        -----------
        file_output : str
            relative path and filename to write the resulting list
        """
        with codecs.open(file_output, 'w', 'utf-8') as dwc_list_file:
            for term in self.simple_dwc_terms():
                dwc_list_file.write(term + "\n")

    def create_all_dwc_list(self, file_output="../dist/all_dwc_vertical.csv"):
        """Build a list of all dwc terms and write it to file

        Parameters
        -----------
        file_output : str
            relative path and filename to write the resulting list
        """
        with codecs.open(file_output, 'w', 'utf-8') as dwc_list_file:
            for term in self.all_dwc_terms():
                dwc_list_file.write(term + "\n")

    def create_dwc_header(self, file_output="../dist/simple_dwc_horizontal.csv"):
        """Build a header of simple dwc terms and write it to file

        Parameters
        -----------
        file_output : str
            relative path and filename to write the resulting list
        """
        with codecs.open(file_output, 'w', 'utf-8') as dwc_header_file:
            properties = self.simple_dwc_terms()
            dwc_header_file.write(",".join(properties))
            dwc_header_file.write("\n")

def main():
    """Building up the derivative files"""

    term_versions_file = "../vocabulary/term_versions.csv"

    print("Running build process:")
    my_dwc = DwcDigester(term_versions_file)
    print("Building simple DwC CSV files")
    my_dwc.create_simple_dwc_list()
    my_dwc.create_all_dwc_list()
    my_dwc.create_dwc_header()
    print("Done!")


if __name__ == "__main__":
    sys.exit(main())
