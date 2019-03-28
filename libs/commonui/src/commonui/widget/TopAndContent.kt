package commonui.widget

import commonshr.HasKills
import commonui.progress.progressUI
import org.w3c.dom.HTMLElement
import commonui.view.*

class TopAndContent(
    val topbar: HTMLElement?,
    val content: HTMLElement?
) {
    companion object {
        val hourglass get() = TopAndContent(null, factory.hourglass.node)

        fun progress(deps: HasKills) = TopAndContent(
            topbar = null,
            content = progressUI(deps)
        )
    }
}

class HourglassView(parent: HasKillsRouting<TopAndContent>): SimpleView<TopAndContent>(parent) {
    override val rawView = TopAndContent.hourglass
}

