package music.database

import bootstrap.*
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
                title: String,
                bgfn: ButtonGroup.(() -> Set<String>) -> Unit = {}
            ) {
                insert.wraps.div {
                    cls {
                        m1
                        p1
                        border
                        rounded
                        column()
                    }
                    h6 {
                        cls.m1
                        this %= title
                    }
                    dl {
                        cls.m1
                        dt %= "Songs"
                        dd %= { st.count().groupThousands }
                        dt %= "Bytes"
                        dd %= { st.size().groupThousands }
                        dt %= "Duration"
                        dd %= { st.duration().toInt().formatSecs }
                    }
                    div {
                        cls {
                            row()
                            justifyContentEnd
                        }
                        insert.buttonGroup {
                            cls.m1

                            bgfn { st.set.toSet() }

                            button {
                                p2
                                secondary
                                fa.list
                                click {
                                    showStatus(
                                        st,
                                        title
                                    )
                                }
                            }
                        }
                    }
                }

            }

            statusPanel(
                toBeDownloaded,
                "To Be Downloaded"
            )
            statusPanel(
                toBeUploaded,
                "To Be Uploaded"
            )
            statusPanel(
                toBeDeleted,
                "To Be Deleted"
            )
            statusPanel(
                localSongIds,
                "Local Songs"
            )
            statusPanel(
                new,
                "New"
            )
            statusPanel(
                like,
                "Like"
            )
            statusPanel(
                dontLike,
                "Don't Like"
            )
            statusPanel(
                cloud,
                "Cloud"
            )
            statusPanel(
                uploading,
                "Uploading"
            )
        }

    }.node
)


