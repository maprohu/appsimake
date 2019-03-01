package checklist.edit

import checklist.Checklist
import checklist.ChecklistItem
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import common.ListenableMutableList
import common.eventsEmitter
import commonfb.FBApi
import commonshr.*
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import kotlinx.coroutines.launch
import rx.Var

interface EditPath: LoggedInPath {
    val edit: Edit
}
class Edit(
    loggedIn: LoggedIn,
    val initial: Checklist
): UIBase<TopAndContent>(loggedIn), EditPath, LoggedInPath by loggedIn, FBApi {
    override val edit = this

    val current = initial.copy()

    val items = ListenableMutableList<ChecklistItem>().apply {
        addAll(current.items.now)
        eventsEmitter(false).invoke {
            current.items %= toList()
        }
    }

    fun addItem(name: String) {
        items.add(
            0,
            ChecklistItem().apply {
                this.name %= name
            }
        )
    }

    val adder = Var("")
    val dirty = rx {
        adder().isNotBlank() || !rxCompare(initial, current)
    }

    override val rawView = ui()
}


