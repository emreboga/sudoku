// sudoku_generator

var utils = require('./utilities.js');

var sudoku_generator = {};

// base board to start the randomization
sudoku_generator.baseBoard = [
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

// Generate a new board by randomizing the base board
// Randomization will generate a random game from 3^8 (6561) possibilities
// This requires morphing the board without breaking it
// There are four methods that can be applied:
// 1- Swapping two random rows in each of three groups (3^3 possibilities)
// 2- Swapping two random columns in each of three groups (3^3 possibilities)
// 3- Swapping all rows in two random groups (3^1 possibilities)
// 4- Swapping all columns in two random groups (3^1 possibilities)
sudoku_generator.newBoard = function(difficulty) {
    var newBoard = [],
        solution = [];

    // Clone the base board to a new board to start with
    for (var i = 0; i < this.baseBoard.length; i++) {
        newBoard[i] = this.baseBoard[i].slice();
    }

    // Randomizations of the base board definition:
    // 1- Pick a random number between 0-2 and apply to the base board
    for (i = 0; i < 3; i++) {
        swapRowsInGroup(newBoard, i, utils.getDistinctRandoms([0, 1, 2], 2));
    }
    // 2- Pick a random number between 0-2 and apply to the base board
    for (i = 0; i < 3; i++) {
        swapColsInGroup(newBoard, i, utils.getDistinctRandoms([0, 1, 2], 2));
    }
    // 3- Pick a random number between 0-2 and apply to the base board
    swapRowsAmongGroups(newBoard, utils.getDistinctRandoms([0, 1, 2], 2));
    // 4- Pick a random number between 0-2 and apply to the base board
    swapColsAmongGroups(newBoard, utils.getDistinctRandoms([0, 1, 2], 2));

    // Clone and keep the solution before hiding the cells for the game board
    for (i = 0; i < newBoard.length; i++) {
        solution[i] = newBoard[i].slice();
    }

    // Remove a certain number of cells depending on the difficulty
    // Easy:    50 remaining cells
    // Medium:  40 remaining cells
    // Hard:    30 remaining cells
    // return the new board
    setDifficulty(newBoard, difficulty);

    // return the board with the solution
    return {
        'unresolved': newBoard,
        'solution': solution
    };
};

var swapRowsInGroup = function(board, groupIdx, rows) {
    var offset = groupIdx * 3,
        idx1 = rows[0] + offset,
        idx2 = rows[1] + offset,
        swap;

    swap = board[idx1];
    board[idx1] = board[idx2];
    board[idx2] = swap;
};

var swapColsInGroup = function(board, groupIdx, cols) {
    var offset = groupIdx * 3,
        idx1 = cols[0] + offset,
        idx2 = cols[1] + offset,
        swap;

    for (var i = 0, l = board.length; i < l; i++) {
        swap = board[i][idx1];
        board[i][idx1] = board[i][idx2];
        board[i][idx2] = swap;
    }
};

var swapRowsAmongGroups = function(board, groups) {
    var idx1 = groups[0] * 3,
        idx2 = groups[1] * 3,
        swap;

    for (var i = 0; i < 3; i++) {
        swap = board[idx1 + i];
        board[idx1 + i] = board[idx2 + i];
        board[idx2 + i] = swap;
    }
};

var swapColsAmongGroups = function(board, groups) {
    var idx1 = groups[0] * 3,
        idx2 = groups[1] * 3,
        swap;

    for (var i = 0, l = board.length; i < l; i++) {
        for (var k = 0; k < 3; k++) {
            swap = board[i][idx1 + k];
            board[i][idx1 + k] = board[i][idx2 + k];
            board[i][idx2 + k] = swap;
        }
    }
};

var setDifficulty = function(board, difficulty) {
    // pick a certain number of random cells to hide from each row
    var count;
    switch (difficulty) {
        case 0:
            count = 3;
            break;
        case 1:
            count = 4;
            break;
        case 2:
            count = 5;
            break;
        default:
            count = 3;
    }

    for (var i = 0, l = board.length; i < l; i++) {
        var row = board[i];
        var toBeHidden = utils.getDistinctRandoms(row, count);
        for (var k = 0, m = toBeHidden.length; k < m; k++) {
            var num = toBeHidden[k];
            for (var p = 0, r = row.length; p < r; p++) {
                if (row[p] === num) {
                    board[i][p] = 0;
                    break;
                }
            }
        }
    }
};

module.exports = sudoku_generator;
