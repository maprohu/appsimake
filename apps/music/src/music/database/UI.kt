package music.database

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import music.loggedin.deleteFromLocal
import music.loggedin.download
import music.loggedin.upload

fun Database.ui() = TopAndContent(
    topbar = factory.topbar {
        left.button {
            back
            click {
                path.loggedIn.back()
            }
        }
        title %= "Database"
        right.tasksUi()
        slots.right.slots.syncUi()
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
                    click { path.loggedIn.sync.sync() }
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
                bgfn: HasKillSetAndUIX.(ButtonGroup) -> Unit = {}
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

                            bgfn(this)

                            button {
                                p2
                                secondary
                                fa.list
                                click {
                                    showStatus(
                                        st,
                                        title,
                                        bgfn
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
            ) { bg ->
                bg.button {
                    p2
                    secondary
                    fa.download
                    rxEnabled {
                        toBeDownloaded.set.iterableRx().any { id ->
                            !path.boot.processOf(id).downloading()
                        }
                    }
                    click {
                        toBeDownloaded.set.forEach { id ->
                            path.loggedIn.download(id)
                        }
                    }
                }

            }
            statusPanel(
                toBeUploaded,
                "To Be Uploaded"
            ) { bg ->
                bg.button {
                    p2
                    secondary
                    fa.upload
                    rxEnabled {
                        toBeUploaded.set.iterableRx().any { id ->
                            !path.boot.processOf(id).uploading()
                        }
                    }
                    click {
                        toBeUploaded.set.forEach { id ->
                            path.loggedIn.upload(id)
                        }
                    }
                }
            }
            statusPanel(
                toBeDeleted,
                "To Be Deleted"
            ) { bg ->
                bg.button {
                    p2
                    secondary
                    fa.trashAlt
                    rxEnabled {
                        toBeDeleted.set.iterableRx().any { id ->
                            !path.boot.processOf(id).deletingFromLocal()
                        }
                    }
                    click {
                        toBeDeleted.set.forEach { id ->
                            path.loggedIn.deleteFromLocal(id)
                        }
                    }
                }

            }
            statusPanel(
                newInCloud,
                "New in Cloud"
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


