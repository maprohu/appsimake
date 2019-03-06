package rx


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