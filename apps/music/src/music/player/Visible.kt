package music.player

import common.listen
import commonshr.*
import commonui.widget.*
import domx.audio
import domx.invoke
import firebaseshr.saveIfDirty
import killable.KillSet
import killable.addedTo
import killable.plusAssign
import killable.seq
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import music.Playable
import music.boot.Boot
import music.boot.BootPath
import musiclib.Mp3File
import musiclib.UserSong
import musiclib.UserSongState
import org.w3c.dom.Node
import org.w3c.dom.url.URL
import rx.Rx
import rx.Var
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
): Player(path.boot) {
    val boot = path.boot

    val tag = Mp3File()
    val playing = Var(false)
    val totalDuration = Var(0)
    val currentPosition = Var(0)

    override val rawView = ui()

    val playState = switch<PlayState>(Paused(this))


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

//    fun nextProc(kills: KillSet, startPlaying: Boolean): ProcOrElse {
//        suspend fun next() {
//            player.next(startPlaying)
//        }
//        return with (playable) {
//            procOrElses().apply {
//                add.process(DontLike) {
//                    boot.userSongs.now?.let { us ->
//                        us.dontLike(playable.id)
//                        next()
//                    }
//                }
//                add.process(Forward) {
//                    val newPos = audio.currentTime + SeekSeconds
//
//                    if (newPos >= audio.duration) {
//                        next()
//                    } else {
//                        audio.currentTime = newPos
//                        readCounterNow()
//                    }
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


    fun plx(fn: suspend PlayState.() -> Unit) = playState.current.now.let { p -> p.exec { p.fn() } }
    fun playOrPause() = plx { playOrPause() }
    fun play() = playOrPause()
    fun pause() = playOrPause()
    fun backward() = plx { backward() }
    fun forward() = plx { forward() }
    fun previousTrack() = plx { previousTrack() }
    fun nextTrack() = plx { nextTrack() }
    fun like() = plx { like() }
    fun dontLike() = plx { dontLike() }

}