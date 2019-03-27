package tasks.editnote

import bootstrap.*
import commonshr.*
import commonui.editing.required
import commonui.editing.saveDeleteButton
import commonui.widget.*
import domx.*
import fontawesome.*
import styles.*
import tasks.loggedin.LoggedIn
import taskslib.Note
import taskslib.Task
import kotlin.browser.document

fun EditNote.ui() = TopAndContent(
    topbar = factory.topbar {
        slots.left.backSaveDiscard
        title %= "Edit Note"
        right.saveDeleteButton
    }.node,
    content = document.column {
        cls {
            leftRightTopBottom0
        }
        widget.insert.textArea {
            cls {
                m1
                flexGrow1
            }
            bind(editing.current.text.rxv).required()
        }
    }
)