package music.loggedin

import commonfb.callable
import commonlib.commonlib.customToken
import commonlib.private
import commonui.widget.*
import firebase.User
import firebase.app.App
import firebase.firestore.*
import firebase.functions.Functions
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import music.UserSongs
import music.boot.Boot
import music.boot.BootPath
import music.content.Content
import music.data.SongInfoSource
import music.database.Database
import musiclib.UserSong
import musiclib.musicLib
import musiclib.usersongs
import rx.Var

open class LoggedInPath(
    val loggedIn: LoggedIn
): BootPath(loggedIn.from)

class LoggedIn(
    val from: Boot,
    user: User,
    val app: App,
    db: Firestore,
    functions: Functions,
    override val songInfoSource: SongInfoSource,
    override val userSongs: UserSongs
): ForwardBase<TopAndContent>(from), Content {
    val path = LoggedInPath(this)

    val userSongSet by lazy {
        musicLib.app.private.doc(user.uid).usersongs.query(db).toRxSetWithLookup(kills) { UserSong() }
    }

    override val rawView = ui()

    suspend fun database() {
        forward %= Database(this)
    }

    val syncing = Var(false)

    init {
        fun log(vararg o: Any?) {
            console.log(*o)
        }

        val signinWithCustomToken = run {
            var signedIn = false

            suspend {
                if (!signedIn) {
                    customToken.callable(functions).call(Unit)?.let { token ->
                        app.auth().signInWithCustomToken(token).await()
                    }
                    signedIn = true
                }
            }
        }
        syncing.forEach { s ->
            if (s) {
                launch {
                    try {
                        signinWithCustomToken()

                        db.enableNetwork().await()

                        try {
                            flushQueries(
                                musicLib.app.private.doc(user.uid).usersongs.collectionRef(db)
                            )
                        } finally {
                            db.disableNetwork().await()
                        }

                    } catch (e: dynamic) {
                        path.boot.slots.toasts {
                            danger(
                                "Synchronizing failed: ${e.message}"
                            )
                        }
                    }
                    syncing.now = false
                }
            }
        }


    }

    fun signOut() {
        app.auth().signOut()
    }

    fun sync() {
        syncing.now = true
    }
}