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
) = factory.badge {
    visible { boot.tasks.pending() != 0 }
    cls.m1
    pill
    warning
    node %= { boot.tasks.pending().toString() }
}
