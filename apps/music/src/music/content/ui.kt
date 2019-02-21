package music.content

import bootstrap.*
import commonui.widget.*
import domx.*
import commonshr.*

fun UserUnknown.ui() = TopAndContent(
    topbar = null,
    content = factory.wraps.div {
        cls {
            flexGrow1
            dFlex
            flexColumn
            flexCenter()
        }
        div {
            cls {
                flexGrow1
                flexCenter()
            }
            div {
                cls {
                    spinnerBorder
                }
            }
        }
        insert.status {
            cls {
                flexFixedSize()
            }
            global
        }
    }.node

)