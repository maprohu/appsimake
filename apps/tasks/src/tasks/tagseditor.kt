package tasks

import bootstrap.*
import common.SortedListenableListConfig
import commonfb.scrollForm
import domx.*
import fontawesome.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLDivElement
import rx.Rx
import rx.Var
import rx.add
import styles.scrollVertical
import styles.widthAuto
import taskslib.Task
import kotlin.browser.document

fun LoggedIn.tagsEditor(
    item: Task
): HTMLDivElement {
    return document.div {
        cls {
            flexGrow1
            dFlex
            flexColumn
        }

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
                val isBusy = Var(false)
                val tag = input {
                    cls {
                        formControl
                        widthAuto
                        placeholder = "filter or create tag..."
                    }
                    type = "text"
                }
                div {
                    cls.inputGroupAppend
                    button {
                        cls {
                            btn
                            btnOutlineSecondary
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
                        }
                        clickEvent {
                            if (!isBusy.now) {
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

            val list = SortedListenableListConfig(
                list = tagSource.listenableList,
                killables = killables,
                key = { item, ks ->
                    Rx { item.name.initial().getOrDefault("") }.also { ks += it }
                }
            ).build()


            listenableList(
                list,
                killables
            ) { t, ks ->
                li {
                    ks += rxTextOrEmpty { t.name.initial() }
                }
            }

        }

    }

}
