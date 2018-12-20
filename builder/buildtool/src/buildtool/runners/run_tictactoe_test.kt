package buildtool.runners

import buildtool.*
import kotlinx.coroutines.channels.ticker

fun main(args: Array<String>) = runTask {
    tictactoe.testHtml
    functions.indexJs
    firebaseMessagingSw.testSw
}