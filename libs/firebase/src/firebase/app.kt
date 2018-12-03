@file:JsQualifier("firebase.app")
package firebase.app

import firebase.AppOptions
import firebase.auth.Auth

external interface App {
    val options: AppOptions
    fun auth(): Auth
}



