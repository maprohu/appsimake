package firebase

import commonshr.InvokeWith
import firebase.firestore.ids
import firebaseshr.HasFBProps
import commonshr.KillsApi
import rx.RxSet

interface FirebaseApi: KillsApi, InvokeWith {
    val <T: HasFBProps<*>> RxSet<T>.ids get() = ids(kills)

}

val KillsApi.fbapi: FirebaseApi get() = object : FirebaseApi, KillsApi by this {}