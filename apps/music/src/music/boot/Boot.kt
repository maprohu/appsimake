package music.boot

import bootstrap.column
import bootstrap.dFlex
import bootstrap.flexGrow1
import common.*
import commonfb.*
import commonlib.commonlib.customToken
import commonshr.reportd
import commonui.*
import domx.cls
import domx.div
import domx.invoke
import firebase.app.App
import firebase.firestore.Firestore
import firebase.firestore.launch
import firebase.functions.Functions
import firebase.messaging.Messaging
import killable.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.filter
import kotlinx.coroutines.channels.map
import kotlinx.coroutines.launch
import music.*
import music.common.toLatestUid
import music.data.*
import music.loggedin.LoggedIn
import music.notloggedin.NotLoggedIn
import music.player.Player
import rx.Rx
import rx.RxIface
import rx.Var
import rx.mapAsync
import kotlin.browser.document

open class BootWrap(
    val boot: Boot
): InboxWrap(boot.inbox)

suspend fun boot() {
    FB.setupMessaging()
    boot(
        runPanel().apply { hourglass() }
    )
}

suspend fun boot(
    panel: SetPanel
) {
    val ks = Killables().killSet
    val idb = localDatabase()

    LocalSongs.init(idb)


    val userSongsDB = Var<UserSongsDB?>(null)

    val userState = Var<UserState>(UserState.Unknown)

    var currentSongInfoSource: SongInfoSource = localSongInfoSource()

    val signOut = Listeners()

    GlobalScope.launch {
        val app = FB.app
        val db = FB.db
        val functions = FB.functions()

        db.enablePersistence(
            obj {
                experimentalTabSynchronization = true
            }
        ).await()

        db.disableNetwork().await()
        val custTokenCall = customToken.callable(functions)
        userState(ks) {
            if (it != null) {
//            try {
//                custTokenCall.call(Unit)?.let { token ->
//                    app.auth().signInWithCustomToken(token).await()
//                }
//            } catch (d: dynamic) {
//                reportd(d)
//            }
////            db.enableNetwork().await()
            } else {
//            db.disableNetwork().await()
            }
        }.forEach {
            userState.now = it
        }

        val user = userState.toUser(ks)

        val latestUid = user.toLatestUid(ks, idb)

        signOut.add {
            latestUid.clear()
            app.auth().signOut()
        }

        val infoSeq = ks.seq()
        user.forEach {
            currentSongInfoSource = if (it == null) {
                infoSeq.clear()
                localSongInfoSource()
            } else {
                val iks = infoSeq.killSet()
                cloudSongInfoSource(iks, db)
            }
        }.addedTo(ks)

        latestUid.rxv.mapAsync(ks) { uid, ks ->
            uid?.let { id ->
                UserSongsDB(ks, id, db)
            }
        }.forEach { userSongsDB.now = it }
    }



    val songSourceInclude = Var(emptySet<String>())

    val includeSeq = ks.seq()
    userSongsDB.forEach { udb ->
        val uks = includeSeq.killables()
        val src = if (udb == null) {
            LocalSongs.rxv
        } else {
            loggedInSongSourceInclude(uks.killSet, udb)
        }
        uks += src.forEach { songSourceInclude.now = it }
    }

    val loop = runLoop().also {
        ks += {
            it.inbox.close()
        }
    }

    val songSource = songSource(
        ks,
        songSourceInclude,
        idb
    )

    val songInfoSource : SongInfoSource = { id, blob ->
        currentSongInfoSource(id, blob)
    }

    Boot(
        kills = ks,
        loop = loop,
        panel = panel,
        userState = userState,
        signOut = signOut.trigger,
        usdb = userSongsDB,
        songSource = songSource,
        songInfoSource = songInfoSource
    )
}

class Boot(
    val kills: KillSet,
    loop: LoopControl,
    panel: SetPanel,
    val userState: RxIface<UserState>,
    val signOut: Trigger,
    val usdb: RxIface<UserSongsDB?>,
    val songSource: SongSource,
    val songInfoSource: SongInfoSource
): InboxWrap(loop.inbox) {

    val bind = Bind()

    val procs = loop.proc.toSetProcOrElse().assignProcAdd()

    val mainSeq = kills.seq()
    val mainProc = procs.addProcAssign()

    fun userUnknown() {
        bind.mainWidget %= document.hourglass {
            cls.flexGrow1
        }
        mainProc %= procOrElse()
    }

    init {
        panel %= UI(bind)

        Player(this)

        procs += inbox.rx(kills, userState) { u ->
            when (u) {
                UserState.NotLoggedIn -> NotLoggedIn(this)
                is UserState.LoggedIn -> LoggedIn(this)
                else -> userUnknown()
            }
        }

        userUnknown()
    }

}

open class MainBase(
    boot: Boot
): BootWrap(boot) {
    protected val kills: KillSet = boot.mainSeq.killSet()
    protected val panel = boot.bind.mainWidget.node
    protected val proc = boot.mainProc
}

