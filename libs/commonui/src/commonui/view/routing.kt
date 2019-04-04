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

interface HasRouting<V> {
    val activeView: RxIface<ViewItem<V>>
}
interface HasKillsRouting<V>: HasKills, HasRouting<V>
interface HasBackKillsRouting<V>: HasBack, HasKillsRouting<V>
interface HasCsKillsRouting<V>: HasKillsRouting<V>, HasCsKills
interface HasKilledKillsRouting<V>: HasKilledKills, HasRouting<V>, HasKillsRouting<V>
typealias HasRoutingTC = HasRouting<TopAndContent>
typealias HasKillsRoutingTC = HasKillsRouting<TopAndContent>
typealias HasBackKillsRoutingTC = HasBackKillsRouting<TopAndContent>
typealias HasCsKillsRoutingTC = HasCsKillsRouting<TopAndContent>

typealias SimpleRoutingHoleTC = SimpleRoutingHole<TopAndContent>
typealias SimpleRoutingHole<V> = RoutingHole<V, HasKillView<V>>
class RoutingHole<V, out N: HasKillView<V>>(
    parent: HasKills,
    initial: HasKillsRouting<V>.() -> N
): HasKillsRouting<V>, KillsApi, HasKills by parent {
    val content: Var<@UnsafeVariance N> = Var(initial(this)).oldKilled
    override val activeView = rx { content().viewItem }
    operator fun remAssign(n: @UnsafeVariance N) { content %= n }
}

fun <V, N: IView<V>> HasKills.routingHole(
    initial: HasKillsRouting<V>.() -> N
) = RoutingHole(this, initial)

fun <V: Any> HoleT<V>.routing(
    deps: HasKills
) = RoutingFactory(deps, this)

class RoutingFactory<V: Any>(
    val deps: HasKills,
    val hole: HoleT<V>
) {
    fun <N: IView<V>> of(
        initial: HasKillsRouting<V>.() -> N
    ) = deps.routingHole(initial).apply {
        activeView.runView(deps, hole)
    }

}

fun SimpleRoutingHoleTC.hourglass() {
    this %= ProgressTC(this)
}

data class KillsRoutingDeps<V>(
    override val kills: KillSet,
    override val activeView: RxIface<ViewItem<V>>
): HasKillsRouting<V>

operator fun <V> HasKills.plus(routing: HasRouting<V>) = KillsRoutingDeps(
    kills = kills,
    activeView = routing.activeView
)

