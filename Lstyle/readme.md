##Description

The addon changes the appearance of decks' names in the main window and deck screen, adding thumbnails and increasing the font size.
It also handles the ordering of decks in the main window.

PIC before
PIC after

##Installation

Copy Lstyle folder into your Anki/addons21 folder 
Default path on windows:
  path/path

PIC

##Usage

In order to apply the styling to a deck, a number should be added to it's name:
For example

  Remembering the Kanji -> 4. Remembering the Kanji
  
The number should be followed by a . and a space. 
This part will get deleted from the displayed names when the styling is applyed -- it is only needed for marking decks which need to be styled as well as manualy ordering them in the main screen.
Multiple numbers separated by . can be used (example "04.8.15. "), which is intended for numbering subdecks, but is not necessary. 
Numbers can be repeated, so you can simply add "0. " at the beginning of every deck's name, if the ordering feature of the addon is not needed.

In order to add a thumbnails to decks a folder "icons" should be created inside your ankiusername/collection.media folder. There all thumbnails are placed in ".png" format, with the filenames corresponding to the deck's names (number excluded).
For example, if the deck's name with the number is "01. DeckName" the thumbnail filename should be "DeckName.png".
If a thumbnail file for a numbered deck is not found, the thumbnail is not displayed, but the styling of the font is still applyed and the number is removed.

PIC_decknames
PIC_icons
PIC_styling

##Comments

The addon is tested to work alongside the "Enhance main window" addon.

(c)Lt/22
