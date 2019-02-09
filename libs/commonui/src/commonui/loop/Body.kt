package commonui.loop

import bootstrap.setupFullScreen
import commonui.*
import killable.Killables
import kotlinx.coroutines.channels.Channel
import kotlin.browser.document

open class BodyWrap(val body: Body = Body()): InboxWrap(body.inbox)

open class Body private constructor(val panel: Slot, inbox: Channel<Any>): InboxWrap(inbox) {
    constructor(
        panel: () -> Slot
    ): this(panel(), Channel(Channel.UNLIMITED))

    constructor(): this({
        setupFullScreen()
        document.body!!.widget.apply { hourglass() }
    })

    val kills = Killables().also {
        it += { inbox.close() }
    }

    val proc = runLoop(inbox).toSetProcOrElse()

}
