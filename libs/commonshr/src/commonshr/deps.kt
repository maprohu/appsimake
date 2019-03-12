package commonshr

import killable.KillSet
import kotlinx.coroutines.CoroutineScope
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

interface HasKillKills: HasKill, HasKills
interface HasKillKilledKills: HasKillKills, HasKilled

data class KillsDeps(
    override val kills: KillSet
): HasKills

interface HasCsKills: HasKills, CoroutineScope {
}

data class CsKillsDeps(
    override val kills: KillSet,
    override val coroutineContext: CoroutineContext
): HasCsKills

