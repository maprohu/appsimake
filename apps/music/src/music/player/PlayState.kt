package music.player

import commonui.widget.ExecImpl
import commonui.widget.JobKillsImpl
import domx.invoke
import kotlin.math.max

abstract class PlayState(
    val visible: Visible
): ExecImpl(visible) {
    abstract fun playOrPause()
    fun backward() = with(visible) {
        audio {
            currentTime = max(0.0, currentTime - SeekSeconds)
        }
        readCounterNow()
    }
    abstract fun forward()
    fun previousTrack() = with(visible) {
        audio.currentTime = 0.0
        readCounterNow()
    }
    abstract fun nextTrack()
    fun like() = with(visible) {
        path.boot.userSongs.current.now.item?.let { us ->
            us.like(playable.id)
        }
    }
    abstract fun dontLike()
}