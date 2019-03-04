package checklist.view

import checklist.Checklist
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import commonshr.FsDoc
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent

interface ViewPath: LoggedInPath {
    val viewChecklist: ViewChecklist
}
class ViewChecklist(
    from: LoggedIn,
    val checklist: FsDoc<Checklist>
): ForwardBase<TopAndContent>(from), ViewPath, LoggedInPath by from {
    override val viewChecklist = this
    override val rawView = ui()
}