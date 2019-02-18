package music.database

import bootstrap.border
import bootstrap.m1
import bootstrap.p1
import bootstrap.rounded
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import killable.KillSet
import kotlin.browser.document

fun Database.ui() = TopAndContent(
    topbar = factory.topbar {
        left.button {
            back
            click {
                path.loggedIn.back()
            }
        }
        title %= "Database"
        right.wraps.span {
            visible { path.loggedIn.syncing() }
            cls {
               m1
               fa {
                   fw
                   syncAlt
                   spin
               }
            }
        }
        right.dropdown {
            bars
            right
            menu {
                item {
                    fa.fileImport
                    text %= "Import MP3s"
                    click { import() }
                }
                item {
                    fa.syncAlt
                    text %= "Synchronize"
                    click { path.loggedIn.sync() }
                }
            }

        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p1
            fun statusPanel(
                st: Database.Status,
                title: String
            ) {
                insert.wraps.div {
                    cls {
                        m1
                        p1
                        border
                        rounded
                    }
                    h6 {
                        cls.m1
                        this %= title
                    }
                    dl {
                        cls.m1
                        dt %= "Songs"
                        dd %= { st.set.sizeRx().groupThousands }
                        dt %= "Bytes"
                        dd %= { st.size().groupThousands }
                        dt %= "Duration"
                        dd %= { st.duration().toInt().formatSecs }
                    }
                }

            }

            statusPanel(
                localSongIds,
                "Local Songs"
            )
            statusPanel(
                toBeDeleted,
                "To Be Deleted"
            )
        }

    }.node
)


