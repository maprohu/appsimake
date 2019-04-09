package tictactoe.active

import commonshr.inbox
import commonshr.public
import firebase.DbTxApi
import firebase.auth.uid
import tictactoe.loggedin.LoggedIn
import tictactoelib.Move
import tictactoelib.moves
import tictactoelib.tictactoeLib

fun DbTxApi.postMove(
    loggedIn: LoggedIn,
    gs: GS.Playing,
    seq: Int,
    move: Move<*>
) {
    move.apply {
        this.from %= loggedIn.uid
        this.game %= gs.game
        this.seq %= seq
    }

    val outgoing = tictactoeLib.app.inbox.doc(gs.opponent).public.moves

    outgoing.randomDoc.txSet(move)
    if (move !is Move.Leave)  {
        loggedIn.inboxMoves.randomDoc.txSet(move)
    }

}
