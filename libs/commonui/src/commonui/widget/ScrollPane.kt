package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import styles.scrollVertical
import kotlin.browser.document

class ScrollPane: ScreenWrap {
    override val node = document.div {
        cls {
            flexGrow1
            scrollVertical
            dFlex
        }
    }

}

