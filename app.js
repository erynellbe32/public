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


// AUTH SIGN IN 
server.post('/api/login/', urlencodedParser, function(req, res,next) {
  console.log("login by email");
  next();
    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = req.param.email;
        var password = req.param.password;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          console.log('Wrong password.');
        } else {
          console.log(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    }
  res.send('SIGN-IN SUCCESS!');
});


/**
 * Handles the sign up button press.
 */
server.post('/api/register/', urlencodedParser, function(req, res,next) {
  console.log("register by email");
  next();
    function handleSignUp() {
      var email = req.param.email;
      var password = req.param.password;
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }
  res.send('REGISTER SUCCESS!');
});

