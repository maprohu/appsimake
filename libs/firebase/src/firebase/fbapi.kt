package firebase

import commonshr.InvokeWith
import firebase.firestore.ids
import firebaseshr.HasFBProps
import killable.HasKillSet
import rx.RxSet

interface FBApi: HasKillSet, InvokeWith {
    val <T: HasFBProps<*>> RxSet<T>.ids get() = ids(kills)

}

val HasKillSet.fbapi: FBApi get() = object : FBApi, HasKillSet by this {}