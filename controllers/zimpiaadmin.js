


/*

TODO create auto custom token after LOGIN SUCCESS

*/
//
// var uid = "e855975b-b9b0-44ea-b1fe-4f20cad0847d";
//
// admin.auth().createCustomToken(uid)
//     .then(function(customToken) {
//         // Send token back to client
//     })
//     .catch(function(error) {
//         console.log("Error creating custom token:", error);
//     });
//
//
// /*SIGN IN WITH CUSTOM TOKEN*/
//
// firebase.auth().signInWithCustomToken(token).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // TODO NExT DONE - fix email posting , CHECK STRUCTURE
// /*
//
// current user ??
// variable fix, routing param
// res send
// type??
// * */
//
// router.get('/api/login/:email', function(req, res,next) {
//
//     res.send(req.params.email); next();
//     admin.auth().getUserByEmail(email)
//         .then(function(userRecord) {
//             // See the UserRecord reference doc for the contents of userRecord.
//             console.log("Successfully fetched user data:", userRecord.toJSON());
//         })
//         .catch(function(error) {
//             console.log("Error fetching user data:", error);
//         });
//
// });
//
module.exports = router