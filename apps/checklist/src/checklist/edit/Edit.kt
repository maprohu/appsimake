package checklist.edit

import checklist.Checklist
import checklist.ChecklistItem
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import rx.RxMutableList
import commonfb.FBApi
import commonshr.*
import commonui.CsKillsView
import commonui.Editor
import commonui.SimpleView
import commonui.editing.RxEditing
import commonui.widget.TopAndContent
import rx.Var
import rx.eventsEmitter

interface EditPath: LoggedInPath {
    val edit: Edit
}

class Edit(
    loggedIn: LoggedIn,
    override val from: CsKillsView<TopAndContent>,
    initial: FsDoc<Checklist>
): SimpleView<TopAndContent>(from), EditPath, LoggedInPath by loggedIn, FBApi, Editor {
    override val edit = this

    override val editing: RxEditing<Checklist> = rxEditing(initial) { current ->
        if (adder.now.isNotBlank()) {
            performAdd()
        }
    }

    val items = RxMutableList<ChecklistItem>().apply {
        addAll(editing.current.items.now)
        eventsEmitter(false).invoke {
            editing.current.items %= toList()
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

    val adder: Var<String> = Var("").also {
        editing.extraDirty.transform { d -> d + rx { it().isNotBlank() } }
    }

    var performAdd = {}

    override val rawView = ui()
}


