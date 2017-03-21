'use strict';
const CardModel = require('../models/card.js');

exports.findAll = function(callback) {
  CardModel.find({}, callback);
};

exports.insert = function(cards, callback) {
  CardModel.create(cards, callback);
};
