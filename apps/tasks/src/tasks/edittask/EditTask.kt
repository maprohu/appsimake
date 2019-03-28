package tasks.edittask

import commonfb.FBBackApi
import commonshr.CsKillsApi
import commonshr.FsEditable
import commonshr.Trigger
import commonui.*
import commonui.links.Linkage
import killable.Noop
import kotlinx.coroutines.launch
import tasks.data.deleteCollections
import tasks.loggedin.LoggedInPath
import tasks.loggedin.LoggedInTC
import tasks.viewtask.ViewTask
import tasks.viewtask.ViewTaskPath
import taskslib.Task
import commonui.view.*

interface EditTaskPath: LoggedInPath {
    val editTask: EditTask
}

interface EditTaskLike: BindCsKillsUixApi, LoggedInPath
class EditTask(
    val from: LoggedInTC<*>,
    linkage: Linkage,
    val item: FsEditable<Task>,
    deleteTrigger: Trigger = Noop,
    val fromView: Boolean = false
): ForwardTC(from), EditTaskLike, EditTaskPath, LoggedInPath by from, FBBackApi, Editor, HasBack by linkage {
    override val editTask = this

    override val editing = rxEditing(item) { tr ->
        tr.copy(
            delete = {
                item.delete()
                loggedIn.launch {
                    item.id.deleteCollections(this@EditTask)
                }
                deleteTrigger()
            }
        )
    }

    fun viewTask() {
        with (from) {
            advance {
                links.viewTask.fwd(item.id.id, true)
            }
        }
    }

    override val rawView = ui()
}