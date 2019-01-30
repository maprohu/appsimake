package music

import common.named
import common.obj
import commonfb.FbCtx
import commonfb.LoggedInCtx
import commonfb.LoggingInCtx
import commonlib.private
import firebase.User
import firebase.firestore.Firestore
import firebase.firestore.collectionRef
import firebase.firestore.idDiffs
import indexeddb.IDBDatabase
import indexeddb.IDBVersionChangeEvent
import indexeddb.await
import indexeddb.indexedDB
import killable.Killable
import killable.Killables
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import musiclib.music
import musiclib.songs
import musiclib.storage
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.Uint8Array
import rx.Var
import kotlin.browser.window
import kotlin.js.Promise


fun main(args: Array<String>) {

    GlobalScope.launch {
        val idb = localDatabase()

        LocalSongs.init(idb)

        val fbCtx = FbCtx(music, "Music")

        fbCtx.db.enablePersistence(
            obj {
                experimentalTabSynchronization = true
            }
        ).await()

        object: LoggingInCtx(fbCtx) {
            override fun loggedIn(user: User): Killable {
                val ks = Killables()

                GlobalScope.launch {
                    val dbLinks = DBLinks(
                        fbCtx.db,
                        user.uid,
                        ks
                    )

                    dbLinks.init()


                    val ctx = MusicCtx(fbCtx, user, idb, dbLinks)
                    ks += ctx.killables

                    startMaintenance(ks, idb, ctx.userSongsDB)

                    ctx.apply {
                        home(
                            playerFrame(
                                appCtx.root
                            ).innerPanel,
                            killables
                        )
                    }
                }

                return ks
            }
        }.start()
    }




}

class DBLinks(
    db: Firestore,
    uid: String,
    killables: Killables
) {
    val tagDB = TagDB(db, killables)
    val userSongsDB = UserSongsDB(db, uid, killables)
    val songStoreDB = SongStorageDB(db, killables)

    suspend fun init() {
        userSongsDB.queryCache.getAll()
        tagDB.queryCache.getAll()
        songStoreDB.queryCache.getAll()
    }

}

class MusicCtx(
    fbCtx: FbCtx,
    user: User,
    val idb: IDBDatabase,
    dbLinks: DBLinks
) : LoggedInCtx(fbCtx, user) {
    val uid = user.uid
    val storageWrap = fbCtx.lib.app.storage
    val songsWrap = fbCtx.lib.app.songs
    val storageRef = storageWrap.collectionRef(db)


    val tagDB = dbLinks.tagDB
    val songStoreDB = dbLinks.songStoreDB
    val userSongsDB = dbLinks.userSongsDB

    val songSource = DefaultSongSource(idb, userSongsDB, tagDB, killables)
    val transferSongs = TransferSongs(userSongsDB, songStoreDB, killables)
    val dbStatus = DBStatus(idb, tagDB, songStoreDB, userSongsDB, transferSongs, killables)
    val onlineTasks = OnlineTasks(
        fbCtx.app.storage().ref("music/files"),
        idb,
        songStoreDB,
        transferSongs,
        killables
    )

}

suspend fun ArrayBuffer.hash(): String {
    val hashBuffer = window
        .asDynamic()
        .crypto
        .subtle
        .digest("SHA-256", this)
        .unsafeCast<Promise<ArrayBuffer>>()
        .await()

    val uint8 = Uint8Array(hashBuffer)

    return window.btoa(
        js("String").fromCharCode.apply(null, uint8).unsafeCast<String>()
    ).replace('/', '-')

//    return Uint8Array(hashBuffer)
//        .asList()
//        .joinToString("") { (it + 256).toString(16).substring(1) }
}


