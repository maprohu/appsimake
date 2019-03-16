package commonui

import common.named
import common.namedFn
import commonshr.*
import domx.on
import killable.HasNoKill
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import org.w3c.dom.PopStateEvent
import kotlin.browser.window

interface LinkedFrom<B> {
    val base: B
}


class Holder<P, F: Any>(
    val param: P,
    var item: F?
)

private val hashData get() = window.location.hash.drop(1)

data class ViewId(
    val name: String,
    val param: HashStruct
)
interface HasViewid {
    val viewId: Viewid get() = identity()
}

interface HasLink<T> {
    val link: LinkOps<T>
}

interface LinkOps<T> {
    suspend fun <P, V: LView> show(link: Link<T, P, V>, param: P)
}



interface HasKillsRedisplayViewid: HasKillsRedisplay, HasViewid
typealias LView = HasKillsRedisplay
typealias LViewid = HasKillsRedisplayViewid


class Link<P, out F: LView>(
    internal val linksBase: LinksBase,
    internal val name: String,
    internal val converter: Hasher<P>,
    internal val factory: suspend (P) -> F?,
    internal val root: Boolean = false
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

    fun <CF: LView> child(
        get: suspend (F) -> CF?
    ) = linksBase.namedLink(converter) { pp ->
        get(pp)?.let { get(it) }
    }

    fun <P> param(hasher: Hasher<P>) = ParamBuilder(hasher)

    inner class ParamBuilder<CP>(
        val childConverter: Hasher<CP>
    ) {
        fun <CF: LView> child(
            getChild: suspend (F, CP) -> CF?
        ) = linksBase.namedLink(
            linkIdTransformer(
                converter,
                childConverter
            )
        ) { li ->
            get(li.parent)?.let { getChild(it, li.id) }
        }
    }
//
//    fun <SF: HasKillsRedisplay> child(fn: suspend (F) -> SF) = param(UnitConverter).child { bp ->
//        get(bp.link.param)?.let { fn(it) }
//    }
//
//
//
//    fun <SP> param(subParamConverter: PConverter<SP> = nullConverter()): LinksBase.LinkBuilder<BaseParam<@UnsafeVariance F, P, SP>> =
//        linksBase.linkBase<P, F>(converter).param(subParamConverter)

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

    abstract val welcome: Link<Unit, LView>

    init {
        APP.startRegisteringServiceWorker()
    }

//    fun <F: LView> link(
//        root: Boolean = false,
//        get: suspend () -> F?
//    ) = param(root, UnitHasher).link { get() }
//
//
//    fun <P> param(
//        root: Boolean = false,
//        converter: Hasher<P>
//    ) = LinkBuilder(root, converter)
//
//    fun stringParam(
//        root: Boolean = false,
//        converter: Hasher<String> = StringHasher
//    ) = LinkBuilder(root, converter)

    protected fun <F: LView> rootLink(
        factory: suspend () -> F?
    ) = namedLink(UnitHasher, true) {
        factory()
    }

    internal fun <P, F: LView> namedLink(
        converter: Hasher<P>,
        factory: suspend (P) -> F?
    ) = namedLink(converter, false, factory)

    internal fun <P, F: LView> namedLink(
        converter: Hasher<P>,
        root: Boolean,
        factory: suspend (P) -> F?
    ) = named { name ->
        Link(
            this@LinksBase,
            name,
            converter,
            factory,
            root
        ).also {
            links[name] = it
        }
    }

//    inner class ParamBuilder1<P1>(
//        internal val converter: Hasher<P1>
//    ) {
//        fun <F: LView> link(
//            get: suspend (P1) -> F?
//        ) = namedLink(converter, get)
//    }

    inner class MultiParentBuilder<PV: LViewid> {

        @Suppress("NOTHING_TO_INLINE")
        internal inline fun parentHasher() = linkHasher<Any?, PV>()

        fun <F: LView> child(
            get: suspend (PV) -> F?
        ) = namedLink(parentHasher()) { pp ->
            pp.get()?.let { get(it) }
        }

        fun <P> param(hasher: Hasher<P>) = ParamBuilder(hasher)

        inner class ParamBuilder<P>(
            val converter: Hasher<P>
        ) {
            fun <F: LView> child(
                get: suspend (PV, P) -> F?
            ) = namedLink(
                linkIdTransformer(
                    parentHasher(),
                    converter
                )
            ) { li ->
                li.parent.get()?.let { get(it, li.id) }
            }
        }
    }

//    inner class LinkBuilder<P>(
//        val root: Boolean = false,
//        val converter: Hasher<P>
//    ) {
//        fun <F: LView> link(
//            get: suspend (P) -> F?
//        ) = named { name ->
//            Link(
//                this@LinksBase,
//                name,
//                converter,
//                get
//            ).also {
//                links[name] = it
//            }
//        }
//    }

//    fun <B: HasKills, PB, P, F: HasKillsRedisplay> LinkBuilder<BaseParam<B, PB, P>>.subLink(fn: suspend (B, P) -> F) = link


    fun <B: LView> parents() = MultiParentBuilder<B>()
    fun parentTC() = parents<FromTC>()


//    inner class LinkParamBuilder<BP, B: LView>(
//        private val baseHasher: Hasher<BP>
//    ) {
//        fun <P> param(
//            converter: Hasher<P>
//        ) = LinkBuilder(
//            false,
//            linkIdTransformer(
//                baseHasher,
//                converter
//            ) + linkHasher()
//        )
//
//        fun <F: HasKillsRedisplay> link(
//            get: suspend (LinkParam<BP, B>) -> F?
//        ) = param(UnitHasher).link {
//            get(it.link)
//        }
//
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

class LinkParamView<P, F: LView>(
    val link: Link<P, F>,
    val param: P,
    val item: F
)

fun <EP, EF: LView> exiting(
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
fun <VP, VF: LView, EP, EF: LView> exiting(
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

