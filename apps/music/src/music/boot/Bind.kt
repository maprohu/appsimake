package music.boot

import commonui.widget.*

class Bind(inbox: Inbox): InboxWrap(inbox) {

    inner class ShowToast(fn: Toast.() -> Unit)

    lateinit var top: Factory
    lateinit var main: Factory
    lateinit var toasts: (Toast.() -> Unit) -> Unit
    lateinit var player: Factory

}