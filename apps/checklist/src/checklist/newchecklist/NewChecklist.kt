package checklist.newchecklist

import checklist.Checklist
import checklist.editchecklist.EditChecklistControl
import checklist.editchecklist.EditChecklistLike
import checklist.loggedin.LoggedInPath
import checklist.loggedin.LoggedInTC
import commonfb.FBBackApi
import commonui.*
import commonui.editing.RxCreating
import commonui.links.Linkage

interface NewChecklistPath: LoggedInPath {
    val edit: NewChecklist
}

class NewChecklist(
    parent: LoggedInTC<*>,
    val linkage: Linkage
): ViewTC(parent), EditChecklistLike, NewChecklistPath, LoggedInPath by parent, FBBackApi, Creator, HasBack by linkage {
    override val edit = this

    val item = loggedIn.checklists.randomEditable().apply {
        doc.name %= "<unknown>"
    }

    override val creating: RxCreating<Checklist> = rxCreating(item) { tr ->
        tr.copy(
            persist = { current ->
                control.preSave()
                tr.persist(current)
            },
            edit = {
                with (parent) {
                    advance {
                        links.editChecklist.fwd(item.id.id, true)
                    }
                }
            }
        )
    }

    val control = EditChecklistControl(creating.current, bindings)

    override val rawView = ui()
}


