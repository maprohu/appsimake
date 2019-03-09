package tasks.listtasks

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import rx.Var
import styles.*
import taskslib.Task
import kotlin.browser.document

fun ListTasks.ui(): TopAndContent {
    val statusFilter = Var<StatusFilter>(StatusFilter.Completed(false))

    val filter = document.div {
        cls {
            borderBottom
            flexFixedSize()
            p1
        }
        insert.grid {
            cls {
                bgLight
                border
                rounded
            }
            center
            alignItemsCenter
            2.columns
            node {
                // status
                div {
                    cls {
                        m1
                        justifySelfEnd
                    }
                    this %= "Status"
                }
                insert.select {
                    cls {
                        m1
                        justifySelfStart
                    }
                    StatusFilter.values.forEach { f ->
                        option {
                            value = f.key
                            this %= f.label
                        }
                    }
                    bind(
                        statusFilter.linked(
                            read = { it.key },
                            write = { StatusFilter.valueOf(it) }
                        )
                    )

                }

                // tags
                div {
                    cls {
                        m1
                        justifySelfEnd
                    }
                    this %= "Tags"
                }
                row {
                    cls {
                        m1
                        justifySelfStart
                        alignItemsCenter
                    }
                    div {
                        cls {
                            dFlex
                            flexWrap
                        }
                        widget %= {
                            document.div {
                                tags().forEach { id ->
                                    insert.badgeAnchor {
                                        cls {
                                            m1
                                            fontSize100
                                        }
                                        pill
                                        secondary
                                        text %= { loggedIn.tags.lookup.get(id)().name() }
                                        click {
                                            tags.transform { it - id }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    insert.button {
                        cls {
                            p1
                            ml1
                        }
                        primary
                        fa.ellipsisH
                        click {
                            selectTags()
                        }
                    }
                }
            }
        }
    }
    val filterVisible = Var(false)

    return TopAndContent(
        topbar = factory.topbar {
            backButton
            title %= "Search Task"
            tabs {
                tab {
                    icon.fa.filter
                    clickToggle
                    isActive.feedTo(filterVisible)
                }
            }
            right.button {
                m1p2
                primary
                fa.plus
                click {
                    newTask()
                }
            }
        }.node,
        content = document.column {
            cls {
                leftRightTopBottom0
            }
            widget %= { if (filterVisible()) filter else null }

            insert.scrollPane {
                cls {
                    bgLight
                }
                pane {
                    cls {
                        p1
                    }
                    widget %= rx {
                        factory.listGroup {
                            cls {
                                bgWhite
                            }
                            list(
                                loggedIn.tasksCollection.listEvents {
                                    setup(
                                        FilterValues(
                                            statusFilter(),
                                            tags()
                                        )
                                    )
                                    Task.title.asc
                                }.mapLive { t ->
                                    factory.listGroupButton {
                                        text %= { t().title() }
                                        click {
                                            t.view()
                                        }
                                    }.node
                                }
                            )
                        }.node
                    }
                }
            }.node
        }
    )
}