package commonui.view

import commonshr.CsKills
import commonshr.HasKills
import commonui.widget.TopAndContent
import rx.RxIface

abstract class MultiForward<V, F: IView<V>>(
    parent: HasKillsRouting<V>
): CsKills(parent), IViewApi<V>, HasRouting<V> by parent, HasCsForwardKilledKillsRedisplayRouting<V, F>, ForwardMixin<V, F>  {

    abstract val currentView: RxIface<F>
    val multiImpl by lazy { MultiImpl(currentView) }

    @Suppress("LeakingThis")
    override val forwardImpl = ForwardImpl<V, F>(this) { multiImpl.viewItem }
}

typealias MultiTC = MultiForward<TopAndContent, IViewTC>
