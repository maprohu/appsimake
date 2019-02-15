package music.player

import bootstrap.*
import common.obj
import common.toOptional
import commonshr.*
import commonui.faButtonSpan
import commonui.widget.*
import commonui.widget.Slot
import domx.*
import fontawesome.*
import killable.KillSet
import killable.addedTo
import mediasession.MediaMetadata
import mediasession.mediaSession
import mediasession.mediaSessionSupported
import music.Playable
import musiclib.UserSongState
import musiclib.fixedArtist
import musiclib.fixedTitle
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.Node
import rx.Rx
import rx.rxClass
import styles.scrollVertical
import kotlin.browser.document
import kotlin.browser.window
import kotlin.math.floor

data class AritstTitle(
    val artist: String,
    val title: String
)

fun Visible.ui() = Factory().run {



    val totalDurationText = rx { totalDuration().formatSecs }
    val totalDurationTextLength = rx { totalDurationText().length }
    val currentPositionText = rx { currentPosition().formatSecs.padStart(totalDurationTextLength(), ' ') }
    val likeButtonsDisabled = rx { userSong() == null }
    val state = userSong

    val artistTitle = rx {
        AritstTitle(
            tag().fixedArtist().getOrDefault("<unkown artist>"),
            tag().fixedTitle().getOrDefault("<unkown title>")
        )
    }

    val artist = rx { artistTitle().artist }
    val title = rx { artistTitle().title }

    if (mediaSessionSupported) {
        window.navigator.mediaSession.apply {
            artistTitle.forEach { at ->
                metadata = MediaMetadata(
                    obj {
                        this.artist = at.artist
                        this.title = at.title
                    }
                )
            }

            setActionHandler("play") {
                uix { p?.play() }
            }
            setActionHandler("pause") {
                uix { p?.pause() }
            }
            setActionHandler("seekbackward") {
                uix { p?.backward() }
            }
            setActionHandler("seekforward") {
                uix { p?.forward() }
            }
            setActionHandler("previoustrack") {
                uix { p?.previousTrack() }
            }
            setActionHandler("nexttrack") {
                uix { p?.nextTrack() }
            }

        }
    }

    wraps.div {
        cls {
            borderTop
            bgLight
            flexFixedSize()
        }
        fun Node.mediaButton(
            faClass: String,
            btnClass: String? = Cls.btnOutlinePrimary,
            fn: HTMLButtonElement.() -> Unit
        ) {
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
                    rxText(kills) { "${artist()} - ${title()}" }
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
                    rxText(kills) {
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
                    click {
                        p?.playOrPause()
                    }
                }
            }
            div {
                cls {
                    m1
                    btnGroup
                }
                mediaButton(Fa.stepBackward) {
                    rxEnabled(kills) { currentPosition() != 0 || playing() }
                    click {
                        p?.previousTrack()
                    }
                }
                mediaButton(Fa.backward) {
                    cls {
                        btnOutlinePrimary
                    }
                    rxEnabled(kills) { currentPosition() != 0 || playing() }
                    click {
                        p?.backward()
                    }
                }
                mediaButton(Fa.forward) {
                    cls {
                        btnOutlinePrimary
                    }
                    click {
                        p?.forward()
                    }
                }
                mediaButton(Fa.stepForward) {
                    cls {
                        btnOutlinePrimary
                    }
                    click {
                        p?.nextTrack()
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
                    click {
                        p?.like()
                    }
                }
                mediaButton(Fa.thumbsDown, null) {
                    likeButtonsDisabled.forEach { disabled = it }
                    rxClass {
                        if (state() == UserSongState.DontLike) Cls.btnPrimary
                        else Cls.btnOutlinePrimary
                    }
                    click {
                        p?.dontLike()
                    }
                }
            }

        }

    }


}.node
