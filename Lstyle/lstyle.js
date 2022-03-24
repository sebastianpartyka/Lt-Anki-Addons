var decks=$.merge($("a.deck"),$(".isWin h3"));
var decksN=decks.length;
var truncname,cleanname;

for (let n=0; n<decksN; n++) {
cleanname=decks[n].innerHTML.replace(/^\s*<font style=(""|"color:false;")>\s*/g, "").replace(/\s*<\/font>\s*$/g, ""); //clears "Enhance main window" font tags
truncname=cleanname.replace(/^([0-9]+\.)+ /g, ""); //removes the ordinal number
if (truncname!=cleanname) //apply styling to numbered decks only
{
decks[n].innerHTML="<div style=\"text-align: center\"><img src=\"icons\\"+truncname+".png\" style=\"vertical-align:middle; display:inline-block; margin-right: 30px\" onerror=\"this.style.display='none'\"><span><b><font size=+2>"+truncname+"</font></b></span></div><br>"}
}
