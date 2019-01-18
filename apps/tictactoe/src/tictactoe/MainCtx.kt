package tictactoe

import commonfb.FbCtx
import firebase.firestore.collectionRef
import tictactoelib.*

class MainCtx(
    val fbCtx: FbCtx
) {
    val db = fbCtx.db

    val playersWrap = tictactoe.app.players
    val playersRef = playersWrap.collectionRef(db)
    val gamesWrap = tictactoe.app.games
    val gamesRef = gamesWrap.collectionRef(db)

}