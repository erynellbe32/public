'use strict';
/*EXPRESS & BODY PARSER INITIALIZE DEPENDENCIES*/
var dotenv = require('dotenv');
dotenv.load();
var express = require('express');
var server = express();
server.set('view engine', 'ejs');

/*MODULAR DEPENDENCIES*/
var auts = require('./controllers/auts'); //athentication firebase module
server.use('/auts', auts);
var profiles = require('./controllers/profiles'); //profiles firebase module
server.use('/profiles', profiles);

/*LIVE TESTING HTTP */
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('listening on port ' + port);
});

if (process.env.NODE_ENV !== 'production') {
require('dotenv').config()
};


/*END POINT PANCIT TEST*/
server.get('/pancit', function(req, res) {
  res.json({notes: "This is it Pancit !", list: "puto"})
});

/*END POINTS STARTER EJS APP SITE*/
server.get('/', function(req, res) {
  res.render('index.ejs');
});
server.get('/login', function(req, res) {
  res.render('login.ejs');

});
server.get('/about', function(req, res) {
  res.render('about.ejs');
});
server.get('/register', function(req, res) {
  res.render('register.ejs');
});