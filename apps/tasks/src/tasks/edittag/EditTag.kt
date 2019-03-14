package tasks.edittag

import commonfb.FBFromApi
import commonshr.FsDoc
import commonshr.FsEditable
import commonui.*
import commonui.widget.TopAndContent
import tasks.listtags.ListTags
import tasks.listtags.ListTagsPath
import taskslib.Tag

interface EditTagPath: ListTagsPath {
    val editTag: EditTag
}
class EditTag(
    from: ListTags,
    item: FsEditable<Tag>,
    exit: EditorExit<EditTag> = EditorExit.GoBack
): ForwardBase<TopAndContent>(from), EditTagPath, ListTagsPath by from, FBFromApi, Editor, HasExit by exit {
    override val editTag = this

    override val editing = rxEditing(
        item,
        onPersist = { exit.onPersist(this) }
    )

    override val rawView = ui()
}