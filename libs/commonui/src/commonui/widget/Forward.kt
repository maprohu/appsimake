package commonui.widget

import common.None
import common.Optional
import common.Some
import commonshr.*
import commonui.HasKillsUix
import kotlinx.coroutines.InternalCoroutinesApi
import kotlinx.coroutines.Job
import rx.RxIface

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
            switch: JobSwitch<T?>
        ) = invoke(
            base,
            switch
        ) { this }
    }
}

abstract class ForwardBase<V: Any>(
    coroutineContext: Job
): ForwardImpl<V, JobScopeWithView<V>>(coroutineContext) {
    constructor(
        parent: JobScope
    ): this(Job(parent.coroutineContext))
}

interface HasRedisplay {
    val redisplay: Trigger
}

interface HasJobRedisplay: HasRedisplay, JobScope

interface HasForward<F: JobScopeWithView<*>> {
    val forward : JobSwitch<F?>
}

abstract class ForwardImpl<V: Any, F: JobScopeWithView<V>>(
    coroutineContext: Job
): ViewImplBase<V>(coroutineContext), HasKillsUix, HasJobRedisplay, HasForward<F> {
    constructor(
        parent: JobScope
    ): this(Job(parent.coroutineContext))

    override val forward = JobSwitch.optional<F>()

    override val uix: Exec = run {
        val ex = discardExecutor();

        { action ->
            ex {
                if (forward.now == null) {
                    action()
                }
            }

        }
    }

    override val redisplay = { exec { forward.switchTo(null) } }

    private val baseView = object : HasView<V> {
        override fun view(prepare: V?.() -> Unit): V? = preparedView(prepare)
    }

    private val forwardView = ViewWithForward.of(baseView, forward)

    override fun view(prepare: V?.() -> Unit): V? = forwardView.view(prepare)

}

