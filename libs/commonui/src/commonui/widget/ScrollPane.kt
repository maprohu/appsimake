package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import styles.height0
import styles.scrollVertical
import kotlin.browser.document

class ScrollPane: ScreenWrap() {
    override val node = document.div {
        cls {
            flexGrow1
            dFlex
            flexColumn
        }
    }

    val pane = node.div {
        cls {
            flexGrow1
            height0
            scrollVertical
        }
    }

}

