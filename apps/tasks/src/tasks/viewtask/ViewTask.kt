package tasks.viewtask

import commonfb.FBApi
import commonshr.FsDoc
import commonshr.docWrap
import commonshr.toFsDoc
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import tasks.editnote.EditNote
import tasks.edittask.EditTask
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

    fun edit() {
        exec {
            forward.switchTo {
                EditTask(this@ViewTask)
            }
        }
    }

    fun newComment() {
        exec {
            forward.switchTo {
                EditNote(this@ViewTask, Note().toRandomFsDoc(notes)).apply {
                    item.live
                }
            }
        }
    }

    override val rawView = ui()

}