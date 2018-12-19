package commonui

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.notifications.*
import rx.Var
import kotlin.browser.window


suspend fun Notification.Companion.currentOrAsk(): NotificationPermission {
    val permission = Notification.permission
    return when (permission) {
        NotificationPermission.DEFAULT -> Notification.requestPermission().await()
        else -> permission
    }
}

suspend fun Notification.Companion.isGrantedOrAsk(): Boolean {
    return currentOrAsk() == NotificationPermission.GRANTED
}

fun Notification.Companion.isSupported() : Boolean {
    return window.asDynamic().Notification != null
}

fun Notification.Companion.notDenied() : Boolean {
    return Notification.permission != NotificationPermission.DENIED
}

fun Notification.Companion.notGranted() : Boolean {
    return Notification.permission != NotificationPermission.GRANTED
}

fun Notification.Companion.shouldRequest() : Boolean {
    return isSupported() && notDenied() && notGranted()
}

