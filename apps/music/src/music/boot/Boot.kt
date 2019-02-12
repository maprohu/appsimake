//package music.boot
//
//import common.obj
//import commonfb.*
//import commonui.usericon.UnknownUserSrc
//import commonshr.*
//import commonui.widget.*
//import indexeddb.IDBDatabase
//import killable.*
//import kotlinx.coroutines.*
//import music.*
//import music.common.LocalSongs
//import music.common.toLatestUid
//import music.data.*
//import music.loggedin.LoggedIn
//import music.notloggedin.NotLoggedIn
//import music.player.Player
//import org.w3c.dom.Node
//import rx.*
//import kotlin.coroutines.CoroutineContext
//
//open class BootWrap(
//    val boot: Boot
//)
//
//
//class Boot(
//    body: Body,
//    idb: IDBDatabase,
//    localSongs: LocalSongs,
//    override val coroutineContext: CoroutineContext
//): BodyWrap(body), CoroutineScope {
//
//    val exec = actor(BootState())
//
//    companion object {
//        suspend fun CoroutineContext.create(): Boot {
//            val body = Body()
//            val idb = localDatabase()
//            val localSongs = LocalSongs(idb)
//
//            return Boot(body, idb, localSongs, this)
//        }
//    }
//
//    val kills = body.kills.killSet
//
//    val bind = Bind()
//
//    val procs = procOrElses()
//
////    class MainItem(
////        proc: () -> ProcOrElse = procOrElse().funs.constant,
////        val top: () -> Node? = { null },
////        val main: () -> Node? = { null }
////    ): SingleProc(proc)
////
////    val player = singleSlot(
////        kills,
////        bind.player,
////        procs.addProcAssign()
////    )
//
////    val main = singleProc()
//
//    val mainSeq = kills.seq()
//    val mainProc = procs.addProcAssign()
//
//    init {
////        body.slot %= SingleSlot(
////            node { UI(this, bind) },
////            procs.proc
////        )
//    }
//
//    val topPanel = bind.top
//    val mainPanel = bind.main
//
//    fun userUnknown() {
//        mainSeq.clear()
//        mainPanel.insert.hourglass
//        mainProc %= procOrElse()
//    }
//
//    val userState = Var<UserState>(UserState.Unknown)
//
//    private val user = userState.toUser(kills)
//    val userIcon = Rx {
//        user()?.let { it.photoURL } ?: UnknownUserSrc
//    }.apply {
//        feedTo(kills, bind.userIcon)
//    }
//
//    val userSongs = Var<UserSongs?>(null)
//
//    private val songInclude = songInclude(
//        kills,
//        localSongs,
//        Rx { userSongs()?.get }.addedTo(kills)
//    )
//
//    val songSource = songSource(
//        kills,
//        songInclude,
//        localSongs
//    )
//
//    private var currentSongInfoSource: SongInfoSource = localSongInfoSource()
//
//    val songInfoSource : SongInfoSource = { id, blob ->
//        currentSongInfoSource(id, blob)
//    }
//
//    val signOut = Var({})
//
//
//    val sub = Sub(userIcon)
//
//    init {
//        Player(this)
//
////        procs += inbox.rx(kills, userState) { u ->
////            when (u) {
////                UserState.NotLoggedIn -> NotLoggedIn(this)
////                is UserState.LoggedIn -> LoggedIn(this)
////                else -> userUnknown()
////            }
////        }
//
////        procs.envelope(sub.ShowToast) { fn ->
////            bind.toasts(fn)
////        }
//
//        userUnknown()
//
//        GlobalScope.launch {
//            val app = FB.app
//            val db = FB.db
//
//            db.enablePersistence(
//                obj {
//                    experimentalTabSynchronization = true
//                }
//            ).await()
//
//            db.disableNetwork().await()
//
//            runUserState(kills).forEach { userState.now = it }
//
//
//            val latestUid = user.toLatestUid(kills, idb)
//
//            signOut.now =  {
//                latestUid.clear()
//                app.auth().signOut()
//            }
//
//            val infoSeq = kills.seq()
//            user.forEach {
//                currentSongInfoSource = if (it == null) {
//                    infoSeq.clear()
//                    localSongInfoSource()
//                } else {
//                    val iks = infoSeq.killSet()
//                    cloudSongInfoSource(iks, db)
//                }
//            }.addedTo(kills)
//
//            latestUid.rxv.mapAsync(kills) { uid, ks ->
//                uid?.let { id ->
//                    userSongs(ks, id, db)
//                }
//            }.forEach { userSongs.now = it }
//        }
//    }
//
//
//}
//
//
//open class LoginBase(
//    boot: Boot
//): BootWrap(boot) {
//    protected val kills: KillSet = boot.mainSeq.killSet()
//    protected val main = boot.mainPanel
//    protected val top = boot.topPanel
//    protected val proc = boot.mainProc
//}

