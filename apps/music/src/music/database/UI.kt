package music.database

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import music.common.MusicApi
import music.loggedin.deleteFromLocal
import music.loggedin.download
import music.loggedin.upload

fun Database.ui() = TopAndContent(
    topbar = factory.topbar {
        left.button {
            back
            click {
                loggedIn.back()
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
                    click { loggedIn.sync.sync() }
                }
                item {
                    fa.list
                    text %= "Details"
                    click { details() }
                }
                item {
                    fa.tachometerAlt
                    text %= "Usage"
                    click { usage() }
                }
            }

        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p1

            fun statusPanel(
                status: Database.Status,
                title: String,
                bgfn: HasKillSetAndUIX.(ButtonGroup) -> Unit = {}
            ) {
                statusPanel(
                    insert,
                    this@ui,
                    status,
                    title,
                    bgfn
                )

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
                            !boot.processOf(id).downloading()
                        }
                    }
                    click {
                        toBeDownloaded.set.forEach { id ->
                            loggedIn.download(id)
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
                            !boot.processOf(id).uploading()
                        }
                    }
                    click {
                        toBeUploaded.set.forEach { id ->
                            loggedIn.upload(id)
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
                            !boot.processOf(id).deletingFromLocal()
                        }
                    }
                    click {
                        toBeDeleted.set.forEach { id ->
                            loggedIn.deleteFromLocal(id)
                        }
                    }
                }

            }
            statusPanel(
                newInCloud,
                "New in Cloud"
            )
        }

    }.node
)


suspend fun ForwardBase<TopAndContent>.showStatus(
    database: Database,
    st: Database.Status,
    title: String,
    bgfn: HasKillSetAndUIX.(ButtonGroup) -> Unit
) {
    forward %= music.status.Status(this, database, st, title, bgfn)
}
fun ForwardBase<TopAndContent>.statusPanel(
    factory: Factory,
    database: Database,
    st: Database.Status,
    title: String,
    bgfn: HasKillSetAndUIX.(ButtonGroup) -> Unit = {}
) {
    factory.wraps.div {
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
                            database,
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
