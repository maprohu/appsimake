package commonui.usericon

import commonui.widget.*
import killable.KillSet


class UserIcon(
    kills: KillSet,
    inbox: Inbox,
    slot: Factory
) {
    val bind = Bind(inbox)
    private val ui = UI(kills, slot, bind)

    init {
        ui.visible()
    }
}