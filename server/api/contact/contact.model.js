'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
  nom: String,
  email: String,
  message: String
});

module.exports = mongoose.model('Contact', ContactSchema);