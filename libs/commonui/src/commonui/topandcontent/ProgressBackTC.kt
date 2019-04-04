package commonui.topandcontent

import commonshr.Trigger
import commonshr.invoke
import commonui.*
import commonui.progress.progressUI
import commonui.view.*
import commonui.widget.TopAndContent
import commonui.widget.Topbar
import commonui.widget.factory

open class ProgressBackTC(
    parent: HasBackKillsRoutingTC,
    val topbar: ProgressBackTC.(Topbar) -> Unit = {}
): ViewTC(parent), BackKillsUixApi, HasBack by parent {
    override val rawView = TopAndContent(
        topbar = factory.topbar {
            left.backButton
            topbar(this)
        }.node,
        content = progressUI()
    )
}