package commonshr

import common.Optional
import common.jsNew
import common.named
import rx.Var

typealias Copier<V> = (V) -> V
typealias Compare<V> = (V, V) -> Boolean

val Identity: Copier<Nothing> = { it }
val CompareEquals: Compare<Any?> = { a, b -> a == b }

@Suppress("NOTHING_TO_INLINE")
inline fun <V> identity(): Copier<V> = Identity.unsafeCast<Copier<V>>()
@Suppress("NOTHING_TO_INLINE")
inline fun <V> compareEquals(): Compare<V> = CompareEquals.unsafeCast<Compare<V>>()

class PropertyItem<T, V>(
    val index: Int,
    val name: String,
    value: V,
    val copier: Copier<V> = identity(),
    val compare: Compare<V> = compareEquals()
) {
    val rxv = Var(value)
    val copy get() = copier(now)
}


operator fun <V> PropertyItem<*, V>.remAssign(v: V) { rxv %= v }
var <V> PropertyItem<*, V>.now
    get() = rxv.now
    set(v) { rxv.now = v }

operator fun <V> PropertyItem<*, V>.invoke() = rxv()


open class PropertyList<T> {
    val items = mutableListOf<PropertyItem<T, *>>()

    fun <V> prop(
        value: V,
        copier: Copier<V> = identity(),
        compare: Compare<V> = compareEquals()
    ) = named { name ->
        PropertyItem<T, V>(
            items.size,
            name,
            value,
            copier,
            compare
        ).apply {
            items += this
        }
    }

    fun string() = prop("")
    fun timestamp() = prop<TS>(TS.Server)

    fun <V> list() = prop(emptyList<V>())

    fun <B: RxBase<*>> rxlist() = prop(
        emptyList<B>(),
        copier = { list ->
            list.map { e -> e.copy() }
        },
        compare = { a, b ->
            a.size == b.size &&
                    a.asSequence().zip(b.asSequence()).all { (ba, bb) ->
                        rxCompare(ba, bb)
                    }
        }
    )

    fun boolean() = prop(false)
}

fun <B: RxBase<*>> rxCompare(a: B, b: B): Boolean {
    return a::class == b::class &&
            a.o.items.size == b.o.items.size &&
            zipItems(a, b).all { (pa, pb) ->
                pa.compare.unsafeCast<Compare<Any?>>().invoke(pa(), pb())
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

