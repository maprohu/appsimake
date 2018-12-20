package tictactoefns

import exports
import tictactoelib.MoveData
import tictactoelib.moveFunctionName

private fun main(args: Array<String>) {
    exports[moveFunctionName] = functions.https.onCall { move:MoveData, ctx ->
        console.log("move: ${move.text}")
    }
}

