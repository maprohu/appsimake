package commonfb.loginbase

import commonfb.login.Login
import commonui.*
import commonui.links.LinkPointItem
import commonui.links.Linkage
import commonui.links.NamedHashStruct
import commonui.topandcontent.ProgressTC
import commonui.widget.TopAndContent
import firebase.User
import firebase.app.App
import firebase.auth.Auth
import kotlinx.coroutines.await
import commonshr.*
import commonui.view.*

class LoginOnly(
    parent: HasKillsRoutingTC,
    private val auth: Auth
): ForwardTC(parent), LinkPointItem {
    override val rawView = TopAndContent.hourglass

    suspend fun signIn() = performLogin(this, auth)

    suspend fun signOut() {
        hourglass()
        auth.signOut().await()
        signIn()
    }

    private fun hourglass() {
        this %= ProgressTC(this)
    }

    init {
        hourglass()
    }

}


class User