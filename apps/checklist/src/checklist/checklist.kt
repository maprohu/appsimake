package checklist

import checklist.home.Home
import commonui.APP
import commonui.widget.Body
import commonui.widget.switchToView
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

fun main() {

    APP.startRegisteringServiceWorker()
    Body().apply {
        GlobalScope.launch {
            content.switchToView(Home(this@apply))
        }
    }

}