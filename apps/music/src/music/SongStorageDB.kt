package music

import common.SetSourceWithKey
import common.Some
import common.filtered
import killable.KillSet
import musiclib.StoreState

class SongStorageDB(
    val source: SetSourceWithKey<StoreState, String>,
    killables: KillSet
) {

    suspend fun get(id: String, fn: StoreState.() -> Unit) = source.getOrPut(id) { it.fn() }

    val uploaded by lazy {
        source.filtered(killables) {
            it.uploaded.initial() == Some(true)
        }
    }

}

