package commonui.widget

import bootstrap.*
import commonshr.*
import commonui.globalStatus
import domx.*
import killable.Killables
import kotlin.browser.document

class Loading {

    val ks = Killables()

    private val hole = document.body!!.hole

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
    }

    operator fun remAssign(msg: String) { status(msg) }

    val target = hole.with {
        ks.kill()
    }

    init {
        setupFullScreen()
        globalStatus.forEach(ks.killSet) { msg ->
            status(msg)
        }
    }

}