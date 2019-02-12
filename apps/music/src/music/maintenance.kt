package music

import common.combineAnd
import common.toEmitter
import commonlib.toChannel
import commonshr.SetAdded
import firebaseshr.ids
import indexeddb.IDBDatabase
import killable.KillSet
import killable.addedTo
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import music.common.LocalSongs


//fun startMaintenance(
//    ks: KillSet,
//    idb: IDBDatabase,
//    localSongs: LocalSongs,
//    userSongsDB: UserSongsDB
//) {
//    val channel = combineAnd(
//        ks,
//        userSongsDB.dontLike.ids,
//        localSongs.emitter
//    ).toEmitter().toChannel(ks)
//
//    GlobalScope.launch {
//        for (m in channel) {
//            if (m is SetAdded) {
//                localSongs.removeMp3(m.value)
//            }
//        }
//    }.addedTo(ks)
//}

