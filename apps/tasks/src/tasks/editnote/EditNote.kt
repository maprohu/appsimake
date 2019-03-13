package tasks.editnote

import commonfb.FBFromApi
import commonshr.FsDoc
import commonui.Editor
import commonui.ForwardTC
import tasks.viewtask.ViewTask
import tasks.viewtask.ViewTaskPath
import taskslib.Note

interface EditNotePath: ViewTaskPath {
    val editNote: EditNote
}
class EditNote(
    from: ViewTask,
    val item: FsDoc<Note>
): ForwardTC(from), EditNotePath, ViewTaskPath by from, FBFromApi, Editor {
    override val editNote = this

    override val editing = rxEditing(item)

    override val rawView = ui()
}