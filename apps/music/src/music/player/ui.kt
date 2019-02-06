package music.player

import bootstrap.*
import common.obj
import common.toOptional
import commonui.faButtonSpan
import commonui.plusAssign
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

fun Bind.ui(
    kills: KillSet
): Node {

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
    val likeButtonsDisabled = Rx { userSong() == null }
    val state = Rx { userSong()?.let { us -> us.state.initial().getOrDefault(UserSongState.New) } ?: UserSongState.New }

    val tag = Rx { playable()?.tag.toOptional() }

    val artistTitle = Rx {
        val opt = tag()

        AritstTitle(
            opt.flatMap { t -> t.fixedArtist() }.getOrDefault("<unkown artist>"),
            opt.flatMap { t -> t.fixedTitle() }.getOrDefault("<unkown title>")
        )
    }.addedTo(kills)

    val artist = Rx { artistTitle().artist }
    val title = Rx { artistTitle(). title }

    fun withPlayable(fn: Playable.() -> Unit) {
        val p = playable.now
        if (p != null) {
            fn(p)
        }
    }

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

            playable.forEach { p ->
                if (p != null) {
                    with(p) {
                        setActionHandler("play") {
                            inbox += PlayOrPause
                        }
                        setActionHandler("pause") {
                            inbox += PlayOrPause
                        }
                        setActionHandler("seekbackward") {
                            inbox += Backward
                        }
                        setActionHandler("seekforward") {
                            inbox += Forward
                        }
                        setActionHandler("previoustrack") {
                            inbox += Beginning
                        }
                        setActionHandler("nexttrack") {
                            inbox += End
                        }
                    }
                }
            }

        }
    }

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
                        withPlayable {
                            inbox += (PlayOrPause)
                        }
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
                        withPlayable {
                            inbox += (Beginning)
                        }
                    }
                }
                mediaButton(Fa.backward) {
                    cls {
                        btnOutlinePrimary
                    }
                    rxEnabled { currentPosition() != 0 || playing() }
                    clickEvent {
                        withPlayable {
                            inbox += (Backward)
                        }
                    }
                }
                mediaButton(Fa.forward) {
                    cls {
                        btnOutlinePrimary
                    }
                    clickEvent {
                        withPlayable {
                            inbox += (Forward)
                        }
                    }
                }
                mediaButton(Fa.stepForward) {
                    cls {
                        btnOutlinePrimary
                    }
                    clickEvent {
                        withPlayable {
                            inbox += (End)
                        }
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
                        withPlayable {
                            inbox += (Like)
                        }
                    }
                }
                mediaButton(Fa.thumbsDown, null) {
                    likeButtonsDisabled.forEach { disabled = it }
                    rxClass {
                        if (state() == UserSongState.DontLike) Cls.btnPrimary
                        else Cls.btnOutlinePrimary
                    }
                    clickEvent {
                        withPlayable {
                            inbox += (DontLike)
                        }
                    }
                }
            }

        }

    }

}
