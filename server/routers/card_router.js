var express = require("express");
var router = express.Router();
var CardModel = require("../../db/models/card.js");
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cardstone');
// define the home page route
router.get("/", function(req, res) {
  CardModel.find({}, function(err, data) {
    if(err) {
      console.log(err)
      res.status(500).send()
    }

    res.send(JSON.stringify(data))
  });
});

module.exports = router;
