package gymclock.clock

import bootstrap.*
import common.*
import commonui.widget.UIBase
import domx.*
import fontawesome.*
import gymclock.form.Form
import gymclock.form.FormPath
import killable.KillableSeq
import killable.Killables
import killable.seq
import org.w3c.dom.HTMLAudioElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import rx.Var
import rx.rxClass
import styles.pointerEventsNone
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Date
import kotlin.math.floor
import kotlin.math.min
import animate.*
import commonshr.Trigger
import commonui.*

interface ClockPath: FormPath {
    val clock: Clock
}

class Clock(
    override val from: Form
): UIBase<HTMLElement>(from), ClockPath, FormPath by from, FromKillsUixApi, HasHistoryKillsRedisplay {
    override val clock = this

    val sounds = form.sounds
    val model = form.model

    class Phase(
        val length: Int,
        val style: String,
        val audio: HTMLAudioElement
    )

    class PhasePos(
        val start: Int,
        val end: Int,
        val phase: Phase
    )

    data class PhaseList(
        val phases: List<PhasePos> = listOf(),
        val length: Int = 0
    )

    data class StartState(
        val start: Double,
        val first: Phase,
        val phases: Sequence<Phase>
    )

    val counter = Var(-1)

    val colorDivClass = Var(Cls.bgTransparent)

    class AnimationData(
        val length: Int,
        val startPercent: Double
    )
    val animation = Emitter<AnimationData>()

    override val rawView = ui()

    override val redisplay = {} // TODO

    init {
        historyItem

        fun List<Phase>.nonZeroes() = filter { it.length > 0 }
        fun List<Phase>.toPhaseList(): PhaseList {
            return this.fold(PhaseList()) { list, phase ->
                val end = list.length + phase.length
                PhaseList(
                    list.phases + PhasePos(list.length, end, phase),
                    end
                )
            }
        }

        val init = listOf(
            Phase(
                model.delay.now,
                Cls.bgWarning,
                sounds.restAudio
            )
        ).nonZeroes().toPhaseList()

        val repeatPhases = listOf(
            Phase(
                model.work.now,
                Cls.bgSuccess,
                sounds.workAudio
            ),
            Phase(
                model.rest.now,
                Cls.bgWarning,
                sounds.restAudio
            )
        ).nonZeroes()
        val repeat = repeatPhases.toPhaseList()


        fun PhaseList.startState(start: Double): StartState {
            val remaining = phases.dropWhile { it.end <= start }
            val first = remaining.first()
            return StartState(
                start = start - first.start,
                first = first.phase,
                phases = remaining.drop(1).map { it.phase }.asSequence()
            )
        }

        val started = Date().getTime()

        val seq = kills.seq()

        fun start(): () -> Unit {
            val running = Killables()

            val passed = (Date().getTime() - started) / 1000.0

            val phases = if (passed < init.length) {
                init.startState(passed)
            } else {
                val inRepeat = (passed - init.length) % repeat.length
                repeat.startState(inRepeat)
            }.let {
                it.copy(
                    phases = it.phases + generateSequence { repeatPhases.asSequence() }.flatten()
                )
            }


            val firstSecond = floor(phases.start).toInt()
            counter.now = phases.first.length - firstSecond
            val percent = phases.start / phases.first.length

            fun Phase.applyStyle(startPercent: Double = 0.0) {
                colorDivClass.now = style
                animation.emit(
                    AnimationData(
                        length,
                        startPercent
                    )
                )
            }

            phases.first.applyStyle(percent)

            val next = phases.phases.iterator()

            fun step() {
                val c = counter.now - 1

                if (c == 0) {
                    val first = next.next()
                    first.applyStyle()
                    if (model.sounds.now) {
                        first.audio.replay()
                    }
                    counter.now = first.length
                } else {
                    counter.now = c
                    if (model.sounds.now && c in 1..3) {
                        sounds.prepareAudio.replay()
                    }
                }
            }

            val initDelay = ((firstSecond + 1 - phases.start) * 1000).toInt()
            window.setTimeout(
                {
                    step()
                    window.setInterval(
                        {
                            step()
                        },
                        1000
                    ).also {
                        running += { window.clearInterval(it) }
                    }
                },
                initDelay
            ).also {
                running += { window.clearTimeout(it) }
            }

            return { running.kill() }
        }

        browserVisible.forEach { vis ->
            seq.set(if (vis) start() else ({}))
        }

        keepScreenAwake()
    }



}

