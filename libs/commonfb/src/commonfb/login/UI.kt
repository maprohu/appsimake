package commonfb.login

import bootstrap.*
import commonfb.login.Bind
import commonui.NodeWrap
import commonui.faButton
import commonui.plusAssign
import commonui.topbar
import domx.*
import fontawesome.*
import killable.KillSet
import org.w3c.dom.HTMLElement
import kotlin.browser.document

class UI(
    kills: KillSet,
    bind: Bind
): NodeWrap(
    with(bind) {
        document.column {
            cls {
                flexGrow1
            }
            topbar {
                cls {
                    alignItemsCenter
                }
                faButton(Fa.chevronLeft) {
                    cls {
                        m1
                        btnSecondary
                    }
                    clickEvent {
                        inbox += Back
                    }
                }
                h5 {
                    cls {
                        m1
                    }
                    innerText = "Please Sign In"
                }
            }
            column {
                cls {
                    flexGrow1
                    alignItemsCenter
                    p1
                }
                column {
                    fun butt(faIcon: FaIcon, text: String, msg: Any): HTMLElement {
                        return button {
                            cls {
                                btn
                                btnPrimary
                                m1
                                textLeft
                            }
                            span {
                                cls {
                                    fa(faIcon) {
                                        fw
                                    }
                                    mr2
                                }
                            }
                            span {
                                innerText = text
                            }
                            clickEvent {
                                inbox += msg
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
)