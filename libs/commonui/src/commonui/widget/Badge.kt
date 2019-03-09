package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import styles.scrollVertical
import kotlin.browser.document

abstract class AbstractBadge: ScreenWrap() {

    val primary by lazy {
        cls.badgePrimary
    }
    val secondary by lazy {
        cls.badgeSecondary
    }
    val info by lazy {
        cls.badgeInfo
    }
    val warning by lazy {
        cls.badgeWarning
    }
    val pill by lazy {
        cls.badgePill
    }


}

class Badge: AbstractBadge() {

    override val node = document.span {
        cls {
            badge
        }
    }

    val text = node

}

class BadgeAnchor: AbstractBadge() {

    override val node = document.a {
        cls {
            badge
        }
        href = "#"
    }

    val text = node

}

