package music.player

import commonui.widget.ExecImpl
import commonui.widget.JobKillsImpl
import domx.invoke
import kotlin.math.max

abstract class PlayState(
    val visible: Visible,
    val isPlaying: Boolean
): ExecImpl(visible) {
}