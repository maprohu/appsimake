package commonui.progress

import commonui.view.*
import commonui.widget.ScreenElement
import org.w3c.dom.HTMLElement

class Progress(
    parent: HasKillsRouting<ScreenElement>
): SimpleView<ScreenElement>(parent) {
    override val rawView = ui()
}