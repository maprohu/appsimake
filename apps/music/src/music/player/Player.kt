package music.player

import commonui.addProcAssign
import commonui.async
import commonui.processedBy
import killable.*
import music.Playable
import music.boot.Boot
import music.boot.BootWrap

const val SeekSeconds = 15.0

open class PlayerWrap(
    val player: Player
): BootWrap(player.boot)

class Player(
    boot: Boot
): BootWrap(boot) {
    val bind = Bind(inbox)
    private val panel = boot.bind.playerWidget
    val proc = boot.procs.addProcAssign()


    val kills = boot.kills
    val kseq = kills.seq()
    private val ui = UI(kills, bind)

    private fun poll(next: (Playable) -> Unit) {
        val polled = boot.songSource.poll()
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
            boot.songSource.receive()
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
