package tictactoe.loggedin

import tictactoe.*
import commonfb.FBApi
import commonfb.HasDbFcmLibMessagingUser
import commonfb.HasMessaging
import commonfb.isFcmSupported
import commonfb.messaging.MessagingControl
import commonshr.*
import commonui.*
import commonui.links.BaseTC
import commonui.links.LinkApi
import commonui.links.Linkage
import commonui.view.ForwardTC
import commonui.view.HasKillsRouting
import commonui.view.advance
import commonui.widget.TopAndContent
import firebase.*
import firebase.firestore.inboxOf
import firebase.firestore.privateOf
import firebase.messaging.Messaging
import kotlinx.coroutines.launch
import org.w3c.notifications.Notification
import rx.Var
import tictactoelib.*

interface LoggedInTC<T: LoggedInTC<T>>: BaseTC, LoggedInPath, LinkApi<T>

interface LoggedInPath: LinksPath, HasDbLibUser, HasMessaging {
    val loggedIn: LoggedIn
}

class LoggedIn(
    links: Links,
    override val linkage: Linkage,
    hole: HasKillsRouting<TopAndContent>,
    override val user: User,
    fcm: Messaging?
): ForwardTC(hole), LoggedInTC<LoggedIn>, LoggedInPath, LinksPath by links, FBApi, HasDbKillsLibUser {
    override val loggedIn: LoggedIn = this
    override val lib = tictactoeLib

    val privateDoc = tictactoeLib.privateOf(user)
//    val gamesColl = privateDoc.games
    val statusDoc = privateDoc.singletons.status
    val lounge = tictactoeLib.app.tmp.lounge
//    val gameMoves = statusDoc.moves
    val inboxMoves = tictactoeLib.inboxOf(user).public.moves

    val gameStatus = statusDoc.docsOrNull.toRx(null)

    override val messaging = MessagingControl(this, fcm)

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

    init {
        launchReport {
            for (e in links.messages) {
                when (e) {
                    GoOnline ->
                }

            }
        }
    }
}

