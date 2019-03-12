package commonui

import common.CsKillsApiCommon
import commonshr.*
import commonui.widget.HoleT
import killable.*
import kotlinx.coroutines.Job
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
abstract class CsKillsView<V>(
    private val parent: HasKillsRouting<V>
) : CsKills(parent), IView<V>, HasUix, HasRedisplay, HasKillsRouting<V>, HasRouting<V> by parent {


    abstract val rawView: V

    private val selfViewItem by lazy { SimpleViewItem(rawView) }
    override val viewItem get() = selfViewItem
    val isActiveView by lazy { rx { parent.activeView() == selfViewItem } }

    override val uix: Runner = { action ->
        perform {
            if (isActiveView.now) {
                action()
            }
        }
    }

    var displayRoute = {}

    override val redisplay = { displayRoute() }
}

fun <V: Any, T: ViewItem<V>> RxIface<T>.runView(deps: HasKills, hole: HoleT<V>) {
    rx(deps) { invoke().prepared(hole.prepareOrNull) }.forEach(HasNoKill) { hole %= it }
}


//class ViewWithForward<V>(
//    val base: HasView<V>,
//    val forward: () -> HasView<V>?
//): HasView<V> {
//    override fun view(prepare: V?.() -> Unit): V? {
//        return (forward() ?: base).view(prepare)
//    }
//
//    companion object {
//        operator fun <V, S> invoke(
//            base: HasView<V>,
//            current: RxIface<S?>,
//            view: S.() -> HasView<V>
//        ): ViewWithForward<V> = ViewWithForward(
//            base
//        ) { current()?.view() }
//
//        fun <V, T: HasView<V>> of(
//            base: HasView<V>,
//            switch: Var<T?>
//        ) = invoke(
//            base,
//            switch
//        ) { this }
//    }
//}
interface HasRouting<V> {
    val activeView: RxIface<ViewItem<V>>
}
interface HasKillsRouting<V>: HasKills, HasRouting<V>

interface HasRedisplay {
    val redisplay: Trigger
}
sealed class FwdStatus<F: CsKillsView<*>> {
    abstract val forward: F?
    data class Self<F: CsKillsView<*>>(override val forward: F?) : FwdStatus<F>()
    data class Forwarded<F: CsKillsView<*>>(override val forward: F) : FwdStatus<F>()

    fun forwarded() = this is Forwarded
}

fun <F: CsKillsView<*>> Var<FwdStatus<F>>.forwardTo(fwd: F) {
    this %= FwdStatus.Forwarded(fwd)
}
operator fun <F: CsKillsView<*>> Var<FwdStatus<F>>.remAssign(fwd: F) { forwardTo(fwd) }
fun <F: CsKillsView<*>> Var<FwdStatus<F>>.returnToSelf() {
    transform { FwdStatus.Self(it.forward) }
}



abstract class ForwardView<V: Any, F: CsKillsView<V>>(
    parent: HasKillsRouting<V>
): CsKillsView<V>(parent), HasRedisplay, HasUix {

    private val status = Var<FwdStatus<F>>(FwdStatus.Self(null))

    private val forward = rx { status().forward }.oldKilledOpt

    private val baseView get() = super.viewItem

    override val viewItem get() = status().let { st ->
            when (st) {
                is FwdStatus.Self -> baseView
                is FwdStatus.Forwarded -> st.forward.viewItem
            }
        }

    override val redisplay = {
        returnToSelf()
        displayRoute()
    }

    fun forwardTo(fwd: F) {
        status %= fwd
        fwd.displayRoute = {
            status %= fwd
            displayRoute()
        }
    }
    operator fun remAssign(fwd: F) { forwardTo(fwd) }
    fun returnToSelf() { status.returnToSelf() }
}

abstract class ForwardBase<V: Any>(
    parent: HasKillsRouting<V>
): ForwardView<V, SimpleView<V>>(parent)
