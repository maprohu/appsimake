package music.loggedin

import commonui.HasInbox
import commonui.Inbox

class Bind(
    override val inbox: Inbox
): HasInbox {
    val SignOut = object {}
}