# Updates the navigation menu with incomplete translation languages.

#import re
#import requests   # best library to manage HTTP transactions
#import csv        # library to read/write/parse CSV files
import json       # library to convert JSON to Python data structures
import os
#import pandas as pd
#import yaml

languages = [
  {'text': 'Español', 'href': '/es/'},
  {'text': '日本語', 'href': '/ja/'},
  {'text': '한국어', 'href': '/ko/'},
  {'text': '繁體中文', 'href': '/zh-Hant/'}
]

for file in os.listdir("../docs/_data"):
    filename = os.fsdecode(file)
    if filename.startswith("navigation") and filename.endswith(".json"):
        with open("../docs/_data/"+filename, 'r+') as file:
            navmenu = json.load(file)

            for l1_navmenu in navmenu:
                if l1_navmenu['text'] == '文A':
                    l1_navmenu['menu'].extend(languages)

            file.seek(0)
            json.dump(navmenu, file, indent=2, ensure_ascii=False)
