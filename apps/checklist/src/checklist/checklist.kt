package checklist

import checklist.home.Home
import commonui.APP
import commonui.widget.Body
import commonui.widget.Loading

fun main() {
    val loading = Loading()

    APP.startRegisteringServiceWorker()
    Body(loading.target).apply {
        hole %= Home(this@apply)
    }

}