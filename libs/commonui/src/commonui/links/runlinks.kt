package commonui.links

import commonshr.Assign
import commonshr.remAssign
import commonui.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.ReceiveChannel
import kotlin.browser.window

//typealias LinkPointItem = HasKillsLinkageRedisplay
typealias LinkPointItem = HasKillsRedisplay
interface LinkPoint<out T: LinkPointItem> {
    suspend fun load(hash: HashStruct): T?
}

class LinksHandle(
    val linkPointMap: Map<String, LinkPoint<*>>,
    val home: LinkPoint<LinkPointItem>,
    var depth: Assign<Int>
)

fun CoroutineScope.runLinks(
    handle: LinksHandle,
    states: ReceiveChannel<PopStateInfo>
) {
    with(handle) {

        suspend fun process(ps: PopStateInfo) {
            depth %= ps.depth

            try {
                val named = ps.hash.toHashStruct().toNamed
                linkPointMap.getValue(named.name).load(named.hash)?.redisplay?.invoke()
            } catch (e: dynamic) {
                home.load(EmptyHashStruct)?.redisplay?.invoke()
            }
        }

        launchReport {
            process(
                PopStateInfo(
                    window.history.state.unsafeCast<PopStateData?>()?.depth ?: 0,
                    hashData

                )
            )

            for (s in states) {
                process(s)
            }
        }
    }
}