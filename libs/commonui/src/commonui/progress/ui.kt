package commonui.progress

import bootstrap.*
import commonshr.*
import commonui.globalStatus
import commonui.widget.*
import domx.*
import commonshr.KillsApi

fun Progress.ui() = progressUI()

fun KillsApi.progressUI() = factory.wraps.div {
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

