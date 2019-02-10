package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import fontawesome.*
import org.w3c.dom.*
import kotlin.browser.document

class Hourglass(sp: Parent): ScreenWrap(sp) {
    override val node = document.div {
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
}
