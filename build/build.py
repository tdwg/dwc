#
# S. Van Hoey
#
# Build script for tdwg dwc handling
#

import io
import csv

from urllib import request


class ProvidedTermsError(Exception):
    """Inconsistency in the available terms Error"""
    pass

class RdfTypeError(Exception):
    """Rdftype encountered that is not known by builder"""
    pass


class DwcBuildReader():

    def __init__(self, dwc_build_file):
        """Custom Reader switching between to raw Github or local file"""
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

    def __init__(self, term_versions, terms_config):
        self.term_versions = term_versions
        self.terms_config = terms_config

        self.term_versions_data = {}
        self._store_versions()
        self.terms_config_data = {}
        self._store_config()

        # check for the ability to combine the data
        self.match_error_report()

    def versions(self):
        """iterator to provide the terms as represented in the term versions file"""
        with DwcBuildReader(self.term_versions) as versions:
            for vterm in csv.DictReader(io.TextIOWrapper(versions), delimiter=','):
                if vterm["status"] == "recommended":
                    yield vterm

    def config(self):
        """iterator to provide the terms as represented in the terms config file
        (including the sequence)"""
        with DwcBuildReader(self.terms_config) as configs:
            for cfterm in csv.DictReader(io.TextIOWrapper(configs), delimiter=','):
                yield cfterm

    def _store_versions(self):
        """collect all the versions data in a dictionary"""
        for term in self.versions():
            self.term_versions_data[term["term_iri"]] = term

    def _store_config(self):
        """collect all the config data in a dictionary"""
        for term in self.config():
            self.terms_config_data[term["term_iri"]] = term

    def _version_terms(self):
        """get an overview of the terms in the term_versions file"""
        return set(self.term_versions_data.keys())

    def _config_terms(self):
        """get an overview of the terms in the terms config file"""
        return set(self.terms_config_data.keys())

    def _select_versions_term(self, term_iri):
        """Select a specific term of the versions data, using term_iri match"""
        return self.term_versions_data[term_iri]

    def _select_config_term(self, term_iri):
        """Select a specific term of the config data, using term_iri match"""
        return self.terms_config_data[term_iri]

    def match_error_report(self):
        """check if the prime dwc file and the humaninfo file provide corresponding terms"""
        overload_versionterms = self._version_terms() - self._config_terms()
        overload_configterms = self._config_terms() - self._version_terms()
        if len(overload_versionterms) > 0 or len(overload_configterms) > 0:
            vs_terms = ", ".join([term.split("/")[-1] for term in overload_versionterms])
            cf_terms = ", ".join([term.split("/")[-1] for term in overload_configterms])
            raise ProvidedTermsError("".join(["Terms only in term_versions.csv: ", vs_terms, 
                                              ". Terms only in terms_config.csv: ", cf_terms]))
    
    def process_terms(self):
        """parse the config terms towards the structure required for the HTML template"""
        for term in self.config():
            print(term)
        
        
