package tasks.edittask

import commonfb.FBApi
import commonshr.FsDoc
import commonui.Editor
import commonui.widget.ForwardBase
import commonui.widget.HasRedisplay
import commonui.widget.TopAndContent
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
    override val exit = loggedIn

    override val editing = rxEditing(viewTask.item)

    override val rawView = ui()
}