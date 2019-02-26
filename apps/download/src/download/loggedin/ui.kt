package download.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import styles.widthAuto

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
            p1
        }
        form {
            resetForm = { reset() }
            cls {
                flexFixedSize()
                column()
            }
            div {
                cls {
                    inputGroup
                    widthAuto
                }
                insert.input {
                    node {
                        type = "url"
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
        }

    }.node
)