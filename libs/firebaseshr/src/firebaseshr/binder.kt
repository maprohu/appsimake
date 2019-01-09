package firebaseshr

import common.*
import firebaseshr.firestore.Timestamp
import rx.Rx
import rx.RxVal
import rx.Var

fun hasOwnProperty(d: dynamic, prop: String) = d.hasOwnProperty(prop).unsafeCast<Boolean>()
fun <T> opt(d: dynamic, name: String) = if (hasOwnProperty(d, name)) Some(d[name].unsafeCast<T>()) else None


data class PropOps(
    val delete: () -> dynamic = { throw IllegalStateException() },
    val serverTimestamp: () -> Timestamp = { throw IllegalStateException() }
)

internal var propOps = PropOps()
val ops
    get() = propOps

fun initBinder(ops: PropOps) {
    propOps = ops
}

interface PropTasks<in O> {
    fun updatePersisted(o: dynamic)
    fun rollbackToPersisted()
    fun writeTo(o: dynamic)
    fun mergeTo(o: dynamic)
    val shouldWrite: RxVal<Boolean>
    val changed: RxVal<Boolean>
    fun clearDirty()

    fun startEditingPersisted(o: dynamic) {
        updatePersisted(o)
        rollbackToPersisted()
    }
}

interface Prop<in O>: PropTasks<O> {
    val name: String

}

fun <T> Collection<(T) -> Unit>.fireWith(v: T) {
    forEach { it(v) }
}

open class ScalarProp<in O, T>(
    override val name: String,
    private val ops: Ops<O, T>
) : Prop<O> {

//    data class Events<O, T>(
//        val beforeWrite : Collection<(ScalarProp<O, T>) -> Unit> = emptyList()
//    )
    data class Ops<in O, T>(
        val propFactory: PropFactory<O>,
        val read: (dynamic) -> T = { it.unsafeCast<T>() },
        val write: (T) -> dynamic = { it.asDynamic() },
        val merge: ((old: T, new: T) -> dynamic)? = null,
        val calculate : ((ScalarProp<@UnsafeVariance O, T>) -> Lazy<Optional<T>>)? = null,
        val defaultValue: () -> Optional<T> = { None }
//        val events: Events<@UnsafeVariance O, T> = Events()
    ) {
        fun prop(fn: (String, Ops<O, T>) -> ScalarProp<@UnsafeVariance O, T> = ::ScalarProp) = named { fn(it, this) }
        fun withDefault(v: () -> T) = copy(defaultValue = { Some(v()) } )
        fun withDefault(v: T) = copy(defaultValue = { Some(v) } )
        fun calculated(fn: (ScalarProp<@UnsafeVariance O, T>) -> Lazy<Optional<T>>) = copy(
            calculate = fn
        )
        fun <U> map(
            r: (T) -> U,
            w: (U) -> T
        ) = Ops(
            propFactory = propFactory,
            read = { r(read(it)) },
            write = { write(w(it)) },
            defaultValue = { defaultValue().map(r) }
        )

//        fun onBeforeWrite(fn: (ScalarProp<O, T>) -> Unit) = copy(
//            events = events.copy(
//                beforeWrite = events.beforeWrite + fn
//            )
//        )

        companion object {
            inline fun <O, T> array(pf: PropFactory<O>) = ScalarProp.Ops<O, Array<T>>(pf).copy(
                defaultValue = { Some(arrayOf()) }
            )
        }
    }

    val initial = Var(ops.defaultValue())
    val persisted = Var<Optional<T>>(None)
    val current = Var(initial.now)


    val calculated
        get() = ops.calculate != null

    override val shouldWrite: RxVal<Boolean> = if (calculated) Var(false) else Rx {
        persisted() != current()
    }
    override val changed: RxVal<Boolean> = if (calculated) Var(false) else Rx {
        initial() != current()
    }

    override fun updatePersisted(o: dynamic) {
        persisted.now = opt<dynamic>(o, name).map(ops.read)
    }

    fun Collection<(ScalarProp<O, T>) -> Unit>.fire() = fireWith(this@ScalarProp)

    val beforeWrite: () -> Unit =
        ops.calculate?.let { c ->
            val calc = Rx { c(this) };

            { current.now = calc.now.value }
        } ?: {}

    override fun writeTo(o: dynamic) {
//        ops.events.beforeWrite.fire()
        beforeWrite()
        current.now.forEach { o[name] = ops.write(it) }
    }

    override fun mergeTo(o: dynamic) {
//        ops.events.beforeWrite.fire()
        beforeWrite()
        if (shouldWrite.now) {
            @Suppress("RemoveExplicitTypeArguments")
            o[name] = current.now.map<dynamic> { c ->
                persisted.now.map<dynamic> { p ->
                    ops.merge.let { m ->
                        if (m != null) {
                            m(p, c)
                        } else {
                            ops.write(c)
                        }
                    }
                }.getOrElse {
                    ops.write(c)
                }
            }.getOrElse(propOps.delete)
        }
    }

    override fun clearDirty() {
        persisted.now = current.now
        initial.now = current.now
    }

    override fun rollbackToPersisted() {
        current.now = persisted.now
    }

}

class EnumProp<in O, T: Enum<T>>(name: String, ops: ScalarProp.Ops<O, T>) : ScalarProp<O, T>(name, ops) {
    data class Ops<in O, T: Enum<T>>(
        val scalar: ScalarProp.Ops<O, T>
    ) {
        fun prop() = scalar.prop(::EnumProp)
    }
}

//sealed class SetEvent<T>
//class SetAdded<T>(v: T) : SetEvent<T>()
//class SetRemoved<T>(v: T) : SetEvent<T>()

fun <O, T> ScalarProp.Ops<O, T>.arrayOf() = ScalarProp.Ops.array<O, dynamic>(propFactory).map(
    r = { it.map(read).toTypedArray() },
    w = { it.map(write).toTypedArray() }
)
fun <O, T> ScalarProp.Ops<O, Array<T>>.toSet() = map(
    r = { it.toSet() },
    w = { it.toTypedArray() }
)
fun <O, T> ScalarProp.Ops<O, Array<T>>.toList() = map(
    r = { it.toList() },
    w = { it.toTypedArray() }
)

fun <O, T: Comparable<T>> ScalarProp.Ops<O, Array<T>>.sorted() = map(
    r = { it },
    w = { it.sortedArray() }
)


//class ArraySetProp<in O, T>(name: String, ops: ScalarProp.Ops<O, Set<T>>) : ScalarProp<O, Set<T>>(name, ops) {
//    constructor(name: String): this(name, arrayPropOps<O, T>().arraySetPropOps())
//}

inline fun <O, reified T: Enum<T>> ScalarProp.Ops<O, T>.enum() = EnumProp.Ops(
    scalar = copy(
        write = { it.name },
        read = { enumValueOf(it.unsafeCast<String>()) }
    )
)

interface HasProps<in O> {
    val props: List<Prop<O>>
}

val <O> HasProps<O>.pt
    get() = PropListTasks(props)

class PropListTasks<in O>(val props: List<Prop<O>>): PropTasks<O> {
    override fun updatePersisted(o: dynamic) {
        props.forEach { it.updatePersisted(o) }
    }

    override fun rollbackToPersisted() {
        props.forEach { it.rollbackToPersisted() }
    }

    override fun writeTo(o: dynamic) {
        props.forEach { it.writeTo(o) }
    }

    override fun mergeTo(o: dynamic) {
        props.forEach { it.mergeTo(o) }
    }

    override val shouldWrite: RxVal<Boolean> by lazy {
        Rx {
            props.any { it.shouldWrite() }
        }
    }
    override val changed: RxVal<Boolean> by lazy {
        Rx {
            props.any { it.changed() }
        }
    }

    override fun clearDirty() {
        props.forEach { it.clearDirty() }
    }

    override fun startEditingPersisted(o: dynamic) {
        props.forEach { it.startEditingPersisted(o) }
    }

    fun write() = obj<Any>().also(::writeTo).asDynamic()

    fun merge() = obj<Any>().also(::mergeTo).asDynamic()


}

open class Base<T>(val o: PropFactory<T> = PropFactory()) : HasProps<T> by o

class PropFactory<in O>: HasProps<O> {
    override var props = emptyList<Prop<@kotlin.UnsafeVariance O>>()
    inline fun <T> scalar() = ScalarProp.Ops<O, T>(this)
    inline fun <T> array() = ScalarProp.Ops.array<O, T>(this)
}
val PF = PropFactory<Any?>()
fun <O> O.pf() = PropFactory<O>()
val <O> O.o
    get() = PF.unsafeCast<PropFactory<O>>()



