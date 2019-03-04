package checklist.view

import bootstrap.border
import commonshr.*
import commonui.widget.*
import domx.*
import kotlin.browser.document

fun ViewChecklist.ui() = TopAndContent(
    topbar = factory.topbar {
        left.button {
            back
            click { loggedIn.redisplay() }
        }
        title %= { checklist.doc.name() }
    }.node,
    content = factory.scrollPane {
        pane {
            insert.listGroup {
                slot.let { sl ->
                    rx {
                        checklist.doc.items.rxv().let { items ->
                            document.div {
                                cls.border
                            }
                        }
                    }.forEach {
                        sl %= it
                    }
                }
            }
        }

    }.node
)
