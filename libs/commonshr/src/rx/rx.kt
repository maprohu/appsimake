package rx

import common.None
import common.Optional
import common.Some
import commonshr.*
import killable.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch
import org.w3c.dom.Element
import org.w3c.dom.GlobalEventHandlers
import kotlin.dom.addClass
import kotlin.dom.removeClass

private var currentChild : RxChild? = null
private val affected = mutableListOf<RxVal<*>>()

abstract class RxChild {
    var parents = listOf<RxParent>()
    abstract fun recalc()

    fun disconnectAll() {
        parents.forEach { it.children -= this }
        parents = listOf()
    }
}

class RxCalc<T>(
        private val fn: () -> T
) : RxChild() {
    lateinit var rx: Rx<T>

    override fun recalc() {
        rx.setCurrentValue(recalcValue())
    }

    fun recalcValue() : T {
        disconnectAll()

        val savedCurrent = currentChild
        currentChild = this
        try {
            return fn()
        } finally {
            currentChild = savedCurrent
        }
    }
}


abstract class RxParent {
    var children = listOf<RxChild>()

    fun recalcChildren() {
        children.forEach { it.recalc() }
    }
}

fun connect(parent: RxParent, child: RxChild) {
    if (child !in parent.children) {
        parent.children += child
        child.parents += parent
    }
}


class Obs<T>(
        private val parent: RxVal<T>,
        private val fn: (T) -> Unit
) : Killable {

    override fun kill() {
        parent.observers.remove(this)
    }

    fun fire() {
        fn(parent.now)
    }

}

interface RxIface<out T> {

    val now : T

    operator fun invoke(): T

    fun forEach(fn: (T) -> Unit) : Killable {
        fn(now)
        return forEachLater(fn)
    }

    fun forEachLater(fn: (T) -> Unit) : Killable

    fun <F> fold(z0: F, fn: (F, T) -> F) : Killable {
        var z = z0

        return forEach {
            z = fn(z, it)
        }
    }

    fun foldKillsTrigger(fn: (T) -> Trigger) : Trigger {
        var z = {}

        val fe = forEach {
            z()
            z = fn(it)
        }

        return {
            fe()
            z()
        }
    }

    fun foldKills(fn: (T) -> Killable) : Killable {
        var z = Killable.empty

        val fe = forEach {
            z.kill()
            z = fn(it)
        }

        return Killable.once {
            fe.kill()
            z.kill()
        }
    }

    fun <F: Killable> foldKills(z0: F, fn: (F, T) -> F) : Killable {
        var z = z0

        val fe = forEach {
            z = fn(z, it)
        }

        return Killable.once {
            fe.kill()
            z.kill()
        }
    }


    fun <F> folded(z0: F, fn: (F, T) -> F) : RxIfaceKillable<F> {
        return object : Var<F>(z0), RxIfaceKillable<F> {
            val killable = this@RxIface.forEach {
                now = fn(now, it)
            }

            override fun kill() {
                killable.kill()
            }
        }
    }

    fun <F> foldLater(z0: F, fn: (F, T) -> F) : Killable {
        var z = z0

        return forEachLater {
            z = fn(z, it)
        }
    }

    fun onChange(fn: (old: T /* old */, new: T /* new */) -> Unit) : Killable {
        return foldLater(now) { old, new ->
            fn(old, new)
            new
        }
    }

    fun onOff(
            on: (T) -> Unit,
            off: (T) -> Unit
    ) : Killable {
        on(now)
        return onChange { old, new ->
            off(old)
            on(new)
        }
    }

    fun off(
            offFn: (T) -> Unit
    ) : Killable {
        return onChange { old, _ ->
            offFn(old)
        }
    }


}

fun <T> RxIface<T>.feedTo(ks: KillSet, target: Var<T>) {
    forEach { target.now = it }.addedTo(ks)
}

fun RxIface<Int>.feedTo(rxv: Var<Int>): Killable {
    return fold(0) { old, new ->
        rxv.transform { it + new - old }
        new
    } + Killable.once {
        rxv.transform { it - now }
    }
}
fun RxIface<Int>.feedTo(rxv: Var<Long>): Killable {
    return fold(0) { old, new ->
        rxv.transform { it + new - old }
        new
    } + Killable.once {
        rxv.transform { it - now }
    }
}
fun RxIface<Long>.feedTo(rxv: Var<Long>): Killable {
    return fold(0L) { old, new ->
        rxv.transform { it + new - old }
        new
    } + Killable.once {
        rxv.transform { it - now }
    }
}
fun RxIface<Double>.feedTo(rxv: Var<Double>): Killable {
    return fold(0.0) { old, new ->
        rxv.transform { it + new - old }
        new
    } + Killable.once {
        rxv.transform { it - now }
    }
}

fun <T> RxIface<Optional<T>>.orDefault(v: T) = Rx { this().getOrDefault(v) }

fun Var<Int>.incremented(): Killable {
    transform { it + 1 }
    return Killable.once {
        transform { it - 1 }
    }
}




abstract class RxVal<T>(
        protected var currentValue: T
) : RxParent(), RxIface<T> {
    private var oldValue: T = currentValue

    internal val observers = mutableListOf<Obs<T>>()

    override val now : T
        get() = currentValue

    override operator fun invoke(): T {
        connect(this, currentChild!!)
        return currentValue
    }

    internal fun setCurrentValue(v: T) {
        if (oldValue != v) {
            affected.add(this)
        } else {
            affected.remove(this)
        }

        if (currentValue != v) {
            currentValue = v
            recalcChildren()
        }
    }

    internal fun clearDirty() {
        oldValue = currentValue
    }


    override fun forEachLater(fn: (T) -> Unit) : Killable {
        val obs = Obs(this, fn)
        observers += obs
        return obs
    }


}



fun <T : Killable> RxVal<T>.killOld() : Killable {
    return off { it.kill() }
}

fun <T> Var<Optional<Set<T>>>.add(v: T) {
    transform { c -> c.map { it + v }.orElse { Some(setOf(v)) } }
}
fun <T> Var<Optional<Set<T>>>.remove(v: T) {
    transform { c -> c.map { it - v } }
}
fun <T> RxIface<Optional<Set<T>>>.diffs(fn: (SetDiff<T>) -> Unit): Killable {
    fn(SetDiff.of(None, now))
    return onChange { old, new ->
        fn(SetDiff.of(old, new))
    }
}

interface RxIfaceKillable<T> : RxIface<T>, Killable

class Rx<T> private constructor(
        currentValue: T,
        private val calc: RxCalc<T>
) : RxVal<T>(currentValue), RxIfaceKillable<T> {
    init {
        calc.rx = this
    }

    constructor(
            calc: RxCalc<T>
    ) : this(calc.recalcValue(), calc)

    constructor(
            fn: () -> T
    ) : this(RxCalc(fn))

    override fun kill() {
        calc.disconnectAll()
    }

}

open class Var<T>(
        v: T
) : RxVal<T>(v) {

    fun setValue(value: T) {
        setCurrentValue(value)

        val observers = mutableListOf<Obs<*>>()

        affected.forEach { rxv ->
            rxv.observers.forEach { obs ->
                if (obs !in observers) {
                    observers += obs
                }
            }
            rxv.clearDirty()
        }
        affected.clear()

        observers.forEach { it.fire() }
    }

    override var now : T
        get() = super.now
        set(value) { setValue(value) }

    fun transform(fn: (T) -> T) { now = fn(now) }
}

fun Var<Int>.increase() = transform { it + 1 }
fun Var<Int>.decrease() = transform { it - 1 }


fun <T> RxIface<Optional<T>>.get() = now.get()
fun <T> Var<Optional<T>>.set(v: T) {
    now = Some(v)
}

fun Element.rxClass(
    style: () -> String
) : Killable {
    val rxv = Rx(style)
    rxClass(rxv)
    return rxv
}


fun Element.rxClass(
        style: RxVal<String>
) : Killable {
    return style.onOff(
            { addClass(it) },
            { removeClass(it) }
    )
}

fun GlobalEventHandlers.rxHover(rx: Var<Boolean>) {
    onmouseenter = { rx.now = true; null }
    onmouseleave = { rx.now = false; null }
}

fun Element.rxClass(
    style: String,
    fn: RxIface<Boolean>
) : Killable {
    return fn.forEach {
        if (it) addClass(style)
        else removeClass(style)
    }
}

fun Element.rxClass(
    style: String,
    fn: () -> Boolean
) : Killable {
    val rxv = Rx { fn() }
    rxClass(style, rxv)
    return rxv
}

fun Element.rxClassOpt(
        style: RxVal<String?>
) : Killable {
    return style.onOff(
            { it?.let { c -> addClass(c) } },
            { it?.let { c -> removeClass(c) } }
    )
}

fun <T> (() -> T).toRx() = Rx(this)

fun Element.rxClasses(
    style: () -> Collection<String>
) : Killable  = rxClasses(style.toRx())

fun Element.rxClasses(
        style: RxIface<Collection<String>>
) : Killable {
    return style.onOff(
            { addClass(*it.toTypedArray()) },
            { removeClass(*it.toTypedArray()) }
    )
}

fun <T> RxIface<T>.toChannel(ks: KillSet): ReceiveChannel<T> {
    val ch = Channel<T>(Channel.UNLIMITED)
    ks += { ch.close() }
    forEach { t -> ch.offer(t) }.addedTo(ks)
    return ch
}
fun <T> RxIface<T>.toChannelLater(ks: KillSet): ReceiveChannel<T> {
    val ch = Channel<T>(Channel.UNLIMITED)
    ks += { ch.close() }
    forEachLater { t -> ch.offer(t) }.addedTo(ks)
    return ch
}

suspend fun <T, S> RxIface<T>.mapAsync(
    ks: KillSet,
    fn: suspend (T, KillSet) -> S
): RxIface<S> {
    val kseq = ks.seq()

    suspend fun calc(t: T): S = fn(t, kseq.killSet())

    val rxv = Var(calc(now))
    val ch = toChannelLater(ks)

    GlobalScope.launch {
        for (t in ch) {
            rxv.now = calc(t)
        }
    }.addedTo(ks)

    return rxv
}

fun <T> KillSet.rx(fn: () -> T): RxIface<T> = Rx(fn).addedTo(this)
fun <T> T.toVar() = Var(this)