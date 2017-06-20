/*FIREBASEJS SDK INITIALIZE*/
/*firebase.initializeApp({
  "apiKey": "AIzaSyDpVzqJK57mBYl8fPwgMSgiXFqA-H7Okkw",
  "databaseURL": "https://zimpia-web-api.firebaseio.com",
  "storageBucket": "zimpia-web-api.appspot.com",
  "authDomain": "zimpia-web-api.firebaseapp.com",
  "messagingSenderId": "273550342416",
  "projectId": "zimpia-web-api"
});
*/


/express and validation/
$ npm install express-jsonschema


DATA

	PROFILE & MUSIC SECTION
		male gender = t or f
		display_name
		age = number
		shirt = number
		trouser = number
		shoe size = number
		Photo Storage
		
		add more (guest extra users) child
		--> family members


	Payment Information
		Payment Type {
			VISA 
			MC
			Paypal
		}
			

		first and last name
		email address 
		phone number
		CC #
		expiry date
		CVC id
	Delivery Address
		Deliver Address
		City
		Zip Code
	Notifications
		Area RANGE
		

		
	Mood Changer
		Emotion
			Color Picker (could be local saved)
			Music Type
				Nu Disco
				Classical
				Hip Hop
				Deep House
				Rap
				Progressive
				Trap
				Lounge
				Alternative
				POP
				Rock
				Country
				Jazz
				Raga
				Latin
				80's
				Remix
				Retro
				Solo
		Favorited Songs (spotify like connection)
				Songs # Genre Favorites
	


PRODUCTS & BRAND
	FASHION
	SPORT
	GROCERIES
	ELECTRONICS
	AUTOMOTIVE
	FURNITURE












/*AUTHENTICATION FUNCTIONS*/

/*

MANAGE USERs

  1. Create new users without any throttling or rate limiting.
  2. Lookup users by different criteria such as email or uid.
  3. Access user metadata including account creation date and last sign-in date.
  4. Delete users without requiring their existing password.
  5. Update user properties - including their password - without having to sign in as the user.
  6. Verify emails without having to go through the out-of-band action flows for verifying emails.
  7. Change a user's email without sending email links to revoke these changes.
  8. Offline provision users in a disabled state and then later control when to enable them.
  9. Build custom user consoles that are tailored to a specific application's user management system.

*/

// A. Retrieve user ID
admin.auth().getUser(uid)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully fetched user data:", userRecord.toJSON());
  })
  .catch(function(error) {
    console.log("Error fetching user data:", error);
  });


// B. Retrieve user email
admin.auth().getUserByEmail(email)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully fetched user data:", userRecord.toJSON());
  })
  .catch(function(error) {
    console.log("Error fetching user data:", error);
  });




// Create a user attach to VARIABLES
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



// UPDATE  A USER

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

// DELETE A USER

admin.auth().deleteUser(uid)
  .then(function() {
    console.log("Successfully deleted user");
  })
  .catch(function(error) {
    console.log("Error deleting user:", error);
  });






// DECODE TOKEN

admin.auth().verifyIdToken(idToken)
  .then(function(decodedToken) {
    var uid = decodedToken.uid;
    // ...
  }).catch(function(error) {
    // Handle error
  });




firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });
 
 admin.initializeApp(functions.config().firebase);
 
 
 
 
 // Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  admin.database().ref('/messages').push({original: original}).then(snapshot => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref);
  });
});




// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onWrite(event => {
      // Grab the current value of what was written to the Realtime Database.
      const original = event.data.val();
      console.log('Uppercasing', event.params.pushId, original);
      const uppercase = original.toUpperCase();
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to the Firebase Realtime Database.
      // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
      return event.data.ref.parent.child('uppercase').set(uppercase);
    });






*/












<!-- 
// DATABASE 





 -->
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("path/to/serviceAccountKey.json");

// Initialize the app with a null auth variable, limiting the server's access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://databaseName.firebaseio.com",
  databaseAuthVariableOverride: null
});

// The app only has access to public data as defined in the Security Rules
var db = admin.database();
var ref = db.ref("/public_resource");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

//SAVING DATA


// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog");



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



<!-- 
NOTE

 https://docs-examples.firebaseio.com/server/saving-data/fireblog/users/alanisawesome/full_name

 ===> "Alan Turing"


 -->
// ADDING CHILD LOC
usersRef.child("alanisawesome").set({
  date_of_birth: "June 23, 1912",
  full_name: "Alan Turing"
});
usersRef.child("gracehop").set({
  date_of_birth: "December 9, 1906",
  full_name: "Grace Hopper"
});


//USER UPDATE
usersRef.update({
  "alanisawesome/nickname": "Alan The Machine",
  "gracehop/nickname": "Amazing Grace"
});



//adding completion callback
dataRef.set("I'm writing data", function(error) {
  if (error) {
    alert("Data could not be saved." + error);
  } else {
    alert("Data saved successfully.");
  }
});


// savings lists of data


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


// getting the unique key by push()


// Generate a reference to a new location and add some data using push()
var newPostRef = postsRef.push();

// Get the unique key generated by push()
var postId = newPostRef.key;

//TRANSACTION OPERATIONS (COUNTERS)

var upvotesRef = db.ref("server/saving-data/fireblog/posts/-JRHTHaIs-jNPLXOQivY/upvotes");
upvotesRef.transaction(function (current_value) {
  return (current_value || 0) + 1;
});





// retreive data start


// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog/posts");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

//child added

// Retrieve new posts as they are added to our database
ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log("Author: " + newPost.author);
  console.log("Title: " + newPost.title);
  console.log("Previous Post ID: " + prevChildKey);
});

// child changed
// Get the data on a post that has changed
ref.on("child_changed", function(snapshot) {
  var changedPost = snapshot.val();
  console.log("The updated post title is " + changedPost.title);
});

// child removed
// Get a reference to our posts
var ref = db.ref("server/saving-data/fireblog/posts");

// Get the data on a post that has been removed
ref.on("child_removed", function(snapshot) {
  var deletedPost = snapshot.val();
  console.log("The blog post titled '" + deletedPost.title + "' has been deleted");
});

// READING DATA ONCE

ref.once("value", function(data) {
  // do some stuff once
});


// ordering functions: orderByChild(), orderByKey(), or orderByValue(). You can then combine these with five other methods to conduct complex queries: limitToFirst(), limitToLast(), startAt(), endAt(), and equalTo().











// SAMPLE

//Event Listener when there is a POST request made from public/request.js
app.post("/statSearch", function(req, res){
    // In this case the req is the POST request and the request body is the data I sent along with it. Refer to request.js
    var search = req.body.search;

    var statsOptions = new Options("https://www.haloapi.com/stats/h5/servicerecords/warzone?players="+search);

        request(statsOptions, function (error, response, body) {
          if (error) throw new Error(error);
          // This is necessary because the body is a string, and JSON.parse turns said string into an object
          var body = JSON.parse(response.body)

          var playerData = {
            gamertag: body.Results[0].Id,
                totalKills: body.Results[0].Result.WarzoneStat.TotalKills,
                totalDeaths: body.Results[0].Result.WarzoneStat.TotalDeaths,
                totalGames: body.Results[0].Result.WarzoneStat.TotalGamesCompleted
          };
        res.send(playerData)
        //console.log(playerData);
    // creates a child named "user" in my database
    var userRef = ref.child("user");
    // populates the child with the playerData object successfully.
    // Every time a new POST request is issued the user's data resets.
    userRef.set(playerData)
        });
});





