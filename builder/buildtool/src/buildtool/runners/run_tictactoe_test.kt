package buildtool.runners

import buildtool.*
import kotlinx.coroutines.channels.ticker

fun main(args: Array<String>) = runTask {
    fns.indexJs
    tictactoe.testHtml
    tictactoe.testSW
}