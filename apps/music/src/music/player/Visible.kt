package music.player

import common.Some
import common.listen
import commonui.*
import domx.audio
import domx.invoke
import firebaseshr.saveIfDirty
import killable.KillSet
import killable.plusAssign
import killable.seq
import music.Playable
import musiclib.Mp3File
import musiclib.UserSong
import musiclib.UserSongState
import rx.Var
import rx.toChannel
import kotlin.browser.document
import kotlin.math.max


class Visible(
    val control: Control,
    val playable: Playable,
    startPlaying: Boolean
) {
    private val procs = control.proc.assignProcAdd()

    val kills = control.kseq.killSet()

    val audio = document.audio {
        with (control.bind) {
            kills += listen("durationchange") {
                totalDuration.now = duration.toInt()
            }
            currentPosition.now = 0
        }
        src = playable.url
        load()
    }

    fun readCounterNow() {
        control.bind.currentPosition.now = audio.currentTime.toInt()
    }

    val stateSeq = kills.seq()
    val stateProc = procs.addProcAssign()
    val userSong = Var<UserSong?>(null).also {
        kills += it.forEach { us ->
            control.bind.userSong.now = us
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
        fun next() {
            control.next(startPlaying)
        }
        return with (playable) {
            procOrElses().apply {
                add += rxProcIf(kills, userSong) { us ->
                    procOrElse(DontLike) {
                        us.dontLike()
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
        kills += playable

        if (startPlaying) {
            Playing(this)
        } else {
            Paused(this)
        }

        with (control) {

            procs += bind.inbox.channel(kills, usdb.toChannel(kills)) { udb ->
                userSong.now = udb?.let { it.get(playable.id) }
            }
            bind.playable.now = playable

            with (playable) {
                procs += rxProcIf(kills, userSong) { us ->
                    procOrElse(Like) {
                        us.saveState(UserSongState.Like)
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