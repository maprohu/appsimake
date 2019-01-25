package musiclib

import commonlib.*
import firebaseshr.*

val music by lib()

val DocWrap<AppDoc>.songs by coll<Mp3File>()
val DocWrap<AppDoc>.storage by coll<StoreState>()
val DocWrap<Private>.usersongs by coll<UserSong>()

class StoreState: Base<StoreState>() {

    val count by o.scalar<Int>().withDefault(0).prop()

}

enum class UserSongState {
    Like,
    DontLike
}

class UserSong: Base<UserSong>() {

    val state by o.enum<UserSongState>().prop()

}

class Mp3File: Base<Mp3File>() {

    val artist by o.scalar<String>().prop()
    val title by o.scalar<String>().prop()
    val bytes by o.scalar<Int>().prop()
    val secs by o.scalar<Double>().prop()
    val artistfix by o.scalar<String>().prop()
    val titlefix by o.scalar<String>().prop()

}

abstract class ActivePlaylist<T: ActivePlaylist<T>>: BaseRootVal<T>() {
    val position by o.scalar<Double>().prop()

    companion object : ActivePlaylist<Nothing>() {
        val emptyOf = wrapper(
            { LocalPlaylist() },
            { CloudPlaylist() },
            { CustomPlaylist() }
        )
        fun of(d: dynamic) = emptyOf(d).initFrom(d)
    }
}
class LocalPlaylist: ActivePlaylist<LocalPlaylist>()
class CloudPlaylist: ActivePlaylist<CloudPlaylist>()
class CustomPlaylist: ActivePlaylist<CustomPlaylist>() {
    val songs by o.array<String>().prop()
}

class PlayerSettings: Base<PlayerSettings>() {

    val activePlaylist by
        o.scalar<ActivePlaylist<*>>().baseProp(ActivePlaylist.emptyOf)

}