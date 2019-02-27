package commonui.progress

import commonui.widget.JobScope
import commonui.widget.UIBase
import org.w3c.dom.HTMLElement

class Progress(
    parent: JobScope
): UIBase<HTMLElement>(parent) {
    override val rawView = ui()
}