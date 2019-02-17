package music.database

import bootstrap.m1
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
    content = null
)


