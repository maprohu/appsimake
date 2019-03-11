package gymclock

import commonui.APP
import commonui.launchGlobal
import commonui.widget.Loading
import gymclock.form.Form

fun main() {

    val loading = Loading()

    launchGlobal {
        loading %= "Registering service worker..."
        APP.startRegisteringServiceWorker()
        loading %= "Starting app..."
        Form.boot(loading.target)
    }
}

