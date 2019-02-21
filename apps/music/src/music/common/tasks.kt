package music.common

import commonfb.CommonFbApi
import commonui.widget.Factory
import bootstrap.*
import commonshr.*
import killable.HasKillSet
import music.boot.Boot

fun HasKillSet.tasksUi(
    factory: Factory,
    boot: Boot
) = tasksUi(factory) { boot.tasks.pending() }

fun HasKillSet.tasksUi(
    factory: Factory,
    fn: () -> Int
) = factory.badge {
    visible { fn() != 0 }
    cls.m1
    pill
    warning
    node %= { fn().toString() }
}
