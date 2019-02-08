package music.player

import commonui.*
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
    val procs = boot.procs.addProcAssign().assignProcAdd()
    val visibleProc = procs.addProcAssign()


    val kills = boot.kills
    val kseq = kills.seq()
    private val ui = UI(kills, bind)

    private suspend fun poll(fn: (Playable) -> Unit) {
        boot.songSource.now?.invoke()?.let { p ->
            fn(p)
        }
    }

    private fun visible(p: Playable, startPlaying: Boolean) {
        Visible(this, p, startPlaying)
    }
    suspend fun next(startPlaying: Boolean) {
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
        visibleProc %= procOrElse()
        kseq.clear()
    }

    init {
        procs += bind.inbox.rx(kills, { boot.songSource() != null }) { hasPlayable ->
            if (hasPlayable) {
                poll {
                    show(it)
                }
            } else {
                hidden()
            }
        }
    }

}
