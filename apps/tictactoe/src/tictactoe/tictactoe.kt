package tictactoe

import commonfb.FbLinksFactory
import commonui.APP
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.notifications.NotificationAction
import org.w3c.notifications.NotificationOptions
import kotlin.browser.window

fun main() {

    GlobalScope.launch {
        APP.registerServiceWorker()?.also { sw ->
            sw.showNotification(
                "hello",
                NotificationOptions(
                    actions = arrayOf(
                        NotificationAction(
                            "",
                            "boo"
                        ),
                        NotificationAction(
                            "boo2",
                            "boo2"
                        )
                    )

                )
            )
        }
    }

    FbLinksFactory.start { Links(it) }
}

