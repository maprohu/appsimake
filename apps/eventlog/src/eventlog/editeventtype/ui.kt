package eventlog.editeventtype

import bootstrap.*
import commonshr.*
import commonui.editing.required
import commonui.widget.*
import domx.*
import styles.*
import kotlin.browser.document

fun EditEventType.ui() = TopAndContent(
    topbar = factory.topbar {
        slots.left.backSaveDiscard
        title %= "Edit Event Type"
        right.saveDeleteButton
    }.node,
    content = document.column {
        cls {
            leftRightTopBottom0
        }
        widget.insert.input {
            cls {
                m1
            }
            bind(editing.current.name).required()
        }
    }
)