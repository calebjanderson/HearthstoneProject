const axios = require('axios');
const CardController = require('./db/controllers/card.js');
const mongoose = require('mongoose');

var cardRequest = axios.create({
  baseURL: 'https://omgvamp-hearthstone-v1.p.mashape.com',
  timeout: 6000,
  headers: {'X-Mashape-Key': 'z5AthkFHYimshOyYGJ3qPzMO02Msp1YdRJUjsnJlyToYz8NsEj'}
});

mongoose.connect('mongodb://localhost/cardstone');


cardRequest.get('/cards')
 .then((response) => {
    CardController.insert(response.data['Basic'], function(err, done) {
      if ( err ) {
        console.log(err)
      }
      console.log('Done: ', done.length)
      mongoose.disconnect();
    })
  })