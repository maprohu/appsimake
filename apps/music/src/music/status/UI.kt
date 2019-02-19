package music.status

import bootstrap.*
import common.removeFromParent
import commonfb.CommonFbApi
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import killable.HasKillSet
import killable.KillSet
import kotlinx.coroutines.launch
import music.common.songUi
import kotlin.browser.document

fun Status.ui() = TopAndContent(
    topbar = factory.topbar {
        left.button {
            back
            click {
                path.database.back()
            }
        }
        title %= this@ui.title
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p1

            launch {
                status.items.process(kills) { id ->
                    launch {
                        val api: CommonFbApi = object : CommonFbApi by this@ui {
                            override val kills = this@process.kills
                        }
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
                                fa.upload
                                secondary
                                visible {
                                    path.boot.localSongs.set.containsRx(id)() &&
                                            !path.loggedIn.uploadedSet.containsRx(id)()
                                }
                                process.uploading.forEach { node.disabled = it }
                                click {
                                    path.database.upload(id)
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


