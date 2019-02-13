package commonui.widget

import common.None
import common.Optional
import common.Some
import commonshr.*
import killable.HasKillSet
import killable.Killables
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.cancelAndJoin
import rx.RxIface
import rx.Var

interface JobScope: CoroutineScope {
    override val coroutineContext: Job
}
open class JobScopeImpl(
    override val coroutineContext: Job = Job()
): JobScope {
    constructor(parent: JobScope): this(Job(parent.coroutineContext))

    companion object {
        fun childOf(parent: JobScope) = JobScopeImpl(parent)
    }
}

val JobScope.createKills get() = Killables().apply {
    coroutineContext.invokeOnCompletion { kill() }
}.killSet
open class JobKillsImpl(
    coroutineContext: Job = Job()
): JobScopeImpl(coroutineContext), HasKillSet {
    constructor(parent: JobScope): this(Job(parent.coroutineContext))

    override val kills = createKills

    companion object {
        fun childOf(parent: JobScope) = JobKillsImpl(parent)
    }

    suspend fun <T> withChild(fn: suspend JobKillsImpl.() -> T): T {
        return childOf(this).run { fn() }
    }
}

open class ExecImpl(coroutineContext: Job) : JobKillsImpl(coroutineContext), HasExec {
    constructor(parent: JobScope): this(Job(parent.coroutineContext))

    override val exec = executor()
}

interface HasView<V> {
    val view: V
}
interface JobScopeWithView<V>: JobScope, HasView<V>
abstract class ViewImpl<V>(
    coroutineContext: Job,
    val initView: V.() -> Unit = {}
): ExecImpl(coroutineContext), JobScopeWithView<V> {
    constructor(
        parent: JobScope,
        initView: V.() -> Unit = {}
    ): this(Job(parent.coroutineContext), initView)

    final override val view by lazy {
        rawView.apply(initView)
    }

    abstract val rawView: V

}


class JobSwitch<T>(
    initial: T,
    val job: T.() -> Job?
) {
    val current = Var(initial)

    suspend fun switchTo(item: T) {
        current.now.job().let {
            current.now = item
            it?.cancelAndJoin()
        }
    }

    suspend fun switchTo(fn: suspend () -> T) {
        current.now.job()?.cancelAndJoin()
        current.now = fn()
    }

    companion object {
        fun <T: JobScope> optional() = JobSwitch<T?>(null) { this?.coroutineContext }
        fun <T: ItemWithViewRx<JobScope, *>?> jobWithView(initial: T) = JobSwitch(
            initial,
            job = { this?.let { item.coroutineContext } }
        )
        fun <V, I: JobScopeWithView<V>> viewOpt(kills: HasKillSet, initial: I?, fn: Assign<V?>): JobSwitch<ItemWithViewRx<I, V>?> {
            fun I?.wrap() = this?.let { ItemWithViewRx(this) { this.view} }

            return jobWithView(initial.wrap()).apply {
                runViewOpt(kills, fn)
            }
        }

    }
}

fun <V, T: ItemWithViewRx<*, V>> JobSwitch<T?>.runViewOpt(kills: HasKillSet, fn: Assign<V?>) = with(kills) {
    rx { current()?.view?.invoke() }.forEach(fn)
}
fun <V, T: ItemWithViewRx<*, V>> JobSwitch<T>.runView(kills: HasKillSet, fn: Assign<V>) = with(kills) {
    rx { current().view() }.forEach(fn)
}

class ItemWithViewRx<out I, out V>(
    val item: I,
    val view: () -> V
) {
    companion object {
        operator fun <I, V> invoke(item: I, view: HasView<V>) = ItemWithViewRx(item) { view.view }
    }
}


class ViewWithForward<V>(
    base: V,
    forward: () -> Optional<V>
) {
    val view = { forward().getOrDefault(base) }

    companion object {
        operator fun <V, S> invoke(
            base: V,
            current: RxIface<S?>,
            view: S.() -> V
        ): ViewWithForward<V> = ViewWithForward(
            base,
            forward = { current()?.let { Some(it.view()) } ?: None }
        )
    }
}

class Switch<T: Station?>(
    val owner: Station,
    initial: T
) {
    val current = Var(initial)


    suspend fun switchNowTo(fn: suspend () -> T) {
        current.now?.coroutineContext?.cancelAndJoin()
        current.now = fn()
    }
    fun switchTo(fn: suspend () -> T) = owner.exec {
        switchNowTo(fn)
    }
}


interface Station: CoroutineScope, HasExec, HasKillSet {
    override val coroutineContext: Job
}

open class StationImpl(
    override val coroutineContext: Job = Job()
): Station {
    final override val exec = executor()
    override val kills = createKills
}

class StationWithView<S: Station, V>(
    val station: S,
    val view: V
)


class MainThread<V, T: UIStation<V>>(
    val owner: UIStation<V>,
    val thisView: V,
    val switch: Switch<T?>
) {
    fun hasTailNow() = switch.current.now != null

    val uix: Exec = { a ->
        owner.exec {
            if (!hasTailNow()) {
                a()
            }
        }
    }

    val redisplay: Action = {
        switch.switchNowTo { null }
    }

    fun view(): V = switch.current()?.initializedView ?: thisView

    fun run(ks: HasKillSet, insert: (V) -> Unit) = with(ks) {
        rx { view() }.forEach {
            insert(it)
        }
    }
}


interface HasMainThread<V, T: UIStation<V>> {
    val mainThread: MainThread<V, T>
    suspend fun redisplayNow() { mainThread.redisplay() }
    fun uix(a: Action) { mainThread.uix(a) }
    suspend fun advanceNow(fn: suspend () -> T) { mainThread.switch.switchNowTo(fn) }
}

interface UIStation<V>: Station {
    val view: V
    val viewInitializer: V.() -> Unit
    val initializedView: V

    val <T: V> T.initialized get() = apply(viewInitializer)

    fun <T: UIStation<V>> createMainThread(view: V): MainThread<V, T> = MainThread(
        owner = this,
        thisView = view,
        switch = switchOpt()
    )
}



abstract class MainStation<V, T: UIStation<V>>(
    parent: Switch<*>,
    viewInitializer: V.() -> Unit
): BaseUIStation<V>(parent.owner, viewInitializer), HasMainThread<V, T> {
    abstract fun createView(): V
    override val mainThread = createMainThread<T>(createView())
}

abstract class BaseUIStation<V>(
    parent: Station,
    override val viewInitializer: V.() -> Unit
): BaseSubStation(parent), UIStation<V> {

    override val initializedView by lazy {
        view.initialized
    }
}

abstract class BaseSubStation(
    parent: Station
): StationImpl(Job(parent.coroutineContext))

class WrapStation<T>(val value: T, parent: Station): BaseSubStation(parent)


fun <T: Station?> Station.switchOpt(initial: T) = Switch(this, initial)
fun <T: Station> Station.switchOpt() = Switch<T?>(this, null)
fun <T: Station> Station.switch(initial: T) = Switch(this, initial)

fun Station.stations(initial: Station) = Switch(this, initial)
val Station.stations get() = Switch<Station?>(this, null)
fun Station.stationsOpt(initial: Station?) = Switch(this, initial)

fun <T> Station.wrap(initial: T): Switch<WrapStation<T>> {
    return switch(WrapStation(initial, this))
}
fun <I, O> Station.rxStation(rxv: RxIface<I>, initial: O, fn: suspend (I) -> O): Switch<WrapStation<O>> {
    val sw = wrap(initial)

    rxv.forEach { i ->
        exec {
            sw.switchNowTo {
                WrapStation(fn(i), this@rxStation)
            }
        }
    }

    return sw
}
