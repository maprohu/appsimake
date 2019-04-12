package index

import common.res
import commonfb.FbLinksFactory
import commonui.*
import commonshr.*
import commonui.widget.Body
import domx.*
import index.home.Home
import org.w3c.xhr.XMLHttpRequest
import styles.width125Em
import svgx.*
import kotlin.browser.document

fun main() {
    FbLinksFactory.start(
        Lib("index"),
        false
    ) { Links(it) }
}