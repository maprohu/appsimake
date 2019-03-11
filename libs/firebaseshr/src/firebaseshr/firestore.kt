package firebaseshr.firestore

import kotlin.js.Date

// https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/Timestamp
external interface Timestamp {

    var nanoseconds: Number
    var seconds: Number

    fun toDate() : Date
    fun toMillis() : Number

}

