package buildtool.runners

import buildtool.gymclock
import buildtool.runTask

fun main() = runTask {
    gymclock.testHtml
    gymclock.testSW
}