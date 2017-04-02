'use strict';

const mongoose = require('mongoose');

const Ingredient = new mongoose.Schema({
  name: String,
  unit: String, //change to enum
  price: Number,
  category: { type: mongoose.Schema.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Ingredient', Ingredient);
