package commonshr.properties

import rx.RxIface
import kotlin.reflect.KClass

fun <V: RxBase<*>> rxListType(
    create: () -> V
) = rxListType(
    read = { d, ops ->
        create().apply {
            readDynamic(d, ops)
        }
    }
)

fun <V: RxBase<*>> rxListType(
    read: (dynamic, DynamicOps) -> V
) = PropertyType(
    copier = { list ->
        list.map { e -> e.copy() }
    },
    compare = { a, b ->
        a.size == b.size &&
                a.asSequence().zip(b.asSequence()).all { (ba, bb) ->
                    rxCompare(ba, bb)
                }
    },
    writeDynamic = { list, ops ->
        list.map { item ->
            @Suppress("UnsafeCastFromDynamic")
            item.writeDynamic(ops)
        }.toTypedArray()
    },
    readDynamic = { d, ops ->
        d.unsafeCast<Array<dynamic>>().map { i -> read(i, ops) }
    }
)

val ServerTimestampPropertyType = PropertyType<TS>(
    compare = { _, _ ->  true },
    writeDynamic = { _, ops ->
        ops.writeTimestamp(TS.Server)
    }
)

inline fun <reified E: Enum<E>> enumType() = PropertyType<E>(
    writeDynamic = { e, _ -> e.name },
    readDynamic = { d, _ -> enumValueOf(d.unsafeCast<String>()) }
)

fun <V> arrayOfScalarType(type: PropertyType<V>) = PropertyType<List<V>>()

fun <V> calcType(rxv: RxIface<V>, write: WriteDynamic<V>) = PropertyType(
    compare = { _, _ -> true },
    writeDynamic = { _, ops -> write(rxv.now, ops) },
    readDynamic = { _, _ -> rxv.now }
)
