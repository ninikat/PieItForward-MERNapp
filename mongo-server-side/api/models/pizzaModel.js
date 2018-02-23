'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var PizzaSchema = new Schema({
  name: {
    type: String,
    required: 'Enter your the type of slice'
  },
  restaurant: {
    type: String,
    required: 'Enter the restaurant where it will be redeemed'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pizza', PizzaSchema);
