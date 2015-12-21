/**
 * @file outerHeight.js
 * @auther leiquan<leiquan@baidu.com>
 * @date 2015-12-1
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @return Number
 * @param HTMLElement el
 * @runtime Browser Window, Require JS
 * @dependencies none
 */
define(function (require, exports, module) {

    var outerHeight = function (el) {
        return el.offsetHeight;
    }

    module.exports = outerHeight;

});