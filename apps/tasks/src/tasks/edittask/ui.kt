package tasks.edittask

import bootstrap.*
import common.Listeners
import commonshr.*
import commonui.editing.required
import commonui.editing.saveDeleteButton
import commonui.widget.*
import domx.*
import fontawesome.*
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import rx.Var
import rx.incremented
import styles.*
import tasks.loggedin.LoggedIn
import taskslib.Note
import taskslib.Task
import kotlin.browser.document


fun EditTask.ui() = editTaskUi(editing.current) {
    slots.left.backSaveDiscard
    title %= "Edit Task"
    right.saveDeleteButton
}

fun EditTaskLike.editTaskUi(
    item: Task,
    topbarCustomizer: Topbar.() -> Unit
): TopAndContent {

    val mainPage = factory.scrollPane {
        pane {
            cls.p1
            insert.formGroup {
                label %= "Title"
                input {
                    bind(item.title).required()
                }
            }
            insert.formGroup {
                label %= "Text"
                textArea {
                    node.rows = 5
                    bind(item.text)
                }
            }
            insert.formGroup {
                label %= "Status"
                select {
                    bind(item.status)
                }
            }
        }
    }.node

    val tagsPage = document.column {
        val filter = Var("")
        val visibleCount = Var(0)
        val clearFilter = Listeners()
        val canCreate = rx { filter().isNotBlank() && filter() !in loggedIn.tagNameSet() }

        fun create() {
            if (canCreate.now) {
                loggedIn.createTag(filter.now).idOrFail.let { id ->
                    item.tags.rxv.transform { it + id }
                }
                clearFilter.fire()
            }
        }
        cls {
            flexGrow1
        }
        insert.form {
            onsubmit { create() }
            cls {
                p1
                borderBottom
            }
            insert.inputGroup {
                input {
                    node {
                        placeholder = "filter or create tag..."
                    }
                    bind(filter)
                    clearFilter += {
                        value = ""
                        filter %= ""
                    }
                }
                appendButton {
                    outlineSecondary
                    fa.eraser
                    enabled { filter().isNotBlank() }
                    click {
                        clearFilter.fire()
                    }
                }
                appendButton {
                    outlineSecondary
                    fa.plus
                    enabled { canCreate() }
                    click { create() }
                }
            }
        }
        insert.scrollPane {
            cls.bgLight
            pane {
                cls {
                    p1
                }
                insert.listGroup {
                    list(
                        loggedIn.tags.list.events()
                            .filter { it().name().startsWith(filter()) }
                            .mapLive { e ->
                                visibleCount.incremented()
                                val id = e.idOrFail
                                val contains = rx { id in item.tags() }
                                factory.listGroupButton {
                                    left.insert.wraps.div {
                                        cls {
                                            alignSelfCenter
                                            m1
                                            fa.fw
                                            rxClass(Fa.check) { contains() }
                                        }
                                    }
                                    text %= { e().name() }
                                    click {
                                        if (contains.now) {
                                            item.tags.rxv.transform { it - id }
                                        } else {
                                            item.tags.rxv.transform { it + id }
                                        }
                                    }
                                }.node
                            }
                    )
                }

            }
        }
    }

    val active = Var<HTMLElement>(mainPage)
    return TopAndContent(
        topbar = factory.topbar {
            topbarCustomizer()
            tabs {
                tab {
                    clickActivate
                    icon.fa.list
                    activate()
                    onActivate += { active %= mainPage }
                }
                tab {
                    clickActivate
                    icon.fa.tags
                    onActivate += { active %= tagsPage }
                }
            }
        }.node,
        content = document.column {
            cls.leftRightTopBottom0
            widget %= { active() }
        }
    )
}