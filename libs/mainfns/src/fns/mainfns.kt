import firebaseadmin.admin

// https://firebase.google.com/docs/functions/write-firebase-functions

@JsName("init")
fun init(exports: dynamic) {
    admin.initializeApp()

    exports.helloWorld = functions.https.onRequest { _, response ->
        response.send("hello from kotlin")
    }

    testappfns.init(exports)
    tictactoefns.init(exports)
}