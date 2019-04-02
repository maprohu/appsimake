package eventlog

import commonfb.FbLinksFactory
import commonshr.properties.TS
import commonshr.properties.ago
import kotlin.js.Date

fun main() {
    FbLinksFactory.start { Links(it) }
}