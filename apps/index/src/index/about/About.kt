package index.about

import commonfb.FBBackApi
import commonlib.HtmlPage
import commonshr.editableOf
import commonshr.meta
import commonshr.toFsEditable
import commonui.HasBack
import commonui.links.Linkage
import commonui.view.*
import firebase.firestore.wrapFsDoc
import index.about
import index.home.Home
import index.home.HomePath
import index.indexLib

interface AboutPath: HomePath {
    val about: About
}

class About(
    parent: Home,
    linkage: Linkage
) : ViewTC(parent), AboutPath, HomePath by parent, FBBackApi, HasBack by linkage {

    val html = indexLib.app.meta.about.wrapFsDoc(HtmlPage()).live

    override val about = this
    override val rawView = ui()
}