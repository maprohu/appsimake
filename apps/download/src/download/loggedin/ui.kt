package download.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import download.DownloadItem
import download.DownloadProcess
import fontawesome.*
import styles.widthAuto
import kotlin.browser.document

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        left.dropdown {
            bars
            menu {
                item {
                    icon.fa.signOutAlt
                    text %= "Sign Out"
                    click {
                        home.signOut()
                    }
                }
            }
        }
        title %= "Download"
    }.node,
    content = factory.wraps.div {
        cls {
            column()
        }
        form {
            cls.m1
            resetForm = { reset() }
            cls {
                flexFixedSize()
                column()
            }
            div {
                cls {
                    inputGroup
                    widthAuto
                    m1
                }
                insert.input {
                    node {
                        type = "url"
                        placeholder = "paste url here..."
                    }
                    urlValue = { node.value }
                }
                div {
                    cls {
                        inputGroupAppend
                    }
                    insert.button {
                        node.type = "submit"
                        cls {
                            btnOutlineSecondary
                            fa.plus
                        }
                    }
                }
            }
            button {
                type = "submit"
                hidden = true
            }
            onsubmit = {
                uix {
                    addUrl()
                }
                it.preventDefault()
            }
        }
        insert.scrollPane {
            cls.borderTop
            pane {
                cls {
                    p1
                }
                h6 {
                    cls.m1
                    this %= "New"
                }

                insert.listGroup {
                    cls.m1
                    node.list(
                        items.listEvents {
//                            DownloadItem.ts.desc
                        }.mapLive { i ->
                            document.row {
                                cls {
                                    listGroupItem
                                    p1
                                }
                                column {
                                    cls {
                                        flexGrow1
                                        alignSelfCenter
                                    }
                                    div {
                                        this %= { i().url() }
                                    }
                                    div {
                                        cls.fontItalic
                                        this %= { i().name() }
                                    }
                                }
                                insert.buttonGroup {
                                    cls {
                                        flexFixedSize()
                                        m1
                                    }
                                    button {
                                        cls.p2
                                        secondary
                                        fa.trashAlt
                                        click {
                                            i.delete()
                                        }
                                    }
                                }
                            }
                        }
                    )
                }

                h6 {
                    cls.m1
                    this %= "Started"
                }

                insert.listGroup {
                    cls.m1
                    node.list(
                        process.listEvents {
                            DownloadProcess.ts.desc
                        }.mapLive { i ->
                            document.row {
                                cls {
                                    listGroupItem
                                    p1
                                }
                                div {
                                    cls {
                                        m1
                                        flexGrow1
                                        alignSelfCenter
                                    }
                                    this %= { i().title() }
                                }
                                div {
                                    cls {
                                        m1
                                        flexFixedSize()
                                        alignSelfCenter
                                    }
                                    this %= { i().progress().toString() }
                                }
                                insert.buttonGroup {
                                    cls {
                                        flexFixedSize()
                                        m1
                                    }
                                    button {
                                        cls.p2
                                        secondary
                                        fa.trashAlt
                                        click {
                                            i.delete()
                                        }
                                    }
                                }
                            }
                        }
                    )
                }
            }
        }

    }.node
)