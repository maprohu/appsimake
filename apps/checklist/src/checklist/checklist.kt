package checklist

import checklist.home.Home
import commonui.APP
import commonui.launchGlobal
import commonui.widget.Body
import commonui.widget.Loading
import commonui.widget.switchToView
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

fun main() {
    val loading = Loading()

    APP.startRegisteringServiceWorker()
    Body(loading.target).apply {
        launchGlobal {
            content.switchToView(Home(this@apply))
        }
    }

}