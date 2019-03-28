package index.home.loggedin

import commonui.view.HasKillsRouting
import commonui.view.SimpleView
import commonui.view.ViewTC
import commonui.widget.TopAndContent


class LoggedIn(
    parent: HasKillsRouting<TopAndContent>
): ViewTC(parent) {
    override val rawView = ui()
}