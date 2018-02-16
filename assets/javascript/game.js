//letters available

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var userGuess = null;

//computer selects a random letter from above
var correctGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessedLetters + " Computer picked: " + correctGuess);

//events
document.onkeyup = function(event) {

    //remember users guess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //add incorrect choices to counter, decrease guesses
    if (guessedLetters.indexOf(userGuess) < 0 && computerChoice.indexOf(userGuess) >= 0) {
        guessedLetters[guessedLetters.length]=userGuess;
        //if new guess, decrease remaining guesses
        guessesLeft--;
    }

    //if correct choice, win the game, add to win count
    if (correctGuess == userGuess) {
        wins++;
        console.log("You won!");
        guessesLeft = 9;
        guessedLetters = [];
        correctGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so Far: " + guessedLetters + " Computer picked: " + correctGuess);

    }

    //if you lose, add to loss count if below 0
    if (guessesLeft == 0) {
        losses++;
        console.log("You lose...");
        guessesLeft = 9;
        guessedLetters = [];
        correctGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so Far: " + guessedLetters + " Computer picked: " + correctGuess);
    }
    //Display the game on the main page
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessedLetters + "</h4></p>";
	//identify game ID
	document.querySelector("#game").innerHTML = html;
}
