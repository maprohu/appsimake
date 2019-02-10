package music.boot

import common.obj
import commonfb.*
import commonshr.*
import commonui.widget.*
import domx.remAssign
import indexeddb.IDBDatabase
import killable.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import music.*
import music.common.LocalSongs
import music.common.toLatestUid
import music.data.*
import music.loggedin.LoggedIn
import music.notloggedin.NotLoggedIn
import music.player.Player
import rx.Var
import rx.mapAsync

open class BootWrap(
    val boot: Boot
): InboxWrap(boot.inbox)


class Boot(
    body: Body,
    idb: IDBDatabase,
    localSongs: LocalSongs
): BodyWrap(body) {
    val kills = body.kills.killSet

    val bind = Bind(inbox)

    val procs = body.proc.assignProcAdd()

    val mainSeq = kills.seq()
    val mainProc = procs.addProcAssign()

    init {
        UI(body.panel, bind).visible()
    }

    val topPanel = bind.top
    val mainPanel = bind.main

    fun userUnknown() {
        mainSeq.clear()
        mainPanel.hourglass.visible()
        mainProc %= procOrElse()
    }

    private val songSourceInclude = Var(emptySet<String>())
    val userSongsDB = run {
        val includeSeq = kills.seq()
        Var<UserSongsDB?>(null).also { usdb ->
            usdb.forEach { udb ->
                val uks = includeSeq.killables()
                val src = if (udb == null) {
                    localSongs.rxv
                } else {
                    loggedInSongSourceInclude(uks.killSet, localSongs, udb)
                }
                uks += src.forEach { s -> songSourceInclude.now = s }
            }
        }
    }

    val userState = Var<UserState>(UserState.Unknown)
    val songSource = songSource(
        kills,
        songSourceInclude,
        localSongs,
        idb
    )

    private var currentSongInfoSource: SongInfoSource = localSongInfoSource()

    val songInfoSource : SongInfoSource = { id, blob ->
        currentSongInfoSource(id, blob)
    }

    val signOut = Var({})

    companion object {
        suspend operator fun invoke(): Boot {
            val body = Body()
            val idb = localDatabase()
            val localSongs = LocalSongs(idb)

            return Boot(body, idb, localSongs)
        }
    }

    init {
        Player(this)

        procs += inbox.rx(kills, userState) { u ->
            when (u) {
                UserState.NotLoggedIn -> NotLoggedIn(this)
                is UserState.LoggedIn -> LoggedIn(this)
                else -> userUnknown()
            }
        }

        procs += { e, els ->
            when (e) {
                is Bind.ShowToast -> {

                }
            }

        }

        userUnknown()

        GlobalScope.launch {
            val app = FB.app
            val db = FB.db

            db.enablePersistence(
                obj {
                    experimentalTabSynchronization = true
                }
            ).await()

            db.disableNetwork().await()

            runUserState(kills).forEach { userState.now = it }

            val user = userState.toUser(kills)

            val latestUid = user.toLatestUid(kills, idb)

            signOut.now =  {
                latestUid.clear()
                app.auth().signOut()
            }

            val infoSeq = kills.seq()
            user.forEach {
                currentSongInfoSource = if (it == null) {
                    infoSeq.clear()
                    localSongInfoSource()
                } else {
                    val iks = infoSeq.killSet()
                    cloudSongInfoSource(iks, db)
                }
            }.addedTo(kills)

            latestUid.rxv.mapAsync(kills) { uid, ks ->
                uid?.let { id ->
                    UserSongsDB(ks, id, db)
                }
            }.forEach { userSongsDB.now = it }
        }
    }

}

open class LoginBase(
    boot: Boot
): BootWrap(boot) {
    protected val kills: KillSet = boot.mainSeq.killSet()
    protected val main = boot.mainPanel
    protected val top = boot.topPanel
    protected val proc = boot.mainProc
}

