package index

import commonui.*
import commonui.widget.Body
import index.home.Home

fun main() {
    APP.startRegisteringServiceWorker()
    Body().apply {
        content %= Home(this)
    }
}