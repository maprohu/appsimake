package commonui.links

import commonui.*
import commonshr.*
import commonshr.decodeURIComponent
import commonshr.encodeURIComponent

class Converter<D, S>(
    val serialize: (D) -> S,
    val deserialize: suspend (S) -> D
)

val NullConverter = Converter(
    serialize = Identity,
    deserialize = SuspendIdentity
)

val URIEncoder = Converter<String, String>(
    serialize = { encodeURIComponent(it) },
    deserialize = { decodeURIComponent(it) }
)

@Suppress("UnsafeCastFromDynamic")
val JsonConverter = Converter<dynamic, String>(
    serialize = { JSON.stringify(it) },
    deserialize = { JSON.parse(it)}
)

val HashSerializer = JsonConverter + URIEncoder

operator fun <A, B, C> Converter<A, B>.plus(other: Converter<B, C>) = Converter<A, C>(
    serialize = { other.serialize(serialize(it))},
    deserialize = { deserialize(other.deserialize(it)) }
)

@Suppress("NOTHING_TO_INLINE")
inline fun <T> jsonConverter() = JsonConverter.unsafeCast<Converter<T, String>>()
@Suppress("NOTHING_TO_INLINE")
inline fun <T> Converter<T, *>.toDynamic() = unsafeCast<Converter<T, dynamic>>()
@Suppress("NOTHING_TO_INLINE")
inline fun <D, S> nullConverter() = NullConverter.unsafeCast<Converter<D, S>>()

typealias PConverter<T> = Converter<T, dynamic>

val UnitConverter = Converter<Unit, dynamic>(
    serialize = {null},
    deserialize = {Unit}
)

typealias HashItem = String
typealias HashStruct = List<HashItem>
val EmptyHashStruct = emptyList<HashItem>()

typealias HashItemizer<T> = Converter<T, HashItem>

fun HashStruct.split() = run {
    require(isNotEmpty()) { "Cannot split empty HashStruct." }

    SplitHash(
        item = last(),
        struct = dropLast(1)
    )
}

class NamedHashStruct(
    val name: String,
    val hash: HashStruct
)

val HashStruct.toNamed get() = split().toNamed
val SplitHash.toNamed get() = NamedHashStruct(
    name = item,
    hash = struct
)

data class SplitHash(
    val item: HashItem,
    val struct: HashStruct
)

typealias Hasher<T> = Transformer<T, HashStruct>
typealias LinkHasher<P, L> = Hasher<LinkParam<P, L>>

internal fun <P, F: LView> linkNameHashItemizer(links: Map<String, Link<*, *>>) =
    HashItemizer(
        serialize = { it.name },
        deserialize = { links.getValue(it).unsafeCast<Link<P, F>>() }
    )

fun <P, L: LView> linkHashTransformer(
    nc: HashItemizer<Link<P, L>>
) = Hasher(
    serialize = { link, hash ->
        link.link.converter.serialize(link.param, hash) + nc.serialize(link.link)
    },
    deserialize = { hash ->
        val split = hash.split()

        nc.deserialize(split.item).let { link ->
            link.converter.deserialize(split.struct).let { out ->
                TransformerOutput(
                    LinkParam(
                        link,
                        out.data
                    ),
                    out.serialized
                )
            }
        }
    }
)

fun <D> singleHashTransformer(
    converter: HashItemizer<D>
): Hasher<D> = Hasher(
    serialize = { data, struct ->
        struct + converter.serialize(data)
    },
    deserialize = { struct ->
        val split = struct.split()

        TransformerOutput(
            converter.deserialize(split.item),
            split.struct
        )
    }
)

val StringHasher = singleHashTransformer<String>(nullConverter())


operator fun <D, S, D2> Transformer<D, S>.plus(converter: Converter<D2, D>): Transformer<D2, S> = Transformer(
    serialize = { data, serialized ->
        serialize(converter.serialize(data), serialized)
    },
    deserialize = { serialized ->
        deserialize(serialized).let { out ->
            TransformerOutput(
                converter.deserialize(out.data),
                out.serialized
            )
        }
    }
)


fun String.toHashItem(): HashItem = decodeURIComponent(this)
fun String.toHashStruct(): HashStruct = split('/').toList().map { it.toHashItem() }
fun HashItem.toHashStringItem() = encodeURIComponent(this)
fun HashStruct.toHashString() = joinToString("/") { it.toHashStringItem() }

//typealias NewLink<LP, EP, E> = Link<BaseParam<FromTC, LP, EP>, E>

data class LinkId<P, I>(
    val parent: P,
    val id: I
)

val <I> I.asChildLinkId get() = LinkId(Unit, this)

data class TransformerOutput<D, S>(
    val data: D,
    val serialized: S
)
class Transformer<D, S>(
    val serialize: (data: D, serialized: S) -> S,
    val deserialize: suspend (serialized: S) -> TransformerOutput<D, S>
)


fun <D, S> constantTransformer(data: D) = Transformer<D, S>(
    serialize = { _, serialized -> serialized },
    deserialize = { serialized -> TransformerOutput(data, serialized) }
)


val UnitTransformer = constantTransformer<Unit, Nothing>(Unit)

fun <S> unitTransformer() = UnitTransformer.unsafeCast<Transformer<Unit, S>>()

val UnitHasher = unitTransformer<HashStruct>()


fun <P, I, S> linkIdTransformer(
    parent: Transformer<P, S>,
    id: Transformer<I, S>
) = Transformer<LinkId<P, I>, S>(
    serialize = { linkId, str ->
        id.serialize(linkId.id, parent.serialize(linkId.parent, str))
    },
    deserialize = { lio ->
        parent.deserialize(lio).let { (dp, sp) ->
            id.deserialize(sp).let { (di, si) ->
                TransformerOutput(
                    LinkId(dp, di),
                    si
                )
            }
        }
    }
)
fun <P, S> parentLinkIdTransformer(
    converter: Transformer<P, S>
) = linkIdTransformer(
    converter,
    unitTransformer()
)

fun <I, S> childLinkIdTransformer(
    converter: Transformer<I, S>
) = linkIdTransformer(
    unitTransformer(),
    converter
)

fun <A, B, S> pairTransformer(
    ta: Transformer<A, S>,
    tb: Transformer<B, S>
): Transformer<Pair<A, B>, S> = Transformer(
    serialize = { pair, str ->
        tb.serialize(pair.second, ta.serialize(pair.first, str))
    },
    deserialize = { lio ->
        ta.deserialize(lio).let { (da, sa) ->
            tb.deserialize(sa).let { (db, sb) ->
                TransformerOutput(
                    Pair(da, db),
                    sb
                )
            }
        }
    }
)


fun <T, S> listTransformer(
    ts: List<Transformer<T, S>>
): Transformer<List<T>, S> = Transformer(
    serialize = { list, str ->
        require(ts.size == list.size)
        ts.zip(list).fold(str) { s, ti ->
            ti.first.serialize(ti.second, s)
        }
    },
    deserialize = { lio ->
        ts.foldRight(TransformerOutput(emptyList<T>(), lio)) { t, o ->
            t.deserialize(o.serialized).let { to ->
                TransformerOutput(
                    o.data + to.data,
                    to.serialized
                )
            }
        }.let { o ->
            TransformerOutput(
                o.data.reversed(),
                o.serialized
            )
        }
    }
)

