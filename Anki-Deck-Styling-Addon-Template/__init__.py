from aqt.webview import AnkiWebView
from aqt.webview import WebContent
from aqt import gui_hooks

import os
__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))
js_file = os.path.join(__location__, "script.js")
with open(js_file, "r") as f:
    scripttext = f.read()


def on_webview_will_set_content(web_content: WebContent, context) -> None:
    web_content.body += f"""
    <!-- addon insertion -->
    <script> 
    {scripttext}
    </script>
    """ 

gui_hooks.webview_will_set_content.append(on_webview_will_set_content)




