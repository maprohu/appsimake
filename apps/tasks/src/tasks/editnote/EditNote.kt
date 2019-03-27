package tasks.editnote

import commonfb.FBBackApi
import commonshr.FsEditable
import commonui.*
import commonui.links.Linkage
import tasks.viewtask.ViewTask
import tasks.viewtask.ViewTaskPath
import taskslib.Note

interface EditNotePath: ViewTaskPath {
    val editNote: EditNote
}
class EditNote(
    from: ViewTask,
    linkage: Linkage,
    item: FsEditable<Note>
): ForwardTC(from), EditNotePath, ViewTaskPath by from, FBBackApi, Editor, HasBack by linkage {
    override val editNote = this

    override val editing = rxEditing(item)

    override val rawView = ui()
}