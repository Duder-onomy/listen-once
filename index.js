'use strict';

module.exports = function listenOnce(node, type, callback) {
    node.addEventListener(type, function(e) {
        e.target.removeEventListener(e.type, callback);
        return callback(e);
    });
}