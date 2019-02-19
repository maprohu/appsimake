package music.common

import bootstrap.*
import commonfb.CommonFbApi
import commonshr.*
import commonui.faButtonSpan
import commonui.webkitdirectorySupported
import commonui.widget.*
import domx.*
import fontawesome.*
import fontawesome.folderOpen
import killable.HasKillSet
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.cancel
import music.Playable
import music.boot.Boot
import music.loggedin.LoggedIn
import musiclib.Mp3File
import musiclib.UserSongState
import musiclib.fixedArtist
import musiclib.fixedTitle
import org.w3c.dom.asList
import org.w3c.files.Blob
import org.w3c.files.File
import kotlin.browser.document
import kotlin.math.roundToInt

fun CommonFbApi.songUi(
    id: String,
    fileName: String?,
    blob: HasKillSet.() -> (suspend () -> Blob?)?,
    loggedIn: LoggedIn,
    bgfn: ButtonGroup.() -> Unit
) = document.div {
    val boot = loggedIn.path.boot
    val tag = loggedIn.songInfoSource(id) { blob()?.invoke() }

    cls {
        m1
        p1
        border
        rounded
        dFlex
        flexColumn
    }
    dl {
        cls.m1

        fileName?.let { fn ->
            dt %= "Filename"
            dd %= fn
        }

        dt %= "Artist"
        dd %= { tag.fixedArtist().getOrDefault("<unknown>") }

        dt %= "Title"
        dd %= { tag.fixedTitle().getOrDefault("<unknown>") }

        dt %= "Size"
        dd %= { tag.bytes.initial().map { it.groupThousands }.getOrDefault("<unknown>") }

        dt %= "Duration"
        dd %= { tag.secs.initial().map { it.roundToInt().formatSecs }.getOrDefault("<unknown>") }
    }
    div {
        cls {
            dFlex
            flexRow
            justifyContentEnd
        }
        widget.insert.buttonGroup {
            m1
            val bl = rx { blob() }
            button {
                visible { bl() != null }
                p2
                secondary
                fa.play
                click {
                    bl.now?.invoke()?.let { b ->
                        boot.play(
                            Playable(id, b)
                        )
                    }
                }
            }
            button {
                p2
                fa.thumbsUp
                node.rxClass {
                    if (loggedIn.userSongs.get(id)() == UserSongState.Like) Cls.btnSuccess
                    else Cls.btnSecondary
                }
                click {
                    boot.like(id)
                }
            }
            button {
                p2
                secondary
                fa.thumbsDown
                node.rxClass {
                    if (loggedIn.userSongs.get(id)() == UserSongState.DontLike) Cls.btnSuccess
                    else Cls.btnSecondary
                }
                click {
                    boot.dontLike(id)
                }
            }

            bgfn()
        }
    }


}

