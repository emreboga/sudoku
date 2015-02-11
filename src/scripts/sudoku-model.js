// sudoku_model

var generator = require('./sudoku-generator.js');

var sudoku_model = {};

// full board to validate user input
sudoku_model.solution = [];

// Unresolved board that will be modified by the user
sudoku_model.board = [];

// Difficulty level
// 0: Easy
// 1: Medium
// 2: Hard
sudoku_model.difficulty = 0;

// Track whether the board has any invalid entries
sudoku_model.errorCount = 0;

// Initialize the model
// @difficulty (number): Level of difficulty. Easy: 0, Medium: 1 and Hard: 2 
sudoku_model.init = function(difficulty) {
    // get a new board from the generator
    var newBoard = generator.newBoard(difficulty);
    // set the unresolved and solution boards
    this.board = newBoard.unresolved;
    this.solution = newBoard.solution;
};

module.exports = sudoku_model;
