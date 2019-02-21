package commonui.widget

import bootstrap.*
import commonshr.*
import commonui.globalStatus
import domx.*
import killable.HasKillSet
import kotlin.browser.document

class Status: ScreenWrap() {
    override val node = document.div {
        cls {
            dFlex
            flexColumn
            justifyContentEnd
            alignItemsCenter
        }
    }

    val text = node.div {
        cls {
            m1
            textMuted
        }
    }

    val HasKillSet.global: Unit get() {
        text %= { globalStatus() }
    }

}