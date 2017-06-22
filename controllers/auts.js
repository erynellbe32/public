'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var admin = require("firebase-admin");

var serviceAccount = require("./../assets/config.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://zimpia-web-api.firebaseio.com"
});

/*APP USE & SET STATIC FILES*/
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());



/*
FOR DATABASE PROVISIONING
*/

var db = admin.database();
var ref = db.ref("/"); // check firebas rules for special priviledge
ref.once("value", function(snapshot) {
    console.log(snapshot.val());
});



// TODO USER ADMIN, check on NULL currentuser
var user = admin.auth().currentUser;
var name, email, uid, emailVerified;

if (user != null) {
    user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Email: "+profile.email);
    });
} else {
    // No user is signed in.
}


// TODO NExT DONE - fix email posting
/*
variable fix, routing param
res send
type??
* */

router.get('/api/login/:email', function(req, res,next) {
    var currentUser = new user();
    currentUser.local.email = req.params.email;
    res.send(req.params.email); next();
    admin.auth().getUserByEmail(email)
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully fetched user data:", userRecord.toJSON());
        })
        .catch(function(error) {
            console.log("Error fetching user data:", error);
        });

});

module.exports = router