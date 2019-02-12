package music.boot

import commonui.widget.DropdownMenu
import commonui.widget.InboxWrap
import commonui.widget.Msg
import commonui.widget.ToastFn
import fontawesome.database
import rx.RxIface

open class BootSub(
    boot: Boot
): InboxWrap(boot.inbox) {
    val boot = boot.sub
    val Database = object {}
    val DropdownMenu.database get() = item(Database) {
        fa.database
        text %= "Database"
    }
}
class Sub(
    val userIcon : RxIface<String>
) {
    val ShowToast = object : Msg<ToastFn> {}

}
