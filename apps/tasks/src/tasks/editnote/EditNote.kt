package tasks.editnote

import commonfb.FBFromApi
import commonshr.FsDoc
import commonshr.FsEditable
import commonui.*
import tasks.viewtask.ViewTask
import tasks.viewtask.ViewTaskPath
import taskslib.Note

interface EditNotePath: ViewTaskPath {
    val editNote: EditNote
}
class EditNote(
    from: ViewTask,
    item: FsEditable<Note>,
    exit: EditorExit<EditNote> = EditorExit.GoBack
): ForwardTC(from), EditNotePath, ViewTaskPath by from, FBFromApi, Editor, HasExit by exit {
    override val editNote = this

    override val editing = rxEditing(
        item,
        onPersist = { exit.onPersist(this) }
    )

    override val rawView = ui()
}