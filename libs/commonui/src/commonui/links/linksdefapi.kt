package commonui.links

interface LinksApi: LinksDef {

    fun <B, V> LinkingLoader<B>.child(fn: suspend (B) -> V?): LinkingPointDelegate<B, Unit, V>
    fun <B, P> LinkingLoader<B>.param(hasher: Hasher<P>): LinkingLoaderWithParam<B, P>
    fun <B> LinkingLoader<B>.stringParam() = param(StringHasher)

}

interface LinkingLoaderWithParam<B, P> {
    fun <V> child(fn: suspend (B, P) -> V?): LinkingPointDelegate<B, P, V>
}

interface LinkingPointDelegate<B, P, V>

