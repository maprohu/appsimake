package commonfb

import common.Wrap
import common.obj
import firebase.User
import firebase.firestore.*
import firebase.messaging
import firebase.messaging.Messaging
import killable.Killables
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import rx.RxVal
import rx.Var
import kotlin.js.Promise


//class Private(o: dynamic) : Wrap(o) {
//    var fcmTokens: Array<String> by dyn(arrayOf())
//}

class LoggedInCtx(
    val fbCtx: FbCtx,
    val user: User
) {
    val lib = fbCtx.lib
    val privateRef = fbCtx.db.doc(lib.firestorePrivateUserPath(user.uid))

    val fcmTokensRef = fbCtx.db.collection(lib.firestoreFcmTokensPath(user.uid))

    val killables = Killables()

    val fcmControl by lazy {
        FcmControl(this)
    }
//    suspend fun setupMessaging() {
//        fbCtx.setupMessaging(::setupMessagingGranted)
//    }
//    suspend fun trySetupMessaging(): Boolean {
//        return fbCtx.trySetupMessaging(::setupMessagingGranted)
//    }
//
//    private var currentFcmToken0 = Var<String?>(null)
//    val currentFcmToken: RxVal<String?>
//        get() = currentFcmToken0
//
//    private suspend fun setupMessagingGranted(
//        tokenPromise: Promise<String>
//    ) {
//        val token = tokenPromise.await()
//
//        fun addToken(t: String) = fcmTokensRef.doc(t).set(obj())
//        fun removeToken(t: String) = fcmTokensRef.doc(t).delete()
//
//        addToken(token).await()
//
//        currentFcmToken0.now = token
//
//        val channel = Channel<String?>()
//
//        GlobalScope.launch {
//            for (t in channel) {
//                coroutineScope<Unit> {
//                    currentFcmToken0.now?.let { removeToken(it) }
//                    t?.let { addToken(it) }
//                }
//                currentFcmToken0.now = t
//            }
//        }
//
//        killables += messaging.await().onTokenRefresh {
//            GlobalScope.launch {
//                val t = messaging.await().getToken()!!.await()
//                channel.send(t)
//            }
//        }
//    }

}

