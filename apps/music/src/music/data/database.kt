package music

import common.named
import indexeddb.*
import kotlin.browser.window

val Mp3Store by named { it }
//private val DBSingletons by named { it }

suspend fun localDatabase(): IDBDatabase {
    return window.indexedDB.open("appsimake-music", 3).apply {
        addEventListener(
            "upgradeneeded",
            { event ->
                event as IDBVersionChangeEvent

                val db = event.target.result

                if (event.oldVersion < 1) {
                    db.createObjectStore<Any, Any>(Mp3Store)
                }
                if (event.oldVersion == 2) {
                    db.deleteObjectStore("DBSingletons")
                }
            }
        )
    }.await()
}

//fun IDBDatabase.readSingletons() = transaction(DBSingletons).objectStore<String, Any>(DBSingletons)
//fun IDBDatabase.writeSingletons() = transaction(DBSingletons, TransactionMode.readwrite).objectStore<String, Any>(DBSingletons)



//object Singletons {
//    val LastUserID by named { it }
//}

//suspend fun IDBDatabase.readLastUserId(): String? {
//    return readSingletons().get(Singletons.LastUserID).await().unsafeCast<String?>()
//}
//suspend fun IDBDatabase.writeLastUserId(uid: String?) {
//    if (uid == null) {
//        writeSingletons().delete(Singletons.LastUserID).await()
//    } else {
//        writeSingletons().put(uid, Singletons.LastUserID).await()
//    }
//}