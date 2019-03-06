package checklist.view

import bootstrap.*
import rx.RxMutableList
import common.sorted
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*

class ItemOrder(
    val checked: Boolean,
    val name: String
): Comparable<ItemOrder> {
    override fun compareTo(other: ItemOrder) = compareValuesBy(
        this,
        other,
        { it.checked },
        { it.name }
    )
}

fun ViewChecklist.ui() = TopAndContent(
    topbar = factory.topbar {
        left.button {
            back
            click { loggedIn.redisplay() }
        }
        title %= { chklist.doc.name() }
        right.buttonGroup {
            cls.m1
            button {
                p2
                primary
                fa.pen
                click {
                    editChecklist()
                }
            }
            button {
                p2
                primary
                fa.eraser
                click {
                    docs.now.clear()
                }
            }
            insert.buttonGroup {
                button {
                    p2
                    primary
                    cls.dropdownToggle
                    node.dataToggleDropdown()
                }
                menu {
                    right
                    item {
                        node.cls.textDanger
                        fa.trashAlt
                        text %= "Delete"
                        click {
                            deleteChecklist()
                        }
                    }
                }
            }
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p1
            widget %= {
                factory.listGroup {
                    cls.m1
                    node.list(
                        docs().let { cl ->
                            console.dir(cl)
                            cl.items().let { items ->
                                RxMutableList(items)
                                    .sorted(kills) { i ->
                                        ItemOrder(
                                            i.checked(),
                                            i.name()
                                        )
                                    }
                                    .events().map { i ->
                                        factory.listGroupButton {
                                            cls {
                                                p1
                                                alignItemsCenter
                                            }
                                            middle {
                                                cls.m1
                                                this %= { i.name() }
                                            }

                                            left.insert.wraps.span {
                                                cls {
                                                    m1
                                                    fa {
                                                        fw
                                                    }
                                                    rxClass(Fa.check) { i.checked() }
                                                }
                                            }
                                            node.on("mousedown") {
                                                console.dir(it)
                                                cl.toggle(i)
                                            }
                                        }.node
                                    }
                            }
                        }
                    )
                }.node
            }
        }
    }.node
)
