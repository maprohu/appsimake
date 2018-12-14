@file:JsQualifier("firebase.messaging")
package firebase.messaging

import kotlin.js.Promise

external interface Messaging {

    fun usePublicVapidKey(key: String)

    fun requestPermission() : Promise<Unit>

}
