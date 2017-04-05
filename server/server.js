'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
const cors = require('cors');

require('dotenv').config({ silent: true });

const { jsonParser } = require('./app/middelware/json');

var app = express();
// require('./app/config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.use(cors());

app.use(jsonParser);

// app.use(passport.initialize());
// app.use(passport.session());

routes(app, passport);

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Node.js listening on port ' + port + '...');
});
