var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");

var wordArr = ["direwolf", "dothraki", "grayscale", "khaleesi", "lanister", "maester", "unsullied", "wildlings"];

var remainingGuesses = 10;
var isLetterInWord = false;

function startGame() {
	console.log("\nLet's Play!\n");
	var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
	currentWord = new Letter(randomWord);
	currentWord.blanks(randomWord);
	console.log("\n");
		inquirer.prompt([
			{ 	type: "input",
				name: "guess",
				message: "Guess a letter!"
			}
			]).then(checkGuess);

};


var nextWord = function() {
	remainingGuesses = 10;
	var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
	currentWord = new Letter(randomWord);
	currentWord.blanks(randomWord);
	console.log("\n");
		inquirer.prompt([
			{ 	type: "input",
				name: "guess",
				message: "Guess a letter!"
			}
			]).then(checkGuess);

};


var guessAgain = function() {
	inquirer.prompt([
			{ 	type: "input",
				name: "guess",
				message: "Guess a letter!"
			}
			]).then(checkGuess);

};


var endGame = function() {
	inquirer.prompt([
			{ 	type: "confirm",
				name: "end",
				message: "Out of guesses! Would you like to end the game?"
			}
			]).then(function(answer) {
				var end = answer.end;
				if (!end) {
					console.log("\nOk! Let's keep playing!\n");
					nextWord();
				} else {
					return;
				}

			});
};


var checkGuess = function(answers) {
	var answer = answers.guess;
	var isLetterInWord = false;

	for (var i=0; i < currentWord.letters.length; i++) {
		if (currentWord.letters[i] === answer) {
			isLetterInWord = true;
		}
	}

	if(isLetterInWord) {
		for (var i = 0; i < currentWord.letters.length; i++) {
			if (currentWord.letters[i] === answer) {
				console.log("\nCORRECT!\n");
				currentWord.fillBlank(answer);
				console.log("\n");

				// if (currentWord.guessedLetters[i] === answer) {
				// 	console.log("\nAlREADY GUESSED!\n");
				// }

				if (currentWord.letters.join() === currentWord.array.join()) {
					console.log("You got it right! Next word!\n");
					return nextWord();
				} else {
					return guessAgain();
				}
			}
		}
	} else {
		console.log("\nINCORRECT!\n");
		remainingGuesses--;
		console.log(remainingGuesses + " guesses remaining\n");
		currentWord.fillBlank(answer);
		console.log("\n");
		if (remainingGuesses > 0) {
			guessAgain();
		} else if (remainingGuesses === 0) {
			endGame();
		}
	}
};

startGame();



