package commonshr

import common.None
import common.Optional
import common.Some
import common.named
import rx.Rx
import rx.RxVal
import rx.Var

fun hasOwnProperty(d: dynamic, prop: String) = d.hasOwnProperty(prop).unsafeCast<Boolean>()
fun <T> opt(d: dynamic, name: String) = if (hasOwnProperty(d, name)) Some(d[name].unsafeCast<T>()) else None

data class PropOps(
    val delete: () -> dynamic
)

abstract class Prop<in O>(
    val name: String
) {
    abstract fun updatePersisted(o: dynamic)
    abstract fun rollback()
    fun startEditing(o: dynamic) {
        updatePersisted(o)
        rollback()
    }
    abstract fun writeTo(o: dynamic)
    abstract fun mergeTo(o: dynamic, propOps: PropOps)
    abstract val dirty: RxVal<Boolean>
    abstract fun clearDirty()
}


open class ScalarProp<in O, T>(
    name: String,
    private val ops: Ops<O, T>
) : Prop<O>(name) {

    data class Ops<in O, T>(
        val read: (dynamic) -> T = { it.unsafeCast<T>() },
        val write: (T) -> dynamic = { it.asDynamic() },
        val equal: (T, T) -> Boolean = { a, b -> a == b },
        val defaultValue: Optional<T> = None
    ) {
        fun prop(fn: (String, Ops<O, T>) -> ScalarProp<@UnsafeVariance O, T> = ::ScalarProp) = named { fn(it, this) }
        fun withDefault(v: T) = copy(defaultValue = Some(v))
    }

    val persisted = Var<Optional<T>>(None)
    val current = Var<Optional<T>>(None)
    override val dirty = Rx {
        (persisted() == None && current() == None) || persisted().any { i -> current().any { c -> ops.equal(i, c) } }
    }

    override fun updatePersisted(o: dynamic) {
        val d = opt<dynamic>(o, name)
        val t = d.map(ops.read)
        persisted.now = t
    }

    override fun writeTo(o: dynamic) {
        current.now.forEach { o[name] = ops.write(it) }
    }

    override fun mergeTo(o: dynamic, propOps: PropOps) {
        if (dirty.now) {
            o[name] = current.now.map(ops.write).getOrElse(propOps.delete)
        }
    }

    override fun clearDirty() {
        persisted.now = current.now
    }

    override fun rollback() {
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


inline fun <O, reified T: Enum<T>> ScalarProp.Ops<O, T>.enum() = EnumProp.Ops(
    scalar = copy(
        write = { it.name },
        read = { enumValueOf(it.unsafeCast<String>()) }
    )
)

class PropFactory<O> {
    inline fun <T> scalar() = ScalarProp.Ops<O, T>()
}
val PF = PropFactory<Any?>()
val <O> O.o
    get() = PF.unsafeCast<PropFactory<O>>()



