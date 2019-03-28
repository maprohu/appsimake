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

typealias SimpleView<V> = CsKillsView<V>
typealias ViewTC = SimpleView<TopAndContent>

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

class SimpleViewImpl<V>(
    deps: HasKilledKillsRouting<V>,
    rawView: V
): HasKilledKillsRouting<V> by deps, HasView<V>, KillsApi, HasUix {
    val isActiveView by lazy { rx { activeView() == viewItem } }

    override val viewItem = SimpleViewItem(rawView)
    override val uix: Runner = { action ->
        perform {
            if (isActiveView.now) {
                action()
            }
        }
    }
}

interface SimpleViewItemMixin<V>: HasUix, HasRouting<V> {
    val simpleView: SimpleViewImpl<V>
    override val uix get() = simpleView.uix
}
interface SimpleViewMixin<V>: SimpleViewItemMixin<V>, HasView<V> {
    override val viewItem get() = simpleView.viewItem
}

abstract class CsKillsView<V>(
    private val parent: HasKillsRouting<V>
) : CsKills(parent), IViewApi<V>, KillsUixApi, HasKillsRedisplay, HasKilledKillsRouting<V>, HasRouting<V> by parent, SimpleViewMixin<V> {
    abstract val rawView: V
    override val simpleView by lazy { SimpleViewImpl(this, rawView) }
    override val redisplay = Redisplay {}
}
