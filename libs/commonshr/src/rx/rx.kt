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
import org.w3c.dom.events.KeyboardEventInit
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
    ks: KillSet,
    private val parent: RxVal<T>,
    private val fn: (T) -> Unit
) {

    init {
        ks += {
            parent.observers.remove(this)
        }
    }

    fun fire() {
        fn(parent.now)
    }

}

interface RxIface<out T> {

    val now : T

    operator fun invoke(): T

    fun forEach(ks: KillSet, fn: (T) -> Unit) {
        fn(now)
        return forEachLater(ks, fn)
    }

    fun forEachLater(ks: KillSet, fn: (T) -> Unit)

    fun <F> fold(ks: KillSet, z0: F, fn: (F, T) -> F) {
        var z = z0

        return forEach(ks) {
            z = fn(z, it)
        }
    }

    fun foldKillsTrigger(ks: KillSet, fn: (T) -> Trigger) {
        var z = {}

        forEach(ks) {
            z()
            z = fn(it)
        }

        ks += { z() }
    }

    fun foldKills(ks: KillSet, fn: (T) -> Trigger) {
        var z = Noop

        forEach(ks) {
            z()
            z = fn(it)
        }

        ks += { z() }
    }

    fun <F> foldKills(ks: KillSet, z0: KillableValue<F>, fn: (KillableValue<F>, T) -> KillableValue<F>) {
        var z = z0

        forEach(ks) {
            z = fn(z, it)
        }

        ks += { z.kill() }
    }


//    fun <F> folded(z0: F, fn: (F, T) -> F) : RxIfaceKillable<F> {
//        return object : Var<F>(z0), RxIfaceKillable<F> {
//            val killable = this@RxIface.forEach {
//                now = fn(now, it)
//            }
//
//            override fun kill() {
//                killable.kill()
//            }
//        }
//    }

    fun <F> foldLater(ks: KillSet, z0: F, fn: (F, T) -> F) {
        var z = z0

        forEachLater(ks) {
            z = fn(z, it)
        }
    }

    fun onChange(ks: KillSet, fn: (old: T /* old */, new: T /* new */) -> Unit) {
        return foldLater(ks, now) { old, new ->
            fn(old, new)
            new
        }
    }

    fun onOff(
            ks: KillSet,
            on: (T) -> Unit,
            off: (T) -> Unit
    ) {
        on(now)
        onChange(ks) { old, new ->
            off(old)
            on(new)
        }
    }

    fun off(
        ks: KillSet,
        offFn: (T) -> Unit
    )  {
        onChange(ks) { old, _ ->
            offFn(old)
        }
    }


}

fun <T> RxIface<T>.feedTo(ks: KillSet, target: Var<T>) {
    forEach(ks) { target.now = it }
}

fun RxIface<Int>.feedTo(ks: KillSet, rxv: Var<Int>) {
    fold(ks, 0) { old, new ->
        rxv.transform { it + new - old }
        new
    }
    ks += {
        rxv.transform { it - now }
    }
}
fun RxIface<Int>.feedTo(ks: KillSet, rxv: Var<Long>) {
    fold(ks, 0) { old, new ->
        rxv.transform { it + new - old }
        new
    }
    ks += {
        rxv.transform { it - now }
    }
}
fun RxIface<Long>.feedTo(ks: KillSet, rxv: Var<Long>) {
    fold(ks, 0L) { old, new ->
        rxv.transform { it + new - old }
        new
    }
    ks += {
        rxv.transform { it - now }
    }
}
fun RxIface<Double>.feedTo(ks: KillSet, rxv: Var<Double>) {
    fold(ks, 0.0) { old, new ->
        rxv.transform { it + new - old }
        new
    }
    ks += {
        rxv.transform { it - now }
    }
}

fun <T> RxIface<Optional<T>>.orDefault(ks: KillSet, v: T) = Rx(ks) { this().getOrDefault(v) }

fun Var<Int>.incremented(): Trigger {
    transform { it + 1 }
    return {
        transform { it - 1 }
    }.once()
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


    override fun forEachLater(ks: KillSet, fn: (T) -> Unit) {
        val obs = Obs(ks, this, fn)
        observers += obs
    }


}



fun <T> RxVal<KillableValue<T>>.killOld(ks: KillSet){
    return off(ks) { it.kill() }
}

fun <T> Var<Optional<Set<T>>>.add(v: T) {
    transform { c -> c.map { it + v }.orElse { Some(setOf(v)) } }
}
fun <T> Var<Optional<Set<T>>>.remove(v: T) {
    transform { c -> c.map { it - v } }
}
fun <T> RxIface<Optional<Set<T>>>.diffs(ks: KillSet, fn: (SetDiff<T>) -> Unit) {
    fn(SetDiff.of(None, now))
    return onChange(ks) { old, new ->
        fn(SetDiff.of(old, new))
    }
}

class Rx<T> private constructor(
    ks: KillSet,
    currentValue: T,
    private val calc: RxCalc<T>
) : RxVal<T>(currentValue), RxIface<T> {
    init {
        calc.rx = this
        ks += {
            calc.disconnectAll()
        }
    }

    constructor(
        ks: KillSet,
        calc: RxCalc<T>
    ) : this(ks, calc.recalcValue(), calc)

    constructor(
        ks: KillSet,
        fn: () -> T
    ) : this(ks, RxCalc(fn))

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
    ks: KillSet,
    style: () -> String
)  {
    val rxv = Rx(ks, style)
    rxClass(ks, rxv)
}


fun Element.rxClass(
    ks: KillSet,
    style: RxVal<String>
) {
    return style.onOff(
        ks,
        { addClass(it) },
        { removeClass(it) }
    )
}

fun GlobalEventHandlers.rxHover(rx: Var<Boolean>) {
    onmouseenter = { rx.now = true; null }
    onmouseleave = { rx.now = false; null }
}

fun Element.rxClass(
    ks: KillSet,
    style: String,
    fn: RxIface<Boolean>
) {
    fn.forEach(ks) {
        if (it) addClass(style)
        else removeClass(style)
    }
}

fun Element.rxClass(
    ks: KillSet,
    style: String,
    fn: () -> Boolean
)  {
    val rxv = Rx(ks) { fn() }
    rxClass(ks, style, rxv)
}

fun Element.rxClassOpt(
    ks: KillSet,
    style: RxVal<String?>
) {
    style.onOff(
        ks,
        { it?.let { c -> addClass(c) } },
        { it?.let { c -> removeClass(c) } }
    )
}

fun <T> (() -> T).toRx(ks: KillSet) = Rx(ks, this)

fun Element.rxClasses(
    ks: KillSet,
    style: () -> Collection<String>
) = rxClasses(ks, style.toRx(ks))

fun Element.rxClasses(
    ks: KillSet,
    style: RxIface<Collection<String>>
) {
    style.onOff(
        ks,
        { addClass(*it.toTypedArray()) },
        { removeClass(*it.toTypedArray()) }
    )
}

fun <T> RxIface<T>.toChannel(ks: KillSet): ReceiveChannel<T> {
    val ch = Channel<T>(Channel.UNLIMITED)
    ks += { ch.close() }
    forEach(ks) { t -> ch.offer(t) }
    return ch
}
fun <T> RxIface<T>.toChannelLater(ks: KillSet): ReceiveChannel<T> {
    val ch = Channel<T>(Channel.UNLIMITED)
    ks += { ch.close() }
    forEachLater(ks) { t -> ch.offer(t) }
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

fun <T> KillSet.rx(fn: () -> T): RxIface<T> = Rx(this, fn)
fun <T> T.toVar() = Var(this)