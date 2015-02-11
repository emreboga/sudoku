// utilities
var $ = require('jquery');

var utils = {};

utils.buildSelector = function(x, y) {
    var selector = '.r-' + Math.floor(x / 3) + ' .st-' + Math.floor(y / 3) + ' .r-' + (x % 3) + ' .c-' + (y % 3);
    return selector;
};

utils.getDistinctRandoms = function(array, count) {
    var items = array.slice();
    var ret = [];
    if (items.length <= count) {
        ret = items;
    } else {
        for (var i = 0; i < count; i++) {
            ret.push(items.splice(Math.floor(Math.random() * items.length), 1)[0]);
        }
    }
    return ret;
};

utils.validateInput = function(value, coors, board) {
    // check row
    for (var i = 0; i < board[coors.x].length; i++) {
        if (i === coors.y) {
            continue;
        }
        if (board[coors.x][i] === value) {
            return false;
        }
    }

    // check column
    for (i = 0; i < board.length; i++) {
        if (i === coors.x) {
            continue;
        }
        if (board[i][coors.y] === value) {
            return false;
        }
    }

    // check sub-table
    // get sub talbes
    var topLeft_x = Math.floor(coors.x / 3) * 3 + coors.x % 3;
    var topLeft_y = Math.floor(coors.y / 3) * 3 + coors.y % 3;
    for (i = topLeft_x; i < topLeft_x + 3; i++) {
        for (var k = topLeft_y; k < topLeft_y + 3; k++) {
            if (board[i][k] === value) {
                return false;
            }
        }
    }

    // no dups found
    return true;
};

utils.oneDigitNumericOnly = function(e) {
    e.originalEvent.returnValue = false;
    var key = e.keyCode,
        value = String.fromCharCode(key),
        isNumeric = $.isNumeric(value);

    if (!isNumeric) {
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

module.exports = utils;
