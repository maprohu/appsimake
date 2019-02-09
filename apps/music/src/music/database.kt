package music

import common.named
import indexeddb.*
import kotlinx.coroutines.CompletableDeferred
import music.common.LocalSongs
import org.w3c.files.Blob
import kotlin.browser.window

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

val Mp3Store by named { it }
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