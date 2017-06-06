'use strict';
const { dummyData, dummyCard } = require('./test_data.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const Card = require('../db/models/card.js');
mongoose.connect('mongodb://localhost/card_test'); 

describe('Card model', function() {
  beforeEach(function(done){    
    //add some test data    
    Card.create(dummyData, function(err, rows){
      if(err) {
        console.log(err);
        throw err;
      }      
      done();    
    });  
  });

  it('should be invalid if required fields are empty', function(done) {
    const card = new Card();

    card.validate(function(err) {
      expect(err.errors).to.exist;
      done();
    });
  });

  it('accepts an object and saves it to the db', function(done) {
    const goodCard = new Card(dummyCard);

    goodCard.save(function(err) {
      expect(err).to.equal(null);
      Card.find(function(err, cards) {
        expect(cards.length).to.equal(dummyData.length + 1);
      })
      done();
    })
  })
  afterEach(function(done){    
    Card.remove({}, function() {      
      done();    
    });  
  }); 
});
