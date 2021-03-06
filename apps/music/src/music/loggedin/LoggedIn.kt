package music.loggedin

import commonfb.FBApi
import commonshr.private
import commonui.globalStatus
import commonui.widget.*
import firebase.HasDb
import firebase.User
import firebase.app.App
import firebase.firestore.*
import firebase.functions.Functions
import firebase.storage.Storage
import kotlinx.coroutines.launch
import music.UserSongs
import music.boot.Boot
import music.boot.BootPath
import music.common.MusicApi
import music.content.Content
import music.data.SongInfoSource
import music.database.Database
import musiclib.*

interface LoggedInPath: BootPath, HasDb {
    val loggedIn: LoggedIn
}

class LoggedIn(
    val from: Boot,
    val user: User,
    val app: App,
    override val db: Firestore,
    functions: Functions,
    val storage: Storage,
    override val songInfoSource: SongInfoSource,
    override val userSongs: UserSongs
): ForwardBase<TopAndContent>(from), Content, MusicApi, LoggedInPath, BootPath by from, FBApi {
    override val loggedIn = this

    val storageRef = storage.ref("music/files")

    val userSongSet by lazy {
        musicLib.app.private.doc(user.uid).usersongs.fsCache { UserSong() }
    }

    val storageSet by lazy {
        musicLib.app.storage.fsCache { StoreState() }
    }

    val uploadedSet by lazy {
        storageSet.set.filtered { it.uploaded.initial().getOrDefault(false) }
    }

    val storageIds = storageSet.set.ids

    val uploadingIds = storageSet.set.filtered {
        !it.uploaded.initial().getOrDefault(true)
    }.ids


    suspend fun database() {
        forward %= Database(this)
    }


//    val signinWithCustomToken = run {
//        var signedIn = false
//
//        suspend {
//            if (!signedIn) {
//                globalStatus %= "Requesting online token..."
//                customToken.callable(functions).call(Unit)?.let { token ->
//                    globalStatus %= "Signing in with online token..."
//                    app.auth().signInWithCustomToken(token).await()
//                }
//                signedIn = true
//            }
//        }
//    }

    suspend fun <T> privileged(fn: suspend () -> T): T {
        boot.customTokenReady.await()
//        signinWithCustomToken()
        return fn()
    }

    init {

        fun log(vararg o: Any?) {
            console.log(*o)
        }



    }

    fun signOut() {
        app.auth().signOut()
    }

    val sync = Sync(this)

    override val rawView = ui()

    init {
        launch {
            boot.customTokenReady.await()
            globalStatus %= "Logged in."
        }
    }
}