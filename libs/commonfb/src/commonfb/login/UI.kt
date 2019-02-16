package commonfb.login

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import killable.KillSet
import org.w3c.dom.HTMLElement
import kotlin.browser.document

fun Login.ui() = TopAndContent(
    topbar = factory.topbar {
        alignItemsCenter
        left.button {
            m1p2
            secondary
            fa.chevronLeft
            click {
                this@ui.back()
            }
        }
        middle {
            h5 {
                cls.m1
                innerText = "Signing In"
            }
        }
    }.node,
    content = document.div {
        cls {
            p1
            flexGrow1
            column()
            alignItemsCenter
        }
        column {
            fun butt(faIcon: FaIcon, label: String, fn: Action): Button {
                return widget.insert.button {
                    click(fn)
                    primary
                    cls {
                        m1
                        p1
                        row()
                        alignItemsCenter
                    }
                    icon {
                        cls {
                            m1
                            fa(faIcon) {
                                fw
                            }
                        }
                    }

                    text {
                        cls {
                            m1
                        }
                        innerText = label
                    }
                }
            }
            butt(FaIcon.faBrands { google }, "Sign in with Google") { google() }
//                butt(FaIcon.fa { at }, "Sign in with email", Email)
            butt(FaIcon.fa { user }, "Continue as guest") { guest() }
        }

    }
)
