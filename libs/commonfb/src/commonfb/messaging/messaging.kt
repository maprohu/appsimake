package commonfb.messaging

import common.dyn
import common.dynAlso
import commonfb.isFcmSupported
import commonshr.*
import commonui.*
import domx.LocalStorageValue
import firebase.*
import firebase.firestore.*
import firebase.messaging.Messaging
import kotlinx.coroutines.await
import kotlinx.coroutines.channels.Channel
import rx.Var
import rx.toRxSet
import kotlin.js.Promise

val deviceIdLocalStorageValue = LocalStorageValue.stringOpt("appsimake-device-id")

class MessagingControl(
    deps: HasDbKillsLibUser,
    val fcm: Messaging?
): CsKills(deps), HasDbLibUser by deps, CsDbKillsApi {

    val fcmSupported = fcm != null

    val deviceId = deviceIdLocalStorageValue.value ?: run {
        fcmTokensColl.randomDoc.id.also {
            deviceIdLocalStorageValue.value = it
        }
    }

    val ownFcmTokenDoc = fcmTokensColl.doc(deviceId)

    val ownFcmToken = ownFcmTokenDoc.docs().toRx(FcmToken())

    val fcmTokens = fcmTokensColl.toList().allRx

    val enabledTokens = rx {
        fcmTokens().filter { t ->
            t().enabled()
        }
    }

    val hasEnabledTokens = rx { enabledTokens().isNotEmpty() }

    val enabledLocalToken = rx {
        ownFcmToken().enabled()
    }

    val enabledNonLocalTokens = rx {
        enabledTokens().filter { t ->
            t.idOrFail != deviceId
        }
    }

    val isGranted = rx { notificationState() == NotificationState.Granted }

    private fun disableNotifications(doc: DocSource<FcmToken>) = launchReport {
        txTry {
            doc.txSet(
                doc.getOrDefault { FcmToken() }.doc.apply {
                    enabled %= false
                }
            )
        }
    }

    private suspend fun enableNotifications(token: String) {
        txTry {
            ownFcmTokenDoc.txSet(
                ownFcmTokenDoc.getOrDefault { FcmToken() }.doc.apply {
                    this.enabled %= true
                    this.token %= token
                }
            )
        }
    }

    fun disableNotifications() {
        disableNotifications(ownFcmTokenDoc)
    }

    private fun publishOnlineToken(token: String) = launchReport {
        txTry {
            ownFcmTokenDoc.txSet(
                ownFcmTokenDoc.getOrDefault { FcmToken() }.doc.apply {
                    this.token %= token
                }
            )
        }
    }

    fun disableAllNotifications() {
        fcmTokens.now.forEach {
            disableNotifications(it.docWrap)
        }
    }

    fun enableNotifications() {
        if (fcm != null) {
            launchReport {
                try {
                    try {
                        fcm.requestPermission().await()
                    } finally {
                        updateNotificationState()
                    }

                    enableNotifications(fcm.getToken()!!.await())
                } catch (e: dynamic) {
                    reportd(e)
                }
            }
        }
    }

    val notificationsEnabled = rx {
        isGranted() && enabledLocalToken()
    }

    val canEnable = rx {
        fcmSupported && notificationState().let { ns ->
            ns == NotificationState.Supported || ns == NotificationState.Granted
        } && !enabledLocalToken()
    }

    val canDisable = rx {
        enabledLocalToken()
    }

    val hasVisibleMenuItems = rx {
        canEnable() || canDisable() || hasEnabledTokens()
    }

    init {
        if (fcm != null) {
            isGranted.forEachTrue {
                CsKills(this).launchReport {
                    val token = fcm.getToken()!!.await()

                    publishOnlineToken(token)

                    val revalidate = Channel<Unit>(capacity = Channel.UNLIMITED)

                    kills += fcm.onTokenRefresh(
                        next = {
                            revalidate.offer(Unit)
                        },
                        error = {
                            reportd(it)
                            revalidate.close(it)
                        },
                        completed = {
                            revalidate.close()
                        }
                    )

                    for (e in revalidate) {
                        val newToken = fcm.getToken()!!.await()

                        publishOnlineToken(newToken)
                    }
                }
            }

        }

        rx { !isGranted() && enabledLocalToken() }.forEachTrue {
            disableNotifications()
        }
    }



}
