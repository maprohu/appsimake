package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import styles.scrollVertical
import kotlin.browser.document

class ListGroupButton: ScreenWrap() {
    override val node = document.button {
        cls {
            listGroupItem
            listGroupItemAction
        }
    }

    val text by lazy {
        node.span
    }


}

