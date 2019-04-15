package checklist

import commonfb.FbLinksFactory

fun main() {
    FbLinksFactory.start(checklistLib) { Links(it) }
}