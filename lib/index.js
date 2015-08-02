// Dependencies
var CSSTransform = require("cross-transform");

/**
 * CSSRotate
 * Rotate an element.
 *
 * @name CSSRotate
 * @function
 * @param {String|Element|NodeList} elm A stringified query selector, an element or a node list.
 * @param {Number} angle A number representing the rotate value (in degrees).
 * @return {Element} First selected element.
 */
function CSSRotate(elm, angle) {
    return CSSCrossTransform(elm, "rotate(" + angle + "deg)");
}

module.exports = CSSRotate;
