package music.boot

import commonshr.invoke
import commonui.widget.*

fun UI(
    panel: Slot,
    bind: Bind
) = ui(panel, bind) {

    with(bind) {
        screen {
            top = slots.top.factory
            player = slots.bottom.factory
            bind.main = toastSlots.content
            bind.toasts = toastSlots.toasts.let { tsts ->
                { fn ->
                    tsts.toast.apply(fn)
                }
            }
        }
    }

}

