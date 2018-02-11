window.onload = function () {
  var answers = ["schwifty", "pickle", "moonmen", "tiny", "rick", "morty", "jerry", "brothers", "beth", "summer", "chitz"];
  var currentWord;
  var lettersCurrentWord;
  var numBlanks;
  var blanksAndSuccesses = [];
  var numWins = 0;
  var numGuesses = 13;
  var goodGuess = 0
  var goodGuessLetters = [];
  var letterGuess = [];
  var userGuess;
  var audioPlaying = false;
  var alphabet = ["a", "b", "c", "d", "e", "f", "g",
                  "h", "i", "j", "k", "l", "m", "n",
                  "o", "p", "q", "r", "s", "t", "u",
                  "v", "w", "x", "y", "z"];

  //Win
  function win () {
    if (goodGuess === numBlanks) {
      numWins++;
      wins.innerHTML = numWins;
      reset(); 
    }
    else {}
  }

  //Lose
  function lose () {
    document.getElementById("mainPic").src ="assets/images/getItTogether.png";
    var audio = new Audio("assets/audio/Get Your Shit Together.mp3");
    if (!audioPlaying) {
      audio.play();
    }
    audioPlaying = true;
    setTimeout(reset, 18500);
  }

  //Pick a new word, reset number of guesses, clear guessed letters, reset number of good guesses
  function reset () {
    blanksAndSuccesses = [];    
    currentWord = answers[Math.floor(Math.random() * answers.length)];
    lettersCurrentWord = currentWord.split("");
    numBlanks = lettersCurrentWord.length;
    audioPlaying = false;
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

  // Captures keyboard input to populate letters guessed and blanksAndSuccesses. 
  if (!audioPlaying) {
    document.onkeyup = function(event) {
      userGuess = event.key.toLowerCase();
      if (alphabet.indexOf(userGuess) !== -1) {
        if (letterGuess.indexOf(userGuess) === -1) {
          if (numGuesses > 0) {
            numGuesses--;
            guesses.innerHTML = numGuesses; 
            letterGuess += userGuess;
            letters.innerHTML = letterGuess;             
            for (var i = 0; i < numBlanks; i++) {
              if (lettersCurrentWord[i] === userGuess) {
                blanksAndSuccesses[i] = userGuess;
                word.innerHTML = blanksAndSuccesses.join(" ");
                goodGuess++;          
                win();
              }
            }
            if (numGuesses === 0) {
              lose();
            } 
          }
        }
        else {
          alert(userGuess + " has already been selected. Please pick another letter.");
        }
      }
      else {
        alert(userGuess + " is not a letter.");
      }
    }
  } 

  reset();
}



