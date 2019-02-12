package commonui.widget

import commonshr.actor
import killable.Killables
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.cancelAndJoin
import kotlin.coroutines.CoroutineContext


interface State {
    fun redisplay()
}
class Station<T: State>(
    val parent: Station<*>?,
    state: T
): CoroutineScope {
    override val coroutineContext: Job = Job(parent?.coroutineContext)
    val exec = actor(state)
    val kills = Killables().apply {
        coroutineContext.invokeOnCompletion { kill() }
    }.killSet
    var next : Station<*>? = null

    fun redisplay() = exec {
        next?.let { n ->
            n.coroutineContext.cancelAndJoin()
            next = null
            redisplay()
        }
    }

    fun back() = exec {
        parent?.redisplay()
    }
}