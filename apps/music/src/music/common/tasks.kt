package music.common

import commonui.widget.Factory
import bootstrap.*
import commonshr.*
import commonshr.KillsApi
import music.boot.Boot

fun KillsApi.tasksUi(
    factory: Factory,
    boot: Boot
) = tasksUi(factory) { boot.tasks.pending() }

fun KillsApi.tasksUi(
    factory: Factory,
    fn: () -> Int
) = factory.badge {
    visible { fn() != 0 }
    cls.m1
    pill
    warning
    node %= { fn().toString() }
}
