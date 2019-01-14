package tasks

import bootstrap.*
import common.*
import commonfb.scrollForm
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
    return document.div {
        cls {
            flexGrow1
            dFlex
            flexColumn
        }

        val clearFilter = Listeners()
        val filterInput = Var("")
        val isFiltered = Rx { filterInput().isNotBlank() }
        val tagNameSet = tagSource.tagNameSet.get(killables)
        val isNewTag = Rx { isFiltered() && filterInput() !in tagNameSet() }
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
                val tag = input {
                    cls {
                        formControl
                        widthAuto
                        placeholder = "filter or create tag..."
                    }
                    type = "text"
                    rxClass(Cls.borderWarning, isFiltered)
                    fun extract() {
                        filterInput.now = value
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
                                val v = tag.value
                                tag.value = ""
                                GlobalScope.launch {
                                    val tv = tagSource.byName(v)
                                    item.tags.current.add(tv.now.props.idOrFail)
                                    isBusy.now = false
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
                    val selected = Rx { tagId in item.tags.current().orEmpty() }.also { ks += it }

                    TagNode(
                        tag,
                        nrx,
                        selected,
                        document.listGroupItem {
                            cls {
                                dFlex
                                flexRow
                                py1
                                px2
                                alignItemsCenter
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
                                    if (selected.now) item.tags.current.remove(tagId)
                                    else item.tags.current.add(tagId)
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
                    input = filterInput,
                    filter = { name, filter ->
                        filterTag(name = name, filter = filter)
                    }
                ).build()
            }

            listGroup {
                cls {
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
