'use strict';

module.exports = function listenOnce(node, type, callback) {
    var listener = function(e) {
        node.removeEventListener(type, listener);
        return callback(e);
    };

    node.addEventListener(type, listener, false);
}