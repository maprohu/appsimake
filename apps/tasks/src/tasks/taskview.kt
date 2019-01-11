package tasks

import bootstrap.*
import common.orEmpty
import common.removeFromParent
import commonfb.*
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import domx.cls
import domx.*
import firebase.firestore.query
import fontawesome.Fa
import fontawesome.pen
import killable.Killable
import killable.KillableSeq
import killable.Killables
import styles.scrollVertical
import taskslib.Note
import taskslib.Task
import taskslib.notes

fun LoggedIn.viewTask(
    panel: RootPanel,
    task: Task,
    close: () -> Unit
) : Killable {
    return ViewScreenConfig(
        "Task",
        ::editTask
    ) { item ->
        val killables = Killables()
        scrollPanel {

            dt { innerText = "Title" }
            dd { killables += rxTextOrEmpty { item.title.initial() } }
            dt { innerText = "Text" }
            dd { killables += rxTextOrEmpty { item.text.initial() } }
            dt { innerText = "Status" }
            dd { killables += rxTextOrEmpty { item.status.initial().map { it.name } } }

        }
        killables
    }.build(
        panel,
        task,
        close
    )
}