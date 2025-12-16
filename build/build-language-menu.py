# Updates the navigation menu with incomplete translation languages.

import json
import os
import sys

# Languages for dwc.tdwg.org
languages = [
  {'text': 'English', 'href': '/'},
  {'text': 'Čeština', 'href': '/cs/'},
  {'text': 'Français', 'href': '/fr/'},
  {'text': 'Русский', 'href': '/ru/'}
]

# Additional languages for dwc-translation-preview.tdwg.org
previewLanguages = [
  {'text': '---'},
  {'text': 'Español', 'href': '/es/'},
  {'text': '日本語', 'href': '/ja/'},
  {'text': '한국어', 'href': '/ko/'},
  {'text': '繁體中文', 'href': '/zh-Hant/'}
]

langMenu = [{'text': '文A', 'menu': [] }]
langMenu[0]['menu'].extend(languages)

if sys.argv[1] == 'preview':
    langMenu[0]['menu'].extend(previewLanguages)

for file in os.listdir("../docs/_data"):
    filename = os.fsdecode(file)
    if filename.startswith("navigation") and filename.endswith(".json"):
        with open("../docs/_data/"+filename, 'r+') as file:
            navmenu = json.load(file)

            # For safety, don't add the 文A menu if it's already present.
            present = False
            for l1_navmenu in navmenu:
                present |= l1_navmenu['text'] == '文A'

            if not present:
                navmenu.extend(langMenu)

                file.seek(0)
                json.dump(navmenu, file, indent=2, ensure_ascii=False)
