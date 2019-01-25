package music

import common.named
import commonfb.FbCtx
import commonfb.LoggedInCtx
import commonfb.LoggingInCtx
import commonlib.private
import firebase.User
import firebase.firestore.collectionRef
import firebase.firestore.idDiffs
import indexeddb.IDBDatabase
import indexeddb.IDBVersionChangeEvent
import indexeddb.await
import indexeddb.indexedDB
import killable.Killable
import killable.Killables
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

val Mp3Store by named { it }
val DBSingletons by named { it }

fun main(args: Array<String>) {

    GlobalScope.launch {
        val idb = window.indexedDB.open("appsimake-music", 2).apply {
            addEventListener(
                "upgradeneeded",
                { event ->
                    event as IDBVersionChangeEvent

                    val db = event.target.result

                    if (event.oldVersion < 1) {
                        db.createObjectStore<Any, Any>(Mp3Store)
                    }
                    if (event.oldVersion < 2) {
                        db.createObjectStore<Any, Any>(DBSingletons)
                    }
                }
            )
        }.await()

        object: LoggingInCtx(music, "Music") {
            override fun loggedIn(user: User): Killable {


                val killables = Killables()
                MusicCtx(fbCtx, user, idb).home(
                    appCtx.root,
                    killables
                )
                return killables

            }
        }.start()
    }




}

class MusicCtx(fbCtx: FbCtx, user: User, val idb: IDBDatabase) : LoggedInCtx(fbCtx, user) {
    val storageWrap = fbCtx.lib.app.storage
    val songsWrap = fbCtx.lib.app.songs
    val storageRef = storageWrap.collectionRef(db)

    val storedHashes = Var(emptySet<String>()).also { rxs ->
        killables += storageRef.idDiffs { diff ->
            rxs.transform { s -> s - diff.removed + diff.added }
        }
    }

    val dbStatus = DBStatus(idb, killables)
    val tagDB = TagDB(db, killables)

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


