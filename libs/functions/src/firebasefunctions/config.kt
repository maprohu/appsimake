package firebasefunctions.config

import firebaseadmin.app.AppOptions

// https://firebase.google.com/docs/reference/functions/functions.config.Config
external interface Config {

    val firebase : AppOptions

}

