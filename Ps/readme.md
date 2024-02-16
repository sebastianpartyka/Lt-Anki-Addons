## Description

The Add-on appends a new button to the Anki editor toolbar that allows opening images from a card in Photoshop with a single click.

## Installation and setup

- Copy the `Ps` folder into your `~\addons21\` folder
- Open `__init__.py` in any text editor
- In the line starting with `collection_media = ` Replace the dots on the right-hand side with an actual path to your Anki `~collection.media` folder (use double slashes to separate directory levels)
- (optional) Enter the name of a field on your note type dedicated to images inside quotation marks in the line `image_field = ""`. <br><sub>If the string left empty, the addon will always open all images from all fields of a card. If there is only one field that contains images, specifying its name won't have an effect.</sub>
- Make sure Photoshop is added to the PATH system variable. <br><sub>Alternatively, replace the word `photoshop` in the line `os.popen(f'photoshop -o {collection_media}\\{img}')` with a full path to your Photoshop exe file. Other image editor can also be used here instead.</sub>

## Usage

Simply press the button on an Anki editor toolbar to open the images contained within a card in Photoshop. After the editing of an image is done, save it without changing the name of the file and close it. No further actions are needed. The changes will not be visible in Anki right away, as it displayes the cached versions of images, but the updates will take an effect eventually. You can restart Anki to force it clear the cache and display the images with the latest changes.

(c) Lt/24
