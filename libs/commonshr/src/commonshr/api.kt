package commonshr

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import common.*
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.*
import rx.*

interface Api
inline val <T: Api> T.api get() = this

interface KillsApi: Api, HasKills {

    fun <T> rx(fn: KillsApi.() -> T) = Rx(kills, fn)
    fun <T> rx(killFirst: Boolean, fn: KillsApi.() -> T) = Rx(kills, killFirst, fn)
    fun <T> RxIface<T>.forEach(fn: KillsApi.(T) -> Unit) = forEach(kills, fn)
    fun RxIface<Boolean>.forEachTrue(fn: KillsApi.() -> Unit) = forEachTrue(api, fn)
    fun <T: Any> RxIface<T?>.forEachNonNull(fn: KillsApi.(T) -> Unit) = forEachNonNull(api, fn)
    fun <T> RxIface<T>.forEachLater(fn: KillsApi.(T) -> Unit) = forEachLater(kills, fn)
    fun <T> RxIface<T>.forEach(killOrder: KillOrder, fn: KillsApi.(T) -> Unit) = forEach(kills, killOrder, fn)
    fun <T, S> RxIface<T>.map(fn: KillsApi.(T) -> S) = map(kills, fn)
    fun <T> RxIface<T>.onChange(fn: KillsApi.(old: T /* old */, new: T /* new */) -> Unit) = onChange(kills, fn)
    fun Element.rxClass(fn: KillsApi.() -> String) = rxClass(kills, fn)
    fun Element.rxClass(stl: String, fn: KillsApi.() -> Boolean) = rxClass(api, stl, fn)
    fun <E> RxSet<E>.filtered(fn: KillsApi.(E) -> Boolean) = filtered(kills, fn)
    fun Var<Int>.incremented() = incremented(api)
    fun <T> RxIface<T>.feedTo(target: Var<T>) = feedTo(api, target)
    fun <T> Assign<T>.rx(fn: () -> T) = rx(api, fn)
    operator fun <T> Assign<T>.remAssign(fn: () -> T) { rx(fn) }
    fun <T> Assign<T>.rx(fn: RxIface<T>) = rx(api, fn)
    operator fun <T> Assign<T>.remAssign(fn: RxIface<T>) { rx(fn) }
    val <T: HasKill, V: RxIface<T>> V.oldKilled get() = oldKilled(api)
    val <T: HasKill, V: RxIface<T?>> V.oldKilledOpt get() = oldKilledOpt(api)

    fun <T, S> Var<T>.linked(
        read: (T) -> S,
        write: (S) -> T
    ) = linked(api, read, write)

    operator fun HTMLElement.remAssign(fn: () -> String) {
        rx { fn() }.forEach { this@remAssign.innerText = it }
    }

    fun <E> RxSet<E>.containsRx(value: E) = containsRx(kills, value)
    fun <E> RxSet<E>.process(fn: KillsApi.(E) -> Unit): Unit = process(kills, fn)
    fun <E> RxSet<E>.anyRx(fn: KillsApi.(E) -> Boolean) = anyRx(api, fn)

    fun <T> EmitterIface<SetMove<T>>.toRxSet() = toRxSet(kills)
    fun <T> RxIface<T>.toChannelLater() = toChannelLater(api)
    fun <T> RxIface<T>.toChannel() = toChannel(api)

    fun <T, S> ReceiveChannel<ListEvent<T>>.mapLive(
        fn: suspend KillsApi.(T) -> S
    ) = mapLive(api, fn)

    fun <T> EmitterFn<T>.listen(callback: (T) -> Unit) = listen(api, callback)
    operator fun <T> EmitterFn<T>.plusAssign(fn: (T) -> Unit) { listen(fn) }


//    operator fun Slot.remAssign(fn: RxIface<Node?>) {
//        fn.forEach { this@remAssign %= it }
//    }
//    operator fun Slot.remAssign(fn: KillsApi.() -> Node?) {
//        rx { fn() }.forEach { this@remAssign %= it }
//    }
}

interface CsApi: Api, CoroutineScope {

    fun <T> ReceiveChannel<T>.toRx(initial: T) = toRx(api, initial)
    fun <T> ReceiveChannel<ListEvent<T>>.toRxSet() = toRxSet(api)

}

interface CsKillsApi: HasCsKills, CsApi, KillsApi {

    fun <T> RxList<T>.events() = events(api)
    val <T> RxList<FsDoc<T>>.ids get() = ids(api)
    fun <T> ReceiveChannel<ListEvent<T>>.filter(fn: KillsApi.(T) -> Boolean) = filter(api, fn)

    fun <T> ReceiveChannel<ListEvent<T>>.process(fn: suspend KillsApi.(T) -> Unit) = process(api, fn)
}



//interface JobScope: CoroutineScope {
//    override val coroutineContext: Job
//}
