//this alert is here to check if my js file is linked
//alert("hello");

//these variables define my two game clues and two game answers
var clues = ["Say goodbye every year", "Keeps your clock busy"];
var answers = ["365 Days", "24 Hours"];

//this function is defined in HTML as addClue within the getClue class and is triggered by the mouse click
//the mouse click should add the first item within the clues array (defined at the top of this page) to the clueParagraph div
function addClue() {
    document.getElementByClassName ("clueParagraph").innerHTML = "clues [0]";
}

//this function is defined in HTML as changeColor within the specific letter classes and is triggered by the mouse click
//the mouse click should change the color of the letter selected (mouse clicked) from white to crimson
function changeColor() {
    document.getElementByClassName ("A" || "B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J" || "K" || "L" 
    || "M" || "N" || "O" || "P" || "Q" || "R" || "S" || "T" || "U" || "V" || "W" || "X" || "Y" || "Z" || "1" || "2" 
    || "3" || "4" || "5" || "6" || "7" || "8" | "9" | "0").style.color = "crimson";
}

//the next two if statements alert the player of a wrong guess and to choose another letter
//1. the first if statement adds the phrase NOPE!!! :-( to the acknowledgment div
if (changeColor == "B" || "C" || "E" || "F" || "G" || "H" || "I" || "J" || "K" || "L" || "M" || "N" || "O" || "P" 
    || "Q" || "R" || "T" || "U" || "V" || "W" || "X" || "Z" || "1" || "2" || "4"|| "7" || "8" | "9" | "0"); {
    document.getElementByClassName ("acknowledgment").innerHTML = "NOPE!!! :-(";
}
//2. the second if statement adds the phrase Choose again to the acknowledgmentParagraph div
if (changeColor == "B" || "C" || "E" || "F" || "G" || "H" || "I" || "J" || "K" || "L" || "M" || "N" || "O" || "P" 
    || "Q" || "R" || "T" || "U" || "V" || "W" || "X" || "Z" || "1" || "2" || "4"|| "7" || "8" | "9" | "0"); {
    document.getElementByClassName ("acknowledgmentParagraph").innerHTML = "Choose again";
}

//the next two if statements alert the player of a right guess and to choose another letter
//1. the first if statement adds the phrase YEP!!! :-) to the acknowledgment div
if (changeColor == "3" || "6" || "5" || "D" || "A" || "Y" || "S"); {
    document.getElementByClassName ("acknowledgment").innerHTML = "YEP!!! :-(";
}
//2. the second if statement adds the phrase Choose again to the acknowledgmentParagraph div
if (changeColor == "3" || "6" || "5" || "D" || "A" || "Y" || "S"); {
    document.getElementByClassName ("acknowledgment").innerHTML = "Choose again";
}

//the next two if statements alert the player that he or she won and should play again
//1. the first if statement adds the phrase YOU WON!!! :-) to the youWon div
if (changeColor == "3" && "6" && "5" && "D" && "A" && "Y" && "S") {
    document.getElementByClassName ("youWon").innerHTML = "YOU WON!!! :-)";
}
//2. the second if statement adds the phrase Click for clue again to the youWonParagraph div to prompt the player to play again
if (changeColor == "3" && "6" && "5" && "D" && "A" && "Y" && "S") {
    document.getElementByClassName ("youWonParagraph").innerHTML = "Click for clue again";
}