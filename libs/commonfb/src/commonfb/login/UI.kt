package commonfb.login

import bootstrap.*
import commonfb.login.Bind
import commonshr.invoke
import commonui.*
import domx.*
import fontawesome.*
import killable.KillSet
import killable.remAssign
import org.w3c.dom.HTMLElement
import kotlin.browser.document

fun UI(
    kills: KillSet,
    panel: Slot,
    bind: Bind
) = ui(panel, bind) {
    with(bind) {
        screen {
            topbar {
                alignItemsCenter
                left.button(Back) {
                    m1p2
                    secondary
                    fa.chevronLeft
                }
                middle {
                    cls {
                        m1
                    }
                    h5 {
                        innerText = "Signing In"
                    }
                }
            }
            main.div {
                cls {
                    p1
                    flexGrow1
                    flexColumn()
                    alignItemsCenter
                }
                column {
                    fun butt(faIcon: FaIcon, label: String, msg: Any): Button {
                        return widget.factory.button(msg) {
                            primary
                            cls {
                                m1
                                p1
                                flexRow()
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
                    butt(FaIcon.faBrands { google }, "Sign in with Google", Google)
//                butt(FaIcon.fa { at }, "Sign in with email", Email)
                    butt(FaIcon.fa { user }, "Continue as guest", Guest)
                }
            }
        }
    }
}
