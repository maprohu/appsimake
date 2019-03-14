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
import kotlinx.coroutines.launch
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

class Link<P, out F: HasKills>(
    val name: String,
    val root: Boolean,
    converter: PConverter<P>,
    val factory: suspend (P) -> F?,
    val display: (@UnsafeVariance F).() -> Unit
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
        pushState(param, root)
    }

    internal fun pushState(param: P, replace: Boolean) {
        val stateData = "$name/${hashConverter.serialize(param)}"
        if (replace) {
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
                    set(param, i)
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

    internal fun set(param: P, view: @UnsafeVariance F) {
        holder = Holder(param, view).apply {
            view.kills += {
                this.item = null
            }
        }
    }

    internal fun clear() {
        holder = null
    }
}

suspend fun Link<Unit, *>.show() = show(Unit)
suspend fun Link<Unit, *>.fwd() = fwd(Unit)
suspend fun <F: HasKills> Link<Unit, F>.get() = get(Unit)

suspend fun <B: HasKills> Link<BaseParam<B, Unit, Unit>, *>.fwd(base: Link<Unit, B>) = fwd(
    BaseParam(
        LinkParam(base, Unit),
        Unit
    )
)
suspend fun <B: HasKills, P> Link<BaseParam<B, Unit, P>, *>.fwd(base: Link<Unit, B>, param: P) = fwd(
    BaseParam(
        LinkParam(base, Unit),
        param
    )
)

data class LinkParam<P, F: HasKills>(
    val link: Link<P, F>,
    val param: P
) {
    suspend fun get(forcePush: Boolean = false) = link.get(param, forcePush)
}

val <P, F: HasKills> LinkParam<P, F>.withUnit get() = BaseParam(
    this,
    Unit
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
                    link = lc.deserialize(o.base),
                    param = paramConverter.deserialize(o.param)
                )
            }
        )
    }


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

    fun <B: HasKills> linkBase() = linkBase<Unit, B>(UnitConverter)
    fun baseTC() = linkBase<FromTC>()

    fun <BP, B: HasKills> linkBase(
        converter: PConverter<BP> = nullConverter()
    ) = LinkParamBuilder<BP, B>(converter)

    inner class LinkParamBuilder<BP, B: HasKills>(
        private val baseParamConverter: PConverter<BP> = jsonConverter()
    ) {
        fun <P> param(
            converter: PConverter<P> = jsonConverter()
        ) = LinkBuilder(
            false,
            baseConverter<B, BP, P>(
                baseParamConverter,
                converter
            )
        )

        fun <F: HasKillsRedisplay> link(
            get: suspend (LinkParam<BP, B>) -> F?
        ) = param(UnitConverter).link { get(it.link) }

    }

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

class EditorExit<in T>(
    val onPersist: (T) -> Unit = {},
    override val exit: HasRedisplay = GoBack2Redisplay
): HasExit {
    companion object {
        val GoBack = EditorExit<Any?>(
            exit = GoBackRedisplay
        )
        val GoBack2 = EditorExit<Any?>()
    }
}

class LinkParamView<P, F: HasKills>(
    val link: Link<P, F>,
    val param: P,
    val item: F
)

fun <EP, EF: HasKills> exiting(
    new: Link<*, *>,
    edit: LinkParam<EP, EF>
): EditorExit<EF> {
    return EditorExit(
        onPersist = { editor ->
            new.clear()
            edit.apply {
                link.apply {
                    set(param, editor)
                    pushState(param, true)
                }
            }
        },
        exit = GoBackRedisplay
    )
}
fun <VP, VF: HasKills, EP, EF: HasKills> exiting(
    new: Link<*, *>,
    view: LinkParamView<VP, VF>,
    edit: LinkParam<EP, EF>
): EditorExit<EF> {

    var exit = GoBackRedisplay

    return EditorExit(
        onPersist = { editor ->
            new.clear()
            view.apply {
                link.apply {
                    set(param, item)
                    pushState(param, true)
                }
            }
            edit.apply {
                link.apply {
                    set(param, editor)
                    pushState(param, false)
                }
            }
            exit = GoBack2Redisplay
        },
        exit = RedisplayDeps {
            exit.redisplay()
        }
    )
}

typealias NewLink<LP, EP, E> = Link<BaseParam<FromTC, LP, EP>, E>

