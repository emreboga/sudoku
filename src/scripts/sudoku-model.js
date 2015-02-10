// sudoku-model.js

var $ = require('jquery');
var utils = require('./utilities.js');

var sudoku_model = {};

// base board to start the randomization
sudoku_model.board = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8]
];

// Generate a new board by randomizing the default board
// Randomization will generate a random game from 3^8 (6561) possibilities
// This requires morphing the board without breaking it
// There are four methods that can be applied:
// 1- Swapping two random rows in each of three groups (3^3 possibilities)
// 2- Swapping two random columns in each of three groups (3^3 possibilities)
// 3- Swapping all rows in two random groups (3^1 possibilities)
// 4- Swapping all columns in two random groups (3^1 possibilities)
sudoku_model.generateBoard = function() {
    // Pick a random number between 0-2 for method#1 and apply to the base board
    for (var i = 0; i < 3; i++) {
        this.swapRowsInGroup(i, utils.getDistinctRandoms([0, 1, 2], 2));
    }
    // Pick a random number between 0-2 for method#2 and apply to the base board
    for (var k = 0; k < 3; k++) {
        this.swapColsInGroup(k, utils.getDistinctRandoms([0, 1, 2], 2));
    }
    // Pick a random number between 0-2 for method#3 and apply to the base board
    this.swapRowsAmongGroups(utils.getDistinctRandoms([0, 1, 2], 2));
    // Pick a random number between 0-2 for method#4 and apply to the base board
    this.swapColsAmongGroups(utils.getDistinctRandoms([0, 1, 2], 2));
    // return the new board
    return this.board;
};

sudoku_model.swapRowsInGroup = function(groupIdx, rows) {
    var offset = groupIdx * 3,
        idx1 = rows[0] + offset,
        idx2 = rows[1] + offset,
        swap;

    swap = this.board[idx1];
    this.board[idx1] = this.board[idx2];
    this.board[idx2] = swap;
};

sudoku_model.swapColsInGroup = function(groupIdx, cols) {
    var offset = groupIdx * 3,
        idx1 = cols[0] + offset,
        idx2 = cols[1] + offset,
        swap;

    for (var i = 0, l = this.board.length; i < l; i++) {
        swap = this.board[i][idx1];
        this.board[i][idx1] = this.board[i][idx2];
        this.board[i][idx2] = swap;
    }
};

sudoku_model.swapRowsAmongGroups = function(groups) {
    var idx1 = groups[0] * 3,
        idx2 = groups[1] * 3,
        swap;

    for (var i = 0; i < 3; i++) {
        swap = this.board[idx1 + i];
        this.board[idx1 + i] = this.board[idx2 + i];
        this.board[idx2 + i] = swap;
    }
};

sudoku_model.swapColsAmongGroups = function(groups) {
    var idx1 = groups[0] * 3,
        idx2 = groups[1] * 3,
        swap;

    for (var i = 0, l = this.board.length; i < l; i++) {
        for (var k = 0; k < 3; k++) {
            swap = this.board[i][idx1 + k];
            this.board[i][idx1 + k] = this.board[i][idx2 + k];
            this.board[i][idx2 + k] = swap;
        }
    }
};

module.exports = sudoku_model;
