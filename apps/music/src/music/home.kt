package music

import bootstrap.*
import commonfb.LoggedInCtx
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import commonui.showClosable
import domx.*
import fontawesome.*
import indexeddb.clear
import indexeddb.put
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlin.browser.window

fun MusicCtx.home(
    panel: RootPanel,
    killables: Killables
) {
    panel.newRoot {
        fun redisplay() {
            panel.setRoot(this)
        }

        screenLayout(killables) {
            top {
                left {
                    faButton(Fa.bars) {
                        cls {
                            m1
                            btnSecondary
                        }
                        dataToggleDropdown()
                    }
                    div {
                        cls {
                            dropdownMenu
                        }
                        dropdownItemAnchor {
                            icon.cls.fa.database
                            text.innerText = "Database"
                            anchor {
                                clickEvent {
                                    showClosable(
                                        killables,
                                        { ks, cl -> database(panel.sub(), ks, cl) },
                                        ::redisplay
                                    )
                                }
                            }
                        }
                        dropdownItemAnchor {
                            icon.cls.fa.listOl
                            text.innerText = "Playlists"
                            anchor {
                                clickEvent {
                                    showClosable(
                                        killables,
                                        { ks, cl -> playlists(panel.sub(), ks, cl) },
                                        ::redisplay
                                    )
                                }
                            }
                        }
                    }
                }
                middleTitle {
                    innerText = fbCtx.appCtx.title
                }
            }

            main {
                rxText { appCtx.networkEffectiveType().toString() }.addedTo(killables)
            }
        }
    }


}