package tictactoe

import common.listenAs
import commonfb.FbLinksDeps
import commonfb.FbLinksFactory
import commonui.view.forwarding
import commonui.view.hourglass
import firebase.DbApi
import firebase.firestore.rollback
import firebase.firestore.txTry
import killable.Killables
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.channels.Channel
import org.w3c.dom.MessageEvent
import tictactoe.active.Active
import tictactoe.loggedin.LoggedIn
import tictactoe.singleplayer.SinglePlayer
import tictactoelib.GameStatus
import tictactoelib.MessageType
import kotlin.browser.window

interface LinksPath: DbApi {
    val links: Links
}
class Links(
    deps: FbLinksDeps
): FbLinksFactory(deps), LinksPath {
    override val links = this

    val messages = Channel<MessageType>(Channel.UNLIMITED)

    init {
        window.navigator.serviceWorker.listenAs<MessageEvent>("message") { e ->
            messages.offer(e.data as MessageType)
        }
    }

    override val home = root { lnk ->
        LoggedIn(
            this,
            lnk,
            deps.hole,
            user = requestUser(),
            fcm = fcmDeferred.await()
        ).apply {
            deps.hole %= this
        }
    }

    val singlePlayer by home.child { parent, lnk ->
        SinglePlayer(
            parent,
            lnk
        ).forwarding(parent)
    }

    val online by home.child { parent, lnk ->
        val cd = CompletableDeferred<Unit>()

        with (parent) {
            hourglass()

            txTry {
                val st = loggedIn.statusDoc.getOrDefault { GameStatus.Offline() }.doc

                if (st is GameStatus.Offline) {
                    loggedIn.statusDoc.txSet(GameStatus.Online())
                } else {
                    rollback("already online.")
                }
            }

            Killables.context {
                loggedIn.gameStatus.forEach { gs ->
                    if (gs !is GameStatus.Offline) {
                        cd.complete(Unit)
                    }
                }
                cd.await()
            }
        }


        Active(
            parent,
            lnk
        ).forwarding(parent)
    }


}
