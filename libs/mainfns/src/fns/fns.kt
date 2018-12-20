// https://firebase.google.com/docs/functions/write-firebase-functions
private fun main(args: Array<String>) {
    exports.helloWorld = functions.https.onRequest { _, response ->
        response.send("hello from kotlin")
    }
}


