package download.loggedin

import common.escape
import commonfb.FBApi
import commonfb.UserState
import commonfb.loginbase.UserStateView
import commonshr.private
import commonshr.Trigger
import commonshr.properties.now
import commonshr.toFsDoc
import commonui.globalStatus
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import download.DownloadItem
import download.downloadLib
import download.home.Home
import download.home.HomePath
import download.items
import download.process
import firebase.User

interface LoggedInPath: HomePath {
    val loggedIn: LoggedIn
}

class LoggedIn(
    home: Home,
    user: User
): UIBase<TopAndContent>(home), UserStateView, LoggedInPath, HomePath by home, FBApi {
    override val userState: UserState = UserState.LoggedIn(user)
    override val loggedIn: LoggedIn = this

    val privatedoc = downloadLib.app.private.doc(user.uid)
    val items = privatedoc.items
    val process = privatedoc.process

    var urlValue: () -> String? = { null }
    var resetForm: Trigger = {}

    fun addUrl() {
        urlValue()?.let { url ->
            val id = url.escape

            DownloadItem().apply {
                this.url.now = url
                toFsDoc(items, id).save()
            }

            resetForm()
        }
    }


    override val rawView: TopAndContent = ui()

    init {
        globalStatus %= "Logged in."
    }

}

