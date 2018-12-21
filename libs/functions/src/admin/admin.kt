@file:JsModule("firebase-admin")
// https://firebase.google.com/docs/reference/admin/node/admin
package admin

import admin.app.App
import admin.app.AppOptions
import admin.messaging.Messaging

// https://firebase.google.com/docs/reference/admin/node/admin.messaging#messaging
external fun messaging(app: App = definedExternally) : Messaging

// https://firebase.google.com/docs/reference/admin/node/admin#.initializeApp
external fun initializeApp(
    options: AppOptions = definedExternally,
    name: String = definedExternally
): App