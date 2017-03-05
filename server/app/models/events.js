'use strict';

const mongoose = require('mongoose');

const Event = new mongoose.Schema({
	name: String,
	menus: [{
		type: mongoose.Schema.ObjectId,
		ref: 'Menu',
	}]
});

module.exports = mongoose.model('Event', Event);
