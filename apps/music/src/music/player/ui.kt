package music.player

import bootstrap.*
import commonui.faButtonSpan
import domx.*
import fontawesome.*
import music.PlayerFrame
import musiclib.UserSongState
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import rx.Rx
import rx.rxClass
import styles.scrollVertical
import kotlin.browser.document
import kotlin.math.floor

fun PlayerBind.ui(): Node {

    fun formatSecs(s: Int): String {
        val mins = s / 60.0
        val minPart = floor(mins)
        val secPart = mins - minPart
        val secString = ((secPart * 60).toInt() + 100).toString().substring(1)
        val minString = minPart.toInt().toString()

        return "$minString:$secString"
    }

    val totalDurationText = Rx { formatSecs(totalDuration()) }
    val totalDurationTextLength = Rx { totalDurationText().length }
    val currentPositionText = Rx { formatSecs(currentPosition()).padStart(totalDurationTextLength(), ' ') }
    val likeButtonsDisabled = Rx { !hasUserDB() || stateLoading() }

    return document.div {
        cls {
            borderTop
            bgLight
            flexFixedSize()
        }
        fun Node.mediaButton(faClass: String, btnClass: String? = Cls.btnOutlinePrimary, fn: HTMLButtonElement.() -> Unit) {
            button {
                cls {
                    btn
                }
                btnClass?.let { classes += it }
                faButtonSpan(faClass) {
                    cls.fa.x2
                }
                fn()
            }

        }
        row {
            cls {
                justifyContentCenter
            }
            div {
                cls {
                    m1
                    p1
                    px2
                    border
                    borderPrimary
                    rounded
                    textPrimary
                    scrollVertical
                    dFlex
                    alignItemsCenter
                }
                span {
                    rxText { "${artist()} - ${title()}" }
                }
            }
            div {
                cls {
                    border
                    borderPrimary
                    rounded
                    m1
                    p2
                    flexCenter()
                }
                pre {
                    cls {
                        m0
                        textPrimary
                    }
                    rxText {
                        "${currentPositionText()} / ${totalDurationText()}"
                    }
                }
            }

        }
        row {
            cls {
                flexWrap
                justifyContentCenter
            }
            div {
                cls {
                    m1
                    btnGroup
                }
                button {
                    cls {
                        btn
                        btnOutlinePrimary
                    }
                    faButtonSpan {
                        cls.fa.x2
                        rxClass {
                            if (playing()) {
                                Fa.pause
                            } else {
                                Fa.play
                            }
                        }
                    }
                    clickEvent {
                        post(PlayerFrame.Event.PlayOrPause)
                    }
                }
            }
            div {
                cls {
                    m1
                    btnGroup
                }
                mediaButton(Fa.stepBackward) {
                    rxEnabled { currentPosition() != 0 || playing() }
                    clickEvent {
                        post(PlayerFrame.Event.Beginning)
                    }
                }
                mediaButton(Fa.backward) {
                    cls {
                        btnOutlinePrimary
                    }
                    rxEnabled { currentPosition() != 0 || playing() }
                    clickEvent {
                        post(PlayerFrame.Event.Backward)
                    }
                }
                mediaButton(Fa.forward) {
                    cls {
                        btnOutlinePrimary
                    }
                    clickEvent {
                        post(PlayerFrame.Event.Forward)
                    }
                }
                mediaButton(Fa.stepForward) {
                    cls {
                        btnOutlinePrimary
                    }
                    clickEvent {
                        post(PlayerFrame.Event.End)
                    }
                }

            }
            div {
                cls {
                    m1
                    btnGroup
                }
                mediaButton(Fa.thumbsUp, null) {
                    likeButtonsDisabled.forEach { disabled = it }
                    rxClass {
                        if (state() == UserSongState.Like) Cls.btnPrimary
                        else Cls.btnOutlinePrimary
                    }
                    clickEvent {
                        post(PlayerFrame.Event.Like)
                    }
                }
                mediaButton(Fa.thumbsDown, null) {
                    likeButtonsDisabled.forEach { disabled = it }
                    rxClass {
                        if (state() == UserSongState.DontLike) Cls.btnPrimary
                        else Cls.btnOutlinePrimary
                    }
                    clickEvent {
                        post(PlayerFrame.Event.DontLike)
                    }
                }
            }

        }

    }

}
