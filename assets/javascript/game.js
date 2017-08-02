window.onload = function () {

var answers = ["s", "c", "h", "w", "i", "f", "t", "y"];
//Game starts with a score of 0
var numWins = 0;
//Game starts with 9 guesses
var numGuesses = 9;
//Variable to store letters guessed
var letterGuess = "";
//variable to list good guesses
var goodGuess = "";


var list = document.getElementsByTagName("li");
//list.style.display === 'none';

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
      document.onkeyup = function(event) {
        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        letterGuess = userGuess + letterGuess;
		letters.innerHTML = letterGuess;
		numGuesses--;
		guesses.innerHTML = numGuesses;

      for (var i=0; i< answers.length; i++) {
        if (userGuess === answers[i]) {
        	goodGuess = userGuess + goodGuess;
			word.innerHTML = goodGuess;
        } 
		else {

		} 
		}


      };


/*

//function to update the wins
function updateScore() {
        document.querySelector("#wins").innerHTML = wins;
}

//if letter is part of answer, populate #word & #letters and decrease #guesses by 1
if () {

}
//else populate #letters and decrease #guesses by 1
else {

}

//if all letters guessed within # of guesses, increase wins by 1
if () {
            wins++;
            updateScore();
}
// if # of guesses reaches 0 and word not guessed, game over?
else if {

}
*/


}