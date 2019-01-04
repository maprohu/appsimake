package gymclock

import common.obj
import org.w3c.dom.get
import org.w3c.dom.set
import rx.Rx
import rx.Var
import kotlin.browser.window

external interface Settings {
    var work: Int
    var rest: Int
    var delay: Int
    var sounds: Boolean
}

const val SettingsKey = "gymclock-settings"

object Model {

    var settings =
        window.localStorage[SettingsKey]?.let { JSON.parse<Settings>(it) } ?: obj {
            work = 40
            rest = 20
            delay = 5
            sounds = true
        }

    val work = Var(settings.work)
    val rest = Var(settings.rest)
    val delay = Var(settings.delay)
    val sounds = Var(settings.sounds)

    val settingsRx = Rx {
        obj<Settings> {
            work = work()
            rest = rest()
            delay = delay()
            sounds = sounds()
        }
    }

    init {
        settingsRx.forEach {
            window.localStorage[SettingsKey] = JSON.stringify(it)
        }
    }




}