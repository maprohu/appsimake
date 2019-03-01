package commonui.widget

import bootstrap.*
import common.Listeners
import common.listen
import commonshr.*
import commonui.globalStatus
import domx.*
import killable.HasKillSet
import rx.Var
import styles.widthAuto
import kotlin.browser.document

class Input: ScreenWrap() {
    override val node = document.input {
        cls {
            formControl
            widthAuto
        }
    }

    val change = Listeners().apply {
        node.listen("input") {
            fire()
        }
    }

    var value: String
        get() = node.value
        set(v) {
            node.value = v
            change.fire()
        }

    val required by lazy {
        node.required = true
    }

    fun HasKillSet.bindTo(rxv: Var<String>) {
        value = rxv.now

        kills += change.add {
            rxv.now = value
        }
    }

}