package gymclock

import animate.AnimateOptions
import animate.ElementAnimate
import bootstrap.*
import common.dyn
import common.obj
import commonui.screenLayout
import domx.*
import killable.Killable
import killable.KillableSeq
import killable.Killables
import org.w3c.dom.HTMLDivElement
import rx.Var
import rx.rxClass
import styles.pointerEventsNone
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Date
import kotlin.math.ceil
import kotlin.math.floor

object Clock {

    class Phase(
        val length: Int,
        val style: String
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


    fun show() {
        val killables = Killables()

        Main.appCtx.root.newRoot {
            screenLayout {

                top {
                    leftButton {
                        innerText = "Cancel"
                        clickEvent {
                            killables.kill()
                            Form.show()
                        }
                    }
                    middleTitle {
                        innerText = Main.appCtx.title
                    }
                    right {
                        btnButton {
                            margin1()
                            flexRow()
                            flexAlignItemsCenter()
                            btnSecondary()
                            checkbox {
                                marginRight2()
                                pointerEventsNone()
                                killables += Model.sounds.forEach {
                                    checked = it
                                }
                            }
                            span {
                                innerText = "Sounds"
                            }
                            clickEvent {
                                Model.sounds.now = !Model.sounds.now
                            }
                        }
                    }
                }

                main {
                    killables += timer(this)
                }
            }
        }
    }

    fun timer(
        timerDiv: HTMLDivElement
    ): Killable {
        val killables = Killables()

        timerDiv.apply {
            positionRelative()

        }

        val counter = Var(-1)

        val colorDivClass = Var(bgTransparent)
        val colorDiv = timerDiv.div {
            positionAbsolute()
            rxClass(colorDivClass)
            style.apply {
                left = "0"
                right = "0"
                bottom = "0"
                top = "100%"
            }
        }

        timerDiv.div {
            fullSize()
            positionAbsolute()
            flexCenter()
            span {
                style.fontSize = "52vmin"
                counter.forEach {
                    innerText = it.toString()
                }
            }
        }

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
                Model.delay.now,
                bgWarning
            )
        ).nonZeroes().toPhaseList()

        val repeatPhases = listOf(
            Phase(
                Model.work.now,
                bgSucess
            ),
            Phase(
                Model.rest.now,
                bgWarning
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

        val seq = KillableSeq().also { killables += it }

        fun start() : () -> Unit {
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
                colorDiv.unsafeCast<ElementAnimate>().apply {
                    animate(
                        dyn {
                            top = arrayOf("0%", "100%")
                        },
                        obj<AnimateOptions> {
                            duration = length * 1000
                            iterationStart = startPercent
                        }
                    )
                }
            }

            phases.first.applyStyle(percent)

            val next = phases.phases.iterator()

            fun step() {
                val c = counter.now - 1

                if (c == 0) {
                    val first = next.next()
                    first.applyStyle()
                    counter.now = first.length
                } else {
                    counter.now = c
                }
            }

            val initDelay = ((firstSecond+1-phases.start) * 1000).toInt()
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

        killables += Main.appCtx.visible.forEach { vis ->
            seq.set(if (vis) start() else ({}))
        }

        return killables
    }
}