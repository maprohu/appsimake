package commonui.widget

import bootstrap.*
import commonshr.*
import commonui.globalStatus
import domx.*
import killable.HasKillSet
import styles.widthAuto
import kotlin.browser.document

class Input: ScreenWrap() {
    override val node = document.input {
        cls {
            formControl
            widthAuto
        }
    }

    val required by lazy {
        node.required = true
    }

}