package tictactoefns

import tictactoelib.MoveData
import tictactoelib.moveFunctionName

fun init(exports: dynamic) {
    exports[moveFunctionName] = functions.https.onCall { move:MoveData, ctx ->
        console.log("move: ${move.text}")
    }
}

