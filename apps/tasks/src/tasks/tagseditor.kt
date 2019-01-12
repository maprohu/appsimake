package tasks

import bootstrap.dFlex
import bootstrap.flexColumn
import bootstrap.flexFixedSize
import bootstrap.flexGrow1
import commonfb.scrollForm
import domx.*
import styles.scrollVertical
import kotlin.browser.document

fun LoggedIn.tagseditor() {
    document.div {
        cls {
            flexGrow1
            dFlex
            flexColumn
        }

        div {
            cls {
                flexFixedSize()
            }
            innerText = "filter"
        }
        div {
            cls {
                flexGrow1
                scrollVertical
            }

        }
        scrollForm {  }

    }

}
