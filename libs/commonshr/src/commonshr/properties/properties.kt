package commonshr.properties

import common.dyn
import common.jsNew
import common.named
import commonshr.hasOwnProperty
import rx.Var

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

class PropertyType<V>(
    val copier: Copier<V> = identityCopier(),
    val compare: Compare<V> = compareEquals(),
    val writeDynamic: WriteDynamic<V> = identityWriteDynamic(),
    val readDynamic: ReadDynamic<V> = identityReadDynamic()
)

val IdentityType = PropertyType<Nothing>()
@Suppress("NOTHING_TO_INLINE")
inline fun <V> identityType() = IdentityType.unsafeCast<PropertyType<V>>()


class PropertyItem<T, V>(
    val index: Int,
    val name: String,
    val defaultValue: V,
    val type: PropertyType<V>
) {
    val rxv = Var(defaultValue)
}

fun <V> PropertyItem<*, V>.writeDynamic(ops: DynamicOps): dynamic = type.writeDynamic(now, ops)
fun <V> PropertyItem<*, V>.readDynamic(d: dynamic, ops: DynamicOps) {
    rxv %= type.readDynamic(d, ops)
}
val <V> PropertyItem<*, V>.copy get() = type.copier(now)
fun <V> PropertyItem<*, V>.resetToDefault() { rxv %= defaultValue }


operator fun <V> PropertyItem<*, V>.remAssign(v: V) { rxv %= v }
var <V> PropertyItem<*, V>.now
    get() = rxv.now
    set(v) { rxv.now = v }

operator fun <V> PropertyItem<*, V>.invoke() = rxv()


open class PropertyList<T> {
    val items = mutableListOf<PropertyItem<T, *>>()

    fun <V> prop(
        value: V,
        type: PropertyType<V> = identityType()
    ) = named { name ->
        PropertyItem<T, V>(
            items.size,
            name,
            value,
            type
        ).apply {
            items += this
        }
    }

    fun string() = prop("")
    fun timestamp() = prop(TS.Server, TSPropertyType)

    fun <V> list() = prop(emptyList<V>())

    fun <B: RxBase<*>> rxlist(create: () -> B) = prop(
        emptyList(),
        rxListType(create)
    )

    fun boolean() = prop(false)
}

fun <B: RxBase<*>> rxCompare(a: B, b: B): Boolean {
    return a::class == b::class &&
            a.o.items.size == b.o.items.size &&
            zipItems(a, b).all { (pa, pb) ->
                pa.type.compare.unsafeCast<Compare<Any?>>().invoke(pa(), pb())
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
            new.now = old.copy
        }
    }
}

fun <T: RxBase<*>> T.writeDynamic(ops: DynamicOps): dynamic {
    val d = dyn()

    o.items.forEach { i ->
        d[i.name] = i.writeDynamic(ops)
    }

    return d
}

fun <T: RxBase<*>> T.readDynamic(d: dynamic, ops: DynamicOps) {
    o.items.forEach { i ->
        if (hasOwnProperty(d, i.name)) {
            i.readDynamic(d[i.name], ops)
        } else {
            i.resetToDefault()
        }
    }
}


