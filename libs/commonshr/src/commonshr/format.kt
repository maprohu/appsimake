package commonshr

import kotlin.math.floor

fun String.groups(size: Int = 3, separator: String = ",") =
    toList().reversed().chunked(size) { String(it.reversed().toCharArray()) }.reversed().joinToString(separator)

val Int.groupThousands: String get() = toString().groups(3)
val Long.groupThousands: String get() = toString().groups(3)

val Int.formatSecs: String get() {
    val mins = this / 60.0
    val minPart = floor(mins)
    val secPart = mins - minPart
    val secString = ((secPart * 60).toInt() + 100).toString().substring(1)
    val minString = minPart.toInt().toString()

    return "$minString:$secString"
}
