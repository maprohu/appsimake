package commonui.widget

import bootstrap.*
import common.Listeners
import common.listen
import commonshr.*
import domx.*
import killable.HasKillSet
import killable.NoKill
import rx.Var
import rx.rxClass
import styles.widthAuto
import kotlin.browser.document

class Input: ScreenWrap() {
    override val node = document.input {
        cls {
            formControl
            widthAuto
        }
    }

    val rxv by lazy {
        val rxv = Var(value)
        changeListeners += {
            rxv %= value
        }
        rxv
    }

    val valid by lazy {
        Var(true).also { v ->
            node.rxClass(NoKill, Cls.isInvalid) { !v() }
        }
    }

    val changeListeners = Listeners().apply {
        node.listen("input") {
            fire()
        }
    }

    var value: String
        get() = node.value
        set(v) {
            node.value = v
            changeListeners.fire()
        }

    val required by lazy {
        node.required = true
    }

    fun HasKillSet.bindTo(rxv: Var<String>) {
        value = rxv.now

        kills += changeListeners.add {
            rxv.now = value
        }
    }

}