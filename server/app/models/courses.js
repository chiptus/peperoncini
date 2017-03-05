'use strict';

const mongoose = require('mongoose');

const Ingredient = require('./ingredients');

const Course = new mongoose.Schema({
	name: String,
	ingredients: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Ingredient'
	}],
});

module.exports = mongoose.model('Course', Course);
