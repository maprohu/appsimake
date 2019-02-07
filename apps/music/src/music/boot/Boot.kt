package music.boot

import common.AsyncEmitter
import common.DynamicAsyncEmitter
import common.obj
import commonfb.FB
import commonfb.UserState
import commonfb.toUser
import commonfb.userState
import commonui.*
import firebase.app.App
import firebase.firestore.Firestore
import killable.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.filter
import kotlinx.coroutines.channels.map
import kotlinx.coroutines.launch
import music.*
import music.common.toLatestUid
import music.data.SongSource
import music.data.get
import music.data.songInfoSource
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

suspend fun Boot(
    panel: SetPanel = runPanel().apply { hourglass() },
    app: App = FB.app,
    db: Firestore = FB.db
) {
    val ks = Killables().killSet
    val idb = localDatabase()

    LocalSongs.init(idb)

    db.enablePersistence(
        obj {
            experimentalTabSynchronization = true
        }
    ).await()

    db.disableNetwork().await()

    val songInfoSource = songInfoSource(db)

    val userState = userState(ks)

    val user = userState.toUser(ks)

    val latestUid = user.toLatestUid(ks, idb)

    val userSongsDB = Var<UserSongsDB?>(null)
    val songSource = SongSource(ks)

    userSongsDB.forEach { udb ->
        songSource.set %= if (udb == null) {
            listOf(LocalSongs.emitter)
        } else {
            listOf(
                udb.newSet,
                udb.likeSet
            )
        }
    }

    GlobalScope.launch {
        latestUid.mapAsync(ks) { uid, ks ->
            uid?.let { id ->
                UserSongsDB(ks, id, db)
            }
        }.forEach { userSongsDB.now = it }
    }.addedTo(ks)


    val loop = runLoop().also {
        ks += {
            it.inbox.close()
        }
    }


    val playables = songSource.channel
        .map {
            it to idb.readMp3(it)
        }.filter {
            it.second != null
        }.map { (id, blob ) ->
            blob!!
            val tag = songInfoSource.get(id, blob)
            PlayableSource(tag, blob).toPlayable()
        }

    Boot(
        ks,
        loop,
        panel,
        userState,
        userSongsDB,
        playables
    )
}

class Boot(
    val kills: KillSet,
    loop: LoopControl,
    panel: SetPanel,
    val userState: RxIface<UserState>,
    val usdb: RxIface<UserSongsDB?>,
    val songSource: ReceiveChannel<Playable>
): InboxWrap(loop.inbox) {
    val bind = Bind()

    val procs = loop.proc.toSetProcOrElse().assignProcAdd()

    val mainSeq = kills.seq()
    val mainProc = procs.addProcAssign()

    init {
        panel %= UI(bind)

        Player(this)

        fun mainHourglass() {
            bind.mainWidget %= document.hourglass
        }

        mainHourglass()

        procs += inbox.rx(kills, userState) { u ->
            when (u) {
                UserState.NotLoggedIn -> NotLoggedIn(this)
                is UserState.LoggedIn -> LoggedIn(this)
                else -> mainHourglass()
            }
        }
    }

}

open class MainBase(
    boot: Boot
): BootWrap(boot) {
    protected val kills: KillSet = boot.mainSeq.killSet()
    protected val panel = boot.bind.mainWidget
    protected val proc = boot.mainProc
}
