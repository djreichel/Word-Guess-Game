//this alert is here to check if my js file is linked
//alert("hello");

//these variables define my two game clues and two game answers
var clues = ["Say goodbye every year", "Keeps your clock busy"];
var answers = ["365 Days", "24 Hours"];

//I would like to have more clues and answers in my variables.
//I think I would need a for loop for both variables with a specific index to force the addClue function to stop at a specific clue

//this function is defined in HTML as addClue within the getClue class and is triggered by the mouse click
//the mouse click should add the first item within the clues array (defined at the top of this page) to the clueParagraph div
//and the addClue function should also add the corresponding answer to the answer area under the game keypad - I don't know how to achieve this step.
function addClue() {
    //document.getElementsByClassName ("clueParagraph")[0].innerHTML = Clues [0];
    document.getElementsByClassName ("clueParagraph")[0].innerHTML = "Say goodbye every year";
    console.log(addClue);
}

//function getAnswers() {
//    document.getElementsByClassName ("clueParagraph").innerHTML = "answers [0]";
//    console.log(getAnswers);
//}

//this function is defined in HTML as changeColor within the specific letter classes and is triggered by the mouse click
//the mouse click should change the color of the letter selected (mouse clicked) from white to crimson

//document.getElementsByClassName ("letter").onclick = function() {changeColor()};

function changeColor() {
    document.getElementsByClassName ("letter") [0].style.color = "crimson";
}

//the next statement alerts the player of a wrong guess
//this if statement adds the phrase NOPE!!! :-( to the acknowledgment div
if (changeColor == "B" || "C" || "E" || "F" || "G" || "H" || "I" || "J" || "K" || "L" || "M" || "N" || "O" || "P" 
    || "Q" || "R" || "T" || "U" || "V" || "W" || "X" || "Z" || "1" || "2" || "4"|| "7" || "8" | "9" | "0"); {
    document.getElementsByClassName ("acknowledgment").innerHTML = "NOPE!!! :-(";
}

//the next statement alerts the player of a right guess
//this if statement adds the phrase YEP!!! :-) to the acknowledgment div
if (changeColor == "3" || "6" || "5" || "D" || "A" || "Y" || "S"); {
    document.getElementsByClassName ("acknowledgment").innerHTML = "YEP!!! :-(";
}

//the next statement prompts the player to choose another letter or number
//this if statement adds the phrase Choose again to the acknowledgmentParagraph div
if (changeColor == "letter"); {
    document.getElementsByClassName ("acknowledgmentParagraph").innerHTML = "Choose again";
}

//the next two if statements alert the player that he or she won and should play again
//1. the first if statement adds the phrase YOU WON!!! :-) to the youWon div
if (changeColor == "3" && "6" && "5" && "D" && "A" && "Y" && "S") {
    document.getElementsByClassName ("youWon").innerHTML = "YOU WON!!! :-)";
}
//2. the second if statement adds the phrase Play again to the youWonParagraph div to prompt the player to play another game
if (changeColor == "3" && "6" && "5" && "D" && "A" && "Y" && "S") {
    document.getElementsByClassName ("youWonParagraph").innerHTML = "Play again";
}