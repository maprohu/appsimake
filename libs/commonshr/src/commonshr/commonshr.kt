package common

import rx.Rx
import rx.RxVal
import rx.Var
import kotlin.properties.ReadOnlyProperty
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KClass
import kotlin.reflect.KProperty
import kotlin.reflect.KProperty1

@Suppress("NOTHING_TO_INLINE")
inline fun dyn() = js("{}")
@Suppress("NOTHING_TO_INLINE")
inline fun <T> obj() = dyn().unsafeCast<T>()
@Suppress("NOTHING_TO_INLINE")
inline fun dyn(fn: dynamic.() -> Unit) = (dyn() as Any?).apply(fn)
@Suppress("NOTHING_TO_INLINE")
inline fun <T> obj(fn: T.() -> Unit) = obj<T>().apply(fn)

class NamedDelegate<out T>(
    private val init : (String) -> T
) {
    operator fun provideDelegate(
        thisRef: Any?,
        prop: KProperty<*>
    ): ReadOnlyProperty<Any?, T> {
        val value = init(prop.name)
        return object : ReadOnlyProperty<Any?, T> {
            override fun getValue(thisRef: Any?, property: KProperty<*>): T = value
        }
    }
}

fun <T> named(fn: (String) -> T) = NamedDelegate(fn)

abstract class DynRx<T>(
    internal val o: dynamic,
    val name: String,
    internal val gs: GetSet<T>,
    val defaultValue: Optional<T>
) : ReadOnlyProperty<Any, T> {
    abstract val rxv: RxVal<T>
    fun extract(): T = gs.get(o[name])
    override fun getValue(thisRef: Any, property: KProperty<*>): T = rxv.now
    val original = Var(gs.opt(o, name))
    val isDirty by lazy { Rx { rxv() != original() } }
    fun clearDirty() { original.now = Some(rxv.now) }
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


class AutoDyn<T>(
    o: dynamic,
    name: String,
    gs: GetSet<T>,
    fn: () -> T
) : DynRx<T>(o, name, gs) {
    override val rxv: RxVal<T> by lazy {
        val rxv = Rx { fn() }
        rxv.forEach {
            o[name] = gs.set(it)
        }
        rxv
    }
}

class Binder<T>(
    private val wrap: Wrap<*>,
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

class AutoBinder<T>(
    private val wrap: Wrap<*>,
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
    fun opt(o: dynamic, name: String) = if (hasOwnProperty(o, name)) Some(get(o[name])) else None

    companion object : GetSet<Any>
}

@Suppress("NOTHING_TO_INLINE", "UNCHECKED_CAST", "FunctionName")
inline fun <T> GetSet() = GetSet as GetSet<T>

inline fun <reified T: Enum<T>> enumGetSet() = object : GetSet<T> {
    override fun set(v: T) = v.name
    override fun get(v: dynamic) = enumValueOf<T>(v.unsafeCast<String>())
}

@Suppress("unused")
class Prop<in T, out R>(
    val name: String
)
val <T, R> KProperty1<T, R>.cast
    get() = Prop<T, R>(name)

abstract class Wrap<W: Wrap<W>>(o: dynamic) {

    // KProperty.getDelegate is not yet supported in javascript...
    internal val props = mutableMapOf<String, DynRx<*>>()
    private var isFrozen = false
    private fun freeze() {
        isFrozen = true
    }
    private val dyns by lazy {
        freeze()
        props.values.filterIsInstance<Dyn<*>>()
    }
    internal fun <T> add(p: DynRx<T>) {
        require(!isFrozen)
        props[p.name] = p
    }

    private val w = o ?: obj()

    private val propInit : (String, GetSet<Any?>, Any?) -> Unit =
        if (o != null) {
            { n, gs, v ->
                if (w[n] == null) w[n] = gs.set(v)
            }
        } else {
            { n, gs, v ->
                w[n] = gs.set(v)
            }
        }

    protected fun <T> dyn(gs: GetSet<T> = GetSet()) = Binder(this, w, gs) {}
    protected fun <T> dyn(v: T, gs: GetSet<T> = GetSet()) = Binder(this, w, gs) { propInit(it, gs as GetSet<Any?>, v) }
    protected inline fun <reified T: Enum<T>> enum() = dyn<T>(enumGetSet())
    protected inline fun <reified T: Enum<T>> enum(v: T) = dyn(v, enumGetSet())
    fun <T> auto(gs: GetSet<T> = GetSet(), fn: Wrap<W>.() -> T) = AutoBinder(this, w, gs) { fn(this) }


    fun <T> Prop<W, T>.prop() = props.getValue(name) as DynRx<T>
    fun <T> KProperty1<W, T>.prop() = cast.prop()
    fun <T> KProperty1<W, T>.rxv() = prop().rxv()


    val type : String by dyn(this::class.simpleName!!)

    val isDirty by lazy {
        freeze()
        Rx {
            dyns.any { it.isDirty() }
        }
    }

    fun clearDirty() {
        dyns.forEach { it.clearDirty() }
    }

}

fun <W: Wrap<W>, T> W.prop(p: Prop<W, T>) = props.getValue(p.name) as DynRx<T>



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

    @Suppress("UNCHECKED_CAST")
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
