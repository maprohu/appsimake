package index.home.notloggedin

import commonui.view.HasKillsRouting
import commonui.view.SimpleView
import commonui.view.ViewTC
import commonui.widget.TopAndContent


class NotLoggedIn(
    parent: HasKillsRouting<TopAndContent>
): ViewTC(parent) {
    override val rawView = ui()
}