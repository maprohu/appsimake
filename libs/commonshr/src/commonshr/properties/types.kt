package commonshr.properties

import kotlin.js.Date
import kotlin.math.floor
import kotlin.math.round

sealed class TS {
    class Value(
        val date: Date
    ): TS()
    object Server : TS()
    object Null: TS()


}

class Ago(

)
const val DaysInYear = 365.25

fun TS.ago(ref: Date = Date(Date.now()), def: Ago = Ago()) = buildString {
    when (this@ago) {
        is TS.Value -> {
            val diff = ref.getTime() - date.getTime()

            val seconds = floor(diff / 1000.0)

            val units = listOf(
                60.0 to "minute",
                60.0 to "hour",
                24.0 to "day",
                (DaysInYear / 12.0) to "month",
                12.0 to "year"
            )

            fun out(unit: Double, sn: String) {
                if (unit > 0) {
                    append("$unit $sn")
                    if (unit > 1) append('s')
                    append(' ')
                }
            }

            fun unit(idx: Int, count: Double, sn: String) {
                val (mul, sn2) = units[idx]
                val divCount = floor(count / mul)
                val rem = round(count - (divCount * mul))


                if (divCount > 0.0) {
                    if (idx == units.lastIndex) {
                        out(divCount, sn2)
                    } else {
                        unit(idx+1, divCount, sn2)
                    }
                }

                out(rem, sn)
            }
            if (seconds < 1.0) {
                append("just now")
            } else {
                unit(0, seconds, "second")
                append("ago")
            }

        }
        else -> {
            append("<none>")
        }
    }
}

