package common

import commonshr.Counted
import commonshr.SetAdded
import commonshr.SetMove
import commonshr.SetRemoved
import killable.Killable
import rx.Rx
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty
import killable.Killables
import killable.addedTo

@Suppress("NOTHING_TO_INLINE")
inline fun dyn() = js("{}")
@Suppress("NOTHING_TO_INLINE")
inline fun <T> obj() = dyn().unsafeCast<T>()
@Suppress("NOTHING_TO_INLINE")
inline fun dyn(fn: dynamic.() -> Unit) = dyn().unsafeCast<Any>().apply(fn)
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

//abstract class DynRx<T>(
//    internal val o: dynamic,
//    val name: String,
//    internal val gs: GetSet<T>,
//    val defaultValue: Optional<T>
//) : ReadOnlyProperty<Any, T> {
//    abstract val rxv: RxVal<T>
//    fun extract(): T = gs.get(o[name])
//    override fun getValue(thisRef: Any, property: KProperty<*>): T = rxv.now
//    val original = Var(gs.opt(o, name))
//    val isDirty by lazy { Rx { rxv() != original() } }
//    fun clearDirty() { original.now = Some(rxv.now) }
//}
//
//class Dyn<T>(
//    o: dynamic,
//    name: String,
//    gs: GetSet<T>
//) : DynRx<T>(o, name, gs), ReadWriteProperty<Any, T> {
//    private var onUpdate : (T) -> Unit = {}
//    override val rxv : RxVal<T> by lazy {
//        val v = Var(getValue())
//        onUpdate = { v.now = it }
//        v
//    }
//
//    override fun setValue(thisRef: Any, property: KProperty<*>, value: T) {
//        o[property.name] = gs.set(value)
//        onUpdate(value)
//    }
//}
//
//
//class AutoDyn<T>(
//    o: dynamic,
//    name: String,
//    gs: GetSet<T>,
//    fn: () -> T
//) : DynRx<T>(o, name, gs) {
//    override val rxv: RxVal<T> by lazy {
//        val rxv = Rx { fn() }
//        rxv.forEach {
//            o[name] = gs.set(it)
//        }
//        rxv
//    }
//}
//
//class Binder<T>(
//    private val wrap: Wrap<*>,
//    private val o: dynamic,
//    private val getSet: GetSet<T> = GetSet(),
//    private val init : (String) -> Unit
//) {
//    operator fun provideDelegate(
//        thisRef: Any,
//        prop: KProperty<*>
//    ): ReadWriteProperty<Any, T> {
//        init(prop.name)
//        return Dyn(o, prop.name, getSet).also { wrap.add(it) }
//    }
//}
//
//class AutoBinder<T>(
//    private val wrap: Wrap<*>,
//    private val o: dynamic,
//    private val getSet: GetSet<T> = GetSet(),
//    private val fn : () -> T
//) {
//    operator fun provideDelegate(
//        thisRef: Any,
//        prop: KProperty<*>
//    ) = AutoDyn(o, prop.name, getSet, fn).also { wrap.add(it) }
//}
//
//interface GetSet<T> {
//    fun get(v: dynamic) : T = v.unsafeCast<T>()
//    fun set(v: T) : dynamic = v.asDynamic()
//    fun opt(o: dynamic, name: String) = if (hasOwnProperty(o, name)) Some(get(o[name])) else None
//
//    companion object : GetSet<Any>
//}
//
//@Suppress("NOTHING_TO_INLINE", "UNCHECKED_CAST", "FunctionName")
//inline fun <T> GetSet() = GetSet as GetSet<T>
//
//inline fun <reified T: Enum<T>> enumGetSet() = object : GetSet<T> {
//    override fun set(v: T) = v.name
//    override fun get(v: dynamic) = enumValueOf<T>(v.unsafeCast<String>())
//}
//
//@Suppress("unused")
//class Prop<in T, out R>(
//    val name: String
//)
//val <T, R> KProperty1<T, R>.cast
//    get() = Prop<T, R>(name)
//
//abstract class Wrap<W: Wrap<W>>(o: dynamic) {
//
//    // KProperty.getDelegate is not yet supported in javascript...
//    internal val props = mutableMapOf<String, DynRx<*>>()
//    private var isFrozen = false
//    private fun freeze() {
//        isFrozen = true
//    }
//    private val dyns by lazy {
//        freeze()
//        props.values.filterIsInstance<Dyn<*>>()
//    }
//    internal fun <T> add(p: DynRx<T>) {
//        require(!isFrozen)
//        props[p.name] = p
//    }
//
//    private val w = o ?: obj()
//
//    private val propInit : (String, GetSet<Any?>, Any?) -> Unit =
//        if (o != null) {
//            { n, gs, v ->
//                if (w[n] == null) w[n] = gs.set(v)
//            }
//        } else {
//            { n, gs, v ->
//                w[n] = gs.set(v)
//            }
//        }
//
//    protected fun <T> dyn(gs: GetSet<T> = GetSet()) = Binder(this, w, gs) {}
//    protected fun <T> dyn(v: T, gs: GetSet<T> = GetSet()) = Binder(this, w, gs) { propInit(it, gs as GetSet<Any?>, v) }
//    protected inline fun <reified T: Enum<T>> enum() = dyn<T>(enumGetSet())
//    protected inline fun <reified T: Enum<T>> enum(v: T) = dyn(v, enumGetSet())
//    fun <T> auto(gs: GetSet<T> = GetSet(), fn: Wrap<W>.() -> T) = AutoBinder(this, w, gs) { fn(this) }
//
//
//    fun <T> Prop<W, T>.prop() = props.getValue(name) as DynRx<T>
//    fun <T> KProperty1<W, T>.prop() = cast.prop()
//    fun <T> KProperty1<W, T>.rxv() = prop().rxv()
//
//
//    val type : String by dyn(this::class.simpleName!!)
//
//    val isDirty by lazy {
//        freeze()
//        Rx {
//            dyns.any { it.isDirty() }
//        }
//    }
//
//    fun clearDirty() {
//        dyns.forEach { it.clearDirty() }
//    }
//
//}
//
//fun <W: Wrap<W>, T> W.prop(p: Prop<W, T>) = props.getValue(p.name) as DynRx<T>



@Suppress("UNUSED_PARAMETER", "SpellCheckingInspection")
inline fun <T : Any> jsNew(
    constr: JsClass<T>
) : T = js("new constr()") as T

@Suppress("UNUSED_PARAMETER", "SpellCheckingInspection")
inline fun <T : Any> jsNew(
    constr: JsClass<T>,
    param: dynamic
) : T = js("new constr(param)") as T


open class Listeners {

    protected var listeners = listOf<() -> Unit>()

    operator fun invoke(listener: () -> Unit) {
        add(listener)
    }

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

interface EmitterIface<T> {

    operator fun plusAssign(listener: (T) -> Unit) {
        add(listener)
    }

    fun add(listener: (T) -> Unit) : Killable

}

interface AsyncEmitter<T>: Killable {
    suspend fun receive(): T
}


interface EmitterKillable<T>: EmitterIface<T>, Killable

open class Emitter<T>(
    private val first: () -> Iterable<T> = ::emptyList
): EmitterIface<T> {

    protected var listeners = listOf<(T) -> Unit>()

    override fun add(listener: (T) -> Unit) : Killable {
        first().forEach(listener)

        listeners += listener

        return Killable.once {
            listeners -= listener
        }
    }

    open fun emit(t: T) {
        listeners.forEach { it(t) }
    }

}

class MappedEmitter<T, S>(
    private val emitter: EmitterIface<T>,
    private val fn: (T) -> S
): EmitterIface<S> {
    override fun add(listener: (S) -> Unit): Killable {
        return emitter.add { t ->
            listener(fn(t))
        }
    }
}

fun <T, S> EmitterIface<T>.map(fn: (T) -> S) = MappedEmitter(this, fn)

fun <T> EmitterIface<SetMove<T>>.feedTo(set: MutableSet<T>): Killable {
    return add { m ->
        m.applyTo(set)
    }
}

fun <T> EmitterIface<SetMove<T>>.filtered(ks: Killables, rxfn: (T) -> Boolean): Emitter<SetMove<T>> {

    val current = mutableSetOf<T>()
    val kills = mutableMapOf<T, Killable>()

    val f = Emitter<SetMove<T>> {
        current.map(::SetAdded)
    }

    fun add(v: T) {
        current += v
        f.emit(SetAdded(v))
    }
    fun remove(v: T) {
        current -= v
        f.emit(SetRemoved(v))
    }

    ks += add { m ->
        val v = m.value
        when (m) {
            is SetAdded -> {
                val vks = ks.killables()
                val rxv = Rx { rxfn(v) }.addedTo(vks)
                kills[v] = rxv
                rxv.forEach { fv ->
                    if (fv) add(v)
                    else remove(v)
                }
            }
            is SetRemoved -> {
                kills.remove(v)?.kill()

                if (v in current) {
                    remove(v)
                }
            }
        }
    }

    return f
}

fun <T> combineAnd(
    ks: Killables,
    e1: EmitterIface<SetMove<T>>,
    e2: EmitterIface<SetMove<T>>
): EmitterIface<SetMove<T>> = combine(ks, e1, e2, Boolean::and)

fun <T> combineN(
    ks: Killables,
    pairs: Iterable<Pair<EmitterIface<SetMove<T>>, MutableSet<T>>>,
    fn: (T) -> Boolean
): EmitterIface<SetMove<T>> {
    val lks = ks.killables()

    val result = mutableSetOf<T>()
    val out = Emitter<SetMove<T>> {
        result.map { SetAdded(it) }
    }

    fun connect(emitter: EmitterIface<SetMove<T>>, thisSet: MutableSet<T>) {
        lks += emitter.add { m ->
            val id = m.value
            val before = m.value in result
            m.applyTo(thisSet)
            val after = fn(id)

            when {
                before && !after -> {
                    result -= id
                    out.emit(SetRemoved(id))
                }
                !before && after -> {
                    result += id
                    out.emit(SetAdded(id))
                }
            }
        }

    }
    pairs.forEach { (em, set) ->
        connect(em, set)
    }

    return out

}

fun <T> combine(
    ks: Killables,
    e1: EmitterIface<SetMove<T>>,
    e2: EmitterIface<SetMove<T>>,
    e3: EmitterIface<SetMove<T>>,
    fn: (Boolean, Boolean, Boolean) -> Boolean
): EmitterIface<SetMove<T>> {
    val set1 = mutableSetOf<T>()
    val set2 = mutableSetOf<T>()
    val set3 = mutableSetOf<T>()

    val after = { id: T ->
        val v1 = id in set1
        val v2 = id in set2
        val v3 = id in set3
        fn(v1, v2, v3)
    }

    return combineN(
        ks,
        listOf(
            Pair(e1, set1),
            Pair(e2, set2),
            Pair(e3, set3)
        ),
        after
    )
}

fun <T> combine(
    ks: Killables,
    e1: EmitterIface<SetMove<T>>,
    e2: EmitterIface<SetMove<T>>,
    fn: (Boolean, Boolean) -> Boolean
): EmitterIface<SetMove<T>> {

    val set1 = mutableSetOf<T>()
    val set2 = mutableSetOf<T>()

    val after = { id: T ->
        val v1 = id in set1
        val v2 = id in set2
        fn(v1, v2)
    }

    return combineN(
        ks,
        listOf(
            Pair(e1, set1),
            Pair(e2, set2)
        ),
        after
    )
}

fun <T> EmitterIface<SetMove<T>>.andIn(other: EmitterIface<SetMove<T>>, ks: Killables): EmitterIface<SetMove<T>> {
    return combineAnd(ks, this, other)
}
