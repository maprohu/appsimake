package commonui

import commonshr.*
import commonui.widget.*
import fontawesome.redoAlt
import kotlin.browser.window

fun DropdownMenu.reload(deps: HasKillsUix) {
    item {
        text %= "Reload App"
        icon.fa.redoAlt
        click(deps) {
            window.location.asDynamic().reload(true)
            Unit
        }
    }
}
