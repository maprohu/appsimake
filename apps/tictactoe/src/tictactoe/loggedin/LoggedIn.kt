package tictactoe.loggedin

import tictactoe.*
import commonfb.FBApi
import commonshr.publish
import commonshr.singletons
import commonshr.toRxSource
import commonui.*
import commonui.links.BaseTC
import commonui.links.LinkApi
import commonui.links.Linkage
import commonui.view.ForwardTC
import commonui.view.HasKillsRouting
import commonui.view.advance
import commonui.widget.TopAndContent
import firebase.User
import firebase.firestore.privateOf
import kotlinx.coroutines.launch
import rx.Var
import tictactoelib.GameStatus
import tictactoelib.PublicGame
import tictactoelib.status
import tictactoelib.tictactoeLib

interface LoggedInTC<T: LoggedInTC<T>>: BaseTC, LoggedInPath, LinkApi<T>

interface LoggedInPath: LinksPath {
    val loggedIn: LoggedIn
}

class LoggedIn(
    links: Links,
    override val linkage: Linkage,
    hole: HasKillsRouting<TopAndContent>,
    val user: User
): ForwardTC(hole), LoggedInTC<LoggedIn>, LoggedInPath, LinksPath by links, FBApi  {
    override val loggedIn: LoggedIn = this

    val privateDoc = tictactoeLib.privateOf(user)
    val publicColl = tictactoeLib.app.publish.toRxSource { PublicGame() }
    val statusDoc = privateDoc.singletons.status

    val gameStatus = Var<GameStatus<*>?>(null)

    fun signOut() = links.launch {
        links.signOut()
        links.home.load()
    }

    fun singlePlayer() = advance {
        links.singlePlayer.fwd()
    }

    override val rawView: TopAndContent = ui()

    fun goOnline() = advance {
        links.online.fwd()
    }

    init {
        launch {
            gameStatus %= statusDoc.getOrNull() ?: GameStatus.None()

            for (d in statusDoc.docs()) {
                gameStatus %= d
            }
        }
    }
}

