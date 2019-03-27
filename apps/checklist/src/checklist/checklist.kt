package checklist

import commonfb.FbLinksFactory

fun main() {
    FbLinksFactory.start { Links(it) }
}