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
        
    def versions(self):
        """iterator to provide the terms as represented in the term versions file"""
        with DwcBuildReader(self.term_versions) as versions:
            for vterm in csv.DictReader(io.TextIOWrapper(versions), delimiter=','):
                if vterm["status"] == "recommended":
                    yield vterm

    def config(self):
        """iterator to provide the terms as represented in the terms config file"""
        with DwcBuildReader(self.terms_config) as configs:
            for cfterm in csv.DictReader(io.TextIOWrapper(configs), delimiter=','):
                yield cfterm
                    
    def _version_terms(self):
        """get an overview of the terms in the term_versions file"""
        return {term['term_iri'] for term in self.versions()}
    
    def _config_terms(self):
        """get an overview of the terms in the terms config file"""
        return {term['term_iri'] for term in self.config()}
                    
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
        
        
