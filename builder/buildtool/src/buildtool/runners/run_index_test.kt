package buildtool.runners

import buildtool.*
import kotlinx.coroutines.channels.ticker

fun main() = runTask {
    index.testHtml
    index.testSW
}