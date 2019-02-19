package music.boot

import common.obj
import commonfb.*
import commonlib.private
import commonshr.*
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
import music.content.Content
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
    val localSongs: LocalSongs
): ViewImpl<HTMLElement>(parent) {
    val body = from.body
    val path = BootPath(this)

    val tasks = discardExecutor().withCounter

    companion object {
        suspend fun create(): Boot {
            val body = Body()

            return body.withChild {
                val idb = localDatabase()
                val localSongs = LocalSongs(this, idb)

                Boot(this, BodyPath(body), localSongs).also {
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

    val localSongInfoSource = localSongInfoSource()

    val statusMessage = Var("Loading Music Player...")

    val content = views<Content>().of(UserUnknown(this), contentHole)

    val userSongs = content.map { it.item.userSongs }

    val songInfoSource = content.map { it.item.songInfoSource }


    val songSource = songSource(
        songInclude(
            localSongs,
            userSongs.map { it?.get }
        ),
        localSongs
    )

    val hasSongsToPlay = songSource.map { it != null }



    val player = slots.player.viewsAny().viewFromRx(hasSongsToPlay) { v ->
        if (v) Visible(this).apply { loadNextSong(false) }
        else null
    }


//    val signOut = Var<Action> {
//        userState.now = UserState.Unknown
//    }

    init {

        GlobalScope.launch {
            val app = FB.app
            val db = FB.db
            val functions = FB.functions()
            val storage = FB.storage

            statusMessage %= "Enabling persistence..."

            db.enablePersistence(
                obj {
                    experimentalTabSynchronization = true
                }
            ).await()

            statusMessage %= "Disabling network..."
            db.disableNetwork().await()


            statusMessage %= "Checking user..."
            runUserState(app).forEach { st ->
                exec {
                    userState.now = st

                    when (st) {
                        is UserState.LoggedIn -> {
                            statusMessage %= "Logging in..."
                            content.switchToView {
                                LoggedIn(
                                    this@Boot,
                                    st.user,
                                    app,
                                    db,
                                    functions,
                                    storage,
                                    cloudSongInfoSource(db),
                                    userSongs(kills, st.user.uid, db)
                                )
                            }
                        }
                        is UserState.NotLoggedIn -> {
                            content.switchToView {
                                NotLoggedIn(this@Boot, app)
                            }

                        }
                        else -> {
                            content.switchToView {
                                UserUnknown(this@Boot)
                            }
                        }

                    }

                }
            }
        }
    }


    fun like(id: String) {
        userSongs.now?.let { us ->
            us.like(id)
        }
    }
    fun dontLike(id: String) {
        userSongs.now?.let { us ->
            us.dontLike(id)
        }
    }
    fun play(playable: Playable) {
        exec {
            lateinit var vis: Visible
            player.switchToView {
                Visible(this).also { vis = it }
            }
            vis.apply {
                exec {
                    player.switchTo(
                        Player(this, playable, true)
                    )
                }
            }
        }
    }

    class SongProcess {
        val uploading = Var(false)
        val downloading = Var(false)
        val deletingFromLocal = Var(false)
        val deletingFromCloud = Var(false)
        val checkingStorage = Var(false)
    }

    private val songProcessMap = mutableMapOf<String, SongProcess>()

    fun processOf(id: String) = songProcessMap.getOrPut(id) { SongProcess() }

    fun task(process: Var<Boolean>, fn: suspend () -> Unit) {
        if (!process.now) {
            process.now = true
            path.boot.tasks.exec {
                try {
                    fn()
                } finally {
                    process.now = false
                }
            }
        }
    }
}


