package commonui.widget

import bootstrap.*
import common.listen
import commonshr.*
import domx.*
import killable.NoKill
import org.w3c.dom.events.Event
import rx.Rx
import rx.Var
import kotlin.browser.document


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

    init {
        onsubmit {
            it.preventDefault()
        }
    }
}