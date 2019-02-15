package music

import bootstrap.*
import commonshr.*
import commonui.*
import commonui.widget.*
import domx.*
import fontawesome.*
import kotlinx.coroutines.*
import music.boot.Boot
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.Uint8Array
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import kotlin.browser.window
import kotlin.js.Promise

fun main() {
    GlobalScope.launch {
        APP.registerServiceWorker()
        Boot.create()
    }
}



object ImportMP3s

fun Node.mainDropMenu(
    inbox: Inbox
): HTMLDivElement {
    return div {
        cls {
            dropdown
        }
        faButton(Fa.chevronDown) {
            cls {
                btnSecondary
                m1
            }
            dataToggleDropdown()
        }
        div {
            cls {
                dropdownMenu
                dropdownMenuRight
            }
            dropdownItemAnchor {
                icon {
                    cls.fa {
                        fw
                        database
                    }
                }
                text {
                    innerText = "Manage Database"
                }
                anchor {
                    clickEvent {
                        inbox += DatabaseManagement
                    }
                }
            }
        }
    }

}

//fun manageDatabase(ctx: LoopsPanel): ProcOrElse = procOrElse(DatabaseManagement) {
//    databaseManagement(ctx)
//}

//fun loggedIn(
//    ctx: LoopsPanel
//) {
//    val node = document.div {
//        topbar {
//            faButton(Fa.signOutAlt) {
//                cls {
//                    btnSecondary
//                    m1
//                }
//                clickEvent {
//                    ctx.inbox += SignOut
//                }
//            }
//            div {
//                cls.flexGrow1
//            }
//            mainDropMenu(ctx.inbox)
//        }
//    }
//
//    ctx.handle %= manageDatabase(ctx) with signOut {
//        ctx.handle %= procOrElse()
//    }
//}


//class MusicCtx(
//    fbCtx: FbCtx,
//    user: User,
//    val idb: IDBDatabase,
//    val tagDB: TagDB,
//    val songStoreDB: SongStorageDB,
//    val userSongsDB: UserSongsDB
//) : LoggedInCtx(fbCtx, user) {
//    val uid = user.uid
//    val storageWrap = fbCtx.lib.app.storage
//    val songsWrap = fbCtx.lib.app.songs
//    val storageRef = storageWrap.collectionRef(db)
//
//    val transferSongs = TransferSongs(userSongsDB, songStoreDB, killables.killSet)
//    val dbStatus = DBStatus(idb, tagDB, songStoreDB, userSongsDB, transferSongs, killables.killSet)
//    val onlineTasks = OnlineTasks(
//        fbCtx.app.storage().ref("music/files"),
//        idb,
//        songStoreDB,
//        transferSongs,
//        killables
//    )
//
//}



