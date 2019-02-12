package music

//import common.combine
//import firebaseshr.ids
//import killable.KillSet
//import music.common.LocalSongs
//
//class TransferSongs(
//    localSongs: LocalSongs,
//    userSongsDB: UserSongsDB,
//    storageDB: SongStorageDB,
//    ks: KillSet
//) {
//
//    val upload = combine(
//        ks,
//        userSongsDB.like.ids,
//        storageDB.uploaded.ids,
//        localSongs.emitter
//    ) { like, up, local -> like && !up && local }
//
//    val download = combine(
//        ks,
//        userSongsDB.like.ids,
//        storageDB.uploaded.ids,
//        localSongs.emitter
//    ) { like, up, local -> like && up && !local }
//
//
//}
