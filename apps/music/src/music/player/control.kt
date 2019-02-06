package music.player

import common.AsyncEmitter
import commonlib.addedTo
import commonui.*
import killable.KillSet
import killable.seq
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import music.Playable
import music.UserSongsDB
import rx.RxIface

const val SeekSeconds = 15.0

fun PlayerBind.control(
    kills: KillSet,
    inbox: Inbox,
    panel: Slot,
    proc: SetProcOrElse,
    udb: RxIface<UserSongsDB?>,
    songSource: AsyncEmitter<Playable>
) {
    val ui = ui()
    val kseq = kills.seq()

    val io = object {
        fun poll(next: (Playable) -> Unit) {
            val polled = songSource.poll()
            if (polled == null) {
                hidden()
            } else {
                next(polled)
            }
        }
        fun hidden() {
            panel %= null
            val ks = kseq.killables()
            class Holder {
                lateinit var playable: Playable
            }
            val msg = Holder()
            GlobalScope.launch {
                msg.playable = songSource.receive()
                inbox += msg
            }.addedTo(ks)
            proc %= procOrElse(msg) {
                panel %= ui
                paused(msg.playable)
            }
        }
        fun paused(p: Playable) {

        }

    }

    io.poll {
        panel %= ui
        io.paused(it)
    }

}
