'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    var User = require('./../user/user.model');

var UserSchema = require('mongoose').model('User').schema;

var DreamSchema = new Schema({
  future: String,//dreams
  world: String,//goals
  active: Boolean,
  votes: Number,
  flagged: Boolean,
  user_id: String,
  share: Boolean,
  rating: [Number],
  test: String,
  average_rating: Number,
  location: {
    zip: { type: Number },
    latitude: { type: Number },
    longitude: { type: Number }
  }
});

DreamSchema.statics.random = function(cb) {
  this.count(function(err, count) {
    if (err) return cb(err);
    var rand = Math.floor(Math.random() * count);
    this.findOne().skip(rand).exec(cb);
  }.bind(this));
};

DreamSchema.statics.randomTwo = function(cb) {
  this.count(function(err, count) {
    if (err) return cb(err);
    var rand = Math.floor(Math.random() * count);
    this.find().limit(2).skip(rand).exec(cb);
  }.bind(this));
};

module.exports = mongoose.model('Dream', DreamSchema);
