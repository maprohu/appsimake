package firebase

import commonshr.InvokeWith
import firebase.firestore.ids
import firebaseshr.HasFBProps
import killable.HasKillSet
import rx.RxSet

interface FirebaseApi: HasKillSet, InvokeWith {
    val <T: HasFBProps<*>> RxSet<T>.ids get() = ids(kills)

}

val HasKillSet.fbapi: FirebaseApi get() = object : FirebaseApi, HasKillSet by this {}