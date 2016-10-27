// View

class View {
	constructor(controller, rows, cols) {
		this.controller = controller;
		this.puzzle = document.getElementById("puzzle");
		this.message = document.getElementById("message");
	}

	setMessage(message) {
		this.message.innerHTML = message;
	}
}


// Model

class Tile {
	contructor(puzzle, row, col) {
		this.puzzle = puzzle;
		this.row = row;
		this.col = col;
	}
}

class Puzzle {
	constructor(rows, cols) {
		this.original = [];
		for (var row = 0; row < rows; row++) {
			this.original[row] = [];
			for (var col = 0; col < cols; col++) {
				this.original[row][col] = new Tile(this, row, col);
			}
		}
		this.puzzle = this.puzzle.slice().shuffle();
	}

	move(row, col) {

	}

	ableToMove(row, col) {

	}

	finish() {
		return this.puzzle.every((elem, i) => elem.every((elem2, j) => elem2 = this.original[i][j]));
	}

}

// Controller

class Controller {
	constructor(rows, cols) {
		this.game = new Puzzle(rows, cols);
		this.view = new View(this, rows, cols);
		this.generateEvents();
	}

	generateEvents() {

	}

	click(row, col) {

	}

}


Array.prototype.shuffle = function () {
    var m = this.length;
    while (m) {
        let i = Math.floor(Math.random() * m--);
        [this[m], this[i]] = [this[i], this[m]];
    }
    return this;
};

window.onload = function() {
	controller = new Controller(rows, cols);
};
