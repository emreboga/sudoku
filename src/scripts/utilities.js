// Utility Functionalities

var $ = require('jquery');

var utils = {};

// Builds a selector from the coordinates x and y.
// Each cell in the board html has a unique selector,
// which can be built from its coordinates in the board data.
utils.buildSelector = function(x, y) {
    var selector = '.r-' + Math.floor(x / 3) + ' .st-' + Math.floor(y / 3) + ' .r-' + (x % 3) + ' .c-' + (y % 3);
    return selector;
};

// Gets a the specified number of random elements from an array
utils.getDistinctRandoms = function(array, count) {
    var items = array.slice();
    var ret = [];
    if (items.length <= count) {
        // If there is not sufficient items in the array, return the array itself
        ret = items;
    } else {
        // Each randomly selected item is spliced from the array to exclude from the next pick
        for (var i = 0; i < count; i++) {
            ret.push(items.splice(Math.floor(Math.random() * items.length), 1)[0]);
        }
    }
    // Return randomly selected items
    return ret;
};

// Validates a cell input by checking the row, the column and the subtable it belongs to
utils.validateInput = function(value, coors, board) {
    // Check row
    for (var i = 0; i < board[coors.x].length; i++) {
        if (i === coors.y) {
            continue;
        }
        if (board[coors.x][i] === value) {
            return false;
        }
    }

    // Check column
    for (i = 0; i < board.length; i++) {
        if (i === coors.x) {
            continue;
        }
        if (board[i][coors.y] === value) {
            return false;
        }
    }

    // Check sub-table
    // Get sub table's top-left coordinates
    var topLeft_x = Math.floor(coors.x / 3) * 3 + coors.x % 3;
    var topLeft_y = Math.floor(coors.y / 3) * 3 + coors.y % 3;
    // Iterate the subtable for duplicate check
    for (i = topLeft_x; i < topLeft_x + 3; i++) {
        for (var k = topLeft_y; k < topLeft_y + 3; k++) {
            if (board[i][k] === value) {
                return false;
            }
        }
    }

    // Entry is valid
    return true;
};

// Keydown callback to avoid multi-digit and non-numeric entries
utils.oneDigitNumericOnly = function(e) {
    e.originalEvent.returnValue = false;
    var key = e.keyCode,
        value = String.fromCharCode(key),
        isNumeric = $.isNumeric(value);

    if (!isNumeric) {
        // We still need to check for tab, backspace, arrow keys etc. for non-numeric case
        if ((key >= 8 && key <= 27) || (key >= 33 && key <= 46) || (key >= 96 && key <= 105)) {
            e.originalEvent.returnValue = true;
        }
    } else {
        if (e.target.value.length === 0) {
            // cannot be more than one digits
            e.originalEvent.returnValue = true;
        }
    }
};

// Validates the specied model's board fror completion
// There are two validation rules:
// 1- No errors on the board
// 2- Sum of all values in the board adds up to 405
utils.validateCompletion = function(model) {
    var completed = false,
        sum = 0;
    if (model.errorCount === 0) {
        // No erros on the board
        // Add up all values for sum check
        for (var i = 0; i < 9; i++) {
            for (var k = 0; k < 9; k++) {
                sum += model.board[i][k];
            }
        }
        if (sum === 405) {
            // Sum of all values is 405
            // Board is complete
            completed = true;
        }
    }
    return completed;
};

module.exports = utils;
