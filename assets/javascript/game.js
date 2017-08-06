window.onload = function () {

var answers = ["schwifty", "pickle", "moonmen", "tiny", "rick", "morty", "jerry", "brothers", "beth", "summer", "chitz"];
var currentWord = answers[Math.floor(Math.random() * answers.length)];
var lettersCurrentWord = currentWord.split("");
var numBlanks = lettersCurrentWord.length;
var blanksAndSuccesses = [];
var numWins = 0;
var numGuesses = 13;
var goodGuess = 0
var letterGuess = [];
var userGuess;
var alphabet = ["a", "b", "c", "d", "e", "f", "g",
                "h", "i", "j", "k", "l", "m", "n",
                "o", "p", "q", "r", "s", "t", "u",
                "v", "w", "x", "y", "z"];


for (var i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
      word.innerHTML = blanksAndSuccesses.join(" ");
}


console.log(lettersCurrentWord);


  //Win or lose
  function winLose () {
    if (goodGuess === numBlanks) {
      numWins++;
      reset(); //not yet defined
    }
    else if (numGuesses === 0) {
      loser(); //not yet defined
      reset(); //not yet defined
    }
  }


  // Captures keyboard input to populate letters guessed and correct letters. 
  document.onkeyup = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    letterGuess += userGuess;
		letters.innerHTML = letterGuess;
		numGuesses--;
		guesses.innerHTML = numGuesses;
    
    for (var i = 0; i < numBlanks; i++) {
      if (lettersCurrentWord[i] === userGuess) {
        blanksAndSuccesses[i] = userGuess;
        word.innerHTML = blanksAndSuccesses.join(" ");
        goodGuess++;
      }
    }

  }
    




}



