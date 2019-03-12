package commonshr

import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ClosedSendChannelException
import kotlinx.coroutines.channels.SendChannel
import kotlinx.coroutines.channels.consumeEach
import rx.RxIface
import rx.Var
import kotlin.coroutines.CoroutineContext

operator fun <T> SendChannel<T>.plusAssign(msg: T) { this.offer(msg) }
suspend operator fun <T> SendChannel<T>.timesAssign(msg: T) { this.send(msg) }

typealias Runner = (Trigger) -> Unit
typealias Action = suspend () -> Unit
typealias Exec = (Action) -> Unit
//interface ExecT {
//    operator fun <T> invoke(action: suspend () -> T): Deferred<T>
//}
interface HasExec {
    val exec: Exec
}

class RxExec(
    val pending: RxIface<Int>,
    val exec: Exec
)
val Exec.withCounter: RxExec get() {
    val pending = Var(0)

    return RxExec(pending) { action ->
        pending.transform { it + 1 }
        invoke {
            try {
                action()
            } finally {
                pending.transform { it - 1 }
            }
        }
    }
}
fun CoroutineScope.discardExecutor(): Exec {
    val channel = Channel<Action>(Channel.UNLIMITED)

    launch {
        for (action in channel) {
            action()
        }
    }

    return  { action ->
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

fun CoroutineScope.launchNonCancellable(fn: Action) = launch(NonCancellable) { fn() }

