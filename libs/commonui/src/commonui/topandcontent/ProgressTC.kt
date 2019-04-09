package commonui.topandcontent

import commonui.view.*
import commonui.progress.progressUI
import commonui.view.HasKillsRouting
import commonui.view.SimpleView
import commonui.widget.TopAndContent

open class ProgressTC(
    parent: HasKillsRouting<TopAndContent>
): ViewTC(parent), IViewTC {
    override val rawView = TopAndContent(
        topbar = null,
        content = progressUI()
    )
}