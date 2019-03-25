package commonui.links

import commonshr.HasCsKills
import commonshr.reportd
import commonui.HasRedisplay
import domx.on
import killable.HasNoKill
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch
import org.w3c.dom.PopStateEvent
import kotlin.browser.window
import kotlin.coroutines.CoroutineContext
import kotlin.js.Date

interface Linkablne {
    fun activate()
    fun show()
}

interface LinkingLoader<T: HasRedisplay> {
    suspend fun get(param: HashStruct): T?
}

interface LinkingPoint<B, V>




internal val hashData get() = window.location.hash.drop(1)

class LinksMap(
    override val coroutineContext: CoroutineContext
) : CoroutineScope {
    internal val linksMap = mutableMapOf<String, LinkingLoader<*>>()

    val root = object {}

    private fun listenPopstates(default: suspend () -> Unit) {
    }

    suspend fun showHash(hash: String, default: suspend () -> Unit) {
        try {
            hash.toHashStruct().toNamed.let { nhs ->
                linksMap.getValue(nhs.name).get(nhs.hash)?.redisplay?.invoke()
            }
        } catch (e: dynamic) {
            reportd(e)
            default()
        }
    }
}

interface LinksDef {
    val linksMap: LinksMap

}

val LinksDef.root get() = linksMap.root






interface PageLinkBase
interface Page
interface PageLink<B: PageLinkBase, D, P: Page> {
    suspend fun get(hash: HashStruct): P?
    suspend fun g
}


