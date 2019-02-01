import commonlib.DocWrap
import firebaseadmin.admin
import firebaseadmin.firestore.Firestore
import firebasefunctions.functions
import firebaseshr.HasFBProps
import fns.tokenImpl
import kotlinx.coroutines.await

// https://firebase.google.com/docs/functions/write-firebase-functions

@JsName("init")
fun init(exports: dynamic) {
    admin.initializeApp()

    initialize(exports)

    testappfns.init(exports)
    tictactoefns.init(exports)
}

fun initialize(exports: dynamic) {

//    admin.initializeApp(
//        functions.config().firebase
//    )

    tokenImpl(exports)
}

fun <T> DocWrap<T>.docRef(db: Firestore) = db.doc(path)
suspend fun <T: HasFBProps<T>> T.initFrom(docWrap: DocWrap<T>, db: Firestore) {
    val ds = docWrap.docRef(db).get().await()
    if (ds.exists) {
        props.extractInitial(ds.data())
    }
}

