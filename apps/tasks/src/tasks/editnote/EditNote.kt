package tasks.editnote

import commonfb.FBApi
import commonshr.FsDoc
import commonui.Editor
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import tasks.viewtask.ViewTask
import tasks.viewtask.ViewTaskPath
import taskslib.Note

interface EditNotePath: ViewTaskPath {
    val editNote: EditNote
}
class EditNote(
    override val from: ViewTask,
    val item: FsDoc<Note>
): ForwardBase<TopAndContent>(from), EditNotePath, ViewTaskPath by from, FBApi, Editor {
    override val editNote = this

    override val editing = rxEditing(item)

    override val rawView = ui()
}