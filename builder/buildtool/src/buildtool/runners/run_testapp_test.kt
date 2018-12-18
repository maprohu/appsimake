package buildtool.runners

import buildtool.*
import kotlinx.coroutines.channels.ticker

fun main(args: Array<String>) = runTask {
    testapp.testHtml
}