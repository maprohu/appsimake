package music.boot

import common.obj
import commonfb.*
import commonlib.private
import commonshr.Action
import commonui.usericon.UnknownUserSrc
import commonui.widget.*
import firebase.firestore.collectionRef
import firebase.firestore.flushQueries
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
import music.player.Player
import music.player.Visible
import musiclib.musicLib
import musiclib.songs
import musiclib.usersongs
import org.w3c.dom.HTMLElement
import rx.*

open class BootPath(
    val boot: Boot
): BodyPath(boot.body)

class Boot(
    parent: JobScope,
    from: BodyPath,
    idb: IDBDatabase,
    val localSongs: LocalSongs
): ViewImpl<HTMLElement>(parent) {
    val body = from.body
    val path = BootPath(this)

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

    val content = viewsAny(UserUnknown(this), contentHole)

    val userSongs = wrap<UserSongs?>(null)


    private val songInclude = songInclude(
        kills,
        localSongs,
        rx { userSongs().item?.get }
    )

    val songSource = songSource(
        songInclude,
        localSongs
    )



    val player = slots.player.viewsAny().viewFromRx(songSource) { s ->
        s?.invoke()?.let { Visible(this).apply { loadNextSong(false) } }
    }

    val songInfoSource = wrap(localSongInfoSource())

    val signOut = Var<Action> {
        userState.now = UserState.Unknown
    }

    init {

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


            runUserState(app).forEach { st ->
                userState.now = st
            }

            content.viewFromRx(userState) { u ->
                when (u) {
                    is UserState.NotLoggedIn -> fwd { NotLoggedIn(this, app, path) }
                    is UserState.LoggedIn -> fwd { LoggedIn(this, path, u.user, app, db, functions) }
                    else -> UserUnknown(this@Boot)
                }
            }

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


    fun like(id: String) {
        userSongs.now.item?.let { us ->
            us.like(id)
        }
    }
    fun dontLike(id: String) {
        userSongs.now.item?.let { us ->
            us.dontLike(id)
        }
    }
    fun play(playable: Playable) {
        exec {
            player.switchToView {
                Visible(this).apply {
                    exec {
                        player.switchTo(
                            Player(this, playable, true)
                        )
                    }
                }
            }
        }
    }

}


