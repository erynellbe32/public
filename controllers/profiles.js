/**
 * Created by erynellbe32 on 22/06/2017.
 */
'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
// var firebase = require('./zfirebase');
// var database = firebase.database();



/*APP USE & SET STATIC FILES*/
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


// Get a reference to the database service
// var database = firebase.database();





/* DATABASE PROVISIONING  */
//
// var db = admin.database();
// var ref = db.ref("/"); // check firebas rules for special priviledge
// ref.once("value", function(snapshot) {
//     console.log(snapshot.val());
// });

module.exports = router