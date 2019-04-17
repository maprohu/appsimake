package admin.index

import admin.loggedin.LoggedIn
import admin.loggedin.LoggedInPath
import admin.loggedin.LoggedInTC
import commonfb.FBBackApi
import commonshr.meta
import commonui.HasBack
import commonui.links.Linkage
import commonui.view.*
import index.about
import index.indexLib

interface IndexPath: LoggedInPath {
    val index: Index
}

class Index(
    parent: LoggedIn,
    override val linkage: Linkage
) : ForwardTC(parent), LoggedInTC<Index>, IndexPath, LoggedInPath by parent, FBBackApi, HasBack by linkage {
    override val index = this
    override val rawView = ui()

    fun about() = advance {
        links.editHtml.fwd(
            indexLib.app.meta.about.path
        )
    }
}