package music.boot

import commonui.usericon.UnknownUserSrc
import commonui.widget.*
import rx.RxIface
import rx.Var

class Bind() {

    val userIcon = Var(UnknownUserSrc)


    lateinit var top: Hole
    lateinit var main: Hole
    lateinit var toasts: (ToastFn) -> Unit
    lateinit var player: Hole


}