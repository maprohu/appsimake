package commonui

import commonshr.HasKills
import commonshr.Trigger
import commonshr.listen
import org.w3c.dom.History
import kotlin.browser.window

interface From {
    fun isFromVisible(): Boolean
}

class GoBackRedisplay(val count: Int = 1): HasRedisplay {
    override val redisplay = { window.history.go(-count) }
}
object SimpleRedisplay: HasRedisplay {
    override val redisplay = { window.history.back() }
}
object SimpleFrom: HasFrom {
    override val from = SimpleRedisplay
}

//class BrowserHistory {
//    private var nextId = 0
//    fun nextId() = nextId++
//}
//
//fun BrowserHistory.item(deps: HasKills, reg: History.(Int) -> Unit, action: Trigger) {
//    val id = nextId()
//    window.history.reg(id)
//    popstates.listen(deps) { st ->
//        if (st.state == id) {
//            action()
//        }
//    }
//}
//fun BrowserHistory.push(deps: HasKills, action: Trigger) {
//    item(deps, { pushState(it, "") }, action)
//}
//fun BrowserHistory.replace(deps: HasKills, action: Trigger) {
//    item(deps, { replaceState(it, "") }, action)
//}
//
//fun historyItem(deps: HasHistoryKillsRedisplay) = deps.history.push(deps, deps.redisplay)
//fun historyRoot(deps: HasHistoryKillsRedisplay) = deps.history.replace(deps, deps.redisplay)
