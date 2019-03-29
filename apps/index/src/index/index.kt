package index

import commonfb.FbLinksFactory
import commonui.*
import commonui.widget.Body
import index.home.Home

fun main() {
    FbLinksFactory.start(false) { Links(it) }
}