'use strict';

var _ = require('lodash');
var Dream = require('./dream.model');
var User = require('./../user/user.model');

// Get list of dreams
exports.index = function(req, res) {
  Dream.find(function (err, dreams) {
    if(err) { return handleError(res, err); }
    return res.json(200, dreams);
  });
};


// Get a single dream
exports.show = function(req, res) {
  Dream.findById(req.params.id, function (err, dream) {
    if(err) { return handleError(res, err); }
    if(!dream) { return res.send(404); }
    return res.json(dream);
  });
};

exports.random = function(req,res) {
  Dream.random(function(err, dream) {
    console.log(dream)
    return res.json(200, dream);
    // res.send(quote.quote);
    // req.user.lastQuote = quote._id;
    // req.user.save();
  });
}
exports.randomTwo = function(req,res){
  Dream.randomTwo(function(err, dreams) {
    console.log(dreams)
    return res.json(200, dreams);
    // res.send(quote.quote);
    // req.user.lastQuote = quote._id;
    // req.user.save();
  });
}

// Creates a new dream in the DB.
exports.create = function(req, res) {
  Dream.create(req.body, function(err, dream) {

    User.findById(dream.user_id, function (err, user) {
      user.dream_id.push(dream._id);
      user.save();
    });


    if(err) { return handleError(res, err); }
    return res.json(201, dream);
  });
};

// Updates an existing dream in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Dream.findById(req.params.id, function (err, dream) {
    if (err) { return handleError(res, err); }
    if(!dream) { return res.send(404); }
    var updated = _.merge(dream, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, dream);
    });
  });
};

// Deletes a dream from the DB.
exports.destroy = function(req, res) {
  Dream.findById(req.params.id, function (err, dream) {
    if(err) { return handleError(res, err); }
    if(!dream) { return res.send(404); }
    dream.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}