

//external fun require(name: String) : dynamic
external val exports : dynamic

/*
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
*/

private fun main(args: Array<String>) {
    exports.helloWorld = functions.https.onRequest { _, response ->
        response.send("hello from kotlin")
    }
}

