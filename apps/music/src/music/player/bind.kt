package music.player

import musiclib.UserSongState
import rx.Rx
import rx.Var


class PlayerBind {

    val state = Var(UserSongState.New)
    val stateLoading = Var(false)
    val hasUserDB = Var(false)
    val playing = Var(false)
    val totalDuration = Var(0)
    val currentPosition = Var(0)
    val artist = Var("artist")
    val title = Var("title")

    fun post(msg: Any) {}
}
