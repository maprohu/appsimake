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

fun CoroutineScope.executor(): Exec {
    val channel = Channel<Action>(Channel.UNLIMITED)

    launch {
        channel.consumeEach { it() }
    }

    return { channel += it }
}

typealias ActorAction<T> = suspend T.() -> Unit
typealias ActorFn<T> = (ActorAction<T>) -> Unit

fun <T> CoroutineScope.actor(state: T): ActorFn<T> {
    val exec = exec()
    return { fn ->
        exec {
            state.fn()
        }
    }
}
