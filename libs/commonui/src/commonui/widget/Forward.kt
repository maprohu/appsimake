package commonui.widget

import common.None
import common.Optional
import common.Some
import commonshr.Action
import commonshr.Exec
import commonshr.discardExecutor
import commonshr.executor
import kotlinx.coroutines.InternalCoroutinesApi
import kotlinx.coroutines.Job
import rx.RxIface

class ViewWithForward<V>(
    val base: HasView<V>,
    val forward: () -> HasView<V>?
): HasView<V> {
    override fun view(prepare: V?.() -> Unit): V? {
        return forward()?.view(prepare) ?: base.view(prepare)
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
    factory: JobScope
): ForwardImpl<V, JobScopeWithView<V>>(factory)

@UseExperimental(InternalCoroutinesApi::class)
abstract class ForwardImpl<V: Any, F: JobScopeWithView<V>>(
    factory: JobScope
): ViewImpl<V>(factory.coroutineContext), HasUIX {
    val forward = JobSwitch.optional<F>()
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

    val back = { exec { forward.switchTo(null) } }
}

class ViewWithForwardImpl<V: Any, F: JobScopeWithView<V>, B: HasView<V>>(
    factory: JobScope,
    val base: B,
    val forward: JobSwitch<F?>
): ExecImpl(factory.coroutineContext), JobScopeWithView<V> {
    companion object {
        fun <V: Any, F: JobScopeWithView<V>, B: ForwardImpl<V, F>> of(
            factory: JobScope,
            forward: B
        ) = ViewWithForwardImpl(factory, forward, forward.forward)
    }

    private val forwardView = ViewWithForward.of(base, forward)

    override fun view(prepare: V?.() -> Unit): V? = forwardView.view(prepare)
}

suspend fun <J: JobScope, V: Any, F: JobScopeWithView<V>, O: ForwardImpl<V, F>> J.fwd(fn: suspend JobKillsImpl.(J) -> O): ViewWithForwardImpl<V, F, O> {
    return withChild {
        ViewWithForwardImpl.of(this, fn(this@fwd))
    }
}
suspend fun <J: JobScope, V: Any, F: JobScopeWithView<V>, O: ForwardImpl<V, F>> J.fwdc(fn: (JobScope, J) -> O): ViewWithForwardImpl<V, F, O> {
    return withChild {
        ViewWithForwardImpl.of(this, fn(this, this@fwdc))
    }
}

