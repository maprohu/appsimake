package tictactoe

import commonfb.FbLinksFactory
import commonui.APP
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.notifications.NotificationAction
import org.w3c.notifications.NotificationOptions
import kotlin.browser.window

fun main() {


    FbLinksFactory.start {
        Links(it).apply {
        }
    }
}

