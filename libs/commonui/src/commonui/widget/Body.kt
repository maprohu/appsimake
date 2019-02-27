package commonui.widget

import bootstrap.setupFullScreen
import commonshr.constant
import commonshr.funs
import commonshr.remAssign
import commonui.progress.Progress
import kotlinx.coroutines.Job
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import kotlin.browser.document

interface BodyPath {
    val body: Body
}
typealias BodyNode = ItemWithViewRx<JobScope, HTMLElement>
class Body(
    slot: Hole = kotlin.run {
        setupFullScreen()
        document.body!!.hole
    }
): JobKillsImpl(), BodyPath {
    override val body = this

    val content = JobSwitch.jobWithView<BodyNode>(
        ItemWithViewRx.hasView(Progress(this))
    )

    init {
        content.runView(this, slot)
    }

}

