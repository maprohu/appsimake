package commonui.topandcontent

import commonui.HasKillsRouting
import commonui.SimpleView
import commonui.progress.progressUI
import commonui.widget.TopAndContent

open class ProgressTC(
    parent: HasKillsRouting<TopAndContent>
): SimpleView<TopAndContent>(parent) {
    override val rawView = TopAndContent(
        topbar = null,
        content = progressUI()
    )
}