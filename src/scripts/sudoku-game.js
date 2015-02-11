// Sudoku Game
// Starts a sudoku game with the selected difficulty

var $ = require('jquery');
var model = require('./sudoku-model.js');
var view = require('./sudoku-view.js');

var sudoku_game = {};

// Starts the game
sudoku_game.start = function() {
    // initialize the view with a model
    view.init(model);
    // render the view to start the game
    view.render();
};

// Handler for difficulty change
$('.difficulty .option').click(function(e) {
    var $target = $(e.target),
        $sibling;
    // if the options hasn't been selected already
    if (!$target.hasClass('selected')) {
        // select the new option
        $target.addClass('selected');
        // check each sibling
        $target.siblings().each(function() {
            $sibling = $(this);
            // and remove the class if previously selected
            if ($sibling.hasClass('selected')) {
                $sibling.removeClass('selected');
            }
        });
        // re-start the game with the enw difficulty level
        sudoku_game.start();
    }
});

// Start the game
sudoku_game.start();
