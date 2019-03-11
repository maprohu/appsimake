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
import rx.RxCalc.Companion.KillFirst
import rx.RxCalc.Companion.KillLast
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


typealias KillOrder = (process: Trigger, kill: Trigger) -> Unit

class RxCalc<T>(
    ks: KillSet,
    private val fn: KillsApi.() -> T,
    val killOrder: KillOrder = KillFirst
) : RxChild() {

    companion object {
        val KillFirst: KillOrder = { process, kill ->
            kill()
            process()
        }
        val KillLast: KillOrder = { process, kill ->
            process()
            kill()
        }

    }
    lateinit var rx: Rx<T>

    override fun recalc() {
//        rx.setCurrentValue(recalcValue())

        val kv = recalcValue()

        killOrder(
            {
                rx.setCurrentValue(kv.value)
            },
            kv.kill
        )
    }

    private val kseq = ks.seq()
    fun recalcValue() : KillableValue<T> {
//    fun recalcValue() : T {
        disconnectAll()

        val savedCurrent = currentChild
        currentChild = this
        try {
//            return kseq.killables().fn()
            return Killables().let { cks ->
                KillableValue(cks.fn()) {
                    kseq %= cks.kill
                }
            }
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
    killStart: Trigger = {},
    val killOrder: KillOrder = KillFirst,
    private val fn: KillsApi.(T) -> Unit
) {

    init {
        ks += {
            parent.observers.remove(this)
        }
    }

    val kseq = ks.seq().apply { this %= killStart }
    fun fire() {
        Killables().apply {
            killOrder(
                { fn(parent.now) },
                { kseq %= this.kill }
            )
        }
    }

}

interface RxIface<out T> {

    val now : T

    operator fun invoke(): T

    fun <S> map(ks: KillSet, fn: KillsApi.(T) -> S) = Rx(ks) { fn(invoke()) }

//    fun <S> flatMap(ks: KillSet, fn: KillsApi.(T) -> RxIface<S>) = Rx(ks) { fn(invoke()) }

    fun forEach(ks: KillSet, fn: KillsApi.(T) -> Unit) = forEach(ks, KillFirst, fn)
    fun forEach(ks: KillSet, killOrder: KillOrder, fn: KillsApi.(T) -> Unit) {
        val ks0 = ks.killables()
        ks0.fn(now)
        return forEachLater(ks, ks0.kill, killOrder) {
            killOrder(
                {
                    fn(it)
                },
                {
                    ks0.kill()
                }
            )
        }
    }

    fun forEachLater(
        ks: KillSet,
        fn: KillsApi.(T) -> Unit
    ) = forEachLater(ks, {}, KillFirst, fn)

    fun forEachLater(
        ks: KillSet,
        killStart: Trigger = {},
        killOrder: KillOrder = KillFirst,
        fn: KillsApi.(T) -> Unit
    )

//    fun forEachLater(ks: KillSet, fn: KillsApi.(T) -> Unit)

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

    fun <F> foldLater(ks: KillSet, z0: F, fn: KillsApi.(F, T) -> F) {
        var z = z0

        forEachLater(ks) {
            z = fn(z, it)
        }
    }

    fun onChange(ks: KillSet, fn: KillsApi.(old: T /* old */, new: T /* new */) -> Unit) {
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

fun <T> RxIface<T>.forEach(deps: HasKills, fn: KillsApi.(T) -> Unit) = forEach(deps.kills, fn)

fun <T> RxIface<T>.feedTo(deps: HasKills, target: Var<T>) {
    forEach(deps) { target.now = it }
}

//fun RxIface<Int>.feedTo(ks: KillSet, rxv: Var<Int>) {
//    fold(ks, 0) { old, new ->
//        rxv.transform { it + new - old }
//        new
//    }
//    ks += {
//        rxv.transform { it - now }
//    }
//}
//fun RxIface<Int>.feedTo(ks: KillSet, rxv: Var<Long>) {
//    fold(ks, 0) { old, new ->
//        rxv.transform { it + new - old }
//        new
//    }
//    ks += {
//        rxv.transform { it - now }
//    }
//}
//fun RxIface<Long>.feedTo(ks: KillSet, rxv: Var<Long>) {
//    fold(ks, 0L) { old, new ->
//        rxv.transform { it + new - old }
//        new
//    }
//    ks += {
//        rxv.transform { it - now }
//    }
//}
//fun RxIface<Double>.feedTo(ks: KillSet, rxv: Var<Double>) {
//    fold(ks, 0.0) { old, new ->
//        rxv.transform { it + new - old }
//        new
//    }
//    ks += {
//        rxv.transform { it - now }
//    }
//}
//
//fun <T> RxIface<Optional<T>>.orDefault(ks: KillSet, v: T) = Rx(ks) { this@orDefault().getOrDefault(v) }

fun Var<Int>.incremented(
    deps: HasKills
) {
    transform { it + 1 }
    deps.kills += {
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
        require(currentChild != null) { "RX invoked without a context!" }
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


    override fun forEachLater(
        ks: KillSet,
        killStart: Trigger,
        killOrder: KillOrder,
        fn: KillsApi.(T) -> Unit
    ) {
        val obs = Obs(ks, this, killStart, killOrder, fn)
        observers += obs
    }


}



//fun <T> RxVal<KillableValue<T>>.killOld(ks: KillSet){
//    return off(ks) { it.kill() }
//}

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
    ) : this(
        ks,
//        calc.recalcValue(),
        calc.recalcValue().let { kv ->
            kv.kill()
            kv.value
        },
        calc
    )

    constructor(
        ks: KillSet,
        fn: KillsApi.() -> T
    ) : this(ks, RxCalc(ks, fn))

    constructor(
        ks: KillSet,
        killFirst: Boolean,
        fn: KillsApi.() -> T
    ) : this(ks, RxCalc(ks, fn, if (killFirst) KillFirst else KillLast))
}

fun <T> rx(deps: HasKills, fn: KillsApi.() -> T) = Rx(deps.kills, fn)

interface HasRx<T> {
    val rxv: RxIface<T>
}
interface HasVar<T>: HasRx<T> {
    override val rxv: Var<T>
}

val <T> Var<T>.readOnly: RxIface<T> get() = this
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

    operator fun remAssign(v: T) { now = v }
}

fun Var<Int>.increase() = transform { it + 1 }
fun Var<Int>.decrease() = transform { it - 1 }


//fun <T> RxIface<Optional<T>>.get() = now.get()
//fun <T> Var<Optional<T>>.set(v: T) {
//    now = Some(v)
//}
//
fun Element.rxClass(
    ks: KillSet,
    style: KillsApi.() -> String
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
//
//fun GlobalEventHandlers.rxHover(rx: Var<Boolean>) {
//    onmouseenter = { rx.now = true; null }
//    onmouseleave = { rx.now = false; null }
//}

fun Element.rxClass(
    deps: HasKills,
    style: String,
    fn: RxIface<Boolean>
) {
    fn.forEach(deps.kills) {
        if (it) addClass(style)
        else removeClass(style)
    }
}

fun Element.rxClass(
    deps: HasKills,
    style: String,
    fn: KillsApi.() -> Boolean
)  {
    val rxv = rx(deps) { fn() }
    rxClass(deps, style, rxv)
}

//fun Element.rxClassOpt(
//    ks: KillSet,
//    style: RxVal<String?>
//) {
//    style.onOff(
//        ks,
//        { it?.let { c -> addClass(c) } },
//        { it?.let { c -> removeClass(c) } }
//    )
//}

fun <T> (KillsApi.() -> T).toRx(ks: KillSet) = Rx(ks, this)

//fun Element.rxClasses(
//    ks: KillSet,
//    style: KillsApi.() -> Collection<String>
//) = rxClasses(ks, style.toRx(ks))
//
//fun Element.rxClasses(
//    ks: KillSet,
//    style: RxIface<Collection<String>>
//) {
//    style.onOff(
//        ks,
//        { addClass(*it.toTypedArray()) },
//        { removeClass(*it.toTypedArray()) }
//    )
//}
//
//fun <T> RxIface<T>.toChannel(ks: KillSet): ReceiveChannel<T> {
//    val ch = Channel<T>(Channel.UNLIMITED)
//    ks += { ch.close() }
//    forEach(ks) { t -> ch.offer(t) }
//    return ch
//}

fun <T> RxIface<T>.toChannelLater(ks: KillSet): ReceiveChannel<T> {
    val ch = Channel<T>(Channel.UNLIMITED)
    ks += { ch.close() }
    forEachLater(ks) { t -> ch.offer(t) }
    return ch
}

//suspend fun <T, S> RxIface<T>.mapAsync(
//    ks: KillSet,
//    fn: suspend KillsApi.(T) -> S
//): RxIface<S> {
//    val kseq = ks.seq()
//
//    suspend fun calc(t: T): S = kseq.killables().fn(t)
//
//    val rxv = Var(calc(now))
//    val ch = toChannelLater(ks)
//
//    GlobalScope.launch {
//        for (t in ch) {
//            rxv.now = calc(t)
//        }
//    }.addedTo(ks)
//
//    return rxv
//}


fun <T> KillSet.rx(fn: KillsApi.() -> T): RxIface<T> = Rx(this, fn)
val <T> T.asVar get() = Var(this)

inline fun <reified E: Enum<E>> Var<E>.toName(deps: HasKills) = linked(
    deps,
    { it.name },
    { enumValueOf(it) }
)

fun <T, S> Var<T>.linked(
    deps: HasKills,
    read: (T) -> S,
    write: (S) -> T
) = Var(read(now)).apply {
    this@linked.forEach(deps) { this@apply %= read(it) }
    forEach(deps) { this@linked %= write(it) }
}

fun <T> Assign<T>.rx(deps: HasKills, fn: () -> T) {
    rx(deps, Rx(deps.kills) { fn() })
}
fun <T> Assign<T>.rx(deps: HasKills, fn: RxIface<T>) {
    fn.forEach(deps.kills) { this@rx %= it }
}
