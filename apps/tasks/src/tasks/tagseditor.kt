package tasks

import bootstrap.*
import common.*
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import domx.*
import fontawesome.*
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import rx.*
import styles.scrollVertical
import styles.widthAuto
import taskslib.Tag
import taskslib.Task
import kotlin.browser.document

fun LoggedIn.tagsEditor(
    item: Task,
    killables: Killables
): HTMLDivElement {
    val tagsRx = Var(item.tags.current.now.orEmpty())
    tagsRx.forEachLater {
        item.tags.current.now = Some(it)
    }

    return tagsSelector(
        killables = killables,
        tags = tagsRx,
        create = true
    )
}

fun LoggedIn.selectTags(
    killables: Killables,
    panel: RootPanel,
    tags: Var<Set<String>>,
    close: (Boolean) -> Unit
) {
    panel.newRoot {
        screenLayout(killables) {
            top {
                left {
                    cls {
                        m1
                        btnGroup
                    }
                    faButton(Fa.check) {
                        cls {
                            btnSuccess
                        }
                        clickEvent {
                            close(true)
                        }
                    }
                    faButton(Fa.times) {
                        cls {
                            btnDanger
                        }
                        clickEvent {
                            close(false)
                        }
                    }
                }

                middleTitle {
                    innerText = "Select Tags"
                }
            }

            main {
                tagsSelector(
                    killables,
                    tags,
                    false
                ).also { appendChild(it) }
            }

        }
    }

}

fun LoggedIn.tagsSelector(
    killables: Killables,
    tags: Var<Set<String>>,
    create: Boolean
): HTMLDivElement {
    return document.div {
        cls {
            flexGrow1
            dFlex
            flexColumn
        }

        val clearFilter = Listeners()
//        val filterTextInward = Var("")
        val filterTextOutward = Var("")
        val isFiltered = Rx { filterTextOutward().isNotBlank() }
        val tagNameSet = tagSource.tagNameSet.get(killables)
        val isNewTag = Rx { isFiltered() && filterTextOutward() !in tagNameSet() }
        val isBusy = Var(false)
        val addTagEnabled = Rx { !isBusy() && isNewTag() }

        div {
            cls {
                p1
                borderBottom
                flexFixedSize()
            }
            div {
                cls {
                    inputGroup
                    widthAuto
                }
                input {
                    cls {
                        formControl
                        widthAuto
                        placeholder = if (create) "filter or create tag..." else "filter tags..."
                    }
                    type = "text"
                    rxClass(Cls.borderWarning, isFiltered)
                    fun extract() {
                        filterTextOutward.now = value
                    }

                    clearFilter += {
                        value = ""
                        extract()
                    }

                    inputEvent { extract() }
                }
                div {
                    cls.inputGroupAppend
                    button {
                        cls {
                            btn
                            btnOutlineSecondary
                            fa {
                                eraser
                            }
                        }
                        rxEnabled(isFiltered)
                        clickEvent {
                            clearFilter.fire()
                        }
                    }
                    if (create) {
                        button {
                            cls {
                                btn
                                btnOutlineSecondary
                            }
                            span {
                                cls {
                                    spinnerBorder
                                    spinnerBorderSm
                                }
                                rxDisplayed(isBusy)
                            }
                            span {
                                cls {
                                    fa {
                                        plus
                                    }
                                }
                                rxDisplayed { !isBusy() }
                            }
                            rxEnabled(addTagEnabled)
                            clickEvent {
                                if (addTagEnabled.now) {
                                    isBusy.now = true
                                    val v = filterTextOutward.now
                                    clearFilter.fire()
                                    GlobalScope.launch {
                                        val tv = tagSource.byName(v)
                                        tags.transform { ts -> ts + tv.now.props.idOrFail }
                                        isBusy.now = false
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }
        div {
            cls {
                flexGrow1
                scrollVertical
            }

            class TagNode(
                val tag: Tag,
                val nrx: RxIface<String>,
                val selected: RxIface<Boolean>,
                val node: Node
            )

            fun filterTag(name: String, filter: String): Boolean {
                return name.contains(filter, ignoreCase = true)
            }

            val list = MappedListenableListConfig(
                list = tagSource.listenableList,
                killables = killables,
                mapper = { tag, ks ->
                    val tagId = tag.props.idOrFail
                    val nrx = Rx { tag.name.initial().orEmpty() }.also { ks += it }
                    val selected = Rx { tagId in tags() }.also { ks += it }

                    fun click() {
                        if (selected.now) tags.transform { s -> s - tagId }
                        else tags.transform { s -> s + tagId }
                    }

                    TagNode(
                        tag,
                        nrx,
                        selected,
                        document.a {
                            cls {
                                listGroupItem
                                listGroupItemAction
                                dFlex
                                flexRow
                                py1
                                px2
                                alignItemsCenter
                            }
                            href = "#"
                            clickEvent {
                                click()
                            }
                            div {
                                cls {
                                    dFlex
                                    flexRow
                                    alignItemsCenter
                                    flexGrow1
                                }
                                span {
                                    cls {
                                        m1
                                        fa {
                                            fw
                                            rxClass(Fa.check, selected)
                                        }
                                    }
                                }
                                span {
                                    ks += rxText(nrx)
                                }
                            }
                            button {
                                cls {
                                    btn
                                    btnSecondary
                                    p1
                                    flexFixedSize()
                                    span {
                                        cls {
                                            fa {
                                                fw
                                                rxClass {
                                                    if (selected()) Fa.minus
                                                    else Fa.plus
                                                }
                                            }
                                        }
                                    }
                                }
                                clickEvent {
//                                    click()
                                }
                            }
                        }
                    )
                }
            ).build().let { nodes ->
                SortedListenableListConfig(
                    list = nodes,
                    killables = killables,
                    key = { item, _ -> item.nrx }
                ).build()
            }.let { sorted ->
                FilteredListenableListConfig(
                    list = sorted,
                    killables = killables,
                    filterKey = { item, _ -> item.nrx },
                    input = filterTextOutward,
                    filter = { name, filter ->
                        filterTag(name = name, filter = filter)
                    }
                ).build()
            }

            div {
                cls {
                    listGroup
                    listGroupFlush
                    borderBottom
                }
                listenableList(
                    list,
                    killables
                ) { t, _ ->
                    t.node
                }
            }


        }

    }

}
