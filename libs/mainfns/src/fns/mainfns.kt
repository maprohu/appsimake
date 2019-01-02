import firebaseadmin.admin

// https://firebase.google.com/docs/functions/write-firebase-functions

@JsName("init")
fun init(exports: dynamic) {
    admin.initializeApp()

    testappfns.init(exports)
    tictactoefns.init(exports)
}
