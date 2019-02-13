package commonui.widget

import commonshr.*
import killable.HasKillSet
import killable.Killables
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.cancelAndJoin

open class BindBase(
    station: Station
) {
    val exec: Exec = { station.exec(it) }
}

class Switch<T: Station?>(
    val owner: Station,
    initial: T
) {
    var current : T = initial


    suspend fun switchNowTo(fn: () -> T) {
        current?.coroutineContext?.cancelAndJoin()
        current = fn()
    }
    fun switchTo(fn: () -> T) = owner.exec {
        switchNowTo(fn)
    }
}
suspend fun <T: Station> Switch<T?>.redisplayNow() {
    current?.let { n ->
        n.coroutineContext.cancelAndJoin()
        current = null
        owner.show()
    }
}
fun <T: Station> Switch<T?>.redisplay() = owner.exec {
    redisplayNow()
}
val <T: Station> Switch<T?>.uix : Exec get() = { action ->
    owner.exec {
        if (current == null)  {
            action()
        }
    }
}

abstract class Station(
    val parent: Switch<*>?
): CoroutineScope, HasKillSet {
    override val coroutineContext: Job = Job(parent?.owner?.coroutineContext)
    val exec = executor()
    override val kills = Killables().apply {
        coroutineContext.invokeOnCompletion { kill() }
    }.killSet

    fun <T: Station?> switchOpt(initial: T) = Switch(this, initial)
    fun <T: Station> switchOpt() = Switch<T?>(this, null)
    fun <T: Station> switch(initial: T) = Switch(this, initial)

    fun stations(initial: Station) = Switch(this, initial)
    val stations get() = Switch<Station?>(this, null)
    fun stationsOpt(initial: Station?) = Switch(this, initial)

    abstract val show : Trigger

    init {
        exec {
            show()
        }
    }


    fun back() = exec {
        parent?.redisplay()
    }


}