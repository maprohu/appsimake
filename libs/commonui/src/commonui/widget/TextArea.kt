package commonui.widget

import bootstrap.*
import common.Listeners
import common.listen
import commonshr.*
import domx.*
import commonshr.KillsApi
import killable.NoKill
import rx.Var
import rx.rxClass
import styles.widthAuto
import kotlin.browser.document

class TextArea: AbstractInput() {
    override val node = document.textarea {
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