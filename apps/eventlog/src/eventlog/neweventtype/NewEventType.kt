package eventlog.neweventtype

import commonfb.FBBackApi
import commonui.*
import commonui.editing.RxCreating
import commonui.links.Linkage
import commonui.view.*
import eventlog.EventType
import eventlog.loggedin.LoggedIn
import eventlog.loggedin.LoggedInPath

interface NewEventTypePath: LoggedInPath {
    val newEventType: NewEventType
}

class NewEventType(
    parent: LoggedIn,
    val linkage: Linkage
): ViewTC(parent), NewEventTypePath, LoggedInPath by parent, FBBackApi, Creator, HasBack by linkage {
    override val newEventType = this

    val item = loggedIn.eventTypes.randomEditable()

    override val creating: RxCreating<EventType> = rxCreating(item) { tr ->
        tr.copy(
            edit = {
                with (parent) {
                    advance {
                        links.editEventType.fwd(item.id.id, true)
                    }
                }
            }
        )
    }

    override val rawView = ui()
}


