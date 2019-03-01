package commonshr.properties

import kotlin.js.Date

sealed class TS {
    class Value(
        val date: Date
    ): TS()
    object Server : TS()
}

