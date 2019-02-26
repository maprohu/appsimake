package music.database.usage

import bootstrap.m1
import bootstrap.p1
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.redoAlt
import fontawesome.syncAlt
import kotlin.math.roundToInt

fun Usage.ui() = TopAndContent(
    topbar = factory.topbar {
        left.button {
            back
            click {
                database.back()
            }
        }
        right.button {
            m1p2
            secondary
            fa.redoAlt
            click {
                refresh()
            }
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls {
                p1
            }
            with (boot.localSongs.storage) {
                dl {
                    cls.m1
                    dt %= "Type"
                    dd %= name
                    dt %= "Usage"
                    dd %= { usageInfoVar()?.let { ui -> ui.usage.toLong().groupThousands } ?: "<unknown>" }
                    dt %= "Quota"
                    dd %= { usageInfoVar()?.let { ui -> ui.quota.toLong().groupThousands } ?: "<unknown>" }
                    dt %= "Percent"
                    dd %= { usageInfoVar()?.let { ui -> "${((ui.usage.toDouble() / ui.quota.toDouble()) * 100).roundToInt()} %" } ?: "<unknown>" }
                }
            }
        }
    }.node
)