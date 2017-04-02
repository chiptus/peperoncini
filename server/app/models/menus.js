'use strict';

const mongoose = require('mongoose');
const Course = require('./courses');

const Menu = new mongoose.Schema({
  name: String,
  description: String,
  courses: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
      value: Number,
    },
  ],
});

module.exports = mongoose.model('Menu', Menu);
