package commonui.topandcontent

import commonshr.JobScope
import commonui.progress.progressUI
import commonui.widget.TopAndContent
import commonui.widget.UIBase

open class ProgressTC(
    parent: JobScope
): UIBase<TopAndContent>(parent) {
    override val rawView = TopAndContent(
        topbar = null,
        content = progressUI()
    )
}