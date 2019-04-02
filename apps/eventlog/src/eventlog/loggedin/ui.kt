package eventlog.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import eventlog.EventType
import fontawesome.*

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Event Log"
        left.dropdown {
            bars
            menu {
                signOut {
                    signOut()
                }
            }
        }
        right.button {
            m1p2
            fa.plus
            primary
            click {
                newEventType()
            }
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls {
                p1
                column()
            }
            list(
                eventTypes
                    .listEvents { EventType.ts.desc }
                    .mapLive { cl ->
                        factory.buttonGroup {
                            button {
                                cls {
                                    row()
                                }
                                primary
                                text {
                                    cls {
                                        flexGrow1
                                    }
                                    this %= { cl().name() }
                                }
                                click {
                                    recorOccurrence(cl)
                                }
                            }
                            dropdownSplit {
                                cls {
                                    flexFixedSize()
                                }
                                primary
                                menu {
                                    right
                                    item {
                                        text %= "Edit"
                                        click {
                                            editEventType(cl)
                                        }
                                    }
                                }
                            }
                        }.node
                    }
            )
        }
    }.node
)