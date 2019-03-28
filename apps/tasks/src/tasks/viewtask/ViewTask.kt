package tasks.viewtask

import commonfb.FBBackApi
import commonshr.*
import commonshr.properties.copy
import commonui.*
import commonui.links.LinkApi
import commonui.links.Linkage
import commonui.view.*
import tasks.loggedin.LoggedInPath
import tasks.loggedin.LoggedInTC
import taskslib.Note
import taskslib.Task
import taskslib.TaskStatus
import taskslib.notes

interface ViewTaskPath: LoggedInPath {
    val viewTask: ViewTask
}
class ViewTask(
    loggedIn: LoggedInTC<*>,
    override val linkage: Linkage,
    editable: FsEditable<Task>
): ForwardTC(loggedIn), LoggedInTC<ViewTask>, ViewTaskPath, LoggedInPath by loggedIn, FBBackApi, HasBack by linkage  {
    override val viewTask = this

    val notes = editable.id.notes

    val fsDoc = editable.toFsDoc().live

    fun FsDoc<Note>.edit() {
        editNote(idOrFail)
    }

    fun editNote(id: String, replace: Boolean = false) = advance {
        links.editNote.fwd(id, replace)
    }

    fun edit() = advance {
        links.editViewTask.fwd()
    }

    fun newComment() = advance {
        links.newNote.fwd()
    }

    fun markAsCompleted() {
        fsDoc.rxv.now.copy().apply {
            status %= TaskStatus.Completed
            toFsDoc(fsDoc.id).save()
            back()
        }
    }

    override val rawView = ui()

}