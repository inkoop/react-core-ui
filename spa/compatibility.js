require('core-js/es6/set')
require('core-js/es6/map')
require('core-js/fn/string/includes')
require('core-js/fn/string/starts-with')
require('core-js/fn/array/includes')
require('core-js/fn/array/for-each')
require('core-js/es6/promise')
require('core-js/fn/object/assign')
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
