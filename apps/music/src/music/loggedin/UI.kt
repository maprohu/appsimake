package music.loggedin

import bootstrap.flexGrow1
import bootstrap.m1
import commonui.usericon.userIcon
import commonshr.*
import commonui.widget.*
import domx.invoke
import domx.remAssign
import fontawesome.*

fun LoggedIn.ui() = TopAndContent(
    topbar = Factory().topbar {
        left.dropdown {
            button {
                m1p2
                secondary
                fa.bars
            }
            menu {
                item {
                    fa.database
                    text %= "Database"
                    click {
                        database()
                    }

                }
                divider
                item {
                    fa.signOutAlt
                    text %= "Sign Out"
                    click {
                        signOut()
                    }
                }
            }
        }
        title %= "Music"
        slots.right.slots.syncUi()
        right.userIcon(kills, boot.userIcon).apply {
            node {
                cls.m1
            }
        }
    }.node,
    content = factory.status {
        cls.flexGrow1
        global
    }.node
)

fun HasKillSetAndUIX.syncUi(
    holes: SlotHoles,
    loggedIn: LoggedIn
) {
    holes.slot.insert.wraps.span {
        visible { loggedIn.sync.syncing() }
        cls {
            m1
            fa {
                fw
                syncAlt
                spin
            }
        }
    }
    holes.slot.insert.button {
        visible {
            !loggedIn.sync.syncing() &&
                    loggedIn.sync.pendingWrites.isNotEmptyRx()
        }
        m1p2
        fa.syncAlt
        warning
        click {
            loggedIn.sync.sync()
        }
    }

}