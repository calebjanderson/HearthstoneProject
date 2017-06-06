const mongoose = require('mongoose');
const Cards = require('./../db/models/card.js');
const fetch = require('isomorphic-fetch')
mongoose.connect('mongodb://localhost/cardstone');



function getAllCards() {
  let obj = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'X-Mashape-Key': 'z5AthkFHYimshOyYGJ3qPzMO02Msp1YdRJUjsnJlyToYz8NsEj'
    }
  }
  return fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards`, obj)
    .then(function(data){
      return data.json()
    })
    .then(function(cards) {
      delete cards.System
      delete cards.Debug
      delete cards.Credits
      delete cards.Missions
      delete cards['Hero Skins']
      delete cards['Tavern Brawl']

      const cardsArray = [];
      for( var key in cards ) {
        for( var key2 in cards[key]) {
          cardsArray.push(cards[key][key2])
        }
      }
      console.log(cardsArray.length)
      Cards.create(cardsArray, function(err, rows) {
        if(err) {
          console.log(err)
          throw err;
        }
        mongoose.disconnect()
      })
      
    })
    .catch(console.log)
}

getAllCards();