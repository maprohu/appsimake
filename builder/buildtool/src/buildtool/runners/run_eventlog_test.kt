package buildtool.runners

import buildtool.*

fun main() = runTask {
    fns.indexJs
    eventlog.testHtml
    eventlog.testSW
}