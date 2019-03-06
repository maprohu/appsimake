package tasks.viewtask

import commonfb.FBApi
import commonshr.FsDoc
import commonshr.docWrap
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import tasks.editnote.EditNote
import tasks.loggedin.LoggedIn
import tasks.loggedin.LoggedInPath
import taskslib.Note
import taskslib.Task
import taskslib.notes

interface ViewTaskPath: LoggedInPath {
    val viewTask: ViewTask
}
class ViewTask(
    from: LoggedIn,
    val item: FsDoc<Task>
): ForwardBase<TopAndContent>(from), ViewTaskPath, LoggedInPath by from, FBApi {
    override val viewTask = this

    val notes = item.docWrap.notes

    fun FsDoc<Note>.edit() {
        exec {
            forward.switchTo {
                EditNote(this@ViewTask, this)
            }
        }
    }

    override val rawView = ui()

}