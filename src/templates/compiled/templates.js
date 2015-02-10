this["Templates"] = this["Templates"] || {};

this["Templates"]["sub-table-row"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);
}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};

this["Templates"]["sub-table"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
buf.push("<table class=\"pure-table\"><tbody>");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table>");}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};

this["Templates"]["table-row"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["st-" + (val) + ""], [true])) + "><table class=\"pure-table\"><tbody>");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["st-" + (val) + ""], [true])) + "><table class=\"pure-table\"><tbody>");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table></td>");
    }

  }
}).call(this);
}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};

this["Templates"]["table"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
buf.push("<table class=\"pure-table pure-table-bordered\"><tbody>");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["st-" + (val) + ""], [true])) + "><table class=\"pure-table\"><tbody>");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["st-" + (val) + ""], [true])) + "><table class=\"pure-table\"><tbody>");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["st-" + (val) + ""], [true])) + "><table class=\"pure-table\"><tbody>");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["st-" + (val) + ""], [true])) + "><table class=\"pure-table\"><tbody>");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<tr" + (jade.cls(["r-" + (val) + ""], [true])) + ">");
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var val = $$obj[$index];

buf.push("<td" + (jade.cls(["c-" + (val) + ""], [true])) + "><input type=\"number\"></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table>");}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};