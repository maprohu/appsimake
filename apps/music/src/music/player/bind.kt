package music.player

import common.None
import common.Optional
import commonui.Inbox
import music.Playable
import musiclib.Mp3File
import musiclib.UserSong
import musiclib.UserSongState
import rx.Var

class Bind(
    val inbox: Inbox
) {

    val playable = Var<Playable?>(null)
    val playing = Var(false)
    val totalDuration = Var(0)
    val currentPosition = Var(0)
    val userSong = Var<UserSong?>(null)

}
