package tictactoe

import commonfb.FbCtx
import tictactoelib.firestoreGamesPath
import tictactoelib.firestorePlayersPath

class MainCtx(
    val fbCtx: FbCtx
) {

    val playersRef = fbCtx.baseRef.collection(firestorePlayersPath)
    val gamesRef = fbCtx.db.collection(firestoreGamesPath)

}