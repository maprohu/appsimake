package commonui.view

import commonui.*
import commonshr.*
import commonui.topandcontent.ProgressTC
import commonui.widget.HoleT
import commonui.widget.HourglassView
import commonui.widget.TopAndContent
import killable.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import rx.*


interface ViewItem<V> {
    fun prepared(prepare: V?.() -> Unit): V?
}

interface HasView<V> {
    val viewItem: ViewItem<V>
}

interface HasKillView<V>: HasKill, HasView<V>
interface HasKillsView<V>: HasKills, HasView<V>
interface HasKillKillsView<V>: HasKillsView<V>, HasKillView<V>, HasKillKills

typealias IView<V> = HasKillKillsView<V>
typealias IViewTC = IView<TopAndContent>

interface IViewApi<V>: IView<V>, CsKillsApiCommonui
typealias IViewApiTC = IViewApi<TopAndContent>

fun <V: Any, T: ViewItem<V>> RxIface<T>.runView(deps: HasKills, hole: HoleT<V>) {
    rx(deps) { invoke().prepared(hole.prepareOrNull) }.forEach(HasNoKill) { hole %= it }
}

fun HasBackRedisplay.backOnRedisplay() {
    redisplay %= { back() }
}

class Redisplay(
    var trigger: Trigger
) {
    operator fun invoke() = trigger()

    operator fun remAssign(t: Trigger) {
        trigger = t
    }
}
