package tasks.newtag

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

fun NewTag.ui() = TopAndContent(
    topbar = factory.topbar {
        slots.left.backPersistDiscard
        title %= "New Tag"
        right.persistButton
    }.node,
    content = document.column {
        cls {
            leftRightTopBottom0
        }
        widget.insert.input {
            cls {
                m1
            }
            bind(creating.current.name).required()
        }
    }
)