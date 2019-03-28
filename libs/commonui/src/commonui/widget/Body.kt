package commonui.widget

import bootstrap.setupFullScreen
import commonshr.CsKills
import commonshr.invoke
import commonui.*
import commonui.progress.Progress
import commonui.topandcontent.ProgressTC
import killable.NoKill
import org.w3c.dom.HTMLElement
import rx.RxIface
import rx.Var
import kotlin.browser.document
import commonui.view.*

interface BodyPath {
    val body: Body
}
typealias BodyNode = IView<HTMLElement>
class Body(
    slot: Hole = kotlin.run {
        setupFullScreen()
        document.body!!.hole
    }
): CsKills(NoKill), CsKillsApiCommonui, BodyPath, HasKillsRouting<HTMLElement> {
    override val body = this

    val hole = slot.routing.of<BodyNode> { Progress(this) }

    override val activeView = hole.activeView

}


class BodyTC(
    body: Body = Body()
): SimpleView<HTMLElement>(body) {

    class Slots {
        lateinit var top: Hole
        lateinit var main: Hole
        lateinit var toasts: (ToastFn) -> Unit
    }

    val slts = Slots()

    override val rawView = run {
        factory.screen {
            slts.top = slots.top
            slts.main = toastSlots.content
            slts.toasts = toastSlots.toasts.let { tsts ->
                { fn ->
                    tsts.toast.apply(fn)
                }
            }
        }.node
    }


    val contentHole = HoleT<TopAndContent>(
        prepare = {
            topbar.apply(slts.top.prepareOrNull)
            content.apply(slts.main.prepareOrNull)
        },
        assign = { cv ->
            slts.top %= cv?.topbar
            slts.main %= cv?.content
        }
    )

    @Suppress("LeakingThis")
    val hole = contentHole.routing.of<IView<TopAndContent>> {
        ProgressTC(this)
    }

    init {
        body.hole %= this
    }

}
