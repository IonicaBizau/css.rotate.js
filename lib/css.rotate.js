// Dependencies
var CSSTransform = require("cross-transform")
  , ElmSelect = require("elm-select")
  ;

function CSSRotate(elm, angle, origin) {

    var elms = CSSCrossTransform(elm, "rotate(" + angle + "deg)");


    return elm;
}

module.exports = CSSRotate;
