package admin.index

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import commonui.widget.TopAndContent
import commonui.widget.factory
import kotlin.browser.document

fun Index.ui() = TopAndContent(
    topbar = factory.topbar {
        left.backButton
        title %= "Index - Admin"
    }.node,
    content = factory.scrollPane {
        pane {
            insert.listGroup {
                cls.m1
                item.listGroupButton {
                    text %= "About"
                    click {
                        about()
                    }
                }
            }
        }
    }.node
)

