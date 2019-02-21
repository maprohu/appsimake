package music.import

import bootstrap.*
import commonshr.*
import commonui.faButtonSpan
import commonui.webkitdirectorySupported
import commonui.widget.*
import domx.*
import fontawesome.*
import fontawesome.folderOpen
import kotlinx.coroutines.cancel
import musiclib.UserSongState
import musiclib.fixedArtist
import musiclib.fixedTitle
import org.w3c.dom.asList
import kotlin.browser.document
import kotlin.math.roundToInt

fun Import.ui() = TopAndContent(
    topbar = factory.topbar {
        left.button {
            back
            click {
                from.back()
            }
        }
        title %= "Import MP3s"
        val inputContainer = node
        right.tasksUi { path.boot.tasks.pending() + loader.pending() }
        right.buttonGroup {
            m1
            if (webkitdirectorySupported) {
                inputContainer.input {
                    cls {
                        dNone
                    }
                    type = "file"
                    this.asDynamic().webkitdirectory = true
                    multiple = true
                    accept = "audio/mpeg"
                    onchange = {
                        this@input.files?.let { fl ->
                            val list = fl.asList().toList()
                            uix {
                                load(list)
                            }
                        }
                        value = ""
                        Unit
                    }
                }.also { inp ->
                    node.label {
                        htmlFor = inp.ref
                        faButtonSpan {
                            cls.fa.folderOpen
                        }
                        cls {
                            btn
                            btnPrimary
                            m0
                        }
                    }
                }
            }
            inputContainer.input {
                cls {
                    dNone
                }
                type = "file"
                multiple = true
                accept = "audio/mpeg"
                onchange = {
                    this@input.files?.let { fl ->
                        val list = fl.asList().toList()
                        uix {
                            load(list)
                        }
                    }
                    value = ""
                    Unit
                }
            }.also { inp ->
                node.label {
                    htmlFor = inp.ref
                    faButtonSpan {
                        cls.fa.file
                    }
                    cls {
                        btn
                        btnPrimary
                        m0
                    }
                }
            }
        }
        right.dropdown {
            bars
            right
            menu {
                item {
                    node.rxClass(Cls.disabled) { loadable.isEmptyRx() }
                    fa.fileImport
                    text %= "Start Importing"
                    click {
                        startImporting()
                    }
                }
                item {
                    node.rxClass(Cls.disabled) { loadList.isEmptyRx() }
                    fa.trashAlt
                    text %= "Clear List"
                    click {
                        clear()
                    }
                }
            }
        }
    }.node,
    content = factory.scrollPane {
        cls {
            p1
            flexColumn
        }

        pane.listenableList(
            kills,
            loadList
        ) { i -> i.rawView }
    }.node
)


fun ImportFile.ui() = document.div {
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

        dt %= "Filename"
        dd %= file.name

        dt %= "Artist"
        dd %= { tag.fixedArtist().getOrDefault("<unknown>") }

        dt %= "Title"
        dd %= { tag.fixedTitle().getOrDefault("<unknown>") }

        dt %= "Size"
        dd %= "${file.size.groupThousands} bytes"

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
            button {
                p2
                secondary
                fa.play
                click {
                    path.boot.play(playable)
                }
            }
            button {
                p2
                fa.thumbsUp
                node.rxClass {
                    if (state() == UserSongState.Like) Cls.btnPrimary
                    else Cls.btnSecondary
                }
                click {
                    path.boot.like(playable.id)
                }
            }
            button {
                p2
                secondary
                fa.thumbsDown
                click {
                    path.boot.dontLike(playable.id)
                }
            }
            button {
                p2
                secondary
                fa.fileImport
                rxEnabled { !importing() }
                click {
                    startImporting()
                }
            }
            button {
                p2
                secondary
                fa.ban
                click {
                    coroutineContext.cancel()
                }
            }

        }
    }


}