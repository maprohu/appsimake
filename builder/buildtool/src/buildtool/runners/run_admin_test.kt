package buildtool.runners

import buildtool.*

fun main() = runTask {
    fns.indexJs
    admin.testHtml
    admin.testSW
}