package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import kotlin.browser.document

class Loading {

    val hole = document.body!!.hole

    private val content = hole.insert.wraps.div {
        cls {
            p1
            flexGrow1
            dFlex
            flexColumn
        }
        insert.hourglass
    }

    private val status = content.insert.wraps.div {
        cls {
            flexCenter()
        }
    }.node.div {
        cls {
            flexFixedSize()
            m1
            textMuted
        }
    }

    fun status(msg: String) {
        status %= msg
        console.log(msg)
    }

    operator fun remAssign(msg: String) { status(msg) }

    init {
        setupFullScreen()
        status("Loading...")
    }

}