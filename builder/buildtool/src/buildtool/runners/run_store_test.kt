package buildtool.runners

import buildtool.*

fun main() = runTask {
    fns.indexJs
    store.testHtml
    store.testSW
}