package commonui.widget

import bootstrap.*
import common.listen
import commonshr.*
import domx.*
import killable.HasKillSet
import killable.NoKill
import org.w3c.dom.events.Event
import rx.Rx
import rx.RxIface
import rx.Var
import kotlin.browser.document

typealias FormElement = () -> Boolean

class Form: ScreenWrap() {

    override val node = document.form {
    }

    val column by lazy {
        cls.column()
    }

    val hiddenSubmit by lazy {
        insert.button {
            node {
                type = "submit"
                hidden = true
            }
        }
    }

    fun onsubmit(action: (Event) -> Unit) {
        hiddenSubmit
        node.listen("submit", action)
    }

    val elements = Var(emptyList<FormElement>())

    val isDirty = Rx(NoKill) { elements().any { it() } }

    init {
        onsubmit {
            it.preventDefault()
        }
    }
}