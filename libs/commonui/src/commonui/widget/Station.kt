package commonui.widget

import common.CsKillsApiCommon
import commonshr.*
import commonshr.KillsApi
import commonui.HasView
import commonui.KillsUixApi
import commonui.globalStatus
import killable.KillSet
import killable.Killables
import killable.killables
import killable.perform
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.Job
import kotlinx.coroutines.cancelAndJoin
import kotlinx.coroutines.launch
import rx.RxIface
import rx.Var





interface JobScopeApi: JobScope {

    suspend fun <T> JobSwitch<JobScopeWithItem<T>>.switchToWrap(fn: suspend JobKillsImpl.() -> T) {
        withChild {
            switchTo {
                JobScopeWithItem(this, fn())
            }
        }
    }


    suspend fun <T> withChild(fn: suspend JobKillsImpl.() -> T): T {
        return JobKillsImpl.childOf(this).run { fn() }
    }

    val <V: Any> V.childUIWrap get() = childUIWrap(this)
}
open class JobScopeImpl(
    override val coroutineContext: Job = Job()
): JobScopeApi {
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
): JobScopeImpl(coroutineContext), KillsApi, JobKillsApi, HasKilled {
    constructor(parent: JobScope): this(Job(parent.coroutineContext))

    override val killed = { coroutineContext.isCancelled }

    override val kills = createKills

    companion object {
        fun childOf(parent: JobScope) = JobKillsImpl(parent)
    }


    fun <V: Any> HoleT<V>.viewsAny() = viewsAny(this)
    fun <V: Any> viewsAny(fn: HoleT<V>) = JobSwitch.viewsOpt<V, JobScopeWithView<V>>(this, null, fn)
    fun <V: Any> viewsAny(initial: JobScopeWithView<V>, fn: HoleT<V>) = JobSwitch.views(this, initial, fn)
    fun <V: Any, I: JobScopeWithView<V>> views(initial: I, fn: HoleT<V>) = JobSwitch.views(this, initial, fn)
    fun <V: Any, I: JobScopeWithView<V>> viewsOpt(initial: I?, fn: HoleT<V>) = JobSwitch.viewsOpt(this, initial, fn)
    fun <V: Any, I: JobScopeWithView<V>> viewsOpt(fn: HoleT<V>) = viewsOpt<V, I>(null, fn)

    fun <T: JobScope> switch(initial: T) = JobSwitch.of(initial)
    fun <T: JobScope> switchOpt() = JobSwitch.optional<T>()
    inline fun <T: JobScopeWithView<*>> views() = this.unsafeCast<Views<T>>()
    fun <T> wrap(initial: T) = JobSwitch.wrap(initial)
    fun <T: Any> wrap() = JobSwitch.wrap<T>()


}

interface Views<T: JobScopeWithView<*>>
inline fun <V: Any, T: JobScopeWithView<V>> Views<T>.opt(fn: HoleT<V>) = this.unsafeCast<JobKillsImpl>().viewsOpt<V, T>(fn)
inline fun <V: Any, T: JobScopeWithView<V>> Views<T>.of(initial: T, fn: HoleT<V>) = this.unsafeCast<JobKillsImpl>().views(initial, fn)


open class ExecImpl(coroutineContext: Job) : JobKillsImpl(coroutineContext), HasExec {
    constructor(parent: JobScope): this(Job(parent.coroutineContext))

    override val exec = executor()

    fun <S, T> JobSwitch<T>.fromRx(source: RxIface<S>, fn: suspend (S) -> T) = apply {
        fromRx(this@ExecImpl, exec, source, fn)
    }
    fun <S, V: Any, I: JobScopeWithView<V>> JobSwitch<ItemWithViewRx<I, V>?>.viewFromRx(source: RxIface<S>, fn: suspend (S) -> I?) = apply {
        fromRx(this@ExecImpl, exec, source, fn)
    }
    fun <S, V> JobSwitch<JobScopeWithItem<V>>.wrapFromRx(source: RxIface<S>, fn: suspend JobKillsImpl.(S) -> V) = apply {
        fromRx(this@ExecImpl, this@ExecImpl, exec, source, fn)
    }

    fun <T, S> RxIface<T>.mapAsync(
        initial: S,
        fn: suspend JobKillsImpl.(T) -> S
    ): RxIface<S> {
        val switch = wrap(initial)

        forEach { t ->
            exec {
                switch.switchToWrap {
                    fn(t)
                }
            }
        }

        return rx { switch().item }
    }

}


interface JobScopeWithView<V: Any>: JobScope, HasView<V>

abstract class ViewImplBase<V: Any>(
    coroutineContext: Job
): ExecImpl(coroutineContext), JobScopeWithView<V> {
    constructor(
        parent: JobScope
    ): this(Job(parent.coroutineContext))

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

}

abstract class ViewImpl<V: Any>(
    coroutineContext: Job
): ViewImplBase<V>(coroutineContext) {
    constructor(
        parent: JobScope
    ): this(Job(parent.coroutineContext))

    override fun view(prepare: V?.() -> Unit): V? = preparedView(prepare)
}

abstract class UIBase<V: Any>(
    coroutineContext: Job
): ViewImpl<V>(coroutineContext), KillsUixApi {
    constructor(
        parent: JobScope
    ): this(Job(parent.coroutineContext))

    override val uix : Runner = { perform(it) }
}

open class UIWrap<V: Any>(
    coroutineContext: Job,
    override val rawView: V
):  UIBase<V>(coroutineContext) {
    constructor(
        parent: JobScope,
        rawView: V
    ): this(Job(parent.coroutineContext), rawView)
}

fun <V: Any> JobScope.childUIWrap(rawView: V) = UIWrap(this, rawView)


class JobSwitch<T> private constructor(
    private val current: Var<T>,
    private val job: T.() -> Job?
): RxIface<T> by current {
    constructor(
        initial: T,
        job: T.() -> Job?
    ): this(
        Var(initial),
        job
    )

    suspend fun switchTo(item: @UnsafeVariance T) {
        current.now.job().let {
            current.now = item
            it?.cancelAndJoin()
        }
    }

    suspend fun switchTo(fn: suspend () -> @UnsafeVariance T) {
        current.now.job()?.cancelAndJoin()
        current.now = fn()
    }

    fun <S> fromRx(kills: KillsApi, exec: Exec, source: RxIface<S>, fn: suspend (S) -> @UnsafeVariance T) = with(kills) {
        source.forEach { s ->
            exec {
                switchTo {
                    fn(s)
                }
            }
        }
    }

    suspend operator fun remAssign(item: @UnsafeVariance T) { switchTo(item) }
    suspend operator fun remAssign(item: suspend () -> @UnsafeVariance T) { switchTo(item) }

    companion object {
        fun <T: JobScope> of(initial: T) = JobSwitch(initial) { this.coroutineContext }
        fun <T: JobScope> optional() = JobSwitch<T?>(null) { this?.coroutineContext }
        fun <T: ItemWithViewRx<JobScope, *>?> jobWithView(initial: T) = JobSwitch(
            initial,
            job = { this?.let { item.coroutineContext } }
        )
        fun <V: Any, I: JobScopeWithView<V>> views(kills: KillsApi, initial: I, fn: HoleT<V>): JobSwitch<ItemWithViewRx<I, V>> {
            fun I.wrap() = ItemWithViewRx<I, V>(this) { this.view(it) }

            return jobWithView(initial.wrap()).apply {
                runView(kills, fn)
            }
        }
        fun <V: Any, I: JobScopeWithView<V>> viewsOpt(kills: KillsApi, initial: I?, fn: HoleT<V>): JobSwitch<ItemWithViewRx<I, V>?> {
            fun I?.wrap() = this?.let { ItemWithViewRx<I, V>(this) { this.view(it) } }

            return jobWithView(initial.wrap()).apply {
                runViewOpt(kills, fn)
            }
        }
        fun <T> wrap(initial: T) = wrap(JobScopeWithItem(JobScopeImpl(), initial))
        fun <T: Any> wrap() = wrap(JobScopeWithItem<T?>(JobScopeImpl(), null))

        fun <T> wrap(initial: JobScopeWithItem<T>) = JobSwitch(
            initial,
            job = { this.job.coroutineContext }
        )

    }
}

fun <S, V> JobSwitch<JobScopeWithItem<V>>.fromRx(
    job: JobScopeApi,
    kills: KillsApi,
    exec: Exec,
    source: RxIface<S>,
    fn: suspend JobKillsImpl.(S) -> V
) = apply {
    with(kills) {
        with(job) {
            source.forEach { s ->
                exec {
                    switchToWrap {
                        fn(s)
                    }
                }
            }
        }
    }
}
suspend fun <V: Any, I: JobScopeWithView<V>> JobSwitch<ItemWithViewRx<I, V>?>.switchTo(item: I?) = switchTo(
    item?.let { v -> ItemWithViewRx.hasView(v) }
)
suspend fun <V: Any, I: JobScopeWithView<V>> JobSwitch<ItemWithViewRx<I, V>?>.switchTo(item: suspend () -> I?) = switchTo {
    item()?.let { v -> ItemWithViewRx.hasView(v) }
}

fun <S, V: Any, I: JobScopeWithView<V>> JobSwitch<ItemWithViewRx<I, V>?>.fromRx(kills: KillsApi, exec: Exec, source: RxIface<S>, fn: suspend (S) -> I?) = apply {
    with(kills) {
        source.forEach { s ->
            exec {
                switchTo {
                    fn(s)?.let { v -> ItemWithViewRx.hasView(v) }
                }
            }
        }
    }
}
class JobScopeWithItem<T>(
    val job: JobScope,
    val item: T
)

suspend fun <V: Any, I: JobScopeWithView<V>> JobSwitch<ItemWithViewRx<JobScope, V>>.switchToView(item: I) {
    switchTo(ItemWithViewRx(item) { item.view(it) })
}
suspend fun <V: Any, I: JobScopeWithView<V>> JobSwitch<ItemWithViewRx<I, V>?>.switchToView(item: suspend () -> I) {
    switchTo { item().let { i -> ItemWithViewRx(i) { i.view(it) } } }
}
suspend fun <V: Any, I: JobScopeWithView<V>> JobSwitch<ItemWithViewRx<I, V>>.switchToView(item: suspend () -> I) {
    switchTo { item().let { i -> ItemWithViewRx(i) { i.view(it) } } }
}

fun <V, T: ItemWithViewRx<*, V?>> JobSwitch<T?>.runViewOpt(kills: KillsApi, fn: HoleT<V>) = with(kills) {
    rx { invoke()?.view?.invoke(fn.prepareOrNull) }.forEach(fn.assign.ignoreThis)
}
fun <V: Any, T: ItemWithViewRx<*, V>> JobSwitch<T>.runView(kills: KillsApi, hole: HoleT<V>) = with(kills) {
    rx { invoke().view(hole.prepareOrNull) }.forEach(hole.assign.ignoreThis)
}

class ItemWithViewRx<out I, out V: Any>(
    val item: I,
    val view: (V?.() -> Unit) -> V?
) {
    companion object {
        fun <I, V: Any> hasView(item: I, view: HasView<V>): ItemWithViewRx<I, V> = ItemWithViewRx(item) { view.view(it) }
        fun <V: Any, I: HasView<V>> hasView(item: I): ItemWithViewRx<I, V> = ItemWithViewRx(item) { item.view(it) }
    }
}


