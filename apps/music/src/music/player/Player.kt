package music.player

import commonshr.*
import commonui.widget.*
import music.Playable
import music.boot.Boot
import music.boot.BootPath
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node


//abstract class Player(boot: Boot): ViewImpl<HTMLElement>(boot)

//class Player(
//    boot: Boot
//): BootWrap(boot, boot) {
//    override val show: Trigger = {}
//
//    val slot = boot.bind.player
//
//    private suspend fun poll(fn: suspend (Playable) -> Unit) {
//        boot.songSource.now?.invoke()?.let { p ->
//            fn(p)
//        }
//    }
//
//    private suspend fun visible(p: Playable, startPlaying: Boolean) {
//        forwardNow {
//            Visible(this, p, startPlaying)
//        }
//    }
//    suspend fun next(startPlaying: Boolean) {
//        poll {
//            visible(it, startPlaying)
//        }
//    }
//
//    private suspend fun show(p: Playable, startPlaying: Boolean = false) {
//        visible(p, startPlaying)
//    }
//
//    private suspend fun hidden() {
//        forwardNow {
//            Hidden(this)
//        }
//    }
//
//    init {
//        rx { boot.songSource() != null }.forEach { hasPlayable ->
//            exec {
//                if (hasPlayable) {
//                    poll {
//                        show(it)
//                    }
//                } else {
//                    hidden()
//                }
//            }
//        }
//    }
//
//}
