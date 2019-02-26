package music.boot

import common.obj
import commonfb.*
import commonlib.private
import commonshr.*
import commonui.globalStatus
import commonui.usericon.UnknownUserSrc
import commonui.widget.*
import firebase.app.App
import firebase.auth.UserCredential
import firebase.firestore.Firestore
import firebase.firestore.collectionRef
import firebase.firestore.flushQueries
import firebase.functions.Functions
import firebase.storage.Storage
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

interface BootPath: BodyPath {
    val boot: Boot
}

class Boot(
    parent: JobScope,
    from: Body,
    val localSongs: LocalSongs
): ViewImpl<HTMLElement>(parent), BootPath, BodyPath by from {
    override val boot = this
    val path = this

    val tasks = discardExecutor().withCounter

    companion object {
        suspend fun create(): Boot {
            val body = Body()

            return body.withChild {
                val idb = localDatabase()
                val localSongs = LocalSongs(this, idb)

                Boot(this, body, localSongs).also {
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

    var customTokenReady: Deferred<Unit> = CompletableDeferred(Unit)

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

    class FBRefs(
        val app: App,
        val db: Firestore,
        val functions: Functions,
        val storage: Storage
    )

    val statusMessage = globalStatus

    private val fbRefsDeferred by lazy {
        GlobalScope.async {
            statusMessage %= "Initializing Firebase..."

            FBRefs(
                FB.app,
                FB.db,
                FB.functions(),
                FB.storage
            )
        }
    }

    suspend fun fbRefs() = fbRefsDeferred.await()



//    val signOut = Var<Action> {
//        userState.now = UserState.Unknown
//    }

    init {

        GlobalScope.launch {
             with (fbRefs()) {
                try {
                    statusMessage %= "Enabling persistence..."

                    db.enablePersistence(
                        obj {
                            experimentalTabSynchronization = true
                        }
                    ).await()

                    statusMessage %= "Switching to offline data..."
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
                                    statusMessage %= "Logging out..."
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
                } catch (d: dynamic) {
                    globalStatus %= "Error: $d"
                    slots.toasts {
                        danger("$d")
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


