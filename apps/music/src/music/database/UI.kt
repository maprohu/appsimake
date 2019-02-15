package music.database

import bootstrap.m1
import commonshr.*
import commonui.widget.*
import domx.div
import domx.h5
import domx.invoke
import domx.remAssign
import fontawesome.chevronLeft
import fontawesome.fileImport
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
        right.dropdown {
            bars
            right
            menu {
                item {
                    fa.fileImport
                    text %= "Import MP3s"
                    click { import() }
                }
            }
        }
    }.node,
    content = null
)


