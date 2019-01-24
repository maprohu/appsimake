package music

import bootstrap.*
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import domx.*
import fontawesome.Fa
import fontawesome.play
import fontawesome.plus
import killable.Killables
import styles.scrollVertical

fun playlists(
    panel: RootPanel,
    killables: Killables,
    close: () -> Unit
) {
    panel.newRoot {
        screenLayout(killables) {
            top {
                backButton(close)
                middleTitle {
                    innerText = "Playlists"
                }

                right {
                    faButton(Fa.plus) {
                        cls {
                            m1
                            btnPrimary
                        }
                    }
                }

            }
            main {
                cls {
                    scrollVertical
                }
                div {
                    cls {
                        m1
                        listGroup
                    }
                    clickItemButtons {
                        text {
                            innerText = "All Local Songs"
                        }
                        buttons {
                            faButton(Fa.play) {
                                cls {
                                    btnOutlineSuccess
                                }


                            }
                        }

                    }

                }

            }
        }
    }
}


