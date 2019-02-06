package music

import common.combineAnd
import common.toEmitter
import commonlib.addedTo
import commonlib.toChannel
import commonshr.SetAdded
import firebaseshr.ids
import indexeddb.IDBDatabase
import killable.KillSet
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch


fun startMaintenance(
    ks: KillSet,
    idb: IDBDatabase,
    userSongsDB: UserSongsDB
) {
    val channel = combineAnd(
        ks,
        userSongsDB.dontLike.ids,
        LocalSongs.emitter
    ).toEmitter().toChannel(ks)

    GlobalScope.launch {
        for (m in channel) {
            if (m is SetAdded) {
                idb.removeMp3(m.value)
            }
        }
    }.addedTo(ks)
}

