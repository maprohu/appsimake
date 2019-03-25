package commonui.links

import commonshr.Assign
import commonshr.remAssign
import commonui.HasShow
import commonui.launchReport
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.ReceiveChannel
import kotlin.browser.window

interface LinkPoint<out T: HasShow> {
    suspend fun load(hash: HashStruct): T?
}

class LinksHandle(
    val linkPointMap: Map<String, LinkPoint<*>>,
    val home: LinkPoint<HasShow>,
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
                linkPointMap.getValue(named.name).load(named.hash)?.show?.invoke()
            } catch (e: dynamic) {
                home.load(EmptyHashStruct)?.show?.invoke()
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