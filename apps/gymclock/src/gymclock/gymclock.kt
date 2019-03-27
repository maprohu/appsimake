package gymclock

import commonui.APP
import commonui.launchGlobal
import commonui.links.LinksFactory
import commonui.widget.Body
import commonui.widget.Loading
import gymclock.form.Form

fun main() {
    LinksFactory.start { Links(it) }
//
//    val loading = Loading()
//
//    launchGlobal {
//        loading %= "Registering service worker..."
//        APP.startRegisteringServiceWorker()
//        loading %= "Starting app..."
//        Body(loading.target).apply {
//            content %= Form(this)
//        }
//    }
}

