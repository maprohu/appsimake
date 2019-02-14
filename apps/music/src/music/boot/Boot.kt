package music.boot

import common.obj
import commonfb.*
import commonshr.Action
import commonui.usericon.UnknownUserSrc
import commonui.widget.*
import indexeddb.IDBDatabase
import killable.*
import kotlinx.coroutines.*
import music.*
import music.common.LocalSongs
import music.common.toLatestUid
import music.content.UserUnknown
import music.data.*
import music.loggedin.LoggedIn
import music.notloggedin.NotLoggedIn
import music.player.Visible
import org.w3c.dom.HTMLElement
import rx.*

open class BootPath(
    val boot: Boot
): BodyPath(boot.path.body)

class Boot(
    parent: JobScope,
    val path: BodyPath,
    idb: IDBDatabase,
    localSongs: LocalSongs
): ViewImpl<HTMLElement>(parent) {
    private val self = BootPath(this)

    companion object {
        suspend fun create(): Boot {
            val body = Body()

            return body.withChild {
                val idb = localDatabase()
                val localSongs = LocalSongs(this, idb)

                Boot(this, BodyPath(body), idb, localSongs).also {
                    body.content.switchTo(
                        ItemWithViewRx.hasView<JobScope, HTMLElement>(
                            this,
                            it
                        )
                    )
                }
            }

        }
    }

    val userState = Var<UserState>(UserState.Unknown)

    private val user = userState.toUser(kills)

    val userIcon = rx {
        user()?.photoURL ?: UnknownUserSrc
    }

    class Slots {
        lateinit var top: Hole
        lateinit var main: Hole
        lateinit var toasts: (ToastFn) -> Unit
        lateinit var player: Hole
    }
    val slots = Slots()
    override val rawView = ui()

    val contentHole = HoleT<TopAndContent>(
        prepare = {
            topbar.apply(slots.top.prepareOrNull)
            content.apply(slots.main.prepareOrNull)
        },
        assign = {cv ->
            slots.top %= cv?.topbar
            slots.main %= cv?.content
        }
    )

    val content = viewsAny(UserUnknown(this), contentHole).viewFromRx(userState) { u ->
        when (u) {
            is UserState.NotLoggedIn -> fwd { NotLoggedIn(this, u.app, self) }
            is UserState.LoggedIn -> fwd { LoggedIn(this, self) }
            else -> UserUnknown(this)
        }

    }

    val userSongs = wrap<UserSongs?>(null)


    private val songInclude = songInclude(
        kills,
        localSongs,
        rx { userSongs.current().item?.get }
    )

    val songSource = songSource(
        songInclude,
        localSongs
    )

    val player = slots.player.viewsAny().viewFromRx(songSource) { s ->
        s?.invoke()?.let { Visible(self, it, false) }
    }


    val songInfoSource = wrap(localSongInfoSource())

    val signOut = Var<Action> {
        userState.now = UserState.Unknown
    }

    init {

        GlobalScope.launch {
            val app = FB.app
            val db = FB.db

            db.enablePersistence(
                obj {
                    experimentalTabSynchronization = true
                }
            ).await()

            db.disableNetwork().await()

            runUserState().forEach { userState.now = it }


            user.toLatestUid(kills, idb).apply {
                rxv.forEach { uid ->
                    exec {
                        userSongs.switchToWrap {
                            uid?.let { id ->
                                userSongs(kills, id, db)
                            }
                        }
                    }
                }

                signOut.now =  {
                    userState.now = UserState.Unknown
                    clear()
                    app.auth().signOut()
                }
            }

            songInfoSource.wrapFromRx(user) {
                if (it == null) {
                    localSongInfoSource()
                } else {
                    cloudSongInfoSource(db)
                }

            }

        }
    }


}


