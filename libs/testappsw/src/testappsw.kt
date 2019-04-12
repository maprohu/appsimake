package testappsw

import common.obj
import fbmessagingsw.messageHandler
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.asPromise
import org.w3c.notifications.NotificationAction
import org.w3c.notifications.NotificationOptions
import testapplib.Msg

fun main() {

    messageHandler = {
        console.dir(it)

        CompletableDeferred(Unit).asPromise()
    }


}