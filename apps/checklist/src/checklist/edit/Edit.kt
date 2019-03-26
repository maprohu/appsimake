package checklist.edit

import checklist.Checklist
import checklist.ChecklistItem
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import rx.RxMutableList
import commonfb.FBFromApi
import commonshr.*
import commonui.*
import commonui.editing.RxEditing
import commonui.widget.TopAndContent
import rx.Var
import rx.eventsEmitter

interface EditPath: LoggedInPath {
    val edit: Edit
}

class Edit(
    loggedIn: LoggedIn,
    parent: CsKillsView<TopAndContent>,
    val initial: FsDoc<Checklist>,
    override val exit: HasRedisplay = GoBackRedisplay
): SimpleView<TopAndContent>(parent), EditPath, LoggedInPath by loggedIn, FBFromApi, Editor, HasFrom by SimpleFrom {
    override val edit = this


    override val editing: RxEditing<Checklist> = rxEditing(initial) {
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


