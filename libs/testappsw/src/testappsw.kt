package testappsw

import common.obj
import fbmessagingsw.messaging
import fbmessagingsw.sw
import org.w3c.notifications.NotificationAction
import org.w3c.notifications.NotificationOptions
import testapplib.Msg

fun main(args: Array<String>) {
    sw.onnotificationclick = {
        console.dir(it)
    }
    sw.addEventListener("notificationclick", {
        console.dir(it)
    })

    messaging.setBackgroundMessageHandler {
        @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
        val data = it.data as Msg
//        console.dir(sw)
        sw.registration.showNotification(
            data.message,
            NotificationOptions(
                actions = arrayOf(
                    NotificationAction(
                        "show",
                        "Show"
                    )
                )
//                data = obj<dynamic> {
//                    this.FCM_MSG = obj {
//                        this.notification = obj {
//                            this.click_action = "http://localhost:8000/local/derived/testing/testapp/"
//                        }
//                    }
//                }
            )
//            obj {
//                actions = arrayOf(
//                    obj {
//                        action = "show"
//                        title = "Show"
//                    }
//                )
//                data = obj {
//
//                }
//            }

        )
    }

}