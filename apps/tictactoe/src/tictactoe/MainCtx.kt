package tictactoe

import commonfb.FbCtx

class MainCtx(
    val fbCtx: FbCtx
) {

    val playersRef = fbCtx.baseRef.collection("players")
    val gamesRef = fbCtx.baseRef.collection("games")

}