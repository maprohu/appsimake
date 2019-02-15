package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import styles.scrollVertical
import kotlin.browser.document

class ListGroup: ScreenWrap {
    override val node = document.div {
        cls {
            listGroup
        }
    }

    val item = insert.with { cls.listGroupItem }

}

