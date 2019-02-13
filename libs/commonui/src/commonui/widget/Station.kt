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
    val ui: Exec = { station.ui(it) }
}

abstract class Station(
    val parent: Station?
): CoroutineScope, HasKillSet {
    override val coroutineContext: Job = Job(parent?.coroutineContext)
    val exec = executor()
    override val kills = Killables().apply {
        coroutineContext.invokeOnCompletion { kill() }
    }.killSet
    var next : Station? = null

    fun ui(action: Action) {
        exec {
            if (next == null)  {
                action()
            }
        }
    }

    abstract val show : Trigger

    init {
        ui {
            show()
        }
    }

    suspend fun redisplayNow() {
        next?.let { n ->
            n.coroutineContext.cancelAndJoin()
            next = null
            show()
        }
    }
    fun redisplay() = exec {
        redisplayNow()
    }

    fun back() = exec {
        parent?.redisplay()
    }

    suspend fun forwardNow(fn: () -> Station) {
        next?.let { n ->
            n.coroutineContext.cancelAndJoin()
        }
        next = fn()
    }
    fun forward(fn: () -> Station) = exec {
        forwardNow(fn)
    }

}