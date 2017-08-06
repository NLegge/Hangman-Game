window.onload = function () {

var answers = ["schwifty", "pickle", "moonmen", "tiny", "rick", "morty", "jerry", "brothers", "beth", "summer", "chitz"];
var currentWord;
var lettersCurrentWord;
var numBlanks;
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

currentWord = answers[Math.floor(Math.random() * answers.length)];
lettersCurrentWord = currentWord.split("");
numBlanks = lettersCurrentWord.length;
for (var i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
      word.innerHTML = blanksAndSuccesses.join(" ");
}

  //Win or lose
  function winLose () {
    if (goodGuess === numBlanks) {
      numWins++;
      wins.innerHTML = numWins;
      reset(); 
    }
    else if (numGuesses === 0) {
      documentGetElementById("mainPic").src="assets/images/getItTogether.png";
      reset(); 
    }
  }

  //Pick a new word, reset number of guesses, clear guessed letters, reset number of good guesses
  function reset () {
    blanksAndSuccesses = [];    
    currentWord = answers[Math.floor(Math.random() * answers.length)];
    lettersCurrentWord = currentWord.split("");
    numBlanks = lettersCurrentWord.length;
    for (var i = 0; i < numBlanks; i++) {
          blanksAndSuccesses.push("_");
          word.innerHTML = blanksAndSuccesses.join(" ");
    letterGuess = [];
    letters.innerHTML = letterGuess;
    numGuesses = 13;
    guesses.innerHTML = numGuesses;
    goodGuess = 0;
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
    winLose();
  }
    




}



