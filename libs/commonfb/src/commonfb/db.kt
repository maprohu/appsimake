package commonfb

import commonlib.DocWrap
import firebase.firestore.Firestore
import firebase.firestore.docRef
import firebaseshr.Base
import firebaseshr.initFrom
import kotlinx.coroutines.await

suspend fun <T: Base<T>> T.initFrom(dw: DocWrap<T>, db: Firestore = FB.db): Boolean {
    props.persisted(dw)
    return try {
        val s = dw.docRef(db).get().await()
        if (s.exists) {
            initFrom(s.data())
            true
        } else {
            false
        }
    } catch (e: dynamic) {
        console.dir(e)
        false
    }
}
