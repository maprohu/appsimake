package commonui

import bootstrap.setupFullScreen
import common.Listeners
import kotlin.browser.document
import kotlin.browser.window

class AppCtx {

    val root = RootPanel(document.body!!)



    init {
        setupFullScreen()
        hourglass()
    }

    fun hourglass() {
        root.setHourglass()
    }


}
