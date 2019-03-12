package commonui

import common.CsKillsApiCommon
import commonshr.*
import commonui.widget.HoleT
import killable.*
import kotlinx.coroutines.Job
import rx.*

open class CsKills(killables: Killables): CsKillsApiCommon, HasKillKilledKills by killables  {
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

interface HasView<V> {
    fun view(prepare: V?.() -> Unit): V?
}
interface HasKillsView<V>: HasKills, HasView<V>
interface HasKillKillsView<V>: HasKillsView<V>, HasKillKills

typealias IView<V> = HasKillKillsView<V>
typealias SimpleView<V> = CsKillsView<V>
abstract class CsKillsView<V>(
    killables: Killables
) : CsKills(killables), IView<V>, HasUix {
    constructor(parent: KillSet): this(parent.killables())
    constructor(parent: HasKills): this(parent.kills)

    private var prepared = false

    fun preparedView(prepare: V?.() -> Unit): V? {
        val v = rawView
        if (!prepared) {
            prepared = true
            v.prepare()
        }
        return v
    }

    abstract val rawView: V

    override fun view(prepare: V?.() -> Unit): V? = preparedView(prepare)

    override val uix: Runner = { action ->
        perform(action)
    }
}

fun <V: Any, T: HasKillsView<V>> Var<T>.runView(deps: HasKills, hole: HoleT<V>) {
    rx(deps) { invoke().view(hole.prepareOrNull) }.forEach(HasNoKill, hole.assign.ignoreThis)
}


class ViewWithForward<V>(
    val base: HasView<V>,
    val forward: () -> HasView<V>?
): HasView<V> {
    override fun view(prepare: V?.() -> Unit): V? {
        return (forward() ?: base).view(prepare)
    }

    companion object {
        operator fun <V, S> invoke(
            base: HasView<V>,
            current: RxIface<S?>,
            view: S.() -> HasView<V>
        ): ViewWithForward<V> = ViewWithForward(
            base
        ) { current()?.view() }

        fun <V, T: HasView<V>> of(
            base: HasView<V>,
            switch: Var<T?>
        ) = invoke(
            base,
            switch
        ) { this }
    }
}

interface HasRedisplay {
    val redisplay: Trigger
}
interface HasForward<F: CsKillsView<*>> {
    val forward : Var<F?>
}
abstract class ForwardView<V: Any, F: CsKillsView<V>>(
    killables: Killables
): CsKillsView<V>(killables), HasForward<F>, HasRedisplay, HasUix {
    constructor(parent: KillSet): this(parent.killables())
    constructor(parent: HasKills): this(parent.kills)

    final override val forward = Var<F?>(null).oldKilledOpt

    override val uix: Runner = { action ->
        perform {
            if (forward.now == null) {
                action()
            }
        }
    }

    private val baseView = object : HasView<V> {
        override fun view(prepare: V?.() -> Unit): V? = preparedView(prepare)
    }

    private val forwardView = ViewWithForward.of(baseView, forward)

    override fun view(prepare: V?.() -> Unit): V? = forwardView.view(prepare)

    override val redisplay = { forward %= null }
}

abstract class ForwardBase<V: Any>(
    killables: Killables
): ForwardView<V, SimpleView<V>>(killables) {
    constructor(parent: KillSet): this(parent.killables())
    constructor(parent: HasKills): this(parent.kills)
}
