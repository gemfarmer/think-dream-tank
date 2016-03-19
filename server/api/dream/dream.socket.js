/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Dream = require('./dream.model');

exports.register = function(socket) {
  Dream.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Dream.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('dream:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('dream:remove', doc);
}