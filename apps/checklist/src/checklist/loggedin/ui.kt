package checklist.home

import bootstrap.p2
import checklist.loggedin.LoggedIn
import commonshr.invoke
import commonui.widget.TopAndContent
import commonui.widget.factory
import commonui.widget.insert
import domx.invoke
import domx.remAssign
import fontawesome.plus

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Checklists"
        right.button {
            m1p2
            fa.plus
            primary
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p2
        }
    }.node
)