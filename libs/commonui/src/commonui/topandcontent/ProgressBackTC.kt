package commonui.topandcontent

import commonshr.invoke
import commonui.*
import commonui.progress.progressUI
import commonui.widget.TopAndContent
import commonui.widget.factory

open class ProgressBackTC(
    parent: HasKillsRouting<TopAndContent>
): SimpleView<TopAndContent>(parent), FromKillsUixApi, HasFrom by SimpleFrom {
    override val rawView = TopAndContent(
        topbar = factory.topbar.invoke {
            left.backButton
        }.node,
        content = progressUI()
    )
}