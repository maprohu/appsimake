package testapp

import commonui.APP
import commonui.globalStatus
import commonui.widget.Loading
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLElement
import kotlin.browser.document


fun main() {

    Loading()
    globalStatus %= "Registering SW..."
    APP.startRegisteringServiceWorker()

}

