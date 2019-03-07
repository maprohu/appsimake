package tasks.edittag

import bootstrap.*
import commonshr.*
import commonui.editing.saveDeleteButton
import commonui.widget.*
import domx.*
import fontawesome.*
import styles.*
import tasks.loggedin.LoggedIn
import taskslib.Note
import taskslib.Task
import kotlin.browser.document

fun EditTag.ui() = TopAndContent(
    topbar = factory.topbar {
        slots.left.backSaveDiscard
        title %= "Edit Tag"
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
            bind(editing.current.name)
        }
    }
)