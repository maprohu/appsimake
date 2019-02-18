package music.database

import common.Some
import commonshr.*
import commonui.widget.*
import music.import.Import
import music.loggedin.LoggedIn
import music.loggedin.LoggedInPath
import musiclib.UserSongState
import rx.RxMutableSet
import rx.RxSet
import rx.Var
import rx.process

open class DatabasePath(
    val database: Database
): LoggedInPath(database.from)

class Database(
    val from: LoggedIn
): ForwardBase<TopAndContent>(from) {
    val path = DatabasePath(this)


    val localSongIds = Status(
        path.boot.localSongs.set
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
        }.map {

        }
    )

    suspend fun import() {
        forward %= Import(this)
    }

    inner class Status(
        val set: RxSet<String>
    ) {
        val size = Var(0)
        val duration = Var(0.0)

        init {
            set.process(kills) { id ->
                val tag = path.loggedIn.songInfoSource(id) {
                    path.boot.localSongs.load(id)
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