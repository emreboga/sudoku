// sudoku_game.js

var $ = require('jquery');
var model = require('./sudoku-model.js');
var view = require('./sudoku-view.js');
var templates = require('../templates/compiled/templates.js').Templates;

// generate the html table for the board
$('.main').html(templates.table());

// initialize the view with a model
view.init(model);
// render the view to start the game
view.render();
