package buildtool.runners

import buildtool.*

fun main() = runTask {
    fns.indexJs
    checklist.testHtml
    checklist.testSW
}