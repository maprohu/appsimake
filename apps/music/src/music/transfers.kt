package music

import common.EmitterIface
import common.combine
import common.combineAnd
import commonshr.SetMove
import firebaseshr.ids
import killable.KillSet
import killable.Killable
import killable.Killables

class TransferSongs(
    userSongsDB: UserSongsDB,
    storageDB: SongStorageDB,
    ks: KillSet
) {

    val upload = combine(
        ks,
        userSongsDB.like.ids,
        storageDB.uploaded.ids,
        LocalSongs.emitter
    ) { like, up, local -> like && !up && local }

    val download = combine(
        ks,
        userSongsDB.like.ids,
        storageDB.uploaded.ids,
        LocalSongs.emitter
    ) { like, up, local -> like && up && !local }


}
