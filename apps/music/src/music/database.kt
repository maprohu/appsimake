package music

import bootstrap.*
import common.named
import commonfb.scrollPanel
import commonlib.Singleton
import commonui.*
import domx.*
import fontawesome.*
import indexeddb.*
import killable.Killables
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import musiclib.UserSongState
import org.w3c.files.Blob
import styles.height0
import styles.lineHeightInherit
import styles.scrollVertical
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.removeClass

object DatabaseManagement

//fun databaseManagement(
//    ctx: LoopsPanel
//) {
//    val node = document.column {
//        cls {
//            flexGrow1
//        }
//        topbar {
//            backButton(ctx.inbox)
//        }
//    }
//
//    ctx.panel %= node
//
////    panel.newRoot {
////        fun redisplay() {
////            panel.setRoot(this)
////        }
////        screenLayout(killables) {
////            top {
////                backButton(close)
////                middleTitle {
////                    innerText = "Database"
////                }
////
////                right {
////                    onlineStatusButton(onlineTasks, killables) {
////                        cls.m1
////                    }
////                    div {
////                        faButton(Fa.chevronDown) {
////                            cls {
////                                m1
////                                btnSecondary
////                            }
////                            dataToggleDropdown()
////                        }
////                        div {
////                            val menu = this
////                            cls {
////                                dropdownMenu
////                                dropdownMenuRight
////                            }
////                            dropdownItemAnchor {
////                                icon.cls.fa.fileImport
////                                text.innerText = "Import MP3s"
////                                anchor {
////                                    clickEvent {
////                                        showClosable(
////                                            killables,
////                                            { ks, cl -> import(panel.sub(), ks, cl) },
////                                            ::redisplay
////                                        )
////                                    }
////                                }
////                            }
////                            dropdownItemAnchor {
////                                icon.cls {
////                                    fa.trashAlt
////                                }
////                                text.innerText = "Purge Local Database"
////                                anchor {
////                                    cls {
////                                        textDanger
////                                    }
////                                    longClick {
////                                        GlobalScope.launch {
////                                            idb.clearMp3s()
////                                        }
////                                        menu.removeClass("show")
////                                    }
////                                }
////                            }
////                        }
////
////                    }
////
////                }
////            }
////
////            main {
////                cls {
////                    scrollVertical
////                    height0
////                    dFlex
////                    flexColumn
////                }
////                status(this, panel, ::redisplay, killables)
////            }
////        }
////    }
//
//}

private val Mp3Store by named { it }
private val DBSingletons by named { it }

suspend fun localDatabase(): IDBDatabase {
    return window.indexedDB.open("appsimake-music", 2).apply {
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
}

fun IDBDatabase.readSingletons() = transaction(DBSingletons).objectStore<String, Any>(DBSingletons)
fun IDBDatabase.writeSingletons() = transaction(DBSingletons, TransactionMode.readwrite).objectStore<String, Any>(DBSingletons)
fun IDBDatabase.readMp3Store() = transaction(Mp3Store).objectStore<String, Blob>(Mp3Store)
fun IDBDatabase.writeMp3Store() = transaction(Mp3Store, TransactionMode.readwrite).objectStore<String, Blob>(Mp3Store)
suspend fun IDBDatabase.readMp3(hash: String) = readMp3Store().get(hash).await()
suspend fun IDBDatabase.existsMp3(hash: String) = exists(Mp3Store, hash)

suspend fun IDBDatabase.clearMp3s() {
    val cd = CompletableDeferred<Unit>()
    val st = writeMp3Store()
    st.getAllKeys().then { keys ->
        st.clear().then {
            keys.forEach { id ->
                LocalSongs.removed(id)
            }
            cd.complete(Unit)
        }
    }
    cd.await()
}

suspend fun IDBDatabase.addMp3(id: String, blob: Blob) {
    writeMp3Store().put(blob, id).await()
    LocalSongs.added(id)
}
suspend fun IDBDatabase.removeMp3(id: String) {
    writeMp3Store().delete(id).await()
    LocalSongs.removed(id)
}

object Singletons {
    val LastUserID by named { it }
}

suspend fun IDBDatabase.readLastUserId(): String? {
    return readSingletons().get(Singletons.LastUserID).await().unsafeCast<String?>()
}
suspend fun IDBDatabase.writeLastUserId(uid: String?) {
    if (uid == null) {
        writeSingletons().delete(Singletons.LastUserID).await()
    } else {
        writeSingletons().put(uid, Singletons.LastUserID).await()
    }
}