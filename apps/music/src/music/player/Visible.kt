package music.player

import common.None
import common.listen
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


class VisiblePath(
    val visible: Visible
): BootPath(visible.path.boot)

class Visible(
    val path: BootPath,
    val playable: Playable,
    startPlaying: Boolean
): UIBase<HTMLElement>(path.boot) {
    val boot = path.boot

    val tag = Var(Mp3File()).apply {
        path.boot.songInfoSource.current.mapAsync(Var(None)) { t -> t.item.invoke(playable) }.forEach { t ->
            rx { t().getOrElse { Mp3File() } }.forEach { now = it }
        }
    }

    val totalDuration = Var(0)
    val currentPosition = Var(0)


    val playState = switch<PlayState>(Paused(this))
    val playing = rx { playState.current().isPlaying }


    val audio = document.audio {
        kills += listen("durationchange") {
            totalDuration.now = duration.toInt()
        }
        currentPosition.now = 0
        src = URL.createObjectURL(playable.blob)
        kills += {
            URL.revokeObjectURL(src)
        }
        load()
    }

    fun readCounterNow() {
        currentPosition.now = audio.currentTime.toInt()
    }

    val userSong = Var<UserSongState?>(UserSongState.New)

    fun UserSong.saveState(st: UserSongState) {
        state.cv = st
        saveIfDirty()
    }
    fun UserSong.dontLike() {
        saveState(UserSongState.DontLike)
    }

    override val rawView = ui()

//    fun nextProc(kills: KillSet, startPlaying: Boolean): ProcOrElse {
//        suspend fun next() {
//            player.next(startPlaying)
//        }
//        return with (playable) {
//            procOrElses().apply {
//                add.process(DontLike) {

//                }
//                add.process(Forward) {

//
//                }
//                add.process(End) {
//                    next()
//                }
//            }.proc
//        }
//
//    }


    init {
//        GlobalScope.launch {
//            kills += boot.songInfoSource(playable.id, playable.blob).forEach {
//                player.bind.tag.now = it
//            }
//        }.addedTo(kills)
//
//        if (startPlaying) {
//            Playing(this)
//        } else {
//            Paused(this)
//        }
//
//        with (player) {
//            Rx {
//                boot.userSongs()?.let { us ->
//                    us.get(playable.id)()
//                } ?: UserSongState.New
//            }.addedTo(kills).forEach {
//                userSong.now = it
//            }
//
//            bind.playable.now = playable
//
//            with (playable) {
//                procs.process(Like) {
//                }
//
//                procs.process(Beginning) {
//                }
//
//                procs.process(Backward) {
//                }
//
//
//            }
//        }


    }

    suspend fun next() {
        path.boot.loadNextSong(isPlaying)
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

    suspend fun dontLike() {
        boot.userSongs.current.now.item?.let { us ->
            us.dontLike(playable.id)
            next()
        }
    }

    suspend fun nextTrack() { next() }

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
        path.boot.userSongs.current.now.item?.let { us ->
            us.like(playable.id)
        }
    }

    val isPlaying get() = playState.current.now.isPlaying

    suspend fun playOrPause() {
        if (isPlaying) {
            playState.switchTo(Paused(this))
        } else {
            playState.switchTo(Playing(this))
        }
    }
    suspend fun play() = playOrPause()
    suspend fun pause() = playOrPause()

}