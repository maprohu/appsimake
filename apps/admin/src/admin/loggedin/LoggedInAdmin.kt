package admin.loggedin

import commonui.view.ViewTC
import commonui.widget.TopAndContent

class LoggedInAdmin(
    val loggedIn: LoggedIn
): ViewTC(loggedIn) {
    override val rawView: TopAndContent = ui()
}