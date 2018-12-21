@file:JsModule("firebase-admin")
// https://firebase.google.com/docs/reference/admin/node/admin
package admin

import admin.app.App
import admin.messaging.Messaging

// https://firebase.google.com/docs/reference/admin/node/admin.messaging#messaging
external fun messaging(app: App = definedExternally) : Messaging