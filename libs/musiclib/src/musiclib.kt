package musiclib

import commonshr.*
import commonshr.properties.RxBase
import firebaseshr.*

val musicLib = Lib("music")

val DocWrap<AppDoc>.songs by coll { Mp3File() }
val DocWrap<AppDoc>.storage by coll { StoreState() }
val DocWrap<Private>.usersongs by coll { UserSong() }

class StoreState: RxBase<StoreState>() {

    val uploaded by o.boolean()
    val count by o.int()

}

enum class UserSongState {
    New,
    Like,
    DontLike
}

class UserSong: RxBase<UserSong>() {

    val state by o.enum(UserSongState.New)

}

class Mp3File: RxBase<Mp3File>() {

    val artist by o.string()
    val title by o.string()
    val bytes by o.int()
    val secs by o.double()
    val artistfix by o.prop<String?>(null)
    val titlefix by o.prop<String?>(null)

}

fun Mp3File.fixedArtist() = artistfix() ?: artist()
fun Mp3File.fixedTitle() = titlefix() ?: title()

