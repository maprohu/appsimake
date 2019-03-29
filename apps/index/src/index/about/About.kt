package index.about

import commonfb.FBBackApi
import commonui.HasBack
import commonui.links.Linkage
import commonui.view.*
import index.home.Home
import index.home.HomePath

interface AboutPath: HomePath {
    val about: About
}

class About(
    parent: Home,
    linkage: Linkage
) : ViewTC(parent), AboutPath, HomePath by parent, FBBackApi, HasBack by linkage {
    override val about = this
    override val rawView = ui()
}