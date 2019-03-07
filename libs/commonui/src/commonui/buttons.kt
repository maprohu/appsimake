package commonui

import commonshr.*
import commonui.widget.*

fun Topbar.backButton(deps: HasFromUix) = left.backButton(deps)

fun Factory.backButton(deps: HasFromUix) = button {
    back
    click(deps) {
        deps.from.redisplay()
    }
}

