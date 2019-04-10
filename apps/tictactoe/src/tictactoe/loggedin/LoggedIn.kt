package tictactoe.loggedin

import tictactoe.*
import commonfb.FBApi
import commonfb.isFcmSupported
import commonshr.*
import commonui.*
import commonui.links.BaseTC
import commonui.links.LinkApi
import commonui.links.Linkage
import commonui.view.ForwardTC
import commonui.view.HasKillsRouting
import commonui.view.advance
import commonui.widget.TopAndContent
import firebase.HasUser
import firebase.User
import firebase.firestore.inboxOf
import firebase.firestore.privateOf
import kotlinx.coroutines.launch
import org.w3c.notifications.Notification
import rx.Var
import tictactoelib.*

interface LoggedInTC<T: LoggedInTC<T>>: BaseTC, LoggedInPath, LinkApi<T>

interface LoggedInPath: LinksPath, HasUser {
    val loggedIn: LoggedIn
}

class LoggedIn(
    links: Links,
    override val linkage: Linkage,
    hole: HasKillsRouting<TopAndContent>,
    override val user: User
): ForwardTC(hole), LoggedInTC<LoggedIn>, LoggedInPath, LinksPath by links, FBApi  {
    override val loggedIn: LoggedIn = this

    val privateDoc = tictactoeLib.privateOf(user)
//    val gamesColl = privateDoc.games
    val statusDoc = privateDoc.singletons.status
    val lounge = tictactoeLib.app.tmp.lounge
//    val gameMoves = statusDoc.moves
    val inboxMoves = tictactoeLib.inboxOf(user).public.moves

    val gameStatus = statusDoc.docsOrNull.toRx(null)



    fun signOut() = links.launch {
        links.signOut()
        links.home.load()
    }

    fun singlePlayer() = advance {
        links.singlePlayer.fwd()
    }

    fun goOnline() = advance {
        links.online.fwd()
    }

    override val rawView: TopAndContent = ui()
}

