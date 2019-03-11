package commonui

import commonshr.*
import commonui.widget.*

fun Topbar.backButton(deps: HasFromKillsUix) = left.backButton(deps)

fun Factory.backButton(deps: HasFromKillsUix) = button {
    back
    click(deps) {
        deps.from.redisplay()
    }
}

