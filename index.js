'use strict';

module.exports = function listenOnce(node, type, callback, capture) {
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

    capture = capture || false;

    if(type instanceof Array) {
        type.forEach(function(typeInstance) {
            node.addEventListener(typeInstance, listener, capture);
        });
    } else {
        node.addEventListener(type, listener, capture);
    }
}