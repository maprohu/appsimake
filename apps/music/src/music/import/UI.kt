package music.import

import bootstrap.*
import commonshr.*
import commonui.faButtonSpan
import commonui.webkitdirectorySupported
import commonui.widget.*
import domx.*
import fontawesome.*
import fontawesome.folderOpen
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
        slots.right.rx { pending() != 0 }.badge {
            pill
            warning
            node %= "x"
        }
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
                            exec {
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
                        console.dir(list)
                        exec {
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

            }


        }


    }.node,
    content = factory.scrollPane {
        cls {
            p1
            flexColumn
        }

        node.listenableList(
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
    }
    dl {
        cls.m1

        dt %= "Filename"
        dd %= file.name

        dt %= "Artist"
        dd %= { tag().fixedArtist().getOrDefault("<unknown>") }

        dt %= "Title"
        dd %= { tag().fixedTitle().getOrDefault("<unknown>") }

        dt %= "Size"
        dd %= "${file.size.groupThousands} bytes"

        dt %= "Duration"
        dd %= { tag().secs.initial().map { it.roundToInt().formatSecs }.getOrDefault("<unknown>") }
    }


}