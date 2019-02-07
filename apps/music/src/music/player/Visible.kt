package music.player

import common.listen
import commonui.*
import domx.audio
import domx.invoke
import firebaseshr.saveIfDirty
import killable.KillSet
import killable.plusAssign
import killable.seq
import music.Playable
import musiclib.UserSong
import musiclib.UserSongState
import rx.Var
import rx.toChannel
import kotlin.browser.document
import kotlin.math.max


open class VisibleWrap(
    val visible: Visible
): PlayerWrap(visible.player)

class Visible(
    player: Player,
    val playable: Playable,
    startPlaying: Boolean
): PlayerWrap(player) {
    private val procs = player.proc.assignProcAdd()

    val kills = player.kseq.killSet()

    val audio = document.audio {
        with (player.bind) {
            kills += listen("durationchange") {
                totalDuration.now = duration.toInt()
            }
            currentPosition.now = 0
        }
        src = playable.url
        load()
    }

    fun readCounterNow() {
        player.bind.currentPosition.now = audio.currentTime.toInt()
    }

    val stateSeq = kills.seq()
    val stateProc = procs.addProcAssign()
    val userSong = Var<UserSong?>(null).also {
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
        fun next() {
            player.next(startPlaying)
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

        with (player) {

            procs += bind.inbox.channel(kills, boot.usdb.toChannel(kills)) { udb ->
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