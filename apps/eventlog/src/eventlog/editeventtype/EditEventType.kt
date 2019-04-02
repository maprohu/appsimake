package eventlog.editeventtype

import commonfb.FBBackApi
import commonshr.FsEditable
import commonui.*
import commonui.links.Linkage
import commonui.view.*
import eventlog.EventType
import eventlog.loggedin.LoggedIn
import eventlog.loggedin.LoggedInPath

interface EditEventTypePath: LoggedInPath {
    val editEventType: EditEventType
}
class EditEventType(
    from: LoggedIn,
    linkage: Linkage,
    item: FsEditable<EventType>
): ForwardTC(from), EditEventTypePath, LoggedInPath by from, FBBackApi, Editor, HasBack by linkage {
    override val editEventType = this

    override val editing = rxEditing(item)

    override val rawView = ui()
}