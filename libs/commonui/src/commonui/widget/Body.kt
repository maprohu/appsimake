package commonui.widget

import bootstrap.setupFullScreen
import killable.Killables
import kotlinx.coroutines.channels.Channel
import kotlin.browser.document

open class BodyWrap(val body: Body = Body()): InboxWrap(body.inbox)

open class Body private constructor(panelFactory: InboxWrap.() -> Slot, inbox: Channel<Any>): InboxWrap(inbox) {
    val panel = this.panelFactory()

    constructor(
        panel: InboxWrap.() -> Slot
    ): this(panel, Channel(Channel.UNLIMITED))

    constructor(): this({
        setupFullScreen()
        document.body!!.widget.apply { insert.hourglass }
    })

    val kills = Killables().also {
        it += { inbox.close() }
    }

    val proc = runLoop(inbox).toSetProcOrElse()

}
