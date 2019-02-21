package commonui.widget

import bootstrap.setupFullScreen
import commonshr.constant
import commonshr.funs
import commonshr.remAssign
import kotlinx.coroutines.Job
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import kotlin.browser.document

typealias BodyNode = ItemWithViewRx<JobScope, HTMLElement>
class Body(
    slot: Hole = kotlin.run {
        setupFullScreen()
        document.body!!.hole
    }
): JobKillsImpl() {

    val content = JobSwitch.jobWithView<BodyNode>(
        ItemWithViewRx(
            JobScopeImpl.childOf(this),
            Factory().hourglass.node.funs.ignore1()
        )
    )

    init {
        content.runView(this, slot)
    }

}

open class BodyPath(
    val body: Body
)
