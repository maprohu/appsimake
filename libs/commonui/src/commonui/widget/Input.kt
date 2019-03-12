package commonui.widget

import bootstrap.*
import common.Listeners
import common.listen
import commonshr.*
import domx.*
import commonshr.KillsApi
import killable.HasNoKill
import killable.NoKill
import rx.Var
import rx.rxClass
import styles.widthAuto
import kotlin.browser.document

abstract class AbstractInput: ScreenWrap() {

    val changeListeners by lazy {
        Listeners().apply {
            node.listen("input") {
                fire()
            }
        }
    }

    var value: String
        get() = nodeValue
        set(v) {
            nodeValue = v
            changeListeners.fire()
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
            node.rxClass(HasNoKill, Cls.isInvalid) { !v() }
        }
    }


    abstract var nodeValue: String
}

fun AbstractInput.bindValue(
    deps: HasKills,
    rxv: Var<String>
) {
    value = rxv.now

    deps.kills += changeListeners.add {
        rxv.now = value
    }
}


class Input: AbstractInput() {
    override val node = document.input {
        cls {
            formControl
            widthAuto
        }
    }

    override var nodeValue
        get() = node.value
        set(v) { node.value = v }

    val required by lazy {
        node.required = true
    }

}