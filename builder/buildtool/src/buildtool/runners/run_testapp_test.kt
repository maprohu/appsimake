package buildtool.runners

import buildtool.*
import kotlinx.coroutines.channels.ticker

fun main(args: Array<String>) = runTask {
    fns.indexJs
    testapp.testSW
    testapp.testHtml
    testapp2.testSW
    testapp2.testHtml
}