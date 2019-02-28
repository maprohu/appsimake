package commonui.progress

import bootstrap.*
import commonshr.*
import commonui.globalStatus
import commonui.widget.*
import domx.*
import killable.HasKillSet

fun Progress.ui() = progressUI()

fun HasKillSet.progressUI() = factory.wraps.div {
    cls {
        flexGrow1
        column()
    }
    insert.hourglass
    insert.wraps.div {
        cls {
            flexCenter()
        }
    }.node.div {
        cls {
            flexFixedSize()
            m1
            textMuted
        }
        this %= { globalStatus() }
    }
}.node

