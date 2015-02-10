// utilities.js

var utils = {};

utils.buildSelector = function(x, y) {
    var selector = '.r-' + Math.floor(x / 3) + ' .st-' + Math.floor(y / 3) + ' .r-' + (x % 3) + ' .c-' + (y % 3);
    return selector;
};

utils.getDistinctRandoms = function(array, count) {
    var ret = [];
    if (array.length <= count) {
        ret = array;
    } else {
        for (var i = 0; i < count; i++) {
            ret.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
        }
    }
    return ret;
};

module.exports = utils;
