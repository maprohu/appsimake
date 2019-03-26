package tasks.newtag

import commonfb.FBFromApi
import commonshr.FsEditable
import commonui.*
import commonui.widget.TopAndContent
import tasks.listtags.ListTags
import tasks.listtags.ListTagsPath
import taskslib.Tag

interface NewTagPath: ListTagsPath {
    val newTag: NewTag
}
class NewTag(
    from: ListTags
): ForwardBase<TopAndContent>(from), NewTagPath, ListTagsPath by from, FBFromApi, Editor {
    override val newTag = this

    val item = loggedIn.userTags.randomEditable()

    override val editing = rxEditing(item) { tr ->
        tr.copy(
            saveCurrent = { current ->
                tr.saveCurrent(current)
                from.editTag(item.id.id, true)
            }
        )
    }

    override val rawView = ui()
}