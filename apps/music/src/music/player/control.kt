package music.player

import common.AsyncEmitter
import commonui.*
import killable.*
import music.Playable
import music.UserSongsDB
import rx.RxIface

const val SeekSeconds = 15.0

class Control(
    val bind: Bind,
    kills: KillSet,
    private val panel: Slot,
    val proc: AssignProcOrElse,
    val usdb: RxIface<UserSongsDB?>,
    val songSource: AsyncEmitter<Playable>
) {
    private val ui = bind.ui(kills)

    val kseq = kills.seq()

    private fun poll(next: (Playable) -> Unit) {
        val polled = songSource.poll()
        if (polled == null) {
            hidden()
        } else {
            next(polled)
        }
    }

    private fun visible(p: Playable, startPlaying: Boolean) {
        Visible(this, p, startPlaying)
    }
    fun next(startPlaying: Boolean) {
        poll {
            visible(it, startPlaying)
        }
    }

    private fun show(p: Playable, startPlaying: Boolean = false) {
        panel %= ui
        visible(p, startPlaying)
    }

    private fun hidden() {
        panel %= null
        kseq.clear()
        proc %= bind.inbox.async(kseq.killSet()) {
            songSource.receive()
        } processedBy { playable ->
            show(playable)
        }
    }

    init {
        poll {
            show(it)
        }
    }

}
