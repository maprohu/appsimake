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
    fun extractInitial(o: dynamic)
    fun resetInitial()
    fun rollback()
    fun writeTo(o: dynamic)
    fun mergeTo(o: dynamic)
    val dirty: RxVal<Boolean>
    fun clearDirty()
}

interface Prop<in O>: PropTasks<O> {
    val name: String

}

fun <T> Collection<(T) -> Unit>.fireWith(v: T) {
    forEach { it(v) }
}

interface PropRegsitry<in O> {
    fun register(prop: Prop<@UnsafeVariance O>)
}

open class ScalarProp<in O, T>(
    override val name: String,
    private val ops: Ops<O, T>
) : Prop<O> {

    var ignoreDirty = ops.ignoreDirty

    init {
        @Suppress("LeakingThis")
        ops.registry.register(this)
    }

    data class Ops<in O, T>(
        val registry: PropRegsitry<O>,
        val ignoreDirty: Boolean = false,
        val read: (dynamic) -> T = { it.unsafeCast<T>() },
        val write: (T) -> dynamic = { it.asDynamic() },
        val merge: ((old: T, new: T) -> dynamic)? = null,
        val calculate : ((ScalarProp<@UnsafeVariance O, T>) -> Lazy<Optional<T>>)? = null,
        val defaultValue: () -> Optional<T> = { None }
    ) {
        fun prop(fn: (String, Ops<O, T>) -> ScalarProp<@UnsafeVariance O, T> = ::ScalarProp) = named { fn(it, this) }
        fun withDefault(v: () -> T) = copy(defaultValue = { Some(v()) } )
        fun withDefault(v: T) = copy(defaultValue = { Some(v) } )
        fun withIgnoreDirty(v: Boolean = true) = copy(ignoreDirty = v)
        fun calculated(fn: (ScalarProp<@UnsafeVariance O, T>) -> Lazy<Optional<T>>) = copy(
            calculate = fn
        )
        fun <U> map(
            r: (T) -> U,
            w: (U) -> T
        ) = Ops(
            registry = registry,
            ignoreDirty = ignoreDirty,
            read = { r(read(it)) },
            write = { write(w(it)) },
            defaultValue = { defaultValue().map(r) }
        )

        companion object {
            inline fun <O, T> array(regsitry: PropRegsitry<O>) = ScalarProp.Ops<O, Array<T>>(regsitry).copy(
                defaultValue = { Some(arrayOf()) }
            )
        }
    }

    val initial = Var(ops.defaultValue())
    val current = Var(initial.now)


    val calculated
        get() = ops.calculate != null

    override val dirty: RxVal<Boolean> = if (calculated) Rx { false } else Rx {
        if (ignoreDirty) false
        else initial() != current()
    }

    override fun extractInitial(o: dynamic) {
        initial.now = opt<dynamic>(o, name).map(ops.read)
    }

    override fun resetInitial() {
        initial.now = ops.defaultValue()
    }

    val beforeWrite: () -> Unit =
        ops.calculate?.let { c ->
            val calc = Rx { c(this) };

            { current.now = calc.now.value }
        } ?: {}

    override fun writeTo(o: dynamic) {
        beforeWrite()
        current.now.forEach { o[name] = ops.write(it) }
    }

    override fun mergeTo(o: dynamic) {
        beforeWrite()
        if (initial.now != current.now) {
            @Suppress("RemoveExplicitTypeArguments")
            o[name] = current.now.map<dynamic> { c ->
                initial.now.map<dynamic> { p ->
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
        initial.now = current.now
    }

    override fun rollback() {
        current.now = initial.now
    }

}

class EnumProp<in O, T: Enum<T>>(name: String, ops: ScalarProp.Ops<O, T>) : ScalarProp<O, T>(name, ops) {
    data class Ops<in O, T: Enum<T>>(
        val scalar: ScalarProp.Ops<O, T>
    ) {
        fun prop() = scalar.prop(::EnumProp)
    }
}

fun <O, T> ScalarProp.Ops<O, T>.arrayOf() = ScalarProp.Ops.array<O, dynamic>(registry).map(
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

inline fun <O, reified T: Enum<T>> ScalarProp.Ops<O, T>.enum() = EnumProp.Ops(
    scalar = copy(
        write = { it.name },
        read = { enumValueOf(it.unsafeCast<String>()) }
    )
)

data class IdState<I>(
    val id: I,
    val exists: Boolean = true
)

class Props<in O, I> : PropTasks<O> {

    val id = Var<Optional<IdState<I>>>(None)
    internal var list : List<Prop<@UnsafeVariance O>> = listOf()

    val isPersisted by lazy { Rx { id() != None } }
    val isDeleted by lazy { Rx { id().map { s -> !s.exists }.getOrDefault(false) } }

    val onDeleted by lazy {
        val l = Listeners()
        isDeleted.forEach { if (it) l.fire() }
        l
    }

    val idOrFail
        get() = id.now.get().id

    fun persisted(idv: I) {
        id.now = Some(IdState(idv))
    }

    fun deleted() {
        id.transform { i -> i.map { s -> s.copy(exists = false) } }
    }


    override fun extractInitial(o: dynamic) {
        list.forEach { it.extractInitial(o) }
    }

    override fun resetInitial() {
        list.forEach { it.resetInitial() }
    }

    override fun rollback() {
        list.forEach { it.rollback() }
    }

    override fun writeTo(o: dynamic) {
        list.forEach { it.writeTo(o) }
    }

    override fun mergeTo(o: dynamic) {
        if (id.now.isEmpty()) {
            writeTo(o)
        } else {
            list.forEach { it.mergeTo(o) }
        }
    }

    override val dirty: RxVal<Boolean> by lazy {
        Rx {
            list.any {
                it.dirty()
            }
        }
    }

    override fun clearDirty() {
        list.forEach { it.clearDirty() }
    }

    fun write() = obj<Any>().also(::writeTo).asDynamic()

    fun merge() = obj<Any>().also(::mergeTo).asDynamic()

}
interface HasProps<in O, I> {
    val props: Props<O, I>
}

open class Base<T>(val o: PropFactory<T, String> = PropFactory()) : HasProps<T, String> by o

class PropFactory<in O, I>: HasProps<O, I> {

    override val props = Props<O, I>()

    private val registry = object : PropRegsitry<O> {
        override fun register(prop: Prop<@UnsafeVariance O>) {
            props.list += prop
        }
    }

    fun <T> scalar() = ScalarProp.Ops<O, T>(registry)
    fun <T> array() = ScalarProp.Ops.array<O, T>(registry)
}



