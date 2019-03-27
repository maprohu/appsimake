package tasks.listtags

import commonfb.FBBackApi
import commonshr.FsDoc
import commonshr.idOrFail
import commonui.*
import commonui.links.LinkApi
import commonui.links.Linkage
import commonui.widget.TopAndContent
import tasks.loggedin.LoggedIn
import tasks.loggedin.LoggedInPath
import taskslib.Tag

interface ListTagsPath: LoggedInPath {
    val listTags: ListTags
}
class ListTags(
    from: LoggedIn,
    override val linkage: Linkage
): ForwardBase<TopAndContent>(from), ListTagsPath, LoggedInPath by from, FBBackApi, LinkApi<ListTags>, HasBack by linkage {
    override val listTags = this

    fun newTag() = advance {
        links.newTag.fwd()
    }

    fun FsDoc<Tag>.edit() {
        editTag(idOrFail)
    }

    fun editTag(id: String, replace: Boolean = false) = advance {
        links.editTag.fwd(id, replace)
    }

    override val rawView = ui()
}