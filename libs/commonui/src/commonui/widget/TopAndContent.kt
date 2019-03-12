package commonui.widget

import commonshr.HasKills
import commonui.HasKillsRouting
import commonui.SimpleView
import org.w3c.dom.HTMLElement

class TopAndContent(
    val topbar: HTMLElement?,
    val content: HTMLElement?
) {
    companion object {
        val hourglass get() = TopAndContent(null, factory.hourglass.node)
    }
}

class HourglassView(parent: HasKillsRouting<TopAndContent>): SimpleView<TopAndContent>(parent) {
    override val rawView = TopAndContent.hourglass
}

