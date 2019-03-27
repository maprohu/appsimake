package commonui

import commonshr.*
import commonui.topandcontent.ProgressBackTC
import commonui.topandcontent.ProgressTC
import commonui.widget.HoleT
import commonui.widget.HourglassView
import commonui.widget.TopAndContent
import killable.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import rx.*

open class CsKills(killables: Killables): CsKillsApiCommonui, HasKillKilledKills by killables  {
    constructor(parent: KillSet): this(parent.killables())
    constructor(parent: HasKills): this(parent.kills)

    override val coroutineContext = Job().apply {
        kills += { cancel() }
    }
    suspend fun killAndJoin() {
        kill()
        coroutineContext.join()
    }
}

interface ViewItem<V> {
    fun prepared(prepare: V?.() -> Unit): V?
}


interface HasView<V> {
    val viewItem: ViewItem<V>
}

class SimpleViewItem<V>(
    private val rawView: V
): ViewItem<V> {
    private var prepared = false

    override fun prepared(prepare: V?.() -> Unit): V? {
        val v = rawView
        if (!prepared) {
            prepared = true
            v.prepare()
        }
        return v
    }
}
interface HasKillsView<V>: HasKills, HasView<V>
interface HasKillKillsView<V>: HasKillsView<V>, HasKillKills

typealias IView<V> = HasKillKillsView<V>
typealias SimpleView<V> = CsKillsView<V>
typealias ViewTC = SimpleView<TopAndContent>

abstract class CsKillsView<V>(
    private val parent: HasKillsRouting<V>
) : CsKills(parent), IView<V>, KillsUixApi, HasKillsRedisplay, /* HasRoute,*/ HasKillsRouting<V>, HasRouting<V> by parent {


    abstract val rawView: V

    private val selfViewItem by lazy { SimpleViewItem(rawView) }
    override val viewItem get() = selfViewItem
    val isActiveView by lazy { rx { parent.activeView() == selfViewItem } }

//    open val shouldPreserve = false

    override val uix: Runner = { action ->
        perform {
            if (isActiveView.now) {
                action()
            }
        }
    }

//    var displayRoute = {}

//    final override val activateRoute = { perform { displayRoute() } }

//    open fun doRedisplay() { displayRoute() }

    override val redisplay = {}
}

open class MultiView<V, F: CsKillsView<V>>(
    parent: HasKills,
    initial: F
): CsKills(parent), IView<V> {

    @Suppress("LeakingThis")
    val current = Var(initial).oldKilled

    override val viewItem get() = current().viewItem

}

fun loadView(
    parent: HasKillsRouting<TopAndContent>,
    fn: suspend () -> ViewTC
) = MultiView<TopAndContent, ViewTC>(
    parent,
    ProgressBackTC(parent)
).apply {
    launch {
        current %= fn()
    }
}


fun <V: Any, T: ViewItem<V>> RxIface<T>.runView(deps: HasKills, hole: HoleT<V>) {
    rx(deps) { invoke().prepared(hole.prepareOrNull) }.forEach(HasNoKill) { hole %= it }
}

//interface HasRoute {
//    val activateRoute: Trigger
//}

interface HasRouting<V> {
    val activeView: RxIface<ViewItem<V>>
}
interface HasKillsRouting<V>: HasKills, HasRouting<V>
typealias HasKillsRoutingTC = HasKillsRouting<TopAndContent>

interface HasForwardKillsRouting<V, in F: Any>: HasKillsRouting<V>, HasForward<F>
interface HasForwardKillsRedisplayRouting<V, in F: Any>: HasKillsRouting<V>, HasForward<F>, HasKillsRedisplay

//typealias FromTC = HasForwardKillsRedisplayRouting<TopAndContent, ViewTC>

typealias SimpleRoutingHole<V> = RoutingHole<V, IView<V>>
class RoutingHole<V, N: IView<V>>(
    parent: HasKills,
    initial: HasKillsRouting<V>.() -> N
): HasKillsRouting<V>, KillsApi, HasKills by parent {
    val content = Var(initial(this)).oldKilled
    override val activeView = rx { content().viewItem }
    operator fun remAssign(n: N) { content %= n }
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


//sealed class FwdStatus<F: CsKillsView<*>> {
//    abstract val forward: F?
//    data class Self<F: CsKillsView<*>>(override val forward: F?) : FwdStatus<F>()
//    data class Forwarded<F: CsKillsView<*>>(override val forward: F) : FwdStatus<F>()
//
//    fun forwarded() = this is Forwarded
//}
//fun <F: CsKillsView<*>> Var<FwdStatus<F>>.forwardTo(fwd: F) {
//    this %= FwdStatus.Forwarded(fwd)
//}
//operator fun <F: CsKillsView<*>> Var<FwdStatus<F>>.remAssign(fwd: F) { forwardTo(fwd) }
//fun <F: CsKillsView<*>> Var<FwdStatus<F>>.returnToSelf() {
//    transform {
//        FwdStatus.Self(
//            it.forward?.takeIf { f -> f.shouldPreserve }
//        )
//    }
//}


fun SimpleRoutingHole<TopAndContent>.hourglass() {
    this %= ProgressTC(this)
}
fun ForwardView<TopAndContent, SimpleView<TopAndContent>>.hourglass() {
    this %= ProgressTC(this)
}

typealias HasForwardTC = HasForward<ViewTC>
interface HasForward<in F: Any> {
    val fwd: (F?) -> Unit
}

abstract class ForwardView<V: Any, in F: CsKillsView<V>>(
    parent: HasKillsRouting<V>
): CsKillsView<V>(parent), HasKillsRedisplay, HasUix, HasForward<F>, HasRedisplayv {

//    private val status = Var<FwdStatus<F>>(FwdStatus.Self(null))
    @Suppress("LeakingThis")
    protected val status: Var<@UnsafeVariance F?> = Var<F?>(null).oldKilledOpt

//    @Suppress("LeakingThis")
//    private val forward = rx { status().forward }.oldKilledOpt

    private val baseView get() = super.viewItem

    override val viewItem get() = status()?.viewItem ?: baseView

//    override val viewItem get() = status().let { st ->
//            when (st) {
//                is FwdStatus.Self -> baseView
//                is FwdStatus.Forwarded -> st.forward.viewItem
//            }
//        }

//    override fun doRedisplay() {
//        returnToSelf()
//        displayRoute()
//    }

    fun forwardTo(fwd: F?) {
        status %= fwd
//        fwd.displayRoute = {
//            status %= fwd
//            activateRoute()
//        }
    }
//    operator fun remAssign(fwd: F) { forwardTo(fwd) }
    operator fun remAssign(fwd: F) { forwardTo(fwd) }
//    fun returnToSelf() { status.returnToSelf() }
    fun returnToSelf() { status %= null }

//    fun clearForward() {
//        status %= FwdStatus.Self<F>(null)
//    }

    override var redisplay = { returnToSelf() }
    override val fwd: (F?) -> Unit = { forwardTo(it) }

}

fun HasBackRedisplayv.backOnRedisplay() {
    redisplay = { back() }
}


operator fun <F: Any> HasForward<F>.remAssign(item: F?) { fwd(item) }

fun <F: Any> F?.forwarding(view: HasForward<F>) = apply { view %= this }

typealias ForwardTC = ForwardBase<TopAndContent>
abstract class ForwardBase<V: Any>(
    parent: HasKillsRouting<V>
): ForwardView<V, SimpleView<V>>(parent)

fun ForwardTC.advance(fn: Action) {
    hourglass()
    launch { fn() }
}
