package music.boot

import commonshr.ActorFn
import commonshr.invoke
import commonui.widget.*

fun UI(
    exec: ActorFn<BootState>,
    panel: Factory,
    bind: Bind
) = with(panel) {
    with(bind) {
        screen {
            top = slots.top
            player = slots.bottom
            bind.main = toastSlots.content
            bind.toasts = toastSlots.toasts.let { tsts ->
                { fn ->
                    exec {
                        tsts.toast.apply(fn)
                    }
                }
            }
        }
    }

}

