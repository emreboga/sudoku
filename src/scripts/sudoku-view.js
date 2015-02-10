// sudoku-view.js

var $ = require('jquery');
var utils = require('./utilities.js');

var sudoku_view = {};

sudoku_view.init = function() {
};

sudoku_view.render = function(board) {
    for (var i = 0, l = board.length; i < l; i++) {
        for (var k = 0, m = board[i].length; k < m; k++) {
            var cell = board[i][k];
            var selector = utils.buildSelector(i, k);
            $(selector).html(cell);
        }
    }
};

module.exports = sudoku_view;
