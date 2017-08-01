//Game starts with a score of 0
var wins = 0;
//Game starts with 9 guesses
var guesses = 9;
//Variable to store letters guessed
var letters;
//variable to list answers
var answers = {
	schwifty: ["s", "c", "h", "w", "i", "f", "t", "y"],
	moonman: ["m", "o", "o", "n", "m", "a", "n"],
	
}

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
