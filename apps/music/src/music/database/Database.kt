package music.database

import common.EmitterIface
import common.Some
import commonshr.*
import commonui.widget.*
import music.common.MusicApi
import music.import.Import
import music.loggedin.LoggedIn
import music.loggedin.LoggedInPath
import musiclib.UserSongState
import rx.RxSet
import rx.Var

open class DatabasePath(
    val database: Database
): LoggedInPath(database.from)

class Database(
    val from: LoggedIn
): ForwardBase<TopAndContent>(from), MusicApi {
    override val path = DatabasePath(this)

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
        }.ids
    )

    val dontLike = Status(
        path.loggedIn.userSongSet.set.filtered { us ->
            us.state.initial() == Some(UserSongState.DontLike)
        }.ids
    )

    val cloud = Status(
        path.loggedIn.storageSet.set.filtered { us ->
            us.uploaded.initial().getOrDefault(false)
        }.ids
    )

    val newInCloud = Status(
        path.loggedIn.storageSet.set.filtered { us ->
            us.uploaded.initial().getOrDefault(false)
        }.ids.filtered { id ->
            !path.boot.localSongs.set.containsRx(id)() &&
                    path.loggedIn.userSongs.get(id)() == UserSongState.New
        }
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

        val set = items.toRxSet()

        val count = Var(0)
        val size = Var(0L)
        val duration = Var(0.0)

        init {
            items.process(kills) { id ->
                val tag = path.loggedIn.songInfoSource(id) {
                    path.boot.localSongs.load(id)
                }

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
        title: String,
        bgfn: HasKillSetAndUIX.(ButtonGroup) -> Unit
    ) {
        forward %= music.status.Status(this, st, title, bgfn)
    }

}