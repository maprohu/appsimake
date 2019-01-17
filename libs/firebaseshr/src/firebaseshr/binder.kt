package firebaseshr

import common.*
import commonlib.CollectionWrap
import commonlib.DocWrap
import firebaseshr.firestore.Timestamp
import kotlinx.coroutines.Deferred
import rx.Rx
import rx.RxVal
import rx.Var

fun hasOwnProperty(d: dynamic, prop: String) = d.hasOwnProperty(prop).unsafeCast<Boolean>()
fun <T> opt(d: dynamic, name: String) = if (hasOwnProperty(d, name)) Some(d[name].unsafeCast<T>()) else None



data class PropOps(
    val delete: () -> dynamic = { notInitialized() },
    val serverTimestamp: () -> Timestamp = { notInitialized() },
    val deleteCollection: (CollectionWrap<*>) -> Deferred<Unit> = { notInitialized() },
    val createId: (CollectionWrap<*>) -> String = { notInitialized() },
    val write: (DocWrap<*>, dynamic) -> Deferred<Unit> = { _, _ -> notInitialized() },
    val merge: (DocWrap<*>, dynamic) -> Deferred<Unit> = { _, _ -> notInitialized() }
) {
    companion object {
        fun notInitialized(): Nothing {
            throw IllegalStateException("Firebase ops not initialized!")
        }
    }
}

internal var propOps = PropOps()
val ops
    get() = propOps

fun initBinder(ops: PropOps) {
    propOps = ops
}

data class ValidationError(
    val message: String
) {
    companion object {
        val emptyValidator : (Optional<Any?>) -> Set<ValidationError> = { emptySet() }
        val mandatory = ValidationError("Field is mandatory.")
    }
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
    val validationErrors: RxVal<Set<ValidationError>>
    val isValid: RxVal<Boolean>

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

    fun write(v: T) = ops.write(v)

    data class Ops<in O, T>(
        val registry: PropRegsitry<O>,
        val ignoreDirty: Boolean = false,
        val read: (dynamic) -> T = { it.unsafeCast<T>() },
        val write: (T) -> dynamic = { it.asDynamic() },
        val merge: ((old: T, new: T) -> dynamic)? = null,
        val calculate : ((ScalarProp<@UnsafeVariance O, T>) -> Lazy<Optional<T>>)? = null,
        val defaultValue: () -> Optional<T> = { None },
        val validate: (Optional<T>) -> Set<ValidationError> = ValidationError.emptyValidator
    ) {
        fun prop(fn: (String, Ops<O, T>) -> ScalarProp<@UnsafeVariance O, T> = ::ScalarProp) = named { fn(it, this) }
        fun withDefault(v: () -> T) = copy(defaultValue = { Some(v()) } )
        fun withDefault(v: T) = copy(defaultValue = { Some(v) } )
        fun withIgnoreDirty(v: Boolean = true) = copy(ignoreDirty = v)
        fun calculated(fn: (ScalarProp<@UnsafeVariance O, T>) -> Lazy<Optional<T>>) = copy(
            calculate = fn
        )
        fun mandatory() =  validated(ValidationError.mandatory) { it.isEmpty() }
        fun ifPresent(err: ValidationError, invalid: (T) -> Boolean) = validated(err) { vo ->
            vo.map(invalid).getOrDefault(false)
        }
        fun validated(err: ValidationError, invalid: (Optional<T>) -> Boolean) = validated { v ->
            if (invalid(v)) setOf(err) else emptySet()
        }
        fun validated(fn: (Optional<T>) -> Set<ValidationError>) = copy(
            validate = { v -> validate(v) + fn(v) }
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

    override val validationErrors by lazy {
        Rx { ops.validate(current()) }
    }

    override val isValid by lazy {
        Rx { validationErrors().isEmpty() }
    }

    override fun extractInitial(o: dynamic) {
        initial.now = opt<dynamic>(o, name).map(ops.read)
    }

    override fun resetInitial() {
        initial.now = ops.defaultValue()
    }

    var calculationActive = ops.calculate != null

    val beforeWrite: () -> Unit =
        ops.calculate?.let { c ->
            val calc = Rx { c(this) };

            {
                if (calculationActive) {
                    current.now = calc.now.value
                }
            }
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


fun <T> dontCalculate(
    vararg ps: ScalarProp<*, *>,
    fn: () -> T
): T {
    val st = ps.map {
        val saved = it.calculationActive
        it.calculationActive = false
        it to saved
    }
    try {
        return fn()
    } finally {
        st.forEach { it.first.calculationActive = it.second }
    }
}

//class EnumProp<in O, T: Enum<T>>(name: String, ops: ScalarProp.Ops<O, T>) : ScalarProp<O, T>(name, ops) {
//    data class Ops<in O, T: Enum<T>>(
//        val scalar: ScalarProp.Ops<O, T>
//    ) {
//        fun prop() = scalar.prop(::EnumProp)
//    }
//}

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

//inline fun <O, reified T: Enum<T>> ScalarProp.Ops<O, T>.enum() = EnumProp.Ops(
//    scalar = copy(
//    )
//)

sealed class IdState<out N, out P> {
    class New<C>(val id: C) : IdState<C, Nothing>()
    data class Persisted<P>(
        val id: P,
        val deleted: Boolean = false
    ) : IdState<Nothing, P>()
}
//data class IdState<I>(
//    val id: I,
//    val exists: Boolean = true
//)

open class FBProps<in O>(initial: CollectionWrap<O>) : Props<O, CollectionWrap<O>, DocWrap<O>>(initial) {

    var collection: CollectionWrap<@UnsafeVariance O>
        set(v) {
            id.transform { st ->
                when (st) {
                    is IdState.New -> IdState.New(v)
                    is IdState.Persisted -> st.copy(
                        id = v.doc(st.id.id)
                    )
                }
            }
        }
        get() = id.now.let { st ->
            when (st) {
                is IdState.New -> st.id
                is IdState.Persisted -> st.id.parent!!
            }
        }


    fun persistedFB(id: String) {
        this.id.transform { i ->
            IdState.Persisted((i as IdState.New).id.doc(id))
        }
    }

    val docWrapOrFail: DocWrap<O>
        get() = (id.now as IdState.Persisted).id

    val idOrFail
        get() = docWrapOrFail.id

    fun save(): Deferred<Unit> {
        return id.now.let { ids ->
            when (ids) {
                is IdState.New -> {
                    val did = ops.createId(ids.id)
                    val dw = ids.id.doc(did)
                    val r = ops.write(dw, write())
                    id.transform { IdState.Persisted(dw) }
                    r
                }
                is IdState.Persisted -> ops.merge(ids.id, merge())
            }
        }
    }

}




open class Props<in O, out N, out P>(initial: N) : PropTasks<O> {

    val id = Var<IdState<@kotlin.UnsafeVariance N, @kotlin.UnsafeVariance P>>(IdState.New(initial))
    internal var list : List<Prop<@UnsafeVariance O>> = listOf()

    val isPersisted by lazy { Rx { id() is IdState.Persisted } }
    val isDeleted by lazy {
        Rx {
            id().let { i ->
                when (i) {
                    is IdState.Persisted -> i.deleted
                    else -> false
                }
            }
        }
    }
    val isValid: RxVal<Boolean> by lazy {
        Rx { list.all { it.isValid() } }
    }

    val onDeleted by lazy {
        val l = Listeners()
        isDeleted.forEach { if (it) l.fire() }
        l
    }


    fun persisted(idv: @UnsafeVariance P) {
        id.now = IdState.Persisted(idv)
    }

    val live = Var(false)

    fun deleted() {
        id.transform { i ->
            (i as IdState.Persisted).copy(deleted = true)
        }
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
        if (!isPersisted.now) {
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
interface HasProps<in O, out N, out P> {
    val props: Props<O, N, P>
}

interface HasFBProps<in O>: HasProps<O, CollectionWrap<O>, DocWrap<O>> {

    override val props: FBProps<O>

}

open class Base<T>(val o: FBPropFactory<T> = FBPropFactory(CollectionWrap(""))) : HasFBProps<T> by o {
}

fun <T: Base<T>> T.withCollection(c: CollectionWrap<T>): T {
    props.collection = c
    return this
}

class FBPropFactory<O>(initial: CollectionWrap<O>) : BasePropFactory<O, CollectionWrap<O>, DocWrap<O>, FBProps<O>>(FBProps(initial)), HasFBProps<O>

open class PropFactory<in O, out N, out P>(initial: N): BasePropFactory<O, N, P, Props<@kotlin.UnsafeVariance O, @kotlin.UnsafeVariance N, @kotlin.UnsafeVariance P>>(Props(initial))

open class BasePropFactory<in O, out N, out P, PR: Props<O, N, P>>(
    override val props: PR
): HasProps<O, N, P> {

    private val registry = object : PropRegsitry<O> {
        override fun register(prop: Prop<@UnsafeVariance O>) {
            props.list += prop
        }
    }

    fun <T> scalar() = ScalarProp.Ops<O, T>(registry)
    fun <T> array() = ScalarProp.Ops.array<O, T>(registry)
    inline fun <reified E: Enum<E>> enum() = scalar<String>().map(
        w = { it.name },
        r = { enumValueOf<E>(it.unsafeCast<String>()) }
    )
}



