package checklist

import checklist.home.Home
import commonui.APP
import commonui.launchReport
import commonui.widget.Body
import commonui.widget.Loading
import commonui.widget.switchToView

fun main() {
    val loading = Loading()

    APP.startRegisteringServiceWorker()
    Body(loading.target).apply {
        launchReport {
            content.switchToView(Home(this@apply))
        }
    }

}