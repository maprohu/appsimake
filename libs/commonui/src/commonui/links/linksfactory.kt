package commonui.links

import commonui.HasShow

typealias LinksContext = Any

abstract class LinksFactory(
    homeName: String = "home"
) {
    val context: LinksContext = object {}

    protected fun <T: HasShow> root(fn: suspend (LinksContext) -> T)

    abstract val home: BaseLinkPoint<HasShow>

    private val map = mutableMapOf<String, BaseLinkPoint<*>>()







}

abstract class BaseLinkPoint<out T: HasShow>(
    val factory: LinksFactory
): LinkPoint<T> {
    val subMap = mutableMapOf<HashStruct, HasShow>()
}

class RootLinkPoint<out T: HasShow>(
    factory: LinksFactory,
    fn: suspend (LinksContext) -> T
) : BaseLinkPoint<T>(factory) {

    override suspend fun load(hash: HashStruct): T? {
    }
}


