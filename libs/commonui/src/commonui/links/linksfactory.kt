package commonui.links

import common.NamedDelegate
import common.named
import common.obj
import commonshr.Trigger
import commonshr.plusAssign
import commonui.*
import commonui.widget.Body
import commonui.widget.BodyTC
import kotlin.browser.window


typealias LinksContext = Any
interface BaseTC: LinkPointItem, HasKillsRoutingTC, HasForwardTC, HasLinkage, HasCsForwardKillsRoutingTC

class LinksDeps(
    val homeName: String,
    val body: Body
)

abstract class LinksFactory(
    private val homeName: String = "home"
) {
    companion object {
        fun startTC(
            homeName: String = "home",
            fn: suspend (String, BodyTC) -> LinksFactory
        ) = launchGlobal {
            APP.startRegisteringServiceWorker()
            BodyTC().apply {
                val links = fn(homeName, this)

                runLinks(
                    LinksHandle(
                        links.map,
                        links.home
                    ),
                    popStateChannel(this)
                )
            }
        }

        fun start(
            homeName: String = "home",
            fn: suspend (LinksDeps) -> LinksFactory
        ) = launchGlobal {
            APP.startRegisteringServiceWorker()
            Body().apply {
                val links = fn(
                    LinksDeps(
                        homeName,
                        this
                    )
                )

                runLinks(
                    LinksHandle(
                        links.map,
                        links.home
                    ),
                    popStateChannel(this)
                )
            }
        }
    }

    val context: LinksContext = object {}

    protected fun <T: LinkPointItem> root(fn: suspend (Linkage) -> T) = HomeLinkPoint(this, homeName, fn)

    abstract val home: HomeLinkPoint<LinkPointItem>

    val map by lazy {
        mutableMapOf<String, BaseLinkPoint<*, *>>().apply {
            put(homeName, home)
        }
    }

    fun <T: LinkPointItem> base() = Base<T>()

    inner class Base<T: LinkPointItem> {

        fun <C: LinkPointItem> child(fn: suspend (T, Linkage) -> C?) = param(UnitHasher).child { base, _ , link -> fn(base, link) }

        fun <P> param(hasher: Hasher<P>) = Param(hasher)

        inner class Param<P>(
            val hasher: Hasher<P>
        ) {
            fun <C: LinkPointItem> child(fn: suspend (base: T, param: P, link: Linkage) -> C?) = named { name ->
                MultiLinkPoint(
                    this@LinksFactory,
                    name,
                    hasher,
                    fn
                )
            }
        }

    }

}

interface LinkForward {
    suspend fun <T: LinkPointItem, P> to(link: ChildLinkPoint<*, T, P>, param: P, replace: Boolean = false)
}
class Linkage(
//    val hash: NamedHashStruct,
    override val back: Trigger,
    val forward: LinkForward
): HasBack

val HistoryBack = { window.history.back() }

interface LinkApi<T>: HasLinkage {

    suspend fun <P, CI: LinkPointItem, CP: ChildLinkPoint<T, CI, P>> CP.fwd(param: P, replace: Boolean = false) = linkage.forward.to(this, param, replace)
    suspend fun <CI: LinkPointItem, CP: ChildLinkPoint<T, CI, Unit>> CP.fwd(replace: Boolean = false) = linkage.forward.to(this, Unit, replace)

}

abstract class BaseLinkPoint<out T: LinkPointItem, P>(
    val factory: LinksFactory,
    override val name: String,
    val paramHasher: Hasher<P>
): LinkPoint<T> {
    init {
        @Suppress("LeakingThis")
        factory.map[name] = this
    }

    val map: MutableMap<HashStruct, @UnsafeVariance T> = mutableMapOf()

    suspend fun getOrPut(hash: HashStruct, view: suspend () -> @UnsafeVariance T?): T? {
        return map[hash] ?: view()?.apply {
//            val hstr = namedHash(hash).toHashStruct.toHashString()

//            console.log("on: $hstr")
            map[hash] = this

            kills += {
//                console.log("off: $hstr")
                map.remove(hash)
            }
        }
    }

    fun <C: LinkPointItem> child(fn: suspend (T, Linkage) -> C?): NamedDelegate<SingleLinkPoint<@UnsafeVariance T, C, Unit>> = param(UnitHasher).child { base, _, link -> fn(base, link) }

    fun <P> param(hasher: Hasher<P>) = Param(hasher)

    inner class Param<P>(
        val hasher: Hasher<P>
    ) {
        fun <C: LinkPointItem> child(fn: suspend (base: T, param: P, link: Linkage) -> C?): NamedDelegate<SingleLinkPoint<@UnsafeVariance T, C, P>> = named { name ->
            SingleLinkPoint(
                factory,
                name,
                hasher,
                fn,
                this@BaseLinkPoint
            )
        }
    }

    fun namedHash(hash: HashStruct) = NamedHashStruct(
        name,
        hash
    )

    final override suspend fun load(hash: HashStruct, depth: Int): T? = getOrPut(hash) {
        val withParam = paramHasher.deserialize(hash)
        load(hash, withParam.data, withParam.serialized, depth)
    }

    abstract suspend fun load(hash: HashStruct, param: P, parentHash: HashStruct, depth: Int): T?

    fun createLinkage(hash: HashStruct, depth: Int, back: Trigger) = Linkage(
        back = back,
        forward = LinkForwardImpl(
            namedHash(hash),
            toDepth = depth + 1
        )
    )

}

class HomeLinkPoint<out T: LinkPointItem>(
    factory: LinksFactory,
    name: String,
    private val fn: suspend (Linkage) -> T
) : BaseLinkPoint<T, Unit>(factory, name, UnitHasher) {
    override suspend fun load(hash: HashStruct, param: Unit, parentHash: HashStruct, depth: Int): T? {
        require(EmptyHashStruct == parentHash) { "home loaded with link parameters!" }

        return fn(createLinkage(hash, depth, HistoryBack))
    }

    suspend fun load() = load(EmptyHashStruct, 0)

}

abstract class ChildLinkPoint<in B: LinkPointItem, out T: LinkPointItem, P>(
    factory: LinksFactory,
    name: String,
    paramHasher: Hasher<P>,
    val fn: suspend (base: B, param: P, linkage: Linkage) -> T?
) : BaseLinkPoint<T, P>(factory, name, paramHasher) {

    abstract fun parentHash(hash: NamedHashStruct): HashStruct
    abstract fun parentLink(hash: HashStruct): NamedHashStruct
    abstract suspend fun loadParent(hash: HashStruct, parentDepth: Int): @UnsafeVariance B?

    override suspend fun load(hash: HashStruct, param: P, parentHash: HashStruct, depth: Int): T? = loadParent(parentHash, if (depth == 0) 0 else depth - 1)?.let { parent ->
        fn(
            parent,
            param,
            createLinkage(
                hash,
                depth,
                if (depth > 0) HistoryBack else {
                    val fromHash = parentLink(parentHash);

                    {
                        updateHistoryState(
                            fromHash,
                            0,
                            true
                        )
                        parent.redisplay()
                    }
                }
            )
        )
    }
}

fun updateHistoryState(
    linkHash: NamedHashStruct,
    toDepth: Int,
    replace: Boolean = false
) {
    val data = obj<PopStateData> {
        this.depth = toDepth
    }
    val stateData = "#${linkHash.toHashStruct.toHashString()}"

    if (replace) {
        window.history.replaceState(
            data,
            "",
            stateData
        )
    } else {
        window.history.pushState(
            data,
            "",
            stateData
        )
    }
}

class LinkForwardImpl(
    val hash: NamedHashStruct,
    val toDepth: Int
): LinkForward {
    override suspend fun <T : LinkPointItem, P> to(link: ChildLinkPoint<*, T, P>, param: P, replace: Boolean) {
        val withParam = link.paramHasher.serialize(param, link.parentHash(hash))

        updateHistoryState(
            NamedHashStruct(
                link.name,
                withParam
            ),
            toDepth,
            replace
        )

        link.load(withParam, toDepth)?.redisplay?.invoke()
    }
}

class SingleLinkPoint<B: LinkPointItem, out T: LinkPointItem, P>(
    factory: LinksFactory,
    name: String,
    paramHasher: Hasher<P>,
    fn: suspend (base: B, param: P, linkage: Linkage) -> T?,
    val parentLink: LinkPoint<B>
) : ChildLinkPoint<B, T, P>(factory, name, paramHasher, fn) {
    override suspend fun loadParent(hash: HashStruct, parentDepth: Int): B? = parentLink.load(hash, parentDepth)
    override fun parentHash(hash: NamedHashStruct): HashStruct = hash.hash
    override fun parentLink(hash: HashStruct): NamedHashStruct = NamedHashStruct(parentLink.name, hash)
}


class MultiLinkPoint<in B: LinkPointItem, out T: LinkPointItem, P>(
    factory: LinksFactory,
    name: String,
    paramHasher: Hasher<P>,
    fn: suspend (base: B, param: P, linkage: Linkage) -> T?
) : ChildLinkPoint<B, T, P>(factory, name, paramHasher, fn) {
    override suspend fun loadParent(hash: HashStruct, parentDepth: Int): @UnsafeVariance B? = hash.toNamed.let { nhs ->
        factory.map.getValue(nhs.name).unsafeCast<LinkPoint<B>>().load(nhs.hash, parentDepth)
    }
    override fun parentHash(hash: NamedHashStruct): HashStruct = hash.toHashStruct
    override fun parentLink(hash: HashStruct): NamedHashStruct = hash.toNamed
}
