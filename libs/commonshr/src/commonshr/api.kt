package commonshr

import killable.HasKillSet
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job

interface CoroutineWithKills: CoroutineScope, HasKillSet

interface CommonShrApi: ListApi


interface JobScope: CoroutineScope {
    override val coroutineContext: Job
}
