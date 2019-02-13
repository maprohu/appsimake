package commonui.widget

import bootstrap.setupFullScreen
import commonshr.Trigger
import killable.Killables
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.channels.Channel
import kotlin.browser.document
import kotlin.coroutines.CoroutineContext

abstract class BodyWrap(
    val body: Body,
    parent: Station
): Station(parent)


open class Body(
    val slot: Slot = run {
        setupFullScreen()
        document.body!!.widget
    },
    parent: Station? = null
): Station(parent) {
    override val show: Trigger = { slot.insert.hourglass }
}
