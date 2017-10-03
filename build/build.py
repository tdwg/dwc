#
# S. Van Hoey
#
# Build script for tdwg dwc handling
#

import io
import re
import csv
import sys
import codecs

from urllib import request
from Cheetah.Template import Template

NAMESPACES = {
    'http://rs.tdwg.org/dwc/iri/' : 'dwciri',
    'http://rs.tdwg.org/dwc/terms/' : 'dwc',
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
        """digest the normative document of Darwin Core and the configurations file to support automatic generation of derivatives

        Parameters
        -----------
        term_versions : str
            either a relative path and filename of the normative Dwc document or a URL link to the
            raw Github version of the file
        terms_config : str
            either a relative path and filename of the configurations file or a URL link to the
            raw Github version of the file

        Notes
        -----
        Remark that the sequence of the configurations file entries is essential for the automatic generation of the individual documents (mainly the index.html)
        """
        self.term_versions = term_versions
        self.terms_config = terms_config

        self.term_versions_data = {}
        self._store_versions()
        self.terms_config_data = {}
        self._store_configs()

        # check for the ability to combine the data
        self.match_error_report()

        # create the defined data-object for the different outputs
        self.template_data = self.process_terms()

    def versions(self):
        """iterator providing the terms as represented in the normative term versions file"""
        with DwcBuildReader(self.term_versions) as versions:
            for vterm in csv.DictReader(io.TextIOWrapper(versions), delimiter=','):
                if vterm["status"] == "recommended":
                    yield vterm

    def configs(self):
        """iterator providing the terms as represented in the terms config file
        (taking into account the sequence)"""
        with DwcBuildReader(self.terms_config) as configs:
            for cfterm in csv.DictReader(io.TextIOWrapper(configs), delimiter=','):
                yield cfterm

    def _store_versions(self):
        """collect all the versions data in a dictionary as the term_versions_data attribute"""
        for term in self.versions():
            self.term_versions_data[term["term_iri"]] = term

    def _store_configs(self):
        """collect all the config data in a dictionary as the terms_config_data attribute"""
        for term in self.configs():
            self.terms_config_data[term["term_iri"]] = term

    @property
    def _version_terms(self):
        """get an overview of the terms in the term_versions file"""
        return set(self.term_versions_data.keys())

    @property
    def _config_terms(self):
        """get an overview of the terms in the terms config file"""
        return set(self.terms_config_data.keys())

    def _select_versions_term(self, term_iri):
        """select a specific term of the versions data, using term_iri match"""
        return self.term_versions_data[term_iri]

    def _select_config_term(self, term_iri):
        """select a specific term of the config data, using term_iri match"""
        return self.terms_config_data[term_iri]

    def match_error_report(self):
        """check if the prime dwc file and the configurations file provide corresponding terms and inform user on the term differences in between both files"""
        overload_versionterms = self._version_terms - self._config_terms
        overload_configterms = self._config_terms - self._version_terms
        if len(overload_versionterms) > 0 or len(overload_configterms) > 0:
            vs_terms = ", ".join([term.split("/")[-1] for term in overload_versionterms])
            cf_terms = ", ".join([term.split("/")[-1] for term in overload_configterms])
            raise ProvidedTermsError("".join(["Terms only in term_versions.csv: ", vs_terms,
                                              ". Terms only in terms_config.csv: ", cf_terms]))
    @staticmethod
    def split_iri(term_iri):
        """split an iri field into the namespace url and the term itself"""
        prog = re.compile("(.*/)([^/]*$)")
        namespace, term = prog.findall(term_iri)[0]
        return namespace, term

    @staticmethod
    def resolve_namespace_abbrev(namespace):
        """Using the NAMESPACE constant, get the namespace abbreviation by providing the namespace link"""
        if namespace not in NAMESPACES.keys():
            raise DwcNamespaceError("The namespace url is currently not supported in NAMESPACES")
        return NAMESPACES[namespace]

    def get_term_definition(self, term_iri):
        """Extract the required information from both tables to show on the webpage of a single term
        by using the term_iri as the identifier

        Notes
        ------
        Due to the current implementation, make sure to provide the same keys represented in the record-level specific version `process_terms` method (room for improvement)
        """
        cf_term = self._select_config_term(term_iri)
        vs_term = self._select_versions_term(term_iri)

        term_data = {}
        _, term_data["name"] = self.split_iri(term_iri)
        term_data["iri"] = term_iri
        term_data["label"] = vs_term['label']
        term_data["class"] = cf_term['organized_in']
        term_data["definition"] = self.convert_link(vs_term['definition'])
        term_data["comments"] = self.convert_link(cf_term['comments'])
        term_data["rdf_type"] = vs_term['rdf_type']
        namespace_url, _ = self.split_iri(term_iri)
        term_data["namespace"] = self.resolve_namespace_abbrev(namespace_url)
        return term_data

    @staticmethod
    def convert_link(text_with_urls):
        """takes all links in a text field and converts it to the html tagged version of the link
        """
        def _handle_matched(inputstring):
            """quick hack version of url handling on the current prime versions data"""
            url = inputstring.group()
            return "<a href=\"{}\">{}</a>".format(url, url)
            
        regx = "(http[s]?://[\w\d:#@%/;$()~_?\+-=\\\.&]*)(?<![\)\.])"
        return re.sub(regx, _handle_matched, text_with_urls)

    def process_terms(self):
        """parse the config terms (sequence matters!), collect all required data from both the normative versions file and the config file and return the template ready data.

        Returns
        -------
        Data object that can be digested by the html-templatye file. Contains the term data formatted to create the indidivual outputs, each list element is a dictionary representing a class group. Hence, the data object is structured as follows:

            [
                {'name' : class_group_name_1, 'label': xxxx,...,
                    'terms':
                        [
                            {'name' : term_1, 'label': xxxx,...},
                            {'name' : term_2, 'label': xxxx,...},
                            ...
                        ]}
                {'name' : class_group_name_2,...
                ...},
                ...
            ]
        """
        template_data = []
        in_class = "Record-level"
        # sequence matters in config and it starts with Record-level which we populate here ad-hoc
        class_group = {}
        class_group["name"] = "Record-level"
        class_group["iri"] = None
        class_group["label"] = "Record-level"
        class_group["class"] = None
        class_group["definition"] = None
        class_group["comments"] = None
        class_group["rdf_type"] = None
        class_group["terms"] = []
        class_group["namespace"] = "Record-level"

        for term in self.configs(): # sequence of the config file used as order
            term_data = self.get_term_definition(term['term_iri'])
            # new class encountered
            if term_data["rdf_type"] == "http://www.w3.org/2000/01/rdf-schema#Class":
                # store previous section in template_data
                template_data.append(class_group)
                #start new class group
                class_group = term_data
                class_group["terms"] = []
                in_class = term_data["label"] # check on the class working in
            else:
                class_group['terms'].append(term_data)
        # save the last class to template_data
        template_data.append(class_group)
        return template_data

    def create_html(self, html_template="./config/index.tmpl",
                    html_output="../www/guides/index.html"):
        """build html with the processed term info, by filling in the tmpl-template

        Parameters
        -----------
        html_template : str
            relative path and filename to the [Cheetah3](http://cheetahtemplate.org/) compatible
            template
        html_output : str
            relative path and filename to write the resulting index.html
        """

        data = {}
        data["groups"] = self.template_data
        html = Template(file=html_template, searchList=[data])

        index_page = open(html_output, "w")
        index_page.write(str(html))
        index_page.close()

    def simple_dwc_terms(self):
        """only extract those terms that are simple dwc, defined as `simple` in the flags column of the config file of terms"""
        properties = []
        for term in self.configs():
            term_data = self.get_term_definition(term['term_iri'])
            if (term_data["rdf_type"] == "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property" and
                term["flags"] == "simple"):
                properties.append(term_data["name"])
        return properties

    def create_dwc_list(self, file_output="../dist/simple_dwc_vertical.csv"):
        """build a list of simple dwc terms and write it to file

        Parameters
        -----------
        file_output : str
            relative path and filename to write the resulting list
        """
        with codecs.open(file_output, 'w', 'utf-8') as dwc_list_file:
            for term in self.simple_dwc_terms():
                dwc_list_file.write(term + "\n")

    def create_dwc_header(self, file_output="../dist/simple_dwc_horizontal.csv"):
        """build a header of simple dwc terms and write it to file

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
    """Building up the quick reference html and derivatives"""

    config_terms_file = "./config/terms.csv"
    term_versions_file = "../standard/vocabularies/term_versions.csv"

    print("Running build process using current term_versions and config_terms file...")
    my_dwc = DwcDigester(term_versions_file, config_terms_file)
    print("Building index html file...")
    my_dwc.create_html()
    print("Building simple dwc list and header...")
    my_dwc.create_dwc_list()
    my_dwc.create_dwc_header()
    print("...done!")


if __name__ == "__main__":
    sys.exit(main())
