This is a base for building Anki addons that modify appearance of the main window (deck list, top menu, and the bar with buttons at the bottom) or the deck windows.
The kit contains bare bones of a deck styling addon: a JavaScript file to modify html source code of Anki pages and an `__init__` python script to embed the JavaScript into Anki.

The stock example uses a jQuery line to dye the background light-blue. New features can be created by adding corresponding code to script.js file. To see the original Anki html the script is modifying and find the right selectors either of the addons [HTML Window source](https://ankiweb.net/shared/info/1214415810) or [AnkiWebView Inspector](https://ankiweb.net/shared/info/31746032) can be used.

<center>
<img src="https://github.com/Eltaurus-Lt/Lt-Anki-Addons/blob/main/pages/Anki-Deck-Styling-Addon-Template/dyemainwindowlightblue.png">
<\center>

(c) Lt/22
