package tasks.viewtask

import commonfb.FBFromApi
import commonshr.*
import commonshr.properties.copy
import commonui.*
import tasks.loggedin.LoggedIn
import tasks.loggedin.LoggedInPath
import taskslib.Note
import taskslib.Task
import taskslib.TaskStatus
import taskslib.notes

interface ViewTaskPath: LoggedInPath {
    val viewTask: ViewTask
}
class ViewTask(
    loggedIn: LoggedIn,
    from: FromTC,
    val fromLink: Link<Unit, FromTC>,
    val editable: FsEditable<Task>
): ForwardTC(from), ViewTaskPath, LoggedInPath by loggedIn, FBFromApi {
    override val viewTask = this

    val notes = editable.id.notes

    val fsDoc = editable.toFsDoc().live

    fun FsDoc<Note>.edit() = advance {
    }

    fun edit() = advance {
        links.editTask.fwd(fromLink, editable.id.id)
    }

    fun newComment() {
//        exec {
//            forward.switchTo {
//                EditNote(this@ViewTask, Note().toRandomFsDoc(notes)).apply {
//                    item.live
//                }
//            }
//        }
    }

    fun markAsCompleted() {
        fsDoc.rxv.now.copy().apply {
            status %= TaskStatus.Completed
            toFsDoc(fsDoc.id).save()
            from.redisplay()
        }
    }

    override val rawView = ui()

}