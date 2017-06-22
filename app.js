'use strict';
/*EXPRESS & BODY PARSER INITIALIZE DEPENDENCIES*/
var dotenv = require('dotenv');
dotenv.load();
var express = require('express');
var server = express();
var bodyParser = require('body-parser');
const functions = require('firebase-functions');
var admin = require("firebase-admin");
server.set('view engine', 'ejs');

// var session = require('express-session')

// CONFIGURE EXPRESS SERVER
// server.configure(function () {
//     server.set(views,__dirname + '/views');
//     server.use(server.router);


/*LIVE TESTING HTTP */
var port = process.env.PORT || 5000;
server.listen(port, function () {
  console.log('listening on port ' + port);
});


if (process.env.NODE_ENV !== 'production') {
require('dotenv').config()
};

/*APP USE & SET STATIC FILES*/
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
// server.use(session({secret:'thisisitpancit',saveUninitialized:true,resave:true}));
// server.use(express.static(__dirname + '/assets'));
// server.use(currentUser);




/*FIREBASE ADMIN SDK INITIALIZE*/
admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "zimpia-web-api",
    private_key_id: "4c57067821a00f0f4aaf8e6986766350bdea1b85",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChbnwBOeedjKVT\nwl4pH2ZofOhchOHFM4H0mMEw+lbX78NLIFzOmPmbGNn8o9VKErWf456NKuI1n5lL\ns2fYhMejMh2BSy2iZcwSX+5OBQzFUnSxcZil5lEmYIcs2ESPts4Wi1XWkyCRjzZ+\nYzHuQ9Sa0Jy54/uSKfOwBCTSUui8Dpa/9IU6y8x4FUH3YktfX1L4UxHJys9twu4O\n/ejhPVzjh+1mEqYiVmz8fAzpcXk7u8D36u8Y7F+FoNjzOhxPq2Vrz81SFsfxWKh7\nh3ZO9n7sZSefDYSsmaKP+i9ffVM9N2D1AtSratMQHQp0dcHkb9E+CJ+nuGEWNjrX\nVtLWyallAgMBAAECggEAB1KIVZ/neL1PJ7AqodZJ4i+kQV1JRmIloQKN/mdxXMsd\n2/PRJRF9GClo6q13XvkS4iuqq4zIUclcl5/0Jzb8PTobneh0kfS1hhg+3Xm1XUmP\nsuRls0S+spOkHgcgGQRTb2QmyRxhJYK0l8gISETGyVAkHWFER7PkDCLFlTRSJTfr\nvmzIbPpoKvtDOWpcSJCtCkBjI7kcvfRegHrrDG7QS1ZmaD+by7AX1WoFlipRAbTJ\nVYSwzBYt00toG4s/Wd73GKLRq02jqKxrRlHo/T4V8FLAbdVgb7ORuWjcUrgZzwE4\n78Lf9/Of/9IxX8HfINW02Wj2j6IsJBqc02wZ/XbRkwKBgQDO7zGymAgf7O0+VIrn\nhenHbl1JvQasFttMdFMHYF6YJqwOctaEclnPm2XNv1/kzjRIs3buwkAmq33oyph1\nY+VxJwJdnjBUBH/eAeBZIGOoTV2AnF+oOna0RjIZnK2qeDgBvKuHbutQTJyz8f/S\nys2CnaZ5jEcyG8rXDgvEPNFD2wKBgQDHtUvHZqBEcA+vhwtK99GjXXg9qLGZnYut\n5b4ZhtdizRM/tzOM8BfectkahczcYGw6Ptp4eUbPRmH+KDAA/TpPRu/W8kzDWYut\nd7dqRydOQRGGh0Xi1Dklk7+vjx8mxoKyYnoiKruSsPyhif3yy0O56N30AS6ibb4l\nSccDRXrrvwKBgQCTw/4K98ElevvWPGyL8vYC8O4wj4hKLnAeYho/9DLYFxVZo+tG\n3JkBRIgnqXaCXjS7jVtqFs/UTTU1nCXN/a2DZUWtMB52gFgGYfSf8B75uXUBN6ie\n6lCFXnK8E0N3rSzhIKajqTLjPjHP1QjGrwadNJIBzYexYmMvudnxITSVbQKBgQCe\nl25SL0Fel88dCRUCt8IXBYcTD//Zia7+rc9E3jv1Df4XPxkE9zU9Rd76nP6Ok1Pe\n/ULpIQYGXFI9TxSv9Gh1xFN6Unh7OYUegE97an3gOvP77TimZPnsyWQTuoh2dnYb\nyvBKab0DROGaNscgJCLoY/C+cKHkA1pYqjoMcwSmaQKBgDz1YPCP7AqGCTVDBH7V\ng+yotDBtQWdpIvlaPCft9LruwxUNg/09JnbS+7x6SdvAfc1gP9GNf4mcHbHFsuro\nEsBr+2burB+WB12iXG3bYjhkJ0Wgr6PpYY6Oc0npo6BIFXS9TPg16UqkcmUH1c2l\n1uRF7EjsLAG9eZVxipKMvW+E\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-nwi5o@zimpia-web-api.iam.gserviceaccount.com",
    client_id: "110898328913830786217",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nwi5o%40zimpia-web-api.iam.gserviceaccount.com"
  }),
  databaseURL: "https://zimpia-web-api.firebaseio.com"

});


var db = admin.database();
var ref = db.ref("/"); // check firebas rules for special priviledge
ref.once("value", function(snapshot) {
    console.log(snapshot.val());
});


/*END POINT PANCIT TEST*/
server.get('/pancit', function(req, res) {
  res.json({notes: "This is it Pancit !", list: "puto"})
});

/*END POINTS STARTER APP SITE*/
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
server.get('/api/login/:email', function(req, res,next) {
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

