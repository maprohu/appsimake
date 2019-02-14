package commonshr

import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ClosedSendChannelException
import kotlinx.coroutines.channels.SendChannel
import kotlinx.coroutines.channels.consumeEach
import kotlin.coroutines.CoroutineContext

operator fun <T> SendChannel<T>.plusAssign(msg: T) { this.offer(msg) }

typealias Action = suspend () -> Unit
typealias Exec = (Action) -> Unit
interface HasExec {
    val exec: Exec
}

fun CoroutineScope.discardExecutor(): Exec {
    val channel = Channel<Action>(Channel.UNLIMITED)

    launch {
        for (action in channel) {
            action()
        }
    }

    return { action ->
        try {
            channel += action
        } catch (e: ClosedSendChannelException) {}
    }
}
fun CoroutineScope.executor(): Exec {
    val channel = Channel<Action>(Channel.UNLIMITED)

    val job = GlobalScope.launch {
        for (action in channel) {
            action()
        }
    }

    launch {
        try {
            CompletableDeferred<Unit>().await()
        } finally {
            withContext(NonCancellable) {
                channel.close()
                job.join()
            }
        }
    }

    return { action ->
        try {
            channel += action
        } catch (e: ClosedSendChannelException) {}
    }
}

