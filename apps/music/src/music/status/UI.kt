package music.status

import bootstrap.*
import common.removeFromParent
import commonfb.fbapi
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import kotlinx.coroutines.launch
import music.common.songUi
import music.loggedin.deleteFromCloud
import music.loggedin.deleteFromLocal
import music.loggedin.download
import music.loggedin.upload

fun Status.ui() = TopAndContent(
    topbar = factory.topbar {
        left.backButton
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
                stat.items.process(kills) { id ->
                    launch(this@ui.coroutineContext) {
                        val api = (this@ui + this@process).fbapi
                        val node = api.songUi(
                            id,
                            null,
                            {
                                if (boot.localSongs.set.containsRx(id)()) {
                                    { boot.localSongs.load(id) }
                                } else {
                                    null
                                }
                            },
                            loggedIn
                        ) {
                            val process = boot.processOf(id)

                            button {
                                p2
                                fa.download
                                secondary
                                visible {
                                    !boot.localSongs.set.containsRx(id)() &&
                                            loggedIn.storageIds.containsRx(id)()
                                }
                                process.downloading.forEach { node.disabled = it }
                                click {
                                    loggedIn.download(id)
                                }
                            }
                            button {
                                p2
                                fa.upload
                                secondary
                                visible {
                                    boot.localSongs.set.containsRx(id)() &&
                                            !loggedIn.storageIds.containsRx(id)()
                                }
                                process.uploading.forEach { node.disabled = it }
                                click {
                                    loggedIn.upload(id)
                                }
                            }
                            button {
                                p2
                                fa.trashAlt
                                danger
                                visible {
                                    boot.localSongs.set.containsRx(id)()
                                }
                                process.deletingFromLocal.forEach { node.disabled = it }
                                click {
                                    loggedIn.deleteFromLocal(id)
                                }
                            }
                            button {
                                p2
                                fa.pooStorm
                                danger
                                visible {
                                    loggedIn.storageIds.containsRx(id)()
                                }
                                process.deletingFromCloud.forEach { node.disabled = it }
                                click {
                                    loggedIn.deleteFromCloud(id)
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


