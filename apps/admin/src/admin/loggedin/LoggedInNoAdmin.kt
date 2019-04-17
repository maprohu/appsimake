package admin.loggedin

import commonui.view.ViewTC
import commonui.widget.TopAndContent

class LoggedInNoAdmin(
    val loggedIn: LoggedIn
): ViewTC(loggedIn) {
    override val rawView: TopAndContent = ui()
}