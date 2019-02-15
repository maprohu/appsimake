package music.player

import common.None
import common.listen
import common.toOptional
import commonshr.*
import commonui.widget.*
import domx.audio
import domx.invoke
import firebaseshr.saveIfDirty
import killable.KillSet
import killable.addedTo
import killable.seq
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import music.Playable
import music.boot.Boot
import music.boot.BootPath
import musiclib.Mp3File
import musiclib.UserSong
import musiclib.UserSongState
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import org.w3c.dom.url.URL
import rx.Rx
import rx.Var
import rx.mapAsync
import rx.toChannel
import kotlin.browser.document
import kotlin.math.max


const val SeekSeconds = 15.0


open class VisiblePath(
    val visible: Visible
): BootPath(visible.boot)

class Visible(
    path: BootPath
): UIBase<HTMLElement>(path.boot) {
    val boot = path.boot
    val path = VisiblePath(this)

    val player = switchOpt<Player>()

    val tag = Var(Mp3File()).apply {
        rx {
            path.boot.songInfoSource().item to player()?.playable
        }.mapAsync(Var(None)) { (s, p) ->
            p?.let { s.invoke(p) }
        }.forEach { t ->
            rx {
                t.toOptional().flatMap { it() }.getOrElse { Mp3File() }
            }.forEach {
                now = it
            }
        }
    }

    val totalDuration = Var(0)
    val currentPosition = Var(0)


    val playing = rx { player()?.let { it.playState().isPlaying } ?: false }


    suspend fun loadNextSong(startPlaying: Boolean) {
        player.switchTo(
            path.boot.songSource.now?.invoke()?.let { Player(path, it, startPlaying) }
        )
    }


    val userSong = Var<UserSongState?>(UserSongState.New)

    fun UserSong.saveState(st: UserSongState) {
        state.cv = st
        saveIfDirty()
    }
    fun UserSong.dontLike() {
        saveState(UserSongState.DontLike)
    }

    val p: Player? get() = player.now
    override val rawView = ui()

    init {
        exec {
            loadNextSong(false)
        }
    }


}