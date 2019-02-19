package music.database

import common.EmitterIface
import common.Some
import common.map
import commonfb.save
import commonshr.*
import commonui.widget.*
import firebase.FBApi
import kotlinx.coroutines.await
import music.import.Import
import music.loggedin.LoggedIn
import music.loggedin.LoggedInPath
import music.status.Status
import musiclib.StoreState
import musiclib.UserSongState
import musiclib.musicLib
import musiclib.storage
import rx.RxMutableSet
import rx.RxSet
import rx.Var
import rx.process

open class DatabasePath(
    val database: Database
): LoggedInPath(database.from)

class Database(
    val from: LoggedIn
): ForwardBase<TopAndContent>(from), FBApi {
    val path = DatabasePath(this)

    val localSongIds = Status(
        path.boot.localSongs.set
    )

    val toBeDownloaded = Status(
        path.loggedIn.uploadedSet.ids.filtered { id ->
            path.loggedIn.userSongs.get(id)() == UserSongState.Like &&
                    !path.boot.localSongs.set.containsRx(id)()
        }
    )

    val toBeUploaded = Status(
        path.boot.localSongs.set.filtered { id ->
            path.loggedIn.userSongs.get(id)() == UserSongState.Like &&
                    !path.loggedIn.storageIds.containsRx(id)()
        }
    )

    val toBeDeleted = Status(
        path.boot.localSongs.set.filtered { id ->
            path.loggedIn.userSongs.get(id)() == UserSongState.DontLike
        }
    )

    val new = Status(
        path.boot.localSongs.set.filtered { id ->
            path.loggedIn.userSongs.get(id)() == UserSongState.New
        }
    )

    val like = Status(
        path.loggedIn.userSongSet.set.filtered { us ->
            us.state.initial() == Some(UserSongState.Like)
        }.diffsAll.toMoves().map { m -> m.map { s -> s.props.idOrFail } }
    )

    val dontLike = Status(
        path.loggedIn.userSongSet.set.filtered { us ->
            us.state.initial() == Some(UserSongState.DontLike)
        }.diffsAll.toMoves().map { m -> m.map { s -> s.props.idOrFail } }
    )

    val cloud = Status(
        path.loggedIn.storageSet.set.filtered { us ->
            us.uploaded.initial().getOrDefault(false)
        }.diffsAll.toMoves().map { m -> m.map { s -> s.props.idOrFail } }
    )

    val uploading = Status(
        path.loggedIn.uploadingIds
    )

    suspend fun import() {
        forward %= Import(this)
    }

    inner class Status(
        val items: EmitterIface<SetMove<String>>
    ) {
        constructor(
            set: RxSet<String>
        ): this(set.diffsAll.toMoves())

        val set = mutableSetOf<String>()
        val count = Var(0)
        val size = Var(0L)
        val duration = Var(0.0)

        init {
            items.process(kills) { id ->
                val tag = path.loggedIn.songInfoSource(id) {
                    path.boot.localSongs.load(id)
                }

                set += id
                kills += { set -= id }

                count.transform { it + 1 }
                kills += {
                    count.transform { it - 1 }
                }

                tag.bytes.initial
                    .map { it.getOrDefault(0) }
                    .forEach { v ->
                        size.transform { it + v }
                        kills += {
                            size.transform { it - v }
                        }
                    }
                tag.secs.initial
                    .map { it.getOrDefault(0.0) }
                    .forEach { v ->
                        duration.transform { it + v }
                        kills += {
                            duration.transform { it - v }
                        }
                    }
            }
        }
    }

    override val rawView = ui()

    suspend fun showStatus(
        st: Status,
        title: String
    ) {
        forward %= music.status.Status(this, st, title)
    }

    suspend fun upload(id: String) {
        val process = path.boot.processOf(id).uploading
        if (!process.now) {
            try {
                process.now = true
                path.loggedIn.privileged {
                    val file = path.boot.localSongs.load(id)
                    if (file != null) {
                        val store = StoreState().apply {
                            props.persisted(
                                musicLib.app.storage.doc(id)
                            )

                            uploaded.cv = false
                            save(path.loggedIn.db)
                        }

                        val ref = path.loggedIn.storageRef.child(id)
                        ref.put(file).await()
                        store.apply {
                            uploaded.cv = true
                            save(path.loggedIn.db)
                        }
                    }
                }
            } finally {
                process.now = false
            }
        }
    }
}