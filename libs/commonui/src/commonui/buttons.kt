package commonui

import commonshr.*
import commonui.widget.*

fun Topbar.backButton(deps: HasBackKillsUix) = left.backButton(deps)

fun Factory.backButton(deps: HasBackKillsUix) = button {
    back
    click(deps) {
        deps.back()
    }
}

