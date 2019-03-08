package commonshr.properties

import common.NamedDelegate
import common.dyn
import common.jsNew
import common.named
import commonshr.hasOwnProperty
import killable.HasNoKill
import killable.NoKill
import rx.*

typealias Copier<V> = (V) -> V
typealias Compare<V> = (V, V) -> Boolean

val Identity: (Any?) -> Any? = { it }
val CompareEquals: Compare<Any?> = { a, b -> a == b }

typealias WriteDynamic<T> = (T, DynamicOps) -> dynamic
typealias ReadDynamic<T> = (dynamic, DynamicOps) -> T
val IdentityWriteDynamic: WriteDynamic<Any?> = { t, _ -> t.asDynamic() }
val IdentityReadDynamic: ReadDynamic<Nothing> = { t, _ -> t.unsafeCast<Nothing>() }

@Suppress("NOTHING_TO_INLINE")
inline fun <V> identityCopier(): Copier<V> = Identity.unsafeCast<Copier<V>>()
@Suppress("NOTHING_TO_INLINE")
inline fun <V> identityWriteDynamic(): WriteDynamic<V> = IdentityWriteDynamic
@Suppress("NOTHING_TO_INLINE")
inline fun <V> identityReadDynamic(): ReadDynamic<V> = IdentityReadDynamic
@Suppress("NOTHING_TO_INLINE")
inline fun <V> compareEquals(): Compare<V> = CompareEquals.unsafeCast<Compare<V>>()

interface ReadWrite<V> {
    val writeDynamic: WriteDynamic<V>
    val readDynamic: ReadDynamic<V>
}
class PropertyType<V>(
    val copier: Copier<V> = identityCopier(),
    val compare: Compare<V> = compareEquals(),
    override val writeDynamic: WriteDynamic<V> = identityWriteDynamic(),
    override val readDynamic: ReadDynamic<V> = identityReadDynamic()
): ReadWrite<V>

val IdentityType = PropertyType<Nothing>()
@Suppress("NOTHING_TO_INLINE")
inline fun <V> identityType() = IdentityType.unsafeCast<PropertyType<V>>()

open class ROProp<T, V>(
    val name: String,
    override val rxv: RxIface<V>,
    val write: WriteDynamic<V>
): RxIface<V> by rxv, HasRx<V>

open class RWProp<T, V>(
    name: String,
    override val rxv: Var<V>,
    write: WriteDynamic<V>
) : ROProp<T, V>(name, rxv, write), HasVar<V> {
    override var now: V
        get() = rxv.now
        set(v) { rxv.now = v }
    operator fun remAssign(v: V) { rxv %= v }
}

class EnumProp<T, E: Enum<E>>(
    name: String,
    rxv: Var<E>,
    write: WriteDynamic<E>,
    val nameVar: Var<String>,
    val values: List<E>
) : RWProp<T, E>(name, rxv, write)

interface ScalarArrayProp<T, E> {
    val name: String
    val writeElement: (E, DynamicOps) -> dynamic
}

class ROArrayProp<T, S, E>(
    name: String,
    rxv: RxIface<S>,
    write: WriteDynamic<S>,
    override val writeElement: (E, DynamicOps) -> dynamic
) : ROProp<T, S>(name, rxv, write), ScalarArrayProp<T, E>

class RWArrayProp<T, E>(
    name: String,
    rxv: Var<Set<E>>,
    write: WriteDynamic<Set<E>>,
    override val writeElement: (E, DynamicOps) -> dynamic
) : RWProp<T, Set<E>>(name, rxv, write), ScalarArrayProp<T, E>

//class PropertyItem<T, V>(
//    val index: Int,
//    override val name: String,
//    val defaultValue: V,
//    override val type: PropertyType<V>
//): ROProp<T, V> {
//    override val rxv = Var(defaultValue)
//
//    operator fun invoke() = rxv()
//}
//
//fun <V> PropertyItem<*, V>.writeDynamic(ops: DynamicOps): dynamic = type.writeDynamic(now, ops)
//fun <V> PropertyItem<*, V>.readDynamic(d: dynamic, ops: DynamicOps) {
//    rxv %= type.readDynamic(d, ops)
//}
//val <V> PropertyItem<*, V>.copy get() = type.copier(now)
//fun <V> PropertyItem<*, V>.resetToDefault() { rxv %= defaultValue }
//
//
//var <V> PropertyItem<*, V>.now
//    get() = rxv.now
//    set(v) { rxv.now = v }
//
//operator fun <V> PropertyItem<*, V>.invoke() = rxv()


class PropertyListItem<V>(
    val name: String,
    val write: (DynamicOps) -> dynamic,
    val read: (dynamic, DynamicOps) -> Unit,
    val get: () -> V,
    val copy: () -> V,
    val set: (V) -> Unit,
    val reset: () -> Unit,
    val compare: (V) -> Boolean
)


open class PropertyList<T> {
    val items = mutableListOf<PropertyListItem<*>>()

    fun <V> readOnlyProp(
        value: V,
        type: PropertyType<V> = identityType()
    ) : NamedDelegate<ROProp<T, V>> = prop(value, type)

    fun <V> addProperty(name: String, value: V, type: PropertyType<V>): Var<V> {
        val rxv = Var(value)
        items += PropertyListItem(
            name = name,
            write = { ops -> type.writeDynamic(rxv.now, ops) },
            read = { d, ops -> rxv %= type.readDynamic(d, ops) },
            get = { rxv() },
            copy = { type.copier(rxv.now) },
            set = { v -> rxv %= v },
            reset = { rxv %= value },
            compare = { v -> type.compare(rxv(), v) }
        )
        return rxv
    }

    fun <V> prop(
        value: V,
        type: PropertyType<V> = identityType()
    ) = named { name ->
        val rxv = addProperty(name, value, type)

        RWProp<T, V>(
            name,
            rxv,
            type.writeDynamic
        )
    }

    fun string() = prop("")
    inline fun <reified E: Enum<E>> enum(v: E) = named { name ->
        val type = enumType<E>()
        val rxv = addProperty(name, v, type)

        EnumProp<T, E>(
            name,
            rxv,
            type.writeDynamic,
            rxv.toName(HasNoKill),
            enumValues<E>().toList()
        )
    }
    fun number() = prop<Number>(0)
    fun serverTimestamp() = readOnlyProp(TS.Server, ServerTimestampPropertyType)

    fun <V> array(type: PropertyType<V> = PropertyType()) = prop(emptyList(), arrayOfScalarType(type))

    fun <V> set()= named { name ->
        val value = emptySet<V>()
        val elementType = PropertyType<V>()
        val type = setOfScalarType<V>()
        val rxv = addProperty(name, value, type)

        RWArrayProp<T, V>(
            name,
            rxv,
            type.writeDynamic,
            elementType.writeDynamic
        )
    }

    fun <B: RxBase<*>> rxlist(create: () -> B) = prop(
        emptyList(),
        rxListType(create)
    )

    fun boolean() = prop(false)


    fun <V> addCalc(
        name: String,
        write: WriteDynamic<V> = identityWriteDynamic(),
        fn: () -> V
    ): Rx<V> {
        val rxv = Rx(NoKill) { fn() }
        items += PropertyListItem(
            name = name,
            write = { ops -> write(rxv.now, ops) },
            read = { _, _ -> },
            get = { rxv() },
            copy = { rxv.now },
            set = {},
            reset = {},
            compare = { true }
        )
        return rxv
    }

    fun <V> calc(
        write: WriteDynamic<V> = identityWriteDynamic(),
        fn: () -> V
    ) =
        named { name ->
            val rxv = addCalc(name, write, fn)

            ROProp<T, V>(
                name,
                rxv,
                write
            )
        }

    fun <E> calcSet(
        fn: () -> Set<E>
    ) = calcSetGeneric<Set<E>, E>(
        fn,
        setOfScalarType<E>().writeDynamic,
        identityWriteDynamic()
    )

    fun <S, E> calcSetGeneric(
        fn: () -> S,
        write: WriteDynamic<S>,
        writeElement: WriteDynamic<E>
    ) =
        named { name ->
            val rxv = addCalc(name, write, fn)

            ROArrayProp<T, S, E>(
                name,
                rxv,
                write,
                writeElement
            )
        }

    fun <E> lazySet(
        write: WriteDynamic<Set<E>> = setOfScalarType<E>().writeDynamic,
        writeElement: WriteDynamic<E> = identityWriteDynamic(),
        fn: () -> Lazy<Set<E>>
    ) = calcSetGeneric(
        fn = fn,
        write = { v, ops -> write(v.value, ops) },
        writeElement = writeElement
    )

    fun <V> lazy(write: WriteDynamic<V> = identityWriteDynamic(), fn: () -> Lazy<V>) =
            calc(
                write = { v, ops -> write(v.value, ops) },
                fn = fn
            )
}

fun <B: RxBase<*>> rxCompare(a: B, b: B): Boolean {
    return a::class == b::class &&
            a.o.items.size == b.o.items.size &&
            zipItems(a, b).all { (pa, pb) ->
                pa.compare(pb.get().unsafeCast<Nothing>())
            }
}

open class RxBase<T> {
    val o = PropertyList<T>()
}

fun <B: RxBase<*>> zipItems(a: B, b: B) =
    a.o.items.asSequence().zip(b.o.items.asSequence())

fun <B: RxBase<*>> B.copy(): B {
    return jsNew(this::class.js).also { c ->
        zipItems(this, c).forEach { (old, new) ->
            new.set(old.copy().unsafeCast<Nothing>())
        }
    }
}

fun <T: RxBase<*>> T.writeDynamic(ops: DynamicOps): dynamic {
    val d = dyn()

    o.items.forEach { i ->
        d[i.name] = i.write(ops)
    }

    return d
}

fun <T: RxBase<*>> T.readDynamic(d: dynamic, ops: DynamicOps) {
    o.items.forEach { i ->
        if (hasOwnProperty(d, i.name)) {
            i.read(d[i.name], ops)
        } else {
            i.reset()
        }
    }
}


