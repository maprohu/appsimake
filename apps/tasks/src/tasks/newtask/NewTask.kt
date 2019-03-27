package tasks.newtask

import commonfb.FBBackApi
import commonui.*
import commonui.editing.onPersist
import commonui.links.Linkage
import tasks.edittask.EditTaskLike
import tasks.loggedin.LoggedInPath
import tasks.loggedin.LoggedInTC

interface NewTaskPath: LoggedInPath {
    val newTask: NewTask
}


class NewTask(
    val from: LoggedInTC<*>,
    linkage: Linkage
): ForwardTC(from), EditTaskLike, NewTaskPath, LoggedInPath by from, FBBackApi, Creator, HasBack by linkage {
    override val newTask = this

    val item = loggedIn.tasksCollection.randomEditable()

    override val creating = rxCreating(
        item,
        onPersist {
            with (from) {
                advance {
                    links.editTask.fwd(item.id.id, true)
                }
            }
        }
    )

    override val rawView = ui()
}