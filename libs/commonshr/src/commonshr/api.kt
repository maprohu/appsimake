package commonshr

import killable.HasKillSet
import kotlinx.coroutines.CoroutineScope

interface CoroutineWithKills: CoroutineScope, HasKillSet

interface CommonShrApi: ListApi

