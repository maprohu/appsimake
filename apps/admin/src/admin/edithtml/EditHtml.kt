package admin.edithtml

import admin.loggedin.LoggedInPath
import admin.loggedin.LoggedInTC
import commonfb.FBBackApi
import commonlib.HtmlPage
import commonshr.*
import commonui.*
import commonui.view.*
import commonui.editing.*
import commonui.links.Linkage
import killable.Noop

interface EditHtmlPath: LoggedInPath {
    val edit: EditHtml
}

class EditHtml(
    parent: LoggedInTC<*>,
    val linkage: Linkage,
    editable: FsEditable<HtmlPage>
): ViewTC(parent), EditHtmlPath, LoggedInPath by parent, FBBackApi, Editor, HasBack by linkage {
    override val edit = this

    override val editing: RxEditing<HtmlPage> = rxEditing(editable)

    override val rawView = ui()
}


