package tictactoe

import commonfb.FbLinksFactory
import commonui.APP
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.notifications.NotificationAction
import org.w3c.notifications.NotificationOptions
import tictactoelib.tictactoeLib
import kotlin.browser.window

fun main() {

    APP.serviceWorkerMessages

    FbLinksFactory.start(tictactoeLib) { Links(it) }
}

