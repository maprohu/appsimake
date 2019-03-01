package commonshr.properties

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

val TSPropertyType = PropertyType<TS>(
    compare = { _, _ ->  true },
    writeDynamic = { v, ops ->
        ops.writeTimestamp(v)
    }
)
