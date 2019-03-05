package commonshr

import killable.KillSet
import kotlinx.coroutines.CoroutineScope
import kotlin.coroutines.CoroutineContext

interface HasKills {
    val kills: KillSet
}

data class KillsDeps(
    override val kills: KillSet
): HasKills

interface HasCsKills: HasKills, CoroutineScope {
}

data class CsKillsDeps(
    override val kills: KillSet,
    override val coroutineContext: CoroutineContext
): HasCsKills

