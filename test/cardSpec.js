'use strict';
const expect = require('chai').expect;

const Card = require('../db/models/card.js');

describe('Card model', function() {
  it('should be invalid if required fields (username || email) are empty', function(done) {
    const card = new Card();

    card.validate(function(err) {
      expect(err.errors.cardname && err.errors.image).to.exist;
      done();
    });
  });
});
