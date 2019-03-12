package rx


import commonshr.HasCsKills
import commonshr.KillsApi
import killable.seq
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch

fun <T> ReceiveChannel<T>.toRx(deps: CoroutineScope, initial: T): RxIface<T> {
    val rxv = Var(initial)

    deps.launch {
        for (t in this@toRx) {
            rxv %= t
        }
    }

    return rxv
}

suspend fun <T, S> RxIface<T>.mapAsync(
    deps: HasCsKills,
    fn: suspend KillsApi.(T) -> S
): RxIface<S> {
    val kseq = deps.kills.seq()

    suspend fun calc(t: T): S = kseq.killables().fn(t)

    val rxv = Var(calc(now))
    val ch = toChannelLater(deps)

    deps.launch {
        for (t in ch) {
            rxv.now = calc(t)
        }
    }

    return rxv
}
