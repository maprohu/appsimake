package buildtool.runners

import buildtool.functions
import buildtool.gymclock
import buildtool.runTask
import buildtool.tictactoe
import kotlinx.coroutines.channels.ticker

fun main(args: Array<String>) = runTask {
    tictactoe.testHtml
    functions.indexJs
}