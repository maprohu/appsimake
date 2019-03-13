package commonui

import common.named
import commonshr.*
import domx.on
import killable.HasNoKill
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.produce
import kotlinx.coroutines.launch
import org.w3c.dom.HashChangeEvent
import org.w3c.dom.PopStateEvent
import kotlin.browser.window

class Converter<T>(
    val serialize: (T) -> String,
    val deserialize: (String) -> T
)

val JsonConverter = Converter<Any?>(
    serialize = { encodeURIComponent(JSON.stringify(it)) },
    deserialize = { JSON.parse(decodeURIComponent(it))}
)

val UnitConverter = Converter(
    serialize = {""},
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
    val converter: Converter<P>,
    val factory: suspend (P) -> F?,
    val display: F.() -> Unit
) {
    suspend fun showLink(param: String) {
        show(converter.deserialize(param))
    }
    private var holder: Holder<P, F>? = null
    suspend fun show(param: P, forcePush: Boolean = false) {
        get(param, forcePush)?.display()
    }
    suspend fun fwd(param: P) {
        show(param, true)
    }


    private fun pushState(param: P) {
        val stateData = "$name/${converter.serialize(param)}"
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

open class LinksBase(coroutineScope: CoroutineScope): CoroutineScope by coroutineScope {
    private val links = mutableMapOf<String, Link<*, *>>()

    fun <F: HasKillsRedisplay> link(
        root: Boolean = false,
        get: suspend () -> F?
    ) = param(root, UnitConverter).link { get() }


    fun <P> param(
        root: Boolean = false,
        converter: Converter<P> = JsonConverter.unsafeCast<Converter<P>>()
    ) = LinkBuilder(root, converter)

    inner class LinkBuilder<P>(
        val root: Boolean = false,
        val converter: Converter<P> = JsonConverter.unsafeCast<Converter<P>>()
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

    private fun listenPopstates(default: Action) {
        val states = Channel<String>(Channel.UNLIMITED)
        window.on<PopStateEvent>(
            HasNoKill,
            "popstate"
        ) {
            states.offer(hashData)
        }
        launch {
            for (h in states) {
                showHash(h, default)
            }
        }
    }

    suspend fun load(default: Action) {
        listenPopstates(default)
        showHash(hashData, default)
    }

    suspend fun showHash(hash: String, default: Action) {
        val linkName = hash.substringBefore('/')

        val link = links[linkName]

        if (link != null) {
            try {
                link.showLink(hash.substringAfter('/', ""))
            } catch (e: dynamic) {
                reportd(e)
                default()
            }
        } else {
            default()
        }
    }


}