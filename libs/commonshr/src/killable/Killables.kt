package killable

import common.EmitterIface
import common.toRxSet
import commonshr.*
import kotlinx.coroutines.Job
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import rx.*

typealias KillSet = AddRemove<Trigger>

val Noop: Trigger = {}
val NoKill : KillSet = { Noop }

object HasNoKill: HasKillSet {
    override val kills = NoKill
}

fun Job.addedTo(ks: KillSet): Job {
    val remove = ks.add { cancel() }
    invokeOnCompletion {
        remove()
    }
    return this
}

fun KillSet.add(killable: Trigger): Trigger = this(killable)
fun KillSet.killables() = Killables().also { it += add(it.kill) }
fun KillSet.seq() = KillableSeq().also { it.onKill += add(it.kill) }

fun Trigger.addedTo(ks: KillSet) = apply { ks += this }

class Killables: HasKillSet {

    val killSet: KillSet = ::add
    override val kills = killSet

    @Suppress("NOTHING_TO_INLINE")
    inline fun toKillSet() = killSet

    protected var list = listOf<Trigger>()

    operator fun plusAssign(listener: Trigger) { add(listener) }

    fun add(listener: Trigger): Trigger {
        if (listener == Noop) {
            return Noop
        }

        return if (!killed) {
            list += listener

            { list -= listener }.once()
        } else {
            listener()

            Noop
        }
    }

    private var killed = false

    val kill: Trigger = {
        if (!killed) {
            killed = true
            val l = list
            list = listOf()
            l.forEach { it() }
        }
    }


    fun killables() = toKillSet().killables()
    fun seq() = KillableSeq().also { it.onKill += add(it.kill) }

}

interface HasKillSet {
    val kills: KillSet

    fun <T> rx(fn: HasKillSet.() -> T) = Rx(kills, fn)
    fun <T> rx(killFirst: Boolean, fn: HasKillSet.() -> T) = Rx(kills, killFirst, fn)
    fun <T> RxIface<T>.forEach(fn: HasKillSet.(T) -> Unit) = forEach(kills, fn)
    fun <T> RxIface<T>.forEach(killOrder: KillOrder, fn: HasKillSet.(T) -> Unit) = forEach(kills, killOrder, fn)
    fun <T, S> RxIface<T>.map(fn: HasKillSet.(T) -> S) = map(kills, fn)
    fun <T> RxIface<T>.onChange(fn: HasKillSet.(old: T /* old */, new: T /* new */) -> Unit) = onChange(kills, fn)
    fun Element.rxClass(fn: HasKillSet.() -> String) = rxClass(kills, fn)
    fun Element.rxClass(stl: String, fn: HasKillSet.() -> Boolean) = rxClass(kills, stl, fn)
    fun <E> RxSet<E>.filtered(fn: HasKillSet.(E) -> Boolean) = filtered(kills, fn)

    operator fun HTMLElement.remAssign(fn: () -> String) {
        rx { fn() }.forEach { this@remAssign.innerText = it }
    }

    fun <E> RxSet<E>.containsRx(value: E) = containsRx(kills, value)
    fun <E> RxSet<E>.process(fn: HasKillSet.(E) -> Unit): Unit = process(kills, fn)

    fun <T> EmitterIface<SetMove<T>>.toRxSet() = toRxSet(kills)
    fun <T> RxIface<T>.toChannelLater() = toChannelLater(kills)

}

class WrapKillSet(
    override val kills: KillSet
): HasKillSet, InvokeApply
val KillSet.wrap get() = WrapKillSet(this)
