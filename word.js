module.exports = function Word(randomWord) {
	this.text = randomWord;
	this.wordlength = randomWord.length;
	this.guessedLetters = [];

};
