package store

import commonfb.FbLinksFactory

fun main() {
    FbLinksFactory.start(storeLib) { Links(it) }
}