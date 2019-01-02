package buildtool.runners

import buildtool.fns
import buildtool.gymclock
import buildtool.runTask
import buildtool.tictactoe
import kotlinx.coroutines.channels.ticker

fun main(args: Array<String>) {
    fns.indexJs
    tictactoe.publicHtml
    tictactoe.publicSW
}