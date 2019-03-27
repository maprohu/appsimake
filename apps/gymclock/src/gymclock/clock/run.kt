package gymclock.clock

import commonui.browserVisible
import bootstrap.*
import domx.*
import kotlin.browser.window
import kotlin.js.Date
import kotlin.math.floor
import gymclock.clock.Clock.*
import commonshr.*
import commonui.keepScreenAwake

fun Clock.run() {
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

    fun PhaseList.startState(start: Double): StartState {
        val remaining = phases.dropWhile { it.end <= start }
        val first = remaining.first()
        return StartState(
            start = start - first.start,
            first = first.phase,
            phases = remaining.drop(1).map { it.phase }.asSequence()
        )
    }

    rx { isActiveView() }.forEach { act ->
        if (act) {
            val init = listOf(
                Phase(
                    model.delay.now,
                    Cls.bgWarning,
                    sounds.rest
                )
            ).nonZeroes().toPhaseList()

            val repeatPhases = listOf(
                Phase(
                    model.work.now,
                    Cls.bgSuccess,
                    sounds.work
                ),
                Phase(
                    model.rest.now,
                    Cls.bgWarning,
                    sounds.rest
                )
            ).nonZeroes()
            val repeat = repeatPhases.toPhaseList()


            val started = Date().getTime()

            rx { browserVisible() }.forEach { vis ->
                if (vis) {
                    keepAwake.keepScreenAwake()

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
                                sounds.prepare.replay()
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
                                kills += { window.clearInterval(it) }
                            }
                        },
                        initDelay
                    ).also {
                        kills += { window.clearTimeout(it) }
                    }
                }
            }
        }
    }

}