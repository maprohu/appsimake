package music.player

import common.None
import common.Optional
import commonui.widget.Inbox
import commonui.widget.InboxWrap
import music.Playable
import musiclib.Mp3File
import musiclib.UserSong
import musiclib.UserSongState
import rx.Var

class Bind(
    inbox: Inbox
): InboxWrap(inbox) {

    val playable = Var<Playable?>(null)
    val tag = Var<Optional<Mp3File>>(None)
    val playing = Var(false)
    val totalDuration = Var(0)
    val currentPosition = Var(0)
    val userSong = Var(UserSongState.New)

}
