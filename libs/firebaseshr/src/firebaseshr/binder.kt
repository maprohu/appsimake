package firebaseshr

import common.*
import commonlib.CollectionWrap
import commonlib.DocWrap
import commonshr.SetDiff
import firebaseshr.firestore.Timestamp
import kotlinx.coroutines.Deferred
import rx.*

fun hasOwnProperty(d: dynamic, prop: String) = d.hasOwnProperty(prop).unsafeCast<Boolean>()
fun <T> opt(d: dynamic, name: String) = if (hasOwnProperty(d, name)) Some(d[name].unsafeCast<T>()) else None


data class PropOps(
    val delete: () -> dynamic,
    val serverTimestamp: () -> Timestamp,
    val deleteCollection: (CollectionWrap<*>) -> Deferred<Unit>,
    val createId: (CollectionWrap<*>) -> String,
    val write: (DocWrap<*>, dynamic) -> Deferred<Unit>,
    val merge: (DocWrap<*>, dynamic) -> Deferred<Unit>,
    val arrayUnion: (items: Array<dynamic>) -> dynamic,
    val arrayRemove: (items: Array<dynamic>) -> dynamic
) {
    companion object {
        fun notInitialized(): Nothing {
            throw IllegalStateException("Firebase binderOps not initialized!")
        }
    }
}

internal var binderOpsInternal: PropOps? = null
val binderOps
    get() = binderOpsInternal ?: PropOps.notInitialized()

fun initBinder(ops: PropOps) {
    binderOpsInternal = ops
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
    fun deleteTo(o: dynamic)
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

class ScalarProp<in O, T>(
    name: String,
    ops: Ops<O, T>
) : ScalarPropBase<O, T>(name, ops) {

    override fun extractInitial(o: dynamic) {
        initial.now = extractPropValue(o).map(ops.read)
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
            }.getOrElse(binderOps.delete)
        }
    }

    override fun calculateDirty(): Boolean {
        return initial() != current()
    }

}

abstract class ScalarPropBase<in O, T>(
    override val name: String,
    protected val ops: Ops<O, T>
) : Prop<O> {

    var ignoreDirty = ops.ignoreDirty

    init {
        @Suppress("LeakingThis")
        ops.registry.register(this)
    }


    protected fun extractPropValue(o: dynamic): Optional<dynamic> {
       return opt(o, name)
    }

    fun write(v: T) = ops.write(v)


    override fun deleteTo(o: dynamic) {
        if (!initial.now.isEmpty()) {
            o[name] = binderOps.delete()
        }
    }

    data class Ops<in O, T>(
        val registry: PropRegsitry<O>,
        val ignoreDirty: Boolean = false,
        val read: (dynamic) -> T = { it.unsafeCast<T>() },
        val write: (T) -> dynamic = { it.asDynamic() },
        val merge: ((old: T, new: T) -> dynamic)? = null,
        val calculate : (() -> Lazy<Optional<T>>)? = null,
        val defaultValue: () -> Optional<T> = { None },
        val validate: (Optional<T>) -> Set<ValidationError> = ValidationError.emptyValidator
    ) {
        fun prop(fn: (String, Ops<O, T>) -> ScalarProp<@UnsafeVariance O, T> = ::ScalarProp) = named { fn(it, this) }
        fun withDefault(v: () -> T) = copy(defaultValue = { Some(v()) } )
        fun withDefault(v: T) = copy(defaultValue = { Some(v) } )
        fun withIgnoreDirty(v: Boolean = true) = copy(ignoreDirty = v)
        fun calculated(fn: () -> Lazy<Optional<T>>) = copy(
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
            inline fun <O, T> array(regsitry: PropRegsitry<O>) = ScalarPropBase.Ops<O, Array<T>>(regsitry).copy(
                defaultValue = { Some(arrayOf()) }
            )
        }
    }

    val initial = Var(ops.defaultValue())

    val iv
        get() = initial.get()
//        set(v) = initial.set(v)


    val current = Var(initial.now)

    var cv
        get() = current.get()
        set(v) = current.set(v)


    val calculated
        get() = ops.calculate != null

    abstract fun calculateDirty(): Boolean

    override val dirty: RxVal<Boolean> = if (calculated) Rx { false } else Rx {
        if (ignoreDirty) false else {
            calculateDirty()
        }
    }

    override val validationErrors by lazy {
        Rx { ops.validate(current()) }
    }

    open fun calculateIsValid(): Boolean {
        return validationErrors().isEmpty()
    }

    override val isValid by lazy {
        Rx {
            calculateIsValid()
        }
    }


    override fun resetInitial() {
        initial.now = ops.defaultValue()
    }

    var calculationActive = ops.calculate != null

    val calced : Var<Lazy<Optional<T>>> = Var(lazyOf<Optional<T>>(None))

    val beforeWrite: () -> Unit =
        ops.calculate?.let { c ->
            Rx { c() }.forEach { calced.now = it };

            {
                if (calculationActive) {
                    current.now = calced.now.value
                }
            }
        } ?: {}

    override fun writeTo(o: dynamic) {
        beforeWrite()
        current.now.forEach { o[name] = ops.write(it) }
    }

    override fun clearDirty() {
        initial.now = current.now
    }

    override fun rollback() {
        current.now = initial.now
    }

}

fun <O, T: BaseRootVal<T>> ScalarPropBase.Ops<O, T>.baseProp(
    wrapper: (dynamic) -> T
) = named { n ->
    BaseValProp(
        n,
        this.copy(
            read = { d -> wrapper(d).also { it.props.extractInitial(d) } },
            write = { t -> t.props.write() },
            merge = { _, _ -> throw Error("merge should not be called for BaseValProp") }
        ),
        wrapper
    )
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

fun <O, T> ScalarPropBase.Ops<O, T>.arrayOf() = ScalarPropBase.Ops.array<O, dynamic>(registry).map(
    r = { it.map(read).toTypedArray() },
    w = { it.map(write).toTypedArray() }
)

fun <O, T> ScalarPropBase.Ops<O, Array<T>>.toSet() = map(
    r = { it.toSet() },
    w = { it.toTypedArray() }
).let { mapped ->
    mapped.copy(
        merge = { old, new ->
            with(SetDiff.of(old, new)) {
                when {
                    added.isEmpty() -> binderOps.arrayRemove(
                        write(removed.toTypedArray()).unsafeCast<Array<dynamic>>()
                    )
                    removed.isEmpty() -> binderOps.arrayUnion(
                        write(added.toTypedArray()).unsafeCast<Array<dynamic>>()
                    )
                    else -> mapped.write(new)
                }
            }
        }
    )
}

fun <O, T> ScalarPropBase.Ops<O, Array<T>>.toList() = map(
    r = { it.toList() },
    w = { it.toTypedArray() }
)

fun <O, T: Comparable<T>> ScalarPropBase.Ops<O, Array<T>>.sorted() = map(
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
                    val did = binderOps.createId(ids.id)
                    val dw = ids.id.doc(did)
                    val r = binderOps.write(dw, write())
                    id.transform { IdState.Persisted(dw) }
                    r
                }
                is IdState.Persisted -> binderOps.merge(ids.id, merge())
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

    override fun deleteTo(o: dynamic) {
        list.forEach { it.deleteTo(o) }
    }

}
interface HasProps<in O, out N, out P> {
    val props: Props<O, N, P>
}

interface HasFBProps<in O>: HasProps<O, CollectionWrap<O>, DocWrap<O>> {

    override val props: FBProps<O>

}

open class BaseVal<out T, N, P, PS: Props<T, N, P>, PF: BasePropFactory<T, N, P, PS>>(val o: PF) : HasProps<T, N, P> by o

@Suppress("DELEGATED_MEMBER_HIDES_SUPERTYPE_OVERRIDE")
open class Base<T>(
    o: FBPropFactory<T> = FBPropFactory(CollectionWrap(""))
) : BaseVal<T, CollectionWrap<T>, DocWrap<T>, FBProps<T>, FBPropFactory<T>>(o), HasFBProps<T> by o

open class BaseRootVal<out T: BaseRootVal<T>> : BaseVal<@kotlin.UnsafeVariance T, Unit, Unit, Props<@kotlin.UnsafeVariance T, Unit, Unit>, PropFactory<@kotlin.UnsafeVariance T, Unit, Unit>>(
    PropFactory(Unit)
) {
    val type by o.scalar<String>().withDefault { this::class.js.name }.prop()
}

open class BaseRoot<out T: BaseRoot<T>> : Base<@kotlin.UnsafeVariance T>() {
    val type by o.scalar<String>().withDefault { this::class.js.name }.prop()
}

class BaseRootCheck: BaseRootVal<BaseRootCheck>()

fun <T: Base<*>> T.currentFrom(d: dynamic): T {
    initFrom(d)
    props.rollback()
    return this
}
fun <T: HasProps<*, *, *>> T.initFrom(d: dynamic): T {
    props.extractInitial(d)
    return this
}

// waiting for KClass.sealedSubclasses to be implemented in KotlinJS
fun <T: BaseVal<T, *, *, *, *>> wrapper(
    vararg classes: () -> T
) : (dynamic) -> T {
    val typeMap =
        classes
            .map { cl ->
                cl()::class.simpleName!! to cl
            }
            .toMap()

    return { d ->
        BaseRootCheck().apply {
            props.extractInitial(d)
        }.let { ch ->
            typeMap.getValue(ch.type.initial.now.get())()
        }
    }
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

    fun <T> scalar() = ScalarPropBase.Ops<O, T>(registry)
    fun <T> array() = ScalarPropBase.Ops.array<O, T>(registry)
    inline fun <reified E: Enum<E>> enum() = scalar<String>().map(
        w = { it.name },
        r = { enumValueOf<E>(it.unsafeCast<String>()) }
    )
}




