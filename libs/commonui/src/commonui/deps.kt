package commonui

import commonshr.HasKills
import commonshr.Runner
import commonshr.Trigger
import commonui.editing.Bindings
import commonui.editing.Creating
import commonui.editing.DefaultEditing
import commonui.links.HashStruct
import commonui.links.Linkage
import commonui.links.NamedHashStruct
import commonui.view.Redisplay
import killable.KillSet
import kotlinx.coroutines.CoroutineScope

interface HasHash {
    val hash: NamedHashStruct
}
interface HasLinkage {
    val linkage: Linkage
}


interface HasHashKillsRedisplay: HasHash, HasKillsRedisplay
interface HasKillsLinkageRedisplay: HasLinkage, HasKillsRedisplay

interface HasBind {
    val bindings: Bindings
}

interface HasEdit: HasBind {
    val editing: DefaultEditing
    override val bindings get() = editing
}
interface HasCreate: HasBind {
    val creating: Creating
    override val bindings get() = creating
}

interface HasRedisplay {
    val redisplay: Redisplay
}

interface HasKillsRedisplay: HasKills, HasRedisplay

interface HasCsRedisplay: CoroutineScope, HasRedisplay

interface HasBindKills: HasBind, HasKills

interface HasEditKills: HasEdit, HasKills, HasBindKills

interface HasCreateKills: HasCreate, HasKills

class BindKillsDeps(
    override val bindings: Bindings,
    override val kills: KillSet
): HasBindKills

class EditKillsDeps(
    override val editing: DefaultEditing,
    override val kills: KillSet
): HasEditKills

class RedisplayDeps(
    override val redisplay: Redisplay
): HasRedisplay

operator fun Bindings.plus(kills: KillSet) = BindKillsDeps(this, kills)
operator fun DefaultEditing.plus(kills: KillSet) = EditKillsDeps(this, kills)

interface HasBackEditKillsUix: HasBack, HasEditKillsUix

interface HasBackCreateKillsUix: HasBack, HasCreateKillsUix


//interface DefaultExit: HasExit, HasFrom {
//    override val exit get() = from
//}

//interface HasHistory {
//    val history: BrowserHistory
//}

//interface HasHistoryKillsRedisplay: HasHistory, HasKills, HasRedisplay

interface HasBack {
    val back: Trigger
}

interface HasBackRedisplay: HasBack, HasRedisplay

//interface HasFrom {
//    val from: HasRedisplay
//}
//interface HasExit {
//    val exit: HasRedisplay
//}
//
//class ExitDeps(
//    override val exit: HasRedisplay
//): HasExit

interface HasEditBack: HasEdit, HasBack

interface HasUix {
    val uix: Runner
}

interface HasBackUix: HasBack, HasUix

interface HasKillsUix: HasKills, HasUix


interface HasBackKillsUix: HasBackUix, HasKillsUix

interface HasEditKillsUix: HasEdit, HasKills, HasUix, HasKillsUix, HasEditKills

interface HasCreateKillsUix: HasUix, HasKillsUix, HasCreateKills

