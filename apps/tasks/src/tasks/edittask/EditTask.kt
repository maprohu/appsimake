package tasks.edittask

import commonfb.FBFromApi
import commonshr.FsEditable
import commonshr.Trigger
import commonui.*
import kotlinx.coroutines.launch
import tasks.data.deleteCollections
import tasks.viewtask.ViewTask
import tasks.viewtask.ViewTaskPath
import taskslib.Task

interface EditTaskPath: ViewTaskPath {
    val editTask: EditTask
}


class EditTask(
    from: ViewTask,
    item: FsEditable<Task>,
    exit: EditorExit<EditTask> = EditorExit.GoBack2
): ForwardTC(from), EditTaskPath, ViewTaskPath by from, FBFromApi, Editor, HasExit by exit {
    override val editTask = this

    override val editing = rxEditing(
        item,
        delete = {
            item.delete()
            loggedIn.launch {
                item.id.deleteCollections(this@EditTask)
            }
        },
        onPersist = { exit.onPersist(this) }
    )

    override val rawView = ui()
}