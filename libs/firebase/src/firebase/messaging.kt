@file:JsQualifier("firebase.messaging")
package firebase.messaging

import firebase.Promise

external interface Messaging {

    fun usePublicVapidKey(key: String)

    fun requestPermission() : Promise<Unit>

}
