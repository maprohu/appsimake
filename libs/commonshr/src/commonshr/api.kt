package commonshr

import commonshr.KillsApi
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import common.*
import commonshr.*
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.*
import rx.*

interface Api
inline val <T: Api> T.api get() = this

interface KillsApi: Api, HasKills {

    fun <T> rx(fn: KillsApi.() -> T) = Rx(kills, fn)
    fun <T> rx(killFirst: Boolean, fn: KillsApi.() -> T) = Rx(kills, killFirst, fn)
    fun <T> RxIface<T>.forEach(fn: KillsApi.(T) -> Unit) = forEach(kills, fn)
    fun <T> RxIface<T>.forEach(killOrder: KillOrder, fn: KillsApi.(T) -> Unit) = forEach(kills, killOrder, fn)
    fun <T, S> RxIface<T>.map(fn: KillsApi.(T) -> S) = map(kills, fn)
    fun <T> RxIface<T>.onChange(fn: KillsApi.(old: T /* old */, new: T /* new */) -> Unit) = onChange(kills, fn)
    fun Element.rxClass(fn: KillsApi.() -> String) = rxClass(kills, fn)
    fun Element.rxClass(stl: String, fn: KillsApi.() -> Boolean) = rxClass(kills, stl, fn)
    fun <E> RxSet<E>.filtered(fn: KillsApi.(E) -> Boolean) = filtered(kills, fn)

    operator fun HTMLElement.remAssign(fn: () -> String) {
        rx { fn() }.forEach { this@remAssign.innerText = it }
    }

    fun <E> RxSet<E>.containsRx(value: E) = containsRx(kills, value)
    fun <E> RxSet<E>.process(fn: KillsApi.(E) -> Unit): Unit = process(kills, fn)

    fun <T> EmitterIface<SetMove<T>>.toRxSet() = toRxSet(kills)
    fun <T> RxIface<T>.toChannelLater() = toChannelLater(kills)

    fun <T, S> ReceiveChannel<ListEvent<T>>.map(
        fn: suspend KillsApi.(T) -> S
    ) = map(api, fn)
}

interface CsApi: Api, CoroutineScope {

    fun <T> ReceiveChannel<T>.toRx(initial: T) = toRx(api, initial)

}

interface CsKillsApi: HasCsKills, CsApi, KillsApi



interface JobScope: CoroutineScope {
    override val coroutineContext: Job
}
