package commonshr

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.SendChannel
import kotlinx.coroutines.channels.consumeEach
import kotlinx.coroutines.launch
import kotlin.coroutines.CoroutineContext

operator fun <T> SendChannel<T>.plusAssign(msg: T) { this.offer(msg) }

typealias Action = suspend () -> Unit
typealias Exec = (Action) -> Unit
interface HasExec {
    val exec: Exec
}

fun CoroutineScope.exec(): Exec {
    val channel = Channel<Action>(Channel.UNLIMITED)

    launch {
        channel.consumeEach { it() }
    }

    return { channel += it }
}

typealias ActorFn<T> = (suspend T.() -> Unit) -> Unit
fun <T> CoroutineScope.actor(state: T): ActorFn<T> {
    val exec = exec()
    return { fn ->
        exec {
            state.fn()
        }
    }
}
