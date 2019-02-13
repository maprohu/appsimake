package music.content

import commonui.widget.BaseUIStation
import commonui.widget.Factory
import commonui.widget.factory
import music.boot.Boot
import org.w3c.dom.HTMLElement


class ContentView(
    val topbar: HTMLElement?,
    val content: HTMLElement
) {
    companion object {
        val hourglass get() = ContentView(null, factory.hourglass.node)
    }
}

abstract class Content(
    boot: Boot
): BaseUIStation<ContentView>(boot, boot.initializeContentView)

class UserUnknown(boot: Boot): Content(boot) {
    override val view: ContentView = ContentView.hourglass
}
