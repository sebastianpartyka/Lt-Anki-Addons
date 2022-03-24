## Description

The addon changes the appearance of decks' names in the main window and deck screen, by adding thumbnails and increasing the font size.
It also handles the ordering of decks in the main window.

<p float="center">
  <img src="https://github.com/Eltaurus-Lt/Lt-Anki-Addons/blob/main/pages/Lstyle/before.png" title="Before" style="width:50%; padding: 0">
  <img src="https://github.com/Eltaurus-Lt/Lt-Anki-Addons/blob/main/pages/Lstyle/after.png" title="After" style="width:50%; padding: 0">
</p>

## Installation

Copy the `Lstyle` folder into your `~\addons21\` folder

## Usage

The addon only changes the appearance of the selected decks. In order to apply the styling to a deck, a number followed by a . and a space should be added to its name:

 > DeckName → 7. DeckName
 
<details>
  <summary>specifics</summary> 
The added part will get deleted from the displayed names when the styling is applied – it is only there for marking decks that need to be styled as well as for manually setting the decks' order in the main screen.
Multiple numbers separated by . can be used, e.g. "04.8.15. ", which is intended for numbering subdecks, but is not necessary.
Numbers can be repeated, so you can simply add "0. " at the beginning of every deck's name if the addon's ordering feature is not needed.
</details> 

To add thumbnails to decks a folder `icons` should be created inside your `%AnkiUserName%\collection.media\` folder (default path on windows is `C:\Users\%WindowsUserName%\AppData\Roaming\Anki2\%AnkiUserName%\collection.media\`). All the thumbnails are placed there in the `.png` format with the filenames corresponding to the deck's names (number excluded).

E.g. if the deck's name with the number is "01. DeckName" the thumbnail filename should be `DeckName.png`.

<details>
  <summary>specifics</summary> 
 If a thumbnail file for a numbered deck is not found, the thumbnail is not displayed, but the styling of the font is still applied and the number is removed:

PIC_decknames
PIC_icons
PIC_styling
</details> 

## Comments

The addon is tested to work alongside the "Enhance main window" addon.

(c) Lt/22
