package tasks

import bootstrap.*
import common.orEmpty
import commonfb.*
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import domx.*
import firebase.firestore.query
import fontawesome.*
import killable.Killable
import killable.Killables
import rx.Var
import taskslib.Task

fun LoggedIn.listTasks(panel: RootPanel, after: () -> Unit) : Killable {

    return ListScreenConfig(
        "Task List",
        { Task() },
        ::viewTask,
        ::editTask,
        userTasks.query(db) {
            Task.title.asc()
        },
        { it.title.initial().orEmpty() }
    ).build(
        panel,
        after
    )

}
