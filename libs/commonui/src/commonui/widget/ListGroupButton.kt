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


    inner class Slots {
        val left = slot
        val middle = slot
        val right = slot
    }
    val slots by lazy {
        cls {
            dFlex
            flexRow
        }
        Slots()
    }
    val middle by lazy {
        document.row {
            cls.flexGrow1
        }.setTo(slots.middle)
    }

    val left by lazy { slots.left }
    val right by lazy {
        middle
        slots.right
    }

    val p1 by lazy {
        cls.p1
    }

    val text by lazy {
        p1
        middle {
            cls {
                m1
                alignSelfCenter
            }
        }

    }

}

