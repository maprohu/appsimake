package tasks.viewtask

import commonfb.FBFromApi
import commonshr.FsDoc
import commonshr.docWrap
import commonshr.properties.copy
import commonshr.toFsDoc
import commonui.ForwardTC
import commonui.FromTC
import commonui.HasFrom
import commonui.SimpleFrom
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
    val item: FsDoc<Task>
): ForwardTC(from), ViewTaskPath, LoggedInPath by loggedIn, FBFromApi {
    override val viewTask = this

    val notes = item.docWrap.notes

    fun FsDoc<Note>.edit() {
//        exec {
//            forward.switchTo {
//                EditNote(this@ViewTask, this)
//            }
//        }
    }

    fun edit() {
//        exec {
//            forward.switchTo {
//                EditTask(this@ViewTask)
//            }
//        }
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
        item.rxv.now.copy().apply {
            status %= TaskStatus.Completed
            toFsDoc(item.id).save()
            from.redisplay()
        }
    }

    override val rawView = ui()

}