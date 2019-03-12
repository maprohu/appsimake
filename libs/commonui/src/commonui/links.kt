package commonui

import common.named
import commonshr.*
import kotlin.browser.window

class Converter<T>(
    val serialize: (T) -> String,
    val deserialize: (String) -> T
)

val JsonConverter = Converter<Any?>(
    serialize = { encodeURIComponent(JSON.stringify(it)) },
    deserialize = { JSON.parse(decodeURIComponent(it))}
)

class Holder<P, F: Any>(
    val param: P,
    var item: F?
)

class Link<P, F: HasKills>(
    val converter: Converter<P>,
    val factory: suspend (P) -> F,
    val display: F.() -> Unit
) {
    suspend fun showLink(param: String) {
        show(converter.deserialize(param))
    }
    private var holder: Holder<P, F>? = null
    suspend fun show(param: P) {
        get(param).display()
    }
    suspend fun get(param: P): F {
        holder.let { h ->
            return if (h == null || h.param != param || h.item == null) {
                factory(param).also { i ->
                    holder = Holder(param, i).apply {
                        i.kills += { this.item = null }
                    }
                }
            } else {
                h.item!!
            }
        }
    }
}

suspend fun Link<Unit, *>.show() = show(Unit)

open class LinksBase {
    private val links = mutableMapOf<String, Link<*, *>>()

    fun <F: HasKillsRedisplay> link(
        get: suspend () -> F
    ) = param<Unit, F> { get() }


    fun <P, F: HasKillsRedisplay> param(
        converter: Converter<P> = JsonConverter.unsafeCast<Converter<P>>(),
        get: suspend (P) -> F
    ) = named { n ->
        Link(
            converter,
            get,
            { redisplay() }
        ).also {
            links[n] = it
        }
    }

    suspend fun load(default: Action) {
        val hash = window.location.hash

        val linkName = hash.substringBefore('/')

        val link = links[linkName]

        if (link != null) {
            link.showLink(hash.substringAfter('/', ""))
        } else {
            default()
        }
    }

}