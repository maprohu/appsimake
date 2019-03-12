package commonui

import commonshr.Exec
import commonshr.HasKills
import commonshr.Runner
import commonui.editing.Bindings
import commonui.editing.DefaultEditing
import killable.KillSet
import rx.RxIface


interface HasBind {
    val editing: Bindings
}

interface HasEdit {
    val editing: DefaultEditing
}


interface HasBindKills: HasBind, HasKills

interface HasEditKills: HasEdit, HasKills

class EditKillsDeps(
    override val editing: DefaultEditing,
    override val kills: KillSet
): HasEditKills

operator fun DefaultEditing.plus(kills: KillSet) = EditKillsDeps(this, kills)

interface HasEditFromKillsUix: HasEdit, HasFrom, HasKills, HasUix, HasEditKillsUix

interface HasEditExitFromKillsUix: HasEdit, HasExit, HasFrom, HasKills, HasUix, HasEditFromKillsUix {
    override val exit get() = from
}

interface HasHistory {
    val history: BrowserHistory
}

interface HasHistoryKillsRedisplay: HasHistory, HasKills, HasRedisplay

interface HasFrom {
    val from: HasRedisplay
}
interface HasExit {
    val exit: HasRedisplay
}

interface HasEditFrom: HasEdit, HasFrom

interface HasUix {
    val uix: Runner
}

interface HasFromUix: HasFrom, HasUix

interface HasKillsUix: HasKills, HasUix

interface HasFromKillsUix: HasFromUix, HasKillsUix

interface HasEditKillsUix: HasEdit, HasKills, HasUix, HasKillsUix, HasEditKills

