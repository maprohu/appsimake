package buildtool

import bootkotlin.kotlinxHtmlJs
import bootkotlin.kotlinxStdlibJs


object kotlinxHtml : KotlinJsLib(kotlinxHtmlJs)

object jquery : JsDownload(
    "https://code.jquery.com/jquery-3.3.1.js"
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
    listOf(
        bootstrap,
        fontAwesome
    )
)


