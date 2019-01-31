import firebaseadmin.admin
import fns.tokenImpl

// https://firebase.google.com/docs/functions/write-firebase-functions

@JsName("init")
fun init(exports: dynamic) {
    admin.initializeApp()

    tokenImpl(exports)

    testappfns.init(exports)
    tictactoefns.init(exports)
}
