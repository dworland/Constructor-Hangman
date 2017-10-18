var Word = require('./word.js');

var Letter = function(input) {
	var Play = new Word(input);

	this.letters = Play.text.split("");
	this.length = this.letters.length;
	this.array = [];

	this.blanks = function() {
		for (i = 0; i < this.length; i++) {
			this.array.push("_");
			// this.array.join();
		}

		console.log(this.array.join(" "));
	}

	this.fillBlank = function(answer) {
		for (i = 0; i < this.length; i++) {
			if(this.letters[i] === answer) {
				this.array[i] = answer;
			}
		}

		console.log(this.array.join(" "));
	}
};

module.exports = Letter;