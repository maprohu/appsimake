package commonui

import common.named
import commonshr.*
import domx.on
import killable.HasNoKill
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import org.w3c.dom.PopStateEvent
import kotlin.browser.window



class Holder<P, F: Any>(
    val param: P,
    var item: F?
)

private val hashData get() = window.location.hash.drop(1)


typealias LView = HasKillsRedisplay


class Link<P, out F: LView>(
    internal val linksBase: LinksBase,
    internal val name: String,
    internal val converter: Hasher<P>,
    internal val factory: suspend (P) -> F?
) {
//    val hashConverter = converter + HashSerializer
//
//    suspend fun showLink(param: String) {
//        show(hashConverter.deserialize(param))
//    }

    private var holder: Holder<P, F>? = null
    suspend fun show(param: P) {
        get(param)?.redisplay?.invoke()
    }
    suspend fun fwd(param: P) {
        show(param)
    }

    internal val root = false

    private fun pushState(param: P) {
        pushState(param, root)
    }

    internal fun pushState(param: P, replace: Boolean) {
        val stateData = linksBase.linkHasher<P, F>().serialize(LinkParam(this, param), EmptyHashStruct).toHashString()
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

    suspend fun get(param: P): F? {
        holder.let { h ->
            return if ( h?.item == null || h.param != param ) {
                factory(param)?.also { i ->
                    set(param, i)
                    pushState(param)
                }
            } else {
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

    fun <SF: HasKillsRedisplay> subLink(fn: suspend (F) -> SF) = subParam(UnitConverter).link { bp ->
        get(bp.link.param)?.let { fn(it) }
    }



    fun <SP> subParam(subParamConverter: PConverter<SP> = nullConverter()): LinksBase.LinkBuilder<BaseParam<@UnsafeVariance F, P, SP>> =
        linksBase.linkBase<P, F>(converter).param(subParamConverter)

}

suspend fun Link<Unit, *>.show() = show(Unit)
suspend fun Link<Unit, *>.fwd() = fwd(Unit)
suspend fun <F: LView> Link<Unit, F>.get() = get(Unit)

//suspend fun <B: HasKills> Link<BaseParam<B, Unit, Unit>, *>.fwd(base: Link<Unit, B>) = fwd(
//    BaseParam(
//        LinkParam(base, Unit),
//        Unit
//    )
//)
//suspend fun <B: HasKills, P> Link<BaseParam<B, Unit, P>, *>.fwd(base: Link<Unit, B>, param: P) = fwd(
//    BaseParam(
//        LinkParam(base, Unit),
//        param
//    )
//)

data class LinkParam<P, F: LView>(
    val link: Link<P, F>,
//    val view: F,
    val param: P
) {
    suspend fun get() = link.get(param)
}

//val <P, F: HasKills> LinkParam<P, F>.withUnit get() = BaseParam(
//    this,
//    Unit
//)

//data class BaseParam<B: HasKills, PB, P>(
//    val link: LinkParam<PB, B>,
//    val param: P
//)

//external interface LinkParamObject {
//    var link: String
//    var param: dynamic
//}
//
//external interface BaseParamObject {
//    var base: LinkParamObject
//    var param: dynamic
//}
//
//interface HasLink<P> {
//    val linkId: P
//}


abstract class LinksBase(coroutineScope: CoroutineScope): CoroutineScope by coroutineScope {
    internal val links = mutableMapOf<String, Link<*, *>>()

    internal val LinkNameHashItemizer  = linkNameHashItemizer<Any?, LView>(links)
    internal val LinkHasher = linkHashTransformer(LinkNameHashItemizer)

    @Suppress("NOTHING_TO_INLINE")
    internal inline fun <P, L: LView> linkHasher() = LinkHasher.unsafeCast<Hasher<LinkParam<P, L>>>()

    abstract val welcome: Link<Unit, *>

    init {
        APP.startRegisteringServiceWorker()
    }

    fun <F: LView> link(
        root: Boolean = false,
        get: suspend () -> F?
    ) = param(root, UnitHasher).link { get() }


    fun <P> param(
        root: Boolean = false,
        converter: Hasher<P>
    ) = LinkBuilder(root, converter)

    fun stringParam(
        root: Boolean = false,
        converter: Hasher<String> = StringHashTransformer
    ) = LinkBuilder(root, converter)

    private fun <P, F: LView> namedLink(
        converter: Hasher<P>,
        factory: suspend (P) -> F?
    ) = named { name ->
        Link(
            this@LinksBase,
            name,
            converter,
            factory
        ).also {
            links[name] = it
        }
    }

    inner class ParamBuilder1<P1>(
        internal val converter: Hasher<P1>
    ) {
        fun <F: LView> link(
            get: suspend (P1) -> F?
        ) = namedLink(converter, get)
    }

    inner class ParamBuilder2<P1, P2>(
        val parent: ParamBuilder1<P1>,
        val converter: Hasher<P2>
    ) {
        fun <F: LView> link(
            get: suspend (P1, P2) -> F?
        ) = namedLink(converter, get)
    }

    inner class LinkBuilder<P>(
        val root: Boolean = false,
        val converter: Hasher<P>
    ) {
        fun <F: LView> link(
            get: suspend (P) -> F?
        ) = named { name ->
            Link(
                this@LinksBase,
                name,
                converter,
                get
            ).also {
                links[name] = it
            }
        }
    }

//    fun <B: HasKills, PB, P, F: HasKillsRedisplay> LinkBuilder<BaseParam<B, PB, P>>.subLink(fn: suspend (B, P) -> F) = link

    fun <B: LView> linkBase() = linkBase<Unit, B>(UnitHasher)
    fun baseTC() = linkBase<FromTC>()

    fun <BP, B: LView> linkBase(
        converter: Hasher<BP>
    ) = LinkParamBuilder<BP, B>(converter)

    inner class LinkParamBuilder<BP, B: LView>(
        private val baseHasher: Hasher<BP>
    ) {
        fun <P> param(
            converter: Hasher<P>
        ) = LinkBuilder(
            false,
            linkIdTransformer(
                baseHasher,
                converter
            ) + linkHasher()
        )

        fun <F: HasKillsRedisplay> link(
            get: suspend (LinkParam<BP, B>) -> F?
        ) = param(UnitHasher).link {
            get(it.link)
        }

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
        try {
            LinkHasher.deserialize(hash.toHashStruct()).apply {
                require(serialized.isEmpty()) { "Link not consumed entirely: $serialized" }
                data.get()!!.redisplay()
            }
        } catch (e: dynamic) {
            reportd(e)
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

