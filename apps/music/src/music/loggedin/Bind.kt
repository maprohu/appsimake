package music.loggedin

import commonui.widget.HasInbox
import commonui.widget.Inbox

class Bind(
    override val inbox: Inbox
): HasInbox {
    val SignOut = object {}
}