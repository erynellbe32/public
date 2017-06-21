'use strict';
/*EXPRESS & BODY PARSER INITIALIZE DEPENDENCIES*/
var express = require('express');
var server = express();
var bodyParser = require('body-parser');
const functions = require('firebase-functions');
var firebase = require("firebase");
var admin = require("firebase-admin");
var user = admin.auth().currentUser;
var db = admin.database();
var ref = db.ref("/customer");

// var session = require('express-session')

// CONFIGURE EXPRESS SERVER
server.configure(function(){
    server.set('port', process.env.PORT || 3000);
    server.set(views, __dirname + '/views');
    server.use(server.router);
    server.set('view engine', 'ejs');

/*LIVE TESTING HTTP */
server.listen(port, function () {
    console.log('Listening at Port ' + port);
});



/*APP USE & SET STATIC FILES*/
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(session({secret:'thisisitpancit',saveUninitialized:true,resave:true}));
server.use(express.static(__dirname + '/assets'));
server.use(currentUser);




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



/*END POINT PANCIT TEST*/
server.get('/pancit', function(req, res) {
  res.json({notes: "This is it Pancit !"})
});


/*END POINTS STARTER APP SITE*/
server.get('/', function(req, res) {
  res.render('index.ejs');
});
server.get('/register', function(req, res) {
    res.render('signup.ejs');
});





