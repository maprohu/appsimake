package commonui.widget

import bootstrap.setupFullScreen
import commonui.*
import commonui.progress.Progress
import killable.NoKill
import org.w3c.dom.HTMLElement
import rx.Var
import kotlin.browser.document

interface BodyPath {
    val body: Body
}
typealias BodyNode = IView<HTMLElement>
class Body(
    slot: Hole = kotlin.run {
        setupFullScreen()
        document.body!!.hole
    }
): CsKills(NoKill), BodyPath {
    override val body = this

    val content = Var<BodyNode>(Progress(this)).oldKilled

    init {
        content.runView(this, slot)
    }
}

