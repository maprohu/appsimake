//@file:JsModule("firebase-admin")
//@file:JsQualifier("messaging")
//// https://firebase.google.com/docs/reference/admin/node/admin.messaging
package firebaseadmin.messaging

import kotlin.js.Promise

// https://firebase.google.com/docs/reference/admin/node/admin.messaging.Messaging
external interface Messaging {

    // https://firebase.google.com/docs/reference/admin/node/admin.messaging.Messaging#send
    fun send(msg: Message): Promise<String>
}

// https://firebase.google.com/docs/reference/admin/node/admin.messaging.Message
external interface Message {

    // https://firebase.google.com/docs/reference/admin/node/admin.messaging.Message#data
    var data: dynamic

    // https://firebase.google.com/docs/reference/admin/node/admin.messaging.Message#token
    var token: String

    // https://firebase.google.com/docs/reference/admin/node/admin.messaging.Message#webpush
    var webpush: WebpushConfig

}

// https://firebase.google.com/docs/reference/admin/node/admin.messaging.WebpushConfig
external interface WebpushConfig {
    var data: dynamic
    var notification: WebpushNotification
}

// https://firebase.google.com/docs/reference/admin/node/admin.messaging.WebpushNotification
external interface WebpushNotification {

    // https://firebase.google.com/docs/reference/admin/node/admin.messaging.WebpushNotification#body
    var body: String

}