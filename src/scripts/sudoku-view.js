// sudoku_view

var $ = require('jquery');
var utils = require('./utilities.js');

var sudoku_view = {};

sudoku_view.model = null;

sudoku_view.init = function(model) {
    this.model = model;

    // Initialize the model with the current difficulty level
    this.model.init(this.getDifficulty());
};

sudoku_view.render = function() {
    var board = this.model.board,
        cellValue,
        $cell;
    for (var i = 0, l = board.length; i < l; i++) {
        for (var k = 0, m = board[i].length; k < m; k++) {
            cellValue = board[i][k];
            $cell = $(utils.buildSelector(i, k));
            if (cellValue !== 0) {
                $cell.html(cellValue);
            } else {
                $cell.keyup({'coors': {'x': i, 'y': k}, 'view': this}, this.validateEntry);
            }
        }
    }
    $('.game').keydown(utils.oneDigitNumericOnly);
};

sudoku_view.getDifficulty = function() {
    var difficulty;

    switch ($('.difficulty .selected').val()) {
        case 'easy':
            difficulty = 0;
            break;
        case 'medium':
            difficulty = 1;
            break;
        case 'hard':
            difficulty = 2;
            break;
        default:
            difficulty = 0;
    }

    return difficulty;
};

sudoku_view.validateEntry = function(e) {
    var value = parseInt(e.target.value),
        model = e.data.view.model;
    // validate the input
    if (!utils.validateInput(value, e.data.coors, model.board)) {
        if (e.target.style.border !== '1px solid red') {
            e.target.style.border = '1px solid red';
            model.errorCount += 1;
        }
    } else {
        if (e.target.style.border !== '') {
            e.target.style.border = '';
            model.errorCount -= 1;
        }
    }
    model.board[e.data.coors.x][e.data.coors.y] = value;
};

module.exports = sudoku_view;
