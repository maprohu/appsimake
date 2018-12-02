package buildtool.runners

import buildtool.gymclock
import buildtool.runTask

fun main(args: Array<String>) = runTask {
    gymclock.testHtml
}