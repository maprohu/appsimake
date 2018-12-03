package buildtool

import bootkotlin.kotlinxHtmlJs
import bootkotlin.kotlinxStdlibJs

object firebaseMessagingServiceWorker {
    val public by task {

    }
}

object kotlinxHtml : KotlinJsLib(kotlinxHtmlJs)

object jquery : JsDownload(
    "https://code.jquery.com/jquery-3.3.1.js"
)

object firebaseJs : JsDownload(
    "https://www.gstatic.com/firebasejs/5.6.0/firebase.js"
)

object firebaseUiJs : JsDownload(
    "https://github.com/firebase/firebaseui-web/archive/v3.4.1.zip",
    "firebaseui-3.4.1.zip",
    "firebaseui-web-3.4.1/dist/firebaseui.js",
    "firebaseui-web-3.4.1/dist/firebaseui.css",
    listOf(
        firebaseJs
    )
)


object fontAwesome : JsDownload(
    "https://use.fontawesome.com/releases/v5.5.0/fontawesome-free-5.5.0-web.zip",
    ExtractInfo(
        cssPath = listOf("fontawesome-free-5.5.0-web/css/all.css")
    )
)

object bootstrapDist : JsDownload(
    "https://github.com/twbs/bootstrap/releases/download/v4.1.3/bootstrap-4.1.3-dist.zip",
    "js/bootstrap.bundle.js",
    "css/bootstrap.css",
    listOf(
        jquery
    )
)

object common : JsModule(
    "libs/common",
    listOf(
        kotlinxHtml
    )
)

object bootstrap : JsModule(
    "libs/bootstrap",
    listOf(
        common,
        bootstrapDist
    )
)

object testapp : JsApp(
    "apps/testapp",
    listOf(
        common
    )
)

object gymclock : JsApp(
    "apps/gymclock",
    css = listOf(
        FileRes("gymclock.css")
    ),
    deps = listOf(
        bootstrap
    )
)

object tictactoe : JsApp(
    "apps/tictactoe"
)

object firebase : JsModule(
    "libs/firebase",
    listOf(
        common,
        firebaseJs,
        firebaseUiJs
    )
)

object pullanappfb : JsModule(
    "libs/pullanappfb",
    listOf(
        firebase
    )
)

object chat : JsApp(
    "apps/chat",
    listOf(
        pullanappfb,
        bootstrap
    )
)

