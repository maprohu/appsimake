package music

import common.combineAnd
import commonlib.addedTo
import commonlib.toChannel
import commonshr.SetAdded
import firebase.ids
import indexeddb.IDBDatabase
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch


fun startMaintenance(
    ks: Killables,
    idb: IDBDatabase,
    userSongsDB: UserSongsDB
) {
    val channel = combineAnd(
        ks,
        userSongsDB.dontLike.ids,
        LocalSongs.emitter
    ).toChannel(ks)

    GlobalScope.launch {
        for (m in channel) {
            if (m is SetAdded) {
                idb.removeMp3(m.value)
            }
        }
    }.addedTo(ks)
}

