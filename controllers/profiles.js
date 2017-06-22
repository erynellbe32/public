/**
 * Created by erynellbe32 on 22/06/2017.
 */
'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var admin = require("firebase-admin");


/*APP USE & SET STATIC FILES*/
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* DATABASE PROVISIONING  */

var db = admin.database();
var ref = db.ref("/"); // check firebas rules for special priviledge
ref.once("value", function(snapshot) {
    console.log(snapshot.val());
});



module.exports = router