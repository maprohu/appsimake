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
import musiclib.UserSong
import musiclib.UserSongState
import org.w3c.dom.url.URL
import rx.Rx
import rx.Var
import rx.toChannel
import kotlin.browser.document
import kotlin.math.max


private const val SeekSeconds = 15.0

open class VisibleWrap(
    val visible: Visible
): PlayerWrap(visible.player)

class Visible(
    player: Player,
    val playable: Playable,
    startPlaying: Boolean
): PlayerWrap(player) {
    private val procs = player.visibleProc.assignProcAdd()

    val kills = player.kseq.killSet()

    val audio = document.audio {
        with (player.bind) {
            kills += listen("durationchange") {
                totalDuration.now = duration.toInt()
            }
            currentPosition.now = 0
        }
        src = URL.createObjectURL(playable.blob)
        kills += {
            URL.revokeObjectURL(src)
        }
        load()
    }

    fun readCounterNow() {
        player.bind.currentPosition.now = audio.currentTime.toInt()
    }

    val stateSeq = kills.seq()
    val stateProc = procs.addProcAssign()
    val userSong = Var(UserSongState.New).also {
        kills += it.forEach { us ->
            player.bind.userSong.now = us
        }
    }

    fun UserSong.saveState(st: UserSongState) {
        state.cv = st
        saveIfDirty()
    }
    fun UserSong.dontLike() {
        saveState(UserSongState.DontLike)
    }

    fun nextProc(kills: KillSet, startPlaying: Boolean): ProcOrElse {
        suspend fun next() {
            player.next(startPlaying)
        }
        return with (playable) {
            procOrElses().apply {
                add.process(DontLike) {
                    boot.userSongs.now?.let { us ->
                        us.dontLike(playable.id)
                        next()
                    }
                }
                add.process(Forward) {
                    val newPos = audio.currentTime + SeekSeconds

                    if (newPos >= audio.duration) {
                        next()
                    } else {
                        audio.currentTime = newPos
                        readCounterNow()
                    }

                }
                add.process(End) {
                    next()
                }
            }.proc
        }

    }


    init {
        GlobalScope.launch {
            kills += boot.songInfoSource(playable.id, playable.blob).forEach {
                player.bind.tag.now = it
            }
        }.addedTo(kills)

        if (startPlaying) {
            Playing(this)
        } else {
            Paused(this)
        }

        with (player) {
            Rx {
                boot.userSongs()?.let { us ->
                    us.get(playable.id)()
                } ?: UserSongState.New
            }.addedTo(kills).forEach {
                userSong.now = it
            }

            bind.playable.now = playable

            with (playable) {
                procs.process(Like) {
                    boot.userSongs.now?.let { us ->
                        us.like(playable.id)
                    }
                }

                procs.process(Beginning) {
                    audio.currentTime = 0.0
                    readCounterNow()
                }

                procs.process(Backward) {
                    audio {
                        currentTime = max(0.0, currentTime - SeekSeconds)
                    }
                    readCounterNow()
                }


            }
        }


    }
}