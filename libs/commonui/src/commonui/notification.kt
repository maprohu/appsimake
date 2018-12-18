package commonui

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.notifications.DENIED
import org.w3c.notifications.GRANTED
import org.w3c.notifications.Notification
import org.w3c.notifications.NotificationPermission


suspend fun Notification.Companion.grant(): Boolean {
    return when (Notification.permission) {
        NotificationPermission.GRANTED -> true
        NotificationPermission.DENIED -> false
        else -> Notification.requestPermission().await() == NotificationPermission.GRANTED
    }
}

fun Notification.Companion.ifGranted(fn: () -> Unit) {
    GlobalScope.launch {
        if (grant()) fn()
    }
}