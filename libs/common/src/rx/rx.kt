package rx

import common.Killables
import common.Listeners
import org.w3c.dom.Element
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

interface Killable {
    fun kill()

    fun addTo(killables: Killables) {
        killables.add(this)
    }
}


fun Listeners.add(killable: Killable) {
    this.add { killable.kill() }
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

interface RxIface<T> {

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

    fun onChange(fn: (T /* old */, T /* new */) -> Unit) : Killable {
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
}

fun Element.rxClass(
        style: RxVal<String>
) : Killable {
    return style.onOff(
            { addClass(it) },
            { removeClass(it) }
    )
}

fun Element.rxClassOpt(
        style: RxVal<String?>
) : Killable {
    return style.onOff(
            { it?.let { addClass(it) } },
            { it?.let { removeClass(it) } }
    )
}

fun Element.rxClasses(
        style: RxVal<Set<String>>
) : Killable {
    return style.onOff(
            { addClass(*it.toTypedArray()) },
            { removeClass(*it.toTypedArray()) }
    )
}
