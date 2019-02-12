package commonui.widget

import bootstrap.setupFullScreen
import killable.Killables
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.channels.Channel
import kotlin.browser.document
import kotlin.coroutines.CoroutineContext

open class BodyWrap(val body: Body)

open class Body(
    override val coroutineContext: CoroutineContext = Job(),
    val panel: Slot = run {
        setupFullScreen()
        document.body!!.widget.apply { insert.hourglass }
    }
): CoroutineScope {
    lateinit var job: Job

    val kills = Killables().also {
        job.invokeOnCompletion {  }

    }

//    val proc = runLoop(inbox).toSetProcOrElse()

//    val slot = singleSlot(
//        kills.killSet,
//        panel,
//        proc
//    )

}
