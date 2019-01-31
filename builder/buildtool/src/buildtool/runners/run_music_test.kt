package buildtool.runners

import buildtool.*

fun main(args: Array<String>) = runTask {
    fns.indexJs
    music.testHtml
    music.testSW
}