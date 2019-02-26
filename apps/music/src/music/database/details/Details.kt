package music.database.details

import common.EmitterIface
import common.Some
import commonshr.*
import commonui.widget.*
import music.common.MusicApi
import music.database.Database
import music.database.DatabasePath
import music.import.Import
import music.loggedin.LoggedIn
import music.loggedin.LoggedInPath
import musiclib.UserSongState
import rx.RxSet
import rx.Var

interface DetailsPath: DatabasePath {
    val details: Details
}

class Details(
    val from: Database
): ForwardBase<TopAndContent>(from), MusicApi, DetailsPath, DatabasePath by from {
    override val details = this

    val localSongIds = status(
        boot.localSongs.set
    )

    val new = status(
        boot.localSongs.set.filtered { id ->
            loggedIn.userSongs.get(id)() == UserSongState.New
        }
    )

    val like = status(
        loggedIn.userSongSet.set.filtered { us ->
            us.state.initial() == Some(UserSongState.Like)
        }.ids
    )

    val dontLike = status(
        loggedIn.userSongSet.set.filtered { us ->
            us.state.initial() == Some(UserSongState.DontLike)
        }.ids
    )

    val cloud = status(
        loggedIn.storageSet.set.filtered { us ->
            us.uploaded.initial().getOrDefault(false)
        }.ids
    )

    val uploading = status(
        loggedIn.uploadingIds
    )


    override val rawView = ui()


}