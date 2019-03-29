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

interface HasForward<in F: Any> {
    val fwd: (F?) -> Unit
}
typealias HasForwardTC = HasForward<IViewTC>

operator fun <F: Any> HasForward<F>.remAssign(item: F?) { fwd(item) }

interface HasForwardKillsRouting<V, in F: Any>: HasKillsRouting<V>, HasForward<F>
typealias HasForwardKillsRoutingTC = HasForwardKillsRouting<TopAndContent, ViewTC>

interface HasCsForwardKillsRouting<V, in F: Any>: HasForwardKillsRouting<V, F>, CoroutineScope, HasCsKills, HasCsKillsRouting<V>
interface HasCsForwardKilledKillsRouting<V, in F: Any>: HasCsForwardKillsRouting<V, F>, HasKilled, HasKilledKillsRouting<V>
typealias HasCsForwardKillsRoutingTC = HasCsForwardKillsRouting<TopAndContent, IViewTC>

interface HasCsForwardKilledKillsRedisplayRouting<V, in F: Any>: HasCsForwardKilledKillsRouting<V, F>, HasForwardKillsRedisplayRouting<V, F>
interface HasCsForwardKilledKillsRedisplayRoutingUix<V, in F: Any>: HasCsForwardKilledKillsRedisplayRouting<V, F>, HasUix, HasKillsUix

interface HasForwardKillsRedisplay<in F: Any>: HasForward<F>, HasKillsRedisplay
interface HasForwardKillsRedisplayRouting<V, in F: Any>: HasKillsRouting<V>, HasForward<F>, HasKillsRedisplay


class ForwardImpl<V, in F: HasKillView<V>>(
    deps: HasKillsRouting<V>,
    val baseView: () -> ViewItem<V>
): HasView<V>, HasForwardKillsRedisplayRouting<V, F>, KillsApi, HasKillsRouting<V> by deps {

    val status: Var<@UnsafeVariance F?> = Var<F?>(null).oldKilledOpt

    fun returnToSelf() { status %= null }
    fun forwardTo(fwd: F?) { status %= fwd }

    override var redisplay = Redisplay { returnToSelf() }
    override val fwd: (F?) -> Unit = { forwardTo(it) }
    override val viewItem get() = status()?.viewItem ?: baseView()
    operator fun remAssign(fwd: F) { forwardTo(fwd) }

}

interface ForwardMixin<V, in F: HasKillView<V>>: HasView<V>, HasForwardKillsRedisplayRouting<V, F> {
    val forwardImpl: ForwardImpl<V, F>

    override val redisplay get() = forwardImpl.redisplay

    override val fwd get() = forwardImpl.fwd
    override val viewItem get() = forwardImpl.viewItem

    fun returnToSelf() = forwardImpl.returnToSelf()
    fun forwardTo(fwd: F?) = forwardImpl.forwardTo(fwd)
    operator fun remAssign(fwd: F) = forwardImpl.remAssign(fwd)

}

fun ForwardView<TopAndContent, SimpleView<TopAndContent>>.hourglass() {
    this %= ProgressTC(this)
}

fun HasForwardKillsRoutingTC.hourglass(msg: String? = null) {
    msg?.also { globalStatus %= it }
    this %= ProgressTC(this)
}

abstract class ForwardView<V: Any, in F: HasKillView<V>>(
    parent: HasKillsRouting<V>
): CsKills(parent), IViewApi<V>, HasRouting<V> by parent, HasCsForwardKilledKillsRedisplayRoutingUix<V, F>, ForwardMixin<V, F>, SimpleViewItemMixin<V> {

    abstract val rawView: V
    override val simpleView by lazy { SimpleViewImpl(this, rawView) }

    @Suppress("LeakingThis")
    override val forwardImpl = ForwardImpl<V, F>(this) { simpleView.viewItem }

}

fun <F: Any> F?.forwarding(view: HasForward<F>) = apply { view %= this }

typealias ForwardTC = ForwardBase<TopAndContent>
abstract class ForwardBase<V: Any>(
    parent: HasKillsRouting<V>
): ForwardView<V, IView<V>>(parent)

fun HasCsForwardKillsRoutingTC.advance(fn: Action) {
    globalStatus %= "Please wait..."
    hourglass()
    launch { fn() }
}
