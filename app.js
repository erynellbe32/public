'use strict';
/*EXPRESS & BODY PARSER INITIALIZE DEPENDENCIES*/
var dotenv = require('dotenv');
dotenv.load();
var bodyParser = require('body-parser');
var express = module.exports = require('express');
var server = express();
var firebase = require('./controllers/zfirebase');

/*MODULAR DEPENDENCIES*/
  var authenticate = require('./controllers/authenticate'); //authenticate firebase module
  server.use('/authenticate', authenticate);
  var profiles = require('./controllers/profiles'); //profiles firebase module
  server.use('/profiles', profiles);



/*LIVE TESTING HTTP */
var port = process.env.PORT || 5000;

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



/*APP USE & SET STATIC FILES*/
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

/*SERVER TEST PASS*/
server.get('/api/login/:email', function(req, res) {
    console.log("hello");
    res.send('contact success' + req.params.email);
});

server.post('/api/login/', function(req, res) {
  console.log("hi!");
  res.send('contact success!');
  // insert firebase auth




});
