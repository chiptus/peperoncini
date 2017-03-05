'use strict';

const mongoose = require('mongoose');
const Course = require('./courses');

const Menu = new mongoose.Schema({
	name: String,
	courses: [{ type: mongoose.Schema.ObjectId, ref: 'Course' }],
});

module.exports = mongoose.model('Menu', Menu);
