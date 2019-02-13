package music.boot

import common.obj
import commonfb.*
import commonui.usericon.UnknownUserSrc
import commonshr.*
import commonui.widget.*
import indexeddb.IDBDatabase
import killable.*
import kotlinx.coroutines.*
import music.*
import music.common.LocalSongs
import music.common.toLatestUid
import music.data.*
import music.loggedin.LoggedIn
import music.notloggedin.NotLoggedIn
import music.player.Player
import org.w3c.dom.Node
import rx.*
import kotlin.coroutines.CoroutineContext

abstract class BootWrap(
    val boot: Boot,
    parent: Station
): BodyWrap(boot.body, parent)

class Boot(
    body: Body,
    idb: IDBDatabase,
    localSongs: LocalSongs
): BodyWrap(
    body,
    body
) {

    companion object {
        suspend fun create(): Boot {
            val body = Body()
            val idb = localDatabase()
            val localSongs = LocalSongs(idb)

            return Boot(body, idb, localSongs)
        }
    }


    val userState = Var<UserState>(UserState.Unknown)

    private val user = userState.toUser(kills)
    val userIcon = rx {
        user()?.let { it.photoURL } ?: UnknownUserSrc
    }
    class Slots {
        lateinit var top: Hole
        lateinit var main: Hole
        lateinit var toasts: (ToastFn) -> Unit
        lateinit var player: Hole
    }
    val slots = Slots()
    val ui = ui()
    override val show: Trigger = { body.slot %= ui }





    inner class UserUnknown: BootWrap(this, this) {
        override val show: Trigger = {
            slots.top %= null
            slots.main.insert.hourglass
        }
    }

    fun userUnknown() = forward { UserUnknown() }

    val userSongs = Var<UserSongs?>(null)

    private val songInclude = songInclude(
        kills,
        localSongs,
        rx { userSongs()?.get }
    )

    val songSource = songSource(
        kills,
        songInclude,
        localSongs
    )

    private var currentSongInfoSource: SongInfoSource = localSongInfoSource()

    val songInfoSource : SongInfoSource = { id, blob ->
        currentSongInfoSource(id, blob)
    }

    val signOut = Var({})

    init {
        UserUnknown()
        Player(this)

//        procs += inbox.rx(kills, userState) { u ->
//            when (u) {
//                UserState.NotLoggedIn -> NotLoggedIn(this)
//                is UserState.LoggedIn -> LoggedIn(this)
//                else -> userUnknown()
//            }
//        }

//        procs.envelope(sub.ShowToast) { fn ->
//            bind.toasts(fn)
//        }

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
            }

            latestUid.rxv.forEach { uid ->
                userSongs.now = uid?.let { id ->
                    userSongs(ks, id, db)
                }

            }
            mapAsync(kills) { uid, ks ->
            }.forEach {
            }
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

