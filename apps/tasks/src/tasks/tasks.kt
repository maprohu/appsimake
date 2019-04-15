package tasks

import commonfb.FbLinksFactory
import taskslib.tasksLib

fun main() {
    FbLinksFactory.start(tasksLib) { Links(it) }
}


