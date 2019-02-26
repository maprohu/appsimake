package checklist.loggedin

import checklist.home.Home
import checklist.home.HomePath
import checklist.home.ui
import commonfb.UserState
import commonfb.loginbase.UserStateView
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import firebase.User

interface LoggedInPath: HomePath {
    val loggedIn: LoggedIn
}

class LoggedIn(
    home: Home,
    user: User
): UIBase<TopAndContent>(home), UserStateView, LoggedInPath, HomePath by home {
    override val userState: UserState = UserState.LoggedIn(user)
    override val loggedIn: LoggedIn = this
    override val rawView: TopAndContent = ui()

}

