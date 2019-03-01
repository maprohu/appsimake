package firebaseshr.firestore

import kotlin.js.Date

external interface Timestamp {

    var nanoseconds: Number
    var seconds: Number

    fun toDate() : Date
    fun toMillis() : Number

}

