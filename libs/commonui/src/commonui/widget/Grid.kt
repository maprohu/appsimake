package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import org.w3c.dom.HTMLElement
import styles.*
import kotlin.browser.document

class Grid: ScreenWrap() {
    override val node = document.div {
        cls {
            dGrid
        }
    }

    val center by lazy {
        cls {
            justifyContentCenter
            alignContentCenter
        }
    }

    val alignItemsCenter by lazy {
        cls.alignItemsCenter
    }

    val Int.columns get() = columns(this)

    fun columns(count: Int) {
        cls.gridTemplateColumnsAuto(count)
    }


}

