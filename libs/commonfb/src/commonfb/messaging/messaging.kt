package commonfb.messaging

import common.dyn
import common.dynAlso
import commonfb.isFcmSupported
import commonshr.*
import commonui.*
import domx.LocalStorageValue
import firebase.*
import firebase.firestore.*
import kotlinx.coroutines.await
import kotlinx.coroutines.channels.Channel
import rx.Var
import rx.toRxSet
import kotlin.js.Promise

val deviceIdLocalStorageValue = LocalStorageValue.stringOpt("appsimake-device-id")

class MessagingControl(
    deps: HasDbFcmKillsLibUser
): CsKills(deps), HasDbFcmLibUser by deps, CsDbKillsApi {

    val deviceId = deviceIdLocalStorageValue.value ?: run {
        fcmTokensColl.randomDoc.id.also {
            deviceIdLocalStorageValue.value = it
        }
    }

    val fcmTokens = fcmTokensColl.toList().allRx

    val ownFcmTokenDoc = fcmTokensColl.doc(deviceId)

    val ownFcmToken = ownFcmTokenDoc.docs().toRx(FcmToken())

    val nonLocalTokens = rx {
        fcmTokens().filterNot { t -> t.idOrFail != deviceId }
    }

    val onlineLocalToken = rx {
        localToken()?.takeIf { lt ->
            lt in allTokens()
        }
    }

    val hasOnlineLocalToken = rx { onlineLocalToken() != null }
    val hasOnlineNonLocalTokens = rx { nonLocalTokens().isNotEmpty() }


    val isGranted = rx { notificationState() == NotificationState.Granted }

    fun deleteOnlineToken(token: String): Promise<Unit> {
        return fcmTokensDoc.ref.set(
            dynAlso {
                it[FcmTokens.tokens.name] = FieldValue.arrayRemove(token)
            },
            setOptionsMerge()
        )
    }

    fun publishOnlineToken(token: String): Promise<Unit> {
        return fcmTokensDoc.ref.set(
            dynAlso {
                it[FcmTokens.tokens.name] = FieldValue.arrayUnion(token)
            },
            setOptionsMerge()
        )
    }

    fun disableNotifications() {
        onlineLocalToken.now?.let { lt ->
            launchReport {
                deleteOnlineToken(lt)
                localToken %= null
            }
        }
    }

    fun disableAllNotifications(): Promise<Unit> {
        return fcmTokensDoc.ref.set(
            dyn()
        )
    }

    fun enableNotifications() {
        launchReport {
            try {
                try {
                    fcm.requestPermission().await()
                } finally {
                    updateNotificationState()
                }

                localToken %= fcm.getToken()!!.await()

            } catch (e: dynamic) {
                reportd(e)
            }
        }
    }

    init {
        if (isFcmSupported) {
            rx {
                localToken()?.takeIf {

                }
            }
            isGranted.forEachTrue {




                CsKills(this).launchReport {

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

                        txTry {
                            val tokens = fcmTokensDoc.getOrDefault { FcmTokens() }.doc

                            tokens.tokens.rxv.transform {
                                it - currentToken + newToken
                            }

                            fcmTokensDoc.txSet(tokens)
                        }

                        localToken %= newToken
                    }
                }
            }

        }

        rx {
            onlineLocalToken()?.takeIf { lt ->
                notificationState() != NotificationState.Granted
            }
        }.forEachNonNull { lt ->
            globalStatus %= "Deleting FCM token..."
            deleteOnlineToken(lt)
        }
    }



}
