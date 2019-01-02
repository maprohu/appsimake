package commonfb

import common.obj
import firebase.firestore.DocumentReference
import killable.KillableSeq
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.notifications.DENIED
import org.w3c.notifications.GRANTED
import org.w3c.notifications.Notification
import org.w3c.notifications.NotificationPermission
import rx.RxVal
import rx.Var

class FcmControl(
    val loggedInCtx: LoggedInCtx
) {
    val fbCtx = loggedInCtx.fbCtx

    val isSupported = fbCtx.appCtx.isFcmSupported


    private val enabled0 = Var<Boolean?>(null)
    val enabled: RxVal<Boolean?>
        get() = enabled0

    fun noReentry(fn: (alert: (String) -> Unit) -> Unit) : (alert: (String) -> Unit) -> Unit = { alert ->
        if (enabled0.now != null) {
            fn(alert)
            enabled0.now = null
        }
    }

    private var toggle0 : (alert: (String) -> Unit) -> Unit = {}
    fun toggle(alert: (String) -> Unit) { toggle0(alert) }

    val killables = Killables()

    init {
        if (!isSupported) {
            enabled0.now = false
            toggle0 = { alert ->
                alert("Browser does not support notifications.")
            }
        } else if (Notification.permission == NotificationPermission.DENIED) {
            permissionDenied()
        } else {
            GlobalScope.launch {
                val messaging = fbCtx.messaging.await()

                val killableSeq = KillableSeq()
                killables += killableSeq

                val tokens = object {
                    suspend fun requested(token: String, upload: Boolean): DocumentReference {
                        val ref = loggedInCtx.fcmTokensRef.doc(token)

                        if (upload) {
                            ref.set(obj()).await()
                        }

                        val stopPolling = ref.onSnapshot {
                            enabled0.now = it.exists
                        }

                        val stopTokenListener = messaging.onTokenRefresh {
                            val en = enabled.now == true
                            GlobalScope.launch {
                                val newRef = request(en)
                                if (ref.id != newRef.id) {
                                    ref.delete()
                                }
                            }
                        }

                        killableSeq.set {
                            stopPolling()
                            stopTokenListener()
                        }

                        toggle0 = noReentry {
                            if (enabled0.now == true) {
                                ref.delete()
                            } else {
                                ref.set(obj())
                            }
                        }

                        return ref

                    }
                    suspend fun request(upload: Boolean): DocumentReference {
                        val token = messaging.getToken()!!.await()
                        return requested(token, upload)
                    }

                }

                if (Notification.permission != NotificationPermission.GRANTED) {
                    enabled0.now = false
                    toggle0 = noReentry { alert ->
                        GlobalScope.launch {
                            try {
                                messaging.requestPermission().await()
                                tokens.request(true)
                            } catch (_: dynamic) {
                                alert("Permission to show notifications has been denied.")
                                permissionDenied()
                            }
                        }
                    }
                } else {
                    tokens.request(false)
                }

            }
        }
    }

    private fun permissionDenied() {
        enabled0.now = false
        toggle0 = { alert ->
            alert("Please allow notifications in the browser settings.")
        }
    }



}