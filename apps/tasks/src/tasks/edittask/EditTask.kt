package tasks.edittask

import commonfb.FBApi
import commonshr.FsDoc
import commonui.Editor
import commonui.widget.ForwardBase
import commonui.widget.HasRedisplay
import commonui.widget.TopAndContent
import kotlinx.coroutines.launch
import tasks.data.deleteCollections
import tasks.viewtask.ViewTask
import tasks.viewtask.ViewTaskPath
import taskslib.Note

interface EditTaskPath: ViewTaskPath {
    val editTask: EditTask
}
class EditTask(
    override val from: ViewTask
): ForwardBase<TopAndContent>(from), EditTaskPath, ViewTaskPath by from, FBApi, Editor {
    override val editTask = this
    override val exit = viewTask.from

    override val editing = rxEditing(
        viewTask.item,
        delete = {
            viewTask.item.delete()
            loggedIn.launch {
                viewTask.item.deleteCollections(this@EditTask)
            }
        }
    )

    override val rawView = ui()
}