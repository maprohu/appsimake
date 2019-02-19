package music.status

import bootstrap.*
import common.removeFromParent
import commonfb.CommonFbApi
import commonfb.fbapi
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import killable.HasKillSet
import killable.KillSet
import kotlinx.coroutines.launch
import music.common.songUi
import music.loggedin.deleteFromCloud
import music.loggedin.deleteFromLocal
import music.loggedin.download
import music.loggedin.upload
import kotlin.browser.document

fun Status.ui() = TopAndContent(
    topbar = factory.topbar {
        left.button {
            back
            click {
                path.database.back()
            }
        }
        right.tasksUi()
        slots.right.slots.syncUi()
        right.buttonGroup {
            m1
            bgfn(this)
        }
        title %= this@ui.title
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p1

            launch {
                status.items.process(kills) { id ->
                    launch {
                        val api = (this@ui + this@process).fbapi
                        val node = api.songUi(
                            id,
                            null,
                            {
                                if (path.boot.localSongs.set.containsRx(id)()) {
                                    { path.boot.localSongs.load(id) }
                                } else {
                                    null
                                }
                            },
                            path.loggedIn
                        ) {
                            val process = path.boot.processOf(id)

                            button {
                                p2
                                fa.download
                                secondary
                                visible {
                                    !path.boot.localSongs.set.containsRx(id)() &&
                                            path.loggedIn.storageIds.containsRx(id)()
                                }
                                process.downloading.forEach { node.disabled = it }
                                click {
                                    path.loggedIn.download(id)
                                }
                            }
                            button {
                                p2
                                fa.upload
                                secondary
                                visible {
                                    path.boot.localSongs.set.containsRx(id)() &&
                                            !path.loggedIn.storageIds.containsRx(id)()
                                }
                                process.uploading.forEach { node.disabled = it }
                                click {
                                    path.loggedIn.upload(id)
                                }
                            }
                            button {
                                p2
                                fa.trashAlt
                                danger
                                visible {
                                    path.boot.localSongs.set.containsRx(id)()
                                }
                                process.deletingFromLocal.forEach { node.disabled = it }
                                click {
                                    path.loggedIn.deleteFromLocal(id)
                                }
                            }
                            button {
                                p2
                                fa.pooStorm
                                danger
                                visible {
                                    path.loggedIn.storageIds.containsRx(id)()
                                }
                                process.deletingFromCloud.forEach { node.disabled = it }
                                click {
                                    path.loggedIn.deleteFromCloud(id)
                                }
                            }

                        }

                        appendChild(node)
                        kills += {
                            node.removeFromParent()
                        }
                    }
                }
            }
        }
    }.node
)


