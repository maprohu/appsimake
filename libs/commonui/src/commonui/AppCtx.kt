package commonui

import bootstrap.setupFullScreen
import kotlin.browser.document

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
