package music

import bootstrap.*
import common.*
import commonfb.*
import commonfb.FB.app
import commonfb.FB.db
import commonlib.private
import commonshr.invoke
import commonui.*
import domx.*
import firebase.User
import firebase.firestore.collectionRef
import firebase.firestore.toSetSource
import fontawesome.*
import indexeddb.IDBDatabase
import killable.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import musiclib.*
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.Uint8Array
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import rx.Var
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Promise
import music.boot.Boot
import music.boot.boot

fun main() {

    GlobalScope.launch {
        boot()
//        FB.app
//        FB.db
//        val idb = localDatabase()
//        LocalSongs.init(idb)
    }
}

//fun runAppV2() {
//
//    val panel = runPanel()
//    panel.hourglass()
//
//    val ks = Killables()
//    GlobalScope.launch {
//        val idb = localDatabase()
//        LocalSongs.init(idb)
//
//        db.enablePersistence(
//            obj {
//                experimentalTabSynchronization = true
//            }
//        ).await()
//
//        db.disableNetwork().await()
//
//
//        val tagDB = TagDB(
//            music.app.songs.toSetSource(ks, db) { Mp3File() }
//        )
//
//        val source = DynamicAsyncEmitter(
//            emptyAsyncEmitter<Playable>()
//        )
//
//        val userSongDB = Var<Optional<UserSongsDB>>(None)
//
//
//        val currentUid = asyncKills(ks.killSet, idb.readLastUserId()) { uid ->
//            idb.writeLastUserId(uid)
//
//            if (uid == null) {
//                source.setCurrent(
//                    localSongSource(idb, tagDB)
//                )
//
//                userSongDB.now = None
//
//                {}
//            } else {
//                val uks = Killables()
//
//                val usdb = UserSongsDB(
//                    music.app.private.doc(uid).usersongs.toSetSource(uks, db) { UserSong() },
//                    uks
//                )
//
//                source.setCurrent(
//                    randomSongSource(idb, tagDB, usdb)
//                )
//
//                userSongDB.now = Some(usdb)
//
//                uks.toTrigger()
//            }
//        }
//
//
//        val innerPanel = playerFrame(
//            ks,
//            panel,
//            source,
//            userSongDB
//        )
//
//
////        val loop = runLoop().apply { runLoginEvents(ks.killSet) }
////
////        val procs = object {
////            val initial : Proc = { e ->
////                when (e) {
////                    NotLoggedIn -> {
////                        currentUid %= idb.readLastUserId()
////                        loggedOut(innerPanel, loops)
////                    }
////                    is LoggedIn -> {
////                        currentUid %= e.user.uid
////                        loggedIn(LoopsPanel(loops, innerPanel))
////                    }
////                }
////            }
////
////            val loops = loop.loops(initial)
////
////        }
////
////        procs.loops.handle %= procOrElse()
//
//
//
//    }
//
//}

fun runApp() {
    GlobalScope.launch {


//        object: LoggingInCtx(fbCtx) {
//            override fun loggedIn(user: User): Killable {
//                val ks = Killables()
//
//                GlobalScope.launch {
//                    try {
//                        customToken.call(app, Unit)?.let { token ->
//                            app.auth().signInWithCustomToken(token).await()
//                        }
//                    } catch (d: dynamic) {
//                        reportd(d)
//                    }
//
//                    val uid = user.uid
//                    val db = fbCtx.db
//
//                    val userSongsDB = UserSongsDB(
//                        music.app.private.doc(uid).usersongs.toSetSource(ks, db) { UserSong() },
//                        ks
//                    )
//                    val tagDB = TagDB(
//                        music.app.songs.toSetSource(ks, db) { Mp3File() }
//                    )
//                    val songStorageDB = SongStorageDB(
//                        music.app.storage.toSetSource(ks, db) { StoreState() },
//                        ks
//                    )
//
//
//
//                    val ctx = MusicCtx(
//                        fbCtx,
//                        user,
//                        idb,
//                        tagDB,
//                        songStorageDB,
//                        userSongsDB
//                    )
//
//                    ks += ctx.killables
//
//                    startMaintenance(ks, idb, ctx.userSongsDB)
//
//                    ctx.apply {
//                        val songSource = randomSongSource(
//                            idb,
//                            tagDB,
//                            userSongsDB
//                        )
//
//                        home(
//                            playerFrame(
//                                appCtx.root,
//                                songSource
//                            ).innerPanel,
//                            killables
//                        )
//                    }
//                }
//
//                return ks
//            }
//        }.start()
    }




}

//fun loggedOut(
//    panel: SetPanel,
//    loops: LoopsControl
//) {
//    panel %= document.div {
//        topbar {
//            faButton(Fa.signInAlt) {
//                cls {
//                    btnSecondary
//                    m1
//                }
//                clickEvent {
//                    loops.inbox += SignIn
//                }
//            }
//
//
//        }
//    }
//
//    loops.handle %= { e, els ->
//        when (e) {
//            SignIn -> {
//                showLoginPage(
//                    loops,
//                    panel
//                ) {
//                    panel.hourglass()
//                    loops.handle %= procOrElse()
//                }
//            }
//            else -> els(e)
//        }
//
//    }
//}


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


