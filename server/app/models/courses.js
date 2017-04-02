'use strict';

const mongoose = require('mongoose');

const Ingredient = require('./ingredients');

const Course = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
      },
      value: Number,
    },
  ],
});

module.exports = mongoose.model('Course', Course);
