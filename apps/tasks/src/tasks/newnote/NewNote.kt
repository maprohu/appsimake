package tasks.newnote

import commonfb.FBBackApi
import commonshr.FsEditable
import commonui.*
import commonui.editing.onPersist
import commonui.links.Linkage
import tasks.viewtask.ViewTask
import tasks.viewtask.ViewTaskPath
import taskslib.Note

interface NewNotePath: ViewTaskPath {
    val newNote: NewNote
}
class NewNote(
    val from: ViewTask,
    linkage: Linkage
): ForwardTC(from), NewNotePath, ViewTaskPath by from, FBBackApi, Creator, HasBack by linkage {
    override val newNote = this

    val item = from.notes.randomEditable()

    override val creating = rxCreating(
        item,
        onPersist {
            from.editNote(item.id.id, true)
        }
    )

    override val rawView = ui()
}