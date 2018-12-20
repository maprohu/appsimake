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


    suspend fun trySetupMessaging(): Boolean {
        val tokenPromise = messaging.getToken()

        return if (tokenPromise == null) {
            false
        } else {
            setupMessagingGranted(tokenPromise)
            true
        }
    }
    suspend fun setupMessaging() {
        messaging.requestPermission().await()

        val tokenPromise = messaging.getToken()!!

        setupMessagingGranted(tokenPromise)

    }

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

        var currentToken : String? = token
        val channel = Channel<String?>()

        GlobalScope.launch {
            for (t in channel) {
                coroutineScope<Unit> {
                    currentToken?.let { removeToken(it) }
                    t?.let { addToken(it) }
                }
                currentToken = t
            }
        }

        killables += messaging.onTokenRefresh {
            GlobalScope.launch {
                val t = messaging.getToken()!!.await()
                channel.send(t)
            }
        }
    }

}