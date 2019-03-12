package index.home

import commonui.SimpleView
import commonui.widget.Body
import org.w3c.dom.HTMLElement

class Home(body: Body): SimpleView<HTMLElement>(body) {
    override val rawView = ui()
}
