package index.home

import commonui.widget.Body
import commonui.widget.UIBase
import org.w3c.dom.HTMLElement

class Home(body: Body): UIBase<HTMLElement>(body) {
    override val rawView = ui()
}
