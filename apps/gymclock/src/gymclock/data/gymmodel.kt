package gymclock.data

import common.obj
import commonshr.KillsApi
import commonshr.properties.NoDynamicOps
import commonshr.properties.RxBase
import commonshr.properties.readDynamic
import commonshr.properties.writeDynamic
import killable.KillSet
import org.w3c.dom.get
import org.w3c.dom.set
import rx.Var
import kotlin.browser.window

//external interface Settings {
//    var work: Int
//    var rest: Int
//    var delay: Int
//    var sounds: Boolean
//}

const val SettingsKey = "gymclock-settings"

class Settings: RxBase<Settings>() {

    val work by o.int(40)
    val rest by o.int(20)
    val delay by o.int(5)
    val sounds by o.boolean(true)

}

@Suppress("UnsafeCastFromDynamic")
fun KillsApi.loadModel(): Settings {
    val settings = Settings().apply {
        window.localStorage[SettingsKey]?.let {
            readDynamic(JSON.parse(it), NoDynamicOps)
        }
    }

    val settingsRx = rx {
        Settings().apply {
            work.now = settings.work()
            rest.now = settings.rest()
            delay.now = settings.delay()
            sounds.now = settings.sounds()
        }
    }

    settingsRx.forEach { s ->
        window.localStorage[SettingsKey] = JSON.stringify(s.writeDynamic(NoDynamicOps))
    }

    return settings
}

