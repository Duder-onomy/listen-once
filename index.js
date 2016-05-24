'use strict';

module.exports = function listenOnce(node, type, callback) {
    var finished = false,
        listener = function(e) {
            if(type instanceof Array) {
                type.forEach(function(typeInstance) {
                    node.removeEventListener(type, listener);
                });
            } else {
                node.removeEventListener(type, listener);
            }

            if(!finished) {
                finished = true;
                return callback(e);
            }
        };
    if(type instanceof Array) {
        type.forEach(function(typeInstance) {
            node.addEventListener(typeInstance, listener, false);
        });
    } else {
        node.addEventListener(type, listener, false);
    }
}