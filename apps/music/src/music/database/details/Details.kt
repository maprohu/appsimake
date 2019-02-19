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

open class DetailsPath(
    val details: Details
): DatabasePath(details.from)

class Details(
    val from: Database
): ForwardBase<TopAndContent>(from), MusicApi {
    override val path = DetailsPath(this)

    val localSongIds = status(
        path.boot.localSongs.set
    )

    val new = status(
        path.boot.localSongs.set.filtered { id ->
            path.loggedIn.userSongs.get(id)() == UserSongState.New
        }
    )

    val like = status(
        path.loggedIn.userSongSet.set.filtered { us ->
            us.state.initial() == Some(UserSongState.Like)
        }.ids
    )

    val dontLike = status(
        path.loggedIn.userSongSet.set.filtered { us ->
            us.state.initial() == Some(UserSongState.DontLike)
        }.ids
    )

    val cloud = status(
        path.loggedIn.storageSet.set.filtered { us ->
            us.uploaded.initial().getOrDefault(false)
        }.ids
    )

    val uploading = status(
        path.loggedIn.uploadingIds
    )


    override val rawView = ui()


}