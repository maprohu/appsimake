package admin

import commonfb.FbLinksFactory

fun main() {
    FbLinksFactory.start(adminLib) { Links(it) }
}