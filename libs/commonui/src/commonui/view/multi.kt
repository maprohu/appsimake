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


class MultiImpl<V, F: HasView<V>>(
    val currentView: RxIface<F>
): HasView<V> {
    override val viewItem get() = currentView().viewItem
}

interface MultiMixin<V, F: HasView<V>>: HasView<V> {
    val multiImpl: MultiImpl<V, F>
    override val viewItem get() = multiImpl.viewItem
}


abstract class MultiView<V, F: HasView<V>>(
    parent: HasKills
): CsKills(parent), IViewApi<V>, MultiMixin<V, F>, HasRedisplay  {
    abstract val currentView: RxIface<F>
    override val multiImpl by lazy { MultiImpl(currentView) }
    override val redisplay = Redisplay {}
}


typealias MultiViewTC = MultiView<TopAndContent, IViewTC>

