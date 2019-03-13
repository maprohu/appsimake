package commonui

import common.named
import common.obj
import commonshr.*
import commonshr.properties.Identity
import commonshr.properties.SuspendIdentity
import domx.on
import killable.HasNoKill
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.produce
import kotlinx.coroutines.launch
import org.w3c.dom.HashChangeEvent
import org.w3c.dom.PopStateEvent
import kotlin.browser.window

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

class Holder<P, F: Any>(
    val param: P,
    var item: F?
)

private val hashData get() = window.location.hash.drop(1)

class Link<P, F: HasKills>(
    val name: String,
    val root: Boolean,
    converter: PConverter<P>,
    val factory: suspend (P) -> F?,
    val display: F.() -> Unit
) {
    val hashConverter = converter + HashSerializer
    suspend fun showLink(param: String) {
        show(hashConverter.deserialize(param))
    }
    private var holder: Holder<P, F>? = null
    suspend fun show(param: P, forcePush: Boolean = false) {
        get(param, forcePush)?.display()
    }
    suspend fun fwd(param: P) {
        show(param, true)
    }


    private fun pushState(param: P) {
        val stateData = "$name/${hashConverter.serialize(param)}"
        if (root) {
            window.history.replaceState(
                stateData,
                "",
                "#$stateData"
            )
        } else if (hashData != stateData) {
            window.history.pushState(
                stateData,
                "",
                "#$stateData"
            )
        }
    }

    suspend fun get(param: P, forcePush: Boolean = false): F? {
        holder.let { h ->
            return if (h == null || h.param != param || h.item == null) {
                factory(param)?.also { i ->
                    holder = Holder(param, i).apply {
                        i.kills += {
                            this.item = null
                        }
                    }
                    pushState(param)
                }
            } else {
                if (forcePush) {
                    pushState(param)
                }
                h.item!!
            }
        }
    }
}

suspend fun Link<Unit, *>.show() = show(Unit)
suspend fun Link<Unit, *>.fwd() = fwd(Unit)
suspend fun <F: HasKills> Link<Unit, F>.get() = get(Unit)

data class LinkParam<P, F: HasKills>(
    val link: Link<P, F>,
    val param: P
)
data class BaseParam<B: HasKills, PB, P>(
    val link: LinkParam<PB, B>,
    val param: P
)

external interface LinkParamObject {
    var link: String
    var param: dynamic
}

external interface BaseParamObject {
    var base: LinkParamObject
    var param: dynamic
}

abstract class LinksBase(coroutineScope: CoroutineScope): CoroutineScope by coroutineScope {
    private val links = mutableMapOf<String, Link<*, *>>()

    fun <P, F: HasKills> linkConverter(
        paramConverter: PConverter<P> = nullConverter()
    ): Converter<LinkParam<P, F>, LinkParamObject> = Converter(
        serialize = { lp ->
            obj {
                link = lp.link.name
                param = paramConverter.serialize(lp.param)
            }
        },
        deserialize = { o ->
            LinkParam(
                link = links[o.link]!!.unsafeCast<Link<P, F>>(),
                param = paramConverter.deserialize(o.param)
            )
        }
    )

    fun <B: HasKills, BP, P> baseConverter(
        baseParamConverter: PConverter<BP> = nullConverter(),
        paramConverter: PConverter<P> = nullConverter()
    ): Converter<BaseParam<B, BP, P>, BaseParamObject> {
        val lc = linkConverter<BP, B>(baseParamConverter)

        return Converter(
            serialize = { lp ->
                obj {
                    base = lc.serialize(lp.link)
                    param = paramConverter.serialize(lp.param)
                }
            },
            deserialize = { o ->
                BaseParam(
                    link = links[o.link]!!.unsafeCast<Link<P, F>>(),
                    param = paramConverter.deserialize(o.param)
                )
            }
        )


        abstract val welcome: Link<Unit, *>

        init {
            APP.startRegisteringServiceWorker()
        }

        fun <F: HasKillsRedisplay> link(
            root: Boolean = false,
            get: suspend () -> F?
        ) = param(root, UnitConverter).link { get() }


        fun <P> param(
            root: Boolean = false,
            converter: PConverter<P> = nullConverter()
        ) = LinkBuilder(root, converter)


        inner class LinkBuilder<P>(
            val root: Boolean = false,
            val converter: PConverter<P> = nullConverter()
        ) {
            fun <F: HasKillsRedisplay> link(
                get: suspend (P) -> F?
            ) = named { name ->
                Link(
                    name,
                    root,
                    converter,
                    get,
                    { redisplay() }
                ).also {
                    links[name] = it
                }
            }
        }

        fun <P, F: HasKills> linkParam(
            converter: PConverter<P> = nullConverter()
        ) = LinkParamBuilder<P, F>(converter)

//    inner class LinkParamBuilder<BP, B: HasKills>(
//        converter: PConverter<BP> = jsonConverter()
//    ) {
//        private val lc = linkConverter<BP, B>(converter)
//        private val lb = LinkBuilder(false, lc)
//
//        fun <P> param(
//            converter: PConverter<P> = jsonConverter()
//        ) = LinkBuilder(root, converter)
//
//        fun <F: HasKillsRedisplay> link(
//            get: suspend (P, B) -> F?
//        ) = lb.link { lp ->
//            lp.link.get(lp.param)?.let { l -> get(lp.param, l) }
//        }
//    }

        private fun listenPopstates() {
            val states = Channel<String>(Channel.UNLIMITED)
            window.on<PopStateEvent>(
                HasNoKill,
                "popstate"
            ) {
                states.offer(hashData)
            }
            launch {
                for (h in states) {
                    showHash(h)
                }
            }
        }

        suspend fun load() {
            listenPopstates()
            showHash(hashData)
        }

        suspend fun showHash(hash: String) {
            val linkName = hash.substringBefore('/')

            val link = links[linkName]

            if (link != null) {
                try {
                    link.showLink(hash.substringAfter('/', ""))
                } catch (e: dynamic) {
                    reportd(e)
                    welcome.show()
                }
            } else {
                welcome.show()
            }
        }
    }


}


