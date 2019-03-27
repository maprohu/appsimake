package commonui.links

import common.NamedDelegate
import common.named
import common.obj
import commonshr.Trigger
import commonshr.plusAssign
import commonui.HasBack
import commonui.HasForwardTC
import commonui.HasKillsRoutingTC
import commonui.HasLinkage
import kotlin.browser.window


typealias LinksContext = Any
interface BaseTC: LinkPointItem, HasKillsRoutingTC, HasForwardTC, HasLinkage

abstract class LinksFactory(
    private val homeName: String = "home",
    val linksDepth: LinksDepth
) {
    val context: LinksContext = object {}

    protected fun <T: LinkPointItem> root(fn: suspend (Linkage) -> T) = HomeLinkPoint(this, homeName, fn)

    abstract val home: HomeLinkPoint<LinkPointItem>

    internal val map by lazy {
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

interface LinkApi<T>: HasLinkage {

    suspend fun <P, CI: LinkPointItem, CP: ChildLinkPoint<T, CI, P>> CP.fwd(param: P, replace: Boolean = false) = linkage.forward.to(this, param, replace)
    suspend fun <CI: LinkPointItem, CP: ChildLinkPoint<T, CI, Unit>> CP.fwd(replace: Boolean = false) = linkage.forward.to(this, Unit, replace)

}

abstract class BaseLinkPoint<out T: LinkPointItem, P>(
    val factory: LinksFactory,
    val name: String,
    val paramHasher: Hasher<P>
): LinkPoint<T> {
    val map: MutableMap<HashStruct, @UnsafeVariance T> = mutableMapOf()

    suspend fun getOrPut(hash: HashStruct, view: suspend () -> @UnsafeVariance T) = map.getOrPut(hash) {
        view().apply {
            kills += {
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

    final override suspend fun load(hash: HashStruct): T? {
        val withParam = paramHasher.deserialize(hash)

        return load(hash, withParam.data, withParam.serialized)
    }

    abstract suspend fun load(hash: HashStruct, param: P, parentHash: HashStruct): T?

    fun createLinkage(hash: HashStruct) = Linkage(
        back = { window.history.back() },
        forward = LinkForwardImpl(
            NamedHashStruct(
                name,
                hash
            ),
            factory.linksDepth.currentDepth
        )
    )

}

class HomeLinkPoint<out T: LinkPointItem>(
    factory: LinksFactory,
    name: String,
    private val fn: suspend (Linkage) -> T
) : BaseLinkPoint<T, Unit>(factory, name, UnitHasher) {
    override suspend fun load(hash: HashStruct, param: Unit, parentHash: HashStruct): T? {
        require(EmptyHashStruct == parentHash) { "home loaded with link parameters!" }

        return getOrPut(EmptyHashStruct) { fn(createLinkage(hash)) }
    }
}

abstract class ChildLinkPoint<in B: LinkPointItem, out T: LinkPointItem, P>(
    factory: LinksFactory,
    name: String,
    paramHasher: Hasher<P>,
    val fn: suspend (base: B, param: P, linkage: Linkage) -> T?
) : BaseLinkPoint<T, P>(factory, name, paramHasher) {

    abstract fun parentHash(hash: NamedHashStruct): HashStruct
    abstract suspend fun loadParent(hash: HashStruct): @UnsafeVariance B?

    override suspend fun load(hash: HashStruct, param: P, parentHash: HashStruct): T? = loadParent(parentHash)?.let { parent ->
        fn(
            parent,
            param,
            createLinkage(hash)
        )
    }
}

class LinkForwardImpl(
    val hash: NamedHashStruct,
    val depth: Int
): LinkForward {
    private fun updateState(
        linkHash: NamedHashStruct,
        replace: Boolean = false
    ) {
        val data = obj<PopStateData> {
            this.depth = if (replace) this@LinkForwardImpl.depth else + 1
        }
        val stateData = "#${linkHash.toHashStruct.toHashString()}"

        if (replace) {
            window.history.replaceState(
                data,
                "",
                "#$stateData"
            )
        } else {
            window.history.pushState(
                data,
                "",
                "#$stateData"
            )
        }
    }
    override suspend fun <T : LinkPointItem, P> to(link: ChildLinkPoint<*, T, P>, param: P, replace: Boolean) {
        val withParam = link.paramHasher.serialize(param, link.parentHash(hash))

        updateState(
            NamedHashStruct(
                link.name,
                withParam
            ),
            replace
        )

        link.load(withParam)?.redisplay?.invoke()
    }
}

class SingleLinkPoint<B: LinkPointItem, out T: LinkPointItem, P>(
    factory: LinksFactory,
    name: String,
    paramHasher: Hasher<P>,
    fn: suspend (base: B, param: P, linkage: Linkage) -> T?,
    val parentLink: LinkPoint<B>
) : ChildLinkPoint<B, T, P>(factory, name, paramHasher, fn) {
    override suspend fun loadParent(hash: HashStruct): B? = parentLink.load(hash)
    override fun parentHash(hash: NamedHashStruct): HashStruct = hash.hash
}


class MultiLinkPoint<in B: LinkPointItem, out T: LinkPointItem, P>(
    factory: LinksFactory,
    name: String,
    paramHasher: Hasher<P>,
    fn: suspend (base: B, param: P, linkage: Linkage) -> T?
) : ChildLinkPoint<B, T, P>(factory, name, paramHasher, fn) {
    override suspend fun loadParent(hash: HashStruct): @UnsafeVariance B? = hash.toNamed.let { nhs ->
        factory.map.getValue(nhs.name).unsafeCast<LinkPoint<B>>().load(nhs.hash)
    }
    override fun parentHash(hash: NamedHashStruct): HashStruct = hash.toHashStruct
}
