'use strict';
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const cardSchema = mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  cardSet: String,
  type: String,
  faction: String,
  rarity: String,
  cost: Number,
  attack: Number,
  health: Number,
  text: String,
  race: String,
  playerClass: String,
  img: { 
    type: String,
    required: true
  },
  imgGold: String,
  locale: String,
  mechanics: [{ name: String }]
});

const CardModel = mongoose.model('Card', cardSchema);

module.exports = CardModel;


