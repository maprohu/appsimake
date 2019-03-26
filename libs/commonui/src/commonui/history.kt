package commonui

import kotlin.browser.window

interface From {
    fun isFromVisible(): Boolean
}

class GoBackNRedisplay(private val count: Int = 1): HasRedisplay {
    override val redisplay = { window.history.go(-count) }
}
val GoBack2Redisplay = GoBackNRedisplay(2)
val GoBackRedisplay = GoBackNRedisplay(1)

object SimpleFrom: HasFrom {
    override val from = GoBackRedisplay
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
