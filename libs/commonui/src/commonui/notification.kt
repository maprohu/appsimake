package commonui

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.notifications.*
import rx.RxIface
import rx.Var
import kotlin.browser.window


fun Notification.Companion.isSupported() : Boolean {
    return window.asDynamic().Notification != null
}

sealed class NotificationState {
    object Unsupported: NotificationState()
    object Supported: NotificationState()
    object Denied: NotificationState()
    object Granted: NotificationState()

    companion object {
        fun of(permission: NotificationPermission) = when (permission) {
            NotificationPermission.DENIED -> NotificationState.Denied
            NotificationPermission.GRANTED -> NotificationState.Granted
            else -> NotificationState.Supported
        }
    }
}

private val supportedNotificationState by lazy {
    Var(NotificationState.of(Notification.permission))
}

fun updateNotificationState() {
    updateState()
}

private fun updateState(permission: NotificationPermission = Notification.permission) {
    supportedNotificationState %= NotificationState.of(permission)
}

val notificationState: RxIface<NotificationState> by lazy {
    if (!Notification.isSupported()) {
        Var(NotificationState.Unsupported)
    } else {
        supportedNotificationState
    }
}

suspend fun Notification.Companion.currentOrAsk(): NotificationPermission {
    val permission = Notification.permission
    return when (permission) {
        NotificationPermission.DENIED, NotificationPermission.GRANTED -> permission
        else -> Notification.requestPermission().await()
    }.also {
        updateState(it)
    }
}

suspend fun Notification.Companion.isGrantedOrAsk(): Boolean {
    return currentOrAsk() == NotificationPermission.GRANTED
}



