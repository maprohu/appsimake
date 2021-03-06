package commonfb.messaging

import commonshr.*
import commonui.*
import domx.LocalStorageValue
import domx.on
import firebase.*
import firebase.firestore.*
import firebase.messaging.Messaging
import firebaseshr.LibMessageWithData
import kotlinx.coroutines.await
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch
import org.w3c.dom.MessageEvent
import org.w3c.dom.url.URLSearchParams
import rx.Var
import kotlin.browser.window

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

    sealed class GrantState {
        object Unknown: GrantState()
        object Ask: GrantState()
        object Granted: GrantState()
        object Denied: GrantState()
        object Error: GrantState()
    }

    val grantState = Var<GrantState>(GrantState.Unknown)

    sealed class State {
        object Unsupported: State()
        object Denied: State()
        object Disabled: State()
        object Enabled: State()
    }

    val buttonState = rx {
        if (!fcmSupported) {
            State.Unsupported
        } else {
            when (grantState()) {
                GrantState.Denied -> State.Denied
                GrantState.Granted -> {
                    if (enabledLocalToken()) State.Enabled
                    else State.Disabled
                }
                else -> State.Disabled
            }
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

    val isGranted = rx {
        grantState() == GrantState.Granted
    }

    private suspend fun disableNotificationsAndWait(doc: DocSource<FcmToken>) {
        txTry {
            doc.txSet(
                doc.getOrDefault { FcmToken() }.doc.apply {
                    enabled %= false
                }
            )
        }
    }

    private fun disableNotifications(doc: DocSource<FcmToken>) = launchReport {
        disableNotificationsAndWait(doc)
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

    suspend fun disableNotificationsAndWait() {
        disableNotificationsAndWait(ownFcmTokenDoc)
    }


    private suspend fun removeTokenAndWait(doc: DocSource<FcmToken>) {
        txTry {
            doc.txSet(
                doc.getOrDefault { FcmToken() }.doc.apply {
                    token %= null
                }
            )
        }
    }

    suspend fun removeTokenAndWait() {
        disableNotificationsAndWait(ownFcmTokenDoc)
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
                    fcm.requestPermission().await()
                    grantState %= GrantState.Granted
                    enableNotifications(fcm.getToken()!!.await()!!)
                } catch (e: dynamic) {
                    grantState %= if (e.code == "messaging/permission-blocked") {
                        GrantState.Denied
                    } else {
                        reportd(e)
                        GrantState.Error
                    }
                }
            }
        }
    }

    val canEnable = rx {
        buttonState() == State.Disabled
    }

    val canDisable = rx {
        enabledLocalToken()
    }

    val hasVisibleMenuItems = rx {
        canEnable() || canDisable() || hasEnabledTokens()
    }

    init {
        if (fcm != null) {
            fcm.getToken().let { tokenPromise ->
                if (tokenPromise == null) {
                    grantState %= GrantState.Ask
                } else {
                    launchReport {
                        grantState %= try {
                            val firstToken = tokenPromise.await()

                            if (firstToken != null) {
                                GrantState.Granted
                            } else {
                                GrantState.Ask
                            }
                        } catch (e: dynamic) {
                            if (e.code == "messaging/notifications-blocked") {
                                GrantState.Denied
                            } else {
                                reportd(e)
                                GrantState.Error
                            }
                        }

                    }
                }
            }

            isGranted.forEachTrue {
                CsKills(this).launchReport {
                    val token = fcm.getToken()!!.await()!!

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
                        val newToken = fcm.getToken()!!.await()!!

                        publishOnlineToken(newToken)
                    }
                }
            }

        } else {
            rx { enabledLocalToken() }.forEachTrue {
                disableNotifications()
            }
        }

    }



}


fun <T> HasCsKillsLib.libMessages(fcmOpt: Messaging?): ReceiveChannel<T> {

    val ch = Channel<T>(Channel.UNLIMITED)

    fun process(data: Any?) {
        val msgData = data.unsafeCast<LibMessageWithData<T>?>()

        if (msgData != null && msgData.appsimakeApp == lib.name) {
            ch.offer(msgData.data)
        }
    }


    window.location.search.let { s ->
        if (s.isNotBlank()) {
            URLSearchParams(s).get(MessageUrlParameter)?.let { msg ->
                try {
                    process(JSON.parse(msg))
                } catch (e: dynamic) {
                    console.dir(e.unsafeCast<Any>())
                }
            }

            window.location.apply {
                window.history.replaceState(
                    null,
                    "",
                    "$origin$pathname$hash"
                )
            }
        }

    }

    fcmOpt?.let { fcm ->
        launchReport {
            try {
                for (e in APP.serviceWorkerMessages) {
                    process(e.data)
                }
            } finally {
                ch.close()
            }
        }

        kills += fcm.onMessage {
            console.dir(it)
        }
    }

    return ch
}
