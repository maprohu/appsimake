package commonui.widget

import commonshr.JobScope
import org.w3c.dom.HTMLElement

class TopAndContent(
    val topbar: HTMLElement?,
    val content: HTMLElement?
) {
    companion object {
        val hourglass get() = TopAndContent(null, factory.hourglass.node)
    }
}

class HourglassView(parent: JobScope): ViewImpl<TopAndContent>(parent) {
    override val rawView = TopAndContent.hourglass
}

