package commonshr

import killable.KillSet
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlin.coroutines.CoroutineContext

interface HasKill {
    val kill: Trigger
}
interface HasKilled {
    val killed: () -> Boolean
}

interface HasKills {
    val kills: KillSet
}

interface HasKilledKills: HasKilled, HasKills
interface HasKillKills: HasKill, HasKills
interface HasKillKilledKills: HasKillKills, HasKilled, HasKilledKills

data class KillsDeps(
    override val kills: KillSet
): HasKills

interface HasCsKills: HasKills, CoroutineScope {
}

data class CsKillsDeps(
    override val kills: KillSet,
    override val coroutineContext: CoroutineContext
): HasCsKills


interface HasPath {
    val path: String
}

interface HasLib {
    val lib: Lib
}

