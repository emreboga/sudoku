// Sudoku View
// Initiates a Sudoku Model
// Handles all user interaction and input validations

var $ = require('jquery');
var utils = require('./utilities.js');
var templates = require('../templates/compiled/templates.js').Templates;

require('jquery-ui/dialog');

var sudoku_view = {};

sudoku_view.model = null;

// Initiates a view with the specified model
sudoku_view.init = function(model) {
    // set the model and re-set everything
    this.model = model;
    this.reset();
};

// Resets the view
// This will re-initiate the model and build the board skeleton in DOM
sudoku_view.reset = function() {
    // Initialize the model with the current difficulty level
    this.model.init(this.getDifficulty());
    // generate the html table for the board
    $('.game').html(templates.table());
    // Handler for solution
    $('.options .solution button').click({'view': this}, utils.solve);
};

// Renders the view on the page
// This operation will set the values from model.board on the board skeleton in DOM
sudoku_view.render = function() {
    var board = this.model.board,
        cellValue,
        $cell;

    // Iterate the board and set each value
    for (var i = 0, l = board.length; i < l; i++) {
        for (var k = 0, m = board[i].length; k < m; k++) {
            cellValue = board[i][k];
            // Each cell in the board skeleton has a unique selector,
            // which can be built from the coordinates of the cell in model.board
            $cell = $(utils.buildSelector(i, k));
            if (cellValue !== 0) {
                // Set cell value only if not 0, which means an emoty cell
                $cell.html(cellValue);
            } else {
                // If the cell is empty, we listen for user input
                $cell.keyup({'coors': {'x': i, 'y': k}, 'view': this}, this.validateEntry);
            }
        }
    }
    // Listen to all keydowns in the game to avoid non-numeric and multi-digit entries
    $('.game').keydown(utils.oneDigitNumericOnly);
};

// Gets the difficulty from the options section of the page
sudoku_view.getDifficulty = function() {
    var difficulty;

    // Difficulty is determined from the selected option's text
    // 'easy': 0
    // 'medium': 1
    // 'hard': 2
    switch ($('.difficulty .selected').html()) {
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

// Validates the entry by checking row, column and the subtable the cell belongs to
sudoku_view.validateEntry = function(e) {
    var value = parseInt(e.target.value),
        view = e.data.view,
        model = view.model;
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
    // Set the value in the table for both valid and invalid cases
    model.board[e.data.coors.x][e.data.coors.y] = value;

    // Check if board is completed succesfully
    if (utils.validateCompletion(model)) {
        // Show success message
        view.showSuccess();
    }
};

// Creates a modal dialog for a success case
sudoku_view.showSuccess = function() {
    var that = this;
    $('.success-dialog').dialog({
        title: 'Congratulations!',
        modal: true,
        draggable: false,
        resizable: false,
        position: ['center'],
        maxWidth: 200,
        maxHeight: 200,
        dialogClass: 'dialog-custom',
        buttons: {
            'New game?': function() {
                // Reset and re-render the view if user wants another game
                that.reset();
                that.render();
                // Close the dialog after setting up the new game
                $(this).dialog('close');
            },
            'No, thanks!': function() {
                // Close the dialog if user doesn't want a new game
                $(this).dialog('close');
            }
        }
    });
};

module.exports = sudoku_view;
