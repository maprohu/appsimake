package music.content

import commonui.widget.ViewImpl
import commonui.widget.factory
import music.boot.Boot
import org.w3c.dom.HTMLElement


class ContentView(
    val topbar: HTMLElement?,
    val content: HTMLElement?
) {
    companion object {
        val hourglass get() = ContentView(null, factory.hourglass.node)
    }
}

abstract class Content(
    boot: Boot
): ViewImpl<ContentView>(boot)

class UserUnknown(boot: Boot): Content(boot) {
    override val rawView: ContentView = ContentView.hourglass
}
