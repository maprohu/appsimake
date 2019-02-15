package music.player

import common.listen
import commonshr.*
import commonui.widget.*
import domx.*
import music.Playable
import org.w3c.dom.url.URL
import kotlin.browser.document
import kotlin.math.max


open class PlayerPath(
    val player: Player
): VisiblePath(player.visible)

class Player(
    path: VisiblePath,
    val playable: Playable,
    startPlaying: Boolean
): ExecImpl(path.visible) {
    val visible = path.visible
    val path = PlayerPath(this)

    val audio = document.audio {
        kills += listen("durationchange") {
            visible.totalDuration.now = duration.toInt()
        }
        visible.currentPosition.now = 0
        src = URL.createObjectURL(playable.blob)
        kills += {
            URL.revokeObjectURL(src)
        }
        load()
    }


    suspend fun nextTrack() { next() }

    suspend fun next() {
        path.visible.loadNextSong(isPlaying)
    }

    suspend fun dontLike() {
        path.boot.userSongs.now.item?.let { us ->
            us.dontLike(playable.id)
            next()
        }
    }

    fun readCounterNow() {
        path.visible.currentPosition.now = audio.currentTime.toInt()
    }

    suspend fun forward() {
        val newPos = audio.currentTime + SeekSeconds

        if (newPos >= audio.duration) {
            next()
        } else {
            audio.currentTime = newPos
            readCounterNow()
        }
    }

    fun backward() {
        audio {
            currentTime = max(0.0, currentTime - SeekSeconds)
        }
        readCounterNow()
    }
    fun previousTrack() {
        audio.currentTime = 0.0
        readCounterNow()
    }
    fun like() {
        path.boot.userSongs.now.item?.let { us ->
            us.like(playable.id)
        }
    }

    suspend fun playOrPause() {
        if (isPlaying) {
            playState.switchTo(Paused(this))
        } else {
            playState.switchTo(Playing(this))
        }
    }
    suspend fun play() = playOrPause()
    suspend fun pause() = playOrPause()

    val playState = switch(
        if (startPlaying) Playing(this) else Paused(this)
    )
    val isPlaying get() = playState.now.isPlaying

}

