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


class Private(o: dynamic) : Wrap(o) {
    var fcmTokens: Array<String> by dyn(arrayOf())
}

class LoggedInCtx(
    val fbCtx: FbCtx,
    val user: User
) {
    val privateRef = fbCtx.baseRef.collection("private").doc(user.uid)

    val killables = Killables()

    val privateExisting by lazy {
        GlobalScope.async {
            fbCtx.db.txTry<Unit> { tx ->
                val pr = tx.get(privateRef).await()
                if (!pr.exists || Private(pr.data()).fcmTokens as Any? == null) {
                    tx.set(
                        privateRef,
                        Private(obj()).apply {
                            fcmTokens = arrayOf()
                        }.wrapped,
                        setOptionsMerge()
                    )
                } else {
                    throw rollback()
                }
            }.onRollback {}
        }
    }
    val messaging by lazy {
        privateExisting
        fbCtx.messaging
    }

    suspend fun setupMessaging() {
        fbCtx.setupMessaging(::setupMessagingGranted)
    }
    suspend fun trySetupMessaging(): Boolean {
        return fbCtx.trySetupMessaging(::setupMessagingGranted)
    }

    private var currentFcmToken0 = Var<String?>(null)
    val currentFcmToken: RxVal<String?>
        get() = currentFcmToken0

    private suspend fun setupMessagingGranted(
        tokenPromise: Promise<String>
    ) {
        val token = tokenPromise.await()

        privateExisting.await()

        fun updateToken(t: Array<String>): Promise<Unit> {
            return privateRef.set(
                Private(obj()).apply {
                    fcmTokens = t
                }.wrapped,
                setOptionsMerge()
            )
        }

        fun addToken(t: String) = updateToken(FieldValue.arrayUnion(t))
        fun removeToken(t: String) = updateToken(FieldValue.arrayRemove(t))

        addToken(token).await()

        currentFcmToken0.now = token

        val channel = Channel<String?>()

        GlobalScope.launch {
            for (t in channel) {
                coroutineScope<Unit> {
                    currentFcmToken0.now?.let { removeToken(it) }
                    t?.let { addToken(it) }
                }
                currentFcmToken0.now = t
            }
        }

        killables += messaging.await().onTokenRefresh {
            GlobalScope.launch {
                val t = messaging.await().getToken()!!.await()
                channel.send(t)
            }
        }
    }

}