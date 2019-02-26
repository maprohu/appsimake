package buildtool.runners

import buildtool.*

fun main() = runTask {
    fns.indexJs
    download.testHtml
    download.testSW
}