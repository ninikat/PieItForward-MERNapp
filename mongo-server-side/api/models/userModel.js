'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Enter your name'
  },
  email: {
    type: String,
    required: 'Enter your email address'
  },
  karma: {
    type: String,
    default:'0'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
