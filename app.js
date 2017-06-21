'use strict';
/*EXPRESS & BODY PARSER INITIALIZE DEPENDENCIES*/
var express = require('express');
var server = express();
var bodyParser = require('body-parser');
const functions = require('firebase-functions');
var firebase = require("firebase");
var admin = require("firebase-admin");
var user = firebase.auth().currentUser;
var db = firebase.database();
var ref = db.ref("/");
var app = firebase.initializeApp({
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
});
ref.once("value", function(snapshot) {
    console.log(snapshot.val());
});

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








/*registerPOST CREATE NEW USER WITH EMAIL AND PASSWORD with ROUTE PARAMS and with Mongo DB, convert to Firebase */
server.post('/api/user/:email/:password/', urlencodedParser, function (req, res, next) {
    var newUser = new User(); // todo experiment on user
    newUser.local.email = req.params.email;
    newUser.local.password = req.params.password;
    // console.log(newUser.local.username + " " + newUser.local.password);
    // newUser.save(function (err) {
    //     if (err)
    //         throw err;
    // });
    // res.send("Success!");
// }

        console.log(req.body);// show data on console
        res.json(req.body);
        next(); // send data
// how to catch data
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    });



    // user watcher
    // object null

  /*  TODO PRIORITY ONE Firebase Admin
  CORRECT VARIABLES AND PARSEURL
   */




    server.post('/api/user/', urlencodedParser, function (req, res, next) {


    }

        admin.auth().createUser({
            email: "user@example.com",
            emailVerified: false,
            password: "secretPassword",
            displayName: "John Doe",
            photoURL: "http://www.example.com/12345678/photo.png",
            disabled: false
        })
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully created new user:", userRecord.uid);
        })
        .catch(function(error) {
            console.log("Error creating new user:", error);
        });




    admin.auth().getUser(uid)
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully fetched user data:", userRecord.toJSON());
        })
        .catch(function(error) {
            console.log("Error fetching user data:", error);
        });



    admin.auth().getUserByEmail(email)
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully fetched user data:", userRecord.toJSON());
        })
        .catch(function(error) {
            console.log("Error fetching user data:", error);
        });



    admin.auth().updateUser(uid, {
            email: "modifiedUser@example.com",
            emailVerified: true,
            password: "newPassword",
            displayName: "Jane Doe",
            photoURL: "http://www.example.com/12345678/photo.png",
            disabled: true
        })
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully updated user", userRecord.toJSON());
        })
        .catch(function(error) {
            console.log("Error updating user:", error);
        });



    /*database*/

    var usersRef = ref.child("users");
    usersRef.set({
        alanisawesome: {
            date_of_birth: "June 23, 1912",
            full_name: "Alan Turing"
        },
        gracehop: {
            date_of_birth: "December 9, 1906",
            full_name: "Grace Hopper"
        }
    });



    var hopperRef = usersRef.child("gracehop");
    hopperRef.update({
        "nickname": "Amazing Grace"
    });


    var postsRef = ref.child("posts");

    var newPostRef = postsRef.push();
    newPostRef.set({
        author: "gracehop",
        title: "Announcing COBOL, a New Programming Language"
    });

// we can also chain the two calls together
    postsRef.push().set({
        author: "alanisawesome",
        title: "The Turing Machine"
    });


// Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });













        /*
        CREATE AUTH TOKEN
        */
        var uid = "some-uid"; // dummy uid

        admin.auth().createCustomToken(uid)
            .then(function(customToken) {
                // Send token back to client
            })
            .catch(function(error) {
                console.log("Error creating custom token:", error);
            });



        /*
        CURRENT USER OPTION #3*/

        if (user) {
            // User is signed in.
        } else {
            // No user is signed in.
        }


        /*DECODE TOKEN*/

         admin.auth().verifyIdToken(idToken)
         .then(function(decodedToken) {
         var uid = decodedToken.uid;
         // ...
         }).catch(function(error) {
         // Handle error
         });



/*NEXT CALLBACK FUNCTION */

            app.use(function(req,res, next){
                if(!req.user || !req.user.isAuthorized) next (Error('not allowed')) else next()
            });
            app.get('/:user', function (req,res,next){
                res.render('user/index', {user:req.user})
            });

            app.use(function (err, req, res, next){
                consolve.log(err.message)// not allwed
                res.render('500', err)
            });

        /**
         *
        URL ENCODED PARSER
        * */

        server.post('/login', urlencodedParser, function (req, res) {
            if (!req.body) return res.sendStatus(400)
            res.send('welcome, ' + req.body.username)


        /**
         *
        POST /api/users gets JSON bodies

         * */

            server.post('/api/users', jsonParser, function (req, res) {
                if (!req.body) return res.sendStatus(400)
                // create user in req.body
            })




    /*TODO POST SIGN-IN USING EMAIL AND PASSWORD*/
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    /*GET SIGN-OUT USER*/
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });




/*AUTH WEB FOR SPA */


    var name, email, uid, emailVerified;
    if (user != null) {
        name = user.displayName;
        email = user.email;
        emailVerified = user.emailVerified;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                         // this value to authenticate with your backend server, if
                         // you have one. Use User.getToken() instead.
    }

    if (user != null) {
    user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        });
    }


    /*UPDATE USER*/

    user.updateProfile({
        displayName: "Jane Q. User",
        photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
        // Update successful.
    }, function(error) {
        // An error happened.
    });


    user.updateEmail("user@example.com").then(function() {
        // Update successful.
    }, function(error) {
        // An error happened.
    });



    /*EMAIL VERIFICATION*/
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        // Email sent.
    }, function(error) {
        // An error happened.
    });

    /*SET PASSWORD VIA updatePassword METHOD*/


    var newPassword = getASecureRandomPassword();
    user.updatePassword(newPassword).then(function() {
        // Update successful.
    }, function(error) {
        // An error happened.
    });


    /*PASSWORD RESET*/

    var auth = firebase.auth();
    var emailAddress = email;
    auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
    }, function(error) {
        // An error happened.
    });



    /*UPLOAD PHOTO add child to profile*/

/*DELETE PHOTO*/

/*UPDATE PHOTO*/





    /*USERDATA OBJECT */

    var userData = {
        'username': username,
        uid: uid,
        email: email,
        password: password,
        gender: gender,
    };
    var userProfile = {
        address: uid,
        photo: imgUrl,
    };


    /*Register and Writes the user's data to the database.*/
    // [START basic_write]
    function writeUserData(userId, name, email, ) {
        firebase.database().ref('users/' + userId).set({
            username: name,
            email: email,
            }
        })







 */




    server.get('api/user/login', function(req, res) {
      firebase.auth().getUserByEmail(email)
          .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully fetched user data:", userRecord.toJSON());
          })
          .catch(function(error) {
            console.log("Error fetching user data:", error);
          });

    });



    server.route('api/user/register')
        .get(function (req, res) {

        })
        .post(function (req, res) {
          firebase.auth().createUser({
                email: "user@example.com",
                emailVerified: false,
                password: "secretPassword",
                displayName: "John Doe",
                photoURL: "http://www.example.com/12345678/photo.png",
                disabled: false
              })
              .then(function(userRecord) {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log("Successfully created new user:", userRecord.uid);
              })
              .catch(function(error) {
                console.log("Error creating new user:", error);
              });


        })
        .put(function (req, res) {
          firebase.auth().updateUser(uid, {
                email: "modifiedUser@example.com",
                emailVerified: true,
                password: "newPassword",
                displayName: "Jane Doe",
                photoURL: "http://www.example.com/12345678/photo.png",
                disabled: true
              })
              .then(function(userRecord) {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log("Successfully updated user", userRecord.toJSON());
              })
              .catch(function(error) {
                console.log("Error updating user:", error);
              });
        });










    // Basic write operations
    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }


    // READ DATA ONCE
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        var username = snapshot.val().username;
        // ...
    });


    // UPDATE
    function writeNewPost(uid, username, picture, title, body) {
        // A post entry.
        var postData = {
            author: username,
            uid: uid,
            body: body,
            title: title,
            starCount: 0,
            authorPic: picture
        };

        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('posts').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/posts/' + newPostKey] = postData;
        updates['/user-posts/' + uid + '/' + newPostKey] = postData;

        return firebase.database().ref().update(updates);
    }


    /*ADDING CHILD and updating and deleting*/
    var commentsRef = firebase.database().ref('post-comments/' + postId);
    commentsRef.on('child_added', function(data) {
        addCommentElement(postElement, data.key, data.val().text, data.val().author);
    });

    commentsRef.on('child_changed', function(data) {
        setCommentValues(postElement, data.key, data.val().text, data.val().author);
    });

    commentsRef.on('child_removed', function(data) {
        deleteComment(postElement, data.key);
    });





/*
API ENDING POINTS

  api/login
  api/logout
  api/login/email
  /fb
  /google
  /twitter

/register
  /email
  /fb
  /google
  /twitter
  /deactivate

/user (CONTINUING DEVELOPMENT)/
  /user/profile
  /user/payment
  /user/guest

  /user/contacts
  /user/history
  /user/messages
  /user/

*/










/* DEVELOPMENT NOTES
TESTING FIREBASE SERVER
    1. install and use FIREBASE TOOLS
    2. type command prompt firbase serve
    3. go to browser Local server: http://localhost:5000 (as provided by firebase tools)
    4. Initialize Firbase Rest
    5. apps register for a new identity each server -   /business   /express
    6. End Points

API ENDING POINTS

/auth/
  /login
  /logout
  /register
  /fb
  /google
  /twitter
  /deactivate

/database/
/user/
  /user/payment
  /user/profile
  /user/guest


*/