package music.content

import commonui.widget.ViewImpl
import commonui.widget.factory
import music.boot.Boot
import music.boot.BootPath
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
    val path: BootPath
): ViewImpl<ContentView>(path.boot)

class UserUnknown(path: BootPath): Content(path) {
    override val rawView: ContentView = ContentView.hourglass
}
