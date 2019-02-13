package commonui.widget

import bootstrap.setupFullScreen
import commonshr.constant
import commonshr.funs
import commonshr.remAssign
import kotlinx.coroutines.Job
import org.w3c.dom.Node
import kotlin.browser.document

typealias BodyNode = ItemWithViewRx<JobScope, Node?>
class Body: JobKillsImpl() {

    val content = JobSwitch.jobWithView<BodyNode>(
        ItemWithViewRx(
            JobScopeImpl.childOf(this),
            Factory().hourglass.node.funs.constant
        )
    )

    init {
        setupFullScreen()
        val slot = document.body!!.widget
        content.runView(this, slot)
    }

}

open class BodyPath(
    val body: Body
)
