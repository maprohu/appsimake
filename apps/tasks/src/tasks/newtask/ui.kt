package tasks.newtask

import bootstrap.*
import common.Listeners
import commonshr.*
import commonui.editing.required
import commonui.editing.saveDeleteButton
import commonui.widget.*
import domx.*
import fontawesome.*
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import rx.Var
import rx.incremented
import styles.*
import tasks.edittask.editTaskUi
import tasks.loggedin.LoggedIn
import taskslib.Note
import taskslib.Task
import kotlin.browser.document


fun NewTask.ui() = editTaskUi(creating.current) {
    slots.left.backPersistDiscard.saveAndView {
        viewTask()
    }
    title %= "New Task"
    right.persistButton
}

