package commonui.links

import commonshr.HasKills
import domx.on
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.PopStateEvent
import kotlin.browser.window

external interface PopStateData {
    var depth: Int
}

class PopStateInfo(
    val depth: Int,
    val hash: String
)

val hashData get() = window.location.hash.drop(1)

fun popStateChannel(
    deps: HasKills
): ReceiveChannel<PopStateInfo> {
    val states = Channel<PopStateInfo>(Channel.UNLIMITED)

    window.on<PopStateEvent>(
        deps,
        "popstate"
    ) { e ->
        states.offer(
            PopStateInfo(
                e.state.unsafeCast<PopStateData?>()?.depth ?: 0,
                hashData
            )
        )
    }

    return states
}

