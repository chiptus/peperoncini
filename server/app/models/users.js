'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	socialId: Number,
	name: String,
	socialNetwork: String,
	socialToken: String,
});

module.exports = mongoose.model('User', User);
