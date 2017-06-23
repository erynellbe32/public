'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var server = express();
// var serviceAccount = require("./../assets/config.json");
var firebase = require('./zfirebase');






// router.post('/api/login/:email.:password', urlencoded, function(req, res, next) {
//     console.log(req.body);
//     next();
//         function toggleSignIn() {
//         if (firebase.auth().currentUser) {
//             // [START signout]
//             firebase.auth().signOut();
//             // [END signout]
//         } else {
//             var email = req.param.email;
//             var password = req.param.password;
//             }
//             // Sign in with email and pass.
//             // [START authwithemail]
//             firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//                 // Handle Errors here.
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 // [START_EXCLUDE]
//                 if (errorCode === 'auth/wrong-password') {
//                     console.log('Wrong password.');
//                 } else {
//                     console.log(errorMessage);
//                 }
//                 console.log(error);
//                 document.getElementById('quickstart-sign-in').disabled = false;
//                 // [END_EXCLUDE]
//             });
//             // [END authwithemail]
//         }
//         res.send('Signed-IN').disabled = true;
//     }
// }
//







module.exports = router