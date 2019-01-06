package firebaseshr.firestore

import kotlin.js.Date

external interface Timestamp {

    var nanoseconds: Long
    var seconds: Long

    fun toDate() : Date
    fun toMillis() : Long

}

