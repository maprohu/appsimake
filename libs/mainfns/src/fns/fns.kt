import firebase.admin.module

// https://firebase.google.com/docs/functions/write-firebase-functions

@JsName("init")
fun init(exports: dynamic) {
    module.initializeApp()

    exports.helloWorld = functions.https.onRequest { _, response ->
        response.send("hello from kotlin")
    }

    tictactoefns.init(exports)
}
