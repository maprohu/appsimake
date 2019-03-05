package music.database

import common.EmitterIface
import commonshr.*
import commonui.widget.*
import commonshr.KillsApi
import killable.KillSet
import music.common.MusicApi
import music.database.details.Details
import music.database.usage.Usage
import music.import.Import
import music.loggedin.LoggedIn
import music.loggedin.LoggedInPath
import musiclib.UserSongState
import rx.Var

interface DatabasePath: LoggedInPath {
    val database: Database
}

class Database(
    val from: LoggedIn
): ForwardBase<TopAndContent>(from), MusicApi, DatabasePath, LoggedInPath by from {
    override val database = this


    val toBeDownloaded = status(
        loggedIn.uploadedSet.ids.filtered { id ->
            loggedIn.userSongs.get(id)() == UserSongState.Like &&
                    !boot.localSongs.set.containsRx(id)()
        }
    )

    val toBeUploaded = status(
        boot.localSongs.set.filtered { id ->
            loggedIn.userSongs.get(id)() == UserSongState.Like &&
                    !loggedIn.storageIds.containsRx(id)()
        }
    )

    val toBeDeleted = status(
        boot.localSongs.set.filtered { id ->
            loggedIn.userSongs.get(id)() == UserSongState.DontLike
        }
    )

    val newInCloud = status(
        loggedIn.storageSet.set.filtered { us ->
            us.uploaded.initial().getOrDefault(false)
        }.ids.filtered { id ->
            !boot.localSongs.set.containsRx(id)() &&
                    loggedIn.userSongs.get(id)() == UserSongState.New
        }
    )

    suspend fun import() {
        forward %= Import(this)
    }

    suspend fun details() {
        forward %= Details(this)
    }

    suspend fun usage() {
        forward %= Usage(this)
    }

    class Status(
        val items: EmitterIface<SetMove<String>>,
        val path: LoggedInPath,
        override val kills: KillSet
    ): KillsApi {

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