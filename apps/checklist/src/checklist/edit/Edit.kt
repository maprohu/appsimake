package checklist.edit

import checklist.Checklist
import checklist.ChecklistItem
import checklist.home.Home
import checklist.home.HomePath
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import common.Emitter
import common.ListenableMutableList
import common.obj
import commonfb.EditScreenConfig
import commonfb.FBApi
import commonui.widget.JobScope
import commonui.widget.TopAndContent
import commonui.widget.UIBase

interface EditPath: LoggedInPath {
    val edit: Edit
}
class Edit(
    loggedIn: LoggedIn,
    val item: Checklist
): UIBase<TopAndContent>(loggedIn), EditPath, LoggedInPath by loggedIn, FBApi {
    override val edit = this

    val items = ListenableMutableList<ChecklistItem>()

    data class X(val a: Int, val b: Int, val c: Int)
    init {
        val x = X(0, 0, 0)
        val (a, b, c, d) = x

    }

    fun addItem(name: String) {
        items.add(
            0,
            obj {
                this.name = name
                checked = false
            }
        )
    }

    override val rawView = ui()
}


