package commonui.topandcontent

import commonshr.Trigger
import commonshr.invoke
import commonui.*
import commonui.progress.progressUI
import commonui.view.*
import commonui.widget.TopAndContent
import commonui.widget.factory

open class ProgressBackTC(
    parent: HasKillsRouting<TopAndContent>,
    override val back: Trigger
): SimpleView<TopAndContent>(parent), BackKillsUixApi {
    override val rawView = TopAndContent(
        topbar = factory.topbar.invoke {
            left.backButton
        }.node,
        content = progressUI()
    )
}