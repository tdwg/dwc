#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

__author__ = "John Wieczorek"
__copyright__ = "Copyright 2021 Rauthiflor LLC"
__filename__ = 'build_extension.py'
__version__ = f'{__filename__} 2021-08-16T17:29-03:00'

import io
import os
import re
import csv
import sys
import codecs
import html
import argparse
from urllib import request

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
        """Digest the term document of Darwin Core to support automatic generation of 
           derivatives

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

        # create the defined data-object for the different outputs
        self.template_data = self.process_terms()

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

    @staticmethod
    def split_iri(term_iri):
        """Split an iri field into the namespace url and the local name
        of the term
        """
        prog = re.compile("(.*/)([^/]*$)")
        namespace, local_name = prog.findall(term_iri)[0]
        return namespace, local_name

    @staticmethod
    def resolve_namespace_abbrev(namespace):
        """Using the NAMESPACE constant, get the namespace abbreviation by
        providing the namespace link

        Parameters
        -----------
        namespace : str
            valid key of the NAMESPACES variable
        """
        if namespace not in NAMESPACES.keys():
            raise DwcNamespaceError("The namespace url is currently not supported in NAMESPACES")
        return NAMESPACES[namespace]

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
        term_data["definition"] = vs_term['definition']
        term_data["comments"] = vs_term['comments']
        term_data["examples"] = vs_term['examples']
#        term_data["definition"] = self.convert_link(vs_term['definition'])
#        term_data["comments"] = self.convert_link(self.convert_code(vs_term['comments']))
#        term_data["examples"] = self.convert_link(self.convert_code(vs_term['examples']))
        term_data["rdf_type"] = vs_term['rdf_type']
        namespace_url, _ = self.split_iri(term_iri)
        term_data["namespace"] = self.resolve_namespace_abbrev(namespace_url)
        return term_data

    @staticmethod
    def convert_code(text_with_backticks):
        """Takes all back-quoted sections in a text field and converts it to
        the html tagged version of code blocks <code>...</code>
        """
        return re.sub(r'`([^`]*)`', r'<code>\1</code>', text_with_backticks)

    @staticmethod
    def convert_link(text_with_urls):
        """Takes all links in a text field and converts it to the html tagged
        version of the link
        """
        def _handle_matched(inputstring):
            """quick hack version of url handling on the current prime versions data"""
            url = inputstring.group()
            return "<a href=\"{}\">{}</a>".format(url, url)

        regx = "(http[s]?://[\w\d:#@%/;$()~_?\+-;=\\\.&]*)(?<![\)\.,])"
        return re.sub(regx, _handle_matched, text_with_urls)

    def process_terms(self):
        """Parse the config terms (sequence matters!)

        Collect all required data from both the normative versions file and
        the config file and return the template-ready data.

        Returns
        -------
        Data object that can be digested by the html-template file. Contains
        the term data formatted to create the indidivual outputs, each list
        element is a dictionary representing a class group. Hence, the data
        object is structured as follows:

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
        class_group["label"] = "Record-level"
        class_group["iri"] = None
        class_group["class"] = None
        class_group["definition"] = None
        class_group["comments"] = None
        class_group["rdf_type"] = None
        class_group["terms"] = []
        class_group["namespace"] = None

        addedUseWithIRI = False
        for term in self.versions(): # sequence of the terms file used as order
            term_data = self.get_term_definition(term['term_iri'])
            test = term['term_iri']
#            print(f'{test=}')
            if term_data["rdf_type"] == "http://www.w3.org/2000/01/rdf-schema#Class":
                # new class encountered
                # store previous section in template_data
                template_data.append(class_group)
                #start new class group
                class_group = term_data
                class_group["terms"] = []
                in_class = term_data["label"] # check on the class working in
            elif term['term_iri']=='http://purl.org/dc/terms/language':
                # Vulnerable to ordering terms in term_versions.csv, but...
                # This is the first row of dwciri terms
                # store previous section in template_data
#                print(f'{term=}\n{term_data=}')
                template_data.append(class_group)
                #start a class group for UseWithIRI
                class_group = {"label":"UseWithIRI"}
                class_group["terms"] = []
                in_class = "UseWithIRI" # check on the class working in
                addedUseWithIRI = True
                class_group['terms'].append(term_data)
#                print(f'{class_group=}')
            else:
                class_group['terms'].append(term_data)
        # save the last class to template_data
        template_data.append(class_group)
        return template_data

    def create_html(self, html_template="terms.tmpl",
                    html_output="../docs/terms/index.md"):
        """build html with the processed term info, by filling in the
        tmpl-template

        Parameters
        -----------
        html_template : str
            relative path and filename to the Jinja2 compatible
            template
        html_output : str
            relative path and filename to write the resulting index.html
        """

        data = {}
        data["class_groups"] = self.template_data

        env = Environment(
            loader = FileSystemLoader(os.path.dirname(html_template)),
            trim_blocks = True
        )
        template = env.get_template(os.path.basename(html_template))
        html = template.render(data)

        index_page = open(html_output, "w")
        index_page.write(str(html))
        index_page.close()

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

    def create_dwc_list(self, file_output="../dist/simple_dwc_vertical.csv"):
        """Build a list of simple dwc terms and write it to file

        Parameters
        -----------
        file_output : str
            relative path and filename to write the resulting list
        """
        with codecs.open(file_output, 'w', 'utf-8') as dwc_list_file:
            for term in self.simple_dwc_terms():
                dwc_list_file.write(term + "\n")

    def extension_terms(self, termlist):
        """Iterator providing the terms given extension file
        """
        for vterm in csv.DictReader(io.TextIOWrapper(termlist), delimiter=','):
            yield vterm

    def create_extension_xml(self, xml_template, termlist, file_output):
        """Build an Darwin Core Extension XML file

        Parameters
        -----------
        xml_template : str
            The relative path to the file containing the declaration for the xml file 
            (e.g., "./occurrence_core.tmpl")
        termlist : str
            The relative path to the file in which the list of terms to include in the 
            extension are located (e.g., "./occurrence_core.lst").
        file_output : str
            The relative path to the file to write the resulting file.
            (e.g., "../ext/dwc_occurrence.xml")
        """
        with codecs.open(file_output, 'w', 'utf-8') as output_file:
            # Open the XML declaration file
            template_file = open(xml_template, 'r')
            # Write the entire XML declaration section to the output file
            output_file.write(template_file.read())
            # Process the list of terms for the extension combining properties from the 
            # extension term list with the properties of the term definitions from Darwin 
            # Core. 
            
            # Load the terms from the Extension term list file
            termlistfile = open(termlist, 'rb')
            previous_group = 'None'
            for term in self.extension_terms(termlistfile):
                # Process each row in the extension term list. The file must have the 
                # following fields in the given order:
                #     class,iri,type,thesaurus,description,comments,examples,required
                # 1) The iri field must be populated. 
                # 2) If there is supposed to be a datatype other than string for the term, 
                #    that type must be provided.
                # 3) If there is supposed to be a controlled vocabulary for the term, the 
                #    URL to the location of the controlled vocabulary must be provided.
                # 4) If there is supposed to be a definition, comment, or example for the
                #    term that differs from that in the standard, the custom value must be
                #    provided. 
                # 5) If a term is required to be mapped to a field, the column 'required'
                #    must be populated with 'true'.
                
                # Split the term iri to extract the label and namespace
                term_parts = term['iri'].split('/')

                # Always set the group based on the value in the Extension term list
                group = term['group']

                # Get the term name from the last part of the iri field from the Extension
                # term list file
                name = term_parts[-1]
                
                # The datatype, if it is other than 'string' must come from the type field
                # in the Extension term list file
                datatype = None
                try:
                    datatype = term['type']
                except:
                    pass

                # The thesaurus, if there is one, must come from the type field in the 
                # Extension term list file
                thesaurus = None
                try:
                    thesaurus = term['thesaurus']
                except:
                    pass

                # Get the term namespace from the part of the iri field from the Extension
                # term list file up to the term name
                namespace = term['iri'][0:term['iri'].find(term_parts[-1])]

                # Get the term qualified name from the iri field from the Extension term
                # list file
                qualName = term['iri']

                # Create a dc:relation to the URL for the term in the Quick Reference
                # Guide, if there is one 
                dc_relation = None
                if namespace=='http://rs.tdwg.org/dwc/terms/':
                    # Example: https://dwc.tdwg.org/terms/#dwc:behavior
                    dc_relation = f'https://dwc.tdwg.org/terms/#dwc:{name}'
                elif namespace=='http://rs.tdwg.org/dwc/iri/':
                    # Example: https://dwc.tdwg.org/terms/#dwciri:recordedBy
                    dc_relation = f'https://dwc.tdwg.org/terms/#dwciri:{name}'
                elif namespace=='http://purl.org/dc/elements/1.1/':
                    # Example: https://dwc.tdwg.org/terms/#dc:type
                    dc_relation = f'https://dwc.tdwg.org/terms/#dc:{name}'
                elif namespace=='http://purl.org/dc/terms/':
                    # Example: https://dwc.tdwg.org/terms/#dcterms:references
                    dc_relation = f'https://dwc.tdwg.org/terms/#dcterms:{name}'
                elif namespace=='http://purl.org/chrono/terms/':
                    # Example: https://tdwg.github.io/chrono/terms/#chrono:materialDated
                    dc_relation = f'https://tdwg.github.io/chrono/terms/#chrono:{name}'

                # Get the term definition (dc:description) from the description field of
                # the Extension term list file. Later we'll check if this is blank, and
                # if so, fill it from the standard.
                dc_description = term['description']
                
                # Get the term usage comments from the description field of the Extension 
                # term list file. Later we'll check if this is blank, and if so, fill it 
                # from the standard.
                comments = term['comments']

                # Get the term examples from the description field of the Extension term 
                # list file. Later we'll check if this is blank, and if so, fill it from 
                # the standard.
                examples = term['examples']

                # Set the attribute 'required' to 'false' unless it is provided in the 
                # Extension term list file
                required = term['required']
                if required is None or required.strip()=='':
                    required = 'false'
                else:
                    required = 'true'

                # Try to find the term from the standard
                term_data = None
                try:
                    term_data = self.get_term_definition(term['iri'])
                except:
                    pass
                
                # Fill in dc:description, comments, or examples from the standard if it is
                # not given in the Extension term list file
                if term_data is not None:
                    if dc_description is None or dc_description.strip()=='':
                        dc_description = term_data['definition']
                    if comments is None or comments.strip()=='':
                        comments = term_data['comments']
                    if examples is None or examples.strip()=='':
                        examples = term_data['examples']

                # Transform description, comment, and examples for HMTL encodings
                dc_description = html.escape(dc_description)
                comments = html.escape(comments)
                examples = html.escape(examples)
                
                # Construct the property entry for the output file
                s = f"    <property group='{group}' "
                s += f"name='{name}' "
                if datatype is not None and datatype.strip()!='':
                    s += f"type='{datatype}' "
                if thesaurus is not None and thesaurus.strip()!='':
                    s += f"thesaurus='{thesaurus}' "
                s += f"namespace='{namespace}' "
                s += f"qualName='{qualName}' "
                s += f"dc:relation='{dc_relation}' "
                s += f"dc:description='{dc_description}' "
                s += f"comments='{comments}' "
                s += f"examples='{examples}'"
                s += f" required='{required}'"
                s += '/>\n'
                if group != previous_group:
                    output_file.write(f'\n    <!-- {group} -->\n')
                output_file.write(s)
                previous_group = group
                        
            output_file.write("</extension>")
            output_file.close()
            termlistfile.close()

def _getoptions():
    ''' Parse command line options and return them.'''
    parser = argparse.ArgumentParser()

    help = 'path to the extension term list csv file'
    parser.add_argument("-i", "--extensiontermsfile", help=help)

    help = 'path to the extension xml template file'
    parser.add_argument("-x", "--extensiontemplatefile", help=help)

    help = 'path to the output extension xml file'
    parser.add_argument("-o", "--outputfile", help=help)

    help = 'path to the dwc term versions csv file'
    parser.add_argument("-t", "--termversionsfile", help=help)

    return parser.parse_args()

def main():
    """Build XML Darwin Core Extension files"""

    options = _getoptions()
    optdict = {}

    if options.extensiontermsfile is None or len(options.extensiontermsfile)==0 \
      or options.extensiontemplatefile is None or len(options.extensiontemplatefile)==0 \
      or options.outputfile is None or len(options.outputfile)==0:
        s =  'syntax:\n'
        s += f'python {__filename__}'
        s += ' -x ./occurrence_core.tmpl'
        s += ' -i ./occurrence_core_list.csv'
        s += ' -o ../ext/dwc_occurrence_2021-08_16.xml'
        s += ' -t ../vocabulary/term_versions.csv'
        print(s)
        return

    term_versions_file = "../vocabulary/term_versions.csv"
    if options.termversionsfile is not None and len(options.termversionsfile)!=0:
        term_versions_file = options.termversionsfile

    print("Running build process:")
    my_dwc = DwcDigester(term_versions_file)

    print("Building Extension XML file")
    xml_template = options.extensiontemplatefile
    termlist = options.extensiontermsfile
    file_output = options.outputfile
    my_dwc.create_extension_xml(xml_template, termlist, file_output)

    print("Done!")

if __name__ == "__main__":
    sys.exit(main())