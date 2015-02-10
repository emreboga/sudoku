// sudoku-model.js

var generator = require('./sudoku_generator.js');

var sudoku_model = {};

// full board to validate user input
sudoku_model.solution = [];
// Unresolved board that will be modified by the user
sudoku_model.board = [];
// Track whether the board has any invalid entries
sudoku_model.errorCount = 0;

sudoku_model.init = function() {
    var newBoard = generator.newBoard();
    this.board = newBoard.unresolved;
    this.solution = newBoard.solution;
};

module.exports = sudoku_model;
