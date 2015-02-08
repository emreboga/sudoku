// game.js

var $ = require('jquery');

var model = require('./sudoku-model.js');
var view = require('./sudoku-view.js');
var solver = require('./sudoku-solver.js');
var templates = require('../templates/compiled/templates.js').Templates;

$('.main').html(templates.table());
