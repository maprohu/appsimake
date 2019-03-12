package tasks

import commonui.*
import commonui.widget.Body
import commonui.widget.Loading
import commonui.widget.switchToView
import tasks.home.Home

fun main() {
    val loading = Loading()

    if (isServiceWorkerSupported) {
        APP.startRegisteringServiceWorker()
    }

    Body(loading.target).apply {
        launchReport {
            content.switchToView(Home(this@apply))
        }
    }
}


