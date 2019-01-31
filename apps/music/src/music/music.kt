package music

import common.named
import common.obj
import commonfb.*
import commonlib.commonlib.customToken
import commonlib.private
import firebase.User
import firebase.firestore.Firestore
import firebase.firestore.collectionRef
import firebase.firestore.idDiffs
import firebase.firestore.toSetSource
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
import musiclib.*
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.Uint8Array
import rx.Var
import kotlin.browser.window
import kotlin.js.Promise


fun main(args: Array<String>) {
    val fbCtx = FbCtx(music, "Music")
    GlobalScope.launch {
        val app = fbCtx.app
        app.auth().signOut().await()
        val fn = customToken.callable(app)

        val res = fn.call(Unit)
        console.dir(res)
    }

//    runApp()
}

fun runApp() {
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
                    val uid = user.uid
                    val db = fbCtx.db

                    val userSongsDB = UserSongsDB(
                        music.app.private.doc(uid).usersongs.toSetSource(ks, db) { UserSong() },
                        ks
                    )
                    val tagDB = TagDB(
                        music.app.songs.toSetSource(ks, db) { Mp3File() }
                    )
                    val songStorageDB = SongStorageDB(
                        music.app.storage.toSetSource(ks, db) { StoreState() },
                        ks
                    )



                    val ctx = MusicCtx(
                        fbCtx,
                        user,
                        idb,
                        tagDB,
                        songStorageDB,
                        userSongsDB
                    )

                    ks += ctx.killables

                    startMaintenance(ks, idb, ctx.userSongsDB)

                    ctx.apply {
                        val songSource = randomSongSource(
                            idb,
                            tagDB,
                            userSongsDB
                        )

                        home(
                            playerFrame(
                                appCtx.root,
                                songSource
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


class MusicCtx(
    fbCtx: FbCtx,
    user: User,
    val idb: IDBDatabase,
    val tagDB: TagDB,
    val songStoreDB: SongStorageDB,
    val userSongsDB: UserSongsDB
) : LoggedInCtx(fbCtx, user) {
    val uid = user.uid
    val storageWrap = fbCtx.lib.app.storage
    val songsWrap = fbCtx.lib.app.songs
    val storageRef = storageWrap.collectionRef(db)

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


