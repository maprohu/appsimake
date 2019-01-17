package gymclock

import animate.AnimateOptions
import animate.ElementAnimate
import bootstrap.*
import common.*
import commonui.faButton
import commonui.faButtonSpan
import commonui.screenLayout
import domx.*
import fontawesome.*
import killable.Killable
import killable.KillableSeq
import killable.Killables
import org.w3c.dom.HTMLAudioElement
import org.w3c.dom.HTMLDivElement
import rx.Var
import rx.rxClass
import styles.pointerEventsNone
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Date
import kotlin.math.floor
import kotlin.math.min

object Clock {

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


    fun show() {
        val ks = Killables()

        ks += Main.appCtx.keepAwake()

        Main.appCtx.root.newRoot {
            screenLayout(ks) {

                top {
                    leftButton {
                        cls {
                            m1
                        }
                        clickEvent {
                            ks.kill()
                            Form.show()
                        }
                        faButtonSpan(Fa.chevronLeft) {
                            cls.fa.x3
                        }
                    }
                    middleTitle {
                        innerText = Main.appCtx.title
                    }
                    right {
                        btnButton {
                            cls {
                                m1
                                btnPrimary
                            }
                            faButtonSpan {
                                cls.fa.x3

                                ks += rxClass {
                                    if (Model.sounds()) {
                                        Fa.volumeUp
                                    } else {
                                        Fa.volumeMute
                                    }
                                }
                            }
                            clickEvent {
                                Model.sounds.transform { s -> !s }
                            }
                        }
                    }
                }

                main {
                    ks += timer(this)
                }
            }
        }
    }


    private fun createAudio(name: String): HTMLAudioElement {
        return document.audio {
            source {
                src = res("audio/$name.mp3")
                type = "audio/mpeg"
            }
            source {
                src = res("audio/$name.m4r")
                type = "audio/x-m4r"
            }
        }
    }

    val prepareAudio = createAudio("exquisite")
    val workAudio = createAudio("definite")
    val restAudio = createAudio("not-bad")


    fun timer(
        timerDiv: HTMLDivElement
    ): Killable {
        val killables = Killables()

        timerDiv.apply {
            cls {
                positionRelative
            }
        }

        val counter = Var(-1)

        val colorDivClass = Var(Cls.bgTransparent)
        val colorDiv = timerDiv.div {
            cls {
                positionAbsolute
            }
            rxClass(colorDivClass)
            style.apply {
                left = "0"
                right = "0"
                bottom = "0"
                top = "100%"
            }
        }

        timerDiv.div {
            cls {
                w100
                h100
                positionAbsolute
                dFlex
                justifyContentCenter
                alignItemsCenter
            }
            span {
                killables += window.resizeEvent {
                    val fs = "${with(timerDiv) { min(offsetWidth, offsetHeight) * 0.6 }.toInt() }px"
                    style.fontSize = fs
                }
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
                Cls.bgWarning,
                restAudio
            )
        ).nonZeroes().toPhaseList()

        val repeatPhases = listOf(
            Phase(
                Model.work.now,
                Cls.bgSuccess,
                workAudio
            ),
            Phase(
                Model.rest.now,
                Cls.bgWarning,
                restAudio
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
                    if (Model.sounds.now) {
                        first.audio.replay()
                    }
                    counter.now = first.length
                } else {
                    counter.now = c
                    if (Model.sounds.now && c in 1..3) {
                        prepareAudio.replay()
                    }
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