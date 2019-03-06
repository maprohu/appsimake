package tasks.editnote

import bootstrap.*
import commonshr.*
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
        title %= "Note"
        right.saveButton
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
            bind(editing.current.text.rxv)
        }
    }
)