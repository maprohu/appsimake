package common

import rx.Rx
import rx.RxVal
import rx.Var
import kotlin.properties.ReadOnlyProperty
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KClass
import kotlin.reflect.KProperty
import kotlin.reflect.KProperty0

inline fun dyn() = js("{}")
inline fun <T> obj() = dyn().unsafeCast<T>()
inline fun dyn(fn: dynamic.() -> Unit) = (dyn() as Any?).apply(fn)
inline fun <T> obj(fn: T.() -> Unit) = obj<T>().apply(fn)

class NamedDelegate<T>(
    private val init : (String) -> T
) {
    operator fun provideDelegate(
        thisRef: Nothing?,
        prop: KProperty<*>
    ): ReadOnlyProperty<Nothing?, T> {
        val value = init(prop.name)
        return object : ReadOnlyProperty<Nothing?, T> {
            override fun getValue(thisRef: Nothing?, property: KProperty<*>): T = value
        }
    }
}

fun <T> named(fn: (String) -> T) = NamedDelegate(fn)

abstract class DynRx<T>(
    internal val o: dynamic,
    val name: String,
    internal val gs: GetSet<T>
) : ReadOnlyProperty<Any, T> {
    abstract val rxv: RxVal<T>
    fun getValue(): T = gs.get(o[name])
    override fun getValue(thisRef: Any, property: KProperty<*>): T = getValue()
}

class Dyn<T>(
    o: dynamic,
    name: String,
    gs: GetSet<T>
) : DynRx<T>(o, name, gs), ReadWriteProperty<Any, T> {
    private var onUpdate : (T) -> Unit = {}
    override val rxv : RxVal<T> by lazy {
        val v = Var(getValue())
        onUpdate = { v.now = it }
        v
    }

    override fun setValue(thisRef: Any, property: KProperty<*>, value: T) {
        o[property.name] = gs.set(value)
        onUpdate(value)
    }
}

class Binder<T>(
    private val wrap: Wrap,
    private val o: dynamic,
    private val getSet: GetSet<T> = GetSet(),
    private val init : (String) -> Unit
) {
    operator fun provideDelegate(
        thisRef: Any,
        prop: KProperty<*>
    ): ReadWriteProperty<Any, T> {
        init(prop.name)
        return Dyn(o, prop.name, getSet).also { wrap.add(it) }
    }
}

class AutoDyn<T>(
    o: dynamic,
    name: String,
    gs: GetSet<T>,
    fn: () -> T
) : DynRx<T>(o, name, gs) {
    override val rxv: RxVal<T> = Rx { fn() }

    init {
        rxv.forEach {
            o[name] = gs.set(it)
        }
    }
}

class AutoBinder<T>(
    private val wrap: Wrap,
    private val o: dynamic,
    private val getSet: GetSet<T> = GetSet(),
    private val fn : () -> T
) {
    operator fun provideDelegate(
        thisRef: Any,
        prop: KProperty<*>
    ) = AutoDyn(o, prop.name, getSet, fn).also { wrap.add(it) }
}

interface GetSet<T> {
    fun get(v: dynamic) : T = v.unsafeCast<T>()
    fun set(v: T) : dynamic = v.asDynamic()

    companion object : GetSet<Any>
}

@Suppress("NOTHING_TO_INLINE", "UNCHECKED_CAST", "FunctionName")
inline fun <T> GetSet() = GetSet as GetSet<T>

inline fun <reified T: Enum<T>> enumGetSet() = object : GetSet<T> {
    override fun set(v: T) = v.name
    override fun get(v: dynamic) = enumValueOf<T>(v.unsafeCast<String>())
}

abstract class Wrap(o: dynamic) {

    // KProperty.getDelegate is not yet supported in javascript...
    private val props = mutableMapOf<String, DynRx<*>>()
    internal fun <T> add(p: DynRx<T>) { props[p.name] = p }

    val wrapped = o ?: obj()

    private val propInit : (String, GetSet<Any?>, Any?) -> Unit =
        if (o != null) { { n, gs, v -> if (wrapped[n] == null) wrapped[n] = gs.set(v) } }
        else { { n, gs, v -> wrapped[n] = gs.set(v) } }

    protected fun <T> dyn(gs: GetSet<T> = GetSet()) = Binder(this, wrapped, gs) {}
    protected fun <T> dyn(v: T, gs: GetSet<T> = GetSet()) = Binder(this, wrapped, gs) { propInit(it, gs as GetSet<Any?>, v) }
    protected inline fun <reified T: Enum<T>> enum() = dyn<T>(enumGetSet())
    protected inline fun <reified T: Enum<T>> enum(v: T) = dyn(v, enumGetSet())


    fun <T> KProperty0<T>.rxv() =
            props.getValue(name).rxv() as T

    val type : String by dyn(this::class.simpleName!!)

}


fun <W: Wrap, T> W.auto(gs: GetSet<T> = GetSet(), fn: W.() -> T) = AutoBinder(this, wrapped, gs) { fn(this) }

@Suppress("UNUSED_PARAMETER")
inline fun <T : Any> jsNew(
    constr: JsClass<T>,
    param: dynamic
) : T = js("new constr(param)") as T

// waiting for KClass.sealedSubclasses to be implemented in KotlinJS
fun <T> wrapper(vararg classes: KClass<*>) : (dynamic) -> T {
    val typeMap =
        classes
            .map { it.simpleName!! to it.js }
            .toMap()

    return { d ->
        typeMap
            .getValue(d.type as String)
            .let { jsNew(it, d) as T }
    }
}

open class Listeners {

    protected var listeners = listOf<() -> Unit>()

    operator fun plusAssign(listener: () -> Unit) {
        add(listener)
    }

    open fun add(listener: () -> Unit) : () -> Unit {
        listeners += listener

        return {
            listeners -= listener
        }
    }

    open fun fire() {
        listeners.forEach { it() }
    }

}
