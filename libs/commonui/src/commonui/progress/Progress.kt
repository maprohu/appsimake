package commonui.progress

import commonshr.HasKills
import commonshr.JobScope
import commonui.SimpleView
import commonui.widget.UIBase
import org.w3c.dom.HTMLElement

class Progress(
    parent: HasKills
): SimpleView<HTMLElement>(parent) {
    override val rawView = ui()
}