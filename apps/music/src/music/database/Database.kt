package music.database

import common.EmitterIface
import common.Some
import commonshr.*
import commonui.widget.*
import killable.HasKillSet
import killable.KillSet
import music.common.MusicApi
import music.database.details.Details
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


    val toBeDownloaded = status(
        path.loggedIn.uploadedSet.ids.filtered { id ->
            path.loggedIn.userSongs.get(id)() == UserSongState.Like &&
                    !path.boot.localSongs.set.containsRx(id)()
        }
    )

    val toBeUploaded = status(
        path.boot.localSongs.set.filtered { id ->
            path.loggedIn.userSongs.get(id)() == UserSongState.Like &&
                    !path.loggedIn.storageIds.containsRx(id)()
        }
    )

    val toBeDeleted = status(
        path.boot.localSongs.set.filtered { id ->
            path.loggedIn.userSongs.get(id)() == UserSongState.DontLike
        }
    )

    val newInCloud = status(
        path.loggedIn.storageSet.set.filtered { us ->
            us.uploaded.initial().getOrDefault(false)
        }.ids.filtered { id ->
            !path.boot.localSongs.set.containsRx(id)() &&
                    path.loggedIn.userSongs.get(id)() == UserSongState.New
        }
    )

    suspend fun import() {
        forward %= Import(this)
    }

    suspend fun details() {
        forward %= Details(this)
    }

    class Status(
        val items: EmitterIface<SetMove<String>>,
        val path: LoggedInPath,
        override val kills: KillSet
    ): HasKillSet {

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


}