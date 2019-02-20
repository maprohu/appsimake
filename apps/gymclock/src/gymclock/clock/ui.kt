package gymclock.clock

import animate.AnimateOptions
import animate.ElementAnimate
import commonshr.*
import commonui.widget.*
import domx.*
import bootstrap.*
import common.dyn
import common.obj
import common.resizeEvent
import fontawesome.*
import rx.Var
import kotlin.browser.window
import kotlin.math.min

fun Clock.ui() = factory.screen {

    topbar {
        left.button {
            back
            fa.x3
            click {
                form.back()
            }
        }
        title %= "Workout"
        right {
            button {
                m1p2
                secondary
                fa.x3
                icon.rxClass {
                    if (model.sounds()) {
                        Fa.volumeUp
                    } else {
                        Fa.volumeMute
                    }
                }

                click {
                    model.sounds.transform { !it }
                }
            }
        }
    }

    main.insert.wraps.div {
        val timerDiv = this

        cls {
            flexGrow1
            positionRelative
        }

        div {
            cls {
                positionAbsolute
            }
            rxClass { colorDivClass() }
            style.apply {
                left = "0"
                right = "0"
                bottom = "0"
                top = "100%"
            }
            animation += { ad ->
                this.unsafeCast<ElementAnimate>().apply {
                    animate(
                        dyn {
                            top = arrayOf("0%", "100%")
                        },
                        obj<AnimateOptions> {
                            duration = ad.length * 1000
                            iterationStart = ad.startPercent
                        }
                    )
                }
            }
        }

        div {
            cls {
                w100
                h100
                positionAbsolute
                dFlex
                justifyContentCenter
                alignItemsCenter
            }
            span {
                kills += window.resizeEvent {
                    val fs = "${with(timerDiv) { min(offsetWidth, offsetHeight) * 0.6 }.toInt()}px"
                    style.fontSize = fs
                }
                counter.forEach {
                    innerText = it.toString()
                }
            }
        }
    }
}.node