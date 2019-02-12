package music.boot

import commonui.usericon.UnknownUserSrc
import commonui.widget.*
import rx.RxIface
import rx.Var

class Bind(inbox: Inbox): InboxWrap(inbox) {

    val userIcon = Var(UnknownUserSrc)


    lateinit var top: Factory
    lateinit var main: Factory
    lateinit var toasts: (ToastFn) -> Unit
    lateinit var player: Factory


}