package commonui.progress

import commonui.view.*
import org.w3c.dom.HTMLElement

class Progress(
    parent: HasKillsRouting<HTMLElement>
): SimpleView<HTMLElement>(parent) {
    override val rawView = ui()
}