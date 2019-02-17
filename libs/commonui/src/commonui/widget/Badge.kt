package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import styles.scrollVertical
import kotlin.browser.document

class Badge: ScreenWrap() {

    override val node = document.span {
        cls {
            badge
        }
    }

    val primary by lazy {
        cls.badgePrimary
    }
    val warning by lazy {
        cls.badgeWarning
    }
    val pill by lazy {
        cls.badgePill
    }

}

