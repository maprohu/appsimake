package checklist

import commonui.launchGlobal
import commonui.loadApp
import commonui.show

fun main() {
    launchGlobal {
        Links().apply {
            load {
                loggedIn.show()
            }
        }
    }
}